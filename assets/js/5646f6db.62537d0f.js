"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(r),h=a,d=f["".concat(s,".").concat(h)]||f[h]||u[h]||c;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},39740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const c={id:"cache",title:"Cache",description:"How to configure the ActiveMember360 Cache settings.",sidebar_label:"Cache"},i=void 0,o={unversionedId:"settings/cache",id:"settings/cache",title:"Cache",description:"How to configure the ActiveMember360 Cache settings.",source:"@site/docs/settings/cache.mdx",sourceDirName:"settings",slug:"/settings/cache",permalink:"/settings/cache",draft:!1,tags:[],version:"current",lastUpdatedAt:1665751408,formattedLastUpdatedAt:"Oct 14, 2022",frontMatter:{id:"cache",title:"Cache",description:"How to configure the ActiveMember360 Cache settings.",sidebar_label:"Cache"},sidebar:"settings",previous:{title:"Content Access",permalink:"/settings/content-access"},next:{title:"Excerpts",permalink:"/settings/excerpts"}},s={},l=[{value:"Cache data refresh frequency",id:"cache-data-refresh-frequency",level:2}],p={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Configure the ActiveMember360 Cache settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_cache.png"}),(0,a.kt)("figcaption",null,"Configure the ActiveMember360 Cache settings")),(0,a.kt)("h2",{id:"cache-data-refresh-frequency"},"Cache data refresh frequency"),(0,a.kt)("p",null,"Set ",(0,a.kt)("strong",{parentName:"p"},"Cache data refresh frequency")," to the time interval ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360")," should use to refresh your local cache of ActiveCampaign data."),(0,a.kt)("p",null,"You can force an immediate refresh of the cache as detailed at ",(0,a.kt)("a",{parentName:"p",href:"/settings/utilities#cache-refresh",title:"Click to learn how to refresh the ActiveCampaign application cache"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Cache Refresh"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default: 6hrs")),(0,a.kt)("admonition",{title:"Beware",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This cache refresh frequency relates solely to ActiveCampaign application data. As an example all the contact tags or contact fields defined within ActiveCampaign."),(0,a.kt)("p",{parentName:"admonition"},"It is not specific to data for a particular contact, purely application data.")))}u.isMDXComponent=!0}}]);