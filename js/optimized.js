/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */ ! function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	var c = [],
		d = a.document,
		e = c.slice,
		f = c.concat,
		g = c.push,
		h = c.indexOf,
		i = {},
		j = i.toString,
		k = i.hasOwnProperty,
		l = {},
		m = "1.12.4",
		n = function (a, b) {
			return new n.fn.init(a, b)
		},
		o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		p = /^-ms-/,
		q = /-([\da-z])/gi,
		r = function (a, b) {
			return b.toUpperCase()
		};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function () {
			return e.call(this)
		},
		get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
		},
		pushStack: function (a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function (a) {
			return n.each(this, a)
		},
		map: function (a) {
			return this.pushStack(n.map(this, function (b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function () {
			return this.pushStack(e.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: g,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (e = arguments[h]))
				for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
		return g
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (a) {
			throw new Error(a)
		},
		noop: function () {},
		isFunction: function (a) {
			return "function" === n.type(a)
		},
		isArray: Array.isArray || function (a) {
			return "array" === n.type(a)
		},
		isWindow: function (a) {
			return null != a && a == a.window
		},
		isNumeric: function (a) {
			var b = a && a.toString();
			return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
		},
		isEmptyObject: function (a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		isPlainObject: function (a) {
			var b;
			if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
			try {
				if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			if (!l.ownFirst)
				for (b in a) return k.call(a, b);
			for (b in a);
			return void 0 === b || k.call(a, b)
		},
		type: function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
		},
		globalEval: function (b) {
			b && n.trim(b) && (a.execScript || function (b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function (a) {
			return a.replace(p, "ms-").replace(q, r)
		},
		nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function (a, b) {
			var c, d = 0;
			if (s(a)) {
				for (c = a.length; c > d; d++)
					if (b.call(a[d], d, a[d]) === !1) break
			} else
				for (d in a)
					if (b.call(a[d], d, a[d]) === !1) break;
			return a
		},
		trim: function (a) {
			return null == a ? "" : (a + "").replace(o, "")
		},
		makeArray: function (a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
		},
		inArray: function (a, b, c) {
			var d;
			if (b) {
				if (h) return h.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
					if (c in b && b[c] === a) return c
			}
			return -1
		},
		merge: function (a, b) {
			var c = +b.length,
				d = 0,
				e = a.length;
			while (c > d) a[e++] = b[d++];
			if (c !== c)
				while (void 0 !== b[d]) a[e++] = b[d++];
			return a.length = e, a
		},
		grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function (a, b, c) {
			var d, e, g = 0,
				h = [];
			if (s(a))
				for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
			else
				for (g in a) e = b(a[g], g, c), null != e && h.push(e);
			return f.apply([], h)
		},
		guid: 1,
		proxy: function (a, b) {
			var c, d, f;
			return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
				return a.apply(b || this, c.concat(e.call(arguments)))
			}, d.guid = a.guid = a.guid || n.guid++, d) : void 0
		},
		now: function () {
			return +new Date
		},
		support: l
	}), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
		i["[object " + b + "]"] = b.toLowerCase()
	});

	function s(a) {
		var b = !!a && "length" in a && a.length,
			c = n.type(a);
		return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function (a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = ga(),
			z = ga(),
			A = ga(),
			B = function (a, b) {
				return a === b && (l = !0), 0
			},
			C = 1 << 31,
			D = {}.hasOwnProperty,
			E = [],
			F = E.pop,
			G = E.push,
			H = E.push,
			I = E.slice,
			J = function (a, b) {
				for (var c = 0, d = a.length; d > c; c++)
					if (a[c] === b) return c;
				return -1
			},
			K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			L = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
			O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
			P = new RegExp(L + "+", "g"),
			Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
			R = new RegExp("^" + L + "*," + L + "*"),
			S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
			T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
			U = new RegExp(O),
			V = new RegExp("^" + M + "$"),
			W = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M + "|[*])"),
				ATTR: new RegExp("^" + N),
				PSEUDO: new RegExp("^" + O),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
			},
			X = /^(?:input|select|textarea|button)$/i,
			Y = /^h\d$/i,
			Z = /^[^{]+\{\s*\[native \w/,
			$ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			_ = /[+~]/,
			aa = /'|\\/g,
			ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
			ca = function (a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			da = function () {
				m()
			};
		try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
		} catch (ea) {
			H = {
				apply: E.length ? function (a, b) {
					G.apply(a, I.call(b))
				} : function (a, b) {
					var c = a.length,
						d = 0;
					while (a[c++] = b[d++]);
					a.length = c - 1
				}
			}
		}

		function fa(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
				x = b ? b.nodeType : 9;
			if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
			if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
				if (11 !== x && (o = $.exec(a)))
					if (f = o[1]) {
						if (9 === x) {
							if (!(j = b.getElementById(f))) return d;
							if (j.id === f) return d.push(j), d
						} else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
					} else {
						if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
					}
				if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
					if (1 !== x) w = b, s = a;
					else if ("object" !== b.nodeName.toLowerCase()) {
						(k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
						while (h--) r[h] = l + " " + qa(r[h]);
						s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
					}
					if (s) try {
						return H.apply(d, w.querySelectorAll(s)), d
					} catch (y) {} finally {
						k === u && b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(Q, "$1"), b, d, e)
		}

		function ga() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			return b
		}

		function ha(a) {
			return a[u] = !0, a
		}

		function ia(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ja(a, b) {
			var c = a.split("|"),
				e = c.length;
			while (e--) d.attrHandle[c[e]] = b
		}

		function ka(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if (d) return d;
			if (c)
				while (c = c.nextSibling)
					if (c === b) return -1;
			return a ? 1 : -1
		}

		function la(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function na(a) {
			return ha(function (b) {
				return b = +b, ha(function (c, d) {
					var e, f = a([], c.length, b),
						g = f.length;
					while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function oa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = fa.support = {}, f = fa.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = fa.setDocument = function (a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ia(function (a) {
				return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
				return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);
					return c ? [c] : []
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ba, ca);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ba, ca);
				return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
			} : function (a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					while (c = f[e++]) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
			}, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
			}), ia(function (a) {
				var b = n.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)
					while (b = b.parentNode)
						if (b === a) return !0;
				return !1
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b) return l = !0, 0;
				var c, d = 0,
					e = a.parentNode,
					f = b.parentNode,
					g = [a],
					h = [b];
				if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
				if (e === f) return ka(a, b);
				c = a;
				while (c = c.parentNode) g.unshift(c);
				c = b;
				while (c = c.parentNode) h.unshift(c);
				while (g[d] === h[d]) d++;
				return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
			}, n) : n
		}, fa.matches = function (a, b) {
			return fa(a, null, null, b)
		}, fa.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
				var d = s.call(a, b);
				if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (e) {}
			return fa(b, n, null, [a]).length > 0
		}, fa.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b)
		}, fa.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, fa.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, fa.uniqueSort = function (a) {
			var b, d = [],
				e = 0,
				f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) b === a[f] && (e = d.push(f));
				while (e--) a.splice(d[e], 1)
			}
			return k = null, a
		}, e = fa.getText = function (a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
				} else if (3 === f || 4 === f) return a.nodeValue
			} else
				while (b = a[d++]) c += e(b);
			return c
		}, d = fa.selectors = {
			cacheLength: 50,
			createPseudo: ha,
			match: W,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (a) {
					return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function (a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
				},
				PSEUDO: function (a) {
					var b, c = !a[6] && a[2];
					return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function (a) {
					var b = a.replace(ba, ca).toLowerCase();
					return "*" === a ? function () {
						return !0
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function (a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function (a, b, c) {
					return function (d) {
						var e = fa.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
					}
				},
				CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h,
							t = !1;
						if (q) {
							if (f) {
								while (p) {
									m = b;
									while (m = m[p])
										if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
								while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
									if (1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];
										break
									}
							} else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
								while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
									if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
							return t -= e, t === d || t % d === 0 && t / d >= 0
						}
					}
				},
				PSEUDO: function (a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
						var d, f = e(a, b),
							g = f.length;
						while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function (a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ha(function (a) {
					var b = [],
						c = [],
						d = h(a.replace(Q, "$1"));
					return d[u] ? ha(function (a, b, c, e) {
						var f, g = d(a, null, e, []),
							h = a.length;
						while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: ha(function (a) {
					return function (b) {
						return fa(a, b).length > 0
					}
				}),
				contains: ha(function (a) {
					return a = a.replace(ba, ca),
						function (b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
				}),
				lang: ha(function (a) {
					return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
						function (b) {
							var c;
							do
								if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function (a) {
					return a === o
				},
				focus: function (a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function (a) {
					return a.disabled === !1
				},
				disabled: function (a) {
					return a.disabled === !0
				},
				checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function (a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function (a) {
					return !d.pseudos.empty(a)
				},
				header: function (a) {
					return Y.test(a.nodeName)
				},
				input: function (a) {
					return X.test(a.nodeName)
				},
				button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: na(function () {
					return [0]
				}),
				last: na(function (a, b) {
					return [b - 1]
				}),
				eq: na(function (a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: na(function (a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: na(function (a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: na(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: na(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) d.pseudos[b] = la(b);
		for (b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = ma(b);

		function pa() {}
		pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k) return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while (h) {
				c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(Q, " ")
				}), h = h.slice(c.length));
				for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
					value: c,
					type: g,
					matches: e
				}), h = h.slice(c.length));
				if (!c) break
			}
			return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
		};

		function qa(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function ra(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = x++;
			return b.first ? function (b, c, f) {
				while (b = b[d])
					if (1 === b.nodeType || e) return a(b, c, f)
			} : function (b, c, g) {
				var h, i, j, k = [w, f];
				if (g) {
					while (b = b[d])
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else
					while (b = b[d])
						if (1 === b.nodeType || e) {
							if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
							if (i[d] = k, k[2] = a(b, c, g)) return !0
						}
			}
		}

		function sa(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;
				while (e--)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function ta(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
			return c
		}

		function ua(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
			return g
		}

		function va(a, b, c, d, e, f) {
			return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || ta(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : ua(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = ua(r, n), d(j, [], h, i), k = j.length;
					while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
			})
		}

		function wa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
					return a === b
				}, h, !0), l = ra(function (a) {
					return J(b, a) > -1
				}, h, !0), m = [function (a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}]; f > i; i++)
				if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
				else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++)
							if (d.relative[a[e].type]) break;
						return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
					}
					m.push(c)
				}
			return sa(m)
		}

		function xa(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function (f, g, h, i, k) {
					var l, o, q, r = 0,
						s = "0",
						t = f && [],
						u = [],
						v = j,
						x = f || e && d.find.TAG("*", k),
						y = w += null == v ? 1 : Math.random() || .1,
						z = x.length;
					for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
						if (e && l) {
							o = 0, g || l.ownerDocument === n || (m(l), h = !p);
							while (q = a[o++])
								if (q(l, g || n, h)) {
									i.push(l);
									break
								}
							k && (w = y)
						}
						c && ((l = !q && l) && r--, f && t.push(l))
					}
					if (r += s, c && s !== r) {
						o = 0;
						while (q = b[o++]) q(t, u, g, h);
						if (f) {
							if (r > 0)
								while (s--) t[s] || u[s] || (u[s] = F.call(i));
							u = ua(u)
						}
						H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
					}
					return k && (w = y, j = v), t
				};
			return c ? ha(f) : f
		}
		return h = fa.compile = function (a, b) {
			var c, d = [],
				e = [],
				f = A[a + " "];
			if (!f) {
				b || (b = g(a)), c = b.length;
				while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, xa(e, d)), f.selector = a
			}
			return f
		}, i = fa.select = function (a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a,
				o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = W.needsContext.test(a) ? 0 : j.length;
				while (i--) {
					if (k = j[i], d.relative[l = k.type]) break;
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
						break
					}
				}
			}
			return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ia(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || ja("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ia(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || ja("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ia(function (a) {
			return null == a.getAttribute("disabled")
		}) || ja(K, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), fa
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = function (a, b, c) {
			var d = [],
				e = void 0 !== c;
			while ((a = a[b]) && 9 !== a.nodeType)
				if (1 === a.nodeType) {
					if (e && n(a).is(c)) break;
					d.push(a)
				}
			return d
		},
		v = function (a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		},
		w = n.expr.match.needsContext,
		x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		y = /^.[^:#\[\.,]*$/;

	function z(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return n.grep(a, function (a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (y.test(b)) return n.filter(b, a, c);
			b = n.filter(b, a)
		}
		return n.grep(a, function (a) {
			return n.inArray(a, b) > -1 !== c
		})
	}
	n.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, n.fn.extend({
		find: function (a) {
			var b, c = [],
				d = this,
				e = d.length;
			if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
				for (b = 0; e > b; b++)
					if (n.contains(d[b], this)) return !0
			}));
			for (b = 0; e > b; b++) n.find(a, d[b], c);
			return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		},
		filter: function (a) {
			return this.pushStack(z(this, a || [], !1))
		},
		not: function (a) {
			return this.pushStack(z(this, a || [], !0))
		},
		is: function (a) {
			return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
		}
	});
	var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = n.fn.init = function (a, b, c) {
			var e, f;
			if (!a) return this;
			if (c = c || A, "string" == typeof a) {
				if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
				if (e[1]) {
					if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
						for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
					return this
				}
				if (f = d.getElementById(e[2]), f && f.parentNode) {
					if (f.id !== e[2]) return A.find(a);
					this.length = 1, this[0] = f
				}
				return this.context = d, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
		};
	C.prototype = n.fn, A = n(d);
	var D = /^(?:parents|prev(?:Until|All))/,
		E = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.fn.extend({
		has: function (a) {
			var b, c = n(a, this),
				d = c.length;
			return this.filter(function () {
				for (b = 0; d > b; b++)
					if (n.contains(this, c[b])) return !0
			})
		},
		closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
		},
		index: function (a) {
			return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (a, b) {
			return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
		},
		addBack: function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function F(a, b) {
		do a = a[b]; while (a && 1 !== a.nodeType);
		return a
	}
	n.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function (a) {
			return u(a, "parentNode")
		},
		parentsUntil: function (a, b, c) {
			return u(a, "parentNode", c)
		},
		next: function (a) {
			return F(a, "nextSibling")
		},
		prev: function (a) {
			return F(a, "previousSibling")
		},
		nextAll: function (a) {
			return u(a, "nextSibling")
		},
		prevAll: function (a) {
			return u(a, "previousSibling")
		},
		nextUntil: function (a, b, c) {
			return u(a, "nextSibling", c)
		},
		prevUntil: function (a, b, c) {
			return u(a, "previousSibling", c)
		},
		siblings: function (a) {
			return v((a.parentNode || {}).firstChild, a)
		},
		children: function (a) {
			return v(a.firstChild)
		},
		contents: function (a) {
			return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
		}
	}, function (a, b) {
		n.fn[a] = function (c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var G = /\S+/g;

	function H(a) {
		var b = {};
		return n.each(a.match(G) || [], function (a, c) {
			b[c] = !0
		}), b
	}
	n.Callbacks = function (a) {
		a = "string" == typeof a ? H(a) : n.extend({}, a);
		var b, c, d, e, f = [],
			g = [],
			h = -1,
			i = function () {
				for (e = a.once, d = b = !0; g.length; h = -1) {
					c = g.shift();
					while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
				}
				a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
			},
			j = {
				add: function () {
					return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
						n.each(b, function (b, c) {
							n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
						})
					}(arguments), c && !b && i()), this
				},
				remove: function () {
					return n.each(arguments, function (a, b) {
						var c;
						while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
					}), this
				},
				has: function (a) {
					return a ? n.inArray(a, f) > -1 : f.length > 0
				},
				empty: function () {
					return f && (f = []), this
				},
				disable: function () {
					return e = g = [], f = c = "", this
				},
				disabled: function () {
					return !f
				},
				lock: function () {
					return e = !0, c || j.disable(), this
				},
				locked: function () {
					return !!e
				},
				fireWith: function (a, c) {
					return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
				},
				fire: function () {
					return j.fireWith(this, arguments), this
				},
				fired: function () {
					return !!d
				}
			};
		return j
	}, n.extend({
		Deferred: function (a) {
			var b = [
					["resolve", "done", n.Callbacks("once memory"), "resolved"],
					["reject", "fail", n.Callbacks("once memory"), "rejected"],
					["notify", "progress", n.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function () {
						return c
					},
					always: function () {
						return e.done(arguments).fail(arguments), this
					},
					then: function () {
						var a = arguments;
						return n.Deferred(function (c) {
							n.each(b, function (b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function () {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function (a) {
						return null != a ? n.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, n.each(b, function (a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function () {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function (a) {
			var b = 0,
				c = e.call(arguments),
				d = c.length,
				f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function (a, b, c) {
					return function (d) {
						b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if (d > 1)
				for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var I;
	n.fn.ready = function (a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function (a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
		}
	});

	function J() {
		d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
	}

	function K() {
		(d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
	}
	n.ready.promise = function (b) {
		if (!I)
			if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
			else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
		else {
			d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
			var c = !1;
			try {
				c = null == a.frameElement && d.documentElement
			} catch (e) {}
			c && c.doScroll && ! function f() {
				if (!n.isReady) {
					try {
						c.doScroll("left")
					} catch (b) {
						return a.setTimeout(f, 50)
					}
					J(), n.ready()
				}
			}()
		}
		return I.promise(b)
	}, n.ready.promise();
	var L;
	for (L in n(l)) break;
	l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
			var a, b, c, e;
			c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
		}),
		function () {
			var a = d.createElement("div");
			l.deleteExpando = !0;
			try {
				delete a.test
			} catch (b) {
				l.deleteExpando = !1
			}
			a = null
		}();
	var M = function (a) {
			var b = n.noData[(a.nodeName + " ").toLowerCase()],
				c = +a.nodeType || 1;
			return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
		},
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function P(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(O, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
				} catch (e) {}
				n.data(a, b, c)
			} else c = void 0;
		}
		return c
	}

	function Q(a) {
		var b;
		for (b in a)
			if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
		return !0
	}

	function R(a, b, d, e) {
		if (M(a)) {
			var f, g, h = n.expando,
				i = a.nodeType,
				j = i ? n.cache : a,
				k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
				toJSON: n.noop
			}), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
		}
	}

	function S(a, b, c) {
		if (M(a)) {
			var d, e, f = a.nodeType,
				g = f ? n.cache : a,
				h = f ? a[n.expando] : n.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					while (e--) delete d[b[e]];
					if (c ? !Q(d) : !n.isEmptyObject(d)) return
				}(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
			}
		}
	}
	n.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function (a) {
				return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
			},
			data: function (a, b, c) {
				return R(a, b, c)
			},
			removeData: function (a, b) {
				return S(a, b)
			},
			_data: function (a, b, c) {
				return R(a, b, c, !0)
			},
			_removeData: function (a, b) {
				return S(a, b, !0)
			}
		}), n.fn.extend({
			data: function (a, b) {
				var c, d, e, f = this[0],
					g = f && f.attributes;
				if (void 0 === a) {
					if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
						c = g.length;
						while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
						n._data(f, "parsedAttrs", !0)
					}
					return e
				}
				return "object" == typeof a ? this.each(function () {
					n.data(this, a)
				}) : arguments.length > 1 ? this.each(function () {
					n.data(this, a, b)
				}) : f ? P(f, a, n.data(f, a)) : void 0
			},
			removeData: function (a) {
				return this.each(function () {
					n.removeData(this, a)
				})
			}
		}), n.extend({
			queue: function (a, b, c) {
				var d;
				return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
			},
			dequeue: function (a, b) {
				b = b || "fx";
				var c = n.queue(a, b),
					d = c.length,
					e = c.shift(),
					f = n._queueHooks(a, b),
					g = function () {
						n.dequeue(a, b)
					};
				"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
			},
			_queueHooks: function (a, b) {
				var c = b + "queueHooks";
				return n._data(a, c) || n._data(a, c, {
					empty: n.Callbacks("once memory").add(function () {
						n._removeData(a, b + "queue"), n._removeData(a, c)
					})
				})
			}
		}), n.fn.extend({
			queue: function (a, b) {
				var c = 2;
				return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
					var c = n.queue(this, a, b);
					n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
				})
			},
			dequeue: function (a) {
				return this.each(function () {
					n.dequeue(this, a)
				})
			},
			clearQueue: function (a) {
				return this.queue(a || "fx", [])
			},
			promise: function (a, b) {
				var c, d = 1,
					e = n.Deferred(),
					f = this,
					g = this.length,
					h = function () {
						--d || e.resolveWith(f, [f])
					};
				"string" != typeof a && (b = a, a = void 0), a = a || "fx";
				while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
				return h(), e.promise(b)
			}
		}),
		function () {
			var a;
			l.shrinkWrapBlocks = function () {
				if (null != a) return a;
				a = !1;
				var b, c, e;
				return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
			}
		}();
	var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
		V = ["Top", "Right", "Bottom", "Left"],
		W = function (a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		};

	function X(a, b, c, d) {
		var e, f = 1,
			g = 20,
			h = d ? function () {
				return d.cur()
			} : function () {
				return n.css(a, b, "")
			},
			i = h(),
			j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
			k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
		if (k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;
			do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
		}
		return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
	}
	var Y = function (a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if ("object" === n.type(c)) {
				e = !0;
				for (h in c) Y(a, b, h, c[h], !0, f, g)
			} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
					return j.call(n(a), c)
				})), b))
				for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		},
		Z = /^(?:checkbox|radio)$/i,
		$ = /<([\w:-]+)/,
		_ = /^$|\/(?:java|ecma)script/i,
		aa = /^\s+/,
		ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

	function ca(a) {
		var b = ba.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement)
			while (b.length) c.createElement(b.pop());
		return c
	}! function () {
		var a = d.createElement("div"),
			b = d.createDocumentFragment(),
			c = d.createElement("input");
		a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
	}();
	var da = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

	function ea(a, b) {
		var c, d, e = 0,
			f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
		if (!f)
			for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
	}

	function fa(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
	}
	var ga = /<|&#?\w+;/,
		ha = /<tbody/i;

	function ia(a) {
		Z.test(a.type) && (a.defaultChecked = a.checked)
	}

	function ja(a, b, c, d, e) {
		for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
			if (g = a[r], g || 0 === g)
				if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
				else if (ga.test(g)) {
			i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
			while (f--) i = i.lastChild;
			if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
				g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
				while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
			}
			n.merge(q, i.childNodes), i.textContent = "";
			while (i.firstChild) i.removeChild(i.firstChild);
			i = p.lastChild
		} else q.push(b.createTextNode(g));
		i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
		while (g = q[r++])
			if (d && n.inArray(g, d) > -1) e && e.push(g);
			else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
			f = 0;
			while (g = i[f++]) _.test(g.type || "") && c.push(g)
		}
		return i = null, p
	}! function () {
		var b, c, e = d.createElement("div");
		for (b in {
				submit: !0,
				change: !0,
				focusin: !0
			}) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
		e = null
	}();
	var ka = /^(?:input|select|textarea)$/i,
		la = /^key/,
		ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		na = /^(?:focusinfocus|focusoutblur)$/,
		oa = /^([^.]*)(?:\.(.+)|)/;

	function pa() {
		return !0
	}

	function qa() {
		return !1
	}

	function ra() {
		try {
			return d.activeElement
		} catch (a) {}
	}

	function sa(a, b, c, d, e, f) {
		var g, h;
		if ("object" == typeof b) {
			"string" != typeof c && (d = d || c, c = void 0);
			for (h in b) sa(a, h, c, d, b[h], f);
			return a
		}
		if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
		else if (!e) return a;
		return 1 === f && (g = e, e = function (a) {
			return n().off(a), g.apply(this, arguments)
		}, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
			n.event.add(this, b, e, d, c)
		})
	}
	n.event = {
		global: {},
		add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
			if (r) {
				c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
					return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
				while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && n.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
				a = null
			}
		},
		remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
			if (r && (k = r.events)) {
				b = (b || "").match(G) || [""], j = b.length;
				while (j--)
					if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
						while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
						i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
					} else
						for (o in k) n.event.remove(a, o + b[j], c, d, !0);
				n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
			}
		},
		trigger: function (b, c, e, f) {
			var g, h, i, j, l, m, o, p = [e || d],
				q = k.call(b, "type") ? b.type : b,
				r = k.call(b, "namespace") ? b.namespace.split(".") : [];
			if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
				if (!f && !l.noBubble && !n.isWindow(e)) {
					for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
					m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
				}
				o = 0;
				while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
				if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
					m = e[h], m && (e[h] = null), n.event.triggered = q;
					try {
						e[q]()
					} catch (s) {}
					n.event.triggered = void 0, m && (e[h] = m)
				}
				return b.result
			}
		},
		dispatch: function (a) {
			a = n.event.fix(a);
			var b, c, d, f, g, h = [],
				i = e.call(arguments),
				j = (n._data(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;
					while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
				for (; i != this; i = i.parentNode || this)
					if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
						for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
						d.length && g.push({
							elem: i,
							handlers: d
						})
					}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		fix: function (a) {
			if (a[n.expando]) return a;
			var b, c, e, f = a.type,
				g = a,
				h = this.fixHooks[f];
			h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
			while (b--) c = e[b], a[c] = g[c];
			return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (a, b) {
				var c, e, f, g = b.button,
					h = b.fromElement;
				return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== ra() && this.focus) try {
						return this.focus(), !1
					} catch (a) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === ra() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function (a) {
					return n.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c) {
			var d = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0
			});
			n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = d.removeEventListener ? function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c)
	} : function (a, b, c) {
		var d = "on" + b;
		a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
	}, n.Event = function (a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		constructor: n.Event,
		isDefaultPrevented: qa,
		isPropagationStopped: qa,
		isImmediatePropagationStopped: qa,
		preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (a, b) {
		n.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function (a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), l.submit || (n.event.special.submit = {
		setup: function () {
			return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
				var b = a.target,
					c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
				c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
					a._submitBubble = !0
				}), n._data(c, "submit", !0))
			})
		},
		postDispatch: function (a) {
			a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
		},
		teardown: function () {
			return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
		}
	}), l.change || (n.event.special.change = {
		setup: function () {
			return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
				"checked" === a.originalEvent.propertyName && (this._justChanged = !0)
			}), n.event.add(this, "click._change", function (a) {
				this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
			})), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
				var b = a.target;
				ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
					!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
				}), n._data(b, "change", !0))
			})
		},
		handle: function (a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function () {
			return n.event.remove(this, "._change"), !ka.test(this.nodeName)
		}
	}), l.focusin || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function (a, b) {
		var c = function (a) {
			n.event.simulate(b, a.target, n.event.fix(a))
		};
		n.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this,
					e = n._data(d, b);
				e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
			},
			teardown: function () {
				var d = this.ownerDocument || this,
					e = n._data(d, b) - 1;
				e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
			}
		}
	}), n.fn.extend({
		on: function (a, b, c, d) {
			return sa(this, a, b, c, d)
		},
		one: function (a, b, c, d) {
			return sa(this, a, b, c, d, 1)
		},
		off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
				n.event.remove(this, a, c, b)
			})
		},
		trigger: function (a, b) {
			return this.each(function () {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function (a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var ta = / jQuery\d+="(?:null|\d+)"/g,
		ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
		va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		wa = /<script|<style|<link/i,
		xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ya = /^true\/(.*)/,
		za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Aa = ca(d),
		Ba = Aa.appendChild(d.createElement("div"));

	function Ca(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function Da(a) {
		return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
	}

	function Ea(a) {
		var b = ya.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function Fa(a, b) {
		if (1 === b.nodeType && n.hasData(a)) {
			var c, d, e, f = n._data(a),
				g = n._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h)
					for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
			}
			g.data && (g.data = n.extend({}, g.data))
		}
	}

	function Ga(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
				e = n._data(b);
				for (d in e.events) n.removeEvent(b, d, e.handle);
				b.removeAttribute(n.expando)
			}
			"script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
		}
	}

	function Ha(a, b, c, d) {
		b = f.apply([], b);
		var e, g, h, i, j, k, m = 0,
			o = a.length,
			p = o - 1,
			q = b[0],
			r = n.isFunction(q);
		if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
			var f = a.eq(e);
			r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
		});
		if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
			for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
			if (h)
				for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
			k = e = null
		}
		return a
	}

	function Ia(a, b, c) {
		for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
		return a
	}
	n.extend({
		htmlPrefilter: function (a) {
			return a.replace(va, "<$1></$2>")
		},
		clone: function (a, b, c) {
			var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
			if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
				for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
			if (b)
				if (c)
					for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
				else Fa(a, f);
			return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
		},
		cleanData: function (a, b) {
			for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
				if ((b || M(d)) && (f = d[i], g = f && j[f])) {
					if (g.events)
						for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
					j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
				}
		}
	}), n.fn.extend({
		domManip: Ha,
		detach: function (a) {
			return Ia(this, a, !0)
		},
		remove: function (a) {
			return Ia(this, a)
		},
		text: function (a) {
			return Y(this, function (a) {
				return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function () {
			return Ha(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function () {
			return Ha(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function () {
			return Ha(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function () {
			return Ha(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && n.cleanData(ea(a, !1));
				while (a.firstChild) a.removeChild(a.firstChild);
				a.options && n.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function (a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return n.clone(this, a, b)
			})
		},
		html: function (a) {
			return Y(this, function (a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
				if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = n.htmlPrefilter(a);
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function () {
			var a = [];
			return Ha(this, arguments, function (b) {
				var c = this.parentNode;
				n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
			}, a)
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (a, b) {
		n.fn[a] = function (a) {
			for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
			return this.pushStack(e)
		}
	});
	var Ja, Ka = {
		HTML: "block",
		BODY: "block"
	};

	function La(a, b) {
		var c = n(b.createElement(a)).appendTo(b.body),
			d = n.css(c[0], "display");
		return c.detach(), d
	}

	function Ma(a) {
		var b = d,
			c = Ka[a];
		return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
	}
	var Na = /^margin/,
		Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
		Pa = function (a, b, c, d) {
			var e, f, g = {};
			for (f in b) g[f] = a.style[f], a.style[f] = b[f];
			e = c.apply(a, d || []);
			for (f in b) a.style[f] = g[f];
			return e
		},
		Qa = d.documentElement;
	! function () {
		var b, c, e, f, g, h, i = d.createElement("div"),
			j = d.createElement("div");
		if (j.style) {
			j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
				reliableHiddenOffsets: function () {
					return null == b && k(), f
				},
				boxSizingReliable: function () {
					return null == b && k(), e
				},
				pixelMarginRight: function () {
					return null == b && k(), c
				},
				pixelPosition: function () {
					return null == b && k(), b
				},
				reliableMarginRight: function () {
					return null == b && k(), g
				},
				reliableMarginLeft: function () {
					return null == b && k(), h
				}
			});

			function k() {
				var k, l, m = d.documentElement;
				m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
					width: "4px"
				}).width, j.style.marginRight = "50%", c = "4px" === (l || {
					marginRight: "4px"
				}).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
			}
		}
	}();
	var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ra = function (b) {
		var c = b.ownerDocument.defaultView;
		return c && c.opener || (c = a), c.getComputedStyle(b)
	}, Sa = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
	}) : Qa.currentStyle && (Ra = function (a) {
		return a.currentStyle
	}, Sa = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
	});

	function Ua(a, b) {
		return {
			get: function () {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}
	var Va = /alpha\([^)]*\)/i,
		Wa = /opacity\s*=\s*([^)]*)/i,
		Xa = /^(none|table(?!-c[ea]).+)/,
		Ya = new RegExp("^(" + T + ")(.*)$", "i"),
		Za = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		$a = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		_a = ["Webkit", "O", "Moz", "ms"],
		ab = d.createElement("div").style;

	function bb(a) {
		if (a in ab) return a;
		var b = a.charAt(0).toUpperCase() + a.slice(1),
			c = _a.length;
		while (c--)
			if (a = _a[c] + b, a in ab) return a
	}

	function cb(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function db(a, b, c) {
		var d = Ya.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function eb(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
		return g
	}

	function fb(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = Ra(a),
			g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
			d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}
	n.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = Sa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": l.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = n.camelCase(b),
					i = a.style;
				if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
				if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
					i[b] = c
				} catch (j) {}
			}
		},
		css: function (a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
		}
	}), n.each(["height", "width"], function (a, b) {
		n.cssHooks[b] = {
			get: function (a, c, d) {
				return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
					return fb(a, b, d)
				}) : fb(a, b, d) : void 0
			},
			set: function (a, c, d) {
				var e = d && Ra(a);
				return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), l.opacity || (n.cssHooks.opacity = {
		get: function (a, b) {
			return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function (a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
		}
	}), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
		return b ? Pa(a, {
			display: "inline-block"
		}, Sa, [a, "marginRight"]) : void 0
	}), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
		return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
			marginLeft: 0
		}, function () {
			return a.getBoundingClientRect().left
		}) : 0)) + "px" : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (a, b) {
		n.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Na.test(a) || (n.cssHooks[a + b].set = db)
	}), n.fn.extend({
		css: function (a, b) {
			return Y(this, function (a, b, c) {
				var d, e, f = {},
					g = 0;
				if (n.isArray(b)) {
					for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function () {
			return cb(this, !0)
		},
		hide: function () {
			return cb(this)
		},
		toggle: function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				W(this) ? n(this).show() : n(this).hide()
			})
		}
	});

	function gb(a, b, c, d, e) {
		return new gb.prototype.init(a, b, c, d, e)
	}
	n.Tween = gb, gb.prototype = {
		constructor: gb,
		init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function () {
			var a = gb.propHooks[this.prop];
			return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
		},
		run: function (a) {
			var b, c = gb.propHooks[this.prop];
			return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
		}
	}, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
			},
			set: function (a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
			}
		}
	}, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
		set: function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function (a) {
			return a
		},
		swing: function (a) {
			return .5 - Math.cos(a * Math.PI) / 2
		},
		_default: "swing"
	}, n.fx = gb.prototype.init, n.fx.step = {};
	var hb, ib, jb = /^(?:toggle|show|hide)$/,
		kb = /queueHooks$/;

	function lb() {
		return a.setTimeout(function () {
			hb = void 0
		}), hb = n.now()
	}

	function mb(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function nb(a, b, c) {
		for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function ob(a, b, c) {
		var d, e, f, g, h, i, j, k, m = this,
			o = {},
			p = a.style,
			q = a.nodeType && W(a),
			r = n._data(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i()
		}), h.unqueued++, m.always(function () {
			m.always(function () {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
			p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (e = b[d], jb.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
					if ("show" !== e || !r || void 0 === r[d]) continue;
					q = !0
				}
				o[d] = r && r[d] || n.style(a, d)
			} else j = void 0;
		if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
		else {
			r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
				n(a).hide()
			}), m.done(function () {
				var b;
				n._removeData(a, "fxshow");
				for (b in o) n.style(a, b, o[b])
			});
			for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function pb(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function qb(a, b, c) {
		var d, e, f = 0,
			g = qb.prefilters.length,
			h = n.Deferred().always(function () {
				delete i.elem
			}),
			i = function () {
				if (e) return !1;
				for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {},
					easing: n.easing._default
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: hb || lb(),
				duration: c.duration,
				tweens: [],
				createTween: function (b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function (b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (pb(k, j.opts.specialEasing); g > f; f++)
			if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
		return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	n.Animation = n.extend(qb, {
			tweeners: {
				"*": [function (a, b) {
					var c = this.createTween(a, b);
					return X(c.elem, a, U.exec(b), c), c
				}]
			},
			tweener: function (a, b) {
				n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
				for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
			},
			prefilters: [ob],
			prefilter: function (a, b) {
				b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
			}
		}), n.speed = function (a, b, c) {
			var d = a && "object" == typeof a ? n.extend({}, a) : {
				complete: c || !c && b || n.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !n.isFunction(b) && b
			};
			return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
				n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
			}, d
		}, n.fn.extend({
			fadeTo: function (a, b, c, d) {
				return this.filter(W).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function (a, b, c, d) {
				var e = n.isEmptyObject(a),
					f = n.speed(b, c, d),
					g = function () {
						var b = qb(this, n.extend({}, a), f);
						(e || n._data(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function (a, b, c) {
				var d = function (a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = n.timers,
						g = n._data(this);
					if (e) g[e] && g[e].stop && d(g[e]);
					else
						for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
					for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					!b && c || n.dequeue(this, a)
				})
			},
			finish: function (a) {
				return a !== !1 && (a = a || "fx"), this.each(function () {
					var b, c = n._data(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = n.timers,
						g = d ? d.length : 0;
					for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), n.each(["toggle", "show", "hide"], function (a, b) {
			var c = n.fn[b];
			n.fn[b] = function (a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
			}
		}), n.each({
			slideDown: mb("show"),
			slideUp: mb("hide"),
			slideToggle: mb("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (a, b) {
			n.fn[a] = function (a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), n.timers = [], n.fx.tick = function () {
			var a, b = n.timers,
				c = 0;
			for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
			b.length || n.fx.stop(), hb = void 0
		}, n.fx.timer = function (a) {
			n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
		}, n.fx.interval = 13, n.fx.start = function () {
			ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
		}, n.fx.stop = function () {
			a.clearInterval(ib), ib = null
		}, n.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, n.fn.delay = function (b, c) {
			return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
				var e = a.setTimeout(c, b);
				d.stop = function () {
					a.clearTimeout(e)
				}
			})
		},
		function () {
			var a, b = d.createElement("input"),
				c = d.createElement("div"),
				e = d.createElement("select"),
				f = e.appendChild(d.createElement("option"));
			c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
		}();
	var rb = /\r/g,
		sb = /[\x20\t\r\n\f]+/g;
	n.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
						return null == a ? "" : a + ""
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
			}
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function (a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
				}
			},
			select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
							if (b = n(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function (a, b) {
					var c, d, e = a.options,
						f = n.makeArray(b),
						g = e.length;
					while (g--)
						if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
							d.selected = c = !0
						} catch (h) {
							d.scrollHeight
						} else d.selected = !1;
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), n.each(["radio", "checkbox"], function () {
		n.valHooks[this] = {
			set: function (a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
			}
		}, l.checkOn || (n.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var tb, ub, vb = n.expr.attrHandle,
		wb = /^(?:checked|selected)$/i,
		xb = l.getSetAttribute,
		yb = l.input;
	n.fn.extend({
		attr: function (a, b) {
			return Y(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function (a) {
			return this.each(function () {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
		},
		attrHooks: {
			type: {
				set: function (a, b) {
					if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		},
		removeAttr: function (a, b) {
			var c, d, e = 0,
				f = b && b.match(G);
			if (f && 1 === a.nodeType)
				while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
		}
	}), ub = {
		set: function (a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = vb[b] || n.find.attr;
		yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
			var e, f;
			return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
		} : vb[b] = function (a, b, c) {
			return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), yb && xb || (n.attrHooks.value = {
		set: function (a, b, c) {
			return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
		}
	}), xb || (tb = {
		set: function (a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, vb.id = vb.name = vb.coords = function (a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, n.valHooks.button = {
		get: function (a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		},
		set: tb.set
	}, n.attrHooks.contenteditable = {
		set: function (a, b, c) {
			tb.set(a, "" === b ? !1 : b, c)
		}
	}, n.each(["width", "height"], function (a, b) {
		n.attrHooks[b] = {
			set: function (a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), l.style || (n.attrHooks.style = {
		get: function (a) {
			return a.style.cssText || void 0
		},
		set: function (a, b) {
			return a.style.cssText = b + ""
		}
	});
	var zb = /^(?:input|select|textarea|button|object)$/i,
		Ab = /^(?:a|area)$/i;
	n.fn.extend({
		prop: function (a, b) {
			return Y(this, n.prop, a, b, arguments.length > 1)
		},
		removeProp: function (a) {
			return a = n.propFix[a] || a, this.each(function () {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {}
			})
		}
	}), n.extend({
		prop: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function (a) {
					var b = n.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
		n.propHooks[b] = {
			get: function (a) {
				return a.getAttribute(b, 4)
			}
		}
	}), l.optSelected || (n.propHooks.selected = {
		get: function (a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		},
		set: function (a) {
			var b = a.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		n.propFix[this.toLowerCase()] = this
	}), l.enctype || (n.propFix.enctype = "encoding");
	var Bb = /[\t\r\n\f]/g;

	function Cb(a) {
		return n.attr(a, "class") || ""
	}
	n.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) return this.each(function (b) {
				n(this).addClass(a.call(this, b, Cb(this)))
			});
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++])
					if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
						g = 0;
						while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
						h = n.trim(d), e !== h && n.attr(c, "class", h)
					}
			}
			return this
		},
		removeClass: function (a) {
			var b, c, d, e, f, g, h, i = 0;
			if (n.isFunction(a)) return this.each(function (b) {
				n(this).removeClass(a.call(this, b, Cb(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof a && a) {
				b = a.match(G) || [];
				while (c = this[i++])
					if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
						g = 0;
						while (f = b[g++])
							while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
						h = n.trim(d), e !== h && n.attr(c, "class", h)
					}
			}
			return this
		},
		toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
				n(this).toggleClass(a.call(this, c, Cb(this), b), b)
			}) : this.each(function () {
				var b, d, e, f;
				if ("string" === c) {
					d = 0, e = n(this), f = a.match(G) || [];
					while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
			})
		},
		hasClass: function (a) {
			var b, c, d = 0;
			b = " " + a + " ";
			while (c = this[d++])
				if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
			return !1
		}
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		n.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({
		hover: function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var Db = a.location,
		Eb = n.now(),
		Fb = /\?/,
		Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	n.parseJSON = function (b) {
		if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
		var c, d = null,
			e = n.trim(b + "");
		return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
			return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
		})) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
	}, n.parseXML = function (b) {
		var c, d;
		if (!b || "string" != typeof b) return null;
		try {
			a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
	};
	var Hb = /#.*$/,
		Ib = /([?&])_=[^&]*/,
		Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Lb = /^(?:GET|HEAD)$/,
		Mb = /^\/\//,
		Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Ob = {},
		Pb = {},
		Qb = "*/".concat("*"),
		Rb = Db.href,
		Sb = Nb.exec(Rb.toLowerCase()) || [];

	function Tb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(G) || [];
			if (n.isFunction(c))
				while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function Ub(a, b, c, d) {
		var e = {},
			f = a === Pb;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function Vb(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
		return c && n.extend(!0, a, c), a
	}

	function Wb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
		if (e)
			for (g in h)
				if (h[g] && h[g].test(e)) {
					i.unshift(g);
					break
				}
		if (i[0] in c) f = i[0];
		else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function Xb(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}
	n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Rb,
			type: "GET",
			isLocal: Kb.test(Sb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Qb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (a, b) {
			return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
		},
		ajaxPrefilter: Tb(Ob),
		ajaxTransport: Tb(Pb),
		ajax: function (b, c) {
			"object" == typeof b && (c = b, b = void 0), c = c || {};
			var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
				m = l.context || l,
				o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
				p = n.Deferred(),
				q = n.Callbacks("once memory"),
				r = l.statusCode || {},
				s = {},
				t = {},
				u = 0,
				v = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function (a) {
						var b;
						if (2 === u) {
							if (!k) {
								k = {};
								while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
							}
							b = k[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function () {
						return 2 === u ? g : null
					},
					setRequestHeader: function (a, b) {
						var c = a.toLowerCase();
						return u || (a = t[c] = t[c] || a, s[a] = b), this
					},
					overrideMimeType: function (a) {
						return u || (l.mimeType = a), this
					},
					statusCode: function (a) {
						var b;
						if (a)
							if (2 > u)
								for (b in a) r[b] = [r[b], a[b]];
							else w.always(a[w.status]);
						return this
					},
					abort: function (a) {
						var b = a || v;
						return j && j.abort(b), y(0, b), this
					}
				};
			if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
			i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
			for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
			if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
			v = "abort";
			for (e in {
					success: 1,
					error: 1,
					complete: 1
				}) w[e](l[e]);
			if (j = Ub(Pb, l, c, w)) {
				if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
				l.async && l.timeout > 0 && (h = a.setTimeout(function () {
					w.abort("timeout")
				}, l.timeout));
				try {
					u = 1, j.send(s, y)
				} catch (x) {
					if (!(2 > u)) throw x;
					y(-1, x)
				}
			} else y(-1, "No Transport");

			function y(b, c, d, e) {
				var k, s, t, v, x, y = c;
				2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
			}
			return w
		},
		getJSON: function (a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function (a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function (a, b) {
		n[b] = function (a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			}, n.isPlainObject(a) && a))
		}
	}), n._evalUrl = function (a) {
		return n.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			"throws": !0
		})
	}, n.fn.extend({
		wrapAll: function (a) {
			if (n.isFunction(a)) return this.each(function (b) {
				n(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
					var a = this;
					while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function (a) {
			return n.isFunction(a) ? this.each(function (b) {
				n(this).wrapInner(a.call(this, b))
			}) : this.each(function () {
				var b = n(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function (a) {
			var b = n.isFunction(a);
			return this.each(function (c) {
				n(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	});

	function Yb(a) {
		return a.style && a.style.display || n.css(a, "display")
	}

	function Zb(a) {
		if (!n.contains(a.ownerDocument || d, a)) return !0;
		while (a && 1 === a.nodeType) {
			if ("none" === Yb(a) || "hidden" === a.type) return !0;
			a = a.parentNode
		}
		return !1
	}
	n.expr.filters.hidden = function (a) {
		return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
	}, n.expr.filters.visible = function (a) {
		return !n.expr.filters.hidden(a)
	};
	var $b = /%20/g,
		_b = /\[\]$/,
		ac = /\r?\n/g,
		bc = /^(?:submit|button|image|reset|file)$/i,
		cc = /^(?:input|select|textarea|keygen)/i;

	function dc(a, b, c, d) {
		var e;
		if (n.isArray(b)) n.each(b, function (b, e) {
			c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== n.type(b)) d(a, b);
		else
			for (e in b) dc(a + "[" + e + "]", b[e], c, d)
	}
	n.param = function (a, b) {
		var c, d = [],
			e = function (a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
			e(this.name, this.value)
		});
		else
			for (c in a) dc(c, a[c], b, e);
		return d.join("&").replace($b, "+")
	}, n.fn.extend({
		serialize: function () {
			return n.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var a = n.prop(this, "elements");
				return a ? n.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
			}).map(function (a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
					return {
						name: b.name,
						value: a.replace(ac, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(ac, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
		return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
	} : hc;
	var ec = 0,
		fc = {},
		gc = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in fc) fc[a](void 0, !0)
	}), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
		if (!b.crossDomain || l.cors) {
			var c;
			return {
				send: function (d, e) {
					var f, g = b.xhr(),
						h = ++ec;
					if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
						for (f in b.xhrFields) g[f] = b.xhrFields[f];
					b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
					for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
					g.send(b.hasContent && b.data || null), c = function (a, d) {
						var f, i, j;
						if (c && (d || 4 === g.readyState))
							if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
							else {
								j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
								try {
									i = g.statusText
								} catch (k) {
									i = ""
								}
								f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
							}
						j && e(f, i, j, g.getAllResponseHeaders())
					}, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
				},
				abort: function () {
					c && c(void 0, !0)
				}
			}
		}
	});

	function hc() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function ic() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}
	n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (a) {
				return n.globalEval(a), a
			}
		}
	}), n.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), n.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c = d.head || n("head")[0] || d.documentElement;
			return {
				send: function (e, f) {
					b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
					}, c.insertBefore(b, c.firstChild)
				},
				abort: function () {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var jc = [],
		kc = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var a = jc.pop() || n.expando + "_" + Eb++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), n.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || d;
		var e = x.exec(a),
			f = !c && [];
		return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
	};
	var lc = n.fn.load;
	n.fn.load = function (a, b, c) {
		if ("string" != typeof a && lc) return lc.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e || "GET",
			dataType: "html",
			data: b
		}).done(function (a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).always(c && function (a, b) {
			g.each(function () {
				c.apply(this, f || [a.responseText, b, a])
			})
		}), this
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		n.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), n.expr.filters.animated = function (a) {
		return n.grep(n.timers, function (b) {
			return a === b.elem
		}).length
	};

	function mc(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	n.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, n.fn.extend({
		offset: function (a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				n.offset.setOffset(this, a, b)
			});
			var b, c, d = {
					top: 0,
					left: 0
				},
				e = this[0],
				f = e && e.ownerDocument;
			if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
				top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
				left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
			}) : d
		},
		position: function () {
			if (this[0]) {
				var a, b, c = {
						top: 0,
						left: 0
					},
					d = this[0];
				return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - c.top - n.css(d, "marginTop", !0),
					left: b.left - c.left - n.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var a = this.offsetParent;
				while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
				return a || Qa
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (a, b) {
		var c = /Y/.test(b);
		n.fn[a] = function (d) {
			return Y(this, function (a, d, e) {
				var f = mc(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), n.each(["top", "left"], function (a, b) {
		n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
			return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function (a, b) {
		n.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function (c, d) {
			n.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return Y(this, function (b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.extend({
		bind: function (a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function (a, b) {
			return this.off(a, null, b)
		},
		delegate: function (a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	}), n.fn.size = function () {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return n
	});
	var nc = a.jQuery,
		oc = a.$;
	return n.noConflict = function (b) {
		return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
	}, b || (a.jQuery = a.$ = n), n
});
jQuery.noConflict();;
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
	function (a, b, c) {
		function d(c) {
			var d = b.console;
			f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
		}

		function e(b, c, e, f) {
			if (Object.defineProperty) try {
				return void Object.defineProperty(b, c, {
					configurable: !0,
					enumerable: !0,
					get: function () {
						return d(f), e
					},
					set: function (a) {
						d(f), e = a
					}
				})
			} catch (g) {}
			a._definePropertyBroken = !0, b[c] = e
		}
		a.migrateVersion = "1.4.1";
		var f = {};
		a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
			f = {}, a.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
		var g = a("<input/>", {
				size: 1
			}).attr("size") && a.attrFn,
			h = a.attr,
			i = a.attrHooks.value && a.attrHooks.value.get || function () {
				return null
			},
			j = a.attrHooks.value && a.attrHooks.value.set || function () {
				return c
			},
			k = /^(?:input|button)$/i,
			l = /^[238]$/,
			m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			n = /^(?:checked|selected)$/i;
		e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
			var j = e.toLowerCase(),
				o = b && b.nodeType;
			return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
				get: function (b, d) {
					var e, f = a.prop(b, d);
					return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
				},
				set: function (b, c, d) {
					var e;
					return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
				}
			}, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
		}, a.attrHooks.value = {
			get: function (a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
			},
			set: function (a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
			}
		};
		var o, p, q = a.fn.init,
			r = a.find,
			s = a.parseJSON,
			t = /^\s*</,
			u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
		a.fn.init = function (b, e, f) {
			var g, h;
			return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
		}, a.fn.init.prototype = a.fn, a.find = function (a) {
			var b = Array.prototype.slice.call(arguments);
			if ("string" == typeof a && u.test(a)) try {
				document.querySelector(a)
			} catch (c) {
				a = a.replace(v, function (a, b, c, d) {
					return "[" + b + c + '"' + d + '"]'
				});
				try {
					document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
				} catch (e) {
					d("Attribute selector with '#' was not fixed: " + b[0])
				}
			}
			return r.apply(this, b)
		};
		var x;
		for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
		a.parseJSON = function (a) {
			return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
		}, a.uaMatch = function (a) {
			a = a.toLowerCase();
			var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: b[1] || "",
				version: b[2] || "0"
			}
		}, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
			function b(a, c) {
				return new b.fn.init(a, c)
			}
			a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
				var f = a.fn.init.call(this, d, e, c);
				return f instanceof b ? f : b(f)
			}, b.fn.init.prototype = b.fn;
			var c = b(document);
			return d("jQuery.sub() is deprecated"), b
		}, a.fn.size = function () {
			return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
		};
		var y = !1;
		a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
			var d = a.cssHooks[c] && a.cssHooks[c].get;
			d && (a.cssHooks[c].get = function () {
				var a;
				return y = !0, a = d.apply(this, arguments), y = !1, a
			})
		}), a.swap = function (a, b, c, e) {
			var f, g, h = {};
			y || d("jQuery.swap() is undocumented and deprecated");
			for (g in b) h[g] = a.style[g], a.style[g] = b[g];
			f = c.apply(a, e || []);
			for (g in b) a.style[g] = h[g];
			return f
		}, a.ajaxSetup({
			converters: {
				"text json": a.parseJSON
			}
		});
		var z = a.fn.data;
		a.fn.data = function (b) {
			var e, f, g = this[0];
			return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
		};
		var A = /\/(java|ecma)script/i;
		a.clean || (a.clean = function (b, c, e, f) {
			c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
			var g, h, i, j, k = [];
			if (a.merge(k, a.buildFragment(b, c).childNodes), e)
				for (i = function (a) {
						return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
					}, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
			return k
		});
		var B = a.event.add,
			C = a.event.remove,
			D = a.event.trigger,
			E = a.fn.toggle,
			F = a.fn.live,
			G = a.fn.die,
			H = a.fn.load,
			I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			J = new RegExp("\\b(?:" + I + ")\\b"),
			K = /(?:^|\s)hover(\.\S+|)\b/,
			L = function (b) {
				return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
			};
		a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
			a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
		}, a.event.remove = function (a, b, c, d, e) {
			C.call(this, a, L(b) || "", c, d, e)
		}, a.each(["load", "unload", "error"], function (b, c) {
			a.fn[c] = function () {
				var a = Array.prototype.slice.call(arguments, 0);
				return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
			}
		}), a.fn.toggle = function (b, c) {
			if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
			d("jQuery.fn.toggle(handler, handler...) is deprecated");
			var e = arguments,
				f = b.guid || a.guid++,
				g = 0,
				h = function (c) {
					var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
					return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
				};
			for (h.guid = f; g < e.length;) e[g++].guid = f;
			return this.click(h)
		}, a.fn.live = function (b, c, e) {
			return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
		}, a.fn.die = function (b, c) {
			return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
		}, a.event.trigger = function (a, b, c, e) {
			return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
		}, a.each(I.split("|"), function (b, c) {
			a.event.special[c] = {
				setup: function () {
					var b = this;
					return b !== document && (a.event.add(document, c + "." + a.guid, function () {
						a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
					}), a._data(this, c, a.guid++)), !1
				},
				teardown: function () {
					return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
				}
			}
		}), a.event.special.ready = {
			setup: function () {
				this === document && d("'ready' event is deprecated")
			}
		};
		var M = a.fn.andSelf || a.fn.addBack,
			N = a.fn.find;
		if (a.fn.andSelf = function () {
				return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
			}, a.fn.find = function (a) {
				var b = N.apply(this, arguments);
				return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
			}, a.Callbacks) {
			var O = a.Deferred,
				P = [
					["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
					["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
					["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
				];
			a.Deferred = function (b) {
				var c = O(),
					e = c.promise();
				return c.pipe = e.pipe = function () {
					var b = arguments;
					return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
						a.each(P, function (f, g) {
							var h = a.isFunction(b[f]) && b[f];
							c[g[1]](function () {
								var b = h && h.apply(this, arguments);
								b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
							})
						}), b = null
					}).promise()
				}, c.isResolved = function () {
					return d("deferred.isResolved is deprecated"), "resolved" === c.state()
				}, c.isRejected = function () {
					return d("deferred.isRejected is deprecated"), "rejected" === c.state()
				}, b && b.call(c, c), c
			}
		}
	}(jQuery, window);
jQuery(window).bind('load', function () {
	if (jQuery('#indeed_top_ism').length) {
		width = jQuery('#indeed_top_ism').width();
		position = jQuery('#indeed_top_ism').offset();
		top_d = position.top;
		left_d = position.left;
		right_d = position.left + parseInt(width);
	}
	if (jQuery('#indeed_bottom_ism').length) {
		obj = jQuery('#indeed_bottom_ism').offset();
		bottom_d = obj.top;
	}
});

function ismDisplayInsidePost(id, wrapp, topBottom, topBottom_val, leftRight, leftRight_val) {
	jQuery(wrapp).css('width', width);
	jQuery(wrapp).css('top', top_d + 'px');
	jQuery(wrapp).css('left', left_d + 'px');
	if (topBottom == 'top') {
		newval = parseInt(topBottom_val);
		jQuery(id).css('top', newval);
	} else {
		newval = parseInt(bottom_d) - parseInt(top_d) - parseInt(topBottom_val);
		jQuery(id).css('top', newval);
	}
	if (leftRight == 'left') {
		jQuery(id).css('left', parseInt(leftRight_val));
	} else {
		jQuery(id).css('right', parseInt(leftRight_val));
	}
	jQuery(id).fadeIn(500);
}

function ism_return_current_date() {
	var timestamp = Math.round(+new Date() / 1000);
	return timestamp;
};
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
! function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	var c = [],
		d = c.slice,
		e = c.concat,
		f = c.push,
		g = c.indexOf,
		h = {},
		i = h.toString,
		j = h.hasOwnProperty,
		k = {},
		l = "1.11.3",
		m = function (a, b) {
			return new m.fn.init(a, b)
		},
		n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		o = /^-ms-/,
		p = /-([\da-z])/gi,
		q = function (a, b) {
			return b.toUpperCase()
		};
	m.fn = m.prototype = {
		jquery: l,
		constructor: m,
		selector: "",
		length: 0,
		toArray: function () {
			return d.call(this)
		},
		get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
		},
		pushStack: function (a) {
			var b = m.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function (a, b) {
			return m.each(this, a, b)
		},
		map: function (a) {
			return this.pushStack(m.map(this, function (b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function () {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: f,
		sort: c.sort,
		splice: c.splice
	}, m.extend = m.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (e = arguments[h]))
				for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
		return g
	}, m.extend({
		expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (a) {
			throw new Error(a)
		},
		noop: function () {},
		isFunction: function (a) {
			return "function" === m.type(a)
		},
		isArray: Array.isArray || function (a) {
			return "array" === m.type(a)
		},
		isWindow: function (a) {
			return null != a && a == a.window
		},
		isNumeric: function (a) {
			return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isEmptyObject: function (a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		isPlainObject: function (a) {
			var b;
			if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
			try {
				if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			if (k.ownLast)
				for (b in a) return j.call(a, b);
			for (b in a);
			return void 0 === b || j.call(a, b)
		},
		type: function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
		},
		globalEval: function (b) {
			b && m.trim(b) && (a.execScript || function (b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function (a) {
			return a.replace(o, "ms-").replace(p, q)
		},
		nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function (a, b, c) {
			var d, e = 0,
				f = a.length,
				g = r(a);
			if (c) {
				if (g) {
					for (; f > e; e++)
						if (d = b.apply(a[e], c), d === !1) break
				} else
					for (e in a)
						if (d = b.apply(a[e], c), d === !1) break
			} else if (g) {
				for (; f > e; e++)
					if (d = b.call(a[e], e, a[e]), d === !1) break
			} else
				for (e in a)
					if (d = b.call(a[e], e, a[e]), d === !1) break;
			return a
		},
		trim: function (a) {
			return null == a ? "" : (a + "").replace(n, "")
		},
		makeArray: function (a, b) {
			var c = b || [];
			return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		},
		inArray: function (a, b, c) {
			var d;
			if (b) {
				if (g) return g.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
					if (c in b && b[c] === a) return c
			}
			return -1
		},
		merge: function (a, b) {
			var c = +b.length,
				d = 0,
				e = a.length;
			while (c > d) a[e++] = b[d++];
			if (c !== c)
				while (void 0 !== b[d]) a[e++] = b[d++];
			return a.length = e, a
		},
		grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function (a, b, c) {
			var d, f = 0,
				g = a.length,
				h = r(a),
				i = [];
			if (h)
				for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
			else
				for (f in a) d = b(a[f], f, c), null != d && i.push(d);
			return e.apply([], i)
		},
		guid: 1,
		proxy: function (a, b) {
			var c, e, f;
			return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
				return a.apply(b || this, c.concat(d.call(arguments)))
			}, e.guid = a.guid = a.guid || m.guid++, e) : void 0
		},
		now: function () {
			return +new Date
		},
		support: k
	}), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase()
	});

	function r(a) {
		var b = "length" in a && a.length,
			c = m.type(a);
		return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var s = function (a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = ha(),
			z = ha(),
			A = ha(),
			B = function (a, b) {
				return a === b && (l = !0), 0
			},
			C = 1 << 31,
			D = {}.hasOwnProperty,
			E = [],
			F = E.pop,
			G = E.push,
			H = E.push,
			I = E.slice,
			J = function (a, b) {
				for (var c = 0, d = a.length; d > c; c++)
					if (a[c] === b) return c;
				return -1
			},
			K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			L = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			N = M.replace("w", "w#"),
			O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
			P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
			Q = new RegExp(L + "+", "g"),
			R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
			S = new RegExp("^" + L + "*," + L + "*"),
			T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
			U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
			V = new RegExp(P),
			W = new RegExp("^" + N + "$"),
			X = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + O),
				PSEUDO: new RegExp("^" + P),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /^(?:input|select|textarea|button)$/i,
			Z = /^h\d$/i,
			$ = /^[^{]+\{\s*\[native \w/,
			_ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			aa = /[+~]/,
			ba = /'|\\/g,
			ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
			da = function (a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			ea = function () {
				m()
			};
		try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
		} catch (fa) {
			H = {
				apply: E.length ? function (a, b) {
					G.apply(a, I.call(b))
				} : function (a, b) {
					var c = a.length,
						d = 0;
					while (a[c++] = b[d++]);
					a.length = c - 1
				}
			}
		}

		function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;
			if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
			if (!e && p) {
				if (11 !== k && (f = _.exec(a)))
					if (j = f[1]) {
						if (9 === k) {
							if (h = b.getElementById(j), !h || !h.parentNode) return d;
							if (h.id === j) return d.push(h), d
						} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
					} else {
						if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
					}
				if (c.qsa && (!q || !q.test(a))) {
					if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
						while (l--) o[l] = s + ra(o[l]);
						w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
					}
					if (x) try {
						return H.apply(d, w.querySelectorAll(x)), d
					} catch (y) {} finally {
						r || b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(R, "$1"), b, d, e)
		}

		function ha() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			return b
		}

		function ia(a) {
			return a[u] = !0, a
		}

		function ja(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ka(a, b) {
			var c = a.split("|"),
				e = a.length;
			while (e--) d.attrHandle[c[e]] = b
		}

		function la(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if (d) return d;
			if (c)
				while (c = c.nextSibling)
					if (c === b) return -1;
			return a ? 1 : -1
		}

		function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function oa(a) {
			return ia(function (b) {
				return b = +b, ia(function (c, d) {
					var e, f = a([], c.length, b),
						g = f.length;
					while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function pa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = ga.setDocument = function (a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ja(function (a) {
				return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
				return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ca, da);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ca, da);
				return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
			} : function (a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					while (c = f[e++]) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return p ? b.getElementsByClassName(a) : void 0
			}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
			}), ja(function (a) {
				var b = g.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)
					while (b = b.parentNode)
						if (b === a) return !0;
				return !1
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b) return l = !0, 0;
				var c, d = 0,
					e = a.parentNode,
					f = b.parentNode,
					h = [a],
					i = [b];
				if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
				if (e === f) return la(a, b);
				c = a;
				while (c = c.parentNode) h.unshift(c);
				c = b;
				while (c = c.parentNode) i.unshift(c);
				while (h[d] === i[d]) d++;
				return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
			}, g) : n
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b)
		}, ga.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
				var d = s.call(a, b);
				if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (e) {}
			return ga(b, n, null, [a]).length > 0
		}, ga.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b)
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, ga.uniqueSort = function (a) {
			var b, d = [],
				e = 0,
				f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) b === a[f] && (e = d.push(f));
				while (e--) a.splice(d[e], 1)
			}
			return k = null, a
		}, e = ga.getText = function (a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
				} else if (3 === f || 4 === f) return a.nodeValue
			} else
				while (b = a[d++]) c += e(b);
			return c
		}, d = ga.selectors = {
			cacheLength: 50,
			createPseudo: ia,
			match: X,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (a) {
					return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function (a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
				},
				PSEUDO: function (a) {
					var b, c = !a[6] && a[2];
					return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function (a) {
					var b = a.replace(ca, da).toLowerCase();
					return "*" === a ? function () {
						return !0
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function (a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function (a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
					}
				},
				CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h;
						if (q) {
							if (f) {
								while (p) {
									l = b;
									while (l = l[p])
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
								while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
									if (1 === l.nodeType && ++m && l === b) {
										k[a] = [w, n, m];
										break
									}
							} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
							else
								while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
									if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				},
				PSEUDO: function (a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d, f = e(a, b),
							g = f.length;
						while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function (a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ia(function (a) {
					var b = [],
						c = [],
						d = h(a.replace(R, "$1"));
					return d[u] ? ia(function (a, b, c, e) {
						var f, g = d(a, null, e, []),
							h = a.length;
						while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0
					}
				}),
				contains: ia(function (a) {
					return a = a.replace(ca, da),
						function (b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
				}),
				lang: ia(function (a) {
					return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
						function (b) {
							var c;
							do
								if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function (a) {
					return a === o
				},
				focus: function (a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function (a) {
					return a.disabled === !1
				},
				disabled: function (a) {
					return a.disabled === !0
				},
				checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function (a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function (a) {
					return !d.pseudos.empty(a)
				},
				header: function (a) {
					return Z.test(a.nodeName)
				},
				input: function (a) {
					return Y.test(a.nodeName)
				},
				button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: oa(function () {
					return [0]
				}),
				last: oa(function (a, b) {
					return [b - 1]
				}),
				eq: oa(function (a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: oa(function (a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: oa(function (a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) d.pseudos[b] = ma(b);
		for (b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = na(b);

		function qa() {}
		qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k) return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(R, " ")
				}), h = h.slice(c.length));
				for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
					value: c,
					type: g,
					matches: e
				}), h = h.slice(c.length));
				if (!c) break
			}
			return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
		};

		function ra(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function sa(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = x++;
			return b.first ? function (b, c, f) {
				while (b = b[d])
					if (1 === b.nodeType || e) return a(b, c, f)
			} : function (b, c, g) {
				var h, i, j = [w, f];
				if (g) {
					while (b = b[d])
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else
					while (b = b[d])
						if (1 === b.nodeType || e) {
							if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
							if (i[d] = j, j[2] = a(b, c, g)) return !0
						}
			}
		}

		function ta(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;
				while (e--)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function ua(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
			return c
		}

		function va(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function wa(a, b, c, d, e, f) {
			return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || ua(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : va(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = va(r, n), d(j, [], h, i), k = j.length;
					while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
			})
		}

		function xa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
					return a === b
				}, h, !0), l = sa(function (a) {
					return J(b, a) > -1
				}, h, !0), m = [function (a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}]; f > i; i++)
				if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
				else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++)
							if (d.relative[a[e].type]) break;
						return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
					}
					m.push(c)
				}
			return ta(m)
		}

		function ya(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function (f, g, h, i, k) {
					var l, m, o, p = 0,
						q = "0",
						r = f && [],
						s = [],
						t = j,
						u = f || e && d.find.TAG("*", k),
						v = w += null == t ? 1 : Math.random() || .1,
						x = u.length;
					for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
						if (e && l) {
							m = 0;
							while (o = a[m++])
								if (o(l, g, h)) {
									i.push(l);
									break
								}
							k && (w = v)
						}
						c && ((l = !o && l) && p--, f && r.push(l))
					}
					if (p += q, c && q !== p) {
						m = 0;
						while (o = b[m++]) o(r, s, g, h);
						if (f) {
							if (p > 0)
								while (q--) r[q] || s[q] || (s[q] = F.call(i));
							s = va(s)
						}
						H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
					}
					return k && (w = v, j = t), r
				};
			return c ? ia(f) : f
		}
		return h = ga.compile = function (a, b) {
			var c, d = [],
				e = [],
				f = A[a + " "];
			if (!f) {
				b || (b = g(a)), c = b.length;
				while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, ya(e, d)), f.selector = a
			}
			return f
		}, i = ga.select = function (a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a,
				o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = X.needsContext.test(a) ? 0 : j.length;
				while (i--) {
					if (k = j[i], d.relative[l = k.type]) break;
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
						break
					}
				}
			}
			return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ja(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || ka("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ja(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || ka("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ja(function (a) {
			return null == a.getAttribute("disabled")
		}) || ka(K, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), ga
	}(a);
	m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
	var t = m.expr.match.needsContext,
		u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		v = /^.[^:#\[\.,]*$/;

	function w(a, b, c) {
		if (m.isFunction(b)) return m.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return m.grep(a, function (a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (v.test(b)) return m.filter(b, a, c);
			b = m.filter(b, a)
		}
		return m.grep(a, function (a) {
			return m.inArray(a, b) >= 0 !== c
		})
	}
	m.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, m.fn.extend({
		find: function (a) {
			var b, c = [],
				d = this,
				e = d.length;
			if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
				for (b = 0; e > b; b++)
					if (m.contains(d[b], this)) return !0
			}));
			for (b = 0; e > b; b++) m.find(a, d[b], c);
			return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		},
		filter: function (a) {
			return this.pushStack(w(this, a || [], !1))
		},
		not: function (a) {
			return this.pushStack(w(this, a || [], !0))
		},
		is: function (a) {
			return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
		}
	});
	var x, y = a.document,
		z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		A = m.fn.init = function (a, b) {
			var c, d;
			if (!a) return this;
			if ("string" == typeof a) {
				if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
				if (c[1]) {
					if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
						for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					return this
				}
				if (d = y.getElementById(c[2]), d && d.parentNode) {
					if (d.id !== c[2]) return x.find(a);
					this.length = 1, this[0] = d
				}
				return this.context = y, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
		};
	A.prototype = m.fn, x = m(y);
	var B = /^(?:parents|prev(?:Until|All))/,
		C = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	m.extend({
		dir: function (a, b, c) {
			var d = [],
				e = a[b];
			while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
			return d
		},
		sibling: function (a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), m.fn.extend({
		has: function (a) {
			var b, c = m(a, this),
				d = c.length;
			return this.filter(function () {
				for (b = 0; d > b; b++)
					if (m.contains(this, c[b])) return !0
			})
		},
		closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
						f.push(c);
						break
					}
			return this.pushStack(f.length > 1 ? m.unique(f) : f)
		},
		index: function (a) {
			return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (a, b) {
			return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
		},
		addBack: function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function D(a, b) {
		do a = a[b]; while (a && 1 !== a.nodeType);
		return a
	}
	m.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function (a) {
			return m.dir(a, "parentNode")
		},
		parentsUntil: function (a, b, c) {
			return m.dir(a, "parentNode", c)
		},
		next: function (a) {
			return D(a, "nextSibling")
		},
		prev: function (a) {
			return D(a, "previousSibling")
		},
		nextAll: function (a) {
			return m.dir(a, "nextSibling")
		},
		prevAll: function (a) {
			return m.dir(a, "previousSibling")
		},
		nextUntil: function (a, b, c) {
			return m.dir(a, "nextSibling", c)
		},
		prevUntil: function (a, b, c) {
			return m.dir(a, "previousSibling", c)
		},
		siblings: function (a) {
			return m.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function (a) {
			return m.sibling(a.firstChild)
		},
		contents: function (a) {
			return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
		}
	}, function (a, b) {
		m.fn[a] = function (c, d) {
			var e = m.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var E = /\S+/g,
		F = {};

	function G(a) {
		var b = F[a] = {};
		return m.each(a.match(E) || [], function (a, c) {
			b[c] = !0
		}), b
	}
	m.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
		var b, c, d, e, f, g, h = [],
			i = !a.once && [],
			j = function (l) {
				for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
					if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
						c = !1;
						break
					}
				b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
			},
			k = {
				add: function () {
					if (h) {
						var d = h.length;
						! function f(b) {
							m.each(b, function (b, c) {
								var d = m.type(c);
								"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
							})
						}(arguments), b ? e = h.length : c && (g = d, j(c))
					}
					return this
				},
				remove: function () {
					return h && m.each(arguments, function (a, c) {
						var d;
						while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
					}), this
				},
				has: function (a) {
					return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
				},
				empty: function () {
					return h = [], e = 0, this
				},
				disable: function () {
					return h = i = c = void 0, this
				},
				disabled: function () {
					return !h
				},
				lock: function () {
					return i = void 0, c || k.disable(), this
				},
				locked: function () {
					return !i
				},
				fireWith: function (a, c) {
					return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
				},
				fire: function () {
					return k.fireWith(this, arguments), this
				},
				fired: function () {
					return !!d
				}
			};
		return k
	}, m.extend({
		Deferred: function (a) {
			var b = [
					["resolve", "done", m.Callbacks("once memory"), "resolved"],
					["reject", "fail", m.Callbacks("once memory"), "rejected"],
					["notify", "progress", m.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function () {
						return c
					},
					always: function () {
						return e.done(arguments).fail(arguments), this
					},
					then: function () {
						var a = arguments;
						return m.Deferred(function (c) {
							m.each(b, function (b, f) {
								var g = m.isFunction(a[b]) && a[b];
								e[f[1]](function () {
									var a = g && g.apply(this, arguments);
									a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function (a) {
						return null != a ? m.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, m.each(b, function (a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function () {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function (a) {
			var b = 0,
				c = d.call(arguments),
				e = c.length,
				f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
				g = 1 === f ? a : m.Deferred(),
				h = function (a, b, c) {
					return function (e) {
						b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if (e > 1)
				for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var H;
	m.fn.ready = function (a) {
		return m.ready.promise().done(a), this
	}, m.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (a) {
			a ? m.readyWait++ : m.ready(!0)
		},
		ready: function (a) {
			if (a === !0 ? !--m.readyWait : !m.isReady) {
				if (!y.body) return setTimeout(m.ready);
				m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
			}
		}
	});

	function I() {
		y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
	}

	function J() {
		(y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
	}
	m.ready.promise = function (b) {
		if (!H)
			if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
			else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
		else {
			y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
			var c = !1;
			try {
				c = null == a.frameElement && y.documentElement
			} catch (d) {}
			c && c.doScroll && ! function e() {
				if (!m.isReady) {
					try {
						c.doScroll("left")
					} catch (a) {
						return setTimeout(e, 50)
					}
					I(), m.ready()
				}
			}()
		}
		return H.promise(b)
	};
	var K = "undefined",
		L;
	for (L in m(k)) break;
	k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
			var a, b, c, d;
			c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
		}),
		function () {
			var a = y.createElement("div");
			if (null == k.deleteExpando) {
				k.deleteExpando = !0;
				try {
					delete a.test
				} catch (b) {
					k.deleteExpando = !1
				}
			}
			a = null
		}(), m.acceptData = function (a) {
			var b = m.noData[(a.nodeName + " ").toLowerCase()],
				c = +a.nodeType || 1;
			return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
		};
	var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		N = /([A-Z])/g;

	function O(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(N, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
				} catch (e) {}
				m.data(a, b, c)
			} else c = void 0
		}
		return c
	}

	function P(a) {
		var b;
		for (b in a)
			if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
		return !0
	}

	function Q(a, b, d, e) {
		if (m.acceptData(a)) {
			var f, g, h = m.expando,
				i = a.nodeType,
				j = i ? m.cache : a,
				k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
				toJSON: m.noop
			}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
		}
	}

	function R(a, b, c) {
		if (m.acceptData(a)) {
			var d, e, f = a.nodeType,
				g = f ? m.cache : a,
				h = f ? a[m.expando] : m.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					while (e--) delete d[b[e]];
					if (c ? !P(d) : !m.isEmptyObject(d)) return
				}(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
			}
		}
	}
	m.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function (a) {
			return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
		},
		data: function (a, b, c) {
			return Q(a, b, c)
		},
		removeData: function (a, b) {
			return R(a, b)
		},
		_data: function (a, b, c) {
			return Q(a, b, c, !0)
		},
		_removeData: function (a, b) {
			return R(a, b, !0)
		}
	}), m.fn.extend({
		data: function (a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
					c = g.length;
					while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
					m._data(f, "parsedAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {
				m.data(this, a)
			}) : arguments.length > 1 ? this.each(function () {
				m.data(this, a, b)
			}) : f ? O(f, a, m.data(f, a)) : void 0
		},
		removeData: function (a) {
			return this.each(function () {
				m.removeData(this, a)
			})
		}
	}), m.extend({
		queue: function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function (a, b) {
			b = b || "fx";
			var c = m.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = m._queueHooks(a, b),
				g = function () {
					m.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function (a, b) {
			var c = b + "queueHooks";
			return m._data(a, c) || m._data(a, c, {
				empty: m.Callbacks("once memory").add(function () {
					m._removeData(a, b + "queue"), m._removeData(a, c)
				})
			})
		}
	}), m.fn.extend({
		queue: function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = m.queue(this, a, b);
				m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
			})
		},
		dequeue: function (a) {
			return this.each(function () {
				m.dequeue(this, a)
			})
		},
		clearQueue: function (a) {
			return this.queue(a || "fx", [])
		},
		promise: function (a, b) {
			var c, d = 1,
				e = m.Deferred(),
				f = this,
				g = this.length,
				h = function () {
					--d || e.resolveWith(f, [f])
				};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		T = ["Top", "Right", "Bottom", "Left"],
		U = function (a, b) {
			return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
		},
		V = m.access = function (a, b, c, d, e, f, g) {
			var h = 0,
				i = a.length,
				j = null == c;
			if ("object" === m.type(c)) {
				e = !0;
				for (h in c) m.access(a, b, h, c[h], !0, f, g)
			} else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
					return j.call(m(a), c)
				})), b))
				for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
		},
		W = /^(?:checkbox|radio)$/i;
	! function () {
		var a = y.createElement("input"),
			b = y.createElement("div"),
			c = y.createDocumentFragment();
		if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
				k.noCloneEvent = !1
			}), b.cloneNode(!0).click()), null == k.deleteExpando) {
			k.deleteExpando = !0;
			try {
				delete b.test
			} catch (d) {
				k.deleteExpando = !1
			}
		}
	}(),
	function () {
		var b, c, d = y.createElement("div");
		for (b in {
				submit: !0,
				change: !0,
				focusin: !0
			}) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
		d = null
	}();
	var X = /^(?:input|select|textarea)$/i,
		Y = /^key/,
		Z = /^(?:mouse|pointer|contextmenu)|click/,
		$ = /^(?:focusinfocus|focusoutblur)$/,
		_ = /^([^.]*)(?:\.(.+)|)$/;

	function aa() {
		return !0
	}

	function ba() {
		return !1
	}

	function ca() {
		try {
			return y.activeElement
		} catch (a) {}
	}
	m.event = {
		global: {},
		add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
			if (r) {
				c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
					return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
				}, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
				while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && m.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
				a = null
			}
		},
		remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
			if (r && (k = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;
				while (j--)
					if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
						while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
						i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
					} else
						for (o in k) m.event.remove(a, o + b[j], c, d, !0);
				m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
			}
		},
		trigger: function (b, c, d, e) {
			var f, g, h, i, k, l, n, o = [d || y],
				p = j.call(b, "type") ? b.type : b,
				q = j.call(b, "namespace") ? b.namespace.split(".") : [];
			if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
				if (!e && !k.noBubble && !m.isWindow(d)) {
					for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
					l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
				}
				n = 0;
				while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
				if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
					l = d[g], l && (d[g] = null), m.event.triggered = p;
					try {
						d[p]()
					} catch (r) {}
					m.event.triggered = void 0, l && (d[g] = l)
				}
				return b.result
			}
		},
		dispatch: function (a) {
			a = m.event.fix(a);
			var b, c, e, f, g, h = [],
				i = d.call(arguments),
				j = (m._data(this, "events") || {})[a.type] || [],
				k = m.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = m.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, g = 0;
					while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))
				for (; i != this; i = i.parentNode || this)
					if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
						for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
						e.length && g.push({
							elem: i,
							handlers: e
						})
					}
			return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		fix: function (a) {
			if (a[m.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
			while (b--) c = d[b], a[c] = f[c];
			return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (a, b) {
				var c, d, e, f = b.button,
					g = b.fromElement;
				return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== ca() && this.focus) try {
						return this.focus(), !1
					} catch (a) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === ca() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function (a) {
					return m.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c, d) {
			var e = m.extend(new m.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, m.removeEvent = y.removeEventListener ? function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function (a, b, c) {
		var d = "on" + b;
		a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
	}, m.Event = function (a, b) {
		return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
	}, m.Event.prototype = {
		isDefaultPrevented: ba,
		isPropagationStopped: ba,
		isImmediatePropagationStopped: ba,
		preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, m.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (a, b) {
		m.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function (a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), k.submitBubbles || (m.event.special.submit = {
		setup: function () {
			return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
				var b = a.target,
					c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
				c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
					a._submit_bubble = !0
				}), m._data(c, "submitBubbles", !0))
			})
		},
		postDispatch: function (a) {
			a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
		},
		teardown: function () {
			return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
		}
	}), k.changeBubbles || (m.event.special.change = {
		setup: function () {
			return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
				"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
			}), m.event.add(this, "click._change", function (a) {
				this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
			})), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
				var b = a.target;
				X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
					!this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
				}), m._data(b, "changeBubbles", !0))
			})
		},
		handle: function (a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function () {
			return m.event.remove(this, "._change"), !X.test(this.nodeName)
		}
	}), k.focusinBubbles || m.each({
		focus: "focusin",
		blur: "focusout"
	}, function (a, b) {
		var c = function (a) {
			m.event.simulate(b, a.target, m.event.fix(a), !0)
		};
		m.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this,
					e = m._data(d, b);
				e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
			},
			teardown: function () {
				var d = this.ownerDocument || this,
					e = m._data(d, b) - 1;
				e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
			}
		}
	}), m.fn.extend({
		on: function (a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (f in a) this.on(f, b, c, a[f], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;
			else if (!d) return this;
			return 1 === e && (g = d, d = function (a) {
				return m().off(a), g.apply(this, arguments)
			}, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
				m.event.add(this, a, d, c, b)
			})
		},
		one: function (a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
				m.event.remove(this, a, c, b)
			})
		},
		trigger: function (a, b) {
			return this.each(function () {
				m.event.trigger(a, b, this)
			})
		},
		triggerHandler: function (a, b) {
			var c = this[0];
			return c ? m.event.trigger(a, b, c, !0) : void 0
		}
	});

	function da(a) {
		var b = ea.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement)
			while (b.length) c.createElement(b.pop());
		return c
	}
	var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		fa = / jQuery\d+="(?:null|\d+)"/g,
		ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
		ha = /^\s+/,
		ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ja = /<([\w:]+)/,
		ka = /<tbody/i,
		la = /<|&#?\w+;/,
		ma = /<(?:script|style|link)/i,
		na = /checked\s*(?:[^=]|=\s*.checked.)/i,
		oa = /^$|\/(?:java|ecma)script/i,
		pa = /^true\/(.*)/,
		qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ra = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		sa = da(y),
		ta = sa.appendChild(y.createElement("div"));
	ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;

	function ua(a, b) {
		var c, d, e = 0,
			f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
		if (!f)
			for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
		return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
	}

	function va(a) {
		W.test(a.type) && (a.defaultChecked = a.checked)
	}

	function wa(a, b) {
		return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function xa(a) {
		return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
	}

	function ya(a) {
		var b = pa.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function za(a, b) {
		for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
	}

	function Aa(a, b) {
		if (1 === b.nodeType && m.hasData(a)) {
			var c, d, e, f = m._data(a),
				g = m._data(b, f),
				h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h)
					for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
			}
			g.data && (g.data = m.extend({}, g.data))
		}
	}

	function Ba(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
				e = m._data(b);
				for (d in e.events) m.removeEvent(b, d, e.handle);
				b.removeAttribute(m.expando)
			}
			"script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
		}
	}
	m.extend({
		clone: function (a, b, c) {
			var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
			if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
				for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
			if (b)
				if (c)
					for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]);
				else Aa(a, f);
			return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
		},
		buildFragment: function (a, b, c, d) {
			for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
				if (f = a[q], f || 0 === f)
					if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
					else if (la.test(f)) {
				h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
				while (e--) h = h.lastChild;
				if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
					f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
					while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
				}
				m.merge(p, h.childNodes), h.textContent = "";
				while (h.firstChild) h.removeChild(h.firstChild);
				h = o.lastChild
			} else p.push(b.createTextNode(f));
			h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
			while (f = p[q++])
				if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
					e = 0;
					while (f = h[e++]) oa.test(f.type || "") && c.push(f)
				}
			return h = null, o
		},
		cleanData: function (a, b) {
			for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
				if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
					if (g.events)
						for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
					j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
				}
		}
	}), m.fn.extend({
		text: function (a) {
			return V(this, function (a) {
				return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
			}, null, a, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = wa(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = wa(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function (a, b) {
			for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && m.cleanData(ua(a, !1));
				while (a.firstChild) a.removeChild(a.firstChild);
				a.options && m.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		},
		clone: function (a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return m.clone(this, a, b)
			})
		},
		html: function (a) {
			return V(this, function (a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
				if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
					a = a.replace(ia, "<$1></$2>");
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function () {
			var a = arguments[0];
			return this.domManip(arguments, function (b) {
				a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function (a) {
			return this.remove(a, !0)
		},
		domManip: function (a, b) {
			a = e.apply([], a);
			var c, d, f, g, h, i, j = 0,
				l = this.length,
				n = this,
				o = l - 1,
				p = a[0],
				q = m.isFunction(p);
			if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function (c) {
				var d = n.eq(c);
				q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
			});
			if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
				for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
				if (f)
					for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
				i = c = null
			}
			return this
		}
	}), m.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (a, b) {
		m.fn[a] = function (a) {
			for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
			return this.pushStack(e)
		}
	});
	var Ca, Da = {};

	function Ea(b, c) {
		var d, e = m(c.createElement(b)).appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
		return e.detach(), f
	}

	function Fa(a) {
		var b = y,
			c = Da[a];
		return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
	}! function () {
		var a;
		k.shrinkWrapBlocks = function () {
			if (null != a) return a;
			a = !1;
			var b, c, d;
			return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
		}
	}();
	var Ga = /^margin/,
		Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
		Ia, Ja, Ka = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ia = function (b) {
		return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
	}, Ja = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
	}) : y.documentElement.currentStyle && (Ia = function (a) {
		return a.currentStyle
	}, Ja = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
	});

	function La(a, b) {
		return {
			get: function () {
				var c = a();
				if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}! function () {
		var b, c, d, e, f, g, h;
		if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
			c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
				reliableHiddenOffsets: function () {
					return null == g && i(), g
				},
				boxSizingReliable: function () {
					return null == f && i(), f
				},
				pixelPosition: function () {
					return null == e && i(), e
				},
				reliableMarginRight: function () {
					return null == h && i(), h
				}
			});

			function i() {
				var b, c, d, i;
				c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
					width: "4px"
				}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
			}
		}
	}(), m.swap = function (a, b, c, d) {
		var e, f, g = {};
		for (f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b) a.style[f] = g[f];
		return e
	};
	var Ma = /alpha\([^)]*\)/i,
		Na = /opacity\s*=\s*([^)]*)/,
		Oa = /^(none|table(?!-c[ea]).+)/,
		Pa = new RegExp("^(" + S + ")(.*)$", "i"),
		Qa = new RegExp("^([+-])=(" + S + ")", "i"),
		Ra = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Sa = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ta = ["Webkit", "O", "Moz", "ms"];

	function Ua(a, b) {
		if (b in a) return b;
		var c = b.charAt(0).toUpperCase() + b.slice(1),
			d = b,
			e = Ta.length;
		while (e--)
			if (b = Ta[e] + c, b in a) return b;
		return d
	}

	function Va(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function Wa(a, b, c) {
		var d = Pa.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function Xa(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
		return g
	}

	function Ya(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = Ia(a),
			g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
			d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}
	m.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = Ja(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": k.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = m.camelCase(b),
					i = a.style;
				if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
				if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
					i[b] = c
				} catch (j) {}
			}
		},
		css: function (a, b, c, d) {
			var e, f, g, h = m.camelCase(b);
			return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
		}
	}), m.each(["height", "width"], function (a, b) {
		m.cssHooks[b] = {
			get: function (a, c, d) {
				return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
					return Ya(a, b, d)
				}) : Ya(a, b, d) : void 0
			},
			set: function (a, c, d) {
				var e = d && Ia(a);
				return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), k.opacity || (m.cssHooks.opacity = {
		get: function (a, b) {
			return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function (a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
		}
	}), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
		return b ? m.swap(a, {
			display: "inline-block"
		}, Ja, [a, "marginRight"]) : void 0
	}), m.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (a, b) {
		m.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
	}), m.fn.extend({
		css: function (a, b) {
			return V(this, function (a, b, c) {
				var d, e, f = {},
					g = 0;
				if (m.isArray(b)) {
					for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function () {
			return Va(this, !0)
		},
		hide: function () {
			return Va(this)
		},
		toggle: function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				U(this) ? m(this).show() : m(this).hide()
			})
		}
	});

	function Za(a, b, c, d, e) {
		return new Za.prototype.init(a, b, c, d, e)
	}
	m.Tween = Za, Za.prototype = {
		constructor: Za,
		init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
		},
		cur: function () {
			var a = Za.propHooks[this.prop];
			return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
		},
		run: function (a) {
			var b, c = Za.propHooks[this.prop];
			return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
		}
	}, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function (a) {
				m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
		set: function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, m.easing = {
		linear: function (a) {
			return a
		},
		swing: function (a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, m.fx = Za.prototype.init, m.fx.step = {};
	var $a, _a, ab = /^(?:toggle|show|hide)$/,
		bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
		cb = /queueHooks$/,
		db = [ib],
		eb = {
			"*": [function (a, b) {
				var c = this.createTween(a, b),
					d = c.cur(),
					e = bb.exec(b),
					f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
					g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
					h = 1,
					i = 20;
				if (g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};

	function fb() {
		return setTimeout(function () {
			$a = void 0
		}), $a = m.now()
	}

	function gb(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function hb(a, b, c) {
		for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function ib(a, b, c) {
		var d, e, f, g, h, i, j, l, n = this,
			o = {},
			p = a.style,
			q = a.nodeType && U(a),
			r = m._data(a, "fxshow");
		c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i()
		}), h.unqueued++, n.always(function () {
			n.always(function () {
				h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
			p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (e = b[d], ab.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
					if ("show" !== e || !r || void 0 === r[d]) continue;
					q = !0
				}
				o[d] = r && r[d] || m.style(a, d)
			} else j = void 0;
		if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
		else {
			r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
				m(a).hide()
			}), n.done(function () {
				var b;
				m._removeData(a, "fxshow");
				for (b in o) m.style(a, b, o[b])
			});
			for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function jb(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function kb(a, b, c) {
		var d, e, f = 0,
			g = db.length,
			h = m.Deferred().always(function () {
				delete i.elem
			}),
			i = function () {
				if (e) return !1;
				for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: m.extend({}, b),
				opts: m.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: $a || fb(),
				duration: c.duration,
				tweens: [],
				createTween: function (b, c) {
					var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function (b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (jb(k, j.opts.specialEasing); g > f; f++)
			if (d = db[f].call(j, a, k, j.opts)) return d;
		return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	m.Animation = m.extend(kb, {
			tweener: function (a, b) {
				m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
			},
			prefilter: function (a, b) {
				b ? db.unshift(a) : db.push(a)
			}
		}), m.speed = function (a, b, c) {
			var d = a && "object" == typeof a ? m.extend({}, a) : {
				complete: c || !c && b || m.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !m.isFunction(b) && b
			};
			return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
				m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
			}, d
		}, m.fn.extend({
			fadeTo: function (a, b, c, d) {
				return this.filter(U).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function (a, b, c, d) {
				var e = m.isEmptyObject(a),
					f = m.speed(b, c, d),
					g = function () {
						var b = kb(this, m.extend({}, a), f);
						(e || m._data(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function (a, b, c) {
				var d = function (a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = m.timers,
						g = m._data(this);
					if (e) g[e] && g[e].stop && d(g[e]);
					else
						for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
					for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					(b || !c) && m.dequeue(this, a)
				})
			},
			finish: function (a) {
				return a !== !1 && (a = a || "fx"), this.each(function () {
					var b, c = m._data(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = m.timers,
						g = d ? d.length : 0;
					for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), m.each(["toggle", "show", "hide"], function (a, b) {
			var c = m.fn[b];
			m.fn[b] = function (a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
			}
		}), m.each({
			slideDown: gb("show"),
			slideUp: gb("hide"),
			slideToggle: gb("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (a, b) {
			m.fn[a] = function (a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), m.timers = [], m.fx.tick = function () {
			var a, b = m.timers,
				c = 0;
			for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
			b.length || m.fx.stop(), $a = void 0
		}, m.fx.timer = function (a) {
			m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
		}, m.fx.interval = 13, m.fx.start = function () {
			_a || (_a = setInterval(m.fx.tick, m.fx.interval))
		}, m.fx.stop = function () {
			clearInterval(_a), _a = null
		}, m.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, m.fn.delay = function (a, b) {
			return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
				var d = setTimeout(b, a);
				c.stop = function () {
					clearTimeout(d)
				}
			})
		},
		function () {
			var a, b, c, d, e;
			b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
		}();
	var lb = /\r/g;
	m.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
						return null == a ? "" : a + ""
					})), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
			}
		}
	}), m.extend({
		valHooks: {
			option: {
				get: function (a) {
					var b = m.find.attr(a, "value");
					return null != b ? b : m.trim(m.text(a))
				}
			},
			select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
							if (b = m(c).val(), f) return b;
							g.push(b)
						}
					return g
				},
				set: function (a, b) {
					var c, d, e = a.options,
						f = m.makeArray(b),
						g = e.length;
					while (g--)
						if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
							d.selected = c = !0
						} catch (h) {
							d.scrollHeight
						} else d.selected = !1;
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), m.each(["radio", "checkbox"], function () {
		m.valHooks[this] = {
			set: function (a, b) {
				return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
			}
		}, k.checkOn || (m.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	});
	var mb, nb, ob = m.expr.attrHandle,
		pb = /^(?:checked|selected)$/i,
		qb = k.getSetAttribute,
		rb = k.input;
	m.fn.extend({
		attr: function (a, b) {
			return V(this, m.attr, a, b, arguments.length > 1)
		},
		removeAttr: function (a) {
			return this.each(function () {
				m.removeAttr(this, a)
			})
		}
	}), m.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
		},
		removeAttr: function (a, b) {
			var c, d, e = 0,
				f = b && b.match(E);
			if (f && 1 === a.nodeType)
				while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
		},
		attrHooks: {
			type: {
				set: function (a, b) {
					if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), nb = {
		set: function (a, b, c) {
			return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
		}
	}, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = ob[b] || m.find.attr;
		ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
			var e, f;
			return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
		} : function (a, b, c) {
			return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
		}
	}), rb && qb || (m.attrHooks.value = {
		set: function (a, b, c) {
			return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
		}
	}), qb || (mb = {
		set: function (a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, ob.id = ob.name = ob.coords = function (a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, m.valHooks.button = {
		get: function (a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		},
		set: mb.set
	}, m.attrHooks.contenteditable = {
		set: function (a, b, c) {
			mb.set(a, "" === b ? !1 : b, c)
		}
	}, m.each(["width", "height"], function (a, b) {
		m.attrHooks[b] = {
			set: function (a, c) {
				return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
			}
		}
	})), k.style || (m.attrHooks.style = {
		get: function (a) {
			return a.style.cssText || void 0
		},
		set: function (a, b) {
			return a.style.cssText = b + ""
		}
	});
	var sb = /^(?:input|select|textarea|button|object)$/i,
		tb = /^(?:a|area)$/i;
	m.fn.extend({
		prop: function (a, b) {
			return V(this, m.prop, a, b, arguments.length > 1)
		},
		removeProp: function (a) {
			return a = m.propFix[a] || a, this.each(function () {
				try {
					this[a] = void 0, delete this[a]
				} catch (b) {}
			})
		}
	}), m.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function (a, b, c) {
			var d, e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function (a) {
					var b = m.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		}
	}), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
		m.propHooks[b] = {
			get: function (a) {
				return a.getAttribute(b, 4)
			}
		}
	}), k.optSelected || (m.propHooks.selected = {
		get: function (a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		m.propFix[this.toLowerCase()] = this
	}), k.enctype || (m.propFix.enctype = "encoding");
	var ub = /[\t\r\n\f]/g;
	m.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h = 0,
				i = this.length,
				j = "string" == typeof a && a;
			if (m.isFunction(a)) return this.each(function (b) {
				m(this).addClass(a.call(this, b, this.className))
			});
			if (j)
				for (b = (a || "").match(E) || []; i > h; h++)
					if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
						f = 0;
						while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						g = m.trim(d), c.className !== g && (c.className = g)
					}
			return this
		},
		removeClass: function (a) {
			var b, c, d, e, f, g, h = 0,
				i = this.length,
				j = 0 === arguments.length || "string" == typeof a && a;
			if (m.isFunction(a)) return this.each(function (b) {
				m(this).removeClass(a.call(this, b, this.className))
			});
			if (j)
				for (b = (a || "").match(E) || []; i > h; h++)
					if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
						f = 0;
						while (e = b[f++])
							while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
						g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
					}
			return this
		},
		toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
				m(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function () {
				if ("string" === c) {
					var b, d = 0,
						e = m(this),
						f = a.match(E) || [];
					while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
			})
		},
		hasClass: function (a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
			return !1
		}
	}), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		m.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), m.fn.extend({
		hover: function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function (a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function (a, b) {
			return this.off(a, null, b)
		},
		delegate: function (a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var vb = m.now(),
		wb = /\?/,
		xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	m.parseJSON = function (b) {
		if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
		var c, d = null,
			e = m.trim(b + "");
		return e && !m.trim(e.replace(xb, function (a, b, e, f) {
			return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
		})) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
	}, m.parseXML = function (b) {
		var c, d;
		if (!b || "string" != typeof b) return null;
		try {
			a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
		} catch (e) {
			c = void 0
		}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
	};
	var yb, zb, Ab = /#.*$/,
		Bb = /([?&])_=[^&]*/,
		Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Eb = /^(?:GET|HEAD)$/,
		Fb = /^\/\//,
		Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Hb = {},
		Ib = {},
		Jb = "*/".concat("*");
	try {
		zb = location.href
	} catch (Kb) {
		zb = y.createElement("a"), zb.href = "", zb = zb.href
	}
	yb = Gb.exec(zb.toLowerCase()) || [];

	function Lb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(E) || [];
			if (m.isFunction(c))
				while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function Mb(a, b, c, d) {
		var e = {},
			f = a === Ib;

		function g(h) {
			var i;
			return e[h] = !0, m.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function Nb(a, b) {
		var c, d, e = m.ajaxSettings.flatOptions || {};
		for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
		return c && m.extend(!0, a, c), a
	}

	function Ob(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
		if (e)
			for (g in h)
				if (h[g] && h[g].test(e)) {
					i.unshift(g);
					break
				}
		if (i[0] in c) f = i[0];
		else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function Pb(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					}
			if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}
	m.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: zb,
			type: "GET",
			isLocal: Db.test(yb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Jb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": m.parseJSON,
				"text xml": m.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (a, b) {
			return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
		},
		ajaxPrefilter: Lb(Hb),
		ajaxTransport: Lb(Ib),
		ajax: function (a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
				l = k.context || k,
				n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
				o = m.Deferred(),
				p = m.Callbacks("once memory"),
				q = k.statusCode || {},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function (a) {
						var b;
						if (2 === t) {
							if (!j) {
								j = {};
								while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2]
							}
							b = j[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function () {
						return 2 === t ? f : null
					},
					setRequestHeader: function (a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function (a) {
						return t || (k.mimeType = a), this
					},
					statusCode: function (a) {
						var b;
						if (a)
							if (2 > t)
								for (b in a) q[b] = [q[b], a[b]];
							else v.always(a[v.status]);
						return this
					},
					abort: function (a) {
						var b = a || u;
						return i && i.abort(b), x(0, b), this
					}
				};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;
			h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
			for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
			if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
			u = "abort";
			for (d in {
					success: 1,
					error: 1,
					complete: 1
				}) v[d](k[d]);
			if (i = Mb(Ib, k, b, v)) {
				v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
					v.abort("timeout")
				}, k.timeout));
				try {
					t = 1, i.send(r, x)
				} catch (w) {
					if (!(2 > t)) throw w;
					x(-1, w)
				}
			} else x(-1, "No Transport");

			function x(a, b, c, d) {
				var j, r, s, u, w, x = b;
				2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
			}
			return v
		},
		getJSON: function (a, b, c) {
			return m.get(a, b, c, "json")
		},
		getScript: function (a, b) {
			return m.get(a, void 0, b, "script")
		}
	}), m.each(["get", "post"], function (a, b) {
		m[b] = function (a, c, d, e) {
			return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), m._evalUrl = function (a) {
		return m.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, m.fn.extend({
		wrapAll: function (a) {
			if (m.isFunction(a)) return this.each(function (b) {
				m(this).wrapAll(a.call(this, b))
			});
			if (this[0]) {
				var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
					var a = this;
					while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		},
		wrapInner: function (a) {
			return this.each(m.isFunction(a) ? function (b) {
				m(this).wrapInner(a.call(this, b))
			} : function () {
				var b = m(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function (a) {
			var b = m.isFunction(a);
			return this.each(function (c) {
				m(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
			}).end()
		}
	}), m.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
	}, m.expr.filters.visible = function (a) {
		return !m.expr.filters.hidden(a)
	};
	var Qb = /%20/g,
		Rb = /\[\]$/,
		Sb = /\r?\n/g,
		Tb = /^(?:submit|button|image|reset|file)$/i,
		Ub = /^(?:input|select|textarea|keygen)/i;

	function Vb(a, b, c, d) {
		var e;
		if (m.isArray(b)) m.each(b, function (b, e) {
			c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== m.type(b)) d(a, b);
		else
			for (e in b) Vb(a + "[" + e + "]", b[e], c, d)
	}
	m.param = function (a, b) {
		var c, d = [],
			e = function (a, b) {
				b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
			e(this.name, this.value)
		});
		else
			for (c in a) Vb(c, a[c], b, e);
		return d.join("&").replace(Qb, "+")
	}, m.fn.extend({
		serialize: function () {
			return m.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var a = m.prop(this, "elements");
				return a ? m.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
			}).map(function (a, b) {
				var c = m(this).val();
				return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
					return {
						name: b.name,
						value: a.replace(Sb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(Sb, "\r\n")
				}
			}).get()
		}
	}), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
	} : Zb;
	var Wb = 0,
		Xb = {},
		Yb = m.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in Xb) Xb[a](void 0, !0)
	}), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
		if (!a.crossDomain || k.cors) {
			var b;
			return {
				send: function (c, d) {
					var e, f = a.xhr(),
						g = ++Wb;
					if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
						for (e in a.xhrFields) f[e] = a.xhrFields[e];
					a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
					for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
					f.send(a.hasContent && a.data || null), b = function (c, e) {
						var h, i, j;
						if (b && (e || 4 === f.readyState))
							if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
							else {
								j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
								try {
									i = f.statusText
								} catch (k) {
									i = ""
								}
								h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
							}
						j && d(h, i, j, f.getAllResponseHeaders())
					}, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
				},
				abort: function () {
					b && b(void 0, !0)
				}
			}
		}
	});

	function Zb() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function $b() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}
	m.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (a) {
				return m.globalEval(a), a
			}
		}
	}), m.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), m.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c = y.head || m("head")[0] || y.documentElement;
			return {
				send: function (d, e) {
					b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
						(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
					}, c.insertBefore(b, c.firstChild)
				},
				abort: function () {
					b && b.onload(void 0, !0)
				}
			}
		}
	});
	var _b = [],
		ac = /(=)\?(?=&|$)|\?\?/;
	m.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var a = _b.pop() || m.expando + "_" + vb++;
			return this[a] = !0, a
		}
	}), m.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || m.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), m.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || y;
		var d = u.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
	};
	var bc = m.fn.load;
	m.fn.load = function (a, b, c) {
		if ("string" != typeof a && bc) return bc.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
			url: a,
			type: f,
			dataType: "html",
			data: b
		}).done(function (a) {
			e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
		}).complete(c && function (a, b) {
			g.each(c, e || [a.responseText, b, a])
		}), this
	}, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		m.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), m.expr.filters.animated = function (a) {
		return m.grep(m.timers, function (b) {
			return a === b.elem
		}).length
	};
	var cc = a.document.documentElement;

	function dc(a) {
		return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	m.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = m.css(a, "position"),
				l = m(a),
				n = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
		}
	}, m.fn.extend({
		offset: function (a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				m.offset.setOffset(this, a, b)
			});
			var b, c, d = {
					top: 0,
					left: 0
				},
				e = this[0],
				f = e && e.ownerDocument;
			if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
				top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
				left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
			}) : d
		},
		position: function () {
			if (this[0]) {
				var a, b, c = {
						top: 0,
						left: 0
					},
					d = this[0];
				return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - c.top - m.css(d, "marginTop", !0),
					left: b.left - c.left - m.css(d, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var a = this.offsetParent || cc;
				while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
				return a || cc
			})
		}
	}), m.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (a, b) {
		var c = /Y/.test(b);
		m.fn[a] = function (d) {
			return V(this, function (a, d, e) {
				var f = dc(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), m.each(["top", "left"], function (a, b) {
		m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
			return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
		})
	}), m.each({
		Height: "height",
		Width: "width"
	}, function (a, b) {
		m.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function (c, d) {
			m.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return V(this, function (b, c, d) {
					var e;
					return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), m.fn.size = function () {
		return this.length
	}, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return m
	});
	var ec = a.jQuery,
		fc = a.$;
	return m.noConflict = function (b) {
		return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
	}, typeof b === K && (a.jQuery = a.$ = m), m
});
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
		} else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});
/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */
! function (a, b, c) {
	"object" == typeof module && module && "object" == typeof module.exports ? module.exports = c : (a[b] = c, "function" == typeof define && define.amd && define(b, [], function () {
		return c
	}))
}(this, "jRespond", function (a, b, c) {
	"use strict";
	return function (a) {
		var b = [],
			d = [],
			e = a,
			f = "",
			g = "",
			i = 0,
			j = 100,
			k = 500,
			l = k,
			m = function () {
				var a = 0;
				return a = "number" != typeof window.innerWidth ? 0 !== document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth : window.innerWidth
			},
			n = function (a) {
				if (a.length === c) o(a);
				else
					for (var b = 0; b < a.length; b++) o(a[b])
			},
			o = function (a) {
				var e = a.breakpoint,
					h = a.enter || c;
				b.push(a), d.push(!1), r(e) && (h !== c && h.call(null, {
					entering: f,
					exiting: g
				}), d[b.length - 1] = !0)
			},
			p = function () {
				for (var a = [], e = [], h = 0; h < b.length; h++) {
					var i = b[h].breakpoint,
						j = b[h].enter || c,
						k = b[h].exit || c;
					"*" === i ? (j !== c && a.push(j), k !== c && e.push(k)) : r(i) ? (j === c || d[h] || a.push(j), d[h] = !0) : (k !== c && d[h] && e.push(k), d[h] = !1)
				}
				for (var l = {
						entering: f,
						exiting: g
					}, m = 0; m < e.length; m++) e[m].call(null, l);
				for (var n = 0; n < a.length; n++) a[n].call(null, l)
			},
			q = function (a) {
				for (var b = !1, c = 0; c < e.length; c++)
					if (a >= e[c].enter && a <= e[c].exit) {
						b = !0;
						break
					}
				b && f !== e[c].label ? (g = f, f = e[c].label, p()) : b || "" === f || (f = "", p())
			},
			r = function (a) {
				if ("object" == typeof a) {
					if (a.join().indexOf(f) >= 0) return !0
				} else {
					if ("*" === a) return !0;
					if ("string" == typeof a && f === a) return !0
				}
			},
			s = function () {
				var a = m();
				a !== i ? (l = j, q(a)) : l = k, i = a, setTimeout(s, l)
			};
		return s(), {
			addFunc: function (a) {
				n(a)
			},
			getBreakpoint: function () {
				return f
			}
		}
	}
}(this, this.document));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
! function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
	function n(e) {
		return u.raw ? e : encodeURIComponent(e)
	}

	function o(e) {
		return u.raw ? e : decodeURIComponent(e)
	}

	function i(e) {
		return n(u.json ? JSON.stringify(e) : String(e))
	}

	function t(e) {
		0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
		} catch (n) {}
	}

	function r(n, o) {
		var i = u.raw ? n : t(n);
		return e.isFunction(o) ? o(i) : i
	}
	var c = /\+/g,
		u = e.cookie = function (t, c, s) {
			if (arguments.length > 1 && !e.isFunction(c)) {
				if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) {
					var a = s.expires,
						d = s.expires = new Date;
					d.setMilliseconds(d.getMilliseconds() + 864e5 * a)
				}
				return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
			}
			for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
				var x = p[l].split("="),
					g = o(x.shift()),
					j = x.join("=");
				if (t === g) {
					f = r(j, c);
					break
				}
				t || void 0 === (j = r(j)) || (f[g] = j)
			}
			return f
		};
	u.defaults = {}, e.removeCookie = function (n, o) {
		return e.cookie(n, "", e.extend({}, o, {
			expires: -1
		})), !e.cookie(n)
	}
});
/*!
 * animsition v3.6.0
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
! function (n) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function (n) {
	"use strict";
	var i = "animsition",
		a = !1,
		t = {
			init: function (o) {
				o = n.extend({
					inClass: "fade-in",
					outClass: "fade-out",
					inDuration: 1500,
					outDuration: 800,
					linkElement: ".animsition-link",
					loading: !0,
					loadingParentElement: "body",
					loadingClass: "animsition-loading",
					loadingHtml: '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>',
					unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"],
					overlay: !1,
					overlayClass: "animsition-overlay-slide",
					overlayParentElement: "body",
					timeOut: !1
				}, o);
				var e = t.supportCheck.call(this, o);
				if (!e && o.unSupportCss.length > 0 && (!e || !this.length)) return "console" in window || (window.console = {}, window.console.log = function (n) {
					return n
				}), this.length || console.log("Animsition: Element does not exist on page."), e || console.log("Animsition: Does not support this browser."), t.destroy.call(this);
				var s = t.optionCheck.call(this, o);
				return s && t.addOverlay.call(this, o), o.loading && t.addLoading.call(this, o), this.each(function () {
					var e = this,
						s = n(this),
						l = n(window),
						r = s.data(i);
					if (!r) {
						if (o = n.extend({}, o), s.data(i, {
								options: o
							}), l.on("load." + i + " pageshow." + i, function () {
								0 == a && t.pageIn.call(e)
							}), o.timeOut && !isNaN(o.timeOut)) {
							setTimeout(function () {
								0 == a && t.pageIn.call(e)
							}, o.timeOut)
						}
						l.on("unload." + i, function () {}), n(o.linkElement).on("click." + i, function (i) {
							i.preventDefault();
							var a = n(this),
								o = a.attr("href");
							2 === i.which || i.metaKey || i.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && i.ctrlKey ? window.open(o, "_blank") : t.pageOut.call(e, a, o)
						})
					}
				})
			},
			addOverlay: function (i) {
				n(i.overlayParentElement).prepend('<div class="' + i.overlayClass + '"></div>')
			},
			addLoading: function (i) {
				n(i.loadingParentElement).append('<div class="' + i.loadingClass + '">' + i.loadingHtml + '</div>')
			},
			removeLoading: function () {
				var a = n(this),
					t = a.data(i).options,
					o = n(t.loadingParentElement).children("." + t.loadingClass);
				o.fadeOut().remove()
			},
			supportCheck: function (i) {
				var a = n(this),
					t = i.unSupportCss,
					o = t.length,
					e = !1;
				0 === o && (e = !0);
				for (var s = 0; o > s; s++)
					if ("string" == typeof a.css(t[s])) {
						e = !0;
						break
					}
				return e
			},
			optionCheck: function (i) {
				var a, t = n(this);
				return a = i.overlay || t.data("animsition-overlay") ? !0 : !1
			},
			animationCheck: function (a, t, o) {
				var e = n(this),
					s = e.data(i).options,
					l = typeof a,
					r = !t && "number" === l,
					c = t && "string" === l && a.length > 0;
				return r || c ? a = a : t && o ? a = s.inClass : !t && o ? a = s.inDuration : t && !o ? a = s.outClass : t || o || (a = s.outDuration), a
			},
			pageIn: function () {
				var o = this,
					e = n(this),
					s = e.data(i).options,
					l = e.data("animsition-in-duration"),
					r = e.data("animsition-in"),
					c = t.animationCheck.call(o, l, !1, !0),
					d = t.animationCheck.call(o, r, !0, !0),
					u = t.optionCheck.call(o, s);
				s.loading && t.removeLoading.call(o), u ? t.pageInOverlay.call(o, d, c) : t.pageInBasic.call(o, d, c), a = !0
			},
			pageInBasic: function (i, a) {
				var t = n(this);
				t.trigger("animsition.start").css({
					"animation-duration": a / 1e3 + "s"
				}).addClass(i).animateCallback(function () {
					t.removeClass(i).css({
						opacity: 1
					}).trigger("animsition.end")
				})
			},
			pageInOverlay: function (a, t) {
				var o = n(this),
					e = o.data(i).options;
				o.trigger("animsition.start").css({
					opacity: 1
				}), n(e.overlayParentElement).children("." + e.overlayClass).css({
					"animation-duration": t / 1e3 + "s"
				}).addClass(a).animateCallback(function () {
					o.trigger("animsition.end")
				})
			},
			pageOut: function (a, o) {
				var e = this,
					s = n(this),
					l = s.data(i).options,
					r = a.data("animsition-out"),
					c = s.data("animsition-out"),
					d = a.data("animsition-out-duration"),
					u = s.data("animsition-out-duration"),
					m = r ? r : c,
					h = d ? d : u,
					p = t.animationCheck.call(e, m, !0, !1),
					f = t.animationCheck.call(e, h, !1, !1),
					g = t.optionCheck.call(e, l);
				g ? t.pageOutOverlay.call(e, p, f, o) : t.pageOutBasic.call(e, p, f, o)
			},
			pageOutBasic: function (i, a, t) {
				var o = n(this);
				o.css({
					"animation-duration": a / 1e3 + "s"
				}).addClass(i).animateCallback(function () {
					location.href = t
				})
			},
			pageOutOverlay: function (a, o, e) {
				var s = this,
					l = n(this),
					r = l.data(i).options,
					c = l.data("animsition-in"),
					d = t.animationCheck.call(s, c, !0, !0);
				n(r.overlayParentElement).children("." + r.overlayClass).css({
					"animation-duration": o / 1e3 + "s"
				}).removeClass(d).addClass(a).animateCallback(function () {
					location.href = e
				})
			},
			destroy: function () {
				return this.each(function () {
					var a = n(this);
					n(window).unbind("." + i), a.css({
						opacity: 1
					}).removeData(i)
				})
			}
		};
	n.fn.animateCallback = function (i) {
		var a = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";
		return this.each(function () {
			n(this).bind(a, function () {
				return n(this).unbind(a), i.call(this)
			})
		})
	}, n.fn.animsition = function (a) {
		return t[a] ? t[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void n.error("Method " + a + " does not exist on jQuery." + i) : t.init.apply(this, arguments)
	}
});
! function (a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function (a, b) {
			this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function (b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"],
		run: function () {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this.settings.margin || "",
				c = !this.settings.autoWidth,
				d = this.settings.rtl,
				e = {
					width: "auto",
					"margin-left": d ? b : "",
					"margin-right": d ? "" : b
				};
			!c && this.$stage.children().css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				c = null,
				d = this._items.length,
				e = !this.settings.autoWidth,
				f = [];
			for (a.items = {
					merge: !1,
					width: b
				}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var b = [],
				c = this._items,
				d = this.settings,
				e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
				h = "",
				i = "";
			for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
			this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var a = this.settings.stagePadding,
				b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this._coordinates.length,
				c = !this.settings.autoWidth,
				d = this.$stage.children();
			if (c && a.items.merge)
				for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
			else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"],
		run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
		}
	}], e.prototype.initialize = function () {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var b, c, e;
			b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e && this.preloadAutoWidthImages(b)
		}
		this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.setup = function () {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function (a) {
			b >= a && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		}))
	}, e.prototype.optionsLogic = function () {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function (b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function () {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
				return this[a]
			}, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function (a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function () {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function () {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function () {
		return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
	}, e.prototype.registerEventHandlers = function () {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function (b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
			x: d[16 === d.length ? 12 : 4],
			y: d[16 === d.length ? 13 : 5]
		}) : (d = this.$stage.position(), d = {
			x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
			y: d.top
		}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
			var d = this.difference(this._drag.pointer, this.pointer(b));
			a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, e.prototype.onDragMove = function (a) {
		var b = null,
			c = null,
			d = null,
			e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), c = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	}, e.prototype.onDragEnd = function (b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)),
			e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function (b, c) {
		var d = -1,
			e = 30,
			f = this.width(),
			g = this.coordinates();
		return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
			return b > h - e && h + e > b ? d = a : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), -1 === d
		}, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
	}, e.prototype.animate = function (b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1e3 + "s"
		}) : c ? this.$stage.animate({
			left: b + "px"
		}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: b + "px"
		})
	}, e.prototype.is = function (a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function (a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function (b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
			return b
		})
	}, e.prototype.reset = function (a) {
		a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function (b, c) {
		var e = this._items.length,
			f = c ? 0 : this._clones.length;
		return !a.isNumeric(b) || 1 > e ? b = d : (0 > b || b >= e + f) && (b = ((b - f / 2) % e + e) % e + f / 2), b
	}, e.prototype.relative = function (a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function (a) {
		var b, c = this.settings,
			d = this._coordinates.length,
			e = Math.abs(this._coordinates[d - 1]) - this._width,
			f = -1;
		if (c.loop) d = this._clones.length / 2 + this._items.length - 1;
		else if (c.autoWidth || c.merge)
			for (; d - f > 1;) Math.abs(this._coordinates[b = d + f >> 1]) < e ? f = b : d = b;
		else d = c.center ? this._items.length - 1 : this._items.length - c.items;
		return a && (d -= this._clones.length / 2), Math.max(d, 0)
	}, e.prototype.minimum = function (a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function (a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function (a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function (b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function (a) {
				return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function (a, b) {
			return f(b)
		}) : a.map(this._clones, function (a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function (a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function (b) {
		var c = null;
		return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
	}, e.prototype.duration = function (a, b, c) {
		return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function (a, b) {
		var c = this.current(),
			d = null,
			e = a - this.relative(c),
			f = (e > 0) - (0 > e),
			g = this._items.length,
			h = this.minimum(),
			i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && i >= d - e && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
	}, e.prototype.next = function (a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function (a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function (a) {
		return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
	}, e.prototype.viewport = function () {
		var d;
		if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
		else if (b.innerWidth) d = b.innerWidth;
		else {
			if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
			d = c.documentElement.clientWidth
		}
		return d
	}, e.prototype.replace = function (b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
			return 1 === this.nodeType
		}).each(a.proxy(function (a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function (b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function (a) {
		a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function (b) {
		b.each(a.proxy(function (b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
				c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function () {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, e.prototype.op = function (a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : c > a;
			case ">":
				return d ? c > a : a > c;
			case ">=":
				return d ? c >= a : a >= c;
			case "<=":
				return d ? a >= c : c >= a
		}
	}, e.prototype.on = function (a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function (a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function (b, c, d, f, g) {
		var h = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			i = a.camelCase(a.grep(["on", b, d], function (a) {
				return a
			}).join("-").toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, h, c));
		return this._supress[b] || (a.each(this._plugins, function (a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function (b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function (a) {
					return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function (b) {
		a.each(b, a.proxy(function (a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function (b) {
		a.each(b, a.proxy(function (a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function (a) {
		var c = {
			x: null,
			y: null
		};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.difference = function (a, b) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}, a.fn.owlCarousel = function (b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function () {
			var d = a(this),
				f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, e.prototype.watch = function () {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function () {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function () {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
					for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function (a, b) {
							this.load(b)
						}, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f)), h), f++
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1
	}, e.prototype.load = function (c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
				f.css({
					"background-image": "url(" + g + ")",
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function () {
		var b = this._core._current,
			c = b + this._core.settings.items,
			d = this._core.$stage.children().toArray().slice(b, c);
		heights = [], maxheight = 0, a.each(d, function (b, c) {
			heights.push(a(c).height())
		}), maxheight = Math.max.apply(null, heights), this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, e.prototype.fetch = function (a, b) {
		var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else {
			if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
			c = "vimeo"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function (b, c) {
		var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function (a) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
			};
		return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
			type: "GET",
			url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a[0].thumbnail_large, l(f)
			}
		}))
	}, e.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function (b) {
		var c, d = a(b.target),
			e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%",
			h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="http://www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type && (c = '<iframe src="http://player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function () {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b).parent().hasClass("owl-video-frame")
	}, e.prototype.destroy = function () {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this),
			"translate.owl.carousel": a.proxy(function (a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, e.prototype.swap = function () {
		if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
			this.core.speed(0);
			var b, c = a.proxy(this.clear, this),
				d = this.core.$stage.children().eq(this.previous),
				e = this.core.$stage.children().eq(this.next),
				f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
				left: b + "px"
			}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
		}
	}, e.prototype.clear = function (b) {
		a(b.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._interval = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "settings" === a.property.name && (this._core.settings.autoplay ? this.play() : this.stop())
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": a.proxy(function (a, b, c) {
				a.namespace && this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function (a) {
				a.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype.play = function (d, e) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._interval = b.setInterval(a.proxy(function () {
			this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
		}, this), d || this._core.settings.autoplayTimeout))
	}, e.prototype.stop = function () {
		this._core.is("rotating") && (b.clearInterval(this._interval), this._core.leave("rotating"))
	}, e.prototype.pause = function () {
		this._core.is("rotating") && (this._paused = !0)
	}, e.prototype.destroy = function () {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	"use strict";
	var e = function (b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function (b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function () {
		var b, c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.prev(c.navSpeed)
		}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.next(c.navSpeed)
		}, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
			var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(d, c.dotsSpeed)
		}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function () {
		var a, b, c, d;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function () {
		var a, b, c, d = this._core.clones().length / 2,
			e = d + this._core.items().length,
			f = this._core.maximum(!0),
			g = this._core.settings,
			h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
			for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
							start: Math.min(f, a - d),
							end: a - d + h - 1
						}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
	}, e.prototype.draw = function () {
		var b, c = this._core.settings,
			d = this._core.items().length <= c.items,
			e = this._core.relative(this._core.current()),
			f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function (b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function () {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function (a, c) {
			return a.start <= b && a.end >= b
		}, this)).pop()
	}, e.prototype.getPosition = function (b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function (b, c, d) {
		var e;
		d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	"use strict";
	var e = function (c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (c) {
				c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
					if (!c) return;
					this._hashes[c] = b.content
				}
			}, this),
			"changed.owl.carousel": a.proxy(function (c) {
				if (c.namespace && "position" === c.property.name) {
					var d = this._core.items(this._core.relative(this._core.current())),
						e = a.map(this._hashes, function (a, b) {
							return a === d ? b : null
						}).join();
					if (!e || b.location.hash.slice(1) === e) return;
					b.location.hash = e
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
			var c = b.location.hash.substring(1),
				e = this._core.$stage.children(),
				f = this._hashes[c] && e.index(this._hashes[c]);
			f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
		}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function () {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	function e(b, c) {
		var e = !1,
			f = b.charAt(0).toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
			return g[b] !== d ? (e = c ? b : !0, !1) : void 0
		}), e
	}

	function f(a) {
		return e(a, !0)
	}
	var g = a("<support>").get(0).style,
		h = "Webkit Moz O ms".split(" "),
		i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		j = {
			csstransforms: function () {
				return !!e("transform")
			},
			csstransforms3d: function () {
				return !!e("perspective")
			},
			csstransitions: function () {
				return !!e("transition")
			},
			cssanimations: function () {
				return !!e("animation")
			}
		};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
! function () {
	"use strict";

	function e(e) {
		e.fn.swiper = function (a) {
			var r;
			return e(this).each(function () {
				var e = new t(this, a);
				r || (r = e)
			}), r
		}
	}
	var a, t = function (e, i) {
		function s(e) {
			return Math.floor(e)
		}

		function n() {
			b.autoplayTimeoutId = setTimeout(function () {
				b.params.loop ? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b)) : b.isEnd ? i.autoplayStopOnLast ? b.stopAutoplay() : (b._slideTo(0), b.emit("onAutoplay", b)) : (b._slideNext(), b.emit("onAutoplay", b))
			}, b.params.autoplay)
		}

		function o(e, t) {
			var r = a(e.target);
			if (!r.is(t))
				if ("string" == typeof t) r = r.parents(t);
				else if (t.nodeType) {
				var i;
				return r.parents().each(function (e, a) {
					a === t && (i = t)
				}), i ? t : void 0
			}
			if (0 !== r.length) return r[0]
		}

		function l(e, a) {
			a = a || {};
			var t = window.MutationObserver || window.WebkitMutationObserver,
				r = new t(function (e) {
					e.forEach(function (e) {
						b.onResize(!0), b.emit("onObserverUpdate", b, e)
					})
				});
			r.observe(e, {
				attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
				childList: "undefined" == typeof a.childList ? !0 : a.childList,
				characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
			}), b.observers.push(r)
		}

		function p(e) {
			e.originalEvent && (e = e.originalEvent);
			var a = e.keyCode || e.charCode;
			if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === a || !b.isHorizontal() && 40 === a)) return !1;
			if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === a || !b.isHorizontal() && 38 === a)) return !1;
			if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
				if (37 === a || 39 === a || 38 === a || 40 === a) {
					var t = !1;
					if (b.container.parents(".swiper-slide").length > 0 && 0 === b.container.parents(".swiper-slide-active").length) return;
					var r = {
							left: window.pageXOffset,
							top: window.pageYOffset
						},
						i = window.innerWidth,
						s = window.innerHeight,
						n = b.container.offset();
					b.rtl && (n.left = n.left - b.container[0].scrollLeft);
					for (var o = [
							[n.left, n.top],
							[n.left + b.width, n.top],
							[n.left, n.top + b.height],
							[n.left + b.width, n.top + b.height]
						], l = 0; l < o.length; l++) {
						var p = o[l];
						p[0] >= r.left && p[0] <= r.left + i && p[1] >= r.top && p[1] <= r.top + s && (t = !0)
					}
					if (!t) return
				}
				b.isHorizontal() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !b.rtl || 37 === a && b.rtl) && b.slideNext(), (37 === a && !b.rtl || 39 === a && b.rtl) && b.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && b.slideNext(), 38 === a && b.slidePrev())
			}
		}

		function d(e) {
			e.originalEvent && (e = e.originalEvent);
			var a = b.mousewheel.event,
				t = 0,
				r = b.rtl ? -1 : 1;
			if ("mousewheel" === a)
				if (b.params.mousewheelForceToAxis)
					if (b.isHorizontal()) {
						if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
						t = e.wheelDeltaX * r
					} else {
						if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
						t = e.wheelDeltaY
					}
			else t = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * r : -e.wheelDeltaY;
			else if ("DOMMouseScroll" === a) t = -e.detail;
			else if ("wheel" === a)
				if (b.params.mousewheelForceToAxis)
					if (b.isHorizontal()) {
						if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
						t = -e.deltaX * r
					} else {
						if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
						t = -e.deltaY
					}
			else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * r : -e.deltaY;
			if (0 !== t) {
				if (b.params.mousewheelInvert && (t = -t), b.params.freeMode) {
					var i = b.getWrapperTranslate() + t * b.params.mousewheelSensitivity,
						s = b.isBeginning,
						n = b.isEnd;
					if (i >= b.minTranslate() && (i = b.minTranslate()), i <= b.maxTranslate() && (i = b.maxTranslate()), b.setWrapperTransition(0), b.setWrapperTranslate(i), b.updateProgress(), b.updateActiveIndex(), (!s && b.isBeginning || !n && b.isEnd) && b.updateClasses(), b.params.freeModeSticky ? (clearTimeout(b.mousewheel.timeout), b.mousewheel.timeout = setTimeout(function () {
							b.slideReset()
						}, 300)) : b.params.lazyLoading && b.lazy && b.lazy.load(), 0 === i || i === b.maxTranslate()) return
				} else {
					if ((new window.Date).getTime() - b.mousewheel.lastScrollTime > 60)
						if (0 > t)
							if (b.isEnd && !b.params.loop || b.animating) {
								if (b.params.mousewheelReleaseOnEdges) return !0
							} else b.slideNext();
					else if (b.isBeginning && !b.params.loop || b.animating) {
						if (b.params.mousewheelReleaseOnEdges) return !0
					} else b.slidePrev();
					b.mousewheel.lastScrollTime = (new window.Date).getTime()
				}
				return b.params.autoplay && b.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
			}
		}

		function u(e, t) {
			e = a(e);
			var r, i, s, n = b.rtl ? -1 : 1;
			r = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), s = e.attr("data-swiper-parallax-y"), i || s ? (i = i || "0", s = s || "0") : b.isHorizontal() ? (i = r, s = "0") : (s = r, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * t + "%" : s * t + "px", e.transform("translate3d(" + i + ", " + s + ",0px)")
		}

		function c(e) {
			return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
		}
		if (!(this instanceof t)) return new t(e, i);
		var m = {
				direction: "horizontal",
				touchEventsTarget: "container",
				initialSlide: 0,
				speed: 300,
				autoplay: !1,
				autoplayDisableOnInteraction: !0,
				autoplayStopOnLast: !1,
				iOSEdgeSwipeDetection: !1,
				iOSEdgeSwipeThreshold: 20,
				freeMode: !1,
				freeModeMomentum: !0,
				freeModeMomentumRatio: 1,
				freeModeMomentumBounce: !0,
				freeModeMomentumBounceRatio: 1,
				freeModeSticky: !1,
				freeModeMinimumVelocity: .02,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				coverflow: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				},
				flip: {
					slideShadows: !0,
					limitRotation: !0
				},
				cube: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				},
				fade: {
					crossFade: !1
				},
				parallax: !1,
				scrollbar: null,
				scrollbarHide: !0,
				scrollbarDraggable: !1,
				scrollbarSnapOnRelease: !1,
				keyboardControl: !1,
				mousewheelControl: !1,
				mousewheelReleaseOnEdges: !1,
				mousewheelInvert: !1,
				mousewheelForceToAxis: !1,
				mousewheelSensitivity: 1,
				hashnav: !1,
				breakpoints: void 0,
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerColumnFill: "column",
				slidesPerGroup: 1,
				centeredSlides: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				onlyExternal: !1,
				threshold: 0,
				touchMoveStopPropagation: !0,
				uniqueNavElements: !0,
				pagination: null,
				paginationElement: "span",
				paginationClickable: !1,
				paginationHide: !1,
				paginationBulletRender: null,
				paginationProgressRender: null,
				paginationFractionRender: null,
				paginationCustomRender: null,
				paginationType: "bullets",
				resistance: !0,
				resistanceRatio: .85,
				nextButton: null,
				prevButton: null,
				watchSlidesProgress: !1,
				watchSlidesVisibility: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				lazyLoading: !1,
				lazyLoadingInPrevNext: !1,
				lazyLoadingInPrevNextAmount: 1,
				lazyLoadingOnTransitionStart: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				control: void 0,
				controlInverse: !1,
				controlBy: "slide",
				allowSwipeToPrev: !0,
				allowSwipeToNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				slideClass: "swiper-slide",
				slideActiveClass: "swiper-slide-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-next",
				slidePrevClass: "swiper-slide-prev",
				wrapperClass: "swiper-wrapper",
				bulletClass: "swiper-pagination-bullet",
				bulletActiveClass: "swiper-pagination-bullet-active",
				buttonDisabledClass: "swiper-button-disabled",
				paginationCurrentClass: "swiper-pagination-current",
				paginationTotalClass: "swiper-pagination-total",
				paginationHiddenClass: "swiper-pagination-hidden",
				paginationProgressbarClass: "swiper-pagination-progressbar",
				observer: !1,
				observeParents: !1,
				a11y: !1,
				prevSlideMessage: "Previous slide",
				nextSlideMessage: "Next slide",
				firstSlideMessage: "This is the first slide",
				lastSlideMessage: "This is the last slide",
				paginationBulletMessage: "Go to slide {{index}}",
				runCallbacksOnInit: !0
			},
			h = i && i.virtualTranslate;
		i = i || {};
		var f = {};
		for (var g in i)
			if ("object" != typeof i[g] || null === i[g] || (i[g].nodeType || i[g] === window || i[g] === document || "undefined" != typeof r && i[g] instanceof r || "undefined" != typeof jQuery && i[g] instanceof jQuery)) f[g] = i[g];
			else {
				f[g] = {};
				for (var v in i[g]) f[g][v] = i[g][v]
			}
		for (var w in m)
			if ("undefined" == typeof i[w]) i[w] = m[w];
			else if ("object" == typeof i[w])
			for (var y in m[w]) "undefined" == typeof i[w][y] && (i[w][y] = m[w][y]);
		var b = this;
		if (b.params = i, b.originalParams = f, b.classNames = [], "undefined" != typeof a && "undefined" != typeof r && (a = r), ("undefined" != typeof a || (a = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r)) && (b.$ = a, b.currentBreakpoint = void 0, b.getActiveBreakpoint = function () {
				if (!b.params.breakpoints) return !1;
				var e, a = !1,
					t = [];
				for (e in b.params.breakpoints) b.params.breakpoints.hasOwnProperty(e) && t.push(e);
				t.sort(function (e, a) {
					return parseInt(e, 10) > parseInt(a, 10)
				});
				for (var r = 0; r < t.length; r++) e = t[r], e >= window.innerWidth && !a && (a = e);
				return a || "max"
			}, b.setBreakpoint = function () {
				var e = b.getActiveBreakpoint();
				if (e && b.currentBreakpoint !== e) {
					var a = e in b.params.breakpoints ? b.params.breakpoints[e] : b.originalParams,
						t = b.params.loop && a.slidesPerView !== b.params.slidesPerView;
					for (var r in a) b.params[r] = a[r];
					b.currentBreakpoint = e, t && b.destroyLoop && b.reLoop(!0)
				}
			}, b.params.breakpoints && b.setBreakpoint(), b.container = a(e), 0 !== b.container.length)) {
			if (b.container.length > 1) {
				var x = [];
				return b.container.each(function () {
					x.push(new t(this, i))
				}), x
			}
			b.container[0].swiper = b, b.container.data("swiper", b), b.classNames.push("swiper-container-" + b.params.direction), b.params.freeMode && b.classNames.push("swiper-container-free-mode"), b.support.flexbox || (b.classNames.push("swiper-container-no-flexbox"), b.params.slidesPerColumn = 1), b.params.autoHeight && b.classNames.push("swiper-container-autoheight"), (b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(b.params.effect) >= 0 && (b.support.transforms3d ? (b.params.watchSlidesProgress = !0, b.classNames.push("swiper-container-3d")) : b.params.effect = "slide"), "slide" !== b.params.effect && b.classNames.push("swiper-container-" + b.params.effect), "cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, b.params.spaceBetween = 0, b.params.virtualTranslate = !0, b.params.setWrapperSize = !1), ("fade" === b.params.effect || "flip" === b.params.effect) && (b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, b.params.spaceBetween = 0, b.params.setWrapperSize = !1, "undefined" == typeof h && (b.params.virtualTranslate = !0)), b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1), b.wrapper = b.container.children("." + b.params.wrapperClass), b.params.pagination && (b.paginationContainer = a(b.params.pagination), b.params.uniqueNavElements && "string" == typeof b.params.pagination && b.paginationContainer.length > 1 && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), "bullets" === b.params.paginationType && b.params.paginationClickable ? b.paginationContainer.addClass("swiper-pagination-clickable") : b.params.paginationClickable = !1, b.paginationContainer.addClass("swiper-pagination-" + b.params.paginationType)), (b.params.nextButton || b.params.prevButton) && (b.params.nextButton && (b.nextButton = a(b.params.nextButton), b.params.uniqueNavElements && "string" == typeof b.params.nextButton && b.nextButton.length > 1 && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), b.params.prevButton && (b.prevButton = a(b.params.prevButton), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && b.prevButton.length > 1 && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))), b.isHorizontal = function () {
				return "horizontal" === b.params.direction
			}, b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")), b.rtl && b.classNames.push("swiper-container-rtl"), b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")), b.params.slidesPerColumn > 1 && b.classNames.push("swiper-container-multirow"), b.device.android && b.classNames.push("swiper-container-android"), b.container.addClass(b.classNames.join(" ")), b.translate = 0, b.progress = 0, b.velocity = 0, b.lockSwipeToNext = function () {
				b.params.allowSwipeToNext = !1
			}, b.lockSwipeToPrev = function () {
				b.params.allowSwipeToPrev = !1
			}, b.lockSwipes = function () {
				b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1
			}, b.unlockSwipeToNext = function () {
				b.params.allowSwipeToNext = !0
			}, b.unlockSwipeToPrev = function () {
				b.params.allowSwipeToPrev = !0
			}, b.unlockSwipes = function () {
				b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0
			}, b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab"), b.imagesToLoad = [], b.imagesLoaded = 0, b.loadImage = function (e, a, t, r, i) {
				function s() {
					i && i()
				}
				var n;
				e.complete && r ? s() : a ? (n = new window.Image, n.onload = s, n.onerror = s, t && (n.srcset = t), a && (n.src = a)) : s()
			}, b.preloadImages = function () {
				function e() {
					"undefined" != typeof b && null !== b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)))
				}
				b.imagesToLoad = b.container.find("img");
				for (var a = 0; a < b.imagesToLoad.length; a++) b.loadImage(b.imagesToLoad[a], b.imagesToLoad[a].currentSrc || b.imagesToLoad[a].getAttribute("src"), b.imagesToLoad[a].srcset || b.imagesToLoad[a].getAttribute("srcset"), !0, e)
			}, b.autoplayTimeoutId = void 0, b.autoplaying = !1, b.autoplayPaused = !1, b.startAutoplay = function () {
				return "undefined" != typeof b.autoplayTimeoutId ? !1 : b.params.autoplay ? b.autoplaying ? !1 : (b.autoplaying = !0, b.emit("onAutoplayStart", b), void n()) : !1
			}, b.stopAutoplay = function (e) {
				b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b))
			}, b.pauseAutoplay = function (e) {
				b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 0 === e ? (b.autoplayPaused = !1, n()) : b.wrapper.transitionEnd(function () {
					b && (b.autoplayPaused = !1, b.autoplaying ? n() : b.stopAutoplay())
				}))
			}, b.minTranslate = function () {
				return -b.snapGrid[0]
			}, b.maxTranslate = function () {
				return -b.snapGrid[b.snapGrid.length - 1]
			}, b.updateAutoHeight = function () {
				var e = b.slides.eq(b.activeIndex)[0];
				if ("undefined" != typeof e) {
					var a = e.offsetHeight;
					a && b.wrapper.css("height", a + "px")
				}
			}, b.updateContainerSize = function () {
				var e, a;
				e = "undefined" != typeof b.params.width ? b.params.width : b.container[0].clientWidth, a = "undefined" != typeof b.params.height ? b.params.height : b.container[0].clientHeight, 0 === e && b.isHorizontal() || 0 === a && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), a = a - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), b.width = e, b.height = a, b.size = b.isHorizontal() ? b.width : b.height)
			}, b.updateSlidesSize = function () {
				b.slides = b.wrapper.children("." + b.params.slideClass), b.snapGrid = [], b.slidesGrid = [], b.slidesSizesGrid = [];
				var e, a = b.params.spaceBetween,
					t = -b.params.slidesOffsetBefore,
					r = 0,
					i = 0;
				if ("undefined" != typeof b.size) {
					"string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * b.size), b.virtualSize = -a, b.rtl ? b.slides.css({
						marginLeft: "",
						marginTop: ""
					}) : b.slides.css({
						marginRight: "",
						marginBottom: ""
					});
					var n;
					b.params.slidesPerColumn > 1 && (n = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn ? b.slides.length : Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (n = Math.max(n, b.params.slidesPerView * b.params.slidesPerColumn)));
					var o, l = b.params.slidesPerColumn,
						p = n / l,
						d = p - (b.params.slidesPerColumn * p - b.slides.length);
					for (e = 0; e < b.slides.length; e++) {
						o = 0;
						var u = b.slides.eq(e);
						if (b.params.slidesPerColumn > 1) {
							var c, m, h;
							"column" === b.params.slidesPerColumnFill ? (m = Math.floor(e / l), h = e - m * l, (m > d || m === d && h === l - 1) && ++h >= l && (h = 0, m++), c = m + h * n / l, u.css({
								"-webkit-box-ordinal-group": c,
								"-moz-box-ordinal-group": c,
								"-ms-flex-order": c,
								"-webkit-order": c,
								order: c
							})) : (h = Math.floor(e / p), m = e - h * p), u.css({
								"margin-top": 0 !== h && b.params.spaceBetween && b.params.spaceBetween + "px"
							}).attr("data-swiper-column", m).attr("data-swiper-row", h)
						}
						"none" !== u.css("display") && ("auto" === b.params.slidesPerView ? (o = b.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), b.params.roundLengths && (o = s(o))) : (o = (b.size - (b.params.slidesPerView - 1) * a) / b.params.slidesPerView, b.params.roundLengths && (o = s(o)), b.isHorizontal() ? b.slides[e].style.width = o + "px" : b.slides[e].style.height = o + "px"), b.slides[e].swiperSlideSize = o, b.slidesSizesGrid.push(o), b.params.centeredSlides ? (t = t + o / 2 + r / 2 + a, 0 === e && (t = t - b.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % b.params.slidesPerGroup === 0 && b.snapGrid.push(t), b.slidesGrid.push(t)) : (i % b.params.slidesPerGroup === 0 && b.snapGrid.push(t), b.slidesGrid.push(t), t = t + o + a), b.virtualSize += o + a, r = o, i++)
					}
					b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;
					var f;
					if (b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({
							width: b.virtualSize + b.params.spaceBetween + "px"
						}), (!b.support.flexbox || b.params.setWrapperSize) && (b.isHorizontal() ? b.wrapper.css({
							width: b.virtualSize + b.params.spaceBetween + "px"
						}) : b.wrapper.css({
							height: b.virtualSize + b.params.spaceBetween + "px"
						})), b.params.slidesPerColumn > 1 && (b.virtualSize = (o + b.params.spaceBetween) * n, b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, b.wrapper.css({
							width: b.virtualSize + b.params.spaceBetween + "px"
						}), b.params.centeredSlides)) {
						for (f = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && f.push(b.snapGrid[e]);
						b.snapGrid = f
					}
					if (!b.params.centeredSlides) {
						for (f = [], e = 0; e < b.snapGrid.length; e++) b.snapGrid[e] <= b.virtualSize - b.size && f.push(b.snapGrid[e]);
						b.snapGrid = f, Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) > 1 && b.snapGrid.push(b.virtualSize - b.size)
					}
					0 === b.snapGrid.length && (b.snapGrid = [0]), 0 !== b.params.spaceBetween && (b.isHorizontal() ? b.rtl ? b.slides.css({
						marginLeft: a + "px"
					}) : b.slides.css({
						marginRight: a + "px"
					}) : b.slides.css({
						marginBottom: a + "px"
					})), b.params.watchSlidesProgress && b.updateSlidesOffset()
				}
			}, b.updateSlidesOffset = function () {
				for (var e = 0; e < b.slides.length; e++) b.slides[e].swiperSlideOffset = b.isHorizontal() ? b.slides[e].offsetLeft : b.slides[e].offsetTop
			}, b.updateSlidesProgress = function (e) {
				if ("undefined" == typeof e && (e = b.translate || 0), 0 !== b.slides.length) {
					"undefined" == typeof b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
					var a = -e;
					b.rtl && (a = e), b.slides.removeClass(b.params.slideVisibleClass);
					for (var t = 0; t < b.slides.length; t++) {
						var r = b.slides[t],
							i = (a - r.swiperSlideOffset) / (r.swiperSlideSize + b.params.spaceBetween);
						if (b.params.watchSlidesVisibility) {
							var s = -(a - r.swiperSlideOffset),
								n = s + b.slidesSizesGrid[t],
								o = s >= 0 && s < b.size || n > 0 && n <= b.size || 0 >= s && n >= b.size;
							o && b.slides.eq(t).addClass(b.params.slideVisibleClass)
						}
						r.progress = b.rtl ? -i : i
					}
				}
			}, b.updateProgress = function (e) {
				"undefined" == typeof e && (e = b.translate || 0);
				var a = b.maxTranslate() - b.minTranslate(),
					t = b.isBeginning,
					r = b.isEnd;
				0 === a ? (b.progress = 0, b.isBeginning = b.isEnd = !0) : (b.progress = (e - b.minTranslate()) / a, b.isBeginning = b.progress <= 0, b.isEnd = b.progress >= 1), b.isBeginning && !t && b.emit("onReachBeginning", b), b.isEnd && !r && b.emit("onReachEnd", b), b.params.watchSlidesProgress && b.updateSlidesProgress(e), b.emit("onProgress", b, b.progress)
			}, b.updateActiveIndex = function () {
				var e, a, t, r = b.rtl ? b.translate : -b.translate;
				for (a = 0; a < b.slidesGrid.length; a++) "undefined" != typeof b.slidesGrid[a + 1] ? r >= b.slidesGrid[a] && r < b.slidesGrid[a + 1] - (b.slidesGrid[a + 1] - b.slidesGrid[a]) / 2 ? e = a : r >= b.slidesGrid[a] && r < b.slidesGrid[a + 1] && (e = a + 1) : r >= b.slidesGrid[a] && (e = a);
				(0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / b.params.slidesPerGroup), t >= b.snapGrid.length && (t = b.snapGrid.length - 1), e !== b.activeIndex && (b.snapIndex = t, b.previousIndex = b.activeIndex, b.activeIndex = e, b.updateClasses())
			}, b.updateClasses = function () {
				b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass);
				var e = b.slides.eq(b.activeIndex);
				e.addClass(b.params.slideActiveClass);
				var t = e.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
				b.params.loop && 0 === t.length && b.slides.eq(0).addClass(b.params.slideNextClass);
				var r = e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
				if (b.params.loop && 0 === r.length && b.slides.eq(-1).addClass(b.params.slidePrevClass), b.paginationContainer && b.paginationContainer.length > 0) {
					var i, s = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
					if (b.params.loop ? (i = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup), i > b.slides.length - 1 - 2 * b.loopedSlides && (i -= b.slides.length - 2 * b.loopedSlides), i > s - 1 && (i -= s), 0 > i && "bullets" !== b.params.paginationType && (i = s + i)) : i = "undefined" != typeof b.snapIndex ? b.snapIndex : b.activeIndex || 0, "bullets" === b.params.paginationType && b.bullets && b.bullets.length > 0 && (b.bullets.removeClass(b.params.bulletActiveClass), b.paginationContainer.length > 1 ? b.bullets.each(function () {
							a(this).index() === i && a(this).addClass(b.params.bulletActiveClass)
						}) : b.bullets.eq(i).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(i + 1), b.paginationContainer.find("." + b.params.paginationTotalClass).text(s)), "progress" === b.params.paginationType) {
						var n = (i + 1) / s,
							o = n,
							l = 1;
						b.isHorizontal() || (l = n, o = 1), b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")").transition(b.params.speed)
					}
					"custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, i + 1, s)), b.emit("onPaginationRendered", b, b.paginationContainer[0]))
				}
				b.params.loop || (b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.isBeginning ? (b.prevButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.prevButton)) : (b.prevButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.isEnd ? (b.nextButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.nextButton)) : (b.nextButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))))
			}, b.updatePagination = function () {
				if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
					var e = "";
					if ("bullets" === b.params.paginationType) {
						for (var a = b.params.loop ? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length, t = 0; a > t; t++) e += b.params.paginationBulletRender ? b.params.paginationBulletRender(t, b.params.bulletClass) : "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
						b.paginationContainer.html(e), b.bullets = b.paginationContainer.find("." + b.params.bulletClass), b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination()
					}
					"fraction" === b.params.paginationType && (e = b.params.paginationFractionRender ? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass) : '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', b.paginationContainer.html(e)), "progress" === b.params.paginationType && (e = b.params.paginationProgressRender ? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass) : '<span class="' + b.params.paginationProgressbarClass + '"></span>', b.paginationContainer.html(e)), "custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0])
				}
			}, b.update = function (e) {
				function a() {
					r = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()), b.setWrapperTranslate(r), b.updateActiveIndex(), b.updateClasses()
				}
				if (b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), e) {
					var t, r;
					b.controller && b.controller.spline && (b.controller.spline = void 0), b.params.freeMode ? (a(), b.params.autoHeight && b.updateAutoHeight()) : (t = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0), t || a())
				} else b.params.autoHeight && b.updateAutoHeight()
			}, b.onResize = function (e) {
				b.params.breakpoints && b.setBreakpoint();
				var a = b.params.allowSwipeToPrev,
					t = b.params.allowSwipeToNext;
				b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0, b.updateContainerSize(), b.updateSlidesSize(), ("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), b.controller && b.controller.spline && (b.controller.spline = void 0);
				var r = !1;
				if (b.params.freeMode) {
					var i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
					b.setWrapperTranslate(i), b.updateActiveIndex(), b.updateClasses(), b.params.autoHeight && b.updateAutoHeight()
				} else b.updateClasses(), r = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0);
				b.params.lazyLoading && !r && b.lazy && b.lazy.load(), b.params.allowSwipeToPrev = a, b.params.allowSwipeToNext = t
			};
			var T = ["mousedown", "mousemove", "mouseup"];
			window.navigator.pointerEnabled ? T = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (T = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), b.touchEvents = {
				start: b.support.touch || !b.params.simulateTouch ? "touchstart" : T[0],
				move: b.support.touch || !b.params.simulateTouch ? "touchmove" : T[1],
				end: b.support.touch || !b.params.simulateTouch ? "touchend" : T[2]
			}, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget ? b.container : b.wrapper).addClass("swiper-wp8-" + b.params.direction), b.initEvents = function (e) {
				var a = e ? "off" : "on",
					t = e ? "removeEventListener" : "addEventListener",
					r = "container" === b.params.touchEventsTarget ? b.container[0] : b.wrapper[0],
					s = b.support.touch ? r : document,
					n = b.params.nested ? !0 : !1;
				b.browser.ie ? (r[t](b.touchEvents.start, b.onTouchStart, !1), s[t](b.touchEvents.move, b.onTouchMove, n), s[t](b.touchEvents.end, b.onTouchEnd, !1)) : (b.support.touch && (r[t](b.touchEvents.start, b.onTouchStart, !1), r[t](b.touchEvents.move, b.onTouchMove, n), r[t](b.touchEvents.end, b.onTouchEnd, !1)), !i.simulateTouch || b.device.ios || b.device.android || (r[t]("mousedown", b.onTouchStart, !1), document[t]("mousemove", b.onTouchMove, n), document[t]("mouseup", b.onTouchEnd, !1))), window[t]("resize", b.onResize), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.nextButton[a]("click", b.onClickNext), b.params.a11y && b.a11y && b.nextButton[a]("keydown", b.a11y.onEnterKey)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.prevButton[a]("click", b.onClickPrev), b.params.a11y && b.a11y && b.prevButton[a]("keydown", b.a11y.onEnterKey)), b.params.pagination && b.params.paginationClickable && (b.paginationContainer[a]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && b.paginationContainer[a]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)), (b.params.preventClicks || b.params.preventClicksPropagation) && r[t]("click", b.preventClicks, !0)
			}, b.attachEvents = function () {
				b.initEvents()
			}, b.detachEvents = function () {
				b.initEvents(!0)
			}, b.allowClick = !0, b.preventClicks = function (e) {
				b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
			}, b.onClickNext = function (e) {
				e.preventDefault(), (!b.isEnd || b.params.loop) && b.slideNext()
			}, b.onClickPrev = function (e) {
				e.preventDefault(), (!b.isBeginning || b.params.loop) && b.slidePrev()
			}, b.onClickIndex = function (e) {
				e.preventDefault();
				var t = a(this).index() * b.params.slidesPerGroup;
				b.params.loop && (t += b.loopedSlides), b.slideTo(t)
			}, b.updateClickedSlide = function (e) {
				var t = o(e, "." + b.params.slideClass),
					r = !1;
				if (t)
					for (var i = 0; i < b.slides.length; i++) b.slides[i] === t && (r = !0);
				if (!t || !r) return b.clickedSlide = void 0, void(b.clickedIndex = void 0);
				if (b.clickedSlide = t, b.clickedIndex = a(t).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
					var s, n = b.clickedIndex;
					if (b.params.loop) {
						if (b.animating) return;
						s = a(b.clickedSlide).attr("data-swiper-slide-index"), b.params.centeredSlides ? n < b.loopedSlides - b.params.slidesPerView / 2 || n > b.slides.length - b.loopedSlides + b.params.slidesPerView / 2 ? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
							b.slideTo(n)
						}, 0)) : b.slideTo(n) : n > b.slides.length - b.params.slidesPerView ? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
							b.slideTo(n)
						}, 0)) : b.slideTo(n)
					} else b.slideTo(n)
				}
			};
			var S, C, z, M, E, P, k, I, L, B, D = "input, select, textarea, button",
				H = Date.now(),
				A = [];
			b.animating = !1, b.touches = {
				startX: 0,
				startY: 0,
				currentX: 0,
				currentY: 0,
				diff: 0
			};
			var G, O;
			if (b.onTouchStart = function (e) {
					if (e.originalEvent && (e = e.originalEvent), G = "touchstart" === e.type, G || !("which" in e) || 3 !== e.which) {
						if (b.params.noSwiping && o(e, "." + b.params.noSwipingClass)) return void(b.allowClick = !0);
						if (!b.params.swipeHandler || o(e, b.params.swipeHandler)) {
							var t = b.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
								r = b.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
							if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && t <= b.params.iOSEdgeSwipeThreshold)) {
								if (S = !0, C = !1, z = !0, E = void 0, O = void 0, b.touches.startX = t, b.touches.startY = r, M = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, b.params.threshold > 0 && (I = !1), "touchstart" !== e.type) {
									var i = !0;
									a(e.target).is(D) && (i = !1), document.activeElement && a(document.activeElement).is(D) && document.activeElement.blur(), i && e.preventDefault()
								}
								b.emit("onTouchStart", b, e)
							}
						}
					}
				}, b.onTouchMove = function (e) {
					if (e.originalEvent && (e = e.originalEvent), !G || "mousemove" !== e.type) {
						if (e.preventedByNestedSwiper) return b.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(b.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
						if (b.params.onlyExternal) return b.allowClick = !1, void(S && (b.touches.startX = b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.startY = b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, M = Date.now()));
						if (G && document.activeElement && e.target === document.activeElement && a(e.target).is(D)) return C = !0, void(b.allowClick = !1);
						if (z && b.emit("onTouchMove", b, e), !(e.targetTouches && e.targetTouches.length > 1)) {
							if (b.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, b.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof E) {
								var t = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI;
								E = b.isHorizontal() ? t > b.params.touchAngle : 90 - t > b.params.touchAngle
							}
							if (E && b.emit("onTouchMoveOpposite", b, e), "undefined" == typeof O && b.browser.ieTouch && (b.touches.currentX !== b.touches.startX || b.touches.currentY !== b.touches.startY) && (O = !0), S) {
								if (E) return void(S = !1);
								if (O || !b.browser.ieTouch) {
									b.allowClick = !1, b.emit("onSliderMove", b, e), e.preventDefault(), b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(), C || (i.loop && b.fixLoop(), k = b.getWrapperTranslate(), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction ? b.stopAutoplay() : b.pauseAutoplay()), B = !1, b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grabbing", b.container[0].style.cursor = "-moz-grabbin", b.container[0].style.cursor = "grabbing")), C = !0;
									var r = b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY;
									r *= b.params.touchRatio, b.rtl && (r = -r), b.swipeDirection = r > 0 ? "prev" : "next", P = r + k;
									var s = !0;
									if (r > 0 && P > b.minTranslate() ? (s = !1, b.params.resistance && (P = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + k + r, b.params.resistanceRatio))) : 0 > r && P < b.maxTranslate() && (s = !1, b.params.resistance && (P = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - k - r, b.params.resistanceRatio))), s && (e.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && k > P && (P = k), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && P > k && (P = k), b.params.followFinger) {
										if (b.params.threshold > 0) {
											if (!(Math.abs(r) > b.params.threshold || I)) return void(P = k);
											if (!I) return I = !0, b.touches.startX = b.touches.currentX, b.touches.startY = b.touches.currentY, P = k, void(b.touches.diff = b.isHorizontal() ? b.touches.currentX - b.touches.startX : b.touches.currentY - b.touches.startY)
										}(b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(), b.params.freeMode && (0 === A.length && A.push({
											position: b.touches[b.isHorizontal() ? "startX" : "startY"],
											time: M
										}), A.push({
											position: b.touches[b.isHorizontal() ? "currentX" : "currentY"],
											time: (new window.Date).getTime()
										})), b.updateProgress(P), b.setWrapperTranslate(P)
									}
								}
							}
						}
					}
				}, b.onTouchEnd = function (e) {
					if (e.originalEvent && (e = e.originalEvent), z && b.emit("onTouchEnd", b, e), z = !1, S) {
						b.params.grabCursor && C && S && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab");
						var t = Date.now(),
							r = t - M;
						if (b.allowClick && (b.updateClickedSlide(e), b.emit("onTap", b, e), 300 > r && t - H > 300 && (L && clearTimeout(L), L = setTimeout(function () {
								b && (b.params.paginationHide && b.paginationContainer.length > 0 && !a(e.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, e))
							}, 300)), 300 > r && 300 > t - H && (L && clearTimeout(L), b.emit("onDoubleTap", b, e))), H = Date.now(), setTimeout(function () {
								b && (b.allowClick = !0)
							}, 0), !S || !C || !b.swipeDirection || 0 === b.touches.diff || P === k) return void(S = C = !1);
						S = C = !1;
						var i;
						if (i = b.params.followFinger ? b.rtl ? b.translate : -b.translate : -P, b.params.freeMode) {
							if (i < -b.minTranslate()) return void b.slideTo(b.activeIndex);
							if (i > -b.maxTranslate()) return void(b.slides.length < b.snapGrid.length ? b.slideTo(b.snapGrid.length - 1) : b.slideTo(b.slides.length - 1));
							if (b.params.freeModeMomentum) {
								if (A.length > 1) {
									var s = A.pop(),
										n = A.pop(),
										o = s.position - n.position,
										l = s.time - n.time;
									b.velocity = o / l, b.velocity = b.velocity / 2, Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0), (l > 150 || (new window.Date).getTime() - s.time > 300) && (b.velocity = 0)
								} else b.velocity = 0;
								A.length = 0;
								var p = 1e3 * b.params.freeModeMomentumRatio,
									d = b.velocity * p,
									u = b.translate + d;
								b.rtl && (u = -u);
								var c, m = !1,
									h = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
								if (u < b.maxTranslate()) b.params.freeModeMomentumBounce ? (u + b.maxTranslate() < -h && (u = b.maxTranslate() - h), c = b.maxTranslate(), m = !0, B = !0) : u = b.maxTranslate();
								else if (u > b.minTranslate()) b.params.freeModeMomentumBounce ? (u - b.minTranslate() > h && (u = b.minTranslate() + h), c = b.minTranslate(), m = !0, B = !0) : u = b.minTranslate();
								else if (b.params.freeModeSticky) {
									var f, g = 0;
									for (g = 0; g < b.snapGrid.length; g += 1)
										if (b.snapGrid[g] > -u) {
											f = g;
											break
										}
									u = Math.abs(b.snapGrid[f] - u) < Math.abs(b.snapGrid[f - 1] - u) || "next" === b.swipeDirection ? b.snapGrid[f] : b.snapGrid[f - 1], b.rtl || (u = -u)
								}
								if (0 !== b.velocity) p = b.rtl ? Math.abs((-u - b.translate) / b.velocity) : Math.abs((u - b.translate) / b.velocity);
								else if (b.params.freeModeSticky) return void b.slideReset();
								b.params.freeModeMomentumBounce && m ? (b.updateProgress(c), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function () {
									b && B && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), b.setWrapperTranslate(c), b.wrapper.transitionEnd(function () {
										b && b.onTransitionEnd()
									}))
								})) : b.velocity ? (b.updateProgress(u), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function () {
									b && b.onTransitionEnd()
								}))) : b.updateProgress(u), b.updateActiveIndex()
							}
							return void((!b.params.freeModeMomentum || r >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex()))
						}
						var v, w = 0,
							y = b.slidesSizesGrid[0];
						for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup) "undefined" != typeof b.slidesGrid[v + b.params.slidesPerGroup] ? i >= b.slidesGrid[v] && i < b.slidesGrid[v + b.params.slidesPerGroup] && (w = v, y = b.slidesGrid[v + b.params.slidesPerGroup] - b.slidesGrid[v]) : i >= b.slidesGrid[v] && (w = v, y = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
						var x = (i - b.slidesGrid[w]) / y;
						if (r > b.params.longSwipesMs) {
							if (!b.params.longSwipes) return void b.slideTo(b.activeIndex);
							"next" === b.swipeDirection && (x >= b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w)), "prev" === b.swipeDirection && (x > 1 - b.params.longSwipesRatio ? b.slideTo(w + b.params.slidesPerGroup) : b.slideTo(w))
						} else {
							if (!b.params.shortSwipes) return void b.slideTo(b.activeIndex);
							"next" === b.swipeDirection && b.slideTo(w + b.params.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(w)
						}
					}
				}, b._slideTo = function (e, a) {
					return b.slideTo(e, a, !0, !0)
				}, b.slideTo = function (e, a, t, r) {
					"undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), b.snapIndex = Math.floor(e / b.params.slidesPerGroup), b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
					var i = -b.snapGrid[b.snapIndex];
					b.params.autoplay && b.autoplaying && (r || !b.params.autoplayDisableOnInteraction ? b.pauseAutoplay(a) : b.stopAutoplay()), b.updateProgress(i);
					for (var s = 0; s < b.slidesGrid.length; s++) - Math.floor(100 * i) >= Math.floor(100 * b.slidesGrid[s]) && (e = s);
					return !b.params.allowSwipeToNext && i < b.translate && i < b.minTranslate() ? !1 : !b.params.allowSwipeToPrev && i > b.translate && i > b.maxTranslate() && (b.activeIndex || 0) !== e ? !1 : ("undefined" == typeof a && (a = b.params.speed), b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.rtl && -i === b.translate || !b.rtl && i === b.translate ? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(i), !1) : (b.updateClasses(), b.onTransitionStart(t), 0 === a ? (b.setWrapperTranslate(i), b.setWrapperTransition(0), b.onTransitionEnd(t)) : (b.setWrapperTranslate(i), b.setWrapperTransition(a), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function () {
						b && b.onTransitionEnd(t)
					}))), !0))
				}, b.onTransitionStart = function (e) {
					"undefined" == typeof e && (e = !0), b.params.autoHeight && b.updateAutoHeight(), b.lazy && b.lazy.onTransitionStart(), e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextStart", b) : b.emit("onSlidePrevStart", b)))
				}, b.onTransitionEnd = function (e) {
					b.animating = !1, b.setWrapperTransition(0), "undefined" == typeof e && (e = !0), b.lazy && b.lazy.onTransitionEnd(), e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.activeIndex > b.previousIndex ? b.emit("onSlideNextEnd", b) : b.emit("onSlidePrevEnd", b))), b.params.hashnav && b.hashnav && b.hashnav.setHash()
				}, b.slideNext = function (e, a, t) {
					if (b.params.loop) {
						if (b.animating) return !1;
						b.fixLoop();
						b.container[0].clientLeft;
						return b.slideTo(b.activeIndex + b.params.slidesPerGroup, a, e, t)
					}
					return b.slideTo(b.activeIndex + b.params.slidesPerGroup, a, e, t)
				}, b._slideNext = function (e) {
					return b.slideNext(!0, e, !0)
				}, b.slidePrev = function (e, a, t) {
					if (b.params.loop) {
						if (b.animating) return !1;
						b.fixLoop();
						b.container[0].clientLeft;
						return b.slideTo(b.activeIndex - 1, a, e, t)
					}
					return b.slideTo(b.activeIndex - 1, a, e, t)
				}, b._slidePrev = function (e) {
					return b.slidePrev(!0, e, !0)
				}, b.slideReset = function (e, a, t) {
					return b.slideTo(b.activeIndex, a, e)
				}, b.setWrapperTransition = function (e, a) {
					b.wrapper.transition(e), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e), b.params.parallax && b.parallax && b.parallax.setTransition(e), b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e), b.params.control && b.controller && b.controller.setTransition(e, a), b.emit("onSetTransition", b, e)
				}, b.setWrapperTranslate = function (e, a, t) {
					var r = 0,
						i = 0,
						n = 0;
					b.isHorizontal() ? r = b.rtl ? -e : e : i = e, b.params.roundLengths && (r = s(r), i = s(i)), b.params.virtualTranslate || (b.support.transforms3d ? b.wrapper.transform("translate3d(" + r + "px, " + i + "px, " + n + "px)") : b.wrapper.transform("translate(" + r + "px, " + i + "px)")), b.translate = b.isHorizontal() ? r : i;
					var o, l = b.maxTranslate() - b.minTranslate();
					o = 0 === l ? 0 : (e - b.minTranslate()) / l, o !== b.progress && b.updateProgress(e), a && b.updateActiveIndex(), "slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate), b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate), b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate), b.params.control && b.controller && b.controller.setTranslate(b.translate, t), b.emit("onSetTranslate", b, b.translate)
				}, b.getTranslate = function (e, a) {
					var t, r, i, s;
					return "undefined" == typeof a && (a = "x"), b.params.virtualTranslate ? b.rtl ? -b.translate : b.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function (e) {
						return e.replace(",", ".")
					}).join(", ")), s = new window.WebKitCSSMatrix("none" === r ? "" : r)) : (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = s.toString().split(",")), "x" === a && (r = window.WebKitCSSMatrix ? s.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (r = window.WebKitCSSMatrix ? s.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), b.rtl && r && (r = -r), r || 0)
				}, b.getWrapperTranslate = function (e) {
					return "undefined" == typeof e && (e = b.isHorizontal() ? "x" : "y"), b.getTranslate(b.wrapper[0], e)
				}, b.observers = [], b.initObservers = function () {
					if (b.params.observeParents)
						for (var e = b.container.parents(), a = 0; a < e.length; a++) l(e[a]);
					l(b.container[0], {
						childList: !1
					}), l(b.wrapper[0], {
						attributes: !1
					})
				}, b.disconnectObservers = function () {
					for (var e = 0; e < b.observers.length; e++) b.observers[e].disconnect();
					b.observers = []
				}, b.createLoop = function () {
					b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
					var e = b.wrapper.children("." + b.params.slideClass);
					"auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = e.length), b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10), b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides, b.loopedSlides > e.length && (b.loopedSlides = e.length);
					var t, r = [],
						i = [];
					for (e.each(function (t, s) {
							var n = a(this);
							t < b.loopedSlides && i.push(s), t < e.length && t >= e.length - b.loopedSlides && r.push(s), n.attr("data-swiper-slide-index", t)
						}), t = 0; t < i.length; t++) b.wrapper.append(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
					for (t = r.length - 1; t >= 0; t--) b.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))
				}, b.destroyLoop = function () {
					b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(), b.slides.removeAttr("data-swiper-slide-index")
				}, b.reLoop = function (e) {
					var a = b.activeIndex - b.loopedSlides;
					b.destroyLoop(), b.createLoop(), b.updateSlidesSize(), e && b.slideTo(a + b.loopedSlides, 0, !1)
				}, b.fixLoop = function () {
					var e;
					b.activeIndex < b.loopedSlides ? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, e += b.loopedSlides, b.slideTo(e, 0, !1, !0)) : ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, e += b.loopedSlides, b.slideTo(e, 0, !1, !0))
				}, b.appendSlide = function (e) {
					if (b.params.loop && b.destroyLoop(), "object" == typeof e && e.length)
						for (var a = 0; a < e.length; a++) e[a] && b.wrapper.append(e[a]);
					else b.wrapper.append(e);
					b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0)
				}, b.prependSlide = function (e) {
					b.params.loop && b.destroyLoop();
					var a = b.activeIndex + 1;
					if ("object" == typeof e && e.length) {
						for (var t = 0; t < e.length; t++) e[t] && b.wrapper.prepend(e[t]);
						a = b.activeIndex + e.length
					} else b.wrapper.prepend(e);
					b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.slideTo(a, 0, !1)
				}, b.removeSlide = function (e) {
					b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
					var a, t = b.activeIndex;
					if ("object" == typeof e && e.length) {
						for (var r = 0; r < e.length; r++) a = e[r], b.slides[a] && b.slides.eq(a).remove(), t > a && t--;
						t = Math.max(t, 0)
					} else a = e, b.slides[a] && b.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
					b.params.loop && b.createLoop(), b.params.observer && b.support.observer || b.update(!0), b.params.loop ? b.slideTo(t + b.loopedSlides, 0, !1) : b.slideTo(t, 0, !1)
				}, b.removeAllSlides = function () {
					for (var e = [], a = 0; a < b.slides.length; a++) e.push(a);
					b.removeSlide(e)
				}, b.effects = {
					fade: {
						setTranslate: function () {
							for (var e = 0; e < b.slides.length; e++) {
								var a = b.slides.eq(e),
									t = a[0].swiperSlideOffset,
									r = -t;
								b.params.virtualTranslate || (r -= b.translate);
								var i = 0;
								b.isHorizontal() || (i = r, r = 0);
								var s = b.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
								a.css({
									opacity: s
								}).transform("translate3d(" + r + "px, " + i + "px, 0px)")
							}
						},
						setTransition: function (e) {
							if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
								var a = !1;
								b.slides.transitionEnd(function () {
									if (!a && b) {
										a = !0, b.animating = !1;
										for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) b.wrapper.trigger(e[t])
									}
								})
							}
						}
					},
					flip: {
						setTranslate: function () {
							for (var e = 0; e < b.slides.length; e++) {
								var t = b.slides.eq(e),
									r = t[0].progress;
								b.params.flip.limitRotation && (r = Math.max(Math.min(t[0].progress, 1), -1));
								var i = t[0].swiperSlideOffset,
									s = -180 * r,
									n = s,
									o = 0,
									l = -i,
									p = 0;
								if (b.isHorizontal() ? b.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(r)) + b.slides.length, b.params.flip.slideShadows) {
									var d = b.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
										u = b.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
									0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
								}
								t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
							}
						},
						setTransition: function (e) {
							if (b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.virtualTranslate && 0 !== e) {
								var t = !1;
								b.slides.eq(b.activeIndex).transitionEnd(function () {
									if (!t && b && a(this).hasClass(b.params.slideActiveClass)) {
										t = !0, b.animating = !1;
										for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < e.length; r++) b.wrapper.trigger(e[r])
									}
								})
							}
						}
					},
					cube: {
						setTranslate: function () {
							var e, t = 0;
							b.params.cube.shadow && (b.isHorizontal() ? (e = b.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), b.wrapper.append(e)), e.css({
								height: b.width + "px"
							})) : (e = b.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), b.container.append(e))));
							for (var r = 0; r < b.slides.length; r++) {
								var i = b.slides.eq(r),
									s = 90 * r,
									n = Math.floor(s / 360);
								b.rtl && (s = -s, n = Math.floor(-s / 360));
								var o = Math.max(Math.min(i[0].progress, 1), -1),
									l = 0,
									p = 0,
									d = 0;
								r % 4 === 0 ? (l = 4 * -n * b.size, d = 0) : (r - 1) % 4 === 0 ? (l = 0, d = 4 * -n * b.size) : (r - 2) % 4 === 0 ? (l = b.size + 4 * n * b.size, d = b.size) : (r - 3) % 4 === 0 && (l = -b.size, d = 3 * b.size + 4 * b.size * n), b.rtl && (l = -l), b.isHorizontal() || (p = l, l = 0);
								var u = "rotateX(" + (b.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (b.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
								if (1 >= o && o > -1 && (t = 90 * r + 90 * o, b.rtl && (t = 90 * -r - 90 * o)), i.transform(u), b.params.cube.slideShadows) {
									var c = b.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
										m = b.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
									0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0))
								}
							}
							if (b.wrapper.css({
									"-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
									"-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
									"-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
									"transform-origin": "50% 50% -" + b.size / 2 + "px"
								}), b.params.cube.shadow)
								if (b.isHorizontal()) e.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")");
								else {
									var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
										f = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
										g = b.params.cube.shadowScale,
										v = b.params.cube.shadowScale / f,
										w = b.params.cube.shadowOffset;
									e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + w) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)")
								}
							var y = b.isSafari || b.isUiWebView ? -b.size / 2 : 0;
							b.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (b.isHorizontal() ? 0 : t) + "deg) rotateY(" + (b.isHorizontal() ? -t : 0) + "deg)")
						},
						setTransition: function (e) {
							b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e)
						}
					},
					coverflow: {
						setTranslate: function () {
							for (var e = b.translate, t = b.isHorizontal() ? -e + b.width / 2 : -e + b.height / 2, r = b.isHorizontal() ? b.params.coverflow.rotate : -b.params.coverflow.rotate, i = b.params.coverflow.depth, s = 0, n = b.slides.length; n > s; s++) {
								var o = b.slides.eq(s),
									l = b.slidesSizesGrid[s],
									p = o[0].swiperSlideOffset,
									d = (t - p - l / 2) / l * b.params.coverflow.modifier,
									u = b.isHorizontal() ? r * d : 0,
									c = b.isHorizontal() ? 0 : r * d,
									m = -i * Math.abs(d),
									h = b.isHorizontal() ? 0 : b.params.coverflow.stretch * d,
									f = b.isHorizontal() ? b.params.coverflow.stretch * d : 0;
								Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);
								var g = "translate3d(" + f + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
								if (o.transform(g), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, b.params.coverflow.slideShadows) {
									var v = b.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
										w = b.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
									0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
								}
							}
							if (b.browser.ie) {
								var y = b.wrapper[0].style;
								y.perspectiveOrigin = t + "px 50%"
							}
						},
						setTransition: function (e) {
							b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
						}
					}
				}, b.lazy = {
					initialImageLoaded: !1,
					loadImageInSlide: function (e, t) {
						if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== b.slides.length)) {
							var r = b.slides.eq(e),
								i = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
							!r.hasClass("swiper-lazy") || r.hasClass("swiper-lazy-loaded") || r.hasClass("swiper-lazy-loading") || (i = i.add(r[0])), 0 !== i.length && i.each(function () {
								var e = a(this);
								e.addClass("swiper-lazy-loading");
								var i = e.attr("data-background"),
									s = e.attr("data-src"),
									n = e.attr("data-srcset");
								b.loadImage(e[0], s || i, n, !1, function () {
									if (i ? (e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), s && (e.attr("src", s), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove(), b.params.loop && t) {
										var a = r.attr("data-swiper-slide-index");
										if (r.hasClass(b.params.slideDuplicateClass)) {
											var o = b.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + b.params.slideDuplicateClass + ")");
											b.lazy.loadImageInSlide(o.index(), !1)
										} else {
											var l = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
											b.lazy.loadImageInSlide(l.index(), !1)
										}
									}
									b.emit("onLazyImageReady", b, r[0], e[0])
								}), b.emit("onLazyImageLoad", b, r[0], e[0])
							})
						}
					},
					load: function () {
						var e;
						if (b.params.watchSlidesVisibility) b.wrapper.children("." + b.params.slideVisibleClass).each(function () {
							b.lazy.loadImageInSlide(a(this).index())
						});
						else if (b.params.slidesPerView > 1)
							for (e = b.activeIndex; e < b.activeIndex + b.params.slidesPerView; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
						else b.lazy.loadImageInSlide(b.activeIndex);
						if (b.params.lazyLoadingInPrevNext)
							if (b.params.slidesPerView > 1 || b.params.lazyLoadingInPrevNextAmount && b.params.lazyLoadingInPrevNextAmount > 1) {
								var t = b.params.lazyLoadingInPrevNextAmount,
									r = b.params.slidesPerView,
									i = Math.min(b.activeIndex + r + Math.max(t, r), b.slides.length),
									s = Math.max(b.activeIndex - Math.max(r, t), 0);
								for (e = b.activeIndex + b.params.slidesPerView; i > e; e++) b.slides[e] && b.lazy.loadImageInSlide(e);
								for (e = s; e < b.activeIndex; e++) b.slides[e] && b.lazy.loadImageInSlide(e)
							} else {
								var n = b.wrapper.children("." + b.params.slideNextClass);
								n.length > 0 && b.lazy.loadImageInSlide(n.index());
								var o = b.wrapper.children("." + b.params.slidePrevClass);
								o.length > 0 && b.lazy.loadImageInSlide(o.index())
							}
					},
					onTransitionStart: function () {
						b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load()
					},
					onTransitionEnd: function () {
						b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load()
					}
				}, b.scrollbar = {
					isTouched: !1,
					setDragPosition: function (e) {
						var a = b.scrollbar,
							t = b.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
							r = t - a.track.offset()[b.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
							i = -b.minTranslate() * a.moveDivider,
							s = -b.maxTranslate() * a.moveDivider;
						i > r ? r = i : r > s && (r = s), r = -r / a.moveDivider, b.updateProgress(r), b.setWrapperTranslate(r, !0)
					},
					dragStart: function (e) {
						var a = b.scrollbar;
						a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), b.params.scrollbarHide && a.track.css("opacity", 1), b.wrapper.transition(100), a.drag.transition(100), b.emit("onScrollbarDragStart", b)
					},
					dragMove: function (e) {
						var a = b.scrollbar;
						a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), b.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), b.emit("onScrollbarDragMove", b))
					},
					dragEnd: function (e) {
						var a = b.scrollbar;
						a.isTouched && (a.isTouched = !1, b.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
							a.track.css("opacity", 0), a.track.transition(400)
						}, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset())
					},
					enableDraggable: function () {
						var e = b.scrollbar,
							t = b.support.touch ? e.track : document;
						a(e.track).on(b.touchEvents.start, e.dragStart), a(t).on(b.touchEvents.move, e.dragMove), a(t).on(b.touchEvents.end, e.dragEnd)
					},
					disableDraggable: function () {
						var e = b.scrollbar,
							t = b.support.touch ? e.track : document;
						a(e.track).off(b.touchEvents.start, e.dragStart), a(t).off(b.touchEvents.move, e.dragMove), a(t).off(b.touchEvents.end, e.dragEnd)
					},
					set: function () {
						if (b.params.scrollbar) {
							var e = b.scrollbar;
							e.track = a(b.params.scrollbar), b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && e.track.length > 1 && 1 === b.container.find(b.params.scrollbar).length && (e.track = b.container.find(b.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = b.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = b.size / b.virtualSize, e.moveDivider = e.divider * (e.trackSize / b.size), e.dragSize = e.trackSize * e.divider, b.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", b.params.scrollbarHide && (e.track[0].style.opacity = 0)
						}
					},
					setTranslate: function () {
						if (b.params.scrollbar) {
							var e, a = b.scrollbar,
								t = (b.translate || 0, a.dragSize);
							e = (a.trackSize - a.dragSize) * b.progress, b.rtl && b.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), b.isHorizontal() ? (b.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (b.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), b.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
								a.track[0].style.opacity = 0, a.track.transition(400)
							}, 1e3))
						}
					},
					setTransition: function (e) {
						b.params.scrollbar && b.scrollbar.drag.transition(e)
					}
				}, b.controller = {
					LinearSpline: function (e, a) {
						this.x = e, this.y = a, this.lastIndex = e.length - 1;
						var t, r;
						this.x.length;
						this.interpolate = function (e) {
							return e ? (r = i(this.x, e), t = r - 1, (e - this.x[t]) * (this.y[r] - this.y[t]) / (this.x[r] - this.x[t]) + this.y[t]) : 0
						};
						var i = function () {
							var e, a, t;
							return function (r, i) {
								for (a = -1, e = r.length; e - a > 1;) r[t = e + a >> 1] <= i ? a = t : e = t;
								return e
							}
						}()
					},
					getInterpolateFunction: function (e) {
						b.controller.spline || (b.controller.spline = b.params.loop ? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid) : new b.controller.LinearSpline(b.snapGrid, e.snapGrid))
					},
					setTranslate: function (e, a) {
						function r(a) {
							e = a.rtl && "horizontal" === a.params.direction ? -b.translate : b.translate, "slide" === b.params.controlBy && (b.controller.getInterpolateFunction(a), s = -b.controller.spline.interpolate(-e)), s && "container" !== b.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (b.maxTranslate() - b.minTranslate()), s = (e - b.minTranslate()) * i + a.minTranslate()), b.params.controlInverse && (s = a.maxTranslate() - s), a.updateProgress(s), a.setWrapperTranslate(s, !1, b), a.updateActiveIndex()
						}
						var i, s, n = b.params.control;
						if (b.isArray(n))
							for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && r(n[o]);
						else n instanceof t && a !== n && r(n)
					},
					setTransition: function (e, a) {
						function r(a) {
							a.setWrapperTransition(e, b), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
								s && (a.params.loop && "slide" === b.params.controlBy && a.fixLoop(), a.onTransitionEnd())
							}))
						}
						var i, s = b.params.control;
						if (b.isArray(s))
							for (i = 0; i < s.length; i++) s[i] !== a && s[i] instanceof t && r(s[i]);
						else s instanceof t && a !== s && r(s)
					}
				}, b.hashnav = {
					init: function () {
						if (b.params.hashnav) {
							b.hashnav.initialized = !0;
							var e = document.location.hash.replace("#", "");
							if (e)
								for (var a = 0, t = 0, r = b.slides.length; r > t; t++) {
									var i = b.slides.eq(t),
										s = i.attr("data-hash");
									if (s === e && !i.hasClass(b.params.slideDuplicateClass)) {
										var n = i.index();
										b.slideTo(n, a, b.params.runCallbacksOnInit, !0)
									}
								}
						}
					},
					setHash: function () {
						b.hashnav.initialized && b.params.hashnav && (document.location.hash = b.slides.eq(b.activeIndex).attr("data-hash") || "")
					}
				}, b.disableKeyboardControl = function () {
					b.params.keyboardControl = !1, a(document).off("keydown", p)
				}, b.enableKeyboardControl = function () {
					b.params.keyboardControl = !0, a(document).on("keydown", p)
				}, b.mousewheel = {
					event: !1,
					lastScrollTime: (new window.Date).getTime()
				}, b.params.mousewheelControl) {
				try {
					new window.WheelEvent("wheel"), b.mousewheel.event = "wheel"
				} catch (N) {
					(window.WheelEvent || b.container[0] && "wheel" in b.container[0]) && (b.mousewheel.event = "wheel")
				}!b.mousewheel.event && window.WheelEvent, b.mousewheel.event || void 0 === document.onmousewheel || (b.mousewheel.event = "mousewheel"), b.mousewheel.event || (b.mousewheel.event = "DOMMouseScroll")
			}
			b.disableMousewheelControl = function () {
				return b.mousewheel.event ? (b.container.off(b.mousewheel.event, d), !0) : !1
			}, b.enableMousewheelControl = function () {
				return b.mousewheel.event ? (b.container.on(b.mousewheel.event, d), !0) : !1
			}, b.parallax = {
				setTranslate: function () {
					b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
						u(this, b.progress)
					}), b.slides.each(function () {
						var e = a(this);
						e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
							var a = Math.min(Math.max(e[0].progress, -1), 1);
							u(this, a)
						})
					})
				},
				setTransition: function (e) {
					"undefined" == typeof e && (e = b.params.speed), b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
						var t = a(this),
							r = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
						0 === e && (r = 0), t.transition(r)
					})
				}
			}, b._plugins = [];
			for (var R in b.plugins) {
				var W = b.plugins[R](b, b.params[R]);
				W && b._plugins.push(W)
			}
			return b.callPlugins = function (e) {
				for (var a = 0; a < b._plugins.length; a++) e in b._plugins[a] && b._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
			}, b.emitterEventListeners = {}, b.emit = function (e) {
				b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
				var a;
				if (b.emitterEventListeners[e])
					for (a = 0; a < b.emitterEventListeners[e].length; a++) b.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
				b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
			}, b.on = function (e, a) {
				return e = c(e), b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []), b.emitterEventListeners[e].push(a), b
			}, b.off = function (e, a) {
				var t;
				if (e = c(e), "undefined" == typeof a) return b.emitterEventListeners[e] = [], b;
				if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
					for (t = 0; t < b.emitterEventListeners[e].length; t++) b.emitterEventListeners[e][t] === a && b.emitterEventListeners[e].splice(t, 1);
					return b
				}
			}, b.once = function (e, a) {
				e = c(e);
				var t = function () {
					a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), b.off(e, t)
				};
				return b.on(e, t), b
			}, b.a11y = {
				makeFocusable: function (e) {
					return e.attr("tabIndex", "0"), e
				},
				addRole: function (e, a) {
					return e.attr("role", a), e
				},
				addLabel: function (e, a) {
					return e.attr("aria-label", a), e
				},
				disable: function (e) {
					return e.attr("aria-disabled", !0), e
				},
				enable: function (e) {
					return e.attr("aria-disabled", !1), e
				},
				onEnterKey: function (e) {
					13 === e.keyCode && (a(e.target).is(b.params.nextButton) ? (b.onClickNext(e), b.isEnd ? b.a11y.notify(b.params.lastSlideMessage) : b.a11y.notify(b.params.nextSlideMessage)) : a(e.target).is(b.params.prevButton) && (b.onClickPrev(e), b.isBeginning ? b.a11y.notify(b.params.firstSlideMessage) : b.a11y.notify(b.params.prevSlideMessage)), a(e.target).is("." + b.params.bulletClass) && a(e.target)[0].click())
				},
				liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
				notify: function (e) {
					var a = b.a11y.liveRegion;
					0 !== a.length && (a.html(""), a.html(e))
				},
				init: function () {
					b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.a11y.makeFocusable(b.nextButton), b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)), b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.a11y.makeFocusable(b.prevButton), b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)), a(b.container).append(b.a11y.liveRegion)
				},
				initPagination: function () {
					b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function () {
						var e = a(this);
						b.a11y.makeFocusable(e), b.a11y.addRole(e, "button"), b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
					})
				},
				destroy: function () {
					b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove()
				}
			}, b.init = function () {
				b.params.loop && b.createLoop(), b.updateContainerSize(), b.updateSlidesSize(), b.updatePagination(), b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()), "slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()), b.params.loop ? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit) : (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))), b.attachEvents(), b.params.observer && b.support.observer && b.initObservers(), b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(), b.params.autoplay && b.startAutoplay(), b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(), b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(), b.params.hashnav && b.hashnav && b.hashnav.init(), b.params.a11y && b.a11y && b.a11y.init(), b.emit("onInit", b)
			}, b.cleanupStyles = function () {
				b.container.removeClass(b.classNames.join(" ")).removeAttr("style"), b.wrapper.removeAttr("style"), b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass), b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass), b.params.prevButton && a(b.params.prevButton).removeClass(b.params.buttonDisabledClass), b.params.nextButton && a(b.params.nextButton).removeClass(b.params.buttonDisabledClass), b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"))
			}, b.destroy = function (e, a) {
				b.detachEvents(), b.stopAutoplay(), b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(), b.params.loop && b.destroyLoop(), a && b.cleanupStyles(), b.disconnectObservers(), b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(), b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(), b.params.a11y && b.a11y && b.a11y.destroy(), b.emit("onDestroy"), e !== !1 && (b = null)
			}, b.init(), b
		}
	};
	t.prototype = {
		isSafari: function () {
			var e = navigator.userAgent.toLowerCase();
			return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
		}(),
		isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
		isArray: function (e) {
			return "[object Array]" === Object.prototype.toString.apply(e)
		},
		browser: {
			ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
			ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
		},
		device: function () {
			var e = navigator.userAgent,
				a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
				t = e.match(/(iPad).*OS\s([\d_]+)/),
				r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
				i = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
			return {
				ios: t || i || r,
				android: a
			}
		}(),
		support: {
			touch: window.Modernizr && Modernizr.touch === !0 || function () {
				return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
			}(),
			transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
				var e = document.createElement("div").style;
				return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
			}(),
			flexbox: function () {
				for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
					if (a[t] in e) return !0
			}(),
			observer: function () {
				return "MutationObserver" in window || "WebkitMutationObserver" in window
			}()
		},
		plugins: {}
	};
	for (var r = (function () {
			var e = function (e) {
					var a = this,
						t = 0;
					for (t = 0; t < e.length; t++) a[t] = e[t];
					return a.length = e.length, this
				},
				a = function (a, t) {
					var r = [],
						i = 0;
					if (a && !t && a instanceof e) return a;
					if (a)
						if ("string" == typeof a) {
							var s, n, o = a.trim();
							if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
								var l = "div";
								for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = a, i = 0; i < n.childNodes.length; i++) r.push(n.childNodes[i])
							} else
								for (s = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], i = 0; i < s.length; i++) s[i] && r.push(s[i])
						} else if (a.nodeType || a === window || a === document) r.push(a);
					else if (a.length > 0 && a[0].nodeType)
						for (i = 0; i < a.length; i++) r.push(a[i]);
					return new e(r)
				};
			return e.prototype = {
				addClass: function (e) {
					if ("undefined" == typeof e) return this;
					for (var a = e.split(" "), t = 0; t < a.length; t++)
						for (var r = 0; r < this.length; r++) this[r].classList.add(a[t]);
					return this
				},
				removeClass: function (e) {
					for (var a = e.split(" "), t = 0; t < a.length; t++)
						for (var r = 0; r < this.length; r++) this[r].classList.remove(a[t]);
					return this
				},
				hasClass: function (e) {
					return this[0] ? this[0].classList.contains(e) : !1
				},
				toggleClass: function (e) {
					for (var a = e.split(" "), t = 0; t < a.length; t++)
						for (var r = 0; r < this.length; r++) this[r].classList.toggle(a[t]);
					return this
				},
				attr: function (e, a) {
					if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
					for (var t = 0; t < this.length; t++)
						if (2 === arguments.length) this[t].setAttribute(e, a);
						else
							for (var r in e) this[t][r] = e[r], this[t].setAttribute(r, e[r]);
					return this
				},
				removeAttr: function (e) {
					for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);
					return this
				},
				data: function (e, a) {
					if ("undefined" != typeof a) {
						for (var t = 0; t < this.length; t++) {
							var r = this[t];
							r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = a
						}
						return this
					}
					if (this[0]) {
						var i = this[0].getAttribute("data-" + e);
						return i ? i : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
					}
				},
				transform: function (e) {
					for (var a = 0; a < this.length; a++) {
						var t = this[a].style;
						t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
					}
					return this
				},
				transition: function (e) {
					"string" != typeof e && (e += "ms");
					for (var a = 0; a < this.length; a++) {
						var t = this[a].style;
						t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
					}
					return this
				},
				on: function (e, t, r, i) {
					function s(e) {
						var i = e.target;
						if (a(i).is(t)) r.call(i, e);
						else
							for (var s = a(i).parents(), n = 0; n < s.length; n++) a(s[n]).is(t) && r.call(s[n], e)
					}
					var n, o, l = e.split(" ");
					for (n = 0; n < this.length; n++)
						if ("function" == typeof t || t === !1)
							for ("function" == typeof t && (r = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], r, i);
						else
							for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({
								listener: r,
								liveListener: s
							}), this[n].addEventListener(l[o], s, i);
					return this
				},
				off: function (e, a, t, r) {
					for (var i = e.split(" "), s = 0; s < i.length; s++)
						for (var n = 0; n < this.length; n++)
							if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], r = arguments[2] || !1), this[n].removeEventListener(i[s], t, r);
							else if (this[n].dom7LiveListeners)
						for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[s], this[n].dom7LiveListeners[o].liveListener, r);
					return this
				},
				once: function (e, a, t, r) {
					function i(n) {
						t(n), s.off(e, a, i, r)
					}
					var s = this;
					"function" == typeof a && (a = !1, t = arguments[1], r = arguments[2]), s.on(e, a, i, r)
				},
				trigger: function (e, a) {
					for (var t = 0; t < this.length; t++) {
						var r;
						try {
							r = new window.CustomEvent(e, {
								detail: a,
								bubbles: !0,
								cancelable: !0
							})
						} catch (i) {
							r = document.createEvent("Event"), r.initEvent(e, !0, !0), r.detail = a
						}
						this[t].dispatchEvent(r)
					}
					return this
				},
				transitionEnd: function (e) {
					function a(s) {
						if (s.target === this)
							for (e.call(this, s), t = 0; t < r.length; t++) i.off(r[t], a)
					}
					var t, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
						i = this;
					if (e)
						for (t = 0; t < r.length; t++) i.on(r[t], a);
					return this
				},
				width: function () {
					return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
				},
				outerWidth: function (e) {
					return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
				},
				height: function () {
					return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
				},
				outerHeight: function (e) {
					return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
				},
				offset: function () {
					if (this.length > 0) {
						var e = this[0],
							a = e.getBoundingClientRect(),
							t = document.body,
							r = e.clientTop || t.clientTop || 0,
							i = e.clientLeft || t.clientLeft || 0,
							s = window.pageYOffset || e.scrollTop,
							n = window.pageXOffset || e.scrollLeft;
						return {
							top: a.top + s - r,
							left: a.left + n - i
						}
					}
					return null
				},
				css: function (e, a) {
					var t;
					if (1 === arguments.length) {
						if ("string" != typeof e) {
							for (t = 0; t < this.length; t++)
								for (var r in e) this[t].style[r] = e[r];
							return this
						}
						if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
					}
					if (2 === arguments.length && "string" == typeof e) {
						for (t = 0; t < this.length; t++) this[t].style[e] = a;
						return this
					}
					return this
				},
				each: function (e) {
					for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
					return this
				},
				html: function (e) {
					if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
					for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
					return this
				},
				text: function (e) {
					if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
					for (var a = 0; a < this.length; a++) this[a].textContent = e;
					return this
				},
				is: function (t) {
					if (!this[0]) return !1;
					var r, i;
					if ("string" == typeof t) {
						var s = this[0];
						if (s === document) return t === document;
						if (s === window) return t === window;
						if (s.matches) return s.matches(t);
						if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
						if (s.mozMatchesSelector) return s.mozMatchesSelector(t);
						if (s.msMatchesSelector) return s.msMatchesSelector(t);
						for (r = a(t), i = 0; i < r.length; i++)
							if (r[i] === this[0]) return !0;
						return !1
					}
					if (t === document) return this[0] === document;
					if (t === window) return this[0] === window;
					if (t.nodeType || t instanceof e) {
						for (r = t.nodeType ? [t] : t, i = 0; i < r.length; i++)
							if (r[i] === this[0]) return !0;
						return !1
					}
					return !1
				},
				index: function () {
					if (this[0]) {
						for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;
						return a
					}
				},
				eq: function (a) {
					if ("undefined" == typeof a) return this;
					var t, r = this.length;
					return a > r - 1 ? new e([]) : 0 > a ? (t = r + a, new e(0 > t ? [] : [this[t]])) : new e([this[a]])
				},
				append: function (a) {
					var t, r;
					for (t = 0; t < this.length; t++)
						if ("string" == typeof a) {
							var i = document.createElement("div");
							for (i.innerHTML = a; i.firstChild;) this[t].appendChild(i.firstChild)
						} else if (a instanceof e)
						for (r = 0; r < a.length; r++) this[t].appendChild(a[r]);
					else this[t].appendChild(a);
					return this
				},
				prepend: function (a) {
					var t, r;
					for (t = 0; t < this.length; t++)
						if ("string" == typeof a) {
							var i = document.createElement("div");
							for (i.innerHTML = a, r = i.childNodes.length - 1; r >= 0; r--) this[t].insertBefore(i.childNodes[r], this[t].childNodes[0])
						} else if (a instanceof e)
						for (r = 0; r < a.length; r++) this[t].insertBefore(a[r], this[t].childNodes[0]);
					else this[t].insertBefore(a, this[t].childNodes[0]);
					return this
				},
				insertBefore: function (e) {
					for (var t = a(e), r = 0; r < this.length; r++)
						if (1 === t.length) t[0].parentNode.insertBefore(this[r], t[0]);
						else if (t.length > 1)
						for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[r].cloneNode(!0), t[i])
				},
				insertAfter: function (e) {
					for (var t = a(e), r = 0; r < this.length; r++)
						if (1 === t.length) t[0].parentNode.insertBefore(this[r], t[0].nextSibling);
						else if (t.length > 1)
						for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[r].cloneNode(!0), t[i].nextSibling)
				},
				next: function (t) {
					return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
				},
				nextAll: function (t) {
					var r = [],
						i = this[0];
					if (!i) return new e([]);
					for (; i.nextElementSibling;) {
						var s = i.nextElementSibling;
						t ? a(s).is(t) && r.push(s) : r.push(s), i = s
					}
					return new e(r)
				},
				prev: function (t) {
					return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
				},
				prevAll: function (t) {
					var r = [],
						i = this[0];
					if (!i) return new e([]);
					for (; i.previousElementSibling;) {
						var s = i.previousElementSibling;
						t ? a(s).is(t) && r.push(s) : r.push(s), i = s
					}
					return new e(r)
				},
				parent: function (e) {
					for (var t = [], r = 0; r < this.length; r++) e ? a(this[r].parentNode).is(e) && t.push(this[r].parentNode) : t.push(this[r].parentNode);
					return a(a.unique(t))
				},
				parents: function (e) {
					for (var t = [], r = 0; r < this.length; r++)
						for (var i = this[r].parentNode; i;) e ? a(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
					return a(a.unique(t))
				},
				find: function (a) {
					for (var t = [], r = 0; r < this.length; r++)
						for (var i = this[r].querySelectorAll(a), s = 0; s < i.length; s++) t.push(i[s]);
					return new e(t)
				},
				children: function (t) {
					for (var r = [], i = 0; i < this.length; i++)
						for (var s = this[i].childNodes, n = 0; n < s.length; n++) t ? 1 === s[n].nodeType && a(s[n]).is(t) && r.push(s[n]) : 1 === s[n].nodeType && r.push(s[n]);
					return new e(a.unique(r))
				},
				remove: function () {
					for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
					return this
				},
				add: function () {
					var e, t, r = this;
					for (e = 0; e < arguments.length; e++) {
						var i = a(arguments[e]);
						for (t = 0; t < i.length; t++) r[r.length] = i[t], r.length++
					}
					return r
				}
			}, a.fn = e.prototype, a.unique = function (e) {
				for (var a = [], t = 0; t < e.length; t++) - 1 === a.indexOf(e[t]) && a.push(e[t]);
				return a
			}, a
		}()), i = ["jQuery", "Zepto", "Dom7"], s = 0; s < i.length; s++) window[i[s]] && e(window[i[s]]);
	var n;
	n = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function (e) {
		function a(s) {
			if (s.target === this)
				for (e.call(this, s), t = 0; t < r.length; t++) i.off(r[t], a)
		}
		var t, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
			i = this;
		if (e)
			for (t = 0; t < r.length; t++) i.on(r[t], a);
		return this
	}), "transform" in n.fn || (n.fn.transform = function (e) {
		for (var a = 0; a < this.length; a++) {
			var t = this[a].style;
			t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
		}
		return this
	}), "transition" in n.fn || (n.fn.transition = function (e) {
		"string" != typeof e && (e += "ms");
		for (var a = 0; a < this.length; a++) {
			var t = this[a].style;
			t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
		}
		return this
	})), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
	"use strict";
	return window.Swiper
});
var $ = jQuery.noConflict();
$.fn.inlineStyle = function (prop) {
	return this.prop("style")[$.camelCase(prop)];
};
$.fn.doOnce = function (func) {
	this.length && func.apply(this);
	return this;
}
if ($().infinitescroll) {
	$.extend($.infinitescroll.prototype, {
		_setup_portfolioinfiniteitemsloader: function infscr_setup_portfolioinfiniteitemsloader() {
			var opts = this.options,
				instance = this;
			$(opts.nextSelector).click(function (e) {
				if (e.which == 1 && !e.metaKey && !e.shiftKey) {
					e.preventDefault();
					instance.retrieve();
				}
			});
			instance.options.loading.start = function (opts) {
				opts.loading.msg.appendTo(opts.loading.selector).show(opts.loading.speed, function () {
					instance.beginAjax(opts);
				});
			}
		},
		_showdonemsg_portfolioinfiniteitemsloader: function infscr_showdonemsg_portfolioinfiniteitemsloader() {
			var opts = this.options,
				instance = this;
			opts.loading.msg.find('img').hide().parent().find('div').html(opts.loading.finishedMsg).animate({
				opacity: 1
			}, 2000, function () {
				$(this).parent().fadeOut('normal');
			});
			$(opts.navSelector).fadeOut('normal');
			opts.errorCallback.call($(opts.contentSelector)[0], 'done');
		}
	});
} else {
	console.log('Infinite Scroll not defined.');
}
(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () {
				callback(currTime + timeToCall);
			}, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
}());

function debounce(func, wait, immediate) {
	var timeout, args, context, timestamp, result;
	return function () {
		context = this;
		args = arguments;
		timestamp = new Date();
		var later = function () {
			var last = (new Date()) - timestamp;
			if (last < wait) {
				timeout = setTimeout(later, wait - last);
			} else {
				timeout = null;
				if (!immediate) result = func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		if (!timeout) {
			timeout = setTimeout(later, wait);
		}
		if (callNow) result = func.apply(context, args);
		return result;
	};
}
var requesting = false;
var killRequesting = debounce(function () {
	requesting = false;
}, 100);

function onScrollSliderParallax() {
	if (!requesting) {
		requesting = true;
		requestAnimationFrame(function () {
			SEMICOLON.slider.sliderParallax();
			SEMICOLON.slider.sliderElementsFade();
		});
	}
	killRequesting();
}
var SEMICOLON = SEMICOLON || {};
(function ($) {
	"use strict";
	SEMICOLON.initialize = {
		init: function () {
			SEMICOLON.initialize.responsiveClasses();
			SEMICOLON.initialize.imagePreload('.portfolio-item:not(:has(.fslider)) img');
			SEMICOLON.initialize.stickyElements();
			SEMICOLON.initialize.goToTop();
			SEMICOLON.initialize.lazyLoad();
			SEMICOLON.initialize.fullScreen();
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.initialize.lightbox();
			SEMICOLON.initialize.resizeVideos();
			SEMICOLON.initialize.imageFade();
			SEMICOLON.initialize.pageTransition();
			SEMICOLON.initialize.dataResponsiveClasses();
			SEMICOLON.initialize.dataResponsiveHeights();
			$('.fslider').addClass('preloader2');
		},
		responsiveClasses: function () {
			if (typeof jRespond === 'undefined') {
				console.log('responsiveClasses: jRespond not Defined.');
				return true;
			}
			var jRes = jRespond([{
				label: 'smallest',
				enter: 0,
				exit: 479
			}, {
				label: 'handheld',
				enter: 480,
				exit: 767
			}, {
				label: 'tablet',
				enter: 768,
				exit: 991
			}, {
				label: 'laptop',
				enter: 992,
				exit: 1199
			}, {
				label: 'desktop',
				enter: 1200,
				exit: 10000
			}]);
			jRes.addFunc([{
				breakpoint: 'desktop',
				enter: function () {
					$body.addClass('device-lg');
				},
				exit: function () {
					$body.removeClass('device-lg');
				}
			}, {
				breakpoint: 'laptop',
				enter: function () {
					$body.addClass('device-md');
				},
				exit: function () {
					$body.removeClass('device-md');
				}
			}, {
				breakpoint: 'tablet',
				enter: function () {
					$body.addClass('device-sm');
				},
				exit: function () {
					$body.removeClass('device-sm');
				}
			}, {
				breakpoint: 'handheld',
				enter: function () {
					$body.addClass('device-xs');
				},
				exit: function () {
					$body.removeClass('device-xs');
				}
			}, {
				breakpoint: 'smallest',
				enter: function () {
					$body.addClass('device-xxs');
				},
				exit: function () {
					$body.removeClass('device-xxs');
				}
			}]);
		},
		imagePreload: function (selector, parameters) {
			var params = {
				delay: 250,
				transition: 400,
				easing: 'linear'
			};
			$.extend(params, parameters);
			$(selector).each(function () {
				var image = $(this);
				image.css({
					visibility: 'hidden',
					opacity: 0,
					display: 'block'
				});
				image.wrap('<span class="preloader" />');
				image.one("load", function (evt) {
					$(this).delay(params.delay).css({
						visibility: 'visible'
					}).animate({
						opacity: 1
					}, params.transition, params.easing, function () {
						$(this).unwrap('<span class="preloader" />');
					});
				}).each(function () {
					if (this.complete) $(this).trigger("load");
				});
			});
		},
		verticalMiddle: function () {
			if ($verticalMiddleEl.length > 0) {
				$verticalMiddleEl.each(function () {
					var element = $(this),
						verticalMiddleH = element.outerHeight(),
						headerHeight = $header.outerHeight();
					if (element.parents('#slider').length > 0 && !element.hasClass('ignore-header')) {
						if ($header.hasClass('transparent-header') && ($body.hasClass('device-lg') || $body.hasClass('device-md'))) {
							verticalMiddleH = verticalMiddleH - 70;
							if ($slider.next('#header').length > 0) {
								verticalMiddleH = verticalMiddleH + headerHeight;
							}
						}
					}
					if ($body.hasClass('device-xs') || $body.hasClass('device-xxs')) {
						if (element.parents('.full-screen').length && !element.parents('.force-full-screen').length) {
							if (element.children('.col-padding').length > 0) {
								element.css({
									position: 'relative',
									top: '0',
									width: 'auto',
									marginTop: '0'
								}).addClass('clearfix');
							} else {
								element.css({
									position: 'relative',
									top: '0',
									width: 'auto',
									marginTop: '0',
									paddingTop: '60px',
									paddingBottom: '60px'
								}).addClass('clearfix');
							}
						} else {
							element.css({
								position: 'absolute',
								top: '50%',
								width: '100%',
								paddingTop: '0',
								paddingBottom: '0',
								marginTop: -(verticalMiddleH / 2) + 'px'
							});
						}
					} else {
						element.css({
							position: 'absolute',
							top: '50%',
							width: '100%',
							paddingTop: '0',
							paddingBottom: '0',
							marginTop: -(verticalMiddleH / 2) + 'px'
						});
					}
				});
			}
		},
		stickyElements: function () {
			if ($siStickyEl.length > 0) {
				var siStickyH = $siStickyEl.outerHeight();
				$siStickyEl.css({
					marginTop: -(siStickyH / 2) + 'px'
				});
			}
			if ($dotsMenuEl.length > 0) {
				var opmdStickyH = $dotsMenuEl.outerHeight();
				$dotsMenuEl.css({
					marginTop: -(opmdStickyH / 2) + 'px'
				});
			}
		},
		goToTop: function () {
			var elementScrollSpeed = $goToTopEl.attr('data-speed'),
				elementScrollEasing = $goToTopEl.attr('data-easing');
			if (!elementScrollSpeed) {
				elementScrollSpeed = 700;
			}
			if (!elementScrollEasing) {
				elementScrollEasing = 'easeOutQuad';
			}
			$goToTopEl.click(function () {
				$('body,html').stop(true).animate({
					'scrollTop': 0
				}, Number(elementScrollSpeed), elementScrollEasing);
				return false;
			});
		},
		goToTopScroll: function () {
			var elementMobile = $goToTopEl.attr('data-mobile'),
				elementOffset = $goToTopEl.attr('data-offset');
			if (!elementOffset) {
				elementOffset = 450;
			}
			if (elementMobile != 'true' && ($body.hasClass('device-xs') || $body.hasClass('device-xxs'))) {
				return true;
			}
			if ($window.scrollTop() > Number(elementOffset)) {
				$goToTopEl.fadeIn();
			} else {
				$goToTopEl.fadeOut();
			}
		},
		fullScreen: function () {
			if ($fullScreenEl.length > 0) {
				$fullScreenEl.each(function () {
					var element = $(this),
						scrHeight = window.innerHeight ? window.innerHeight : $window.height(),
						negativeHeight = element.attr('data-negative-height');
					if (element.attr('id') == 'slider') {
						var sliderHeightOff = $slider.offset().top;
						scrHeight = scrHeight - sliderHeightOff;
						if (element.find('.slider-parallax-inner').length > 0) {
							var transformVal = element.find('.slider-parallax-inner').css('transform'),
								transformX = transformVal.match(/-?[\d\.]+/g);
							if (!transformX) {
								var transformXvalue = 0;
							} else {
								var transformXvalue = transformX[5];
							}
							scrHeight = ((window.innerHeight ? window.innerHeight : $window.height()) + Number(transformXvalue)) - sliderHeightOff;
						}
						if ($('#slider.with-header').next('#header:not(.transparent-header)').length > 0 && ($body.hasClass('device-lg') || $body.hasClass('device-md'))) {
							var headerHeightOff = $header.outerHeight();
							scrHeight = scrHeight - headerHeightOff;
						}
					}
					if (element.parents('.full-screen').length > 0) {
						scrHeight = element.parents('.full-screen').height();
					}
					if ($body.hasClass('device-xs') || $body.hasClass('device-xxs')) {
						if (!element.hasClass('force-full-screen')) {
							scrHeight = 'auto';
						}
					}
					if (negativeHeight) {
						scrHeight = scrHeight - Number(negativeHeight);
					}
					element.css('height', scrHeight);
					if (element.attr('id') == 'slider' && !element.hasClass('canvas-slider-grid')) {
						if (element.has('.swiper-slide')) {
							element.find('.swiper-slide').css('height', scrHeight);
						}
					}
				});
			}
		},
		maxHeight: function () {
			if ($commonHeightEl.length > 0) {
				if ($commonHeightEl.hasClass('customjs')) {
					return true;
				}
				$commonHeightEl.each(function () {
					var element = $(this);
					if (element.find('.common-height').length > 0) {
						SEMICOLON.initialize.commonHeight(element.find('.common-height:not(.customjs)'));
					}
					SEMICOLON.initialize.commonHeight(element);
				});
			}
		},
		commonHeight: function (element) {
			var maxHeight = 0;
			element.children('[class*=col-]').each(function () {
				var element = $(this).children();
				if (element.hasClass('max-height')) {
					maxHeight = element.outerHeight();
				} else {
					if (element.outerHeight() > maxHeight)
						maxHeight = element.outerHeight();
				}
			});
			element.children('[class*=col-]').each(function () {
				$(this).height(maxHeight);
			});
		},
		testimonialsGrid: function () {
			if ($testimonialsGridEl.length > 0) {
				if ($body.hasClass('device-sm') || $body.hasClass('device-md') || $body.hasClass('device-lg')) {
					var maxHeight = 0;
					$testimonialsGridEl.each(function () {
						$(this).find("li > .testimonial").each(function () {
							if ($(this).height() > maxHeight) {
								maxHeight = $(this).height();
							}
						});
						$(this).find("li").height(maxHeight);
						maxHeight = 0;
					});
				} else {
					$testimonialsGridEl.find("li").css({
						'height': 'auto'
					});
				}
			}
		},
		lightbox: function () {
			if (!$().magnificPopup) {
				console.log('lightbox: Magnific Popup not Defined.');
				return true;
			}
			var $lightboxImageEl = $('[data-lightbox="image"]'),
				$lightboxGalleryEl = $('[data-lightbox="gallery"]'),
				$lightboxIframeEl = $('[data-lightbox="iframe"]'),
				$lightboxInlineEl = $('[data-lightbox="inline"]'),
				$lightboxAjaxEl = $('[data-lightbox="ajax"]'),
				$lightboxAjaxGalleryEl = $('[data-lightbox="ajax-gallery"]');
			if ($lightboxImageEl.length > 0) {
				$lightboxImageEl.magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					closeBtnInside: false,
					fixedContentPos: true,
					mainClass: 'mfp-no-margins mfp-fade',
					image: {
						verticalFit: true
					}
				});
			}
			if ($lightboxGalleryEl.length > 0) {
				$lightboxGalleryEl.each(function () {
					var element = $(this);
					if (element.find('a[data-lightbox="gallery-item"]').parent('.clone').hasClass('clone')) {
						element.find('a[data-lightbox="gallery-item"]').parent('.clone').find('a[data-lightbox="gallery-item"]').attr('data-lightbox', '');
					}
					element.magnificPopup({
						delegate: 'a[data-lightbox="gallery-item"]',
						type: 'image',
						closeOnContentClick: true,
						closeBtnInside: false,
						fixedContentPos: true,
						mainClass: 'mfp-no-margins mfp-fade',
						image: {
							verticalFit: true
						},
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0, 1]
						}
					});
				});
			}
			if ($lightboxIframeEl.length > 0) {
				$lightboxIframeEl.magnificPopup({
					disableOn: 600,
					type: 'iframe',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});
			}
			if ($lightboxInlineEl.length > 0) {
				$lightboxInlineEl.magnificPopup({
					type: 'inline',
					mainClass: 'mfp-no-margins mfp-fade',
					closeBtnInside: false,
					fixedContentPos: true
				});
			}
			if ($lightboxAjaxEl.length > 0) {
				$lightboxAjaxEl.magnificPopup({
					type: 'ajax',
					closeBtnInside: false,
					callbacks: {
						ajaxContentAdded: function (mfpResponse) {
							SEMICOLON.widget.loadFlexSlider();
							SEMICOLON.initialize.resizeVideos();
							SEMICOLON.widget.masonryThumbs();
						},
						open: function () {
							$body.addClass('ohidden');
						},
						close: function () {
							$body.removeClass('ohidden');
						}
					}
				});
			}
			if ($lightboxAjaxGalleryEl.length > 0) {
				$lightboxAjaxGalleryEl.magnificPopup({
					delegate: 'a[data-lightbox="ajax-gallery-item"]',
					type: 'ajax',
					closeBtnInside: false,
					gallery: {
						enabled: true,
						preload: 0,
						navigateByImgClick: false
					},
					callbacks: {
						ajaxContentAdded: function (mfpResponse) {
							SEMICOLON.widget.loadFlexSlider();
							SEMICOLON.initialize.resizeVideos();
							SEMICOLON.widget.masonryThumbs();
						},
						open: function () {
							$body.addClass('ohidden');
						},
						close: function () {
							$body.removeClass('ohidden');
						}
					}
				});
			}
		},
		modal: function () {
			if (!$().magnificPopup) {
				console.log('modal: Magnific Popup not Defined.');
				return true;
			}
			var $modal = $('.modal-on-load:not(.customjs)');
			if ($modal.length > 0) {
				$modal.each(function () {
					var element = $(this),
						elementTarget = element.attr('data-target'),
						elementTargetValue = elementTarget.split('#')[1],
						elementDelay = element.attr('data-delay'),
						elementTimeout = element.attr('data-timeout'),
						elementAnimateIn = element.attr('data-animate-in'),
						elementAnimateOut = element.attr('data-animate-out');
					if (!element.hasClass('enable-cookie')) {
						$.removeCookie(elementTargetValue);
					}
					if (element.hasClass('enable-cookie')) {
						var elementCookie = $.cookie(elementTargetValue);
						if (typeof elementCookie !== 'undefined' && elementCookie == '0') {
							return true;
						}
					}
					if (!elementDelay) {
						elementDelay = 1500;
					} else {
						elementDelay = Number(elementDelay) + 1500;
					}
					var t = setTimeout(function () {
						$.magnificPopup.open({
							items: {
								src: elementTarget
							},
							type: 'inline',
							mainClass: 'mfp-no-margins mfp-fade',
							closeBtnInside: false,
							fixedContentPos: true,
							removalDelay: 500,
							callbacks: {
								open: function () {
									if (elementAnimateIn != '') {
										$(elementTarget).addClass(elementAnimateIn + ' animated');
									}
								},
								beforeClose: function () {
									if (elementAnimateOut != '') {
										$(elementTarget).removeClass(elementAnimateIn).addClass(elementAnimateOut);
									}
								},
								afterClose: function () {
									if (elementAnimateIn != '' || elementAnimateOut != '') {
										$(elementTarget).removeClass(elementAnimateIn + ' ' + elementAnimateOut + ' animated');
									}
									if (element.hasClass('enable-cookie')) {
										$.cookie(elementTargetValue, '0');
									}
								}
							}
						}, 0);
					}, Number(elementDelay));
					if (elementTimeout != '') {
						var to = setTimeout(function () {
							$.magnificPopup.close();
						}, Number(elementDelay) + Number(elementTimeout));
					}
				});
			}
		},
		resizeVideos: function () {
			if (!$().fitVids) {
				console.log('resizeVideos: FitVids not Defined.');
				return true;
			}
			$("#content,#footer,#slider:not(.revslider-wrap),.landing-offer-media,.portfolio-ajax-modal,.mega-menu-column").fitVids({
				customSelector: "iframe[src^='http://www.dailymotion.com/embed'], iframe[src*='maps.google.com'], iframe[src*='google.com/maps']",
				ignore: '.no-fv'
			});
		},
		imageFade: function () {
			$('.image_fade').hover(function () {
				$(this).filter(':not(:animated)').animate({
					opacity: 0.8
				}, 400);
			}, function () {
				$(this).animate({
					opacity: 1
				}, 400);
			});
		},
		blogTimelineEntries: function () {
			$('.post-timeline.grid-2').find('.entry').each(function () {
				var position = $(this).inlineStyle('left');
				if (position == '0px') {
					$(this).removeClass('alt');
				} else {
					$(this).addClass('alt');
				}
				$(this).find('.entry-timeline').fadeIn();
			});
		},
		pageTransition: function () {
			if ($body.hasClass('no-transition')) {
				return true;
			}
			if (!$().animsition) {
				$body.addClass('no-transition');
				console.log('pageTransition: Animsition not Defined.');
				return true;
			}
			window.onpageshow = function (event) {
				if (event.persisted) {
					window.location.reload();
				}
			};
			var animationIn = $body.attr('data-animation-in'),
				animationOut = $body.attr('data-animation-out'),
				durationIn = $body.attr('data-speed-in'),
				durationOut = $body.attr('data-speed-out'),
				loaderTimeOut = $body.attr('data-loader-timeout'),
				loaderStyle = $body.attr('data-loader'),
				loaderColor = $body.attr('data-loader-color'),
				loaderStyleHtml = $body.attr('data-loader-html'),
				loaderBgStyle = '',
				loaderBorderStyle = '',
				loaderBgClass = '',
				loaderBorderClass = '',
				loaderBgClass2 = '',
				loaderBorderClass2 = '';
			if (!animationIn) {
				animationIn = 'fadeIn';
			}
			if (!animationOut) {
				animationOut = 'fadeOut';
			}
			if (!durationIn) {
				durationIn = 1500;
			}
			if (!durationOut) {
				durationOut = 800;
			}
			if (!loaderStyleHtml) {
				loaderStyleHtml = '<div class="css3-spinner-bounce1"></div><div class="css3-spinner-bounce2"></div><div class="css3-spinner-bounce3"></div>';
			}
			if (!loaderTimeOut) {
				loaderTimeOut = false;
			} else {
				loaderTimeOut = Number(loaderTimeOut);
			}
			if (loaderColor) {
				if (loaderColor == 'theme') {
					loaderBgClass = ' bgcolor';
					loaderBorderClass = ' border-color';
					loaderBgClass2 = ' class="bgcolor"';
					loaderBorderClass2 = ' class="border-color"';
				} else {
					loaderBgStyle = ' style="background-color:' + loaderColor + ';"';
					loaderBorderStyle = ' style="border-color:' + loaderColor + ';"';
				}
				loaderStyleHtml = '<div class="css3-spinner-bounce1' + loaderBgClass + '"' + loaderBgStyle + '></div><div class="css3-spinner-bounce2' + loaderBgClass + '"' + loaderBgStyle + '></div><div class="css3-spinner-bounce3' + loaderBgClass + '"' + loaderBgStyle + '></div>'
			}
			if (loaderStyle == '2') {
				loaderStyleHtml = '<div class="css3-spinner-flipper' + loaderBgClass + '"' + loaderBgStyle + '></div>';
			} else if (loaderStyle == '3') {
				loaderStyleHtml = '<div class="css3-spinner-double-bounce1' + loaderBgClass + '"' + loaderBgStyle + '></div><div class="css3-spinner-double-bounce2' + loaderBgClass + '"' + loaderBgStyle + '></div>';
			} else if (loaderStyle == '4') {
				loaderStyleHtml = '<div class="css3-spinner-rect1' + loaderBgClass + '"' + loaderBgStyle + '></div><div class="css3-spinner-rect2' + loaderBgClass + '"' + loaderBgStyle + '></div><div class="css3-spinner-rect3' + loaderBgClass + '"' + loaderBgStyle + '></div><div class="css3-spinner-rect4' + loaderBgClass + '"' + loaderBgStyle + '></div><div class="css3-spinner-rect5' + loaderBgClass + '"' + loaderBgStyle + '></div>';
			} else if (loaderStyle == '5') {
				loaderStyleHtml = '<div class="css3-spinner-cube1' + loaderBgClass + '"' + loaderBgStyle + '></div><div class="css3-spinner-cube2' + loaderBgClass + '"' + loaderBgStyle + '></div>';
			} else if (loaderStyle == '6') {
				loaderStyleHtml = '<div class="css3-spinner-scaler' + loaderBgClass + '"' + loaderBgStyle + '></div>';
			} else if (loaderStyle == '7') {
				loaderStyleHtml = '<div class="css3-spinner-grid-pulse"><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div></div>';
			} else if (loaderStyle == '8') {
				loaderStyleHtml = '<div class="css3-spinner-clip-rotate"><div' + loaderBorderClass2 + loaderBorderStyle + '></div></div>';
			} else if (loaderStyle == '9') {
				loaderStyleHtml = '<div class="css3-spinner-ball-rotate"><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div></div>';
			} else if (loaderStyle == '10') {
				loaderStyleHtml = '<div class="css3-spinner-zig-zag"><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div></div>';
			} else if (loaderStyle == '11') {
				loaderStyleHtml = '<div class="css3-spinner-triangle-path"><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div></div>';
			} else if (loaderStyle == '12') {
				loaderStyleHtml = '<div class="css3-spinner-ball-scale-multiple"><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div></div>';
			} else if (loaderStyle == '13') {
				loaderStyleHtml = '<div class="css3-spinner-ball-pulse-sync"><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div><div' + loaderBgClass2 + loaderBgStyle + '></div></div>';
			} else if (loaderStyle == '14') {
				loaderStyleHtml = '<div class="css3-spinner-scale-ripple"><div' + loaderBorderClass2 + loaderBorderStyle + '></div><div' + loaderBorderClass2 + loaderBorderStyle + '></div><div' + loaderBorderClass2 + loaderBorderStyle + '></div></div>';
			}
			$wrapper.animsition({
				inClass: animationIn,
				outClass: animationOut,
				inDuration: Number(durationIn),
				outDuration: Number(durationOut),
				linkElement: '#primary-menu ul li a:not([target="_blank"]):not([href*=#]):not([data-lightbox])',
				loading: true,
				loadingParentElement: 'body',
				loadingClass: 'css3-spinner',
				loadingHtml: loaderStyleHtml,
				unSupportCss: ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'],
				overlay: false,
				overlayClass: 'animsition-overlay-slide',
				overlayParentElement: 'body',
				timeOut: loaderTimeOut
			});
		},
		lazyLoad: function () {
			var lazyLoadEl = $('[data-lazyload]');
			if (lazyLoadEl.length > 0) {
				lazyLoadEl.each(function () {
					var element = $(this),
						elementImg = element.attr('data-lazyload');
					element.attr('src', 'images/blank.svg').css({
						'background': 'url(images/preloader.gif) no-repeat center center #FFF'
					});
					element.appear(function () {
						element.css({
							'background': 'none'
						}).removeAttr('width').removeAttr('height').attr('src', elementImg);
					}, {
						accX: 0,
						accY: 120
					}, 'easeInCubic');
				});
			}
		},
		topScrollOffset: function () {
			var topOffsetScroll = 0;
			if (($body.hasClass('device-lg') || $body.hasClass('device-md')) && !SEMICOLON.isMobile.any()) {
				if ($header.hasClass('sticky-header')) {
					if ($pagemenu.hasClass('dots-menu')) {
						topOffsetScroll = 100;
					} else {
						topOffsetScroll = 144;
					}
				} else {
					if ($pagemenu.hasClass('dots-menu')) {
						topOffsetScroll = 140;
					} else {
						topOffsetScroll = 184;
					}
				}
				if (!$pagemenu.length) {
					if ($header.hasClass('sticky-header')) {
						topOffsetScroll = 100;
					} else {
						topOffsetScroll = 140;
					}
				}
			} else {
				topOffsetScroll = 40;
			}
			return topOffsetScroll;
		},
		defineColumns: function (element) {
			var column = 4;
			if (element.hasClass('portfolio-full')) {
				if (element.hasClass('portfolio-3')) column = 3;
				else if (element.hasClass('portfolio-5')) column = 5;
				else if (element.hasClass('portfolio-6')) column = 6;
				else column = 4;
				if ($body.hasClass('device-sm') && (column == 4 || column == 5 || column == 6)) {
					column = 3;
				} else if ($body.hasClass('device-xs') && (column == 3 || column == 4 || column == 5 || column == 6)) {
					column = 2;
				} else if ($body.hasClass('device-xxs')) {
					column = 1;
				}
			} else if (element.hasClass('masonry-thumbs')) {
				var lgCol = element.attr('data-lg-col'),
					mdCol = element.attr('data-md-col'),
					smCol = element.attr('data-sm-col'),
					xsCol = element.attr('data-xs-col'),
					xxsCol = element.attr('data-xxs-col');
				if (element.hasClass('col-2')) column = 2;
				else if (element.hasClass('col-3')) column = 3;
				else if (element.hasClass('col-5')) column = 5;
				else if (element.hasClass('col-6')) column = 6;
				else column = 4;
				if ($body.hasClass('device-lg')) {
					if (lgCol) {
						column = Number(lgCol);
					}
				} else if ($body.hasClass('device-md')) {
					if (mdCol) {
						column = Number(mdCol);
					}
				} else if ($body.hasClass('device-sm')) {
					if (smCol) {
						column = Number(smCol);
					}
				} else if ($body.hasClass('device-xs')) {
					if (xsCol) {
						column = Number(xsCol);
					}
				} else if ($body.hasClass('device-xxs')) {
					if (xxsCol) {
						column = Number(xxsCol);
					}
				}
			}
			return column;
		},
		setFullColumnWidth: function (element) {
			if (!$().isotope) {
				console.log('setFullColumnWidth: Isotope not Defined.');
				return true;
			}
			element.css({
				'width': ''
			});
			if (element.hasClass('portfolio-full')) {
				var columns = SEMICOLON.initialize.defineColumns(element);
				var containerWidth = element.width();
				if (containerWidth == (Math.floor(containerWidth / columns) * columns)) {
					containerWidth = containerWidth - 1;
				}
				var postWidth = Math.floor(containerWidth / columns);
				if ($body.hasClass('device-xxs')) {
					var deviceSmallest = 1;
				} else {
					var deviceSmallest = 0;
				}
				element.find(".portfolio-item").each(function (index) {
					if (deviceSmallest == 0 && $(this).hasClass('wide')) {
						var elementSize = (postWidth * 2);
					} else {
						var elementSize = postWidth;
					}
					$(this).css({
						"width": elementSize + "px"
					});
				});
			} else if (element.hasClass('masonry-thumbs')) {
				var columns = SEMICOLON.initialize.defineColumns(element),
					containerWidth = element.innerWidth();
				if (containerWidth == windowWidth) {
					containerWidth = windowWidth * 1.004;
					element.css({
						'width': containerWidth + 'px'
					});
				}
				var postWidth = (containerWidth / columns);
				postWidth = Math.floor(postWidth);
				if ((postWidth * columns) >= containerWidth) {
					element.css({
						'margin-right': '-1px'
					});
				}
				element.children('a').css({
					"width": postWidth + "px"
				});
				var firstElementWidth = element.find('a:eq(0)').outerWidth();
				element.isotope({
					masonry: {
						columnWidth: firstElementWidth
					}
				});
				var bigImageNumbers = element.attr('data-big');
				if (bigImageNumbers) {
					bigImageNumbers = bigImageNumbers.split(",");
					var bigImageNumber = '',
						bigi = '';
					for (bigi = 0; bigi < bigImageNumbers.length; bigi++) {
						bigImageNumber = Number(bigImageNumbers[bigi]) - 1;
						element.find('a:eq(' + bigImageNumber + ')').css({
							width: firstElementWidth * 2 + 'px'
						});
					}
					var t = setTimeout(function () {
						element.isotope('layout');
					}, 1000);
				}
			}
		},
		aspectResizer: function () {
			var $aspectResizerEl = $('.aspect-resizer');
			if ($aspectResizerEl.length > 0) {
				$aspectResizerEl.each(function () {
					var element = $(this),
						elementW = element.inlineStyle('width'),
						elementH = element.inlineStyle('height'),
						elementPW = element.parent().innerWidth();
				});
			}
		},
		dataResponsiveClasses: function () {
			var $dataClassXxs = $('[data-class-xxs]'),
				$dataClassXs = $('[data-class-xs]'),
				$dataClassSm = $('[data-class-sm]'),
				$dataClassMd = $('[data-class-md]'),
				$dataClassLg = $('[data-class-lg]');
			if ($dataClassXxs.length > 0) {
				$dataClassXxs.each(function () {
					var element = $(this),
						elementClass = element.attr('data-class-xxs'),
						elementClassDelete = element.attr('data-class-xs') + ' ' + element.attr('data-class-sm') + ' ' + element.attr('data-class-md') + ' ' + element.attr('data-class-lg');
					if ($body.hasClass('device-xxs')) {
						element.removeClass(elementClassDelete);
						element.addClass(elementClass);
					}
				});
			}
			if ($dataClassXs.length > 0) {
				$dataClassXs.each(function () {
					var element = $(this),
						elementClass = element.attr('data-class-xs'),
						elementClassDelete = element.attr('data-class-xxs') + ' ' + element.attr('data-class-sm') + ' ' + element.attr('data-class-md') + ' ' + element.attr('data-class-lg');
					if ($body.hasClass('device-xs')) {
						element.removeClass(elementClassDelete);
						element.addClass(elementClass);
					}
				});
			}
			if ($dataClassSm.length > 0) {
				$dataClassSm.each(function () {
					var element = $(this),
						elementClass = element.attr('data-class-sm'),
						elementClassDelete = element.attr('data-class-xxs') + ' ' + element.attr('data-class-xs') + ' ' + element.attr('data-class-md') + ' ' + element.attr('data-class-lg');
					if ($body.hasClass('device-sm')) {
						element.removeClass(elementClassDelete);
						element.addClass(elementClass);
					}
				});
			}
			if ($dataClassMd.length > 0) {
				$dataClassMd.each(function () {
					var element = $(this),
						elementClass = element.attr('data-class-md'),
						elementClassDelete = element.attr('data-class-xxs') + ' ' + element.attr('data-class-xs') + ' ' + element.attr('data-class-sm') + ' ' + element.attr('data-class-lg');
					if ($body.hasClass('device-md')) {
						element.removeClass(elementClassDelete);
						element.addClass(elementClass);
					}
				});
			}
			if ($dataClassLg.length > 0) {
				$dataClassLg.each(function () {
					var element = $(this),
						elementClass = element.attr('data-class-lg'),
						elementClassDelete = element.attr('data-class-xxs') + ' ' + element.attr('data-class-xs') + ' ' + element.attr('data-class-sm') + ' ' + element.attr('data-class-md');
					if ($body.hasClass('device-lg')) {
						element.removeClass(elementClassDelete);
						element.addClass(elementClass);
					}
				});
			}
		},
		dataResponsiveHeights: function () {
			var $dataHeightXxs = $('[data-height-xxs]'),
				$dataHeightXs = $('[data-height-xs]'),
				$dataHeightSm = $('[data-height-sm]'),
				$dataHeightMd = $('[data-height-md]'),
				$dataHeightLg = $('[data-height-lg]');
			if ($dataHeightXxs.length > 0) {
				$dataHeightXxs.each(function () {
					var element = $(this),
						elementHeight = element.attr('data-height-xxs');
					if ($body.hasClass('device-xxs')) {
						if (elementHeight != '') {
							element.css('height', elementHeight);
						}
					}
				});
			}
			if ($dataHeightXs.length > 0) {
				$dataHeightXs.each(function () {
					var element = $(this),
						elementHeight = element.attr('data-height-xs');
					if ($body.hasClass('device-xs')) {
						if (elementHeight != '') {
							element.css('height', elementHeight);
						}
					}
				});
			}
			if ($dataHeightSm.length > 0) {
				$dataHeightSm.each(function () {
					var element = $(this),
						elementHeight = element.attr('data-height-sm');
					if ($body.hasClass('device-sm')) {
						if (elementHeight != '') {
							element.css('height', elementHeight);
						}
					}
				});
			}
			if ($dataHeightMd.length > 0) {
				$dataHeightMd.each(function () {
					var element = $(this),
						elementHeight = element.attr('data-height-md');
					if ($body.hasClass('device-md')) {
						if (elementHeight != '') {
							element.css('height', elementHeight);
						}
					}
				});
			}
			if ($dataHeightLg.length > 0) {
				$dataHeightLg.each(function () {
					var element = $(this),
						elementHeight = element.attr('data-height-lg');
					if ($body.hasClass('device-lg')) {
						if (elementHeight != '') {
							element.css('height', elementHeight);
						}
					}
				});
			}
		},
		stickFooterOnSmall: function () {
			var windowH = $window.height(),
				wrapperH = $wrapper.height();
			if (!$body.hasClass('sticky-footer') && $footer.length > 0 && $wrapper.has('#footer')) {
				if (windowH > wrapperH) {
					$footer.css({
						'margin-top': (windowH - wrapperH)
					});
				}
			}
		},
		stickyFooter: function () {
			if ($body.hasClass('sticky-footer') && $footer.length > 0 && ($body.hasClass('device-lg') || $body.hasClass('device-md'))) {
				var stickyFooter = $footer.outerHeight();
				$content.css({
					'margin-bottom': stickyFooter
				});
			} else {
				$content.css({
					'margin-bottom': 0
				});
			}
		}
	};
	SEMICOLON.header = {
		init: function () {
			SEMICOLON.header.superfish();
			SEMICOLON.header.menufunctions();
			SEMICOLON.header.fullWidthMenu();
			SEMICOLON.header.overlayMenu();
			SEMICOLON.header.stickyMenu();
			SEMICOLON.header.stickyPageMenu();
			SEMICOLON.header.sideHeader();
			SEMICOLON.header.sidePanel();
			SEMICOLON.header.onePageScroll();
			SEMICOLON.header.onepageScroller();
			SEMICOLON.header.logo();
			SEMICOLON.header.topsearch();
			SEMICOLON.header.topcart();
		},
		superfish: function () {
			if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
				$('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', 'block');
				SEMICOLON.header.menuInvert();
				$('#primary-menu ul ul, #primary-menu ul .mega-menu-content').css('display', '');
			}
			if (!$().superfish) {
				$body.addClass('no-superfish');
				console.log('superfish: Superfish not Defined.');
				return true;
			}
			$('body:not(.side-header) #primary-menu > ul, body:not(.side-header) #primary-menu > div > ul, .top-links > ul').superfish({
				popUpSelector: 'ul,.mega-menu-content,.top-link-section',
				delay: 250,
				speed: 350,
				animation: {
					opacity: 'show'
				},
				animationOut: {
					opacity: 'hide'
				},
				cssArrows: false,
				onShow: function () {
					var megaMenuContent = $(this);
					if (megaMenuContent.find('.owl-carousel.customjs').length > 0) {
						megaMenuContent.find('.owl-carousel').removeClass('customjs');
						SEMICOLON.widget.carousel();
					}
					if (megaMenuContent.hasClass('mega-menu-content') && megaMenuContent.find('.widget').length > 0) {
						if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
							setTimeout(function () {
								SEMICOLON.initialize.commonHeight(megaMenuContent);
							}, 200);
						} else {
							megaMenuContent.children().height('');
						}
					}
				}
			});
			$('body.side-header #primary-menu > ul').superfish({
				popUpSelector: 'ul',
				delay: 250,
				speed: 350,
				animation: {
					opacity: 'show',
					height: 'show'
				},
				animationOut: {
					opacity: 'hide',
					height: 'hide'
				},
				cssArrows: false
			});
		},
		menuInvert: function () {
			$('#primary-menu .mega-menu-content, #primary-menu ul ul').each(function (index, element) {
				var $menuChildElement = $(element),
					menuChildOffset = $menuChildElement.offset(),
					menuChildWidth = $menuChildElement.width(),
					menuChildLeft = menuChildOffset.left;
				if (windowWidth - (menuChildWidth + menuChildLeft) < 0) {
					$menuChildElement.addClass('menu-pos-invert');
				}
			});
		},
		menufunctions: function () {
			$('#primary-menu ul li:has(ul)').addClass('sub-menu');
			$('.top-links ul li:has(ul) > a, #primary-menu.with-arrows > ul > li:has(ul) > a > div, #primary-menu.with-arrows > div > ul > li:has(ul) > a > div, #page-menu nav ul li:has(ul) > a > div').append('<i class="icon-angle-down"></i>');
			$('.top-links > ul').addClass('clearfix');
			if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
				$('#primary-menu.sub-title > ul > li').hover(function () {
					$(this).prev().css({
						backgroundImage: 'none'
					});
				}, function () {
					$(this).prev().css({
						backgroundImage: 'url("images/icons/menu-divider.png")'
					});
				});
				$('#primary-menu.sub-title').children('ul').children('.current').prev().css({
					backgroundImage: 'none'
				});
			}
			if (SEMICOLON.isMobile.Android()) {
				$('#primary-menu ul li.sub-menu').children('a').on('touchstart', function (e) {
					if (!$(this).parent('li.sub-menu').hasClass('sfHover')) {
						e.preventDefault();
					}
				});
			}
			if (SEMICOLON.isMobile.Windows()) {
				if ($().superfish) {
					$('#primary-menu > ul, #primary-menu > div > ul,.top-links > ul').superfish('destroy').addClass('windows-mobile-menu');
				} else {
					$('#primary-menu > ul, #primary-menu > div > ul,.top-links > ul').addClass('windows-mobile-menu');
					console.log('menufunctions: Superfish not defined.');
				}
				$('#primary-menu ul li:has(ul)').append('<a href="#" class="wn-submenu-trigger"><i class="icon-angle-down"></i></a>');
				$('#primary-menu ul li.sub-menu').children('a.wn-submenu-trigger').click(function (e) {
					$(this).parent().toggleClass('open');
					$(this).parent().find('> ul, > .mega-menu-content').stop(true, true).toggle();
					return false;
				});
			}
		},
		fullWidthMenu: function () {
			if ($body.hasClass('stretched')) {
				if ($header.find('.container-fullwidth').length > 0) {
					$('.mega-menu .mega-menu-content').css({
						'width': $wrapper.width() - 120
					});
				}
				if ($header.hasClass('full-header')) {
					$('.mega-menu .mega-menu-content').css({
						'width': $wrapper.width() - 60
					});
				}
			} else {
				if ($header.find('.container-fullwidth').length > 0) {
					$('.mega-menu .mega-menu-content').css({
						'width': $wrapper.width() - 120
					});
				}
				if ($header.hasClass('full-header')) {
					$('.mega-menu .mega-menu-content').css({
						'width': $wrapper.width() - 80
					});
				}
			}
		},
		overlayMenu: function () {
			if ($body.hasClass('overlay-menu')) {
				var overlayMenuItem = $('#primary-menu').children('ul').children('li'),
					overlayMenuItemHeight = overlayMenuItem.outerHeight(),
					overlayMenuItemTHeight = overlayMenuItem.length * overlayMenuItemHeight,
					firstItemOffset = ($window.height() - overlayMenuItemTHeight) / 2;
				$('#primary-menu').children('ul').children('li:first-child').css({
					'margin-top': firstItemOffset + 'px'
				});
			}
		},
		stickyMenu: function (headerOffset) {
			if ($window.scrollTop() > headerOffset) {
				if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
					$('body:not(.side-header) #header:not(.no-sticky)').addClass('sticky-header');
					if (!$headerWrap.hasClass('force-not-dark')) {
						$headerWrap.removeClass('not-dark');
					}
					SEMICOLON.header.stickyMenuClass();
				} else if ($body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm')) {
					if ($body.hasClass('sticky-responsive-menu')) {
						$('#header:not(.no-sticky)').addClass('responsive-sticky-header');
						SEMICOLON.header.stickyMenuClass();
					}
				}
			} else {
				SEMICOLON.header.removeStickyness();
			}
		},
		stickyPageMenu: function (pageMenuOffset) {
			if ($window.scrollTop() > pageMenuOffset) {
				if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
					$('#page-menu:not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
				} else if ($body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm')) {
					if ($body.hasClass('sticky-responsive-pagemenu')) {
						$('#page-menu:not(.dots-menu,.no-sticky)').addClass('sticky-page-menu');
					}
				}
			} else {
				$('#page-menu:not(.dots-menu,.no-sticky)').removeClass('sticky-page-menu');
			}
		},
		removeStickyness: function () {
			if ($header.hasClass('sticky-header')) {
				$('body:not(.side-header) #header:not(.no-sticky)').removeClass('sticky-header');
				$header.removeClass().addClass(oldHeaderClasses);
				$headerWrap.removeClass().addClass(oldHeaderWrapClasses);
				if (!$headerWrap.hasClass('force-not-dark')) {
					$headerWrap.removeClass('not-dark');
				}
				SEMICOLON.slider.swiperSliderMenu();
				SEMICOLON.slider.revolutionSliderMenu();
			}
			if ($header.hasClass('responsive-sticky-header')) {
				$('body.sticky-responsive-menu #header').removeClass('responsive-sticky-header');
			}
			if (($body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm')) && (typeof responsiveMenuClasses === 'undefined')) {
				$header.removeClass().addClass(oldHeaderClasses);
				$headerWrap.removeClass().addClass(oldHeaderWrapClasses);
				if (!$headerWrap.hasClass('force-not-dark')) {
					$headerWrap.removeClass('not-dark');
				}
			}
		},
		sideHeader: function () {
			$("#header-trigger").click(function () {
				$('body.open-header').toggleClass("side-header-open");
				return false;
			});
		},
		sidePanel: function () {
			$(".side-panel-trigger").click(function () {
				$body.toggleClass("side-panel-open");
				if ($body.hasClass('device-touch')) {
					$body.toggleClass("ohidden");
				}
				return false;
			});
		},
		onePageScroll: function () {
			if ($onePageMenuEl.length > 0) {
				var onePageSpeed = $onePageMenuEl.attr('data-speed'),
					onePageOffset = $onePageMenuEl.attr('data-offset'),
					onePageEasing = $onePageMenuEl.attr('data-easing');
				if (!onePageSpeed) {
					onePageSpeed = 1000;
				}
				if (!onePageEasing) {
					onePageEasing = 'easeOutQuad';
				}
				$onePageMenuEl.find('a[data-href]').click(function () {
					var element = $(this),
						divScrollToAnchor = element.attr('data-href'),
						divScrollSpeed = element.attr('data-speed'),
						divScrollOffset = element.attr('data-offset'),
						divScrollEasing = element.attr('data-easing');
					if ($(divScrollToAnchor).length > 0) {
						if (!onePageOffset) {
							var onePageOffsetG = SEMICOLON.initialize.topScrollOffset();
						} else {
							var onePageOffsetG = onePageOffset;
						}
						if (!divScrollSpeed) {
							divScrollSpeed = onePageSpeed;
						}
						if (!divScrollOffset) {
							divScrollOffset = onePageOffsetG;
						}
						if (!divScrollEasing) {
							divScrollEasing = onePageEasing;
						}
						if ($onePageMenuEl.hasClass('no-offset')) {
							divScrollOffset = 0;
						}
						onePageGlobalOffset = Number(divScrollOffset);
						$onePageMenuEl.find('li').removeClass('current');
						$onePageMenuEl.find('a[data-href="' + divScrollToAnchor + '"]').parent('li').addClass('current');
						if (windowWidth < 768 || $body.hasClass('overlay-menu')) {
							if ($('#primary-menu').find('ul.mobile-primary-menu').length > 0) {
								$('#primary-menu > ul.mobile-primary-menu, #primary-menu > div > ul.mobile-primary-menu').toggleClass('show', function () {
									$('html,body').stop(true).animate({
										'scrollTop': $(divScrollToAnchor).offset().top - Number(divScrollOffset)
									}, Number(divScrollSpeed), divScrollEasing);
								}, false);
							} else {
								$('#primary-menu > ul, #primary-menu > div > ul').toggleClass('show', function () {
									$('html,body').stop(true).animate({
										'scrollTop': $(divScrollToAnchor).offset().top - Number(divScrollOffset)
									}, Number(divScrollSpeed), divScrollEasing);
								}, false);
							}
						} else {
							$('html,body').stop(true).animate({
								'scrollTop': $(divScrollToAnchor).offset().top - Number(divScrollOffset)
							}, Number(divScrollSpeed), divScrollEasing);
						}
						onePageGlobalOffset = Number(divScrollOffset);
					}
					return false;
				});
			}
		},
		onepageScroller: function () {
			$onePageMenuEl.find('li').removeClass('current');
			$onePageMenuEl.find('a[data-href="#' + SEMICOLON.header.onePageCurrentSection() + '"]').parent('li').addClass('current');
		},
		onePageCurrentSection: function () {
			var currentOnePageSection = 'home',
				headerHeight = $headerWrap.outerHeight();
			if ($body.hasClass('side-header')) {
				headerHeight = 0;
			}
			$pageSectionEl.each(function (index) {
				var h = $(this).offset().top;
				var y = $window.scrollTop();
				var offsetScroll = headerHeight + onePageGlobalOffset;
				if (y + offsetScroll >= h && y < h + $(this).height() && $(this).attr('id') != currentOnePageSection) {
					currentOnePageSection = $(this).attr('id');
				}
			});
			return currentOnePageSection;
		},
		logo: function () {
			if (($header.hasClass('dark') || $body.hasClass('dark')) && !$headerWrap.hasClass('not-dark')) {
				if (defaultDarkLogo) {
					defaultLogo.find('img').attr('src', defaultDarkLogo);
				}
				if (retinaDarkLogo) {
					retinaLogo.find('img').attr('src', retinaDarkLogo);
				}
			} else {
				if (defaultLogoImg) {
					defaultLogo.find('img').attr('src', defaultLogoImg);
				}
				if (retinaLogoImg) {
					retinaLogo.find('img').attr('src', retinaLogoImg);
				}
			}
			if ($header.hasClass('sticky-header')) {
				if (defaultStickyLogo) {
					defaultLogo.find('img').attr('src', defaultStickyLogo);
				}
				if (retinaStickyLogo) {
					retinaLogo.find('img').attr('src', retinaStickyLogo);
				}
			}
			if ($body.hasClass('device-xs') || $body.hasClass('device-xxs')) {
				if (defaultMobileLogo) {
					defaultLogo.find('img').attr('src', defaultMobileLogo);
				}
				if (retinaMobileLogo) {
					retinaLogo.find('img').attr('src', retinaMobileLogo);
				}
			}
		},
		stickyMenuClass: function () {
			if (stickyMenuClasses) {
				var newClassesArray = stickyMenuClasses.split(/ +/);
			} else {
				var newClassesArray = '';
			}
			var noOfNewClasses = newClassesArray.length;
			if (noOfNewClasses > 0) {
				var i = 0;
				for (i = 0; i < noOfNewClasses; i++) {
					if (newClassesArray[i] == 'not-dark') {
						$header.removeClass('dark');
						$headerWrap.addClass('not-dark');
					} else if (newClassesArray[i] == 'dark') {
						$headerWrap.removeClass('not-dark force-not-dark');
						if (!$header.hasClass(newClassesArray[i])) {
							$header.addClass(newClassesArray[i]);
						}
					} else if (!$header.hasClass(newClassesArray[i])) {
						$header.addClass(newClassesArray[i]);
					}
				}
			}
		},
		responsiveMenuClass: function () {
			if ($body.hasClass('device-xs') || $body.hasClass('device-xxs') || $body.hasClass('device-sm')) {
				if (responsiveMenuClasses) {
					var newClassesArray = responsiveMenuClasses.split(/ +/);
				} else {
					var newClassesArray = '';
				}
				var noOfNewClasses = newClassesArray.length;
				if (noOfNewClasses > 0) {
					var i = 0;
					for (i = 0; i < noOfNewClasses; i++) {
						if (newClassesArray[i] == 'not-dark') {
							$header.removeClass('dark');
							$headerWrap.addClass('not-dark');
						} else if (newClassesArray[i] == 'dark') {
							$headerWrap.removeClass('not-dark force-not-dark');
							if (!$header.hasClass(newClassesArray[i])) {
								$header.addClass(newClassesArray[i]);
							}
						} else if (!$header.hasClass(newClassesArray[i])) {
							$header.addClass(newClassesArray[i]);
						}
					}
				}
				SEMICOLON.header.logo();
			}
		},
		topsocial: function () {
			if ($topSocialEl.length > 0) {
				if ($body.hasClass('device-md') || $body.hasClass('device-lg')) {
					$topSocialEl.show();
					$topSocialEl.find('a').css({
						width: 40
					});
					$topSocialEl.find('.ts-text').each(function () {
						var $clone = $(this).clone().css({
								'visibility': 'hidden',
								'display': 'inline-block',
								'font-size': '13px',
								'font-weight': 'bold'
							}).appendTo($body),
							cloneWidth = $clone.innerWidth() + 52;
						$(this).parent('a').attr('data-hover-width', cloneWidth);
						$clone.remove();
					});
					$topSocialEl.find('a').hover(function () {
						if ($(this).find('.ts-text').length > 0) {
							$(this).css({
								width: $(this).attr('data-hover-width')
							});
						}
					}, function () {
						$(this).css({
							width: 40
						});
					});
				} else {
					$topSocialEl.show();
					$topSocialEl.find('a').css({
						width: 40
					});
					$topSocialEl.find('a').each(function () {
						var topIconTitle = $(this).find('.ts-text').text();
						$(this).attr('title', topIconTitle);
					});
					$topSocialEl.find('a').hover(function () {
						$(this).css({
							width: 40
						});
					}, function () {
						$(this).css({
							width: 40
						});
					});
					if ($body.hasClass('device-xxs')) {
						$topSocialEl.hide();
						$topSocialEl.slice(0, 8).show();
					}
				}
			}
		},
		topsearch: function () {
			$(document).on('click', function (event) {
				if (!$(event.target).closest('#top-search').length) {
					$body.toggleClass('top-search-open', false);
				}
				if (!$(event.target).closest('#top-cart').length) {
					$topCart.toggleClass('top-cart-open', false);
				}
				if (!$(event.target).closest('#page-menu').length) {
					$pagemenu.toggleClass('pagemenu-active', false);
				}
				if (!$(event.target).closest('#side-panel').length) {
					$body.toggleClass('side-panel-open', false);
				}
			});
			$("#top-search-trigger").click(function (e) {
				$body.toggleClass('top-search-open');
				$topCart.toggleClass('top-cart-open', false);
				$('#primary-menu > ul, #primary-menu > div > ul').toggleClass("show", false);
				$pagemenu.toggleClass('pagemenu-active', false);
				if ($body.hasClass('top-search-open')) {
					$topSearch.find('input').focus();
				}
				e.stopPropagation();
				e.preventDefault();
			});
		},
		topcart: function () {
			$("#top-cart-trigger").click(function (e) {
				$pagemenu.toggleClass('pagemenu-active', false);
				$topCart.toggleClass('top-cart-open');
				e.stopPropagation();
				e.preventDefault();
			});
		}
	};
	SEMICOLON.slider = {
		init: function () {
			SEMICOLON.slider.sliderParallaxDimensions();
			SEMICOLON.slider.sliderRun();
			SEMICOLON.slider.sliderParallax();
			SEMICOLON.slider.sliderElementsFade();
			SEMICOLON.slider.captionPosition();
		},
		sliderParallaxDimensions: function () {
			if ($sliderParallaxEl.find('.slider-parallax-inner').length < 1) {
				return true;
			}
			var parallaxElHeight = $sliderParallaxEl.outerHeight(),
				parallaxElWidth = $sliderParallaxEl.outerWidth();
			if ($sliderParallaxEl.hasClass('revslider-wrap') || $sliderParallaxEl.find('.carousel-widget').length > 0) {
				parallaxElHeight = $sliderParallaxEl.find('.slider-parallax-inner').children().first().outerHeight();
				$sliderParallaxEl.height(parallaxElHeight);
			}
			$sliderParallaxEl.find('.slider-parallax-inner').height(parallaxElHeight);
			if ($body.hasClass('side-header')) {
				$sliderParallaxEl.find('.slider-parallax-inner').width(parallaxElWidth);
			}
			if (!$body.hasClass('stretched')) {
				parallaxElWidth = $wrapper.outerWidth();
				$sliderParallaxEl.find('.slider-parallax-inner').width(parallaxElWidth);
			}
			if (swiperSlider != '') {
				swiperSlider.update(true);
			}
		},
		sliderRun: function () {
			if (typeof Swiper === 'undefined') {
				console.log('sliderRun: Swiper not Defined.');
				return true;
			}
			if ($slider.hasClass('customjs')) {
				return true;
			}
			if ($slider.hasClass('swiper_wrapper')) {
				var element = $slider.filter('.swiper_wrapper'),
					elementDirection = element.attr('data-direction'),
					elementSpeed = element.attr('data-speed'),
					elementAutoPlay = element.attr('data-autoplay'),
					elementLoop = element.attr('data-loop'),
					elementEffect = element.attr('data-effect'),
					elementGrabCursor = element.attr('data-grab'),
					slideNumberTotal = element.find('#slide-number-total'),
					slideNumberCurrent = element.find('#slide-number-current'),
					sliderVideoAutoPlay = element.attr('data-video-autoplay');
				if (!elementSpeed) {
					elementSpeed = 300;
				}
				if (!elementDirection) {
					elementDirection = 'horizontal';
				}
				if (elementAutoPlay) {
					elementAutoPlay = Number(elementAutoPlay);
				}
				if (elementLoop == 'true') {
					elementLoop = true;
				} else {
					elementLoop = false;
				}
				if (!elementEffect) {
					elementEffect = 'slide';
				}
				if (elementGrabCursor == 'false') {
					elementGrabCursor = false;
				} else {
					elementGrabCursor = true;
				}
				if (sliderVideoAutoPlay == 'false') {
					sliderVideoAutoPlay = false;
				} else {
					sliderVideoAutoPlay = true;
				}
				if (element.find('.swiper-pagination').length > 0) {
					var elementPagination = '.swiper-pagination',
						elementPaginationClickable = true;
				} else {
					var elementPagination = '',
						elementPaginationClickable = false;
				}
				var elementNavNext = '#slider-arrow-right',
					elementNavPrev = '#slider-arrow-left';
				swiperSlider = new Swiper(element.find('.swiper-parent'), {
					direction: elementDirection,
					speed: Number(elementSpeed),
					autoplay: elementAutoPlay,
					loop: elementLoop,
					effect: elementEffect,
					slidesPerView: 1,
					grabCursor: elementGrabCursor,
					pagination: elementPagination,
					paginationClickable: elementPaginationClickable,
					prevButton: elementNavPrev,
					nextButton: elementNavNext,
					onInit: function (swiper) {
						SEMICOLON.slider.sliderParallaxDimensions();
						element.find('.yt-bg-player').removeClass('customjs');
						SEMICOLON.widget.youtubeBgVideo();
						$('.swiper-slide-active [data-caption-animate]').each(function () {
							var $toAnimateElement = $(this),
								toAnimateDelay = $toAnimateElement.attr('data-caption-delay'),
								toAnimateDelayTime = 0;
							if (toAnimateDelay) {
								toAnimateDelayTime = Number(toAnimateDelay) + 750;
							} else {
								toAnimateDelayTime = 750;
							}
							if (!$toAnimateElement.hasClass('animated')) {
								$toAnimateElement.addClass('not-animated');
								var elementAnimation = $toAnimateElement.attr('data-caption-animate');
								setTimeout(function () {
									$toAnimateElement.removeClass('not-animated').addClass(elementAnimation + ' animated');
								}, toAnimateDelayTime);
							}
						});
						$('[data-caption-animate]').each(function () {
							var $toAnimateElement = $(this),
								elementAnimation = $toAnimateElement.attr('data-caption-animate');
							if ($toAnimateElement.parents('.swiper-slide').hasClass('swiper-slide-active')) {
								return true;
							}
							$toAnimateElement.removeClass('animated').removeClass(elementAnimation).addClass('not-animated');
						});
						SEMICOLON.slider.swiperSliderMenu();
					},
					onSlideChangeStart: function (swiper) {
						if (slideNumberCurrent.length > 0) {
							if (elementLoop == true) {
								slideNumberCurrent.html(Number(element.find('.swiper-slide.swiper-slide-active').attr('data-swiper-slide-index')) + 1);
							} else {
								slideNumberCurrent.html(swiperSlider.activeIndex + 1);
							}
						}
						$('[data-caption-animate]').each(function () {
							var $toAnimateElement = $(this),
								elementAnimation = $toAnimateElement.attr('data-caption-animate');
							if ($toAnimateElement.parents('.swiper-slide').hasClass('swiper-slide-active')) {
								return true;
							}
							$toAnimateElement.removeClass('animated').removeClass(elementAnimation).addClass('not-animated');
						});
						SEMICOLON.slider.swiperSliderMenu();
					},
					onSlideChangeEnd: function (swiper) {
						element.find('.swiper-slide').each(function () {
							if (element.find('video').length > 0 && sliderVideoAutoPlay == true) {
								element.find('video').get(0).pause();
							}
							if (element.find('.yt-bg-player:not(.customjs)').length > 0) {
								element.find('.yt-bg-player:not(.customjs)').YTPPause();
							}
						});
						element.find('.swiper-slide:not(".swiper-slide-active")').each(function () {
							if (element.find('video').length > 0) {
								if (element.find('video').get(0).currentTime != 0) {
									element.find('video').get(0).currentTime = 0;
								}
							}
							if (element.find('.yt-bg-player:not(.customjs)').length > 0) {
								element.find('.yt-bg-player:not(.customjs)').getPlayer().seekTo(element.find('.yt-bg-player:not(.customjs)').attr('data-start'));
							}
						});
						if (element.find('.swiper-slide.swiper-slide-active').find('video').length > 0 && sliderVideoAutoPlay == true) {
							element.find('.swiper-slide.swiper-slide-active').find('video').get(0).play();
						}
						if (element.find('.swiper-slide.swiper-slide-active').find('.yt-bg-player:not(.customjs)').length > 0) {
							element.find('.swiper-slide.swiper-slide-active').find('.yt-bg-player:not(.customjs)').YTPPlay();
						}
						element.find('.swiper-slide.swiper-slide-active [data-caption-animate]').each(function () {
							var $toAnimateElement = $(this),
								toAnimateDelay = $toAnimateElement.attr('data-caption-delay'),
								toAnimateDelayTime = 0;
							if (toAnimateDelay) {
								toAnimateDelayTime = Number(toAnimateDelay) + 300;
							} else {
								toAnimateDelayTime = 300;
							}
							if (!$toAnimateElement.hasClass('animated')) {
								$toAnimateElement.addClass('not-animated');
								var elementAnimation = $toAnimateElement.attr('data-caption-animate');
								setTimeout(function () {
									$toAnimateElement.removeClass('not-animated').addClass(elementAnimation + ' animated');
								}, toAnimateDelayTime);
							}
						});
					}
				});
				if (slideNumberCurrent.length > 0) {
					if (elementLoop == true) {
						slideNumberCurrent.html(Number(element.find('.swiper-slide.swiper-slide-active').attr('data-swiper-slide-index')) + 1);
					} else {
						slideNumberCurrent.html(swiperSlider.activeIndex + 1);
					}
				}
				if (slideNumberTotal.length > 0) {
					slideNumberTotal.html(element.find('.swiper-slide:not(.swiper-slide-duplicate)').length);
				}
			}
		},
		sliderParallaxOffset: function () {
			var sliderParallaxOffsetTop = 0;
			var headerHeight = $header.outerHeight();
			if ($body.hasClass('side-header') || $header.hasClass('transparent-header')) {
				headerHeight = 0;
			}
			if ($pageTitle.length > 0) {
				var pageTitleHeight = $pageTitle.outerHeight();
				sliderParallaxOffsetTop = pageTitleHeight + headerHeight;
			} else {
				sliderParallaxOffsetTop = headerHeight;
			}
			if ($slider.next('#header').length > 0) {
				sliderParallaxOffsetTop = 0;
			}
			return sliderParallaxOffsetTop;
		},
		sliderParallax: function () {
			if ($sliderParallaxEl.length < 1) {
				return true;
			}
			var parallaxOffsetTop = SEMICOLON.slider.sliderParallaxOffset(),
				parallaxElHeight = $sliderParallaxEl.outerHeight();
			if (($body.hasClass('device-lg') || $body.hasClass('device-md')) && !SEMICOLON.isMobile.any()) {
				if ((parallaxElHeight + parallaxOffsetTop + 50) > $window.scrollTop()) {
					$sliderParallaxEl.addClass('slider-parallax-visible').removeClass('slider-parallax-invisible');
					if ($window.scrollTop() > parallaxOffsetTop) {
						if ($sliderParallaxEl.find('.slider-parallax-inner').length > 0) {
							var tranformAmount = (($window.scrollTop() - parallaxOffsetTop) * -.4).toFixed(0),
								tranformAmount2 = (($window.scrollTop() - parallaxOffsetTop) * -.15).toFixed(0);
							$sliderParallaxEl.find('.slider-parallax-inner').css({
								'transform': 'translateY(' + tranformAmount + 'px)'
							});
							$('.slider-parallax .slider-caption,.ei-title').css({
								'transform': 'translateY(' + tranformAmount2 + 'px)'
							});
						} else {
							var tranformAmount = (($window.scrollTop() - parallaxOffsetTop) / 1.5).toFixed(0),
								tranformAmount2 = (($window.scrollTop() - parallaxOffsetTop) / 7).toFixed(0);
							$sliderParallaxEl.css({
								'transform': 'translateY(' + tranformAmount + 'px)'
							});
							$('.slider-parallax .slider-caption,.ei-title').css({
								'transform': 'translateY(' + -tranformAmount2 + 'px)'
							});
						}
					} else {
						if ($sliderParallaxEl.find('.slider-parallax-inner').length > 0) {
							$('.slider-parallax-inner,.slider-parallax .slider-caption,.ei-title').css({
								'transform': 'translateY(0px)'
							});
						} else {
							$('.slider-parallax,.slider-parallax .slider-caption,.ei-title').css({
								'transform': 'translateY(0px)'
							});
						}
					}
				} else {
					$sliderParallaxEl.addClass('slider-parallax-invisible').removeClass('slider-parallax-visible');
				}
				if (requesting) {
					requestAnimationFrame(function () {
						SEMICOLON.slider.sliderParallax();
						SEMICOLON.slider.sliderElementsFade();
					});
				}
			} else {
				if ($sliderParallaxEl.find('.slider-parallax-inner').length > 0) {
					$('.slider-parallax-inner,.slider-parallax .slider-caption,.ei-title').css({
						'transform': 'translateY(0px)'
					});
				} else {
					$('.slider-parallax,.slider-parallax .slider-caption,.ei-title').css({
						'transform': 'translateY(0px)'
					});
				}
			}
		},
		sliderElementsFade: function () {
			if ($sliderParallaxEl.length > 0) {
				if (($body.hasClass('device-lg') || $body.hasClass('device-md')) && !SEMICOLON.isMobile.any()) {
					var parallaxOffsetTop = SEMICOLON.slider.sliderParallaxOffset(),
						parallaxElHeight = $sliderParallaxEl.outerHeight();
					if ($slider.length > 0) {
						if ($header.hasClass('transparent-header') || $('body').hasClass('side-header')) {
							var tHeaderOffset = 100;
						} else {
							var tHeaderOffset = 0;
						}
						$sliderParallaxEl.find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({
							'opacity': 1 - ((($window.scrollTop() - tHeaderOffset) * 1.85) / parallaxElHeight)
						});
					}
				} else {
					$sliderParallaxEl.find('#slider-arrow-left,#slider-arrow-right,.vertical-middle:not(.no-fade),.slider-caption,.ei-title,.camera_prev,.camera_next').css({
						'opacity': 1
					});
				}
			}
		},
		captionPosition: function () {
			$slider.find('.slider-caption:not(.custom-caption-pos)').each(function () {
				var scapHeight = $(this).outerHeight();
				var scapSliderHeight = $slider.outerHeight();
				if ($(this).parents('#slider').prev('#header').hasClass('transparent-header') && ($body.hasClass('device-lg') || $body.hasClass('device-md'))) {
					if ($(this).parents('#slider').prev('#header').hasClass('floating-header')) {
						$(this).css({
							top: (scapSliderHeight + 160 - scapHeight) / 2 + 'px'
						});
					} else {
						$(this).css({
							top: (scapSliderHeight + 100 - scapHeight) / 2 + 'px'
						});
					}
				} else {
					$(this).css({
						top: (scapSliderHeight - scapHeight) / 2 + 'px'
					});
				}
			});
		},
		swiperSliderMenu: function (onWinLoad) {
			onWinLoad = typeof onWinLoad !== 'undefined' ? onWinLoad : false;
			if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
				var activeSlide = $slider.find('.swiper-slide.swiper-slide-active');
				SEMICOLON.slider.headerSchemeChanger(activeSlide, onWinLoad);
			}
		},
		revolutionSliderMenu: function (onWinLoad) {
			onWinLoad = typeof onWinLoad !== 'undefined' ? onWinLoad : false;
			if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
				var activeSlide = $slider.find('.active-revslide');
				SEMICOLON.slider.headerSchemeChanger(activeSlide, onWinLoad);
			}
		},
		headerSchemeChanger: function (activeSlide, onWinLoad) {
			if (activeSlide.length > 0) {
				var darkExists = false;
				if (activeSlide.hasClass('dark')) {
					if (oldHeaderClasses) {
						var oldClassesArray = oldHeaderClasses.split(/ +/);
					} else {
						var oldClassesArray = '';
					}
					var noOfOldClasses = oldClassesArray.length;
					if (noOfOldClasses > 0) {
						var i = 0;
						for (i = 0; i < noOfOldClasses; i++) {
							if (oldClassesArray[i] == 'dark' && onWinLoad == true) {
								darkExists = true;
								break;
							}
						}
					}
					$('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').addClass('dark');
					if (!darkExists) {
						$('#header.transparent-header.sticky-header,#header.transparent-header.semi-transparent.sticky-header,#header.transparent-header.floating-header.sticky-header').removeClass('dark');
					}
					$headerWrap.removeClass('not-dark');
				} else {
					if ($body.hasClass('dark')) {
						activeSlide.addClass('not-dark');
						$('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
						$('#header.transparent-header:not(.sticky-header,.semi-transparent,.floating-header)').find('#header-wrap').addClass('not-dark');
					} else {
						$('#header.transparent-header:not(.semi-transparent,.floating-header)').removeClass('dark');
						$headerWrap.removeClass('not-dark');
					}
				}
				SEMICOLON.header.logo();
			}
		},
		owlCaptionInit: function () {
			if ($owlCarouselEl.length > 0) {
				$owlCarouselEl.each(function () {
					var element = $(this);
					if (element.find('.owl-dot').length > 0) {
						element.addClass('with-carousel-dots');
					}
				});
			}
		}
	};
	SEMICOLON.portfolio = {
		init: function () {
			SEMICOLON.portfolio.ajaxload();
		},
		gridInit: function ($container) {
			if (!$().isotope) {
				console.log('gridInit: Isotope not Defined.');
				return true;
			}
			if ($container.length < 1) {
				return true;
			}
			if ($container.hasClass('customjs')) {
				return true;
			}
			$container.each(function () {
				var element = $(this),
					elementTransition = element.attr('data-transition'),
					elementLayoutMode = element.attr('data-layout');
				if (!elementTransition) {
					elementTransition = '0.65s';
				}
				if (!elementLayoutMode) {
					elementLayoutMode = 'masonry';
				}
				setTimeout(function () {
					if (element.hasClass('portfolio')) {
						element.isotope({
							layoutMode: elementLayoutMode,
							transitionDuration: elementTransition,
							masonry: {
								columnWidth: element.find('.portfolio-item:not(.wide)')[0]
							}
						});
					} else {
						element.isotope({
							layoutMode: elementLayoutMode,
							transitionDuration: elementTransition
						});
					}
				}, 300);
			});
		},
		filterInit: function () {
			if (!$().isotope) {
				console.log('filterInit: Isotope not Defined.');
				return true;
			}
			if ($portfolioFilter.length < 1) {
				return true;
			}
			if ($portfolioFilter.hasClass('customjs')) {
				return true;
			}
			$portfolioFilter.each(function () {
				var element = $(this),
					elementContainer = element.attr('data-container'),
					elementActiveClass = element.attr('data-active-class');
				if (!elementActiveClass) {
					elementActiveClass = 'activeFilter';
				}
				element.find('a').click(function () {
					element.find('li').removeClass(elementActiveClass);
					$(this).parent('li').addClass(elementActiveClass);
					var selector = $(this).attr('data-filter');
					$(elementContainer).isotope({
						filter: selector
					});
					return false;
				});
			});
		},
		shuffleInit: function () {
			if (!$().isotope) {
				console.log('shuffleInit: Isotope not Defined.');
				return true;
			}
			if ($('.portfolio-shuffle').length < 1) {
				return true;
			}
			$('.portfolio-shuffle').click(function () {
				var element = $(this),
					elementContainer = element.attr('data-container');
				$(elementContainer).isotope('shuffle');
			});
		},
		portfolioDescMargin: function () {
			var $portfolioOverlayEl = $('.portfolio-overlay');
			if ($portfolioOverlayEl.length > 0) {
				$portfolioOverlayEl.each(function () {
					var element = $(this);
					if (element.find('.portfolio-desc').length > 0) {
						var portfolioOverlayHeight = element.outerHeight();
						var portfolioOverlayDescHeight = element.find('.portfolio-desc').outerHeight();
						if (element.find('a.left-icon').length > 0 || element.find('a.right-icon').length > 0 || element.find('a.center-icon').length > 0) {
							var portfolioOverlayIconHeight = 40 + 20;
						} else {
							var portfolioOverlayIconHeight = 0;
						}
						var portfolioOverlayMiddleAlign = (portfolioOverlayHeight - portfolioOverlayDescHeight - portfolioOverlayIconHeight) / 2
						element.find('.portfolio-desc').css({
							'margin-top': portfolioOverlayMiddleAlign
						});
					}
				});
			}
		},
		arrange: function () {
			if ($portfolio.length > 0) {
				$portfolio.each(function () {
					var element = $(this);
					SEMICOLON.initialize.setFullColumnWidth(element);
				});
			}
		},
		ajaxload: function () {
			$('.portfolio-ajax .portfolio-item a.center-icon').click(function (e) {
				var portPostId = $(this).parents('.portfolio-item').attr('id');
				if (!$(this).parents('.portfolio-item').hasClass('portfolio-active')) {
					SEMICOLON.portfolio.loadItem(portPostId, prevPostPortId);
				}
				e.preventDefault();
			});
		},
		newNextPrev: function (portPostId) {
			var portNext = SEMICOLON.portfolio.getNextItem(portPostId);
			var portPrev = SEMICOLON.portfolio.getPrevItem(portPostId);
			$('#next-portfolio').attr('data-id', portNext);
			$('#prev-portfolio').attr('data-id', portPrev);
		},
		loadItem: function (portPostId, prevPostPortId, getIt) {
			if (!getIt) {
				getIt = false;
			}
			var portNext = SEMICOLON.portfolio.getNextItem(portPostId);
			var portPrev = SEMICOLON.portfolio.getPrevItem(portPostId);
			if (getIt == false) {
				SEMICOLON.portfolio.closeItem();
				$portfolioAjaxLoader.fadeIn();
				var portfolioDataLoader = $('#' + portPostId).attr('data-loader');
				$portfolioDetailsContainer.load(portfolioDataLoader, {
					portid: portPostId,
					portnext: portNext,
					portprev: portPrev
				}, function () {
					SEMICOLON.portfolio.initializeAjax(portPostId);
					SEMICOLON.portfolio.openItem();
					$portfolioItems.removeClass('portfolio-active');
					$('#' + portPostId).addClass('portfolio-active');
				});
			}
		},
		closeItem: function () {
			if ($portfolioDetails && $portfolioDetails.height() > 32) {
				$portfolioAjaxLoader.fadeIn();
				$portfolioDetails.find('#portfolio-ajax-single').fadeOut('600', function () {
					$(this).remove();
				});
				$portfolioDetails.removeClass('portfolio-ajax-opened');
			}
		},
		openItem: function () {
			var noOfImages = $portfolioDetails.find('img').length;
			var noLoaded = 0;
			if (noOfImages > 0) {
				$portfolioDetails.find('img').on('load', function () {
					noLoaded++;
					var topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
					if (noOfImages === noLoaded) {
						$portfolioDetailsContainer.css({
							'display': 'block'
						});
						$portfolioDetails.addClass('portfolio-ajax-opened');
						$portfolioAjaxLoader.fadeOut();
						var t = setTimeout(function () {
							SEMICOLON.widget.loadFlexSlider();
							SEMICOLON.initialize.lightbox();
							SEMICOLON.initialize.resizeVideos();
							SEMICOLON.widget.masonryThumbs();
							$('html,body').stop(true).animate({
								'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
							}, 900, 'easeOutQuad');
						}, 500);
					}
				});
			} else {
				var topOffsetScroll = SEMICOLON.initialize.topScrollOffset();
				$portfolioDetailsContainer.css({
					'display': 'block'
				});
				$portfolioDetails.addClass('portfolio-ajax-opened');
				$portfolioAjaxLoader.fadeOut();
				var t = setTimeout(function () {
					SEMICOLON.widget.loadFlexSlider();
					SEMICOLON.initialize.lightbox();
					SEMICOLON.initialize.resizeVideos();
					SEMICOLON.widget.masonryThumbs();
					$('html,body').stop(true).animate({
						'scrollTop': $portfolioDetails.offset().top - topOffsetScroll
					}, 900, 'easeOutQuad');
				}, 500);
			}
		},
		getNextItem: function (portPostId) {
			var portNext = '';
			var hasNext = $('#' + portPostId).next();
			if (hasNext.length != 0) {
				portNext = hasNext.attr('id');
			}
			return portNext;
		},
		getPrevItem: function (portPostId) {
			var portPrev = '';
			var hasPrev = $('#' + portPostId).prev();
			if (hasPrev.length != 0) {
				portPrev = hasPrev.attr('id');
			}
			return portPrev;
		},
		initializeAjax: function (portPostId) {
			prevPostPortId = $('#' + portPostId);
			$('#next-portfolio, #prev-portfolio').click(function () {
				var portPostId = $(this).attr('data-id');
				$portfolioItems.removeClass('portfolio-active');
				$('#' + portPostId).addClass('portfolio-active');
				SEMICOLON.portfolio.loadItem(portPostId, prevPostPortId);
				return false;
			});
			$('#close-portfolio').click(function () {
				$portfolioDetailsContainer.fadeOut('600', function () {
					$portfolioDetails.find('#portfolio-ajax-single').remove();
				});
				$portfolioDetails.removeClass('portfolio-ajax-opened');
				$portfolioItems.removeClass('portfolio-active');
				return false;
			});
		}
	};
	SEMICOLON.widget = {
		init: function () {
			SEMICOLON.widget.animations();
			SEMICOLON.widget.youtubeBgVideo();
			SEMICOLON.widget.tabs();
			SEMICOLON.widget.tabsJustify();
			SEMICOLON.widget.toggles();
			SEMICOLON.widget.accordions();
			SEMICOLON.widget.counter();
			SEMICOLON.widget.roundedSkill();
			SEMICOLON.widget.progress();
			SEMICOLON.widget.twitterFeed();
			SEMICOLON.widget.flickrFeed();
			SEMICOLON.widget.instagramPhotos('36286274.b9e559e.4824cbc1d0c94c23827dc4a2267a9f6b', 'b9e559ec7c284375bf41e9a9fb72ae01');
			SEMICOLON.widget.dribbbleShots('01530280af335d298e756ed8ef786c8c4e92a50b88e53a185531b1a639e768b8');
			SEMICOLON.widget.navTree();
			SEMICOLON.widget.textRotater();
			SEMICOLON.widget.carousel();
			SEMICOLON.widget.linkScroll();
			SEMICOLON.widget.contactForm();
			SEMICOLON.widget.subscription();
			SEMICOLON.widget.quickContact();
			SEMICOLON.widget.cookieNotify();
			SEMICOLON.widget.extras();
		},
		parallax: function () {
			if (!$.stellar) {
				console.log('parallax: Stellar not Defined.');
				return true;
			}
			if ($parallaxEl.length > 0 || $parallaxPageTitleEl.length > 0 || $parallaxPortfolioEl.length > 0) {
				if (!SEMICOLON.isMobile.any()) {
					$.stellar({
						horizontalScrolling: false,
						verticalOffset: 150
					});
				} else {
					$parallaxEl.addClass('mobile-parallax');
					$parallaxPageTitleEl.addClass('mobile-parallax');
					$parallaxPortfolioEl.addClass('mobile-parallax');
				}
			}
		},
		animations: function () {
			if (!$().appear) {
				console.log('animations: Appear not Defined.');
				return true;
			}
			var $dataAnimateEl = $('[data-animate]');
			if ($dataAnimateEl.length > 0) {
				if ($body.hasClass('device-lg') || $body.hasClass('device-md') || $body.hasClass('device-sm')) {
					$dataAnimateEl.each(function () {
						var element = $(this),
							animationOut = element.attr('data-animate-out'),
							animationDelay = element.attr('data-delay'),
							animationDelayOut = element.attr('data-delay-out'),
							animationDelayTime = 0,
							animationDelayOutTime = 3000;
						if (element.parents('.fslider.no-thumbs-animate').length > 0) {
							return true;
						}
						if (animationDelay) {
							animationDelayTime = Number(animationDelay) + 500;
						} else {
							animationDelayTime = 500;
						}
						if (animationOut && animationDelayOut) {
							animationDelayOutTime = Number(animationDelayOut) + animationDelayTime;
						}
						if (!element.hasClass('animated')) {
							element.addClass('not-animated');
							var elementAnimation = element.attr('data-animate');
							element.appear(function () {
								setTimeout(function () {
									element.removeClass('not-animated').addClass(elementAnimation + ' animated');
								}, animationDelayTime);
								if (animationOut) {
									setTimeout(function () {
										element.removeClass(elementAnimation).addClass(animationOut);
									}, animationDelayOutTime);
								}
							}, {
								accX: 0,
								accY: -120
							}, 'easeInCubic');
						}
					});
				}
			}
		},
		loadFlexSlider: function () {
			if (!$().flexslider) {
				console.log('loadFlexSlider: FlexSlider not Defined.');
				return true;
			}
			var $flexSliderEl = $('.fslider:not(.customjs)').find('.flexslider');
			if ($flexSliderEl.length > 0) {
				$flexSliderEl.each(function () {
					var $flexsSlider = $(this),
						flexsAnimation = $flexsSlider.parent('.fslider').attr('data-animation'),
						flexsEasing = $flexsSlider.parent('.fslider').attr('data-easing'),
						flexsDirection = $flexsSlider.parent('.fslider').attr('data-direction'),
						flexsSlideshow = $flexsSlider.parent('.fslider').attr('data-slideshow'),
						flexsPause = $flexsSlider.parent('.fslider').attr('data-pause'),
						flexsSpeed = $flexsSlider.parent('.fslider').attr('data-speed'),
						flexsVideo = $flexsSlider.parent('.fslider').attr('data-video'),
						flexsPagi = $flexsSlider.parent('.fslider').attr('data-pagi'),
						flexsArrows = $flexsSlider.parent('.fslider').attr('data-arrows'),
						flexsThumbs = $flexsSlider.parent('.fslider').attr('data-thumbs'),
						flexsHover = $flexsSlider.parent('.fslider').attr('data-hover'),
						flexsSheight = $flexsSlider.parent('.fslider').attr('data-smooth-height'),
						flexsUseCSS = false;
					if (!flexsAnimation) {
						flexsAnimation = 'slide';
					}
					if (!flexsEasing || flexsEasing == 'swing') {
						flexsEasing = 'swing';
						flexsUseCSS = true;
					}
					if (!flexsDirection) {
						flexsDirection = 'horizontal';
					}
					if (!flexsSlideshow) {
						flexsSlideshow = true;
					} else {
						flexsSlideshow = false;
					}
					if (!flexsPause) {
						flexsPause = 5000;
					}
					if (!flexsSpeed) {
						flexsSpeed = 600;
					}
					if (!flexsVideo) {
						flexsVideo = false;
					}
					if (flexsSheight == 'false') {
						flexsSheight = false;
					} else {
						flexsSheight = true;
					}
					if (flexsDirection == 'vertical') {
						flexsSheight = false;
					}
					if (flexsPagi == 'false') {
						flexsPagi = false;
					} else {
						flexsPagi = true;
					}
					if (flexsThumbs == 'true') {
						flexsPagi = 'thumbnails';
					} else {
						flexsPagi = flexsPagi;
					}
					if (flexsArrows == 'false') {
						flexsArrows = false;
					} else {
						flexsArrows = true;
					}
					if (flexsHover == 'false') {
						flexsHover = false;
					} else {
						flexsHover = true;
					}
					$flexsSlider.flexslider({
						selector: ".slider-wrap > .slide",
						animation: flexsAnimation,
						easing: flexsEasing,
						direction: flexsDirection,
						slideshow: flexsSlideshow,
						slideshowSpeed: Number(flexsPause),
						animationSpeed: Number(flexsSpeed),
						pauseOnHover: flexsHover,
						video: flexsVideo,
						controlNav: flexsPagi,
						directionNav: flexsArrows,
						smoothHeight: flexsSheight,
						useCSS: flexsUseCSS,
						start: function (slider) {
							SEMICOLON.widget.animations();
							SEMICOLON.initialize.verticalMiddle();
							slider.parent().removeClass('preloader2');
							var t = setTimeout(function () {
								$('.grid-container').isotope('layout');
							}, 1200);
							SEMICOLON.initialize.lightbox();
							$('.flex-prev').html('<i class="icon-angle-left"></i>');
							$('.flex-next').html('<i class="icon-angle-right"></i>');
							SEMICOLON.portfolio.portfolioDescMargin();
						},
						after: function () {
							if ($('.grid-container').hasClass('portfolio-full')) {
								$('.grid-container.portfolio-full').isotope('layout');
								SEMICOLON.portfolio.portfolioDescMargin();
							}
						}
					});
				});
			}
		},
		html5Video: function () {
			var videoEl = $('.video-wrap:has(video)');
			if (videoEl.length > 0) {
				videoEl.each(function () {
					var element = $(this),
						elementVideo = element.find('video'),
						outerContainerWidth = element.outerWidth(),
						outerContainerHeight = element.outerHeight(),
						innerVideoWidth = elementVideo.outerWidth(),
						innerVideoHeight = elementVideo.outerHeight();
					if (innerVideoHeight < outerContainerHeight) {
						var videoAspectRatio = innerVideoWidth / innerVideoHeight,
							newVideoWidth = outerContainerHeight * videoAspectRatio,
							innerVideoPosition = (newVideoWidth - outerContainerWidth) / 2;
						elementVideo.css({
							'width': newVideoWidth + 'px',
							'height': outerContainerHeight + 'px',
							'left': -innerVideoPosition + 'px'
						});
					} else {
						var innerVideoPosition = (innerVideoHeight - outerContainerHeight) / 2;
						elementVideo.css({
							'width': innerVideoWidth + 'px',
							'height': innerVideoHeight + 'px',
							'top': -innerVideoPosition + 'px'
						});
					}
					if (SEMICOLON.isMobile.any()) {
						var placeholderImg = elementVideo.attr('poster');
						if (placeholderImg != '') {
							element.append('<div class="video-placeholder" style="background-image: url(' + placeholderImg + ');"></div>')
						}
					}
				});
			}
		},
		youtubeBgVideo: function () {
			if (!$().mb_YTPlayer) {
				console.log('youtubeBgVideo: YoutubeBG Plugin not Defined.');
				return true;
			}
			if ($youtubeBgPlayerEl.hasClass('customjs')) {
				return true;
			}
			if ($youtubeBgPlayerEl.length > 0) {
				$youtubeBgPlayerEl.each(function () {
					var element = $(this),
						ytbgVideo = element.attr('data-video'),
						ytbgMute = element.attr('data-mute'),
						ytbgRatio = element.attr('data-ratio'),
						ytbgQuality = element.attr('data-quality'),
						ytbgOpacity = element.attr('data-opacity'),
						ytbgContainer = element.attr('data-container'),
						ytbgOptimize = element.attr('data-optimize'),
						ytbgLoop = element.attr('data-loop'),
						ytbgVolume = element.attr('data-volume'),
						ytbgStart = element.attr('data-start'),
						ytbgStop = element.attr('data-stop'),
						ytbgAutoPlay = element.attr('data-autoplay'),
						ytbgFullScreen = element.attr('data-fullscreen');
					if (ytbgMute == 'false') {
						ytbgMute = false;
					} else {
						ytbgMute = true;
					}
					if (!ytbgRatio) {
						ytbgRatio = '16/9';
					}
					if (!ytbgQuality) {
						ytbgQuality = 'hd720';
					}
					if (!ytbgOpacity) {
						ytbgOpacity = 1;
					}
					if (!ytbgContainer) {
						ytbgContainer = 'self';
					}
					if (ytbgOptimize == 'false') {
						ytbgOptimize = false;
					} else {
						ytbgOptimize = true;
					}
					if (ytbgLoop == 'false') {
						ytbgLoop = false;
					} else {
						ytbgLoop = true;
					}
					if (!ytbgVolume) {
						ytbgVolume = 1;
					}
					if (!ytbgStart) {
						ytbgStart = 0;
					}
					if (!ytbgStop) {
						ytbgStop = 0;
					}
					if (ytbgAutoPlay == 'false') {
						ytbgAutoPlay = false;
					} else {
						ytbgAutoPlay = true;
					}
					if (ytbgFullScreen == 'true') {
						ytbgFullScreen = true;
					} else {
						ytbgFullScreen = false;
					}
					element.mb_YTPlayer({
						videoURL: ytbgVideo,
						mute: ytbgMute,
						ratio: ytbgRatio,
						quality: ytbgQuality,
						opacity: Number(ytbgOpacity),
						containment: ytbgContainer,
						optimizeDisplay: ytbgOptimize,
						loop: ytbgLoop,
						vol: Number(ytbgVolume),
						startAt: Number(ytbgStart),
						stopAt: Number(ytbgStop),
						autoplay: ytbgAutoPlay,
						realfullscreen: ytbgFullScreen,
						showYTLogo: false,
						showControls: false
					});
				});
			}
		},
		tabs: function () {
			if (!$().tabs) {
				console.log('tabs: Tabs not Defined.');
				return true;
			}
			var $tabs = $('.tabs:not(.customjs)');
			if ($tabs.length > 0) {
				$tabs.each(function () {
					var element = $(this),
						elementSpeed = element.attr('data-speed'),
						tabActive = element.attr('data-active');
					if (!elementSpeed) {
						elementSpeed = 400;
					}
					if (!tabActive) {
						tabActive = 0;
					} else {
						tabActive = tabActive - 1;
					}
					element.tabs({
						active: Number(tabActive),
						show: {
							effect: "fade",
							duration: Number(elementSpeed)
						}
					});
				});
			}
		},
		tabsJustify: function () {
			if (!$('body').hasClass('device-xxs') && !$('body').hasClass('device-xs')) {
				var $tabsJustify = $('.tabs.tabs-justify');
				if ($tabsJustify.length > 0) {
					$tabsJustify.each(function () {
						var element = $(this),
							elementTabs = element.find('.tab-nav > li'),
							elementTabsNo = elementTabs.length,
							elementContainer = 0,
							elementWidth = 0;
						if (element.hasClass('tabs-bordered') || element.hasClass('tabs-bb')) {
							elementContainer = element.find('.tab-nav').outerWidth();
						} else {
							if (element.find('tab-nav').hasClass('tab-nav2')) {
								elementContainer = element.find('.tab-nav').outerWidth() - (elementTabsNo * 10);
							} else {
								elementContainer = element.find('.tab-nav').outerWidth() - 30;
							}
						}
						elementWidth = Math.floor(elementContainer / elementTabsNo);
						elementTabs.css({
							'width': elementWidth + 'px'
						});
					});
				}
			} else {
				$('.tabs.tabs-justify').find('.tab-nav > li').css({
					'width': 'auto'
				});
			}
		},
		toggles: function () {
			var $toggle = $('.toggle');
			if ($toggle.length > 0) {
				$toggle.each(function () {
					var element = $(this),
						elementState = element.attr('data-state');
					if (elementState != 'open') {
						element.children('.togglec').hide();
					} else {
						element.children('.togglet').addClass("toggleta");
					}
					element.children('.togglet').click(function () {
						$(this).toggleClass('toggleta').next('.togglec').slideToggle(300);
						return true;
					});
				});
			}
		},
		accordions: function () {
			var $accordionEl = $('.accordion');
			if ($accordionEl.length > 0) {
				$accordionEl.each(function () {
					var element = $(this),
						elementState = element.attr('data-state'),
						accordionActive = element.attr('data-active');
					if (!accordionActive) {
						accordionActive = 0;
					} else {
						accordionActive = accordionActive - 1;
					}
					element.find('.acc_content').hide();
					if (elementState != 'closed') {
						element.find('.acctitle:eq(' + Number(accordionActive) + ')').addClass('acctitlec').next().show();
					}
					element.find('.acctitle').click(function () {
						if ($(this).next().is(':hidden')) {
							element.find('.acctitle').removeClass('acctitlec').next().slideUp("normal");
							$(this).toggleClass('acctitlec').next().slideDown("normal");
						}
						return false;
					});
				});
			}
		},
		counter: function () {
			if (!$().appear) {
				console.log('counter: Appear not Defined.');
				return true;
			}
			if (!$().countTo) {
				console.log('counter: countTo not Defined.');
				return true;
			}
			var $counterEl = $('.counter:not(.counter-instant)');
			if ($counterEl.length > 0) {
				$counterEl.each(function () {
					var element = $(this);
					var counterElementComma = $(this).find('span').attr('data-comma');
					if (!counterElementComma) {
						counterElementComma = false;
					} else {
						counterElementComma = true;
					}
					if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
						element.appear(function () {
							SEMICOLON.widget.runCounter(element, counterElementComma);
							if (element.parents('.common-height')) {
								SEMICOLON.initialize.maxHeight();
							}
						}, {
							accX: 0,
							accY: -120
						}, 'easeInCubic');
					} else {
						SEMICOLON.widget.runCounter(element, counterElementComma);
					}
				});
			}
		},
		runCounter: function (counterElement, counterElementComma) {
			if (counterElementComma == true) {
				counterElement.find('span').countTo({
					formatter: function (value, options) {
						value = value.toFixed(options.decimals);
						value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
						return value;
					}
				});
			} else {
				counterElement.find('span').countTo();
			}
		},
		roundedSkill: function () {
			if (!$().appear) {
				console.log('roundedSkill: Appear not Defined.');
				return true;
			}
			if (!$().easyPieChart) {
				console.log('roundedSkill: EasyPieChart not Defined.');
				return true;
			}
			var $roundedSkillEl = $('.rounded-skill');
			if ($roundedSkillEl.length > 0) {
				$roundedSkillEl.each(function () {
					var element = $(this);
					var roundSkillSize = element.attr('data-size');
					var roundSkillSpeed = element.attr('data-speed');
					var roundSkillWidth = element.attr('data-width');
					var roundSkillColor = element.attr('data-color');
					var roundSkillTrackColor = element.attr('data-trackcolor');
					if (!roundSkillSize) {
						roundSkillSize = 140;
					}
					if (!roundSkillSpeed) {
						roundSkillSpeed = 2000;
					}
					if (!roundSkillWidth) {
						roundSkillWidth = 8;
					}
					if (!roundSkillColor) {
						roundSkillColor = '#0093BF';
					}
					if (!roundSkillTrackColor) {
						roundSkillTrackColor = 'rgba(0,0,0,0.04)';
					}
					var properties = {
						roundSkillSize: roundSkillSize,
						roundSkillSpeed: roundSkillSpeed,
						roundSkillWidth: roundSkillWidth,
						roundSkillColor: roundSkillColor,
						roundSkillTrackColor: roundSkillTrackColor
					};
					if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
						element.css({
							'width': roundSkillSize + 'px',
							'height': roundSkillSize + 'px',
							'line-height': roundSkillSize + 'px'
						}).animate({
							opacity: 0
						}, 10);
						element.appear(function () {
							if (!element.hasClass('skills-animated')) {
								var t = setTimeout(function () {
									element.css({
										opacity: 1
									});
								}, 100);
								SEMICOLON.widget.runRoundedSkills(element, properties);
								element.addClass('skills-animated');
							}
						}, {
							accX: 0,
							accY: -120
						}, 'easeInCubic');
					} else {
						SEMICOLON.widget.runRoundedSkills(element, properties);
					}
				});
			}
		},
		runRoundedSkills: function (element, properties) {
			element.easyPieChart({
				size: Number(properties.roundSkillSize),
				animate: Number(properties.roundSkillSpeed),
				scaleColor: false,
				trackColor: properties.roundSkillTrackColor,
				lineWidth: Number(properties.roundSkillWidth),
				lineCap: 'square',
				barColor: properties.roundSkillColor
			});
		},
		progress: function () {
			if (!$().appear) {
				console.log('progress: Appear not Defined.');
				return true;
			}
			var $progressEl = $('.progress');
			if ($progressEl.length > 0) {
				$progressEl.each(function () {
					var element = $(this),
						skillsBar = element.parent('li'),
						skillValue = skillsBar.attr('data-percent');
					if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
						element.appear(function () {
							if (!skillsBar.hasClass('skills-animated')) {
								element.find('.counter-instant span').countTo();
								skillsBar.find('.progress').css({
									width: skillValue + "%"
								}).addClass('skills-animated');
							}
						}, {
							accX: 0,
							accY: -120
						}, 'easeInCubic');
					} else {
						element.find('.counter-instant span').countTo();
						skillsBar.find('.progress').css({
							width: skillValue + "%"
						});
					}
				});
			}
		},
		twitterFeed: function () {
			if (typeof sm_format_twitter === 'undefined') {
				console.log('twitterFeed: sm_format_twitter() not Defined.');
				return true;
			}
			if (typeof sm_format_twitter3 === 'undefined') {
				console.log('twitterFeed: sm_format_twitter3() not Defined.');
				return true;
			}
			var $twitterFeedEl = $('.twitter-feed');
			if ($twitterFeedEl.length > 0) {
				$twitterFeedEl.each(function () {
					var element = $(this),
						twitterFeedUser = element.attr('data-username'),
						twitterFeedCount = element.attr('data-count'),
						twitterFeedLoader = element.attr('data-loader');
					if (!twitterFeedUser) {
						twitterFeedUser = 'twitter'
					}
					if (!twitterFeedCount) {
						twitterFeedCount = 3
					}
					if (!twitterFeedLoader) {
						twitterFeedLoader = 'include/twitter/tweets.php';
					}
					$.getJSON(twitterFeedLoader + '?username=' + twitterFeedUser + '&count=' + twitterFeedCount, function (tweets) {
						if (element.hasClass('fslider')) {
							element.find(".slider-wrap").html(sm_format_twitter3(tweets)).promise().done(function () {
								var timer = setInterval(function () {
									if (element.find('.slide').length > 1) {
										element.removeClass('customjs');
										var t = setTimeout(function () {
											SEMICOLON.widget.loadFlexSlider();
										}, 500);
										clearInterval(timer);
									}
								}, 500);
							});
						} else {
							element.html(sm_format_twitter(tweets));
						}
					});
				});
			}
		},
		flickrFeed: function () {
			if (!$().jflickrfeed) {
				console.log('flickrFeed: jflickrfeed not Defined.');
				return true;
			}
			var $flickrFeedEl = $('.flickr-feed');
			if ($flickrFeedEl.length > 0) {
				$flickrFeedEl.each(function () {
					var element = $(this),
						flickrFeedID = element.attr('data-id'),
						flickrFeedCount = element.attr('data-count'),
						flickrFeedType = element.attr('data-type'),
						flickrFeedTypeGet = 'photos_public.gne';
					if (flickrFeedType == 'group') {
						flickrFeedTypeGet = 'groups_pool.gne';
					}
					if (!flickrFeedCount) {
						flickrFeedCount = 9;
					}
					element.jflickrfeed({
						feedapi: flickrFeedTypeGet,
						limit: Number(flickrFeedCount),
						qstrings: {
							id: flickrFeedID
						},
						itemTemplate: '<a href="{{image_b}}" title="{{title}}" data-lightbox="gallery-item">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>'
					}, function (data) {
						SEMICOLON.initialize.lightbox();
					});
				});
			}
		},
		instagramPhotos: function (c_accessToken, c_clientID) {
			if (typeof Instafeed === 'undefined') {
				console.log('Instafeed not Defined.');
				return true;
			}
			var $instagramPhotosEl = $('.instagram-photos');
			if ($instagramPhotosEl.length > 0) {
				$instagramPhotosEl.each(function () {
					var element = $(this),
						instaGramTarget = element.attr('id'),
						instaGramUserId = element.attr('data-user'),
						instaGramTag = element.attr('data-tag'),
						instaGramLocation = element.attr('data-location'),
						instaGramCount = element.attr('data-count'),
						instaGramType = element.attr('data-type'),
						instaGramSortBy = element.attr('data-sortBy'),
						instaGramRes = element.attr('data-resolution');
					if (!instaGramCount) {
						instaGramCount = 9;
					}
					if (!instaGramSortBy) {
						instaGramSortBy = 'none';
					}
					if (!instaGramRes) {
						instaGramRes = 'thumbnail';
					}
					if (instaGramType == 'user') {
						var feed = new Instafeed({
							target: instaGramTarget,
							get: instaGramType,
							userId: Number(instaGramUserId),
							limit: Number(instaGramCount),
							sortBy: instaGramSortBy,
							resolution: instaGramRes,
							accessToken: c_accessToken,
							clientId: c_clientID
						});
					} else if (instaGramType == 'tagged') {
						var feed = new Instafeed({
							target: instaGramTarget,
							get: instaGramType,
							tagName: instaGramTag,
							limit: Number(instaGramCount),
							sortBy: instaGramSortBy,
							resolution: instaGramRes,
							clientId: c_clientID
						});
					} else if (instaGramType == 'location') {
						var feed = new Instafeed({
							target: instaGramTarget,
							get: instaGramType,
							locationId: Number(instaGramUserId),
							limit: Number(instaGramCount),
							sortBy: instaGramSortBy,
							resolution: instaGramRes,
							clientId: c_clientID
						});
					} else {
						var feed = new Instafeed({
							target: instaGramTarget,
							get: 'popular',
							limit: Number(instaGramCount),
							sortBy: instaGramSortBy,
							resolution: instaGramRes,
							clientId: c_clientID
						});
					}
					feed.run();
				});
			}
		},
		dribbbleShots: function (c_accessToken) {
			if (!$.jribbble) {
				console.log('dribbbleShots: Jribbble not Defined.');
				return true;
			}
			if (!$().imagesLoaded) {
				console.log('dribbbleShots: imagesLoaded not Defined.');
				return true;
			}
			var $dribbbleShotsEl = $('.dribbble-shots');
			if ($dribbbleShotsEl.length > 0) {
				$.jribbble.setToken(c_accessToken);
				$dribbbleShotsEl.each(function () {
					var element = $(this),
						dribbbleUsername = element.attr('data-user'),
						dribbbleCount = element.attr('data-count'),
						dribbbleList = element.attr('data-list'),
						dribbbleType = element.attr('data-type');
					element.addClass('customjs');
					if (!dribbbleCount) {
						dribbbleCount = 9;
					}
					if (dribbbleType == 'user') {
						$.jribbble.users(dribbbleUsername).shots({
							'sort': 'recent',
							'page': 1,
							'per_page': Number(dribbbleCount)
						}).then(function (res) {
							var html = [];
							res.forEach(function (shot) {
								html.push('<a href="' + shot.html_url + '" target="_blank">');
								html.push('<img src="' + shot.images.teaser + '" ');
								html.push('alt="' + shot.title + '"></a>');
							});
							element.html(html.join(''));
							element.imagesLoaded().done(function () {
								element.removeClass('customjs');
								SEMICOLON.widget.masonryThumbs();
							});
						});
					} else if (dribbbleType == 'list') {
						$.jribbble.shots(dribbbleList, {
							'sort': 'recent',
							'page': 1,
							'per_page': Number(dribbbleCount)
						}).then(function (res) {
							var html = [];
							res.forEach(function (shot) {
								html.push('<a href="' + shot.html_url + '" target="_blank">');
								html.push('<img src="' + shot.images.teaser + '" ');
								html.push('alt="' + shot.title + '"></a>');
							});
							element.html(html.join(''));
							element.imagesLoaded().done(function () {
								element.removeClass('customjs');
								SEMICOLON.widget.masonryThumbs();
							});
						});
					}
				});
			}
		},
		navTree: function () {
			var $navTreeEl = $('.nav-tree');
			if ($navTreeEl.length > 0) {
				$navTreeEl.each(function () {
					var element = $(this),
						elementSpeed = element.attr('data-speed'),
						elementEasing = element.attr('data-easing');
					if (!elementSpeed) {
						elementSpeed = 250;
					}
					if (!elementEasing) {
						elementEasing = 'swing';
					}
					element.find('ul li:has(ul)').addClass('sub-menu');
					element.find('ul li:has(ul) > a').append(' <i class="icon-angle-down"></i>');
					if (element.hasClass('on-hover')) {
						element.find('ul li:has(ul):not(.active)').hover(function (e) {
							$(this).children('ul').stop(true, true).slideDown(Number(elementSpeed), elementEasing);
						}, function () {
							$(this).children('ul').delay(250).slideUp(Number(elementSpeed), elementEasing);
						});
					} else {
						element.find('ul li:has(ul) > a').click(function (e) {
							var childElement = $(this);
							element.find('ul li').not(childElement.parents()).removeClass('active');
							childElement.parent().children('ul').slideToggle(Number(elementSpeed), elementEasing, function () {
								$(this).find('ul').hide();
								$(this).find('li.active').removeClass('active');
							});
							element.find('ul li > ul').not(childElement.parent().children('ul')).not(childElement.parents('ul')).slideUp(Number(elementSpeed), elementEasing);
							childElement.parent('li:has(ul)').toggleClass('active');
							e.preventDefault();
						});
					}
				});
			}
		},
		carousel: function () {
			if (!$().owlCarousel) {
				console.log('carousel: Owl Carousel not Defined.');
				return true;
			}
			var $carousel = $('.carousel-widget:not(.customjs)');
			if ($carousel.length < 1) {
				return true;
			}
			$carousel.each(function () {
				var element = $(this),
					elementItems = element.attr('data-items'),
					elementItemsLg = element.attr('data-items-lg'),
					elementItemsMd = element.attr('data-items-md'),
					elementItemsSm = element.attr('data-items-sm'),
					elementItemsXs = element.attr('data-items-xs'),
					elementItemsXxs = element.attr('data-items-xxs'),
					elementLoop = element.attr('data-loop'),
					elementAutoPlay = element.attr('data-autoplay'),
					elementSpeed = element.attr('data-speed'),
					elementAnimateIn = element.attr('data-animate-in'),
					elementAnimateOut = element.attr('data-animate-out'),
					elementNav = element.attr('data-nav'),
					elementPagi = element.attr('data-pagi'),
					elementMargin = element.attr('data-margin'),
					elementStage = element.attr('data-stage-padding'),
					elementMerge = element.attr('data-merge'),
					elementStart = element.attr('data-start'),
					elementRewind = element.attr('data-rewind'),
					elementSlideBy = element.attr('data-slideby'),
					elementCenter = element.attr('data-center'),
					elementLazy = element.attr('data-lazyload'),
					elementVideo = element.attr('data-video'),
					elementRTL = element.attr('data-rtl');
				if (!elementItems) {
					elementItems = 4;
				}
				if (!elementItemsLg) {
					elementItemsLg = Number(elementItems);
				}
				if (!elementItemsMd) {
					elementItemsMd = Number(elementItemsLg);
				}
				if (!elementItemsSm) {
					elementItemsSm = Number(elementItemsMd);
				}
				if (!elementItemsXs) {
					elementItemsXs = Number(elementItemsSm);
				}
				if (!elementItemsXxs) {
					elementItemsXxs = Number(elementItemsXs);
				}
				if (!elementSpeed) {
					elementSpeed = 250;
				}
				if (!elementMargin) {
					elementMargin = 20;
				}
				if (!elementStage) {
					elementStage = 0;
				}
				if (!elementStart) {
					elementStart = 0;
				}
				if (!elementSlideBy) {
					elementSlideBy = 1;
				}
				if (elementSlideBy == 'page') {
					elementSlideBy = 'page';
				} else {
					elementSlideBy = Number(elementSlideBy);
				}
				if (elementLoop == 'true') {
					elementLoop = true;
				} else {
					elementLoop = false;
				}
				if (!elementAutoPlay) {
					elementAutoPlay = false;
					var elementAutoPlayTime = 0;
				} else {
					var elementAutoPlayTime = Number(elementAutoPlay);
					elementAutoPlay = true;
				}
				if (!elementAnimateIn) {
					elementAnimateIn = false;
				}
				if (!elementAnimateOut) {
					elementAnimateOut = false;
				}
				if (elementNav == 'false') {
					elementNav = false;
				} else {
					elementNav = true;
				}
				if (elementPagi == 'false') {
					elementPagi = false;
				} else {
					elementPagi = true;
				}
				if (elementRewind == 'true') {
					elementRewind = true;
				} else {
					elementRewind = false;
				}
				if (elementMerge == 'true') {
					elementMerge = true;
				} else {
					elementMerge = false;
				}
				if (elementCenter == 'true') {
					elementCenter = true;
				} else {
					elementCenter = false;
				}
				if (elementLazy == 'true') {
					elementLazy = true;
				} else {
					elementLazy = false;
				}
				if (elementVideo == 'true') {
					elementVideo = true;
				} else {
					elementVideo = false;
				}
				if (elementRTL == 'true' || $body.hasClass('rtl')) {
					elementRTL = true;
				} else {
					elementRTL = false;
				}
				element.owlCarousel({
					margin: Number(elementMargin),
					loop: elementLoop,
					stagePadding: Number(elementStage),
					merge: elementMerge,
					startPosition: Number(elementStart),
					rewind: elementRewind,
					slideBy: elementSlideBy,
					center: elementCenter,
					lazyLoad: elementLazy,
					nav: elementNav,
					navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
					autoplay: elementAutoPlay,
					autoplayTimeout: elementAutoPlayTime,
					autoplayHoverPause: true,
					dots: elementPagi,
					smartSpeed: Number(elementSpeed),
					fluidSpeed: Number(elementSpeed),
					video: elementVideo,
					animateIn: elementAnimateIn,
					animateOut: elementAnimateOut,
					rtl: elementRTL,
					responsive: {
						0: {
							items: Number(elementItemsXxs)
						},
						480: {
							items: Number(elementItemsXs)
						},
						768: {
							items: Number(elementItemsSm)
						},
						992: {
							items: Number(elementItemsMd)
						},
						1200: {
							items: Number(elementItemsLg)
						}
					},
					onInitialized: function () {
						SEMICOLON.slider.owlCaptionInit();
						SEMICOLON.slider.sliderParallaxDimensions();
					}
				});
			});
		},
		masonryThumbs: function () {
			var $masonryThumbsEl = $('.masonry-thumbs:not(.customjs)');
			if ($masonryThumbsEl.length > 0) {
				$masonryThumbsEl.each(function () {
					var masonryItemContainer = $(this);
					SEMICOLON.widget.masonryThumbsArrange(masonryItemContainer);
				});
			}
		},
		masonryThumbsArrange: function (element) {
			if (!$().isotope) {
				console.log('masonryThumbsArrange: Isotope not Defined.');
				return true;
			}
			SEMICOLON.initialize.setFullColumnWidth(element);
			element.isotope('layout');
		},
		notifications: function (element) {
			if (typeof toastr === 'undefined') {
				console.log('notifications: Toastr not Defined.');
				return true;
			}
			toastr.remove();
			var notifyElement = $(element),
				notifyPosition = notifyElement.attr('data-notify-position'),
				notifyType = notifyElement.attr('data-notify-type'),
				notifyMsg = notifyElement.attr('data-notify-msg'),
				notifyCloseButton = notifyElement.attr('data-notify-close');
			if (!notifyPosition) {
				notifyPosition = 'toast-top-right';
			} else {
				notifyPosition = 'toast-' + notifyElement.attr('data-notify-position');
			}
			if (!notifyMsg) {
				notifyMsg = 'Please set a message!';
			}
			if (notifyCloseButton == 'true') {
				notifyCloseButton = true;
			} else {
				notifyCloseButton = false;
			}
			toastr.options.positionClass = notifyPosition;
			toastr.options.closeButton = notifyCloseButton;
			toastr.options.closeHtml = '<button><i class="icon-remove"></i></button>';
			if (notifyType == 'warning') {
				toastr.warning(notifyMsg);
			} else if (notifyType == 'error') {
				toastr.error(notifyMsg);
			} else if (notifyType == 'success') {
				toastr.success(notifyMsg);
			} else {
				toastr.info(notifyMsg);
			}
			return false;
		},
		textRotater: function () {
			if (!$().Morphext) {
				console.log('textRotater: Morphext not Defined.');
				return true;
			}
			if ($textRotaterEl.length > 0) {
				$textRotaterEl.each(function () {
					var element = $(this),
						trRotate = $(this).attr('data-rotate'),
						trSpeed = $(this).attr('data-speed'),
						trSeparator = $(this).attr('data-separator');
					if (!trRotate) {
						trRotate = "fade";
					}
					if (!trSpeed) {
						trSpeed = 1200;
					}
					if (!trSeparator) {
						trSeparator = ",";
					}
					var tRotater = $(this).find('.t-rotate');
					tRotater.Morphext({
						animation: trRotate,
						separator: trSeparator,
						speed: Number(trSpeed)
					});
				});
			}
		},
		linkScroll: function () {
			$("a[data-scrollto]").click(function () {
				var element = $(this),
					divScrollToAnchor = element.attr('data-scrollto'),
					divScrollSpeed = element.attr('data-speed'),
					divScrollOffset = element.attr('data-offset'),
					divScrollEasing = element.attr('data-easing'),
					divScrollHighlight = element.attr('data-highlight');
				if (!divScrollSpeed) {
					divScrollSpeed = 750;
				}
				if (!divScrollOffset) {
					divScrollOffset = SEMICOLON.initialize.topScrollOffset();
				}
				if (!divScrollEasing) {
					divScrollEasing = 'easeOutQuad';
				}
				$('html,body').stop(true).animate({
					'scrollTop': $(divScrollToAnchor).offset().top - Number(divScrollOffset)
				}, Number(divScrollSpeed), divScrollEasing, function () {
					if (divScrollHighlight) {
						if ($(divScrollToAnchor).find('.highlight-me').length > 0) {
							$(divScrollToAnchor).find('.highlight-me').animate({
								'backgroundColor': divScrollHighlight
							}, 300);
							var t = setTimeout(function () {
								$(divScrollToAnchor).find('.highlight-me').animate({
									'backgroundColor': 'transparent'
								}, 300);
							}, 500);
						} else {
							$(divScrollToAnchor).animate({
								'backgroundColor': divScrollHighlight
							}, 300);
							var t = setTimeout(function () {
								$(divScrollToAnchor).animate({
									'backgroundColor': 'transparent'
								}, 300);
							}, 500);
						}
					}
				});
				return false;
			});
		},
		contactForm: function () {
			if (!$().validate) {
				console.log('contactForm: Form Validate not Defined.');
				return true;
			}
			if (!$().ajaxSubmit) {
				console.log('contactForm: jQuery Form not Defined.');
				return true;
			}
			var $contactForm = $('.contact-widget:not(.customjs)');
			if ($contactForm.length < 1) {
				return true;
			}
			$contactForm.each(function () {
				var element = $(this),
					elementAlert = element.attr('data-alert-type'),
					elementLoader = element.attr('data-loader'),
					elementResult = element.find('.contact-form-result');
				element.find('form').validate({
					submitHandler: function (form) {
						elementResult.hide();
						if (elementLoader == 'button') {
							var defButton = $(form).find('button'),
								defButtonText = defButton.html();
							defButton.html('<i class="icon-line-loader icon-spin nomargin"></i>');
						} else {
							$(form).find('.form-process').fadeIn();
						}
						$(form).ajaxSubmit({
							target: elementResult,
							dataType: 'json',
							resetForm: true,
							success: function (data) {
								if (elementLoader == 'button') {
									defButton.html(defButtonText);
								} else {
									$(form).find('.form-process').fadeOut();
								}
								if (elementAlert == 'inline') {
									if (data.alert == 'error') {
										var alertType = 'alert-danger';
									} else {
										var alertType = 'alert-success';
									}
									elementResult.addClass('alert ' + alertType).html(data.message).slideDown(400);
								} else {
									elementResult.attr('data-notify-type', data.alert).attr('data-notify-msg', data.message).html('');
									SEMICOLON.widget.notifications(elementResult);
								}
								if ($(form).find('.g-recaptcha').children('div').length > 0) {
									grecaptcha.reset();
								}
							}
						});
					}
				});
			});
		},
		subscription: function () {
			if (!$().validate) {
				console.log('subscription: Form Validate not Defined.');
				return true;
			}
			if (!$().ajaxSubmit) {
				console.log('subscription: jQuery Form not Defined.');
				return true;
			}
			var $subscribeForm = $('.subscribe-widget:not(.customjs)');
			if ($subscribeForm.length < 1) {
				return true;
			}
			$subscribeForm.each(function () {
				var element = $(this),
					elementAlert = element.attr('data-alert-type'),
					elementLoader = element.attr('data-loader'),
					elementResult = element.find('.widget-subscribe-form-result');
				element.find('form').validate({
					submitHandler: function (form) {
						elementResult.hide();
						if (elementLoader == 'button') {
							var defButton = $(form).find('button'),
								defButtonText = defButton.html();
							defButton.html('<i class="icon-line-loader icon-spin nomargin"></i>');
						} else {
							$(form).find('.input-group-addon').find('.icon-email2').removeClass('icon-email2').addClass('icon-line-loader icon-spin');
						}
						$(form).ajaxSubmit({
							target: elementResult,
							dataType: 'json',
							resetForm: true,
							success: function (data) {
								if (elementLoader == 'button') {
									defButton.html(defButtonText);
								} else {
									$(form).find('.input-group-addon').find('.icon-line-loader').removeClass('icon-line-loader icon-spin').addClass('icon-email2');
								}
								if (elementAlert == 'inline') {
									if (data.alert == 'error') {
										var alertType = 'alert-danger';
									} else {
										var alertType = 'alert-success';
									}
									elementResult.addClass('alert ' + alertType).html(data.message).slideDown(400);
								} else {
									elementResult.attr('data-notify-type', data.alert).attr('data-notify-msg', data.message).html('');
									SEMICOLON.widget.notifications(elementResult);
								}
							}
						});
					}
				});
			});
		},
		quickContact: function () {
			if (!$().validate) {
				console.log('quickContact: Form Validate not Defined.');
				return true;
			}
			if (!$().ajaxSubmit) {
				console.log('quickContact: jQuery Form not Defined.');
				return true;
			}
			var $quickContact = $('.quick-contact-widget:not(.customjs)');
			if ($quickContact.length < 1) {
				return true;
			}
			$quickContact.each(function () {
				var element = $(this),
					elementAlert = element.attr('data-alert-type'),
					elementLoader = element.attr('data-loader'),
					elementResult = element.find('.quick-contact-form-result');
				element.find('form').validate({
					submitHandler: function (form) {
						elementResult.hide();
						$(form).animate({
							opacity: 0.4
						});
						if (elementLoader == 'button') {
							var defButton = $(form).find('button'),
								defButtonText = defButton.html();
							defButton.html('<i class="icon-line-loader icon-spin nomargin"></i>');
						} else {
							$(form).find('.form-process').fadeIn();
						}
						$(form).ajaxSubmit({
							target: elementResult,
							dataType: 'json',
							resetForm: true,
							success: function (data) {
								$(form).animate({
									opacity: 1
								});
								if (elementLoader == 'button') {
									defButton.html(defButtonText);
								} else {
									$(form).find('.form-process').fadeOut();
								}
								if (elementAlert == 'inline') {
									if (data.alert == 'error') {
										var alertType = 'alert-danger';
									} else {
										var alertType = 'alert-success';
									}
									elementResult.addClass('alert ' + alertType).html(data.message).slideDown(400);
								} else {
									elementResult.attr('data-notify-type', data.alert).attr('data-notify-msg', data.message).html('');
									SEMICOLON.widget.notifications(elementResult);
								}
								if ($(form).find('.g-recaptcha').children('div').length > 0) {
									grecaptcha.reset();
								}
							}
						});
					}
				});
			});
		},
		cookieNotify: function () {
			if (!$.cookie) {
				console.log('cookieNotify: Cookie Function not defined.');
				return true;
			}
			if ($cookieNotification.length > 0) {
				var cookieNotificationHeight = $cookieNotification.outerHeight();
				$cookieNotification.css({
					bottom: -cookieNotificationHeight
				});
				if ($.cookie('websiteUsesCookies') != 'yesConfirmed') {
					$cookieNotification.css({
						bottom: 0
					});
				}
				$('.cookie-accept').click(function () {
					$cookieNotification.css({
						bottom: -cookieNotificationHeight
					});
					$.cookie('websiteUsesCookies', 'yesConfirmed', {
						expires: 30
					});
					return false;
				});
			}
		},
		extras: function () {
			if ($().tooltip) {
				$('[data-toggle="tooltip"]').tooltip({
					container: 'body'
				});
			} else {
				console.log('extras: Bootstrap Tooltip not defined.');
			}
			if ($().popover) {
				$('[data-toggle=popover]').popover();
			} else {
				console.log('extras: Bootstrap Popover not defined.');
			}
			$('#primary-menu-trigger,#overlay-menu-close').click(function () {
				if ($('#primary-menu').find('ul.mobile-primary-menu').length > 0) {
					$('#primary-menu > ul.mobile-primary-menu, #primary-menu > div > ul.mobile-primary-menu').toggleClass("show");
				} else {
					$('#primary-menu > ul, #primary-menu > div > ul').toggleClass("show");
				}
				return false;
			});
			$('#page-submenu-trigger').click(function () {
				$body.toggleClass('top-search-open', false);
				$pagemenu.toggleClass("pagemenu-active");
				return false;
			});
			$pagemenu.find('nav').click(function (e) {
				$body.toggleClass('top-search-open', false);
				$topCart.toggleClass('top-cart-open', false);
			});
			if (SEMICOLON.isMobile.any()) {
				$body.addClass('device-touch');
			}
		}
	};
	SEMICOLON.isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (SEMICOLON.isMobile.Android() || SEMICOLON.isMobile.BlackBerry() || SEMICOLON.isMobile.iOS() || SEMICOLON.isMobile.Opera() || SEMICOLON.isMobile.Windows());
		}
	};
	SEMICOLON.documentOnResize = {
		init: function () {
			var t = setTimeout(function () {
				SEMICOLON.header.topsocial();
				SEMICOLON.header.fullWidthMenu();
				SEMICOLON.header.overlayMenu();
				SEMICOLON.initialize.fullScreen();
				SEMICOLON.initialize.verticalMiddle();
				SEMICOLON.initialize.maxHeight();
				SEMICOLON.initialize.testimonialsGrid();
				SEMICOLON.initialize.stickyFooter();
				SEMICOLON.slider.sliderParallaxDimensions();
				SEMICOLON.slider.captionPosition();
				SEMICOLON.portfolio.arrange();
				SEMICOLON.portfolio.portfolioDescMargin();
				SEMICOLON.widget.tabsJustify();
				SEMICOLON.widget.html5Video();
				SEMICOLON.widget.masonryThumbs();
				SEMICOLON.initialize.dataResponsiveClasses();
				SEMICOLON.initialize.dataResponsiveHeights();
				if ($gridContainer.length > 0) {
					if (!$gridContainer.hasClass('.customjs')) {
						if ($().isotope) {
							$gridContainer.isotope('layout');
						} else {
							console.log('documentOnResize > init: Isotope not defined.');
						}
					}
				}
				if ($body.hasClass('device-lg') || $body.hasClass('device-md')) {
					$('#primary-menu').find('ul.mobile-primary-menu').removeClass('show');
				}
			}, 500);
			windowWidth = $window.width();
		}
	};
	SEMICOLON.documentOnReady = {
		init: function () {
			SEMICOLON.initialize.init();
			SEMICOLON.header.init();
			if ($slider.length > 0) {
				SEMICOLON.slider.init();
			}
			if ($portfolio.length > 0) {
				SEMICOLON.portfolio.init();
			}
			SEMICOLON.widget.init();
			SEMICOLON.documentOnReady.windowscroll();
		},
		windowscroll: function () {
			var headerOffset = 0,
				headerWrapOffset = 0,
				pageMenuOffset = 0;
			if ($header.length > 0) {
				headerOffset = $header.offset().top;
			}
			if ($header.length > 0) {
				headerWrapOffset = $headerWrap.offset().top;
			}
			if ($pagemenu.length > 0) {
				if ($header.length > 0 && !$header.hasClass('no-sticky')) {
					if ($header.hasClass('sticky-style-2') || $header.hasClass('sticky-style-3')) {
						pageMenuOffset = $pagemenu.offset().top - $headerWrap.outerHeight();
					} else {
						pageMenuOffset = $pagemenu.offset().top - $header.outerHeight();
					}
				} else {
					pageMenuOffset = $pagemenu.offset().top;
				}
			}
			var headerDefinedOffset = $header.attr('data-sticky-offset');
			if (typeof headerDefinedOffset !== 'undefined') {
				if (headerDefinedOffset == 'full') {
					headerWrapOffset = $window.height();
					var headerOffsetNegative = $header.attr('data-sticky-offset-negative');
					if (typeof headerOffsetNegative !== 'undefined') {
						headerWrapOffset = headerWrapOffset - headerOffsetNegative - 1;
					}
				} else {
					headerWrapOffset = Number(headerDefinedOffset);
				}
			}
			SEMICOLON.header.stickyMenu(headerWrapOffset);
			SEMICOLON.header.stickyPageMenu(pageMenuOffset);
			$window.on('scroll', function () {
				SEMICOLON.initialize.goToTopScroll();
				$('body.open-header.close-header-on-scroll').removeClass("side-header-open");
				SEMICOLON.header.stickyMenu(headerWrapOffset);
				SEMICOLON.header.stickyPageMenu(pageMenuOffset);
				SEMICOLON.header.logo();
			});
			window.addEventListener('scroll', onScrollSliderParallax, false);
			if ($onePageMenuEl.length > 0) {
				if ($().scrolled) {
					$window.scrolled(function () {
						SEMICOLON.header.onepageScroller();
					});
				} else {
					console.log('windowscroll: Scrolled Function not defined.');
				}
			}
		}
	};
	SEMICOLON.documentOnLoad = {
		init: function () {
			SEMICOLON.slider.captionPosition();
			SEMICOLON.slider.swiperSliderMenu(true);
			SEMICOLON.slider.revolutionSliderMenu(true);
			SEMICOLON.initialize.maxHeight();
			SEMICOLON.initialize.testimonialsGrid();
			SEMICOLON.initialize.verticalMiddle();
			SEMICOLON.initialize.stickFooterOnSmall();
			SEMICOLON.initialize.stickyFooter();
			SEMICOLON.portfolio.gridInit($gridContainer);
			SEMICOLON.portfolio.filterInit();
			SEMICOLON.portfolio.shuffleInit();
			SEMICOLON.portfolio.arrange();
			SEMICOLON.portfolio.portfolioDescMargin();
			SEMICOLON.widget.parallax();
			SEMICOLON.widget.loadFlexSlider();
			SEMICOLON.widget.html5Video();
			SEMICOLON.widget.masonryThumbs();
			SEMICOLON.header.topsocial();
			SEMICOLON.header.responsiveMenuClass();
			SEMICOLON.initialize.modal();
		}
	};
	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$headerWrap = $('#header-wrap'),
		$content = $('#content'),
		$footer = $('#footer'),
		windowWidth = $window.width(),
		oldHeaderClasses = $header.attr('class'),
		oldHeaderWrapClasses = $headerWrap.attr('class'),
		stickyMenuClasses = $header.attr('data-sticky-class'),
		responsiveMenuClasses = $header.attr('data-responsive-class'),
		defaultLogo = $('#logo').find('.standard-logo'),
		defaultLogoWidth = defaultLogo.find('img').outerWidth(),
		retinaLogo = $('#logo').find('.retina-logo'),
		defaultLogoImg = defaultLogo.find('img').attr('src'),
		retinaLogoImg = retinaLogo.find('img').attr('src'),
		defaultDarkLogo = defaultLogo.attr('data-dark-logo'),
		retinaDarkLogo = retinaLogo.attr('data-dark-logo'),
		defaultStickyLogo = defaultLogo.attr('data-sticky-logo'),
		retinaStickyLogo = retinaLogo.attr('data-sticky-logo'),
		defaultMobileLogo = defaultLogo.attr('data-mobile-logo'),
		retinaMobileLogo = retinaLogo.attr('data-mobile-logo'),
		$pagemenu = $('#page-menu'),
		$onePageMenuEl = $('.one-page-menu'),
		onePageGlobalOffset = 0,
		$portfolio = $('.portfolio'),
		$shop = $('.shop'),
		$gridContainer = $('.grid-container'),
		$slider = $('#slider'),
		$sliderParallaxEl = $('.slider-parallax'),
		swiperSlider = '',
		$pageTitle = $('#page-title'),
		$portfolioItems = $('.portfolio-ajax').find('.portfolio-item'),
		$portfolioDetails = $('#portfolio-ajax-wrap'),
		$portfolioDetailsContainer = $('#portfolio-ajax-container'),
		$portfolioAjaxLoader = $('#portfolio-ajax-loader'),
		$portfolioFilter = $('.portfolio-filter,.custom-filter'),
		prevPostPortId = '',
		$topSearch = $('#top-search'),
		$topCart = $('#top-cart'),
		$verticalMiddleEl = $('.vertical-middle'),
		$topSocialEl = $('#top-social').find('li'),
		$siStickyEl = $('.si-sticky'),
		$dotsMenuEl = $('.dots-menu'),
		$goToTopEl = $('#gotoTop'),
		$fullScreenEl = $('.full-screen'),
		$commonHeightEl = $('.common-height'),
		$testimonialsGridEl = $('.testimonials-grid'),
		$pageSectionEl = $('.page-section'),
		$owlCarouselEl = $('.owl-carousel'),
		$parallaxEl = $('.parallax'),
		$parallaxPageTitleEl = $('.page-title-parallax'),
		$parallaxPortfolioEl = $('.portfolio-parallax').find('.portfolio-image'),
		$youtubeBgPlayerEl = $('.yt-bg-player'),
		$textRotaterEl = $('.text-rotater'),
		$cookieNotification = $('#cookie-notification');
	$(document).ready(SEMICOLON.documentOnReady.init);
	$window.load(SEMICOLON.documentOnLoad.init);
	$window.on('resize', SEMICOLON.documentOnResize.init);
})(jQuery);
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
! function (e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
	"use strict";

	function t(t) {
		var r = t.data;
		t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
	}

	function r(t) {
		var r = t.target,
			a = e(r);
		if (!a.is("[type=submit],[type=image]")) {
			var n = a.closest("[type=submit]");
			if (0 === n.length) return;
			r = n[0]
		}
		var i = this;
		if (i.clk = r, "image" == r.type)
			if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
			else if ("function" == typeof e.fn.offset) {
			var o = a.offset();
			i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
		} else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
		setTimeout(function () {
			i.clk = i.clk_x = i.clk_y = null
		}, 100)
	}

	function a() {
		if (e.fn.ajaxSubmit.debug) {
			var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
			window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
		}
	}
	var n = {};
	n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
	var i = !!e.fn.prop;
	e.fn.attr2 = function () {
		if (!i) return this.attr.apply(this, arguments);
		var e = this.prop.apply(this, arguments);
		return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
	}, e.fn.ajaxSubmit = function (t) {
		function r(r) {
			var a, n, i = e.param(r, t.traditional).split("&"),
				o = i.length,
				s = [];
			for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
			return s
		}

		function o(a) {
			for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
			if (t.extraData) {
				var o = r(t.extraData);
				for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
			}
			t.data = null;
			var s = e.extend(!0, {}, e.ajaxSettings, t, {
				contentType: !1,
				processData: !1,
				cache: !1,
				type: u || "POST"
			});
			t.uploadProgress && (s.xhr = function () {
				var r = e.ajaxSettings.xhr();
				return r.upload && r.upload.addEventListener("progress", function (e) {
					var r = 0,
						a = e.loaded || e.position,
						n = e.total;
					e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
				}, !1), r
			}), s.data = null;
			var c = s.beforeSend;
			return s.beforeSend = function (e, r) {
				r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
			}, e.ajax(s)
		}

		function s(r) {
			function n(e) {
				var t = null;
				try {
					e.contentWindow && (t = e.contentWindow.document)
				} catch (r) {
					a("cannot get iframe.contentWindow document: " + r)
				}
				if (t) return t;
				try {
					t = e.contentDocument ? e.contentDocument : e.document
				} catch (r) {
					a("cannot get iframe.contentDocument: " + r), t = e.document
				}
				return t
			}

			function o() {
				function t() {
					try {
						var e = n(g).readyState;
						a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
					} catch (r) {
						a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
					}
				}
				var r = f.attr2("target"),
					i = f.attr2("action"),
					o = "multipart/form-data",
					c = f.attr("enctype") || f.attr("encoding") || o;
				w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
					encoding: "multipart/form-data",
					enctype: "multipart/form-data"
				}), m.timeout && (j = setTimeout(function () {
					T = !0, s(D)
				}, m.timeout));
				var l = [];
				try {
					if (m.extraData)
						for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
					m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
					try {
						w.submit()
					} catch (h) {
						var x = document.createElement("form").submit;
						x.apply(w)
					}
				} finally {
					w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
				}
			}

			function s(t) {
				if (!x.aborted && !F) {
					if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
					if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
					if (M && M.location.href != m.iframeSrc || T) {
						g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
						var r, i = "success";
						try {
							if (T) throw "timeout";
							var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
							if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
							var u = M.body ? M.body : M.documentElement;
							x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
								var t = {
									"content-type": m.dataType
								};
								return t[e.toLowerCase()]
							}, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
							var c = (m.dataType || "").toLowerCase(),
								l = /(json|script|text)/.test(c);
							if (l || m.textarea) {
								var f = M.getElementsByTagName("textarea")[0];
								if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
								else if (l) {
									var p = M.getElementsByTagName("pre")[0],
										h = M.getElementsByTagName("body")[0];
									p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
								}
							} else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
							try {
								E = _(x, c, m)
							} catch (y) {
								i = "parsererror", x.error = r = y || i
							}
						} catch (y) {
							a("error caught: ", y), i = "error", x.error = r = y || i
						}
						x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
							m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
						}, 100)
					}
				}
			}
			var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
				S = e.Deferred();
			if (S.abort = function (e) {
					x.abort(e)
				}, r)
				for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
			if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
					position: "absolute",
					top: "-1000px",
					left: "-1000px"
				})), g = v[0], x = {
					aborted: 0,
					responseText: null,
					responseXML: null,
					status: 0,
					statusText: "n/a",
					getAllResponseHeaders: function () {},
					getResponseHeader: function () {},
					setRequestHeader: function () {},
					abort: function (t) {
						var r = "timeout" === t ? "timeout" : "aborted";
						a("aborting upload... " + r), this.aborted = 1;
						try {
							g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
						} catch (n) {}
						v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
					}
				}, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
			if (x.aborted) return S.reject(), S;
			y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
			var D = 1,
				k = 2,
				A = e("meta[name=csrf-token]").attr("content"),
				L = e("meta[name=csrf-param]").attr("content");
			L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
			var E, M, F, O = 50,
				X = e.parseXML || function (e, t) {
					return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
				},
				C = e.parseJSON || function (e) {
					return window.eval("(" + e + ")")
				},
				_ = function (t, r, a) {
					var n = t.getResponseHeader("content-type") || "",
						i = "xml" === r || !r && n.indexOf("xml") >= 0,
						o = i ? t.responseXML : t.responseText;
					return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
				};
			return S
		}
		if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
		var u, c, l, f = this;
		"function" == typeof t ? t = {
			success: t
		} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
			url: l,
			success: e.ajaxSettings.success,
			type: u || e.ajaxSettings.type,
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
		}, t);
		var m = {};
		if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
		if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
		var d = t.traditional;
		void 0 === d && (d = e.ajaxSettings.traditional);
		var p, h = [],
			v = this.formToArray(t.semantic, h);
		if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
		if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
		var g = e.param(v, d);
		p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
		var x = [];
		if (t.resetForm && x.push(function () {
				f.resetForm()
			}), t.clearForm && x.push(function () {
				f.clearForm(t.includeHidden)
			}), !t.dataType && t.target) {
			var y = t.success || function () {};
			x.push(function (r) {
				var a = t.replaceTarget ? "replaceWith" : "html";
				e(t.target)[a](r).each(y, arguments)
			})
		} else t.success && x.push(t.success);
		if (t.success = function (e, r, a) {
				for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
			}, t.error) {
			var b = t.error;
			t.error = function (e, r, a) {
				var n = t.context || this;
				b.apply(n, [e, r, a, f])
			}
		}
		if (t.complete) {
			var T = t.complete;
			t.complete = function (e, r) {
				var a = t.context || this;
				T.apply(a, [e, r, f])
			}
		}
		var j = e("input[type=file]:enabled", this).filter(function () {
				return "" !== e(this).val()
			}),
			w = j.length > 0,
			S = "multipart/form-data",
			D = f.attr("enctype") == S || f.attr("encoding") == S,
			k = n.fileapi && n.formdata;
		a("fileAPI :" + k);
		var A, L = (w || D) && !k;
		t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
			A = s(v)
		}) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
		for (var E = 0; E < h.length; E++) h[E] = null;
		return this.trigger("form-submit-notify", [this, t]), this
	}, e.fn.ajaxForm = function (n) {
		if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
			var i = {
				s: this.selector,
				c: this.context
			};
			return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
				e(i.s, i.c).ajaxForm(n)
			}), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
		}
		return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
	}, e.fn.ajaxFormUnbind = function () {
		return this.unbind("submit.form-plugin click.form-plugin")
	}, e.fn.formToArray = function (t, r) {
		var a = [];
		if (0 === this.length) return a;
		var i, o = this[0],
			s = this.attr("id"),
			u = t ? o.getElementsByTagName("*") : o.elements;
		if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
		var c, l, f, m, d, p, h;
		for (c = 0, p = u.length; p > c; c++)
			if (d = u[c], f = d.name, f && !d.disabled)
				if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
					name: f,
					value: e(d).val(),
					type: d.type
				}), a.push({
					name: f + ".x",
					value: o.clk_x
				}, {
					name: f + ".y",
					value: o.clk_y
				}));
				else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
			for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
				name: f,
				value: m[l]
			});
		else if (n.fileapi && "file" == d.type) {
			r && r.push(d);
			var v = d.files;
			if (v.length)
				for (l = 0; l < v.length; l++) a.push({
					name: f,
					value: v[l],
					type: d.type
				});
			else a.push({
				name: f,
				value: "",
				type: d.type
			})
		} else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
			name: f,
			value: m,
			type: d.type,
			required: d.required
		}));
		if (!t && o.clk) {
			var g = e(o.clk),
				x = g[0];
			f = x.name, f && !x.disabled && "image" == x.type && (a.push({
				name: f,
				value: g.val()
			}), a.push({
				name: f + ".x",
				value: o.clk_x
			}, {
				name: f + ".y",
				value: o.clk_y
			}))
		}
		return a
	}, e.fn.formSerialize = function (t) {
		return e.param(this.formToArray(t))
	}, e.fn.fieldSerialize = function (t) {
		var r = [];
		return this.each(function () {
			var a = this.name;
			if (a) {
				var n = e.fieldValue(this, t);
				if (n && n.constructor == Array)
					for (var i = 0, o = n.length; o > i; i++) r.push({
						name: a,
						value: n[i]
					});
				else null !== n && "undefined" != typeof n && r.push({
					name: this.name,
					value: n
				})
			}
		}), e.param(r)
	}, e.fn.fieldValue = function (t) {
		for (var r = [], a = 0, n = this.length; n > a; a++) {
			var i = this[a],
				o = e.fieldValue(i, t);
			null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
		}
		return r
	}, e.fieldValue = function (t, r) {
		var a = t.name,
			n = t.type,
			i = t.tagName.toLowerCase();
		if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
		if ("select" == i) {
			var o = t.selectedIndex;
			if (0 > o) return null;
			for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
				var m = u[f];
				if (m.selected) {
					var d = m.value;
					if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
					s.push(d)
				}
			}
			return s
		}
		return e(t).val()
	}, e.fn.clearForm = function (t) {
		return this.each(function () {
			e("input,select,textarea", this).clearFields(t)
		})
	}, e.fn.clearFields = e.fn.clearInputs = function (t) {
		var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
		return this.each(function () {
			var a = this.type,
				n = this.tagName.toLowerCase();
			r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
		})
	}, e.fn.resetForm = function () {
		return this.each(function () {
			("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
		})
	}, e.fn.enable = function (e) {
		return void 0 === e && (e = !0), this.each(function () {
			this.disabled = !e
		})
	}, e.fn.selected = function (t) {
		return void 0 === t && (t = !0), this.each(function () {
			var r = this.type;
			if ("checkbox" == r || "radio" == r) this.checked = t;
			else if ("option" == this.tagName.toLowerCase()) {
				var a = e(this).parent("select");
				t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
			}
		})
	}, e.fn.ajaxSubmit.debug = !1
});
(function ($) {
	'use strict';
	if (typeof _wpcf7 == 'undefined' || _wpcf7 === null) {
		_wpcf7 = {};
	}
	_wpcf7 = $.extend({
		cached: 0
	}, _wpcf7);
	$.fn.wpcf7InitForm = function () {
		this.ajaxForm({
			beforeSubmit: function (arr, $form, options) {
				$form.wpcf7ClearResponseOutput();
				$form.find('[aria-invalid]').attr('aria-invalid', 'false');
				$form.find('img.ajax-loader').css({
					visibility: 'visible'
				});
				return true;
			},
			beforeSerialize: function ($form, options) {
				$form.find('[placeholder].placeheld').each(function (i, n) {
					$(n).val('');
				});
				return true;
			},
			data: {
				'_wpcf7_is_ajax_call': 1
			},
			dataType: 'json',
			success: $.wpcf7AjaxSuccess,
			error: function (xhr, status, error, $form) {
				var e = $('<div class="ajax-error"></div>').text(error.message);
				$form.after(e);
			}
		});
		if (_wpcf7.cached) {
			this.wpcf7OnloadRefill();
		}
		this.wpcf7ToggleSubmit();
		this.find('.wpcf7-submit').wpcf7AjaxLoader();
		this.find('.wpcf7-acceptance').click(function () {
			$(this).closest('form').wpcf7ToggleSubmit();
		});
		this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
		this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
		this.find('[placeholder]').wpcf7Placeholder();
		if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.date) {
			this.find('input.wpcf7-date[type="date"]').each(function () {
				$(this).datepicker({
					dateFormat: 'yy-mm-dd',
					minDate: new Date($(this).attr('min')),
					maxDate: new Date($(this).attr('max'))
				});
			});
		}
		if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.number) {
			this.find('input.wpcf7-number[type="number"]').each(function () {
				$(this).spinner({
					min: $(this).attr('min'),
					max: $(this).attr('max'),
					step: $(this).attr('step')
				});
			});
		}
		this.find('.wpcf7-character-count').wpcf7CharacterCount();
		this.find('.wpcf7-validates-as-url').change(function () {
			$(this).wpcf7NormalizeUrl();
		});
		this.find('.wpcf7-recaptcha').wpcf7Recaptcha();
	};
	$.wpcf7AjaxSuccess = function (data, status, xhr, $form) {
		if (!$.isPlainObject(data) || $.isEmptyObject(data)) {
			return;
		}
		var $responseOutput = $form.find('div.wpcf7-response-output');
		$form.wpcf7ClearResponseOutput();
		$form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
		$form.removeClass('invalid spam sent failed');
		if (data.captcha) {
			$form.wpcf7RefillCaptcha(data.captcha);
		}
		if (data.quiz) {
			$form.wpcf7RefillQuiz(data.quiz);
		}
		if (data.invalids) {
			$.each(data.invalids, function (i, n) {
				$form.find(n.into).wpcf7NotValidTip(n.message);
				$form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
				$form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
			});
			$responseOutput.addClass('wpcf7-validation-errors');
			$form.addClass('invalid');
			$(data.into).trigger('wpcf7:invalid');
			$(data.into).trigger('invalid.wpcf7');
		} else if (1 == data.spam) {
			$form.find('[name="g-recaptcha-response"]').each(function () {
				if ('' == $(this).val()) {
					var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
					$recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);
				}
			});
			$responseOutput.addClass('wpcf7-spam-blocked');
			$form.addClass('spam');
			$(data.into).trigger('wpcf7:spam');
			$(data.into).trigger('spam.wpcf7');
		} else if (1 == data.mailSent) {
			$responseOutput.addClass('wpcf7-mail-sent-ok');
			$form.addClass('sent');
			if (data.onSentOk) {
				$.each(data.onSentOk, function (i, n) {
					eval(n)
				});
			}
			$(data.into).trigger('wpcf7:mailsent');
			$(data.into).trigger('mailsent.wpcf7');
		} else {
			$responseOutput.addClass('wpcf7-mail-sent-ng');
			$form.addClass('failed');
			$(data.into).trigger('wpcf7:mailfailed');
			$(data.into).trigger('mailfailed.wpcf7');
		}
		if (data.onSubmit) {
			$.each(data.onSubmit, function (i, n) {
				eval(n)
			});
		}
		$(data.into).trigger('wpcf7:submit');
		$(data.into).trigger('submit.wpcf7');
		if (1 == data.mailSent) {
			$form.resetForm();
		}
		$form.find('[placeholder].placeheld').each(function (i, n) {
			$(n).val($(n).attr('placeholder'));
		});
		$responseOutput.append(data.message).slideDown('fast');
		$responseOutput.attr('role', 'alert');
		$.wpcf7UpdateScreenReaderResponse($form, data);
	};
	$.fn.wpcf7ExclusiveCheckbox = function () {
		return this.find('input:checkbox').click(function () {
			var name = $(this).attr('name');
			$(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
		});
	};
	$.fn.wpcf7Placeholder = function () {
		if (_wpcf7.supportHtml5.placeholder) {
			return this;
		}
		return this.each(function () {
			$(this).val($(this).attr('placeholder'));
			$(this).addClass('placeheld');
			$(this).focus(function () {
				if ($(this).hasClass('placeheld'))
					$(this).val('').removeClass('placeheld');
			});
			$(this).blur(function () {
				if ('' == $(this).val()) {
					$(this).val($(this).attr('placeholder'));
					$(this).addClass('placeheld');
				}
			});
		});
	};
	$.fn.wpcf7AjaxLoader = function () {
		return this.each(function () {
			var loader = $('<img class="ajax-loader" />').attr({
				src: _wpcf7.loaderUrl,
				alt: _wpcf7.sending
			}).css('visibility', 'hidden');
			$(this).after(loader);
		});
	};
	$.fn.wpcf7ToggleSubmit = function () {
		return this.each(function () {
			var form = $(this);
			if (this.tagName.toLowerCase() != 'form') {
				form = $(this).find('form').first();
			}
			if (form.hasClass('wpcf7-acceptance-as-validation')) {
				return;
			}
			var submit = form.find('input:submit');
			if (!submit.length) return;
			var acceptances = form.find('input:checkbox.wpcf7-acceptance');
			if (!acceptances.length) return;
			submit.removeAttr('disabled');
			acceptances.each(function (i, n) {
				n = $(n);
				if (n.hasClass('wpcf7-invert') && n.is(':checked') || !n.hasClass('wpcf7-invert') && !n.is(':checked')) {
					submit.attr('disabled', 'disabled');
				}
			});
		});
	};
	$.fn.wpcf7ToggleCheckboxFreetext = function () {
		return this.each(function () {
			var $wrap = $(this).closest('.wpcf7-form-control');
			if ($(this).find(':checkbox, :radio').is(':checked')) {
				$(this).find(':input.wpcf7-free-text').prop('disabled', false);
			} else {
				$(this).find(':input.wpcf7-free-text').prop('disabled', true);
			}
			$wrap.find(':checkbox, :radio').change(function () {
				var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
				var $freetext = $(':input.wpcf7-free-text', $wrap);
				if ($cb.is(':checked')) {
					$freetext.prop('disabled', false).focus();
				} else {
					$freetext.prop('disabled', true);
				}
			});
		});
	};
	$.fn.wpcf7CharacterCount = function () {
		return this.each(function () {
			var $count = $(this);
			var name = $count.attr('data-target-name');
			var down = $count.hasClass('down');
			var starting = parseInt($count.attr('data-starting-value'), 10);
			var maximum = parseInt($count.attr('data-maximum-value'), 10);
			var minimum = parseInt($count.attr('data-minimum-value'), 10);
			var updateCount = function ($target) {
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr('data-current-value', count);
				$count.text(count);
				if (maximum && maximum < length) {
					$count.addClass('too-long');
				} else {
					$count.removeClass('too-long');
				}
				if (minimum && length < minimum) {
					$count.addClass('too-short');
				} else {
					$count.removeClass('too-short');
				}
			};
			$count.closest('form').find(':input[name="' + name + '"]').each(function () {
				updateCount($(this));
				$(this).keyup(function () {
					updateCount($(this));
				});
			});
		});
	};
	$.fn.wpcf7NormalizeUrl = function () {
		return this.each(function () {
			var val = $.trim($(this).val());
			if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
				val = val.replace(/^\/+/, '');
				val = 'http://' + val;
			}
			$(this).val(val);
		});
	};
	$.fn.wpcf7NotValidTip = function (message) {
		return this.each(function () {
			var $into = $(this);
			$into.find('span.wpcf7-not-valid-tip').remove();
			$into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');
			if ($into.is('.use-floating-validation-tip *')) {
				$('.wpcf7-not-valid-tip', $into).mouseover(function () {
					$(this).wpcf7FadeOut();
				});
				$(':input', $into).focus(function () {
					$('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
				});
			}
		});
	};
	$.fn.wpcf7FadeOut = function () {
		return this.each(function () {
			$(this).animate({
				opacity: 0
			}, 'fast', function () {
				$(this).css({
					'z-index': -100
				});
			});
		});
	};
	$.fn.wpcf7OnloadRefill = function () {
		return this.each(function () {
			var url = $(this).attr('action');
			if (0 < url.indexOf('#')) {
				url = url.substr(0, url.indexOf('#'));
			}
			var id = $(this).find('input[name="_wpcf7"]').val();
			var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();
			$.getJSON(url, {
				_wpcf7_is_ajax_call: 1,
				_wpcf7: id,
				_wpcf7_request_ver: $.now()
			}, function (data) {
				if (data && data.captcha) {
					$('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
				}
				if (data && data.quiz) {
					$('#' + unitTag).wpcf7RefillQuiz(data.quiz);
				}
			});
		});
	};
	$.fn.wpcf7RefillCaptcha = function (captcha) {
		return this.each(function () {
			var form = $(this);
			$.each(captcha, function (i, n) {
				form.find(':input[name="' + i + '"]').clearFields();
				form.find('img.wpcf7-captcha-' + i).attr('src', n);
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
				form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
			});
		});
	};
	$.fn.wpcf7RefillQuiz = function (quiz) {
		return this.each(function () {
			var form = $(this);
			$.each(quiz, function (i, n) {
				form.find(':input[name="' + i + '"]').clearFields();
				form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
				form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
			});
		});
	};
	$.fn.wpcf7ClearResponseOutput = function () {
		return this.each(function () {
			$(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
			$(this).find('span.wpcf7-not-valid-tip').remove();
			$(this).find('img.ajax-loader').css({
				visibility: 'hidden'
			});
		});
	};
	$.fn.wpcf7Recaptcha = function () {
		return this.each(function () {
			var events = 'wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';
			$(this).closest('div.wpcf7').on(events, function (e) {
				if (recaptchaWidgets && grecaptcha) {
					$.each(recaptchaWidgets, function (index, value) {
						grecaptcha.reset(value);
					});
				}
			});
		});
	};
	$.wpcf7UpdateScreenReaderResponse = function ($form, data) {
		$('.wpcf7 .screen-reader-response').html('').attr('role', '');
		if (data.message) {
			var $response = $form.siblings('.screen-reader-response').first();
			$response.append(data.message);
			if (data.invalids) {
				var $invalids = $('<ul></ul>');
				$.each(data.invalids, function (i, n) {
					if (n.idref) {
						var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
					} else {
						var $li = $('<li></li>').append(n.message);
					}
					$invalids.append($li);
				});
				$response.append($invalids);
			}
			$response.attr('role', 'alert').focus();
		}
	};
	$.wpcf7SupportHtml5 = function () {
		var features = {};
		var input = document.createElement('input');
		features.placeholder = 'placeholder' in input;
		var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
		$.each(inputTypes, function (index, value) {
			input.setAttribute('type', value);
			features[value] = input.type !== 'text';
		});
		return features;
	};
	$(function () {
		_wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
		$('div.wpcf7 > form').wpcf7InitForm();
	});
})(jQuery);
jQuery(document).ready(function () {
	var percentage = jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar').attr('percentage');
	var rotate = percentage * 1.8;
	jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({
		'-webkit-transform': 'rotate(' + rotate + 'deg)',
		'-ms-transform': 'rotate(' + rotate + 'deg)',
		'transform': 'rotate(' + rotate + 'deg)'
	});
	jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .inset').css('background-color', jQuery('#wp-admin-bar-autoptimize .ab-sub-wrapper').css('background-color'));
	jQuery('#wp-admin-bar-autoptimize-delete-cache .ab-item').css('background-color', jQuery('#wpadminbar').css('background-color'));
	jQuery('#wp-admin-bar-autoptimize-default li').click(function (e) {
		var id = (typeof e.target.id != 'undefined' && e.target.id) ? e.target.id : jQuery(e.target).parent('li').attr('id');
		var action = '';
		if (id == 'wp-admin-bar-autoptimize-delete-cache') {
			action = 'autoptimize_delete_cache';
		} else {
			return;
		}
		jQuery('#wp-admin-bar-autoptimize').removeClass('hover');
		var modal_loading = jQuery('<div class="autoptimize-loading"></div>').appendTo('body').show();
		jQuery.ajax({
			type: 'GET',
			url: autoptimize_ajax_object.ajaxurl,
			data: {
				'action': action,
				'nonce': autoptimize_ajax_object.nonce
			},
			dataType: 'json',
			cache: false,
			timeout: 5000,
			success: function (data) {
				modal_loading.remove();
				jQuery('#wp-admin-bar-autoptimize-cache-info .size').attr('class', 'size green').html('0.00 B');
				jQuery('#wp-admin-bar-autoptimize-cache-info .files').html('0');
				jQuery('#wp-admin-bar-autoptimize-cache-info .percentage .numbers').attr('class', 'numbers green').html('0%');
				jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').attr('class', 'fill bg-green');
				jQuery('#wp-admin-bar-autoptimize').attr('class', 'menupop bullet-green');
				jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({
					'-webkit-transform': 'rotate(0deg)',
					'-ms-transform': 'rotate(0deg)',
					'transform': 'rotate(0deg)'
				});
			},
			error: function (jqXHR, textStatus) {
				modal_loading.remove();
				jQuery('<div id="ao-delete-cache-timeout" class="notice notice-error is-dismissible"><p><strong><span style="display:block;clear:both;">' + autoptimize_ajax_object.error_msg + '</span></strong></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">' + autoptimize_ajax_object.dismiss_msg + '</span></button></div><br>').insertAfter('#wpbody .wrap h1:first-of-type').show();
			}
		});
	});
});
! function (a, b) {
	"use strict";

	function c() {
		if (!e) {
			e = !0;
			var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
				h = !!navigator.userAgent.match(/Trident.*rv:11\./),
				i = b.querySelectorAll("iframe.wp-embedded-content");
			for (c = 0; c < i.length; c++)
				if (d = i[c], !d.getAttribute("data-secret")) {
					if (f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f), g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
				} else;
		}
	}
	var d = !1,
		e = !1;
	if (b.querySelector)
		if (a.addEventListener) d = !0;
	if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
		if (a.wp.receiveEmbedMessage = function (c) {
				var d = c.data;
				if (d.secret || d.message || d.value)
					if (!/[^a-zA-Z0-9]/.test(d.secret)) {
						var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
							k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
						for (e = 0; e < k.length; e++) k[e].style.display = "none";
						for (e = 0; e < j.length; e++)
							if (f = j[e], c.source === f.contentWindow) {
								if (f.removeAttribute("style"), "height" === d.message) {
									if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
									else if (~~g < 200) g = 200;
									f.height = g
								}
								if ("link" === d.message)
									if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
										if (b.activeElement === f) a.top.location.href = d.value
							} else;
					}
			}, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
jQuery(document).ready(function () {
	window.fbAsyncInit = function () {
		FB.init({
			appId: window.ism_facebook_id,
			xfbml: true,
			version: 'v2.5'
		});
	};
	(function (d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement(s);
		js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk-ism'));
});

function ism_fake_increment(target, type, url) {
	var value = parseInt(jQuery(target).html());
	if ((value % 1 === 0 && value != '') || value == 0) value++;
	jQuery(target).html(value);
	if (typeof window.ism_save_share_counts != 'undefined' && window.ism_save_share_counts == 1) {
		jQuery.ajax({
			type: "post",
			url: window.ism_base_path + '/wp-admin/admin-ajax.php',
			data: {
				action: "ism_update_db_share_count_share_bttn_action",
				sm: type,
				the_url: url,
			},
		});
	}
	if ((typeof window.ism_enable_statistics != 'undefined' && window.ism_enable_statistics == 1) || type == 'twitter') {
		jQuery.ajax({
			type: "post",
			url: window.ism_base_path + '/wp-admin/admin-ajax.php',
			data: {
				action: "ism_update_share_db_wd",
				sm: type,
				the_url: url,
			},
		});
	}
}

function ism_load_counts(i, ism_url, wrapp_id, items, i_print) {
	if (typeof items[i] == 'undefined') return;
	the_sm_type = items[i];
	jQuery.ajax({
		type: "post",
		url: window.ism_base_path + '/wp-admin/admin-ajax.php',
		data: {
			action: "ism_a_return_counts",
			dir_url: ism_url,
			sm_type: the_sm_type
		},
		success: function (response) {
			num = i + 1;
			ism_load_counts(num, ism_url, wrapp_id, items, i_print);
			if (response == '' || isNaN(response)) return;
			if (items[i] == 'twitter' || items[i] == 'linkedin') {
				recheck_tw_li_every_time(ism_url, wrapp_id, items[i], i_print);
			} else {
				setNumDiv(0, Number(response), wrapp_id + ' .' + items[i] + '_share_count', i_print);
				if (typeof window.total_share_obj != 'undefined' && typeof window.total_share_obj[wrapp_id] != 'undefined') {
					window.total_share_obj[wrapp_id] = Number(response) + Number(window.total_share_obj[wrapp_id]);
				}
			}
		}
	});
	if (items.length == i + 1) {
		if (typeof window.total_share_obj != 'undefined' && typeof window.total_share_obj[wrapp_id] != 'undefined') {
			ism_print_total_count(wrapp_id);
		}
	}
}

function recheck_tw_li_every_time(ism_url, wrapp_id, the_sm_type, i_print) {
	if (the_sm_type == 'linkedin') {
		var linkedin_url = "https://www.linkedin.com/countserv/count/share?format=jsonp&url=" + ism_url + "&callback=?";
		jQuery.getJSON(linkedin_url).done(function (data) {
			jQuery.ajax({
				type: "post",
				url: window.ism_base_path + '/wp-admin/admin-ajax.php',
				data: {
					action: "ism_check_min_special_counts_from_js_tl",
					the_url: ism_url,
					the_type: the_sm_type,
					the_count: data.count,
				},
				success: function (response) {
					if (response != 'not_show') {
						n = Number(response);
						setNumDiv(0, n, wrapp_id + ' .linkedin_share_count', i_print);
						if (typeof window.total_share_obj != 'undefined' && typeof window.total_share_obj[wrapp_id] != 'undefined') {
							window.total_share_obj[wrapp_id] = n + Number(window.total_share_obj[wrapp_id]);
							ism_print_total_count(wrapp_id);
						}
					}
				}
			});
		});
	} else if (the_sm_type == 'twitter') {
		return;
		var twitter_url = "http://cdn.api.twitter.com/1/urls/count.json?url=" + ism_url + "&callback=?";
		jQuery.getJSON(twitter_url).done(function (data) {
			jQuery.ajax({
				type: "post",
				url: window.ism_base_path + '/wp-admin/admin-ajax.php',
				data: {
					action: "ism_check_min_special_counts_from_js_tl",
					the_url: ism_url,
					the_type: the_sm_type,
					the_count: data.count,
				},
				success: function (response) {
					if (response != 'not_show') {
						n = parseInt(response);
						setNumDiv(0, n, wrapp_id + ' .twitter_share_count', i_print);
						if (typeof window.total_share_obj != 'undefined' && typeof window.total_share_obj[wrapp_id] != 'undefined') {
							window.total_share_obj[wrapp_id] = n + Number(window.total_share_obj[wrapp_id]);
							ism_print_total_count(wrapp_id);
						}
					}
				}
			});
		});
	}
}

function ism_load_counts_from_db(the_sm_list, ism_url, wrapp_id, i_print) {
	jQuery.ajax({
		type: "post",
		url: window.ism_base_path + '/wp-admin/admin-ajax.php',
		data: {
			action: "ism_get_sm_db_share_counts_return_list",
			the_url: ism_url,
			sm_list: the_sm_list,
		},
		success: function (response) {
			response = jQuery.parseJSON(response);
			twitter_flag = 0;
			linkedin_flag = 0;
			if (typeof response['linkedin-flag'] != 'undefined') {
				delete response['linkedin-flag'];
				linkedin_flag = 1;
			}
			if (typeof response['twitter-flag'] != 'undefined') {
				delete response['twitter-flag'];
				twitter_flag = 1;
			}
			total_share = 0;
			for (var key in response) {
				num = response[key];
				t_inc = 0;
				if (num != 'not_show') {
					if (num == null || isNaN(num)) num = 0;
					setNumDiv(0, parseInt(num), wrapp_id + ' .' + key + '_share_count', i_print);
				}
				if (key == 'twitter' && twitter_flag == 1) {
					t_inc = 1;
					recheck_tw_li_on_counts_from_db(key, num, ism_url, wrapp_id, i_print);
				} else if (key == 'linkedin' && linkedin_flag == 1) {
					t_inc = 1;
					recheck_tw_li_on_counts_from_db(key, num, ism_url, wrapp_id, i_print);
				}
				if (t_inc == 0 && typeof window.total_share_obj != 'undefined' && typeof window.total_share_obj[wrapp_id] != 'undefined') {
					if (num == null || isNaN(num) || num == 'not_show') num = 0;
					total_share = total_share + Number(num);
				}
			}
			if (typeof window.total_share_obj != 'undefined' && window.total_share_obj[wrapp_id] != 'undefined') {
				if (Number.isInteger(window.total_share_obj[wrapp_id])) {
					window.total_share_obj[wrapp_id] = window.total_share_obj[wrapp_id] + total_share;
				} else {
					window.total_share_obj[wrapp_id] = total_share;
				}
				ism_print_total_count(wrapp_id);
			}
		}
	});
}

function recheck_tw_li_on_counts_from_db(key, num, ism_url, wrapp_id, i_print) {
	if (key == 'linkedin') {
		var linkedin_url = "https://www.linkedin.com/countserv/count/share?format=jsonp&url=" + ism_url + "&callback=?";
		jQuery.getJSON(linkedin_url).done(function (data) {
			jQuery.ajax({
				type: "post",
				url: window.ism_base_path + '/wp-admin/admin-ajax.php',
				data: {
					action: "ism_check_tl_flag",
					the_url: ism_url,
					sm: key,
					the_count: data.count
				},
				success: function (response) {
					if (response != 'not_show') {
						setNumDiv(0, parseInt(response), wrapp_id + ' .' + key + '_share_count', i_print);
						if (typeof window.total_share_obj != 'undefined' && typeof window.total_share_obj[wrapp_id] != 'undefined') {
							window.total_share_obj[wrapp_id] = window.total_share_obj[wrapp_id] + Number(response);
							ism_print_total_count(wrapp_id);
						}
					}
				}
			});
		});
	} else if (key == 'twitter') {
		return;
		var twitter_url = "http://cdn.api.twitter.com/1/urls/count.json?url=" + ism_url + "&callback=?";
		jQuery.getJSON(twitter_url).done(function (data) {
			jQuery.ajax({
				type: "post",
				url: window.ism_base_path + '/wp-admin/admin-ajax.php',
				data: {
					action: "ism_check_tl_flag",
					the_url: ism_url,
					sm: key,
					the_count: data.count
				},
				success: function (response) {
					if (response != 'not_show') {
						setNumDiv(0, Number(response), wrapp_id + ' .' + key + '_share_count', i_print);
						if (typeof window.total_share_obj != 'undefined' && typeof window.total_share_obj[wrapp_id] != 'undefined') {
							window.total_share_obj[wrapp_id] = window.total_share_obj[wrapp_id] + Number(response);
							ism_print_total_count(wrapp_id);
						}
					}
				}
			});
		});
	}
}

function ism_print_total_count(id) {
	if (typeof window.total_share_obj[id] != 'undefined' && window.total_share_obj[id] !== true) {
		if (!isNaN(window.total_share_obj[id])) setNumDiv(parseInt(jQuery(id + ' .ism_tc_count').html()), window.total_share_obj[id], id + ' .ism_tc_count', 1);
	}
}

function setNumDiv(current, max, div, i_print) {
	if (current < parseInt(jQuery(div).html())) return;
	if (current > max) return;
	if (i_print == 0) return;
	cnt = current;
	if (cnt > 999) {
		if (cnt > 999999) {
			cnt = cnt / 1000000;
			type_num = 'M';
		} else {
			cnt = cnt / 1000;
			type_num = 'k';
		}
		if (cnt <= 99 && cnt % 1 > 0.09) {
			entire_num = cnt.toString();
			arr = entire_num.split('.');
			d = parseInt(arr[1][0]);
			if (arr[1][1] >= 5) d = d + 1;
			cnt = arr[0] + '.' + d;
		} else cnt = parseInt(cnt);
		cnt += type_num;
	}
	jQuery(div).html(cnt);
	setTimeout(function () {
		step = 1;
		if (max - current > 1000) step = 500;
		if (max - current < 1001) step = 300;
		if (max - current < 501) step = 100;
		if (max - current < 101) step = 10;
		if (max - current < 11) step = 1;
		current = current + step;
		setNumDiv(current, max, div);
	}, 1);
}

function indeedPopUpEmail(ism_url, currentURL) {
	jQuery.ajax({
		type: "post",
		data: {
			action: "ism_send_email_ajax_popup",
			url: ism_url,
			permalink: currentURL
		},
		url: window.ism_base_path + '/wp-admin/admin-ajax.php',
		success: function (data) {
			jQuery(data).hide().appendTo('body').fadeIn('normal');
		},
		dataType: 'html'
	});
}

function indeedPrintFriendlyCount(ism_url, postId) {
	jQuery.ajax({
		type: "post",
		data: {
			action: "ism_print_friendly",
			the_url: ism_url,
		},
		url: window.ism_base_path + '/wp-admin/admin-ajax.php',
		success: function (data) {
			jQuery(data).hide().appendTo('body').fadeIn('normal');
		},
		dataType: 'html'
	});
}

function ism_func_sendEmail() {
	jQuery('#loading_img').css('display', 'inline-block');
	jQuery.ajax({
		type: "post",
		data: {
			action: "ism_sendEmail",
			name: jQuery('#ism_email_name').val(),
			from: jQuery('#ism_email_from').val(),
			sentTo: jQuery('#ism_email_sentto').val(),
			subject: jQuery('#ism_email_subject').val(),
			message: jQuery('#ism_email_message').val(),
			capcha: jQuery('#capcha_answer').val(),
			capcha_key: jQuery('#cp_ar_k').val(),
			the_url: jQuery('#popup_ism_theurl').val(),
		},
		url: window.ism_base_path + '/wp-admin/admin-ajax.php',
		success: function (data) {
			jQuery('#loading_img').fadeOut();
			if (jQuery('#capcha_error').length) jQuery('#capcha_error').remove();
			if (jQuery('#ism_form_error').length) jQuery('#ism_form_error').remove();
			if (data == 1) {
				jQuery('.popup_content').append('<p id="succes_message" class="popup_success">' + jQuery('#email_success_message').val() + '</p>');
				setTimeout(function () {
					closePopup();
				}, 2000);
			} else if (data == 2) {
				jQuery('.popup_content').append('<p class="popup_error" id="capcha_error">Wrong Answer!</p>');
			} else {
				jQuery('.popup_content').append('<p  class="popup_error" id="ism_form_error">Something Went Wrong. Please Try Again!</p>');
			}
		},
		dataType: 'html'
	});
}

function closePopup() {
	jQuery('#popup_box').fadeOut('normal', function () {
		jQuery('#popup_box').remove();
	});
}

function activateLocker(ism_content_id, ism_locker_id, ism_vc_set, url, overlock, delay_lk) {
	if (overlock == 'default') {
		jQuery('#' + ism_locker_id).css('display', 'block');
		if (ism_vc_set == 1) {
			var s = jQuery("#" + ism_locker_id).next();
			var s2 = jQuery(s).next();
			jQuery(s2).attr('id', ism_content_id);
			jQuery(s2).css('display', 'none');
		} else {
			jQuery('#' + ism_content_id).css('display', 'none');
		}
		jQuery('#' + ism_locker_id + ', #' + ism_content_id + ' ').wrapAll('<div class="ismLockerWrap" style="position: relative;">');
	} else {
		if (ism_vc_set == 1) {
			jQuery(this).next().attr('id', ism_content_id);
		}
		locker_height = jQuery('#' + ism_locker_id).outerHeight();
		margin_top = parseInt(locker_height) / 2;
		margin_top = '-' + margin_top + 'px';
		jQuery('#' + ism_locker_id).css({
			'display': 'block',
			'position': 'absolute',
			'top': '0px',
			'top': '25%',
			'left': '0px',
			'width': '100%',
			'height': '100%',
			'z-index': 2,
		});
		if (overlock == 'blur') {
			jQuery('#' + ism_content_id).css({
				'opacity': '0.85',
				'display': 'block',
				'-webkit-filter': 'blur(5px)',
				'-moz-filter': 'blur(5px)',
				'-o-filter': 'blur(5px)',
				'-ms-filter': 'blur(5px)',
				'filter': 'blur(5px)',
			});
		} else {
			jQuery('#' + ism_content_id).css({
				'opacity': '0.15',
				'display': 'block',
			});
		}
		jQuery('#' + ism_locker_id + ', #' + ism_content_id + ' ').wrapAll('<div class="ismLockerWrap" style="position: relative;min-height: ' + locker_height + 'px; overflow:hidden;">');
	}
}
jQuery(document).ready(function () {
	jQuery('.ism-before-row').each(function () {
		var ism_content_id = jQuery(this).attr('data-id');
		var ism_locker_id = jQuery(this).attr('data-lockerId');
		var ism_vc_set = jQuery(this).attr('data-vc_set');
		var url = jQuery(this).attr('data-ism_url');
		var overlock = jQuery(this).attr('data-ism_overlock');
		var delay_lk = jQuery(this).attr('data-ism_delay_lk');
		v = jQuery.jStorage.get(url);
		if (v) {
			jQuery('#' + ism_locker_id).css('display', 'none');
			jQuery('#' + ism_content_id).css('display', 'block');
		} else {
			if (delay_lk > 0) {
				jQuery('#' + ism_content_id).css('display', 'block');
				setTimeout(function () {
					activateLocker(ism_content_id, ism_locker_id, ism_vc_set, url, overlock, delay_lk);
				}, delay_lk * 1000);
			} else {
				activateLocker(ism_content_id, ism_locker_id, ism_vc_set, url, overlock, delay_lk);
			}
		}
		jQuery(this).remove();
	});
});

function openPinterestShare() {
	closePopup();
	if (window.pinterest_feat_img && window.pinterest_feat_img != '') {
		window.open('http://pinterest.com/pin/create/bookmarklet/?media=' + window.pinterest_feat_img + jQuery('#pin_hide_info').val(), 'sharer', 'toolbar=0,status=0,width=750,height=330');
	} else {
		window.open('http://pinterest.com/pin/create/bookmarklet/?media=' + jQuery('#pin_default_feat_img').val() + jQuery('#pin_hide_info').val(), 'sharer', 'toolbar=0,status=0,width=750,height=330');
	}
}

function indeedPinterestPopUp(rand_pin) {
	window.pinterest_feat_img = '';
	var imgSrc = new Array();
	if (jQuery('#indeed_top_ism').length) {
		parent = jQuery('#indeed_top_ism').parent();
		if (jQuery(parent).attr('id')) selector = '#' + jQuery(parent).attr('id');
		else selector = '.' + jQuery(parent).attr('class');
		jQuery(selector + " img").each(function () {
			if (jQuery(this).attr('src')) imgSrc.push(jQuery(this).attr('src'));
		});
	} else {
		jQuery('body img').each(function () {
			if (jQuery(this).attr('src')) {
				if (jQuery(this).width() > 99) {
					imgSrc.push(jQuery(this).attr('src'));
				}
			}
		});
	}
	def_img = jQuery('#pin_default_feat_img_' + rand_pin).val();
	if (jQuery.inArray(def_img, imgSrc) === -1) imgSrc.push(def_img);
	jQuery.ajax({
		type: "post",
		data: {
			action: "ism_pinterest_popup",
			ism_images: imgSrc,
			other_info: jQuery('#pin_hide_info_' + rand_pin).val()
		},
		url: window.ism_base_path + '/wp-admin/admin-ajax.php',
		success: function (data) {
			jQuery(data).hide().appendTo('body').fadeIn('normal');
		},
		dataType: 'html'
	});
}

function pinterest_select_img(target) {
	window.pinterest_feat_img = jQuery(target).attr('src');
	openPinterestShare();
}

function ism_the_TimeOut(timeout, content_id, locker_id) {
	var id = '#line_' + locker_id;
	locker_id = '#' + locker_id;
	var wd = 100;
	timeout = timeout * 10;
	counter = setTimeout(ism_countDown, timeout);

	function ism_countDown() {
		if (wd <= 0) {
			jQuery(locker_id).css('display', 'none');
			jQuery(content_id).css({
				'display': 'block',
				'opacity': 1,
				'-webkit-filter': 'none',
				'-moz-filter': 'none',
				'-o-filter': 'none',
				'-ms-filter': 'none',
				'filter': 'none'
			});
			return;
		}
		wd = wd - 1;
		jQuery(id).css('width', wd + '%');
		setTimeout(ism_countDown, timeout);
	}
}

function ismMobilePopup(id, the_direction) {
	jQuery(id).toggle('slide', {
		direction: the_direction
	}, 500);
}

function ismMoveDiv(id) {
	if (jQuery(id).css('left') == '-45px') {
		jQuery(id).animate({
			"left": "+=45px"
		}, "slow");
	} else {
		jQuery(id).animate({
			"left": "-=45px"
		}, "slow");
	}
}

function ism_slide_in(id, st, t, auto) {
	if (typeof t == 'undefined' || t == '') t = 0;
	setTimeout(function () {
		slide_arr = ['up', 'down', 'left', 'right'];
		if (inArray(st, slide_arr)) {
			jQuery(id).show('slide', {
				direction: st
			}, 1000);
		} else if (st == 'fadeIn') {
			jQuery(id).fadeIn(1000);
		} else {
			var o = {};
			if (st == "scale") {
				o = {
					percent: 100
				};
			}
			jQuery(id).show(st, o, 1000);
		}
		if (typeof auto != 'undefined' && auto != '0')
			ism_autoclose_slide(auto, id);
	}, t * 1000);
}

function ism_autoclose_slide(d, id) {
	setTimeout(function () {
		jQuery(id).fadeOut(500);
	}, d * 1000);
}

function ism_close_slide(id) {
	jQuery(id).fadeOut(500);
	if (window.ism_slide_display_once == 1) window.ism_slide_display_once = 0;
	else window.ism_slide_display_once = 1;
}

function ism_show_popup(id, st, t, auto) {
	if (typeof t == 'undefined' || t == '') t = 0;
	setTimeout(function () {
		jQuery('.ism_popup_wrapper').show();
		slide_arr = ['up', 'down', 'left', 'right'];
		if (inArray(st, slide_arr)) {
			jQuery(id).show('slide', {
				direction: st
			}, 1000);
		} else if (st == 'fadeIn') {
			jQuery(id).fadeIn(1000);
		} else {
			var o = {};
			if (st == "scale") {
				o = {
					percent: 100
				};
			}
			jQuery(id).show(st, o, 1000);
		}
		if (typeof auto != 'undefined' && auto != '0')
			ism_autoclose_popup(auto, id);
	}, t * 1000);
	ism_popup_resize_mobile('.ism_popup_box');
}

function ism_autoclose_popup(d, id) {
	setTimeout(function () {
		jQuery(id).css('display', 'none');
		jQuery('.ism_popup_wrapper').css('display', 'none');
		if (window.ism_popup_display_once == 1) window.ism_popup_display_once = 0;
		else window.ism_popup_display_once = 1;
	}, d * 1000);
}

function ism_close_popup(id) {
	jQuery(id).css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');
	if (window.ism_popup_display_once == 1) window.ism_popup_display_once = 0;
	else window.ism_popup_display_once = 1;
}

function inArray(needle, haystack) {
	var length = haystack.length;
	for (var i = 0; i < length; i++) {
		if (haystack[i] == needle) return true;
	}
	return false;
}

function ism_popup_resize_mobile(c) {
	if (jQuery(c).width() > jQuery(window).outerWidth()) {
		jQuery(c).css('width', jQuery(window).outerWidth());
		left = jQuery(c).css('left');
		if (isNaN(left) || left < 0) {
			jQuery(c).css('left', 0);
		}
	}
}

function ism_open_window(link, the_width, the_height, popup_id) {
	jQuery('.ism_popup_box').css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');
	ism_window = window.open(link, "", "width=" + the_width + ", height=" + the_height + "");
	jQuery(ism_window).unload(function () {
		var interval = window.setInterval(function () {
			try {
				if (ism_window == null || ism_window.closed) {
					window.clearInterval(interval);
					ismas_open_popup(popup_id);
				}
			} catch (e) {}
		}, 1000);
	});
}

function shareOnFacebook_afterAction(i_title, i_link, i_img, description_id, popup_id) {
	jQuery('.ism_popup_box').css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');
	if (description_id != '') {
		desc = jQuery(description_id).attr('data-ism_description');
		if (desc != undefined && desc != '') fb_description = jQuery(description_id).attr('data-ism_description');
		else fb_description = '';
	}
	FB.ui({
		method: 'share',
		display: 'popup',
		href: i_link,
		link: i_link,
		name: decodeURIComponent(i_title),
		picture: i_img,
		description: fb_description
	}, function (response) {
		if (response && response.post_id) {
			ismas_open_popup(popup_id);
		}
	});
}

function shareFacebookWI_afterAction(url, title, description_id, popup_id) {
	jQuery('.ism_popup_box').css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');
	if (description_id != '') {
		desc = jQuery(description_id).attr('data-ism_description');
		if (desc != undefined && desc != '') fb_description = jQuery(description_id).attr('data-ism_description');
		else fb_description = '';
	}
	ism_window = window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[title]=' + decodeURIComponent(title) + '&u=' + encodeURIComponent(url) + '&p[summary]=' + fb_description, 'sharer', 'toolbar=0,status=0,width=600,height=360');
	jQuery(ism_window).unload(function () {
		var interval = window.setInterval(function () {
			try {
				if (ism_window == null || ism_window.closed) {
					window.clearInterval(interval);
					ismas_open_popup(popup_id);
				}
			} catch (e) {}
		}, 1000);
	});
}

function openPinterestShare_afterAction(popup_id) {
	jQuery('.ism_popup_box').css('display', 'none');
	jQuery('.ism_popup_wrapper').css('display', 'none');
	closePopup();
	if (window.pinterest_feat_img && window.pinterest_feat_img != '') {
		ism_window = window.open('http://pinterest.com/pin/create/bookmarklet/?media=' + window.pinterest_feat_img + jQuery('#pin_hide_info').val(), 'sharer', 'toolbar=0,status=0,width=750,height=330');
	} else {
		ism_window = window.open('http://pinterest.com/pin/create/bookmarklet/?media=' + jQuery('#pin_default_feat_img').val() + jQuery('#pin_hide_info').val(), 'sharer', 'toolbar=0,status=0,width=750,height=330');
	}
	jQuery(ism_window).unload(function () {
		var interval = window.setInterval(function () {
			try {
				if (ism_window == null || ism_window.closed) {
					window.clearInterval(interval);
					ismas_open_popup(popup_id);
				}
			} catch (e) {}
		}, 1000);
	});
}

function indeedPinterestPopUp_afterAction(rand_pin, popup_id) {
	window.pinterest_feat_img = '';
	var imgSrc = new Array();
	if (jQuery('#indeed_top_ism').length) {
		parent = jQuery('#indeed_top_ism').parent();
		if (jQuery(parent).attr('id')) selector = '#' + jQuery(parent).attr('id');
		else selector = '.' + jQuery(parent).attr('class');
		jQuery(selector + " img").each(function () {
			if (jQuery(this).attr('src')) imgSrc.push(jQuery(this).attr('src'));
		});
	} else {
		jQuery('body img').each(function () {
			if (jQuery(this).attr('src')) {
				if (jQuery(this).width() > 99) {
					imgSrc.push(jQuery(this).attr('src'));
				}
			}
		});
	}
	if (typeof popup_id == 'undefined') popup_id = '';
	def_img = jQuery('#pin_default_feat_img_' + rand_pin).val();
	if (jQuery.inArray(def_img, imgSrc) === -1) imgSrc.push(def_img);
	jQuery.ajax({
		type: "post",
		data: {
			action: "ism_pinterest_popup_after_action",
			ism_images: imgSrc,
			other_info: jQuery('#pin_hide_info_' + rand_pin).val(),
			after_data_a: popup_id,
		},
		url: window.ism_base_path + '/wp-admin/admin-ajax.php',
		success: function (data) {
			jQuery(data).hide().appendTo('body').fadeIn('normal');
		},
		dataType: 'html'
	});
}

function pinterest_select_img_afterAction(target, popup_id) {
	window.pinterest_feat_img = jQuery(target).attr('src');
	openPinterestShare_afterAction(popup_id);
}

function ismas_open_popup(id) {
	ism_after_share_resize_popup('.ism_after_share_box');
	jQuery('#wrapper-' + id).show();
	jQuery('#' + id).fadeIn(400);
}

function ismas_close_popup(id) {
	jQuery('#' + id).css('display', 'none');
	jQuery('#wrapper-' + id).css('display', 'none');
	if (window.ism_popup_display_once == 1) window.ism_popup_display_once = 0;
	else window.ism_popup_display_once = 1;
}

function ism_after_share_resize_popup(c) {
	maxw = jQuery(c).css('max-width');
	if (parseInt(maxw) > jQuery(window).outerWidth() / 2) {
		jQuery(c).css('left', 0);
	}
}

function ism_load_statistics_counts(the_sm_list, ism_url, wrapp_id, i_print) {
	jQuery.ajax({
		type: "post",
		url: window.ism_base_path + '/wp-admin/admin-ajax.php',
		data: {
			action: 'ism_load_statistics_counts_via_ajax',
			the_url: ism_url,
			sm_list: the_sm_list,
		},
		success: function (response) {
			var response = jQuery.parseJSON(response);
			var total_share = 0;
			for (var key in response) {
				num = response[key];
				if (num != 'not_show') {
					if (num == null || isNaN(num)) num = 0;
					setNumDiv(0, parseInt(num), wrapp_id + ' .' + key + '_share_count', i_print);
					total_share = total_share + parseInt(num);
				}
			}
			if (typeof window.total_share_obj != 'undefined' && window.total_share_obj[wrapp_id] != 'undefined') {
				if (Number.isInteger(window.total_share_obj[wrapp_id])) {
					window.total_share_obj[wrapp_id] = window.total_share_obj[wrapp_id] + total_share;
				} else {
					window.total_share_obj[wrapp_id] = total_share;
				}
				ism_print_total_count(wrapp_id);
			}
		}
	});
}
Number.isInteger = Number.isInteger || function (value) {
	return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

function ism_unlock(locker_id, content_id, url, type_of_locker) {
	jQuery.jStorage.set(url, ism_return_current_date());
	if (locker_id != '0' && content_id != '0') {
		if (type_of_locker == 1) {
			jQuery(locker_id).css('display', 'none');
			jQuery(content_id).css({
				'display': 'block',
				'opacity': 1,
				'-webkit-filter': 'none',
				'-moz-filter': 'none',
				'-o-filter': 'none',
				'-ms-filter': 'none',
				'filter': 'none'
			});
		} else if (type_of_locker == 2) {
			window.location.href = url;
		}
	}
}

function ism_unlock_on_c(lockerId, contentId, link, unlock_type) {
	if (contentId != '0' && lockerId != '0') {
		ism_unlock(lockerId, contentId, link, unlock_type);
	}
}
jQuery(document).ready(function () {
	if (typeof window.ism_twitter_set != 'undefined' && window.ism_twitter_set == 1) {
		twttr.ready(function (twttr) {
			twttr.events.bind('tweet', function (event) {
				ism_unlock(window.lockerId, window.contentId, window.i_link, window.ism_type_of_unlock);
			});
		});
	}
});

function setIds(lockerId, contentId, link, unlock_type) {
	window.lockerId = lockerId;
	window.contentId = contentId;
	window.i_link = link;
	window.ism_type_of_unlock = unlock_type;
}

function shareOnFacebook(i_title, i_link, i_img, locker_id, content_id, description_id, unlock_type) {
	if (description_id != '') {
		desc = jQuery(description_id).attr('data-ism_description');
		if (desc != undefined && desc != '') fb_description = jQuery(description_id).attr('data-ism_description');
		else fb_description = '';
	}
	if (locker_id == '0' && content_id == '0') {
		var the_method = 'share';
	} else {
		var the_method = 'feed';
	}
	FB.ui({
		method: the_method,
		display: 'popup',
		href: i_link,
		name: decodeURIComponent(i_title),
		link: i_link,
		picture: i_img,
		description: fb_description
	}, function (response) {
		if (response && response.post_id) {
			ism_unlock(locker_id, content_id, i_link, unlock_type);
		}
	});
}

function shareFacebookWI(url, title, locker_id, content_id, description_id, unlock_type) {
	if (description_id != '') {
		desc = jQuery(description_id).attr('data-ism_description');
		if (desc != undefined && desc != '') fb_description = jQuery(description_id).attr('data-ism_description');
		else fb_description = '';
	}
	window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[title]=' + decodeURIComponent(title) + '&u=' + encodeURIComponent(url) + '&p[summary]=' + fb_description, 'sharer', 'toolbar=0,status=0,width=600,height=360');
	ism_unlock(locker_id, content_id, url, unlock_type);
}

function ism_linkedin_share(ism_link, locker_id, content_id, unlock_type) {
	share_window = IN.UI.Share().params({
		url: ism_link
	}).place();
	if (locker_id != '0' && content_id != '0') {
		share_window.success(function () {
			ism_unlock(locker_id, content_id, ism_link, unlock_type);
		});
	}
};
