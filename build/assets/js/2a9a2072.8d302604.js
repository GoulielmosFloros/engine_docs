"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[1175],{3174:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=o(4848),s=o(8453);const i={},a=void 0,r={id:"Tutorials/Components/Core/BoundingBoxer",title:"BoundingBoxer",description:'window.open("https://thatopen.github.io/engine_components/examples/BoundingBoxer")} >Go Full Screen',source:"@site/docs/Tutorials/Components/Core/BoundingBoxer.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/BoundingBoxer",permalink:"/Tutorials/Components/Core/BoundingBoxer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BCFTopics",permalink:"/Tutorials/Components/Core/BCFTopics"},next:{title:"Classifier",permalink:"/Tutorials/Components/Core/Classifier"}},l={},d=[{value:"\ud83e\uddca Playing with boxes",id:"-playing-with-boxes",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\ud83c\udfb2 Creation of Bounding Boxes",id:"-creation-of-bounding-boxes",level:3},{value:"\ud83d\udc53 Reading the Bounding Box data",id:"-reading-the-bounding-box-data",level:4},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{style:{position:"relative"},children:[(0,t.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/BoundingBoxer"}),(0,t.jsx)("button",{class:"full-screen-btn",onClick:()=>window.open("https://thatopen.github.io/engine_components/examples/BoundingBoxer"),children:"Go Full Screen"})]}),"\n",(0,t.jsx)(n.admonition,{title:"Source",type:"info",children:(0,t.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,t.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/fragments/BoundingBoxer/example.ts",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"-playing-with-boxes",children:"\ud83e\uddca Playing with boxes"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, you'll learn to easily create the bounding boxes of a BIM model. This can be useful for knowing the overall position and dimension of your models, which can be used, for instance, to make the camera fit a whole BIM model in the screen."}),"\n",(0,t.jsx)(n.admonition,{title:"Bounding boxes?",type:"tip",children:(0,t.jsx)(n.p,{children:"Bounding boxes (AABB or Axis-Aligned Bounding Boxes) are the boxes aligned with the X, Y and Z axes of a 3D model that contain one or many objects. They are very common in 3D applications to make fast computations that require to know the whole dimension or position of one or many objects."})}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "@thatopen/components";\n'})}),"\n",(0,t.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,t.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"-loading-a-bim-model",children:"\ud83e\uddf3 Loading a BIM model"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file."}),"\n",(0,t.jsx)(n.admonition,{title:"Fragments?",type:"tip",children:(0,t.jsx)(n.p,{children:"If you are not familiar with fragments, check out the IfcLoader tutorial!"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const fragments = components.get(OBC.FragmentsManager);\nconst file = await fetch(\n  "https://thatopen.github.io/engine_components/resources/small.frag",\n);\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = fragments.load(buffer);\nworld.scene.three.add(model);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"-creation-of-bounding-boxes",children:"\ud83c\udfb2 Creation of Bounding Boxes"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Now that our setup is done, lets see how you can create the bounding boxes of the model.\nBIM models are complex, but don't worry: creating the ",(0,t.jsx)(n.a,{href:"https://threejs.org/docs/?q=bound#api/en/math/Box3",children:"bounding boxes"})," is a piece of cake thanks to the ",(0,t.jsx)(n.code,{children:"BoundingBoxer"}),".\ud83d\udcaa\nWe can add models to the computation of the bounding box simply by using the ",(0,t.jsx)(n.code,{children:"add()"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const fragmentBbox = components.get(OBC.BoundingBoxer);\nfragmentBbox.add(model);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"-reading-the-bounding-box-data",children:"\ud83d\udc53 Reading the Bounding Box data"}),"\n",(0,t.jsxs)(n.p,{children:["After adding the model, we can now read the mesh from bounding box using ",(0,t.jsx)(n.code,{children:"getMesh()"})," method."]}),"\n",(0,t.jsx)(n.admonition,{title:"Don't forget to clean up after using it! \ud83e\uddf9",type:"tip",children:(0,t.jsxs)(n.p,{children:["It's a good practice to reset the bounding box after using it with the ",(0,t.jsx)(n.code,{children:"reset()"})," method. Otherwise, if you add more models or meshes to the bounding boxer, the bounding box will compute a bounding box that includes everything (including the previously added models)."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const bbox = fragmentBbox.getMesh();\nfragmentBbox.reset();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["We'll use the ",(0,t.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,t.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["We will use the ",(0,t.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,t.jsx)(n.code,{children:"init"})," method of the ",(0,t.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now we will create a new panel with an input to make the camera fit the model to the screen. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n    <bim-panel active label="Bounding Boxes Tutorial" class="options-menu">\n      <bim-panel-section collapsed label="Controls">\n         \n        <bim-button \n          label="Fit BIM model" \n          @click="${() => {\n            world.camera.controls.fitToSphere(bbox, true);\n          }}">  \n        </bim-button>  \n\n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,t.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"That's it! You have created the bounding box of a BIM model and used it to make the camera fit the model to the screen. This also works with many models!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);