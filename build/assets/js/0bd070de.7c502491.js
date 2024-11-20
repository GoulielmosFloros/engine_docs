"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[9765],{7106:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=s(4848),r=s(8453);const t={},l="IfcGeometryTiler",d={id:"api/@thatopen/components/classes/IfcGeometryTiler",title:"IfcGeometryTiler",description:"A component that handles the tiling of IFC geometries for efficient streaming. \ud83d\udcd5 Tutorial. \ud83d\udcd8 API.",source:"@site/docs/api/@thatopen/components/classes/IfcGeometryTiler.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/IfcGeometryTiler",permalink:"/api/@thatopen/components/classes/IfcGeometryTiler",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcFragmentSettings",permalink:"/api/@thatopen/components/classes/IfcFragmentSettings"},next:{title:"IfcIsolator",permalink:"/api/@thatopen/components/classes/IfcIsolator"}},o={},c=[{value:"Extends",id:"extends",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Overrides",id:"overrides",level:4},{value:"onAssetStreamed",id:"onassetstreamed",level:3},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"onGeometryStreamed",id:"ongeometrystreamed",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"buffer",id:"buffer",level:5},{value:"data",id:"data",level:5},{value:"onIfcLoaded",id:"onifcloaded",level:3},{value:"onProgress",id:"onprogress",level:3},{value:"settings",id:"settings",level:3},{value:"webIfc",id:"webifc",level:3},{value:"uuid",id:"uuid",level:3},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"isConfigurable()",id:"isconfigurable",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"isDisposeable()",id:"isdisposeable",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"isHideable()",id:"ishideable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"isResizeable()",id:"isresizeable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"isUpdateable()",id:"isupdateable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"streamFromBuffer()",id:"streamfrombuffer",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Example",id:"example",level:4},{value:"streamFromCallBack()",id:"streamfromcallback",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Remarks",id:"remarks-1",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ifcgeometrytiler",children:"IfcGeometryTiler"}),"\n",(0,i.jsxs)(n.p,{children:["A component that handles the tiling of IFC geometries for efficient streaming. \ud83d\udcd5 ",(0,i.jsx)(n.a,{href:"https://docs.thatopen.com/Tutorials/Components/Core/IfcGeometryTiler",children:"Tutorial"}),". \ud83d\udcd8 ",(0,i.jsx)(n.a,{href:"https://docs.thatopen.com/api/@thatopen/components/classes/IfcGeometryTiler",children:"API"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(n.code,{children:"Component"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"enabled"}),": ",(0,i.jsx)(n.code,{children:"boolean"})," = ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component#enabled",children:"Component.enabled"})}),"\n",(0,i.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(n.code,{children:"Component"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component#enabled",children:(0,i.jsx)(n.code,{children:"enabled"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onassetstreamed",children:"onAssetStreamed"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onAssetStreamed"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/AsyncEvent",children:(0,i.jsx)(n.code,{children:"AsyncEvent"})})," <",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/StreamedAsset",children:(0,i.jsx)(n.code,{children:"StreamedAsset"})}),"[]>"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Event triggered when assets are streamed.\r\nContains the streamed assets."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ondisposed",children:"onDisposed"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onDisposed"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:"Disposable.onDisposed"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:(0,i.jsx)(n.code,{children:"onDisposed"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ongeometrystreamed",children:"onGeometryStreamed"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onGeometryStreamed"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/AsyncEvent",children:(0,i.jsx)(n.code,{children:"AsyncEvent"})}),"<",(0,i.jsx)(n.code,{children:"object"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Event triggered when geometry is streamed.\r\nContains the streamed geometry data and its buffer."}),"\n",(0,i.jsx)(n.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,i.jsx)(n.h5,{id:"buffer",children:"buffer"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"buffer"}),": ",(0,i.jsx)(n.code,{children:"Uint8Array"})]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"data",children:"data"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"data"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/StreamedGeometries",children:(0,i.jsx)(n.code,{children:"StreamedGeometries"})})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onifcloaded",children:"onIfcLoaded"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onIfcLoaded"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/AsyncEvent",children:(0,i.jsx)(n.code,{children:"AsyncEvent"})}),"<",(0,i.jsx)(n.code,{children:"Uint8Array"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Event triggered when the IFC file is loaded.\r\nContains the loaded IFC file data."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onprogress",children:"onProgress"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onProgress"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/AsyncEvent",children:(0,i.jsx)(n.code,{children:"AsyncEvent"})}),"<",(0,i.jsx)(n.code,{children:"number"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Event triggered to indicate the progress of the streaming process.\r\nContains the progress percentage."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"settings",children:"settings"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"settings"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/IfcStreamingSettings",children:(0,i.jsx)(n.code,{children:"IfcStreamingSettings"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Settings for the IfcGeometryTiler."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"webifc",children:"webIfc"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"webIfc"}),": ",(0,i.jsx)(n.code,{children:"IfcAPI"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The WebIFC API instance used for IFC file processing."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"uuid",children:"uuid"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"static"})," ",(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"uuid"}),": ",(0,i.jsx)(n.code,{children:'"d9999a00-e1f5-4d3f-8cfe-c56e08609764"'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A unique identifier for the component.\r\nThis UUID is used to register the component within the Components system."}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dispose"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:"Disposable.dispose"})}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:(0,i.jsx)(n.code,{children:"dispose"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isconfigurable",children:"isConfigurable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isConfigurable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Configurable<any, any>"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:"Configurable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Configurable<any, any>"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(n.code,{children:"Component"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component#isconfigurable",children:(0,i.jsx)(n.code,{children:"isConfigurable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isdisposeable",children:"isDisposeable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isDisposeable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Disposable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:"Disposable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Disposable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(n.code,{children:"Component"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component#isdisposeable",children:(0,i.jsx)(n.code,{children:"isDisposeable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ishideable",children:"isHideable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isHideable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Hideable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Hideable",children:"Hideable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Hideable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(n.code,{children:"Component"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component#ishideable",children:(0,i.jsx)(n.code,{children:"isHideable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isresizeable",children:"isResizeable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isResizeable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Resizeable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:"Resizeable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Resizeable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(n.code,{children:"Component"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component#isresizeable",children:(0,i.jsx)(n.code,{children:"isResizeable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"isupdateable",children:"isUpdateable()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"isUpdateable"}),"(): ",(0,i.jsx)(n.code,{children:"this is Updateable"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Whether is component is ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:"Updateable"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"this is Updateable"})}),"\n",(0,i.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(n.code,{children:"Component"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component#isupdateable",children:(0,i.jsx)(n.code,{children:"isUpdateable"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"streamfrombuffer",children:"streamFromBuffer()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"streamFromBuffer"}),"(",(0,i.jsx)(n.code,{children:"data"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This method streams the IFC file from a given buffer."}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"data"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Uint8Array"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The Uint8Array containing the IFC file data."})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"A Promise that resolves when the streaming process is complete."}),"\n",(0,i.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(n.p,{children:"This method cleans up any resources after the streaming process is complete."}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const ifcData = await fetch('path/to/ifc/file.ifc');\r\nconst rawBuffer = await response.arrayBuffer();\r\nconst ifcBuffer = new Uint8Array(rawBuffer);\r\nawait ifcGeometryTiler.streamFromBuffer(ifcBuffer);\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"streamfromcallback",children:"streamFromCallBack()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"streamFromCallBack"}),"(",(0,i.jsx)(n.code,{children:"loadCallback"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This method streams the IFC file from a given callback."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"loadCallback"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"ModelLoadCallback"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The callback function that will be used to load the IFC file."})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(n.p,{children:"A Promise that resolves when the streaming process is complete."}),"\n",(0,i.jsx)(n.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,i.jsx)(n.p,{children:"This method cleans up any resources after the streaming process is complete."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);