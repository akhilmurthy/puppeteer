"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=i(r),m=o,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||s;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},41473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const s={sidebar_label:"BrowserContext.close"},a="BrowserContext.close() method",l={unversionedId:"api/puppeteer.browsercontext.close",id:"version-15.4.0/api/puppeteer.browsercontext.close",title:"BrowserContext.close() method",description:"Closes the browser context. All the targets that belong to the browser context will be closed.",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.browsercontext.close.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.close",permalink:"/15.4.0/api/puppeteer.browsercontext.close",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"BrowserContext.close"},sidebar:"sidebar",previous:{title:"BrowserContext.clearPermissionOverrides",permalink:"/15.4.0/api/puppeteer.browsercontext.clearpermissionoverrides"},next:{title:"BrowserContext.isIncognito",permalink:"/15.4.0/api/puppeteer.browsercontext.isincognito"}},c={},i=[{value:"Remarks",id:"remarks",level:2}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"browsercontextclose-method"},"BrowserContext.close() method"),(0,o.kt)("p",null,"Closes the browser context. All the targets that belong to the browser context will be closed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class BrowserContext {\n  close(): Promise<void>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<","void",">"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Only incognito browser contexts can be closed."))}u.isMDXComponent=!0}}]);