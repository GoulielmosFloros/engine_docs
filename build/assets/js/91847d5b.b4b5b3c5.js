"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[9869],{3302:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(4848),d=s(8453);const i={},t="World",o={id:"api/@thatopen/components/interfaces/World",title:"World",description:"Represents a 3D world with meshes, scene, camera, renderer, and other properties.",source:"@site/docs/api/@thatopen/components/interfaces/World.md",sourceDirName:"api/@thatopen/components/interfaces",slug:"/api/@thatopen/components/interfaces/World",permalink:"/api/@thatopen/components/interfaces/World",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Updateable",permalink:"/api/@thatopen/components/interfaces/Updateable"},next:{title:"CameraProjection",permalink:"/api/@thatopen/components/type-aliases/CameraProjection"}},l={},c=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"camera",id:"camera",level:3},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"isDisposing",id:"isdisposing",level:3},{value:"meshes",id:"meshes",level:3},{value:"onAfterUpdate",id:"onafterupdate",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"onBeforeUpdate",id:"onbeforeupdate",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"renderer",id:"renderer",level:3},{value:"scene",id:"scene",level:3},{value:"uuid",id:"uuid",level:3},{value:"Methods",id:"methods",level:2},{value:"update()",id:"update",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-4",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"world",children:"World"}),"\n",(0,r.jsx)(n.p,{children:"Represents a 3D world with meshes, scene, camera, renderer, and other properties."}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,r.jsx)(n.code,{children:"Disposable"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:(0,r.jsx)(n.code,{children:"Updateable"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"camera",children:"camera"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"camera"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/BaseCamera",children:(0,r.jsx)(n.code,{children:"BaseCamera"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The base camera of the world."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"dispose"}),": () => ",(0,r.jsx)(n.code,{children:"void"})," | ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Destroys the object from memory to prevent a\r\n",(0,r.jsx)(n.a,{href:"https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects",children:"memory leak"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"void"})," | ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,r.jsx)(n.code,{children:"Disposable"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:(0,r.jsx)(n.code,{children:"dispose"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isdisposing",children:"isDisposing"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isDisposing"}),": ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Indicates whether the world is currently disposing. This is useful for cancelling logic that access the elements of a world (which are also disposed)."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"meshes",children:"meshes"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"meshes"}),": ",(0,r.jsx)(n.code,{children:"Set"}),"<",(0,r.jsx)(n.code,{children:"Mesh"}),"<",(0,r.jsx)(n.code,{children:"BufferGeometry"}),"<",(0,r.jsx)(n.code,{children:"NormalBufferAttributes"}),">, ",(0,r.jsx)(n.code,{children:"Material"})," | ",(0,r.jsx)(n.code,{children:"Material"}),"[], ",(0,r.jsx)(n.code,{children:"Object3DEventMap"}),">>"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A set of meshes present in the world. This is taken into account for operations like raycasting."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onafterupdate",children:"onAfterUpdate"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"onAfterUpdate"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,r.jsx)(n.code,{children:"Event"})}),"<",(0,r.jsx)(n.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Actions that should be executed after updating the component."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:(0,r.jsx)(n.code,{children:"Updateable"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#onafterupdate",children:(0,r.jsx)(n.code,{children:"onAfterUpdate"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onbeforeupdate",children:"onBeforeUpdate"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"onBeforeUpdate"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,r.jsx)(n.code,{children:"Event"})}),"<",(0,r.jsx)(n.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Actions that should be executed before updating the component."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:(0,r.jsx)(n.code,{children:"Updateable"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#onbeforeupdate",children:(0,r.jsx)(n.code,{children:"onBeforeUpdate"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"ondisposed",children:"onDisposed"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"onDisposed"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,r.jsx)(n.code,{children:"Event"})}),"<",(0,r.jsx)(n.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Fired after the tool has been disposed."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,r.jsx)(n.code,{children:"Disposable"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:(0,r.jsx)(n.code,{children:"onDisposed"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"renderer",children:"renderer"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"renderer"}),": ",(0,r.jsx)(n.code,{children:"null"})," | ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/BaseRenderer",children:(0,r.jsx)(n.code,{children:"BaseRenderer"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The base renderer of the world. Can be null if this world doesn't use a renderer (e.g. in a backend environment)."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"scene",children:"scene"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"scene"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/BaseScene",children:(0,r.jsx)(n.code,{children:"BaseScene"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The base scene of the world."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"uuid",children:"uuid"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"uuid"}),": ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A unique identifier for the world."}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"update",children:"update()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"update"}),"(",(0,r.jsx)(n.code,{children:"delta"}),"?): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Function used to update the state of this component each frame. For\r\ninstance, a renderer component will make a render each frame."}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"delta"}),"?"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"number"})})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:(0,r.jsx)(n.code,{children:"Updateable"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#update",children:(0,r.jsx)(n.code,{children:"update"})})]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(6540);const d={},i=r.createContext(d);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);