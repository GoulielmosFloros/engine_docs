"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[2890],{4837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(4848),a=n(8453);const s={},i=void 0,r={id:"Tutorials/Components/Core/IfcIsolator",title:"IfcIsolator",description:'window.open("https://thatopen.github.io/engine_components/examples/IfcIsolator")} >Go Full Screen',source:"@site/docs/Tutorials/Components/Core/IfcIsolator.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/IfcIsolator",permalink:"/Tutorials/Components/Core/IfcIsolator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcGeometryTiler",permalink:"/Tutorials/Components/Core/IfcGeometryTiler"},next:{title:"IfcJsonExporter",permalink:"/Tutorials/Components/Core/IfcJsonExporter"}},l={},c=[{value:"\ud83d\udcb1 From IFC to JSON",id:"-from-ifc-to-json",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83d\ude97\ud83c\udfce\ufe0f Getting IFC and fragments",id:"\ufe0f-getting-ifc-and-fragments",level:3},{value:"\ud83d\udd2d\ud83d\udd27 Calibrating the converter",id:"-calibrating-the-converter",level:3},{value:"\ud83d\ude97\ud83d\udd25 Loading the IFC",id:"-loading-the-ifc",level:3},{value:"\ud83e\uddf0 Getting the necessary tools",id:"-getting-the-necessary-tools",level:3},{value:"\u2198\ufe0f Loading the IFC data",id:"\ufe0f-loading-the-ifc-data",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/IfcIsolator"}),(0,o.jsx)("button",{class:"full-screen-btn",onClick:()=>window.open("https://thatopen.github.io/engine_components/examples/IfcIsolator"),children:"Go Full Screen"})]}),"\n",(0,o.jsx)(t.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(t.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(t.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/ifc/IfcIsolator/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(t.h3,{id:"-from-ifc-to-json",children:"\ud83d\udcb1 From IFC to JSON"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"IFC is great, but it's not always easy to handle for developers. JSON, on the other hand, is one of the most common formats in the programming world for exchanging data easily. In thit tutorial, you'll learn to convert an IFC file to JSON."}),"\n",(0,o.jsx)(t.admonition,{title:"Is JSON better?",type:"tip",children:(0,o.jsx)(t.p,{children:"It's not better or worse, it's just different. In fact, IFC is a schema, not a format, so you can't compare both. What you can compare is the STEP format (what you usually as .ifc file) and JSON. The first format is better if you want to move data among different BIM apps, whereas the second is more convenient to move data programmatically (e.g. from the backend to the frontend of your app)."})}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"web-ifc"})," to get some IFC items."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as BUI from "@thatopen/ui";\nimport * as WEBIFC from "web-ifc";\nimport * as OBC from "@thatopen/components";\n'})}),"\n",(0,o.jsx)(t.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n\tOBC.SimpleScene,\n\tOBC.SimpleCamera,\n\tOBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(t.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(t.h3,{id:"\ufe0f-getting-ifc-and-fragments",children:"\ud83d\ude97\ud83c\udfce\ufe0f Getting IFC and fragments"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["When we read an IFC file, we convert it to a geometry called Fragments. Fragments are a lightweight representation of geometry built on top of THREE.js ",(0,o.jsx)(t.code,{children:"InstancedMesh"})," to make it easy to work with BIM data efficiently. All the BIM geometry you see in our libraries are Fragments, and they are great: they are lightweight, they are fast and we have tons of tools to work with them. But fragments are not used outside our libraries. So how can we convert an IFC file to fragments? Let's check out how:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const fragmentIfcLoader = components.get(OBC.IfcLoader);\n"})}),"\n",(0,o.jsx)(t.admonition,{title:"Why not just IFC?",type:"info",children:(0,o.jsx)(t.p,{children:"IFC is nice because it lets us exchange data with many tools in the AECO industry. But your graphics card doesn't understand IFC. It only understands one thing: triangles. So we must convert IFC to triangles. There are many ways to do it, some more efficient than others. And that's exactly what Fragments are: a very efficient way to display the triangles coming from IFC files."})}),"\n",(0,o.jsx)(t.p,{children:"Once Fragments have been generated, you can export them and then load them back directly, without needing the original IFC file. Why would you do that? Well, because fragments can load +10 times faster than IFC. And the reason is very simple.\t When reading an IFC, we must parse the file, read the implicit geometry, convert it to triangles (Fragments) and send it to the GPU. When reading fragments, we just take the triangles and send them, so it's super fast."}),"\n",(0,o.jsx)(t.admonition,{title:"How to use Fragments?",type:"danger",children:(0,o.jsx)(t.p,{children:"If you want to find out more about Fragments, check out the Fragments Manager tutorial."})}),"\n",(0,o.jsx)(t.h3,{id:"-calibrating-the-converter",children:"\ud83d\udd2d\ud83d\udd27 Calibrating the converter"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["Now, we need to configure the path of the WASM files. What's WASM? It's a technology that lets us run C++ on the browser, which means that we can load IFCs super fast! These files are the compilation of our ",(0,o.jsx)(t.code,{children:"web-ifc"})," library. You can find them in the github repo and in NPM. These files need to be available to our app, so you have 2 options:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Download them and serve them statically."}),"\n",(0,o.jsx)(t.li,{children:"Get them from a remote server.\nThe easiest way is getting them from unpkg, and the cool thing is that you don't need to do it manually! It can be done directly by the tool just by writing the following:"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"await fragmentIfcLoader.setup();\n"})}),"\n",(0,o.jsxs)(t.p,{children:["We can further configure the conversion using the ",(0,o.jsx)(t.code,{children:"webIfc"})," object. In this example, we will make the IFC model go to the origin of the scene (don't worry, this supports model federation):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;\n"})}),"\n",(0,o.jsx)(t.h3,{id:"-loading-the-ifc",children:"\ud83d\ude97\ud83d\udd25 Loading the IFC"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"Next, let's define a function to load the IFC programmatically. We have hardcoded the path to one of our IFC files, but feel free to do this with any of your own files!"}),"\n",(0,o.jsx)(t.admonition,{title:"Opening local IFCs",type:"info",children:(0,o.jsx)(t.p,{children:"Keep in mind that the browser can't access the file of your computer directly, so you will need to use the Open File API to open local files."})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'async function loadIfc() {\n\tconst file = await fetch(\n\t\t"https://thatopen.github.io/engine_components/resources/small.ifc",\n\t);\n\tconst data = await file.arrayBuffer();\n\tconst buffer = new Uint8Array(data);\n\tconst model = await fragmentIfcLoader.load(buffer);\n\tmodel.name = "example";\n\tworld.scene.three.add(model);\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"-getting-the-necessary-tools",children:"\ud83e\uddf0 Getting the necessary tools"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["To convert IFC to JSON we need 2 things: ",(0,o.jsx)(t.code,{children:"web-ifc"})," an the JSON exporter. The former is a component of this library, so we'll get it using the ",(0,o.jsx)(t.code,{children:"get"})," method of the ",(0,o.jsx)(t.code,{children:"components"})," instance. Next, we will create a new instance of web-ifc, which is the core of our libraries. This library can parse, read, edit and write IFC files very efficiently thanks to WebAssembly (WASM)."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const isolator = components.get(OBC.IfcIsolator);\n\nconst webIfc = new WEBIFC.IfcAPI();\nwebIfc.SetWasmPath("https://unpkg.com/web-ifc@0.0.57/", true);\nawait webIfc.Init();\n'})}),"\n",(0,o.jsx)(t.h3,{id:"\ufe0f-loading-the-ifc-data",children:"\u2198\ufe0f Loading the IFC data"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"Now we can load the IFC file data using web-ifc. This can be done in a bunch of lines:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const ifcFile = await fetch(\n\t"https://thatopen.github.io/engine_components/resources/small.ifc",\n);\nconst ifcData = await ifcFile.arrayBuffer();\n'})}),"\n",(0,o.jsx)(t.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["We'll use the ",(0,o.jsx)(t.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(t.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["We will use the ",(0,o.jsx)(t.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,o.jsx)(t.code,{children:"init"})," method of the ",(0,o.jsx)(t.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now we will add some UI to export the loaded IFC file to JSON. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n\treturn BUI.html`\n\t<bim-panel active label="IFC Isolator Tutorial" class="options-menu">\n\t <bim-panel-section collapsed label="Controls">\n\t\t\t<bim-panel-section style="padding-top: 10px;">\n\t\t\t\t<bim-button label="Load IFC"\n\t\t\t\t\t@click="${() => {\n\t\t\t\t\t\tloadIfc();\n\t\t\t\t\t}}">\n\t\t\t\t</bim-button>\n\n\t\t\t\t<bim-button \n\t\t\t\t\tlabel="Isolate Elements and Export to IFC" \n\t\t\t\t\t@click="${async () => {\n\t\t\t\t\t\tconst data = await isolator.splitIfc(webIfc, ifcData, [6518]);\n\t\t\t\t\t\tconst file = new File([new Blob([data])], "isolated.ifc");\n\t\t\t\t\t\tconst url = URL.createObjectURL(file);\n\t\t\t\t\t\tconst link = document.createElement("a");\n\t\t\t\t\t\tlink.download = "isolated.ifc";\n\t\t\t\t\t\tlink.href = url;\n\t\t\t\t\t\tlink.click();\n\t\t\t\t\t\tURL.revokeObjectURL(url);\n\t\t\t\t\t\tlink.remove();\n\t\t\t\t\t}}">\t\n\t\t\t\t</bim-button>\t\n\n\t\t\t</bim-panel-section>\n\t\t</bim-panel>\n\t\t`;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,o.jsx)(t.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n\treturn BUI.html`\n\t\t\t<bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n\t\t\t\t@click="${() => {\n\t\t\t\t\tif (panel.classList.contains("options-menu-visible")) {\n\t\t\t\t\t\tpanel.classList.remove("options-menu-visible");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tpanel.classList.add("options-menu-visible");\n\t\t\t\t\t}\n\t\t\t\t}}">\n\t\t\t</bim-button>\n\t\t`;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,o.jsx)(t.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"That's it! You have created an app that can load IFC files and convert them to JSON! Now you can easily extract data from IFC files and move them around in your systems, regardless of the technology that you use in your stack. For bigger IFC files, exporting all the properties to a single JSON might not be feasible. In those cases, check out the properties tiler tutorial!"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(6540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);