"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={},l=void 0,c={unversionedId:"Tutorials/UserInterface/OBC/ClassificationsTree",id:"Tutorials/UserInterface/OBC/ClassificationsTree",title:"ClassificationsTree",description:"Copying and pasting? We got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/UserInterface/OBC/ClassificationsTree.mdx",sourceDirName:"Tutorials/UserInterface/OBC",slug:"/Tutorials/UserInterface/OBC/ClassificationsTree",permalink:"/Tutorials/UserInterface/OBC/ClassificationsTree",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Component",permalink:"/Tutorials/UserInterface/Core/Component"},next:{title:"ElementProperties",permalink:"/Tutorials/UserInterface/OBC/ElementProperties"}},p={},u=[{value:"Displaying elements grouping \ud83d\udce6",id:"displaying-elements-grouping-",level:2},{value:"Creating the classifications tree",id:"creating-the-classifications-tree",level:3}],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Source",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Copying and pasting? We got you covered! You can find the full source code of this tutorial ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_ui-components/blob/main/packages/obc/src/components/tables/ClassificationsTree/example.ts"},"here"),".")),(0,s.kt)("h2",{id:"displaying-elements-grouping-"},"Displaying elements grouping \ud83d\udce6"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"One of the greatest things we can make using BIM models is to group elements based on their properties. This has many use cases! Like grouping elements to check their collisions \ud83d\udca5, grouping elements based on their construction activities \ud83d\udd28, or grouping fininshed elements during the construction phase \u2705.\nOther than grouping the elements, the next most important thing is to show them to your user in an easy way... well, here is where it comes the ",(0,s.kt)("inlineCode",{parentName:"p"},"ClassificationsTree")," functional component!"),(0,s.kt)("h3",{id:"creating-the-classifications-tree"},"Creating the classifications tree"),(0,s.kt)("p",null,"First things first, let's create an instance of the functional component, like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const [classificationsTree, updateClassificationsTree] =\n  CUI.tables.classificationTree({\n    components,\n    classifications: {},\n  });\n")),(0,s.kt)("p",null,"Now that we have the classifications tree created, let's tell the ",(0,s.kt)("inlineCode",{parentName:"p"},"FragmentsManager")," that each time a model is loaded it needs to classify the model based on some conditions, but more importantly is that right after those classifications are made it needs to update the classifications tree!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const classifier = components.get(OBC.Classifier);\n\nfragmentsManager.onFragmentsLoaded.add(async (model) => {\n  // This creates a classification system named "entities"\n  classifier.byEntity(model);\n\n  // This creates a classification system named "predefinedTypes"\n  await classifier.byPredefinedType(model);\n\n  const classifications = {\n    Entities: ["entities", "predefinedTypes"],\n    "Predefined Types": ["predefinedTypes"],\n  };\n\n  updateClassificationsTree({ classifications });\n});\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"classifications"),' value is just an object where they keys are the names in the tree, and the values are the orders in which you want to group the elements. So, for example, "Entities" groups the elements based on their entities and then based on their predefined types. Needless to say, the classifications need to be computed before they can be used on the tree. You can check the system names from ',(0,s.kt)("inlineCode",{parentName:"p"},"classifier.list"),".\nGreat! As we already told the UI when it needs to update, let's add the classifications tree to the HTML page. For it, let's create simple BIM panel component where we include the tree and also a pre-made IFC load button \ud83d\udc47"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const panel = BUI.Component.create(() => {\n  const [loadIfcBtn] = CUI.buttons.loadIfc({ components });\n\n  return BUI.html`\n   <bim-panel label="Classifications Tree">\n    <bim-panel-section label="Importing">\n      ${loadIfcBtn}\n    </bim-panel-section>\n    <bim-panel-section label="Classifications">\n      ${classificationsTree}\n    </bim-panel-section>\n   </bim-panel> \n  `;\n});\n')),(0,s.kt)("p",null,"Finally, let's append the BIM Panel to the page to see the classifications tree working \ud83d\ude09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const app = document.createElement("bim-grid");\napp.layouts = {\n  main: {\n    template: `\n      "panel viewport"\n      / 23rem 1fr\n    `,\n    elements: { panel, viewport },\n  },\n};\n\napp.layout = "main";\ndocument.body.append(app);\n')),(0,s.kt)("p",null,"Congratulations! You've now a ready to go user interface that let's you show your model classifications. \ud83e\udd73"),(0,s.kt)("iframe",{src:"https://thatopen.github.io/engine_ui-components/examples/ClassificationsTree"}))}f.isMDXComponent=!0}}]);