/*! For license information please see 458.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[458],{"1391":function(t,e,o){o.d(e,{"$n":function(){return f},"_V":function(){return b},"Ss":function(){return g},"SC":function(){return y}});var r=o(6540);const helper_manipulatePropsFunction=(t,e={})=>{const{"dangerouslySetInnerHTML":o,"style":r}=t;return"string"!=typeof r&&(e.style=r),Object.assign(Object.assign({},e),{"dangerouslySetInnerHTML":o})};var i=o(2902),n=o(2173);const a=(0,i.w$)(class extends i.wt{"constructor"(){super(),this.__registerHost(),this.onSubmit=(0,i.lh)(this,"tarobuttonsubmit",7),this.onReset=(0,i.lh)(this,"tarobuttonreset",7),this.disabled=void 0,this.hoverClass="button-hover",this.type="",this.hoverStartTime=20,this.hoverStayTime=70,this.size=void 0,this.plain=void 0,this.loading=!1,this.formType=null,this.hover=!1,this.touch=!1}"onClick"(t){this.disabled&&t.stopPropagation()}"onTouchStart"(){this.disabled||(this.touch=!0,this.hoverClass&&!this.disabled&&setTimeout((()=>{this.touch&&(this.hover=!0)}),this.hoverStartTime))}"onTouchEnd"(){this.disabled||(this.touch=!1,this.hoverClass&&!this.disabled&&setTimeout((()=>{this.touch||(this.hover=!1)}),this.hoverStayTime),"submit"===this.formType?this.onSubmit.emit():"reset"===this.formType&&this.onReset.emit())}"render"(){const{"disabled":t,"hoverClass":e,"type":o,"size":r,"plain":a,"loading":s,"hover":c}=this,l=(0,n.c)({[`${e}`]:c&&!t});return(0,i.h)(i.xr,{"class":l,"type":o,"plain":a,"loading":s,"size":r,"disabled":t},s&&(0,i.h)("i",{"class":"weui-loading"}),(0,i.h)("slot",null))}get"el"(){return this}static get"style"(){return".weui-loading{vertical-align:middle;background:url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\") 0 0/100% no-repeat;width:20px;height:20px;-webkit-animation:1s steps(12,end) infinite weuiLoading;animation:1s steps(12,end) infinite weuiLoading;display:inline-block}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.weui-btn_loading .weui-loading{margin:-.2em .34em 0 0}.weui-btn_loading.weui-btn_primary,.weui-btn_loading.weui-btn_warn{color:rgba(255,255,255,.6)}.weui-btn_loading.weui-btn_primary{background-color:#179b16}.weui-btn_loading.weui-btn_warn{background-color:#ce3c39}taro-button-core{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;text-align:center;color:#000;-webkit-tap-highlight-color:transparent;background-color:#f8f8f8;border-width:0;border-radius:5px;outline:0;width:100%;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;font-size:18px;line-height:2.55556;text-decoration:none;display:block;position:relative;overflow:hidden}taro-button-core:focus{outline:0}taro-button-core:not([disabled]):active{color:rgba(0,0,0,.6);background-color:#dedede}taro-button-core:after{-webkit-box-sizing:border-box;box-sizing:border-box;content:\" \";-webkit-transform-origin:0 0;transform-origin:0 0;border:1px solid rgba(0,0,0,.2);border-radius:10px;width:200%;height:200%;position:absolute;top:0;left:0;-webkit-transform:scale(.5);transform:scale(.5)}taro-button-core+taro-button-core{margin-top:15px}taro-button-core[type=default]{color:#000;background-color:#f8f8f8}taro-button-core[type=default]:not([disabled]):visited{color:#000}taro-button-core[type=default]:not([disabled]):active{color:rgba(0,0,0,.6);background-color:#dedede}taro-button-core[size=mini]{width:auto;padding:0 1.32em;font-size:13px;line-height:2.3;display:inline-block}taro-button-core[plain],taro-button-core[plain][type=default],taro-button-core[plain][type=primary]{background-color:transparent;border-width:1px}taro-button-core[disabled]{color:rgba(255,255,255,.6)}taro-button-core[disabled][type=default]{color:rgba(0,0,0,.3);background-color:#f7f7f7}taro-button-core[disabled][type=primary]{background-color:#9ed99d}taro-button-core[disabled][type=warn]{background-color:#ec8b89}taro-button-core[loading] .weui-loading{margin:-.2em .34em 0 0}taro-button-core[loading][type=primary],taro-button-core[loading][type=warn]{color:rgba(255,255,255,.6)}taro-button-core[loading][type=primary]{background-color:#179b16}taro-button-core[loading][type=warn]{background-color:#ce3c39}taro-button-core[plain][type=primary]{color:#1aad19;border:1px solid #1aad19}taro-button-core[plain][type=primary]:not([disabled]):active{color:rgba(26,173,25,.6);background-color:transparent;border-color:rgba(26,173,25,.6)}taro-button-core[plain][type=primary]:after{border-width:0}taro-button-core[plain][type=warn]{color:#e64340;border:1px solid #e64340}taro-button-core[plain][type=warn]:not([disabled]):active{color:rgba(230,67,64,.6);background-color:transparent;border-color:rgba(230,67,64,.6)}taro-button-core[plain][type=warn]:after{border-width:0}taro-button-core[plain],taro-button-core[plain][type=default]{color:#353535;border:1px solid #353535}taro-button-core[plain]:not([disabled]):active,taro-button-core[plain][type=default]:not([disabled]):active{color:rgba(53,53,53,.6);background-color:transparent;border-color:rgba(53,53,53,.6)}taro-button-core[plain]:after,taro-button-core[plain][type=default]:after{border-width:0}taro-button-core[type=primary]{color:#fff;background-color:#1aad19}taro-button-core[type=primary]:not([disabled]):visited{color:#fff}taro-button-core[type=primary]:not([disabled]):active{color:rgba(255,255,255,.6);background-color:#179b16}taro-button-core[type=warn]{color:#fff;background-color:#e64340}taro-button-core[type=warn]:not([disabled]):visited{color:#fff}taro-button-core[type=warn]:not([disabled]):active{color:rgba(255,255,255,.6);background-color:#ce3c39}taro-button-core[plain][disabled],taro-button-core[plain][disabled][type=primary]{color:rgba(0,0,0,.3);background-color:#f7f7f7;border:1px solid rgba(0,0,0,.2)}"}},[4,"taro-button-core",{"disabled":[4],"hoverClass":[1,"hover-class"],"type":[1],"hoverStartTime":[2,"hover-start-time"],"hoverStayTime":[2,"hover-stay-time"],"size":[1],"plain":[4],"loading":[4],"formType":[513,"form-type"],"hover":[32],"touch":[32]},[[0,"click","onClick"],[1,"touchstart","onTouchStart"],[1,"touchend","onTouchEnd"]]]);const s=function defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-button-core"].forEach((t=>{if("taro-button-core"===t)customElements.get(t)||customElements.define(t,a)}))},c=(0,i.w$)(class extends i.wt{"constructor"(){super(),this.__registerHost(),this.onLoad=(0,i.lh)(this,"load",7),this.onError=(0,i.lh)(this,"error",7),this.src=void 0,this.mode="scaleToFill",this.lazyLoad=!1,this.nativeProps={},this.aspectFillMode="width",this.didLoad=!1}"componentDidLoad"(){if(!this.lazyLoad)return;const t=new IntersectionObserver((e=>{e[e.length-1].isIntersecting&&(t.unobserve(this.imgRef),this.didLoad=!0)}),{"rootMargin":"300px 0px"});t.observe(this.imgRef)}"imageOnLoad"(){const{"width":t,"height":e,"naturalWidth":o,"naturalHeight":r}=this.imgRef;this.onLoad.emit({"width":t,"height":e}),this.aspectFillMode=o>r?"width":"height"}"imageOnError"(t){this.onError.emit(t)}"render"(){const{"src":t,"lazyLoad":e=!1,"aspectFillMode":o="width","imageOnLoad":r,"imageOnError":a,"nativeProps":s,"didLoad":c}=this,l=this.mode||"scaleToFill",d=(0,n.c)({"taro-img__widthfix":"widthFix"===l}),h=(0,n.c)(`taro-img__mode-${l.toLowerCase().replace(/\s/g,"")}`,{[`taro-img__mode-aspectfill--${o}`]:"aspectFill"===l});return(0,i.h)(i.xr,{"class":d},t?(0,i.h)("img",Object.assign({"ref":t=>this.imgRef=t,"class":h,"src":e&&!c?void 0:t,"onLoad":r.bind(this),"onError":a.bind(this)},s)):"")}static get"style"(){return'img[src=""]{opacity:0}taro-image-core{width:320px;height:240px;font-size:0;display:inline-block;position:relative;overflow:hidden}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-widthfix{width:100%}.taro-img__mode-heightfix{height:100%}.taro-img__mode-top{width:100%}.taro-img__mode-bottom{width:100%;position:absolute;bottom:0}.taro-img__mode-left{height:100%}.taro-img__mode-right{height:100%;position:absolute;right:0}.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;bottom:0;right:0}'}},[0,"taro-image-core",{"src":[1],"mode":[1],"lazyLoad":[4,"lazy-load"],"nativeProps":[16],"aspectFillMode":[32],"didLoad":[32]}]);const l=function taro_image_core_defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-image-core"].forEach((t=>{if("taro-image-core"===t)customElements.get(t)||customElements.define(t,c)}))};const d=(0,i.w$)(class extends i.wt{"constructor"(){super(),this.__registerHost(),this.onLongPress=(0,i.lh)(this,"longpress",7),this.startTime=0,this.animation=void 0,this.hoverClass=void 0,this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1}"onTouchStart"(){this.hoverClass&&(this.touch=!0,setTimeout((()=>{this.touch&&(this.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((()=>{this.onLongPress.emit()}),350),this.startTime=Date.now()}"onTouchMove"(){clearTimeout(this.timeoutEvent)}"onTouchEnd"(){Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((()=>{this.touch||(this.hover=!1)}),this.hoverStayTime))}"componentDidRender"(){!function handleStencilNodes(t){var e;null===(e=null==t?void 0:t.childNodes)||void 0===e||e.forEach((t=>{t.nodeType===document.COMMENT_NODE&&t["s-cn"]&&(t["s-cn"]=!1),t.nodeType!==document.COMMENT_NODE&&t["s-sr"]&&(t["s-sr"]=!1)}))}(this.el)}"render"(){const t=(0,n.c)({[`${this.hoverClass}`]:this.hover});let e={};return this.animation&&(e.animation=this.animation,e["data-animation"]=this.animation),(0,i.h)(i.xr,Object.assign({"class":t},e),(0,i.h)("slot",null))}get"el"(){return this}static get"style"(){return"taro-view-core{display:block}"}},[4,"taro-view-core",{"animation":[1],"hoverClass":[1,"hover-class"],"hoverStartTime":[2,"hover-start-time"],"hoverStayTime":[2,"hover-stay-time"],"hover":[32],"touch":[32]},[[1,"touchstart","onTouchStart"],[1,"touchmove","onTouchMove"],[1,"touchend","onTouchEnd"]]]);const h=function taro_view_core_defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-view-core"].forEach((t=>{if("taro-view-core"===t)customElements.get(t)||customElements.define(t,d)}))},u=(0,i.w$)(class extends i.wt{"constructor"(){super(),this.__registerHost(),this.onLoad=(0,i.lh)(this,"load",7),this.onError=(0,i.lh)(this,"error",7),this.src=void 0}"render"(){const{"src":t,"onLoad":e,"onError":o}=this;return(0,i.h)("iframe",{"class":"taro-webview","onLoad":o=>{o.stopPropagation(),e.emit({"src":t})},"onError":e=>{e.stopPropagation(),o.emit({"src":t})},"src":t})}static get"style"(){return"iframe{border:none}.taro-webview{z-index:999;width:100%;height:100%;position:fixed;top:0;bottom:0}"}},[0,"taro-web-view-core",{"src":[1]}]);const p=function taro_web_view_core_defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-web-view-core"].forEach((t=>{if("taro-web-view-core"===t)customElements.get(t)||customElements.define(t,u)}))};function __rest(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]])}return o}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const mergeRefs=(...t)=>e=>{t.forEach((t=>{((t,e)=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})(t,e)}))},camelToDashCase=t=>t.replace(/([A-Z])/g,(t=>`-${t[0].toLowerCase()}`));var m=o(961);const arrayToMap=t=>{const e=new Map;return t.forEach((t=>e.set(t,t))),e};function getComponentName(t){return t.tagName.replace(/^TARO-/,"").replace(/-CORE$/,"")}function getControlledValue(t){const e=getComponentName(t);return["INPUT","TEXTAREA","SLIDER","PICKER"].includes(e)?"value":"SWITCH"===e?"checked":null}function finishedEventHandler(t){const e=getControlledValue(t);if(!e)return;(0,m.flushSync)((()=>{}));const o=function getPropsAfterReactUpdate(t){const e=Object.keys(t).find((t=>t.includes("__reactProps")));return e?t[e]:null}(t);(null==o?void 0:o.hasOwnProperty(e))&&o[e]!==t[e]&&(t[e]=o[e],t.setAttribute(e,o[e]))}const syncEvent=(t,e,o)=>{const r=t.__events||(t.__events={}),i=r[e];if(o){if(i){if(i.fn===o)return;t.removeEventListener(e,i)}const n=r[e]=function(e){(0,m.unstable_batchedUpdates)((()=>o.call(this,e))),finishedEventHandler(t)};n.fn=o,t.addEventListener(e,n)}else i&&t.removeEventListener(e,i)},attachProps=(t,e,o={})=>{if(t instanceof Element){Object.keys(o).forEach((o=>{if(!["style","children","ref","class","className","forwardedRef"].includes(o)&&!e.hasOwnProperty(o))if(/^on([A-Z].*)/.test(o)){const e=o.substring(2).toLowerCase();syncEvent(t,e)}else t[o]=null,t.removeAttribute(camelToDashCase(o))})),t.className=((t,e,o)=>{const r=e.className||e.class,i=o.className||o.class,n=arrayToMap(t),a=arrayToMap(r?r.split(" "):[]),s=arrayToMap(i?i.split(" "):[]),c=[];return n.forEach((t=>{a.has(t)?(c.push(t),a.delete(t)):s.has(t)||c.push(t)})),a.forEach((t=>c.push(t))),c.join(" ")})(t.classList,e,o),Object.keys(e).forEach((o=>{if(!("style"===o&&"string"!=typeof e[o]||["children","ref","class","className","forwardedRef"].includes(o)))if(/^on([A-Z].*)/.test(o)){const r=o.substring(2).toLowerCase();syncEvent(t,r,e[o])}else{t[o]=e[o];"string"===typeof e[o]&&t.setAttribute(camelToDashCase(o),e[o])}}));const r=getControlledValue(t);if(r&&e.hasOwnProperty(r)){const e=["INPUT","TEXTAREA"].includes(getComponentName(t))?"input":"change";t.__events||(t.__events={}),t.__events.hasOwnProperty(e)||syncEvent(t,e,(function(){}))}}};const createComponent_createReactComponent=(t,e,o,i)=>{void 0!==i&&i();const n=t.toLowerCase().split("-").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join("");const a=class extends r.Component{"constructor"(t){super(t),this.setComponentElRef=t=>{this.componentEl=t}}"componentDidMount"(){!function applyUnControlledDefaultValue(t,e){const o=getControlledValue(t);if(!o)return;const r="default"+o.charAt(0).toUpperCase()+o.slice(1);!e.hasOwnProperty(o)&&e.hasOwnProperty(r)&&(t[o]=e[r],t.setAttribute(o,e[r]))}(this.componentEl,this.props),this.componentDidUpdate(this.props)}"componentDidUpdate"(t){attachProps(this.componentEl,this.props,t)}"render"(){const e=this.props,{"children":i,"forwardedRef":n,"className":a,"ref":s,"style":c}=e,l=__rest(e,["children","forwardedRef","className","ref","style"]);let d=Object.keys(l).reduce(((t,e)=>{const o=l[e];if(0===e.indexOf("on")&&e[2]===e[2].toUpperCase()){e.substring(2).toLowerCase();0}else{["string","boolean","number"].includes(typeof o)&&(t[camelToDashCase(e)]=o)}return t}),{});o&&(d=o(this.props,d));const h=Object.assign(Object.assign({},d),{"ref":mergeRefs(n,this.setComponentElRef)});return(0,r.createElement)(t,h,i)}static get"displayName"(){return n}};return e&&(a.contextType=e),((t,e)=>{const forwardRef=(e,o)=>r.createElement(t,Object.assign({},e,{"forwardedRef":o}));return forwardRef.displayName=e,r.forwardRef(forwardRef)})(a,n)},f=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction,s),b=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction,l),g=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction,h),y=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction,p)},"8458":function(t,e,o){o.r(e),o.d(e,{"default":function(){return Index}});var r=o(1391),i=o(6884),n=(o(8096),o(4848));function Index(){return(0,n.jsxs)(r.Ss,{"className":"index","children":[(0,n.jsx)(r.$n,{"className":"buttonStyle","onClick":()=>{i.Ay.navigateTo({"url":"/pages/benchmark/index"})},"children":"benchmark"}),(0,n.jsx)(r.$n,{"className":"buttonStyle","onClick":()=>{i.Ay.navigateTo({"url":"/pages/Test/index"})},"children":"Test"}),(0,n.jsx)(r.$n,{"className":"buttonStyle","onClick":()=>{i.Ay.navigateTo({"url":"/pages/demo/index"})},"children":"demo"})]})}},"8096":function(t,e,o){var r;o.d(e,{"A":function(){return n}});const i=window.MethodChannel&&window.MethodChannel.jsBridgeMode({"isAsync":!1,"autoRelease":!0})||(t=>t);var n=new(function _applyDecoratedDescriptor(t,e,o,r,i){var n={};return Object.keys(r).forEach((function(t){n[t]=r[t]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=o.slice().reverse().reduce((function(o,r){return r(t,e,o)||o}),n),i&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(i):void 0,n.initializer=void 0),void 0===n.initializer?(Object.defineProperty(t,e,n),null):n}((r=class NativeApi{"sayHello"(t){return t}}).prototype,"sayHello",[i],Object.getOwnPropertyDescriptor(r.prototype,"sayHello"),r.prototype),r)},"1020":function(t,e,o){var r=o(6540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(t,e,o){var r,n={},l=null,d=null;for(r in void 0!==o&&(l=""+o),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(d=e.ref),e)a.call(e,r)&&!c.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===n[r]&&(n[r]=e[r]);return{"$$typeof":i,"type":t,"key":l,"ref":d,"props":n,"_owner":s.current}}e.jsx=q,e.jsxs=q},"4848":function(t,e,o){t.exports=o(1020)}}]);