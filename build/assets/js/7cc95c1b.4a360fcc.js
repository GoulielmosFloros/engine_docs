"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p=void 0,s={unversionedId:"Tutorials/UserInterface/OBC/ElementProperties",id:"Tutorials/UserInterface/OBC/ElementProperties",title:"ElementProperties",description:"Copying and pasting? We got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/UserInterface/OBC/ElementProperties.mdx",sourceDirName:"Tutorials/UserInterface/OBC",slug:"/Tutorials/UserInterface/OBC/ElementProperties",permalink:"/Tutorials/UserInterface/OBC/ElementProperties",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClassificationsTree",permalink:"/Tutorials/UserInterface/OBC/ClassificationsTree"},next:{title:"EntityAttributes",permalink:"/Tutorials/UserInterface/OBC/EntityAttributes"}},c={},d=[{value:"Displaying data the simplest way \ud83d\udd25\ud83d\udd25",id:"displaying-data-the-simplest-way-",level:2},{value:"Loading a model and computing it&#39;s relations",id:"loading-a-model-and-computing-its-relations",level:3},{value:"Creating the properties table",id:"creating-the-properties-table",level:3},{value:"Creating a panel to append the table",id:"creating-a-panel-to-append-the-table",level:3}],u={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Source",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Copying and pasting? We got you covered! You can find the full source code of this tutorial ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_ui-components/blob/main/packages/obc/src/components/tables/ElementProperties/example.ts"},"here"),".")),(0,o.kt)("h2",{id:"displaying-data-the-simplest-way-"},"Displaying data the simplest way \ud83d\udd25\ud83d\udd25"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"What is a good BIM app if you don't give users a nice way to visualize its model properties, right? Well, hold tight as here you will learn all you need to know in order to use the power of UI Components to accomplish that!"),(0,o.kt)("h3",{id:"loading-a-model-and-computing-its-relations"},"Loading a model and computing it's relations"),(0,o.kt)("p",null,"First things first... let's load a model \ud83d\udc47"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const ifcLoader = components.get(OBC.IfcLoader);\nawait ifcLoader.setup();\nconst file = await fetch("/resources/small.ifc");\nconst buffer = await file.arrayBuffer();\nconst typedArray = new Uint8Array(buffer);\nconst model = await ifcLoader.load(typedArray);\nworld.scene.three.add(model);\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You don't need to add the model into the scene to display its properties. However, as we are going to display the properties for each selected element, then having the model into the scene is obvious, right?")),(0,o.kt)("p",null,"Now, in order to get the most out of the properties table, you need to calculate the relations index of your model. To do it, you will need to use the ",(0,o.kt)("a",{parentName:"p",href:"/Tutorials/Components/Core/IfcRelationsIndexer"},"IfcRelationsIndexer")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@thatopen/components")," to speed up the process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const indexer = components.get(OBC.IfcRelationsIndexer);\nawait indexer.process(model);\n")),(0,o.kt)("p",null,"Once the relations are processed, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Element Properties")," component has everything it needs in order to display the properties in a cool way \ud83d\ude0e."),(0,o.kt)("h3",{id:"creating-the-properties-table"},"Creating the properties table"),(0,o.kt)("p",null,"Let's create an instance of the functional component, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const [propertiesTable, updatePropertiesTable] = CUI.tables.elementProperties({\n  components,\n  fragmentIdMap: {},\n});\n\npropertiesTable.preserveStructureOnFilter = true;\npropertiesTable.indentationInText = false;\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"elementProperties")," functional component is a simplified version that shows any model entity data. However, if you like a more complete properties table, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"entityAttributes")," component.")),(0,o.kt)("p",null,"Cool! properties table created. Then after, let's tell the properties table to update each time the user makes a selection over the model. For it, we will use the highlighter from ",(0,o.kt)("inlineCode",{parentName:"p"},"@thatopen/components-front"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const highlighter = components.get(OBF.Highlighter);\nhighlighter.setup({ world });\n\nhighlighter.events.select.onHighlight.add((fragmentIdMap) => {\n  updatePropertiesTable({ fragmentIdMap });\n});\n\nhighlighter.events.select.onClear.add(() =>\n  updatePropertiesTable({ fragmentIdMap: {} }),\n);\n")),(0,o.kt)("h3",{id:"creating-a-panel-to-append-the-table"},"Creating a panel to append the table"),(0,o.kt)("p",null,"Allright! Let's now create a BIM Panel to control some aspects of the properties table and to trigger some functionalities like expanding the rows children and copying the values to TSV, so you can paste your element values inside a spreadsheet application \ud83d\ude09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const propertiesPanel = BUI.Component.create(() => {\n  const onTextInput = (e: Event) => {\n    const input = e.target as BUI.TextInput;\n    propertiesTable.queryString = input.value !== "" ? input.value : null;\n  };\n\n  const expandTable = (e: Event) => {\n    const button = e.target as BUI.Button;\n    propertiesTable.expanded = !propertiesTable.expanded;\n    button.label = propertiesTable.expanded ? "Collapse" : "Expand";\n  };\n\n  const copyAsTSV = async () => {\n    await navigator.clipboard.writeText(propertiesTable.tsv);\n  };\n\n  return BUI.html`\n    <bim-panel label="Properties">\n      <bim-panel-section label="Element Data">\n        <div style="display: flex; gap: 0.5rem;">\n          <bim-button @click=${expandTable} label=${propertiesTable.expanded ? "Collapse" : "Expand"}></bim-button> \n          <bim-button @click=${copyAsTSV} label="Copy as TSV"></bim-button> \n        </div> \n        <bim-text-input @input=${onTextInput} placeholder="Search Property"></bim-text-input>\n        ${propertiesTable}\n      </bim-panel-section>\n    </bim-panel>\n  `;\n});\n')),(0,o.kt)("p",null,"Finally, let's create a BIM Grid element and provide both the panel and the viewport to display everything."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const app = document.createElement("bim-grid");\napp.layouts = {\n  main: {\n    template: `\n    "propertiesPanel viewport"\n    /25rem 1fr\n    `,\n    elements: { propertiesPanel, viewport },\n  },\n};\n\napp.layout = "main";\ndocument.body.append(app);\n')),(0,o.kt)("p",null,"Congratulations! You have now created a fully working properties table for your app in less than 5 minutes of work. Keep going with more tutorials! \ud83d\udcaa"),(0,o.kt)("iframe",{src:"https://thatopen.github.io/engine_ui-components/examples/ElementProperties"}))}h.isMDXComponent=!0}}]);