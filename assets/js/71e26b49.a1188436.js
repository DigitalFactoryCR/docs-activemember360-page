"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69970],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.createContext({}),l=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,d=c["".concat(m,".").concat(h)]||c[h]||u[h]||a;return n?i.createElement(d,s(s({ref:t},p),{},{components:n})):i.createElement(d,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68953:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],o={id:"alternate-membership-menus",title:"Alternate Membership Menus",description:"How ActiveMember360 controls the visibility of WordPress menus.",sidebar_label:"Alternate Membership Menus"},m=void 0,l={unversionedId:"modules/alternate-membership-menus",id:"modules/alternate-membership-menus",title:"Alternate Membership Menus",description:"How ActiveMember360 controls the visibility of WordPress menus.",source:"@site/docs/modules/alternate-membership-menus.mdx",sourceDirName:"modules",slug:"/modules/alternate-membership-menus",permalink:"/modules/alternate-membership-menus",tags:[],version:"current",lastUpdatedAt:1647023204,formattedLastUpdatedAt:"3/11/2022",frontMatter:{id:"alternate-membership-menus",title:"Alternate Membership Menus",description:"How ActiveMember360 controls the visibility of WordPress menus.",sidebar_label:"Alternate Membership Menus"},sidebar:"modules",previous:{title:"ActiveCampaign Tracking",permalink:"/modules/activecampaign-tracking"},next:{title:"Overview",permalink:"/modules/autologin/overview"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Activate Alternate Membership Menus Module",id:"activate-alternate-membership-menus-module",level:2},{value:"Assigning Menus To Memberships",id:"assigning-menus-to-memberships",level:2},{value:"Assigning The Menu To A Membership When Editing The Menu",id:"assigning-the-menu-to-a-membership-when-editing-the-menu",level:3},{value:"Assigning Menus To Memberships When Managing Locations",id:"assigning-menus-to-memberships-when-managing-locations",level:3}],c={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Dependent upon the theme you use with your WordPress installation there may be a number of WordPress menus available."),(0,a.kt)("p",null,"Typically the theme wil control how many WordPress menus you can define."),(0,a.kt)("p",null,"The purpose of the ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Alternate Membership Menus")," module is to allow any defined menu to be associated with an ActiveMember360 membership."),(0,a.kt)("p",null,"Any menu associated to a specific membership will only be shown to logged in members that have the ActiveCampaign tag used to define the associated membership."),(0,a.kt)("p",null,"So for example, on a site with multiple memberships a different menu could be shown to each logged in user, dependent upon which membership they belong to."),(0,a.kt)("p",null,"Unlike the ActiveMember360 module ",(0,a.kt)("a",{parentName:"p",href:"/modules/menu-control",title:"Click to learn how ActiveMember360 controls the visibility of individual WordPress menu items"},(0,a.kt)("strong",{parentName:"a"},"Menu Control"))," which controls the visibility of individual menu items, ",(0,a.kt)("strong",{parentName:"p"},"Alternate Membership Menus")," controls the visibility of the entire menu."),(0,a.kt)("h2",{id:"activate-alternate-membership-menus-module"},"Activate Alternate Membership Menus Module"),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Steps to activate Alternate Membership Menus module",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/alternate_membership_menus_module_activation.png"}),(0,a.kt)("figcaption",null,"Steps to activate Alternate Membership Menus module")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the WordPress administrator main navigation click ",(0,a.kt)("strong",{parentName:"li"},"ActiveMember360, Modules"),"."),(0,a.kt)("li",{parentName:"ol"},"In ",(0,a.kt)("strong",{parentName:"li"},"ActiveMember360 Modules")," tabs click ",(0,a.kt)("strong",{parentName:"li"},"Alternate Membership Menus"),"."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("strong",{parentName:"li"},"Enable Alternate Membership Menus module")," to ",(0,a.kt)("strong",{parentName:"li"},"Yes/On"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,a.kt)("h2",{id:"assigning-menus-to-memberships"},"Assigning Menus To Memberships"),(0,a.kt)("p",null,"You can assign a menu to a membership in two different ways:"),(0,a.kt)("h3",{id:"assigning-the-menu-to-a-membership-when-editing-the-menu"},"Assigning The Menu To A Membership When Editing The Menu"),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Steps to assign the menu to a membership when editing the menu",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/alternate_membership_menus_module_edit_menu.png"}),(0,a.kt)("figcaption",null,"Steps to assign the menu to a membership when editing the menu")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the WordPress administrator main navigation click ",(0,a.kt)("strong",{parentName:"p"},"Appearance, Menus"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Edit Menus")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Select a menu to edit")," drop down select the menu to be assigned to memberships or create a new menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Menu Settings, Display Location")," select the menu locations and memberships where this menu should be used."),(0,a.kt)("p",{parentName:"li"},"Discrete selections will always override the default selection.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Menu")," to save your configuration."))),(0,a.kt)("h3",{id:"assigning-menus-to-memberships-when-managing-locations"},"Assigning Menus To Memberships When Managing Locations"),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Steps to assign menus to memberships when managing locations",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/alternate_membership_menus_module_manage_location.png"}),(0,a.kt)("figcaption",null,"Steps to assign menus to memberships when managing locations")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the WordPress administrator main navigation click ",(0,a.kt)("strong",{parentName:"p"},"Appearance, Menus"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Manage Locations")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For each membership listed click the ",(0,a.kt)("strong",{parentName:"p"},"Assigned Menu")," drop down and select the required menu for that membership.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")," to save your configuration."))),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Where a logged in user holds multiple memberships the menu shown is determined by the membership order. The first membership in the list which has a menu assigned which is not the default setting will be shown for that user."),(0,a.kt)("p",{parentName:"div"},"You can control the order of the memberships as explained at ",(0,a.kt)("a",{parentName:"p",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships")),"."),(0,a.kt)("p",{parentName:"div"},"The default menu will apply if none of the memberships have an assigned menu."))))}h.isMDXComponent=!0}}]);