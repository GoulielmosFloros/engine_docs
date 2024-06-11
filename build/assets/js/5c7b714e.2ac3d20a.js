"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[4221],{3182:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(4848),s=t(8453);const a={},r=void 0,i={id:"Tutorials/Components/Core/FragmentsManager",title:"FragmentsManager",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/FragmentsManager.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/FragmentsManager",permalink:"/Tutorials/Components/Core/FragmentsManager",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exploder",permalink:"/Tutorials/Components/Core/Exploder"},next:{title:"Grids",permalink:"/Tutorials/Components/Core/Grids"}},l={},d=[{value:"\ud83d\ude80 Handling BIM models like a boss",id:"-handling-bim-models-like-a-boss",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf6 Loading a fragments model",id:"-loading-a-fragments-model",level:3},{value:"\ud83d\udce4 Storing Fragments",id:"-storing-fragments",level:3},{value:"\ud83e\uddf9 Discard Fragment and Clean the Scene",id:"-discard-fragment-and-clean-the-scene",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/fragments/FragmentsManager/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-handling-bim-models-like-a-boss",children:"\ud83d\ude80 Handling BIM models like a boss"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["In this tutorial, you'll learn how to load your BIM models in Fragment format. Fragment is an ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_fragment/",children:"open source geometry system"})," that we created on top of ",(0,o.jsx)(n.a,{href:"https://threejs.org/",children:"Three.js"})," to display BIM models fast, while keeping control over the individual items of the model. The idea is simple: a BIM model is a FragmentsGroup, which is (like the name implies) a collection of fragments. A fragment is a set of identical geometries instantiated around the scene."]}),"\n",(0,o.jsx)(n.admonition,{title:"How do I get a BIM model in Fragment format?",type:"tip",children:(0,o.jsx)(n.p,{children:"The IfcLoader component does exactly that! It converts IFC models to Fragments. Check out that tutorial if you are starting out with IFC files. Of course, you can just use the IfcLoader in your app, but loading fragments is more than x10 faster than loading IFC files. Our recommendation is to convert your IFC files to fragments just once, store the fragment somewhere (frontent of backend) and then load the fragments instead of teh IFC models directly."})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Three.js"})," to get some 3D entities for our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import * as THREE from "three";\nimport Stats from "stats.js";\nimport * as OBC from "@thatopen/components";\nimport * as BUI from "@thatopen/ui";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-loading-a-fragments-model",children:"\ud83e\uddf6 Loading a fragments model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Let's begin by getting the FragmentsManager, which is the component to load, export, get and dispose Fragments in your app.\ud83c\udfed"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const fragments = components.get(OBC.FragmentsManager);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now we can load a fragment from a file. We will fetch the model data and use the ",(0,o.jsx)(n.code,{children:"load"})," method of the FragmentsManager to get the fragment object. Then, we'll add it to the scene of the current world. We will also create an UUID of the model to later get it somewhere else."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let uuid = "";\n\nasync function loadFragments() {\n  if (fragments.groups.size) {\n    return;\n  }\n  const file = await fetch(\n    "https://thatopen.github.io/engine_components/resources/small.frag",\n  );\n  const data = await file.arrayBuffer();\n  const buffer = new Uint8Array(data);\n  const group = fragments.load(buffer);\n  world.scene.three.add(group);\n  uuid = group.uuid;\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-storing-fragments",children:"\ud83d\udce4 Storing Fragments"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Let's see how you can export fragments as a file. First, we'll define a function to download a file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function download(file: File) {\n  const link = document.createElement("a");\n  link.href = URL.createObjectURL(file);\n  link.download = file.name;\n  document.body.appendChild(link);\n  link.click();\n  link.remove();\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Fragments Manager"})," can export fragments using the ",(0,o.jsx)(n.code,{children:"export"})," method. The method takes the UUID of a fragment as an argument and returns a ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob",children:"Blob"})}),", which can be used to generate a File and then download it using the function defined just before.\u2197\ufe0f"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function exportFragments() {\n  if (!fragments.groups.size) {\n    return;\n  }\n  const group = fragments.groups.get(uuid);\n  if (!group) {\n    return;\n  }\n  const data = fragments.export(group);\n  const blob = new Blob([data]);\n  const file = new File([blob], "small.frag");\n  download(file);\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-discard-fragment-and-clean-the-scene",children:"\ud83e\uddf9 Discard Fragment and Clean the Scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:['When your user "closes" one or many BIM models, you\'ll need to discard that FragmetsGroup. You can dispose a specific FragmentsGroup using the ',(0,o.jsx)(n.code,{children:"disposeGroup"})," method, or dispose all FragmentsGroups using the ",(0,o.jsx)(n.code,{children:"dispose"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function disposeFragments() {\n  fragments.dispose();\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We will use the ",(0,o.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,o.jsx)(n.code,{children:"init"})," method of the ",(0,o.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we will create a simple panel with a set of buttons that call the previously defined functions. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n    <bim-panel active label="Fragments Manager Tutorial" class="options-menu">\n      <bim-panel-section collapsed label="Controls">\n      \n        <bim-button \n          label="Load fragments" \n          @click="${() => {\n            loadFragments();\n          }}">\n        </bim-button>\n        \n        <bim-button \n          label="Dispose fragments" \n          @click="${() => {\n            disposeFragments();\n          }}">\n        </bim-button>\n        \n        <bim-button \n          label="Export fragments" \n          @click="${() => {\n            exportFragments();\n          }}">\n        </bim-button>\n        \n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,o.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! Now you know how to load, export and dispose Fragments in your app. Fragments are much faster than raw IFC models, so you should definitely store them in your app if you want your users to have a fast loading experience. For bigger models you can use streaming, but that's another tutorial!"}),"\n",(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/FragmentsManager"})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(6540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);