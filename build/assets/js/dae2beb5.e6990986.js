"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i=void 0,l={unversionedId:"Tutorials/MaterialManager",id:"Tutorials/MaterialManager",title:"MaterialManager",description:"\ud83d\udc68\u200d\ud83c\udfa8 Seamless Material Control",source:"@site/docs/Tutorials/MaterialManager.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/MaterialManager",permalink:"/docs/Tutorials/MaterialManager",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LengthMeasurement",permalink:"/docs/Tutorials/LengthMeasurement"},next:{title:"MiniMap",permalink:"/docs/Tutorials/MiniMap"}},s={},p=[{value:"\ud83d\udc68\u200d\ud83c\udfa8 Seamless Material Control",id:"-seamless-material-control",level:3},{value:"\ud83e\uddf1 Creating Multiple Meshes",id:"-creating-multiple-meshes",level:3},{value:"Grouping the Meshes",id:"grouping-the-meshes",level:4},{value:"Changing Positions",id:"changing-positions",level:4},{value:"\ud83e\uddea Generating Cubes and Spheres",id:"-generating-cubes-and-spheres",level:3},{value:"\ud83c\udfa8 Materials Made Easy",id:"-materials-made-easy",level:3},{value:"Storing the Material with Manager",id:"storing-the-material-with-manager",level:4},{value:"\ud83d\udea6 Controlling the Manager Events",id:"-controlling-the-manager-events",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"-seamless-material-control"},"\ud83d\udc68\u200d\ud83c\udfa8 Seamless Material Control"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Have you ever had trouble handling multiple ",(0,r.kt)("strong",{parentName:"p"},"Materials")," for your BIM project?\nYou may be asking why different ",(0,r.kt)("strong",{parentName:"p"},"Materials")," are required. Sometimes you need to highlight a mesh\nor group the meshes, and render them with different materials; the possibilities are limitless.\ud83d\udcab"),(0,r.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,r.kt)("p",null,"In this tutorial, we use ",(0,r.kt)("strong",{parentName:"p"},"MaterialManager")," to control materials for various meshes.\nWe will also show you how to adjust the background of your scene.\ud83c\udf17"),(0,r.kt)("h3",{id:"-creating-multiple-meshes"},"\ud83e\uddf1 Creating Multiple Meshes"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now that our scene setup is done, let's add 3D elements to our scene as well.\nWe will add ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/geometries/BoxGeometry"},"Box Geometry"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/geometries/SphereGeometry"},"Sphere Geometry")," along with a material.\ud83d\udd8c\ufe0f"),(0,r.kt)("h4",{id:"grouping-the-meshes"},"Grouping the Meshes"),(0,r.kt)("p",null,"\ud83d\uddc3\ufe0f To make things easier to understand and use, we will categorize and store meshes into ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"cubes[]"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"spheres[]")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cubes = [];\nconst spheres = [];\nconst boxGeometry = new THREE.BoxGeometry(2, 2, 2);\nconst sphereGeometry = new THREE.SphereGeometry(2, 8, 8);\nconst material = new THREE.MeshLambertMaterial({ color: '#6528D7' });\n")),(0,r.kt)("h4",{id:"changing-positions"},"Changing Positions"),(0,r.kt)("p",null,"We have made preparations for adding mesh to our scene; but, if we do not alter their placements,\nall the meshes will be rendered in the same location, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"(0,0,0)"),".\ud83d\udccd"),(0,r.kt)("admonition",{title:"Randomising the Cube Placement",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We'll write a quick ",(0,r.kt)("strong",{parentName:"p"},"utility")," function that returns a random number between 0 and the specified upper limit.\nYou can use this for a variety of purposes, but for this tutorial\nit will be used to generate random positions for cube and sphere placement.\ud83d\udccc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function getRandomNumber(limit) {\nreturn Math.random() * limit;\n}\n")),(0,r.kt)("h3",{id:"-generating-cubes-and-spheres"},"\ud83e\uddea Generating Cubes and Spheres"),(0,r.kt)("p",null,"Now, we will write a simple ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"for loop"))," which will generate ",(0,r.kt)("strong",{parentName:"p"},"3 Cubes")," and ",(0,r.kt)("strong",{parentName:"p"},"3 Sphere")," meshes.\nIn addition, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getRandomNumber")," function that we defined before and add the meshes to the scene with updated positions.\ud83d\udd2e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function generateCubes() {\nfor (let i = 0; i < 3; i++) {\nconst cube = new THREE.Mesh(boxGeometry, material);\ncube.position.x = getRandomNumber(10);\ncube.position.y = getRandomNumber(10);\ncube.position.z = getRandomNumber(10);\ncube.updateMatrix();\nscene.add(cube);\ncubes.push(cube);\n}\n}\nfunction generateSpheres() {\nfor (let i = 0; i < 3; i++) {\nconst sphere = new THREE.Mesh(sphereGeometry, material);\nsphere.position.x = getRandomNumber(10);\nsphere.position.y = getRandomNumber(10);\nsphere.position.z = getRandomNumber(10);\nsphere.updateMatrix();\nscene.add(sphere);\nspheres.push(sphere);\n}\n}\ngenerateCubes();\ngenerateSpheres();\n")),(0,r.kt)("h3",{id:"-materials-made-easy"},"\ud83c\udfa8 Materials Made Easy"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Here comes the interesting part! We will now use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../api/classes/components.MaterialManager"},"Material Manager")),"\nfor manipulating the materials and background. Let's create different materials for Cubes and Spheres.\ud83c\udfad"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const materialManager = new OBC.MaterialManager(components);\nconst backgroundColor = new THREE.Color("white");\nconst cubeColor = new THREE.Color(0x71d728);\nconst cubeMaterial = new THREE.MeshBasicMaterial({color: cubeColor});\nconst sphereColor = new THREE.Color(0xd7286b);\nconst sphereMaterial = new THREE.MeshBasicMaterial({color: sphereColor});\n')),(0,r.kt)("admonition",{title:"Syncing Components with your own theme!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udd25 You may have noticed that we are also implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor"),",\nwhich will allow you to modify the background of your scene with a single call!\nWith components, you can now modify the background of your BIM app to match the theme you're using.")),(0,r.kt)("h4",{id:"storing-the-material-with-manager"},"Storing the Material with Manager"),(0,r.kt)("p",null,"Now that the materials have been created, we will ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," them and use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"addMaterial"))," to store them in ",(0,r.kt)("inlineCode",{parentName:"p"},"materialManager"),".\nNext, we'll add the necessary meshes to help ",(0,r.kt)("strong",{parentName:"p"},"materialManager")," to choose which mesh to use when applying materials.\ud83e\uddee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'materialManager.addMaterial("cubeMaterial", cubeMaterial);\nmaterialManager.addMeshes("cubeMaterial", cubes);\nmaterialManager.addMaterial("sphereMaterial", sphereMaterial);\nmaterialManager.addMeshes("sphereMaterial", spheres);\n')),(0,r.kt)("h3",{id:"-controlling-the-manager-events"},"\ud83d\udea6 Controlling the Manager Events"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"With all the things in place, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"dat.GUI")," for controlling the materials!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'materialManager.set(boolean, ["materialName", ..])')," - You can use this API to change the active material for a mesh group."),(0,r.kt)("li",{parentName:"ul"},"`materialManager.setBackgroundColor(Color) - This API will help you to change the background of your scene.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const gui = new dat.GUI();\nconst actions = {\nchangeSphereMaterial: () => {\nmaterialManager.set(true, ["sphereMaterial"]);\n},\nchangeCubeMaterial: () => {\nmaterialManager.set(true, ["cubeMaterial"]);\n},\nchangeBackground: () => {\nmaterialManager.setBackgroundColor(backgroundColor);\n},\nreset: () => {\nmaterialManager.set(false, ["cubeMaterial" , "sphereMaterial"]);\nmaterialManager.resetBackgroundColor();\n}\n};\n')),(0,r.kt)("p",null,"Great job! \ud83c\udf89 Now you know how to manage multiple materials in your app using\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../api/classes/components.MaterialManager"},"Material Manager"))," component! \ud83d\udcaa\nYour BIM software can be made more visually appealing and aesthetically pleasing.\nLet's keep it up and check out another tutorials!"),(0,r.kt)("iframe",{src:"https://ifcjs.github.io/components/core/MaterialManager/index.html"}))}c.isMDXComponent=!0}}]);