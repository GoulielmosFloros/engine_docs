"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4125],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(g,s(s({ref:n},p),{},{components:t})):o.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],i={},l=void 0,c={unversionedId:"Tutorials/Components/Front/PostproductionRenderer",id:"Tutorials/Components/Front/PostproductionRenderer",title:"PostproductionRenderer",description:"Copying and pasting? We got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/PostproductionRenderer.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/PostproductionRenderer",permalink:"/Tutorials/Components/Front/PostproductionRenderer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LengthMeasurement",permalink:"/Tutorials/Components/Front/LengthMeasurement"},next:{title:"ShadowDropper",permalink:"/Tutorials/Components/Front/ShadowDropper"}},p={},u=[{value:"\ud83e\uddea Cool Post-Production Effects",id:"-cool-post-production-effects",level:3},{value:"\ud83c\udfe2 Adding Fragments",id:"-adding-fragments",level:3},{value:"\ud83c\udfac Activating the Post-Production",id:"-activating-the-post-production",level:3}],m={toc:u},d="wrapper";function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)(d,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Source",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Copying and pasting? We got you covered! You can find the full source code of this tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/core/PostproductionRenderer/example.ts"},"here"),".")),(0,a.kt)("h3",{id:"-cool-post-production-effects"},"\ud83e\uddea Cool Post-Production Effects"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Post-production effects enrich your 3D scenes. There are several post-production effects, such as\nadding shadows, rendering outlines, adding ambient occlusion and applying bloom, that can enhance\nand make your scene look cool.\ud83c\udf79"),(0,a.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,a.kt)("a",{parentName:"p",href:"SimpleScene.mdx"},"that tutorial first"),"!")),(0,a.kt)("p",null,"In this tutorial we will use ",(0,a.kt)("strong",{parentName:"p"},"Post-Production Renderer")," to add neat ",(0,a.kt)("strong",{parentName:"p"},"Outlines")," and ",(0,a.kt)("strong",{parentName:"p"},"Ambient Occlusion")," to the 3D Model.\ud83e\uddbe"),(0,a.kt)("h3",{id:"-adding-fragments"},"\ud83c\udfe2 Adding Fragments"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll start by adding a ",(0,a.kt)("strong",{parentName:"p"},"Fragment")," to our scene using Fragment Manager.\nWe'll use a simple fragment for the purposes of this tutorial, but the code is capable of handling big files as well.\ud83c\udfd7\ufe0f"),(0,a.kt)("admonition",{title:"Using Fragment Manager!",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\ud83c\udfcb\ufe0f There is a dedicated tutorial on how to use Fragment Manager to load ",(0,a.kt)("strong",{parentName:"p"},"IFC")," files!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import * as THREE from "three";\nimport Stats from "stats.js";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "openbim-components";\nimport * as OBCF from "../..";\n\n// @ts-ignore\n\nconst container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBCF.PostproductionRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBCF.PostproductionRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.config.color.set(0x666666);\nconst grid = grids.create(world);\n\n// Set up stats\n\nconst stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n')),(0,a.kt)("h3",{id:"-activating-the-post-production"},"\ud83c\udfac Activating the Post-Production"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We will activate the post-production effect.\nAlso, we will enable the visibility for post-production layer."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"postproduction.active")," - Enable or Disable the active status of the post-processing effect"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"postproduction.visible")," - Toggle the visibility of post-processing layer that is created to display the effect.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentsManager(components);\nconst file = await fetch("../../../../../resources/small.frag");\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = fragments.load(buffer);\nworld.scene.three.add(model);\n\n// const meshes = [];\n\n// const culler = new OBC.ScreenCuller(components);\n// culler.setup();\n\n// for (const fragment of model.items) {\n//   meshes.push(fragment.mesh);\n//   culler.elements.add(fragment.mesh);\n// }\n// culler.elements.needsUpdate = true;\n\n// const controls = cameraComponent.controls;\n// controls.addEventListener("controlend", () => {\n//   culler.elements.needsUpdate = true;\n// });\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89 on completing this tutorial! Now you know how to add cool effects easily using\nPost Production \ud83d\uddbc\ufe0f\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const { postproduction } = world.renderer;\npostproduction.enabled = true;\npostproduction.customEffects.excludedMeshes.push(grid.three);\n\nconst ao = postproduction.n8ao.configuration;\n\nBUI.Manager.init();\n\nconst panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n    <bim-panel label="Clipper Tutorial" style="position: fixed; top: 5px; right: 5px; max-height: 80vh" active>\n    \n      <bim-panel-section fixed label="Gamma" style="padding-top: 10px">\n        <bim-checkbox checked label="Gamma Correction"\n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            postproduction.setPasses({ gamma: target.value });\n          }}">\n        </bim-checkbox>\n      </bim-panel-section>\n      \n      <bim-panel-section fixed label="Custom effects" style="padding-top: 10px">\n        <bim-checkbox checked label="Custom effects"\n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            postproduction.setPasses({ custom: target.value });\n          }}">\n        </bim-checkbox>    \n        \n        <bim-checkbox checked label="Gamma Correction"\n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            postproduction.customEffects.glossEnabled = target.value;\n          }}">\n        </bim-checkbox>   \n      \n        <bim-number-input \n          slider step="0.01" label="Opacity" \n          value="${postproduction.customEffects.opacity}" min="0" max="1"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            postproduction.customEffects.opacity = target.value;\n          }}">\n        </bim-number-input>  \n            \n        <bim-number-input \n          slider step="0.1" label="Tolerance" \n          value="${postproduction.customEffects.tolerance}" min="0" max="6"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            postproduction.customEffects.tolerance = target.value;\n          }}">\n        </bim-number-input> \n                      \n        <bim-color-input label="Line color" \n          @input="${({ target }: { target: BUI.ColorInput }) => {\n            const color = new THREE.Color(target.value.color);\n            postproduction.customEffects.lineColor = color.getHex();\n          }}">\n        </bim-color-input>  \n      \n        <bim-number-input \n          slider label="Gloss exponent" step="0.1" \n          value="${postproduction.customEffects.glossExponent}" min="0" max="5"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            postproduction.customEffects.glossExponent = target.value;\n          }}">\n        </bim-number-input>    \n           \n        <bim-number-input \n          slider label="Max gloss" step="0.05" \n          value="${postproduction.customEffects.maxGloss}" min="-2" max="2"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            postproduction.customEffects.maxGloss = target.value;\n          }}">\n        </bim-number-input>  \n                  \n        <bim-number-input \n          slider label="Min gloss" step="0.05" \n          value="${postproduction.customEffects.minGloss}" min="-2" max="2"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            postproduction.customEffects.minGloss = target.value;\n          }}">\n        </bim-number-input> \n        \n      </bim-panel-section>\n      \n      <bim-panel-section fixed label="Ambient Oclussion">\n      \n        <bim-checkbox label="AO enabled"\n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            postproduction.setPasses({ ao: target.value });\n          }}">\n        </bim-checkbox>  \n                \n        <bim-checkbox checked label="Half resolution"\n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            ao.halfRes = target.value;\n          }}">\n        </bim-checkbox>  \n                      \n        <bim-checkbox label="Screen space radius"\n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            ao.screenSpaceRadius = target.value;\n          }}">\n        </bim-checkbox>\n        \n                              \n        <bim-color-input label="AO color" \n          @input="${({ target }: { target: BUI.ColorInput }) => {\n            const color = new THREE.Color(target.value.color);\n            ao.color.r = color.r;\n            ao.color.g = color.g;\n            ao.color.b = color.b;\n          }}">\n        </bim-color-input>     \n        \n        <bim-number-input \n          slider label="AO Samples" step="1" \n          value="${ao.aoSamples}" min="1" max="16"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            ao.aoSamples = target.value;\n          }}">\n        </bim-number-input>    \n            \n        <bim-number-input \n          slider label="Denoise Samples" step="1" \n          value="${ao.denoiseSamples}" min="1" max="16"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            ao.denoiseSamples = target.value;\n          }}">\n        </bim-number-input>   \n                  \n        <bim-number-input \n          slider label="Denoise Radius" step="1" \n          value="${ao.denoiseRadius}" min="0" max="100"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            ao.denoiseRadius = target.value;\n          }}">\n        </bim-number-input>   \n                       \n        <bim-number-input \n          slider label="AO Radius" step="1" \n          value="${ao.aoRadius}" min="0" max="16"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            ao.aoRadius = target.value;\n          }}">\n        </bim-number-input>  \n                              \n        <bim-number-input \n          slider label="Distance falloff" step="1" \n          value="${ao.distanceFalloff}" min="0" max="16"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            ao.distanceFalloff = target.value;\n          }}">\n        </bim-number-input> \n                                      \n        <bim-number-input \n          slider label="Intensity" step="1" \n          value="${ao.intensity}" min="0" max="16"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            ao.intensity = target.value;\n          }}">\n        </bim-number-input> \n        \n      </bim-panel-section>\n      \n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n')),(0,a.kt)("iframe",{src:"https://thatopen.github.io/engine_components/examples/PostproductionRenderer"}))}g.isMDXComponent=!0}}]);