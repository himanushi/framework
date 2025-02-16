var h = !1;
function a(n) {
  if (n.sheet)
    return n.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === n)
      return document.styleSheets[t];
}
function o(n) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", n.key), n.nonce !== void 0 && t.setAttribute("nonce", n.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var d = /* @__PURE__ */ function() {
  function n(i) {
    var e = this;
    this._insertTag = function(r) {
      var s;
      e.tags.length === 0 ? e.insertionPoint ? s = e.insertionPoint.nextSibling : e.prepend ? s = e.container.firstChild : s = e.before : s = e.tags[e.tags.length - 1].nextSibling, e.container.insertBefore(r, s), e.tags.push(r);
    }, this.isSpeedy = i.speedy === void 0 ? !h : i.speedy, this.tags = [], this.ctr = 0, this.nonce = i.nonce, this.key = i.key, this.container = i.container, this.prepend = i.prepend, this.insertionPoint = i.insertionPoint, this.before = null;
  }
  var t = n.prototype;
  return t.hydrate = function(e) {
    e.forEach(this._insertTag);
  }, t.insert = function(e) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(o(this));
    var r = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = a(r);
      try {
        s.insertRule(e, s.cssRules.length);
      } catch {
      }
    } else
      r.appendChild(document.createTextNode(e));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(e) {
      var r;
      return (r = e.parentNode) == null ? void 0 : r.removeChild(e);
    }), this.tags = [], this.ctr = 0;
  }, n;
}();
export {
  d as StyleSheet
};
