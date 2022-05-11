"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15495],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(o),d=r,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return o?n.createElement(v,a(a({ref:t},c),{},{components:o})):n.createElement(v,a({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},79202:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=o(87462),r=o(63366),s=(o(67294),o(3905)),a=["components"],i={id:"custom-post-types",title:"Custom Post Types Module",description:"How ActiveMember360 provides access controls for WordPress custom post types.",sidebar_label:"Custom Post Types"},l=void 0,p={unversionedId:"modules/custom-post-types",id:"modules/custom-post-types",title:"Custom Post Types Module",description:"How ActiveMember360 provides access controls for WordPress custom post types.",source:"@site/docs/modules/custom-post-types.mdx",sourceDirName:"modules",slug:"/modules/custom-post-types",permalink:"/modules/custom-post-types",tags:[],version:"current",lastUpdatedAt:1646128245,formattedLastUpdatedAt:"3/1/2022",frontMatter:{id:"custom-post-types",title:"Custom Post Types Module",description:"How ActiveMember360 provides access controls for WordPress custom post types.",sidebar_label:"Custom Post Types"},sidebar:"modules",previous:{title:"Block Editor Block Display Examples",permalink:"/modules/block-editor/examples"},next:{title:"Custom Shortcodes",permalink:"/modules/custom-shortcodes"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Activate Custom Post Types Module",id:"activate-custom-post-types-module",level:2},{value:"Enable Custom Post Types",id:"enable-custom-post-types",level:2}],m={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"ActiveMember360 by default provides tools to protect/control access for the following post types:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Pages - page"),(0,s.kt)("li",{parentName:"ul"},"Standard posts - post")),(0,s.kt)("p",null,"When the associated ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360 Extensions")," are enabled the following custom post types are also supported:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"bbPress - bbforum"),(0,s.kt)("li",{parentName:"ul"},"LearnDash - sfwd-courses, sfwd-lessons, sfwd-topic, sfwd-quiz"),(0,s.kt)("li",{parentName:"ul"},"LifterLMS - course, lesson, llms_quiz"),(0,s.kt)("li",{parentName:"ul"},"Memberoni - memberoni_course"),(0,s.kt)("li",{parentName:"ul"},"WooCommerce - product"),(0,s.kt)("li",{parentName:"ul"},"WP Courseware - course_unit")),(0,s.kt)("p",null,"However for your install you may have other custom post types defined by other plugins, or in other ways, for which you wish to enable ActiveMember360 access controls."),(0,s.kt)("p",null,"The purpose of the ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360 Custom Post Types")," module is to allow the selection of such custom post types for use with those ActiveMember360 access controls."),(0,s.kt)("p",null,"When your custom post type is enabled the ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," panel will be available when creating or editing the custom post type and also the ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," edit popup will be avaiable in the custom post type listing for each post."),(0,s.kt)("h2",{id:"activate-custom-post-types-module"},"Activate Custom Post Types Module"),(0,s.kt)("figure",null,(0,s.kt)("img",{alt:"Steps to activate Custom Post Types module",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/custom_post_types_module_activation.png"}),(0,s.kt)("figcaption",null,"Steps to activate Alternate Membership Menus module")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"In the WordPress administrator main navigation click ",(0,s.kt)("strong",{parentName:"li"},"ActiveMember360, Modules"),"."),(0,s.kt)("li",{parentName:"ol"},"In ",(0,s.kt)("strong",{parentName:"li"},"ActiveMember360 Modules")," tabs click ",(0,s.kt)("strong",{parentName:"li"},"Custom Post Types"),"."),(0,s.kt)("li",{parentName:"ol"},"Set ",(0,s.kt)("strong",{parentName:"li"},"Enable Custom Post Types module")," to ",(0,s.kt)("strong",{parentName:"li"},"Yes/On"),"."),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,s.kt)("h2",{id:"enable-custom-post-types"},"Enable Custom Post Types"),(0,s.kt)("figure",null,(0,s.kt)("img",{alt:"Steps to enable Custom Post Types",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/custom_post_types_module_enable.png"}),(0,s.kt)("figcaption",null,"Steps to enable Custom Post Types")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In WordPress administrator main navigation click ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360, Modules"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360 Modules")," tabs click ",(0,s.kt)("strong",{parentName:"p"},"Custom Post Types"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click in the ",(0,s.kt)("strong",{parentName:"p"},"Enable Custom Post Types")," selection area and select the required post type or start typing part of the custom post type name to refine the list."),(0,s.kt)("p",{parentName:"li"},"Then click on the required custom post type for which you wish to enable ActiveMember360."),(0,s.kt)("p",{parentName:"li"},"Multiple custom post types can be selected."),(0,s.kt)("p",{parentName:"li"},"Individual custom post types can be removed from the selection by clicking on the ",(0,s.kt)("strong",{parentName:"p"},"x")," shown next to the individual custom post type name."),(0,s.kt)("p",{parentName:"li"},"All custom post types can be selected/removed with one click using the ",(0,s.kt)("strong",{parentName:"p"},"Select: All")," and ",(0,s.kt)("strong",{parentName:"p"},"Select: None")," options."),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Only custom post types that are ",(0,s.kt)("strong",{parentName:"p"},"Public")," (i.e for use publicly) are shown in the selection area as only ",(0,s.kt)("strong",{parentName:"p"},"Public")," custom post types can be enabled for use with ActiveMember360 access controls."),(0,s.kt)("p",{parentName:"div"},"Post types already configured for use with ActiveMember360 as listed in the ",(0,s.kt)("a",{parentName:"p",href:"#overview"},(0,s.kt)("strong",{parentName:"a"},"Overview"))," above are not shown for selection.")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Save Settings"),"."))))}d.isMDXComponent=!0}}]);