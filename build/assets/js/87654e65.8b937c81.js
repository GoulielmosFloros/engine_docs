"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={},s=void 0,p={unversionedId:"Tutorials/Components/Core/Worlds",id:"Tutorials/Components/Core/Worlds",title:"Worlds",description:"Copying and pasting? We got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/Worlds.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/Worlds",permalink:"/Tutorials/Components/Core/Worlds",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raycasters",permalink:"/Tutorials/Components/Core/Raycasters"},next:{title:"AngleMeasurement",permalink:"/Tutorials/Components/Front/AngleMeasurement"}},c={},d=[{value:"\ud83c\udf0e Creating our 3D world",id:"-creating-our-3d-world",level:3},{value:"\ud83d\uddbc\ufe0f Getting the container",id:"\ufe0f-getting-the-container",level:3},{value:"\ud83d\ude80 Creating a components instance",id:"-creating-a-components-instance",level:3},{value:"\ud83c\udf0e Setting up the world",id:"-setting-up-the-world",level:3},{value:"\ud83d\udc84 Adding things to our scene",id:"-adding-things-to-our-scene",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}],m={toc:d},u="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Source",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Copying and pasting? We got you covered! You can find the full source code of this tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/core/Worlds/example.ts"},"here"),".")),(0,a.kt)("h3",{id:"-creating-our-3d-world"},"\ud83c\udf0e Creating our 3D world"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this tutorial you'll learn how to create a simple scene using ",(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/components"),"."),(0,a.kt)("admonition",{title:"Hello world!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A world represents a 3D environment in your application. It consists of a scene, a camera and (optionally) a renderer. You can create multiple worlds and show them in multiple viewports at the same time.")),(0,a.kt)("p",null,"In this tutorial, we will import:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Three.js")," to get some 3D entities for our app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@thatopen/components")," to set up the barebone of our app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@thatopen/ui")," to add some simple and cool UI menus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Stats.js")," (optional) to measure the performance of our app.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import * as THREE from "three";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "openbim-components";\nimport Stats from "stats.js";\n')),(0,a.kt)("h3",{id:"\ufe0f-getting-the-container"},"\ud83d\uddbc\ufe0f Getting the container"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next, we need to tell the library where do we want to render the 3D scene. We have added an DIV  element to this HTML page that occupies the whole width and height of the viewport. Let's fetch it by its ID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const container = document.getElementById("container")!;\n')),(0,a.kt)("h3",{id:"-creating-a-components-instance"},"\ud83d\ude80 Creating a components instance"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now we will create a new instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Components")," class. This class is the main entry point of the library. It will be used to register and manage all the components in your application."),(0,a.kt)("admonition",{title:"Don't forget to dispose it when you are done!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Once you are done with your application, you need to dispose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Components")," instance to free up the memory. This is a requirement of Three.js, which can't dispose the memory of 3D related elements automatically.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const components = new OBC.Components();\n")),(0,a.kt)("h3",{id:"-setting-up-the-world"},"\ud83c\udf0e Setting up the world"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now we are ready to create our first world. We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Worlds")," component to manage all the worlds in your application. Instead of instancing it, we can get it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Components")," instance. All components are singleton, so this is always a better way to get them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const worlds = components.get(OBC.Worlds);\n")),(0,a.kt)("p",null,"We can create a new world by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Worlds")," component. It's a generic method, so we can specify the type of the scene, the camera and the renderer we want to use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n")),(0,a.kt)("p",null,"Now we can set the scene, the camera and the renderer of the world, and call the init method to start the rendering process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"world.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n")),(0,a.kt)("h3",{id:"-adding-things-to-our-scene"},"\ud83d\udc84 Adding things to our scene"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now we are ready to start adding some 3D entities to our scene. We will add a simple cube:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const material = new THREE.MeshLambertMaterial({ color: "#6528D7" });\nconst geometry = new THREE.BoxGeometry();\nconst cube = new THREE.Mesh(geometry, material);\nworld.scene.three.add(cube);\n')),(0,a.kt)("p",null,"We could also add some lights, but the SimpleScene class can do that easier for us using its ",(0,a.kt)("inlineCode",{parentName:"p"},"setup")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"world.scene.setup();\n")),(0,a.kt)("p",null,"Finally, we will make the camera look at the cube:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"world.camera.controls.setLookAt(3, 3, 3, 0, 0, 0);\n")),(0,a.kt)("h3",{id:"-adding-some-ui"},"\ud83e\udde9 Adding some UI"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/ui")," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"BUI.Manager")," class to initialize the library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"BUI.Manager.init();\n")),(0,a.kt)("p",null,"Now we will create a new panel with some inputs to change the background color of the scene and the intensity of the directional and ambient lights. For more information about the UI library, you can check the specific documentation for it!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n    <bim-panel label="Worlds Tutorial" style="position: fixed; top: 5px; right: 5px" active>\n      <bim-panel-section style="padding-top: 10px">\n      \n        <bim-color-input \n          label="Background Color" color="#202932" \n          @input="${({ target }: { target: BUI.ColorInput }) => {\n            world.scene.three.background = new THREE.Color(target.color);\n          }}">\n        </bim-color-input>\n        \n        <bim-number-input \n          slider step="0.1" label="Directional lights intensity" value="1.5" min="0.1" max="10"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            for (const child of world.scene.three.children) {\n              if (child instanceof THREE.DirectionalLight) {\n                child.intensity = target.value;\n              }\n            }\n          }}">\n        </bim-number-input>\n        \n        <bim-number-input \n          slider step="0.1" label="Ambient light intensity" value="1" min="0.1" max="5"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            for (const child of world.scene.three.children) {\n              if (child instanceof THREE.AmbientLight) {\n                child.intensity = target.value;\n              }\n            }\n          }}">\n        </bim-number-input>\n        \n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n')),(0,a.kt)("h3",{id:"\ufe0f-measuring-the-performance-optional"},"\u23f1\ufe0f Measuring the performance (optional)"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrdoob/stats.js"},"Stats.js")," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n')),(0,a.kt)("h3",{id:"-wrap-up"},"\ud83c\udf89 Wrap up"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"That's it! You have created your first 3D world and added some UI elements to it. You can now play with the inputs to see how the scene changes."),(0,a.kt)("iframe",{src:"https://thatopen.github.io/engine_components/examples/Worlds"}))}h.isMDXComponent=!0}}]);