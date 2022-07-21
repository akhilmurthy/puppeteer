"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59618],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(t),f=o,m=b["".concat(i,".").concat(f)]||b[f]||c[f]||a;return t?n.createElement(m,p(p({ref:r},l),{},{components:t})):n.createElement(m,p({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=b;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var u=2;u<a;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},25204:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_label:"HTTPRequest.abortErrorReason"},p="HTTPRequest.abortErrorReason() method",s={unversionedId:"api/puppeteer.httprequest.aborterrorreason",id:"version-15.4.1/api/puppeteer.httprequest.aborterrorreason",title:"HTTPRequest.abortErrorReason() method",description:"Signature:",source:"@site/versioned_docs/version-15.4.1/api/puppeteer.httprequest.aborterrorreason.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.aborterrorreason",permalink:"/api/puppeteer.httprequest.aborterrorreason",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"HTTPRequest.abortErrorReason"},sidebar:"sidebar",previous:{title:"HTTPRequest.abort",permalink:"/api/puppeteer.httprequest.abort"},next:{title:"HTTPRequest.client",permalink:"/api/puppeteer.httprequest.client"}},i={},u=[],l={toc:u};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"httprequestaborterrorreason-method"},"HTTPRequest.abortErrorReason() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPRequest {\n  abortErrorReason(): Protocol.Network.ErrorReason | null;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Protocol.Network.ErrorReason ","|"," null"),(0,o.kt)("p",null,"the most recent reason for aborting the request"))}c.isMDXComponent=!0}}]);