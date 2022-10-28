"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76563],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return g}});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(o),g=r,u=c["".concat(l,".").concat(g)]||c[g]||m[g]||n;return o?a.createElement(u,s(s({ref:t},d),{},{components:o})):a.createElement(u,s({ref:t},d))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<n;p++)s[p]=o[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},41473:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=o(87462),r=o(63366),n=(o(67294),o(3905)),s=["components"],i={id:"role-tags",title:"Role To Tags Module",description:"How ActiveMember360 maps WordPress user roles using ActiveCampaign contact tags.",sidebar_label:"Role To Tags"},l=void 0,p={unversionedId:"modules/role-tags",id:"modules/role-tags",title:"Role To Tags Module",description:"How ActiveMember360 maps WordPress user roles using ActiveCampaign contact tags.",source:"@site/docs/modules/role-tag.mdx",sourceDirName:"modules",slug:"/modules/role-tags",permalink:"/modules/role-tags",tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"role-tags",title:"Role To Tags Module",description:"How ActiveMember360 maps WordPress user roles using ActiveCampaign contact tags.",sidebar_label:"Role To Tags"},sidebar:"modules",previous:{title:"Remote Authentication",permalink:"/modules/remote-authentication"},next:{title:"Theme Switcher",permalink:"/modules/theme-switcher"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Activation",id:"activation",level:2},{value:"Adding Role To Tags",id:"adding-role-to-tags",level:2},{value:"Removing Role To Tags Mappings",id:"removing-role-to-tags-mappings",level:2},{value:"Reordering Role To Tags",id:"reordering-role-to-tags",level:2}],c={toc:m};function g(e){var t=e.components,o=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"[fundamentals-visitor-types-remote]",': /fundamentals/visitor-types#remote-user "Click to learn about what determines a remote user and user behaviour"',"[developer-hooks-filters-role-alternate]",': /developer/hooks/role-alternate "Click to learn how to use the mbr/role/alternate filter"'),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"WordPress by default has six roles: ",(0,n.kt)("strong",{parentName:"p"},"Super Admin, Administrator, Editor, Author, Contributor and Subscriber"),". The Super Admin role only applies to WordPress multisite installations."),(0,n.kt)("p",null,"When ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," creates a WordPress user it will automatically assign the role set in ",(0,n.kt)("strong",{parentName:"p"},"WordPress, Settings, General, New User Default Role"),"."),(0,n.kt)("p",null,"WordPress only allows one of the standard WordPress default roles to be assigned to any particular WordPress user."),(0,n.kt)("p",null,"However WordPress does technically support the idea of more than one role per user. Users and developers of plugins can create their own roles. Examples of this are roles created by bbPress, BuddyPress, LearnDash and WooCommerce."),(0,n.kt)("p",null,"There may be situations where you wish to control the addition and removal of any third party WordPress user roles based upon ActiveCampaign contact tags."),(0,n.kt)("p",null,"That is the purpose of the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Role To Tags")," module."),(0,n.kt)("p",null,"It allows roles to be added to or removed from a WordPress user based upon the tags belonging to the associated ActiveCampaign contact."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," does not define any user roles."),(0,n.kt)("p",{parentName:"div"},"Using ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Role To Tags")," you cannot add/remove any default WordPress roles for the user. The reasons being:"),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To prevent a situation where the user can accidently, or otherwise, remove all of the WordPress standard roles.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"As a user can only ever have one of the standard WordPress rules to prevent mapping conflicts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Security regarding the assignment of the admin or super admin role."))),(0,n.kt)("p",{parentName:"div"},"So we choose to protect standard WordPress role assignment and do not allow Role to Tag Mapping to add or remove those roles based upon tags. It only functions for third party user roles."),(0,n.kt)("p",{parentName:"div"},"If you wish to modify the default WordPress role of the user you would need to custom program that using the ","[",(0,n.kt)("strong",{parentName:"p"},"mbr/role/alternate"),"][developer-hooks-filters-role-alternate]"," filter."))),(0,n.kt)("h2",{id:"activation"},"Activation"),(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"Steps to activate Role To Tags module",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/role_tags_module_activation.png"}),(0,n.kt)("figcaption",null,"Steps to activate Role To Tags module")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,n.kt)("strong",{parentName:"li"},"ActiveMember360, Modules"),"."),(0,n.kt)("li",{parentName:"ol"},"In ",(0,n.kt)("strong",{parentName:"li"},"ActiveMember360 Modules")," tabs click ",(0,n.kt)("strong",{parentName:"li"},"Role To Tags"),"."),(0,n.kt)("li",{parentName:"ol"},"Set ",(0,n.kt)("strong",{parentName:"li"},"Enable Role To Tags module")," to ",(0,n.kt)("strong",{parentName:"li"},"Yes/On"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,n.kt)("h2",{id:"adding-role-to-tags"},"Adding Role To Tags"),(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"Steps to add Role To Tags",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/role_tags_module_add.png"}),(0,n.kt)("figcaption",null,"Steps to add Role To Tags")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To add a new role to tags mapping in WordPress administrator main navigation click ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360, Modules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If this is the first ever ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," mapping you have defined for the site continue to step 4 or otherwise click on ",(0,n.kt)("strong",{parentName:"p"},"Add Role To Tag Mapping"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Select a WordPress user role")," drop down select the role to be controlled by the selected ActiveCampaign contact tags."),(0,n.kt)("p",{parentName:"li"},"It is only possible to select a single role to map. If you wish to map multiple roles using the same tags please define additional ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," mappings."),(0,n.kt)("p",{parentName:"li"},"The name of the role selected automatically determines the name given to the mapping.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Select one or more tags")," drop down select the ActiveCampaign tags that should add the previously selected ",(0,n.kt)("strong",{parentName:"p"},"Select a WordPress user role")," for the logged in user."),(0,n.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,n.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,n.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,n.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"x")," shown next to the individual tag name."),(0,n.kt)("p",{parentName:"li"},"All tags can be removed from the selection by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"x")," shown in the far right of the drop down."))),(0,n.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If the ActiveCampaign contact associated to the WordPress user has ",(0,n.kt)("strong",{parentName:"p"},"ANY")," of the selected tags the selected WordPress user role will be ",(0,n.kt)("strong",{parentName:"p"},"added to")," the user."),(0,n.kt)("p",{parentName:"div"},"If the ActiveCampaign contact associated to the WordPress user has ",(0,n.kt)("strong",{parentName:"p"},"NONE")," of the selected tags the selected WordPress user role will be ",(0,n.kt)("strong",{parentName:"p"},"removed from")," the user."),(0,n.kt)("p",{parentName:"div"},"The WordPress user role will be added/removed upon login, or for an already logged in ","[",(0,n.kt)("strong",{parentName:"p"},"remote user"),"][fundamentals-visitor-types-remote]"," immediately ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," is notified or determines the change of contact tags and the ","[",(0,n.kt)("strong",{parentName:"p"},"remote user"),"][fundamentals-visitor-types-remote]"," subsequently performs some action on the site."),(0,n.kt)("p",{parentName:"div"},"As many ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," mappings can be defined as required."))),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Once the settings have been completed ensure ",(0,n.kt)("strong",{parentName:"li"},"Save Settings")," is clicked to save the defined ",(0,n.kt)("strong",{parentName:"li"},"Role To Tags")," mappings.")),(0,n.kt)("h2",{id:"removing-role-to-tags-mappings"},"Removing Role To Tags Mappings"),(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"Steps to remove Role To Tags",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/role_tags_module_remove.png"}),(0,n.kt)("figcaption",null,"Steps to remove Role To Tags")),(0,n.kt)("p",null,"You can remove ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," mappings by moving your cursor into the ",(0,n.kt)("strong",{parentName:"p"},"role/tags mapping")," title area. A ",(0,n.kt)("strong",{parentName:"p"},"Remove")," link will then be shown that when clicked will remove the ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," mappings."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Remove")," link is only shown if more than one ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," mapping is defined."),(0,n.kt)("h2",{id:"reordering-role-to-tags"},"Reordering Role To Tags"),(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"Steps to reorder Role To Tags",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/role_tags_module_reorder.png"}),(0,n.kt)("figcaption",null,"Steps to reorder Role To Tags")),(0,n.kt)("p",null,"Where multiple ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," mappings have been added/created you can reorder the mappings by moving your cursor into the ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," mapping title area. The cursor will show as a cross-hair and on holding down the left mouse button you can drag the mapping and release to change the order."),(0,n.kt)("p",null,"Reordering is available to solely aid the management of the ",(0,n.kt)("strong",{parentName:"p"},"Role To Tags")," mappings defined."))}g.isMDXComponent=!0}}]);