"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23621],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||n;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<n;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},25315:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),s=["components"],i={id:"wordpress-roles-capabilities",title:"WordPress Roles & Capabilities",description:"Gain an understanding not only of WordPress Roles & Capabilities, but also how they are used with ActiveMember360.",sidebar_label:"WordPress Roles & Capabilities"},l=void 0,d={unversionedId:"fundamentals/wordpress-roles-capabilities",id:"fundamentals/wordpress-roles-capabilities",title:"WordPress Roles & Capabilities",description:"Gain an understanding not only of WordPress Roles & Capabilities, but also how they are used with ActiveMember360.",source:"@site/docs/fundamentals/wordpress-roles-capabilities.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/wordpress-roles-capabilities",permalink:"/fundamentals/wordpress-roles-capabilities",tags:[],version:"current",lastUpdatedAt:1646760317,formattedLastUpdatedAt:"3/8/2022",frontMatter:{id:"wordpress-roles-capabilities",title:"WordPress Roles & Capabilities",description:"Gain an understanding not only of WordPress Roles & Capabilities, but also how they are used with ActiveMember360.",sidebar_label:"WordPress Roles & Capabilities"},sidebar:"fundamentals",previous:{title:"Changing WordPress User & ActiveCampaign Contact Email Addresses",permalink:"/fundamentals/changing-wordpress-activecampaign-email"},next:{title:"Controlling Site Access",permalink:"/fundamentals/wordpress-login"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"ActiveMember360 and WordPress Roles",id:"activemember360-and-wordpress-roles",level:2},{value:"Control Login To WordPress Based Upon Roles",id:"control-login-to-wordpress-based-upon-roles",level:3},{value:"Control Access To Content Based Upon Roles",id:"control-access-to-content-based-upon-roles",level:3},{value:"Setting Roles Based Upon ActiveCampaign Tags",id:"setting-roles-based-upon-activecampaign-tags",level:3}],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Roles")," are how users are grouped within WordPress."),(0,n.kt)("p",null,"Each role is allowed to perform a set of tasks called ",(0,n.kt)("strong",{parentName:"p"},"Capabilities"),". It is those capabilities that define what a user with a specific role can or can\u2019t do."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Capabilities")," are in effect a permissions system."),(0,n.kt)("p",null,"WordPress by default has six roles: ",(0,n.kt)("strong",{parentName:"p"},"Super Admin, Administrator, Editor, Author, Contributor and Subscriber"),". Although roles are not hierarchical, the default roles do set up what appears to be a hierarchical system."),(0,n.kt)("p",null,"The Super Admin role only applies to WordPress Multisite installations."),(0,n.kt)("p",null,"The default set of capabilities assigned to each WordPress role is listed in detail in the ",(0,n.kt)("a",{parentName:"p",href:"https://wordpress.org/support/article/roles-and-capabilities/",title:"Click to access the WordPress Roles and Capabilities Table"},"Capability vs Role table")," on WordPress.org. It can help you better understand which capabilities are assigned to roles in your installation."),(0,n.kt)("p",null,"It is important to note that while these roles each come with a pre-defined set of capabilities, they can very easily be changed by using a plugin such as ",(0,n.kt)("a",{parentName:"p",href:"https://wordpress.org/plugins/members/",title:"Click to access the WordPress Members plugin"},"Members")," or by developers directly within their own code/plugin."),(0,n.kt)("p",null,"WordPress only allows one of the default roles to be assigned to any particular user."),(0,n.kt)("p",null,"However WordPress does technically support the idea of more than one role per user. Developers of plugins can create their own roles. They can assign certain capabilities to those roles that, within their plugin, control what users with those roles can and can\u2019t do."),(0,n.kt)("p",null,"An example of this is the WooCommerce."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Customer: Assigned to new customers when they create an account on your website. This role is basically equivalent to that of a normal WordPress subscriber, but customers can also edit their own account information and view past or current orders."),(0,n.kt)("li",{parentName:"ul"},"Shop Manager: This allows the user to run the operations side of your WooCommerce store without the ability to edit back-end functionality like files and code. A manager has the same permissions as a customer, plus they\u2019re also granted the ability to manage all settings within WooCommerce, create/edit products, and access all WooCommerce reports.")),(0,n.kt)("p",null,"Another example is the bbPress plugin."),(0,n.kt)("p",null,"The default bbPress roles and associated capabilities created by the bbPress plugin are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keymaster \u2013 Can create, edit and delete other users\u2019 forums, topics and replies. Can manage Tags, and moderate a forum with the moderation tools. Has access to global forum settings, tools, and importer."),(0,n.kt)("li",{parentName:"ul"},"Moderator \u2013 Can create and edit forums. Can create, edit and delete other users\u2019 topics and replies. Can manage Tags, and moderate a forum with the moderation tools."),(0,n.kt)("li",{parentName:"ul"},"Participant \u2013 Can create and edit their own topics and replies."),(0,n.kt)("li",{parentName:"ul"},"Spectator \u2013 Can only read topics and replies."),(0,n.kt)("li",{parentName:"ul"},"Blocked \u2013 All capabilities are explicitly blocked.")),(0,n.kt)("h2",{id:"activemember360-and-wordpress-roles"},"ActiveMember360 and WordPress Roles"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," does not create any additional WordPress roles. Nor does it change the capabilities assigned to any roles."),(0,n.kt)("p",null,"When a WordPress user is created by ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," they are given the WordPress role as specified in ",(0,n.kt)("strong",{parentName:"p"},"WordPress, Settings, General, New User Default Role"),"."),(0,n.kt)("h3",{id:"control-login-to-wordpress-based-upon-roles"},"Control Login To WordPress Based Upon Roles"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," does not provide features to control a login to the WordPress site using ",(0,n.kt)("strong",{parentName:"p"},"Roles"),"."),(0,n.kt)("h3",{id:"control-access-to-content-based-upon-roles"},"Control Access To Content Based Upon Roles"),(0,n.kt)("p",null,"When using ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/conditionals/conditionals",title:"Click to learn about Conditionals"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360 Conditionals"))," you can control access to content on any page or post based upon the WordPress user role."),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Conditionals and WordPress Page Builders")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Conditionals can be used with:"),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},"Beaver Builder - Modules, Columns ","&"," Rows"),(0,n.kt)("li",{parentName:"ul"},"Beaver Themer - Conditional Logic ","&"," Layouts"),(0,n.kt)("li",{parentName:"ul"},"Elementor - Widgets, Sections ","&"," Popups"),(0,n.kt)("li",{parentName:"ul"},"Oxygen Builder - Elements"),(0,n.kt)("li",{parentName:"ul"},"WordPress Block Editor - Blocks"),(0,n.kt)("li",{parentName:"ul"},"WordPress Classic Editor"),(0,n.kt)("li",{parentName:"ul"},"WordPress Menus"),(0,n.kt)("li",{parentName:"ul"},"WordPress Widgets"),(0,n.kt)("li",{parentName:"ul"},"\u2026and many other theme and content builders that support shortcodes")))),(0,n.kt)("h3",{id:"setting-roles-based-upon-activecampaign-tags"},"Setting Roles Based Upon ActiveCampaign Tags"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," includes a ",(0,n.kt)("a",{parentName:"p",href:"/modules/role-tag",title:"Click to learn about how ActiveMember360 maps WordPress user roles using ActiveCampaign contact tags."},(0,n.kt)("strong",{parentName:"a"},"Role To Tags"))," module to allow WordPress roles to be added or removed based upon the ",(0,n.kt)("strong",{parentName:"p"},"ActiveCampaign")," tags of the logged in user."))}m.isMDXComponent=!0}}]);