"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||a;return n?o.createElement(d,p(p({ref:t},l),{},{components:n})):o.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,p[1]=s;for(var c=2;c<a;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),p=["components"],s={title:"Components"},i=void 0,c={unversionedId:"Tutorials/Components/index",id:"Tutorials/Components/index",title:"Components",description:"TOC",source:"@site/docs/Tutorials/Components/index.md",sourceDirName:"Tutorials/Components",slug:"/Tutorials/Components/",permalink:"/Tutorials/Components/",draft:!1,tags:[],version:"current",frontMatter:{title:"Components"},sidebar:"tutorialSidebar",previous:{title:"QueryGroup",permalink:"/api/interfaces/thatopen_ui.QueryGroup"},next:{title:"BoundingBoxer",permalink:"/Tutorials/Components/Core/BoundingBoxer"}},l={},m=[{value:"Packages",id:"packages",level:3},{value:"Usage",id:"usage",level:3}],u={toc:m},h="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("a",{href:"https://thatopen.com/"},"TOC"),"|",(0,a.kt)("a",{href:"https://docs.thatopen.com/intro"},"documentation"),"|",(0,a.kt)("a",{href:"https://thatopen.github.io/engine_componentspackages/core/src/fragments/IfcLoader/example.html"},"demo"),"|",(0,a.kt)("a",{href:"https://people.thatopen.com/"},"community"),"|",(0,a.kt)("a",{href:"https://www.npmjs.com/org/thatopen"},"npm package")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://thatopen.github.io/engine_components/resources/cover.png",alt:"cover"})),(0,a.kt)("h1",null,"Open BIM Components ",(0,a.kt)("img",{src:"https://thatopen.github.io/engine_components/resources/favicon.ico",width:"32"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@thatopen/components"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@thatopen/components",alt:"NPM Package"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@thatopen/components"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dw/@thatopen/components",alt:"NPM Package"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/actions/workflows/tests.yml"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/ThatOpen/engine_components/actions/workflows/tests.yml/badge.svg",alt:"Tests"}))),(0,a.kt)("p",null,"This library is a collection of BIM tools based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrdoob/three.js/"},"Three.js")," and other libraries. It includes pre-made features to easily build browser-based 3D BIM applications, such as postproduction, dimensions, floorplan navigation, DXF export and much more. "),(0,a.kt)("h3",{id:"packages"},"Packages"),(0,a.kt)("p",null,"This library contains 2 packages:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/components")," - The core functionality. Compatible both with browser and Node.js environments."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/components-front")," - Features exclusive for browser environments."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"You need to be familiar with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrdoob/three.js/"},"Three.js API")," to be able to use this library effectively. In the following example, we will create a cube in a 3D scene that can be navigated with the mouse or touch events. You can see the full example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/src/core/SimpleScene/index.html"},"here")," and the deployed app ",(0,a.kt)("a",{parentName:"p",href:"https://thatopen.github.io/engine_components/src/core/SimpleScene/index.html"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/* eslint import/no-extraneous-dependencies: 0 */\n\nimport * as THREE from "three";\nimport * as OBC from "../..";\n\nconst container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nconst material = new THREE.MeshLambertMaterial({ color: "#6528D7" });\nconst geometry = new THREE.BoxGeometry();\nconst cube = new THREE.Mesh(geometry, material);\nworld.scene.three.add(cube);\n\nworld.scene.setup();\n\nworld.camera.controls.setLookAt(3, 3, 3, 0, 0, 0);\n')))}d.isMDXComponent=!0}}]);