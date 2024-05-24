"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[835],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],a={},l=void 0,p={unversionedId:"Tutorials/Components/Core/IfcPropertiesTiler",id:"Tutorials/Components/Core/IfcPropertiesTiler",title:"IfcPropertiesTiler",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/IfcPropertiesTiler.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/IfcPropertiesTiler",permalink:"/Tutorials/Components/Core/IfcPropertiesTiler",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcLoader",permalink:"/Tutorials/Components/Core/IfcLoader"},next:{title:"IfcRelationsIndexer",permalink:"/Tutorials/Components/Core/IfcRelationsIndexer"}},c={},m=[{value:"\ud83d\udccb Streaming the properties",id:"-streaming-the-properties",level:3}],u={toc:m},d="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Source",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/fragments/IfcPropertiesTiler/example.ts"},"here"),".")),(0,s.kt)("h3",{id:"-streaming-the-properties"},"\ud83d\udccb Streaming the properties"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"You can also stream the properties of an IFC file. Why? Because some files can have\nmillions of properties, and trying to save them naively in a normal DB is not very\nscalable/affordable. Using this system, you'll be able to store and retrieve the\ndata of models of any size without big cloud costs. We can do this conversion\nusing the ",(0,s.kt)("inlineCode",{parentName:"p"},"FragmentPropsStreamConverter"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import Stats from "stats.js";\n// @ts-ignore\nimport * as dat from "three/examples/jsm/libs/lil-gui.module.min";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "openbim-components";\n\nconst container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\n// rendererComponent.postproduction.enabled = true;\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n// customEffects.excludedMeshes.push(grid.get());\n\nfunction downloadFile(name: string, bits: Blob) {\n  const file = new File([bits], name);\n  const anchor = document.createElement("a");\n  const url = URL.createObjectURL(file);\n  anchor.href = url;\n  anchor.download = file.name;\n  anchor.click();\n  URL.revokeObjectURL(url);\n}\n\nasync function downloadFilesSequentially(\n  fileList: { name: string; bits: Blob }[],\n) {\n  for (const { name, bits } of fileList) {\n    downloadFile(name, bits);\n    await new Promise((resolve) => {\n      setTimeout(resolve, 100);\n    });\n  }\n}\n\n// rendererComponent.postproduction.enabled = true;\n')),(0,s.kt)("p",null,"We need to generate properties JSON with the following structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const propsStreamer = new OBC.IfcPropertiesTiler(components);\n\npropsStreamer.settings.wasm = {\n  path: "https://unpkg.com/web-ifc@0.0.53/",\n  absolute: true,\n};\n')),(0,s.kt)("p",null,"Similarly to geometries, here you will also get data and progress notification\nusing events. In addition to properties, you will get ",(0,s.kt)("inlineCode",{parentName:"p"},"indices"),", which is an\nindexation data of the properties to be able to use them effectively when\nstreamed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// @ts-ignore\ninterface StreamedProperties {\n  types: {\n    [typeID: number]: number[];\n  };\n\n  ids: {\n    [id: number]: number;\n  };\n\n  indexesFile: string;\n}\n\nconst jsonFile: StreamedProperties = {\n  types: {},\n  ids: {},\n  indexesFile: "small.ifc-processed-properties-indexes",\n};\n')),(0,s.kt)("p",null,"Great! Now that we have everything setup, is time to finally convert the IFC file. In order to trigger the conversion, we can just do the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'let counter = 0;\n\nconst files: { name: string; bits: Blob }[] = [];\n\npropsStreamer.onPropertiesStreamed.add(async (props) => {\n  if (!jsonFile.types[props.type]) {\n    jsonFile.types[props.type] = [];\n  }\n  jsonFile.types[props.type].push(counter);\n\n  for (const id in props.data) {\n    jsonFile.ids[id] = counter;\n  }\n\n  const name = `small.ifc-processed-properties-${counter}`;\n  const bits = new Blob([JSON.stringify(props.data)]);\n  files.push({ bits, name });\n\n  counter++;\n});\n\npropsStreamer.onProgress.add(async (progress) => {\n  console.log(progress);\n});\n\npropsStreamer.onIndicesStreamed.add(async (props) => {\n  files.push({\n    name: `small.ifc-processed-properties.json`,\n    bits: new Blob([JSON.stringify(jsonFile)]),\n  });\n\n  const relations = components.get(OBC.IfcRelationsIndexer);\n  const serializedRels = relations.serializeRelations(props);\n\n  files.push({\n    name: "small.ifc-processed-properties-indexes",\n    bits: new Blob([serializedRels]),\n  });\n\n  await downloadFilesSequentially(files);\n});\n')),(0,s.kt)("p",null,"If everything went as expected, you should now be seeing some files being downloaded from your app \ud83e\udd2f Do not get scary if they're a lot, as big models tend to have many files! All of that is the information the streaming uses in order to display the geometry in the most efficient way possible \ud83d\udcaa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'async function processFile() {\n  const fetchedIfc = await fetch("https://thatopen.github.io/engine_components/resources/small.ifc");\n  const ifcBuffer = await fetchedIfc.arrayBuffer();\n  // We will need this information later to also convert the properties\n  const ifcArrayBuffer = new Uint8Array(ifcBuffer);\n  // This triggers the conversion, so the listeners start to be called\n  await propsStreamer.streamFromBuffer(ifcArrayBuffer);\n}\n')),(0,s.kt)("iframe",{src:"https://thatopen.github.io/engine_components/examples/IfcPropertiesTiler"}))}f.isMDXComponent=!0}}]);