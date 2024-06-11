"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[9232],{2978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const l={},i=void 0,a={id:"Tutorials/Components/Front/Plans",title:"Plans",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/Plans.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/Plans",permalink:"/Tutorials/Components/Front/Plans",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Marker",permalink:"/Tutorials/Components/Front/Marker"},next:{title:"PostproductionRenderer",permalink:"/Tutorials/Components/Front/PostproductionRenderer"}},r={},c=[{value:"\ud83d\udcd0 Navigating floorplans",id:"-navigating-floorplans",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83d\uddbc\ufe0f Getting the plans",id:"\ufe0f-getting-the-plans",level:3},{value:"\ud83d\udd26 Setting up highlighting",id:"-setting-up-highlighting",level:3},{value:"\ud83d\udc08\u200d\u2b1b Setting up culling",id:"-setting-up-culling",level:3},{value:"\ud83d\udd8c\ufe0f Defining styles",id:"\ufe0f-defining-styles",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/fragments/Plans/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-navigating-floorplans",children:"\ud83d\udcd0 Navigating floorplans"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Floorplans are one of the most common ways of navigating BIM models, as they have been the most commonly used document before the digital era. In this tutorial, you'll learn how to do it with our libraries."}),"\n",(0,o.jsx)(n.admonition,{title:"Floorplans?",type:"tip",children:(0,o.jsx)(n.p,{children:"Even though the BIM model defines the building perfectly, architects and engineers are still used to the clipped 2D representation that we have used for decades."})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"three"})," to create some 3D items."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import * as THREE from "three";\nimport * as OBC from "@thatopen/components";\nimport * as OBCF from "@thatopen/components-front";\nimport * as BUI from "@thatopen/ui";\nimport Stats from "stats.js";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial. Notice how we use the PostproductionRenderer in this case."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.OrthoPerspectiveCamera,\n  OBCF.PostproductionRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBCF.PostproductionRenderer(components, container);\nworld.camera = new OBC.OrthoPerspectiveCamera(components);\n\n// @ts-ignore\nworld.camera._aaaaa = "heyyyy";\n\nworld.renderer.postproduction.enabled = true;\nworld.renderer.postproduction.customEffects.outlineEnabled = true;\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.config.color.setHex(0x666666);\nconst grid = grids.create(world);\ngrid.three.position.y -= 1;\nworld.renderer.postproduction.customEffects.excludedMeshes.push(grid.three);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-loading-a-bim-model",children:"\ud83e\uddf3 Loading a BIM model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file."}),"\n",(0,o.jsx)(n.admonition,{title:"Fragments?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with fragments, check out the IfcLoader tutorial!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const fragments = components.get(OBC.FragmentsManager);\nconst file = await fetch(\n  "https://thatopen.github.io/engine_components/resources/small.frag",\n);\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = fragments.load(buffer);\nworld.scene.three.add(model);\n\nconst propsFile = await fetch(\n  "https://thatopen.github.io/engine_components/resources/small.json",\n);\nconst propsData = await propsFile.json();\nmodel.setLocalProperties(propsData);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-getting-the-plans",children:"\ud83d\uddbc\ufe0f Getting the plans"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now, we will get an instance of the plans component and automatically generate the all the floor plans of the BIM model we just loaded."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const plans = components.get(OBCF.Plans);\nplans.world = world;\nawait plans.generate(model);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-highlighting",children:"\ud83d\udd26 Setting up highlighting"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now, let's set up highlighting so that the user can hover and select items on the BIM model."}),"\n",(0,o.jsx)(n.admonition,{title:"Highlighter?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with highlighter, check out its specific tutorial!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const highlighter = components.get(OBCF.Highlighter);\nhighlighter.setup({ world });\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-culling",children:"\ud83d\udc08\u200d\u2b1b Setting up culling"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now, let's set up culling so that our scene becomes even more efficient."}),"\n",(0,o.jsx)(n.admonition,{title:"Culling?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with culling, check out its specific tutorial!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const cullers = components.get(OBC.Cullers);\nconst culler = cullers.create(world);\nfor (const fragment of model.items) {\n  culler.add(fragment.mesh);\n}\n\nculler.needsUpdate = true;\n\nworld.camera.controls.addEventListener("sleep", () => {\n  culler.needsUpdate = true;\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-defining-styles",children:"\ud83d\udd8c\ufe0f Defining styles"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Next, we need to define how we want the floorplans to look like. For that, we'll need to create a bunch of clipping styles, so that the walls and slabs have a thick section line and a filling, whereas the doors and windows have a thin section line. Of course, we also need to classifier to split the model to categories."}),"\n",(0,o.jsx)(n.admonition,{title:"Clipping? Classifier?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with the edges clipper or the classifier, check out that tutorial for more details about it!"})}),"\n",(0,o.jsx)(n.p,{children:"So let's create both:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const classifier = components.get(OBC.Classifier);\nconst edges = components.get(OBCF.ClipEdges);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we will classify the model by model (to get all entities) and by entity (to split it by IFC category). Then we'll create some groups:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"All the items in this model."}),"\n",(0,o.jsx)(n.li,{children:"All the walls in this model."}),"\n",(0,o.jsx)(n.li,{children:"All the doors, windows, plates and members in this model."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'classifier.byModel(model.uuid, model);\nclassifier.byEntity(model);\n\nconst modelItems = classifier.find({ models: [model.uuid] });\n\nconst thickItems = classifier.find({\n  entities: ["IFCWALLSTANDARDCASE", "IFCWALL"],\n});\n\nconst thinItems = classifier.find({\n  entities: ["IFCDOOR", "IFCWINDOW", "IFCPLATE", "IFCMEMBER"],\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:'Awesome! Now, to create a style called "thick" for the walls, we can do the following:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const grayFill = new THREE.MeshBasicMaterial({ color: "gray", side: 2 });\nconst blackLine = new THREE.LineBasicMaterial({ color: "black" });\nconst blackOutline = new THREE.MeshBasicMaterial({\n  color: "black",\n  opacity: 0.5,\n  side: 2,\n  transparent: true,\n});\n\nedges.styles.create(\n  "thick",\n  new Set(),\n  world,\n  blackLine,\n  grayFill,\n  blackOutline,\n);\n\nfor (const fragID in thickItems) {\n  const foundFrag = fragments.list.get(fragID);\n  if (!foundFrag) continue;\n  const { mesh } = foundFrag;\n  edges.styles.list.thick.fragments[fragID] = new Set(thickItems[fragID]);\n  edges.styles.list.thick.meshes.add(mesh);\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:'Creating a style called "thin" for the rest follows the same pattern:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'edges.styles.create("thin", new Set(), world);\n\nfor (const fragID in thinItems) {\n  const foundFrag = fragments.list.get(fragID);\n  if (!foundFrag) continue;\n  const { mesh } = foundFrag;\n  edges.styles.list.thin.fragments[fragID] = new Set(thinItems[fragID]);\n  edges.styles.list.thin.meshes.add(mesh);\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Finally, let's update the edges to apply these changes."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"await edges.update(true);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We will use the ",(0,o.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,o.jsx)(n.code,{children:"init"})," method of the ",(0,o.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we will add some UI to control the navigation across floor plans. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n  <bim-panel active label="Plans Tutorial" class="options-menu">\n      <bim-panel-section collapsed name="floorPlans" label="Plan list">\n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,o.jsx)(n.p,{children:'Next, we will add a button for each floor plan, so that when clicking on that button, we navigate to it and the look of the model becomes more "floorplan-like" (black and white with outlines):'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const minGloss = world.renderer!.postproduction.customEffects.minGloss;\n\nconst whiteColor = new THREE.Color("white");\n\nconst panelSection = panel.querySelector(\n  "bim-panel-section[name=\'floorPlans\']",\n) as BUI.PanelSection;\n\nfor (const plan of plans.list) {\n  const planButton = BUI.Component.create<BUI.Checkbox>(() => {\n    return BUI.html`\n      <bim-button checked label="${plan.name}"\n        @click="${() => {\n          world.renderer!.postproduction.customEffects.minGloss = 0.1;\n          highlighter.backupColor = whiteColor;\n          classifier.setColor(modelItems, whiteColor);\n          world.scene.three.background = whiteColor;\n          plans.goTo(plan.id);\n        }}">\n      </bim-button>\n    `;\n  });\n  panelSection.append(planButton);\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Finally, we will add a last button to exit the floor plan mode, going back to the 3D view and making the appearance of the scene go back to normal."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const defaultBackground = world.scene.three.background;\n\nconst exitButton = BUI.Component.create<BUI.Checkbox>(() => {\n  return BUI.html`\n      <bim-button checked label="Exit"\n        @click="${() => {\n          highlighter.backupColor = null;\n          world.renderer!.postproduction.customEffects.minGloss = minGloss;\n          classifier.resetColor(modelItems);\n          world.scene.three.background = defaultBackground;\n          plans.exitPlanView();\n        }}">\n      </bim-button>\n    `;\n});\n\npanelSection.append(exitButton);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have created an app that can generate all the floorplans of a BIM model and navigate across them in 2D mode with a nice black and white look. Congratulations!"}),"\n",(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/Plans"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},l=o.createContext(s);function i(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);