"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,k=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"rank-requirements-conditional",title:"Add Rank Requirements Based Upon ActiveMember360 Conditionals",description:"How to configure a GamiPress rank requirement based upon an ActiveMember360 conditional.",sidebar_label:"Add Rank Requirements Based Upon ActiveMember360 Conditionals"},o=void 0,s={unversionedId:"extensions/gamipress/rank-requirements-conditional",id:"extensions/gamipress/rank-requirements-conditional",title:"Add Rank Requirements Based Upon ActiveMember360 Conditionals",description:"How to configure a GamiPress rank requirement based upon an ActiveMember360 conditional.",source:"@site/docs/extensions/gamipress/rank-requirements-conditional.mdx",sourceDirName:"extensions/gamipress",slug:"/extensions/gamipress/rank-requirements-conditional",permalink:"/extensions/gamipress/rank-requirements-conditional",draft:!1,tags:[],version:"current",lastUpdatedAt:1665751408,formattedLastUpdatedAt:"Oct 14, 2022",frontMatter:{id:"rank-requirements-conditional",title:"Add Rank Requirements Based Upon ActiveMember360 Conditionals",description:"How to configure a GamiPress rank requirement based upon an ActiveMember360 conditional.",sidebar_label:"Add Rank Requirements Based Upon ActiveMember360 Conditionals"},sidebar:"extensions",previous:{title:"Add/Remove ActiveCampaign Tag/Tags, Set Contact Field When Achievement Earned",permalink:"/extensions/gamipress/achievement-earned"},next:{title:"Add Rank Requirements Based Upon ActiveCampaign Contact Tag/Tags",permalink:"/extensions/gamipress/rank-requirements-contact-tag"}},l={},c=[],d={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Note",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note it is not possible to add rank requirements to the lowest priority rank for each rank type.")),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"Selecting Add New Rank Requirement",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gamipress_extension_rank_requirements_add.png"}),(0,i.kt)("figcaption",null,"Selecting Add New Rank Requirement")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When editing an individual rank within the ",(0,i.kt)("strong",{parentName:"li"},"Rank Requirements")," panel click ",(0,i.kt)("strong",{parentName:"li"},"Add New Rank Requirement"),".")),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"Configuring Add New Rank Requirement For Conditional",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gamipress_extension_rank_requirements_conditional.png"}),(0,i.kt)("figcaption",null,"Configuring Add New Rank Requirement For Conditional")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"When")," dropdown, scroll, and in the ",(0,i.kt)("strong",{parentName:"li"},"ActiveMember360")," section click to select ",(0,i.kt)("strong",{parentName:"li"},"Conditional for contact"),"."),(0,i.kt)("li",{parentName:"ol"},"In the dropdown select whether the conditional should ",(0,i.kt)("strong",{parentName:"li"},"Evaluates true")," or ",(0,i.kt)("strong",{parentName:"li"},"Evaluates false")," to complete the rank requirement."),(0,i.kt)("li",{parentName:"ol"},"In the dropdown select the conditional to be evaluated."),(0,i.kt)("li",{parentName:"ol"},"Enter your own label. This is not compulsory and will be automatically created by GamiPress and ",(0,i.kt)("strong",{parentName:"li"},"ActiveMember360")," if left blank. When subsequently editing the ",(0,i.kt)("strong",{parentName:"li"},"Rank Requirements")," the label is not automatically updated it must be edited manually."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save All Rank Requirements"),".")))}p.isMDXComponent=!0}}]);