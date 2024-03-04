"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[202],{3905:function(e,n,a){a.d(n,{Zo:function(){return l},kt:function(){return f}});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=t.createContext({}),p=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),g=p(a),m=i,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||s;return a?t.createElement(f,o(o({ref:n},l),{},{components:a})):t.createElement(f,o({ref:n},l))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=m;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[g]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3985:function(e,n,a){a.r(n),a.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return g}});var t=a(7462),i=a(3366),s=(a(7294),a(3905)),o=["components"],r={title:"Shared Webpack configs"},c=void 0,p={unversionedId:"shared-webpack-configs",id:"version-6.x/shared-webpack-configs",title:"Shared Webpack configs",description:"single-spa also publishes a few shared Webpack config packages that include basics needed for creating single-spa applications. These configs are used by applications generated with create-single-spa, and can be used as a starting point to extend/modify a custom configuration for your organization/team.",source:"@site/versioned_docs/version-6.x/shared-webpack-configs.md",sourceDirName:".",slug:"/shared-webpack-configs",permalink:"/docs/shared-webpack-configs",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-6.x/shared-webpack-configs.md",tags:[],version:"6.x",frontMatter:{title:"Shared Webpack configs"},sidebar:"version-6.x/docs",previous:{title:"create-single-spa",permalink:"/docs/create-single-spa"},next:{title:"Overview",permalink:"/docs/microfrontends-concept"}},l={},g=[{value:"webpack-config-single-spa",id:"webpack-config-single-spa",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"webpack-config-single-spa-react",id:"webpack-config-single-spa-react",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"webpack-config-single-spa-ts",id:"webpack-config-single-spa-ts",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Usage",id:"usage-2",level:3},{value:"webpack-config-single-spa-react-ts",id:"webpack-config-single-spa-react-ts",level:2},{value:"Installation",id:"installation-3",level:3},{value:"Usage",id:"usage-3",level:3},{value:"Custom Webpack configuration",id:"custom-webpack-configuration",level:2},{value:"Example: load SVGs as components",id:"example-load-svgs-as-components",level:4},{value:"Replacing plugins",id:"replacing-plugins",level:3},{value:"Example: replace HtmlWebpackPlugin instance",id:"example-replace-htmlwebpackplugin-instance",level:4}],u={toc:g};function m(e){var n=e.components,a=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"single-spa also publishes a few shared Webpack config packages that include basics needed for creating single-spa applications. These configs are used by applications generated with ",(0,s.kt)("a",{parentName:"p",href:"/docs/create-single-spa"},"create-single-spa"),", and can be used as a starting point to extend/modify a custom configuration for your organization/team."),(0,s.kt)("p",null,"These packages are housed within the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/main/packages"},"create-single-spa repository"),"."),(0,s.kt)("h2",{id:"webpack-config-single-spa"},"webpack-config-single-spa"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa"},"Github project")),(0,s.kt)("p",null,"A shareable, customizable webpack config that is used for single-spa modules."),(0,s.kt)("h3",{id:"installation"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack-config-single-spa webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa webpack-merge\n")),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const singleSpaDefaults = require("webpack-config-single-spa");\nconst { merge } = require("webpack-merge"); // webpack-merge@5.0.3+\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: "name-of-company",\n    // The name of the current project. This usually matches the git repo\'s name\n    projectName: "name-of-project",\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n\n    // optional, defaults to 1\n    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop\n    rootDirectoryLevel: 1,\n\n    // optional, defaults to false\n    // Disable html-webpack-plugin (and standalone-single-spa-webpack-plugin) entirely\n    // This is intended for root configs, but can be used in other cases, too\n    disableHtmlGeneration: false,\n  });\n\n  return merge(defaultConfig, {\n    // modify the webpack config however you\'d like to by adding to this object\n  });\n};\n')),(0,s.kt)("h2",{id:"webpack-config-single-spa-react"},"webpack-config-single-spa-react"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react"},"Github project")),(0,s.kt)("p",null,"A shareable, customizable webpack config that adds react-specific configuration to ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack-config-single-spa"),"."),(0,s.kt)("h3",{id:"installation-1"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack-config-single-spa-react webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-react webpack-merge\n")),(0,s.kt)("h3",{id:"usage-1"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const singleSpaDefaults = require('webpack-config-single-spa-react');\nconst webpackMerge = require('webpack-merge');\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: 'name-of-company',\n    // The name of the current project. This usually matches the git repo's name\n    projectName: 'name-of-project',\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n\n    // optional, defaults to 1\n    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop\n    rootDirectoryLevel: 1,\n\n    // optional, defaults to {}\n    // This controls the options given to standalone-single-spa-webpack-plugin\n    // See https://github.com/single-spa/standalone-single-spa-webpack-plugin#usage\n    standaloneOptions: {},\n  });\n\n     // modify the webpack config however you'd like to by adding to this object\n  });\n};\n")),(0,s.kt)("h2",{id:"webpack-config-single-spa-ts"},"webpack-config-single-spa-ts"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-ts"},"Github project")),(0,s.kt)("p",null,"A shareable, customizable webpack config that adds typescript-specific configuration to ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack-config-single-spa"),". Note that webpack-config-single-spa-ts has a peerDependency on ",(0,s.kt)("inlineCode",{parentName:"p"},"typescript"),"."),(0,s.kt)("h3",{id:"installation-2"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack-config-single-spa-ts webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-ts webpack-merge\n")),(0,s.kt)("h3",{id:"usage-2"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const webpackMerge = require("webpack-merge");\nconst singleSpaDefaults = require("webpack-config-single-spa-ts");\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: "name-of-company",\n    // The name of the current project. This usually matches the git repo\'s name\n    projectName: "name-of-project",\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n  });\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you\'d like to by adding to this object\n  });\n};\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const singleSpaTs = require("webpack-config-single-spa-ts");\n\n// Alternatively, you may modify a webpack config directly\nconst myOtherWebpackConfig = {\n  /* ... */\n};\nconst finalConfig = singleSpaDefaults.modifyConfig(myOtherWebpackConfig);\n')),(0,s.kt)("h2",{id:"webpack-config-single-spa-react-ts"},"webpack-config-single-spa-react-ts"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/single-spa/create-single-spa/tree/master/packages/webpack-config-single-spa-react-ts"},"Github project")),(0,s.kt)("p",null,"A shareable, customizable webpack config that creates a webpack config that works with both react and typescript. Note that webpack-config-single-spa-react-ts simply merges the config from webpack-config-single-spa-react with that of webpack-config-single-spa-ts."),(0,s.kt)("h3",{id:"installation-3"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev webpack-config-single-spa-react-ts webpack-merge\n\n# or\nyarn add --dev webpack-config-single-spa-react-ts webpack-merge\n")),(0,s.kt)("h3",{id:"usage-3"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const webpackMerge = require("webpack-merge");\nconst singleSpaDefaults = require("webpack-config-single-spa-react-ts");\n\nmodule.exports = (webpackConfigEnv, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    // The name of the organization this application is written for\n    orgName: "name-of-company",\n\n    // The name of the current project. This usually matches the git repo\'s name\n    projectName: "name-of-project",\n\n    // optional\n    // This changes whether package names that start with @your-org-name are\n    // treated as webpack externals or not. Defaults to true\n    orgPackagesAsExternal: true,\n\n    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv\n    webpackConfigEnv,\n\n    // The CLI commands in the package.json script that triggered this build\n    argv,\n\n    // optional, defaults to 1\n    // This is the rootDirectoryLevel that is passed to https://github.com/joeldenning/systemjs-webpack-interop\n    rootDirectoryLevel: 1,\n\n    // optional, defaults to false.\n    // When true, this removes html-webpack-plugin and standalone-single-spa-webpack-plugin\n    disableHtmlGeneration: false,\n  });\n\n  return webpackMerge.smart(defaultConfig, {\n    // modify the webpack config however you\'d like to by adding to this object\n  });\n};\n')),(0,s.kt)("h2",{id:"custom-webpack-configuration"},"Custom Webpack configuration"),(0,s.kt)("p",null,"Our shared Webpack configs are intended to be extensible to fit the requirements of your applications. These custom config options can be made in each project's ",(0,s.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file generated by create-single-spa, or used as the basis for a tailored shared config for your organization."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("inlineCode",{parentName:"li"},"require.resolve")," to reuse loaders that are included as dependencies",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"this is especially useful for reusing any of webpack-config-single-spa-","*","'s dependencies"))),(0,s.kt)("li",{parentName:"ul"},"webpack-merge ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/survivejs/webpack-merge#limitations"},"does not support merging configs exported as a function"),", which may be relevant if creating shared config packages. webpack-config-single-spa-","*"," configs require ",(0,s.kt)("inlineCode",{parentName:"li"},"webpackConfigEnv")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"argv")," parameters which necesitates ",(0,s.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/configuration-types/#exporting-a-function"},"exporting a config function")," but return a plain object. This makes it compatible with webpack-merge."),(0,s.kt)("li",{parentName:"ul"},"Use webpack-merge's ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/survivejs/webpack-merge#mergewithrules"},(0,s.kt)("inlineCode",{parentName:"a"},"mergeWithRules"))," function to merge and de-duplicate ",(0,s.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/module/#modulerules"},"webpack rules"))),(0,s.kt)("h4",{id:"example-load-svgs-as-components"},"Example: load SVGs as components"),(0,s.kt)("p",null,"You must also install ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@svgr/webpack"},"@svgr/webpack"),"."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Available in ",(0,s.kt)("a",{parentName:"p",href:"mailto:webpack-config-single-spa@5.3.0"},"webpack-config-single-spa@5.3.0"),"+")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const singleSpaDefaults = require("webpack-config-single-spa");\nconst { mergeWithRules } = require("webpack-merge");\n\nconst merge = mergeWithRules({\n  module: {\n    rules: {\n      // replace the entire `rule` if the `test` property matches\n      test: "match",\n      use: "replace",\n    },\n  },\n});\n\nmodule.exports = (env, argv) => {\n  const defaultConfig = singleSpaDefaults({\n    orgName: "abcde",\n    projectName: "fghij",\n    webpackConfigEnv: env,\n    argv,\n  });\n\n  const config = merge(defaultConfig, {\n    module: {\n      rules: [\n        {\n          test: /\\.svg$/i,\n          use: [{ loader: "@svgr/webpack" }],\n        },\n      ],\n    },\n  });\n\n  // console.dir(config, null, 2) // useful for debugging\n  return config;\n};\n')),(0,s.kt)("h3",{id:"replacing-plugins"},"Replacing plugins"),(0,s.kt)("p",null,"Use webpack-merge's ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/survivejs/webpack-merge#mergewithcustomize-customizearray-customizeobject-configuration--configuration"},(0,s.kt)("inlineCode",{parentName:"a"},"mergeWithCustomize"))," to resolve duplicate plugins or replace instances. Duplicate plugins often result in cryptic errors!"),(0,s.kt)("p",null,"When referencing a loader that is installed as a dependency of webpack-config-single-spa, use ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_require_resolve_request_options"},"require.resolve")," to ensure its path is resolved correctly."),(0,s.kt)("h4",{id:"example-replace-htmlwebpackplugin-instance"},"Example: replace HtmlWebpackPlugin instance"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const { mergeWithCustomize, unique } = require("webpack-merge");\nconst singleSpaDefaults = require("webpack-config-single-spa");\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\n\nconst merge = mergeWithCustomize({\n  customizeArray: unique(\n    "plugins",\n    ["HtmlWebpackPlugin"],\n    (plugin) => plugin.constructor && plugin.constructor.name,\n  ),\n});\n\nmodule.exports = (env, argv) => {\n  const orgName = "example";\n  const myEnv = process.env.NODE_ENV || "development";\n\n  const defaultConfig = singleSpaDefaults({\n    orgName,\n    projectName: "custom-root-config",\n    webpackConfigEnv: env,\n    argv,\n  });\n\n  const config = merge(defaultConfig, {\n    plugins: [\n      new HtmlWebpackPlugin({\n        inject: false,\n        template: "src/custom.ejs",\n        templateParameters: {\n          isLocal: env?.isLocal,\n          // additional templateParameters can now be supplied\n          orgName,\n          environment: myEnv,\n        },\n      }),\n    ],\n  });\n\n  // console.dir(config, null, 2) // useful for debugging\n  return config;\n};\n')))}m.isMDXComponent=!0}}]);