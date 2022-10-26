!function (a, r) {
	"use strict";
	var n, t, i, o, s, l = r.doc,
		c = "gc-subway2",
		d = ".provisional." + c,
		u = "xxsmallview",
		p = "xsmallview",
		g = "smallview",
		f = "mediumview",
		m = "largeview",
		b = "xlargeview",
		h = "wb-inv",
		v = !1,
		w = r.html,
		y = function (e) {
			if (e.length || (e = a(d)), a("main h1").length < 2) return l.off(r.resizeEvents, y), void e.addClass("no-blink p-0");
			w.hasClass(f) || w.hasClass(m) || w.hasClass(b) ? (v || x(e), n.addClass(h), i.prependTo(s), t.prependTo(o)) : (w.hasClass(g) || w.hasClass(p) || w.hasClass(u)) && v && (n.removeClass(h), i.remove(), a("h2:first-child", o).remove())
		},
		x = function (e) {
			t = a("<h2 class='h3 hidden-xs visible-md visible-lg mrgn-tp-0'>Sections</h2>"), i = a("<div class='gc-subway-h1' aria-hidden='true'>" + n.text() + "</div>"), a("ul", e).first().wrap("<div class='gc-subway-menu-nav'></div>"), o = a(".gc-subway-menu-nav", e), e.nextUntil(".pagedetails, .gc-subway-section-end").wrapAll("<section class='provisional gc-subway-section'>"), s = e.next(), e.addClass("no-blink"), v = !0
		};
	l.on(r.resizeEvents, y), l.on("timerpoke.wb wb-init .gc-subway2", d + ".provisional", function (e) {
		var t = r.init(e, c, d);
		t && e.currentTarget === e.target && (e = a(t), (t = (n = a("h1", e)).get(0)) && (t.id = t.id || r.getId(), r.addSkipLink(r.i18n("skip-prefix") + " " + t.textContent, {
			href: "#" + t.id
		})), y(e), r.ready(e, c))
	}), r.add(d)
}(jQuery, (window, wb))
