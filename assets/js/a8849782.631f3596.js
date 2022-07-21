"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=p,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),p=(r(67294),r(3905));const a={sidebar_label:"Puppeteer.connect"},o="Puppeteer.connect() method",i={unversionedId:"api/puppeteer.puppeteer.connect",id:"version-15.4.1/api/puppeteer.puppeteer.connect",title:"Puppeteer.connect() method",description:"This method attaches Puppeteer to an existing browser instance.",source:"@site/versioned_docs/version-15.4.1/api/puppeteer.puppeteer.connect.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer.connect",permalink:"/api/puppeteer.puppeteer.connect",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"Puppeteer.connect"},sidebar:"sidebar",previous:{title:"Puppeteer.clearCustomQueryHandlers",permalink:"/api/puppeteer.puppeteer.clearcustomqueryhandlers"},next:{title:"Puppeteer.customQueryHandlerNames",permalink:"/api/puppeteer.puppeteer.customqueryhandlernames"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"puppeteerconnect-method"},"Puppeteer.connect() method"),(0,p.kt)("p",null,"This method attaches Puppeteer to an existing browser instance."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class Puppeteer {\n  connect(options: ConnectOptions): Promise<Browser>;\n}\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/api/puppeteer.connectoptions"},"ConnectOptions")),(0,p.kt)("td",{parentName:"tr",align:null},"Set of configurable options to set on the browser.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/api/puppeteer.browser"},"Browser"),">"),(0,p.kt)("p",null,"Promise which resolves to browser instance."),(0,p.kt)("h2",{id:"remarks"},"Remarks"))}u.isMDXComponent=!0}}]);