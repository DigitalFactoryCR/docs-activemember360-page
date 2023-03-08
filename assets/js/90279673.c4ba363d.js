"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"4-1-1",title:"Version 4.1.1 (2022-10-07)",sidebar_label:"4.1.1 (2022-10-07)"},i=void 0,s={unversionedId:"releases/4-1-1",id:"releases/4-1-1",title:"Version 4.1.1 (2022-10-07)",description:"This version includes:",source:"@site/docs/releases/4-1-1.mdx",sourceDirName:"releases",slug:"/releases/4-1-1",permalink:"/releases/4-1-1",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"4-1-1",title:"Version 4.1.1 (2022-10-07)",sidebar_label:"4.1.1 (2022-10-07)"},sidebar:"releases",previous:{title:"4.1.2 (2022-10-14)",permalink:"/releases/4-1-2"},next:{title:"4.1.0 (2022-09-26)",permalink:"/releases/4-1-0"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This version includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix to the ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Block Editor")," module so standard ActiveCampaign contact fields can be selected when using ",(0,a.kt)("strong",{parentName:"p"},"Set Block Editor Block Display Based Upon ActiveCampaign Contact Field Value"),". See ",(0,a.kt)("a",{parentName:"p",href:"/modules/block-editor/block-condition-contact-field",title:"Click to learn how to set the Block Editor Block Display Based Upon ActiveCampaign Contact Field Value"},(0,a.kt)("strong",{parentName:"a"},"Set Block Editor Block Display Based Upon ActiveCampaign Contact Field Value")),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix to the shortcode ",(0,a.kt)("a",{parentName:"p",href:"/shortcodes/mbr_password_change",title:"Click to learn how to use the [mbr_password_change] shortcode"},(0,a.kt)("strong",{parentName:"a"},"[mbr_password_change]"))," when using encrypted password storage in ActiveCampaign to ensure the new password is stored encrypted in both ActiveCampaign and WordPress.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix to the page/post ActiveMember360 quick edit panel to store changes correctly.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enhancement to ActiveMember360 page/post settings within the WordPress bulk actions editor to make default setting for ",(0,a.kt)("strong",{parentName:"p"},"Merge with current individual page settings")," as checked. See ",(0,a.kt)("a",{parentName:"p",href:"/fundamentals/access-settings-bulk-edit",title:"Click to learn how to use the WordPress bulk editor for ActiveMember360 Page/Post settings"},(0,a.kt)("strong",{parentName:"a"},"Bulk Editing ActiveMember360 Page/Post Settings")),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enhancements to ensure third party bulk editors for pages/posts do not overwrite the ActiveMember360 page/post settings."))))}u.isMDXComponent=!0}}]);