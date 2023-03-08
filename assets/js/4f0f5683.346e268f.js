"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84793],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(n),u=o,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,r(r({ref:e},p),{},{components:n})):a.createElement(k,r({ref:e},p))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36434:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={id:"adding-conditionals",title:"Adding Conditionals",description:"How to add and define ActiveMember360 Conditionals.",sidebar_label:"Adding Conditionals"},r=void 0,s={unversionedId:"fundamentals/conditionals/adding-conditionals",id:"fundamentals/conditionals/adding-conditionals",title:"Adding Conditionals",description:"How to add and define ActiveMember360 Conditionals.",source:"@site/docs/fundamentals/conditionals/adding-conditionals.mdx",sourceDirName:"fundamentals/conditionals",slug:"/fundamentals/conditionals/adding-conditionals",permalink:"/fundamentals/conditionals/adding-conditionals",draft:!1,tags:[],version:"current",lastUpdatedAt:1647023204,formattedLastUpdatedAt:"Mar 11, 2022",frontMatter:{id:"adding-conditionals",title:"Adding Conditionals",description:"How to add and define ActiveMember360 Conditionals.",sidebar_label:"Adding Conditionals"},sidebar:"fundamentals",previous:{title:"Conditionals",permalink:"/fundamentals/conditionals/"},next:{title:"Set User Login Status Condition",permalink:"/fundamentals/conditionals/conditionals-set-user-login-status-condition"}},l={},d=[{value:"Add A New Conditional",id:"add-a-new-conditional",level:2}],p={toc:d},c="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Conditionals")," are a WordPress custom post type. ",(0,o.kt)("strong",{parentName:"p"},"Conditionals")," support categories so can be grouped using any chosen hierarchical structure."),(0,o.kt)("p",null,"Adding and managing ",(0,o.kt)("strong",{parentName:"p"},"conditionals")," is done in exactly the same way as with any standard WordPress post/page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Conditionals")," can be listed, created, and managed along with their categories from the WordPress administrator main navigation."),(0,o.kt)("h2",{id:"add-a-new-conditional"},"Add A New Conditional"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/conditional_listing_add_new.png",alt:"Steps for selecting to add a new conditional"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To add a new ",(0,o.kt)("strong",{parentName:"li"},"conditional")," either click ",(0,o.kt)("strong",{parentName:"li"},"Add New")," in the WordPress administrator main navigation, or in the ",(0,o.kt)("strong",{parentName:"li"},"Conditionals")," listing.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/conditional_add_new.png",alt:"Steps for adding a condition set for a conditional"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Specify a title for your ",(0,o.kt)("strong",{parentName:"p"},"conditional"),". It is best to make this somewhat descriptive, or to your chosen naming convention, to aid selection when required.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your chosen ",(0,o.kt)("strong",{parentName:"p"},"Condition logic")," for this ",(0,o.kt)("strong",{parentName:"p"},"conditional"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"AND")," - ",(0,o.kt)("strong",{parentName:"p"},"ALL")," conditions set to define this ",(0,o.kt)("strong",{parentName:"p"},"conditional")," must evaluate to ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," for the ",(0,o.kt)("strong",{parentName:"p"},"conditional")," to be ",(0,o.kt)("strong",{parentName:"p"},"TRUE.")," If ",(0,o.kt)("strong",{parentName:"p"},"ANY")," one condition evaluates ",(0,o.kt)("strong",{parentName:"p"},"FALSE")," the ",(0,o.kt)("strong",{parentName:"p"},"conditional")," is ",(0,o.kt)("strong",{parentName:"p"},"FALSE"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"OR "),"- ",(0,o.kt)("strong",{parentName:"p"},"ANY")," conditions set to define this ",(0,o.kt)("strong",{parentName:"p"},"conditional")," must evaluate to ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," for the ",(0,o.kt)("strong",{parentName:"p"},"conditional")," to be ",(0,o.kt)("strong",{parentName:"p"},"TRUE.")," If ",(0,o.kt)("strong",{parentName:"p"},"ALL")," conditions evaluate ",(0,o.kt)("strong",{parentName:"p"},"FALSE")," the ",(0,o.kt)("strong",{parentName:"p"},"conditional")," is ",(0,o.kt)("strong",{parentName:"p"},"FALSE"),"."),(0,o.kt)("p",{parentName:"li"},"If only one condition is set for the ",(0,o.kt)("strong",{parentName:"p"},"conditional")," the conditional logic chosen is not relevant. Condition logic only applies when multiple conditions are set for the ",(0,o.kt)("strong",{parentName:"p"},"conditional"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To set a ",(0,o.kt)("strong",{parentName:"p"},"Condition "),"first select the required ",(0,o.kt)("strong",{parentName:"p"},"Condition type"),"."),(0,o.kt)("p",{parentName:"li"},"For detailed instructions on how to set a condition using any of the available condition types follow the links below:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-contact-list-status-condition",title:"Click to learn how to set an ActiveCampaign contact list status condition"},(0,o.kt)("strong",{parentName:"a"},"Contact list status"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-contact-tag-status-condition",title:"Click to learn how to set an ActiveCampaign contact tag status condition"},(0,o.kt)("strong",{parentName:"a"},"Contact tag status"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-contact-field-comparison-condition",title:"Click to learn how to set an ActiveCampaign contact field comparison condition"},(0,o.kt)("strong",{parentName:"a"},"Contact field comparison"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-user-login-status-condition",title:"Click to learn how to set a user login status condition"},(0,o.kt)("strong",{parentName:"a"},"User login status"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-user-role-status-condition",title:"Click to learn how to set a WordPress user role status condition"},(0,o.kt)("strong",{parentName:"a"},"User role status"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-php-statement-condition",title:"Click to learn how to set a PHP statement condition"},(0,o.kt)("strong",{parentName:"a"},"PHP statement"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-predefined-condition",title:"Click to learn how to set a predefined Conditional condition"},(0,o.kt)("strong",{parentName:"a"},"Predefined conditional"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-gamipress-user-status-condition",title:"Click to learn how to set a GamiPress user status status condition"},(0,o.kt)("strong",{parentName:"a"},"GamiPress user status"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-learndash-user-status-condition",title:"Click to learn how to set a LearnDash user status condition"},(0,o.kt)("strong",{parentName:"a"},"LearnDash user status"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/fundamentals/conditionals/conditionals-set-woocommerce-user-status-condition",title:"Click to learn how to set a WooCommerce user status condition"},(0,o.kt)("strong",{parentName:"a"},"WooCommerce user status"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Add Condition")," to define an additional condition to be used in the ",(0,o.kt)("strong",{parentName:"p"},"Condition set")," when evaluating the ",(0,o.kt)("strong",{parentName:"p"},"conditional"),"."),(0,o.kt)("p",{parentName:"li"},"Then repeat step 4."),(0,o.kt)("p",{parentName:"li"},"Dependent upon previous selections you may need to expand the condition to see all options for selection, click on the arrow indicated by label A in the image above."),(0,o.kt)("p",{parentName:"li"},"There is no limit to the number of conditions that can be added/set/defined for a single ",(0,o.kt)("strong",{parentName:"p"},"conditional"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add any notes you wish to explain or detail the ",(0,o.kt)("strong",{parentName:"p"},"conditional"),". These are for internal use only and are not displayed nor used elsewhere.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a category for the ",(0,o.kt)("strong",{parentName:"p"},"conditional")," if required.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Publish")," to make the ",(0,o.kt)("strong",{parentName:"p"},"conditional")," active. If you prefer you can ",(0,o.kt)("strong",{parentName:"p"},"Save Draft")," however this also makes the ",(0,o.kt)("strong",{parentName:"p"},"conditional")," inactive."))))}m.isMDXComponent=!0}}]);