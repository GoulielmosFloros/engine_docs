"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[4979],{9089:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=s(4848),r=s(8453);const l={},t="abstract Component",c={id:"api/@thatopen/components/classes/Component",title:"abstract Component",description:"Components are the building blocks of this library. Components are singleton elements that contain specific functionality. For instance, the Clipper Component can create, delete and handle 3D clipping planes. Components must be unique (they can't be instanced more than once per Components instance), and have a static UUID that identifies them uniquely. The can be accessed globally using the Components instance.",source:"@site/docs/api/@thatopen/components/classes/Component.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/Component",permalink:"/api/@thatopen/components/classes/Component",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Comment",permalink:"/api/@thatopen/components/classes/Comment"},next:{title:"Components",permalink:"/api/@thatopen/components/classes/Components"}},o={},a=[{value:"Extends",id:"extends",level:2},{value:"Extended by",id:"extended-by",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Methods",id:"methods",level:2},{value:"isConfigurable()",id:"isconfigurable",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"isDisposeable()",id:"isdisposeable",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"isHideable()",id:"ishideable",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"isResizeable()",id:"isresizeable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"isUpdateable()",id:"isupdateable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"abstract-component",children:[(0,i.jsx)(n.code,{children:"abstract"})," Component"]}),"\n",(0,i.jsxs)(n.p,{children:["Components are the building blocks of this library. Components are singleton elements that contain specific functionality. For instance, the Clipper Component can create, delete and handle 3D clipping planes. Components must be unique (they can't be instanced more than once per Components instance), and have a static UUID that identifies them uniquely. The can be accessed globally using the ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Components",children:"Components"})," instance."]}),"\n",(0,i.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base",children:(0,i.jsx)(n.code,{children:"Base"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Disposer",children:(0,i.jsx)(n.code,{children:"Disposer"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Raycasters",children:(0,i.jsx)(n.code,{children:"Raycasters"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Worlds",children:(0,i.jsx)(n.code,{children:"Worlds"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Grids",children:(0,i.jsx)(n.code,{children:"Grids"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Clipper",children:(0,i.jsx)(n.code,{children:"Clipper"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Cullers",children:(0,i.jsx)(n.code,{children:"Cullers"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/MiniMaps",children:(0,i.jsx)(n.code,{children:"MiniMaps"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/ConfigManager",children:(0,i.jsx)(n.code,{children:"ConfigManager"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/BoundingBoxer",children:(0,i.jsx)(n.code,{children:"BoundingBoxer"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Classifier",children:(0,i.jsx)(n.code,{children:"Classifier"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Exploder",children:(0,i.jsx)(n.code,{children:"Exploder"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Hider",children:(0,i.jsx)(n.code,{children:"Hider"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IfcLoader",children:(0,i.jsx)(n.code,{children:"IfcLoader"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/FragmentsManager",children:(0,i.jsx)(n.code,{children:"FragmentsManager"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IfcGeometryTiler",children:(0,i.jsx)(n.code,{children:"IfcGeometryTiler"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IfcPropertiesTiler",children:(0,i.jsx)(n.code,{children:"IfcPropertiesTiler"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IfcJsonExporter",children:(0,i.jsx)(n.code,{children:"IfcJsonExporter"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IfcIsolator",children:(0,i.jsx)(n.code,{children:"IfcIsolator"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IfcRelationsIndexer",children:(0,i.jsx)(n.code,{children:"IfcRelationsIndexer"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IfcPropertiesManager",children:(0,i.jsx)(n.code,{children:"IfcPropertiesManager"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IfcFinder",children:(0,i.jsx)(n.code,{children:"IfcFinder"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/MeasurementUtils",children:(0,i.jsx)(n.code,{children:"MeasurementUtils"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/VertexPicker",children:(0,i.jsx)(n.code,{children:"VertexPicker"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/BCFTopics",children:(0,i.jsx)(n.code,{children:"BCFTopics"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IDSSpecifications",children:(0,i.jsx)(n.code,{children:"IDSSpecifications"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"abstract"})," ",(0,i.jsx)(n.strong,{children:"enabled"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether this component is active or not. The behaviour can vary depending\r\non the type of component. E.g. a disabled dimension tool will stop creating\r\ndimensions, while a disabled camera will stop moving. A disabled component\r\nwill not be updated automatically each frame."}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"isconfigurable",children:"isConfigurable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isConfigurable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Configurable<any, any>"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:"Configurable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Configurable<any, any>"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base",children:(0,i.jsx)(n.code,{children:"Base"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base#isconfigurable",children:(0,i.jsx)(n.code,{children:"isConfigurable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isdisposeable",children:"isDisposeable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isDisposeable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Disposable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:"Disposable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Disposable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base",children:(0,i.jsx)(n.code,{children:"Base"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base#isdisposeable",children:(0,i.jsx)(n.code,{children:"isDisposeable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ishideable",children:"isHideable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isHideable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Hideable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Hideable",children:"Hideable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Hideable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base",children:(0,i.jsx)(n.code,{children:"Base"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base#ishideable",children:(0,i.jsx)(n.code,{children:"isHideable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isresizeable",children:"isResizeable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isResizeable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Resizeable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:"Resizeable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Resizeable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base",children:(0,i.jsx)(n.code,{children:"Base"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base#isresizeable",children:(0,i.jsx)(n.code,{children:"isResizeable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isupdateable",children:"isUpdateable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isUpdateable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Updateable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:"Updateable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Updateable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base",children:(0,i.jsx)(n.code,{children:"Base"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Base#isupdateable",children:(0,i.jsx)(n.code,{children:"isUpdateable"})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(6540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);