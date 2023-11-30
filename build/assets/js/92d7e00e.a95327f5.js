"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"Tutorials/FragmentClipStyler",id:"Tutorials/FragmentClipStyler",title:"FragmentClipStyler",description:"\ud83d\udc84 Styling those fills and edges",source:"@site/docs/Tutorials/FragmentClipStyler.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/FragmentClipStyler",permalink:"/docs/Tutorials/FragmentClipStyler",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FragmentCacher",permalink:"/docs/Tutorials/FragmentCacher"},next:{title:"FragmentExploder",permalink:"/docs/Tutorials/FragmentExploder"}},s={},p=[{value:"\ud83d\udc84 Styling those fills and edges",id:"-styling-those-fills-and-edges",level:3},{value:"\ud83c\udfe0 Loading a model",id:"-loading-a-model",level:3},{value:"\ud83d\udd25 Spinning up the styler",id:"-spinning-up-the-styler",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-styling-those-fills-and-edges"},"\ud83d\udc84 Styling those fills and edges"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You might have noticed that the ",(0,a.kt)("inlineCode",{parentName:"p"},"EdgesClipper")," has support for fills\nand edges of various colors and thicknesses. That's great, but how can\nwe set it up for our BIM app? Luckily, the ",(0,a.kt)("inlineCode",{parentName:"p"},"FragmentClipStyler")," comes\nto the rescue!"),(0,a.kt)("admonition",{title:"Your app, your look",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We are used to seeing BIM software that looks exactly the same. Use\nthis component to make yours look different and identifiable with\nyour brand!")),(0,a.kt)("p",null,"Let's start by enabling the outlines in the ",(0,a.kt)("inlineCode",{parentName:"p"},"PostproductionRenderer"),". If\nyou haven't checked out that tutorial yet, you should before going\nforward!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"postproduction.customEffects.outlineEnabled = true;\n")),(0,a.kt)("p",null,"Next, we will intialize the ",(0,a.kt)("inlineCode",{parentName:"p"},"EdgesClipper"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"FragmentClassifier")," and the\n",(0,a.kt)("inlineCode",{parentName:"p"},"FragmentClipStyler"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const clipper = new OBC.EdgesClipper(components);\nclipper.enabled = true;\nconst classifier = new OBC.FragmentClassifier(components);\nconst styler = new OBC.FragmentClipStyler(components);\nawait styler.setup();\n")),(0,a.kt)("p",null,"Great! Now, adding it to the scene is as easy as creating a\n",(0,a.kt)("inlineCode",{parentName:"p"},"Toolbar")," and adding the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," included in the styler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const toolbar = new OBC.Toolbar(components);\ntoolbar.name = "Main toolbar";\ncomponents.ui.addToolbar(toolbar);\nconst stylerButton = styler.uiElement.get("mainButton");\ntoolbar.addChild(stylerButton);\n')),(0,a.kt)("p",null,"Fantastic! Now your styler is ready to be used."),(0,a.kt)("h3",{id:"-loading-a-model"},"\ud83c\udfe0 Loading a model"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Of course, we won't be able to see anything until we load a model.\nWe will load a simple fragment that you can find in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources"),"\nfolder of the Components repository. Alternatively, you can use\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"FragmentIfcLoader")," to load an IFC file directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const file = await fetch('../../../resources/small.frag');\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = await fragments.load(buffer);\nconst properties = await fetch('../../../resources/small.json');\nmodel.properties = await properties.json();\n")),(0,a.kt)("p",null,"Great, now we have something in our scene. Now, let's see the\nstyler in action."),(0,a.kt)("h3",{id:"-spinning-up-the-styler"},"\ud83d\udd25 Spinning up the styler"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To use the styler, we need to classify the model by entity using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"FragmentClassifier"),". That will index all the geometry by\nIFC category for the styler. Then, we can simply call the ",(0,a.kt)("inlineCode",{parentName:"p"},"update"),"\nmethod to make it affect the model we just loaded:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"classifier.byEntity(model);\nawait styler.update();\n")),(0,a.kt)("p",null,"And one last thing: we need a way to create clipping planes! In\nthis example, we will just use the global double click event. In\nother words: each time you double click, a new clipping plane\nwill be created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.ondblclick = () => {\nclipper.create();\n}\n")),(0,a.kt)("p",null,"And voil\xe0! Now you can create a clipping plane, open the styler menu\nand see the section fill and edges update in real time. You can\ncreate styles and apply them per category. See you in another\ntutorial. \ud83d\ude80"),(0,a.kt)("iframe",{src:"https://ifcjs.github.io/components/fragments/FragmentClipStyler/index.html"}))}d.isMDXComponent=!0}}]);