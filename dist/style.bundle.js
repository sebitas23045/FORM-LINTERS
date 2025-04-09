"use strict";
(self.webpackChunkformulario = self.webpackChunkformulario || []).push([
  [314],
  {
    56: (n, e, t) => {
      n.exports = function (n) {
        var e = t.nc;
        e && n.setAttribute("nonce", e);
      };
    },
    72: (n) => {
      var e = [];
      function t(n) {
        for (var t = -1, r = 0; r < e.length; r++)
          if (e[r].identifier === n) {
            t = r;
            break;
          }
        return t;
      }
      function r(n, r) {
        for (var a = {}, i = [], A = 0; A < n.length; A++) {
          var c = n[A],
            s = r.base ? c[0] + r.base : c[0],
            d = a[s] || 0,
            l = "".concat(s, " ").concat(d);
          a[s] = d + 1;
          var u = t(l),
            p = {
              css: c[1],
              media: c[2],
              sourceMap: c[3],
              supports: c[4],
              layer: c[5],
            };
          if (-1 !== u) e[u].references++, e[u].updater(p);
          else {
            var g = o(p, r);
            (r.byIndex = A),
              e.splice(A, 0, { identifier: l, updater: g, references: 1 });
          }
          i.push(l);
        }
        return i;
      }
      function o(n, e) {
        var t = e.domAPI(e);
        return (
          t.update(n),
          function (e) {
            if (e) {
              if (
                e.css === n.css &&
                e.media === n.media &&
                e.sourceMap === n.sourceMap &&
                e.supports === n.supports &&
                e.layer === n.layer
              )
                return;
              t.update((n = e));
            } else t.remove();
          }
        );
      }
      n.exports = function (n, o) {
        var a = r((n = n || []), (o = o || {}));
        return function (n) {
          n = n || [];
          for (var i = 0; i < a.length; i++) {
            var A = t(a[i]);
            e[A].references--;
          }
          for (var c = r(n, o), s = 0; s < a.length; s++) {
            var d = t(a[s]);
            0 === e[d].references && (e[d].updater(), e.splice(d, 1));
          }
          a = c;
        };
      };
    },
    113: (n) => {
      n.exports = function (n, e) {
        if (e.styleSheet) e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      };
    },
    314: (n) => {
      n.exports = function (n) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var t = "",
                r = void 0 !== e[5];
              return (
                e[4] && (t += "@supports (".concat(e[4], ") {")),
                e[2] && (t += "@media ".concat(e[2], " {")),
                r &&
                  (t += "@layer".concat(
                    e[5].length > 0 ? " ".concat(e[5]) : "",
                    " {",
                  )),
                (t += n(e)),
                r && (t += "}"),
                e[2] && (t += "}"),
                e[4] && (t += "}"),
                t
              );
            }).join("");
          }),
          (e.i = function (n, t, r, o, a) {
            "string" == typeof n && (n = [[null, n, void 0]]);
            var i = {};
            if (r)
              for (var A = 0; A < this.length; A++) {
                var c = this[A][0];
                null != c && (i[c] = !0);
              }
            for (var s = 0; s < n.length; s++) {
              var d = [].concat(n[s]);
              (r && i[d[0]]) ||
                (void 0 !== a &&
                  (void 0 === d[5] ||
                    (d[1] = "@layer"
                      .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                      .concat(d[1], "}")),
                  (d[5] = a)),
                t &&
                  (d[2]
                    ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")),
                      (d[2] = t))
                    : (d[2] = t)),
                o &&
                  (d[4]
                    ? ((d[1] = "@supports ("
                        .concat(d[4], ") {")
                        .concat(d[1], "}")),
                      (d[4] = o))
                    : (d[4] = "".concat(o))),
                e.push(d));
            }
          }),
          e
        );
      };
    },
    354: (n) => {
      n.exports = function (n) {
        var e = n[1],
          t = n[3];
        if (!t) return e;
        if ("function" == typeof btoa) {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
            o =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                r,
              ),
            a = "/*# ".concat(o, " */");
          return [e].concat([a]).join("\n");
        }
        return [e].join("\n");
      };
    },
    379: (n, e, t) => {
      t.d(e, { A: () => u });
      var r = t(354),
        o = t.n(r),
        a = t(314),
        i = t.n(a),
        A = t(417),
        c = t.n(A),
        s = new URL(t(886), t.b),
        d = i()(o()),
        l = c()(s);
      d.push([
        n.id,
        `body {\n  color: rgb(255, 255, 255);\n  margin: 0;\n}\n\nbody::before {\n  content: " ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  z-index: -1;\n  background-image:\n    linear-gradient(115deg, rgba(54, 178, 235, 0.5), rgba(9, 86, 228, 0.5)),\n    url(${l});\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\nh1 {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n  margin: 1em auto;\n  padding: 0;\n  font-size: 3em;\n}\n\np {\n  font-family: 'Italianno', cursive;\n  font-weight: 300;\n  text-align: center;\n  margin: 5px auto 50px auto;\n  padding: 0;\n  font-size: 1.5em;\n}\n\n#survey-form {\n  width: 60%;\n  margin: 0 auto;\n  background-color: rgba(3, 3, 17, 0.5);\n  padding: 2em;\n  border-radius: 0.5em;\n  max-width: 800px;\n  min-width: 200px;\n}\n\nfieldset {\n  border: none;\n  margin: 0;\n  padding: auto;\n}\n\ninput,\nselect,\ntextarea {\n  display: block;\n  width: 100%;\n  padding: 0.2em;\n  margin: 10px 0 0 0;\n  border: none;\n  min-height: 1em;\n  border-radius: 0.5em;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  background-color: rgba(40, 45, 133, 0.5);\n}\n\nlabel {\n  display: block;\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  font-weight: bolder;\n}\n\n.inline {\n  display: inline-block;\n  width: unset;\n  margin: 0 0.3em;\n  padding: auto;\n  vertical-align: middle;\n}\n\ninput[type="submit"] {\n  display: block;\n  width: 25vw;\n  margin: auto;\n  padding: auto;\n  color: rgb(0, 0, 0);\n  background-color: rgb(195, 185, 174);\n  border-color: rgb(0, 0, 0);\n  font-weight: bolder;\n}\n`,
        "",
        {
          version: 3,
          sources: ["webpack://./src/assets/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX;;2CAE8B;EAC9B,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,yCAAyC;EACzC,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;EAC1B,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,qCAAqC;EACrC,YAAY;EACZ,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,aAAa;AACf;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,iCAAiC;EACjC,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iCAAiC;EACjC,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,0BAA0B;EAC1B,mBAAmB;AACrB",
          sourcesContent: [
            "body {\n  color: rgb(255, 255, 255);\n  margin: 0;\n}\n\nbody::before {\n  content: \" \";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  z-index: -1;\n  background-image:\n    linear-gradient(115deg, rgba(54, 178, 235, 0.5), rgba(9, 86, 228, 0.5)),\n    url(./crab-9179589_1280.jpg);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\nh1 {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n  margin: 1em auto;\n  padding: 0;\n  font-size: 3em;\n}\n\np {\n  font-family: 'Italianno', cursive;\n  font-weight: 300;\n  text-align: center;\n  margin: 5px auto 50px auto;\n  padding: 0;\n  font-size: 1.5em;\n}\n\n#survey-form {\n  width: 60%;\n  margin: 0 auto;\n  background-color: rgba(3, 3, 17, 0.5);\n  padding: 2em;\n  border-radius: 0.5em;\n  max-width: 800px;\n  min-width: 200px;\n}\n\nfieldset {\n  border: none;\n  margin: 0;\n  padding: auto;\n}\n\ninput,\nselect,\ntextarea {\n  display: block;\n  width: 100%;\n  padding: 0.2em;\n  margin: 10px 0 0 0;\n  border: none;\n  min-height: 1em;\n  border-radius: 0.5em;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  background-color: rgba(40, 45, 133, 0.5);\n}\n\nlabel {\n  display: block;\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  font-weight: bolder;\n}\n\n.inline {\n  display: inline-block;\n  width: unset;\n  margin: 0 0.3em;\n  padding: auto;\n  vertical-align: middle;\n}\n\ninput[type=\"submit\"] {\n  display: block;\n  width: 25vw;\n  margin: auto;\n  padding: auto;\n  color: rgb(0, 0, 0);\n  background-color: rgb(195, 185, 174);\n  border-color: rgb(0, 0, 0);\n  font-weight: bolder;\n}\n",
          ],
          sourceRoot: "",
        },
      ]);
      const u = d;
    },
    417: (n) => {
      n.exports = function (n, e) {
        return (
          e || (e = {}),
          n
            ? ((n = String(n.__esModule ? n.default : n)),
              /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
              e.hash && (n += e.hash),
              /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                : n)
            : n
        );
      };
    },
    540: (n) => {
      n.exports = function (n) {
        var e = document.createElement("style");
        return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
      };
    },
    648: (n, e, t) => {
      var r = t(72),
        o = t.n(r),
        a = t(825),
        i = t.n(a),
        A = t(659),
        c = t.n(A),
        s = t(56),
        d = t.n(s),
        l = t(540),
        u = t.n(l),
        p = t(113),
        g = t.n(p),
        f = t(379),
        m = {};
      (m.styleTagTransform = g()),
        (m.setAttributes = d()),
        (m.insert = c().bind(null, "head")),
        (m.domAPI = i()),
        (m.insertStyleElement = u()),
        o()(f.A, m),
        f.A && f.A.locals && f.A.locals;
    },
    659: (n) => {
      var e = {};
      n.exports = function (n, t) {
        var r = (function (n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (n) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        })(n);
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        r.appendChild(t);
      };
    },
    825: (n) => {
      n.exports = function (n) {
        if ("undefined" == typeof document)
          return { update: function () {}, remove: function () {} };
        var e = n.insertStyleElement(n);
        return {
          update: function (t) {
            !(function (n, e, t) {
              var r = "";
              t.supports && (r += "@supports (".concat(t.supports, ") {")),
                t.media && (r += "@media ".concat(t.media, " {"));
              var o = void 0 !== t.layer;
              o &&
                (r += "@layer".concat(
                  t.layer.length > 0 ? " ".concat(t.layer) : "",
                  " {",
                )),
                (r += t.css),
                o && (r += "}"),
                t.media && (r += "}"),
                t.supports && (r += "}");
              var a = t.sourceMap;
              a &&
                "undefined" != typeof btoa &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    " */",
                  )),
                e.styleTagTransform(r, n, e.options);
            })(e, n, t);
          },
          remove: function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(e);
          },
        };
      };
    },
    886: (n, e, t) => {
      n.exports = t.p + "assets/images/crab-9179589_1280.jpg";
    },
  },
  (n) => {
    n((n.s = 648));
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTlDLEVBQ3RDLENBZ0JNMkcsQ0FBbUIzRyxFQUNyQixFQUVKLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL3NyYy9hc3NldHMvc3R5bGVzLmNzcz85NTFmIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2NyYWItOTE3OTU4OV8xMjgwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keTo6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCByZ2JhKDU0LCAxNzgsIDIzNSwgMC41KSwgcmdiYSg5LCA4NiwgMjI4LCAwLjUpKSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbnAge1xuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggYXV0byA1MHB4IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbiNzdXJ2ZXktZm9ybSB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDE3LCAwLjUpO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiBhdXRvO1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjJlbTtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcbiAgY29sb3I6IHJnYigyNDQsIDI0NCwgMjQ0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgNDUsIDEzMywgMC41KTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjVlbSAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XG4gIGNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0NCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiB1bnNldDtcbiAgbWFyZ2luOiAwIDAuM2VtO1xuICBwYWRkaW5nOiBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNXZ3O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IGF1dG87XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE4NSwgMTc0KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYOzsyQ0FFOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB6LWluZGV4OiAtMTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIGxpbmVhci1ncmFkaWVudCgxMTVkZWcsIHJnYmEoNTQsIDE3OCwgMjM1LCAwLjUpLCByZ2JhKDksIDg2LCAyMjgsIDAuNSkpLFxcbiAgICB1cmwoLi9jcmFiLTkxNzk1ODlfMTI4MC5qcGcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbnAge1xcbiAgZm9udC1mYW1pbHk6ICdJdGFsaWFubm8nLCBjdXJzaXZlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogNXB4IGF1dG8gNTBweCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbiNzdXJ2ZXktZm9ybSB7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDE3LCAwLjUpO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogYXV0bztcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1pbi1oZWlnaHQ6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0NCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA0NSwgMTMzLCAwLjUpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMC41ZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XFxuICBjb2xvcjogcmdiKDI0NCwgMjQ0LCAyNDQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmlubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdW5zZXQ7XFxuICBtYXJnaW46IDAgMC4zZW07XFxuICBwYWRkaW5nOiBhdXRvO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjV2dztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IGF1dG87XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTg1LCAxNzQpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInN0eWxlRWxlbWVudCIsIm5vbmNlIiwic2V0QXR0cmlidXRlIiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwibW9kdWxlc1RvRG9tIiwibGlzdCIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJpdGVtIiwiaWQiLCJiYXNlIiwiY291bnQiLCJjb25jYXQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsIm1lZGlhIiwic291cmNlTWFwIiwic3VwcG9ydHMiLCJsYXllciIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsInB1c2giLCJhcGkiLCJkb21BUEkiLCJ1cGRhdGUiLCJuZXdPYmoiLCJyZW1vdmUiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwiaW5kZXgiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaSIsIl9pbmRleCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJqb2luIiwibW9kdWxlcyIsImRlZHVwZSIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18iLCJVUkwiLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18iLCJ1cmwiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJpbnNlcnQiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImluc2VydFN0eWxlRWxlbWVudCIsImxvY2FscyIsIm1lbW8iLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZVN0eWxlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=
