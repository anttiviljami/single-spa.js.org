"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4869],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),g=l,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},342:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={id:"api",title:"Applications API",sidebar_label:"Applications API"},s=void 0,p={unversionedId:"api",id:"version-4.x/api",title:"Applications API",description:"single-spa exports named functions and variables rather than a single default export.",source:"@site/versioned_docs/version-4.x/api.md",sourceDirName:".",slug:"/api",permalink:"/docs/4.x/api",draft:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/api.md",tags:[],version:"4.x",frontMatter:{id:"api",title:"Applications API",sidebar_label:"Applications API"},sidebar:"version-4.x/docs",previous:{title:"Overview",permalink:"/docs/4.x/parcels-overview"},next:{title:"Parcels API",permalink:"/docs/4.x/parcels-api"}},u={},d=[{value:"registerApplication",id:"registerapplication",level:2},{value:"start",id:"start",level:2},{value:"triggerAppChange",id:"triggerappchange",level:2},{value:"navigateToUrl",id:"navigatetourl",level:2},{value:"getMountedApps",id:"getmountedapps",level:2},{value:"getAppNames",id:"getappnames",level:2},{value:"getAppStatus",id:"getappstatus",level:2},{value:"unloadApplication",id:"unloadapplication",level:2},{value:"checkActivityFunctions",id:"checkactivityfunctions",level:2},{value:"addErrorHandler",id:"adderrorhandler",level:2},{value:"removeErrorHandler",id:"removeerrorhandler",level:2},{value:"mountRootParcel",id:"mountrootparcel",level:2},{value:"ensureJQuerySupport",id:"ensurejquerysupport",level:2},{value:"setBootstrapMaxTime",id:"setbootstrapmaxtime",level:2},{value:"setMountMaxTime",id:"setmountmaxtime",level:2},{value:"setUnmountMaxTime",id:"setunmountmaxtime",level:2},{value:"setUnloadMaxTime",id:"setunloadmaxtime",level:2},{value:"before routing event",id:"before-routing-event",level:2},{value:"routing event",id:"routing-event",level:2},{value:"app-change event",id:"app-change-event",level:2},{value:"no-app-change event",id:"no-app-change-event",level:2},{value:"before-first-mount",id:"before-first-mount",level:2},{value:"first-mount",id:"first-mount",level:2}],c={toc:d};function g(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"single-spa exports named functions and variables rather than a single default export.\nThis means importing must happen in one of two ways:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { registerApplication, start } from "single-spa";\n// or\nimport * as singleSpa from "single-spa";\n')),(0,i.kt)("h2",{id:"registerapplication"},"registerApplication"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'singleSpa.registerApplication(\n  "appName",\n  () => System.import("appName"),\n  (location) => location.pathname.startsWith("appName"),\n);\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"registerApplication")," is the most important api your root config will use. Use this function to register any application within single-spa."),(0,i.kt)("p",null,"Note that if an application is registered from within another application, that no hierarchy will be maintained between the applications."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is described in detail inside of the ",(0,i.kt)("a",{parentName:"p",href:"configuration#registering-applications"},"Configuration docs"))),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"appName: string"),(0,i.kt)("dd",null,"App name that single-spa will register and reference this application with, and will be labelled with in dev tools."),(0,i.kt)("dt",null,"applicationOrLoadingFn: () => <Function | Promise>"),(0,i.kt)("dd",null,"Must be a loading function that either returns the resolved application or a promise."),(0,i.kt)("dt",null,"activityFn: (location) => boolean"),(0,i.kt)("dd",null,"Must be a pure function. The function is called with ",(0,i.kt)("code",null,"window.location")," as the first argument !-- TODO: any only? --\x3e and should return a truthy value whenever the application should be active."),(0,i.kt)("dt",null,"customProps?: Object = "),(0,i.kt)("dd",null,"Will be passed to the application during each lifecycle method.")),(0,i.kt)("h3",null,"returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h2",{id:"start"},"start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"singleSpa.start();\n")),(0,i.kt)("p",null,"Must be called by your single spa config. Before ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," is called, applications will be loaded, but will never be bootstrapped, mounted or unmounted. The reason for ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," is to give you control over the performance of your single page application. For example, you may want to declare registered applications immediately (to start downloading the code for the active ones), but not actually mount the registered applications until an initial AJAX request (maybe to get information about the logged in user) has been completed. In that case, the best performance is achieved by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"registerApplication")," immediately, but calling ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," after the AJAX request is completed."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("p",null,"none"),(0,i.kt)("h3",null,"returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h2",{id:"triggerappchange"},"triggerAppChange"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"singleSpa.triggerAppChange();\n")),(0,i.kt)("p",null,"Returns a Promise that will resolve/reject when all apps have mounted/unmounted. This was built for testing single-spa and is likely not\nneeded in a production application."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("p",null,"none"),(0,i.kt)("h3",null,"returns"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"Promise"),(0,i.kt)("dd",null,"Returns a Promise that will resolve/reject when all apps have mounted.")),(0,i.kt)("h2",{id:"navigatetourl"},"navigateToUrl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Three ways of using navigateToUrl\nsingleSpa.navigateToUrl("/new-url");\nsingleSpa.navigateToUrl(document.querySelector("a"));\ndocument.querySelector("a").addEventListener(singleSpa.navigateToUrl);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- A fourth way to use navigateToUrl, this one inside of your HTML --\x3e\n<a href="/new-url" onclick="singleSpaNavigate()">My link</a>\n')),(0,i.kt)("p",null,"Use this utility function to easily perform url navigation between registered applications without needing to deal with ",(0,i.kt)("inlineCode",{parentName:"p"},"event.preventDefault()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pushState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"triggerAppChange()"),", etc."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"navigationObj: string | context | DOMEvent"),(0,i.kt)("dd",null,"navigationObj must be one of the following types:",(0,i.kt)("ul",null,(0,i.kt)("li",null,"a url string."),(0,i.kt)("li",null,"a context / thisArg that has an ",(0,i.kt)("code",null,"href")," property; useful for calling ",(0,i.kt)("code",null,"singleSpaNavigate.call(anchorElement)")," with a reference to the anchor element or other context."),(0,i.kt)("li",null,"a DOMEvent object for a click event on a DOMElement that has an ",(0,i.kt)("code",null,"href")," attribute; ideal for the ",(0,i.kt)("code",null,'<a onclick="singleSpaNavigate"></a>')," use case.")))),(0,i.kt)("h3",null,"returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h2",{id:"getmountedapps"},"getMountedApps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const mountedAppNames = singleSpa.getMountedApps();\nconsole.log(mountedAppNames); // ['app1', 'app2', 'navbar']\n")),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("p",null,"none"),(0,i.kt)("h3",null,"returns"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"appNames: string[]"),(0,i.kt)("dd",null,"Each string is the name of a registered application that is currently ",(0,i.kt)("code",null,"MOUNTED"),".")),(0,i.kt)("h2",{id:"getappnames"},"getAppNames"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const appNames = singleSpa.getAppNames();\nconsole.log(appNames); // ['app1', 'app2', 'app3', 'navbar']\n")),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("p",null,"none"),(0,i.kt)("h3",null,"returns"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"appNames: string[]"),(0,i.kt)("dd",null,"Each string is the name of a registered application regardless of app status.")),(0,i.kt)("h2",{id:"getappstatus"},"getAppStatus"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const status = singleSpa.getAppStatus("app1");\nconsole.log(status); // one of many statuses (see list below). e.g. MOUNTED\n')),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"appName: string"),(0,i.kt)("dd",null,"Registered application name.")),(0,i.kt)("h3",null,"returns"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"appStatus: <string | null>"),(0,i.kt)("dd",null,"Will be one of the following string constants, or ",(0,i.kt)("code",null,"null")," if the app does not exist.",(0,i.kt)("dl",{className:"dl-inline"},(0,i.kt)("div",null,(0,i.kt)("dt",null,"NOT_LOADED"),(0,i.kt)("dd",null,"app has been registered with single-spa but has not yet been loaded.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"LOADING_SOURCE_CODE"),(0,i.kt)("dd",null,"'s source code is being fetched.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"NOT_BOOTSTRAPPED"),(0,i.kt)("dd",null,"app has been loaded but not bootstrapped.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"BOOTSTRAPPING"),(0,i.kt)("dd",null,"the ",(0,i.kt)("code",null,"bootstrap")," lifecycle function has been called but has not finished.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"NOT_MOUNTED"),(0,i.kt)("dd",null,"app has been loaded and bootstrapped but not yet mounted.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"MOUNTING"),(0,i.kt)("dd",null,"app is being mounted but not finished.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"MOUNTED"),(0,i.kt)("dd",null,"app is currently active and is mounted to the DOM.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"UNMOUNTING"),(0,i.kt)("dd",null,"app is currently being unmounted but has not finished.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"UNLOADING"),(0,i.kt)("dd",null,"app is currently being unloaded but has not finished.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"SKIP_BECAUSE_BROKEN"),(0,i.kt)("dd",null,"app threw an error during load, bootstrap, mount, or unmount and has been siloed because it is misbehaving and has been skipped. Other apps will continue on normally.")),(0,i.kt)("div",null,(0,i.kt)("dt",null,"LOAD_ERROR"),(0,i.kt)("dd",null,"The app's loading function returned a promise that rejected. This is often due to a network error attempting to download the JavaScript bundle for the application. Single-spa will retry loading the application after the user navigates away from the current route and then comes back to it."))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note about LOAD_ERROR status")),(0,i.kt)("p",null,"Note that if you're using SystemJS to load your bundles, you need to add the following code to get SystemJS to re-attempt the network request\nwhen your loading function calls ",(0,i.kt)("inlineCode",{parentName:"p"},"System.import()")," on an application in ",(0,i.kt)("inlineCode",{parentName:"p"},"LOAD_ERROR")," status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"singleSpa.addErrorHandler((err) => {\n  if (singleSpa.getAppStatus(err.appOrParcelName) === singleSpa.LOAD_ERROR) {\n    System.delete(System.resolve(err.appOrParcelName));\n  }\n});\n")),(0,i.kt)("h2",{id:"unloadapplication"},"unloadApplication"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Unload the application right now, without waiting for it to naturally unmount.\nsingleSpa.unloadApplication("app1");\n\n// Unload the application only after it naturally unmounts due to a route change.\nsingleSpa.unloadApplication("app1", { waitForUnmount: true });\n')),(0,i.kt)("p",null,"The purpose of unloading a registered application is to set it back to to a NOT_LOADED status, which means that it will be re-bootstrapped the next time it needs to mount. The main use-case for this was to allow for the hot-reloading of entire registered applications, but ",(0,i.kt)("inlineCode",{parentName:"p"},"unloadApplication")," can be useful whenever you want to re-bootstrap your application."),(0,i.kt)("p",null,"Single-spa performs the following steps when unloadApplication is called."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("a",{parentName:"li",href:"/docs/4.x/api#unload"},"unload lifecyle")," on the registered application that is being unloaded."),(0,i.kt)("li",{parentName:"ol"},"Set the app status to NOT_LOADED"),(0,i.kt)("li",{parentName:"ol"},"Trigger a reroute, during which single-spa will potentially mount the application that was just unloaded.")),(0,i.kt)("p",null,"Because a registered application might be mounted when ",(0,i.kt)("inlineCode",{parentName:"p"},"unloadApplication")," is called, you can specify whether you want to immediately unload or if you want to wait until the application is no longer mounted. This is done with the ",(0,i.kt)("inlineCode",{parentName:"p"},"waitForUnmount")," option."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"appName: string"),(0,i.kt)("dd",null,"Registered application name."),(0,i.kt)("dt",null,"options?: {waitForUnmount: boolean = false}"),(0,i.kt)("dd",null,"The options must be an object that has a ",(0,i.kt)("code",null,"waitForUnmount")," property. When `waitForUnmount` is `false`, single-spa immediately unloads the specified registered application even if the app is currently mounted. If it is ",(0,i.kt)("code",null,"true"),", single-spa will unload the registered application as soon as it is safe to do so (when the app status is not ",(0,i.kt)("code",null,"MOUNTED"),").")),(0,i.kt)("h3",null,"returns"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"Promise"),(0,i.kt)("dd",null,"This promise will be resolved when the registered application has been successfully removed.")),(0,i.kt)("h2",{id:"checkactivityfunctions"},"checkActivityFunctions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const appsThatShouldBeActive = singleSpa.checkActivityFunctions();\nconsole.log(appsThatShouldBeActive); // ['app1']\n\nconst appsForACertainRoute = singleSpa.checkActivityFunctions({\n  pathname: \"/app2\",\n});\nconsole.log(appsForACertainRoute); // ['app2']\n")),(0,i.kt)("p",null,"Will call every app's activity function with the ",(0,i.kt)("inlineCode",{parentName:"p"},"mockWindowLocation")," and give you list of which applications should be mounted with that location."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"mockWindowLocation: string"),(0,i.kt)("dd",null,"A string representing a window.location that will be used when calling every application's activity function to test if they return true.")),(0,i.kt)("h3",null,"returns"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"appNames: string[]"),(0,i.kt)("dd",null,"Each string is the name of a registered application that matches the provided ",(0,i.kt)("code",null,"mockWindowLocation"),".")),(0,i.kt)("h2",{id:"adderrorhandler"},"addErrorHandler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"singleSpa.addErrorHandler((err) => {\n  console.log(err);\n  console.log(err.appOrParcelName);\n  console.log(singleSpa.getAppStatus(err.appOrParcelName));\n});\n")),(0,i.kt)("p",null,"Adds a handler that will be called every time an application throws an error during a lifecycle function or activity function. When there are no error handlers, single-spa throws the error to the window."),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"errorHandler: Function(error: Error)"),(0,i.kt)("dd",null,"Must be a function. Will be called with an ",(0,i.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"},"Error object")," that additionally has a ",(0,i.kt)("code",null,"message")," and ",(0,i.kt)("code",null,"appOrParcelName")," property.")),(0,i.kt)("h3",null,"returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h2",{id:"removeerrorhandler"},"removeErrorHandler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"singleSpa.addErrorHandler(handleErr);\nsingleSpa.removeErrorHandler(handleErr);\n\nfunction handleErr(err) {\n  console.log(err);\n}\n")),(0,i.kt)("p",null,"Removes the given error handler function."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"errorHandler: Function"),(0,i.kt)("dd",null,"Reference to the error handling function.")),(0,i.kt)("h3",null,"returns"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"boolean"),(0,i.kt)("dd",null,(0,i.kt)("code",null,"true")," if the error handler was removed, and ",(0,i.kt)("code",null,"false")," if it was not.")),(0,i.kt)("h2",{id:"mountrootparcel"},"mountRootParcel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Synchronous mounting\nconst parcel = singleSpa.mountRootParcel(parcelConfig, {\n  prop1: "value1",\n  domElement: document.getElementById("a-div"),\n});\nparcel.mountPromise.then(() => {\n  console.log("finished mounting the parcel!");\n});\n\n// Asynchronous mounting. Feel free to use webpack code splits or SystemJS dynamic loading\nconst parcel2 = singleSpa.mountRootParcel(() => import("./some-parcel.js"), {\n  prop1: "value1",\n  domElement: document.getElementById("a-div"),\n});\n')),(0,i.kt)("p",null,"Will create and mount a ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.x/parcels-overview"},"single-spa parcel"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Parcels do not automatically unmount. Unmounting will need to be triggered manually.")),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"parcelConfig: Object or Loading Function"),(0,i.kt)("dd",null,"[parcelConfig](/docs/4.x/parcels-api#parcel-configuration)"),(0,i.kt)("dt",null,"parcelProps: Object with a domElement property"),(0,i.kt)("dd",null,"[parcelProps](/docs/4.x/parcels-api#parcel-props)")),(0,i.kt)("h3",null,"returns"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"Parcel object"),(0,i.kt)("dd",null,"See ",(0,i.kt)("a",{href:"/docs/parcels-api"},"Parcels API")," for more detail.")),(0,i.kt)("h2",{id:"ensurejquerysupport"},"ensureJQuerySupport"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"singleSpa.ensureJQuerySupport(jQuery);\n")),(0,i.kt)("p",null,"jQuery uses ",(0,i.kt)("a",{parentName:"p",href:"https://learn.jquery.com/events/event-delegation/"},"event delegation")," so single-spa must monkey-patch each version of jQuery on the page",". single-spa will attempt to do this automatically by looking for ",(0,i.kt)("inlineCode",{parentName:"p"},"window.jQuery")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"window.$"),". Use this explicit method if multiple versions are included on your page or if jQuery is bound to a different global variable."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"jQuery?: JQueryFn = window.jQuery"),(0,i.kt)("dd",null,"A reference to the global variable that jQuery has been bound to.")),(0,i.kt)("h3",null,"returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h2",{id:"setbootstrapmaxtime"},"setBootstrapMaxTime"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setBootstrapMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setBootstrapMaxTime(3000, true);\n")),(0,i.kt)("p",null,"Sets the global configuration for bootstrap timeouts."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"millis: number"),(0,i.kt)("dd",null,"Number of milliseconds to wait for bootstrap to complete before timing out."),(0,i.kt)("dt",null,"dieOnTimeout: boolean = false"),(0,i.kt)("dd",null,(0,i.kt)("p",null,"If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",(0,i.kt)("code",null,"millis")," is reached."),(0,i.kt)("p",null,"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."),(0,i.kt)("p",null,"Each registered application can override this behavior for itself."))),(0,i.kt)("h3",null,"returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h2",{id:"setmountmaxtime"},"setMountMaxTime"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setMountMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setMountMaxTime(3000, true);\n")),(0,i.kt)("p",null,"Sets the global configuration for mount timeouts."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"millis: number"),(0,i.kt)("dd",null,"Number of milliseconds to wait for mount to complete before timing out."),(0,i.kt)("dt",null,"dieOnTimeout: boolean = false"),(0,i.kt)("dd",null,(0,i.kt)("p",null,"If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",(0,i.kt)("code",null,"millis")," is reached."),(0,i.kt)("p",null,"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."),(0,i.kt)("p",null,"Each registered application can override this behavior for itself."))),(0,i.kt)("h3",null,"returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h2",{id:"setunmountmaxtime"},"setUnmountMaxTime"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setUnmountMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setUnmountMaxTime(3000, true);\n")),(0,i.kt)("p",null,"Sets the global configuration for unmount timeouts."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"millis: number"),(0,i.kt)("dd",null,"Number of milliseconds to wait for unmount to complete before timing out."),(0,i.kt)("dt",null,"dieOnTimeout: boolean = false"),(0,i.kt)("dd",null,(0,i.kt)("p",null,"If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",(0,i.kt)("code",null,"millis")," is reached."),(0,i.kt)("p",null,"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."),(0,i.kt)("p",null,"Each registered application can override this behavior for itself."))),(0,i.kt)("h3",null,"returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("h2",{id:"setunloadmaxtime"},"setUnloadMaxTime"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setUnloadMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setUnloadMaxTime(3000, true);\n\n// don't do a console warning for slow lifecycles until 10 seconds have elapsed\nsingleSpa.setUnloadMaxTime(3000, true, 10000);\n")),(0,i.kt)("p",null,"Sets the global configuration for unload timeouts."),(0,i.kt)("h3",null,"arguments"),(0,i.kt)("dl",{className:"args-list"},(0,i.kt)("dt",null,"millis: number"),(0,i.kt)("dd",null,"Number of milliseconds to wait for unload to complete before timing out."),(0,i.kt)("dt",null,"dieOnTimeout: boolean = false"),(0,i.kt)("dd",null,(0,i.kt)("p",null,"If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",(0,i.kt)("code",null,"millis")," is reached."),(0,i.kt)("p",null,"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."),(0,i.kt)("p",null,"Each registered application can override this behavior for itself.")),(0,i.kt)("dt",null,"warningMillis: number = 1000"),(0,i.kt)("dd",null,"Number of milliseconds to wait between console warnings that occur before the final timeout.")),(0,i.kt)("h3",null,"returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"events"},"Events"),(0,i.kt)("p",null,"All of the following are ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent"},"custom events")," fired by single-spa on the window. The event ",(0,i.kt)("inlineCode",{parentName:"p"},"detail")," property contains the native DOM event that triggered the reroute, such as a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent"},"PopStateEvent")," or ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent"},"HashChangeEvent"),". These events can be handled by using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"},(0,i.kt)("inlineCode",{parentName:"a"},"addEventListener")),", like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("single-spa:before-routing-event", (evt) => {\n  const originalEvent = evt.detail;\n  console.log("single-spa event", originalEvent);\n});\n')),(0,i.kt)("h2",{id:"before-routing-event"},"before routing event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("single-spa:before-routing-event", () => {\n  console.log("single-spa is about to mount/unmount applications!");\n});\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"single-spa:before-routing-event")," event is fired before every routing event occurs, which is after each hashchange, popstate, or triggerAppChange, even if no changes to registered applications were necessary."),(0,i.kt)("h2",{id:"routing-event"},"routing event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("single-spa:routing-event", () => {\n  console.log("single-spa finished mounting/unmounting applications!");\n});\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"single-spa:routing-event")," event is fired every time that a routing event has occurred, which is after each hashchange, popstate, or triggerAppChange, even if no changes to registered applications were necessary; and after single-spa verified that all apps were correctly loaded, bootstrapped, mounted, and unmounted."),(0,i.kt)("h2",{id:"app-change-event"},"app-change event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("single-spa:app-change", () => {\n  console.log(\n    "A routing event occurred where at least one application was mounted/unmounted",\n  );\n});\n')),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"single-spa:app-change")," event is fired every time that one or more apps were loaded, bootstrapped, mounted, unmounted, or unloaded. It is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"single-spa:routing-event")," except that it will not fire unless one or more apps were actually loaded, bootstrapped, mounted, or unmounted. A hashchange, popstate, or triggerAppChange that does not result in one of those changes will not cause the event to be fired."),(0,i.kt)("h2",{id:"no-app-change-event"},"no-app-change event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("single-spa:before-routing-event", () => {\n  console.log(\n    "A routing event occurred where zero applications were mounted/unmounted",\n  );\n});\n')),(0,i.kt)("p",null,"When no applications were loaded, bootstrapped, mounted, unmounted, or unloaded, single-spa fires a ",(0,i.kt)("inlineCode",{parentName:"p"},"single-spa:no-app-change")," event. This is the inverse of the ",(0,i.kt)("inlineCode",{parentName:"p"},"single-spa:app-change")," event. Only one will be fired for each routing event."),(0,i.kt)("h2",{id:"before-first-mount"},"before-first-mount"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("single-spa:before-first-mount", () => {\n  console.log(\n    "single-spa is about to mount the very first application for the first time",\n  );\n});\n')),(0,i.kt)("p",null,"Before the first of any single-spa applications is mounted, single-spa fires a ",(0,i.kt)("inlineCode",{parentName:"p"},"single-spa:before-first-mount")," event; therefore it will only be fired once ever. More specifically, it fires after the application is already loaded but before mounting."),(0,i.kt)("admonition",{title:"Suggested use case",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"remove a loader bar that the user is seeing right before the first app will be mounted.")),(0,i.kt)("h2",{id:"first-mount"},"first-mount"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("single-spa:first-mount", () => {\n  console.log("single-spa just mounted the very first application");\n});\n')),(0,i.kt)("p",null,"After the first of any single-spa applications is mounted, single-spa fires a ",(0,i.kt)("inlineCode",{parentName:"p"},"single-spa:first-mount")," event; therefore it will only be fired once ever."),(0,i.kt)("admonition",{title:"Suggested use case:",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"log the time it took before the user sees any of the apps mounted.")))}g.isMDXComponent=!0}}]);