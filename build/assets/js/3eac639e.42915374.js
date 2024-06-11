"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[6280],{9268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const a={},o=void 0,r={id:"Tutorials/UserInterface/OBC/ClassificationsTree",title:"ClassificationsTree",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/UserInterface/OBC/ClassificationsTree.mdx",sourceDirName:"Tutorials/UserInterface/OBC",slug:"/Tutorials/UserInterface/OBC/ClassificationsTree",permalink:"/Tutorials/UserInterface/OBC/ClassificationsTree",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Component",permalink:"/Tutorials/UserInterface/Core/Component"},next:{title:"ElementProperties",permalink:"/Tutorials/UserInterface/OBC/ElementProperties"}},c={},l=[{value:"Displaying elements grouping \ud83d\udce6",id:"displaying-elements-grouping-",level:2},{value:"Creating the classifications tree",id:"creating-the-classifications-tree",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"Source",type:"info",children:(0,s.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,s.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_ui-components/blob/main/packages/obc/src/components/tables/ClassificationsTree/example.ts",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"displaying-elements-grouping-",children:"Displaying elements grouping \ud83d\udce6"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["One of the greatest things we can make using BIM models is to group elements based on their properties. This has many use cases! Like grouping elements to check their collisions \ud83d\udca5, grouping elements based on their construction activities \ud83d\udd28, or grouping fininshed elements during the construction phase \u2705.\nOther than grouping the elements, the next most important thing is to show them to your user in an easy way... well, here is where it comes the ",(0,s.jsx)(n.code,{children:"ClassificationsTree"})," functional component!"]}),"\n",(0,s.jsx)(n.h3,{id:"creating-the-classifications-tree",children:"Creating the classifications tree"}),"\n",(0,s.jsx)(n.p,{children:"First things first, let's create an instance of the functional component, like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const [classificationsTree, updateClassificationsTree] =\n  CUI.tables.classificationTree({\n    components,\n    classifications: {},\n  });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now that we have the classifications tree created, let's tell the ",(0,s.jsx)(n.code,{children:"FragmentsManager"})," that each time a model is loaded it needs to classify the model based on some conditions, but more importantly is that right after those classifications are made it needs to update the classifications tree!"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const classifier = components.get(OBC.Classifier);\n\nfragmentsManager.onFragmentsLoaded.add(async (model) => {\n  // This creates a classification system named "entities"\n  classifier.byEntity(model);\n\n  // This creates a classification system named "predefinedTypes"\n  await classifier.byPredefinedType(model);\n\n  const classifications = {\n    Entities: ["entities"],\n    "Predefined Types": ["predefinedTypes"],\n  };\n\n  updateClassificationsTree({ classifications });\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"classifications"}),' value is just an object where they keys are the names in the tree, and the values are the orders in which you want to group the elements. So, for example, "Entities" groups the elements based on their entities and then based on their predefined types. Needless to say, the classifications need to be computed before they can be used on the tree. You can check the system names from ',(0,s.jsx)(n.code,{children:"classifier.list"}),".\nGreat! As we already told the UI when it needs to update, let's add the classifications tree to the HTML page. For it, let's create simple BIM panel component where we include the tree and also a pre-made IFC load button \ud83d\udc47"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create(() => {\n  const [loadIfcBtn] = CUI.buttons.loadIfc({ components });\n\n  return BUI.html`\n   <bim-panel label="Classifications Tree">\n    <bim-panel-section label="Importing">\n      ${loadIfcBtn}\n    </bim-panel-section>\n    <bim-panel-section label="Classifications">\n      ${classificationsTree}\n    </bim-panel-section>\n   </bim-panel> \n  `;\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Finally, let's append the BIM Panel to the page to see the classifications tree working \ud83d\ude09"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const app = document.createElement("bim-grid");\napp.layouts = {\n  main: {\n    template: `\n      "panel viewport"\n      / 23rem 1fr\n    `,\n    elements: { panel, viewport },\n  },\n};\n\napp.layout = "main";\ndocument.body.append(app);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Congratulations! You've now a ready to go user interface that let's you show your model classifications. \ud83e\udd73"}),"\n",(0,s.jsx)("iframe",{src:"https://thatopen.github.io/engine_ui-components/examples/ClassificationsTree"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);