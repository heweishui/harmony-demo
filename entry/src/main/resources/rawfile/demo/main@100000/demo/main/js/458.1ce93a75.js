/*! For license information please see 458.1ce93a75.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[458],{"7304":function(t,e,o){o.d(e,{"$n":function(){return p},"EY":function(){return b},"Ss":function(){return f}});var r=o(6540);const helper_manipulatePropsFunction=(t,e={})=>{const{"dangerouslySetInnerHTML":o,"style":r}=t;return"string"!=typeof r&&(e.style=r),Object.assign(Object.assign({},e),{"dangerouslySetInnerHTML":o})};var n=o(2902),i=o(2173);const a=(0,n.w$)(class extends n.wt{"constructor"(){super(),this.__registerHost(),this.onSubmit=(0,n.lh)(this,"tarobuttonsubmit",7),this.onReset=(0,n.lh)(this,"tarobuttonreset",7),this.disabled=void 0,this.hoverClass="button-hover",this.type="",this.hoverStartTime=20,this.hoverStayTime=70,this.size=void 0,this.plain=void 0,this.loading=!1,this.formType=null,this.hover=!1,this.touch=!1}"onClick"(t){this.disabled&&t.stopPropagation()}"onTouchStart"(){this.disabled||(this.touch=!0,this.hoverClass&&!this.disabled&&setTimeout((()=>{this.touch&&(this.hover=!0)}),this.hoverStartTime))}"onTouchEnd"(){this.disabled||(this.touch=!1,this.hoverClass&&!this.disabled&&setTimeout((()=>{this.touch||(this.hover=!1)}),this.hoverStayTime),"submit"===this.formType?this.onSubmit.emit():"reset"===this.formType&&this.onReset.emit())}"render"(){const{"disabled":t,"hoverClass":e,"type":o,"size":r,"plain":a,"loading":s,"hover":c}=this,l=(0,i.c)({[`${e}`]:c&&!t});return(0,n.h)(n.xr,{"class":l,"type":o,"plain":a,"loading":s,"size":r,"disabled":t},s&&(0,n.h)("i",{"class":"weui-loading"}),(0,n.h)("slot",null))}get"el"(){return this}static get"style"(){return".weui-loading{vertical-align:middle;background:url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\") 0 0/100% no-repeat;width:20px;height:20px;-webkit-animation:1s steps(12,end) infinite weuiLoading;animation:1s steps(12,end) infinite weuiLoading;display:inline-block}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes weuiLoading{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.weui-btn_loading .weui-loading{margin:-.2em .34em 0 0}.weui-btn_loading.weui-btn_primary,.weui-btn_loading.weui-btn_warn{color:rgba(255,255,255,.6)}.weui-btn_loading.weui-btn_primary{background-color:#179b16}.weui-btn_loading.weui-btn_warn{background-color:#ce3c39}taro-button-core{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;text-align:center;color:#000;-webkit-tap-highlight-color:transparent;background-color:#f8f8f8;border-width:0;border-radius:5px;outline:0;width:100%;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;font-size:18px;line-height:2.55556;text-decoration:none;display:block;position:relative;overflow:hidden}taro-button-core:focus{outline:0}taro-button-core:not([disabled]):active{color:rgba(0,0,0,.6);background-color:#dedede}taro-button-core:after{-webkit-box-sizing:border-box;box-sizing:border-box;content:\" \";-webkit-transform-origin:0 0;transform-origin:0 0;border:1px solid rgba(0,0,0,.2);border-radius:10px;width:200%;height:200%;position:absolute;top:0;left:0;-webkit-transform:scale(.5);transform:scale(.5)}taro-button-core+taro-button-core{margin-top:15px}taro-button-core[type=default]{color:#000;background-color:#f8f8f8}taro-button-core[type=default]:not([disabled]):visited{color:#000}taro-button-core[type=default]:not([disabled]):active{color:rgba(0,0,0,.6);background-color:#dedede}taro-button-core[size=mini]{width:auto;padding:0 1.32em;font-size:13px;line-height:2.3;display:inline-block}taro-button-core[plain],taro-button-core[plain][type=default],taro-button-core[plain][type=primary]{background-color:transparent;border-width:1px}taro-button-core[disabled]{color:rgba(255,255,255,.6)}taro-button-core[disabled][type=default]{color:rgba(0,0,0,.3);background-color:#f7f7f7}taro-button-core[disabled][type=primary]{background-color:#9ed99d}taro-button-core[disabled][type=warn]{background-color:#ec8b89}taro-button-core[loading] .weui-loading{margin:-.2em .34em 0 0}taro-button-core[loading][type=primary],taro-button-core[loading][type=warn]{color:rgba(255,255,255,.6)}taro-button-core[loading][type=primary]{background-color:#179b16}taro-button-core[loading][type=warn]{background-color:#ce3c39}taro-button-core[plain][type=primary]{color:#1aad19;border:1px solid #1aad19}taro-button-core[plain][type=primary]:not([disabled]):active{color:rgba(26,173,25,.6);background-color:transparent;border-color:rgba(26,173,25,.6)}taro-button-core[plain][type=primary]:after{border-width:0}taro-button-core[plain][type=warn]{color:#e64340;border:1px solid #e64340}taro-button-core[plain][type=warn]:not([disabled]):active{color:rgba(230,67,64,.6);background-color:transparent;border-color:rgba(230,67,64,.6)}taro-button-core[plain][type=warn]:after{border-width:0}taro-button-core[plain],taro-button-core[plain][type=default]{color:#353535;border:1px solid #353535}taro-button-core[plain]:not([disabled]):active,taro-button-core[plain][type=default]:not([disabled]):active{color:rgba(53,53,53,.6);background-color:transparent;border-color:rgba(53,53,53,.6)}taro-button-core[plain]:after,taro-button-core[plain][type=default]:after{border-width:0}taro-button-core[type=primary]{color:#fff;background-color:#1aad19}taro-button-core[type=primary]:not([disabled]):visited{color:#fff}taro-button-core[type=primary]:not([disabled]):active{color:rgba(255,255,255,.6);background-color:#179b16}taro-button-core[type=warn]{color:#fff;background-color:#e64340}taro-button-core[type=warn]:not([disabled]):visited{color:#fff}taro-button-core[type=warn]:not([disabled]):active{color:rgba(255,255,255,.6);background-color:#ce3c39}taro-button-core[plain][disabled],taro-button-core[plain][disabled][type=primary]{color:rgba(0,0,0,.3);background-color:#f7f7f7;border:1px solid rgba(0,0,0,.2)}"}},[4,"taro-button-core",{"disabled":[4],"hoverClass":[1,"hover-class"],"type":[1],"hoverStartTime":[2,"hover-start-time"],"hoverStayTime":[2,"hover-stay-time"],"size":[1],"plain":[4],"loading":[4],"formType":[513,"form-type"],"hover":[32],"touch":[32]},[[0,"click","onClick"],[1,"touchstart","onTouchStart"],[1,"touchend","onTouchEnd"]]]);const s=function defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-button-core"].forEach((t=>{if("taro-button-core"===t)customElements.get(t)||customElements.define(t,a)}))},c=(0,n.w$)(class extends n.wt{"constructor"(){super(),this.__registerHost(),this.selectable=!1,this.userSelect=!1,this.space=void 0,this.numberOfLines=void 0}"render"(){const t={};return"number"==typeof this.numberOfLines&&(t["--line-clamp"]=this.numberOfLines),(0,n.h)(n.xr,{"style":t},(0,n.h)("slot",null))}static get"style"(){return"taro-text-core{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline}taro-text-core[selectable=true],taro-text-core[user-select=true]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;display:inline-block}taro-text-core[space]{white-space:pre-wrap}taro-text-core[space=ensp]{word-spacing:.5em}taro-text-core[space=nbsp]{word-spacing:1em}taro-text-core[number-of-lines]{--line-clamp:2;word-wrap:break-word;text-overflow:ellipsis;-webkit-line-clamp:var(--line-clamp);-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}"}},[4,"taro-text-core",{"selectable":[1028],"userSelect":[1028,"user-select"],"space":[1025],"numberOfLines":[2,"number-of-lines"]}]);const l=function taro_text_core_defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-text-core"].forEach((t=>{if("taro-text-core"===t)customElements.get(t)||customElements.define(t,c)}))};const d=(0,n.w$)(class extends n.wt{"constructor"(){super(),this.__registerHost(),this.onLongPress=(0,n.lh)(this,"longpress",7),this.startTime=0,this.animation=void 0,this.hoverClass=void 0,this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1}"onTouchStart"(){this.hoverClass&&(this.touch=!0,setTimeout((()=>{this.touch&&(this.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((()=>{this.onLongPress.emit()}),350),this.startTime=Date.now()}"onTouchMove"(){clearTimeout(this.timeoutEvent)}"onTouchEnd"(){Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((()=>{this.touch||(this.hover=!1)}),this.hoverStayTime))}"componentDidRender"(){!function handleStencilNodes(t){var e;null===(e=null==t?void 0:t.childNodes)||void 0===e||e.forEach((t=>{t.nodeType===document.COMMENT_NODE&&t["s-cn"]&&(t["s-cn"]=!1),t.nodeType!==document.COMMENT_NODE&&t["s-sr"]&&(t["s-sr"]=!1)}))}(this.el)}"render"(){const t=(0,i.c)({[`${this.hoverClass}`]:this.hover});let e={};return this.animation&&(e.animation=this.animation,e["data-animation"]=this.animation),(0,n.h)(n.xr,Object.assign({"class":t},e),(0,n.h)("slot",null))}get"el"(){return this}static get"style"(){return"taro-view-core{display:block}"}},[4,"taro-view-core",{"animation":[1],"hoverClass":[1,"hover-class"],"hoverStartTime":[2,"hover-start-time"],"hoverStayTime":[2,"hover-stay-time"],"hover":[32],"touch":[32]},[[1,"touchstart","onTouchStart"],[1,"touchmove","onTouchMove"],[1,"touchend","onTouchEnd"]]]);const u=function taro_view_core_defineCustomElement$1(){if("undefined"==typeof customElements)return;["taro-view-core"].forEach((t=>{if("taro-view-core"===t)customElements.get(t)||customElements.define(t,d)}))};function __rest(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const mergeRefs=(...t)=>e=>{t.forEach((t=>{((t,e)=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})(t,e)}))},camelToDashCase=t=>t.replace(/([A-Z])/g,(t=>`-${t[0].toLowerCase()}`));var h=o(961);const arrayToMap=t=>{const e=new Map;return t.forEach((t=>e.set(t,t))),e};function getComponentName(t){return t.tagName.replace(/^TARO-/,"").replace(/-CORE$/,"")}function getControlledValue(t){const e=getComponentName(t);return["INPUT","TEXTAREA","SLIDER","PICKER"].includes(e)?"value":"SWITCH"===e?"checked":null}function finishedEventHandler(t){const e=getControlledValue(t);if(!e)return;(0,h.flushSync)((()=>{}));const o=function getPropsAfterReactUpdate(t){const e=Object.keys(t).find((t=>t.includes("__reactProps")));return e?t[e]:null}(t);(null==o?void 0:o.hasOwnProperty(e))&&o[e]!==t[e]&&(t[e]=o[e],t.setAttribute(e,o[e]))}const syncEvent=(t,e,o)=>{const r=t.__events||(t.__events={}),n=r[e];if(o){if(n){if(n.fn===o)return;t.removeEventListener(e,n)}const i=r[e]=function(e){(0,h.unstable_batchedUpdates)((()=>o.call(this,e))),finishedEventHandler(t)};i.fn=o,t.addEventListener(e,i)}else n&&t.removeEventListener(e,n)},attachProps=(t,e,o={})=>{if(t instanceof Element){Object.keys(o).forEach((o=>{if(!["style","children","ref","class","className","forwardedRef"].includes(o)&&!e.hasOwnProperty(o))if(/^on([A-Z].*)/.test(o)){const e=o.substring(2).toLowerCase();syncEvent(t,e)}else t[o]=null,t.removeAttribute(camelToDashCase(o))})),t.className=((t,e,o)=>{const r=e.className||e.class,n=o.className||o.class,i=arrayToMap(t),a=arrayToMap(r?r.split(" "):[]),s=arrayToMap(n?n.split(" "):[]),c=[];return i.forEach((t=>{a.has(t)?(c.push(t),a.delete(t)):s.has(t)||c.push(t)})),a.forEach((t=>c.push(t))),c.join(" ")})(t.classList,e,o),Object.keys(e).forEach((o=>{if(!("style"===o&&"string"!=typeof e[o]||["children","ref","class","className","forwardedRef"].includes(o)))if(/^on([A-Z].*)/.test(o)){const r=o.substring(2).toLowerCase();syncEvent(t,r,e[o])}else{t[o]=e[o];"string"===typeof e[o]&&t.setAttribute(camelToDashCase(o),e[o])}}));const r=getControlledValue(t);if(r&&e.hasOwnProperty(r)){const e=["INPUT","TEXTAREA"].includes(getComponentName(t))?"input":"change";t.__events||(t.__events={}),t.__events.hasOwnProperty(e)||syncEvent(t,e,(function(){}))}}};const createComponent_createReactComponent=(t,e,o,n)=>{void 0!==n&&n();const i=t.toLowerCase().split("-").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join("");const a=class extends r.Component{"constructor"(t){super(t),this.setComponentElRef=t=>{this.componentEl=t}}"componentDidMount"(){!function applyUnControlledDefaultValue(t,e){const o=getControlledValue(t);if(!o)return;const r="default"+o.charAt(0).toUpperCase()+o.slice(1);!e.hasOwnProperty(o)&&e.hasOwnProperty(r)&&(t[o]=e[r],t.setAttribute(o,e[r]))}(this.componentEl,this.props),this.componentDidUpdate(this.props)}"componentDidUpdate"(t){attachProps(this.componentEl,this.props,t)}"render"(){const e=this.props,{"children":n,"forwardedRef":i,"className":a,"ref":s,"style":c}=e,l=__rest(e,["children","forwardedRef","className","ref","style"]);let d=Object.keys(l).reduce(((t,e)=>{const o=l[e];if(0===e.indexOf("on")&&e[2]===e[2].toUpperCase()){e.substring(2).toLowerCase();0}else{["string","boolean","number"].includes(typeof o)&&(t[camelToDashCase(e)]=o)}return t}),{});o&&(d=o(this.props,d));const u=Object.assign(Object.assign({},d),{"ref":mergeRefs(i,this.setComponentElRef)});return(0,r.createElement)(t,u,n)}static get"displayName"(){return i}};return e&&(a.contextType=e),((t,e)=>{const forwardRef=(e,o)=>r.createElement(t,Object.assign({},e,{"forwardedRef":o}));return forwardRef.displayName=e,r.forwardRef(forwardRef)})(a,i)},p=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction,s),b=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction,l),f=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction,u)},"8458":function(t,e,o){o.r(e),o.d(e,{"default":function(){return Index}});var r=o(7304),n=o(6317),i=o(4848);function Index(){return(0,i.jsxs)(r.Ss,{"className":"index","children":[(0,i.jsx)(r.EY,{"children":"Hello Main Page!"}),(0,i.jsx)(r.$n,{"onClick":()=>{n.Ay.navigateTo({"url":"pages/home/index"})},"children":"goHome"})]})}},"1020":function(t,e,o){var r=o(6540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(t,e,o){var r,i={},l=null,d=null;for(r in void 0!==o&&(l=""+o),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(d=e.ref),e)a.call(e,r)&&!c.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{"$$typeof":n,"type":t,"key":l,"ref":d,"props":i,"_owner":s.current}}e.jsx=q,e.jsxs=q},"4848":function(t,e,o){t.exports=o(1020)}}]);