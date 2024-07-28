function t_zeroGallery__init(e, t) {
    var l = document.getElementById("rec" + e)
      , r = l ? l.querySelector('.tn-elem[data-elem-id="' + t + '"]') : null;
    if (!r)
        return !1;
    var a = "function" == typeof jQuery;
    t_onFuncLoad("t_sldsInit", (function() {
        t_onFuncLoad("t396_elem__getFieldValue", (function() {
            t_zeroGallery__processGalleryWithGeoLanding(l, (function() {
                t_zeroGallery__render(r = l.querySelector('.tn-elem[data-elem-id="' + t + '"]')),
                t396_elem__renderView(a ? $(r) : r),
                t_sldsInit(a ? $(r) : [r]),
                t_onFuncLoad("t_slds_updateSlider", (function() {
                    setTimeout((function() {
                        t_slds_updateSlider(a ? $(r) : [r]),
                        t_zeroGallery__render_next(r, e)
                    }
                    ))
                }
                ))
            }
            ))
        }
        )),
        "y" !== r.getAttribute("data-field-zoomable-value") || document.querySelectorAll(".t-zoomer__wrapper").length || t_onFuncLoad("t_initZoom", (function() {
            t_initZoom()
        }
        )),
        r.addEventListener("updateSlider", (function() {
            var e = r.querySelectorAll(".tn-elem__gallery__iframe");
            Array.prototype.forEach.call(e, (function(e) {
                var t = e.getAttribute("src");
                e.setAttribute("src", t)
            }
            ));
            var t = r.querySelectorAll(".tn-elem__gallery__play");
            Array.prototype.forEach.call(t, (function(e) {
                e.style.display = "block";
                var t = e.nextElementSibling;
                t && t.classList.remove("tn-elem__gallery__frame_active");
                var l = e.previousElementSibling;
                l && (l.style.opacity = "1")
            }
            ))
        }
        )),
        t_zeroGallery__handleMoveSlider(r),
        window.addEventListener("resize", (function() {
            t396_waitForFinalEvent((function() {
                setTimeout((function() {
                    t_slds_updateSlider(a ? $(r) : [r])
                }
                ), 200)
            }
            ), 500, "slds_resizeruniqueid" + e + t)
        }
        ));
        var s = l.querySelector(".t396");
        s && ("undefined" != typeof jQuery ? ($(s).unbind("displayChanged", t_zeroGallery__updateSliderHandler),
        $(s).bind("displayChanged", t_zeroGallery__updateSliderHandler)) : (s.removeEventListener("displayChanged", t_zeroGallery__updateSliderHandler),
        s.addEventListener("displayChanged", t_zeroGallery__updateSliderHandler)));
        var o = r.querySelector(".t-slds");
        o && (o.style.visibility = "visible")
    }
    ))
}
function t_zeroGallery__handleMoveSlider(e) {
    var t;
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchend"in document)) {
        var l = e.querySelector(".t-slds__items-wrapper")
          , r = l.querySelectorAll(".t-slds__item")
          , a = parseFloat(l.getAttribute("data-slider-transition"));
        a || 0 === a || (a = 300);
        var s = 140;
        t_zeroGallery__setSlidesOpacity(r, "0"),
        e.addEventListener("tildaSldsMoveSlideStart", (function() {
            t_zeroGallery__setSlidesOpacity(r, "1")
        }
        )),
        e.addEventListener("tildaSldsMoveSlideEnd", (function() {
            setTimeout((function() {
                t_zeroGallery__setSlidesOpacity(r, "0")
            }
            ), a + s)
        }
        ))
    }
}
function t_zeroGallery__setSlidesOpacity(e, t) {
    Array.prototype.forEach.call(e, (function(e) {
        e.classList.contains("t-slds__item_active") || (e.style.opacity = t)
    }
    ))
}
function t_zeroGallery__processGalleryWithGeoLanding(e, t) {
    var l = document.querySelector(".t804")
      , r = !!e.textContent && -1 !== e.textContent.indexOf("%%")
      , a = e.querySelector("[data-replace-key]")
      , s = "published" !== t_zeroGallery__getTildaMode();
    !l || !r || a || s ? t() : document.addEventListener("replacingCompleted", t)
}
function t_zeroGallery__updateSliderHandler(e) {
    t_slds_updateSlider(e.target)
}
function t_zeroGallery__setLazyloadUrls(e) {
    if (void 0 === e)
        return "";
    if ("https://static.tildacdn.com/" !== e.slice(0, 28))
        return "";
    var t = 65;
    return -1 !== e.indexOf("/lib") && (t = 69),
    "svg" === e.slice(-3) ? e : [e.slice(0, t), "", e.slice(t)].join("")
}
function t_zeroGallery__getTildaMode() {
    if (void 0 !== window.tildamode)
        return window.tildamode;
    var e = document.getElementById("allrecords"), t;
    switch (e ? e.getAttribute("data-tilda-mode") : "") {
    case "edit":
        window.tildamode = "edit";
        break;
    case "preview":
        window.tildamode = "preview";
        break;
    default:
        window.tildamode = "published"
    }
    return window.tildamode
}
function t_zeroGallery__render(e) {
    window.jQuery && e instanceof jQuery && (e = e.length ? e.get(0) : null);
    var t = e ? e.getAttribute("data-field-imgs-value") : "";
    if (!t) {
        var l = e ? e.querySelector(".tn-atom__slds-imgs-textarea") : null;
        t = l ? l.value : ""
    }
    var r = "function" == typeof jQuery
      , a = t ? JSON.parse(t) : [];
    a = a.filter((function(e) {
        return !t_zeroGallery__isEmptyObj(e)
    }
    ));
    var s = e ? e.querySelector(".tn-atom") : null;
    function t_zeroForms__escapeHtml(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
    }
    s && (s.innerHTML = '<div class="t-slds" style="visibility: hidden;"><div class="t-slds__main"><div class="t-slds__container"><div class="t-slds__items-wrapper" data-slider-transition="" data-slider-with-cycle="true" data-slider-correct-height="true" data-auto-correct-mobile-width="false"  data-slider-is-preview="true"></div></div></div><div class="t-slds__bullet_wrapper"></div><div class="t-slds__caption__container"></div><div class="t-slds__arrow_container"><div class="t-slds__arrow_wrapper t-slds__arrow_wrapper-left" data-slide-direction="left" style="height: 488px;"><div class="t-slds__arrow t-slds__arrow-left"><div class="t-slds__arrow_body t-slds__arrow_body-left"><svg class="t-null__slds-arrow t-null__slds-arrow_1" width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke"/></svg><svg class="t-null__slds-arrow t-null__slds-arrow_2"  width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63 47.917H30" stroke="black" vector-effect="non-scaling-stroke"/><path d="M46.917 64L63 47.917L46.917 31.834" stroke="black" vector-effect="non-scaling-stroke"/></svg></div></div></div><div class="t-slds__arrow_wrapper t-slds__arrow_wrapper-right" data-slide-direction="right" style="height: 488px;"><div class="t-slds__arrow t-slds__arrow-right "><div class="t-slds__arrow_body t-slds__arrow_body-right"><svg class="t-null__slds-arrow t-null__slds-arrow_1" width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 68L60 47L39 26" stroke="black" vector-effect="non-scaling-stroke"/></svg><svg class="t-null__slds-arrow t-null__slds-arrow_2"  width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63 47.917H30" stroke="black" vector-effect="non-scaling-stroke"/><path d="M46.917 64L63 47.917L46.917 31.834" stroke="black" vector-effect="non-scaling-stroke"/></svg></div></div></div></div></div>');
    for (var o = e.querySelector(".t-slds__items-wrapper"), i = "published" === t_zeroGallery__getTildaMode() && "y" === t396_elem__getFieldValue(r ? $(e) : e, "zoomable"), _ = !1, d = t_zeroGallery__isLazyLoadingOnElem(e, r), n = 0; n < a.length; n++) {
        var c = a[n], y, m;
        if ((c.li_youtube || c.li_vimeo || c.li_imgurl) && (_ = !0),
        i = i && !c.li_imgurl,
        c.li_vimeo || c.li_youtube) {
            if (c.li_youtube ? ((m = c.li_youtube) || (m = ""),
            y = "") : ((m = c.li_vimeo) || (m = ""),
            y = '<iframe class="tn-elem__gallery__iframe" width="100%" height="100%" src="https://player.vimeo.com/video/' + m + '?h=&api=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'),
            o) {
                var u = '<div class="t-slds__item' + (0 === n ? " t-slds__item_active" : "") + '" data-slide-index="' + (n + 1) + '"><div class="t-width"><div itemscope class="t-null__slds-wrapper t-slds__wrapper t-slds__wrapper_100 t-align_center"><meta itemprop="image" content="' + t_zeroForms__escapeHtml(c.li_imgalt) + '"><meta itemprop="caption" content="SEO"><div class="tn-elem__gallery__video-wrapper"><div class="tn-atom__slds-img' + (d ? " t-bgimg" : "") + '" ' + (d ? 'data-original="' + c.li_img + '" style="background-image: url(' + t_zeroGallery__setLazyloadUrls(c.li_img) + ')"' : 'style="background-image: url(' + c.li_img + ')"') + ' imgfield="tn_img_' + c.lid + '" data-tu-noclick="yes" data-tu-is-image="yes" data-tu-multiple="no" /></div><div class="tn-elem__gallery__play" data-slider-video-type="' + (c.li_youtube ? "youtube" : "vimeo") + '" data-slider-video-url="' + (c.li_youtube || c.li_vimeo) + '"><div class="tn-elem__gallery__play_icon"><svg viewBox="0 0 60 60"><g stroke="none" stroke-width="1" fill="" fill-rule="evenodd"><g class="tn-elem__gallery__play_icon__color-holder" transform="translate(-691.000000, -3514.000000)" fill="#FFFFFF"><path d="M721,3574 C737.568542,3574 751,3560.56854 751,3544 C751,3527.43146 737.568542,3514 721,3514 C704.431458,3514 691,3527.43146 691,3544 C691,3560.56854 704.431458,3574 721,3574 Z M715,3534 L732,3544.5 L715,3555 L715,3534 Z"></path></g></g></svg></div></div><div class="tn-elem__gallery__frame">' + y + "</div></div></div> </div> </div> ";
                o.insertAdjacentHTML("beforeend", u)
            }
        } else if ((c.li_img || c.li_imgurl || c.li_imgtitle) && o) {
            var p = '<div class="t-slds__item' + (0 === n ? " t-slds__item_active" : "") + '" data-slide-index="' + (n + 1) + '"><div class="t-width"><div itemscope class="t-null__slds-wrapper t-slds__wrapper t-slds__wrapper_100 t-align_center"><meta itemprop="image" content="' + t_zeroForms__escapeHtml(c.li_imgalt) + '"><meta itemprop="caption" content="SEO"><' + (c.li_imgurl ? 'a href="' + c.li_imgurl + '"' : "div") + ' data-img-lid="' + c.lid + '" ' + (c.li_imgtarget ? 'target="_blank"' : "") + (c.li_imgnofollow ? 'rel="nofollow"' : "") + (i ? ' data-zoom-target="' + (n + 1) + '" data-zoomable="yes" data-img-zoom-url="' + c.li_img + '"' : "") + ' class="tn-atom__slds-img' + (d ? " t-bgimg" : "") + (i ? " t-zoomable" : "") + '" ' + (d ? 'data-original="' + c.li_img + '" style="background-image: url(' + t_zeroGallery__setLazyloadUrls(c.li_img) + ')"' : 'style="background-image: url(' + c.li_img + ')"') + ' width="100%" style="display:block;" imgfield="tn_img_' + c.lid + '" data-tu-noclick="yes" data-tu-is-image="yes" data-tu-multiple="no" /></div></div></div>';
            o.insertAdjacentHTML("beforeend", p)
        }
        var g = e.querySelectorAll(".tn-elem__gallery__play");
        Array.prototype.forEach.call(g, (function(e) {
            e.addEventListener("click", t_zeroGallery__playVideo)
        }
        ));
        var v = e.querySelector(".t-slds__bullet_wrapper");
        if (v) {
            var w = '<div class="t-slds__bullet' + (0 === n ? " t-slds__bullet_active" : "") + '" data-slide-bullet-for="' + (n + 1) + '"><div class="t-slds__bullet_body" style="width: 10px; height: 10px;background-color: white;"></div></div>';
            v.insertAdjacentHTML("beforeend", w)
        }
        var b = e.querySelectorAll(".t-slds");
        !function(e, t) {
            Array.prototype.forEach.call(b, (function(l) {
                var r = '<div class="t-slds__caption' + (0 === e ? " t-slds__caption-active" : "") + '" data-slide-caption="' + (e + 1) + '"><div class="t-slds__caption_wrapper"><div class="t-slds__title">' + t_zeroForms__escapeHtml(t.li_imgtitle) + "</div></div></div>";
                l.insertAdjacentHTML("beforeend", r)
            }
            ))
        }(n, c)
    }
    if (!i && !_) {
        var f = e.querySelectorAll(".t-slds__container");
        Array.prototype.forEach.call(f, (function(e) {
            e.removeEventListener("click", t_zeroGallery__setSideHandlers),
            e.addEventListener("click", t_zeroGallery__setSideHandlers)
        }
        ))
    }
    d && t_onFuncLoad("t_lazyload_update", (function() {
        t_lazyload_update()
    }
    ))
}
function t_zeroGallery__setSideHandlers(e) {
    var t = e.target
      , l = t.closest(".t-slds")
      , r = e.offsetX
      , a = t.offsetWidth
      , s = l ? l.querySelector(".t-slds__arrow-left") : null
      , o = l ? l.querySelector(".t-slds__arrow-right") : null;
    r <= 60 && s && s.click(),
    a - r <= 60 && o.click()
}
function t_zeroGallery__isEmptyObj(e) {
    if (!e)
        return !0;
    var t = [];
    for (var l in e)
        e[l] || t.push("y");
    return t.length === Object.keys(e).length
}
function t_zeroGallery__render_next(e, t) {
    var l;
    ["slds_arrowsize", "slds_arrowlinesize", "slds_arrowcolor", "slds_arrowcolorhover", "slds_arrowbgcolor", "slds_arrowbgcolorhover", "slds_arrowbgopacity", "slds_arrowbgopacityhover", "slds_dotssize", "slds_dotsbgcolor", "slds_dotsbgcoloractive", "slds_loop", "slds_speed", "slds_autoplay", "slds_arrowcontrols", "slds_dotscontrols", "slds_stretch", "slds_playiconsize", "slds_playiconcolor", "slds_captiontopmargin", "slds_dotsvmargin", "slds_captionwidth", "slds_arrowhmargin", "slds_arrowvmargin", "slds_dotshmargin", "slds_arrowalign", "slds_arrowbetweenmargin", "slds_arrowtype", "slds_cursorcontrol", "slds_imgposition", "slds_arrowborder"].forEach((function(l) {
        t_zeroGallery__renderViewOneField(e, t, l)
    }
    ))
}
function t_zeroGallery__getArrowSize(e) {
    var t;
    return {
        s: 30,
        m: 40,
        l: 45,
        xl: 50
    }[e]
}
function t_zeroGallery__renderViewOneField(e, t, l) {
    var r = "function" == typeof jQuery, a = t396_elem__getFieldValue(r ? $(e) : e, l), s = e.querySelector(".t-slds__container"), o = e.querySelector(".t-slds__arrow_container"), i = e.querySelector(".t-slds__bullet_wrapper"), _ = e.querySelector(".t-slds__items-wrapper"), d = e.querySelectorAll(".t-slds__arrow"), n = e.querySelector(".t-slds__arrow-right"), c = e.querySelector(".t-slds__arrow-left"), y = e.querySelectorAll(".t-slds__bullet_body"), m, u, p, g, v, w, b;
    switch (void 0 === a && (a = ""),
    l) {
    case "slds_imgposition":
        var f;
        a || (a = "center center"),
        t_zeroGallery__removeElement(e.querySelector(".tn-elem__gallery__position-styles")),
        s && ((b = document.createElement("style")).classList.add("tn-elem__gallery__position-styles"),
        b.textContent = "#rec" + t + ' .tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"] .tn-atom__slds-img{background-position: ' + a + ";}",
        s.insertAdjacentElement("beforeend", b));
        break;
    case "slds_stretch":
        var h;
        a || (a = "cover"),
        t_zeroGallery__removeElement(e.querySelector(".tn-elem__gallery__stretch-styles")),
        s && ((b = document.createElement("style")).classList.add("tn-elem__gallery__stretch-styles"),
        b.textContent = "#rec" + t + ' .tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"] .tn-atom__slds-img {background-size: ' + a + ";}",
        s.insertAdjacentElement("beforeend", b));
        break;
    case "slds_cursorcontrol":
        a || (a = "none"),
        e.classList.remove("tn-elem__gallery_arrows-cursor"),
        "on" === a && e.classList.add("tn-elem__gallery_arrows-cursor");
        break;
    case "slds_arrowcontrols":
        if (a || (a = "near"),
        e.classList.remove("tn-elem__gallery_arrows-in", "tn-elem__gallery_arrows-near", "tn-elem__gallery_arrows-none", "tn-elem__gallery_arrows-above", "tn-elem__gallery_arrows-under"),
        e.classList.add("tn-elem__gallery_arrows-" + a),
        "above" === a || "under" === a) {
            m = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowsize");
            var z = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowbetweenmargin");
            z || (z = "10"),
            m || (m = "s"),
            m = t_zeroGallery__getArrowSize(m),
            o && (o.style.width = 2 * m + parseInt(z, 10) + "px")
        } else
            o && (o.style.width = "100%"),
            t396_elem__renderViewOneField(r ? $(e) : e, "borderwidth");
        "in" === a && e.querySelector("[data-slider-video-type]") && e.classList.add("tn-elem__with-video"),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowhmargin"),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowvmargin"),
        "under" === a && t_zeroGallery__renderViewOneField(e, t, "slds_captiontopmargin");
        break;
    case "slds_dotshmargin":
        var k;
        a || (a = "20"),
        t_zeroGallery__removeElement(e.querySelector(".tn-elem__gallery__bullet-hmargin-styles")),
        s && ((b = document.createElement("style")).classList.add("tn-elem__gallery__bullet-hmargin-styles"),
        b.textContent = "#rec" + t + ' .tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"] .t-slds__bullet {padding: 10px ' + a / 2 + "px;margin: 0px;}",
        s.insertAdjacentElement("beforeend", b));
        break;
    case "slds_dotscontrols":
        a || (a = "none"),
        i && (i.style.display = "block"),
        v = parseInt(t396_elem__getFieldValue(r ? $(e) : e, "slds_dotssize"), 10),
        "near" === a && i && (i.style.bottom = -20 - v + "px"),
        "in" === a && i && (i.style.bottom = "0"),
        "none" === a && i && (i.style.display = "none"),
        t_zeroGallery__renderViewOneField(e, t, "slds_dotsvmargin"),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowvmargin");
        break;
    case "slds_playiconsize":
        var E;
        a || (a = "70"),
        t_zeroGallery__removeElement(e.querySelector(".tn-elem__gallery__icon-size-styles")),
        s && ((b = document.createElement("style")).classList.add("tn-elem__gallery__icon-size-styles"),
        b.textContent = "#rec" + t + ' .tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"] .tn-elem__gallery__play {width: ' + parseInt(a, 10) + "px;height: " + parseInt(a, 10) + "px;left: calc(50% - " + parseInt(a, 10) / 2 + "px);top: calc(50% - " + parseInt(a, 10) / 2 + "px);}",
        s.insertAdjacentElement("beforeend", b));
        break;
    case "slds_playiconcolor":
        var A;
        a || (a = "#fff"),
        t_zeroGallery__removeElement(e.querySelector(".tn-elem__gallery__icon-color-styles")),
        s && ((b = document.createElement("style")).classList.add("tn-elem__gallery__icon-color-styles"),
        b.textContent = "#rec" + t + ' .tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"] .tn-elem__gallery__play_icon__color-holder {fill: ' + a + ";}",
        s.insertAdjacentElement("beforeend", b));
        break;
    case "slds_arrowtype":
        a || (a = "1");
        var S = e.querySelectorAll(".t-null__slds-arrow");
        Array.prototype.forEach.call(S, (function(e) {
            e.style.display = "none"
        }
        ));
        var G = e.querySelectorAll(".t-null__slds-arrow_" + a);
        Array.prototype.forEach.call(G, (function(e) {
            e.style.display = "block"
        }
        )),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowsize");
        break;
    case "slds_arrowborder":
        var L;
        if (a || (a = "none"),
        t_zeroGallery__removeElement(e.querySelector(".tn-elem__gallery__arrow-border-styles")),
        "none" !== a) {
            var F = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowlinesize") || "1"
              , x = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowcolor") || "#222"
              , V = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowcolorhover") || x;
            s && ((b = document.createElement("style")).classList.add("tn-elem__gallery__arrow-border-styles"),
            b.textContent = '.tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"] .t-slds__arrow_body:before {border: ' + F + "px solid " + x + ';}.tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"] .t-slds__arrow_body:hover:before {border: ' + F + "px solid " + V + ";}",
            s.insertAdjacentElement("beforeend", b))
        }
        break;
    case "slds_arrowsize":
        a || (a = "s"),
        a = t_zeroGallery__getArrowSize(a);
        var q = e.querySelectorAll(".t-slds__arrow_body");
        Array.prototype.forEach.call(q, (function(e) {
            e.style.setProperty("width", parseInt(a, 10) + "px", "important")
        }
        )),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowbgcolor"),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowbetweenmargin"),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowvmargin");
        break;
    case "slds_arrowlinesize":
        a || (a = "1");
        var O = e.querySelectorAll(".t-slds__arrow_body polyline, .t-slds__arrow_body path");
        Array.prototype.forEach.call(O, (function(e) {
            e.style.strokeWidth = parseInt(a, 10) + "px"
        }
        )),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowborder");
        break;
    case "slds_arrowcolor":
        a || (a = "#222");
        var j = e.querySelectorAll(".t-slds__arrow_container polyline, .t-slds__arrow_container path");
        Array.prototype.forEach.call(j, (function(e) {
            e.style.stroke = a
        }
        )),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowborder"),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowcolorhover"),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowbgcolor");
        break;
    case "slds_dotsbgcolor":
        a || (a = "#fff"),
        w = -1 !== a.indexOf("-gradient("),
        Array.prototype.forEach.call(y, (function(e) {
            w ? e.style.backgroundImage = a : e.style.backgroundColor = a
        }
        ));
        break;
    case "slds_dotsbgcoloractive":
        var C;
        if (a || (a = "#222"),
        w = -1 !== a.indexOf("-gradient("),
        t_zeroGallery__removeElement(e.querySelector(".t-slds__bullet_wrapper style")),
        i) {
            b = document.createElement("style");
            var I = "#rec" + t + ' .tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"]'
              , M = (I += " .t-slds__bullet_active .t-slds__bullet_body") + "{";
            M += w ? "background-image: " + a + " !important; background-color: transparent !important;" : "background-color: " + a + " !important; background-image: none !important;",
            M += "}",
            b.textContent = M,
            i.insertAdjacentElement("beforeend", b)
        }
        break;
    case "slds_autoplay":
        if (a || (a = "0"),
        _ && (_.setAttribute("data-slider-timeout", (1e3 * parseFloat(a)).toString()),
        t_onFuncLoad("t_slideMove", (function() {
            t_slideMove(r ? $(e) : e)
        }
        )),
        1e3 * parseFloat(a))) {
            var H = document.createEvent("Event");
            H.initEvent("slideAutoplayTimerReady", !0, !0),
            _.dispatchEvent(H)
        }
        break;
    case "slds_arrowbgcolor":
        var B = t_zeroGallery__getArrowSize(m = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowsize"))
          , T = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowbgopacity");
        Array.prototype.forEach.call(d, (function(e) {
            a ? (e.style.width = B + "px",
            e.style.height = B + "px",
            e.style.backgroundColor = T ? "rgba(" + t_zeroGallery__hex2rgba(a, T) + ")" : a) : (e.style.width = B + "px",
            e.style.height = B + "px",
            e.style.backgroundColor = "transparent")
        }
        )),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowbgcolorhover");
        break;
    case "slds_arrowbgopacity":
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowbgcolor");
        break;
    case "slds_arrowalign":
        a || (a = "center"),
        o && (o.classList.remove("t-slds__arrow_container-left", "t-slds__arrow_container-center", "t-slds__arrow_container-right"),
        o.classList.add("t-slds__arrow_container-" + a));
        break;
    case "slds_dotssize":
        a || (a = "10"),
        Array.prototype.forEach.call(y, (function(e) {
            e.style.width = a + "px",
            e.style.height = a + "px"
        }
        )),
        t_zeroGallery__renderViewOneField(e, t, "slds_dotscontrols");
        break;
    case "slds_loop":
        a || (a = "loop"),
        "none" === a && (_ && _.setAttribute("data-slider-with-cycle", "false"),
        o && o.classList.add("t-slds__nocycle")),
        "loop" === a && (_ && _.setAttribute("data-slider-with-cycle", "true"),
        o && o.classList.remove("t-slds__nocycle"));
        break;
    case "slds_speed":
        a || (a = "none"),
        "none" === a && _ && (_.setAttribute("data-slider-transition", ""),
        _.classList.remove("t-slds_animated-slow"),
        _.classList.remove("t-slds_animated-fast"),
        _.classList.add("t-slds_animated-none")),
        "slow" === a && _ && (_.setAttribute("data-slider-transition", "500"),
        _.classList.remove("t-slds_animated-fast"),
        _.classList.remove("t-slds_animated-none"),
        _.classList.add("t-slds_animated-slow")),
        "fast" === a && _ && (_.setAttribute("data-slider-transition", "300"),
        _.classList.remove("t-slds_animated-slow"),
        _.classList.remove("t-slds_animated-none"),
        _.classList.add("t-slds_animated-fast"));
        break;
    case "slds_arrowcolorhover":
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowborder"),
        Array.prototype.forEach.call(d, (function(t) {
            var l = t.querySelectorAll("polyline, path");
            t.addEventListener("mouseenter", (function() {
                a || (a = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowcolorhover")),
                a || (a = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowcolor")),
                a || (a = "#222"),
                Array.prototype.forEach.call(l, (function(e) {
                    e.style.stroke = a
                }
                ))
            }
            )),
            t.addEventListener("mouseleave", (function() {
                var t = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowcolor");
                t || (t = "#222"),
                Array.prototype.forEach.call(l, (function(e) {
                    e.style.stroke = t
                }
                ))
            }
            ))
        }
        ));
        break;
    case "slds_arrowbgcolorhover":
        Array.prototype.forEach.call(d, (function(t) {
            t.addEventListener("mouseenter", (function() {
                var l = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowbgopacityhover");
                l || (l = "1.0"),
                a || (a = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowbgcolor")),
                a || (a = "transparent");
                var s = a;
                "transparent" !== a && (s = "rgba(" + t_zeroGallery__hex2rgba(a, l) + ")"),
                t.style.backgroundColor = s
            }
            )),
            t.addEventListener("mouseleave", (function() {
                var l = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowbgcolor");
                if (l || (l = "transparent"),
                "transparent" !== l) {
                    var a = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowbgopacity");
                    a || (a = "1.0"),
                    l = "rgba(" + t_zeroGallery__hex2rgba(l, a) + ")"
                }
                t.style.backgroundColor = l
            }
            ))
        }
        ));
        break;
    case "slds_dotsvmargin":
        a || (a = "16"),
        p = t396_elem__getFieldValue(r ? $(e) : e, "slds_dotscontrols"),
        i && ("near" === p ? (i.style.marginBottom = -a + "px",
        i.style.paddingBottom = "0") : (i.style.marginBottom = "0",
        i.style.paddingBottom = a + "px")),
        t_zeroGallery__renderViewOneField(e, t, "slds_captiontopmargin"),
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowvmargin");
        break;
    case "slds_captiontopmargin":
        a || (a = "20"),
        p = t396_elem__getFieldValue(r ? $(e) : e, "slds_dotscontrols"),
        u = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowcontrols");
        var Q = 0, P;
        if ("near" === p && ((g = t396_elem__getFieldValue(r ? $(e) : e, "slds_dotsvmargin")) || (g = "16"),
        (v = t396_elem__getFieldValue(r ? $(e) : e, "slds_dotssize")) || (v = "10"),
        Q = 20 + parseInt(v, 10) + parseInt(g, 10)),
        "under" === u) {
            var W = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowsize")
              , Z = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowvmargin");
            Z || (Z = "10"),
            W || (W = "s"),
            W = t_zeroGallery__getArrowSize(W),
            Q = Q + parseInt(W, 10) + parseInt(Z, 10)
        }
        t_zeroGallery__removeElement(e.querySelector(".tn-elem__gallery__caption-position-styles")),
        s && ((b = document.createElement("style")).classList.add("tn-elem__gallery__caption-position-styles"),
        b.textContent = "#rec" + t + ' .tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"] .t-slds__caption {margin-top: ' + (Q + parseInt(a, 10)) + "px;}",
        s.insertAdjacentElement("beforeend", b));
        break;
    case "slds_captionwidth":
        var N;
        a || (a = "80"),
        t_zeroGallery__removeElement(e.querySelector(".tn-elem__gallery__caption-width-styles")),
        s && ((b = document.createElement("style")).classList.add("tn-elem__gallery__caption-width-styles"),
        b.textContent = "#rec" + t + ' .tn-elem[data-elem-id="' + e.getAttribute("data-elem-id") + '"] .t-slds__caption {width: ' + parseInt(a, 10) + "%;}",
        s.insertAdjacentElement("beforeend", b));
        break;
    case "slds_arrowhmargin":
        a || (a = "30"),
        u = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowcontrols"),
        n && c && ("near" === u ? (n.style.left = a + "px",
        n.style.right = "auto",
        c.style.left = "auto",
        c.style.right = a + "px") : (n.style.left = "auto",
        n.style.right = a + "px",
        c.style.left = a + "px",
        c.style.right = "auto"));
        break;
    case "slds_arrowvmargin":
        a || (a = "10");
        var U = {};
        if ("above" === (u = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowcontrols")))
            U.top = -a + "px",
            U.bottom = "auto",
            Array.prototype.forEach.call(d, (function(e) {
                e.style.marginTop = "0"
            }
            ));
        else if ("under" === u) {
            var R = 0;
            "near" === (p = t396_elem__getFieldValue(r ? $(e) : e, "slds_dotscontrols")) && (g = t396_elem__getFieldValue(r ? $(e) : e, "slds_dotsvmargin"),
            v = t396_elem__getFieldValue(r ? $(e) : e, "slds_dotssize"),
            R = 20 + parseInt(v, 10) + parseInt(g, 10)),
            a = parseInt(a, 10) + R,
            U.bottom = -a + "px",
            U.top = "auto",
            Array.prototype.forEach.call(d, (function(e) {
                e.style.marginTop = "0"
            }
            ))
        } else
            U.top = "",
            U.bottom = "";
        o && (o.style.top = U.top,
        o.style.bottom = U.bottom),
        t_zeroGallery__renderViewOneField(e, t, "slds_captiontopmargin");
        break;
    case "slds_arrowbetweenmargin":
        a || (a = "10"),
        ("above" === (u = t396_elem__getFieldValue(r ? $(e) : e, "slds_arrowcontrols")) || "under" === u) && n && c && (n.style.marginLeft = a / 2 + "px",
        c.style.marginRight = a / 2 + "px",
        t_zeroGallery__renderViewOneField(e, t, "slds_arrowcontrols"))
    }
}
function t_zeroGallery__removeElement(e) {
    e && e.parentNode && e.parentNode.removeChild(e)
}
function t_zeroGallery__playVideo() {
    var e = this.nextElementSibling;
    e && e.classList.add("tn-elem__gallery__frame_active");
    var t = this.previousElementSibling;
    if (t && (t.style.opacity = "0"),
    !(e && !e.classList.contains("tn-elem__gallery__frame") || e && e.querySelector(".tn-elem__gallery__iframe"))) {
        var l = this.getAttribute("data-slider-video-url")
          , r = document.createElement("iframe");
        r.classList.add("tn-elem__gallery__iframe"),
        r.width = "100%",
        r.height = "100%",
        r.frameBorder = "0",
        r.setAttribute("webkitallowfullscreen", ""),
        r.setAttribute("mozallowfullscreen", ""),
        r.setAttribute("allowfullscreen", ""),
        r.src = "https://www.youtube.com/embed/" + l + "?autoplay=1&enablejsapi=1",
        r.allow = "autoplay",
        e && (e.innerHTML = ""),
        e && e.insertAdjacentElement("beforeend", r),
        this.removeEventListener("click", t_zeroGallery__playVideo)
    }
}
function t_zeroGallery__hex2rgba(e, t) {
    if (!e)
        return !1;
    var l = e.replace(/#/, "");
    3 === l.length && (e = "#" + l[0] + l[0] + l[1] + l[1] + l[2] + l[2]);
    var r = parseInt(e.substring(1), 16), a, s, o;
    return [(16711680 & r) >> 16, (65280 & r) >> 8, 255 & r, parseFloat(t)]
}
function t_zeroGallery__isLazyLoadingOnElem(e, t) {
    var l = "y" === window.lazy;
    if (!l) {
        var r = document.getElementById("allrecords");
        l = !!r && "yes" === r.getAttribute("data-tilda-lazy")
    }
    return !!l && "y" !== t396_elem__getFieldValue(t ? $(e) : e, "lazyoff")
}
window.tilda_zero_gallery_js_ver = 1;
