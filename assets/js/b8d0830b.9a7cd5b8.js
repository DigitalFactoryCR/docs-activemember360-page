"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48827,8595],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>h});var a=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,r=function(e,t){if(null==e)return{};var s,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var s=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(s),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||n;return s?a.createElement(h,o(o({ref:t},u),{},{components:s})):a.createElement(h,o({ref:t},u))}));function h(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=s.length,o=new Array(n);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<n;d++)o[d]=s[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}m.displayName="MDXCreateElement"},85162:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(67294),r=s(86010);const n={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:s,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,o),hidden:s},t)}},74866:(e,t,s)=>{s.d(t,{Z:()=>N});var a=s(87462),r=s(67294),n=s(86010),o=s(12466),i=s(16550),l=s(91980),d=s(67392),u=s(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:s,attributes:a,default:r}}=e;return{value:t,label:s,attributes:a,default:r}}))}function c(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??p(s);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function m(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:s}=e;const a=(0,i.k6)(),n=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l._X)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:a}=e,n=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[l,d]=h({queryString:s,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,u.Nk)(s);return[a,(0,r.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:a}),g=(()=>{const e=l??p;return m({value:e,tabValues:n})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,n]),tabValues:n}}var g=s(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:s,selectedValue:i,selectValue:l,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,s=u.indexOf(t),a=d[s].value;a!==i&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=u.indexOf(e.currentTarget)+1;t=u[s]??u[0];break}case"ArrowLeft":{const s=u.indexOf(e.currentTarget)-1;t=u[s]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},t)},d.map((e=>{let{value:t,label:s,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},o,{className:(0,n.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),s??t)})))}function k(e){let{lazy:t,children:s,selectedValue:a}=e;if(s=Array.isArray(s)?s:[s],t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,n.Z)("tabs-container",f.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},16035:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=s(87462),r=(s(67294),s(3905));const n={},o=void 0,i={unversionedId:"assets/conditionals-supported-conditions",id:"assets/conditionals-supported-conditions",title:"conditionals-supported-conditions",description:"- Contact list status:",source:"@site/docs/assets/conditionals-supported-conditions.mdx",sourceDirName:"assets",slug:"/assets/conditionals-supported-conditions",permalink:"/assets/conditionals-supported-conditions",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{}},l={},d=[],u={toc:d},p="wrapper";function c(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contact list status:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Contact is active in any or all of the lists selected"),(0,r.kt)("li",{parentName:"ul"},"Contact is unconfirmed in any or all of the lists selected"),(0,r.kt)("li",{parentName:"ul"},"Contact is unsubscribed in any or all of the lists selected"),(0,r.kt)("li",{parentName:"ul"},"Contact is bounced in any or all of the lists selected"))),(0,r.kt)("li",{parentName:"ul"},"Contact tag status:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Contact has any or all of the tags selected"),(0,r.kt)("li",{parentName:"ul"},"Contact does not have any or all of the tags selected"))),(0,r.kt)("li",{parentName:"ul"},"Contact field comparison:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Contact has a contact field that compares with a value"),(0,r.kt)("li",{parentName:"ul"},"Contact has a contact field that compares with another of their contact fields"))),(0,r.kt)("li",{parentName:"ul"},"User login status:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User is logged in"),(0,r.kt)("li",{parentName:"ul"},"User is not logged in"),(0,r.kt)("li",{parentName:"ul"},"User has failed payment status"),(0,r.kt)("li",{parentName:"ul"},"It is the user\u2019s first login"))),(0,r.kt)("li",{parentName:"ul"},"User role status:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User has any or all of the roles selected"),(0,r.kt)("li",{parentName:"ul"},"User does not have any or all of the roles selected"))),(0,r.kt)("li",{parentName:"ul"},"PHP statement:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any WordPress conditional statement"),(0,r.kt)("li",{parentName:"ul"},"Any WooCommerce conditional statement"),(0,r.kt)("li",{parentName:"ul"},"Predefined conditional"))),(0,r.kt)("li",{parentName:"ul"},"GamiPress User status:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User has any or all of the achievements selected"),(0,r.kt)("li",{parentName:"ul"},"User does not have any or all of the achievements selected"),(0,r.kt)("li",{parentName:"ul"},"User has any or all of the ranks selected"),(0,r.kt)("li",{parentName:"ul"},"User does not have any or all of the ranks selected"),(0,r.kt)("li",{parentName:"ul"},"User has a points type total that compares with a value"))),(0,r.kt)("li",{parentName:"ul"},"Learndash User status:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User is enrolled in any or all of the courses selected"),(0,r.kt)("li",{parentName:"ul"},"User is not enrolled in any or all of the courses selected"),(0,r.kt)("li",{parentName:"ul"},"User has not started any or all of the courses selected"),(0,r.kt)("li",{parentName:"ul"},"User has in progress any or all of the courses selected"),(0,r.kt)("li",{parentName:"ul"},"User has completed any or all of the courses selected"),(0,r.kt)("li",{parentName:"ul"},"User has not completed any or all of the lessons selected"),(0,r.kt)("li",{parentName:"ul"},"User has completed any or all of the lessons selected"),(0,r.kt)("li",{parentName:"ul"},"User has not completed any or all of the topics selected"),(0,r.kt)("li",{parentName:"ul"},"User has completed any or all of the topics selected"))),(0,r.kt)("li",{parentName:"ul"},"WooCommerce User status:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User has purchased any or all of the products selected"),(0,r.kt)("li",{parentName:"ul"},"User has not purchased any or all of the products selected"),(0,r.kt)("li",{parentName:"ul"},"User has pending status for any or all of the subscriptions selected"),(0,r.kt)("li",{parentName:"ul"},"User has active status for any or all of the subscriptions selected"),(0,r.kt)("li",{parentName:"ul"},"User has on hold status for any or all of the subscriptions selected"),(0,r.kt)("li",{parentName:"ul"},"User has pending cancellation status for any or all of the subscriptions selected"),(0,r.kt)("li",{parentName:"ul"},"User has cancelled status for any or all of the subscriptions selected"),(0,r.kt)("li",{parentName:"ul"},"User has expired status for any or all of the subscriptions selected"))),(0,r.kt)("li",{parentName:"ul"},"\u2026any multiples and combinations of the above.")))}c.isMDXComponent=!0},50761:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=s(87462),r=(s(67294),s(3905)),n=s(16035),o=s(74866),i=s(85162);const l={id:"buddypress",title:"BuddyPress Extension",description:"ActiveMember360 automatically controls the joining and leaving of users as members in BuddyPress groups based upon the ActiveCampaign contact data and WordPress user data of the logged in user.",sidebar_label:"BuddyPress"},d=void 0,u={unversionedId:"extensions/buddypress",id:"extensions/buddypress",title:"BuddyPress Extension",description:"ActiveMember360 automatically controls the joining and leaving of users as members in BuddyPress groups based upon the ActiveCampaign contact data and WordPress user data of the logged in user.",source:"@site/docs/extensions/buddypress.mdx",sourceDirName:"extensions",slug:"/extensions/buddypress",permalink:"/extensions/buddypress",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"buddypress",title:"BuddyPress Extension",description:"ActiveMember360 automatically controls the joining and leaving of users as members in BuddyPress groups based upon the ActiveCampaign contact data and WordPress user data of the logged in user.",sidebar_label:"BuddyPress"},sidebar:"extensions",previous:{title:"Examples",permalink:"/extensions/beaver-builder/examples"},next:{title:"Contact Form 7",permalink:"/extensions/contact-form-7"}},p={},c=[{value:"BuddyPress Overview",id:"buddypress-overview",level:2},{value:"ActiveMember360 BuddyPress Extension Overview",id:"activemember360-buddypress-extension-overview",level:2},{value:"ActiveMember360 BuddyPress Extension Activation &amp; Settings",id:"activemember360-buddypress-extension-activation--settings",level:2},{value:"Set ActiveMember360 controls for BuddyPress Group Membership",id:"set-activemember360-controls-for-buddypress-group-membership",level:2},{value:"ActiveMember360 BuddyPress Extension &amp; BuddyPress Behaviour",id:"activemember360-buddypress-extension--buddypress-behaviour",level:2},{value:"BuddyPress Members Profile, Settings, General &amp; Delete Account Tabs",id:"buddypress-members-profile-settings-general--delete-account-tabs",level:3},{value:"BuddyPress Registration",id:"buddypress-registration",level:3},{value:"BuddyPress Mention Name",id:"buddypress-mention-name",level:3},{value:"BuddyPress Group Memberships",id:"buddypress-group-memberships",level:2},{value:"BuddyPress Group Membership Examples",id:"buddypress-group-membership-examples",level:2}],m={toc:c},h="wrapper";function b(e){let{components:t,...s}=e;return(0,r.kt)(h,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"BuddyPress Logo",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/buddypress_featured.png"})),(0,r.kt)("h2",{id:"buddypress-overview"},"BuddyPress Overview"),(0,r.kt)("p",null,"BuddyPress is a community plugin for WordPress. It adds social networking features to WordPress and includes features such as member profiles, groups, activity streams, notifications and much more. There is an integration with bbPress to include forum capabilities."),(0,r.kt)("p",null,"BuddyPress is available as a free plugin from the WordPress Repository. It is created and maintained by the WordPress community."),(0,r.kt)("p",null,"Some other WordPress plugins include elements of BuddyPress, for example BuddyBoss."),(0,r.kt)("h2",{id:"activemember360-buddypress-extension-overview"},"ActiveMember360 BuddyPress Extension Overview"),(0,r.kt)("p",null,"The primary purpose of the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 BuddyPress Extension")," is to automatically control the joining and leaving of users as members in BuddyPress groups, based upon the ActiveCampaign contact data and WordPress user data of the logged in user."),(0,r.kt)("p",null,"When using the integrated bbPress forum features of BuddyPress you can control access to the bbPress custom post types of Forum, Topics and Replies when using the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 bbPress Extension")," as detailed within ",(0,r.kt)("a",{parentName:"p",href:"/extensions/bbpress",title:"Click to learn how the ActiveMember360 bbPress Extension is configured and operates"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 bbPress Extension"))," in addition to the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 BuddyPress Extension"),"."),(0,r.kt)("admonition",{title:"BuddyPress Group Membership",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The BuddyPress group membership of a user can be controlled by the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 BuddyPress Extension")," based upon:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"ActiveMember360 Memberships")),(0,r.kt)(n.default,{mdxType:"Conditions"})),(0,r.kt)("h2",{id:"activemember360-buddypress-extension-activation--settings"},"ActiveMember360 BuddyPress Extension Activation & Settings"),(0,r.kt)("p",null,"The BuddyPress plugin must have previously been installed and activated on your site in order to be able to activate the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 BuddyPress Extension"),"."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to activate the BuddyPress extension",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/buddypress_extension_activation.png"}),(0,r.kt)("figcaption",null,"Steps to activate the BuddyPress extension")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360, Extensions"),"."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360 Extensions")," tabs click ",(0,r.kt)("strong",{parentName:"li"},"BuddyPress"),"."),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Enable BuddyPress Extension")," to ",(0,r.kt)("strong",{parentName:"li"},"Yes"),"."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"BuddyPress redirect page")," select the default page to redirect users to if they attempt to visit any BuddyPress group whose membership is being controlled by ",(0,r.kt)("a",{parentName:"li",href:"/fundamentals/controlling-access-visibility-page-post",title:"Click to learn about Controlling Access To & Visibility Of Pages & Posts"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 Post/Page Access Conditions"))," and for which they are not members."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,r.kt)("h2",{id:"set-activemember360-controls-for-buddypress-group-membership"},"Set ActiveMember360 controls for BuddyPress Group Membership"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to control users membership of BuddyPress Groups",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/buddypress_extension_access_conditions_panel.png"}),(0,r.kt)("figcaption",null,"Steps to control users membership of BuddyPress Groups")),(0,r.kt)("p",null,"The access conditions in the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," panel as illustrated above controls BuddyPress group membership for each group."),(0,r.kt)("p",null,"If the logged in user satisfies the access criteria specified they will become members of the BuddyPress group. If the logged in user does not satisfy the access criteria they will not become members or will be removed as members the group."),(0,r.kt)("p",null,"A full description of the access conditions that control membership of the BuddyPress group are the same as those detailed here:\n",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/controlling-access-visibility-page-post",title:"Click to learn about Controlling Access To & Visibility Of Pages & Posts"},(0,r.kt)("strong",{parentName:"a"},"Set Post/Page Access Conditions")),"."),(0,r.kt)("p",null,"If a setting is specifed for ",(0,r.kt)("strong",{parentName:"p"},"When forbidden redirect to")," any visitor attempting to access the group will be redirected there in preference to the page specified in ",(0,r.kt)("a",{parentName:"p",href:"#activemember360-buddypress-extension-activation--settings"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 Extensions, BuddyPress, BuddyPress redirect page")),"."),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 BuddyPress Extension")," only controls the redirect for those not enrolled in Public BuddyPress groups. If the group is Private or Hidden BuddyPress will determine the redirect.")),(0,r.kt)("h2",{id:"activemember360-buddypress-extension--buddypress-behaviour"},"ActiveMember360 BuddyPress Extension & BuddyPress Behaviour"),(0,r.kt)("h3",{id:"buddypress-members-profile-settings-general--delete-account-tabs"},"BuddyPress Members Profile, Settings, General & Delete Account Tabs"),(0,r.kt)("p",null,"When the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 BuddyPress Extension")," is activated access to the ",(0,r.kt)("strong",{parentName:"p"},"Members, Settings, General")," and ",(0,r.kt)("strong",{parentName:"p"},"Delete Account")," tabs, normally available for logged in users, will be forbidden. Accessing those tabs will result in a redirection to Email Notifications settings."),(0,r.kt)("p",null,"Allowing users access to the ",(0,r.kt)("strong",{parentName:"p"},"General")," settings to change their email or password using BuddyPress is not appropriate for an ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," site. Emails and passwords need to be changed by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," methods that ensure sychronisation of the new values between WordPress and ActiveCampaign. The appropriate methods are detailed here ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/changing-wordpress-activecampaign-email",title:"Click to learn how to Change WordPress User & ActiveCampaign Contact Email Addresses"},(0,r.kt)("strong",{parentName:"a"},"Changing WordPress User & ActiveCampaign Contact Email Addresses"))," and here ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/changing-wordpress-activecampaign-password",title:"Click to learn how to Change WordPress User & ActiveCampaign Contact Passwords"},(0,r.kt)("strong",{parentName:"a"},"Changing WordPress User & ActiveCampaign Contact Passwords"))),(0,r.kt)("p",null,"Similarly allowing a user with access to ",(0,r.kt)("strong",{parentName:"p"},"Delete Account")," to be able to delete their WordPress account is not appropriate for an ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," site. When using ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," WordPress users can only be deleted by administrators or by using the ","[",(0,r.kt)("strong",{parentName:"p"},"mbr_clearuser"),"][webhooks-mbr-clearuser]"," user webhook in an ActiveCampaign automation."),(0,r.kt)("h3",{id:"buddypress-registration"},"BuddyPress Registration"),(0,r.kt)("p",null,"The BuddyPress registration process should not be used when ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," is activated on a site."),(0,r.kt)("p",null,"The signup/purchase processes that are fully integrated with ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," and ActiveCampaign should be used."),(0,r.kt)("p",null,"We recommend for the BuddyPress registration page that the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," panel has ",(0,r.kt)("strong",{parentName:"p"},"Administrator only")," checked and ",(0,r.kt)("strong",{parentName:"p"},"When forbidden, redirect to")," set to your signup/purchase page/URL."),(0,r.kt)("h3",{id:"buddypress-mention-name"},"BuddyPress Mention Name"),(0,r.kt)("p",null,"In BuddyPress the name displayed for Groups/Forums is called the mentionname."),(0,r.kt)("p",null,"By default BuddyPress uses as the mentionname the WordPress ",(0,r.kt)("inlineCode",{parentName:"p"},"user_nicename"),"."),(0,r.kt)("p",null,"If BuddyPress username compatibility mode is enabled the mentionname is set to the WordPress user_login instead."),(0,r.kt)("p",null,"If the WordPress user has been created originally by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," the WordPress ",(0,r.kt)("inlineCode",{parentName:"p"},"user_nicename")," will be as detailed within ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/creating-wordpress-users#default-wordpress-user-settings",title:"Click to learn how about default WordPress user settings"},(0,r.kt)("strong",{parentName:"a"},"Default WordPress User Settings")),"."),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If BuddyPress username compatibility mode is enabled the mentionname is set to the WordPress user_login(username)."),(0,r.kt)("p",{parentName:"admonition"},"Obviously any software that exposes the WordPress username irrespective of what it is set to is a security risk."),(0,r.kt)("p",{parentName:"admonition"},"In effect a rogue user/hacker has 50% of the required information to login to the site."),(0,r.kt)("p",{parentName:"admonition"},"BuddyPress has a filter hook which in such circumstances can be used to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"mentionname")," to whatever you choose:"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"apply_filters( 'bp_get_displayed_user_mentionname', string $value )")),(0,r.kt)("h2",{parentName:"admonition",id:"parameters"},"Parameters"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"$value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(string) The mentionname for the displayed user."))))),(0,r.kt)("h2",{id:"buddypress-group-memberships"},"BuddyPress Group Memberships"),(0,r.kt)("p",null,"When ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," is controlling group membership by specifying ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/controlling-access-visibility-page-post",title:"Click to learn about Controlling Access To & Visibility Of Pages & Posts"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 Post/Page Access Conditions"))," the BuddyPress Group type can only be ",(0,r.kt)("strong",{parentName:"p"},"Private")," or ",(0,r.kt)("strong",{parentName:"p"},"Hidden"),"."),(0,r.kt)("p",null,"Similarly all standard BuddyPress buttons for joining, leaving or requesting membership to join the group will not be shown as ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," is automatically controlling membership of the group."),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/controlling-access-visibility-page-post",title:"Click to learn about Controlling Access To & Visibility Of Pages & Posts"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 Post/Page Access Conditions"))," are specified to control the membership of a BuddyPress group upon saving those settings the group, if currently a public group, will be switched to a private group type."),(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/controlling-access-visibility-page-post",title:"Click to learn about Controlling Access To & Visibility Of Pages & Posts"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 Post/Page Access Conditions"))," are ",(0,r.kt)("strong",{parentName:"p"},"not")," specified to control membership of a BuddyPress group any BuddyPress group type can be used and membership will be controlled solely by BuddyPress in the standard ways i.e as if ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," was not activated for the site.")),(0,r.kt)("h2",{id:"buddypress-group-membership-examples"},"BuddyPress Group Membership Examples"),(0,r.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,r.kt)("p",null,"If the logged in user has the membership level named ",(0,r.kt)("inlineCode",{parentName:"p"},"Free")," they will automatically become members of the BuddyPress group:"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"BuddyPress Group Membership Example 1",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/buddypress_extension_membership_example_1.png"}),(0,r.kt)("figcaption",null,"BuddyPress Group Membership Example 1"))),(0,r.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,r.kt)("p",null,"If the logged in user has the ActiveCampaign tag named ",(0,r.kt)("inlineCode",{parentName:"p"},"Customer")," and does not have the tag named ",(0,r.kt)("inlineCode",{parentName:"p"},"Newsletter Subscriber")," they will automatically become members of the BuddyPress group:"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"BuddyPress Group Membership Example 2",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/buddypress_extension_membership_example_2.png"}),(0,r.kt)("figcaption",null,"BuddyPress Group Membership Example 2")))))}b.isMDXComponent=!0}}]);