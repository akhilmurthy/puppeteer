"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,y=u["".concat(o,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(y,p(p({ref:t},s),{},{components:n})):a.createElement(y,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"ElementHandle.type"},p="ElementHandle.type() method",i={unversionedId:"api/puppeteer.elementhandle.type",id:"version-15.4.1/api/puppeteer.elementhandle.type",title:"ElementHandle.type() method",description:"Focuses the element, and then sends a keydown, keypress/input, and keyup event for each character in the text.",source:"@site/versioned_docs/version-15.4.1/api/puppeteer.elementhandle.type.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.type",permalink:"/api/puppeteer.elementhandle.type",draft:!1,tags:[],version:"15.4.1",frontMatter:{sidebar_label:"ElementHandle.type"},sidebar:"sidebar",previous:{title:"ElementHandle.tap",permalink:"/api/puppeteer.elementhandle.tap"},next:{title:"ElementHandle.uploadFile",permalink:"/api/puppeteer.elementhandle.uploadfile"}},o={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],s={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elementhandletype-method"},"ElementHandle.type() method"),(0,r.kt)("p",null,"Focuses the element, and then sends a ",(0,r.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,r.kt)("p",null,"To press a special key, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,r.kt)("a",{parentName:"p",href:"/api/puppeteer.elementhandle.press"},"ElementHandle.press()"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  type(\n    text: string,\n    options?: {\n      delay: number;\n    }\n  ): Promise<void>;\n}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"{ delay: number; }"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await elementHandle.type('Hello'); // Types instantly\nawait elementHandle.type('World', {delay: 100}); // Types slower, like a user\n")),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"An example of typing into a text field and then submitting the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const elementHandle = await page.$('input');\nawait elementHandle.type('some text');\nawait elementHandle.press('Enter');\n")))}d.isMDXComponent=!0}}]);