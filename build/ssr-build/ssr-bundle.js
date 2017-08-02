module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // identity function for calling harmony imports with the correct context
  /******/
  /******/ /******/ __webpack_require__.i = function(value) {
    return value;
  }; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "/"; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ /***/ 0: function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__("JkW7");

      /***/
    },

    /***/ /***/ "2368": function(module, exports, __webpack_require__) {
      "use strict";
      /*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

      module.exports = function isObject(val) {
        return (
          val != null && typeof val === "object" && Array.isArray(val) === false
        );
      };

      /***/
    },

    /***/ /***/ "2DKW": function(module, exports, __webpack_require__) {
      "use strict";
      /**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

      var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        mixins: true,
        propTypes: true,
        type: true
      };

      var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        arguments: true,
        arity: true
      };

      var isGetOwnPropertySymbolsAvailable =
        typeof Object.getOwnPropertySymbols === "function";

      module.exports = function hoistNonReactStatics(
        targetComponent,
        sourceComponent,
        customStatics
      ) {
        if (typeof sourceComponent !== "string") {
          // don't hoist over string (html) components
          var keys = Object.getOwnPropertyNames(sourceComponent);

          /* istanbul ignore else */
          if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
          }

          for (var i = 0; i < keys.length; ++i) {
            if (
              !REACT_STATICS[keys[i]] &&
              !KNOWN_STATICS[keys[i]] &&
              (!customStatics || !customStatics[keys[i]])
            ) {
              try {
                targetComponent[keys[i]] = sourceComponent[keys[i]];
              } catch (error) {}
            }
          }
        }

        return targetComponent;
      };

      /***/
    },

    /***/ /***/ "5D9O": function(module, exports, __webpack_require__) {
      /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

      if (false) {
        var REACT_ELEMENT_TYPE =
          (typeof Symbol === "function" &&
            Symbol.for &&
            Symbol.for("react.element")) ||
          0xeac7;

        var isValidElement = function isValidElement(object) {
          return (
            typeof object === "object" &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        };

        // By explicitly using `prop-types` you are opting into new development behavior.
        // http://fb.me/prop-types-in-prod
        var throwOnDirectAccess = true;
        module.exports = require("./factoryWithTypeCheckers")(
          isValidElement,
          throwOnDirectAccess
        );
      } else {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        module.exports = __webpack_require__("wVGV")();
      }

      /***/
    },

    /***/ /***/ "6dK+": function(module, exports, __webpack_require__) {
      "use strict";
      /*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

      var isObject = __webpack_require__("2368");

      function isObjectObject(o) {
        return (
          isObject(o) === true &&
          Object.prototype.toString.call(o) === "[object Object]"
        );
      }

      module.exports = function isPlainObject(o) {
        var ctor, prot;

        if (isObjectObject(o) === false) return false;

        // If has modified constructor
        ctor = o.constructor;
        if (typeof ctor !== "function") return false;

        // If has modified prototype
        prot = ctor.prototype;
        if (isObjectObject(prot) === false) return false;

        // If constructor does not have an Object-specific method
        if (prot.hasOwnProperty("isPrototypeOf") === false) {
          return false;
        }

        // Most likely a plain Object
        return true;
      };

      /***/
    },

    /***/ /***/ Asjh: function(module, exports, __webpack_require__) {
      "use strict";
      /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

      module.exports = ReactPropTypesSecret;

      /***/
    },

    /***/ /***/ ESrk: function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function() {
          return Editor;
        }
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(
        "KM04"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_preact__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(
        "X5xa"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage__ = __webpack_require__(
        "vS2H"
      );
      var _templateObject = _taggedTemplateLiteralLoose(
          [
            "\n  color: black;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0.15);\n"
          ],
          [
            "\n  color: black;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0.15);\n"
          ]
        ),
        _templateObject2 = _taggedTemplateLiteralLoose(
          [
            "\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  padding: 20px;\n  border: none;\n  color: white;\n  background-color: #356c5d;\n\n  &:focus {\n    outline: none;\n  }\n"
          ],
          [
            "\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  padding: 20px;\n  border: none;\n  color: white;\n  background-color: #356c5d;\n\n  &:focus {\n    outline: none;\n  }\n"
          ]
        );

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return call && (typeof call === "object" || typeof call === "function")
          ? call
          : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      function _taggedTemplateLiteralLoose(strings, raw) {
        strings.raw = raw;
        return strings;
      }

      var Badge = __WEBPACK_IMPORTED_MODULE_1_styled_components__[
        "a" /* default */
      ].span(_templateObject);

      var Textarea = __WEBPACK_IMPORTED_MODULE_1_styled_components__[
        "a" /* default */
      ].textarea(_templateObject2);

      var _ref2 = __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0_preact__["h"]
      )(Badge, null, "Saved!");

      var Editor = (function(_Component) {
        _inherits(Editor, _Component);

        function Editor() {
          var _temp, _this, _ret;

          _classCallCheck(this, Editor);

          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          return (_ret = (
            (_temp = (
              (_this = _possibleConstructorReturn(
                this,
                _Component.call.apply(_Component, [this].concat(args))
              )),
              _this
            )),
            (_this.state = {
              value:
                __WEBPACK_IMPORTED_MODULE_2__services_storage__[
                  "a" /* default */
                ].getItem("scratch-content") || "",
              showBadge: false,
              isWritting: false
            }),
            (_this.handleInput = function(e) {
              _this.setState({ value: e.target.value, isWritting: true });

              _this.persistContent();
            }),
            (_this.persistContent = function() {
              clearTimeout(_this.timer);

              var timer = setTimeout(function() {
                _this.setState({ isWritting: false, showBadge: true });

                __WEBPACK_IMPORTED_MODULE_2__services_storage__[
                  "a" /* default */
                ].setItem("scratch-content", _this.state.value);

                setTimeout(function() {
                  _this.setState({ showBadge: false });
                }, 1500);
              }, 1500);

              _this.timer = timer;
            }),
            (_this.bindTextarea = function(x) {
              _this.textarea = x;
            }),
            _temp
          )), _possibleConstructorReturn(_this, _ret);
        }

        Editor.prototype.componentDidMount = function componentDidMount() {
          this.textarea.focus();
        };

        Editor.prototype.render = function render(_, _ref) {
          var value = _ref.value,
            showBadge = _ref.showBadge;

          return __webpack_require__.i(
            __WEBPACK_IMPORTED_MODULE_0_preact__["h"]
          )(
            "div",
            null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              Textarea,
              { innerRef: this.bindTextarea, onChange: this.handleInput },
              value
            ),
            showBadge && _ref2
          );
        };

        return Editor;
      })(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

      /***/
    },

    /***/ /***/ JkW7: function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__(
        "rq4c"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0__style__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_app__ = __webpack_require__(
        "qLaj"
      );

      /* harmony default export */ __webpack_exports__["default"] =
        __WEBPACK_IMPORTED_MODULE_1__components_app__["a" /* default */];

      /***/
    },

    /***/ /***/ KM04: function(module, exports, __webpack_require__) {
      !(function() {
        "use strict";
        function e() {}
        function t(t, n) {
          var o,
            r,
            i,
            l,
            a = E;
          for (l = arguments.length; l-- > 2; ) {
            W.push(arguments[l]);
          }
          n &&
            null != n.children &&
            (W.length || W.push(n.children), delete n.children);
          while (W.length) {
            if ((r = W.pop()) && void 0 !== r.pop)
              for (l = r.length; l--; ) {
                W.push(r[l]);
              }
            else
              "boolean" == typeof r && (r = null), (i =
                "function" != typeof t) &&
                (null == r
                  ? (r = "")
                  : "number" == typeof r
                    ? (r += "")
                    : "string" != typeof r && (i = !1)), i && o
                ? (a[a.length - 1] += r)
                : a === E ? (a = [r]) : a.push(r), (o = i);
          }
          var u = new e();
          return (u.nodeName = t), (u.children = a), (u.attributes =
            null == n ? void 0 : n), (u.key =
            null == n ? void 0 : n.key), void 0 !== S.vnode && S.vnode(u), u;
        }
        function n(e, t) {
          for (var n in t) {
            e[n] = t[n];
          }
          return e;
        }
        function o(e, o) {
          return t(
            e.nodeName,
            n(n({}, e.attributes), o),
            arguments.length > 2 ? [].slice.call(arguments, 2) : e.children
          );
        }
        function r(e) {
          !e.__d &&
            (e.__d = !0) &&
            1 == A.push(e) &&
            (S.debounceRendering || P)(i);
        }
        function i() {
          var e,
            t = A;
          A = [];
          while ((e = t.pop())) {
            e.__d && k(e);
          }
        }
        function l(e, t, n) {
          return "string" == typeof t || "number" == typeof t
            ? void 0 !== e.splitText
            : "string" == typeof t.nodeName
              ? !e._componentConstructor && a(e, t.nodeName)
              : n || e._componentConstructor === t.nodeName;
        }
        function a(e, t) {
          return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
        }
        function u(e) {
          var t = n({}, e.attributes);
          t.children = e.children;
          var o = e.nodeName.defaultProps;
          if (void 0 !== o)
            for (var r in o) {
              void 0 === t[r] && (t[r] = o[r]);
            }
          return t;
        }
        function _(e, t) {
          var n = t
            ? document.createElementNS("http://www.w3.org/2000/svg", e)
            : document.createElement(e);
          return (n.__n = e), n;
        }
        function p(e) {
          var t = e.parentNode;
          t && t.removeChild(e);
        }
        function c(e, t, n, o, r) {
          if (("className" === t && (t = "class"), "key" === t));
          else if ("ref" === t) n && n(null), o && o(e);
          else if ("class" !== t || r) {
            if ("style" === t) {
              if (
                (
                  (o && "string" != typeof o && "string" != typeof n) ||
                    (e.style.cssText = o || ""),
                  o && "object" == typeof o
                )
              ) {
                if ("string" != typeof n)
                  for (var i in n) {
                    i in o || (e.style[i] = "");
                  }
                for (var i in o) {
                  e.style[i] =
                    "number" == typeof o[i] && !1 === V.test(i)
                      ? o[i] + "px"
                      : o[i];
                }
              }
            } else if ("dangerouslySetInnerHTML" === t)
              o && (e.innerHTML = o.__html || "");
            else if ("o" == t[0] && "n" == t[1]) {
              var l = t !== (t = t.replace(/Capture$/, ""));
              (t = t.toLowerCase().substring(2)), o
                ? n || e.addEventListener(t, f, l)
                : e.removeEventListener(t, f, l), ((e.__l || (e.__l = {}))[
                t
              ] = o);
            } else if ("list" !== t && "type" !== t && !r && t in e)
              s(e, t, null == o ? "" : o), (null != o && !1 !== o) ||
                e.removeAttribute(t);
            else {
              var a = r && t !== (t = t.replace(/^xlink\:?/, ""));
              null == o || !1 === o
                ? a
                  ? e.removeAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      t.toLowerCase()
                    )
                  : e.removeAttribute(t)
                : "function" != typeof o &&
                  (a
                    ? e.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        t.toLowerCase(),
                        o
                      )
                    : e.setAttribute(t, o));
            }
          } else e.className = o || "";
        }
        function s(e, t, n) {
          try {
            e[t] = n;
          } catch (e) {}
        }
        function f(e) {
          return this.__l[e.type]((S.event && S.event(e)) || e);
        }
        function d() {
          var e;
          while ((e = D.pop())) {
            S.afterMount && S.afterMount(e), e.componentDidMount &&
              e.componentDidMount();
          }
        }
        function h(e, t, n, o, r, i) {
          H++ ||
            (
              (R = null != r && void 0 !== r.ownerSVGElement),
              (j = null != e && !("__preactattr_" in e))
            );
          var l = m(e, t, n, o, i);
          return r && l.parentNode !== r && r.appendChild(l), --H ||
            ((j = !1), i || d()), l;
        }
        function m(e, t, n, o, r) {
          var i = e,
            l = R;
          if (
            (
              (null != t && "boolean" != typeof t) || (t = ""),
              "string" == typeof t || "number" == typeof t
            )
          )
            return e &&
            void 0 !== e.splitText &&
            e.parentNode &&
            (!e._component || r)
              ? e.nodeValue != t && (e.nodeValue = t)
              : (
                  (i = document.createTextNode(t)),
                  e &&
                    (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))
                ), (i.__preactattr_ = !0), i;
          var u = t.nodeName;
          if ("function" == typeof u) return U(e, t, n, o);
          if (
            (
              (R = "svg" === u || ("foreignObject" !== u && R)),
              (u += ""),
              (!e || !a(e, u)) && ((i = _(u, R)), e)
            )
          ) {
            while (e.firstChild) {
              i.appendChild(e.firstChild);
            }
            e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
          }
          var p = i.firstChild,
            c = i.__preactattr_,
            s = t.children;
          if (null == c) {
            c = i.__preactattr_ = {};
            for (var f = i.attributes, d = f.length; d--; ) {
              c[f[d].name] = f[d].value;
            }
          }
          return !j &&
          s &&
          1 === s.length &&
          "string" == typeof s[0] &&
          null != p &&
          void 0 !== p.splitText &&
          null == p.nextSibling
            ? p.nodeValue != s[0] && (p.nodeValue = s[0])
            : ((s && s.length) || null != p) &&
              v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(
            i,
            t.attributes,
            c
          ), (R = l), i;
        }
        function v(e, t, n, o, r) {
          var i,
            a,
            u,
            _,
            c,
            s = e.childNodes,
            f = [],
            d = {},
            h = 0,
            v = 0,
            y = s.length,
            g = 0,
            w = t ? t.length : 0;
          if (0 !== y)
            for (var C = 0; C < y; C++) {
              var x = s[C],
                N = x.__preactattr_,
                k = w && N ? (x._component ? x._component.__k : N.key) : null;
              null != k
                ? (h++, (d[k] = x))
                : (N ||
                    (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) &&
                  (f[g++] = x);
            }
          if (0 !== w)
            for (var C = 0; C < w; C++) {
              (_ = t[C]), (c = null);
              var k = _.key;
              if (null != k)
                h && void 0 !== d[k] && ((c = d[k]), (d[k] = void 0), h--);
              else if (!c && v < g)
                for (i = v; i < g; i++) {
                  if (void 0 !== f[i] && l((a = f[i]), _, r)) {
                    (c = a), (f[i] = void 0), i === g - 1 && g--, i === v &&
                      v++;
                    break;
                  }
                }
              (c = m(c, _, n, o)), (u = s[C]), c &&
                c !== e &&
                c !== u &&
                (null == u
                  ? e.appendChild(c)
                  : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
            }
          if (h)
            for (var C in d) {
              void 0 !== d[C] && b(d[C], !1);
            }
          while (v <= g) {
            void 0 !== (c = f[g--]) && b(c, !1);
          }
        }
        function b(e, t) {
          var n = e._component;
          n
            ? L(n)
            : (
                null != e.__preactattr_ &&
                  e.__preactattr_.ref &&
                  e.__preactattr_.ref(null),
                (!1 !== t && null != e.__preactattr_) || p(e),
                y(e)
              );
        }
        function y(e) {
          e = e.lastChild;
          while (e) {
            var t = e.previousSibling;
            b(e, !0), (e = t);
          }
        }
        function g(e, t, n) {
          var o;
          for (o in n) {
            (t && null != t[o]) ||
              null == n[o] ||
              c(e, o, n[o], (n[o] = void 0), R);
          }
          for (o in t) {
            "children" === o ||
              "innerHTML" === o ||
              (o in n &&
                t[o] === ("value" === o || "checked" === o ? e[o] : n[o])) ||
              c(e, o, n[o], (n[o] = t[o]), R);
          }
        }
        function w(e) {
          var t = e.constructor.name;
          (I[t] || (I[t] = [])).push(e);
        }
        function C(e, t, n) {
          var o,
            r = I[e.name];
          if (
            (
              e.prototype && e.prototype.render
                ? ((o = new e(t, n)), T.call(o, t, n))
                : ((o = new T(t, n)), (o.constructor = e), (o.render = x)),
              r
            )
          )
            for (var i = r.length; i--; ) {
              if (r[i].constructor === e) {
                (o.__b = r[i].__b), r.splice(i, 1);
                break;
              }
            }
          return o;
        }
        function x(e, t, n) {
          return this.constructor(e, n);
        }
        function N(e, t, n, o, i) {
          e.__x ||
            (
              (e.__x = !0),
              (e.__r = t.ref) && delete t.ref,
              (e.__k = t.key) && delete t.key,
              !e.base || i
                ? e.componentWillMount && e.componentWillMount()
                : e.componentWillReceiveProps &&
                  e.componentWillReceiveProps(t, o),
              o &&
                o !== e.context &&
                (e.__c || (e.__c = e.context), (e.context = o)),
              e.__p || (e.__p = e.props),
              (e.props = t),
              (e.__x = !1),
              0 !== n &&
                (1 !== n && !1 === S.syncComponentUpdates && e.base
                  ? r(e)
                  : k(e, 1, i)),
              e.__r && e.__r(e)
            );
        }
        function k(e, t, o, r) {
          if (!e.__x) {
            var i,
              l,
              a,
              _ = e.props,
              p = e.state,
              c = e.context,
              s = e.__p || _,
              f = e.__s || p,
              m = e.__c || c,
              v = e.base,
              y = e.__b,
              g = v || y,
              w = e._component,
              x = !1;
            if (
              (
                v &&
                  (
                    (e.props = s),
                    (e.state = f),
                    (e.context = m),
                    2 !== t &&
                    e.shouldComponentUpdate &&
                    !1 === e.shouldComponentUpdate(_, p, c)
                      ? (x = !0)
                      : e.componentWillUpdate && e.componentWillUpdate(_, p, c),
                    (e.props = _),
                    (e.state = p),
                    (e.context = c)
                  ),
                (e.__p = e.__s = e.__c = e.__b = null),
                (e.__d = !1),
                !x
              )
            ) {
              (i = e.render(_, p, c)), e.getChildContext &&
                (c = n(n({}, c), e.getChildContext()));
              var U,
                T,
                M = i && i.nodeName;
              if ("function" == typeof M) {
                var W = u(i);
                (l = w), l && l.constructor === M && W.key == l.__k
                  ? N(l, W, 1, c, !1)
                  : (
                      (U = l),
                      (e._component = l = C(M, W, c)),
                      (l.__b = l.__b || y),
                      (l.__u = e),
                      N(l, W, 0, c, !1),
                      k(l, 1, o, !0)
                    ), (T = l.base);
              } else
                (a = g), (U = w), U && (a = e._component = null), (g ||
                  1 === t) &&
                  (
                    a && (a._component = null),
                    (T = h(a, i, c, o || !v, g && g.parentNode, !0))
                  );
              if (g && T !== g && l !== w) {
                var E = g.parentNode;
                E &&
                  T !== E &&
                  (
                    E.replaceChild(T, g),
                    U || ((g._component = null), b(g, !1))
                  );
              }
              if ((U && L(U), (e.base = T), T && !r)) {
                var P = e,
                  V = e;
                while ((V = V.__u)) {
                  (P = V).base = T;
                }
                (T._component = P), (T._componentConstructor = P.constructor);
              }
            }
            if (
              (
                !v || o
                  ? D.unshift(e)
                  : x ||
                    (
                      e.componentDidUpdate && e.componentDidUpdate(s, f, m),
                      S.afterUpdate && S.afterUpdate(e)
                    ),
                null != e.__h
              )
            )
              while (e.__h.length) {
                e.__h.pop().call(e);
              }
            H || r || d();
          }
        }
        function U(e, t, n, o) {
          var r = e && e._component,
            i = r,
            l = e,
            a = r && e._componentConstructor === t.nodeName,
            _ = a,
            p = u(t);
          while (r && !_ && (r = r.__u)) {
            _ = r.constructor === t.nodeName;
          }
          return r && _ && (!o || r._component)
            ? (N(r, p, 3, n, o), (e = r.base))
            : (
                i && !a && (L(i), (e = l = null)),
                (r = C(t.nodeName, p, n)),
                e && !r.__b && ((r.__b = e), (l = null)),
                N(r, p, 1, n, o),
                (e = r.base),
                l && e !== l && ((l._component = null), b(l, !1))
              ), e;
        }
        function L(e) {
          S.beforeUnmount && S.beforeUnmount(e);
          var t = e.base;
          (e.__x = !0), e.componentWillUnmount &&
            e.componentWillUnmount(), (e.base = null);
          var n = e._component;
          n
            ? L(n)
            : t &&
              (
                t.__preactattr_ &&
                  t.__preactattr_.ref &&
                  t.__preactattr_.ref(null),
                (e.__b = t),
                p(t),
                w(e),
                y(t)
              ), e.__r && e.__r(null);
        }
        function T(e, t) {
          (this.__d = !0), (this.context = t), (this.props = e), (this.state =
            this.state || {});
        }
        function M(e, t, n) {
          return h(n, e, {}, !1, t, !1);
        }
        var S = {},
          W = [],
          E = [],
          P =
            "function" == typeof Promise
              ? Promise.resolve().then.bind(Promise.resolve())
              : setTimeout,
          V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
          A = [],
          D = [],
          H = 0,
          R = !1,
          j = !1,
          I = {};
        n(T.prototype, {
          setState: function setState(e, t) {
            var o = this.state;
            this.__s || (this.__s = n({}, o)), n(
              o,
              "function" == typeof e ? e(o, this.props) : e
            ), t && (this.__h = this.__h || []).push(t), r(this);
          },
          forceUpdate: function forceUpdate(e) {
            e && (this.__h = this.__h || []).push(e), k(this, 2);
          },
          render: function render() {}
        });
        var $ = {
          h: t,
          createElement: t,
          cloneElement: o,
          Component: T,
          render: M,
          rerender: i,
          options: S
        };
        true ? (module.exports = $) : (self.preact = $);
      })();
      //# sourceMappingURL=preact.min.js.map

      /***/
    },

    /***/ /***/ UQex: function(module, exports, __webpack_require__) {
      "use strict";

      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

      function makeEmptyFunction(arg) {
        return function() {
          return arg;
        };
      }

      /**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
      var emptyFunction = function emptyFunction() {};

      emptyFunction.thatReturns = makeEmptyFunction;
      emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
      emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
      emptyFunction.thatReturnsNull = makeEmptyFunction(null);
      emptyFunction.thatReturnsThis = function() {
        return this;
      };
      emptyFunction.thatReturnsArgument = function(arg) {
        return arg;
      };

      module.exports = emptyFunction;

      /***/
    },

    /***/ /***/ X5xa: function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* unused harmony export css */
      /* unused harmony export keyframes */
      /* unused harmony export injectGlobal */
      /* unused harmony export ThemeProvider */
      /* unused harmony export withTheme */
      /* unused harmony export ServerStyleSheet */
      /* unused harmony export StyleSheetManager */
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__(
        "6dK+"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_is_plain_object__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis__ = __webpack_require__(
        "YOxv"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stylis___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_stylis__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(
        "eW0v"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(
        "5D9O"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_3_prop_types__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_function__ = __webpack_require__(
        "xIVz"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_is_function___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_4_is_function__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__ = __webpack_require__(
        "2DKW"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics__
      );

      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

      var _uppercasePattern = /([A-Z])/g;

      /**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
      function hyphenate$2(string) {
        return string.replace(_uppercasePattern, "-$1").toLowerCase();
      }

      var hyphenate_1 = hyphenate$2;

      var hyphenate = hyphenate_1;

      var msPattern = /^ms-/;

      /**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
      function hyphenateStyleName(string) {
        return hyphenate(string).replace(msPattern, "-ms-");
      }

      var hyphenateStyleName_1 = hyphenateStyleName;

      //
      var objToCss = function objToCss(obj, prevKey) {
        var css = Object.keys(obj)
          .map(function(key) {
            if (
              __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(obj[key])
            )
              return objToCss(obj[key], key);
            return hyphenateStyleName_1(key) + ": " + obj[key] + ";";
          })
          .join(" ");
        return prevKey ? prevKey + " {\n  " + css + "\n}" : css;
      };

      var flatten = function flatten(chunks, executionContext) {
        return chunks.reduce(function(ruleSet, chunk) {
          /* Remove falsey values */
          if (
            chunk === undefined ||
            chunk === null ||
            chunk === false ||
            chunk === ""
          )
            return ruleSet;
          /* Flatten ruleSet */
          if (Array.isArray(chunk))
            return [].concat(ruleSet, flatten(chunk, executionContext));

          /* Handle other components */
          // $FlowFixMe not sure how to make this pass
          if (chunk.hasOwnProperty("styledComponentId"))
            return [].concat(ruleSet, ["." + chunk.styledComponentId]);

          /* Either execute or defer the function */
          if (typeof chunk === "function") {
            return executionContext
              ? ruleSet.concat.apply(
                  ruleSet,
                  flatten([chunk(executionContext)], executionContext)
                )
              : ruleSet.concat(chunk);
          }

          /* Handle objects */
          // $FlowFixMe have to add %checks somehow to isPlainObject
          return ruleSet.concat(
            __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(chunk)
              ? objToCss(chunk)
              : chunk.toString()
          );
        }, []);
      };

      //
      var stylis = new __WEBPACK_IMPORTED_MODULE_1_stylis___default.a({
        global: false,
        cascade: true,
        keyframe: false,
        prefix: true,
        compress: false,
        semicolon: true
      });

      var stringifyRules = function stringifyRules(rules, selector, prefix) {
        var flatCSS = rules.join("").replace(/^\s*\/\/.*$/gm, ""); // replace JS comments

        var cssStr =
          selector && prefix
            ? prefix + " " + selector + " { " + flatCSS + " }"
            : flatCSS;

        return stylis(prefix || !selector ? "" : selector, cssStr);
      };

      //
      var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
        ""
      );
      var charsLength = chars.length;

      /* Some high number, usually 9-digit base-10. Map it to base-😎 */
      var generateAlphabeticName = function generateAlphabeticName(code) {
        var name = "";
        var x = void 0;

        for (x = code; x > charsLength; x = Math.floor(x / chars.length)) {
          name = chars[x % charsLength] + name;
        }

        return chars[x % charsLength] + name;
      };

      //

      var interleave = function interleave(strings, interpolations) {
        return interpolations.reduce(
          function(array, interp, i) {
            return array.concat(interp, strings[i + 1]);
          },
          [strings[0]]
        );
      };

      //
      var css = function css(strings) {
        for (
          var _len = arguments.length,
            interpolations = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          interpolations[_key - 1] = arguments[_key];
        }

        return flatten(interleave(strings, interpolations));
      };

      //
      var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//gm;

      var extractCompsFromCSS = function extractCompsFromCSS(maybeCSS) {
        var css = "" + (maybeCSS || ""); // Definitely a string, and a clone
        var existingComponents = [];
        css.replace(SC_COMPONENT_ID, function(match, componentId, matchIndex) {
          existingComponents.push({
            componentId: componentId,
            matchIndex: matchIndex
          });
          return match;
        });
        return existingComponents.map(function(_ref, i) {
          var componentId = _ref.componentId,
            matchIndex = _ref.matchIndex;

          var nextComp = existingComponents[i + 1];
          var cssFromDOM = nextComp
            ? css.slice(matchIndex, nextComp.matchIndex)
            : css.slice(matchIndex);
          return { componentId: componentId, cssFromDOM: cssFromDOM };
        });
      };

      var classCallCheck = function classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      var _extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

      var inherits = function inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof superClass
          );
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      };

      var objectWithoutProperties = function objectWithoutProperties(
        obj,
        keys
      ) {
        var target = {};

        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }

        return target;
      };

      var possibleConstructorReturn = function possibleConstructorReturn(
        self,
        call
      ) {
        if (!self) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }

        return call && (typeof call === "object" || typeof call === "function")
          ? call
          : self;
      };

      //
      /*
 * Browser Style Sheet with Rehydration
 *
 * <style data-styled-components="x y z"
 *        data-styled-components-is-local="true">
 *   /· sc-component-id: a ·/
 *   .sc-a { ... }
 *   .x { ... }
 *   /· sc-component-id: b ·/
 *   .sc-b { ... }
 *   .y { ... }
 *   .z { ... }
 * </style>
 *
 * Note: replace · with * in the above snippet.
 * */
      var COMPONENTS_PER_TAG = 40;

      var BrowserTag = (function() {
        function BrowserTag(el, isLocal) {
          var existingSource =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : "";
          classCallCheck(this, BrowserTag);

          this.el = el;
          this.isLocal = isLocal;
          this.ready = false;

          var extractedComps = extractCompsFromCSS(existingSource);

          this.size = extractedComps.length;
          this.components = extractedComps.reduce(function(acc, obj) {
            acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
            return acc;
          }, {});
        }

        BrowserTag.prototype.isFull = function isFull() {
          return this.size >= COMPONENTS_PER_TAG;
        };

        BrowserTag.prototype.addComponent = function addComponent(componentId) {
          if (!this.ready) this.replaceElement();
          if (this.components[componentId])
            throw new Error(
              "Trying to add Component '" + componentId + "' twice!"
            );

          var comp = {
            componentId: componentId,
            textNode: document.createTextNode("")
          };
          this.el.appendChild(comp.textNode);

          this.size += 1;
          this.components[componentId] = comp;
        };

        BrowserTag.prototype.inject = function inject(componentId, css, name) {
          if (!this.ready) this.replaceElement();
          var comp = this.components[componentId];

          if (!comp)
            throw new Error(
              "Must add a new component before you can inject css into it"
            );
          if (comp.textNode.data === "")
            comp.textNode.appendData(
              "\n/* sc-component-id: " + componentId + " */\n"
            );

          comp.textNode.appendData(css);
          if (name) {
            var existingNames = this.el.getAttribute(SC_ATTR);
            this.el.setAttribute(
              SC_ATTR,
              existingNames ? existingNames + " " + name : name
            );
          }
        };

        BrowserTag.prototype.toHTML = function toHTML() {
          return this.el.outerHTML;
        };

        BrowserTag.prototype.toReactElement = function toReactElement() {
          throw new Error("BrowserTag doesn't implement toReactElement!");
        };

        BrowserTag.prototype.clone = function clone() {
          throw new Error("BrowserTag cannot be cloned!");
        };

        /* Because we care about source order, before we can inject anything we need to
   * create a text node for each component and replace the existing CSS. */

        BrowserTag.prototype.replaceElement = function replaceElement() {
          var _this = this;

          this.ready = true;
          // We have nothing to inject. Use the current el.
          if (this.size === 0) return;

          // Build up our replacement style tag
          var newEl = this.el.cloneNode();
          newEl.appendChild(document.createTextNode("\n"));

          Object.keys(this.components).forEach(function(key) {
            var comp = _this.components[key];

            // eslint-disable-next-line no-param-reassign
            comp.textNode = document.createTextNode(comp.cssFromDOM);
            newEl.appendChild(comp.textNode);
          });

          if (!this.el.parentNode)
            throw new Error(
              "Trying to replace an element that wasn't mounted!"
            );

          // The ol' switcheroo
          this.el.parentNode.replaceChild(newEl, this.el);
          this.el = newEl;
        };

        return BrowserTag;
      })();

      /* Factory function to separate DOM operations from logical ones*/

      var BrowserStyleSheet = {
        create: function create() {
          var tags = [];
          var names = {};

          /* Construct existing state from DOM */
          var nodes = document.querySelectorAll("[" + SC_ATTR + "]");
          var nodesLength = nodes.length;

          for (var i = 0; i < nodesLength; i += 1) {
            var el = nodes[i];

            tags.push(
              new BrowserTag(
                el,
                el.getAttribute(LOCAL_ATTR) === "true",
                el.innerHTML
              )
            );

            var attr = el.getAttribute(SC_ATTR);
            if (attr) {
              attr.trim().split(/\s+/).forEach(function(name) {
                names[name] = true;
              });
            }
          }

          /* Factory for making more tags */
          var tagConstructor = function tagConstructor(isLocal) {
            var el = document.createElement("style");
            el.type = "text/css";
            el.setAttribute(SC_ATTR, "");
            el.setAttribute(LOCAL_ATTR, isLocal ? "true" : "false");
            if (!document.head) throw new Error("Missing document <head>");
            document.head.appendChild(el);
            return new BrowserTag(el, isLocal);
          };

          return new StyleSheet(tagConstructor, tags, names);
        }
      };

      //
      var SC_ATTR = "data-styled-components";
      var LOCAL_ATTR = "data-styled-components-is-local";
      var CONTEXT_KEY = "__styled-components-stylesheet__";

      var instance = null;
      // eslint-disable-next-line no-use-before-define
      var clones = [];

      var StyleSheet = (function() {
        function StyleSheet(tagConstructor) {
          var tags =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];
          var names =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};
          classCallCheck(this, StyleSheet);
          this.hashes = {};
          this.deferredInjections = {};

          this.tagConstructor = tagConstructor;
          this.tags = tags;
          this.names = names;
          this.constructComponentTagMap();
        }

        StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
          var _this = this;

          this.componentTags = {};

          this.tags.forEach(function(tag) {
            Object.keys(tag.components).forEach(function(componentId) {
              _this.componentTags[componentId] = tag;
            });
          });
        };

        /* Best level of caching—get the name from the hash straight away. */

        StyleSheet.prototype.getName = function getName(hash) {
          return this.hashes[hash.toString()];
        };

        /* Second level of caching—if the name is already in the dom, don't
   * inject anything and record the hash for getName next time. */

        StyleSheet.prototype.alreadyInjected = function alreadyInjected(
          hash,
          name
        ) {
          if (!this.names[name]) return false;

          this.hashes[hash.toString()] = name;
          return true;
        };

        /* Third type of caching—don't inject components' componentId twice. */

        StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(
          componentId
        ) {
          return !!this.componentTags[componentId];
        };

        StyleSheet.prototype.deferredInject = function deferredInject(
          componentId,
          isLocal,
          css
        ) {
          if (this === instance) {
            clones.forEach(function(clone) {
              clone.deferredInject(componentId, isLocal, css);
            });
          }

          this.getOrCreateTag(componentId, isLocal);
          this.deferredInjections[componentId] = css;
        };

        StyleSheet.prototype.inject = function inject(
          componentId,
          isLocal,
          css,
          hash,
          name
        ) {
          if (this === instance) {
            clones.forEach(function(clone) {
              clone.inject(componentId, isLocal, css);
            });
          }

          var tag = this.getOrCreateTag(componentId, isLocal);

          var deferredInjection = this.deferredInjections[componentId];
          if (deferredInjection) {
            tag.inject(componentId, deferredInjection);
            delete this.deferredInjections[componentId];
          }

          tag.inject(componentId, css, name);

          if (hash && name) {
            this.hashes[hash.toString()] = name;
          }
        };

        StyleSheet.prototype.toHTML = function toHTML() {
          return this.tags
            .map(function(tag) {
              return tag.toHTML();
            })
            .join("");
        };

        StyleSheet.prototype.toReactElements = function toReactElements() {
          return this.tags.map(function(tag, i) {
            return tag.toReactElement("sc-" + i);
          });
        };

        StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(
          componentId,
          isLocal
        ) {
          var existingTag = this.componentTags[componentId];
          if (existingTag) {
            return existingTag;
          }

          var lastTag = this.tags[this.tags.length - 1];
          var componentTag =
            !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal
              ? this.createNewTag(isLocal)
              : lastTag;
          this.componentTags[componentId] = componentTag;
          componentTag.addComponent(componentId);
          return componentTag;
        };

        StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
          var newTag = this.tagConstructor(isLocal);
          this.tags.push(newTag);
          return newTag;
        };

        StyleSheet.reset = function reset(isServer) {
          instance = StyleSheet.create(isServer);
        };

        /* We can make isServer totally implicit once Jest 20 drops and we
   * can change environment on a per-test basis. */

        StyleSheet.create = function create() {
          var isServer =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : typeof document === "undefined";

          return (isServer ? ServerStyleSheet : BrowserStyleSheet).create();
        };

        StyleSheet.clone = function clone(oldSheet) {
          var newSheet = new StyleSheet(
            oldSheet.tagConstructor,
            oldSheet.tags.map(function(tag) {
              return tag.clone();
            }),
            _extends({}, oldSheet.names)
          );

          newSheet.hashes = _extends({}, oldSheet.hashes);
          newSheet.deferredInjections = _extends(
            {},
            oldSheet.deferredInjections
          );
          clones.push(newSheet);

          return newSheet;
        };

        createClass(StyleSheet, null, [
          {
            key: "instance",
            get: function get$$1() {
              return instance || (instance = StyleSheet.create());
            }
          }
        ]);
        return StyleSheet;
      })();

      var _StyleSheetManager$ch;

      //
      var StyleSheetManager = (function(_Component) {
        inherits(StyleSheetManager, _Component);

        function StyleSheetManager() {
          classCallCheck(this, StyleSheetManager);
          return possibleConstructorReturn(
            this,
            _Component.apply(this, arguments)
          );
        }

        StyleSheetManager.prototype.getChildContext = function getChildContext() {
          var _ref;

          return (_ref = {}), (_ref[CONTEXT_KEY] = this.props.sheet), _ref;
        };

        StyleSheetManager.prototype.render = function render() {
          /* eslint-disable react/prop-types */
          // Flow v0.43.1 will report an error accessing the `children` property,
          // but v0.47.0 will not. It is necessary to use a type cast instead of
          // a "fixme" comment to satisfy both Flow versions.
          return __WEBPACK_IMPORTED_MODULE_2_react__[
            "a" /* default */
          ].Children.only(this.props.children);
        };

        return StyleSheetManager;
      })(__WEBPACK_IMPORTED_MODULE_2_react__["b" /* Component */]);

      StyleSheetManager.childContextTypes = (
        (_StyleSheetManager$ch = {}),
        (_StyleSheetManager$ch[
          CONTEXT_KEY
        ] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(
          StyleSheet
        ).isRequired),
        _StyleSheetManager$ch
      );

      StyleSheetManager.propTypes = {
        sheet: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(
          StyleSheet
        ).isRequired
      };

      //
      var ServerTag = (function() {
        function ServerTag(isLocal) {
          classCallCheck(this, ServerTag);

          this.isLocal = isLocal;
          this.components = {};
          this.size = 0;
          this.names = [];
        }

        ServerTag.prototype.isFull = function isFull() {
          return false;
        };

        ServerTag.prototype.addComponent = function addComponent(componentId) {
          if (this.components[componentId])
            throw new Error(
              "Trying to add Component '" + componentId + "' twice!"
            );
          this.components[componentId] = { componentId: componentId, css: "" };
          this.size += 1;
        };

        ServerTag.prototype.inject = function inject(componentId, css, name) {
          var comp = this.components[componentId];

          if (!comp)
            throw new Error(
              "Must add a new component before you can inject css into it"
            );
          if (comp.css === "")
            comp.css = "/* sc-component-id: " + componentId + " */\n";

          comp.css += css.replace(/\n*$/, "\n");

          if (name) this.names.push(name);
        };

        ServerTag.prototype.toHTML = function toHTML() {
          var _this = this;

          var namesAttr = SC_ATTR + '="' + this.names.join(" ") + '"';
          var localAttr =
            LOCAL_ATTR + '="' + (this.isLocal ? "true" : "false") + '"';
          var css = Object.keys(this.components)
            .map(function(key) {
              return _this.components[key].css;
            })
            .join("");

          return (
            '<style type="text/css" ' +
            namesAttr +
            " " +
            localAttr +
            ">\n" +
            css +
            "\n</style>"
          );
        };

        ServerTag.prototype.toReactElement = function toReactElement(key) {
          var _attributes,
            _this2 = this;

          var attributes = (
            (_attributes = {}),
            (_attributes[SC_ATTR] = this.names.join(" ")),
            (_attributes[LOCAL_ATTR] = this.isLocal.toString()),
            _attributes
          );
          var css = Object.keys(this.components)
            .map(function(k) {
              return _this2.components[k].css;
            })
            .join("");

          return __WEBPACK_IMPORTED_MODULE_2_react__[
            "a" /* default */
          ].createElement(
            "style",
            _extends(
              {
                key: key,
                type: "text/css"
              },
              attributes,
              {
                dangerouslySetInnerHTML: { __html: css }
              }
            )
          );
        };

        ServerTag.prototype.clone = function clone() {
          var _this3 = this;

          var copy = new ServerTag(this.isLocal);
          copy.names = [].concat(this.names);
          copy.size = this.size;
          copy.components = Object.keys(this.components).reduce(function(
            acc,
            key
          ) {
            acc[key] = _extends({}, _this3.components[key]); // eslint-disable-line no-param-reassign
            return acc;
          }, {});

          return copy;
        };

        return ServerTag;
      })();

      var ServerStyleSheet = (function() {
        function ServerStyleSheet() {
          classCallCheck(this, ServerStyleSheet);

          this.instance = StyleSheet.clone(StyleSheet.instance);
        }

        ServerStyleSheet.prototype.collectStyles = function collectStyles(
          children
        ) {
          if (this.closed)
            throw new Error(
              "Can't collect styles once you've called getStyleTags!"
            );
          return __WEBPACK_IMPORTED_MODULE_2_react__[
            "a" /* default */
          ].createElement(
            StyleSheetManager,
            { sheet: this.instance },
            children
          );
        };

        ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
          if (!this.closed) {
            clones.splice(clones.indexOf(this.instance), 1);
            this.closed = true;
          }

          return this.instance.toHTML();
        };

        ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
          if (!this.closed) {
            clones.splice(clones.indexOf(this.instance), 1);
            this.closed = true;
          }

          return this.instance.toReactElements();
        };

        ServerStyleSheet.create = function create() {
          return new StyleSheet(function(isLocal) {
            return new ServerTag(isLocal);
          });
        };

        return ServerStyleSheet;
      })();

      //

      var LIMIT = 200;

      var createWarnTooManyClasses = function createWarnTooManyClasses(
        displayName
      ) {
        var generatedClasses = {};
        var warningSeen = false;

        return function(className) {
          if (!warningSeen) {
            generatedClasses[className] = true;
            if (Object.keys(generatedClasses).length >= LIMIT) {
              // Unable to find latestRule in test environment.
              /* eslint-disable no-console, prefer-template */
              console.warn(
                "Over " +
                  LIMIT +
                  " classes were generated for component " +
                  displayName +
                  ". " +
                  "Consider using style property for frequently changed styles.\n" +
                  "Example:\n" +
                  "  const StyledComp = styled.div`width: 100%;`\n" +
                  "  <StyledComp style={{ background: background }} />"
              );
              warningSeen = true;
              generatedClasses = {};
            }
          }
        };
      };

      //
      /* Trying to avoid the unknown-prop errors on styled components
 by filtering by React's attribute whitelist.
 */

      /* Logic copied from ReactDOMUnknownPropertyHook */
      var reactProps = {
        children: true,
        dangerouslySetInnerHTML: true,
        key: true,
        ref: true,
        autoFocus: true,
        defaultValue: true,
        valueLink: true,
        defaultChecked: true,
        checkedLink: true,
        innerHTML: true,
        suppressContentEditableWarning: true,
        onFocusIn: true,
        onFocusOut: true,
        className: true,

        /* List copied from https://facebook.github.io/react/docs/events.html */
        onCopy: true,
        onCut: true,
        onPaste: true,
        onCompositionEnd: true,
        onCompositionStart: true,
        onCompositionUpdate: true,
        onKeyDown: true,
        onKeyPress: true,
        onKeyUp: true,
        onFocus: true,
        onBlur: true,
        onChange: true,
        onInput: true,
        onSubmit: true,
        onClick: true,
        onContextMenu: true,
        onDoubleClick: true,
        onDrag: true,
        onDragEnd: true,
        onDragEnter: true,
        onDragExit: true,
        onDragLeave: true,
        onDragOver: true,
        onDragStart: true,
        onDrop: true,
        onMouseDown: true,
        onMouseEnter: true,
        onMouseLeave: true,
        onMouseMove: true,
        onMouseOut: true,
        onMouseOver: true,
        onMouseUp: true,
        onSelect: true,
        onTouchCancel: true,
        onTouchEnd: true,
        onTouchMove: true,
        onTouchStart: true,
        onScroll: true,
        onWheel: true,
        onAbort: true,
        onCanPlay: true,
        onCanPlayThrough: true,
        onDurationChange: true,
        onEmptied: true,
        onEncrypted: true,
        onEnded: true,
        onError: true,
        onLoadedData: true,
        onLoadedMetadata: true,
        onLoadStart: true,
        onPause: true,
        onPlay: true,
        onPlaying: true,
        onProgress: true,
        onRateChange: true,
        onSeeked: true,
        onSeeking: true,
        onStalled: true,
        onSuspend: true,
        onTimeUpdate: true,
        onVolumeChange: true,
        onWaiting: true,
        onLoad: true,
        onAnimationStart: true,
        onAnimationEnd: true,
        onAnimationIteration: true,
        onTransitionEnd: true,

        onCopyCapture: true,
        onCutCapture: true,
        onPasteCapture: true,
        onCompositionEndCapture: true,
        onCompositionStartCapture: true,
        onCompositionUpdateCapture: true,
        onKeyDownCapture: true,
        onKeyPressCapture: true,
        onKeyUpCapture: true,
        onFocusCapture: true,
        onBlurCapture: true,
        onChangeCapture: true,
        onInputCapture: true,
        onSubmitCapture: true,
        onClickCapture: true,
        onContextMenuCapture: true,
        onDoubleClickCapture: true,
        onDragCapture: true,
        onDragEndCapture: true,
        onDragEnterCapture: true,
        onDragExitCapture: true,
        onDragLeaveCapture: true,
        onDragOverCapture: true,
        onDragStartCapture: true,
        onDropCapture: true,
        onMouseDownCapture: true,
        onMouseEnterCapture: true,
        onMouseLeaveCapture: true,
        onMouseMoveCapture: true,
        onMouseOutCapture: true,
        onMouseOverCapture: true,
        onMouseUpCapture: true,
        onSelectCapture: true,
        onTouchCancelCapture: true,
        onTouchEndCapture: true,
        onTouchMoveCapture: true,
        onTouchStartCapture: true,
        onScrollCapture: true,
        onWheelCapture: true,
        onAbortCapture: true,
        onCanPlayCapture: true,
        onCanPlayThroughCapture: true,
        onDurationChangeCapture: true,
        onEmptiedCapture: true,
        onEncryptedCapture: true,
        onEndedCapture: true,
        onErrorCapture: true,
        onLoadedDataCapture: true,
        onLoadedMetadataCapture: true,
        onLoadStartCapture: true,
        onPauseCapture: true,
        onPlayCapture: true,
        onPlayingCapture: true,
        onProgressCapture: true,
        onRateChangeCapture: true,
        onSeekedCapture: true,
        onSeekingCapture: true,
        onStalledCapture: true,
        onSuspendCapture: true,
        onTimeUpdateCapture: true,
        onVolumeChangeCapture: true,
        onWaitingCapture: true,
        onLoadCapture: true,
        onAnimationStartCapture: true,
        onAnimationEndCapture: true,
        onAnimationIterationCapture: true,
        onTransitionEndCapture: true
      };

      /* From HTMLDOMPropertyConfig */
      var htmlProps = {
        /**
   * Standard Properties
   */
        accept: true,
        acceptCharset: true,
        accessKey: true,
        action: true,
        allowFullScreen: true,
        allowTransparency: true,
        alt: true,
        // specifies target context for links with `preload` type
        as: true,
        async: true,
        autoComplete: true,
        // autoFocus is polyfilled/normalized by AutoFocusUtils
        // autoFocus: true,
        autoPlay: true,
        capture: true,
        cellPadding: true,
        cellSpacing: true,
        charSet: true,
        challenge: true,
        checked: true,
        cite: true,
        classID: true,
        className: true,
        cols: true,
        colSpan: true,
        content: true,
        contentEditable: true,
        contextMenu: true,
        controls: true,
        coords: true,
        crossOrigin: true,
        data: true, // For `<object />` acts as `src`.
        dateTime: true,
        default: true,
        defer: true,
        dir: true,
        disabled: true,
        download: true,
        draggable: true,
        encType: true,
        form: true,
        formAction: true,
        formEncType: true,
        formMethod: true,
        formNoValidate: true,
        formTarget: true,
        frameBorder: true,
        headers: true,
        height: true,
        hidden: true,
        high: true,
        href: true,
        hrefLang: true,
        htmlFor: true,
        httpEquiv: true,
        icon: true,
        id: true,
        inputMode: true,
        integrity: true,
        is: true,
        keyParams: true,
        keyType: true,
        kind: true,
        label: true,
        lang: true,
        list: true,
        loop: true,
        low: true,
        manifest: true,
        marginHeight: true,
        marginWidth: true,
        max: true,
        maxLength: true,
        media: true,
        mediaGroup: true,
        method: true,
        min: true,
        minLength: true,
        // Caution; `option.selected` is not updated if `select.multiple` is
        // disabled with `removeAttribute`.
        multiple: true,
        muted: true,
        name: true,
        nonce: true,
        noValidate: true,
        open: true,
        optimum: true,
        pattern: true,
        placeholder: true,
        playsInline: true,
        poster: true,
        preload: true,
        profile: true,
        radioGroup: true,
        readOnly: true,
        referrerPolicy: true,
        rel: true,
        required: true,
        reversed: true,
        role: true,
        rows: true,
        rowSpan: true,
        sandbox: true,
        scope: true,
        scoped: true,
        scrolling: true,
        seamless: true,
        selected: true,
        shape: true,
        size: true,
        sizes: true,
        span: true,
        spellCheck: true,
        src: true,
        srcDoc: true,
        srcLang: true,
        srcSet: true,
        start: true,
        step: true,
        style: true,
        summary: true,
        tabIndex: true,
        target: true,
        title: true,
        // Setting .type throws on non-<input> tags
        type: true,
        useMap: true,
        value: true,
        width: true,
        wmode: true,
        wrap: true,

        /**
   * RDFa Properties
   */
        about: true,
        datatype: true,
        inlist: true,
        prefix: true,
        // property is also supported for OpenGraph in meta tags.
        property: true,
        resource: true,
        typeof: true,
        vocab: true,

        /**
   * Non-standard Properties
   */
        // autoCapitalize and autoCorrect are supported in Mobile Safari for
        // keyboard hints.
        autoCapitalize: true,
        autoCorrect: true,
        // autoSave allows WebKit/Blink to persist values of input fields on page reloads
        autoSave: true,
        // color is for Safari mask-icon link
        color: true,
        // itemProp, itemScope, itemType are for
        // Microdata support. See http://schema.org/docs/gs.html
        itemProp: true,
        itemScope: true,
        itemType: true,
        // itemID and itemRef are for Microdata support as well but
        // only specified in the WHATWG spec document. See
        // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
        itemID: true,
        itemRef: true,
        // results show looking glass icon and recent searches on input
        // search fields in WebKit/Blink
        results: true,
        // IE-only attribute that specifies security restrictions on an iframe
        // as an alternative to the sandbox attribute on IE<10
        security: true,
        // IE-only attribute that controls focus behavior
        unselectable: 0
      };

      var svgProps = {
        accentHeight: true,
        accumulate: true,
        additive: true,
        alignmentBaseline: true,
        allowReorder: true,
        alphabetic: true,
        amplitude: true,
        arabicForm: true,
        ascent: true,
        attributeName: true,
        attributeType: true,
        autoReverse: true,
        azimuth: true,
        baseFrequency: true,
        baseProfile: true,
        baselineShift: true,
        bbox: true,
        begin: true,
        bias: true,
        by: true,
        calcMode: true,
        capHeight: true,
        clip: true,
        clipPath: true,
        clipRule: true,
        clipPathUnits: true,
        colorInterpolation: true,
        colorInterpolationFilters: true,
        colorProfile: true,
        colorRendering: true,
        contentScriptType: true,
        contentStyleType: true,
        cursor: true,
        cx: true,
        cy: true,
        d: true,
        decelerate: true,
        descent: true,
        diffuseConstant: true,
        direction: true,
        display: true,
        divisor: true,
        dominantBaseline: true,
        dur: true,
        dx: true,
        dy: true,
        edgeMode: true,
        elevation: true,
        enableBackground: true,
        end: true,
        exponent: true,
        externalResourcesRequired: true,
        fill: true,
        fillOpacity: true,
        fillRule: true,
        filter: true,
        filterRes: true,
        filterUnits: true,
        floodColor: true,
        floodOpacity: true,
        focusable: true,
        fontFamily: true,
        fontSize: true,
        fontSizeAdjust: true,
        fontStretch: true,
        fontStyle: true,
        fontVariant: true,
        fontWeight: true,
        format: true,
        from: true,
        fx: true,
        fy: true,
        g1: true,
        g2: true,
        glyphName: true,
        glyphOrientationHorizontal: true,
        glyphOrientationVertical: true,
        glyphRef: true,
        gradientTransform: true,
        gradientUnits: true,
        hanging: true,
        horizAdvX: true,
        horizOriginX: true,
        ideographic: true,
        imageRendering: true,
        in: true,
        in2: true,
        intercept: true,
        k: true,
        k1: true,
        k2: true,
        k3: true,
        k4: true,
        kernelMatrix: true,
        kernelUnitLength: true,
        kerning: true,
        keyPoints: true,
        keySplines: true,
        keyTimes: true,
        lengthAdjust: true,
        letterSpacing: true,
        lightingColor: true,
        limitingConeAngle: true,
        local: true,
        markerEnd: true,
        markerMid: true,
        markerStart: true,
        markerHeight: true,
        markerUnits: true,
        markerWidth: true,
        mask: true,
        maskContentUnits: true,
        maskUnits: true,
        mathematical: true,
        mode: true,
        numOctaves: true,
        offset: true,
        opacity: true,
        operator: true,
        order: true,
        orient: true,
        orientation: true,
        origin: true,
        overflow: true,
        overlinePosition: true,
        overlineThickness: true,
        paintOrder: true,
        panose1: true,
        pathLength: true,
        patternContentUnits: true,
        patternTransform: true,
        patternUnits: true,
        pointerEvents: true,
        points: true,
        pointsAtX: true,
        pointsAtY: true,
        pointsAtZ: true,
        preserveAlpha: true,
        preserveAspectRatio: true,
        primitiveUnits: true,
        r: true,
        radius: true,
        refX: true,
        refY: true,
        renderingIntent: true,
        repeatCount: true,
        repeatDur: true,
        requiredExtensions: true,
        requiredFeatures: true,
        restart: true,
        result: true,
        rotate: true,
        rx: true,
        ry: true,
        scale: true,
        seed: true,
        shapeRendering: true,
        slope: true,
        spacing: true,
        specularConstant: true,
        specularExponent: true,
        speed: true,
        spreadMethod: true,
        startOffset: true,
        stdDeviation: true,
        stemh: true,
        stemv: true,
        stitchTiles: true,
        stopColor: true,
        stopOpacity: true,
        strikethroughPosition: true,
        strikethroughThickness: true,
        string: true,
        stroke: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeLinecap: true,
        strokeLinejoin: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true,
        surfaceScale: true,
        systemLanguage: true,
        tableValues: true,
        targetX: true,
        targetY: true,
        textAnchor: true,
        textDecoration: true,
        textRendering: true,
        textLength: true,
        to: true,
        transform: true,
        u1: true,
        u2: true,
        underlinePosition: true,
        underlineThickness: true,
        unicode: true,
        unicodeBidi: true,
        unicodeRange: true,
        unitsPerEm: true,
        vAlphabetic: true,
        vHanging: true,
        vIdeographic: true,
        vMathematical: true,
        values: true,
        vectorEffect: true,
        version: true,
        vertAdvY: true,
        vertOriginX: true,
        vertOriginY: true,
        viewBox: true,
        viewTarget: true,
        visibility: true,
        widths: true,
        wordSpacing: true,
        writingMode: true,
        x: true,
        xHeight: true,
        x1: true,
        x2: true,
        xChannelSelector: true,
        xlinkActuate: true,
        xlinkArcrole: true,
        xlinkHref: true,
        xlinkRole: true,
        xlinkShow: true,
        xlinkTitle: true,
        xlinkType: true,
        xmlBase: true,
        xmlns: true,
        xmlnsXlink: true,
        xmlLang: true,
        xmlSpace: true,
        y: true,
        y1: true,
        y2: true,
        yChannelSelector: true,
        z: true,
        zoomAndPan: true
      };

      /* From DOMProperty */
      var ATTRIBUTE_NAME_START_CHAR =
        ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      var ATTRIBUTE_NAME_CHAR =
        ATTRIBUTE_NAME_START_CHAR +
        "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      var isCustomAttribute = RegExp.prototype.test.bind(
        new RegExp("^(data|aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$")
      );

      var hasOwnProperty = {}.hasOwnProperty;
      var validAttr = function validAttr(name) {
        return (
          hasOwnProperty.call(htmlProps, name) ||
          hasOwnProperty.call(svgProps, name) ||
          isCustomAttribute(name.toLowerCase()) ||
          hasOwnProperty.call(reactProps, name)
        );
      };

      //

      function isTag(target) /* : %checks */ {
        return typeof target === "string";
      }

      //

      function isStyledComponent(target) /* : %checks */ {
        return (
          typeof target === "function" &&
          typeof target.styledComponentId === "string"
        );
      }

      //

      /* eslint-disable no-undef */
      function getComponentName(target) {
        return target.displayName || target.name || "Component";
      }

      //
      /**
 * Creates a broadcast that can be listened to, i.e. simple event emitter
 *
 * @see https://github.com/ReactTraining/react-broadcast
 */

      var createBroadcast = function createBroadcast(initialValue) {
        var listeners = [];
        var currentValue = initialValue;

        return {
          publish: function publish(value) {
            currentValue = value;
            listeners.forEach(function(listener) {
              return listener(currentValue);
            });
          },
          subscribe: function subscribe(listener) {
            listeners.push(listener);

            // Publish to this subscriber once immediately.
            listener(currentValue);

            return function() {
              listeners = listeners.filter(function(item) {
                return item !== listener;
              });
            };
          }
        };
      };

      var _ThemeProvider$childC;
      var _ThemeProvider$contex;

      //
      /* globals React$Element */
      // NOTE: DO NOT CHANGE, changing this is a semver major change!
      var CHANNEL = "__styled-components__";

      /**
 * Provide a theme to an entire react component tree via context and event listeners (have to do
 * both context and event emitter as pure components block context updates)
 */

      var ThemeProvider = (function(_Component) {
        inherits(ThemeProvider, _Component);

        function ThemeProvider() {
          classCallCheck(this, ThemeProvider);

          var _this = possibleConstructorReturn(this, _Component.call(this));

          _this.getTheme = _this.getTheme.bind(_this);
          return _this;
        }

        ThemeProvider.prototype.componentWillMount = function componentWillMount() {
          var _this2 = this;

          // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
          // with the outer theme
          if (this.context[CHANNEL]) {
            var subscribe = this.context[CHANNEL];
            this.unsubscribeToOuter = subscribe(function(theme) {
              _this2.outerTheme = theme;
            });
          }
          this.broadcast = createBroadcast(this.getTheme());
        };

        ThemeProvider.prototype.getChildContext = function getChildContext() {
          var _babelHelpers$extends;

          return _extends(
            {},
            this.context,
            (
              (_babelHelpers$extends = {}),
              (_babelHelpers$extends[CHANNEL] = this.broadcast.subscribe),
              _babelHelpers$extends
            )
          );
        };

        ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(
          nextProps
        ) {
          if (this.props.theme !== nextProps.theme)
            this.broadcast.publish(this.getTheme(nextProps.theme));
        };

        ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
          if (this.context[CHANNEL]) {
            this.unsubscribeToOuter();
          }
        };

        // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation

        ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
          var theme = passedTheme || this.props.theme;
          if (__WEBPACK_IMPORTED_MODULE_4_is_function___default()(theme)) {
            var mergedTheme = theme(this.outerTheme);
            if (
              !__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(
                mergedTheme
              )
            ) {
              throw new Error(
                "[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!"
              );
            }
            return mergedTheme;
          }
          if (!__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(theme)) {
            throw new Error(
              "[ThemeProvider] Please make your theme prop a plain object"
            );
          }
          return _extends({}, this.outerTheme, theme);
        };

        ThemeProvider.prototype.render = function render() {
          if (!this.props.children) {
            return null;
          }
          return __WEBPACK_IMPORTED_MODULE_2_react__[
            "a" /* default */
          ].Children.only(this.props.children);
        };

        return ThemeProvider;
      })(__WEBPACK_IMPORTED_MODULE_2_react__["b" /* Component */]);

      ThemeProvider.childContextTypes = (
        (_ThemeProvider$childC = {}),
        (_ThemeProvider$childC[CHANNEL] =
          __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired),
        _ThemeProvider$childC
      );
      ThemeProvider.contextTypes = (
        (_ThemeProvider$contex = {}),
        (_ThemeProvider$contex[CHANNEL] =
          __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func),
        _ThemeProvider$contex
      );

      var _AbstractStyledCompon;

      //
      var AbstractStyledComponent = (function(_Component) {
        inherits(AbstractStyledComponent, _Component);

        function AbstractStyledComponent() {
          classCallCheck(this, AbstractStyledComponent);
          return possibleConstructorReturn(
            this,
            _Component.apply(this, arguments)
          );
        }

        return AbstractStyledComponent;
      })(__WEBPACK_IMPORTED_MODULE_2_react__["b" /* Component */]);

      AbstractStyledComponent.contextTypes = (
        (_AbstractStyledCompon = {}),
        (_AbstractStyledCompon[CHANNEL] =
          __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func),
        (_AbstractStyledCompon[
          CONTEXT_KEY
        ] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(
          StyleSheet
        )),
        _AbstractStyledCompon
      );

      //

      var escapeRegex = /[[\].#*$><+~=|^:(),"'`]/g;
      var multiDashRegex = /--+/g;

      var _StyledComponent = function _StyledComponent(
        ComponentStyle,
        constructWithOptions
      ) {
        /* We depend on components having unique IDs */
        var identifiers = {};
        var generateId = function generateId(_displayName) {
          var displayName =
            typeof _displayName !== "string"
              ? "sc"
              : _displayName
                  .replace(escapeRegex, "-") // Replace all possible CSS selectors
                  .replace(multiDashRegex, "-"); // Replace multiple -- with single -

          var nr = (identifiers[displayName] || 0) + 1;
          identifiers[displayName] = nr;

          var hash = ComponentStyle.generateName(displayName + nr);
          return displayName + "-" + hash;
        };

        var BaseStyledComponent = (function(_AbstractStyledCompon) {
          inherits(BaseStyledComponent, _AbstractStyledCompon);

          function BaseStyledComponent() {
            var _temp, _this, _ret;

            classCallCheck(this, BaseStyledComponent);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (_ret = (
              (_temp = (
                (_this = possibleConstructorReturn(
                  this,
                  _AbstractStyledCompon.call.apply(
                    _AbstractStyledCompon,
                    [this].concat(args)
                  )
                )),
                _this
              )),
              (_this.attrs = {}),
              (_this.state = {
                theme: null,
                generatedClassName: ""
              }),
              _temp
            )), possibleConstructorReturn(_this, _ret);
          }

          BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(
            theme,
            props
          ) {
            var attrs = this.constructor.attrs;

            var context = _extends({}, props, { theme: theme });
            if (attrs === undefined) {
              return context;
            }

            this.attrs = Object.keys(attrs).reduce(function(acc, key) {
              var attr = attrs[key];
              // eslint-disable-next-line no-param-reassign
              acc[key] = typeof attr === "function" ? attr(context) : attr;
              return acc;
            }, {});

            return _extends({}, context, this.attrs);
          };

          BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(
            theme,
            props
          ) {
            var _constructor = this.constructor,
              componentStyle = _constructor.componentStyle,
              warnTooManyClasses = _constructor.warnTooManyClasses;

            var executionContext = this.buildExecutionContext(theme, props);
            var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.instance;
            var className = componentStyle.generateAndInjectStyles(
              executionContext,
              styleSheet
            );

            if (warnTooManyClasses !== undefined) warnTooManyClasses(className);

            return className;
          };

          BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
            var _this2 = this;

            // If there is a theme in the context, subscribe to the event emitter. This
            // is necessary due to pure components blocking context updates, this circumvents
            // that by updating when an event is emitted
            if (this.context[CHANNEL]) {
              var subscribe = this.context[CHANNEL];
              this.unsubscribe = subscribe(function(nextTheme) {
                // This will be called once immediately

                // Props should take precedence over ThemeProvider, which should take precedence over
                // defaultProps, but React automatically puts defaultProps on props.
                var defaultProps = _this2.constructor.defaultProps;

                var isDefaultTheme =
                  defaultProps && _this2.props.theme === defaultProps.theme;
                var theme =
                  _this2.props.theme && !isDefaultTheme
                    ? _this2.props.theme
                    : nextTheme;
                var generatedClassName = _this2.generateAndInjectStyles(
                  theme,
                  _this2.props
                );
                _this2.setState({
                  theme: theme,
                  generatedClassName: generatedClassName
                });
              });
            } else {
              var theme = this.props.theme || {};
              var generatedClassName = this.generateAndInjectStyles(
                theme,
                this.props
              );
              this.setState({
                theme: theme,
                generatedClassName: generatedClassName
              });
            }
          };

          BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(
            nextProps
          ) {
            var _this3 = this;

            this.setState(function(oldState) {
              // Props should take precedence over ThemeProvider, which should take precedence over
              // defaultProps, but React automatically puts defaultProps on props.
              var defaultProps = _this3.constructor.defaultProps;

              var isDefaultTheme =
                defaultProps && nextProps.theme === defaultProps.theme;
              var theme =
                nextProps.theme && !isDefaultTheme
                  ? nextProps.theme
                  : oldState.theme;
              var generatedClassName = _this3.generateAndInjectStyles(
                theme,
                nextProps
              );

              return { theme: theme, generatedClassName: generatedClassName };
            });
          };

          BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
            if (this.unsubscribe) {
              this.unsubscribe();
            }
          };

          BaseStyledComponent.prototype.render = function render() {
            var _this4 = this;

            var innerRef = this.props.innerRef;
            var generatedClassName = this.state.generatedClassName;
            var _constructor2 = this.constructor,
              styledComponentId = _constructor2.styledComponentId,
              target = _constructor2.target;

            var isTargetTag = isTag(target);

            var className = [
              this.props.className,
              styledComponentId,
              this.attrs.className,
              generatedClassName
            ]
              .filter(Boolean)
              .join(" ");

            var baseProps = _extends({}, this.attrs, {
              className: className
            });

            if (isStyledComponent(target)) {
              baseProps.innerRef = innerRef;
            } else {
              baseProps.ref = innerRef;
            }

            var propsForElement = Object.keys(this.props).reduce(function(
              acc,
              propName
            ) {
              // Don't pass through non HTML tags through to HTML elements
              // always omit innerRef
              if (
                propName !== "innerRef" &&
                propName !== "className" &&
                (!isTargetTag || validAttr(propName))
              ) {
                // eslint-disable-next-line no-param-reassign
                acc[propName] = _this4.props[propName];
              }

              return acc;
            }, baseProps);

            return __webpack_require__.i(
              __WEBPACK_IMPORTED_MODULE_2_react__["c" /* createElement */]
            )(target, propsForElement);
          };

          return BaseStyledComponent;
        })(AbstractStyledComponent);

        var createStyledComponent = function createStyledComponent(
          target,
          options,
          rules
        ) {
          var _StyledComponent$cont;

          var _options$displayName = options.displayName,
            displayName =
              _options$displayName === undefined
                ? isTag(target)
                  ? "styled." + target
                  : "Styled(" + getComponentName(target) + ")"
                : _options$displayName,
            _options$componentId = options.componentId,
            componentId =
              _options$componentId === undefined
                ? generateId(options.displayName)
                : _options$componentId,
            _options$ParentCompon = options.ParentComponent,
            ParentComponent =
              _options$ParentCompon === undefined
                ? BaseStyledComponent
                : _options$ParentCompon,
            extendingRules = options.rules,
            attrs = options.attrs;

          var styledComponentId =
            options.displayName && options.componentId
              ? options.displayName + "-" + options.componentId
              : componentId;

          var warnTooManyClasses = void 0;
          if (
            typeof process !== "undefined" &&
            "development" !== "production"
          ) {
            warnTooManyClasses = createWarnTooManyClasses(displayName);
          }

          var componentStyle = new ComponentStyle(
            extendingRules === undefined ? rules : extendingRules.concat(rules),
            styledComponentId
          );

          var StyledComponent = (function(_ParentComponent) {
            inherits(StyledComponent, _ParentComponent);

            function StyledComponent() {
              classCallCheck(this, StyledComponent);
              return possibleConstructorReturn(
                this,
                _ParentComponent.apply(this, arguments)
              );
            }

            StyledComponent.withComponent = function withComponent(tag) {
              var _ = options.displayName,
                __ = options.componentId,
                optionsToCopy = objectWithoutProperties(options, [
                  "displayName",
                  "componentId"
                ]);

              var newOptions = _extends({}, optionsToCopy, {
                ParentComponent: StyledComponent
              });
              return createStyledComponent(tag, newOptions, rules);
            };

            createClass(StyledComponent, null, [
              {
                key: "extend",
                get: function get$$1() {
                  var _ = options.displayName,
                    __ = options.componentId,
                    rulesFromOptions = options.rules,
                    optionsToCopy = objectWithoutProperties(options, [
                      "displayName",
                      "componentId",
                      "rules"
                    ]);

                  var newRules =
                    rulesFromOptions === undefined
                      ? rules
                      : rulesFromOptions.concat(rules);

                  var newOptions = _extends({}, optionsToCopy, {
                    rules: newRules,
                    ParentComponent: StyledComponent
                  });

                  return constructWithOptions(
                    createStyledComponent,
                    target,
                    newOptions
                  );
                }
              }
            ]);
            return StyledComponent;
          })(ParentComponent);

          StyledComponent.contextTypes = (
            (_StyledComponent$cont = {}),
            (_StyledComponent$cont[CHANNEL] =
              __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func),
            (_StyledComponent$cont[
              CONTEXT_KEY
            ] = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.instanceOf(
              StyleSheet
            )),
            _StyledComponent$cont
          );
          StyledComponent.displayName = displayName;
          StyledComponent.styledComponentId = styledComponentId;
          StyledComponent.attrs = attrs;
          StyledComponent.componentStyle = componentStyle;
          StyledComponent.warnTooManyClasses = warnTooManyClasses;
          StyledComponent.target = target;

          return StyledComponent;
        };

        return createStyledComponent;
      };

      // murmurhash2 via https://gist.github.com/raycmorgan/588423

      function doHash(str, seed) {
        var m = 0x5bd1e995;
        var r = 24;
        var h = seed ^ str.length;
        var length = str.length;
        var currentIndex = 0;

        while (length >= 4) {
          var k = UInt32(str, currentIndex);

          k = Umul32(k, m);
          k ^= k >>> r;
          k = Umul32(k, m);

          h = Umul32(h, m);
          h ^= k;

          currentIndex += 4;
          length -= 4;
        }

        switch (length) {
          case 3:
            h ^= UInt16(str, currentIndex);
            h ^= str.charCodeAt(currentIndex + 2) << 16;
            h = Umul32(h, m);
            break;

          case 2:
            h ^= UInt16(str, currentIndex);
            h = Umul32(h, m);
            break;

          case 1:
            h ^= str.charCodeAt(currentIndex);
            h = Umul32(h, m);
            break;
        }

        h ^= h >>> 13;
        h = Umul32(h, m);
        h ^= h >>> 15;

        return h >>> 0;
      }

      function UInt32(str, pos) {
        return (
          str.charCodeAt(pos++) +
          (str.charCodeAt(pos++) << 8) +
          (str.charCodeAt(pos++) << 16) +
          (str.charCodeAt(pos) << 24)
        );
      }

      function UInt16(str, pos) {
        return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
      }

      function Umul32(n, m) {
        n = n | 0;
        m = m | 0;
        var nlo = n & 0xffff;
        var nhi = n >>> 16;
        var res = (nlo * m + (((nhi * m) & 0xffff) << 16)) | 0;
        return res;
      }

      //
      /*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
      var _ComponentStyle = function _ComponentStyle(
        nameGenerator,
        flatten,
        stringifyRules
      ) {
        var ComponentStyle = (function() {
          function ComponentStyle(rules, componentId) {
            classCallCheck(this, ComponentStyle);

            this.rules = rules;
            this.componentId = componentId;
            if (!StyleSheet.instance.hasInjectedComponent(this.componentId)) {
              var placeholder = "." + componentId + " {}";
              StyleSheet.instance.deferredInject(
                componentId,
                true,
                placeholder
              );
            }
          }

          /*
     * Flattens a rule set into valid CSS
     * Hashes it, wraps the whole chunk in a .hash1234 {}
     * Returns the hash to be injected on render()
     * */

          ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(
            executionContext,
            styleSheet
          ) {
            var flatCSS = flatten(this.rules, executionContext);
            var hash = doHash(this.componentId + flatCSS.join(""));

            var existingName = styleSheet.getName(hash);
            if (existingName) return existingName;

            var name = nameGenerator(hash);
            if (styleSheet.alreadyInjected(hash, name)) return name;

            var css = "\n" + stringifyRules(flatCSS, "." + name);
            styleSheet.inject(this.componentId, true, css, hash, name);
            return name;
          };

          ComponentStyle.generateName = function generateName(str) {
            return nameGenerator(doHash(str));
          };

          return ComponentStyle;
        })();

        return ComponentStyle;
      };

      //
      // Thanks to ReactDOMFactories for this handy list!

      var domElements = [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",

        // SVG
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan"
      ];

      //

      var _styled = function _styled(styledComponent, constructWithOptions) {
        var styled = function styled(tag) {
          return constructWithOptions(styledComponent, tag);
        };

        // Shorthands for all valid HTML Elements
        domElements.forEach(function(domElement) {
          styled[domElement] = styled(domElement);
        });

        return styled;
      };

      //
      var replaceWhitespace = function replaceWhitespace(str) {
        return str.replace(/\s|\\n/g, "");
      };

      var _keyframes = function _keyframes(nameGenerator, stringifyRules, css) {
        return function(strings) {
          for (
            var _len = arguments.length,
              interpolations = Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            interpolations[_key - 1] = arguments[_key];
          }

          var rules = css.apply(undefined, [strings].concat(interpolations));
          var hash = doHash(replaceWhitespace(JSON.stringify(rules)));

          var existingName = StyleSheet.instance.getName(hash);
          if (existingName) return existingName;

          var name = nameGenerator(hash);
          if (StyleSheet.instance.alreadyInjected(hash, name)) return name;

          var generatedCSS = stringifyRules(rules, name, "@keyframes");
          StyleSheet.instance.inject(
            "sc-keyframes-" + name,
            true,
            generatedCSS,
            hash,
            name
          );
          return name;
        };
      };

      //
      var _injectGlobal = function _injectGlobal(stringifyRules, css) {
        var injectGlobal = function injectGlobal(strings) {
          for (
            var _len = arguments.length,
              interpolations = Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            interpolations[_key - 1] = arguments[_key];
          }

          var rules = css.apply(undefined, [strings].concat(interpolations));
          var hash = doHash(JSON.stringify(rules));

          var componentId = "sc-global-" + hash;
          if (StyleSheet.instance.hasInjectedComponent(componentId)) return;

          StyleSheet.instance.inject(componentId, false, stringifyRules(rules));
        };

        return injectGlobal;
      };

      //

      var _constructWithOptions = function _constructWithOptions(css) {
        var constructWithOptions = function constructWithOptions(
          componentConstructor,
          tag
        ) {
          var options =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {};

          if (typeof tag !== "string" && typeof tag !== "function") {
            // $FlowInvalidInputTest
            throw new Error(
              "Cannot create styled-component for component: " + tag
            );
          }

          /* This is callable directly as a template function */
          var templateFunction = function templateFunction(strings) {
            for (
              var _len = arguments.length,
                interpolations = Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              interpolations[_key - 1] = arguments[_key];
            }

            return componentConstructor(
              tag,
              options,
              css.apply(undefined, [strings].concat(interpolations))
            );
          };

          /* If config methods are called, wrap up a new template function and merge options */
          templateFunction.withConfig = function(config) {
            return constructWithOptions(
              componentConstructor,
              tag,
              _extends({}, options, config)
            );
          };
          templateFunction.attrs = function(attrs) {
            return constructWithOptions(
              componentConstructor,
              tag,
              _extends({}, options, {
                attrs: _extends({}, options.attrs || {}, attrs)
              })
            );
          };

          return templateFunction;
        };

        return constructWithOptions;
      };

      //
      /* globals ReactClass */

      var wrapWithTheme = function wrapWithTheme(Component$$1) {
        var _WithTheme$contextTyp;

        var componentName =
          Component$$1.displayName || Component$$1.name || "Component";

        var isStyledComponent$$1 = isStyledComponent(Component$$1);

        var WithTheme = (function(_React$Component) {
          inherits(WithTheme, _React$Component);

          function WithTheme() {
            var _temp, _this, _ret;

            classCallCheck(this, WithTheme);

            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            return (_ret = (
              (_temp = (
                (_this = possibleConstructorReturn(
                  this,
                  _React$Component.call.apply(
                    _React$Component,
                    [this].concat(args)
                  )
                )),
                _this
              )),
              (_this.state = {}),
              _temp
            )), possibleConstructorReturn(_this, _ret);
          }

          // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping

          WithTheme.prototype.componentWillMount = function componentWillMount() {
            var _this2 = this;

            if (!this.context[CHANNEL]) {
              throw new Error(
                "[withTheme] Please use ThemeProvider to be able to use withTheme"
              );
            }

            var subscribe = this.context[CHANNEL];
            this.unsubscribe = subscribe(function(theme) {
              _this2.setState({ theme: theme });
            });
          };

          WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
            if (typeof this.unsubscribe === "function") this.unsubscribe();
          };

          WithTheme.prototype.render = function render() {
            // eslint-disable-next-line react/prop-types
            var innerRef = this.props.innerRef;
            var theme = this.state.theme;

            return __WEBPACK_IMPORTED_MODULE_2_react__[
              "a" /* default */
            ].createElement(
              Component$$1,
              _extends(
                {
                  theme: theme
                },
                this.props,
                {
                  innerRef: isStyledComponent$$1 ? innerRef : undefined,
                  ref: isStyledComponent$$1 ? undefined : innerRef
                }
              )
            );
          };

          return WithTheme;
        })(__WEBPACK_IMPORTED_MODULE_2_react__["a" /* default */].Component);

        WithTheme.displayName = "WithTheme(" + componentName + ")";
        WithTheme.styledComponentId = "withTheme";
        WithTheme.contextTypes = (
          (_WithTheme$contextTyp = {}),
          (_WithTheme$contextTyp[CHANNEL] =
            __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func),
          _WithTheme$contextTyp
        );

        return __WEBPACK_IMPORTED_MODULE_5_hoist_non_react_statics___default()(
          WithTheme,
          Component$$1
        );
      };

      //

      /* Import singletons */
      /* Import singleton constructors */
      /* Import components */
      /* Import Higher Order Components */
      /* Instantiate singletons */
      var ComponentStyle = _ComponentStyle(
        generateAlphabeticName,
        flatten,
        stringifyRules
      );
      var constructWithOptions = _constructWithOptions(css);
      var StyledComponent = _StyledComponent(
        ComponentStyle,
        constructWithOptions
      );

      /* Instantiate exported singletons */
      var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
      var injectGlobal = _injectGlobal(stringifyRules, css);
      var styled = _styled(StyledComponent, constructWithOptions);

      /* harmony default export */ __webpack_exports__["a"] = styled;

      /***/
    },

    /***/ /***/ YOxv: function(module, exports, __webpack_require__) {
      /*
 *          __        ___
 *    _____/ /___  __/ (_)____
 *   / ___/ __/ / / / / / ___/
 *  (__  ) /_/ /_/ / / (__  )
 * /____/\__/\__, /_/_/____/
 *          /____/
 *
 * light - weight css preprocessor @licence MIT
 */
      /* eslint-disable */
      (function(factory) {
        true
          ? (module["exports"] = factory(null))
          : typeof define === "function" && define["amd"]
            ? define(factory(null))
            : (window["stylis"] = factory(null));
      })(
        /** @param {*=} options */ function factory(options) {
          "use strict";

          /**
  * Notes
  *
  * The ['<method name>'] pattern is used to support closure compiler
  * the jsdoc signatures are also used to the same effect
  *
  * ---- 
  *
  * int + int + int === n4 [faster]
  *
  * vs
  *
  * int === n1 && int === n2 && int === n3
  *
  * ----
  *
  * switch (int) { case ints...} [faster]
  *
  * vs
  *
  * if (int == 1 && int === 2 ...)
  *
  * ----
  *
  * The (first*n1 + second*n2 + third*n3) format used in the property parser
  * is a simple way to hash the sequence of characters
  * taking into account the index they occur in
  * since any number of 3 character sequences could produce duplicates.
  *
  * On the other hand sequences that are directly tied to the index of the character
  * resolve a far more accurate measure, it's also faster
  * to evaluate one condition in a switch statement
  * than three in an if statement regardless of the added math.
  *
  * This allows the vendor prefixer to be both small and fast.
  */

          var nullptn = /^\0+/g; /* matches leading null characters */
          var formatptn = /[\0\r\f]/g; /* matches new line, null and formfeed characters */
          var colonptn = /: */g; /* splits animation rules */
          var cursorptn = /zoo|gra/; /* assert cursor varient */
          var transformptn = /([,: ])(transform)/g; /* vendor prefix transform, older webkit */
          var animationptn = /,+\s*(?![^(]*[)])/g; /* splits multiple shorthand notation animations */
          var propertiesptn = / +\s*(?![^(]*[)])/g; /* animation properties */
          var elementptn = / *[\0] */g; /* selector elements */
          var selectorptn = /,\r+?/g; /* splits selectors */
          var andptn = /([\t\r\n ])*\f?&/g; /* match & */
          var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g; /* matches :global(.*) */
          var invalidptn = /\W+/g; /* removes invalid characters from keyframes */
          var keyframeptn = /@(k\w+)\s*(\S*)\s*/; /* matches @keyframes $1 */
          var plcholdrptn = /::(place)/g; /* match ::placeholder varient */
          var readonlyptn = /:(read-only)/g; /* match :read-only varient */
          var beforeptn = /\s+(?=[{\];=:>])/g; /* matches \s before ] ; = : */
          var afterptn = /([[}=:>])\s+/g; /* matches \s after characters [ } = : */
          var tailptn = /(\{[^{]+?);(?=\})/g; /* matches tail semi-colons ;} */
          var whiteptn = /\s{2,}/g; /* matches repeating whitespace */
          var pseudoptn = /([^\(])(:+) */g; /* pseudo element */
          var writingptn = /[svh]\w+-[tblr]{2}/; /* match writing mode property values */

          /* vendors */
          var webkit = "-webkit-";
          var moz = "-moz-";
          var ms = "-ms-";

          /* character codes */
          var SEMICOLON = 59; /* ; */
          var CLOSEBRACES = 125; /* } */
          var OPENBRACES = 123; /* { */
          var OPENPARENTHESES = 40; /* ( */
          var CLOSEPARENTHESES = 41; /* ) */
          var OPENBRACKET = 91; /* [ */
          var CLOSEBRACKET = 93; /* ] */
          var NEWLINE = 10; /* \n */
          var CARRIAGE = 13; /* \r */
          var TAB = 9; /* \t */
          var AT = 64; /* @ */
          var SPACE = 32; /*   */
          var AND = 38; /* & */
          var DASH = 45; /* - */
          var UNDERSCORE = 95; /* _ */
          var STAR = 42; /* * */
          var COMMA = 44; /* , */
          var COLON = 58; /* : */
          var SINGLEQUOTE = 39; /* ' */
          var DOUBLEQUOTE = 34; /* " */
          var FOWARDSLASH = 47; /* / */
          var GREATERTHAN = 62; /* > */
          var PLUS = 43; /* + */
          var TILDE = 126; /* ~ */
          var NULL = 0; /* \0 */
          var FORMFEED = 12; /* \f */
          var VERTICALTAB = 11; /* \v */

          /* special identifiers */
          var KEYFRAME = 107; /* k */
          var MEDIA = 109; /* m */
          var SUPPORTS = 115; /* s */
          var PLACEHOLDER = 112; /* p */
          var READONLY = 111; /* o */
          var IMPORT = 169; /* <at>i */
          var CHARSET = 163; /* <at>c */
          var DOCUMENT = 100; /* <at>d */

          var column = 1; /* current column */
          var line = 1; /* current line numebr */
          var pattern = 0; /* :pattern */

          var cascade = 1; /* #id h1 h2 vs h1#id h2#id  */
          var vendor = 1; /* vendor prefix */
          var escape = 1; /* escape :global() pattern */
          var compress = 0; /* compress output */
          var semicolon = 0; /* no/semicolon option */
          var preserve = 0; /* preserve empty selectors */

          /* empty reference */
          var array = [];

          /* plugins */
          var plugins = [];
          var plugged = 0;

          /* plugin context */
          var POSTS = -2;
          var PREPS = -1;
          var UNKWN = 0;
          var PROPS = 1;
          var BLCKS = 2;
          var ATRUL = 3;

          /* plugin newline context */
          var unkwn = 0;

          /* keyframe animation */
          var keyed = 1;
          var key = "";

          /* selector namespace */
          var nscopealt = "";
          var nscope = "";

          /**
  * Compile
  *
  * @param {Array<string>} parent
  * @param {Array<string>} current
  * @param {string} body
  * @param {number} id
  * @return {string}
  */
          function compile(parent, current, body, id) {
            var bracket = 0; /* brackets [] */
            var comment = 0; /* comments /* // or /* */
            var parentheses = 0; /* functions () */
            var quote = 0; /* quotes '', "" */

            var first = 0; /* first character code */
            var second = 0; /* second character code */
            var code = 0; /* current character code */
            var tail = 0; /* previous character code */
            var trail = 0; /* character before previous code */
            var peak = 0; /* previous non-whitespace code */

            var counter = 0; /* count sequence termination */
            var context = 0; /* track current context */
            var atrule = 0; /* track @at-rule context */
            var pseudo = 0; /* track pseudo token index */
            var caret = 0; /* current character index */
            var format = 0; /* control character formating context */
            var insert = 0; /* auto semicolon insertion */
            var invert = 0; /* inverted selector pattern */
            var length = 0; /* generic length address */
            var eof = body.length; /* end of file(length) */
            var eol = eof - 1; /* end of file(characters) */

            var char = ""; /* current character */
            var chars = ""; /* current buffer of characters */
            var child = ""; /* next buffer of characters */
            var out = ""; /* compiled body */
            var children = ""; /* compiled children */
            var flat = ""; /* compiled leafs */
            var selector; /* generic selector address */
            var result; /* generic address */

            // ...build body
            while (caret < eof) {
              code = body.charCodeAt(caret);

              if (comment + quote + parentheses + bracket === 0) {
                // eof varient
                if (caret === eol) {
                  if (format > 0) {
                    chars = chars.replace(formatptn, "");
                  }

                  if ((chars = chars.trim()).length > 0) {
                    switch (code) {
                      case SPACE:
                      case TAB:
                      case SEMICOLON:
                      case CARRIAGE:
                      case NEWLINE: {
                        break;
                      }
                      default: {
                        chars += body.charAt(caret);
                      }
                    }

                    code = SEMICOLON;
                  }
                }

                // auto semicolon insertion
                if (insert === 1) {
                  switch (code) {
                    // false flags
                    case OPENBRACES:
                    case COMMA: {
                      insert = 0;
                      break;
                    }
                    // ignore
                    case TAB:
                    case CARRIAGE:
                    case NEWLINE:
                    case SPACE: {
                      break;
                    }
                    // valid
                    default: {
                      caret--;
                      code = SEMICOLON;
                    }
                  }
                }

                // token varient
                switch (code) {
                  case OPENBRACES: {
                    chars = chars.trim();
                    first = chars.charCodeAt(0);
                    counter = 1;
                    caret++;

                    while (caret < eof) {
                      code = body.charCodeAt(caret);

                      switch (code) {
                        case OPENBRACES: {
                          counter++;
                          break;
                        }
                        case CLOSEBRACES: {
                          counter--;
                          break;
                        }
                      }

                      if (counter === 0) {
                        break;
                      }

                      child += body.charAt(caret++);
                    }

                    if (first === NULL) {
                      first = (chars = chars
                        .replace(nullptn, "")
                        .trim()).charCodeAt(0);
                    }

                    switch (first) {
                      // @at-rule
                      case AT: {
                        if (format > 0) {
                          chars = chars.replace(formatptn, "");
                        }

                        second = chars.charCodeAt(1);

                        switch (second) {
                          case DOCUMENT:
                          case MEDIA:
                          case SUPPORTS: {
                            selector = current;
                            break;
                          }
                          default: {
                            selector = array;
                          }
                        }

                        child = compile(current, selector, child, second);
                        length = child.length;

                        // preserve empty @at-rule
                        if (preserve > 0 && length === 0) {
                          length = chars.length;
                        }

                        // execute plugins, @at-rule context
                        if (plugged > 0) {
                          selector = select(array, chars, invert);
                          result = proxy(
                            ATRUL,
                            child,
                            selector,
                            current,
                            line,
                            column,
                            length,
                            second
                          );
                          chars = selector.join("");

                          if (result !== void 0) {
                            if (
                              (length = (child = result.trim()).length) === 0
                            ) {
                              second = 0;
                              child = "";
                            }
                          }
                        }

                        if (length > 0) {
                          switch (second) {
                            case DOCUMENT:
                            case MEDIA:
                            case SUPPORTS: {
                              child = chars + "{" + child + "}";
                              break;
                            }
                            case KEYFRAME: {
                              chars = chars.replace(
                                keyframeptn,
                                "$1 $2" + (keyed > 0 ? key : "")
                              );
                              child = chars + "{" + child + "}";
                              child =
                                "@" +
                                (vendor > 0
                                  ? webkit + child + "@" + child
                                  : child);
                              break;
                            }
                            default: {
                              child = chars + child;
                            }
                          }
                        } else {
                          child = "";
                        }

                        break;
                      }
                      // selector
                      default: {
                        child = compile(
                          current,
                          select(current, chars, invert),
                          child,
                          id
                        );
                      }
                    }

                    children += child;

                    // reset
                    context = 0;
                    insert = 0;
                    pseudo = 0;
                    format = 0;
                    invert = 0;
                    atrule = 0;
                    chars = "";
                    child = "";
                    code = body.charCodeAt(++caret);
                    break;
                  }
                  case CLOSEBRACES:
                  case SEMICOLON: {
                    chars = (format > 0
                      ? chars.replace(formatptn, "")
                      : chars).trim();

                    if (chars.length > 1) {
                      // monkey-patch missing colon
                      if (pseudo === 0) {
                        first = chars.charCodeAt(0);

                        // first character is a letter or dash, buffer has a space character
                        if (
                          (first === DASH || (first > 96 && first < 123)) &&
                          chars.indexOf(" ")
                        ) {
                          chars = chars.replace(" ", ":");
                        }
                      }

                      // execute plugins, property context
                      if (plugged > 0) {
                        if (
                          (result = proxy(
                            PROPS,
                            chars,
                            current,
                            parent,
                            line,
                            column,
                            out.length,
                            id
                          )) !== void 0
                        ) {
                          if ((chars = result.trim()).length === 0) {
                            chars = "\0\0";
                          }
                        }
                      }

                      first = chars.charCodeAt(0);
                      second = chars.charCodeAt(1);

                      switch (first + second) {
                        case NULL: {
                          break;
                        }
                        case IMPORT:
                        case CHARSET: {
                          flat += chars + body.charAt(caret);
                          break;
                        }
                        default: {
                          out +=
                            pseudo > 0
                              ? property(
                                  chars,
                                  first,
                                  second,
                                  chars.charCodeAt(2)
                                )
                              : chars + ";";
                        }
                      }
                    }

                    // reset
                    context = 0;
                    insert = 0;
                    pseudo = 0;
                    format = 0;
                    invert = 0;
                    chars = "";
                    code = body.charCodeAt(++caret);
                    break;
                  }
                }
              }

              // parse characters
              switch (code) {
                case CARRIAGE:
                case NEWLINE: {
                  // auto insert semicolon
                  if (
                    comment + quote + parentheses + bracket + semicolon ===
                    0
                  ) {
                    // valid non-whitespace characters that
                    // may precede a newline
                    switch (peak) {
                      case CLOSEPARENTHESES:
                      case SINGLEQUOTE:
                      case DOUBLEQUOTE:
                      case AT:
                      case TILDE:
                      case GREATERTHAN:
                      case STAR:
                      case PLUS:
                      case FOWARDSLASH:
                      case DASH:
                      case COLON:
                      case COMMA:
                      case SEMICOLON:
                      case OPENBRACES:
                      case CLOSEBRACES: {
                        break;
                      }
                      default: {
                        // current buffer has a colon
                        if (pseudo > 0) {
                          insert = 1;
                        }
                      }
                    }
                  }

                  // terminate line comment
                  if (comment === FOWARDSLASH) {
                    comment = 0;
                  }

                  // execute plugins, newline context
                  if (plugged * unkwn > 0) {
                    proxy(
                      UNKWN,
                      chars,
                      current,
                      parent,
                      line,
                      column,
                      out.length,
                      id
                    );
                  }

                  // next line, reset column position
                  column = 1;
                  line++;
                  break;
                }
                case SEMICOLON:
                case CLOSEBRACES: {
                  if (comment + quote + parentheses + bracket === 0) {
                    column++;
                    break;
                  }
                }
                default: {
                  // increment column position
                  column++;

                  // current character
                  char = body.charAt(caret);

                  // remove comments, escape functions, strings, attributes and prepare selectors
                  switch (code) {
                    case TAB:
                    case SPACE: {
                      if (quote + bracket === 0) {
                        switch (tail) {
                          case COMMA:
                          case COLON:
                          case TAB:
                          case SPACE: {
                            char = "";
                            break;
                          }
                          default: {
                            if (code !== SPACE) {
                              char = " ";
                            }
                          }
                        }
                      }
                      break;
                    }
                    // escape breaking control characters
                    case NULL: {
                      char = "\\0";
                      break;
                    }
                    case FORMFEED: {
                      char = "\\f";
                      break;
                    }
                    case VERTICALTAB: {
                      char = "\\v";
                      break;
                    }
                    // &
                    case AND: {
                      // inverted selector pattern i.e html &
                      if (quote + comment + bracket === 0 && cascade > 0) {
                        invert = 1;
                        format = 1;
                        char = "\f" + char;
                      }
                      break;
                    }
                    // ::p<l>aceholder, l
                    // :read-on<l>y, l
                    case 108: {
                      if (
                        quote + comment + bracket + pattern === 0 &&
                        pseudo > 0
                      ) {
                        switch (caret - pseudo) {
                          // ::placeholder
                          case 2: {
                            if (
                              tail === PLACEHOLDER &&
                              body.charCodeAt(caret - 3) === COLON
                            ) {
                              pattern = tail;
                            }
                          }
                          // :read-only
                          case 8: {
                            if (trail === READONLY) {
                              pattern = trail;
                            }
                          }
                        }
                      }
                      break;
                    }
                    // :<pattern>
                    case COLON: {
                      if (quote + comment + bracket === 0) {
                        pseudo = caret;
                      }
                      break;
                    }
                    // selectors
                    case COMMA: {
                      if (comment + parentheses + quote + bracket === 0) {
                        format = 1;
                        char += "\r";
                      }
                      break;
                    }
                    // quotes
                    case DOUBLEQUOTE: {
                      if (comment === 0) {
                        quote = quote === code ? 0 : quote === 0 ? code : quote;
                        // " last character, add synthetic padding
                        if (caret === eol) {
                          eol++;
                          eof++;
                        }
                      }
                      break;
                    }
                    case SINGLEQUOTE: {
                      if (comment === 0) {
                        quote = quote === code ? 0 : quote === 0 ? code : quote;
                        // ' last character, add synthetic padding
                        if (caret === eol) {
                          eol++;
                          eof++;
                        }
                      }
                      break;
                    }
                    // attributes
                    case OPENBRACKET: {
                      if (quote + comment + parentheses === 0) {
                        bracket++;
                      }
                      break;
                    }
                    case CLOSEBRACKET: {
                      if (quote + comment + parentheses === 0) {
                        bracket--;
                      }
                      break;
                    }
                    // functions
                    case CLOSEPARENTHESES: {
                      if (quote + comment + bracket === 0) {
                        // ) last character, add synthetic padding
                        if (caret === eol) {
                          eol++;
                          eof++;
                        }

                        parentheses--;
                      }
                      break;
                    }
                    case OPENPARENTHESES: {
                      if (quote + comment + bracket === 0) {
                        if (context === 0) {
                          switch (tail * 2 + trail * 3) {
                            // :matches
                            case 533: {
                              break;
                            }
                            // :global, :not, :nth-child etc...
                            default: {
                              counter = 0;
                              context = 1;
                            }
                          }
                        }

                        parentheses++;
                      }
                      break;
                    }
                    case AT: {
                      if (
                        comment +
                          parentheses +
                          quote +
                          bracket +
                          pseudo +
                          atrule ===
                        0
                      ) {
                        atrule = 1;
                      }
                      break;
                    }
                    // block/line comments
                    case STAR:
                    case FOWARDSLASH: {
                      if (quote + bracket + parentheses > 0) {
                        break;
                      }

                      switch (comment) {
                        // initialize line/block comment context
                        case 0: {
                          switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
                            // //
                            case 235: {
                              comment = FOWARDSLASH;
                              break;
                            }
                            // /*
                            case 220: {
                              comment = STAR;
                              break;
                            }
                          }
                          break;
                        }
                        // end block comment context
                        case STAR: {
                          if (code === FOWARDSLASH && tail === STAR) {
                            char = "";
                            comment = 0;
                          }
                        }
                      }
                    }
                  }

                  // ignore comment blocks
                  if (comment === 0) {
                    // aggressive isolation mode, divide each individual selector
                    // including selectors in :not function but excluding selectors in :global function
                    if (
                      cascade + quote + bracket + atrule === 0 &&
                      id !== KEYFRAME &&
                      code !== SEMICOLON
                    ) {
                      switch (code) {
                        case COMMA:
                        case TILDE:
                        case GREATERTHAN:
                        case PLUS:
                        case CLOSEPARENTHESES:
                        case OPENPARENTHESES: {
                          if (context === 0) {
                            // outside of an isolated context i.e nth-child(<...>)
                            switch (tail) {
                              case TAB:
                              case SPACE:
                              case NEWLINE:
                              case CARRIAGE: {
                                char = char + "\0";
                                break;
                              }
                              default: {
                                char =
                                  "\0" + char + (code === COMMA ? "" : "\0");
                              }
                            }
                            format = 1;
                          } else {
                            // within an isolated context, sleep untill it's terminated
                            switch (code) {
                              case OPENPARENTHESES: {
                                context = ++counter;
                                break;
                              }
                              case CLOSEPARENTHESES: {
                                if ((context = --counter) === 0) {
                                  format = 1;
                                  char += "\0";
                                }
                                break;
                              }
                            }
                          }
                          break;
                        }
                        case SPACE: {
                          switch (tail) {
                            case NULL:
                            case OPENBRACES:
                            case CLOSEBRACES:
                            case SEMICOLON:
                            case COMMA:
                            case FORMFEED:
                            case TAB:
                            case SPACE:
                            case NEWLINE:
                            case CARRIAGE: {
                              break;
                            }
                            default: {
                              // ignore in isolated contexts
                              if (context === 0) {
                                format = 1;
                                char += "\0";
                              }
                            }
                          }
                        }
                      }
                    }

                    // concat buffer of characters
                    chars += char;

                    // previous non-whitespace character code
                    if (code !== SPACE) {
                      peak = code;
                    }
                  }
                }
              }

              // tail character codes
              trail = tail;
              tail = code;

              // visit every character
              caret++;
            }

            length = out.length;

            // preserve empty selector
            if (preserve > 0) {
              if (
                length === 0 &&
                children.length === 0 &&
                current[0].length === 0 === false
              ) {
                if (
                  id !== MEDIA ||
                  (current.length === 1 &&
                    (cascade > 0 ? nscopealt : nscope) === current[0])
                ) {
                  length = current.join(",").length + 2;
                }
              }
            }

            if (length > 0) {
              // cascade isolation mode?
              selector =
                cascade === 0 && id !== KEYFRAME ? isolate(current) : current;

              // execute plugins, block context
              if (plugged > 0) {
                result = proxy(
                  BLCKS,
                  out,
                  selector,
                  parent,
                  line,
                  column,
                  length,
                  id
                );

                if (result !== void 0 && (out = result).length === 0) {
                  return flat + out + children;
                }
              }

              out = selector.join(",") + "{" + out + "}";

              if (vendor * pattern > 0) {
                switch (pattern) {
                  // ::read-only
                  case READONLY: {
                    out = out.replace(readonlyptn, ":" + moz + "$1") + out;
                    break;
                  }
                  // ::placeholder
                  case PLACEHOLDER: {
                    out =
                      out.replace(plcholdrptn, "::" + webkit + "input-$1") +
                      out.replace(plcholdrptn, "::" + moz + "$1") +
                      out.replace(plcholdrptn, ":" + ms + "input-$1") +
                      out;
                    break;
                  }
                }
                pattern = 0;
              }
            }

            return flat + out + children;
          }

          /**
  * Select
  *
  * @param {Array<string>} parent
  * @param {string} current
  * @param {number} invert
  * @return {Array<string>}
  */
          function select(parent, current, invert) {
            var selectors = current.trim().split(selectorptn);
            var out = selectors;

            var length = selectors.length;
            var l = parent.length;

            switch (l) {
              // 0-1 parent selectors
              case 0:
              case 1: {
                for (
                  var i = 0, selector = l === 0 ? "" : parent[0] + " ";
                  i < length;
                  i++
                ) {
                  out[i] = scope(selector, out[i], invert, l).trim();
                }
                break;
              }
              // >2 parent selectors, nested
              default: {
                for (var i = 0, j = 0, out = []; i < length; i++) {
                  for (var k = 0; k < l; k++) {
                    out[j++] = scope(
                      parent[k] + " ",
                      selectors[i],
                      invert,
                      l
                    ).trim();
                  }
                }
              }
            }

            return out;
          }

          /**
  * Scope
  *
  * @param {string} parent
  * @param {string} current
  * @param {number} invert
  * @param {number} level
  * @return {string}
  */
          function scope(parent, current, invert, level) {
            var selector = current;
            var code = selector.charCodeAt(0);

            // trim leading whitespace
            if (code < 33) {
              code = (selector = selector.trim()).charCodeAt(0);
            }

            switch (code) {
              // &
              case AND: {
                switch (cascade + level) {
                  case 0:
                  case 1: {
                    if (parent.trim().length === 0) {
                      break;
                    }
                  }
                  default: {
                    return selector.replace(andptn, "$1" + parent.trim());
                  }
                }
                break;
              }
              // :
              case COLON: {
                switch (selector.charCodeAt(1)) {
                  // g in :global
                  case 103: {
                    if (escape > 0 && cascade > 0) {
                      return selector
                        .replace(escapeptn, "$1")
                        .replace(andptn, "$1" + nscope);
                    }
                    break;
                  }
                  default: {
                    // :hover
                    return parent.trim() + selector;
                  }
                }
              }
              default: {
                // html &
                if (invert * cascade > 0 && selector.indexOf("\f") > 0) {
                  return selector.replace(
                    andptn,
                    (parent.charCodeAt(0) === COLON ? "" : "$1") + parent.trim()
                  );
                }
              }
            }

            return parent + selector;
          }

          /**
  * Property
  *
  * @param {string} input
  * @param {number} first
  * @param {number} second
  * @param {number} third
  * @return {string}
  */
          function property(input, first, second, third) {
            var out = input + ";";
            var index = 0;
            var hash = first * 2 + second * 3 + third * 4;
            var cache;

            // animation: a, n, i characters
            if (hash === 944) {
              out = animation(out);
            } else if (vendor > 0) {
              // vendor prefix
              switch (hash) {
                // color/column, c, o, l
                case 963: {
                  // column
                  if (out.charCodeAt(5) === 110) {
                    out = webkit + out + out;
                  }
                  break;
                }
                // appearance: a, p, p
                case 978: {
                  out = webkit + out + moz + out + out;
                  break;
                }
                // hyphens: h, y, p
                // user-select: u, s, e
                case 1019:
                case 983: {
                  out = webkit + out + moz + out + ms + out + out;
                  break;
                }
                // background/backface-visibility, b, a, c
                case 883: {
                  // backface-visibility, -
                  if (out.charCodeAt(8) === DASH) {
                    out = webkit + out + out;
                  }
                  break;
                }
                // flex: f, l, e
                case 932: {
                  out = webkit + out + ms + out + out;
                  break;
                }
                // order: o, r, d
                case 964: {
                  out = webkit + out + ms + "flex" + "-" + out + out;
                  break;
                }
                // justify-content, j, u, s
                case 1023: {
                  cache = out
                    .substring(out.indexOf(":", 15))
                    .replace("flex-", "");
                  out =
                    webkit +
                    "box-pack" +
                    cache +
                    webkit +
                    out +
                    ms +
                    "flex-pack" +
                    cache +
                    out;
                  break;
                }
                // display(flex/inline-flex/inline-box): d, i, s
                case 975: {
                  index = (out = input).length - 10;
                  cache = (out.charCodeAt(index) === 33
                    ? out.substring(0, index)
                    : out)
                    .substring(8)
                    .trim();

                  switch ((hash =
                    cache.charCodeAt(0) + (cache.charCodeAt(7) | 0))) {
                    // inline-
                    case 203: {
                      // inline-box
                      if (cache.charCodeAt(8) > 110) {
                        out = out.replace(cache, webkit + cache) + ";" + out;
                      }
                      break;
                    }
                    // inline-flex
                    // flex
                    case 207:
                    case 102: {
                      out =
                        out.replace(
                          cache,
                          webkit + (hash > 102 ? "inline-" : "") + "box"
                        ) +
                        ";" +
                        out.replace(cache, webkit + cache) +
                        ";" +
                        out.replace(cache, ms + cache + "box") +
                        ";" +
                        out;
                    }
                  }

                  out += ";";
                  break;
                }
                // align-items, align-center, align-self: a, l, i, -
                case 938: {
                  if (out.charCodeAt(5) === DASH) {
                    switch (out.charCodeAt(6)) {
                      // align-items, i
                      case 105: {
                        cache = out.replace("-items", "");
                        out =
                          webkit +
                          out +
                          webkit +
                          "box-" +
                          cache +
                          ms +
                          "flex-" +
                          cache +
                          out;
                        break;
                      }
                      // align-self, s
                      case 115: {
                        out =
                          webkit +
                          out +
                          ms +
                          "flex-item-" +
                          out.replace("-self", "") +
                          out;
                        break;
                      }
                      // align-content
                      default: {
                        out =
                          webkit +
                          out +
                          ms +
                          "flex-line-pack" +
                          out.replace("align-content", "") +
                          out;
                      }
                    }
                  }
                  break;
                }
                // cursor, c, u, r
                case 1005: {
                  if (cursorptn.test(out)) {
                    out =
                      out.replace(colonptn, ":" + webkit) +
                      out.replace(colonptn, ":" + moz) +
                      out;
                  }
                  break;
                }
                // width: min-content / width: max-content
                case 953: {
                  if ((index = out.indexOf("-content", 9)) > 0) {
                    // width: min-content / width: max-content
                    cache = out.substring(index - 3);
                    out =
                      "width:" +
                      webkit +
                      cache +
                      "width:" +
                      moz +
                      cache +
                      "width:" +
                      cache;
                  }
                  break;
                }
                // text-size-adjust: t, e, x
                case 1015: {
                  if (input.charCodeAt(9) !== DASH) {
                    break;
                  }
                }
                // transform, transition: t, r, a
                case 962: {
                  out =
                    webkit +
                    out +
                    (out.charCodeAt(5) === 102 ? ms + out : "") +
                    out;

                  // transitions
                  if (
                    second + third === 211 &&
                    out.charCodeAt(13) === 105 &&
                    out.indexOf("transform", 10) > 0
                  ) {
                    out =
                      out
                        .substring(0, out.indexOf(";", 27) + 1)
                        .replace(transformptn, "$1" + webkit + "$2") + out;
                  }

                  break;
                }
                // writing-mode, w, r, i
                case 1000: {
                  cache = out.substring(13).trim();
                  index = cache.indexOf("-") + 1;

                  switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
                    // vertical-lr
                    case 226: {
                      cache = out.replace(writingptn, "tb");
                      break;
                    }
                    // vertical-rl
                    case 232: {
                      cache = out.replace(writingptn, "tb-rl");
                      break;
                    }
                    // horizontal-tb
                    case 220: {
                      cache = out.replace(writingptn, "lr");
                      break;
                    }
                    default: {
                      return out;
                    }
                  }

                  out = webkit + out + ms + cache + out;
                  break;
                }
              }
            }

            return out;
          }

          /**
  * Animation
  *
  * @param {string} input
  * @return {string}
  */
          function animation(input) {
            var length = input.length;
            var index = input.indexOf(":", 9) + 1;
            var declare = input.substring(0, index).trim();
            var body = input.substring(index, length - 1).trim();
            var out = "";

            // shorthand
            if (input.charCodeAt(9) !== DASH) {
              // split in case of multiple animations
              var list = body.split(animationptn);

              for (
                var i = 0, index = 0, length = list.length;
                i < length;
                index = 0, i++
              ) {
                var value = list[i];
                var items = value.split(propertiesptn);

                while ((value = items[index])) {
                  var peak = value.charCodeAt(0);

                  if (
                    keyed === 1 &&
                    // letters
                    ((peak > AT && peak < 90) ||
                      (peak > 96 && peak < 123) ||
                      peak === UNDERSCORE ||
                      // dash but not in sequence i.e --
                      (peak === DASH && value.charCodeAt(1) !== DASH))
                  ) {
                    // not a number/function
                    switch (isNaN(parseFloat(value)) +
                      (value.indexOf("(") !== -1)) {
                      case 1: {
                        switch (value) {
                          // not a valid reserved keyword
                          case "infinite":
                          case "alternate":
                          case "backwards":
                          case "running":
                          case "normal":
                          case "forwards":
                          case "both":
                          case "none":
                          case "linear":
                          case "ease":
                          case "ease-in":
                          case "ease-out":
                          case "ease-in-out":
                          case "paused":
                          case "reverse":
                          case "alternate-reverse":
                          case "inherit":
                          case "initial":
                          case "unset":
                          case "step-start":
                          case "step-end": {
                            break;
                          }
                          default: {
                            value += key;
                          }
                        }
                      }
                    }
                  }

                  items[index++] = value;
                }

                out += (i === 0 ? "" : ",") + items.join(" ");
              }
            } else {
              // animation-name, n
              out +=
                input.charCodeAt(10) === 110
                  ? body + (keyed === 1 ? key : "")
                  : body;
            }

            out = declare + out + ";";

            return vendor > 0 ? webkit + out + out : out;
          }

          /**
  * Isolate
  *
  * @param {Array<string>} current
  */
          function isolate(current) {
            for (
              var i = 0,
                length = current.length,
                selector = Array(length),
                padding,
                element;
              i < length;
              i++
            ) {
              // split individual elements in a selector i.e h1 h2 === [h1, h2]
              var elements = current[i].split(elementptn);
              var out = "";

              for (
                var j = 0, size = 0, tail = 0, code = 0, l = elements.length;
                j < l;
                j++
              ) {
                // empty element
                if ((size = (element = elements[j]).length) === 0 && l > 1) {
                  continue;
                }

                tail = out.charCodeAt(out.length - 1);
                code = element.charCodeAt(0);
                padding = "";

                if (j !== 0) {
                  // determine if we need padding
                  switch (tail) {
                    case STAR:
                    case TILDE:
                    case GREATERTHAN:
                    case PLUS:
                    case SPACE:
                    case OPENPARENTHESES: {
                      break;
                    }
                    default: {
                      padding = " ";
                    }
                  }
                }

                switch (code) {
                  case AND: {
                    element = padding + nscopealt;
                  }
                  case TILDE:
                  case GREATERTHAN:
                  case PLUS:
                  case SPACE:
                  case CLOSEPARENTHESES:
                  case OPENPARENTHESES: {
                    break;
                  }
                  case OPENBRACKET: {
                    element = padding + element + nscopealt;
                    break;
                  }
                  case COLON: {
                    switch (element.charCodeAt(1) * 2 +
                      element.charCodeAt(2) * 3) {
                      // :global
                      case 530: {
                        if (escape > 0) {
                          element = padding + element.substring(8, size - 1);
                          break;
                        }
                      }
                      // :hover, :nth-child(), ...
                      default: {
                        if (j < 1 || elements[j - 1].length < 1) {
                          element = padding + nscopealt + element;
                        }
                      }
                    }
                    break;
                  }
                  case COMMA: {
                    padding = "";
                  }
                  default: {
                    if (size > 1 && element.indexOf(":") > 0) {
                      element =
                        padding +
                        element.replace(pseudoptn, "$1" + nscopealt + "$2");
                    } else {
                      element = padding + element + nscopealt;
                    }
                  }
                }

                out += element;
              }

              selector[i] = out.replace(formatptn, "").trim();
            }

            return selector;
          }

          /**
  * Proxy
  *
  * @param {number} context
  * @param {string} content
  * @param {Array<string>} selectors
  * @param {Array<string>} parents
  * @param {number} line
  * @param {number} column
  * @param {number} length
  * @param {number} id
  * @return {(string|void|*)}
  */
          function proxy(
            context,
            content,
            selectors,
            parents,
            line,
            column,
            length,
            id
          ) {
            for (var i = 0, out = content, next; i < plugged; i++) {
              switch ((next = plugins[i].call(
                stylis,
                context,
                out,
                selectors,
                parents,
                line,
                column,
                length,
                id
              ))) {
                case void 0:
                case false:
                case true:
                case null: {
                  break;
                }
                default: {
                  out = next;
                }
              }
            }

            switch (out) {
              case void 0:
              case false:
              case true:
              case null:
              case content: {
                break;
              }
              default: {
                return out;
              }
            }
          }

          /**
  * Minify
  *
  * @param {(string|*)} output
  * @return {string}
  */
          function minify(output) {
            return output
              .replace(formatptn, "")
              .replace(beforeptn, "")
              .replace(afterptn, "$1")
              .replace(tailptn, "$1")
              .replace(whiteptn, " ");
          }

          /**
  * Use
  *
  * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
  */
          function use(plugin) {
            switch (plugin) {
              case void 0:
              case null: {
                plugged = plugins.length = 0;
                break;
              }
              default: {
                switch (plugin.constructor) {
                  case Array: {
                    for (var i = 0, length = plugin.length; i < length; i++) {
                      use(plugin[i]);
                    }
                    break;
                  }
                  case Function: {
                    plugins[plugged++] = plugin;
                    break;
                  }
                  case Boolean: {
                    unkwn = !!plugin | 0;
                  }
                }
              }
            }

            return use;
          }

          /**
  * Set
  *
  * @param {*} options
  */
          function set(options) {
            for (var name in options) {
              var value = options[name];
              switch (name) {
                case "keyframe":
                  keyed = value | 0;
                  break;
                case "global":
                  escape = value | 0;
                  break;
                case "cascade":
                  cascade = value | 0;
                  break;
                case "compress":
                  compress = value | 0;
                  break;
                case "prefix":
                  vendor = value | 0;
                  break;
                case "semicolon":
                  semicolon = value | 0;
                  break;
                case "preserve":
                  preserve = value | 0;
                  break;
              }
            }

            return set;
          }

          /**
  * Stylis
  *
  * @param {string} selector
  * @param {string} input
  * @return {*}
  */
          function stylis(selector, input) {
            if (this !== void 0 && this.constructor === stylis) {
              return factory(selector);
            }

            // setup
            var ns = selector;
            var code = ns.charCodeAt(0);

            // trim leading whitespace
            if (code < 33) {
              code = (ns = ns.trim()).charCodeAt(0);
            }

            // keyframe/animation namespace
            if (keyed > 0) {
              key = ns.replace(invalidptn, code === OPENBRACKET ? "" : "-");
            }

            // reset, used to assert if a plugin is moneky-patching the return value
            code = 1;

            // cascade/isolate
            if (cascade === 1) {
              nscope = ns;
            } else {
              nscopealt = ns;
            }

            var selectors = [nscope];
            var result;

            // execute plugins, pre-process context
            if (plugged > 0) {
              result = proxy(
                PREPS,
                input,
                selectors,
                selectors,
                line,
                column,
                0,
                0
              );

              if (result !== void 0 && typeof result === "string") {
                input = result;
              }
            }

            // build
            var output = compile(array, selectors, input, 0);

            // execute plugins, post-process context
            if (plugged > 0) {
              result = proxy(
                POSTS,
                output,
                selectors,
                selectors,
                line,
                column,
                output.length,
                0
              );

              // bypass minification
              if (result !== void 0 && typeof (output = result) !== "string") {
                code = 0;
              }
            }

            // reset
            key = "";
            nscope = "";
            nscopealt = "";
            pattern = 0;
            line = 1;
            column = 1;

            return compress * code === 0 ? output : minify(output);
          }

          stylis["use"] = use;
          stylis["set"] = set;

          if (options !== void 0) {
            set(options);
          }

          return stylis;
        }
      );

      /***/
    },

    /***/ /***/ eW0v: function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* unused harmony export version */
      /* unused harmony export DOM */
      /* unused harmony export Children */
      /* unused harmony export render */
      /* unused harmony export createClass */
      /* unused harmony export createFactory */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "c",
        function() {
          return createElement;
        }
      );
      /* unused harmony export cloneElement */
      /* unused harmony export isValidElement */
      /* unused harmony export findDOMNode */
      /* unused harmony export unmountComponentAtNode */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function() {
          return Component$1;
        }
      );
      /* unused harmony export PureComponent */
      /* unused harmony export unstable_renderSubtreeIntoContainer */
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(
        "5D9O"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_prop_types__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(
        "KM04"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_1_preact__
      );
      /* unused harmony reexport PropTypes */

      var version = "15.1.0"; // trick libraries to think we are react

      var ELEMENTS = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(
        " "
      );

      var REACT_ELEMENT_TYPE =
        (typeof Symbol !== "undefined" &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        0xeac7;

      var COMPONENT_WRAPPER_KEY =
        typeof Symbol !== "undefined"
          ? Symbol.for("__preactCompatWrapper")
          : "__preactCompatWrapper";

      // don't autobind these methods since they already have guaranteed context.
      var AUTOBIND_BLACKLIST = {
        constructor: 1,
        render: 1,
        shouldComponentUpdate: 1,
        componentWillReceiveProps: 1,
        componentWillUpdate: 1,
        componentDidUpdate: 1,
        componentWillMount: 1,
        componentDidMount: 1,
        componentWillUnmount: 1,
        componentDidUnmount: 1
      };

      var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;

      var BYPASS_HOOK = {};

      /*global process*/
      var DEV =
        typeof process === "undefined" ||
        !process.env ||
        "production" !== "production";

      // a component that renders nothing. Used to replace components for unmountComponentAtNode.
      function EmptyComponent() {
        return null;
      }

      // make react think we're react.
      var VNode = __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_1_preact__["h"]
      )("a", null).constructor;
      VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
      VNode.prototype.preactCompatUpgraded = false;
      VNode.prototype.preactCompatNormalized = false;

      Object.defineProperty(VNode.prototype, "type", {
        get: function get() {
          return this.nodeName;
        },
        set: function set(v) {
          this.nodeName = v;
        },
        configurable: true
      });

      Object.defineProperty(VNode.prototype, "props", {
        get: function get() {
          return this.attributes;
        },
        set: function set(v) {
          this.attributes = v;
        },
        configurable: true
      });

      var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
      __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function(e) {
        if (oldEventHook) {
          e = oldEventHook(e);
        }
        e.persist = Object;
        e.nativeEvent = e;
        return e;
      };

      var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
      __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function(vnode) {
        if (!vnode.preactCompatUpgraded) {
          vnode.preactCompatUpgraded = true;

          var tag = vnode.nodeName,
            attrs = (vnode.attributes = extend({}, vnode.attributes));

          if (typeof tag === "function") {
            if (
              tag[COMPONENT_WRAPPER_KEY] === true ||
              (tag.prototype && "isReactComponent" in tag.prototype)
            ) {
              if (vnode.children && String(vnode.children) === "") {
                vnode.children = undefined;
              }
              if (vnode.children) {
                attrs.children = vnode.children;
              }

              if (!vnode.preactCompatNormalized) {
                normalizeVNode(vnode);
              }
              handleComponentVNode(vnode);
            }
          } else {
            if (vnode.children && String(vnode.children) === "") {
              vnode.children = undefined;
            }
            if (vnode.children) {
              attrs.children = vnode.children;
            }

            if (attrs.defaultValue) {
              if (!attrs.value && attrs.value !== 0) {
                attrs.value = attrs.defaultValue;
              }
              delete attrs.defaultValue;
            }

            handleElementVNode(vnode, attrs);
          }
        }

        if (oldVnodeHook) {
          oldVnodeHook(vnode);
        }
      };

      function handleComponentVNode(vnode) {
        var tag = vnode.nodeName,
          a = vnode.attributes;

        vnode.attributes = {};
        if (tag.defaultProps) {
          extend(vnode.attributes, tag.defaultProps);
        }
        if (a) {
          extend(vnode.attributes, a);
        }
      }

      function handleElementVNode(vnode, a) {
        var shouldSanitize, attrs, i;
        if (a) {
          for (i in a) {
            if ((shouldSanitize = CAMEL_PROPS.test(i))) {
              break;
            }
          }
          if (shouldSanitize) {
            attrs = vnode.attributes = {};
            for (i in a) {
              if (a.hasOwnProperty(i)) {
                attrs[
                  CAMEL_PROPS.test(i)
                    ? i.replace(/([A-Z0-9])/, "-$1").toLowerCase()
                    : i
                ] =
                  a[i];
              }
            }
          }
        }
      }

      // proxy render() since React returns a Component reference.
      function render$1(vnode, parent, callback) {
        var prev =
          parent &&
          parent._preactCompatRendered &&
          parent._preactCompatRendered.base;

        // ignore impossible previous renders
        if (prev && prev.parentNode !== parent) {
          prev = null;
        }

        // default to first Element child
        if (!prev) {
          prev = parent.children[0];
        }

        // remove unaffected siblings
        for (var i = parent.childNodes.length; i--; ) {
          if (parent.childNodes[i] !== prev) {
            parent.removeChild(parent.childNodes[i]);
          }
        }

        var out = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1_preact__["render"]
        )(vnode, parent, prev);
        if (parent) {
          parent._preactCompatRendered =
            out && (out._component || { base: out });
        }
        if (typeof callback === "function") {
          callback();
        }
        return (out && out._component) || out;
      }

      var ContextProvider = function ContextProvider() {};

      ContextProvider.prototype.getChildContext = function() {
        return this.props.context;
      };
      ContextProvider.prototype.render = function(props) {
        return props.children[0];
      };

      function renderSubtreeIntoContainer(
        parentComponent,
        vnode,
        container,
        callback
      ) {
        var wrap = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1_preact__["h"]
        )(ContextProvider, { context: parentComponent.context }, vnode);
        var c = render$1(wrap, container);
        if (callback) {
          callback(c);
        }
        return c._component || c.base;
      }

      function unmountComponentAtNode(container) {
        var existing =
          container._preactCompatRendered &&
          container._preactCompatRendered.base;
        if (existing && existing.parentNode === container) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
              EmptyComponent
            ),
            container,
            existing
          );
          return true;
        }
        return false;
      }

      var ARR = [];

      // This API is completely unnecessary for Preact, so it's basically passthrough.
      var Children = {
        map: function map(children, fn, ctx) {
          if (children == null) {
            return null;
          }
          children = Children.toArray(children);
          if (ctx && ctx !== children) {
            fn = fn.bind(ctx);
          }
          return children.map(fn);
        },
        forEach: function forEach(children, fn, ctx) {
          if (children == null) {
            return null;
          }
          children = Children.toArray(children);
          if (ctx && ctx !== children) {
            fn = fn.bind(ctx);
          }
          children.forEach(fn);
        },
        count: function count(children) {
          return (children && children.length) || 0;
        },
        only: function only(children) {
          children = Children.toArray(children);
          if (children.length !== 1) {
            throw new Error("Children.only() expects only one child.");
          }
          return children[0];
        },
        toArray: function toArray(children) {
          if (children == null) {
            return [];
          }
          return Array.isArray && Array.isArray(children)
            ? children
            : ARR.concat(children);
        }
      };

      /** Track current render() component for ref assignment */
      var currentComponent;

      function createFactory(type) {
        return createElement.bind(null, type);
      }

      var DOM = {};
      for (var i = ELEMENTS.length; i--; ) {
        DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
      }

      function upgradeToVNodes(arr, offset) {
        for (var i = offset || 0; i < arr.length; i++) {
          var obj = arr[i];
          if (Array.isArray(obj)) {
            upgradeToVNodes(obj);
          } else if (
            obj &&
            typeof obj === "object" &&
            !isValidElement(obj) &&
            ((obj.props && obj.type) ||
              (obj.attributes && obj.nodeName) ||
              obj.children)
          ) {
            arr[i] = createElement(
              obj.type || obj.nodeName,
              obj.props || obj.attributes,
              obj.children
            );
          }
        }
      }

      function isStatelessComponent(c) {
        return typeof c === "function" && !(c.prototype && c.prototype.render);
      }

      // wraps stateless functional components in a PropTypes validator
      function wrapStatelessComponent(WrappedComponent) {
        return createClass({
          displayName: WrappedComponent.displayName || WrappedComponent.name,
          render: function render() {
            return WrappedComponent(this.props, this.context);
          }
        });
      }

      function statelessComponentHook(Ctor) {
        var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
        if (Wrapped) {
          return Wrapped === true ? Ctor : Wrapped;
        }

        Wrapped = wrapStatelessComponent(Ctor);

        Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, {
          configurable: true,
          value: true
        });
        Wrapped.displayName = Ctor.displayName;
        Wrapped.propTypes = Ctor.propTypes;
        Wrapped.defaultProps = Ctor.defaultProps;

        Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, {
          configurable: true,
          value: Wrapped
        });

        return Wrapped;
      }

      function createElement() {
        var args = [],
          len = arguments.length;
        while (len--) {
          args[len] = arguments[len];
        }
        upgradeToVNodes(args, 2);
        return normalizeVNode(
          __WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args)
        );
      }

      function normalizeVNode(vnode) {
        vnode.preactCompatNormalized = true;

        applyClassName(vnode);

        if (isStatelessComponent(vnode.nodeName)) {
          vnode.nodeName = statelessComponentHook(vnode.nodeName);
        }

        var ref = vnode.attributes.ref,
          type = ref && typeof ref;
        if (currentComponent && (type === "string" || type === "number")) {
          vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
        }

        applyEventNormalization(vnode);

        return vnode;
      }

      function cloneElement$1(element, props) {
        var children = [],
          len = arguments.length - 2;
        while (len-- > 0) {
          children[len] = arguments[len + 2];
        }
        if (!isValidElement(element)) {
          return element;
        }
        var elementProps = element.attributes || element.props;
        var node = __webpack_require__.i(
          __WEBPACK_IMPORTED_MODULE_1_preact__["h"]
        )(
          element.nodeName || element.type,
          elementProps,
          element.children || (elementProps && elementProps.children)
        );
        // Only provide the 3rd argument if needed.
        // Arguments 3+ overwrite element.children in preactCloneElement
        var cloneArgs = [node, props];
        if (children && children.length) {
          cloneArgs.push(children);
        } else if (props && props.children) {
          cloneArgs.push(props.children);
        }
        return normalizeVNode(
          __WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(
            void 0,
            cloneArgs
          )
        );
      }

      function isValidElement(element) {
        return (
          element &&
          (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE)
        );
      }

      function createStringRefProxy(name, component) {
        return (
          component._refProxies[name] ||
          (component._refProxies[name] = function(resolved) {
            if (component && component.refs) {
              component.refs[name] = resolved;
              if (resolved === null) {
                delete component._refProxies[name];
                component = null;
              }
            }
          })
        );
      }

      function applyEventNormalization(ref) {
        var nodeName = ref.nodeName;
        var attributes = ref.attributes;

        if (!attributes || typeof nodeName !== "string") {
          return;
        }
        var props = {};
        for (var i in attributes) {
          props[i.toLowerCase()] = i;
        }
        if (props.ondoubleclick) {
          attributes.ondblclick = attributes[props.ondoubleclick];
          delete attributes[props.ondoubleclick];
        }
        // for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
        if (
          props.onchange &&
          (nodeName === "textarea" ||
            (nodeName.toLowerCase() === "input" &&
              !/^fil|che|rad/i.test(attributes.type)))
        ) {
          var normalized = props.oninput || "oninput";
          if (!attributes[normalized]) {
            attributes[normalized] = multihook([
              attributes[normalized],
              attributes[props.onchange]
            ]);
            delete attributes[props.onchange];
          }
        }
      }

      function applyClassName(ref) {
        var attributes = ref.attributes;

        if (!attributes) {
          return;
        }
        var cl = attributes.className || attributes.class;
        if (cl) {
          attributes.className = cl;
        }
      }

      function extend(base, props) {
        for (var key in props) {
          if (props.hasOwnProperty(key)) {
            base[key] = props[key];
          }
        }
        return base;
      }

      function shallowDiffers(a, b) {
        for (var i in a) {
          if (!(i in b)) {
            return true;
          }
        }
        for (var i$1 in b) {
          if (a[i$1] !== b[i$1]) {
            return true;
          }
        }
        return false;
      }

      function findDOMNode(component) {
        return (component && component.base) || component;
      }

      function F() {}

      function createClass(obj) {
        function cl(props, context) {
          bindAll(this);
          Component$1.call(this, props, context, BYPASS_HOOK);
          newComponentHook.call(this, props, context);
        }

        obj = extend({ constructor: cl }, obj);

        // We need to apply mixins here so that getDefaultProps is correctly mixed
        if (obj.mixins) {
          applyMixins(obj, collateMixins(obj.mixins));
        }
        if (obj.statics) {
          extend(cl, obj.statics);
        }
        if (obj.propTypes) {
          cl.propTypes = obj.propTypes;
        }
        if (obj.defaultProps) {
          cl.defaultProps = obj.defaultProps;
        }
        if (obj.getDefaultProps) {
          cl.defaultProps = obj.getDefaultProps();
        }

        F.prototype = Component$1.prototype;
        cl.prototype = extend(new F(), obj);

        cl.displayName = obj.displayName || "Component";

        return cl;
      }

      // Flatten an Array of mixins to a map of method name to mixin implementations
      function collateMixins(mixins) {
        var keyed = {};
        for (var i = 0; i < mixins.length; i++) {
          var mixin = mixins[i];
          for (var key in mixin) {
            if (mixin.hasOwnProperty(key) && typeof mixin[key] === "function") {
              (keyed[key] || (keyed[key] = [])).push(mixin[key]);
            }
          }
        }
        return keyed;
      }

      // apply a mapping of Arrays of mixin methods to a component prototype
      function applyMixins(proto, mixins) {
        for (var key in mixins) {
          if (mixins.hasOwnProperty(key)) {
            proto[key] = multihook(
              mixins[key].concat(proto[key] || ARR),
              key === "getDefaultProps" ||
                key === "getInitialState" ||
                key === "getChildContext"
            );
          }
        }
      }

      function bindAll(ctx) {
        for (var i in ctx) {
          var v = ctx[i];
          if (
            typeof v === "function" &&
            !v.__bound &&
            !AUTOBIND_BLACKLIST.hasOwnProperty(i)
          ) {
            (ctx[i] = v.bind(ctx)).__bound = true;
          }
        }
      }

      function callMethod(ctx, m, args) {
        if (typeof m === "string") {
          m = ctx.constructor.prototype[m];
        }
        if (typeof m === "function") {
          return m.apply(ctx, args);
        }
      }

      function multihook(hooks, skipDuplicates) {
        return function() {
          var arguments$1 = arguments;
          var this$1 = this;

          var ret;
          for (var i = 0; i < hooks.length; i++) {
            var r = callMethod(this$1, hooks[i], arguments$1);

            if (skipDuplicates && r != null) {
              if (!ret) {
                ret = {};
              }
              for (var key in r) {
                if (r.hasOwnProperty(key)) {
                  ret[key] = r[key];
                }
              }
            } else if (typeof r !== "undefined") {
              ret = r;
            }
          }
          return ret;
        };
      }

      function newComponentHook(props, context) {
        propsHook.call(this, props, context);
        this.componentWillReceiveProps = multihook([
          propsHook,
          this.componentWillReceiveProps || "componentWillReceiveProps"
        ]);
        this.render = multihook([
          propsHook,
          beforeRender,
          this.render || "render",
          afterRender
        ]);
      }

      function propsHook(props, context) {
        if (!props) {
          return;
        }

        // React annoyingly special-cases single children, and some react components are ridiculously strict about this.
        var c = props.children;
        if (c && Array.isArray(c) && c.length === 1) {
          props.children = c[0];

          // but its totally still going to be an Array.
          if (props.children && typeof props.children === "object") {
            props.children.length = 1;
            props.children[0] = props.children;
          }
        }

        // add proptype checking
        if (DEV) {
          var ctor = typeof this === "function" ? this : this.constructor,
            propTypes = this.propTypes || ctor.propTypes;
          var displayName = this.displayName || ctor.name;

          if (propTypes) {
            __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(
              propTypes,
              props,
              "prop",
              displayName
            );
          }
        }
      }

      function beforeRender(props) {
        currentComponent = this;
      }

      function afterRender() {
        if (currentComponent === this) {
          currentComponent = null;
        }
      }

      function Component$1(props, context, opts) {
        __WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(
          this,
          props,
          context
        );
        this.state = this.getInitialState ? this.getInitialState() : {};
        this.refs = {};
        this._refProxies = {};
        if (opts !== BYPASS_HOOK) {
          newComponentHook.call(this, props, context);
        }
      }
      extend(
        (Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__[
          "Component"
        ]()),
        {
          constructor: Component$1,

          isReactComponent: {},

          replaceState: function replaceState(state, callback) {
            var this$1 = this;

            this.setState(state, callback);
            for (var i in this$1.state) {
              if (!(i in state)) {
                delete this$1.state[i];
              }
            }
          },

          getDOMNode: function getDOMNode() {
            return this.base;
          },

          isMounted: function isMounted() {
            return !!this.base;
          }
        }
      );

      function PureComponent(props, context) {
        Component$1.call(this, props, context);
      }
      F.prototype = Component$1.prototype;
      PureComponent.prototype = new F();
      PureComponent.prototype.isPureReactComponent = true;
      PureComponent.prototype.shouldComponentUpdate = function(props, state) {
        return (
          shallowDiffers(this.props, props) || shallowDiffers(this.state, state)
        );
      };

      var index = {
        version: version,
        DOM: DOM,
        PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
        Children: Children,
        render: render$1,
        createClass: createClass,
        createFactory: createFactory,
        createElement: createElement,
        cloneElement: cloneElement$1,
        isValidElement: isValidElement,
        findDOMNode: findDOMNode,
        unmountComponentAtNode: unmountComponentAtNode,
        Component: Component$1,
        PureComponent: PureComponent,
        unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
      };

      /* harmony default export */ __webpack_exports__["a"] = index;
      //# sourceMappingURL=preact-compat.es.js.map

      /***/
    },

    /***/ /***/ qLaj: function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(
        "KM04"
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(
        __WEBPACK_IMPORTED_MODULE_0_preact__
      );
      /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor__ = __webpack_require__(
        "ESrk"
      );

      var _ref = __webpack_require__.i(
        __WEBPACK_IMPORTED_MODULE_0_preact__["h"]
      )(
        "div",
        null,
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* default */],
          null
        )
      );

      var App = function App() {
        return _ref;
      };

      /* harmony default export */ __webpack_exports__["a"] = App;

      /***/
    },

    /***/ /***/ rq4c: function(module, exports) {
      // removed by extract-text-webpack-plugin
      /***/
    },

    /***/ /***/ vS2H: function(
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      var storage = {
        setItem: function setItem(key, value) {
          if (typeof window !== "undefined") {
            localStorage.setItem(key, value);
          }
        },
        getItem: function getItem(key) {
          if (typeof window !== "undefined") {
            localStorage.getItem(key);
          }
        }
      };

      /* harmony default export */ __webpack_exports__["a"] = storage;

      /***/
    },

    /***/ /***/ "wRU+": function(module, exports, __webpack_require__) {
      "use strict";
      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

      /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

      var validateFormat = function validateFormat(format) {};

      if (false) {
        validateFormat = function validateFormat(format) {
          if (format === undefined) {
            throw new Error("invariant requires an error message argument");
          }
        };
      }

      function invariant(condition, format, a, b, c, d, e, f) {
        validateFormat(format);

        if (!condition) {
          var error;
          if (format === undefined) {
            error = new Error(
              "Minified exception occurred; use the non-minified dev environment " +
                "for the full error message and additional helpful warnings."
            );
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
              format.replace(/%s/g, function() {
                return args[argIndex++];
              })
            );
            error.name = "Invariant Violation";
          }

          error.framesToPop = 1; // we don't care about invariant's own frame
          throw error;
        }
      }

      module.exports = invariant;

      /***/
    },

    /***/ /***/ wVGV: function(module, exports, __webpack_require__) {
      "use strict";
      /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

      var emptyFunction = __webpack_require__("UQex");
      var invariant = __webpack_require__("wRU+");
      var ReactPropTypesSecret = __webpack_require__("Asjh");

      module.exports = function() {
        function shim(
          props,
          propName,
          componentName,
          location,
          propFullName,
          secret
        ) {
          if (secret === ReactPropTypesSecret) {
            // It is still safe when called from React.
            return;
          }
          invariant(
            false,
            "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
              "Use PropTypes.checkPropTypes() to call them. " +
              "Read more at http://fb.me/use-check-prop-types"
          );
        }
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        // Important!
        // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
        var ReactPropTypes = {
          array: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,

          any: shim,
          arrayOf: getShim,
          element: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim
        };

        ReactPropTypes.checkPropTypes = emptyFunction;
        ReactPropTypes.PropTypes = ReactPropTypes;

        return ReactPropTypes;
      };

      /***/
    },

    /***/ /***/ xIVz: function(module, exports) {
      module.exports = isFunction;

      var toString = Object.prototype.toString;

      function isFunction(fn) {
        var string = toString.call(fn);
        return (
          string === "[object Function]" ||
          (typeof fn === "function" && string !== "[object RegExp]") ||
          (typeof window !== "undefined" &&
            // IE8 and below
            (fn === window.setTimeout ||
              fn === window.alert ||
              fn === window.confirm ||
              fn === window.prompt))
        );
      }

      /***/
    }

    /******/
  }
);
//# sourceMappingURL=ssr-bundle.js.map
