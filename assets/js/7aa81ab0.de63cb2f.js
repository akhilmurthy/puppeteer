"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65165],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,y=f["".concat(i,".").concat(d)]||f[d]||l[d]||s;return t?n.createElement(y,p(p({ref:r},c),{},{components:t})):n.createElement(y,p({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,p=new Array(s);p[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var u=2;u<s;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},72939:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const s={sidebar_label:"ResponseForRequest.headers"},p="ResponseForRequest.headers property",a={unversionedId:"api/puppeteer.responseforrequest.headers",id:"version-15.3.2/api/puppeteer.responseforrequest.headers",title:"ResponseForRequest.headers property",description:"Optional response headers. All values are converted to strings.",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.responseforrequest.headers.md",sourceDirName:"api",slug:"/api/puppeteer.responseforrequest.headers",permalink:"/15.3.2/api/puppeteer.responseforrequest.headers",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"ResponseForRequest.headers"},sidebar:"sidebar",previous:{title:"ResponseForRequest.contentType",permalink:"/15.3.2/api/puppeteer.responseforrequest.contenttype"},next:{title:"ResponseForRequest.status",permalink:"/15.3.2/api/puppeteer.responseforrequest.status"}},i={},u=[],c={toc:u};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"responseforrequestheaders-property"},"ResponseForRequest.headers property"),(0,o.kt)("p",null,"Optional response headers. All values are converted to strings."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ResponseForRequest {\n  headers: Record<string, unknown>;\n}\n")))}l.isMDXComponent=!0}}]);