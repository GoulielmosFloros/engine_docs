"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:3},p="\ud83e\uddf9 Keeping them clean",l={unversionedId:"components/clean-components-guide",id:"components/clean-components-guide",title:"\ud83e\uddf9 Keeping them clean",description:"\ud83e\uddfd Basics",source:"@site/docs/components/clean-components-guide.md",sourceDirName:"components",slug:"/components/clean-components-guide",permalink:"/components/clean-components-guide",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddbe Making your own",permalink:"/components/creating-components"},next:{title:"\ud83e\udded Tutorial paths",permalink:"/components/tutorial-paths"}},m={},c=[{value:"\ud83e\uddfd Basics",id:"-basics",level:2},{value:"\ud83e\uddfc TypeScript",id:"-typescript",level:2},{value:"\ud83d\udcda Documentation",id:"-documentation",level:2},{value:"\ud83e\udde0 Memory management",id:"-memory-management",level:2},{value:"\ud83e\udd4e 3D objects and materials",id:"-3d-objects-and-materials",level:3},{value:"\ud83d\udcc5 Events",id:"-events",level:3},{value:"\ud83d\udc18 Huge objects / arrays",id:"-huge-objects--arrays",level:3}],u={toc:c},d="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-keeping-them-clean"},"\ud83e\uddf9 Keeping them clean"),(0,r.kt)("h2",{id:"-basics"},"\ud83e\uddfd Basics"),(0,r.kt)("p",null,"Always extend from the base ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," class. \ud83d\udc6a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as OBC from "@thatopen/components"\n\nexport MyComponent extends OBC.Component {\n    // ...\n}\n')),(0,r.kt)("p",null,"Always name the ",(0,r.kt)("strong",{parentName:"p"},"base file")," of your component ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," and store it in ",(0,r.kt)("strong",{parentName:"p"},"a folder with the component name"),". If you need to include other supporting files, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," folder in the component folder. You can call those supporting file whatever you want. This is a basic folder structure: \ud83d\uddc3\ufe0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MyComponent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"src"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"supporting-file-1.ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"supporting-file-2.ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"index.ts"))))))),(0,r.kt)("h2",{id:"-typescript"},"\ud83e\uddfc TypeScript"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("strong",{parentName:"p"},"Single Responsibility Principle"),". \ud83e\udd47"),(0,r.kt)("p",null,"Always name private members with ",(0,r.kt)("strong",{parentName:"p"},"underscore"),". \ud83e\udd77\ud83c\udffb"),(0,r.kt)("p",null,"Avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," in property fields. If a property element is not initialized in the constructor, you can either use ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),", or ",(0,r.kt)("strong",{parentName:"p"},"create a getter")," to assert that it exists before getting it, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'private _customProperty?: string;\n\nget customProperty(): string { \n    if(!this._customProperty) {\n        throw new Error("Custom property not initialized!");\n    }\n    return this._customProperty;\n }\n\n')),(0,r.kt)("p",null,"Avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"any")," as much as possible. \u274c"),(0,r.kt)("p",null,"Never define private properties in the constructor. ",(0,r.kt)("strong",{parentName:"p"},"Make them explicit")," beforehand: \ud83d\udccb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/*Incorrect*/\nconstructor(private _components: Components)\n\n/*Correct*/\nprivate _components: Components\nconstructor(components: Components) {\n    this._components = components;\n}\n")),(0,r.kt)("p",null,"Always ",(0,r.kt)("strong",{parentName:"p"},"make events readonly")," and initialize them directly. \u26a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"readonly onCreated = new OBC.Event<number>()\n")),(0,r.kt)("p",null,"Always make sure to ",(0,r.kt)("strong",{parentName:"p"},"know the interfaces")," you can implement when creating your component (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"Creatable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Hideable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UI"),", etc), that way we keep things uniform in terms of properties and methods naming and types."),(0,r.kt)("h2",{id:"-documentation"},"\ud83d\udcda Documentation"),(0,r.kt)("p",null,"In tutorials, ",(0,r.kt)("strong",{parentName:"p"},"try to not reference specifics")," inside paragraphs. That allows to easily update the tutorial code without need to also update the paragraphs. \ud83d\udc47\ud83c\udffb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\u274c Incorrect */\n/*MD\nTo add a cube to the scene, you need to call scene.add()\n*/\n\nscene.add(cube)\n\n/*\u2705 Correct*/\n/*MD\nTo add a cube to the scene, just add the following code line!\n*/\n\nscene.add(cube)\n")),(0,r.kt)("h2",{id:"-memory-management"},"\ud83e\udde0 Memory management"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Memory management is critical")," when using Open BIM components. Not paying attention to this can result in applications that consume more and more memory, up to a point in which it ",(0,r.kt)("strong",{parentName:"p"},"freezes / crashes"),". This is especially relevant when using SPA (Single Page Application) libraries and frameworks, like ",(0,r.kt)("strong",{parentName:"p"},"React"),", ",(0,r.kt)("strong",{parentName:"p"},"Angular"),", ",(0,r.kt)("strong",{parentName:"p"},"Vue"),", etc. \ud83d\uded1"),(0,r.kt)("p",null,"To make sure your component ",(0,r.kt)("strong",{parentName:"p"},"doesn\u2019t cause memory leaks")," and stays efficient, you need to make sure that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," instance in the constructor like specified in the ",(0,r.kt)("a",{parentName:"p",href:"/components/creating-components#-create-it"},"component creation guide"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"Disposable")," interface. This will force you to implement a ",(0,r.kt)("inlineCode",{parentName:"p"},"dispose()")," method that will be called automatically by the library when ",(0,r.kt)("inlineCode",{parentName:"p"},"components.dispose()")," is called. You can ",(0,r.kt)("strong",{parentName:"p"},"add all the clean up logic inside this method"),". You also need to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"onDisposed")," event so that you can subscribe to the deletion of that component to clean up. "))),(0,r.kt)("p",null,"There are some things that you want to clean up inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"dispose")," method:"),(0,r.kt)("h3",{id:"-3d-objects-and-materials"},"\ud83e\udd4e 3D objects and materials"),(0,r.kt)("p",null,"Three.js needs to ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects"},"manually release the memory")," of the ",(0,r.kt)("strong",{parentName:"p"},"geometry")," and ",(0,r.kt)("strong",{parentName:"p"},"materials")," that are not used anymore. If your component creates any new geometry or material, you need to keep track of it and get rid of it. You can do this in 2 ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83e\uddf9 Using the Three.js ",(0,r.kt)("inlineCode",{parentName:"p"},"dispose")," method to ",(0,r.kt)("strong",{parentName:"p"},"delete all geometries and materials"),", including their children.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud83e\uddf9 Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Disposer")," component provided by the components library, which ",(0,r.kt)("strong",{parentName:"p"},"does everything for you"),". "))),(0,r.kt)("p",null,"To make sure that the browser gets rid of this memory, you should also ",(0,r.kt)("strong",{parentName:"p"},"leave this data out of scope")," (e.g. emptying the array where they are after disposing it). For instance, if you are keeping track of all your meshes in an array called ",(0,r.kt)("inlineCode",{parentName:"p"},"meshes"),", you can get rid of it like this: \ud83d\udc47\ud83c\udffb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as THREE from "three";\nimport * as OBC from "@thatopen/components";\n\nclass YourComponent extends Component implements Disposable {\n\n    // ...\n\n    readonly onDisposed = new OBC.Event();\n\n    private _meshes: Mesh[];\n\n    dispose() {\n        // ...\n        const disposer = this.components.get(OBC.Disposer);\n        for(const mesh of this.meshes) {\n            // The disposer gets rid of geometries and materials\n            // including children\n            disposer.dispose(mesh);\n        }\n        // Removing all references to them\n        // in arrays an object is critical for this to work\n        this._meshes = [];\n        this.onDisposed.trigger();\n        this.onDisposed.reset();\n    }\n\n}\n')),(0,r.kt)("h3",{id:"-events"},"\ud83d\udcc5 Events"),(0,r.kt)("p",null,"Events are a nice way of ",(0,r.kt)("strong",{parentName:"p"},"binding HTML elements to JS logic"),". A common way of doing that is using ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener"),". That\u2019s fine if all the events are bound to HTML elements that you create inside your component and ",(0,r.kt)("strong",{parentName:"p"},"are destroyed when your component is disposed"),". \ud83d\udc4c\ud83c\udffb"),(0,r.kt)("p",null,"But in some situations you\u2019ll need to add events to HTML elements outside your components, or even to the global ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," object. In those cases, you will need to make sure that you ",(0,r.kt)("strong",{parentName:"p"},"get rid of these events")," when your component is disposed. You can do that with ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEventListener"),", and making sure that you keep a reference to the logic as an ",(0,r.kt)("strong",{parentName:"p"},"arrow function"),". \ud83c\udff9"),(0,r.kt)("p",null,"To make sure you don\u2019t forget about ",(0,r.kt)("strong",{parentName:"p"},"getting rid of your events"),", it\u2019s a good practice to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"setupEvents")," method that allows you to toggle them like this: \ud83d\udc47\ud83c\udffb"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as THREE from "three";\nimport * as OBC from "@thatopen/components";\n\nclass YourComponent extends Component implements Disposable {\n\n    // ...\n\n    constructor() {\n        this.setupEvents(true);\n    }\n\n    dispose() {\n        // ...\n        this.setupEvents(false);\n        // ...\n    }\n\n    private setupEvents(active: boolean) {\n        if(active) {\n            window.addEventListener("mousemove", this.logMessage);\n        } else {\n            window.removeEventListener("mousemove", this.logMessage);\n        }\n    }\n\n    private logMessage = () => {\n        console.log("Hey!");\n    }\n}\n')),(0,r.kt)("h3",{id:"-huge-objects--arrays"},"\ud83d\udc18 Huge objects / arrays"),(0,r.kt)("p",null,"Some components are data-heavy. JavaScript has an automatic garbage collector that should take care of these, but that can take some time. To ",(0,r.kt)("strong",{parentName:"p"},"accelerate this release of memory"),", you can just assign them an empty value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as THREE from "three";\nimport * as OBC from "@thatopen/components";\n\nclass YourComponent extends Component implements Disposable {\n\n    dataArray: any = [];\n    dataObject: any = {};\n\n    dispose() {\n        // ...\n        this.dataArray= [];\n        this.dataObject= {};\n    }\n}\n')))}h.isMDXComponent=!0}}]);