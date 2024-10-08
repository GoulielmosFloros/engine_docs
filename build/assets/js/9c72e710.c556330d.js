"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[1815],{4465:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=s(4848),r=s(8453);const l={},d="ShadowedScene",c={id:"api/@thatopen/components/classes/ShadowedScene",title:"ShadowedScene",description:"A scene that supports efficient cast shadows. \ud83d\udcd5 Tutorial. \ud83d\udcd8 API.",source:"@site/docs/api/@thatopen/components/classes/ShadowedScene.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/ShadowedScene",permalink:"/api/@thatopen/components/classes/ShadowedScene",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raycasters",permalink:"/api/@thatopen/components/classes/Raycasters"},next:{title:"SimpleCamera",permalink:"/api/@thatopen/components/classes/SimpleCamera"}},t={},o=[{value:"Extends",id:"extends",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"ambientLights",id:"ambientlights",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"autoBias",id:"autobias",level:3},{value:"config",id:"config",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"currentWorld",id:"currentworld",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"directionalLights",id:"directionallights",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"isSetup",id:"issetup",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"onSetup",id:"onsetup",level:3},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"onWorldChanged",id:"onworldchanged",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"action",id:"action",level:5},{value:"world",id:"world",level:5},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"three",id:"three",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Accessors",id:"accessors",level:2},{value:"bias",id:"bias",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"distanceRenderer",id:"distancerenderer",level:3},{value:"Returns",id:"returns-1",level:4},{value:"shadowsEnabled",id:"shadowsenabled",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Overrides",id:"overrides",level:4},{value:"isConfigurable()",id:"isconfigurable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"isDisposeable()",id:"isdisposeable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"isHideable()",id:"ishideable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"isResizeable()",id:"isresizeable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"isUpdateable()",id:"isupdateable",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"setup()",id:"setup",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"updateShadows()",id:"updateshadows",level:3},{value:"Returns",id:"returns-10",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"shadowedscene",children:"ShadowedScene"}),"\n",(0,i.jsxs)(n.p,{children:["A scene that supports efficient cast shadows. \ud83d\udcd5 ",(0,i.jsx)(n.a,{href:"https://docs.thatopen.com/Tutorials/Components/Core/ShadowedScene",children:"Tutorial"}),". \ud83d\udcd8 ",(0,i.jsx)(n.a,{href:"https://docs.thatopen.com/api/@thatopen/components/classes/ShadowedScene",children:"API"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:(0,i.jsx)(n.code,{children:"Configurable"})}),"<",(0,i.jsx)(n.code,{children:"SimpleSceneConfigManager"}),", ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/ShadowedSceneConfig",children:(0,i.jsx)(n.code,{children:"ShadowedSceneConfig"})}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"ambientlights",children:"ambientLights"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ambientLights"}),": ",(0,i.jsx)(n.code,{children:"Map"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"AmbientLight"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The set of ambient lights managed by this scene component."}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#ambientlights",children:(0,i.jsx)(n.code,{children:"ambientLights"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"autobias",children:"autoBias"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"autoBias"}),": ",(0,i.jsx)(n.code,{children:"boolean"})," = ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether the bias property should be set automatically depending on the shadow distance."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"config"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"config"}),": ",(0,i.jsx)(n.code,{children:"SimpleSceneConfigManager"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable#config",children:"Configurable.config"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:(0,i.jsx)(n.code,{children:"Configurable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable#config",children:(0,i.jsx)(n.code,{children:"config"})})]}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#config",children:(0,i.jsx)(n.code,{children:"config"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"currentworld",children:"currentWorld"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"currentWorld"}),": ",(0,i.jsx)(n.code,{children:"null"})," | ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/World",children:(0,i.jsx)(n.code,{children:"World"})})," = ",(0,i.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The current world this item is associated with. It can be null if no world is currently active."}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#currentworld",children:(0,i.jsx)(n.code,{children:"currentWorld"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"directionallights",children:"directionalLights"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"directionalLights"}),": ",(0,i.jsx)(n.code,{children:"Map"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"DirectionalLight"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The set of directional lights managed by this scene component."}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#directionallights",children:(0,i.jsx)(n.code,{children:"directionalLights"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"issetup",children:"isSetup"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isSetup"}),": ",(0,i.jsx)(n.code,{children:"boolean"})," = ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable#issetup",children:"Configurable.isSetup"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:(0,i.jsx)(n.code,{children:"Configurable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable#issetup",children:(0,i.jsx)(n.code,{children:"isSetup"})})]}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#issetup",children:(0,i.jsx)(n.code,{children:"isSetup"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ondisposed",children:"onDisposed"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onDisposed"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:"Disposable.onDisposed"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:(0,i.jsx)(n.code,{children:"onDisposed"})})]}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#ondisposed",children:(0,i.jsx)(n.code,{children:"onDisposed"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onsetup",children:"onSetup"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onSetup"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable#onsetup",children:"Configurable.onSetup"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:(0,i.jsx)(n.code,{children:"Configurable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable#onsetup",children:(0,i.jsx)(n.code,{children:"onSetup"})})]}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#onsetup",children:(0,i.jsx)(n.code,{children:"onSetup"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onworldchanged",children:"onWorldChanged"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onWorldChanged"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"object"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Event that is triggered when a world is added or removed from the ",(0,i.jsx)(n.code,{children:"worlds"}),' map.\r\nThe event payload contains the world instance and the action ("added" or "removed").']}),"\n",(0,i.jsx)(n.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,i.jsx)(n.h5,{id:"action",children:"action"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"action"}),": ",(0,i.jsx)(n.code,{children:'"added"'})," | ",(0,i.jsx)(n.code,{children:'"removed"'})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"world",children:"world"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"world"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/World",children:(0,i.jsx)(n.code,{children:"World"})})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-7",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#onworldchanged",children:(0,i.jsx)(n.code,{children:"onWorldChanged"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"three",children:"three"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"three"}),": ",(0,i.jsx)(n.code,{children:"Scene"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The underlying Three.js scene object.\r\nIt is used to define the 3D space containing objects, lights, and cameras."}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-8",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#three",children:(0,i.jsx)(n.code,{children:"three"})})]}),"\n",(0,i.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,i.jsx)(n.h3,{id:"bias",children:"bias"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"get"})," ",(0,i.jsx)(n.strong,{children:"bias"}),"(): ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The getter for the bias to prevent artifacts (stripes). It usually ranges between 0 and -0.005."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"set"})," ",(0,i.jsx)(n.strong,{children:"bias"}),"(",(0,i.jsx)(n.code,{children:"value"}),"): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The setter for the bias to prevent artifacts (stripes). It usually ranges between 0 and -0.005."}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"value"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"number"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"distancerenderer",children:"distanceRenderer"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"get"})," ",(0,i.jsx)(n.strong,{children:"distanceRenderer"}),"(): ",(0,i.jsx)(n.code,{children:"DistanceRenderer"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Getter to get the renderer used to determine the farthest distance from the camera."}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DistanceRenderer"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"shadowsenabled",children:"shadowsEnabled"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"get"})," ",(0,i.jsx)(n.strong,{children:"shadowsEnabled"}),"(): ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Getter to see whether the shadows are enabled or not in this scene instance."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"set"})," ",(0,i.jsx)(n.strong,{children:"shadowsEnabled"}),"(",(0,i.jsx)(n.code,{children:"value"}),"): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Setter to control whether the shadows are enabled or not in this scene instance."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"value"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"boolean"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dispose"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:"Disposable.dispose"})}),"\n",(0,i.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:(0,i.jsx)(n.code,{children:"dispose"})})]}),"\n",(0,i.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"SimpleScene.dispose"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isconfigurable",children:"isConfigurable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isConfigurable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Configurable<any, any>"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:"Configurable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Configurable<any, any>"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-9",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#isconfigurable",children:(0,i.jsx)(n.code,{children:"isConfigurable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isdisposeable",children:"isDisposeable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isDisposeable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Disposable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:"Disposable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Disposable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-10",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#isdisposeable",children:(0,i.jsx)(n.code,{children:"isDisposeable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ishideable",children:"isHideable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isHideable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Hideable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Hideable",children:"Hideable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Hideable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-11",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#ishideable",children:(0,i.jsx)(n.code,{children:"isHideable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isresizeable",children:"isResizeable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isResizeable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Resizeable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:"Resizeable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Resizeable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-12",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#isresizeable",children:(0,i.jsx)(n.code,{children:"isResizeable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isupdateable",children:"isUpdateable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isUpdateable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Updateable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:"Updateable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Updateable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-13",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#isupdateable",children:(0,i.jsx)(n.code,{children:"isUpdateable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"setup",children:"setup()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"setup"}),"(",(0,i.jsx)(n.code,{children:"config"}),"?): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable#setup",children:"Configurable.setup"})}),"\n",(0,i.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.code,{children:"config"}),"?"]}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.code,{children:"Partial"})," <",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/ShadowedSceneConfig",children:(0,i.jsx)(n.code,{children:"ShadowedSceneConfig"})}),">"]})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-5",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:(0,i.jsx)(n.code,{children:"Configurable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable#setup",children:(0,i.jsx)(n.code,{children:"setup"})})]}),"\n",(0,i.jsx)(n.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene",children:(0,i.jsx)(n.code,{children:"SimpleScene"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleScene#setup",children:(0,i.jsx)(n.code,{children:"setup"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"updateshadows",children:"updateShadows()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"updateShadows"}),"(): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Update all the shadows of the scene."}),"\n",(0,i.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var i=s(6540);const r={},l=i.createContext(r);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);