"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[6277],{6995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(4848),o=t(8453);const a={},r=void 0,l={id:"Tutorials/Components/Front/CivilPlanNavigator",title:"CivilPlanNavigator",description:'window.open("https://thatopen.github.io/engine_components/examples/CivilPlanNavigator")} >Go Full Screen',source:"@site/docs/Tutorials/Components/Front/CivilPlanNavigator.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/CivilPlanNavigator",permalink:"/Tutorials/Components/Front/CivilPlanNavigator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CivilElevationNavigator",permalink:"/Tutorials/Components/Front/CivilElevationNavigator"},next:{title:"ClipEdges",permalink:"/Tutorials/Components/Front/ClipEdges"}},s={},d=[{value:"\ud83d\udee3\ufe0f Horizontal alignments",id:"\ufe0f-horizontal-alignments",level:3},{value:"\ud83d\udccb Initializing the UI",id:"-initializing-the-ui",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\ud83d\ude95 Adding the civil 3D navigator",id:"-adding-the-civil-3d-navigator",level:3},{value:"\ud83d\ude97 Adding the civil plan navigator",id:"-adding-the-civil-plan-navigator",level:3},{value:"\ud83d\ude97\ud83d\ude95 Binding navigators",id:"-binding-navigators",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/CivilPlanNavigator"}),(0,i.jsx)("button",{class:"full-screen-btn",onClick:()=>window.open("https://thatopen.github.io/engine_components/examples/CivilPlanNavigator"),children:"Go Full Screen"})]}),"\n",(0,i.jsx)(n.admonition,{title:"Source",type:"info",children:(0,i.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,i.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/civil/CivilPlanNavigator/example.ts",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-horizontal-alignments",children:"\ud83d\udee3\ufe0f Horizontal alignments"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"In this page, we'll learn how to represent the horizontal alignment of civil models and make it interactive."}),"\n",(0,i.jsx)(n.admonition,{title:"Horizontal alignment?",type:"tip",children:(0,i.jsx)(n.p,{children:"Civil models include 2D alignments with explicit information about the asset. One of these alignments is horizontal and represents the floor plan of the alignment curves."})}),"\n",(0,i.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@thatopen/ui-obc"})," to add some cool pre-made UI menus for components."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import * as THREE from "three";\nimport * as OBC from "@thatopen/components";\nimport * as OBCF from "@thatopen/components-front";\nimport * as BUI from "@thatopen/ui";\nimport * as BUIC from "@thatopen/ui-obc";\nimport Stats from "stats.js";\n'})}),"\n",(0,i.jsx)(n.h3,{id:"-initializing-the-ui",children:"\ud83d\udccb Initializing the UI"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"The UI Components need to be initialized before we can use them. First, we will do it with both UI libraries:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\nBUIC.Manager.init();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.OrthoPerspectiveCamera,\n  OBCF.RendererWith2D\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBCF.RendererWith2D(components, container);\nworld.camera = new OBC.OrthoPerspectiveCamera(components);\n\ncomponents.init();\n\nworld.scene.setup();\n\nworld.camera.controls.setLookAt(5, 5, 5, 0, 0, 0);\n\ncontainer.appendChild(world.renderer.three2D.domElement);\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,i.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-loading-a-bim-model",children:"\ud83e\uddf3 Loading a BIM model"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file."}),"\n",(0,i.jsx)(n.admonition,{title:"Fragments?",type:"tip",children:(0,i.jsx)(n.p,{children:"If you are not familiar with fragments, check out the IfcLoader tutorial!"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const fragments = components.get(OBC.FragmentsManager);\nconst file = await fetch(\n  "https://thatopen.github.io/engine_components/resources/road.frag",\n);\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = fragments.load(buffer);\nworld.scene.three.add(model);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"-adding-the-civil-3d-navigator",children:"\ud83d\ude95 Adding the civil 3D navigator"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"First we'll add the civil 3D navigator to move the camera when the user interacts with the civil plan navigator, which we will add later."}),"\n",(0,i.jsx)(n.admonition,{title:"Civil 3D navigator?",type:"tip",children:(0,i.jsx)(n.p,{children:"If you are not familiar with the civil 3D navigator, check out that tutorial first!"})}),"\n",(0,i.jsx)(n.p,{children:"We'll simply get an instance of the civil 3D navigator:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const navigator = components.get(OBCF.Civil3DNavigator);\nnavigator.world = world;\nnavigator.draw(model);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-adding-the-civil-plan-navigator",children:"\ud83d\ude97 Adding the civil plan navigator"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"We'll now add the civil plan navigator. The idea of this app is very simple: we will allow the user to click on the plan navigator to navigate across the 3D scene. So first we'll fetch the world-2d HTML element we added to this page (don't forget to check out the HTML file of this example):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const world2D = document.getElementById("scene-2d") as BUIC.World2D;\n'})}),"\n",(0,i.jsx)(n.p,{children:"And now we'll get a new instance of the civil plan navigator, assign it to the world-2d that we just fetched and draw the horizontal alignment on it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const planNavigator = components.get(OBCF.CivilPlanNavigator);\nworld2D.components = components;\nplanNavigator.world = world2D.world;\nawait planNavigator.draw(model);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-binding-navigators",children:"\ud83d\ude97\ud83d\ude95 Binding navigators"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Now we'll bind the elevation navigator with the 3D navigator. We'll use the highlight event for that. When the plan navigator is highlighted, the 3D navigator will be highlighted as well and the camera will travel to the selected point in 3D."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"planNavigator.onHighlight.add(({ mesh }) => {\n  navigator.highlighter.select(mesh);\n  const index = mesh.curve.index;\n  const curve3d = mesh.curve.alignment.absolute[index];\n  curve3d.mesh.geometry.computeBoundingSphere();\n  const sphere = curve3d.mesh.geometry.boundingSphere;\n  if (sphere) {\n    world.camera.controls.fitToSphere(sphere, true);\n  }\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["We'll use the ",(0,i.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,i.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"That's it! You have created an app that can generate the horizontal alignment any civil model and navigate through it smoothly. Congratulations!"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);