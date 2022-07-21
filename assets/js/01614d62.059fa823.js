"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"Page.waitForXPath"},o="Page.waitForXPath() method",p={unversionedId:"api/puppeteer.page.waitforxpath",id:"version-15.4.1/api/puppeteer.page.waitforxpath",title:"Page.waitForXPath() method",description:"Wait for the xpath to appear in page. If at the moment of calling the method the xpath already exists, the method will return immediately. If the xpath doesn't appear after the timeout milliseconds of waiting, the function will throw.",source:"@site/versioned_docs/version-15.4.1/api/puppeteer.page.waitforxpath.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforxpath",permalink:"/api/puppeteer.page.waitforxpath",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"Page.waitForXPath"},sidebar:"sidebar",previous:{title:"Page.waitForTimeout",permalink:"/api/puppeteer.page.waitfortimeout"},next:{title:"Page.workers",permalink:"/api/puppeteer.page.workers"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pagewaitforxpath-method"},"Page.waitForXPath() method"),(0,r.kt)("p",null,"Wait for the ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," to appear in page. If at the moment of calling the method the ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," already exists, the method will return immediately. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"xpath")," doesn't appear after the ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,r.kt)("p",null,"This method works across navigation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForXPath('//img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  waitForXPath(\n    xpath: string,\n    options?: {\n      visible?: boolean;\n      hidden?: boolean;\n      timeout?: number;\n    }\n  ): Promise<ElementHandle<Node> | null>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xpath"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/XPath"},"xpath")," of an element to wait for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"{ visible?: boolean; hidden?: boolean; timeout?: number; }"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," Optional waiting parameters")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle"},"ElementHandle"),"<","Node",">"," ","|"," null",">"),(0,r.kt)("p",null,"Promise which resolves when element specified by xpath string is added to DOM. Resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if waiting for ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden: true")," and xpath is not found in DOM."),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The optional Argument ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," have properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"visible"),": A boolean to wait for element to be present in DOM and to be visible, i.e. to not have ",(0,r.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hidden"),": A boolean wait for element to not be found in the DOM or to be hidden, i.e. have ",(0,r.kt)("inlineCode",{parentName:"p"},"display: none")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"visibility: hidden")," CSS properties. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"timeout"),": A number which is maximum time to wait for in milliseconds. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to disable timeout. The default value can be changed by using the ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method."))))}u.isMDXComponent=!0}}]);