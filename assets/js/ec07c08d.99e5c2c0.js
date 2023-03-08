"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20117],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(o),h=n,d=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return o?r.createElement(d,a(a({ref:t},l),{},{components:o})):r.createElement(d,a({ref:t},l))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var m=2;m<i;m++)a[m]=o[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},67077:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=o(87462),n=(o(67294),o(3905));const i={id:"account-creation",title:"WooCommerce Account Creation",description:"How the WooCommerce account creation process operates when using the ActiveMember360 WooCommerce Extension.",sidebar_label:"WooCommerce Account Creation"},a=void 0,s={unversionedId:"extensions/woocommerce/account-creation",id:"extensions/woocommerce/account-creation",title:"WooCommerce Account Creation",description:"How the WooCommerce account creation process operates when using the ActiveMember360 WooCommerce Extension.",source:"@site/docs/extensions/woocommerce/account-creation.mdx",sourceDirName:"extensions/woocommerce",slug:"/extensions/woocommerce/account-creation",permalink:"/extensions/woocommerce/account-creation",draft:!1,tags:[],version:"current",lastUpdatedAt:1663949688,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{id:"account-creation",title:"WooCommerce Account Creation",description:"How the WooCommerce account creation process operates when using the ActiveMember360 WooCommerce Extension.",sidebar_label:"WooCommerce Account Creation"},sidebar:"extensions",previous:{title:"Product Availability",permalink:"/extensions/woocommerce/product-availability"},next:{title:"Order Processing & Order Status Changes",permalink:"/extensions/woocommerce/order-processing"}},c={},m=[{value:"Creation of the WordPress User",id:"creation-of-the-wordpress-user",level:2},{value:"New User Email",id:"new-user-email",level:2}],l={toc:m},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"WooCommerce controls the creation of the user account based upon the settings within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/account-settings",title:"Click to learn how to configure the WooCommerce account settings when using the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Accounts & Privacy")),"."),(0,n.kt)("p",null,"Recommendations for those settings are provided within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/account-settings",title:"Click to learn how to configure the WooCommerce account settings when using the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How to configure the WooCommerce account options when using the ActiveMember360 WooCommerce Extension")),"."),(0,n.kt)("h2",{id:"creation-of-the-wordpress-user"},"Creation of the WordPress User"),(0,n.kt)("p",null,"If an account is to be created it will be done after submission of the WooCommerce order or account registration form."),(0,n.kt)("p",null,"WooCommerce always creates the user within WordPress prior to order completion."),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"To ensure that this WordPress user can login to the site prior to them existing as an ActiveCampaign contact that satisfies the requirements detailed within ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/wordpress-login#activemember360-and-wordpress-login",title:"Click to learn about the WordPress login process when using ActiveMember360"},(0,n.kt)("strong",{parentName:"a"},"Controlling Site Access, ActiveMember360 and WordPress Login"))," you should specify that within ",(0,n.kt)("a",{parentName:"p",href:"/settings/login#allow-login-without-a-membership-tag",title:"Click to learn how to allow a login if the contact does not have a membership tag"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Allow login without a membership tag"))," is set to ",(0,n.kt)("strong",{parentName:"p"},"Yes"),"."),(0,n.kt)("p",{parentName:"admonition"},"With such a setting if an order fails, for whatever reason, the user can login to the site to resolve any issue.")),(0,n.kt)("h2",{id:"new-user-email"},"New User Email"),(0,n.kt)("p",null,"If the settings suggested within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/account-settings",title:"Click to learn how to configure the WooCommerce account settings when using the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How to configure the WooCommerce account options when using the ActiveMember360 WooCommerce Extension"))," are used WooCommerce will send a new user an email enabling them to set their password."),(0,n.kt)("p",null,"This email is sent from WordPress by WooCommerce. WordPress incorporates filters for plugins etc. to set the email from name and address."),(0,n.kt)("p",null,"Both WooCommerce and ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," use such filters. However the ActiveMember360 filters run after those of WooCommerce and therefore control the email from name and address. These will be those specified within ",(0,n.kt)("a",{parentName:"p",href:"/settings/mailing",title:"Click to learn how to configure the ActiveMember360 Mailing Settings"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Mailing")),"."),(0,n.kt)("p",null,"If you wish WooCommerce to control the email from name and address you can remove our filters by following the instruction within ",(0,n.kt)("a",{parentName:"p",href:"/settings/mailing#notes-for-developers",title:"Click to view notes for developers"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Mailing, Notes for developers")),"."))}p.isMDXComponent=!0}}]);