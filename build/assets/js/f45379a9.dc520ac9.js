"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l=void 0,m={unversionedId:"Tutorials/Components/Core/IfcGeometryTiler",id:"Tutorials/Components/Core/IfcGeometryTiler",title:"IfcGeometryTiler",description:"Copying and pasting? We got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/IfcGeometryTiler.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/IfcGeometryTiler",permalink:"/Tutorials/Components/Core/IfcGeometryTiler",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hider",permalink:"/Tutorials/Components/Core/Hider"},next:{title:"IfcLoader",permalink:"/Tutorials/Components/Core/IfcLoader"}},c={},p=[{value:"\ud83d\udcaa Let&#39;s go BIG",id:"-lets-go-big",level:2},{value:"\ud83e\udde9 Converting the IFC model to tiles",id:"-converting-the-ifc-model-to-tiles",level:3}],d={toc:p},u="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Source",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Copying and pasting? We got you covered! You can find the full source code of this tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/fragments/IfcGeometryTiler/example.ts"},"here"),".")),(0,a.kt)("h2",{id:"-lets-go-big"},"\ud83d\udcaa Let's go BIG"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Do you need to open huge big IFC files fast, even on more modest devices? If so, you are in luck! We can open virtually any model on any device in seconds thanks to BIM TILES!"),(0,a.kt)("admonition",{title:"BIM tiles?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The idea behind BIM tiles is pretty simple! Instead of loading the whole BIM model at once, we just load the explicit geometries that are seen by the user. It's way faster than opening the IFC directly, but for this you'll need a backend (or to rely on the file system of the user if you are building a desktop or mobile app).")),(0,a.kt)("p",null,"Let's see how to do this step by step!"),(0,a.kt)("h3",{id:"-converting-the-ifc-model-to-tiles"},"\ud83e\udde9 Converting the IFC model to tiles"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The first step is to transform the IFC model into BIM tiles. The reason why we have to do this is pretty simple: geometry in IFC is implicit (e.g. a wall is defined as an extrusion). This means that it needs to be computed and converted to explicit geometry (triangles) so that it can be displayed in 3D. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"As you know, IFC files contains two things: geometries and properties. We need to convert both things if we want to take full advantage of streaming!")),(0,a.kt)("p",null,"The way the streaming works is by fetching files based on the visible things in the viewer. Those files contain pieces of geometry information (geometry chunks) that the engine uses in order to create and display the geometry. But, where do we get those files from? Easy! From the IFC conversion to tiles. So, let's start converting the IFC geometry to tiles and getting those files so the streamer can do its job. In order to do it, we need the first component from the collection of streaming components: ",(0,a.kt)("inlineCode",{parentName:"p"},"FragmentIfcStreamConverter"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import Stats from "stats.js";\n// @ts-ignore\nimport * as dat from "three/examples/jsm/libs/lil-gui.module.min";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "openbim-components";\n\nconst container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\n// rendererComponent.postproduction.enabled = true;\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n// customEffects.excludedMeshes.push(grid.get());\n\n// rendererComponent.postproduction.enabled = true;\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FragmentIfcStreamConverter")," class takes IFC files and transform their geometry into tiles. "),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The converter doesn't give you the files needed to streaming right away, just the data that must be contained in those files. Is your job to create the files! Why? Because then you can have full control over when, where and how to create them.")),(0,a.kt)("p",null,"The first file we need is a JSON which is the entry point of the geometries streaming. That JSON must have the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// We need this wasm configuration later to convert properties\nconst wasm = {\n  path: "https://unpkg.com/web-ifc@0.0.53/",\n  absolute: true,\n};\n\nconst tiler = new OBC.IfcGeometryTiler(components);\ntiler.settings.wasm = wasm;\ntiler.settings.minGeometrySize = 20;\ntiler.settings.minAssetsSize = 1000;\n')),(0,a.kt)("p",null,"The second file is actually not just a single file, but X number of files (depends on how big is your model) that contains the required information to generate the geometry while streaming.\nIn order to create the JSON file and get the information with the geometry, the ",(0,a.kt)("inlineCode",{parentName:"p"},"FragmentIfcStreamConverter")," as well as other components in the collection of streaming components, emits events that let you get the processed data from the conversion process."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Nedless to say, you need to set up your event listeners before triggering the conversion!")),(0,a.kt)("p",null,"Let's start with the first event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// @ts-ignore\ninterface GeometriesStreaming {\n  assets: {\n    id: number;\n    geometries: {\n      color: number[];\n      geometryID: number;\n      transformation: number[];\n    }[];\n  }[];\n\n  geometries: {\n    [id: number]: {\n      boundingBox: { [id: number]: number };\n      hasHoles: boolean;\n      geometryFile: "url-to-geometry-file-in-your-backend";\n    };\n  };\n\n  globalDataFileId: "url-to-fragments-group-file-in-your-backend";\n}\n')),(0,a.kt)("p",null,'One of the most important things to keep in mind is that the event we just setup will get fired as many times as per the "chunk" data generated by the converted. Simply put, the event will get fired several times \u23f2 and per each time we will produce one file data that is stored in the ',(0,a.kt)("inlineCode",{parentName:"p"},"geometryFiles")," array. Later on, we will download the geometry files \u23ec."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"As you see, ",(0,a.kt)("inlineCode",{parentName:"p"},"geometriesData")," is not being stored as a file to be downloaded. The reason is because that is part of the information we need to create the entry JSON file \ud83d\ude80.")),(0,a.kt)("p",null,"Nice! Let's go with the second event that will give us more information to create the required files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let files: { name: string; bits: (Uint8Array | string)[] }[] = [];\n\nlet geometriesData: OBC.StreamedGeometries = {};\nlet geometryFilesCount = 1;\n\ntiler.onGeometryStreamed.add((geometry) => {\n  const { buffer, data } = geometry;\n  const bufferFileName = `small.ifc-processed-geometries-${geometryFilesCount}`;\n  for (const expressID in data) {\n    const value = data[expressID];\n    value.geometryFile = bufferFileName;\n    geometriesData[expressID] = value;\n  }\n  files.push({ name: bufferFileName, bits: [buffer] });\n  geometryFilesCount++;\n});\n")),(0,a.kt)("p",null,"This one is easier as the event doesn't produce binary data, but information we need to create the JSON file. "),(0,a.kt)("admonition",{title:"Are you familiar with That Open Engine?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you're familiar with That Open Engine, you should recall fragments. Fragments are just a fancy word we use to refer to ThreeJS geometry efficiently created from IFC files which are the things you end up see in the viewer... one IFC file is usually composed of many fragments and all of them are grouped in a FragmentsGroup, which is the final processed IFC model.")),(0,a.kt)("p",null,"Why do we remind you about FragmentsGroup? Because streaming also works with them! So yes, when you convert an IFC to tiles, the converter also creates a FragmentsGroup in the background, and that information is extremely important for the streamer in order to display the streamed file as everything gets grouped there. So, there is another event that gives you the FragmentsGroup binary data and we also need to create a file with that information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let assetsData: OBC.StreamedAsset[] = [];\n\ntiler.onAssetStreamed.add((assets) => {\n  assetsData = [...assetsData, ...assets];\n});\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"You can name the file whatever you want, but is ",(0,a.kt)("em",{parentName:"p"},"extremely important")," you finish the file name with ",(0,a.kt)("inlineCode",{parentName:"p"},"-global"),"!")),(0,a.kt)("p",null,"This is pretty much it! Now that we've setup the main listeners, the last thing is to download all the data once the conversion has fininshed. To do so, we can use the progress event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'tiler.onIfcLoaded.add((groupBuffer) => {\n  files.push({\n    name: "small.ifc-processed-global",\n    bits: [groupBuffer],\n  });\n});\n')),(0,a.kt)("p",null,"Great! Now that we have everything setup, is time to finally convert the IFC file. In order to trigger the conversion, we can just do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function downloadFile(name: string, ...bits: (Uint8Array | string)[]) {\n  const file = new File(bits, name);\n  const anchor = document.createElement("a");\n  const url = URL.createObjectURL(file);\n  anchor.href = url;\n  anchor.download = file.name;\n  anchor.click();\n  URL.revokeObjectURL(url);\n}\n\nasync function downloadFilesSequentially(\n  fileList: { name: string; bits: (Uint8Array | string)[] }[],\n) {\n  for (const { name, bits } of fileList) {\n    downloadFile(name, ...bits);\n    await new Promise((resolve) => {\n      setTimeout(resolve, 100);\n    });\n  }\n}\n\ntiler.onProgress.add((progress) => {\n  if (progress !== 1) return;\n  setTimeout(async () => {\n    const processedData = {\n      geometries: geometriesData,\n      assets: assetsData,\n      globalDataFileId: "small.ifc-processed-global",\n    };\n    files.push({\n      name: "small.ifc-processed.json",\n      bits: [JSON.stringify(processedData)],\n    });\n    await downloadFilesSequentially(files);\n    assetsData = [];\n    geometriesData = {};\n    files = [];\n    geometryFilesCount = 1;\n  });\n});\n')),(0,a.kt)("p",null,"If everything went as expected, you should now be seeing some files being downloaded from your app \ud83e\udd2f Do not get scary if they're a lot, as big models tend to have many files! All of that is the information the streaming uses in order to display the geometry in the most efficient way possible \ud83d\udcaa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function processFile() {\n  const fetchedIfc = await fetch("../../../../../resources/small.ifc");\n  const ifcBuffer = await fetchedIfc.arrayBuffer();\n  // We will need this information later to also convert the properties\n  const ifcArrayBuffer = new Uint8Array(ifcBuffer);\n  // This triggers the conversion, so the listeners start to be called\n  await tiler.streamFromBuffer(ifcArrayBuffer);\n}\n')),(0,a.kt)("iframe",{src:"https://thatopen.github.io/engine_components/examples/IfcGeometryTiler"}))}f.isMDXComponent=!0}}]);