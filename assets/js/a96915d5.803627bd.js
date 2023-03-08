"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"4-0-0",title:"Version 4.0.0 (2022-03-28)",sidebar_label:"4.0.0 (2022-03-28)"},i=void 0,s={unversionedId:"releases/4-0-0",id:"releases/4-0-0",title:"Version 4.0.0 (2022-03-28)",description:"This is a significant update.",source:"@site/docs/releases/4-0-0.mdx",sourceDirName:"releases",slug:"/releases/4-0-0",permalink:"/releases/4-0-0",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"4-0-0",title:"Version 4.0.0 (2022-03-28)",sidebar_label:"4.0.0 (2022-03-28)"},sidebar:"releases",previous:{title:"4.0.1 (2022-04-08)",permalink:"/releases/4-0-1"},next:{title:"Versions 3.x.x",permalink:"/category/releases-3"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is a significant update."),(0,n.kt)("p",null,"Please ensure that you backup your existing WordPress site and database before updating."),(0,n.kt)("p",null,"We would always recommend updating a staging site first to validate the update prior to updating your live site."),(0,n.kt)("p",null,"This version includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Substantial changes to the ActiveMember360 internal framework to support the new operating methodology.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Removed all use of the Redux Framework for ActiveMember360 admin settings.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reorganised ActiveMember360 admin settings for a more logical workflow.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Implemented performance enhancements by making all modules and extensions optional resulting is smaller footprint and lower memory usage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support for PHP 7.4.x and 8.x.x and above.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support for WordPress 5.8 and above widget blocks."),(0,n.kt)("p",{parentName:"li"},"If you have been controlling the visibility of widgets using ActiveMember360 and the WordPress legacy widget features (i.e. those prior to WordPress 5.8) you will need to manually migrate those controls to the new widget blocks and control the visibility as detailed within ",(0,n.kt)("a",{parentName:"p",href:"/modules/block-editor/overview",title:"Click to learn how to use the ActiveMember360 Block Editor Module"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360 Block Editor Module"))),(0,n.kt)("p",{parentName:"li"},"To continue without currently migrating those settings, or to determine the current settings, you should install the ",(0,n.kt)("a",{parentName:"p",href:"https://en-gb.wordpress.org/plugins/classic-widgets/"},"WordPress Classic Widgets Plugin")," to ensure your site continues to function with the legacy widget control settings as is prior to migration.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ActiveMember360 Login Block available for use with the WordPress Block Editor (Gutenberg). See ",(0,n.kt)("a",{parentName:"p",href:"/blocks/login",title:"Click to learn how to use the ActiveMember360 Login Block"},(0,n.kt)("strong",{parentName:"a"},"Block Editor ActiveMember360 Login Block")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ActiveMember360 now fullly integrated with WordPress User Profile. Changes to email address or password in the profile are now synced directly to ActiveCampaign. It is no longer a requirement to use admin features such as ActiveMember360, Contacts, Change Contact Email and Change Contact Password."),(0,n.kt)("p",{parentName:"li"},"This also means changes to the WordPress user profile for email and password made by third party plugins such as BuddyPress, bbPress etc are also synced directly to ActiveCampaign.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added a View ActiveCampaign contact data option for individual users listed in the ",(0,n.kt)("strong",{parentName:"p"},"WordPress, Users, All Users")," listing. It is accessible when you hover on the username in the listing. It is fully detailed within ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/wordpress-user-activecampaign-contact-listing",title:"Click to learn about how to view ActiveCampaign contact data associated with a WordPress user"},(0,n.kt)("strong",{parentName:"a"},"Show Contact Data Associated With A WordPress User")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Standalone Bulk Editor has been removed. ActiveMember360 is now fully integrated with bulk actions included in standard WordPress page/post listings. See ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/access-settings-bulk-edit",title:"Click to learn how to use the WordPress bulk editor for ActiveMember360 Page/Post settings"},(0,n.kt)("strong",{parentName:"a"},"Bulk Editing ActiveMember360 Page/Post Settings")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added a new webhook module Contact Push mbr/contact/push to support pushing contact data from ActiveCampaign to WordPress using an automation webhook, providing a more efficient way than using the module mbr_genpass. mbr_genpass should now only be used for generating passwords. See ",(0,n.kt)("a",{parentName:"p",href:"/webhooks/contact-push",title:"Click to learn how to use the Contact Push webhook module"},(0,n.kt)("strong",{parentName:"a"},"Contact Push")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Formally released Custom Webhook Modules.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added a new filter hook mbr/3rd_party_authentication to ActiveMember360 API to support 3rd party authentication. See ",(0,n.kt)("a",{parentName:"p",href:"/developer/hooks/3rd-party-authentication",title:"Click to learn how to use the mbr/3rd_party_authentication filter"},(0,n.kt)("strong",{parentName:"a"},"mbr/3rd_party_authentication")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ActiveMember360 Payments Module now supports two separate redirects after a successful purchase. One for new contacts and logged in users and another for existing contacts who are not logged in."),(0,n.kt)("p",{parentName:"li"},"This is so existing contacts no longer need to login prior to purchasing. After a purchase these visitors will not be logged in and can be redirected to a different location to those that are logged in after purchase i.e. new contacts and logged in users.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Complete rewrite and updating of documentation. New documentation is available at ",(0,n.kt)("a",{parentName:"p",href:"https://docs.activemember360.com",title:"Click to access current ActiveMember360 reference documentation"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360 Reference Documentation")),"."),(0,n.kt)("p",{parentName:"li"},"For those continuing to operate with ActiveMember360 Version 3.4.6 or earlier legacy documentation is available ",(0,n.kt)("a",{parentName:"p",href:"https://legacy.docs.activemember360.com",title:"Click to access ActiveMember360 Version 3.4.6 and earlier legacy reference documentation"},(0,n.kt)("strong",{parentName:"a"},"here")),"."))))}d.isMDXComponent=!0}}]);