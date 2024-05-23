"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:5},s="Get involved",p={unversionedId:"components/contributing",id:"components/contributing",title:"Get involved",description:"Want to help us make this project even more amazing? Great! Contributing is easy, and on this page you'll find a quick guide on how to do it.",source:"@site/docs/components/contributing.md",sourceDirName:"components",slug:"/components/contributing",permalink:"/components/contributing",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tutorial paths",permalink:"/components/tutorial-paths"},next:{title:"Getting started",permalink:"/that-open-platform/getting-started"}},u={},c=[{value:"Spotting bugs",id:"spotting-bugs",level:2},{value:"Visiting the community",id:"visiting-the-community",level:2},{value:"Coding",id:"coding",level:2},{value:"Pick a repository",id:"pick-a-repository",level:3},{value:"Pick or create an issue",id:"pick-or-create-an-issue",level:3},{value:"Start coding",id:"start-coding",level:3}],m={toc:c},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-involved"},"Get involved"),(0,i.kt)("p",null,"Want to help us make this project even more amazing? Great! Contributing is easy, and on this page you'll find a quick guide on how to do it."),(0,i.kt)("p",null,"There are basically 3 places where you can help:"),(0,i.kt)("h2",{id:"spotting-bugs"},"Spotting bugs"),(0,i.kt)("p",null,"Have you found a bug / something to improve? Create an issue (if it doesn't exist yet) so that we can start working on it!"),(0,i.kt)("h2",{id:"visiting-the-community"},"Visiting the community"),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"https://people.thatopen.com/"},"community")," is the heart of our project. It's the place where all BIM software developers meet, share their wins and learn from each other."),(0,i.kt)("p",null,"You can be part of it by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Showing us what you built with IFC.js!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Answer questions of other BIM software developers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sharing resources / tutorials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Starting interesting debates and conversations"))),(0,i.kt)("h2",{id:"coding"},"Coding"),(0,i.kt)("admonition",{title:"What you'll need",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The knowledge you need to help us depend on which part of the libraries you want to help us with. In general, basic knowledge of web development, TypeScript and Three.js should suffice. If you are not sure, don't hesitate to ask us!")),(0,i.kt)("p",null,"This includes adding features that you miss, enhancing existing features, fixing bugs or writing tests. The steps to contribute are the following:"),(0,i.kt)("h3",{id:"pick-a-repository"},"Pick a repository"),(0,i.kt)("p",null,"We have ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/"},"multiple libraries"),", and you might be interested in contributing in a specific one. Some of them are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/"},"components"),": our main library. It contains a bunch of tools to create 3D BIM software in no time, like 3D measurements, clipping planes, DXF exporters, etc. If you like fun 3D features and Three.js, start here!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_web-ifc/"},"web-ifc"),": our IFC engine. It's written in C++ and compiled with WebAssembly. It's pretty low level, but not hard at all once you get started. If you are interested in the details of reading and writing IFC, C++ or WebAssembly, start here!"))),(0,i.kt)("h3",{id:"pick-or-create-an-issue"},"Pick or create an issue"),(0,i.kt)("p",null,"Create a new issue telling us what you want to do, or pick an existing issue and tell us that you will do it. That way, we'll make sure that nobody else is working on it. We'll also give you some pointers to help you get started!"),(0,i.kt)("p",null,"We'll also make sure to include it in the roadmap."),(0,i.kt)("h3",{id:"start-coding"},"Start coding"),(0,i.kt)("p",null,"To add / edit code of the library, you will need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a fork of the repository")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Work on your fork of the repository locally. Please follow the ",(0,i.kt)("a",{parentName:"p",href:"/components/clean-components-guide"},"basic clean rules"),"!")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a pull request. The name should follow the ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits")," convention. If you are not sure, check out the title past pull requests!"))),(0,i.kt)("p",null,"Then, someone from our team will reviewed it and, if everything is ok, merge it. That's it! Easy, right? \ud83d\ude0b We'll help you get started and give you anything you needs, so don't hesitate to reach out!"))}h.isMDXComponent=!0}}]);