/*! sourceMappingURL=snazzy-info-window.min.js.map */
!function (t, e) { if ("function" == typeof define && define.amd) define("SnazzyInfoWindow", ["module", "exports"], e); else if ("undefined" != typeof exports) e(module, exports); else { var o = { exports: {} }; e(o, o.exports), t.SnazzyInfoWindow = o.exports } }(this, function (t, e) { "use strict"; function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e } function s(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } function r(t, e) { t && e && Object.keys(e).forEach(function (o) { t[o] = e[o] }) } function n(t) { var e = {}; return r(e, f), r(e, t), Object.keys(f).forEach(function (t) { var o = f[t]; if ("object" === (void 0 === o ? "undefined" : d(o))) { var i = {}; r(i, o), r(i, e[t]), e[t] = i } }), e } function h(t, e) { var o = /^(-{0,1}\.{0,1}\d+(\.\d+)?)[\s|\.]*(\w*)$/; if (t && o.test(t)) { var i = o.exec(t); return { value: 1 * i[1], units: i[3] || "px", original: t } } return e ? h(e) : { original: e } } function p(t, e) { if (t) { for (; t.firstChild;)t.removeChild(t.firstChild); e && ("string" == typeof e ? t.innerHTML = e : t.appendChild(e)) } } function a(t) { return "top" === t ? "bottom" : "bottom" === t ? "top" : "left" === t ? "right" : "right" === t ? "left" : t } function l(t) { return t.charAt(0).toUpperCase() + t.slice(1) } function c(t) { if (void 0 !== t && null !== t && google) { if (t instanceof google.maps.LatLng) return t; if (void 0 !== t.lat && void 0 !== t.lng) return new google.maps.LatLng(t) } return null } Object.defineProperty(e, "__esModule", { value: !0 }); var _ = function () { function t(t, e) { for (var o = 0; o < e.length; o++) { var i = e[o]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function (e, o, i) { return o && t(e.prototype, o), i && t(e, i), e } }(), d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, u = { h: "0px", v: "3px", blur: "6px", spread: "0px", color: "#000" }, f = { placement: "top", pointer: !0, openOnMarkerClick: !0, closeOnMapClick: !0, closeWhenOthersOpen: !1, showCloseButton: !0, panOnOpen: !0, edgeOffset: { top: 20, right: 20, bottom: 20, left: 20 } }, m = function (t) { function e(t) { o(this, e); var s = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); s._html = null, s._opts = n(t), s._callbacks = s._opts.callbacks || {}, s._marker = s._opts.marker, s._map = s._opts.map, s._position = c(s._opts.position), s._isOpen = !1, s._listeners = [], google && s._marker && s._opts.openOnMarkerClick && s.trackListener(google.maps.event.addListener(s._marker, "click", function () { s.getMap() || s.open() }), !0), s._position && !s._opts.offset && (s._opts.offset = { top: "0px", left: "0px" }); var r = t.placement || s._opts.position; return ("string" == typeof r || r instanceof String) && (r = r.toLowerCase()), s._opts.placement = "top" !== r && "bottom" !== r && "left" !== r && "right" !== r ? f.placement : r, r = s._opts.position, void 0 === r || null === r || "string" == typeof r || r instanceof String || (s._opts.position = r), void 0 !== s._opts.border && s._opts.border !== !0 || (s._opts.border = {}), void 0 === s._opts.pointer && (s._opts.pointer = f.pointer), void 0 !== s._opts.shadow && s._opts.shadow !== !0 || (s._opts.shadow = {}), s } return s(e, t), _(e, [{ key: "activateCallback", value: function (t) { var e = this._callbacks[t]; return e ? e.apply(this) : void 0 } }, { key: "trackListener", value: function (t, e) { this._listeners.push({ listener: t, persistent: e }) } }, { key: "clearListeners", value: function (t) { google && this._listeners && (this._listeners.forEach(function (e) { !t && e.persistent || (google.maps.event.removeListener(e.listener), e.listener = null) }), this._listeners = this._listeners.filter(function (t) { return null != t.listener })) } }, { key: "isOpen", value: function () { return this._isOpen } }, { key: "open", value: function () { var t = this.activateCallback("beforeOpen"); (void 0 === t || t) && (this._marker ? this.setMap(this._marker.getMap()) : this._map && this._position && this.setMap(this._map)) } }, { key: "close", value: function () { var t = this.activateCallback("beforeClose"); (void 0 === t || t) && (this.clearListeners(), this.setMap(null)) } }, { key: "destroy", value: function () { this.getMap() && this.setMap(null), this.clearListeners(!0) } }, { key: "setContent", value: function (t) { this._opts.content = t, this._html && this._html.content && p(this._html.content, t) } }, { key: "setPosition", value: function (t) { this._position = c(t), this._isOpen && this._position && (this.draw(), this.resize(), this.reposition()) } }, { key: "getWrapper", value: function () { return this._html ? this._html.wrapper : null } }, { key: "draw", value: function () { if (this.getMap() && this._html && (this._marker || this._position)) { var t = this._opts.offset; t && (t.left && (this._html.wrapper.style.marginLeft = t.left), t.top && (this._html.wrapper.style.marginTop = t.top)); var e = this._opts.backgroundColor; if (e && (this._html.contentWrapper.style.backgroundColor = e, this._opts.pointer && (this._html.pointerBg.style["border" + l(this._opts.placement) + "Color"] = e)), this._opts.padding && (this._html.contentWrapper.style.padding = this._opts.padding, this._opts.shadow && (this._html.shadowFrame.style.padding = this._opts.padding)), this._opts.borderRadius && (this._html.contentWrapper.style.borderRadius = this._opts.borderRadius, this._opts.shadow && (this._html.shadowFrame.style.borderRadius = this._opts.borderRadius)), this._opts.fontSize && (this._html.wrapper.style.fontSize = this._opts.fontSize), this._opts.fontColor && (this._html.contentWrapper.style.color = this._opts.fontColor), this._opts.pointer && this._opts.pointer !== !0 && (this._opts.shadow && (this._html.shadowPointer.style.width = this._opts.pointer, this._html.shadowPointer.style.height = this._opts.pointer), this._html.pointerBorder && (this._html.pointerBorder.style.borderWidth = this._opts.pointer), this._html.pointerBg.style.borderWidth = this._opts.pointer), this._opts.border) { var o = 0; if (void 0 !== this._opts.border.width && (o = h(this._opts.border.width, "0px"), this._html.contentWrapper.style.borderWidth = o.value + o.units), o = Math.round((this._html.contentWrapper.offsetWidth - this._html.contentWrapper.clientWidth) / 2), o = h(o + "px", "0px"), this._opts.pointer) { var i = Math.min(this._html.pointerBorder.offsetHeight, this._html.pointerBorder.offsetWidth); i = h(i + "px", "0px"); var s = Math.round(o.value * (1.41421356237 - 1)); s = Math.min(s, i.value), this._html.pointerBg.style.borderWidth = i.value - s + i.units; var r = l(a(this._opts.placement)); this._html.pointerBg.style["margin" + r] = s + o.units, this._html.pointerBg.style[this._opts.placement] = -o.value + o.units } var n = this._opts.border.color; n && (this._html.contentWrapper.style.borderColor = n, this._html.pointerBorder && (this._html.pointerBorder.style["border" + l(this._opts.placement) + "Color"] = n)) } if (this._opts.shadow) { var p = this._opts.shadow, c = function (t) { var e = p[t]; return void 0 !== e && null != e }; if (c("h") || c("v") || c("blur") || c("spread") || c("color")) { var _ = h(p.h, u.h), d = h(p.v, u.v), f = h(p.blur, u.blur), m = h(p.spread, u.spread), g = p.color || u.color, v = function (t, e) { return t + " " + e + " " + f.original + " " + m.original + " " + g }; this._html.shadowFrame.style.boxShadow = v(_.original, d.original); var b = .7071067811865474 * (_.value - d.value) + _.units, y = .7071067811865474 * (_.value + d.value) + d.units; this._html.shadowPointerInner.style.boxShadow = v(b, y) } this._opts.shadow.opacity && (this._html.shadowWrapper.style.opacity = this._opts.shadow.opacity) } var w = this.getProjection().fromLatLngToDivPixel(this._position || this._marker.position); w && (this._html.floatWrapper.style.top = Math.floor(w.y) + "px", this._html.floatWrapper.style.left = Math.floor(w.x) + "px"), this._isOpen || (this._isOpen = !0, this.resize(), this.reposition(), this.activateCallback("afterOpen"), google && google.maps.event.trigger(this.getMap(), "snazzy-info-window-opened", this)) } } }, { key: "onAdd", value: function () { var t = this; if (!this._html) { var e = function (t, e) { if (t && e) for (var o = 0; o < e.length; o++) { var i = e[o]; i && (t.className && (t.className += " "), t.className += "si-" + i) } }, o = function () { for (var t = arguments.length, o = Array(t), i = 0; i < t; i++)o[i] = arguments[i]; var s = document.createElement("div"); return e(s, o), s }; if (this._html = {}, this._html.wrapper = o("wrapper-" + this._opts.placement), this._opts.wrapperClass && (this._html.wrapper.className += " " + this._opts.wrapperClass), this._opts.border && e(this._html.wrapper, ["has-border"]), this._opts.shadow && (this._html.shadowWrapper = o("shadow-wrapper-" + this._opts.placement), this._html.shadowFrame = o("frame", "shadow-frame"), this._html.shadowWrapper.appendChild(this._html.shadowFrame), this._opts.pointer && (this._html.shadowPointer = o("shadow-pointer-" + this._opts.placement), this._html.shadowPointerInner = o("shadow-inner-pointer-" + this._opts.placement), this._html.shadowPointer.appendChild(this._html.shadowPointerInner), this._html.shadowWrapper.appendChild(this._html.shadowPointer)), this._html.wrapper.appendChild(this._html.shadowWrapper)), this._html.contentWrapper = o("frame", "content-wrapper"), this._html.content = o("content"), this._opts.content && p(this._html.content, this._opts.content), this._opts.showCloseButton) { if (this._opts.closeButtonMarkup) { var i = document.createElement("div"); p(i, this._opts.closeButtonMarkup), this._html.closeButton = i.firstChild } else this._html.closeButton = document.createElement("button"), this._html.closeButton.setAttribute("type", "button"), this._html.closeButton.innerHTML = "&#215;", e(this._html.closeButton, ["close-button"]); this._html.contentWrapper.appendChild(this._html.closeButton) } this._html.contentWrapper.appendChild(this._html.content), this._html.wrapper.appendChild(this._html.contentWrapper), this._opts.pointer && (this._opts.border && (this._html.pointerBorder = o("pointer-" + this._opts.placement, "pointer-border-" + this._opts.placement), this._html.wrapper.appendChild(this._html.pointerBorder)), this._html.pointerBg = o("pointer-" + this._opts.placement, "pointer-bg-" + this._opts.placement), this._html.wrapper.appendChild(this._html.pointerBg)), this._html.floatWrapper = o("float-wrapper"), this._html.floatWrapper.appendChild(this._html.wrapper), this.getPanes().floatPane.appendChild(this._html.floatWrapper); var s = this.getMap(); if (this.clearListeners(), this._opts.closeOnMapClick && this.trackListener(google.maps.event.addListener(s, "mouseover", function () { t.close() })), this._opts.closeWhenOthersOpen && this.trackListener(google.maps.event.addListener(s, "snazzy-info-window-opened", function (e) { t !== e && t.close() })), google) { this._previousWidth = null, this._previousHeight = null, this.trackListener(google.maps.event.addListener(s, "bounds_changed", function () { var e = s.getDiv(), o = e.offsetWidth, i = e.offsetHeight, r = t._previousWidth, n = t._previousHeight; null !== r && null !== n && r === o && n === i || (t._previousWidth = o, t._previousHeight = i, t.resize()) })), this._marker && this.trackListener(google.maps.event.addListener(this._marker, "position_changed", function () { t.draw() })), this._opts.showCloseButton && !this._opts.closeButtonMarkup && this.trackListener(google.maps.event.addDomListener(this._html.closeButton, "click", function (e) { e.cancelBubble = !0, e.stopPropagation && e.stopPropagation(), t.close() }));["click", "dblclick", "rightclick", "contextmenu", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup", "touchstart", "touchend", "touchmove", "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"].forEach(function (e) { t.trackListener(google.maps.event.addDomListener(t._html.wrapper, e, function (t) { t.cancelBubble = !0, t.stopPropagation && t.stopPropagation() })) }) } this.activateCallback("open") } } }, { key: "onRemove", value: function () { if (this.activateCallback("close"), this._html) { var t = this._html.floatWrapper.parentElement; t && t.removeChild(this._html.floatWrapper), this._html = null } this._isOpen = !1, this.activateCallback("afterClose") } }, { key: "getMapInnerBounds", value: function () { var t = this.getMap().getDiv().getBoundingClientRect(), e = { top: t.top + this._opts.edgeOffset.top, right: t.right - this._opts.edgeOffset.right, bottom: t.bottom - this._opts.edgeOffset.bottom, left: t.left + this._opts.edgeOffset.left }; return e.width = e.right - e.left, e.height = e.bottom - e.top, e } }, { key: "reposition", value: function () { if (this._opts.panOnOpen && this._html) { var t = this.getMapInnerBounds(), e = this._html.wrapper.getBoundingClientRect(), o = 0, i = 0; t.left >= e.left ? o = e.left - t.left : t.right <= e.right && (o = e.left - (t.right - e.width)), t.top >= e.top ? i = e.top - t.top : t.bottom <= e.bottom && (i = e.top - (t.bottom - e.height)), 0 === o && 0 === i || this.getMap().panBy(o, i) } } }, { key: "resize", value: function () { if (this._html) { var t = this.getMapInnerBounds(), e = t.width; void 0 !== this._opts.maxWidth && (e = Math.min(e, this._opts.maxWidth)), e -= this._html.wrapper.offsetWidth - this._html.content.offsetWidth, this._html.content.style.maxWidth = e + "px"; var o = t.height; void 0 !== this._opts.maxHeight && (o = Math.min(o, this._opts.maxHeight)), o -= this._html.wrapper.offsetHeight - this._html.content.offsetHeight, this._html.content.style.maxHeight = o + "px" } } }]), e }(google.maps.OverlayView); e.default = m, t.exports = e.default });
//imagesLoaded
!function (e, t) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t() }("undefined" != typeof window ? window : this, function () { function e() { } var t = e.prototype; return t.on = function (e, t) { if (e && t) { var i = this._events = this._events || {}, n = i[e] = i[e] || []; return -1 == n.indexOf(t) && n.push(t), this } }, t.once = function (e, t) { if (e && t) { this.on(e, t); var i = this._onceEvents = this._onceEvents || {}, n = i[e] = i[e] || {}; return n[t] = !0, this } }, t.off = function (e, t) { var i = this._events && this._events[e]; if (i && i.length) { var n = i.indexOf(t); return -1 != n && i.splice(n, 1), this } }, t.emitEvent = function (e, t) { var i = this._events && this._events[e]; if (i && i.length) { var n = 0, o = i[n]; t = t || []; for (var r = this._onceEvents && this._onceEvents[e]; o;) { var s = r && r[o]; s && (this.off(e, o), delete r[o]), o.apply(this, t), n += s ? 0 : 1, o = i[n] } return this } }, t.allOff = t.removeAllListeners = function () { delete this._events, delete this._onceEvents }, e }), function (e, t) { "use strict"; "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) { return t(e, i) }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter) }("undefined" != typeof window ? window : this, function (e, t) { function i(e, t) { for (var i in t) e[i] = t[i]; return e } function n(e) { var t = []; if (Array.isArray(e)) t = e; else if ("number" == typeof e.length) for (var i = 0; i < e.length; i++)t.push(e[i]); else t.push(e); return t } function o(e, t, r) { return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function () { this.check() }.bind(this))) : new o(e, t, r) } function r(e) { this.img = e } function s(e, t) { this.url = e, this.element = t, this.img = new Image } var h = e.jQuery, a = e.console; o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () { this.images = [], this.elements.forEach(this.addElementImages, this) }, o.prototype.addElementImages = function (e) { "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e); var t = e.nodeType; if (t && d[t]) { for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) { var o = i[n]; this.addImage(o) } if ("string" == typeof this.options.background) { var r = e.querySelectorAll(this.options.background); for (n = 0; n < r.length; n++) { var s = r[n]; this.addElementBackgroundImages(s) } } } }; var d = { 1: !0, 9: !0, 11: !0 }; return o.prototype.addElementBackgroundImages = function (e) { var t = getComputedStyle(e); if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) { var o = n && n[2]; o && this.addBackground(o, e), n = i.exec(t.backgroundImage) } }, o.prototype.addImage = function (e) { var t = new r(e); this.images.push(t) }, o.prototype.addBackground = function (e, t) { var i = new s(e, t); this.images.push(i) }, o.prototype.check = function () { function e(e, i, n) { setTimeout(function () { t.progress(e, i, n) }) } var t = this; return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) { t.once("progress", e), t.check() }) : void this.complete() }, o.prototype.progress = function (e, t, i) { this.progressedCount++ , this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t) }, o.prototype.complete = function () { var e = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) { var t = this.hasAnyBroken ? "reject" : "resolve"; this.jqDeferred[t](this) } }, r.prototype = Object.create(t.prototype), r.prototype.check = function () { var e = this.getIsImageComplete(); return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src)) }, r.prototype.getIsImageComplete = function () { return this.img.complete && void 0 !== this.img.naturalWidth }, r.prototype.confirm = function (e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]) }, r.prototype.handleEvent = function (e) { var t = "on" + e.type; this[t] && this[t](e) }, r.prototype.onload = function () { this.confirm(!0, "onload"), this.unbindEvents() }, r.prototype.onerror = function () { this.confirm(!1, "onerror"), this.unbindEvents() }, r.prototype.unbindEvents = function () { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype = Object.create(r.prototype), s.prototype.check = function () { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url; var e = this.getIsImageComplete(); e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, s.prototype.unbindEvents = function () { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, s.prototype.confirm = function (e, t) { this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]) }, o.makeJQueryPlugin = function (t) { t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) { var i = new o(this, e, t); return i.jqDeferred.promise(h(this)) }) }, o.makeJQueryPlugin(), o });
/*! Custom JS */
//
//detect msie
if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
  $('html').addClass('ie');
}



//********************************************************************************************************************** */
//detect ios



function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    //return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    return v[1];
  }
}

ver = iOSversion();
//console.log(ver);

if (/iP(hone|od|ad)/.test(navigator.platform)) {
  $('html').addClass('ios');
}
if (ver <= 10) {
  $('#galeri').hide();
  $('#iosGallery').removeClass('hidden');
}


//************************************************************************************************************************* */
//masonry
$(document).ready(function () {
  //$('#myModal').modal();
  $('.grid').masonry({
    itemSelector: '.grid-item'
  });
});
$('body').on('load', function () {
  $('#video1').play();
});
//bootstrap modal popup convert to lightbox
/* $('a.thumb').click(function (event) {
  event.preventDefault();
  var src = $(this).attr('href');
  var content = $('.modal-body');
  content.empty();
  content.html('<img src="' + src + '">');
  $('.modal-profile').modal('{show:true}');
}); */
$('.modal-form-link, #detayliBilgi').click(function (e) {
  e.preventDefault();
  $('#myModal').modal('show');
});
$('#myModal').modal('handleUpdate');
$('#myModal').on('show.bs.modal', function () {
  $(this).find('.modal-body').css({
    width: 'auto', //probably not needed
    height: 'auto', //probably not needed 
    'max-height': '100%'
  });
});
//modal video run
$('#videoAc').click(function () {
  var el = $('#videoModal');
  el.modal('show');
  el.play();
});

//linklere tıklanınca sayfanın ilgili bölümlerine gönderme fonksiyonu.
$(window).on('popstate', function(event) {
  var yuk = 80;
  if(location.pathname == '/galeri') {
    if ($(window).width() < 425) {
      yuk = 170;
    } else {
      yuk = 330;
    }
  }
  $('html,body').stop().animate({
    scrollTop: $('#' + location.pathname.replace('/', '')).offset().top - yuk
  }, 1500);
  
});
function sendToTop(aLink, negVal) {
  
  $(aLink).each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $this = $(this);
      var divId = $this.attr('href');
      $('html,body').stop().animate({
        scrollTop: $('#' + divId).offset().top - negVal
      }, 1500);
      history.pushState({ urlPath: location.host }, document.title, divId);

    });
  });
};
sendToTop('.main-menu-item > a', 80);
if ($(window).width() < 425) {
  sendToTop('.main-menu-item.gallery-link span a', 170);
} else {
  sendToTop('.main-menu-item.gallery-link span a', 330);
}


$('.hamb-menu').click(function () {
  $('.main-menu').toggleClass('open');
  $(this).toggleClass('closed');
  return false;
});
$(document).click(function () {
  $('.main-menu').removeClass('open');
  $('.hamb-menu').removeClass('closed');
});

function clickStop(div) {
  div.click(function (evt) {
    evt.stopPropagation();
  });
};
clickStop($('.main-menu'));

//filmi oynat
$('.film-has-video').click(function () {
  $(this).css('background-image', 'none');
  $(this).after().hide();
  /* var $iframe = $(this).siblings('.video-frame');
  var src = $iframe.attr('src');
  $iframe.attr('src', src + '&autoplay=1'); */
  playVideo();
});

$("a.plans-link, a.thumb").fancybox({
  'speedIn': 600,
  'speedOut': 200,
  'padding': 0,
  'margin': 20,
  "cyclic": true,
  "overlayColor": '#000',
  "overlayOpacity": '0.9'
});
//slider
$('.carousel').carousel();
//isotope
var $grid = $('.grid');
$(window).load(function () {
  $grid.imagesLoaded(function () {
    $grid.isotope({
      itemSelector: '.grid-item'
    });
  });
});

// bind filter button click
$('.filters-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value

  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});
//touch codes
$(function () {
  $("#fancybox-wrap").swipe({
    allowPageScroll: "auto",
    //Generic swipe handler for all directions
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      //console.log("You swiped " + direction );  
      if (direction == "right") {
        $.fancybox.next();
      } else if (direction == "left") {
        $.fancybox.prev();
      }
    },
    threshold: 10
  });
});
$(function () {
  var slide = $("#carousel-example-generic");
  slide.swipe({
    allowPageScroll: "auto",
    //Generic swipe handler for all directions
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      //console.log("You swiped " + direction );  
      if (direction == "left") {
        slide.carousel("next");
      } else if (direction == "right") {
        slide.carousel("prev");
      }
    },
    threshold: 10
  });
});
//************************************************************* */
//goToDirection
$('.direction-link').hover(function () {
  $(this).append('<span class="hover-text">Yol Tarifi</span>');
}, function () {
  $(this).find('span.hover-text').remove();
});
$('.tel-number-icon').hover(function () {
  $('#telIconWr').append('<span class="hover-text">444 9 359</span>');
}, function () {
  $('#telIconWr').find('span.hover-text').remove();
});