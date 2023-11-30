"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"Tutorials/ScreenCuller",id:"Tutorials/ScreenCuller",title:"ScreenCuller",description:"\ud83d\ude85 Managing Performance",source:"@site/docs/Tutorials/ScreenCuller.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/ScreenCuller",permalink:"/docs/Tutorials/ScreenCuller",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PostproductionRenderer",permalink:"/docs/Tutorials/PostproductionRenderer"},next:{title:"ShadowDropper",permalink:"/docs/Tutorials/ShadowDropper"}},s={},c=[{value:"\ud83d\ude85 Managing Performance",id:"-managing-performance",level:3},{value:"\ud83e\uddf0 Creating Screen Culler",id:"-creating-screen-culler",level:3},{value:"\ud83e\uddf1 Adding a lot of 3D Objects",id:"-adding-a-lot-of-3d-objects",level:3},{value:"\ud83e\uddea Generate Multiple Cubes",id:"-generate-multiple-cubes",level:4},{value:"\ud83e\uddf9 Cleaning the Scene",id:"-cleaning-the-scene",level:4},{value:"\ud83d\udce2 Rendering Cubes",id:"-rendering-cubes",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-managing-performance"},"\ud83d\ude85 Managing Performance"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"There are occasions when your scene has too many components.\nMultiple components being rendered simultaneously ",(0,a.kt)("strong",{parentName:"p"},"lengthens computation time"),"\u231b\ufe0f and ",(0,a.kt)("strong",{parentName:"p"},"degrades performance"),".\ud83c\udf21\ufe0f"),(0,a.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,a.kt)("p",null,"In this tutorial, we will use ",(0,a.kt)("strong",{parentName:"p"},"ScreenCuller")," to improve performance by reducing unnecessary computations.\ud83d\ude80\nThis tutorial will show you how to manage a complex scenario with a lot of elements in an effective way.\ud83e\uddbe"),(0,a.kt)("h3",{id:"-creating-screen-culler"},"\ud83e\uddf0 Creating Screen Culler"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Although adding Screen Culler to your project can appear difficult, it is actually rather easy.\nNow, we will add ",(0,a.kt)("strong",{parentName:"p"},"Screen Culler Component"),".\nThis will create a Screen Culler which is now ready to be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const culler = new OBC.ScreenCuller(components);\n")),(0,a.kt)("p",null,"Additionally, we will activate the ",(0,a.kt)("inlineCode",{parentName:"p"},"culler.renderDebugFrame"),"\nso that we can see the 2D screen of the elements that are not occluded.\ud83d\udcbb\nAlso, we will get the ",(0,a.kt)("strong",{parentName:"p"},"domElement")," and attach it to the body so that we can see this frame in real-time.\ud83d\udcca"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"culler.renderDebugFrame = true;\nconst debugFrame = culler.renderer.domElement;\ndocument.body.appendChild(debugFrame);\ndebugFrame.style.position = 'fixed';\ndebugFrame.style.left = '0';\ndebugFrame.style.bottom = '0';\ndebugFrame.style.visibility = 'collapse';\n")),(0,a.kt)("admonition",{title:"Randomising the Cube Placement",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We'll write a quick ",(0,a.kt)("strong",{parentName:"p"},"utility")," function that returns a random number between 0 and the specified upper limit.\nYou can use this for a variety of purposes, but for this tutorial\nit will be used to generate random positions for cube placement.\ud83d\udccc")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getRandomNumber(limit) {\nreturn Math.random() * limit;\n}\n")),(0,a.kt)("h3",{id:"-adding-a-lot-of-3d-objects"},"\ud83e\uddf1 Adding a lot of 3D Objects"),(0,a.kt)("p",null,"We'll add the Simple 3D Cube and do it ",(0,a.kt)("strong",{parentName:"p"},"300 times"),"!\ud83e\udd2f\nComponents are built using ",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/"},"Three.js"),", making it simple to use any three.js code.\nFor our cube, we'll generate box geometry and use basic material."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const cubes = [];\nconst geometry = new THREE.BoxGeometry(2, 2, 2);\nconst material = new THREE.MeshLambertMaterial({ color: '#6528D7' });\n")),(0,a.kt)("h4",{id:"-generate-multiple-cubes"},"\ud83e\uddea Generate Multiple Cubes"),(0,a.kt)("p",null,"Now, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"getRandomNumber()")," method we previously created, we will add the 300 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"cube"))," meshes to our scene\nand randomly position them. We'll add the cube to the scene and adjust its position between 0 and 10.\nAdditionally, we will add meshes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"culler")," object, which will help ",(0,a.kt)("strong",{parentName:"p"},"SimpleCuller")," to recognize and\ndraw the elements that are visible to the camera. To do this, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"culler.add(cube)"))," will be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function regenerateCubes() {\nresetCubes();\nfor (let i = 0; i < 300; i++) {\nconst cube = new THREE.Mesh(geometry, material);\ncube.position.x = getRandomNumber(10);\ncube.position.y = getRandomNumber(10);\ncube.position.z = getRandomNumber(10);\ncube.updateMatrix();\nscene.add(cube);\nculler.add(cube);\ncubes.push(cube);\n}\n}\n")),(0,a.kt)("h4",{id:"-cleaning-the-scene"},"\ud83e\uddf9 Cleaning the Scene"),(0,a.kt)("p",null,"Now that we know how to create multiple cubes, we will write a function to remove the cubes from scene on demand.\n",(0,a.kt)("inlineCode",{parentName:"p"},"resetCubes()")," iteratively removes the ",(0,a.kt)("strong",{parentName:"p"},"cubes")," using ",(0,a.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html?q=obje#api/en/core/Object3D.removeFromParent"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"cube.removeFromParent"))),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function resetCubes() {\nfor (const cube of cubes) {\ncube.removeFromParent();\n}\ncubes.length = 0;\n}\n")),(0,a.kt)("h4",{id:"-rendering-cubes"},"\ud83d\udce2 Rendering Cubes"),(0,a.kt)("p",null,"With everything ready, we will call ",(0,a.kt)("inlineCode",{parentName:"p"},"regenerateCubes()")," which will generate cubes and add them to scene."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"regenerateCubes();\n")),(0,a.kt)("p",null,"Here comes the most crucial part! The core aim of ",(0,a.kt)("strong",{parentName:"p"},"ScreenCuller")," is to output just those components that are\nvisible to the camera.\n",(0,a.kt)("inlineCode",{parentName:"p"},"culler.needsUpdate = true")," instructs the ScreenCuller to render the updated view.\n",(0,a.kt)("strong",{parentName:"p"}," Remember to update culler every time the camera is updated \u2755 "),"\nIn this tutorial we are updating it each time the camera stops moving."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'culler.needsUpdate = true;\ncomponents.camera.controls.addEventListener("controlend", () => {\nculler.needsUpdate = true;\n});\n')),(0,a.kt)("p",null,"Great job! \ud83c\udf89 Now you know how to optimise your 3D scene using a\n",(0,a.kt)("strong",{parentName:"p"},"Screen Culler")," component! \ud83d\udcaa\nYour BIM app will now have unmatched performance and can render huge scenes easily. \ud83d\ude80\nLet's keep it up and check out another tutorials!"),(0,a.kt)("iframe",{src:"https://ifcjs.github.io/components/core/ScreenCuller/index.html"}))}m.isMDXComponent=!0}}]);