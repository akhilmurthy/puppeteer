"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17325],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||p;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var p=t.length,s=new Array(p);s[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<p;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57310:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const p={sidebar_label:"HTTPResponse.headers"},s="HTTPResponse.headers() method",a={unversionedId:"api/puppeteer.httpresponse.headers",id:"version-15.3.2/api/puppeteer.httpresponse.headers",title:"HTTPResponse.headers() method",description:"Signature:",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.httpresponse.headers.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.headers",permalink:"/15.3.2/api/puppeteer.httpresponse.headers",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"HTTPResponse.headers"},sidebar:"sidebar",previous:{title:"HTTPResponse.fromServiceWorker",permalink:"/15.3.2/api/puppeteer.httpresponse.fromserviceworker"},next:{title:"HTTPResponse.json",permalink:"/15.3.2/api/puppeteer.httpresponse.json"}},i={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"httpresponseheaders-method"},"HTTPResponse.headers() method"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  headers(): Record<string, string>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Record","<","string, string",">"),(0,o.kt)("p",null,"An object with HTTP headers associated with the response. All header names are lower-case."))}u.isMDXComponent=!0}}]);