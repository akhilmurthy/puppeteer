"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97264],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=p.createContext({}),u=function(e){var r=p.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return p.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?p.createElement(f,o(o({ref:r},l),{},{components:t})):p.createElement(f,o({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return p.createElement.apply(null,o)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82683:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var p=t(87462),n=(t(67294),t(3905));const a={sidebar_label:"Puppeteer.devices"},o="Puppeteer.devices property",i={unversionedId:"api/puppeteer.puppeteer.devices",id:"version-15.4.0/api/puppeteer.puppeteer.devices",title:"Puppeteer.devices property",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.puppeteer.devices.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer.devices",permalink:"/15.4.0/api/puppeteer.puppeteer.devices",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"Puppeteer.devices"},sidebar:"sidebar",previous:{title:"Puppeteer.customQueryHandlerNames",permalink:"/15.4.0/api/puppeteer.puppeteer.customqueryhandlernames"},next:{title:"Puppeteer.errors",permalink:"/15.4.0/api/puppeteer.puppeteer.errors"}},c={},u=[{value:"Example",id:"example",level:2}],l={toc:u};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,p.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"puppeteerdevices-property"},"Puppeteer.devices property"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,n.kt)("p",{parentName:"blockquote"},"Import directly puppeteer.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Puppeteer {\n  get devices(): typeof devices;\n}\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import {devices} from 'puppeteer';\n")))}s.isMDXComponent=!0}}]);