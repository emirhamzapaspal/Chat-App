(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var xh={exports:{}},ya={},Lh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function fE(){if(vm)return Se;vm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function O(V){return V===null||typeof V!="object"?null:(V=A&&V[A]||V["@@iterator"],typeof V=="function"?V:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Y={};function q(V,B,ae){this.props=V,this.context=B,this.refs=Y,this.updater=ae||z}q.prototype.isReactComponent={},q.prototype.setState=function(V,B){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,B,"setState")},q.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function pe(){}pe.prototype=q.prototype;function ve(V,B,ae){this.props=V,this.context=B,this.refs=Y,this.updater=ae||z}var ce=ve.prototype=new pe;ce.constructor=ve,G(ce,q.prototype),ce.isPureReactComponent=!0;var ge=Array.isArray,je=Object.prototype.hasOwnProperty,Ae={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,B,ae){var Te,Ie={},Ne=null,Le=null;if(B!=null)for(Te in B.ref!==void 0&&(Le=B.ref),B.key!==void 0&&(Ne=""+B.key),B)je.call(B,Te)&&!N.hasOwnProperty(Te)&&(Ie[Te]=B[Te]);var Me=arguments.length-2;if(Me===1)Ie.children=ae;else if(1<Me){for(var Be=Array(Me),gt=0;gt<Me;gt++)Be[gt]=arguments[gt+2];Ie.children=Be}if(V&&V.defaultProps)for(Te in Me=V.defaultProps,Me)Ie[Te]===void 0&&(Ie[Te]=Me[Te]);return{$$typeof:i,type:V,key:Ne,ref:Le,props:Ie,_owner:Ae.current}}function R(V,B){return{$$typeof:i,type:V.type,key:B,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var B={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ae){return B[ae]})}var x=/\/+/g;function S(V,B){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):B.toString(36)}function et(V,B,ae,Te,Ie){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case i:case e:Le=!0}}if(Le)return Le=V,Ie=Ie(Le),V=Te===""?"."+S(Le,0):Te,ge(Ie)?(ae="",V!=null&&(ae=V.replace(x,"$&/")+"/"),et(Ie,B,ae,"",function(gt){return gt})):Ie!=null&&(P(Ie)&&(Ie=R(Ie,ae+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(x,"$&/")+"/")+V)),B.push(Ie)),1;if(Le=0,Te=Te===""?".":Te+":",ge(V))for(var Me=0;Me<V.length;Me++){Ne=V[Me];var Be=Te+S(Ne,Me);Le+=et(Ne,B,ae,Be,Ie)}else if(Be=O(V),typeof Be=="function")for(V=Be.call(V),Me=0;!(Ne=V.next()).done;)Ne=Ne.value,Be=Te+S(Ne,Me++),Le+=et(Ne,B,ae,Be,Ie);else if(Ne==="object")throw B=String(V),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Le}function kt(V,B,ae){if(V==null)return V;var Te=[],Ie=0;return et(V,Te,"","",function(Ne){return B.call(ae,Ne,Ie++)}),Te}function Nt(V){if(V._status===-1){var B=V._result;B=B(),B.then(function(ae){(V._status===0||V._status===-1)&&(V._status=1,V._result=ae)},function(ae){(V._status===0||V._status===-1)&&(V._status=2,V._result=ae)}),V._status===-1&&(V._status=0,V._result=B)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},J={transition:null},ue={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ae};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:kt,forEach:function(V,B,ae){kt(V,function(){B.apply(this,arguments)},ae)},count:function(V){var B=0;return kt(V,function(){B++}),B},toArray:function(V){return kt(V,function(B){return B})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Se.Component=q,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=ve,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Se.act=ee,Se.cloneElement=function(V,B,ae){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Te=G({},V.props),Ie=V.key,Ne=V.ref,Le=V._owner;if(B!=null){if(B.ref!==void 0&&(Ne=B.ref,Le=Ae.current),B.key!==void 0&&(Ie=""+B.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(Be in B)je.call(B,Be)&&!N.hasOwnProperty(Be)&&(Te[Be]=B[Be]===void 0&&Me!==void 0?Me[Be]:B[Be])}var Be=arguments.length-2;if(Be===1)Te.children=ae;else if(1<Be){Me=Array(Be);for(var gt=0;gt<Be;gt++)Me[gt]=arguments[gt+2];Te.children=Me}return{$$typeof:i,type:V.type,key:Ie,ref:Ne,props:Te,_owner:Le}},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Se.createElement=I,Se.createFactory=function(V){var B=I.bind(null,V);return B.type=V,B},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:m,render:V}},Se.isValidElement=P,Se.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:Nt}},Se.memo=function(V,B){return{$$typeof:v,type:V,compare:B===void 0?null:B}},Se.startTransition=function(V){var B=J.transition;J.transition={};try{V()}finally{J.transition=B}},Se.unstable_act=ee,Se.useCallback=function(V,B){return Ue.current.useCallback(V,B)},Se.useContext=function(V){return Ue.current.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Se.useEffect=function(V,B){return Ue.current.useEffect(V,B)},Se.useId=function(){return Ue.current.useId()},Se.useImperativeHandle=function(V,B,ae){return Ue.current.useImperativeHandle(V,B,ae)},Se.useInsertionEffect=function(V,B){return Ue.current.useInsertionEffect(V,B)},Se.useLayoutEffect=function(V,B){return Ue.current.useLayoutEffect(V,B)},Se.useMemo=function(V,B){return Ue.current.useMemo(V,B)},Se.useReducer=function(V,B,ae){return Ue.current.useReducer(V,B,ae)},Se.useRef=function(V){return Ue.current.useRef(V)},Se.useState=function(V){return Ue.current.useState(V)},Se.useSyncExternalStore=function(V,B,ae){return Ue.current.useSyncExternalStore(V,B,ae)},Se.useTransition=function(){return Ue.current.useTransition()},Se.version="18.3.1",Se}var Em;function Ed(){return Em||(Em=1,Lh.exports=fE()),Lh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function pE(){if(wm)return ya;wm=1;var i=Ed(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var w,A={},O=null,z=null;v!==void 0&&(O=""+v),g.key!==void 0&&(O=""+g.key),g.ref!==void 0&&(z=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(A[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)A[w]===void 0&&(A[w]=g[w]);return{$$typeof:e,type:m,key:O,ref:z,props:A,_owner:o.current}}return ya.Fragment=t,ya.jsx=h,ya.jsxs=h,ya}var Tm;function mE(){return Tm||(Tm=1,xh.exports=pE()),xh.exports}var fe=mE(),at=Ed(),hu={},Mh={exports:{}},Xt={},bh={exports:{}},Fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function gE(){return Im||(Im=1,function(i){function e(J,ue){var ee=J.length;J.push(ue);e:for(;0<ee;){var V=ee-1>>>1,B=J[V];if(0<o(B,ue))J[V]=ue,J[ee]=B,ee=V;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ue=J[0],ee=J.pop();if(ee!==ue){J[0]=ee;e:for(var V=0,B=J.length,ae=B>>>1;V<ae;){var Te=2*(V+1)-1,Ie=J[Te],Ne=Te+1,Le=J[Ne];if(0>o(Ie,ee))Ne<B&&0>o(Le,Ie)?(J[V]=Le,J[Ne]=ee,V=Ne):(J[V]=Ie,J[Te]=ee,V=Te);else if(Ne<B&&0>o(Le,ee))J[V]=Le,J[Ne]=ee,V=Ne;else break e}}return ue}function o(J,ue){var ee=J.sortIndex-ue.sortIndex;return ee!==0?ee:J.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,A=null,O=3,z=!1,G=!1,Y=!1,q=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,ve=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ce(J){for(var ue=t(v);ue!==null;){if(ue.callback===null)s(v);else if(ue.startTime<=J)s(v),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(v)}}function ge(J){if(Y=!1,ce(J),!G)if(t(g)!==null)G=!0,Nt(je);else{var ue=t(v);ue!==null&&Ue(ge,ue.startTime-J)}}function je(J,ue){G=!1,Y&&(Y=!1,pe(I),I=-1),z=!0;var ee=O;try{for(ce(ue),A=t(g);A!==null&&(!(A.expirationTime>ue)||J&&!D());){var V=A.callback;if(typeof V=="function"){A.callback=null,O=A.priorityLevel;var B=V(A.expirationTime<=ue);ue=i.unstable_now(),typeof B=="function"?A.callback=B:A===t(g)&&s(g),ce(ue)}else s(g);A=t(g)}if(A!==null)var ae=!0;else{var Te=t(v);Te!==null&&Ue(ge,Te.startTime-ue),ae=!1}return ae}finally{A=null,O=ee,z=!1}}var Ae=!1,N=null,I=-1,R=5,P=-1;function D(){return!(i.unstable_now()-P<R)}function x(){if(N!==null){var J=i.unstable_now();P=J;var ue=!0;try{ue=N(!0,J)}finally{ue?S():(Ae=!1,N=null)}}else Ae=!1}var S;if(typeof ve=="function")S=function(){ve(x)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,kt=et.port2;et.port1.onmessage=x,S=function(){kt.postMessage(null)}}else S=function(){q(x,0)};function Nt(J){N=J,Ae||(Ae=!0,S())}function Ue(J,ue){I=q(function(){J(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){G||z||(G=!0,Nt(je))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return O},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(O){case 1:case 2:case 3:var ue=3;break;default:ue=O}var ee=O;O=ue;try{return J()}finally{O=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,ue){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=O;O=J;try{return ue()}finally{O=ee}},i.unstable_scheduleCallback=function(J,ue,ee){var V=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?V+ee:V):ee=V,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ee+B,J={id:w++,callback:ue,priorityLevel:J,startTime:ee,expirationTime:B,sortIndex:-1},ee>V?(J.sortIndex=ee,e(v,J),t(g)===null&&J===t(v)&&(Y?(pe(I),I=-1):Y=!0,Ue(ge,ee-V))):(J.sortIndex=B,e(g,J),G||z||(G=!0,Nt(je))),J},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(J){var ue=O;return function(){var ee=O;O=ue;try{return J.apply(this,arguments)}finally{O=ee}}}}(Fh)),Fh}var Sm;function yE(){return Sm||(Sm=1,bh.exports=gE()),bh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function _E(){if(Am)return Xt;Am=1;var i=Ed(),e=yE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function O(n){return g.call(A,n)?!0:g.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Y(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Y(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];q[r]=new Y(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Y(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Y(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Y(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Y(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Y(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Y(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Y(n,5,!1,n.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function ve(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(pe,ve);q[r]=new Y(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(pe,ve);q[r]=new Y(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(pe,ve);q[r]=new Y(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Y(n,1,!1,n.toLowerCase(),null,!0,!0)});function ce(n,r,a,c){var d=q.hasOwnProperty(r)?q[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(G(r,a,d,c)&&(a=null),c||d===null?O(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var ge=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,V;function B(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var ae=!1;function Te(n,r){if(!n||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var C=`
`+d[_].replace(" at new "," at ");return n.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",n.displayName)),C}while(1<=_&&0<=T);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Ie(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ae:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function tr(n){n._valueTracker||(n._valueTracker=gt(n))}function ss(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function kr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _i(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function os(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Io(n,r){r=r.checked,r!=null&&ce(n,"checked",r,!1)}function So(n,r){Io(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?as(n,r.type,a):r.hasOwnProperty("defaultValue")&&as(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ya(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function as(n,r,a){(r!=="number"||kr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var nr=Array.isArray;function rr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Ao(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ls(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(nr(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function us(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ro(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ir,Co=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ir.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Nr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ei=["Webkit","ms","Moz","O"];Object.keys(vi).forEach(function(n){Ei.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),vi[r]=vi[n]})});function Po(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||vi.hasOwnProperty(n)&&vi[n]?(""+r).trim():r+"px"}function ko(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Po(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var No=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(n,r){if(r){if(No[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Vo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=null;function cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hs=null,ln=null,bn=null;function ds(n){if(n=na(n)){if(typeof hs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Rl(r),hs(n.stateNode,n.type,r))}}function Fn(n){ln?bn?bn.push(n):bn=[n]:ln=n}function Oo(){if(ln){var n=ln,r=bn;if(bn=ln=null,ds(n),r)for(n=0;n<r.length;n++)ds(r[n])}}function Ti(n,r){return n(r)}function xo(){}var sr=!1;function Lo(n,r,a){if(sr)return n(r,a);sr=!0;try{return Ti(n,r,a)}finally{sr=!1,(ln!==null||bn!==null)&&(xo(),Oo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=Rl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var fs=!1;if(m)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){fs=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{fs=!1}function Ii(n,r,a,c,d,p,_,T,C){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(H){this.onError(H)}}var Si=!1,ps=null,En=!1,Mo=null,lc={onError:function(n){Si=!0,ps=n}};function ms(n,r,a,c,d,p,_,T,C){Si=!1,ps=null,Ii.apply(lc,arguments)}function Xa(n,r,a,c,d,p,_,T,C){if(ms.apply(this,arguments),Si){if(Si){var F=ps;Si=!1,ps=null}else throw Error(t(198));En||(En=!0,Mo=F)}}function wn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ai(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Tn(n){if(wn(n)!==n)throw Error(t(188))}function Ja(n){var r=n.alternate;if(!r){if(r=wn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Tn(d),n;if(p===c)return Tn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function bo(n){return n=Ja(n),n!==null?gs(n):null}function gs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=gs(n);if(r!==null)return r;n=n.sibling}return null}var ys=e.unstable_scheduleCallback,Fo=e.unstable_cancelCallback,Za=e.unstable_shouldYield,uc=e.unstable_requestPaint,$e=e.unstable_now,el=e.unstable_getCurrentPriorityLevel,Ri=e.unstable_ImmediatePriority,Dr=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,Uo=e.unstable_LowPriority,tl=e.unstable_IdlePriority,Ci=null,Zt=null;function nl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ci,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:il,zo=Math.log,rl=Math.LN2;function il(n){return n>>>=0,n===0?32:31-(zo(n)/rl|0)|0}var _s=64,vs=4194304;function Vr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Vr(T):(p&=_,p!==0&&(c=Vr(p)))}else _=a&~d,_!==0?c=Vr(_):p!==0&&(c=Vr(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function cc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function or(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),T=1<<_,C=d[_];C===-1?(!(T&a)||T&c)&&(d[_]=cc(T,r)):C<=r&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ki(){var n=_s;return _s<<=1,!(_s&4194240)&&(_s=64),n}function Or(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function xr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Lr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function Mr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var sl,Es,ol,al,ll,jo=!1,Un=[],Tt=null,In=null,Sn=null,br=new Map,cn=new Map,zn=[],hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ul(n,r){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":br.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(r.pointerId)}}function qt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=na(r),r!==null&&Es(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function dc(n,r,a,c,d){switch(r){case"focusin":return Tt=qt(Tt,n,r,a,c,d),!0;case"dragenter":return In=qt(In,n,r,a,c,d),!0;case"mouseover":return Sn=qt(Sn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return br.set(p,qt(br.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,cn.set(p,qt(cn.get(p)||null,n,r,a,c,d)),!0}return!1}function cl(n){var r=xi(n.target);if(r!==null){var a=wn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ai(a),r!==null){n.blockedOn=r,ll(n.priority,function(){ol(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ar(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ws(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);wi=c,a.target.dispatchEvent(c),wi=null}else return r=na(a),r!==null&&Es(r),n.blockedOn=a,!1;r.shift()}return!0}function Ni(n,r,a){ar(n)&&a.delete(r)}function hl(){jo=!1,Tt!==null&&ar(Tt)&&(Tt=null),In!==null&&ar(In)&&(In=null),Sn!==null&&ar(Sn)&&(Sn=null),br.forEach(Ni),cn.forEach(Ni)}function An(n,r){n.blockedOn===r&&(n.blockedOn=null,jo||(jo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hl)))}function Rn(n){function r(d){return An(d,n)}if(0<Un.length){An(Un[0],n);for(var a=1;a<Un.length;a++){var c=Un[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&An(Tt,n),In!==null&&An(In,n),Sn!==null&&An(Sn,n),br.forEach(r),cn.forEach(r),a=0;a<zn.length;a++)c=zn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<zn.length&&(a=zn[0],a.blockedOn===null);)cl(a),a.blockedOn===null&&zn.shift()}var lr=ge.ReactCurrentBatchConfig,Fr=!0;function Ge(n,r,a,c){var d=Pe,p=lr.transition;lr.transition=null;try{Pe=1,Bo(n,r,a,c)}finally{Pe=d,lr.transition=p}}function fc(n,r,a,c){var d=Pe,p=lr.transition;lr.transition=null;try{Pe=4,Bo(n,r,a,c)}finally{Pe=d,lr.transition=p}}function Bo(n,r,a,c){if(Fr){var d=ws(n,r,a,c);if(d===null)Sc(n,r,c,Di,a),ul(n,c);else if(dc(d,n,r,a,c))c.stopPropagation();else if(ul(n,c),r&4&&-1<hc.indexOf(n)){for(;d!==null;){var p=na(d);if(p!==null&&sl(p),p=ws(n,r,a,c),p===null&&Sc(n,r,c,Di,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Sc(n,r,c,null,a)}}var Di=null;function ws(n,r,a,c){if(Di=null,n=cs(c),n=xi(n),n!==null)if(r=wn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ai(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Di=n,null}function $o(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(el()){case Ri:return 1;case Dr:return 4;case un:case Uo:return 16;case tl:return 536870912;default:return 16}default:return 16}}var tn=null,Ts=null,Wt=null;function qo(){if(Wt)return Wt;var n,r=Ts,a=r.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function Is(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function jn(){return!0}function Wo(){return!1}function It(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?jn:Wo,this.isPropagationStopped=Wo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),r}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=It(Cn),Bn=ee({},Cn,{view:0,detail:0}),pc=It(Bn),As,ur,Ur,Vi=ee({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ur&&(Ur&&n.type==="mousemove"?(As=n.screenX-Ur.screenX,ur=n.screenY-Ur.screenY):ur=As=0,Ur=n),As)},movementY:function(n){return"movementY"in n?n.movementY:ur}}),Rs=It(Vi),Ho=ee({},Vi,{dataTransfer:0}),dl=It(Ho),Cs=ee({},Bn,{relatedTarget:0}),Ps=It(Cs),fl=ee({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),cr=It(fl),pl=ee({},Cn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ml=It(pl),gl=ee({},Cn,{data:0}),Ko=It(gl),ks={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _l(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=yl[n])?!!r[n]:!1}function $n(){return _l}var l=ee({},Bn,{key:function(n){if(n.key){var r=ks[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Is(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(n){return n.type==="keypress"?Is(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Is(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=It(l),y=ee({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(y),L=ee({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n}),U=It(L),X=ee({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=It(X),ht=ee({},Vi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=It(ht),yt=[9,13,27,32],it=m&&"CompositionEvent"in window,hn=null;m&&"documentMode"in document&&(hn=document.documentMode);var nn=m&&"TextEvent"in window&&!hn,Oi=m&&(!it||hn&&8<hn&&11>=hn),Ns=" ",ff=!1;function pf(n,r){switch(n){case"keyup":return yt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function hv(n,r){switch(n){case"compositionend":return mf(r);case"keypress":return r.which!==32?null:(ff=!0,Ns);case"textInput":return n=r.data,n===Ns&&ff?null:n;default:return null}}function dv(n,r){if(Ds)return n==="compositionend"||!it&&pf(n,r)?(n=qo(),Wt=Ts=tn=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Oi&&r.locale!=="ko"?null:r.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!fv[n.type]:r==="textarea"}function yf(n,r,a,c){Fn(c),r=Il(r,"onChange"),0<r.length&&(a=new Ss("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Go=null,Qo=null;function pv(n){Lf(n,0)}function vl(n){var r=Ms(n);if(ss(r))return n}function mv(n,r){if(n==="change")return r}var _f=!1;if(m){var mc;if(m){var gc="oninput"in document;if(!gc){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),gc=typeof vf.oninput=="function"}mc=gc}else mc=!1;_f=mc&&(!document.documentMode||9<document.documentMode)}function Ef(){Go&&(Go.detachEvent("onpropertychange",wf),Qo=Go=null)}function wf(n){if(n.propertyName==="value"&&vl(Qo)){var r=[];yf(r,Qo,n,cs(n)),Lo(pv,r)}}function gv(n,r,a){n==="focusin"?(Ef(),Go=r,Qo=a,Go.attachEvent("onpropertychange",wf)):n==="focusout"&&Ef()}function yv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vl(Qo)}function _v(n,r){if(n==="click")return vl(r)}function vv(n,r){if(n==="input"||n==="change")return vl(r)}function Ev(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:Ev;function Yo(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Pn(n[d],r[d]))return!1}return!0}function Tf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function If(n,r){var a=Tf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tf(a)}}function Sf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Sf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Af(){for(var n=window,r=kr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=kr(n.document)}return r}function yc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function wv(n){var r=Af(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Sf(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=If(a,p);var _=If(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tv=m&&"documentMode"in document&&11>=document.documentMode,Vs=null,_c=null,Xo=null,vc=!1;function Rf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vc||Vs==null||Vs!==kr(c)||(c=Vs,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Xo&&Yo(Xo,c)||(Xo=c,c=Il(_c,"onSelect"),0<c.length&&(r=new Ss("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Vs)))}function El(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Os={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Ec={},Cf={};m&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function wl(n){if(Ec[n])return Ec[n];if(!Os[n])return n;var r=Os[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Cf)return Ec[n]=r[a];return n}var Pf=wl("animationend"),kf=wl("animationiteration"),Nf=wl("animationstart"),Df=wl("transitionend"),Vf=new Map,Of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,r){Vf.set(n,r),u(r,[n])}for(var wc=0;wc<Of.length;wc++){var Tc=Of[wc],Iv=Tc.toLowerCase(),Sv=Tc[0].toUpperCase()+Tc.slice(1);zr(Iv,"on"+Sv)}zr(Pf,"onAnimationEnd"),zr(kf,"onAnimationIteration"),zr(Nf,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Df,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function xf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Xa(c,r,void 0,n),n.currentTarget=null}function Lf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==p&&d.isPropagationStopped())break e;xf(d,T,F),p=C}else for(_=0;_<c.length;_++){if(T=c[_],C=T.instance,F=T.currentTarget,T=T.listener,C!==p&&d.isPropagationStopped())break e;xf(d,T,F),p=C}}}if(En)throw n=Mo,En=!1,Mo=null,n}function We(n,r){var a=r[Nc];a===void 0&&(a=r[Nc]=new Set);var c=n+"__bubble";a.has(c)||(Mf(r,n,2,!1),a.add(c))}function Ic(n,r,a){var c=0;r&&(c|=4),Mf(a,n,c,r)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Zo(n){if(!n[Tl]){n[Tl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Av.has(a)||Ic(a,!1,n),Ic(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Tl]||(r[Tl]=!0,Ic("selectionchange",!1,r))}}function Mf(n,r,a,c){switch($o(r)){case 1:var d=Ge;break;case 4:d=fc;break;default:d=Bo}a=d.bind(null,r,a,n),d=void 0,!fs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Sc(n,r,a,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;_=_.return}for(;T!==null;){if(_=xi(T),_===null)return;if(C=_.tag,C===5||C===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Lo(function(){var F=p,H=cs(a),K=[];e:{var W=Vf.get(n);if(W!==void 0){var Z=Ss,re=n;switch(n){case"keypress":if(Is(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=Ps;break;case"focusout":re="blur",Z=Ps;break;case"beforeblur":case"afterblur":Z=Ps;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=dl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case Pf:case kf:case Nf:Z=cr;break;case Df:Z=Fe;break;case"scroll":Z=pc;break;case"wheel":Z=De;break;case"copy":case"cut":case"paste":Z=ml;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var se=(r&4)!==0,nt=!se&&n==="scroll",M=se?W!==null?W+"Capture":null:W;se=[];for(var k=F,b;k!==null;){b=k;var Q=b.stateNode;if(b.tag===5&&Q!==null&&(b=Q,M!==null&&(Q=tt(k,M),Q!=null&&se.push(ea(k,Q,b)))),nt)break;k=k.return}0<se.length&&(W=new Z(W,re,null,a,H),K.push({event:W,listeners:se}))}}if(!(r&7)){e:{if(W=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",W&&a!==wi&&(re=a.relatedTarget||a.fromElement)&&(xi(re)||re[hr]))break e;if((Z||W)&&(W=H.window===H?H:(W=H.ownerDocument)?W.defaultView||W.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=F,re=re?xi(re):null,re!==null&&(nt=wn(re),re!==nt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=F),Z!==re)){if(se=Rs,Q="onMouseLeave",M="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(se=E,Q="onPointerLeave",M="onPointerEnter",k="pointer"),nt=Z==null?W:Ms(Z),b=re==null?W:Ms(re),W=new se(Q,k+"leave",Z,a,H),W.target=nt,W.relatedTarget=b,Q=null,xi(H)===F&&(se=new se(M,k+"enter",re,a,H),se.target=b,se.relatedTarget=nt,Q=se),nt=Q,Z&&re)t:{for(se=Z,M=re,k=0,b=se;b;b=xs(b))k++;for(b=0,Q=M;Q;Q=xs(Q))b++;for(;0<k-b;)se=xs(se),k--;for(;0<b-k;)M=xs(M),b--;for(;k--;){if(se===M||M!==null&&se===M.alternate)break t;se=xs(se),M=xs(M)}se=null}else se=null;Z!==null&&bf(K,W,Z,se,!1),re!==null&&nt!==null&&bf(K,nt,re,se,!0)}}e:{if(W=F?Ms(F):window,Z=W.nodeName&&W.nodeName.toLowerCase(),Z==="select"||Z==="input"&&W.type==="file")var oe=mv;else if(gf(W))if(_f)oe=vv;else{oe=yv;var he=gv}else(Z=W.nodeName)&&Z.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(oe=_v);if(oe&&(oe=oe(n,F))){yf(K,oe,a,H);break e}he&&he(n,W,F),n==="focusout"&&(he=W._wrapperState)&&he.controlled&&W.type==="number"&&as(W,"number",W.value)}switch(he=F?Ms(F):window,n){case"focusin":(gf(he)||he.contentEditable==="true")&&(Vs=he,_c=F,Xo=null);break;case"focusout":Xo=_c=Vs=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,Rf(K,a,H);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":Rf(K,a,H)}var de;if(it)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ds?pf(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Oi&&a.locale!=="ko"&&(Ds||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ds&&(de=qo()):(tn=H,Ts="value"in tn?tn.value:tn.textContent,Ds=!0)),he=Il(F,ye),0<he.length&&(ye=new Ko(ye,n,null,a,H),K.push({event:ye,listeners:he}),de?ye.data=de:(de=mf(a),de!==null&&(ye.data=de)))),(de=nn?hv(n,a):dv(n,a))&&(F=Il(F,"onBeforeInput"),0<F.length&&(H=new Ko("onBeforeInput","beforeinput",null,a,H),K.push({event:H,listeners:F}),H.data=de))}Lf(K,r)})}function ea(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Il(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(ea(n,p,d)),p=tt(n,r),p!=null&&c.push(ea(n,p,d))),n=n.return}return c}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,C=T.alternate,F=T.stateNode;if(C!==null&&C===c)break;T.tag===5&&F!==null&&(T=F,d?(C=tt(a,p),C!=null&&_.unshift(ea(a,C,T))):d||(C=tt(a,p),C!=null&&_.push(ea(a,C,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var Rv=/\r\n?/g,Cv=/\u0000|\uFFFD/g;function Ff(n){return(typeof n=="string"?n:""+n).replace(Rv,`
`).replace(Cv,"")}function Sl(n,r,a){if(r=Ff(r),Ff(n)!==r&&a)throw Error(t(425))}function Al(){}var Ac=null,Rc=null;function Cc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,Pv=typeof clearTimeout=="function"?clearTimeout:void 0,Uf=typeof Promise=="function"?Promise:void 0,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Uf<"u"?function(n){return Uf.resolve(null).then(n).catch(Nv)}:Pc;function Nv(n){setTimeout(function(){throw n})}function kc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Rn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Rn(r)}function jr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function zf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ls,ta="__reactProps$"+Ls,hr="__reactContainer$"+Ls,Nc="__reactEvents$"+Ls,Dv="__reactListeners$"+Ls,Vv="__reactHandles$"+Ls;function xi(n){var r=n[qn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[hr]||a[qn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=zf(n);n!==null;){if(a=n[qn])return a;n=zf(n)}return r}n=a,a=n.parentNode}return null}function na(n){return n=n[qn]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Rl(n){return n[ta]||null}var Dc=[],bs=-1;function Br(n){return{current:n}}function He(n){0>bs||(n.current=Dc[bs],Dc[bs]=null,bs--)}function qe(n,r){bs++,Dc[bs]=n.current,n.current=r}var $r={},Dt=Br($r),Ht=Br(!1),Li=$r;function Fs(n,r){var a=n.type.contextTypes;if(!a)return $r;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Cl(){He(Ht),He(Dt)}function jf(n,r,a){if(Dt.current!==$r)throw Error(t(168));qe(Dt,r),qe(Ht,a)}function Bf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},a,c)}function Pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$r,Li=Dt.current,qe(Dt,n),qe(Ht,Ht.current),!0}function $f(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bf(n,r,Li),c.__reactInternalMemoizedMergedChildContext=n,He(Ht),He(Dt),qe(Dt,n)):He(Ht),qe(Ht,a)}var dr=null,kl=!1,Vc=!1;function qf(n){dr===null?dr=[n]:dr.push(n)}function Ov(n){kl=!0,qf(n)}function qr(){if(!Vc&&dr!==null){Vc=!0;var n=0,r=Pe;try{var a=dr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}dr=null,kl=!1}catch(d){throw dr!==null&&(dr=dr.slice(n+1)),ys(Ri,qr),d}finally{Pe=r,Vc=!1}}return null}var Us=[],zs=0,Nl=null,Dl=0,dn=[],fn=0,Mi=null,fr=1,pr="";function bi(n,r){Us[zs++]=Dl,Us[zs++]=Nl,Nl=n,Dl=r}function Wf(n,r,a){dn[fn++]=fr,dn[fn++]=pr,dn[fn++]=Mi,Mi=n;var c=fr;n=pr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,fr=1<<32-Ut(r)+d|a<<d|c,pr=p+n}else fr=1<<p|a<<d|c,pr=n}function Oc(n){n.return!==null&&(bi(n,1),Wf(n,1,0))}function xc(n){for(;n===Nl;)Nl=Us[--zs],Us[zs]=null,Dl=Us[--zs],Us[zs]=null;for(;n===Mi;)Mi=dn[--fn],dn[fn]=null,pr=dn[--fn],dn[fn]=null,fr=dn[--fn],dn[fn]=null}var rn=null,sn=null,Qe=!1,kn=null;function Hf(n,r){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Kf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=jr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Mi!==null?{id:fr,overflow:pr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Lc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mc(n){if(Qe){var r=sn;if(r){var a=r;if(!Kf(n,r)){if(Lc(n))throw Error(t(418));r=jr(a.nextSibling);var c=rn;r&&Kf(n,r)?Hf(c,a):(n.flags=n.flags&-4097|2,Qe=!1,rn=n)}}else{if(Lc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,rn=n}}}function Gf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Vl(n){if(n!==rn)return!1;if(!Qe)return Gf(n),Qe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Cc(n.type,n.memoizedProps)),r&&(r=sn)){if(Lc(n))throw Qf(),Error(t(418));for(;r;)Hf(n,r),r=jr(r.nextSibling)}if(Gf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=jr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?jr(n.stateNode.nextSibling):null;return!0}function Qf(){for(var n=sn;n;)n=jr(n.nextSibling)}function js(){sn=rn=null,Qe=!1}function bc(n){kn===null?kn=[n]:kn.push(n)}var xv=ge.ReactCurrentBatchConfig;function ra(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ol(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Yf(n){var r=n._init;return r(n._payload)}function Xf(n){function r(M,k){if(n){var b=M.deletions;b===null?(M.deletions=[k],M.flags|=16):b.push(k)}}function a(M,k){if(!n)return null;for(;k!==null;)r(M,k),k=k.sibling;return null}function c(M,k){for(M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function d(M,k){return M=Jr(M,k),M.index=0,M.sibling=null,M}function p(M,k,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<k?(M.flags|=2,k):b):(M.flags|=2,k)):(M.flags|=1048576,k)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,k,b,Q){return k===null||k.tag!==6?(k=Ph(b,M.mode,Q),k.return=M,k):(k=d(k,b),k.return=M,k)}function C(M,k,b,Q){var oe=b.type;return oe===N?H(M,k,b.props.children,Q,b.key):k!==null&&(k.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&Yf(oe)===k.type)?(Q=d(k,b.props),Q.ref=ra(M,k,b),Q.return=M,Q):(Q=ru(b.type,b.key,b.props,null,M.mode,Q),Q.ref=ra(M,k,b),Q.return=M,Q)}function F(M,k,b,Q){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=kh(b,M.mode,Q),k.return=M,k):(k=d(k,b.children||[]),k.return=M,k)}function H(M,k,b,Q,oe){return k===null||k.tag!==7?(k=Wi(b,M.mode,Q,oe),k.return=M,k):(k=d(k,b),k.return=M,k)}function K(M,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Ph(""+k,M.mode,b),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case je:return b=ru(k.type,k.key,k.props,null,M.mode,b),b.ref=ra(M,null,k),b.return=M,b;case Ae:return k=kh(k,M.mode,b),k.return=M,k;case Nt:var Q=k._init;return K(M,Q(k._payload),b)}if(nr(k)||ue(k))return k=Wi(k,M.mode,b,null),k.return=M,k;Ol(M,k)}return null}function W(M,k,b,Q){var oe=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return oe!==null?null:T(M,k,""+b,Q);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case je:return b.key===oe?C(M,k,b,Q):null;case Ae:return b.key===oe?F(M,k,b,Q):null;case Nt:return oe=b._init,W(M,k,oe(b._payload),Q)}if(nr(b)||ue(b))return oe!==null?null:H(M,k,b,Q,null);Ol(M,b)}return null}function Z(M,k,b,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return M=M.get(b)||null,T(k,M,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case je:return M=M.get(Q.key===null?b:Q.key)||null,C(k,M,Q,oe);case Ae:return M=M.get(Q.key===null?b:Q.key)||null,F(k,M,Q,oe);case Nt:var he=Q._init;return Z(M,k,b,he(Q._payload),oe)}if(nr(Q)||ue(Q))return M=M.get(b)||null,H(k,M,Q,oe,null);Ol(k,Q)}return null}function re(M,k,b,Q){for(var oe=null,he=null,de=k,ye=k=0,Et=null;de!==null&&ye<b.length;ye++){de.index>ye?(Et=de,de=null):Et=de.sibling;var xe=W(M,de,b[ye],Q);if(xe===null){de===null&&(de=Et);break}n&&de&&xe.alternate===null&&r(M,de),k=p(xe,k,ye),he===null?oe=xe:he.sibling=xe,he=xe,de=Et}if(ye===b.length)return a(M,de),Qe&&bi(M,ye),oe;if(de===null){for(;ye<b.length;ye++)de=K(M,b[ye],Q),de!==null&&(k=p(de,k,ye),he===null?oe=de:he.sibling=de,he=de);return Qe&&bi(M,ye),oe}for(de=c(M,de);ye<b.length;ye++)Et=Z(de,M,ye,b[ye],Q),Et!==null&&(n&&Et.alternate!==null&&de.delete(Et.key===null?ye:Et.key),k=p(Et,k,ye),he===null?oe=Et:he.sibling=Et,he=Et);return n&&de.forEach(function(Zr){return r(M,Zr)}),Qe&&bi(M,ye),oe}function se(M,k,b,Q){var oe=ue(b);if(typeof oe!="function")throw Error(t(150));if(b=oe.call(b),b==null)throw Error(t(151));for(var he=oe=null,de=k,ye=k=0,Et=null,xe=b.next();de!==null&&!xe.done;ye++,xe=b.next()){de.index>ye?(Et=de,de=null):Et=de.sibling;var Zr=W(M,de,xe.value,Q);if(Zr===null){de===null&&(de=Et);break}n&&de&&Zr.alternate===null&&r(M,de),k=p(Zr,k,ye),he===null?oe=Zr:he.sibling=Zr,he=Zr,de=Et}if(xe.done)return a(M,de),Qe&&bi(M,ye),oe;if(de===null){for(;!xe.done;ye++,xe=b.next())xe=K(M,xe.value,Q),xe!==null&&(k=p(xe,k,ye),he===null?oe=xe:he.sibling=xe,he=xe);return Qe&&bi(M,ye),oe}for(de=c(M,de);!xe.done;ye++,xe=b.next())xe=Z(de,M,ye,xe.value,Q),xe!==null&&(n&&xe.alternate!==null&&de.delete(xe.key===null?ye:xe.key),k=p(xe,k,ye),he===null?oe=xe:he.sibling=xe,he=xe);return n&&de.forEach(function(dE){return r(M,dE)}),Qe&&bi(M,ye),oe}function nt(M,k,b,Q){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case je:e:{for(var oe=b.key,he=k;he!==null;){if(he.key===oe){if(oe=b.type,oe===N){if(he.tag===7){a(M,he.sibling),k=d(he,b.props.children),k.return=M,M=k;break e}}else if(he.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Nt&&Yf(oe)===he.type){a(M,he.sibling),k=d(he,b.props),k.ref=ra(M,he,b),k.return=M,M=k;break e}a(M,he);break}else r(M,he);he=he.sibling}b.type===N?(k=Wi(b.props.children,M.mode,Q,b.key),k.return=M,M=k):(Q=ru(b.type,b.key,b.props,null,M.mode,Q),Q.ref=ra(M,k,b),Q.return=M,M=Q)}return _(M);case Ae:e:{for(he=b.key;k!==null;){if(k.key===he)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){a(M,k.sibling),k=d(k,b.children||[]),k.return=M,M=k;break e}else{a(M,k);break}else r(M,k);k=k.sibling}k=kh(b,M.mode,Q),k.return=M,M=k}return _(M);case Nt:return he=b._init,nt(M,k,he(b._payload),Q)}if(nr(b))return re(M,k,b,Q);if(ue(b))return se(M,k,b,Q);Ol(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(a(M,k.sibling),k=d(k,b),k.return=M,M=k):(a(M,k),k=Ph(b,M.mode,Q),k.return=M,M=k),_(M)):a(M,k)}return nt}var Bs=Xf(!0),Jf=Xf(!1),xl=Br(null),Ll=null,$s=null,Fc=null;function Uc(){Fc=$s=Ll=null}function zc(n){var r=xl.current;He(xl),n._currentValue=r}function jc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function qs(n,r){Ll=n,Fc=$s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Gt=!0),n.firstContext=null)}function pn(n){var r=n._currentValue;if(Fc!==n)if(n={context:n,memoizedValue:r,next:null},$s===null){if(Ll===null)throw Error(t(308));$s=n,Ll.dependencies={lanes:0,firstContext:n}}else $s=$s.next=n;return r}var Fi=null;function Bc(n){Fi===null?Fi=[n]:Fi.push(n)}function Zf(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Bc(r)):(a.next=d.next,d.next=a),r.interleaved=a,mr(n,c)}function mr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Wr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ep(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Hr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,mr(n,a)}return d=c.interleaved,d===null?(r.next=r,Bc(c)):(r.next=d.next,d.next=r),c.interleaved=r,mr(n,a)}function Ml(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}function tp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function bl(n,r,a,c){var d=n.updateQueue;Wr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var C=T,F=C.next;C.next=null,_===null?p=F:_.next=F,_=C;var H=n.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==_&&(T===null?H.firstBaseUpdate=F:T.next=F,H.lastBaseUpdate=C))}if(p!==null){var K=d.baseState;_=0,H=F=C=null,T=p;do{var W=T.lane,Z=T.eventTime;if((c&W)===W){H!==null&&(H=H.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,se=T;switch(W=r,Z=a,se.tag){case 1:if(re=se.payload,typeof re=="function"){K=re.call(Z,K,W);break e}K=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=se.payload,W=typeof re=="function"?re.call(Z,K,W):re,W==null)break e;K=ee({},K,W);break e;case 2:Wr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else Z={eventTime:Z,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(F=H=Z,C=K):H=H.next=Z,_|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(H===null&&(C=K),d.baseState=C,d.firstBaseUpdate=F,d.lastBaseUpdate=H,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);ji|=_,n.lanes=_,n.memoizedState=K}}function np(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ia={},Wn=Br(ia),sa=Br(ia),oa=Br(ia);function Ui(n){if(n===ia)throw Error(t(174));return n}function qc(n,r){switch(qe(oa,r),qe(sa,n),qe(Wn,ia),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ct(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ct(r,n)}He(Wn),qe(Wn,r)}function Ws(){He(Wn),He(sa),He(oa)}function rp(n){Ui(oa.current);var r=Ui(Wn.current),a=ct(r,n.type);r!==a&&(qe(sa,n),qe(Wn,a))}function Wc(n){sa.current===n&&(He(Wn),He(sa))}var Ye=Br(0);function Fl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Hc=[];function Kc(){for(var n=0;n<Hc.length;n++)Hc[n]._workInProgressVersionPrimary=null;Hc.length=0}var Ul=ge.ReactCurrentDispatcher,Gc=ge.ReactCurrentBatchConfig,zi=0,Xe=null,dt=null,_t=null,zl=!1,aa=!1,la=0,Lv=0;function Vt(){throw Error(t(321))}function Qc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Pn(n[a],r[a]))return!1;return!0}function Yc(n,r,a,c,d,p){if(zi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ul.current=n===null||n.memoizedState===null?Uv:zv,n=a(c,d),aa){p=0;do{if(aa=!1,la=0,25<=p)throw Error(t(301));p+=1,_t=dt=null,r.updateQueue=null,Ul.current=jv,n=a(c,d)}while(aa)}if(Ul.current=$l,r=dt!==null&&dt.next!==null,zi=0,_t=dt=Xe=null,zl=!1,r)throw Error(t(300));return n}function Xc(){var n=la!==0;return la=0,n}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Xe.memoizedState=_t=n:_t=_t.next=n,_t}function mn(){if(dt===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var r=_t===null?Xe.memoizedState:_t.next;if(r!==null)_t=r,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},_t===null?Xe.memoizedState=_t=n:_t=_t.next=n}return _t}function ua(n,r){return typeof r=="function"?r(n):r}function Jc(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,C=null,F=p;do{var H=F.lane;if((zi&H)===H)C!==null&&(C=C.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var K={lane:H,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};C===null?(T=C=K,_=c):C=C.next=K,Xe.lanes|=H,ji|=H}F=F.next}while(F!==null&&F!==p);C===null?_=c:C.next=T,Pn(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=C,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,ji|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Zc(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Pn(p,r.memoizedState)||(Gt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function ip(){}function sp(n,r){var a=Xe,c=mn(),d=r(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Gt=!0),c=c.queue,eh(lp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,ca(9,ap.bind(null,a,c,d,r),void 0,null),vt===null)throw Error(t(349));zi&30||op(a,r,d)}return d}function op(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function ap(n,r,a,c){r.value=a,r.getSnapshot=c,up(r)&&cp(n)}function lp(n,r,a){return a(function(){up(r)&&cp(n)})}function up(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Pn(n,a)}catch{return!0}}function cp(n){var r=mr(n,1);r!==null&&On(r,n,1,-1)}function hp(n){var r=Hn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:n},r.queue=n,n=n.dispatch=Fv.bind(null,Xe,n),[r.memoizedState,n]}function ca(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function dp(){return mn().memoizedState}function jl(n,r,a,c){var d=Hn();Xe.flags|=n,d.memoizedState=ca(1|r,a,void 0,c===void 0?null:c)}function Bl(n,r,a,c){var d=mn();c=c===void 0?null:c;var p=void 0;if(dt!==null){var _=dt.memoizedState;if(p=_.destroy,c!==null&&Qc(c,_.deps)){d.memoizedState=ca(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=ca(1|r,a,p,c)}function fp(n,r){return jl(8390656,8,n,r)}function eh(n,r){return Bl(2048,8,n,r)}function pp(n,r){return Bl(4,2,n,r)}function mp(n,r){return Bl(4,4,n,r)}function gp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function yp(n,r,a){return a=a!=null?a.concat([n]):null,Bl(4,4,gp.bind(null,r,n),a)}function th(){}function _p(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Qc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function vp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Qc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Ep(n,r,a){return zi&21?(Pn(a,r)||(a=ki(),Xe.lanes|=a,ji|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a)}function Mv(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=Gc.transition;Gc.transition={};try{n(!1),r()}finally{Pe=a,Gc.transition=c}}function wp(){return mn().memoizedState}function bv(n,r,a){var c=Yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Tp(n))Ip(r,a);else if(a=Zf(n,r,a,c),a!==null){var d=Bt();On(a,n,c,d),Sp(a,r,c)}}function Fv(n,r,a){var c=Yr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tp(n))Ip(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Pn(T,_)){var C=r.interleaved;C===null?(d.next=d,Bc(r)):(d.next=C.next,C.next=d),r.interleaved=d;return}}catch{}finally{}a=Zf(n,r,d,c),a!==null&&(d=Bt(),On(a,n,c,d),Sp(a,r,c))}}function Tp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function Ip(n,r){aa=zl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Sp(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Lr(n,a)}}var $l={readContext:pn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Uv={readContext:pn,useCallback:function(n,r){return Hn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:fp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,jl(4194308,4,gp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return jl(4194308,4,n,r)},useInsertionEffect:function(n,r){return jl(4,2,n,r)},useMemo:function(n,r){var a=Hn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Hn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=bv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Hn();return n={current:n},r.memoizedState=n},useState:hp,useDebugValue:th,useDeferredValue:function(n){return Hn().memoizedState=n},useTransition:function(){var n=hp(!1),r=n[0];return n=Mv.bind(null,n[1]),Hn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Hn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),vt===null)throw Error(t(349));zi&30||op(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,fp(lp.bind(null,c,p,n),[n]),c.flags|=2048,ca(9,ap.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Hn(),r=vt.identifierPrefix;if(Qe){var a=pr,c=fr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=la++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Lv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},zv={readContext:pn,useCallback:_p,useContext:pn,useEffect:eh,useImperativeHandle:yp,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:vp,useReducer:Jc,useRef:dp,useState:function(){return Jc(ua)},useDebugValue:th,useDeferredValue:function(n){var r=mn();return Ep(r,dt.memoizedState,n)},useTransition:function(){var n=Jc(ua)[0],r=mn().memoizedState;return[n,r]},useMutableSource:ip,useSyncExternalStore:sp,useId:wp,unstable_isNewReconciler:!1},jv={readContext:pn,useCallback:_p,useContext:pn,useEffect:eh,useImperativeHandle:yp,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:vp,useReducer:Zc,useRef:dp,useState:function(){return Zc(ua)},useDebugValue:th,useDeferredValue:function(n){var r=mn();return dt===null?r.memoizedState=n:Ep(r,dt.memoizedState,n)},useTransition:function(){var n=Zc(ua)[0],r=mn().memoizedState;return[n,r]},useMutableSource:ip,useSyncExternalStore:sp,useId:wp,unstable_isNewReconciler:!1};function Nn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function nh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ql={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Yr(n),p=gr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Hr(n,p,d),r!==null&&(On(r,n,d,c),Ml(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Yr(n),p=gr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Hr(n,p,d),r!==null&&(On(r,n,d,c),Ml(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Yr(n),d=gr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Hr(n,d,c),r!==null&&(On(r,n,c,a),Ml(r,n,c))}};function Ap(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Yo(a,c)||!Yo(d,p):!0}function Rp(n,r,a){var c=!1,d=$r,p=r.contextType;return typeof p=="object"&&p!==null?p=pn(p):(d=Kt(r)?Li:Dt.current,c=r.contextTypes,p=(c=c!=null)?Fs(n,d):$r),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ql,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Cp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&ql.enqueueReplaceState(r,r.state,null)}function rh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},$c(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=pn(p):(p=Kt(r)?Li:Dt.current,d.context=Fs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(nh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&ql.enqueueReplaceState(d,d.state,null),bl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function ih(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function sh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Bv=typeof WeakMap=="function"?WeakMap:Map;function Pp(n,r,a){a=gr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Xl||(Xl=!0,Eh=c),sh(n,r)},a}function kp(n,r,a){a=gr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){sh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){sh(n,r),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Np(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Bv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=nE.bind(null,n,r,a),r.then(n,n))}function Dp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Vp(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=gr(-1,1),r.tag=2,Hr(a,r,1))),a.lanes|=1),n)}var $v=ge.ReactCurrentOwner,Gt=!1;function jt(n,r,a,c){r.child=n===null?Jf(r,null,a,c):Bs(r,n.child,a,c)}function Op(n,r,a,c,d){a=a.render;var p=r.ref;return qs(r,d),c=Yc(n,r,a,c,p,d),a=Xc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,yr(n,r,d)):(Qe&&a&&Oc(r),r.flags|=1,jt(n,r,c,d),r.child)}function xp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Ch(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Lp(n,r,p,c,d)):(n=ru(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(_,c)&&n.ref===r.ref)return yr(n,r,d)}return r.flags|=1,n=Jr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Lp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Yo(p,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Gt=!0);else return r.lanes=n.lanes,yr(n,r,d)}return oh(n,r,a,c,d)}function Mp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Gs,on),on|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(Gs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,qe(Gs,on),on|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,qe(Gs,on),on|=c;return jt(n,r,d,a),r.child}function bp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function oh(n,r,a,c,d){var p=Kt(a)?Li:Dt.current;return p=Fs(r,p),qs(r,d),a=Yc(n,r,a,c,p,d),c=Xc(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,yr(n,r,d)):(Qe&&c&&Oc(r),r.flags|=1,jt(n,r,a,d),r.child)}function Fp(n,r,a,c,d){if(Kt(a)){var p=!0;Pl(r)}else p=!1;if(qs(r,d),r.stateNode===null)Hl(n,r),Rp(r,a,c),rh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var C=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=pn(F):(F=Kt(a)?Li:Dt.current,F=Fs(r,F));var H=a.getDerivedStateFromProps,K=typeof H=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||C!==F)&&Cp(r,_,c,F),Wr=!1;var W=r.memoizedState;_.state=W,bl(r,c,_,d),C=r.memoizedState,T!==c||W!==C||Ht.current||Wr?(typeof H=="function"&&(nh(r,a,H,c),C=r.memoizedState),(T=Wr||Ap(r,a,T,c,W,C,F))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=C),_.props=c,_.state=C,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,ep(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Nn(r.type,T),_.props=F,K=r.pendingProps,W=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=pn(C):(C=Kt(a)?Li:Dt.current,C=Fs(r,C));var Z=a.getDerivedStateFromProps;(H=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||W!==C)&&Cp(r,_,c,C),Wr=!1,W=r.memoizedState,_.state=W,bl(r,c,_,d);var re=r.memoizedState;T!==K||W!==re||Ht.current||Wr?(typeof Z=="function"&&(nh(r,a,Z,c),re=r.memoizedState),(F=Wr||Ap(r,a,F,c,W,re,C)||!1)?(H||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,C)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=C,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return ah(n,r,a,c,p,d)}function ah(n,r,a,c,d,p){bp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&$f(r,a,!1),yr(n,r,p);c=r.stateNode,$v.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Bs(r,n.child,null,p),r.child=Bs(r,null,T,p)):jt(n,r,T,p),r.memoizedState=c.state,d&&$f(r,a,!0),r.child}function Up(n){var r=n.stateNode;r.pendingContext?jf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&jf(n,r.context,!1),qc(n,r.containerInfo)}function zp(n,r,a,c,d){return js(),bc(d),r.flags|=256,jt(n,r,a,c),r.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function uh(n){return{baseLanes:n,cachePool:null,transitions:null}}function jp(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ye,d&1),n===null)return Mc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=_):p=iu(_,c,0,null),n=Wi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=uh(a),r.memoizedState=lh,n):ch(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return qv(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var C={mode:"hidden",children:c.children};return!(_&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=C,r.deletions=null):(c=Jr(d,C),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Jr(T,p):(p=Wi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?uh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=lh,c}return p=n.child,n=p.sibling,c=Jr(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function ch(n,r){return r=iu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Wl(n,r,a,c){return c!==null&&bc(c),Bs(r,n.child,null,a),n=ch(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function qv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=ih(Error(t(422))),Wl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=iu({mode:"visible",children:c.children},d,0,null),p=Wi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&Bs(r,n.child,null,_),r.child.memoizedState=uh(_),r.memoizedState=lh,p);if(!(r.mode&1))return Wl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=ih(p,c,void 0),Wl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Gt||T){if(c=vt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,mr(n,d),On(c,n,d,-1))}return Rh(),c=ih(Error(t(421))),Wl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=rE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,sn=jr(d.nextSibling),rn=r,Qe=!0,kn=null,n!==null&&(dn[fn++]=fr,dn[fn++]=pr,dn[fn++]=Mi,fr=n.id,pr=n.overflow,Mi=r),r=ch(r,c.children),r.flags|=4096,r)}function Bp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),jc(n.return,r,a)}function hh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function $p(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(jt(n,r,c.children,a),c=Ye.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,a,r);else if(n.tag===19)Bp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ye,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Fl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),hh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Fl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}hh(r,!0,a,null,p);break;case"together":hh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function yr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),ji|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Jr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Jr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Wv(n,r,a){switch(r.tag){case 3:Up(r),js();break;case 5:rp(r);break;case 1:Kt(r.type)&&Pl(r);break;case 4:qc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(xl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ye,Ye.current&1),r.flags|=128,null):a&r.child.childLanes?jp(n,r,a):(qe(Ye,Ye.current&1),n=yr(n,r,a),n!==null?n.sibling:null);qe(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return $p(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Mp(n,r,a)}return yr(n,r,a)}var qp,dh,Wp,Hp;qp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},dh=function(){},Wp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Ui(Wn.current);var p=null;switch(a){case"input":d=_i(n,d),c=_i(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=Ao(n,d),c=Ao(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Al)}Do(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var C=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&C!==T&&(C!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&T[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(p||(p=[]),p.push(F,a)),a=C;else F==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,T=T?T.__html:void 0,C!=null&&T!==C&&(p=p||[]).push(F,C)):F==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(F,""+C):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(C!=null&&F==="onScroll"&&We("scroll",n),p||T===C||(p=[])):(p=p||[]).push(F,C))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},Hp=function(n,r,a,c){a!==c&&(r.flags|=4)};function ha(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Hv(n,r,a){var c=r.pendingProps;switch(xc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return Kt(r.type)&&Cl(),Ot(r),null;case 3:return c=r.stateNode,Ws(),He(Ht),He(Dt),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,kn!==null&&(Ih(kn),kn=null))),dh(n,r),Ot(r),null;case 5:Wc(r);var d=Ui(oa.current);if(a=r.type,n!==null&&r.stateNode!=null)Wp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Ui(Wn.current),Vl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[qn]=r,c[ta]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":os(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":ls(c,p),We("invalid",c)}Do(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Sl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Sl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":tr(c),Ya(c,p,!0);break;case"textarea":tr(c),Ro(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Al)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[qn]=r,n[ta]=c,qp(n,r,!1,!1),r.stateNode=n;e:{switch(_=Vo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Jo.length;d++)We(Jo[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":os(n,c),d=_i(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),We("invalid",n);break;case"textarea":ls(n,c),d=Ao(n,c),We("invalid",n);break;default:d=c}Do(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var C=T[p];p==="style"?ko(n,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Co(n,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Nr(n,C):typeof C=="number"&&Nr(n,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&We("scroll",n):C!=null&&ce(n,p,C,_))}switch(a){case"input":tr(n),Ya(n,c,!1);break;case"textarea":tr(n),Ro(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?rr(n,!!c.multiple,p,!1):c.defaultValue!=null&&rr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Al)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)Hp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Ui(oa.current),Ui(Wn.current),Vl(r)){if(c=r.stateNode,a=r.memoizedProps,c[qn]=r,(p=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Sl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Sl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qn]=r,r.stateNode=c}return Ot(r),null;case 13:if(He(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&sn!==null&&r.mode&1&&!(r.flags&128))Qf(),js(),r.flags|=98560,p=!1;else if(p=Vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[qn]=r}else js(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Ot(r),p=!1}else kn!==null&&(Ih(kn),kn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ye.current&1?ft===0&&(ft=3):Rh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Ws(),dh(n,r),n===null&&Zo(r.stateNode.containerInfo),Ot(r),null;case 10:return zc(r.type._context),Ot(r),null;case 17:return Kt(r.type)&&Cl(),Ot(r),null;case 19:if(He(Ye),p=r.memoizedState,p===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ha(p,!1);else{if(ft!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(_=Fl(n),_!==null){for(r.flags|=128,ha(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&$e()>Qs&&(r.flags|=128,c=!0,ha(p,!1),r.lanes=4194304)}else{if(!c)if(n=Fl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ha(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Qe)return Ot(r),null}else 2*$e()-p.renderingStartTime>Qs&&a!==1073741824&&(r.flags|=128,c=!0,ha(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=$e(),r.sibling=null,a=Ye.current,qe(Ye,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return Ah(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?on&1073741824&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Kv(n,r){switch(xc(r),r.tag){case 1:return Kt(r.type)&&Cl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ws(),He(Ht),He(Dt),Kc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Wc(r),null;case 13:if(He(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));js()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Ye),null;case 4:return Ws(),null;case 10:return zc(r.type._context),null;case 22:case 23:return Ah(),null;case 24:return null;default:return null}}var Kl=!1,xt=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Ks(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function fh(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var Kp=!1;function Qv(n,r){if(Ac=Fr,n=Af(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,C=-1,F=0,H=0,K=n,W=null;t:for(;;){for(var Z;K!==a||d!==0&&K.nodeType!==3||(T=_+d),K!==p||c!==0&&K.nodeType!==3||(C=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(Z=K.firstChild)!==null;)W=K,K=Z;for(;;){if(K===n)break t;if(W===a&&++F===d&&(T=_),W===p&&++H===c&&(C=_),(Z=K.nextSibling)!==null)break;K=W,W=K.parentNode}K=Z}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:n,selectionRange:a},Fr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var se=re.memoizedProps,nt=re.memoizedState,M=r.stateNode,k=M.getSnapshotBeforeUpdate(r.elementType===r.type?se:Nn(r.type,se),nt);M.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){Ze(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=Kp,Kp=!1,re}function da(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&fh(r,a,p)}d=d.next}while(d!==c)}}function Gl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function ph(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Gp(n){var r=n.alternate;r!==null&&(n.alternate=null,Gp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qn],delete r[ta],delete r[Nc],delete r[Dv],delete r[Vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qp(n){return n.tag===5||n.tag===3||n.tag===4}function Yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Al));else if(c!==4&&(n=n.child,n!==null))for(mh(n,r,a),n=n.sibling;n!==null;)mh(n,r,a),n=n.sibling}function gh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(gh(n,r,a),n=n.sibling;n!==null;)gh(n,r,a),n=n.sibling}var St=null,Dn=!1;function Kr(n,r,a){for(a=a.child;a!==null;)Xp(n,r,a),a=a.sibling}function Xp(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ci,a)}catch{}switch(a.tag){case 5:xt||Ks(a,r);case 6:var c=St,d=Dn;St=null,Kr(n,r,a),St=c,Dn=d,St!==null&&(Dn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Dn?(n=St,a=a.stateNode,n.nodeType===8?kc(n.parentNode,a):n.nodeType===1&&kc(n,a),Rn(n)):kc(St,a.stateNode));break;case 4:c=St,d=Dn,St=a.stateNode.containerInfo,Dn=!0,Kr(n,r,a),St=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!xt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&(p&2||p&4)&&fh(a,r,_),d=d.next}while(d!==c)}Kr(n,r,a);break;case 1:if(!xt&&(Ks(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,r,T)}Kr(n,r,a);break;case 21:Kr(n,r,a);break;case 22:a.mode&1?(xt=(c=xt)||a.memoizedState!==null,Kr(n,r,a),xt=c):Kr(n,r,a);break;default:Kr(n,r,a)}}function Jp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Gv),r.forEach(function(c){var d=iE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:St=T.stateNode,Dn=!1;break e;case 3:St=T.stateNode.containerInfo,Dn=!0;break e;case 4:St=T.stateNode.containerInfo,Dn=!0;break e}T=T.return}if(St===null)throw Error(t(160));Xp(p,_,d),St=null,Dn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Zp(r,n),r=r.sibling}function Zp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(r,n),Kn(n),c&4){try{da(3,n,n.return),Gl(3,n)}catch(se){Ze(n,n.return,se)}try{da(5,n,n.return)}catch(se){Ze(n,n.return,se)}}break;case 1:Vn(r,n),Kn(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Vn(r,n),Kn(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var d=n.stateNode;try{Nr(d,"")}catch(se){Ze(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,C=n.updateQueue;if(n.updateQueue=null,C!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Io(d,p),Vo(T,_);var F=Vo(T,p);for(_=0;_<C.length;_+=2){var H=C[_],K=C[_+1];H==="style"?ko(d,K):H==="dangerouslySetInnerHTML"?Co(d,K):H==="children"?Nr(d,K):ce(d,H,K,F)}switch(T){case"input":So(d,p);break;case"textarea":us(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?rr(d,!!p.multiple,Z,!1):W!==!!p.multiple&&(p.defaultValue!=null?rr(d,!!p.multiple,p.defaultValue,!0):rr(d,!!p.multiple,p.multiple?[]:"",!1))}d[ta]=p}catch(se){Ze(n,n.return,se)}}break;case 6:if(Vn(r,n),Kn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){Ze(n,n.return,se)}}break;case 3:if(Vn(r,n),Kn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Rn(r.containerInfo)}catch(se){Ze(n,n.return,se)}break;case 4:Vn(r,n),Kn(n);break;case 13:Vn(r,n),Kn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(vh=$e())),c&4&&Jp(n);break;case 22:if(H=a!==null&&a.memoizedState!==null,n.mode&1?(xt=(F=xt)||H,Vn(r,n),xt=F):Vn(r,n),Kn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!H&&n.mode&1)for(ne=n,H=n.child;H!==null;){for(K=ne=H;ne!==null;){switch(W=ne,Z=W.child,W.tag){case 0:case 11:case 14:case 15:da(4,W,W.return);break;case 1:Ks(W,W.return);var re=W.stateNode;if(typeof re.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(se){Ze(c,a,se)}}break;case 5:Ks(W,W.return);break;case 22:if(W.memoizedState!==null){nm(K);continue}}Z!==null?(Z.return=W,ne=Z):nm(K)}H=H.sibling}e:for(H=null,K=n;;){if(K.tag===5){if(H===null){H=K;try{d=K.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,C=K.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,T.style.display=Po("display",_))}catch(se){Ze(n,n.return,se)}}}else if(K.tag===6){if(H===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(se){Ze(n,n.return,se)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;H===K&&(H=null),K=K.return}H===K&&(H=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Vn(r,n),Kn(n),c&4&&Jp(n);break;case 21:break;default:Vn(r,n),Kn(n)}}function Kn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Qp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Nr(d,""),c.flags&=-33);var p=Yp(n);gh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=Yp(n);mh(n,T,_);break;default:throw Error(t(161))}}catch(C){Ze(n,n.return,C)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Yv(n,r,a){ne=n,em(n)}function em(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Kl;if(!_){var T=d.alternate,C=T!==null&&T.memoizedState!==null||xt;T=Kl;var F=xt;if(Kl=_,(xt=C)&&!F)for(ne=d;ne!==null;)_=ne,C=_.child,_.tag===22&&_.memoizedState!==null?rm(d):C!==null?(C.return=_,ne=C):rm(d);for(;p!==null;)ne=p,em(p),p=p.sibling;ne=d,Kl=T,xt=F}tm(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ne=p):tm(n)}}function tm(n){for(;ne!==null;){var r=ne;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:xt||Gl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!xt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Nn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&np(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}np(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var C=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var H=F.memoizedState;if(H!==null){var K=H.dehydrated;K!==null&&Rn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xt||r.flags&512&&ph(r)}catch(W){Ze(r,r.return,W)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function nm(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function rm(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Gl(4,r)}catch(C){Ze(r,a,C)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(C){Ze(r,d,C)}}var p=r.return;try{ph(r)}catch(C){Ze(r,p,C)}break;case 5:var _=r.return;try{ph(r)}catch(C){Ze(r,_,C)}}}catch(C){Ze(r,r.return,C)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var Xv=Math.ceil,Ql=ge.ReactCurrentDispatcher,yh=ge.ReactCurrentOwner,gn=ge.ReactCurrentBatchConfig,Oe=0,vt=null,st=null,At=0,on=0,Gs=Br(0),ft=0,fa=null,ji=0,Yl=0,_h=0,pa=null,Qt=null,vh=0,Qs=1/0,_r=null,Xl=!1,Eh=null,Gr=null,Jl=!1,Qr=null,Zl=0,ma=0,wh=null,eu=-1,tu=0;function Bt(){return Oe&6?$e():eu!==-1?eu:eu=$e()}function Yr(n){return n.mode&1?Oe&2&&At!==0?At&-At:xv.transition!==null?(tu===0&&(tu=ki()),tu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:$o(n.type)),n):1}function On(n,r,a,c){if(50<ma)throw ma=0,wh=null,Error(t(185));xr(n,a,c),(!(Oe&2)||n!==vt)&&(n===vt&&(!(Oe&2)&&(Yl|=a),ft===4&&Xr(n,At)),Yt(n,c),a===1&&Oe===0&&!(r.mode&1)&&(Qs=$e()+500,kl&&qr()))}function Yt(n,r){var a=n.callbackNode;or(n,r);var c=Pi(n,n===vt?At:0);if(c===0)a!==null&&Fo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Fo(a),r===1)n.tag===0?Ov(sm.bind(null,n)):qf(sm.bind(null,n)),kv(function(){!(Oe&6)&&qr()}),a=null;else{switch(Mr(c)){case 1:a=Ri;break;case 4:a=Dr;break;case 16:a=un;break;case 536870912:a=tl;break;default:a=un}a=fm(a,im.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function im(n,r){if(eu=-1,tu=0,Oe&6)throw Error(t(327));var a=n.callbackNode;if(Ys()&&n.callbackNode!==a)return null;var c=Pi(n,n===vt?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=nu(n,c);else{r=c;var d=Oe;Oe|=2;var p=am();(vt!==n||At!==r)&&(_r=null,Qs=$e()+500,$i(n,r));do try{eE();break}catch(T){om(n,T)}while(!0);Uc(),Ql.current=p,Oe=d,st!==null?r=0:(vt=null,At=0,r=ft)}if(r!==0){if(r===2&&(d=en(n),d!==0&&(c=d,r=Th(n,d))),r===1)throw a=fa,$i(n,0),Xr(n,c),Yt(n,$e()),a;if(r===6)Xr(n,c);else{if(d=n.current.alternate,!(c&30)&&!Jv(d)&&(r=nu(n,c),r===2&&(p=en(n),p!==0&&(c=p,r=Th(n,p))),r===1))throw a=fa,$i(n,0),Xr(n,c),Yt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:qi(n,Qt,_r);break;case 3:if(Xr(n,c),(c&130023424)===c&&(r=vh+500-$e(),10<r)){if(Pi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Pc(qi.bind(null,n,Qt,_r),r);break}qi(n,Qt,_r);break;case 4:if(Xr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Xv(c/1960))-c,10<c){n.timeoutHandle=Pc(qi.bind(null,n,Qt,_r),c);break}qi(n,Qt,_r);break;case 5:qi(n,Qt,_r);break;default:throw Error(t(329))}}}return Yt(n,$e()),n.callbackNode===a?im.bind(null,n):null}function Th(n,r){var a=pa;return n.current.memoizedState.isDehydrated&&($i(n,r).flags|=256),n=nu(n,r),n!==2&&(r=Qt,Qt=a,r!==null&&Ih(r)),n}function Ih(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function Jv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xr(n,r){for(r&=~_h,r&=~Yl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function sm(n){if(Oe&6)throw Error(t(327));Ys();var r=Pi(n,0);if(!(r&1))return Yt(n,$e()),null;var a=nu(n,r);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(r=c,a=Th(n,c))}if(a===1)throw a=fa,$i(n,0),Xr(n,r),Yt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,qi(n,Qt,_r),Yt(n,$e()),null}function Sh(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(Qs=$e()+500,kl&&qr())}}function Bi(n){Qr!==null&&Qr.tag===0&&!(Oe&6)&&Ys();var r=Oe;Oe|=1;var a=gn.transition,c=Pe;try{if(gn.transition=null,Pe=1,n)return n()}finally{Pe=c,gn.transition=a,Oe=r,!(Oe&6)&&qr()}}function Ah(){on=Gs.current,He(Gs)}function $i(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Pv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(xc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Cl();break;case 3:Ws(),He(Ht),He(Dt),Kc();break;case 5:Wc(c);break;case 4:Ws();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:zc(c.type._context);break;case 22:case 23:Ah()}a=a.return}if(vt=n,st=n=Jr(n.current,null),At=on=r,ft=0,fa=null,_h=Yl=ji=0,Qt=pa=null,Fi!==null){for(r=0;r<Fi.length;r++)if(a=Fi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Fi=null}return n}function om(n,r){do{var a=st;try{if(Uc(),Ul.current=$l,zl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}zl=!1}if(zi=0,_t=dt=Xe=null,aa=!1,la=0,yh.current=null,a===null||a.return===null){ft=1,fa=r,st=null;break}e:{var p=n,_=a.return,T=a,C=r;if(r=At,T.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var F=C,H=T,K=H.tag;if(!(H.mode&1)&&(K===0||K===11||K===15)){var W=H.alternate;W?(H.updateQueue=W.updateQueue,H.memoizedState=W.memoizedState,H.lanes=W.lanes):(H.updateQueue=null,H.memoizedState=null)}var Z=Dp(_);if(Z!==null){Z.flags&=-257,Vp(Z,_,T,p,r),Z.mode&1&&Np(p,F,r),r=Z,C=F;var re=r.updateQueue;if(re===null){var se=new Set;se.add(C),r.updateQueue=se}else re.add(C);break e}else{if(!(r&1)){Np(p,F,r),Rh();break e}C=Error(t(426))}}else if(Qe&&T.mode&1){var nt=Dp(_);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),Vp(nt,_,T,p,r),bc(Hs(C,T));break e}}p=C=Hs(C,T),ft!==4&&(ft=2),pa===null?pa=[p]:pa.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=Pp(p,C,r);tp(p,M);break e;case 1:T=C;var k=p.type,b=p.stateNode;if(!(p.flags&128)&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Gr===null||!Gr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Q=kp(p,T,r);tp(p,Q);break e}}p=p.return}while(p!==null)}um(a)}catch(oe){r=oe,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function am(){var n=Ql.current;return Ql.current=$l,n===null?$l:n}function Rh(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||!(ji&268435455)&&!(Yl&268435455)||Xr(vt,At)}function nu(n,r){var a=Oe;Oe|=2;var c=am();(vt!==n||At!==r)&&(_r=null,$i(n,r));do try{Zv();break}catch(d){om(n,d)}while(!0);if(Uc(),Oe=a,Ql.current=c,st!==null)throw Error(t(261));return vt=null,At=0,ft}function Zv(){for(;st!==null;)lm(st)}function eE(){for(;st!==null&&!Za();)lm(st)}function lm(n){var r=dm(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?um(n):st=r,yh.current=null}function um(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=Kv(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,st=null;return}}else if(a=Hv(a,r,on),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ft===0&&(ft=5)}function qi(n,r,a){var c=Pe,d=gn.transition;try{gn.transition=null,Pe=1,tE(n,r,a,c)}finally{gn.transition=d,Pe=c}return null}function tE(n,r,a,c){do Ys();while(Qr!==null);if(Oe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===vt&&(st=vt=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Jl||(Jl=!0,fm(un,function(){return Ys(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=gn.transition,gn.transition=null;var _=Pe;Pe=1;var T=Oe;Oe|=4,yh.current=null,Qv(n,a),Zp(a,n),wv(Rc),Fr=!!Ac,Rc=Ac=null,n.current=a,Yv(a),uc(),Oe=T,Pe=_,gn.transition=p}else n.current=a;if(Jl&&(Jl=!1,Qr=n,Zl=d),p=n.pendingLanes,p===0&&(Gr=null),nl(a.stateNode),Yt(n,$e()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Xl)throw Xl=!1,n=Eh,Eh=null,n;return Zl&1&&n.tag!==0&&Ys(),p=n.pendingLanes,p&1?n===wh?ma++:(ma=0,wh=n):ma=0,qr(),null}function Ys(){if(Qr!==null){var n=Mr(Zl),r=gn.transition,a=Pe;try{if(gn.transition=null,Pe=16>n?16:n,Qr===null)var c=!1;else{if(n=Qr,Qr=null,Zl=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if(ne.flags&16){var T=p.deletions;if(T!==null){for(var C=0;C<T.length;C++){var F=T[C];for(ne=F;ne!==null;){var H=ne;switch(H.tag){case 0:case 11:case 15:da(8,H,p)}var K=H.child;if(K!==null)K.return=H,ne=K;else for(;ne!==null;){H=ne;var W=H.sibling,Z=H.return;if(Gp(H),H===F){ne=null;break}if(W!==null){W.return=Z,ne=W;break}ne=Z}}}var re=p.alternate;if(re!==null){var se=re.child;if(se!==null){re.child=null;do{var nt=se.sibling;se.sibling=null,se=nt}while(se!==null)}}ne=p}}if(p.subtreeFlags&2064&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,p.flags&2048)switch(p.tag){case 0:case 11:case 15:da(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ne=M;break e}ne=p.return}}var k=n.current;for(ne=k;ne!==null;){_=ne;var b=_.child;if(_.subtreeFlags&2064&&b!==null)b.return=_,ne=b;else e:for(_=k;ne!==null;){if(T=ne,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:Gl(9,T)}}catch(oe){Ze(T,T.return,oe)}if(T===_){ne=null;break e}var Q=T.sibling;if(Q!==null){Q.return=T.return,ne=Q;break e}ne=T.return}}if(Oe=d,qr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ci,n)}catch{}c=!0}return c}finally{Pe=a,gn.transition=r}}return!1}function cm(n,r,a){r=Hs(a,r),r=Pp(n,r,1),n=Hr(n,r,1),r=Bt(),n!==null&&(xr(n,1,r),Yt(n,r))}function Ze(n,r,a){if(n.tag===3)cm(n,n,a);else for(;r!==null;){if(r.tag===3){cm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=Hs(a,n),n=kp(r,n,1),r=Hr(r,n,1),n=Bt(),r!==null&&(xr(r,1,n),Yt(r,n));break}}r=r.return}}function nE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(At&a)===a&&(ft===4||ft===3&&(At&130023424)===At&&500>$e()-vh?$i(n,0):_h|=a),Yt(n,r)}function hm(n,r){r===0&&(n.mode&1?(r=vs,vs<<=1,!(vs&130023424)&&(vs=4194304)):r=1);var a=Bt();n=mr(n,r),n!==null&&(xr(n,r,a),Yt(n,a))}function rE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),hm(n,a)}function iE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),hm(n,a)}var dm;dm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Gt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Gt=!1,Wv(n,r,a);Gt=!!(n.flags&131072)}else Gt=!1,Qe&&r.flags&1048576&&Wf(r,Dl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Hl(n,r),n=r.pendingProps;var d=Fs(r,Dt.current);qs(r,a),d=Yc(null,r,c,n,d,a);var p=Xc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kt(c)?(p=!0,Pl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(r),d.updater=ql,r.stateNode=d,d._reactInternals=r,rh(r,c,n,a),r=ah(null,r,c,!0,p,a)):(r.tag=0,Qe&&p&&Oc(r),jt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Hl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=oE(c),n=Nn(c,n),d){case 0:r=oh(null,r,c,n,a);break e;case 1:r=Fp(null,r,c,n,a);break e;case 11:r=Op(null,r,c,n,a);break e;case 14:r=xp(null,r,c,Nn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),oh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Fp(n,r,c,d,a);case 3:e:{if(Up(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,ep(n,r),bl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Hs(Error(t(423)),r),r=zp(n,r,c,a,d);break e}else if(c!==d){d=Hs(Error(t(424)),r),r=zp(n,r,c,a,d);break e}else for(sn=jr(r.stateNode.containerInfo.firstChild),rn=r,Qe=!0,kn=null,a=Jf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(js(),c===d){r=yr(n,r,a);break e}jt(n,r,c,a)}r=r.child}return r;case 5:return rp(r),n===null&&Mc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Cc(c,d)?_=null:p!==null&&Cc(c,p)&&(r.flags|=32),bp(n,r),jt(n,r,_,a),r.child;case 6:return n===null&&Mc(r),null;case 13:return jp(n,r,a);case 4:return qc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Bs(r,null,c,a):jt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Op(n,r,c,d,a);case 7:return jt(n,r,r.pendingProps,a),r.child;case 8:return jt(n,r,r.pendingProps.children,a),r.child;case 12:return jt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,qe(xl,c._currentValue),c._currentValue=_,p!==null)if(Pn(p.value,_)){if(p.children===d.children&&!Ht.current){r=yr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var C=T.firstContext;C!==null;){if(C.context===c){if(p.tag===1){C=gr(-1,a&-a),C.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var H=F.pending;H===null?C.next=C:(C.next=H.next,H.next=C),F.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),jc(p.return,a,r),T.lanes|=a;break}C=C.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),jc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}jt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,qs(r,a),d=pn(d),c=c(d),r.flags|=1,jt(n,r,c,a),r.child;case 14:return c=r.type,d=Nn(c,r.pendingProps),d=Nn(c.type,d),xp(n,r,c,d,a);case 15:return Lp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Hl(n,r),r.tag=1,Kt(c)?(n=!0,Pl(r)):n=!1,qs(r,a),Rp(r,c,d),rh(r,c,d,a),ah(null,r,c,!0,n,a);case 19:return $p(n,r,a);case 22:return Mp(n,r,a)}throw Error(t(156,r.tag))};function fm(n,r){return ys(n,r)}function sE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,r,a,c){return new sE(n,r,a,c)}function Ch(n){return n=n.prototype,!(!n||!n.isReactComponent)}function oE(n){if(typeof n=="function")return Ch(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===kt)return 14}return 2}function Jr(n,r){var a=n.alternate;return a===null?(a=yn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ru(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Ch(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return Wi(a.children,d,p,r);case I:_=8,d|=8;break;case R:return n=yn(12,a,r,d|2),n.elementType=R,n.lanes=p,n;case S:return n=yn(13,a,r,d),n.elementType=S,n.lanes=p,n;case et:return n=yn(19,a,r,d),n.elementType=et,n.lanes=p,n;case Ue:return iu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case D:_=9;break e;case x:_=11;break e;case kt:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Wi(n,r,a,c){return n=yn(7,n,c,r),n.lanes=a,n}function iu(n,r,a,c){return n=yn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Ph(n,r,a){return n=yn(6,n,null,r),n.lanes=a,n}function kh(n,r,a){return r=yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function aE(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Or(0),this.expirationTimes=Or(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Nh(n,r,a,c,d,p,_,T,C){return n=new aE(n,r,a,T,C),r===1?(r=1,p===!0&&(r|=8)):r=0,p=yn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(p),n}function lE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function pm(n){if(!n)return $r;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return Bf(n,a,r)}return r}function mm(n,r,a,c,d,p,_,T,C){return n=Nh(a,c,!0,n,d,p,_,T,C),n.context=pm(null),a=n.current,c=Bt(),d=Yr(a),p=gr(c,d),p.callback=r??null,Hr(a,p,d),n.current.lanes=d,xr(n,d,c),Yt(n,c),n}function su(n,r,a,c){var d=r.current,p=Bt(),_=Yr(d);return a=pm(a),r.context===null?r.context=a:r.pendingContext=a,r=gr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Hr(d,r,_),n!==null&&(On(n,d,_,p),Ml(n,d,_)),_}function ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Dh(n,r){gm(n,r),(n=n.alternate)&&gm(n,r)}var ym=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vh(n){this._internalRoot=n}au.prototype.render=Vh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));su(n,r,null,null)},au.prototype.unmount=Vh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Bi(function(){su(null,n,null,null)}),r[hr]=null}};function au(n){this._internalRoot=n}au.prototype.unstable_scheduleHydration=function(n){if(n){var r=al();n={blockedOn:null,target:n,priority:r};for(var a=0;a<zn.length&&r!==0&&r<zn[a].priority;a++);zn.splice(a,0,n),a===0&&cl(n)}};function Oh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _m(){}function uE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=ou(_);p.call(F)}}var _=mm(r,c,n,0,null,!1,!1,"",_m);return n._reactRootContainer=_,n[hr]=_.current,Zo(n.nodeType===8?n.parentNode:n),Bi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=ou(C);T.call(F)}}var C=Nh(n,0,!1,null,null,!1,!1,"",_m);return n._reactRootContainer=C,n[hr]=C.current,Zo(n.nodeType===8?n.parentNode:n),Bi(function(){su(r,C,a,c)}),C}function uu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var C=ou(_);T.call(C)}}su(r,_,n,d)}else _=uE(a,r,n,d,c);return ou(_)}sl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Vr(r.pendingLanes);a!==0&&(Lr(r,a|1),Yt(r,$e()),!(Oe&6)&&(Qs=$e()+500,qr()))}break;case 13:Bi(function(){var c=mr(n,1);if(c!==null){var d=Bt();On(c,n,1,d)}}),Dh(n,1)}},Es=function(n){if(n.tag===13){var r=mr(n,134217728);if(r!==null){var a=Bt();On(r,n,134217728,a)}Dh(n,134217728)}},ol=function(n){if(n.tag===13){var r=Yr(n),a=mr(n,r);if(a!==null){var c=Bt();On(a,n,r,c)}Dh(n,r)}},al=function(){return Pe},ll=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},hs=function(n,r,a){switch(r){case"input":if(So(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Rl(c);if(!d)throw Error(t(90));ss(c),So(c,d)}}}break;case"textarea":us(n,a);break;case"select":r=a.value,r!=null&&rr(n,!!a.multiple,r,!1)}},Ti=Sh,xo=Bi;var cE={usingClientEntryPoint:!1,Events:[na,Ms,Rl,Fn,Oo,Sh]},ga={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hE={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=bo(n),n===null?null:n.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cu.isDisabled&&cu.supportsFiber)try{Ci=cu.inject(hE),Zt=cu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oh(r))throw Error(t(200));return lE(n,r,null,a)},Xt.createRoot=function(n,r){if(!Oh(n))throw Error(t(299));var a=!1,c="",d=ym;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Nh(n,1,!1,null,null,a,!1,c,d),n[hr]=r.current,Zo(n.nodeType===8?n.parentNode:n),new Vh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=bo(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return Bi(n)},Xt.hydrate=function(n,r,a){if(!lu(r))throw Error(t(200));return uu(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!Oh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=ym;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=mm(r,null,n,1,a??null,d,!1,p,_),n[hr]=r.current,Zo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new au(r)},Xt.render=function(n,r,a){if(!lu(r))throw Error(t(200));return uu(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!lu(n))throw Error(t(40));return n._reactRootContainer?(Bi(function(){uu(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Sh,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!lu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return uu(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var Rm;function vE(){if(Rm)return Mh.exports;Rm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Mh.exports=_E(),Mh.exports}var Cm;function EE(){if(Cm)return hu;Cm=1;var i=vE();return hu.createRoot=i.createRoot,hu.hydrateRoot=i.hydrateRoot,hu}var wE=EE(),Pm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},TE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let O=(m&15)<<2|v>>6,z=v&63;g||(z=64,h||(O=64)),s.push(t[w],t[A],t[O],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Qg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):TE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new IE;const O=u<<2|m>>4;if(s.push(O),v!==64){const z=m<<4&240|v>>2;if(s.push(z),A!==64){const G=v<<6&192|A;s.push(G)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class IE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SE=function(i){const e=Qg(i);return Yg.encodeByteArray(e,!0)},Pu=function(i){return SE(i).replace(/\./g,"")},Xg=function(i){try{return Yg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=()=>AE().__FIREBASE_DEFAULTS__,CE=()=>{if(typeof process>"u"||typeof Pm>"u")return;const i=Pm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},PE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Xg(i[1]);return e&&JSON.parse(e)},Wu=()=>{try{return RE()||CE()||PE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Jg=i=>{var e,t;return(t=(e=Wu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},kE=i=>{const e=Jg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Zg=()=>{var i;return(i=Wu())===null||i===void 0?void 0:i.config},ey=i=>{var e;return(e=Wu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Pu(JSON.stringify(t)),Pu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function OE(){var i;const e=(i=Wu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ME(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bE(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function FE(){return!OE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UE(){try{return typeof indexedDB=="object"}catch{return!1}}function zE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="FirebaseError";class Pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=jE,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?BE(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Pr(o,m,s)}}function BE(i,e){return i.replace($E,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const $E=/\{\$([^}]+)}/g;function qE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ku(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(km(u)&&km(h)){if(!ku(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function km(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _a(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function va(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function WE(i,e){const t=new HE(i,e);return t.subscribe.bind(t)}class HE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");KE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Uh),o.error===void 0&&(o.error=Uh),o.complete===void 0&&(o.complete=Uh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Uh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(i){return i&&i._delegate?i._delegate:i}class Qi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new NE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YE(e))try{this.getOrInitializeService({instanceIdentifier:Hi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Hi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hi){return this.instances.has(e)}getOptions(e=Hi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:QE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Hi){return this.component?this.component.multipleInstances?e:Hi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QE(i){return i===Hi?void 0:i}function YE(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new GE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const JE={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},ZE=Re.INFO,ew={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},tw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=ew[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wd{constructor(e){this.name=e,this._logLevel=ZE,this._logHandler=tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const nw=(i,e)=>e.some(t=>i instanceof t);let Nm,Dm;function rw(){return Nm||(Nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iw(){return Dm||(Dm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ty=new WeakMap,Yh=new WeakMap,ny=new WeakMap,zh=new WeakMap,Td=new WeakMap;function sw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(oi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ty.set(t,i)}).catch(()=>{}),Td.set(e,i),e}function ow(i){if(Yh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Yh.set(i,e)}let Xh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Yh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ny.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function aw(i){Xh=i(Xh)}function lw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(jh(this),e,...t);return ny.set(s,e.sort?e.sort():[e]),oi(s)}:iw().includes(i)?function(...e){return i.apply(jh(this),e),oi(ty.get(this))}:function(...e){return oi(i.apply(jh(this),e))}}function uw(i){return typeof i=="function"?lw(i):(i instanceof IDBTransaction&&ow(i),nw(i,rw())?new Proxy(i,Xh):i)}function oi(i){if(i instanceof IDBRequest)return sw(i);if(zh.has(i))return zh.get(i);const e=uw(i);return e!==i&&(zh.set(i,e),Td.set(e,i)),e}const jh=i=>Td.get(i);function cw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=oi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(oi(h.result),g.oldVersion,g.newVersion,oi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const hw=["get","getKey","getAll","getAllKeys","count"],dw=["put","add","delete","clear"],Bh=new Map;function Vm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Bh.get(e))return Bh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=dw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||hw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return Bh.set(e,u),u}aw(i=>({...i,get:(e,t,s)=>Vm(e,t)||i.get(e,t,s),has:(e,t)=>!!Vm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function pw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jh="@firebase/app",Om="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new wd("@firebase/app"),mw="@firebase/app-compat",gw="@firebase/analytics-compat",yw="@firebase/analytics",_w="@firebase/app-check-compat",vw="@firebase/app-check",Ew="@firebase/auth",ww="@firebase/auth-compat",Tw="@firebase/database",Iw="@firebase/data-connect",Sw="@firebase/database-compat",Aw="@firebase/functions",Rw="@firebase/functions-compat",Cw="@firebase/installations",Pw="@firebase/installations-compat",kw="@firebase/messaging",Nw="@firebase/messaging-compat",Dw="@firebase/performance",Vw="@firebase/performance-compat",Ow="@firebase/remote-config",xw="@firebase/remote-config-compat",Lw="@firebase/storage",Mw="@firebase/storage-compat",bw="@firebase/firestore",Fw="@firebase/vertexai",Uw="@firebase/firestore-compat",zw="firebase",jw="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="[DEFAULT]",Bw={[Jh]:"fire-core",[mw]:"fire-core-compat",[yw]:"fire-analytics",[gw]:"fire-analytics-compat",[vw]:"fire-app-check",[_w]:"fire-app-check-compat",[Ew]:"fire-auth",[ww]:"fire-auth-compat",[Tw]:"fire-rtdb",[Iw]:"fire-data-connect",[Sw]:"fire-rtdb-compat",[Aw]:"fire-fn",[Rw]:"fire-fn-compat",[Cw]:"fire-iid",[Pw]:"fire-iid-compat",[kw]:"fire-fcm",[Nw]:"fire-fcm-compat",[Dw]:"fire-perf",[Vw]:"fire-perf-compat",[Ow]:"fire-rc",[xw]:"fire-rc-compat",[Lw]:"fire-gcs",[Mw]:"fire-gcs-compat",[bw]:"fire-fst",[Uw]:"fire-fst-compat",[Fw]:"fire-vertex","fire-js":"fire-js",[zw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map,$w=new Map,ed=new Map;function xm(i,e){try{i.container.addComponent(e)}catch(t){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ao(i){const e=i.name;if(ed.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;ed.set(e,i);for(const t of Nu.values())xm(t,i);for(const t of $w.values())xm(t,i);return!0}function Id(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Qn(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new za("app","Firebase",qw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=jw;function ry(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ai.create("bad-app-name",{appName:String(o)});if(t||(t=Zg()),!t)throw ai.create("no-options");const u=Nu.get(o);if(u){if(ku(t,u.options)&&ku(s,u.config))return u;throw ai.create("duplicate-app",{appName:o})}const h=new XE(o);for(const g of ed.values())h.addComponent(g);const m=new Ww(t,s,h);return Nu.set(o,m),m}function iy(i=Zh){const e=Nu.get(i);if(!e&&i===Zh&&Zg())return ry();if(!e)throw ai.create("no-app",{appName:i});return e}function li(i,e,t){var s;let o=(s=Bw[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(m.join(" "));return}ao(new Qi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="firebase-heartbeat-database",Kw=1,Na="firebase-heartbeat-store";let $h=null;function sy(){return $h||($h=cw(Hw,Kw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Na)}catch(t){console.warn(t)}}}}).catch(i=>{throw ai.create("idb-open",{originalErrorMessage:i.message})})),$h}async function Gw(i){try{const t=(await sy()).transaction(Na),s=await t.objectStore(Na).get(oy(i));return await t.done,s}catch(e){if(e instanceof Pr)Sr.warn(e.message);else{const t=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(t.message)}}}async function Lm(i,e){try{const s=(await sy()).transaction(Na,"readwrite");await s.objectStore(Na).put(e,oy(i)),await s.done}catch(t){if(t instanceof Pr)Sr.warn(t.message);else{const s=ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sr.warn(s.message)}}}function oy(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1024,Yw=30*24*60*60*1e3;class Xw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zw(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Mm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=Yw}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Sr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mm(),{heartbeatsToSend:s,unsentEntries:o}=Jw(this._heartbeatsCache.heartbeats),u=Pu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Sr.warn(t),""}}}function Mm(){return new Date().toISOString().substring(0,10)}function Jw(i,e=Qw){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),bm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),bm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Zw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UE()?zE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Lm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Lm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function bm(i){return Pu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(i){ao(new Qi("platform-logger",e=>new fw(e),"PRIVATE")),ao(new Qi("heartbeat",e=>new Xw(e),"PRIVATE")),li(Jh,Om,i),li(Jh,Om,"esm2017"),li("fire-js","")}eT("");var Fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,ay;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function R(){}R.prototype=I.prototype,N.D=I.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(P,D,x){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[D].apply(P,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,R){R||(R=0);var P=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)P[D]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(D=0;16>D;++D)P[D]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=N.g[0],R=N.g[1],D=N.g[2];var x=N.g[3],S=I+(x^R&(D^x))+P[0]+3614090360&4294967295;I=R+(S<<7&4294967295|S>>>25),S=x+(D^I&(R^D))+P[1]+3905402710&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(R^x&(I^R))+P[2]+606105819&4294967295,D=x+(S<<17&4294967295|S>>>15),S=R+(I^D&(x^I))+P[3]+3250441966&4294967295,R=D+(S<<22&4294967295|S>>>10),S=I+(x^R&(D^x))+P[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(D^I&(R^D))+P[5]+1200080426&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(R^x&(I^R))+P[6]+2821735955&4294967295,D=x+(S<<17&4294967295|S>>>15),S=R+(I^D&(x^I))+P[7]+4249261313&4294967295,R=D+(S<<22&4294967295|S>>>10),S=I+(x^R&(D^x))+P[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(D^I&(R^D))+P[9]+2336552879&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(R^x&(I^R))+P[10]+4294925233&4294967295,D=x+(S<<17&4294967295|S>>>15),S=R+(I^D&(x^I))+P[11]+2304563134&4294967295,R=D+(S<<22&4294967295|S>>>10),S=I+(x^R&(D^x))+P[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(D^I&(R^D))+P[13]+4254626195&4294967295,x=I+(S<<12&4294967295|S>>>20),S=D+(R^x&(I^R))+P[14]+2792965006&4294967295,D=x+(S<<17&4294967295|S>>>15),S=R+(I^D&(x^I))+P[15]+1236535329&4294967295,R=D+(S<<22&4294967295|S>>>10),S=I+(D^x&(R^D))+P[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^D&(I^R))+P[6]+3225465664&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^R&(x^I))+P[11]+643717713&4294967295,D=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(D^x))+P[0]+3921069994&4294967295,R=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(R^D))+P[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^D&(I^R))+P[10]+38016083&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^R&(x^I))+P[15]+3634488961&4294967295,D=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(D^x))+P[4]+3889429448&4294967295,R=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(R^D))+P[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^D&(I^R))+P[14]+3275163606&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^R&(x^I))+P[3]+4107603335&4294967295,D=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(D^x))+P[8]+1163531501&4294967295,R=D+(S<<20&4294967295|S>>>12),S=I+(D^x&(R^D))+P[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^D&(I^R))+P[2]+4243563512&4294967295,x=I+(S<<9&4294967295|S>>>23),S=D+(I^R&(x^I))+P[7]+1735328473&4294967295,D=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(D^x))+P[12]+2368359562&4294967295,R=D+(S<<20&4294967295|S>>>12),S=I+(R^D^x)+P[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^D)+P[8]+2272392833&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^R)+P[11]+1839030562&4294967295,D=x+(S<<16&4294967295|S>>>16),S=R+(D^x^I)+P[14]+4259657740&4294967295,R=D+(S<<23&4294967295|S>>>9),S=I+(R^D^x)+P[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^D)+P[4]+1272893353&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^R)+P[7]+4139469664&4294967295,D=x+(S<<16&4294967295|S>>>16),S=R+(D^x^I)+P[10]+3200236656&4294967295,R=D+(S<<23&4294967295|S>>>9),S=I+(R^D^x)+P[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^D)+P[0]+3936430074&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^R)+P[3]+3572445317&4294967295,D=x+(S<<16&4294967295|S>>>16),S=R+(D^x^I)+P[6]+76029189&4294967295,R=D+(S<<23&4294967295|S>>>9),S=I+(R^D^x)+P[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^D)+P[12]+3873151461&4294967295,x=I+(S<<11&4294967295|S>>>21),S=D+(x^I^R)+P[15]+530742520&4294967295,D=x+(S<<16&4294967295|S>>>16),S=R+(D^x^I)+P[2]+3299628645&4294967295,R=D+(S<<23&4294967295|S>>>9),S=I+(D^(R|~x))+P[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~D))+P[7]+1126891415&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~R))+P[14]+2878612391&4294967295,D=x+(S<<15&4294967295|S>>>17),S=R+(x^(D|~I))+P[5]+4237533241&4294967295,R=D+(S<<21&4294967295|S>>>11),S=I+(D^(R|~x))+P[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~D))+P[3]+2399980690&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~R))+P[10]+4293915773&4294967295,D=x+(S<<15&4294967295|S>>>17),S=R+(x^(D|~I))+P[1]+2240044497&4294967295,R=D+(S<<21&4294967295|S>>>11),S=I+(D^(R|~x))+P[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~D))+P[15]+4264355552&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~R))+P[6]+2734768916&4294967295,D=x+(S<<15&4294967295|S>>>17),S=R+(x^(D|~I))+P[13]+1309151649&4294967295,R=D+(S<<21&4294967295|S>>>11),S=I+(D^(R|~x))+P[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~D))+P[11]+3174756917&4294967295,x=I+(S<<10&4294967295|S>>>22),S=D+(I^(x|~R))+P[2]+718787259&4294967295,D=x+(S<<15&4294967295|S>>>17),S=R+(x^(D|~I))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+x&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var R=I-this.blockSize,P=this.B,D=this.h,x=0;x<I;){if(D==0)for(;x<=R;)o(this,N,x),x+=this.blockSize;if(typeof N=="string"){for(;x<I;)if(P[D++]=N.charCodeAt(x++),D==this.blockSize){o(this,P),D=0;break}}else for(;x<I;)if(P[D++]=N[x++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var R=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=R&255,R/=256;for(this.u(N),N=Array(16),I=R=0;4>I;++I)for(var P=0;32>P;P+=8)N[R++]=this.g[I]>>>P&255;return N};function u(N,I){var R=m;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=I(N)}function h(N,I){this.h=I;for(var R=[],P=!0,D=N.length-1;0<=D;D--){var x=N[D]|0;P&&x==I||(R[D]=x,P=!1)}this.g=R}var m={};function g(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return A;if(0>N)return q(v(-N));for(var I=[],R=1,P=0;N>=R;P++)I[P]=N/R|0,R*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return q(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(I,8)),P=A,D=0;D<N.length;D+=8){var x=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+x),I);8>x?(x=v(Math.pow(I,x)),P=P.j(x).add(v(S))):(P=P.j(R),P=P.add(v(S)))}return P}var A=g(0),O=g(1),z=g(16777216);i=h.prototype,i.m=function(){if(Y(this))return-q(this).m();for(var N=0,I=1,R=0;R<this.g.length;R++){var P=this.i(R);N+=(0<=P?P:4294967296+P)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(G(this))return"0";if(Y(this))return"-"+q(this).toString(N);for(var I=v(Math.pow(N,6)),R=this,P="";;){var D=ge(R,I).g;R=pe(R,D.j(I));var x=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=D,G(R))return x+P;for(;6>x.length;)x="0"+x;P=x+P}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function G(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Y(N){return N.h==-1}i.l=function(N){return N=pe(this,N),Y(N)?-1:G(N)?0:1};function q(N){for(var I=N.g.length,R=[],P=0;P<I;P++)R[P]=~N.g[P];return new h(R,~N.h).add(O)}i.abs=function(){return Y(this)?q(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],P=0,D=0;D<=I;D++){var x=P+(this.i(D)&65535)+(N.i(D)&65535),S=(x>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);P=S>>>16,x&=65535,S&=65535,R[D]=S<<16|x}return new h(R,R[R.length-1]&-2147483648?-1:0)};function pe(N,I){return N.add(q(I))}i.j=function(N){if(G(this)||G(N))return A;if(Y(this))return Y(N)?q(this).j(q(N)):q(q(this).j(N));if(Y(N))return q(this.j(q(N)));if(0>this.l(z)&&0>N.l(z))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,R=[],P=0;P<2*I;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<N.g.length;D++){var x=this.i(P)>>>16,S=this.i(P)&65535,et=N.i(D)>>>16,kt=N.i(D)&65535;R[2*P+2*D]+=S*kt,ve(R,2*P+2*D),R[2*P+2*D+1]+=x*kt,ve(R,2*P+2*D+1),R[2*P+2*D+1]+=S*et,ve(R,2*P+2*D+1),R[2*P+2*D+2]+=x*et,ve(R,2*P+2*D+2)}for(P=0;P<I;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=I;P<2*I;P++)R[P]=0;return new h(R,0)};function ve(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ce(N,I){this.g=N,this.h=I}function ge(N,I){if(G(I))throw Error("division by zero");if(G(N))return new ce(A,A);if(Y(N))return I=ge(q(N),I),new ce(q(I.g),q(I.h));if(Y(I))return I=ge(N,q(I)),new ce(q(I.g),I.h);if(30<N.g.length){if(Y(N)||Y(I))throw Error("slowDivide_ only works with positive integers.");for(var R=O,P=I;0>=P.l(N);)R=je(R),P=je(P);var D=Ae(R,1),x=Ae(P,1);for(P=Ae(P,2),R=Ae(R,2);!G(P);){var S=x.add(P);0>=S.l(N)&&(D=D.add(R),x=S),P=Ae(P,1),R=Ae(R,1)}return I=pe(N,D.j(I)),new ce(D,I)}for(D=A;0<=N.l(I);){for(R=Math.max(1,Math.floor(N.m()/I.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),x=v(R),S=x.j(I);Y(S)||0<S.l(N);)R-=P,x=v(R),S=x.j(I);G(x)&&(x=O),D=D.add(x),N=pe(N,S)}return new ce(D,N)}i.A=function(N){return ge(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)&N.i(P);return new h(R,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)|N.i(P);return new h(R,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],P=0;P<I;P++)R[P]=this.i(P)^N.i(P);return new h(R,this.h^N.h)};function je(N){for(var I=N.g.length+1,R=[],P=0;P<I;P++)R[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(R,N.h)}function Ae(N,I){var R=I>>5;I%=32;for(var P=N.g.length-R,D=[],x=0;x<P;x++)D[x]=0<I?N.i(x+R)>>>I|N.i(x+R+1)<<32-I:N.i(x+R);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,ay=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,ui=h}).apply(typeof Fm<"u"?Fm:typeof self<"u"?self:typeof window<"u"?window:{});var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ly,Ea,uy,_u,td,cy,hy,dy;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof du=="object"&&du];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function A(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function O(l,f,y){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,O.apply(null,arguments)}function z(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function G(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,X)}}function Y(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function q(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let X=0;X<U;X++)l[L+X]=E[X]}else l.push(E)}}class pe{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ve(l){return/^[\s\xa0]*$/.test(l)}function ce(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function ge(l){return ge[" "](l),l}ge[" "]=function(){};var je=ce().indexOf("Gecko")!=-1&&!(ce().toLowerCase().indexOf("webkit")!=-1&&ce().indexOf("Edge")==-1)&&!(ce().indexOf("Trident")!=-1||ce().indexOf("MSIE")!=-1)&&ce().indexOf("Edge")==-1;function Ae(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function N(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<R.length;U++)y=R[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function x(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ue;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,y){const E=kt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var kt=new pe(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,ue=new et,ee=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){x(y)}var f=kt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Te=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Ie(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(je){e:{try{ge(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}G(Ie,ae);var Ne={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Me,this.da=this.fa=!1}function gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function tr(l){this.src=l,this.g={},this.h=0}tr.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var X=kr(l,f,E,L);return-1<X?(f=l[X],y||(f.fa=!1)):(f=new Be(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function ss(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(gt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function kr(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var _i="closure_lm_"+(1e6*Math.random()|0),os={};function Io(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Io(l,f[U],y,E,L);return null}return y=Ro(y),l&&l[Le]?l.K(f,y,v(E)?!!E.capture:!1,L):So(l,f,y,!1,E,L)}function So(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var X=v(L)?!!L.capture:!!L,Fe=ls(l);if(Fe||(l[_i]=Fe=new tr(l)),y=Fe.add(f,y,E,X,U),y.proxy)return y;if(E=Ya(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Te||(L=X),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(rr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ya(){function l(y){return f.call(l.src,l.listener,y)}const f=Ao;return l}function as(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)as(l,f[U],y,E,L);else E=v(E)?!!E.capture:!!E,y=Ro(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=kr(U,y,E,L),-1<y&&(gt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ls(l))&&(f=l.g[f.toString()],l=-1,f&&(l=kr(f,y,E,L)),(y=-1<l?f[l]:null)&&nr(y))}function nr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])ss(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(rr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=ls(f))?(ss(y,l),y.h==0&&(y.src=null,f[_i]=null)):gt(l)}}}function rr(l){return l in os?os[l]:os[l]="on"+l}function Ao(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&nr(l),l=y.call(E,f)}return l}function ls(l){return l=l[_i],l instanceof tr?l:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ro(l){return typeof l=="function"?l:(l[us]||(l[us]=function(f){return l.handleEvent(f)}),l[us])}function ut(){B.call(this),this.i=new tr(this),this.M=this,this.F=null}G(ut,B),ut.prototype[Le]=!0,ut.prototype.removeEventListener=function(l,f,y,E){as(this,l,f,y,E)};function ct(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var L=f;f=new ae(E,l),P(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var X=f.g=y[U];L=ir(X,E,!0,f)&&L}if(X=f.g=l,L=ir(X,E,!0,f)&&L,L=ir(X,E,!1,f)&&L,y)for(U=0;U<y.length;U++)X=f.g=y[U],L=ir(X,E,!1,f)&&L}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)gt(y[E]);delete l.g[f],l.h--}}this.F=null},ut.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},ut.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function ir(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==y){var Fe=X.listener,ht=X.ha||X.src;X.fa&&ss(l.i,X),L=Fe.call(ht,E)!==!1&&L}}return L&&!E.defaultPrevented}function Co(l,f,y){if(typeof l=="function")y&&(l=O(l,y));else if(l&&typeof l.handleEvent=="function")l=O(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Nr(l){l.g=Co(()=>{l.g=null,l.i&&(l.i=!1,Nr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class vi extends B{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Nr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(l){B.call(this),this.h=l,this.g={}}G(Ei,B);var Po=[];function ko(l){Ae(l.g,function(f,y){this.g.hasOwnProperty(y)&&nr(f)},l),l.g={}}Ei.prototype.N=function(){Ei.aa.N.call(this),ko(this)},Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var No=m.JSON.stringify,Do=m.JSON.parse,Vo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function wi(){}wi.prototype.h=null;function cs(l){return l.h||(l.h=l.i())}function hs(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bn(){ae.call(this,"d")}G(bn,ae);function ds(){ae.call(this,"c")}G(ds,ae);var Fn={},Oo=null;function Ti(){return Oo=Oo||new ut}Fn.La="serverreachability";function xo(l){ae.call(this,Fn.La,l)}G(xo,ae);function sr(l){const f=Ti();ct(f,new xo(f))}Fn.STAT_EVENT="statevent";function Lo(l,f){ae.call(this,Fn.STAT_EVENT,l),this.stat=f}G(Lo,ae);function tt(l){const f=Ti();ct(f,new Lo(f,l))}Fn.Ma="timingevent";function fs(l,f){ae.call(this,Fn.Ma,l),this.size=f}G(fs,ae);function vn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ii(){this.g=!0}Ii.prototype.xa=function(){this.g=!1};function Si(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var X="",Fe=U.split("&"),ht=0;ht<Fe.length;ht++){var De=Fe[ht].split("=");if(1<De.length){var yt=De[0];De=De[1];var it=yt.split("_");X=2<=it.length&&it[1]=="type"?X+(yt+"="+De+"&"):X+(yt+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+X})}function ps(l,f,y,E,L,U,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+X})}function En(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+lc(l,y)+(E?" "+E:"")})}function Mo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ii.prototype.info=function(){};function lc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return No(y)}catch{return f}}var ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wn;function Ai(){}G(Ai,wi),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},wn=new Ai;function Tn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ei(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ja}function Ja(){this.i=null,this.g="",this.h=!1}var bo={},gs={};function ys(l,f,y){l.L=1,l.v=Lr(en(f)),l.m=y,l.P=!0,Fo(l,null)}function Fo(l,f){l.F=Date.now(),$e(l),l.A=en(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),br(y.i,"t",E),l.C=0,y=l.j.J,l.h=new Ja,l.g=gl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new vi(O(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Po[0]=L.toString()),L=Po);for(var U=0;U<L.length;U++){var X=Io(y,L[U],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),sr(),Si(l.i,l.u,l.A,l.l,l.R,l.m)}Tn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Wt(l)==3?f.j():this.Y(l)},Tn.prototype.Y=function(l){try{if(l==this.g)e:{const it=Wt(this.g);var f=this.g.Ba();const hn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||qo(this.g)))){this.J||it!=4||f==7||(f==8||0>=hn?sr(3):sr(2)),Ri(this);var y=this.g.Z();this.X=y;t:if(Za(this)){var E=qo(this.g);l="";var L=E.length,U=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Dr(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,ps(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ht=this.g;if((Fe=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ve(Fe)){var De=Fe;break t}}De=null}if(y=De)En(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uo(this,y);else{this.o=!1,this.s=3,tt(12),un(this),Dr(this);break e}}if(this.P){y=!0;let nn;for(;!this.J&&this.C<X.length;)if(nn=uc(this,X),nn==gs){it==4&&(this.s=4,tt(14),y=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==bo){this.s=4,tt(15),En(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else En(this.i,this.l,nn,null),Uo(this,nn);if(Za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||X.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)En(this.i,this.l,X,"[Invalid Chunked Response]"),un(this),Dr(this);else if(0<X.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Ho(yt),yt.M=!0,tt(11))}}else En(this.i,this.l,X,null),Uo(this,X);it==4&&un(this),this.o&&!this.J&&(it==4?Ps(this.j,this):(this.o=!1,$e(this)))}else Is(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),un(this),Dr(this)}}}catch{}finally{}};function Za(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function uc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?gs:(y=Number(f.substring(y,E)),isNaN(y)?bo:(E+=1,E+y>f.length?gs:(f=f.slice(E,E+y),l.C=E+y,f)))}Tn.prototype.cancel=function(){this.J=!0,un(this)};function $e(l){l.S=Date.now()+l.I,el(l,l.I)}function el(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=vn(O(l.ba,l),f)}function Ri(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Tn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Mo(this.i,this.A),this.L!=2&&(sr(),tt(17)),un(this),this.s=2,Dr(this)):el(this,this.S-l)};function Dr(l){l.j.G==0||l.J||Ps(l.j,l)}function un(l){Ri(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,ko(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Uo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Ut(y.h,l))){if(!l.K&&Ut(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Cs(y),Cn(y);else break e;Rs(y),tt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=vn(O(y.Za,y),6e3));if(1>=nl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else cr(y,11)}else if((l.K||y.g==l)&&Cs(y),!ve(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let De=L[f];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const yt=De[3];yt!=null&&(y.la=yt,y.j.info("VER="+y.la));const it=De[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const hn=De[5];hn!=null&&typeof hn=="number"&&0<hn&&(E=1.5*hn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const nn=l.g;if(nn){const Oi=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oi){var U=E.h;U.g||Oi.indexOf("spdy")==-1&&Oi.indexOf("quic")==-1&&Oi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(zo(U,U.h),U.h=null))}if(E.D){const Ns=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ns&&(E.ya=Ns,ze(E.I,E.D,Ns))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var X=l;if(E.qa=ml(E,E.J?E.ia:null,E.W),X.K){rl(E.h,X);var Fe=X,ht=E.L;ht&&(Fe.I=ht),Fe.B&&(Ri(Fe),$e(Fe)),E.g=X}else Vi(E);0<y.i.length&&Bn(y)}else De[0]!="stop"&&De[0]!="close"||cr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?cr(y,7):It(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}sr(4)}catch{}}var tl=class{constructor(l,f){this.g=l,this.map=f}};function Ci(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function nl(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function zo(l,f){l.g?l.g.add(f):l.h=f}function rl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ci.prototype.cancel=function(){if(this.i=il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function il(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return Y(l.i)}function _s(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function vs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Vr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=vs(l),E=_s(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var Pi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function or(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof or){this.h=l.h,ki(this,l.j),this.o=l.o,this.g=l.g,Or(this,l.s),this.l=l.l;var f=l.i,y=new Un;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),xr(this,y),this.m=l.m}else l&&(f=String(l).match(Pi))?(this.h=!1,ki(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Or(this,f[4]),this.l=Pe(f[5]||"",!0),xr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Un(null,this.h))}or.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Mr(f,Es,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Mr(f,Es,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Mr(y,y.charAt(0)=="/"?al:ol,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Mr(y,jo)),l.join("")};function en(l){return new or(l)}function ki(l,f,y){l.j=y?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Or(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function xr(l,f,y){f instanceof Un?(l.i=f,zn(l.i,l.h)):(y||(f=Mr(f,ll)),l.i=new Un(f,l.h))}function ze(l,f,y){l.i.set(f,y)}function Lr(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,sl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function sl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Es=/[#\/\?@]/g,ol=/[#\?:]/g,al=/[#\?]/g,ll=/[#\?@]/g,jo=/#/g;function Un(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&cc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Un.prototype,i.add=function(l,f){Tt(this),this.i=null,l=cn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function In(l,f){Tt(l),f=cn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Sn(l,f){return Tt(l),f=cn(l,f),l.g.has(f)}i.forEach=function(l,f){Tt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},i.V=function(l){Tt(this);let f=[];if(typeof l=="string")Sn(this,l)&&(f=f.concat(this.g.get(cn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return Tt(this),this.i=null,l=cn(this,l),Sn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function br(l,f,y){In(l,f),0<y.length&&(l.i=null,l.g.set(cn(l,f),Y(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=U;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),l.push(L)}}return this.i=l.join("&")};function cn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function zn(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(In(this,E),br(this,L,y))},l)),l.j=f}function hc(l,f){const y=new Ii;if(m.Image){const E=new Image;E.onload=z(qt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=z(qt,y,"TestLoadImage: error",!1,f,E),E.onabort=z(qt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=z(qt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function ul(l,f){const y=new Ii,E=new AbortController,L=setTimeout(()=>{E.abort(),qt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?qt(y,"TestPingServer: ok",!0,f):qt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),qt(y,"TestPingServer: error",!1,f)})}function qt(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function dc(){this.g=new Vo}function cl(l,f,y){const E=y||"";try{Vr(l,function(L,U){let X=L;v(L)&&(X=No(L)),f.push(E+U+"="+encodeURIComponent(X))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function ar(l){this.l=l.Ub||null,this.j=l.eb||!1}G(ar,wi),ar.prototype.g=function(){return new Ni(this.l,this.j)},ar.prototype.i=function(l){return function(){return l}}({});function Ni(l,f){ut.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Ni,ut),i=Ni.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Rn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function hl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?An(this):Rn(this),this.readyState==3&&hl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,An(this))},i.Qa=function(l){this.g&&(this.response=l,An(this))},i.ga=function(){this.g&&An(this)};function An(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Rn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Rn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function lr(l){let f="";return Ae(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Fr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=lr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):ze(l,f,y))}function Ge(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Ge,ut);var fc=/^https?$/i,Bo=["POST","PUT"];i=Ge.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wn.g(),this.v=this.o?cs(this.o):cs(wn),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Di(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Bo,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of y)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ts(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Di(this,U)}};function Di(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ws(l),tn(l)}function ws(l){l.A||(l.A=!0,ct(l,"complete"),ct(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ct(this,"complete"),ct(this,"abort"),tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?$o(this):this.bb())},i.bb=function(){$o(this)};function $o(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Wt(l)!=4||l.Z()!=2)){if(l.u&&Wt(l)==4)Co(l.Ea,0,l);else if(ct(l,"readystatechange"),Wt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=X===0){var L=String(l.D).match(Pi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!fc.test(L?L.toLowerCase():"")}y=E}if(y)ct(l,"complete"),ct(l,"success");else{l.m=6;try{var U=2<Wt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ws(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){Ts(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ct(l,"ready");try{y.onreadystatechange=E}catch{}}}function Ts(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Wt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Do(f)}};function qo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Is(l){const f={};l=(l.g&&2<=Wt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ve(l[E]))continue;var y=D(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Wo(l){this.Aa=0,this.i=[],this.j=new Ii,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jn("baseRetryDelayMs",5e3,l),this.cb=jn("retryDelaySeedMs",1e4,l),this.Wa=jn("forwardChannelMaxRetries",2,l),this.wa=jn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ci(l&&l.concurrentRequestLimit),this.Da=new dc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Wo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){tt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=ml(this,null,this.W),Bn(this)};function It(l){if(Ss(l),l.G==3){var f=l.U++,y=en(l.I);if(ze(y,"SID",l.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),ur(l,y),f=new Tn(l,l.j,f),f.L=2,f.v=Lr(en(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=gl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}pl(l)}function Cn(l){l.g&&(Ho(l),l.g.cancel(),l.g=null)}function Ss(l){Cn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Cs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Bn(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||ee(),J||(Ue(),J=!0),ue.add(f,l),l.B=0}}function pc(l,f){return nl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=vn(O(l.Ga,l,f),fl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Tn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Ur(this,L,f),y=en(this.I),ze(y,"RID",l),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),ur(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(lr(U)))+"&"+f:this.m&&Fr(y,this.m,U)),zo(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),L.T=!0,ys(L,y,null)):ys(L,y,f),this.G=2}}else this.G==3&&(l?As(this,l):this.i.length==0||Zt(this.h)||As(this))};function As(l,f){var y;f?y=f.l:y=l.U++;const E=en(l.I);ze(E,"SID",l.K),ze(E,"RID",y),ze(E,"AID",l.T),ur(l,E),l.m&&l.o&&Fr(E,l.m,l.o),y=new Tn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Ur(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),zo(l.h,y),ys(y,E,f)}function ur(l,f){l.H&&Ae(l.H,function(y,E){ze(f,E,y)}),l.l&&Vr({},function(y,E){ze(f,E,y)})}function Ur(l,f,y){y=Math.min(l.i.length,y);var E=l.l?O(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const X=["count="+y];U==-1?0<y?(U=L[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let Fe=!0;for(let ht=0;ht<y;ht++){let De=L[ht].g;const yt=L[ht].map;if(De-=U,0>De)U=Math.max(0,L[ht].g-100),Fe=!1;else try{cl(yt,X,"req"+De+"_")}catch{E&&E(yt)}}if(Fe){E=X.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Vi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||ee(),J||(Ue(),J=!0),ue.add(f,l),l.v=0}}function Rs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=vn(O(l.Fa,l),fl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=vn(O(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Cn(this),dl(this))};function Ho(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function dl(l){l.g=new Tn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),ur(l,f),l.m&&l.o&&Fr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Lr(en(f)),y.m=null,y.P=!0,Fo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Cn(this),Rs(this),tt(19))};function Cs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ps(l,f){var y=null;if(l.g==f){Cs(l),Ho(l),l.g=null;var E=2}else if(Ut(l.h,f))y=f.D,rl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Ti(),ct(E,new fs(E,y)),Bn(l)}else Vi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&pc(l,f)||E==2&&Rs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:cr(l,5);break;case 4:cr(l,10);break;case 3:cr(l,6);break;default:cr(l,2)}}}function fl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function cr(l,f){if(l.j.info("Error code "+f),f==2){var y=O(l.fb,l),E=l.Xa;const L=!E;E=new or(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||ki(E,"https"),Lr(E),L?hc(E.toString(),y):ul(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),pl(l),Ss(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function pl(l){if(l.G=0,l.ka=[],l.l){const f=il(l.h);(f.length!=0||l.i.length!=0)&&(q(l.ka,f),q(l.ka,l.i),l.h.i.length=0,Y(l.i),l.i.length=0),l.l.ra()}}function ml(l,f,y){var E=y instanceof or?en(y):new or(y);if(E.g!="")f&&(E.g=f+"."+E.g),Or(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new or(null);E&&ki(U,E),f&&(U.g=f),L&&Or(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&ze(E,y,f),ze(E,"VER",l.la),ur(l,E),E}function gl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ge(new ar({eb:y})):new Ge(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ko(){}i=Ko.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ks(){}ks.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){ut.call(this),this.g=new Wo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ve(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ve(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new $n(this)}G(zt,ut),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){It(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=No(l),l=y);f.i.push(new tl(f.Ya++,l)),f.G==3&&Bn(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,zt.aa.N.call(this)};function yl(l){bn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}G(yl,bn);function _l(){ds.call(this),this.status=1}G(_l,ds);function $n(l){this.g=l}G($n,Ko),$n.prototype.ua=function(){ct(this.g,"a")},$n.prototype.ta=function(l){ct(this.g,new yl(l))},$n.prototype.sa=function(l){ct(this.g,new _l)},$n.prototype.ra=function(){ct(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,dy=function(){return new ks},hy=function(){return Ti()},cy=Fn,td={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,_u=ms,Xa.COMPLETE="complete",uy=Xa,hs.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Ea=hs,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,ly=Ge}).apply(typeof du<"u"?du:typeof self<"u"?self:typeof window<"u"?window:{});const Um="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new wd("@firebase/firestore");function Xs(){return Yi.logLevel}function te(i,...e){if(Yi.logLevel<=Re.DEBUG){const t=e.map(Sd);Yi.debug(`Firestore (${yo}): ${i}`,...t)}}function Ar(i,...e){if(Yi.logLevel<=Re.ERROR){const t=e.map(Sd);Yi.error(`Firestore (${yo}): ${i}`,...t)}}function lo(i,...e){if(Yi.logLevel<=Re.WARN){const t=e.map(Sd);Yi.warn(`Firestore (${yo}): ${i}`,...t)}}function Sd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(i="Unexpected state"){const e=`FIRESTORE (${yo}) INTERNAL ASSERTION FAILED: `+i;throw Ar(e),new Error(e)}function be(i,e){i||_e()}function we(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class nT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rT{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Gi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Gi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string"),new fy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string"),new Mt(e)}}class iT{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class sT{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new iT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){be(this.o===void 0);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string"),this.R=t.token,new oT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=lT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function uo(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new pt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new pt(0,0))}static max(){return new Ee(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(),s===void 0?s=e.length-t:s>e.length-t&&_e(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Gn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Gn.isNumericId(e),o=Gn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Gn.extractNumericId(e).compare(Gn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class Ke extends Gn{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ke(t)}static emptyPath(){return new Ke([])}}const uT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Gn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return uT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ie($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ie($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ie($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Ke.fromString(e))}static fromName(e){return new le(Ke.fromString(e).popFirst(5))}static empty(){return new le(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Ke(e.slice()))}}function cT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new hi(o,le.empty(),e)}function hT(i){return new hi(i.readTime,i.key,-1)}class hi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new hi(Ee.min(),le.empty(),-1)}static max(){return new hi(Ee.max(),le.empty(),-1)}}function dT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=le.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==fT)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,s)=>{t(e)})}static reject(e){return new j((t,s)=>{s(e)})}static waitFor(e){return new j((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=j.resolve(!1);for(const s of e)t=t.next(o=>o?j.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new j((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new j((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function mT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function vo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hu.oe=-1;function Ku(i){return i==null}function Du(i){return i===0&&1/i==-1/0}function gT(i){return typeof i=="number"&&Number.isInteger(i)&&!Du(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=zm(e)),e=_T(i.get(t),e);return zm(e)}function _T(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function zm(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Zi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function my(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fu(this.root,e,this.comparator,!0)}}class fu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Bm(this.data.getIterator())}getIteratorFrom(e){return new Bm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class Bm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new xn([])}unionWith(e){let t=new mt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new xn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new gy("Invalid base64 string: "+u):u}}(e);return new Pt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const vT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function di(i){if(be(!!i),typeof i=="string"){let e=0;const t=vT.exec(i);if(be(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function fi(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Gu(i){const e=i.mapValue.fields.__previous_value__;return Ad(e)?Gu(e):e}function Da(i){const e=di(i.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t,s,o,u,h,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v}}class Va{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ad(i)?4:TT(i)?9007199254740991:wT(i)?10:11:_e()}function er(i,e){if(i===e)return!0;const t=pi(i);if(t!==pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Da(i).isEqual(Da(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=di(o.timestampValue),m=di(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return fi(o.bytesValue).isEqual(fi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Du(h)===Du(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return uo(i.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(jm(h)!==jm(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!er(h[g],m[g])))return!1;return!0}(i,e);default:return _e()}}function Oa(i,e){return(i.values||[]).find(t=>er(t,e))!==void 0}function co(i,e){if(i===e)return 0;const t=pi(i),s=pi(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return $m(i.timestampValue,e.timestampValue);case 4:return $m(Da(i),Da(e));case 5:return ke(i.stringValue,e.stringValue);case 6:return function(u,h){const m=fi(u),g=fi(h);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=ke(m[v],g[v]);if(w!==0)return w}return ke(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=ke(rt(u.latitude),rt(h.latitude));return m!==0?m:ke(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return qm(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,v,w;const A=u.fields||{},O=h.fields||{},z=(m=A.value)===null||m===void 0?void 0:m.arrayValue,G=(g=O.value)===null||g===void 0?void 0:g.arrayValue,Y=ke(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((w=G==null?void 0:G.values)===null||w===void 0?void 0:w.length)||0);return Y!==0?Y:qm(z,G)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===pu.mapValue&&h===pu.mapValue)return 0;if(u===pu.mapValue)return 1;if(h===pu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const O=ke(g[A],w[A]);if(O!==0)return O;const z=co(m[g[A]],v[w[A]]);if(z!==0)return z}return ke(g.length,w.length)}(i.mapValue,e.mapValue);default:throw _e()}}function $m(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=di(i),s=di(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function qm(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=co(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function ho(i){return nd(i)}function nd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=di(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return fi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return le.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=nd(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${nd(t.fields[h])}`;return o+"}"}(i.mapValue):_e()}function vu(i){switch(pi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gu(i);return e?16+vu(e):16;case 5:return 2*i.stringValue.length;case 6:return fi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+vu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return Zi(s.fields,(u,h)=>{o+=u.length+vu(h)}),o}(i.mapValue);default:throw _e()}}function Wm(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function rd(i){return!!i&&"integerValue"in i}function Rd(i){return!!i&&"arrayValue"in i}function Hm(i){return!!i&&"nullValue"in i}function Km(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Eu(i){return!!i&&"mapValue"in i}function wT(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Sa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Zi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Sa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function TT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Eu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sa(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Sa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Eu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Eu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Zi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new _n(Sa(this.value))}}function yy(i){const e=[];return Zi(i.fields,(t,s)=>{const o=new Ct([t]);if(Eu(s)){const u=yy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new xn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,Ee.min(),Ee.min(),Ee.min(),_n.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,Ee.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,Ee.min(),Ee.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,Ee.min(),Ee.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.position=e,this.inclusive=t}}function Gm(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=le.comparator(le.fromName(h.referenceValue),t.key):s=co(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!er(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t="asc"){this.field=e,this.dir=t}}function IT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{}class lt extends _y{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new AT(e,t,s):t==="array-contains"?new PT(e,s):t==="in"?new kT(e,s):t==="not-in"?new NT(e,s):t==="array-contains-any"?new DT(e,s):new lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new RT(e,s):new CT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(co(t,this.value)):t!==null&&pi(this.value)===pi(t)&&this.matchesComparison(co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends _y{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ln(e,t)}matches(e){return vy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vy(i){return i.op==="and"}function Ey(i){return ST(i)&&vy(i)}function ST(i){for(const e of i.filters)if(e instanceof Ln)return!1;return!0}function id(i){if(i instanceof lt)return i.field.canonicalString()+i.op.toString()+ho(i.value);if(Ey(i))return i.filters.map(e=>id(e)).join(",");{const e=i.filters.map(t=>id(t)).join(",");return`${i.op}(${e})`}}function wy(i,e){return i instanceof lt?function(s,o){return o instanceof lt&&s.op===o.op&&s.field.isEqual(o.field)&&er(s.value,o.value)}(i,e):i instanceof Ln?function(s,o){return o instanceof Ln&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&wy(h,o.filters[m]),!0):!1}(i,e):void _e()}function Ty(i){return i instanceof lt?function(t){return`${t.field.canonicalString()} ${t.op} ${ho(t.value)}`}(i):i instanceof Ln?function(t){return t.op.toString()+" {"+t.getFilters().map(Ty).join(" ,")+"}"}(i):"Filter"}class AT extends lt{constructor(e,t,s){super(e,t,s),this.key=le.fromName(s.referenceValue)}matches(e){const t=le.comparator(e.key,this.key);return this.matchesComparison(t)}}class RT extends lt{constructor(e,t){super(e,"in",t),this.keys=Iy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class CT extends lt{constructor(e,t){super(e,"not-in",t),this.keys=Iy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Iy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>le.fromName(s.referenceValue))}class PT extends lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Rd(t)&&Oa(t.arrayValue,this.value)}}class kT extends lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oa(this.value.arrayValue,t)}}class NT extends lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Oa(this.value.arrayValue,t)}}class DT extends lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Rd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Oa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function Ym(i,e=null,t=[],s=[],o=null,u=null,h=null){return new VT(i,e,t,s,o,u,h)}function Cd(i){const e=we(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>id(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Ku(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ho(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ho(s)).join(",")),e.ue=t}return e.ue}function Pd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!IT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!wy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Qm(i.startAt,e.startAt)&&Qm(i.endAt,e.endAt)}function sd(i){return le.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function OT(i,e,t,s,o,u,h,m){return new Eo(i,e,t,s,o,u,h,m)}function kd(i){return new Eo(i)}function Xm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Sy(i){return i.collectionGroup!==null}function Aa(i){const e=we(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new mt(Ct.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new xa(u,s))}),t.has(Ct.keyField().canonicalString())||e.ce.push(new xa(Ct.keyField(),s))}return e.ce}function Yn(i){const e=we(i);return e.le||(e.le=xT(e,Aa(i))),e.le}function xT(i,e){if(i.limitType==="F")return Ym(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new xa(o.field,u)});const t=i.endAt?new Vu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Vu(i.startAt.position,i.startAt.inclusive):null;return Ym(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function od(i,e){const t=i.filters.concat([e]);return new Eo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function ad(i,e,t){return new Eo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Qu(i,e){return Pd(Yn(i),Yn(e))&&i.limitType===e.limitType}function Ay(i){return`${Cd(Yn(i))}|lt:${i.limitType}`}function Js(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Ty(o)).join(", ")}]`),Ku(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>ho(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>ho(o)).join(",")),`Target(${s})`}(Yn(i))}; limitType=${i.limitType})`}function Yu(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):le.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Aa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const v=Gm(h,m,g);return h.inclusive?v<=0:v<0}(s.startAt,Aa(s),o)||s.endAt&&!function(h,m,g){const v=Gm(h,m,g);return h.inclusive?v>=0:v>0}(s.endAt,Aa(s),o))}(i,e)}function LT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Ry(i){return(e,t)=>{let s=!1;for(const o of Aa(i)){const u=MT(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function MT(i,e,t){const s=i.field.isKeyField()?le.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?co(g,v):_e()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return my(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=new Je(le.comparator);function Rr(){return bT}const Cy=new Je(le.comparator);function wa(...i){let e=Cy;for(const t of i)e=e.insert(t.key,t);return e}function Py(i){let e=Cy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ki(){return Ra()}function ky(){return Ra()}function Ra(){return new es(i=>i.toString(),(i,e)=>i.isEqual(e))}const FT=new Je(le.comparator),UT=new mt(le.comparator);function Ce(...i){let e=UT;for(const t of i)e=e.add(t);return e}const zT=new mt(ke);function jT(){return zT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Du(e)?"-0":e}}function Ny(i){return{integerValue:""+i}}function BT(i,e){return gT(e)?Ny(e):Nd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this._=void 0}}function $T(i,e,t){return i instanceof La?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ad(u)&&(u=Gu(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Ma?Vy(i,e):i instanceof ba?Oy(i,e):function(o,u){const h=Dy(o,u),m=Jm(h)+Jm(o.Pe);return rd(h)&&rd(o.Pe)?Ny(m):Nd(o.serializer,m)}(i,e)}function qT(i,e,t){return i instanceof Ma?Vy(i,e):i instanceof ba?Oy(i,e):t}function Dy(i,e){return i instanceof Ou?function(s){return rd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class La extends Xu{}class Ma extends Xu{constructor(e){super(),this.elements=e}}function Vy(i,e){const t=xy(e);for(const s of i.elements)t.some(o=>er(o,s))||t.push(s);return{arrayValue:{values:t}}}class ba extends Xu{constructor(e){super(),this.elements=e}}function Oy(i,e){let t=xy(e);for(const s of i.elements)t=t.filter(o=>!er(o,s));return{arrayValue:{values:t}}}class Ou extends Xu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Jm(i){return rt(i.integerValue||i.doubleValue)}function xy(i){return Rd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t){this.field=e,this.transform=t}}function HT(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Ma&&o instanceof Ma||s instanceof ba&&o instanceof ba?uo(s.elements,o.elements,er):s instanceof Ou&&o instanceof Ou?er(s.Pe,o.Pe):s instanceof La&&o instanceof La}(i.transform,e.transform)}class KT{constructor(e,t){this.version=e,this.transformResults=t}}class Tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tr}static exists(e){return new Tr(void 0,e)}static updateTime(e){return new Tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ju{}function Ly(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new by(i.key,Tr.none()):new Ba(i.key,i.data,Tr.none());{const t=i.data,s=_n.empty();let o=new mt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ts(i.key,s,new xn(o.toArray()),Tr.none())}}function GT(i,e,t){i instanceof Ba?function(o,u,h){const m=o.value.clone(),g=eg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof ts?function(o,u,h){if(!wu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=eg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(My(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ca(i,e,t,s){return i instanceof Ba?function(u,h,m,g){if(!wu(u.precondition,h))return m;const v=u.value.clone(),w=tg(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof ts?function(u,h,m,g){if(!wu(u.precondition,h))return m;const v=tg(u.fieldTransforms,g,h),w=h.data;return w.setAll(My(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(i,e,t,s):function(u,h,m){return wu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function QT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Dy(s.transform,o||null);u!=null&&(t===null&&(t=_n.empty()),t.set(s.field,u))}return t||null}function Zm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&uo(s,o,(u,h)=>HT(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Ba extends Ju{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ts extends Ju{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function My(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function eg(i,e,t){const s=new Map;be(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,qT(h,m,t[o]))}return s}function tg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,$T(u,h,e))}return s}class by extends Ju{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YT extends Ju{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&GT(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ca(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ca(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ky();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=Ly(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(t,s)=>Zm(t,s))&&uo(this.baseMutations,e.baseMutations,(t,s)=>Zm(t,s))}}class Dd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length);let o=function(){return FT}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Dd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Ve;function eI(i){switch(i){default:return _e();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function Fy(i){if(i===void 0)return Ar("GRPC error has no .code"),$.UNKNOWN;switch(i){case ot.OK:return $.OK;case ot.CANCELLED:return $.CANCELLED;case ot.UNKNOWN:return $.UNKNOWN;case ot.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ot.INTERNAL:return $.INTERNAL;case ot.UNAVAILABLE:return $.UNAVAILABLE;case ot.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ot.NOT_FOUND:return $.NOT_FOUND;case ot.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ot.ABORTED:return $.ABORTED;case ot.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ot.DATA_LOSS:return $.DATA_LOSS;default:return _e()}}(Ve=ot||(ot={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new ui([4294967295,4294967295],0);function ng(i){const e=tI().encode(i),t=new ay;return t.update(e),new Uint8Array(t.digest())}function rg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ui([t,s],0),new ui([o,u],0)]}class Vd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ta(`Invalid padding: ${t}`);if(s<0)throw new Ta(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ta(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ta(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ui.fromNumber(this.Te)}de(e,t,s){let o=e.add(t.multiply(ui.fromNumber(s)));return o.compare(nI)===1&&(o=new ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=ng(e),[s,o]=rg(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);if(!this.Ee(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Vd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=ng(e),[s,o]=rg(t);for(let u=0;u<this.hashCount;u++){const h=this.de(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ta extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Zu(Ee.min(),o,new Je(ke),Rr(),Ce())}}class $a{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new $a(s,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class Uy{constructor(e,t){this.targetId=e,this.me=t}}class zy{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ig{constructor(){this.fe=0,this.ge=sg(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),s=Ce();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e()}}),new $a(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=sg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rI{constructor(e){this.Be=e,this.Le=new Map,this.ke=Rr(),this.qe=mu(),this.Qe=mu(),this.Ke=new Je(ke)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:_e()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(sd(u))if(s===0){const h=new le(u.path);this.We(t,h,bt.newNoDocument(h,Ee.min()))}else be(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),g=m?this.et(m,e,h):1;if(g!==0){this.He(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=fi(s).toUint8Array()}catch(g){if(g instanceof gy)return lo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Vd(h,o,u)}catch(g){return lo(g instanceof Ta?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Be.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Be.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&sd(m.target)){const g=new le(m.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,bt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Ce();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const v=this.Ye(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new Zu(e,t,this.Ke,this.ke,s);return this.ke=Rr(),this.qe=mu(),this.Qe=mu(),this.Ke=new Je(ke),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new ig,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new mt(ke),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new mt(ke),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new ig),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function mu(){return new Je(le.comparator)}function sg(){return new Je(le.comparator)}const iI={asc:"ASCENDING",desc:"DESCENDING"},sI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oI={and:"AND",or:"OR"};class aI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ld(i,e){return i.useProto3Json||Ku(e)?e:{value:e}}function xu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jy(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function lI(i,e){return xu(i,e.toTimestamp())}function Xn(i){return be(!!i),Ee.fromTimestamp(function(t){const s=di(t);return new pt(s.seconds,s.nanos)}(i))}function Od(i,e){return ud(i,e).canonicalString()}function ud(i,e){const t=function(o){return new Ke(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function By(i){const e=Ke.fromString(i);return be(Ky(e)),e}function cd(i,e){return Od(i.databaseId,e.path)}function qh(i,e){const t=By(e);if(t.get(1)!==i.databaseId.projectId)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ie($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new le(qy(t))}function $y(i,e){return Od(i.databaseId,e)}function uI(i){const e=By(i);return e.length===4?Ke.emptyPath():qy(e)}function hd(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function qy(i){return be(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function og(i,e,t){return{name:cd(i,e),fields:t.value.mapValue.fields}}function cI(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string"),Pt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Pt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?$.UNKNOWN:Fy(v.code);return new ie(w,v.message||"")}(h);t=new zy(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=qh(i,s.document.name),u=Xn(s.document.updateTime),h=s.document.createTime?Xn(s.document.createTime):Ee.min(),m=new _n({mapValue:{fields:s.document.fields}}),g=bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Tu(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=qh(i,s.document),u=s.readTime?Xn(s.readTime):Ee.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Tu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=qh(i,s.document),u=s.removedTargetIds||[];t=new Tu([],u,o,null)}else{if(!("filter"in e))return _e();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new ZT(o,u),m=s.targetId;t=new Uy(m,h)}}return t}function hI(i,e){let t;if(e instanceof Ba)t={update:og(i,e.key,e.value)};else if(e instanceof by)t={delete:cd(i,e.key)};else if(e instanceof ts)t={update:og(i,e.key,e.data),updateMask:EI(e.fieldMask)};else{if(!(e instanceof YT))return _e();t={verify:cd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof La)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ma)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ba)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ou)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw _e()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:lI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e()}(i,e.precondition)),t}function dI(i,e){return i&&i.length>0?(be(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Xn(o.updateTime):Xn(u);return h.isEqual(Ee.min())&&(h=Xn(u)),new KT(h,o.transformResults||[])}(t,e))):[]}function fI(i,e){return{documents:[$y(i,e.path)]}}function pI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=$y(i,o);const u=function(v){if(v.length!==0)return Hy(Ln.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(O){return{field:Zs(O.field),direction:yI(O.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=ld(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:o}}function mI(i){let e=uI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(A){const O=Wy(A);return O instanceof Ln&&Ey(O)?O.getFilters():[O]}(t.where));let h=[];t.orderBy&&(h=function(A){return A.map(O=>function(G){return new xa(eo(G.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(O))}(t.orderBy));let m=null;t.limit&&(m=function(A){let O;return O=typeof A=="object"?A.value:A,Ku(O)?null:O}(t.limit));let g=null;t.startAt&&(g=function(A){const O=!!A.before,z=A.values||[];return new Vu(z,O)}(t.startAt));let v=null;return t.endAt&&(v=function(A){const O=!A.before,z=A.values||[];return new Vu(z,O)}(t.endAt)),OT(e,o,h,u,m,"F",g,v)}function gI(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Wy(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=eo(t.unaryFilter.field);return lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=eo(t.unaryFilter.field);return lt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=eo(t.unaryFilter.field);return lt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=eo(t.unaryFilter.field);return lt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(i):i.fieldFilter!==void 0?function(t){return lt.create(eo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Ln.create(t.compositeFilter.filters.map(s=>Wy(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e()}}(t.compositeFilter.op))}(i):_e()}function yI(i){return iI[i]}function _I(i){return sI[i]}function vI(i){return oI[i]}function Zs(i){return{fieldPath:i.canonicalString()}}function eo(i){return Ct.fromServerFormat(i.fieldPath)}function Hy(i){return i instanceof lt?function(t){if(t.op==="=="){if(Km(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NAN"}};if(Hm(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Km(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NAN"}};if(Hm(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(t.field),op:_I(t.op),value:t.value}}}(i):i instanceof Ln?function(t){const s=t.getFilters().map(o=>Hy(o));return s.length===1?s[0]:{compositeFilter:{op:vI(t.op),filters:s}}}(i):_e()}function EI(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ky(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t,s,o,u=Ee.min(),h=Ee.min(),m=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.ht=e}}function TI(i){const e=mI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ad(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.ln=new SI}addToCollectionParentIndex(e,t){return this.ln.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(hi.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(hi.min())}updateCollectionGroup(e,t,s){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class SI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(Ke.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(41943040,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new fo(0)}static Qn(){return new fo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg([i,e],[t,s]){const o=ke(i,t);return o===0?ke(e,s):o}class AI{constructor(e){this.Gn=e,this.buffer=new mt(lg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();lg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vo(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await _o(t)}await this.Yn(3e5)})}}class CI{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return j.resolve(Hu.oe);const s=new AI(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(ag)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ag):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,m,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(s=A,m=Date.now(),this.removeTargets(e,s,t))).next(A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(A=>(v=Date.now(),Xs()<=Re.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function PI(i,e){return new CI(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.changes=new es(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?j.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ca(s.mutation,o,xn.empty(),pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=Ki();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=wa();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Ki();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Rr();const h=Ra(),m=function(){return Ra()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof ts)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ca(w.mutation,v,w.mutation.getFieldMask(),pt.now())):h.set(v.key,xn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var A;return m.set(v,new NI(w,(A=h.get(v))!==null&&A!==void 0?A:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Ra();let o=new Je((h,m)=>h-m),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||xn.empty();w=m.applyToLocalView(v,w),s.set(g,w);const A=(o.get(m.batchId)||Ce()).add(g);o=o.insert(m.batchId,A)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,A=ky();w.forEach(O=>{if(!u.has(O)){const z=Ly(t.get(O),s.get(O));z!==null&&A.set(O,z),u=u.add(O)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return j.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return le.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):j.resolve(Ki());let m=-1,g=u;return h.next(v=>j.forEach(v,(w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?j.resolve():this.remoteDocumentCache.getEntry(e,w).next(O=>{g=g.insert(w,O)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Ce())).next(w=>({batchId:m,changes:Py(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new le(t)).next(s=>{let o=wa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=wa();return this.indexManager.getCollectionParents(e,u).next(m=>j.forEach(m,g=>{const v=function(A,O){return new Eo(O,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((A,O)=>{h=h.insert(A,O)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let m=wa();return h.forEach((g,v)=>{const w=u.get(g);w!==void 0&&Ca(w.mutation,v,xn.empty(),pt.now()),Yu(t,v)&&(m=m.insert(g,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return j.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Xn(o.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:TI(o.bundledQuery),readTime:Xn(o.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.overlays=new Je(le.comparator),this.dr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ki();return j.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),j.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.dr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.dr.delete(s)),j.resolve()}getOverlaysForCollection(e,t,s){const o=Ki(),u=t.length+1,h=new le(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return j.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Ki(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Ki(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return j.resolve(m)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(s.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new JT(t,s));let u=this.dr.get(t);u===void 0&&(u=Ce(),this.dr.set(t,u)),this.dr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.Er=new mt(wt.Ar),this.Rr=new mt(wt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const s=new wt(e,t);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new wt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new le(new Ke([])),s=new wt(t,e),o=new wt(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new le(new Ke([])),s=new wt(t,e),o=new wt(t,e+1);let u=Ce();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new wt(e,0),s=this.Er.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return le.comparator(e.key,t.key)||ke(e.br,t.br)}static Vr(e,t){return ke(e.br,t.br)||le.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new mt(wt.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new XT(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.vr=this.vr.add(new wt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return j.resolve(h)}lookupMutationBatch(e,t){return j.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return j.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const m=this.Cr(h.br);u.push(m)}),j.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(ke);return t.forEach(o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),j.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;le.isDocumentKey(u)||(u=u.child(""));const h=new wt(new le(u),0);let m=new mt(ke);return this.vr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.br)),!0)},h),j.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return j.forEach(t.mutations,o=>{const u=new wt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,t){const s=new wt(t,0),o=this.vr.firstAfterOrEqual(s);return j.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.Nr=e,this.docs=function(){return new Je(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return j.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=Rr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),j.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Rr();const h=t.path,m=new le(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||dT(hT(w),s)<=0||(o.has(w.key)||Yu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return j.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e()}Br(e,t){return j.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new bI(this)}getSize(e){return j.resolve(this.size)}}class bI extends kI{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),j.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.persistence=e,this.Lr=new es(t=>Cd(t),Pd),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.kr=0,this.qr=new xd,this.targetCount=0,this.Qr=fo.qn()}forEachTarget(e,t){return this.Lr.forEach((s,o)=>t(o)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),j.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new fo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Un(t),j.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Lr.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Lr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),j.waitFor(u).next(()=>o)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const s=this.Lr.get(t)||null;return j.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),j.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),j.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return j.resolve(s)}containsKey(e,t){return j.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Hu(0),this.Ur=!1,this.Ur=!0,this.Wr=new xI,this.referenceDelegate=e(this),this.Gr=new FI(this),this.indexManager=new II,this.remoteDocumentCache=function(o){return new MI(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new wI(t),this.jr=new VI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new OI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new LI(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new UI(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return j.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class UI extends pT{constructor(e){super(),this.currentSequenceNumber=e}}class Ld{constructor(e){this.persistence=e,this.Zr=new xd,this.Xr=null}static ei(e){return new Ld(e)}get ti(){if(this.Xr)return this.Xr;throw _e()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),j.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),j.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,s=>{const o=le.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,Ee.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return j.or([()=>j.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Lu{constructor(e,t){this.persistence=e,this.ri=new es(s=>yT(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=PI(this,t)}static ei(e,t){return new Lu(e,t)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return j.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?j.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Br(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,Ee.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),j.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=vu(e.data.value)),t}ir(e,t,s){return j.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return j.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Md(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return FE()?8:mT(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new zI;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Xs()<=Re.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Js(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(Xs()<=Re.DEBUG&&te("QueryEngine","Query:",Js(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Xs()<=Re.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Js(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(t))):j.resolve())}Xi(e,t){if(Xm(t))return j.resolve(null);let s=Yn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=ad(t,null,"F"),s=Yn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.rs(t,m);return this.ss(t,v,h,g.readTime)?this.Xi(e,ad(t,null,"F")):this.os(e,v,t,g)}))})))}es(e,t,s,o){return Xm(t)||o.isEqual(Ee.min())?j.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?j.resolve(null):(Xs()<=Re.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Js(t)),this.os(e,h,t,cT(o,-1)).next(m=>m))})}rs(e,t){let s=new mt(Ry(e));return t.forEach((o,u)=>{Yu(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return Xs()<=Re.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Js(t)),this.Zi.getDocumentsMatchingQuery(e,t,hi.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Je(ke),this.cs=new es(u=>Cd(u),Pd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DI(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function $I(i,e,t,s){return new BI(i,e,t,s)}async function Qy(i,e){const t=we(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Ce();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:m}))})})}function qI(i,e){const t=we(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(m,g,v,w){const A=v.batch,O=A.keys();let z=j.resolve();return O.forEach(G=>{z=z.next(()=>w.getEntry(g,G)).next(Y=>{const q=v.docVersions.get(G);be(q!==null),Y.version.compareTo(q)<0&&(A.applyToRemoteDocument(Y,v),Y.isValidDocument()&&(Y.setReadTime(v.commitVersion),w.addEntry(Y)))})}),z.next(()=>m.mutationQueue.removeMutationBatch(g,A))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Ce();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Yy(i){const e=we(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function WI(i,e){const t=we(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const m=[];e.targetChanges.forEach((w,A)=>{const O=o.get(A);if(!O)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,A).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,A)));let z=O.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(A,z),function(Y,q,pe){return Y.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=3e8?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0}(O,z,w)&&m.push(t.Gr.updateTargetData(u,z))});let g=Rr(),v=Ce();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(HI(u,h,e.documentUpdates).next(w=>{g=w.Is,v=w.ds})),!s.isEqual(Ee.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(A=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return j.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.us=o,u))}function HI(i,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Rr();return t.forEach((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Ee.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):te("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)}),{Is:h,ds:o}})}function KI(i,e){const t=we(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function GI(i,e){const t=we(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,j.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new si(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function dd(i,e,t){const s=we(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!vo(h))throw h;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function ug(i,e,t){const s=we(i);let o=Ee.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const A=we(g),O=A.cs.get(w);return O!==void 0?j.resolve(A.us.get(O)):A.Gr.getTargetData(v,w)}(s,h,Yn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:Ee.min(),t?u:Ce())).next(m=>(QI(s,LT(e),m),{documents:m,Es:u})))}function QI(i,e,t){let s=i.ls.get(e)||Ee.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class cg{constructor(){this.activeTargetIds=jT()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YI{constructor(){this._o=new cg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new cg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu=null;function Wh(){return gu===null?gu=function(){return 268435456+Math.round(2147483648*Math.random())}():gu++,"0x"+gu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class eS extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const m=Wh(),g=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(v,u,h),this.Lo(t,g,v,o).then(w=>(te("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw lo("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,s,o,u,h,m){return this.Oo(t,s,o,u,h)}Bo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=JI[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,s,o){const u=Wh();return new Promise((h,m)=>{const g=new ly;g.setWithCredentials(!0),g.listenOnce(uy.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case _u.NO_ERROR:const w=g.getResponseJson();te(Lt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case _u.TIMEOUT:te(Lt,`RPC '${e}' ${u} timed out`),m(new ie($.DEADLINE_EXCEEDED,"Request time out"));break;case _u.HTTP_ERROR:const A=g.getStatus();if(te(Lt,`RPC '${e}' ${u} failed with status:`,A,"response text:",g.getResponseText()),A>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const z=O==null?void 0:O.error;if(z&&z.status&&z.message){const G=function(q){const pe=q.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(pe)>=0?pe:$.UNKNOWN}(z.status);m(new ie(G,z.message))}else m(new ie($.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ie($.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{te(Lt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);te(Lt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}qo(e,t,s){const o=Wh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=dy(),m=hy(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Bo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");te(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const A=h.createWebChannel(w,g);let O=!1,z=!1;const G=new ZI({Eo:q=>{z?te(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(O||(te(Lt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),O=!0),te(Lt,`RPC '${e}' stream ${o} sending:`,q),A.send(q))},Ao:()=>A.close()}),Y=(q,pe,ve)=>{q.listen(pe,ce=>{try{ve(ce)}catch(ge){setTimeout(()=>{throw ge},0)}})};return Y(A,Ea.EventType.OPEN,()=>{z||(te(Lt,`RPC '${e}' stream ${o} transport opened.`),G.So())}),Y(A,Ea.EventType.CLOSE,()=>{z||(z=!0,te(Lt,`RPC '${e}' stream ${o} transport closed`),G.Do())}),Y(A,Ea.EventType.ERROR,q=>{z||(z=!0,lo(Lt,`RPC '${e}' stream ${o} transport errored:`,q),G.Do(new ie($.UNAVAILABLE,"The operation could not be completed")))}),Y(A,Ea.EventType.MESSAGE,q=>{var pe;if(!z){const ve=q.data[0];be(!!ve);const ce=ve,ge=(ce==null?void 0:ce.error)||((pe=ce[0])===null||pe===void 0?void 0:pe.error);if(ge){te(Lt,`RPC '${e}' stream ${o} received error:`,ge);const je=ge.status;let Ae=function(R){const P=ot[R];if(P!==void 0)return Fy(P)}(je),N=ge.message;Ae===void 0&&(Ae=$.INTERNAL,N="Unknown error status: "+je+" with message "+ge.message),z=!0,G.Do(new ie(Ae,N)),A.close()}else te(Lt,`RPC '${e}' stream ${o} received:`,ve),G.vo(ve)}}),Y(m,cy.STAT_EVENT,q=>{q.stat===td.PROXY?te(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===td.NOPROXY&&te(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{G.bo()},0),G}}function Hh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(i){return new aI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e,t,s,o,u,h,m,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Xy(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Ar(t.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ie($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.d_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tS extends Jy{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=cI(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ee.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ee.min():h.readTime?Xn(h.readTime):Ee.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=hd(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=sd(g)?{documents:fI(u,g)}:{query:pI(u,g).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=jy(u,h.resumeToken);const v=ld(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(Ee.min())>0){m.readTime=xu(u,h.snapshotVersion.toTimestamp());const v=ld(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=gI(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=hd(this.serializer),t.removeTarget=e,this.c_(t)}}class nS extends Jy{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return be(!!e.streamToken),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=dI(e.writeResults,e.commitTime),s=Xn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=hd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>hI(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,ud(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie($.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,ud(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ie($.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class iS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ar(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{ns(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=we(g);v.k_.add(4),await qa(v),v.K_.set("Unknown"),v.k_.delete(4),await tc(v)}(this))})}),this.K_=new iS(s,o)}}async function tc(i){if(ns(i))for(const e of i.q_)await e(!0)}async function qa(i){for(const e of i.q_)await e(!1)}function Zy(i,e){const t=we(i);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),zd(t)?Ud(t):wo(t).s_()&&Fd(t,e))}function bd(i,e){const t=we(i),s=wo(t);t.L_.delete(e),s.s_()&&e_(t,e),t.L_.size===0&&(s.s_()?s.a_():ns(t)&&t.K_.set("Unknown"))}function Fd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wo(i).V_(e)}function e_(i,e){i.U_.xe(e),wo(i).m_(e)}function Ud(i){i.U_=new rI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.L_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),wo(i).start(),i.K_.F_()}function zd(i){return ns(i)&&!wo(i).i_()&&i.L_.size>0}function ns(i){return we(i).k_.size===0}function t_(i){i.U_=void 0}async function oS(i){i.K_.set("Online")}async function aS(i){i.L_.forEach((e,t)=>{Fd(i,e)})}async function lS(i,e){t_(i),zd(i)?(i.K_.O_(e),Ud(i)):i.K_.set("Unknown")}async function uS(i,e,t){if(i.K_.set("Online"),e instanceof zy&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.L_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.L_.delete(m),o.U_.removeTarget(m))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mu(i,s)}else if(e instanceof Tu?i.U_.$e(e):e instanceof Uy?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(Ee.min()))try{const s=await Yy(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.L_.get(v);w&&u.L_.set(v,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,v)=>{const w=u.L_.get(g);if(!w)return;u.L_.set(g,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),e_(u,g);const A=new si(w.target,g,v,w.sequenceNumber);Fd(u,A)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await Mu(i,s)}}async function Mu(i,e,t){if(!vo(e))throw e;i.k_.add(1),await qa(i),i.K_.set("Offline"),t||(t=()=>Yy(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await tc(i)})}function n_(i,e){return e().catch(t=>Mu(i,t,e))}async function nc(i){const e=we(i),t=mi(e);let s=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;cS(e);)try{const o=await KI(e.localStore,s);if(o===null){e.B_.length===0&&t.a_();break}s=o.batchId,hS(e,o)}catch(o){await Mu(e,o)}r_(e)&&i_(e)}function cS(i){return ns(i)&&i.B_.length<10}function hS(i,e){i.B_.push(e);const t=mi(i);t.s_()&&t.f_&&t.g_(e.mutations)}function r_(i){return ns(i)&&!mi(i).i_()&&i.B_.length>0}function i_(i){mi(i).start()}async function dS(i){mi(i).w_()}async function fS(i){const e=mi(i);for(const t of i.B_)e.g_(t.mutations)}async function pS(i,e,t){const s=i.B_.shift(),o=Dd.from(s,e,t);await n_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await nc(i)}async function mS(i,e){e&&mi(i).f_&&await async function(s,o){if(function(h){return eI(h)&&h!==$.ABORTED}(o.code)){const u=s.B_.shift();mi(s).__(),await n_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await nc(s)}}(i,e),r_(i)&&i_(i)}async function dg(i,e){const t=we(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=ns(t);t.k_.add(3),await qa(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await tc(t)}async function gS(i,e){const t=we(i);e?(t.k_.delete(2),await tc(t)):e||(t.k_.add(2),await qa(t),t.K_.set("Unknown"))}function wo(i){return i.W_||(i.W_=function(t,s,o){const u=we(t);return u.b_(),new tS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:oS.bind(null,i),mo:aS.bind(null,i),po:lS.bind(null,i),R_:uS.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),zd(i)?Ud(i):i.K_.set("Unknown")):(await i.W_.stop(),t_(i))})),i.W_}function mi(i){return i.G_||(i.G_=function(t,s,o){const u=we(t);return u.b_(),new nS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:dS.bind(null,i),po:mS.bind(null,i),p_:fS.bind(null,i),y_:pS.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await nc(i)):(await i.G_.stop(),i.B_.length>0&&(te("RemoteStore",`Stopping write stream with ${i.B_.length} pending writes`),i.B_=[]))})),i.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new jd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bd(i,e){if(Ar("AsyncQueue",`${e}: ${i}`),vo(i))return new ie($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(e){return new no(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||le.comparator(t.key,s.key):(t,s)=>le.comparator(t.key,s.key),this.keyedMap=wa(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new no;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.z_=new Je(le.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):_e():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class po{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new po(e,t,no.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class _S{constructor(){this.queries=pg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=pg(),u.forEach((h,m)=>{for(const g of m.J_)g.onError(s)})})(this,new ie($.ABORTED,"Firestore shutting down"))}}function pg(){return new es(i=>Ay(i),Qu)}async function vS(i,e){const t=we(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new yS,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Bd(h,`Initialization of query '${Js(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&$d(t)}async function ES(i,e){const t=we(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function wS(i,e){const t=we(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(o)&&(s=!0);h.H_=o}}s&&$d(t)}function TS(i,e,t){const s=we(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function $d(i){i.X_.forEach(e=>{e.next()})}var fd,mg;(mg=fd||(fd={})).na="default",mg.Cache="cache";class IS{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.key=e}}class o_{constructor(e){this.key=e}}class SS{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ce(),this.mutatedKeys=Ce(),this.Va=Ry(e),this.ma=new no(this.Va)}get fa(){return this.Ea}ga(e,t){const s=t?t.pa:new fg,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,A)=>{const O=o.get(w),z=Yu(this.query,A)?A:null,G=!!O&&this.mutatedKeys.has(O.key),Y=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let q=!1;O&&z?O.data.isEqual(z.data)?G!==Y&&(s.track({type:3,doc:z}),q=!0):this.ya(O,z)||(s.track({type:2,doc:z}),q=!0,(g&&this.Va(z,g)>0||v&&this.Va(z,v)<0)&&(m=!0)):!O&&z?(s.track({type:0,doc:z}),q=!0):O&&!z&&(s.track({type:1,doc:O}),q=!0,(g||v)&&(m=!0)),q&&(z?(h=h.add(z),u=Y?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,A)=>function(z,G){const Y=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return Y(z)-Y(G)}(w.type,A.type)||this.Va(w.doc,A.doc)),this.wa(s),o=o!=null&&o;const m=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,v=g!==this.Aa;return this.Aa=g,h.length!==0||v?{snapshot:new po(this.query,e.ma,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new fg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ce(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new o_(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new s_(s))}),t}va(e){this.Ea=e.Es,this.Ra=Ce();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return po.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class AS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class RS{constructor(e){this.key=e,this.Fa=!1}}class CS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new es(m=>Ay(m),Qu),this.Oa=new Map,this.Na=new Set,this.Ba=new Je(le.comparator),this.La=new Map,this.ka=new xd,this.qa={},this.Qa=new Map,this.Ka=fo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function PS(i,e,t=!0){const s=d_(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await a_(s,e,t,!0),o}async function kS(i,e){const t=d_(i);await a_(t,e,!0,!1)}async function a_(i,e,t,s){const o=await GI(i.localStore,Yn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await NS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Zy(i.remoteStore,o),m}async function NS(i,e,t,s,o){i.Ua=(A,O,z)=>async function(Y,q,pe,ve){let ce=q.view.ga(pe);ce.ss&&(ce=await ug(Y.localStore,q.query,!1).then(({documents:N})=>q.view.ga(N,ce)));const ge=ve&&ve.targetChanges.get(q.targetId),je=ve&&ve.targetMismatches.get(q.targetId)!=null,Ae=q.view.applyChanges(ce,Y.isPrimaryClient,ge,je);return yg(Y,q.targetId,Ae.ba),Ae.snapshot}(i,A,O,z);const u=await ug(i.localStore,e,!0),h=new SS(e,u.Es),m=h.ga(u.documents),g=$a.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);yg(i,t,v.ba);const w=new AS(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function DS(i,e,t){const s=we(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!Qu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await dd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&bd(s.remoteStore,o.targetId),pd(s,o.targetId)}).catch(_o)):(pd(s,o.targetId),await dd(s.localStore,o.targetId,!0))}async function VS(i,e){const t=we(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),bd(t.remoteStore,s.targetId))}async function OS(i,e,t){const s=zS(i);try{const o=await function(h,m){const g=we(h),v=pt.now(),w=m.reduce((z,G)=>z.add(G.key),Ce());let A,O;return g.persistence.runTransaction("Locally write mutations","readwrite",z=>{let G=Rr(),Y=Ce();return g.hs.getEntries(z,w).next(q=>{G=q,G.forEach((pe,ve)=>{ve.isValidDocument()||(Y=Y.add(pe))})}).next(()=>g.localDocuments.getOverlayedDocuments(z,G)).next(q=>{A=q;const pe=[];for(const ve of m){const ce=QT(ve,A.get(ve.key).overlayedDocument);ce!=null&&pe.push(new ts(ve.key,ce,yy(ce.value.mapValue),Tr.exists(!0)))}return g.mutationQueue.addMutationBatch(z,v,pe,m)}).next(q=>{O=q;const pe=q.applyToLocalDocumentSet(A,Y);return g.documentOverlayCache.saveOverlays(z,q.batchId,pe)})}).then(()=>({batchId:O.batchId,changes:Py(A)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let v=h.qa[h.currentUser.toKey()];v||(v=new Je(ke)),v=v.insert(m,g),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await Wa(s,o.changes),await nc(s.remoteStore)}catch(o){const u=Bd(o,"Failed to persist write");t.reject(u)}}async function l_(i,e){const t=we(i);try{const s=await WI(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.La.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?be(h.Fa):o.removedDocuments.size>0&&(be(h.Fa),h.Fa=!1))}),await Wa(t,s,e)}catch(s){await _o(s)}}function gg(i,e,t){const s=we(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=we(h);g.onlineState=m;let v=!1;g.queries.forEach((w,A)=>{for(const O of A.J_)O.ea(m)&&(v=!0)}),v&&$d(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xS(i,e,t){const s=we(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.La.get(e),u=o&&o.key;if(u){let h=new Je(le.comparator);h=h.insert(u,bt.newNoDocument(u,Ee.min()));const m=Ce().add(u),g=new Zu(Ee.min(),new Map,new Je(ke),h,m);await l_(s,g),s.Ba=s.Ba.remove(u),s.La.delete(e),qd(s)}else await dd(s.localStore,e,!1).then(()=>pd(s,e,t)).catch(_o)}async function LS(i,e){const t=we(i),s=e.batch.batchId;try{const o=await qI(t.localStore,e);c_(t,s,null),u_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Wa(t,o)}catch(o){await _o(o)}}async function MS(i,e,t){const s=we(i);try{const o=await function(h,m){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next(A=>(be(A!==null),w=A.keys(),g.mutationQueue.removeMutationBatch(v,A))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);c_(s,e,t),u_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Wa(s,o)}catch(o){await _o(o)}}function u_(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function c_(i,e,t){const s=we(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function pd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||h_(i,s)})}function h_(i,e){i.Na.delete(e.path.canonicalString());const t=i.Ba.get(e);t!==null&&(bd(i.remoteStore,t),i.Ba=i.Ba.remove(e),i.La.delete(t),qd(i))}function yg(i,e,t){for(const s of t)s instanceof s_?(i.ka.addReference(s.key,e),bS(i,s)):s instanceof o_?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||h_(i,s.key)):_e()}function bS(i,e){const t=e.key,s=t.path.canonicalString();i.Ba.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),qd(i))}function qd(i){for(;i.Na.size>0&&i.Ba.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new le(Ke.fromString(e)),s=i.Ka.next();i.La.set(s,new RS(t)),i.Ba=i.Ba.insert(t,s),Zy(i.remoteStore,new si(Yn(kd(t.path)),s,"TargetPurposeLimboResolution",Hu.oe))}}async function Wa(i,e,t){const s=we(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,g)=>{h.push(s.Ua(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(v){o.push(v);const A=Md.zi(g.targetId,v);u.push(A)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,v){const w=we(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>j.forEach(v,O=>j.forEach(O.Wi,z=>w.persistence.referenceDelegate.addReference(A,O.targetId,z)).next(()=>j.forEach(O.Gi,z=>w.persistence.referenceDelegate.removeReference(A,O.targetId,z)))))}catch(A){if(!vo(A))throw A;te("LocalStore","Failed to update sequence numbers: "+A)}for(const A of v){const O=A.targetId;if(!A.fromCache){const z=w.us.get(O),G=z.snapshotVersion,Y=z.withLastLimboFreeSnapshotVersion(G);w.us=w.us.insert(O,Y)}}}(s.localStore,u))}async function FS(i,e){const t=we(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await Qy(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(g=>{g.reject(new ie($.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Wa(t,s.Ts)}}function US(i,e){const t=we(i),s=t.La.get(e);if(s&&s.Fa)return Ce().add(s.key);{let o=Ce();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const m=t.xa.get(h);o=o.unionWith(m.view.fa)}return o}}function d_(i){const e=we(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=l_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=US.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xS.bind(null,e),e.Ma.R_=wS.bind(null,e.eventManager),e.Ma.Wa=TS.bind(null,e.eventManager),e}function zS(i){const e=we(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MS.bind(null,e),e}class bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return $I(this.persistence,new jI,e.initialUser,this.serializer)}ja(e){return new Gy(Ld.ei,this.serializer)}za(e){return new YI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bu.provider={build:()=>new bu};class jS extends bu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){be(this.persistence.referenceDelegate instanceof Lu);const s=this.persistence.referenceDelegate.garbageCollector;return new RI(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new Gy(s=>Lu.ei(s,t),this.serializer)}}class md{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>gg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=FS.bind(null,this.syncEngine),await gS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _S}()}createDatastore(e){const t=ec(e.databaseInfo.databaseId),s=function(u){return new eS(u)}(e.databaseInfo);return function(u,h,m,g){return new rS(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new sS(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>gg(this.syncEngine,t,0),function(){return hg.p()?new hg:new XI}())}createSyncEngine(e,t){return function(o,u,h,m,g,v,w){const A=new CS(o,u,h,m,g,v);return w&&(A.$a=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=we(o);te("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await qa(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}md.provider={build:()=>new md};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=py.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Bd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Kh(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Qy(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function _g(i,e){i.asyncQueue.verifyOperationInProgress();const t=await qS(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>dg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>dg(e.remoteStore,o)),i._onlineComponents=e}async function qS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;lo("Error using user provided cache. Falling back to memory cache: "+t),await Kh(i,new bu)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Kh(i,new jS(void 0));return i._offlineComponents}async function f_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await _g(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await _g(i,new md))),i._onlineComponents}function WS(i){return f_(i).then(e=>e.syncEngine)}async function vg(i){const e=await f_(i),t=e.eventManager;return t.onListen=PS.bind(null,e.syncEngine),t.onUnlisten=DS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VS.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(i,e,t){if(!t)throw new ie($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function HS(i,e,t,s){if(e===!0&&s===!0)throw new ie($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function wg(i){if(!le.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Tg(i){if(le.isDocumentKey(i))throw new ie($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function rc(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e()}function Pa(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ie($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rc(i);throw new ie($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=p_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ie($.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ic{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ig({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ig(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new tT;switch(s.type){case"firstParty":return new sT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Eg.get(t);s&&(te("ComponentProvider","Removing Datastore"),Eg.delete(t),s.terminate())}(this),Promise.resolve()}}function KS(i,e,t,s={}){var o;const u=(i=Pa(i,ic))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Mt.MOCK_USER;else{m=DE(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ie($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(v)}i._authCredentials=new nT(new fy(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class an{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class ci extends rs{constructor(e,t,s){super(e,t,kd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new le(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}function Sg(i,e,...t){if(i=$t(i),m_("collection","path",e),i instanceof ic){const s=Ke.fromString(e,...t);return Tg(s),new ci(i,null,s)}{if(!(i instanceof an||i instanceof ci))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return Tg(s),new ci(i.firestore,null,s)}}function GS(i,e,...t){if(i=$t(i),arguments.length===1&&(e=py.newId()),m_("doc","path",e),i instanceof ic){const s=Ke.fromString(e,...t);return wg(s),new an(i,null,new le(s))}{if(!(i instanceof an||i instanceof ci))throw new ie($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return wg(s),new an(i.firestore,i instanceof ci?i.converter:null,new le(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Xy(this,"async_queue_retry"),this.fu=()=>{const s=Hh();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Hh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Hh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new Gi;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!vo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Ar("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=jd.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.Eu.push(o),o}pu(){this.Au&&_e()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}function Rg(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class Fu extends ic{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Ag,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ag(e),this._firestoreClient=void 0,await e}}}function QS(i,e){const t=typeof i=="object"?i:iy(),s=typeof i=="string"?i:"(default)",o=Id(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=kE("firestore");u&&KS(o,...u)}return o}function g_(i){if(i._terminated)throw new ie($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||YS(i),i._firestoreClient}function YS(i){var e,t,s;const o=i._freezeSettings(),u=function(m,g,v,w){return new ET(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,p_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new $S(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mo(Pt.fromBase64String(e))}catch(t){throw new ie($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mo(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=/^__.*__$/;class JS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ba(e,this.data,t,this.fieldTransforms)}}function y_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Qd{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Qd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Bu(e),o}Lu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Uu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(y_(this.Mu)&&XS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class ZS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ec(e)}$u(e,t,s,o=!1){return new Qd({Mu:e,methodName:t,Ku:s,path:Ct.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function __(i){const e=i._freezeSettings(),t=ec(i._databaseId);return new ZS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function eA(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);w_("Data must be an object, but it was:",h,s);const m=v_(s,h);let g,v;if(u.merge)g=new xn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const O=nA(e,A,t);if(!h.contains(O))throw new ie($.INVALID_ARGUMENT,`Field '${O}' is specified in your field mask but missing from your input data.`);iA(w,O)||w.push(O)}g=new xn(w),v=h.fieldTransforms.filter(A=>g.covers(A.field))}else g=null,v=h.fieldTransforms;return new JS(new _n(m),g,v)}class Yd extends Hd{_toFieldTransform(e){return new WT(e.path,new La)}isEqual(e){return e instanceof Yd}}function tA(i,e,t,s=!1){return Xd(t,i.$u(s?4:3,e))}function Xd(i,e){if(E_(i=$t(i)))return w_("Unsupported field value:",e,i),v_(i,e);if(i instanceof Hd)return function(s,o){if(!y_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=Xd(m,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=$t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return BT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:xu(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xu(o.serializer,u)}}if(s instanceof Kd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof mo)return{bytesValue:jy(o.serializer,s._byteString)};if(s instanceof an){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Od(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Gd)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.qu("VectorValues must only contain numeric values.");return Nd(m.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${rc(s)}`)}(i,e)}function v_(i,e){const t={};return my(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(i,(s,o)=>{const u=Xd(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function E_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof pt||i instanceof Kd||i instanceof mo||i instanceof an||i instanceof Hd||i instanceof Gd)}function w_(i,e,t){if(!E_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=rc(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function nA(i,e,t){if((e=$t(e))instanceof Wd)return e._internalPath;if(typeof e=="string")return T_(i,e);throw Uu("Field path arguments must be of type string or ",i,!1,void 0,t)}const rA=new RegExp("[~\\*/\\[\\]]");function T_(i,e,t){if(e.search(rA)>=0)throw Uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Wd(...e.split("."))._internalPath}catch{throw Uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Uu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ie($.INVALID_ARGUMENT,m+i+g)}function iA(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sA extends I_{data(){return super.data()}}function Jd(i,e){return typeof e=="string"?T_(i,e):e instanceof Wd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ie($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zd{}class S_ extends Zd{}function aA(i,e,...t){let s=[];e instanceof Zd&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof tf).length,m=u.filter(g=>g instanceof ef).length;if(h>1||h>0&&m>0)throw new ie($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class ef extends S_{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ef(e,t,s)}_apply(e){const t=this._parse(e);return A_(e._query,t),new rs(e.firestore,e.converter,od(e._query,t))}_parse(e){const t=__(e.firestore);return function(u,h,m,g,v,w,A){let O;if(v.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new ie($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){Pg(A,w);const z=[];for(const G of A)z.push(Cg(g,u,G));O={arrayValue:{values:z}}}else O=Cg(g,u,A)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||Pg(A,w),O=tA(m,h,A,w==="in"||w==="not-in");return lt.create(v,w,O)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class tf extends Zd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new tf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Ln.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const m=u.getFlattenedFilters();for(const g of m)A_(h,g),h=od(h,g)}(e._query,t),new rs(e.firestore,e.converter,od(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nf extends S_{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new nf(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ie($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ie($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xa(u,h)}(e._query,this._field,this._direction);return new rs(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Eo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function lA(i,e="asc"){const t=e,s=Jd("orderBy",i);return nf._create(s,t)}function Cg(i,e,t){if(typeof(t=$t(t))=="string"){if(t==="")throw new ie($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sy(e)&&t.indexOf("/")!==-1)throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ke.fromString(t));if(!le.isDocumentKey(s))throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Wm(i,new le(s))}if(t instanceof an)return Wm(i,t._key);throw new ie($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rc(t)}.`)}function Pg(i,e){if(!Array.isArray(i)||i.length===0)throw new ie($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function A_(i,e){const t=function(o,u){for(const h of o)for(const m of h.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class uA{convertValue(e,t="none"){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Zi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new Gd(u)}convertGeoPoint(e){return new Kd(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Gu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Da(e));default:return null}}convertTimestamp(e){const t=di(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);be(Ky(s));const o=new Va(s.get(1),s.get(3)),u=new le(s.popFirst(5));return o.isEqual(t)||Ar(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class R_ extends I_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Jd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Iu extends R_{data(e={}){return super.data(e)}}class hA{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ia(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Iu(this._firestore,this._userDataWriter,s.key,s,new Ia(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new Iu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ia(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Iu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ia(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:dA(m.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function dA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}class C_ extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new mo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,t)}}function fA(i,e){const t=Pa(i.firestore,Fu),s=GS(i),o=cA(i.converter,e);return mA(t,[eA(__(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Tr.exists(!1))]).then(()=>s)}function pA(i,...e){var t,s,o;i=$t(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Rg(e[h])||(u=e[h],h++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Rg(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let g,v,w;if(i instanceof an)v=Pa(i.firestore,Fu),w=kd(i._key.path),g={next:A=>{e[h]&&e[h](gA(v,i,A))},error:e[h+1],complete:e[h+2]};else{const A=Pa(i,rs);v=Pa(A.firestore,Fu),w=A._query;const O=new C_(v);g={next:z=>{e[h]&&e[h](new hA(v,O,A,z))},error:e[h+1],complete:e[h+2]},oA(i._query)}return function(O,z,G,Y){const q=new BS(Y),pe=new IS(z,q,G);return O.asyncQueue.enqueueAndForget(async()=>vS(await vg(O),pe)),()=>{q.eu(),O.asyncQueue.enqueueAndForget(async()=>ES(await vg(O),pe))}}(g_(v),w,m,g)}function mA(i,e){return function(s,o){const u=new Gi;return s.asyncQueue.enqueueAndForget(async()=>OS(await WS(s),o,u)),u.promise}(g_(i),e)}function gA(i,e,t){const s=t.docs.get(e._key),o=new C_(i);return new R_(i,o,e._key,s,new Ia(t.hasPendingWrites,t.fromCache),e.converter)}function yA(){return new Yd("serverTimestamp")}(function(e,t=!0){(function(o){yo=o})(go),ao(new Qi("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Fu(new rT(s.getProvider("auth-internal")),new aT(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ie($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),li(Um,"4.7.6",e),li(Um,"4.7.6","esm2017")})();var _A="firebase",vA="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li(_A,vA,"app");function rf(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function P_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EA=P_,k_=new za("auth","Firebase",P_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new wd("@firebase/auth");function wA(i,...e){zu.logLevel<=Re.WARN&&zu.warn(`Auth (${go}): ${i}`,...e)}function Su(i,...e){zu.logLevel<=Re.ERROR&&zu.error(`Auth (${go}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(i,...e){throw sf(i,...e)}function Jn(i,...e){return sf(i,...e)}function N_(i,e,t){const s=Object.assign(Object.assign({},EA()),{[e]:t});return new za("auth","Firebase",s).create(e,{appName:i.name})}function Ir(i){return N_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return k_.create(i,...e)}function me(i,e,...t){if(!i)throw sf(e,...t)}function vr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Su(e),new Error(e)}function Cr(i,e){i||vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function TA(){return kg()==="http:"||kg()==="https:"}function kg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TA()||LE()||"connection"in navigator)?navigator.onLine:!0}function SA(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cr(t>e,"Short delay should be less than long delay!"),this.isMobile=VE()||ME()}get(){return IA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(i,e){Cr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=new Ha(3e4,6e4);function gi(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function yi(i,e,t,s,o={}){return V_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=ja(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return xE()||(v.referrerPolicy="no-referrer"),D_.fetch()(O_(i,i.config.apiHost,t,m),v)})}async function V_(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},AA),e);try{const o=new PA(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw yu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw yu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw yu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw yu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw N_(i,w,v);Mn(i,w)}}catch(o){if(o instanceof Pr)throw o;Mn(i,"network-request-failed",{message:String(o)})}}async function Ka(i,e,t,s,o={}){const u=await yi(i,e,t,s,o);return"mfaPendingCredential"in u&&Mn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function O_(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?of(i.config,o):`${i.config.apiScheme}://${o}`}function CA(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Jn(this.auth,"network-request-failed")),RA.get())})}}function yu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Jn(i,e,s);return o.customData._tokenResponse=t,o}function Ng(i){return i!==void 0&&i.enterprise!==void 0}class kA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return CA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NA(i,e){return yi(i,"GET","/v2/recaptchaConfig",gi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA(i,e){return yi(i,"POST","/v1/accounts:delete",e)}async function x_(i,e){return yi(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VA(i,e=!1){const t=$t(i),s=await t.getIdToken(e),o=af(s);me(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:ka(Gh(o.auth_time)),issuedAtTime:ka(Gh(o.iat)),expirationTime:ka(Gh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Gh(i){return Number(i)*1e3}function af(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Su("JWT malformed, contained fewer than 3 sections"),null;try{const o=Xg(t);return o?JSON.parse(o):(Su("Failed to decode base64 JWT payload"),null)}catch(o){return Su("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Dg(i){const e=af(i);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Pr&&OA(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function OA({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Fa(i,x_(t,{idToken:s}));me(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?L_(u.providerUserInfo):[],m=MA(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new yd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,A)}async function LA(i){const e=$t(i);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MA(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function L_(i){return i.map(e=>{var{providerId:t}=e,s=rf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(i,e){const t=await V_(i,{},async()=>{const s=ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=O_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",D_.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function FA(i,e){return yi(i,"POST","/v2/accounts:revokeToken",gi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){me(e.length!==0,"internal-error");const t=Dg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await bA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ro;return s&&(me(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(me(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(me(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(i,e){me(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=rf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new yd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Fa(this,this.stsTokenManager.getToken(this.auth,e));return me(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VA(this,e)}reload(){return LA(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ju(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await Fa(this,DA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,O=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Y=(m=t.tenantId)!==null&&m!==void 0?m:void 0,q=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,pe=(v=t.createdAt)!==null&&v!==void 0?v:void 0,ve=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ce,emailVerified:ge,isAnonymous:je,providerData:Ae,stsTokenManager:N}=t;me(ce&&N,e,"internal-error");const I=ro.fromJSON(this.name,N);me(typeof ce=="string",e,"internal-error"),ei(A,e.name),ei(O,e.name),me(typeof ge=="boolean",e,"internal-error"),me(typeof je=="boolean",e,"internal-error"),ei(z,e.name),ei(G,e.name),ei(Y,e.name),ei(q,e.name),ei(pe,e.name),ei(ve,e.name);const R=new Er({uid:ce,auth:e,email:O,emailVerified:ge,displayName:A,isAnonymous:je,photoURL:G,phoneNumber:z,tenantId:Y,stsTokenManager:I,createdAt:pe,lastLoginAt:ve});return Ae&&Array.isArray(Ae)&&(R.providerData=Ae.map(P=>Object.assign({},P))),q&&(R._redirectEventId=q),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new ro;o.updateFromServerResponse(t);const u=new Er({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ju(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];me(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?L_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ro;m.updateFromIdToken(s);const g=new Er({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new yd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new Map;function wr(i){Cr(i instanceof Function,"Expected a class definition");let e=Vg.get(i);return e?(Cr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Vg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}M_.type="NONE";const Og=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(i,e,t){return`firebase:${i}:${e}:${t}`}class io{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Au(this.userKey,o.apiKey,u),this.fullPersistenceKey=Au("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new io(wr(Og),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||wr(Og);const h=Au(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const A=Er._fromJSON(e,w);v!==u&&(m=A),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new io(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new io(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(b_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B_(e))return"Blackberry";if($_(e))return"Webos";if(F_(e))return"Safari";if((e.includes("chrome/")||U_(e))&&!e.includes("edge/"))return"Chrome";if(j_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function b_(i=Ft()){return/firefox\//i.test(i)}function F_(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function U_(i=Ft()){return/crios\//i.test(i)}function z_(i=Ft()){return/iemobile/i.test(i)}function j_(i=Ft()){return/android/i.test(i)}function B_(i=Ft()){return/blackberry/i.test(i)}function $_(i=Ft()){return/webos/i.test(i)}function lf(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function UA(i=Ft()){var e;return lf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zA(){return bE()&&document.documentMode===10}function q_(i=Ft()){return lf(i)||j_(i)||$_(i)||B_(i)||/windows phone/i.test(i)||z_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(i,e=[]){let t;switch(i){case"Browser":t=xg(Ft());break;case"Worker":t=`${xg(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${go}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(i,e={}){return yi(i,"GET","/v2/passwordPolicy",gi(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=6;class qA{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:$A,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lg(this),this.idTokenSubscription=new Lg(this),this.beforeStateQueue=new jA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=k_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await io.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await x_(this,{idToken:e}),s=await Er._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(Ir(this));const t=e?$t(e):null;return t&&me(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BA(this),t=new qA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new za("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await FA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;me(t,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&wA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function is(i){return $t(i)}class Lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=WE(t=>this.observer=t)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HA(i){sc=i}function H_(i){return sc.loadJS(i)}function KA(){return sc.recaptchaEnterpriseScript}function GA(){return sc.gapiScript}function QA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class YA{constructor(){this.enterprise=new XA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class XA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const JA="recaptcha-enterprise",K_="NO_RECAPTCHA";class ZA{constructor(e){this.type=JA,this.auth=is(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{NA(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new kA(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Ng(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(K_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Ng(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=KA();g.length!==0&&(g+=m),H_(g).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function Mg(i,e,t,s=!1,o=!1){const u=new ZA(i);let h;if(o)h=K_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function _d(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Mg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Mg(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(i,e){const t=Id(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ku(u,e??{}))return o;Mn(o,"already-initialized")}return t.initialize({options:e})}function t0(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(wr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function n0(i,e,t){const s=is(i);me(s._canInitEmulator,s,"emulator-config-failed"),me(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=G_(e),{host:h,port:m}=r0(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),i0()}function G_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function r0(i){const e=G_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:bg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:bg(h)}}}function bg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function i0(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,t){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}async function s0(i,e){return yi(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(i,e){return Ka(i,"POST","/v1/accounts:signInWithPassword",gi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(i,e){return Ka(i,"POST","/v1/accounts:signInWithEmailLink",gi(i,e))}async function l0(i,e){return Ka(i,"POST","/v1/accounts:signInWithEmailLink",gi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends uf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ua(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ua(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _d(e,t,"signInWithPassword",o0);case"emailLink":return a0(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _d(e,s,"signUpPassword",s0);case"emailLink":return l0(e,{idToken:t,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(i,e){return Ka(i,"POST","/v1/accounts:signInWithIdp",gi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="http://localhost";class Xi extends uf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=rf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Xi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return so(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,so(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,so(e,t)}buildRequest(){const e={requestUri:u0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ja(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function h0(i){const e=_a(va(i)).link,t=e?_a(va(e)).deep_link_id:null,s=_a(va(i)).deep_link_id;return(s?_a(va(s)).link:null)||s||t||e||i}class cf{constructor(e){var t,s,o,u,h,m;const g=_a(va(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,A=c0((o=g.mode)!==null&&o!==void 0?o:null);me(v&&w&&A,"argument-error"),this.apiKey=v,this.operation=A,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=h0(e);try{return new cf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,t){return Ua._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=cf.parseLink(t);return me(s,"argument-error"),Ua._fromEmailAndCode(e,s.code,s.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Q_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Ga{constructor(){super("facebook.com")}static credential(e){return Xi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.GOOGLE_SIGN_IN_METHOD="google.com";ni.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ga{constructor(){super("github.com")}static credential(e){return Xi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Ga{constructor(){super("twitter.com")}static credential(e,t){return Xi._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(i,e){return Ka(i,"POST","/v1/accounts:signUp",gi(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Er._fromIdTokenResponse(e,s,o),h=Fg(s);return new Ji({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Fg(s);return new Ji({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Fg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Pr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Bu(e,t,s,o)}}function Y_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(i,u,e,s):u})}async function f0(i,e,t=!1){const s=await Fa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ji._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(i,e,t=!1){const{auth:s}=i;if(Qn(s.app))return Promise.reject(Ir(s));const o="reauthenticate";try{const u=await Fa(i,Y_(s,o,e,i),t);me(u.idToken,s,"internal-error");const h=af(u.idToken);me(h,s,"internal-error");const{sub:m}=h;return me(i.uid===m,s,"user-mismatch"),Ji._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Mn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(i,e,t=!1){if(Qn(i.app))return Promise.reject(Ir(i));const s="signIn",o=await Y_(i,s,e),u=await Ji._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function m0(i,e){return X_(is(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(i){const e=is(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function g0(i,e,t){if(Qn(i.app))return Promise.reject(Ir(i));const s=is(i),h=await _d(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",d0).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&J_(i),g}),m=await Ji._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function y0(i,e,t){return Qn(i.app)?Promise.reject(Ir(i)):m0($t(i),To.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&J_(i),s})}function _0(i,e,t,s){return $t(i).onIdTokenChanged(e,t,s)}function v0(i,e,t){return $t(i).beforeAuthStateChanged(e,t)}function Z_(i,e,t,s){return $t(i).onAuthStateChanged(e,t,s)}const $u="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=1e3,w0=10;class tv extends ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);zA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,w0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},E0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tv.type="LOCAL";const T0=tv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv extends ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nv.type="SESSION";const rv=nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new oc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await I0(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=hf("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const O=A;if(O.data.eventId===v)switch(O.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(O.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}function A0(i){Zn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function R0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C0(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function P0(){return iv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="firebaseLocalStorageDb",k0=1,qu="firebaseLocalStorage",ov="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ac(i,e){return i.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function N0(){const i=indexedDB.deleteDatabase(sv);return new Qa(i).toPromise()}function vd(){const i=indexedDB.open(sv,k0);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qu,{keyPath:ov})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qu)?e(s):(s.close(),await N0(),e(await vd()))})})}async function Ug(i,e,t){const s=ac(i,!0).put({[ov]:e,value:t});return new Qa(s).toPromise()}async function D0(i,e){const t=ac(i,!1).get(e),s=await new Qa(t).toPromise();return s===void 0?null:s.value}function zg(i,e){const t=ac(i,!0).delete(e);return new Qa(t).toPromise()}const V0=800,O0=3;class av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>O0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(P0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await R0(),!this.activeServiceWorker)return;this.sender=new S0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||C0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await Ug(e,$u,"1"),await zg(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ug(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>D0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ac(o,!1).getAll();return new Qa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}av.type="LOCAL";const x0=av;new Ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(i,e){return e?wr(e):(me(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends uf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return so(e,this._buildIdpRequest())}_linkToIdToken(e,t){return so(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return so(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function M0(i){return X_(i.auth,new df(i),i.bypassAuthState)}function b0(i){const{auth:e,user:t}=i;return me(t,e,"internal-error"),p0(t,new df(i),i.bypassAuthState)}async function F0(i){const{auth:e,user:t}=i;return me(t,e,"internal-error"),f0(t,new df(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M0;case"linkViaPopup":case"linkViaRedirect":return F0;case"reauthViaPopup":case"reauthViaRedirect":return b0;default:Mn(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=new Ha(2e3,1e4);class to extends lv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,to.currentPopupAction&&to.currentPopupAction.cancel(),to.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,to.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U0.get())};e()}}to.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="pendingRedirect",Ru=new Map;class j0 extends lv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ru.get(this.auth._key());if(!e){try{const s=await B0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ru.set(this.auth._key(),e)}return this.bypassAuthState||Ru.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B0(i,e){const t=W0(e),s=q0(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function $0(i,e){Ru.set(i._key(),e)}function q0(i){return wr(i._redirectPersistence)}function W0(i){return Au(z0,i.config.apiKey,i.name)}async function H0(i,e,t=!1){if(Qn(i.app))return Promise.reject(Ir(i));const s=is(i),o=L0(s,e),h=await new j0(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=10*60*1e3;class G0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Q0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!uv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Jn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K0&&this.cachedEventUids.clear(),this.cachedEventUids.has(jg(e))}saveEventToCache(e){this.cachedEventUids.add(jg(e)),this.lastProcessedEventTime=Date.now()}}function jg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function uv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Q0(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(i,e={}){return yi(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,J0=/^https?/;async function Z0(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Y0(i);for(const t of e)try{if(eR(t))return}catch{}Mn(i,"unauthorized-domain")}function eR(i){const e=gd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!J0.test(t))return!1;if(X0.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new Ha(3e4,6e4);function Bg(){const i=Zn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function nR(i){return new Promise((e,t)=>{var s,o,u;function h(){Bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bg(),t(Jn(i,"network-request-failed"))},timeout:tR.get()})}if(!((o=(s=Zn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Zn().gapi)===null||u===void 0)&&u.load)h();else{const m=QA("iframefcb");return Zn()[m]=()=>{gapi.load?h():t(Jn(i,"network-request-failed"))},H_(`${GA()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Cu=null,e})}let Cu=null;function rR(i){return Cu=Cu||nR(i),Cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=new Ha(5e3,15e3),sR="__/auth/iframe",oR="emulator/auth/iframe",aR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uR(i){const e=i.config;me(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?of(e,oR):`https://${i.config.authDomain}/${sR}`,s={apiKey:e.apiKey,appName:i.name,v:go},o=lR.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${ja(s).slice(1)}`}async function cR(i){const e=await rR(i),t=Zn().gapi;return me(t,i,"internal-error"),e.open({where:document.body,url:uR(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aR,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Jn(i,"network-request-failed"),m=Zn().setTimeout(()=>{u(h)},iR.get());function g(){Zn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dR=500,fR=600,pR="_blank",mR="http://localhost";class $g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gR(i,e,t,s=dR,o=fR){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},hR),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=U_(v)?pR:t),b_(v)&&(e=e||mR,g.scrollbars="yes");const w=Object.entries(g).reduce((O,[z,G])=>`${O}${z}=${G},`,"");if(UA(v)&&m!=="_self")return yR(e||"",m),new $g(null);const A=window.open(e||"",m,w);me(A,i,"popup-blocked");try{A.focus()}catch{}return new $g(A)}function yR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="__/auth/handler",vR="emulator/auth/handler",ER=encodeURIComponent("fac");async function qg(i,e,t,s,o,u){me(i.config.authDomain,i,"auth-domain-config-required"),me(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:go,eventId:o};if(e instanceof Q_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",qE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof Ga){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),v=g?`#${ER}=${encodeURIComponent(g)}`:"";return`${wR(i)}?${ja(m).slice(1)}${v}`}function wR({config:i}){return i.emulator?of(i,vR):`https://${i.authDomain}/${_R}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="webStorageSupport";class TR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rv,this._completeRedirectFn=H0,this._overrideRedirectResult=$0}async _openPopup(e,t,s,o){var u;Cr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await qg(e,t,s,gd(),o);return gR(e,h,hf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await qg(e,t,s,gd(),o);return A0(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Cr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await cR(e),s=new G0(e);return t.register("authEvent",o=>(me(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qh,{type:Qh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Qh];h!==void 0&&t(!!h),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Z0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return q_()||F_()||lf()}}const IR=TR;var Wg="@firebase/auth",Hg="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RR(i){ao(new Qi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;me(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W_(i)},v=new WA(s,o,u,g);return t0(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ao(new Qi("auth-internal",e=>{const t=is(e.getProvider("auth").getImmediate());return(s=>new SR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(Wg,Hg,AR(i)),li(Wg,Hg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=5*60,PR=ey("authIdTokenMaxAge")||CR;let Kg=null;const kR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>PR)return;const o=t==null?void 0:t.token;Kg!==o&&(Kg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function NR(i=iy()){const e=Id(i,"auth");if(e.isInitialized())return e.getImmediate();const t=e0(i,{popupRedirectResolver:IR,persistence:[x0,T0,rv]}),s=ey("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=kR(u.toString());v0(t,h,()=>h(t.currentUser)),_0(t,m=>h(m))}}const o=Jg("auth");return o&&n0(t,`http://${o}`),t}function DR(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}HA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Jn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",DR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RR("Browser");const VR={apiKey:"AIzaSyACZoLT2jyNB9KYZh8TzIavATmsJ89c09M",authDomain:"chat-f29ba.firebaseapp.com",projectId:"chat-f29ba",storageBucket:"chat-f29ba.firebasestorage.app",messagingSenderId:"1014064042663",appId:"1:1014064042663:web:ba4d3449e11ef7081a0182"},cv=ry(VR),oo=NR(cv),Gg=QS(cv);function OR({name:i,user:e}){const[t,s]=at.useState(null),[o,u]=at.useState([]),[h,m]=at.useState(""),g=at.useRef(null);at.useEffect(()=>{const A=aA(Sg(Gg,`messages${i}`),lA("timestamp"));return pA(A,z=>{u(z.docs.map(G=>({id:G.id,data:G.data()})))})},[i]),at.useEffect(()=>{g.current&&g.current.scrollIntoView({behavior:"smooth"})},[o]),at.useEffect(()=>{g.current&&g.current.scrollIntoView({behavior:"smooth"})},[o]);const v=async()=>{if(!h.trim()&&!t){console.error("Error: No message content or image to send.");return}if(!e){console.error("Error: User is not logged in.");return}try{await fA(Sg(Gg,`messages${i}`),{uid:e.uid,name:e.email.split("@")[0],text:h.trim(),image:t||null,timestamp:yA()}),m(""),s(null)}catch(A){console.error("Error sending message:",A.message)}},w=A=>{const O=A.target.files[0];if(O){const z=new FileReader;z.onload=()=>{const G=new Image;G.src=z.result,G.onload=()=>{const Y=document.createElement("canvas"),q=Y.getContext("2d"),pe=800,ve=800;let ce=G.width,ge=G.height;ce>ge?ce>pe&&(ge=ge*pe/ce,ce=pe):ge>ve&&(ce=ce*ve/ge,ge=ve),Y.width=ce,Y.height=ge,q.drawImage(G,0,0,ce,ge);const je=Y.toDataURL(O.type);s(je)}},z.readAsDataURL(O)}};return fe.jsx("div",{className:"App",children:fe.jsxs("div",{children:[fe.jsx("div",{className:"message-container",children:fe.jsxs("div",{className:"messages",children:[o.map(A=>{const O=A.data.name===e.email.split("@")[0];return fe.jsxs("div",{className:`message${O?"own":""}`,children:[fe.jsxs("div",{className:"nameTitle",children:[A.data.name,":"]}),fe.jsx("br",{}),A.data.image&&fe.jsxs(fe.Fragment,{children:[fe.jsx("img",{src:A.data.image,alt:"User uploaded",className:"image"}),fe.jsx("br",{})]}),A.data.text]},A.id)}),fe.jsx("div",{ref:g})]})}),fe.jsxs("div",{className:"input-container",children:[fe.jsx("input",{className:"input",value:h,onChange:A=>m(A.target.value),placeholder:"Type your message..."}),fe.jsx("button",{className:"sendMsg",onClick:v,children:"➤"}),fe.jsx("input",{type:"file",accept:"image/*",onChange:w})]})]})})}function xR(){const[i,e]=at.useState("General"),[t,s]=at.useState(!1),[o,u]=at.useState(""),[h,m]=at.useState(["General","Coding","Tech","Art","Chat"]),g=oo.currentUser,v=()=>{s(!t)};at.useEffect(()=>{v()},[i]);const w=()=>{o.trim()&&(m(O=>[...O,o]),u(""))},A=O=>{const z=h.filter(G=>G!==O);m(z)};return fe.jsxs(fe.Fragment,{children:[fe.jsx("h2",{className:"roomTitle",children:i}),t?fe.jsx("div",{}):fe.jsx("button",{className:"hamburger-button",onClick:v,children:"≡"}),fe.jsxs("nav",{className:`sidebar ${t?"open":""}`,children:[fe.jsx("button",{className:"decline-button",onClick:v,children:"x"}),fe.jsx("h2",{children:"Choose a Chat Room"}),fe.jsx("ul",{className:"chatroom-list",children:h.map(O=>fe.jsxs("li",{children:[fe.jsx("button",{onClick:()=>e(O),children:O}),fe.jsx("button",{className:"deleteRoomBtn",onClick:()=>A(O),children:"🗑️"})]},O))}),fe.jsx("button",{className:"addRoomBtn",onClick:w,children:"+"}),fe.jsx("input",{type:"text",value:o,onChange:O=>u(O.target.value),className:"addRoomInput"}),fe.jsx("h3",{children:"If you are creating a new room you should create a unique name and your friends should add the same name here"})]}),fe.jsx(OR,{name:i,user:g})]})}function LR(){const[i,e]=at.useState(null),[t,s]=at.useState(""),[o,u]=at.useState(""),[h,m]=at.useState(null);at.useEffect(()=>Z_(oo,A=>{e(A)}),[]);const g=async()=>{if(!t||!o){m("Email and password are required for login.");return}try{const w=await y0(oo,t,o);console.log("User logged in:",w.user),m(null)}catch(w){console.error("Error logging in:",w.message),m(w.message)}},v=async()=>{(await g0(oo,t,o)).user};return fe.jsxs("center",{children:[h&&fe.jsx("p",{className:"error",children:h}),fe.jsxs("div",{children:[fe.jsx("label",{className:"authTitle",children:"Email:"}),fe.jsx("input",{type:"email",value:t,onChange:w=>s(w.target.value),placeholder:"Enter your email",className:"authInput"})]}),fe.jsxs("div",{children:[fe.jsx("label",{className:"authTitle",children:"Password:"}),fe.jsx("input",{type:"password",value:o,onChange:w=>u(w.target.value),placeholder:"Enter your password",className:"authInput"})]}),fe.jsx("button",{onClick:v,className:"login",children:"Log in"}),fe.jsx("button",{onClick:g,className:"signin",children:"Sign In"})]})}const MR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFxSURBVEiJtdW9Sx1BFAXw3zPGr0AKQfIKUwgRqyDBxtYyKVJa2ggi+DcYky7YJiASewtT2FhYSbo0KUwgKYylIigIIgSV8CxmFzZmdt4+XQ8Ml50795yZ4c5ZAh5gGcdodTCu8BUvlKCRxQV8LMwf4FdZUQG9mMQRnuGybOHmjZ39xRqeVBD5kNWMx5JdWeyPzM9iH2/RlxA4yeJASqAMj7CE73jZZm0U7QRyjGIL05FcqwrBtmpd8yVSO4EN4bRDdxX4kdjkq2zN4n0JDAqt3cKbfLI7UVCGUazicSTXk8V3wqNduY3AIMb839r8u+GnxUQdV9RX4FkX7KdWgddl5HcVaKAp3P/UTfKqDy2FORxiGDuCj9Uq0BROETXGOgSSqEMgd9GrWDLv24uKZE28L3z3YwZn+JkqnNfZr7I4ToUWTaIhmNSfNmS/BffMx3M8bEdexAg+JwS+dUKWwhR2IwLLdQkQXuQ89nCOT+IGl8Q1T1afNY8yDfQAAAAASUVORK5CYII=";function bR(){const[i,e]=at.useState(null);return at.useEffect(()=>{const t=Z_(oo,s=>{e(s)});return()=>t()},[]),fe.jsxs("div",{className:"App",children:[fe.jsx("div",{className:"titleDiv",children:fe.jsx("h1",{className:"title",children:"CHAT APP"})}),fe.jsx("button",{className:"SignOut",onClick:()=>oo.signOut(),children:fe.jsx("img",{src:MR,alt:"Logout"})})," ",fe.jsx("br",{}),i?fe.jsx(xR,{}):fe.jsx(LR,{})]})}wE.createRoot(document.getElementById("root")).render(fe.jsx(at.StrictMode,{children:fe.jsx(bR,{})}));
