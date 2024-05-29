"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="\ud83e\uddbe Making your own",p={unversionedId:"components/creating-components",id:"components/creating-components",title:"\ud83e\uddbe Making your own",description:"\ud83d\udc6a Create it",source:"@site/docs/components/creating-components.md",sourceDirName:"components",slug:"/components/creating-components",permalink:"/components/creating-components",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 Getting started",permalink:"/components/getting-started"},next:{title:"\ud83e\uddf9 Keeping them clean",permalink:"/components/clean-components-guide"}},c={},m=[{value:"\ud83d\udc6a Create it",id:"-create-it",level:2},{value:"\ud83c\udf0d Availability",id:"-availability",level:2},{value:"\u267b\ufe0f Lifecycle",id:"\ufe0f-lifecycle",level:2},{value:"\ud83e\uddf9 Cleanliness",id:"-cleanliness",level:2},{value:"\ud83d\udc85\ud83c\udffb UI",id:"-ui",level:2}],u={toc:m},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-making-your-own"},"\ud83e\uddbe Making your own"),(0,r.kt)("h2",{id:"-create-it"},"\ud83d\udc6a Create it"),(0,r.kt)("p",null,"Our libraries have ",(0,r.kt)("strong",{parentName:"p"},"many components"),", but the BIM world is vast and it's impossible to cover all use cases. But that's the biggest power of components: ",(0,r.kt)("strong",{parentName:"p"},"they are flexible and can be extended")," to cover all use cases."),(0,r.kt)("admonition",{title:"We like types, but you don't have to",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We are going to do the examples in TypeScript, but don't worry if you only know JavaScript! Translating these examples to JavaScript would be exactly the same but removing all the type definitions. \ud83e\udd1d")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creating a component")," is as simple as creating a class that extends the basic ",(0,r.kt)("inlineCode",{parentName:"p"},"Component"),' class. For example, let\'s create a "Hello world" component, whose only mission is to log a greeting message in the console. \ud83d\udc4b\ud83c\udffb'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as OBC from "@thatopen/components";\n\n/**\n * A basic component to say hello in the console.\n */\nexport class HelloWorldComponent extends OBC.Component {\n\n  static readonly uuid = "60bd6763-f9ff-4820-a04f-2054922c0297" as const;\n\n  enabled = true;\n\n  private readonly _message = "Hello";\n\n  constructor(components: OBC.Components) {\n    super(components);\n    components.add(HelloWorldComponent.uuid, this);\n  }\n\n  greet(name: string) {\n    const message = `${this._message} ${name}!`;\n    console.log(message);\n  }\n}\n')),(0,r.kt)("p",null,"As you can see, the structure of the component is very simple. The Component base class ",(0,r.kt)("strong",{parentName:"p"},"requires certain things"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A static UUID (v4)")," that identifies it uniquely within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Components")," instance that is used to create it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A constructor")," where the only parameter is the object ",(0,r.kt)("inlineCode",{parentName:"p"},"Components"),". This ",(0,r.kt)("inlineCode",{parentName:"p"},"Components")," object will be available as a public property of the class automatically. Also, you need to add the component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Components")," instance in the constructor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"An ",(0,r.kt)("inlineCode",{parentName:"strong"},"enabled")," property")," that indicates whether the component is active or not."))),(0,r.kt)("p",null,"Now, you can use this component just as any of the components you will get to know in the ",(0,r.kt)("a",{parentName:"p",href:"../Tutorials/Components/Core/Worlds"},"tutorials"),"! \ud83d\udc69\ud83c\udffb\u200d\ud83c\udfeb"),(0,r.kt)("h2",{id:"-availability"},"\ud83c\udf0d Availability"),(0,r.kt)("p",null,"As you can see, components have a static UUID (v4) and are registered in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Components")," instance. That way, we make sure that they are ",(0,r.kt)("strong",{parentName:"p"},"unique and globally available")," through your entire application (or ",(0,r.kt)("inlineCode",{parentName:"p"},"Components")," instance). You can access that component instance anywhere else in your application like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Somewhere in your app:\n\nconst helloWorldComponent = new HelloWorldComponent(components);\n\n// Somewhere else in your app:\n\nconst hwComponent = await components.get(HelloWorldComponent);\n")),(0,r.kt)("p",null,"We strongly recommend that you always get the ",(0,r.kt)("strong",{parentName:"p"},"library built-in components")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method directly, never instantiating them yourself. Don't worry, if they are not instanced, they library will do it for you automatically! \ud83e\udd16"),(0,r.kt)("h2",{id:"\ufe0f-lifecycle"},"\u267b\ufe0f Lifecycle"),(0,r.kt)("p",null,"The library will take care of ",(0,r.kt)("strong",{parentName:"p"},"updating your components")," and ",(0,r.kt)("strong",{parentName:"p"},"releasing their memory")," when your 3D app is diposed, preventing memory leaks. You can set up your component easily using the interfaces provided by the library. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With ",(0,r.kt)("inlineCode",{parentName:"p"},"Updateable"),", the library will automatically update your component every frame. \ud83d\udd04\ufe0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With ",(0,r.kt)("inlineCode",{parentName:"p"},"Disposable"),", the library will release the memory of your component when the application is disposed, preventing memory leaks. \ud83e\uddf9"))),(0,r.kt)("p",null,"Let's see them in action!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import * as THREE from "three";\nimport * as OBC from "@thatopen/components";\n\n/**\n * A basic component to say hello in the console.\n */\nexport class HelloWorldComponent extends OBC.Component\n  implements OBC.Disposable, OBC.Updateable  {\n    static readonly uuid = "0f89b34b-fc6b-4b97-b56d-1edeb0a308a2";\n\n    readonly onAfterUpdate = new OBC.Event();\n\n    readonly onBeforeUpdate = new OBC.Event();\n\n    readonly onDisposed = new OBC.Event();\n\n    enabled = true;\n\n    someMesh = new THREE.Mesh(); \n\n    private readonly _message = "Hello";\n\n    constructor(components: OBC.Components) {\n        super(components);\n        components.add(HelloWorldComponent.uuid, this);\n    }\n\n    greet(name: string) {\n        const message = `${this._message} ${name}!`;\n        console.log(message);\n    }\n\n    dispose() {\n        this.enabled = false;\n        // Make sure to clean up the events\n        this.onBeforeUpdate.reset();\n        this.onAfterUpdate.reset();\n        // Use the disposer component to easily dispose THREE.js objects\n        const disposer = this.components.get(OBC.Disposer);\n        disposer.destroy(this.someMesh);\n        this.onDisposed.trigger();\n        this.onDisposed.reset();\n    }\n\n    async update(delta?: number) {\n        this.onBeforeUpdate.trigger();\n        console.log("Updated! Delta: " + delta);\n        this.onAfterUpdate.trigger();\n    }\n}\n')),(0,r.kt)("p",null,"This is it! Now, the library will take care of ",(0,r.kt)("strong",{parentName:"p"},"updating and disposing")," your component automatically. \ud83d\udcaa\ud83c\udffb\ud83e\udd16"),(0,r.kt)("h2",{id:"-cleanliness"},"\ud83e\uddf9 Cleanliness"),(0,r.kt)("p",null,"It's important that you keep your components ",(0,r.kt)("strong",{parentName:"p"},"clean and tidy"),"! To do that, check out the short guide for ",(0,r.kt)("a",{parentName:"p",href:"/components/clean-components-guide"},"avoiding smells when creating components"),". \ud83e\ude90"),(0,r.kt)("h2",{id:"-ui"},"\ud83d\udc85\ud83c\udffb UI"),(0,r.kt)("p",null,"We strongly recommend that you ",(0,r.kt)("strong",{parentName:"p"},"don't include UI logic in your components"),". Rather, we have a UI Components library that is specific for building BIM UIs super easily. The code of both libraries (components and UI components) is completely decoupled. We encourage you to do the same. \ud83c\udf50\ud83c\udf4e "),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("strong",{parentName:"p"},"UI Components tutorials")," for more details about how to build your own UI elements."))}h.isMDXComponent=!0}}]);