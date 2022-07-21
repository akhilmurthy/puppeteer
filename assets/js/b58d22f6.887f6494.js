"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||p;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const p={sidebar_label:"JSHandle.getProperties"},o="JSHandle.getProperties() method",l={unversionedId:"api/puppeteer.jshandle.getproperties",id:"version-15.4.0/api/puppeteer.jshandle.getproperties",title:"JSHandle.getProperties() method",description:"The method returns a map with property names as keys and JSHandle instances for the property values.",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.jshandle.getproperties.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle.getproperties",permalink:"/15.4.0/api/puppeteer.jshandle.getproperties",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"JSHandle.getProperties"},sidebar:"sidebar",previous:{title:"JSHandle.executionContext",permalink:"/15.4.0/api/puppeteer.jshandle.executioncontext"},next:{title:"JSHandle.getProperty",permalink:"/15.4.0/api/puppeteer.jshandle.getproperty"}},i={},s=[{value:"Example",id:"example",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jshandlegetproperties-method"},"JSHandle.getProperties() method"),(0,a.kt)("p",null,"The method returns a map with property names as keys and JSHandle instances for the property values."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class JSHandle {\n  getProperties(): Promise<Map<string, JSHandle>>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","Map","<","string, ",(0,a.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.jshandle"},"JSHandle"),">",">"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const listHandle = await page.evaluateHandle(() => document.body.children);\nconst properties = await listHandle.getProperties();\nconst children = [];\nfor (const property of properties.values()) {\n  const element = property.asElement();\n  if (element) children.push(element);\n}\nchildren; // holds elementHandles to all children of document.body\n")))}u.isMDXComponent=!0}}]);