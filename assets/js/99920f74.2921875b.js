"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60889],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||p;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<p;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74331:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const p={sidebar_label:"HTTPResponse.fromServiceWorker"},a="HTTPResponse.fromServiceWorker() method",s={unversionedId:"api/puppeteer.httpresponse.fromserviceworker",id:"version-15.3.0/api/puppeteer.httpresponse.fromserviceworker",title:"HTTPResponse.fromServiceWorker() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.0/api/puppeteer.httpresponse.fromserviceworker.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.fromserviceworker",permalink:"/15.3.0/api/puppeteer.httpresponse.fromserviceworker",draft:!1,tags:[],version:"15.3.0",frontMatter:{sidebar_label:"HTTPResponse.fromServiceWorker"},sidebar:"sidebar",previous:{title:"HTTPResponse.fromCache",permalink:"/15.3.0/api/puppeteer.httpresponse.fromcache"},next:{title:"HTTPResponse.headers",permalink:"/15.3.0/api/puppeteer.httpresponse.headers"}},i={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"httpresponsefromserviceworker-method"},"HTTPResponse.fromServiceWorker() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  fromServiceWorker(): boolean;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"boolean"),(0,o.kt)("p",null,"True if the response was served by a service worker."))}u.isMDXComponent=!0}}]);