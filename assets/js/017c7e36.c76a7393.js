"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5011],{2464:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var n=s(4848),o=s(8453);const i={id:"ecosystem-svelte",title:"single-spa-svelte",sidebar_label:"Svelte"},l=void 0,r={id:"ecosystem-svelte",title:"single-spa-svelte",description:"single-spa-svelte is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with svelte. Check out the single-spa-svelte github.",source:"@site/versioned_docs/version-6.x/ecosystem-svelte.md",sourceDirName:".",slug:"/ecosystem-svelte",permalink:"/docs/ecosystem-svelte",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-6.x/ecosystem-svelte.md",tags:[],version:"6.x",frontMatter:{id:"ecosystem-svelte",title:"single-spa-svelte",sidebar_label:"Svelte"},sidebar:"docs",previous:{title:"Preact",permalink:"/docs/ecosystem-preact"},next:{title:"Riot",permalink:"/docs/ecosystem-riot"}},c={},a=[{value:"Quickstart",id:"quickstart",level:2},{value:"Options",id:"options",level:2},{value:"single-spa props",id:"single-spa-props",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["single-spa-svelte is a helper library that helps implement ",(0,n.jsx)(t.a,{href:"configuration#registering-applications",children:"single-spa registered application"})," ",(0,n.jsx)(t.a,{href:"/docs/building-applications#registered-application-lifecycle",children:"lifecycle functions"})," (bootstrap, mount and unmount) for for use with ",(0,n.jsx)(t.a,{href:"https://svelte.technology/",children:"svelte"}),". Check out the ",(0,n.jsx)(t.a,{href:"https://github.com/single-spa/single-spa-svelte",children:"single-spa-svelte github"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,n.jsxs)(t.p,{children:["First, in the ",(0,n.jsx)(t.a,{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#registered-applications",children:"single-spa application"}),", run ",(0,n.jsx)(t.code,{children:"npm install --save single-spa-svelte"}),". Then, create an entry file with the following."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'import singleSpaSvelte from "single-spa-svelte";\nimport myRootSvelteComponent from "my-root-svelte-component.js";\n\nconst svelteLifecycles = singleSpaSvelte({\n  component: myRootSvelteComponent,\n  domElementGetter: () => document.getElementById("svelte-app"),\n  props: { someData: "data" },\n});\n\nexport const bootstrap = svelteLifecycles.bootstrap;\nexport const mount = svelteLifecycles.mount;\nexport const unmount = svelteLifecycles.unmount;\n'})}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(t.p,{children:["All options are passed to single-spa-svelte via the ",(0,n.jsx)(t.code,{children:"opts"})," parameter when calling ",(0,n.jsx)(t.code,{children:"singleSpaSvelte(opts)"}),". The following options are available:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"component"}),": (required) The root component that will be rendered. This component should be compiled by svelte and ",(0,n.jsx)(t.strong,{children:"not"})," an iife."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"domElementGetter"}),": (optional) A function which will return a dom element. The root component will be mounted in this element. If not provided, a default dom element will be provided."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Svelte-specific options"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"anchor"}),": (optional) A child of the dom element identified by ",(0,n.jsx)(t.code,{children:"domElementGetter"})," to render the component immediately before"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"hydrate"}),": (optional) See the svelte ",(0,n.jsx)(t.a,{href:"https://svelte.dev/docs#Creating_a_component",children:"Creating a component"})," documentation"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"intro"}),": (optional) If ",(0,n.jsx)(t.code,{children:"true"}),", will play transitions on initial render, rather than waiting for subsequent state changes"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"props"}),": (optional) An object of properties to supply to the component"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"single-spa-props",children:"single-spa props"}),"\n",(0,n.jsxs)(t.p,{children:["All ",(0,n.jsx)(t.a,{href:"/docs/api/#registerapplication",children:"single-spa props"})," are passed to the svelte component as props. The props provided to ",(0,n.jsx)(t.code,{children:"singleSpaSvelte({props: {...}})"})," are merged with the single-spa props."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var n=s(6540);const o={},i=n.createContext(o);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);