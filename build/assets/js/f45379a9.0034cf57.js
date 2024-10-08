"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[3991],{4536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const i={},r=void 0,a={id:"Tutorials/Components/Core/IfcGeometryTiler",title:"IfcGeometryTiler",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/IfcGeometryTiler.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/IfcGeometryTiler",permalink:"/Tutorials/Components/Core/IfcGeometryTiler",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcFinder",permalink:"/Tutorials/Components/Core/IfcFinder"},next:{title:"IfcJsonExporter",permalink:"/Tutorials/Components/Core/IfcJsonExporter"}},l={},c=[{value:"\ud83e\udde9 Tiling BIM geometry",id:"-tiling-bim-geometry",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\ud83d\udd2a Getting the geometry tiler",id:"-getting-the-geometry-tiler",level:3},{value:"\ud83d\udcc5 Setting up the events",id:"-setting-up-the-events",level:3},{value:"\u2198\ufe0f Downloading the tiles",id:"\ufe0f-downloading-the-tiles",level:3},{value:"\ud83d\udd25 Generating the tiles",id:"-generating-the-tiles",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/IfcGeometryTiler"}),"\n",(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/fragments/IfcGeometryTiler/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-tiling-bim-geometry",children:"\ud83e\udde9 Tiling BIM geometry"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Opening big BIM models is hard because of 2 reasons: they have a lot of data and the geometry has to be computed to implicit (e.g. extrusion) to explicit (triangles). Our library allows to tile IFC files, solving both problems. This allows to open quite big IFC models in seconds and consuming minimal resources by just opening the parts of the model that are visible to the user. In this tutorial you'll learn to convert the geometry of an IFC model into tiles."}),"\n",(0,o.jsx)(n.admonition,{title:"Tiles?",type:"tip",children:(0,o.jsx)(n.p,{children:"Tiles are very simple. We just take a bunch of geometries within the IFC file, convert them into triangles and store them in a binary file. These files are then loaded as a stream into the scen as the user moves around and discovers them."})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"web-ifc"})," to get some IFC items."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "@thatopen/components";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-loading-a-bim-model",children:"\ud83e\uddf3 Loading a BIM model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file."}),"\n",(0,o.jsx)(n.admonition,{title:"Fragments?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with fragments, check out the IfcLoader tutorial!"})}),"\n",(0,o.jsx)(n.p,{children:"This is not compulsory, as the data will come from an .ifc file, not from fragments. But at least we'll see the model whose geometry we will be converting to tiles!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const fragments = new OBC.FragmentsManager(components);\nconst fragFile = await fetch(\n  "https://thatopen.github.io/engine_components/resources/small.frag",\n);\nconst fragData = await fragFile.arrayBuffer();\nconst fragBuffer = new Uint8Array(fragData);\nconst model = fragments.load(fragBuffer);\nworld.scene.three.add(model);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-getting-the-geometry-tiler",children:"\ud83d\udd2a Getting the geometry tiler"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"The way the streaming works is by fetching files based on the visible things in the viewer. Those files contain pieces of geometry information (geometry chunks) that the engine uses in order to create and display the geometry. But, where do we get those files from? Easy! From the IFC conversion to tiles. So the first step is to transform the IFC model into BIM tiles."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"As you know, IFC files contains two things: geometries and properties. We need to convert both things if we want to take full advantage of streaming! For tiling properties, check out the Property Tiling tutorial."})}),"\n",(0,o.jsx)(n.p,{children:"So, let's start converting the IFC geometry to tiles and getting those files so the streamer can do its job:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const tiler = components.get(OBC.IfcGeometryTiler);\n\nconst wasm = {\n  path: "https://unpkg.com/web-ifc@0.0.57/",\n  absolute: true,\n};\n\ntiler.settings.wasm = wasm;\ntiler.settings.minGeometrySize = 20;\ntiler.settings.minAssetsSize = 1000;\n'})}),"\n",(0,o.jsx)(n.p,{children:"This component takes IFC files and transform their geometry into tiles."}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"The converter doesn't give you the files needed to streaming right away, just the data that must be contained in those files. Is your job to create the files! Why? Because then you can have full control over when, where and how to create them."})}),"\n",(0,o.jsx)(n.p,{children:"The first file we need is a JSON which is the entry point of the geometries streaming. That JSON must have the following structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'interface GeometriesStreaming {\n  assets: {\n    id: number;\n    geometries: {\n      color: number[];\n      geometryID: number;\n      transformation: number[];\n    }[];\n  }[];\n\n  geometries: {\n    [id: number]: {\n      boundingBox: { [id: number]: number };\n      hasHoles: boolean;\n      geometryFile: "url-to-geometry-file-in-your-backend";\n    };\n  };\n\n  globalDataFileId: "url-to-fragments-group-file-in-your-backend";\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-the-events",children:"\ud83d\udcc5 Setting up the events"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"The second file is actually not just a single file, but X number of files (depends on how big is your model) that contains the required information to generate the geometry while streaming.\nIn order to create the JSON file and get the information with the geometry, these components, emits events that let you get the processed data from the conversion process."}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsx)(n.p,{children:"Nedless to say, you need to set up your event listeners before triggering the conversion!"})}),"\n",(0,o.jsx)(n.p,{children:"Let's start with the first event:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"let files: { name: string; bits: (Uint8Array | string)[] }[] = [];\nlet geometriesData: OBC.StreamedGeometries = {};\nlet geometryFilesCount = 1;\n\ntiler.onGeometryStreamed.add((geometry) => {\n  const { buffer, data } = geometry;\n  const bufferFileName = `small.ifc-processed-geometries-${geometryFilesCount}`;\n  for (const expressID in data) {\n    const value = data[expressID];\n    value.geometryFile = bufferFileName;\n    geometriesData[expressID] = value;\n  }\n  files.push({ name: bufferFileName, bits: [buffer] });\n  geometryFilesCount++;\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:['One of the most important things to keep in mind is that the event we just setup will get fired as many times as per the "chunk" data generated by the converted. Simply put, the event will get fired several times \u23f2 and per each time we will produce one file data that is stored in the ',(0,o.jsx)(n.code,{children:"geometryFiles"})," array. Later on, we will download the geometry files \u23ec."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["As you see, ",(0,o.jsx)(n.code,{children:"geometriesData"})," is not being stored as a file to be downloaded. The reason is because that is part of the information we need to create the entry JSON file \ud83d\ude80."]})}),"\n",(0,o.jsx)(n.p,{children:"Nice! Let's go with the second event that will give us more information to create the required files:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"let assetsData: OBC.StreamedAsset[] = [];\n\ntiler.onAssetStreamed.add((assets) => {\n  assetsData = [...assetsData, ...assets];\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"This one is easier as the event doesn't produce binary data, but information we need to create the JSON file."}),"\n",(0,o.jsx)(n.admonition,{title:"Are you familiar with Fragments?",type:"note",children:(0,o.jsx)(n.p,{children:"If you're familiar with That Open Engine (our libraries), you should recall fragments. Fragments are just a fancy word we use to refer to ThreeJS geometry efficiently created from IFC files which are the things you end up see in the viewer... one IFC file is usually composed of many fragments and all of them are grouped in a FragmentsGroup, which is the final processed IFC model."})}),"\n",(0,o.jsx)(n.p,{children:"Why do we remind you about FragmentsGroup? Because streaming also works with them! So yes, when you convert an IFC to tiles, the converter also creates a FragmentsGroup in the background, and that information is extremely important for the streamer in order to display the streamed file as everything gets grouped there. So, there is another event that gives you the FragmentsGroup binary data and we also need to create a file with that information."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'tiler.onIfcLoaded.add((groupBuffer) => {\n  files.push({\n    name: "small.ifc-processed-global",\n    bits: [groupBuffer],\n  });\n});\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["You can name the file whatever you want, but is ",(0,o.jsx)(n.em,{children:"extremely important"})," you finish the file name with ",(0,o.jsx)(n.code,{children:"-global"}),"!"]})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-downloading-the-tiles",children:"\u2198\ufe0f Downloading the tiles"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now that we've setup the main listeners, the last thing is to download all the data once the conversion has fininshed. To do so, we can use the progress event:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function downloadFile(name: string, ...bits: (Uint8Array | string)[]) {\n  const file = new File(bits, name);\n  const anchor = document.createElement("a");\n  const url = URL.createObjectURL(file);\n  anchor.href = url;\n  anchor.download = file.name;\n  anchor.click();\n  URL.revokeObjectURL(url);\n}\n\nasync function downloadFilesSequentially(\n  fileList: { name: string; bits: (Uint8Array | string)[] }[],\n) {\n  for (const { name, bits } of fileList) {\n    downloadFile(name, ...bits);\n    await new Promise((resolve) => {\n      setTimeout(resolve, 100);\n    });\n  }\n}\n\ntiler.onProgress.add((progress) => {\n  if (progress !== 1) return;\n  setTimeout(async () => {\n    const processedData = {\n      geometries: geometriesData,\n      assets: assetsData,\n      globalDataFileId: "small.ifc-processed-global",\n    };\n    files.push({\n      name: "small.ifc-processed.json",\n      bits: [JSON.stringify(processedData)],\n    });\n    await downloadFilesSequentially(files);\n    assetsData = [];\n    geometriesData = {};\n    files = [];\n    geometryFilesCount = 1;\n  });\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-generating-the-tiles",children:"\ud83d\udd25 Generating the tiles"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Great! Now that we have everything setup, is time to finally convert the IFC file. In order to trigger the conversion, we can just do the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'async function processFile() {\n  const fetchedIfc = await fetch(\n    "https://thatopen.github.io/engine_components/resources/small.ifc",\n  );\n  const ifcBuffer = await fetchedIfc.arrayBuffer();\n  // We will need this information later to also convert the properties\n  const ifcArrayBuffer = new Uint8Array(ifcBuffer);\n  // This triggers the conversion, so the listeners start to be called\n  await tiler.streamFromBuffer(ifcArrayBuffer);\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"If everything went as expected, you should now be seeing some files being downloaded from your app \ud83e\udd2f Do not get scary if they're a lot, as big models tend to have many files! All of that is the information the streaming uses in order to display the geometry in the most efficient way possible \ud83d\udcaa"}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We will use the ",(0,o.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,o.jsx)(n.code,{children:"init"})," method of the ",(0,o.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we will add some UI to generate and download the tiles to our computer. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n    <bim-panel active label="Geometry tiles Tutorial" class="options-menu">\n      <bim-panel-section collapsed label="Controls">\n      \n        <bim-button label="Load IFC"\n          @click="${() => {\n            processFile();\n          }}">\n        </bim-button>  \n      \n      </bim-panel-section>\n      \n    </bim-panel>\n  `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,o.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have created an app that can generate the geometry BIM tiles for an IFC and download them to your computer. Now you have the power to process big IFC files! Don't forget to check out the IFC property tiler tutorial. To consume these tiles, check out the IFC streamer tutorial."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);