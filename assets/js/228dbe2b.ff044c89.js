"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80762],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_label:"WaitForOptions.timeout"},a="WaitForOptions.timeout property",p={unversionedId:"api/puppeteer.waitforoptions.timeout",id:"version-15.3.2/api/puppeteer.waitforoptions.timeout",title:"WaitForOptions.timeout property",description:"Maximum wait time in milliseconds, defaults to 30 seconds, pass 0 to disable the timeout.",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.waitforoptions.timeout.md",sourceDirName:"api",slug:"/api/puppeteer.waitforoptions.timeout",permalink:"/15.3.2/api/puppeteer.waitforoptions.timeout",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"WaitForOptions.timeout"},sidebar:"sidebar",previous:{title:"WaitForOptions",permalink:"/15.3.2/api/puppeteer.waitforoptions"},next:{title:"WaitForOptions.waitUntil",permalink:"/15.3.2/api/puppeteer.waitforoptions.waituntil"}},s={},u=[{value:"Remarks",id:"remarks",level:2}],l={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"waitforoptionstimeout-property"},"WaitForOptions.timeout property"),(0,o.kt)("p",null,"Maximum wait time in milliseconds, defaults to 30 seconds, pass ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to disable the timeout."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface WaitForOptions {\n  timeout?: number;\n}\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The default value can be changed by using the ",(0,o.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," or ",(0,o.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.page.setdefaultnavigationtimeout"},"Page.setDefaultNavigationTimeout()")," methods."))}c.isMDXComponent=!0}}]);