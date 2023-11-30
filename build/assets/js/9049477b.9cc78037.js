"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,s={unversionedId:"Tutorials/IfcPropertiesFinder",id:"Tutorials/IfcPropertiesFinder",title:"IfcPropertiesFinder",description:"\ud83d\udd0e Find just what you need",source:"@site/docs/Tutorials/IfcPropertiesFinder.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/IfcPropertiesFinder",permalink:"/docs/Tutorials/IfcPropertiesFinder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FragmentTree",permalink:"/docs/Tutorials/FragmentTree"},next:{title:"IfcPropertiesManager",permalink:"/docs/Tutorials/IfcPropertiesManager"}},l={},u=[{value:"\ud83d\udd0e Find just what you need",id:"-find-just-what-you-need",level:3},{value:"\u2728 Highlighting the results",id:"-highlighting-the-results",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"-find-just-what-you-need"},"\ud83d\udd0e Find just what you need"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Sometimes data is buried inside our BIM models, and the\nheterogeneity of BIM models doesn't make it easier. Luckily,\nwe have created a component that can go past this barrier:\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"IfcPropertiesFinder"),"."),(0,i.kt)("admonition",{title:"How can it find buried data?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Best way to describe the component is to find "Relations of entities meeting a set of attributes criteria".\nEach search group aims to find a set of entities matching the criteria and then its relations.\nThe search result are all common relations of the entities that meet the criteria in each search group.')),(0,i.kt)("p",null,"Let's see how it works! As usual, let's start by loading our\nclassic model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentManager(components);\nconst file = await fetch("../../../resources/small.frag");\nconst dataBlob = await file.arrayBuffer();\nconst buffer = new Uint8Array(dataBlob);\nconst model = await fragments.load(buffer);\nconst properties = await fetch("../../../resources/small.json");\nmodel.properties = await properties.json();\n')),(0,i.kt)("p",null,"Now, we can start the finder by just instancing the class and\ncalling the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," method. It's asynchronous, so don't forget\nto add an ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," before it! Then, you can make it ",(0,i.kt)("inlineCode",{parentName:"p"},"queryWindow"),"\nvisible to start working with it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const propsFinder = new OBC.IfcPropertiesFinder(components);\nawait propsFinder.init();\npropsFinder.uiElement.get("queryWindow").visible = true;\n')),(0,i.kt)("p",null,"We will also add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Toolbar")," so that you can see how to hide and\nshow it using the main built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," that it has:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const mainToolbar = new OBC.Toolbar(components)\ncomponents.ui.addToolbar(mainToolbar)\nmainToolbar.addChild(propsFinder.uiElement.get("main"))\n')),(0,i.kt)("h3",{id:"-highlighting-the-results"},"\u2728 Highlighting the results"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Right now our app is super boring, so let's make this a bit more\ninteresting. We will highlight the items found by the finder.\nDoing this is super easy with the ",(0,i.kt)("inlineCode",{parentName:"p"},"FragmentHighlighter")," and the\nfinder ",(0,i.kt)("inlineCode",{parentName:"p"},"onFound")," event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const highlighter = new OBC.FragmentHighlighter(components);\nhighlighter.setup();\ncomponents.renderer.postproduction.customEffects.outlineEnabled = true;\nhighlighter.outlinesEnabled = true;\nhighlighter.zoomToSelection = true;\npropsFinder.onFound.add(result => {\nhighlighter.highlightByID("select", result);\n})\n')),(0,i.kt)("p",null,"This is it! Now you know how to find data using complex queries\nin your BIM models. You can use the finder in combination\nwith your own tools, like we did with the ",(0,i.kt)("inlineCode",{parentName:"p"},"FragmentHider"),". Let us\nmake the data heavy lifting for you and just focus on the results!\nWe'll see you in another tutorial of these docs."),(0,i.kt)("iframe",{src:"https://ifcjs.github.io/components/ifc/IfcPropertiesFinder/index.html"}))}d.isMDXComponent=!0}}]);