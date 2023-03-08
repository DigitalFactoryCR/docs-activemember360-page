"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,g=l["".concat(m,".").concat(d)]||l[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[l]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"activecampaign-deep-data-integration",title:"ActiveCampaign Deep Data Integration",description:"Overview of WooCommerce and ActiveMember360 WooCommerce Extension.",sidebar_label:"ActiveCampaign Deep Data Integration"},i=void 0,c={unversionedId:"extensions/woocommerce/activecampaign-deep-data-integration",id:"extensions/woocommerce/activecampaign-deep-data-integration",title:"ActiveCampaign Deep Data Integration",description:"Overview of WooCommerce and ActiveMember360 WooCommerce Extension.",source:"@site/docs/extensions/woocommerce/activecampaign-deep-data-integration.mdx",sourceDirName:"extensions/woocommerce",slug:"/extensions/woocommerce/activecampaign-deep-data-integration",permalink:"/extensions/woocommerce/activecampaign-deep-data-integration",draft:!1,tags:[],version:"current",lastUpdatedAt:1658828306,formattedLastUpdatedAt:"Jul 26, 2022",frontMatter:{id:"activecampaign-deep-data-integration",title:"ActiveCampaign Deep Data Integration",description:"Overview of WooCommerce and ActiveMember360 WooCommerce Extension.",sidebar_label:"ActiveCampaign Deep Data Integration"}},m={},p=[],s={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ActiveCampaign's Deep Data Integration for WooCommerce and the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 WooCommerce Extension")," serve different purposes."),(0,r.kt)("p",null,"The primary purpose of the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 WooCommerce Extension")," is to set information within the ActiveCampaign contact record based upon WooCommerce activity whether this be tags, contact fields, events etc."),(0,r.kt)("p",null,"ActiveCampaign's WooCommerce Deep Data Integration is more focussed towards individual WooCommerce purchase transactions. It is for adding a contact to ActiveCampaign if they make a purchase and logging the WooCommerce that transaction history within ActiveCampaign, then using that information within automations."),(0,r.kt)("p",null,"It writes the following from WooCommerce to ActiveCampaign."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First name => First Name"),(0,r.kt)("li",{parentName:"ul"},"Last Name => Last Name"),(0,r.kt)("li",{parentName:"ul"},"Email => Email"),(0,r.kt)("li",{parentName:"ul"},'Company field under "Customer billing address" => Organization'),(0,r.kt)("li",{parentName:"ul"},'Phone field under "Customer billing address" => Phone'),(0,r.kt)("li",{parentName:"ul"},"Product Name => Product Name"),(0,r.kt)("li",{parentName:"ul"},"Product Category => Product Category"),(0,r.kt)("li",{parentName:"ul"},"Product ID => Product ID"),(0,r.kt)("li",{parentName:"ul"},"Order Price => Order Price"),(0,r.kt)("li",{parentName:"ul"},"Order Currency => Currency"),(0,r.kt)("li",{parentName:"ul"},"Order Shipping Method => Order Shipping Method")),(0,r.kt)("p",null,"It also provides some notes related to the transaction."),(0,r.kt)("p",null,"Thereafter you can trigger automations and use this information in automation conditions."),(0,r.kt)("p",null,"Full details are given here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.activecampaign.com/hc/en-us/articles/115000652490"},"https://help.activecampaign.com/hc/en-us/articles/115000652490")),(0,r.kt)("p",null,"At the time of writing, this integration does not handle refunds nor cancelled orders."),(0,r.kt)("p",null,"Whether you want/need the ActiveCampaign WooCommerce Deep Integration really depends upon what else you want to record regarding an order and if you want to then use ActiveCampaign E-commerce segment conditions within ActiveCampaign."),(0,r.kt)("p",null,"See: ",(0,r.kt)("a",{parentName:"p",href:"https://help.activecampaign.com/hc/en-us/articles/115001172204#activecampaign-ecommerce-segment-conditions-0-0"},"https://help.activecampaign.com/hc/en-us/articles/115001172204#activecampaign-ecommerce-segment-conditions-0-0")))}u.isMDXComponent=!0}}]);