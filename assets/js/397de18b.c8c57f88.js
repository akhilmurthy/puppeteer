"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65933],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"BrowserFetcher"},l="BrowserFetcher class",p={unversionedId:"api/puppeteer.browserfetcher",id:"version-15.4.0/api/puppeteer.browserfetcher",title:"BrowserFetcher class",description:"BrowserFetcher can download and manage different versions of Chromium and Firefox.",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.browserfetcher.md",sourceDirName:"api",slug:"/api/puppeteer.browserfetcher",permalink:"/15.4.0/api/puppeteer.browserfetcher",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"BrowserFetcher"},sidebar:"sidebar",previous:{title:"BrowserEmittedEvents",permalink:"/15.4.0/api/puppeteer.browseremittedevents"},next:{title:"BrowserFetcher.canDownload",permalink:"/15.4.0/api/puppeteer.browserfetcher.candownload"}},i={},s=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"browserfetcher-class"},"BrowserFetcher class"),(0,n.kt)("p",null,"BrowserFetcher can download and manage different versions of Chromium and Firefox."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class BrowserFetcher\n")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"BrowserFetcher operates on revision strings that specify a precise version of Chromium, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},'"533271"'),". Revision strings can be obtained from ",(0,n.kt)("a",{parentName:"p",href:"http://omahaproxy.appspot.com/"},"omahaproxy.appspot.com"),". In the Firefox case, BrowserFetcher downloads Firefox Nightly and operates on version numbers such as ",(0,n.kt)("inlineCode",{parentName:"p"},'"75"'),"."),(0,n.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"BrowserFetcher")," class."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"An example of using BrowserFetcher to download a specific version of Chromium and running Puppeteer against it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const browserFetcher = puppeteer.createBrowserFetcher();\nconst revisionInfo = await browserFetcher.download('533271');\nconst browser = await puppeteer.launch({\n  executablePath: revisionInfo.executablePath,\n});\n")),(0,n.kt)("p",null,"*","*","NOTE","*","*"," BrowserFetcher is not designed to work concurrently with other instances of BrowserFetcher that share the same downloads directory."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.browserfetcher.candownload"},"canDownload(revision)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Initiates a HEAD request to check if the revision is available.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.browserfetcher.download"},"download(revision, progressCallback)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Initiates a GET request to download the revision from the host.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.browserfetcher.host"},"host()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.browserfetcher.localrevisions"},"localRevisions()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.browserfetcher.platform"},"platform()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.browserfetcher.product"},"product()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.browserfetcher.remove"},"remove(revision)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.browserfetcher.revisioninfo"},"revisionInfo(revision)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);