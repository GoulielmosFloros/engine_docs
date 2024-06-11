"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[9925],{2830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(4848),r=t(8453);const s={},a=void 0,i={id:"Tutorials/Components/Front/Marker",title:"Marker",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/Marker.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/Marker",permalink:"/Tutorials/Components/Front/Marker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LengthMeasurement",permalink:"/Tutorials/Components/Front/LengthMeasurement"},next:{title:"Plans",permalink:"/Tutorials/Components/Front/Plans"}},l={},c=[{value:"\ud83d\uddbc\ufe0f 2D inside 3D",id:"\ufe0f-2d-inside-3d",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83d\udd8c\ufe0f Creating the marker",id:"\ufe0f-creating-the-marker",level:3},{value:"\u2728 Creating 2D elements",id:"-creating-2d-elements",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/core/Marker/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-2d-inside-3d",children:"\ud83d\uddbc\ufe0f 2D inside 3D"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Sometimes we need to see a 2D element inside our 3D world. For instance, imagine a Digital Twin application that has some icons representing a set of measurement devices inside a building. In this tutorial, we'll learn to use the Marker, which will allow us to easily create and cluster 2D elements inside the 3D scene."}),"\n",(0,o.jsx)(n.admonition,{title:"2D inside 3D?",type:"tip",children:(0,o.jsx)(n.p,{children:'We will achieve this using Three.js CSS2DElements. They allow you to "embed" any HTML element in your 3D scene, automatically adjusting it\'s position to the 3D camera.'})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"three"})," to create some 3D items."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import * as THREE from "three";\nimport * as OBC from "@thatopen/components";\nimport * as OBCF from "@thatopen/components-front";\nimport Stats from "stats.js";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBCF.RendererWith2D\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBCF.RendererWith2D(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(5, 5, 5, 0, 0, 0);\n\ncontainer.appendChild(world.renderer.three2D.domElement);\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-creating-the-marker",children:"\ud83d\udd8c\ufe0f Creating the marker"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:['Now we will get the marker instance. The threshold is the minimum distance that the marker will use to "cluster" the 2D elements together. You can create elements that are not clustered by defining them as static in the ',(0,o.jsx)(n.code,{children:"create"})," method. You can disable clustering alltogether by using the autoCluster option."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const marker = components.get(OBCF.Marker);\n\nmarker.threshold = 10;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-creating-2d-elements",children:"\u2728 Creating 2D elements"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now we will create a bunch of 2D elements in random positions using the create method."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'for (let i = 0; i < 20; i++) {\n  const x = Math.random() * 5;\n  const y = Math.random() * 5;\n  const z = Math.random() * 5;\n  marker.create(world, "\ud83d\ude80", new THREE.Vector3(x, y, z),);\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have created an app that can display 2D elements inside the 3D scene. Congratulations!"}),"\n",(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/Marker"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);