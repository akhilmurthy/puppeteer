"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=p,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),p=(r(67294),r(3905));const o={sidebar_label:"PuppeteerNode.connect"},a="PuppeteerNode.connect() method",i={unversionedId:"api/puppeteer.puppeteernode.connect",id:"version-15.3.2/api/puppeteer.puppeteernode.connect",title:"PuppeteerNode.connect() method",description:"This method attaches Puppeteer to an existing browser instance.",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.puppeteernode.connect.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.connect",permalink:"/15.3.2/api/puppeteer.puppeteernode.connect",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"PuppeteerNode.connect"},sidebar:"sidebar",previous:{title:"PuppeteerNode._preferredRevision",permalink:"/15.3.2/api/puppeteer.puppeteernode._preferredrevision"},next:{title:"PuppeteerNode.createBrowserFetcher",permalink:"/15.3.2/api/puppeteer.puppeteernode.createbrowserfetcher"}},c={},l=[{value:"Parameters",id:"parameters",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"puppeteernodeconnect-method"},"PuppeteerNode.connect() method"),(0,p.kt)("p",null,"This method attaches Puppeteer to an existing browser instance."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class PuppeteerNode {\n  connect(options: ConnectOptions): Promise<Browser>;\n}\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/15.3.2/api/puppeteer.connectoptions"},"ConnectOptions")),(0,p.kt)("td",{parentName:"tr",align:null},"Set of configurable options to set on the browser.")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.browser"},"Browser"),">"),(0,p.kt)("p",null,"Promise which resolves to browser instance."))}u.isMDXComponent=!0}}]);