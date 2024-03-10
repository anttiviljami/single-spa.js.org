"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[467],{4497:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=i(4848),s=i(8453);const t={id:"devtools",title:"single-spa-inspector",sidebar_label:"Overview"},r=void 0,a={id:"devtools",title:"single-spa-inspector",description:"The single-spa-inspector is a Firefox/Chrome devtools extension to provide utilities for helping with single-spa applications. Github project.",source:"@site/versioned_docs/version-5.x/devtools.md",sourceDirName:".",slug:"/devtools",permalink:"/docs/5.x/devtools",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/devtools.md",tags:[],version:"5.x",frontMatter:{id:"devtools",title:"single-spa-inspector",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/5.x/ssr-overview"},next:{title:"Overview",permalink:"/docs/5.x/contributing-overview"}},l={},d=[{value:"Installation links",id:"installation-links",level:2},{value:"Features",id:"features",level:2},{value:"Configuring app overlays",id:"configuring-app-overlays",level:2},{value:"import-map-overrides",id:"import-map-overrides",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The single-spa-inspector is a Firefox/Chrome devtools extension to provide utilities for helping with ",(0,o.jsx)(n.a,{href:"https://single-spa.js.org",children:"single-spa"})," applications. ",(0,o.jsx)(n.a,{href:"https://github.com/single-spa/single-spa-inspector",children:"Github project"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Requires >= single-spa@4.1."}),"\n",(0,o.jsx)(n.h2,{id:"installation-links",children:"Installation links"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://addons.mozilla.org/en-US/firefox/addon/single-spa-inspector/",children:"Firefox"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/single-spa-inspector/emldbibkihanfiaiaghebffnbahjcgcp",children:"Chrome"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Note: you can also build and run this locally. See ",(0,o.jsx)(n.a,{href:"/docs/contributing-overview/#how-to-contribute",children:"how to contribute"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"List all registered applications (mounted at top)"}),"\n",(0,o.jsx)(n.li,{children:"Show all application statuses (statii)"}),"\n",(0,o.jsx)(n.li,{children:"Force mount and unmount an application"}),"\n",(0,o.jsxs)(n.li,{children:["Show app overlays (see ",(0,o.jsx)(n.a,{href:"#configuring-app-overlays",children:"configuring app overlays"})," to enable this feature)"]}),"\n",(0,o.jsxs)(n.li,{children:["Provides an interface for adding ",(0,o.jsx)(n.a,{href:"#import-map-overrides",children:"import-map overrides"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-app-overlays",children:"Configuring app overlays"}),"\n",(0,o.jsx)(n.p,{children:'App overlays allow you to hover over a mounted app\'s name and have an "inspect element" type experience which shows where the app is in the DOM. This is especially useful for when multiple apps are mounted at the same time (e.g. in some places Canopy has upwards of 4 apps mounted on a single page/URL!).'}),"\n",(0,o.jsxs)(n.p,{children:["To add app overlays, find the file where you export your lifecycle functions (e.g. ",(0,o.jsx)(n.code,{children:"bootstrap"}),", ",(0,o.jsx)(n.code,{children:"mount"}),", ",(0,o.jsx)(n.code,{children:"unmount"}),") and add another exported object with the following shape:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// must be called "devtools"\nexport const devtools = {\n  overlays: {\n    // selectors is required for overlays to work\n    selectors: [\n      // an array of CSS selector strings, meant to be unique ways to identify the outermost container of your app\n      // you can have more than one, for cases like parcels or different containers for differet views\n      "#my-app",\n      ".some-container .app",\n    ],\n    // options is optional\n    options: {\n      // these options allow you some control over how the overlay div looks/behaves\n      // the listed values below are the defaults\n\n      width: "100%",\n      height: "100%",\n      zIndex: 40,\n      position: "absolute",\n      top: 0,\n      left: 0,\n      color: "#000", // the default for this is actually based on the app\'s name, so it\'s dynamic. can be a hex or a CSS color name\n      background: "#000", // the default for this is actually based on the app\'s name, so it\'s dynamic. can be a hex or a CSS color name\n      textBlocks: [\n        // allows you to add additional text to the overlay. for example, you can add the name of the team/squad that owns this app\n        // each string in this array will be in a new div\n        // \'blue squad\', \'is awesome\'\n        // turns into:\n        // <div>blue squad</div><div>is awesome</div>\n      ],\n    },\n  },\n};\n'})}),"\n",(0,o.jsx)(n.h2,{id:"import-map-overrides",children:"import-map-overrides"}),"\n",(0,o.jsxs)(n.p,{children:["If your environment uses ",(0,o.jsx)(n.a,{href:"https://github.com/WICG/import-maps",children:"import-maps"}),", single-spa Inspector provides an interface for adding import-map overrides when utilizing the ",(0,o.jsx)(n.a,{href:"https://github.com/joeldenning/import-map-overrides",children:"import-map-overrides"})," library. Once the ",(0,o.jsx)(n.a,{href:"https://github.com/joeldenning/import-map-overrides#installation",children:"installation requirements"})," for import-map-overrides are completed, you can add, remove, and refresh the page with your overrides."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Example of single-spa Inspector extension with import-maps overrides",src:i(2784).A+"",width:"1552",height:"636"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},2784:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/demo-with-importmapoverrides-f99dcb03696d1cc229ec0d53589a6c63.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var o=i(6540);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);