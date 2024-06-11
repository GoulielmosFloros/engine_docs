"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[7124],{9272:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(4848),s=n(8453);const r={},d="Table",i={id:"api/@thatopen/ui/classes/Table",title:"Table",description:"Heloooooooooo",source:"@site/docs/api/@thatopen/ui/classes/Table.md",sourceDirName:"api/@thatopen/ui/classes",slug:"/api/@thatopen/ui/classes/Table",permalink:"/api/@thatopen/ui/classes/Table",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tab",permalink:"/api/@thatopen/ui/classes/Tab"},next:{title:"Tabs",permalink:"/api/@thatopen/ui/classes/Tabs"}},a={},c=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"definition",id:"definition",level:3},{value:"Default Value",id:"default-value",level:4},{value:"expanded",id:"expanded",level:3},{value:"Default Value",id:"default-value-1",level:4},{value:"Examples",id:"examples",level:4},{value:"filterFunction()?",id:"filterfunction",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"headersHidden",id:"headershidden",level:3},{value:"Remarks",id:"remarks",level:4},{value:"Default Value",id:"default-value-2",level:4},{value:"Examples",id:"examples-1",level:4},{value:"indentationInText",id:"indentationintext",level:3},{value:"Default Value",id:"default-value-3",level:4},{value:"Example",id:"example",level:4},{value:"preserveStructureOnFilter",id:"preservestructureonfilter",level:3},{value:"Default Value",id:"default-value-4",level:4},{value:"Example",id:"example-1",level:4},{value:"Accessors",id:"accessors",level:2},{value:"columns",id:"columns",level:3},{value:"Example",id:"example-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"csv",id:"csv",level:3},{value:"Example",id:"example-3",level:4},{value:"Returns",id:"returns-1",level:4},{value:"data",id:"data",level:3},{value:"Example",id:"example-4",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"queryString",id:"querystring",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"tsv",id:"tsv",level:3},{value:"Example",id:"example-5",level:4},{value:"Returns",id:"returns-2",level:4},{value:"value",id:"value",level:3},{value:"Example",id:"example-6",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Methods",id:"methods",level:2},{value:"downloadData()",id:"downloaddata",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Example",id:"example-7",level:4}];function h(e){const l={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h1,{id:"table",children:"Table"}),"\n",(0,t.jsx)(l.p,{children:"Heloooooooooo"}),"\n",(0,t.jsx)(l.h2,{id:"extends",children:"Extends"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:(0,t.jsx)(l.code,{children:"LitElement"})}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(l.h3,{id:"definition",children:"definition"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"definition"}),": ",(0,t.jsx)(l.code,{children:"TableDefinition"})," = ",(0,t.jsx)(l.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"A property representing the definition for transforming table data.\r\nThe keys of the object are the column names, and the values are functions that define the transformation logic."}),"\n",(0,t.jsx)(l.h4,{id:"default-value",children:"Default Value"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-ts",children:"An empty object.\n"})}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"expanded",children:"expanded"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"expanded"}),": ",(0,t.jsx)(l.code,{children:"boolean"})," = ",(0,t.jsx)(l.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["A boolean property that determines whether the table is expanded or not.\r\nWhen ",(0,t.jsx)(l.code,{children:"true"}),", the table will be expanded to show all rows.\r\nWhen ",(0,t.jsx)(l.code,{children:"false"}),", the table will be collapsed to show only the top-level rows."]}),"\n",(0,t.jsx)(l.h4,{id:"default-value-1",children:"Default Value"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-ts",children:"false\n"})}),"\n",(0,t.jsx)(l.h4,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:"table.expanded = true;\n"})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-html",children:"<bim-table expanded></bim-table>\n"})}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"filterfunction",children:"filterFunction()?"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"optional"})," ",(0,t.jsx)(l.strong,{children:"filterFunction"}),": (",(0,t.jsx)(l.code,{children:"queryString"}),", ",(0,t.jsx)(l.code,{children:"data"}),") => ",(0,t.jsx)(l.code,{children:"boolean"})]}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"A function type representing the filter function for the table.\r\nThis function is used to determine whether a given row of data should be included in the filtered results."}),"\n",(0,t.jsx)(l.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(l.tbody,{children:[(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"queryString"})}),(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"string"})}),(0,t.jsx)(l.td,{style:{textAlign:"left"},children:"The search string or query used to filter the data."})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"data"})}),(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"TableGroupData"})}),(0,t.jsx)(l.td,{style:{textAlign:"left"},children:"The data row to be filtered."})]})]})]}),"\n",(0,t.jsx)(l.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.code,{children:"boolean"})}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"headershidden",children:"headersHidden"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"headersHidden"}),": ",(0,t.jsx)(l.code,{children:"boolean"})," = ",(0,t.jsx)(l.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"A boolean property that determines whether the table headers are hidden."}),"\n",(0,t.jsx)(l.h4,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(l.p,{children:"This property can be used to hide the table headers when needed."}),"\n",(0,t.jsx)(l.h4,{id:"default-value-2",children:"Default Value"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-ts",children:"false\n"})}),"\n",(0,t.jsx)(l.h4,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:"table.headersHidden = true;\n"})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-html",children:"<bim-table headers-hidden></bim-table>\n"})}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"indentationintext",children:"indentationInText"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"indentationInText"}),": ",(0,t.jsx)(l.code,{children:"boolean"})," = ",(0,t.jsx)(l.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"A boolean property that determines whether the table indentation should be included in the exported text."}),"\n",(0,t.jsx)(l.h4,{id:"default-value-3",children:"Default Value"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-ts",children:"false\n"})}),"\n",(0,t.jsx)(l.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:"table.indentationInText = true;\n"})}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"preservestructureonfilter",children:"preserveStructureOnFilter"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"preserveStructureOnFilter"}),": ",(0,t.jsx)(l.code,{children:"boolean"})," = ",(0,t.jsx)(l.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["A boolean property that determines whether the table preserves its structure when filtering.\r\nWhen ",(0,t.jsx)(l.code,{children:"true"}),", the table will preserve its structure, showing only the filtered rows and their parents.\r\nWhen ",(0,t.jsx)(l.code,{children:"false"}),", the table will not preserve its structure, showing only the filtered rows."]}),"\n",(0,t.jsx)(l.h4,{id:"default-value-4",children:"Default Value"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-ts",children:"false\n"})}),"\n",(0,t.jsx)(l.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:"table.preserveStructureOnFilter = true;\n"})}),"\n",(0,t.jsx)(l.h2,{id:"accessors",children:"Accessors"}),"\n",(0,t.jsx)(l.h3,{id:"columns",children:"columns"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"set"})," ",(0,t.jsx)(l.strong,{children:"columns"}),"(",(0,t.jsx)(l.code,{children:"value"}),"): ",(0,t.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["Sets the columns for the table.\r\nThis property allows you to define the columns order for the table.\r\nIf this is not set, it will be computed from the ",(0,t.jsx)(l.code,{children:"table.data"})," object.\r\nThe columns can be provided as an array of strings or objects of type ",(0,t.jsx)(l.code,{children:"ColumnData"}),".\r\nIf the columns are provided as strings, they will be converted to ",(0,t.jsx)(l.code,{children:"ColumnData"})," objects with a default width."]}),"\n",(0,t.jsx)(l.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:'const columns: (string | ColumnData)[] = [\r\n  "Column 1",\r\n  "Column 2",\r\n  { name: "Column 3", width: "200px" },\r\n];\r\ntable.columns = columns;\n'})}),"\n",(0,t.jsx)(l.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(l.tbody,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"value"})}),(0,t.jsxs)(l.td,{style:{textAlign:"left"},children:["(",(0,t.jsx)(l.code,{children:"string"})," | ",(0,t.jsx)(l.a,{href:"/api/@thatopen/ui/interfaces/ColumnData",children:(0,t.jsx)(l.code,{children:"ColumnData"})}),")[]"]}),(0,t.jsxs)(l.td,{style:{textAlign:"left"},children:["An array of strings or objects of type ",(0,t.jsx)(l.code,{children:"ColumnData"}),"."]})]})})]}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"csv",children:"csv"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"get"})," ",(0,t.jsx)(l.strong,{children:"csv"}),"(): ",(0,t.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"A getter function that generates a CSV (Comma Separated Values) representation of the table data."}),"\n",(0,t.jsx)(l.h4,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:'const csvData = table.csv;\r\nconsole.log(csvData); // Output: "Column 1,Column 2\\nValue 1,Value 2\\nValue 3,Value 4"\n'})}),"\n",(0,t.jsx)(l.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.code,{children:"string"})}),"\n",(0,t.jsx)(l.p,{children:"A string containing the CSV representation of the table data."}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"data",children:"data"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"set"})," ",(0,t.jsx)(l.strong,{children:"data"}),"(",(0,t.jsx)(l.code,{children:"value"}),"): ",(0,t.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["Sets the data for the table.\r\nThis property allows you to define the data that will be displayed in the table.\r\nThe data is expected to be an array of ",(0,t.jsx)(l.code,{children:"TableGroupData"})," objects.\r\nIf the columns are not explicitly set, they will be computed from the ",(0,t.jsx)(l.code,{children:"data"})," object."]}),"\n",(0,t.jsx)(l.h4,{id:"example-4",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:'const data: TableGroupData[] = [\r\n  { data: { "Column 1": "Value 1", "Column 2": "Value 2" } },\r\n  { data: { "Column 1": "Value 3", "Column 2": "Value 4" } },\r\n];\r\ntable.data = data;\n'})}),"\n",(0,t.jsx)(l.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(l.tbody,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"value"})}),(0,t.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,t.jsx)(l.code,{children:"TableGroupData"}),"[]"]}),(0,t.jsxs)(l.td,{style:{textAlign:"left"},children:["An array of ",(0,t.jsx)(l.code,{children:"TableGroupData"})," objects representing the table data."]})]})})]}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"querystring",children:"queryString"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"set"})," ",(0,t.jsx)(l.strong,{children:"queryString"}),"(",(0,t.jsx)(l.code,{children:"_value"}),"): ",(0,t.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"Sets the search string for filtering the table data.\r\nThis property allows you to filter the table data based on a search string.\r\nIf a search string is provided, the table will only display rows that match the search criteria.\r\nThe search criteria can be a simple string or a complex query.\r\nIf a simple string is provided, the table will filter rows based on the string's presence in any column.\r\nIf a complex query is provided, the table will filter rows based on the query's conditions and values."}),"\n",(0,t.jsx)(l.h4,{id:"examples-2",children:"Examples"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:'table.queryString = "example";\n'})}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:'table.queryString = "column1="Jhon Doe" & column2=20";\n'})}),"\n",(0,t.jsx)(l.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(l.tbody,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"_value"})}),(0,t.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,t.jsx)(l.code,{children:"null"})," | ",(0,t.jsx)(l.code,{children:"string"})]}),(0,t.jsxs)(l.td,{style:{textAlign:"left"},children:["The search string or ",(0,t.jsx)(l.code,{children:"null"})," to clear the search."]})]})})]}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"tsv",children:"tsv"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"get"})," ",(0,t.jsx)(l.strong,{children:"tsv"}),"(): ",(0,t.jsx)(l.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"A getter function that generates a Tab Separated Values (TSV) representation of the table data."}),"\n",(0,t.jsx)(l.h4,{id:"example-5",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:'const tsvData = table.tsv;\r\nconsole.log(tsvData); // Output: "Column 1\\tColumn 2\\nValue 1\\tValue 2\\nValue 3\\tValue 4"\n'})}),"\n",(0,t.jsx)(l.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.code,{children:"string"})}),"\n",(0,t.jsx)(l.p,{children:"A string containing the TSV representation of the table data."}),"\n",(0,t.jsx)(l.hr,{}),"\n",(0,t.jsx)(l.h3,{id:"value",children:"value"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"get"})," ",(0,t.jsx)(l.strong,{children:"value"}),"(): ",(0,t.jsx)(l.code,{children:"TableGroupData"}),"[]"]}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["Getter for the ",(0,t.jsx)(l.code,{children:"value"})," property.\r\nReturns the filtered data if a search string is provided, otherwise returns the original data."]}),"\n",(0,t.jsx)(l.h4,{id:"example-6",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:"const tableValue = table.value;\r\nconsole.log(tableValue); // Output: The filtered or original data.\n"})}),"\n",(0,t.jsx)(l.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"TableGroupData"}),"[]"]}),"\n",(0,t.jsx)(l.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(l.h3,{id:"downloaddata",children:"downloadData()"}),"\n",(0,t.jsxs)(l.blockquote,{children:["\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"downloadData"}),"(",(0,t.jsx)(l.code,{children:"fileName"}),", ",(0,t.jsx)(l.code,{children:"format"}),"): ",(0,t.jsx)(l.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["The ",(0,t.jsx)(l.code,{children:"downloadData"})," method is used to download the table data in different formats."]}),"\n",(0,t.jsx)(l.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Default value"}),(0,t.jsx)(l.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(l.tbody,{children:[(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"fileName"})}),(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"string"})}),(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:'"BIM Table Data"'})}),(0,t.jsx)(l.td,{style:{textAlign:"left"},children:'The name of the downloaded file. Default is "BIM Table Data".'})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:"format"})}),(0,t.jsxs)(l.td,{style:{textAlign:"left"},children:[(0,t.jsx)(l.code,{children:'"json"'})," | ",(0,t.jsx)(l.code,{children:'"tsv"'})," | ",(0,t.jsx)(l.code,{children:'"csv"'})]}),(0,t.jsx)(l.td,{style:{textAlign:"left"},children:(0,t.jsx)(l.code,{children:'"json"'})}),(0,t.jsx)(l.td,{style:{textAlign:"left"},children:'The format of the downloaded file. Can be "json", "tsv", or "csv". Default is "json".'})]})]})]}),"\n",(0,t.jsx)(l.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.code,{children:"void"})}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsx)(l.li,{children:"This method does not return any value."}),"\n"]}),"\n",(0,t.jsx)(l.h4,{id:"example-7",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-typescript",children:'table.downloadData("MyTableData", "tsv");\n'})})]})}function o(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,l,n)=>{n.d(l,{R:()=>d,x:()=>i});var t=n(6540);const s={},r=t.createContext(s);function d(e){const l=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:l},e.children)}}}]);