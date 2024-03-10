"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2729],{9576:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(4848),t=i(8453);const r={id:"api",title:"Applications API",sidebar_label:"Applications API"},a=void 0,l={id:"api",title:"Applications API",description:"single-spa exports named functions and variables rather than a single default export.",source:"@site/versioned_docs/version-4.x/api.md",sourceDirName:".",slug:"/api",permalink:"/docs/4.x/api",draft:!1,unlisted:!1,editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-4.x/api.md",tags:[],version:"4.x",frontMatter:{id:"api",title:"Applications API",sidebar_label:"Applications API"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/4.x/parcels-overview"},next:{title:"Parcels API",permalink:"/docs/4.x/parcels-api"}},o={},d=[{value:"registerApplication",id:"registerapplication",level:2},{value:"start",id:"start",level:2},{value:"triggerAppChange",id:"triggerappchange",level:2},{value:"navigateToUrl",id:"navigatetourl",level:2},{value:"getMountedApps",id:"getmountedapps",level:2},{value:"getAppNames",id:"getappnames",level:2},{value:"getAppStatus",id:"getappstatus",level:2},{value:"unloadApplication",id:"unloadapplication",level:2},{value:"checkActivityFunctions",id:"checkactivityfunctions",level:2},{value:"addErrorHandler",id:"adderrorhandler",level:2},{value:"removeErrorHandler",id:"removeerrorhandler",level:2},{value:"mountRootParcel",id:"mountrootparcel",level:2},{value:"ensureJQuerySupport",id:"ensurejquerysupport",level:2},{value:"setBootstrapMaxTime",id:"setbootstrapmaxtime",level:2},{value:"setMountMaxTime",id:"setmountmaxtime",level:2},{value:"setUnmountMaxTime",id:"setunmountmaxtime",level:2},{value:"setUnloadMaxTime",id:"setunloadmaxtime",level:2},{value:"before routing event",id:"before-routing-event",level:2},{value:"routing event",id:"routing-event",level:2},{value:"app-change event",id:"app-change-event",level:2},{value:"no-app-change event",id:"no-app-change-event",level:2},{value:"before-first-mount",id:"before-first-mount",level:2},{value:"first-mount",id:"first-mount",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"single-spa exports named functions and variables rather than a single default export.\nThis means importing must happen in one of two ways:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { registerApplication, start } from "single-spa";\n// or\nimport * as singleSpa from "single-spa";\n'})}),"\n",(0,s.jsx)(n.h2,{id:"registerapplication",children:"registerApplication"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'singleSpa.registerApplication(\n  "appName",\n  () => System.import("appName"),\n  (location) => location.pathname.startsWith("appName"),\n);\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"registerApplication"})," is the most important api your root config will use. Use this function to register any application within single-spa."]}),"\n",(0,s.jsx)(n.p,{children:"Note that if an application is registered from within another application, that no hierarchy will be maintained between the applications."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["It is described in detail inside of the ",(0,s.jsx)(n.a,{href:"configuration#registering-applications",children:"Configuration docs"})]})}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"appName: string"}),(0,s.jsx)("dd",{children:"App name that single-spa will register and reference this application with, and will be labelled with in dev tools."}),(0,s.jsx)("dt",{children:"applicationOrLoadingFn: () => <Function | Promise>"}),(0,s.jsx)("dd",{children:"Must be a loading function that either returns the resolved application or a promise."}),(0,s.jsx)("dt",{children:"activityFn: (location) => boolean"}),(0,s.jsxs)("dd",{children:["Must be a pure function. The function is called with ",(0,s.jsx)("code",{children:"window.location"})," as the first argument !-- TODO: any only? --\x3e and should return a truthy value whenever the application should be active."]}),(0,s.jsx)("dt",{children:"customProps?: Object = "}),(0,s.jsx)("dd",{children:"Will be passed to the application during each lifecycle method."})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"undefined"})}),"\n",(0,s.jsx)(n.h2,{id:"start",children:"start"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"singleSpa.start();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Must be called by your single spa config. Before ",(0,s.jsx)(n.code,{children:"start"})," is called, applications will be loaded, but will never be bootstrapped, mounted or unmounted. The reason for ",(0,s.jsx)(n.code,{children:"start"})," is to give you control over the performance of your single page application. For example, you may want to declare registered applications immediately (to start downloading the code for the active ones), but not actually mount the registered applications until an initial AJAX request (maybe to get information about the logged in user) has been completed. In that case, the best performance is achieved by calling ",(0,s.jsx)(n.code,{children:"registerApplication"})," immediately, but calling ",(0,s.jsx)(n.code,{children:"start"})," after the AJAX request is completed."]}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsx)(n.p,{children:"none"}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"undefined"})}),"\n",(0,s.jsx)(n.h2,{id:"triggerappchange",children:"triggerAppChange"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"singleSpa.triggerAppChange();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns a Promise that will resolve/reject when all apps have mounted/unmounted. This was built for testing single-spa and is likely not\nneeded in a production application."}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsx)(n.p,{children:"none"}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"Promise"}),(0,s.jsx)("dd",{children:"Returns a Promise that will resolve/reject when all apps have mounted."})]}),"\n",(0,s.jsx)(n.h2,{id:"navigatetourl",children:"navigateToUrl"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// Three ways of using navigateToUrl\nsingleSpa.navigateToUrl("/new-url");\nsingleSpa.navigateToUrl(document.querySelector("a"));\ndocument.querySelector("a").addEventListener(singleSpa.navigateToUrl);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- A fourth way to use navigateToUrl, this one inside of your HTML --\x3e\n<a href="/new-url" onclick="singleSpaNavigate()">My link</a>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Use this utility function to easily perform url navigation between registered applications without needing to deal with ",(0,s.jsx)(n.code,{children:"event.preventDefault()"}),", ",(0,s.jsx)(n.code,{children:"pushState"}),", ",(0,s.jsx)(n.code,{children:"triggerAppChange()"}),", etc."]}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"navigationObj: string | context | DOMEvent"}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.p,{children:"navigationObj must be one of the following types:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"a url string."}),(0,s.jsxs)("li",{children:["a context / thisArg that has an ",(0,s.jsx)("code",{children:"href"})," property; useful for calling ",(0,s.jsx)("code",{children:"singleSpaNavigate.call(anchorElement)"})," with a reference to the anchor element or other context."]}),(0,s.jsxs)("li",{children:["a DOMEvent object for a click event on a DOMElement that has an ",(0,s.jsx)("code",{children:"href"})," attribute; ideal for the ",(0,s.jsx)("code",{children:'<a onclick="singleSpaNavigate"></a>'})," use case."]})]})]})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"undefined"})}),"\n",(0,s.jsx)(n.h2,{id:"getmountedapps",children:"getMountedApps"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const mountedAppNames = singleSpa.getMountedApps();\nconsole.log(mountedAppNames); // ['app1', 'app2', 'navbar']\n"})}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsx)(n.p,{children:"none"}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"appNames: string[]"}),(0,s.jsxs)("dd",{children:["Each string is the name of a registered application that is currently ",(0,s.jsx)("code",{children:"MOUNTED"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"getappnames",children:"getAppNames"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const appNames = singleSpa.getAppNames();\nconsole.log(appNames); // ['app1', 'app2', 'app3', 'navbar']\n"})}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsx)(n.p,{children:"none"}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"appNames: string[]"}),(0,s.jsx)("dd",{children:"Each string is the name of a registered application regardless of app status."})]}),"\n",(0,s.jsx)(n.h2,{id:"getappstatus",children:"getAppStatus"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const status = singleSpa.getAppStatus("app1");\nconsole.log(status); // one of many statuses (see list below). e.g. MOUNTED\n'})}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"appName: string"}),(0,s.jsx)("dd",{children:"Registered application name."})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"appStatus: <string | null>"}),(0,s.jsxs)("dd",{children:[(0,s.jsxs)(n.p,{children:["Will be one of the following string constants, or ",(0,s.jsx)("code",{children:"null"})," if the app does not exist."]}),(0,s.jsxs)("dl",{className:"dl-inline",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"NOT_LOADED"}),(0,s.jsx)("dd",{children:"app has been registered with single-spa but has not yet been loaded."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"LOADING_SOURCE_CODE"}),(0,s.jsx)("dd",{children:"'s source code is being fetched."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"NOT_BOOTSTRAPPED"}),(0,s.jsx)("dd",{children:"app has been loaded but not bootstrapped."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"BOOTSTRAPPING"}),(0,s.jsxs)("dd",{children:["the ",(0,s.jsx)("code",{children:"bootstrap"})," lifecycle function has been called but has not finished."]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"NOT_MOUNTED"}),(0,s.jsx)("dd",{children:"app has been loaded and bootstrapped but not yet mounted."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"MOUNTING"}),(0,s.jsx)("dd",{children:"app is being mounted but not finished."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"MOUNTED"}),(0,s.jsx)("dd",{children:"app is currently active and is mounted to the DOM."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"UNMOUNTING"}),(0,s.jsx)("dd",{children:"app is currently being unmounted but has not finished."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"UNLOADING"}),(0,s.jsx)("dd",{children:"app is currently being unloaded but has not finished."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"SKIP_BECAUSE_BROKEN"}),(0,s.jsx)("dd",{children:"app threw an error during load, bootstrap, mount, or unmount and has been siloed because it is misbehaving and has been skipped. Other apps will continue on normally."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{children:"LOAD_ERROR"}),(0,s.jsx)("dd",{children:(0,s.jsx)(n.p,{children:"The app's loading function returned a promise that rejected. This is often due to a network error attempting to download the JavaScript bundle for the application. Single-spa will retry loading the application after the user navigates away from the current route and then comes back to it."})})]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note about LOAD_ERROR status"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that if you're using SystemJS to load your bundles, you need to add the following code to get SystemJS to re-attempt the network request\nwhen your loading function calls ",(0,s.jsx)(n.code,{children:"System.import()"})," on an application in ",(0,s.jsx)(n.code,{children:"LOAD_ERROR"})," status."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"singleSpa.addErrorHandler((err) => {\n  if (singleSpa.getAppStatus(err.appOrParcelName) === singleSpa.LOAD_ERROR) {\n    System.delete(System.resolve(err.appOrParcelName));\n  }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"unloadapplication",children:"unloadApplication"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// Unload the application right now, without waiting for it to naturally unmount.\nsingleSpa.unloadApplication("app1");\n\n// Unload the application only after it naturally unmounts due to a route change.\nsingleSpa.unloadApplication("app1", { waitForUnmount: true });\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The purpose of unloading a registered application is to set it back to to a NOT_LOADED status, which means that it will be re-bootstrapped the next time it needs to mount. The main use-case for this was to allow for the hot-reloading of entire registered applications, but ",(0,s.jsx)(n.code,{children:"unloadApplication"})," can be useful whenever you want to re-bootstrap your application."]}),"\n",(0,s.jsx)(n.p,{children:"Single-spa performs the following steps when unloadApplication is called."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Call the ",(0,s.jsx)(n.a,{href:"/docs/4.x/api#unload",children:"unload lifecyle"})," on the registered application that is being unloaded."]}),"\n",(0,s.jsx)(n.li,{children:"Set the app status to NOT_LOADED"}),"\n",(0,s.jsx)(n.li,{children:"Trigger a reroute, during which single-spa will potentially mount the application that was just unloaded."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Because a registered application might be mounted when ",(0,s.jsx)(n.code,{children:"unloadApplication"})," is called, you can specify whether you want to immediately unload or if you want to wait until the application is no longer mounted. This is done with the ",(0,s.jsx)(n.code,{children:"waitForUnmount"})," option."]}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"appName: string"}),(0,s.jsx)("dd",{children:"Registered application name."}),(0,s.jsx)("dt",{children:"options?: {waitForUnmount: boolean = false}"}),(0,s.jsxs)("dd",{children:["The options must be an object that has a ",(0,s.jsx)("code",{children:"waitForUnmount"})," property. When ",(0,s.jsx)(n.code,{children:"waitForUnmount"})," is ",(0,s.jsx)(n.code,{children:"false"}),", single-spa immediately unloads the specified registered application even if the app is currently mounted. If it is ",(0,s.jsx)("code",{children:"true"}),", single-spa will unload the registered application as soon as it is safe to do so (when the app status is not ",(0,s.jsx)("code",{children:"MOUNTED"}),")."]})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"Promise"}),(0,s.jsx)("dd",{children:"This promise will be resolved when the registered application has been successfully removed."})]}),"\n",(0,s.jsx)(n.h2,{id:"checkactivityfunctions",children:"checkActivityFunctions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const appsThatShouldBeActive = singleSpa.checkActivityFunctions();\nconsole.log(appsThatShouldBeActive); // ['app1']\n\nconst appsForACertainRoute = singleSpa.checkActivityFunctions({\n  pathname: \"/app2\",\n});\nconsole.log(appsForACertainRoute); // ['app2']\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Will call every app's activity function with the ",(0,s.jsx)(n.code,{children:"mockWindowLocation"})," and give you list of which applications should be mounted with that location."]}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"mockWindowLocation: string"}),(0,s.jsx)("dd",{children:"A string representing a window.location that will be used when calling every application's activity function to test if they return true."})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"appNames: string[]"}),(0,s.jsxs)("dd",{children:["Each string is the name of a registered application that matches the provided ",(0,s.jsx)("code",{children:"mockWindowLocation"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"adderrorhandler",children:"addErrorHandler"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"singleSpa.addErrorHandler((err) => {\n  console.log(err);\n  console.log(err.appOrParcelName);\n  console.log(singleSpa.getAppStatus(err.appOrParcelName));\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Adds a handler that will be called every time an application throws an error during a lifecycle function or activity function. When there are no error handlers, single-spa throws the error to the window."}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"errorHandler: Function(error: Error)"}),(0,s.jsxs)("dd",{children:["Must be a function. Will be called with an ",(0,s.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",children:"Error object"})," that additionally has a ",(0,s.jsx)("code",{children:"message"})," and ",(0,s.jsx)("code",{children:"appOrParcelName"})," property."]})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"undefined"})}),"\n",(0,s.jsx)(n.h2,{id:"removeerrorhandler",children:"removeErrorHandler"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"singleSpa.addErrorHandler(handleErr);\nsingleSpa.removeErrorHandler(handleErr);\n\nfunction handleErr(err) {\n  console.log(err);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Removes the given error handler function."}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"errorHandler: Function"}),(0,s.jsx)("dd",{children:"Reference to the error handling function."})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"boolean"}),(0,s.jsxs)("dd",{children:[(0,s.jsx)("code",{children:"true"})," if the error handler was removed, and ",(0,s.jsx)("code",{children:"false"})," if it was not."]})]}),"\n",(0,s.jsx)(n.h2,{id:"mountrootparcel",children:"mountRootParcel"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// Synchronous mounting\nconst parcel = singleSpa.mountRootParcel(parcelConfig, {\n  prop1: "value1",\n  domElement: document.getElementById("a-div"),\n});\nparcel.mountPromise.then(() => {\n  console.log("finished mounting the parcel!");\n});\n\n// Asynchronous mounting. Feel free to use webpack code splits or SystemJS dynamic loading\nconst parcel2 = singleSpa.mountRootParcel(() => import("./some-parcel.js"), {\n  prop1: "value1",\n  domElement: document.getElementById("a-div"),\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Will create and mount a ",(0,s.jsx)(n.a,{href:"/docs/4.x/parcels-overview",children:"single-spa parcel"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Parcels do not automatically unmount. Unmounting will need to be triggered manually."})}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"parcelConfig: Object or Loading Function"}),(0,s.jsx)("dd",{children:(0,s.jsx)(n.a,{href:"/docs/4.x/parcels-api#parcel-configuration",children:"parcelConfig"})}),(0,s.jsx)("dt",{children:"parcelProps: Object with a domElement property"}),(0,s.jsx)("dd",{children:(0,s.jsx)(n.a,{href:"/docs/4.x/parcels-api#parcel-props",children:"parcelProps"})})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"Parcel object"}),(0,s.jsxs)("dd",{children:["See ",(0,s.jsx)("a",{href:"/docs/parcels-api",children:"Parcels API"})," for more detail."]})]}),"\n",(0,s.jsx)(n.h2,{id:"ensurejquerysupport",children:"ensureJQuerySupport"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"singleSpa.ensureJQuerySupport(jQuery);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["jQuery uses ",(0,s.jsx)(n.a,{href:"https://learn.jquery.com/events/event-delegation/",children:"event delegation"})," so single-spa must monkey-patch each version of jQuery on the page. single-spa will attempt to do this automatically by looking for ",(0,s.jsx)(n.code,{children:"window.jQuery"})," or ",(0,s.jsx)(n.code,{children:"window.$"}),". Use this explicit method if multiple versions are included on your page or if jQuery is bound to a different global variable."]}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"jQuery?: JQueryFn = window.jQuery"}),(0,s.jsx)("dd",{children:"A reference to the global variable that jQuery has been bound to."})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"undefined"})}),"\n",(0,s.jsx)(n.h2,{id:"setbootstrapmaxtime",children:"setBootstrapMaxTime"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setBootstrapMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setBootstrapMaxTime(3000, true);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets the global configuration for bootstrap timeouts."}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"millis: number"}),(0,s.jsx)("dd",{children:"Number of milliseconds to wait for bootstrap to complete before timing out."}),(0,s.jsx)("dt",{children:"dieOnTimeout: boolean = false"}),(0,s.jsxs)("dd",{children:[(0,s.jsxs)("p",{children:["If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",(0,s.jsx)("code",{children:"millis"})," is reached."]}),(0,s.jsx)("p",{children:"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."}),(0,s.jsx)("p",{children:"Each registered application can override this behavior for itself."})]})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"undefined"})}),"\n",(0,s.jsx)(n.h2,{id:"setmountmaxtime",children:"setMountMaxTime"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setMountMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setMountMaxTime(3000, true);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets the global configuration for mount timeouts."}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"millis: number"}),(0,s.jsx)("dd",{children:"Number of milliseconds to wait for mount to complete before timing out."}),(0,s.jsx)("dt",{children:"dieOnTimeout: boolean = false"}),(0,s.jsxs)("dd",{children:[(0,s.jsxs)("p",{children:["If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",(0,s.jsx)("code",{children:"millis"})," is reached."]}),(0,s.jsx)("p",{children:"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."}),(0,s.jsx)("p",{children:"Each registered application can override this behavior for itself."})]})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"undefined"})}),"\n",(0,s.jsx)(n.h2,{id:"setunmountmaxtime",children:"setUnmountMaxTime"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setUnmountMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setUnmountMaxTime(3000, true);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets the global configuration for unmount timeouts."}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"millis: number"}),(0,s.jsx)("dd",{children:"Number of milliseconds to wait for unmount to complete before timing out."}),(0,s.jsx)("dt",{children:"dieOnTimeout: boolean = false"}),(0,s.jsxs)("dd",{children:[(0,s.jsxs)("p",{children:["If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",(0,s.jsx)("code",{children:"millis"})," is reached."]}),(0,s.jsx)("p",{children:"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."}),(0,s.jsx)("p",{children:"Each registered application can override this behavior for itself."})]})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"undefined"})}),"\n",(0,s.jsx)(n.h2,{id:"setunloadmaxtime",children:"setUnloadMaxTime"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// After three seconds, show a console warning while continuing to wait.\nsingleSpa.setUnloadMaxTime(3000);\n\n// After three seconds, move the application to SKIP_BECAUSE_BROKEN status.\nsingleSpa.setUnloadMaxTime(3000, true);\n\n// don't do a console warning for slow lifecycles until 10 seconds have elapsed\nsingleSpa.setUnloadMaxTime(3000, true, 10000);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets the global configuration for unload timeouts."}),"\n",(0,s.jsx)("h3",{children:"arguments"}),"\n",(0,s.jsxs)("dl",{className:"args-list",children:[(0,s.jsx)("dt",{children:"millis: number"}),(0,s.jsx)("dd",{children:"Number of milliseconds to wait for unload to complete before timing out."}),(0,s.jsx)("dt",{children:"dieOnTimeout: boolean = false"}),(0,s.jsxs)("dd",{children:[(0,s.jsxs)("p",{children:["If false, registered applications that are slowing things down will cause nothing more than some warnings in the console up until ",(0,s.jsx)("code",{children:"millis"})," is reached."]}),(0,s.jsx)("p",{children:"If true, registered applications that are slowing things down will be siloed into a SKIP_BECAUSE_BROKEN status where they will never again be given the chance to break everything."}),(0,s.jsx)("p",{children:"Each registered application can override this behavior for itself."})]}),(0,s.jsx)("dt",{children:"warningMillis: number = 1000"}),(0,s.jsx)("dd",{children:"Number of milliseconds to wait between console warnings that occur before the final timeout."})]}),"\n",(0,s.jsx)("h3",{children:"returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"undefined"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(n.p,{children:["All of the following are ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent",children:"custom events"})," fired by single-spa on the window. The event ",(0,s.jsx)(n.code,{children:"detail"})," property contains the native DOM event that triggered the reroute, such as a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent",children:"PopStateEvent"})," or ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent",children:"HashChangeEvent"}),". These events can be handled by using ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",children:(0,s.jsx)(n.code,{children:"addEventListener"})}),", like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'window.addEventListener("single-spa:before-routing-event", (evt) => {\n  const originalEvent = evt.detail;\n  console.log("single-spa event", originalEvent);\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"before-routing-event",children:"before routing event"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'window.addEventListener("single-spa:before-routing-event", () => {\n  console.log("single-spa is about to mount/unmount applications!");\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"single-spa:before-routing-event"})," event is fired before every routing event occurs, which is after each hashchange, popstate, or triggerAppChange, even if no changes to registered applications were necessary."]}),"\n",(0,s.jsx)(n.h2,{id:"routing-event",children:"routing event"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'window.addEventListener("single-spa:routing-event", () => {\n  console.log("single-spa finished mounting/unmounting applications!");\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"single-spa:routing-event"})," event is fired every time that a routing event has occurred, which is after each hashchange, popstate, or triggerAppChange, even if no changes to registered applications were necessary; and after single-spa verified that all apps were correctly loaded, bootstrapped, mounted, and unmounted."]}),"\n",(0,s.jsx)(n.h2,{id:"app-change-event",children:"app-change event"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'window.addEventListener("single-spa:app-change", () => {\n  console.log(\n    "A routing event occurred where at least one application was mounted/unmounted",\n  );\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"single-spa:app-change"})," event is fired every time that one or more apps were loaded, bootstrapped, mounted, unmounted, or unloaded. It is similar to ",(0,s.jsx)(n.code,{children:"single-spa:routing-event"})," except that it will not fire unless one or more apps were actually loaded, bootstrapped, mounted, or unmounted. A hashchange, popstate, or triggerAppChange that does not result in one of those changes will not cause the event to be fired."]}),"\n",(0,s.jsx)(n.h2,{id:"no-app-change-event",children:"no-app-change event"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'window.addEventListener("single-spa:before-routing-event", () => {\n  console.log(\n    "A routing event occurred where zero applications were mounted/unmounted",\n  );\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When no applications were loaded, bootstrapped, mounted, unmounted, or unloaded, single-spa fires a ",(0,s.jsx)(n.code,{children:"single-spa:no-app-change"})," event. This is the inverse of the ",(0,s.jsx)(n.code,{children:"single-spa:app-change"})," event. Only one will be fired for each routing event."]}),"\n",(0,s.jsx)(n.h2,{id:"before-first-mount",children:"before-first-mount"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'window.addEventListener("single-spa:before-first-mount", () => {\n  console.log(\n    "single-spa is about to mount the very first application for the first time",\n  );\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Before the first of any single-spa applications is mounted, single-spa fires a ",(0,s.jsx)(n.code,{children:"single-spa:before-first-mount"})," event; therefore it will only be fired once ever. More specifically, it fires after the application is already loaded but before mounting."]}),"\n",(0,s.jsx)(n.admonition,{title:"Suggested use case",type:"tip",children:(0,s.jsx)(n.p,{children:"remove a loader bar that the user is seeing right before the first app will be mounted."})}),"\n",(0,s.jsx)(n.h2,{id:"first-mount",children:"first-mount"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'window.addEventListener("single-spa:first-mount", () => {\n  console.log("single-spa just mounted the very first application");\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After the first of any single-spa applications is mounted, single-spa fires a ",(0,s.jsx)(n.code,{children:"single-spa:first-mount"})," event; therefore it will only be fired once ever."]}),"\n",(0,s.jsx)(n.admonition,{title:"Suggested use case:",type:"tip",children:(0,s.jsx)(n.p,{children:"log the time it took before the user sees any of the apps mounted."})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);