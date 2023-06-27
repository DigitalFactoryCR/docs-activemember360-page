"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54523,8595],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?r.createElement(v,l(l({ref:t},d),{},{components:a})):r.createElement(v,l({ref:t},d))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),i=a(86010),l=a(12466),o=a(16550),s=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=p(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=v({queryString:a,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),b=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var b=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==o&&(c(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function B(e){const t=h(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return n.createElement(B,(0,r.Z)({key:String(t)},e))}},16035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"assets/conditionals-supported-conditions",id:"assets/conditionals-supported-conditions",title:"conditionals-supported-conditions",description:"- Contact list status:",source:"@site/docs/assets/conditionals-supported-conditions.mdx",sourceDirName:"assets",slug:"/assets/conditionals-supported-conditions",permalink:"/assets/conditionals-supported-conditions",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{}},s={},u=[],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Contact list status:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Contact is active in any or all of the lists selected"),(0,n.kt)("li",{parentName:"ul"},"Contact is unconfirmed in any or all of the lists selected"),(0,n.kt)("li",{parentName:"ul"},"Contact is unsubscribed in any or all of the lists selected"),(0,n.kt)("li",{parentName:"ul"},"Contact is bounced in any or all of the lists selected"))),(0,n.kt)("li",{parentName:"ul"},"Contact tag status:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Contact has any or all of the tags selected"),(0,n.kt)("li",{parentName:"ul"},"Contact does not have any or all of the tags selected"))),(0,n.kt)("li",{parentName:"ul"},"Contact field comparison:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Contact has a contact field that compares with a value"),(0,n.kt)("li",{parentName:"ul"},"Contact has a contact field that compares with another of their contact fields"))),(0,n.kt)("li",{parentName:"ul"},"User login status:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User is logged in"),(0,n.kt)("li",{parentName:"ul"},"User is not logged in"),(0,n.kt)("li",{parentName:"ul"},"User has failed payment status"),(0,n.kt)("li",{parentName:"ul"},"It is the user\u2019s first login"))),(0,n.kt)("li",{parentName:"ul"},"User role status:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User has any or all of the roles selected"),(0,n.kt)("li",{parentName:"ul"},"User does not have any or all of the roles selected"))),(0,n.kt)("li",{parentName:"ul"},"PHP statement:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Any WordPress conditional statement"),(0,n.kt)("li",{parentName:"ul"},"Any WooCommerce conditional statement"),(0,n.kt)("li",{parentName:"ul"},"Predefined conditional"))),(0,n.kt)("li",{parentName:"ul"},"GamiPress User status:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User has any or all of the achievements selected"),(0,n.kt)("li",{parentName:"ul"},"User does not have any or all of the achievements selected"),(0,n.kt)("li",{parentName:"ul"},"User has any or all of the ranks selected"),(0,n.kt)("li",{parentName:"ul"},"User does not have any or all of the ranks selected"),(0,n.kt)("li",{parentName:"ul"},"User has a points type total that compares with a value"))),(0,n.kt)("li",{parentName:"ul"},"Learndash User status:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User is enrolled in any or all of the courses selected"),(0,n.kt)("li",{parentName:"ul"},"User is not enrolled in any or all of the courses selected"),(0,n.kt)("li",{parentName:"ul"},"User has not started any or all of the courses selected"),(0,n.kt)("li",{parentName:"ul"},"User has in progress any or all of the courses selected"),(0,n.kt)("li",{parentName:"ul"},"User has completed any or all of the courses selected"),(0,n.kt)("li",{parentName:"ul"},"User has not completed any or all of the lessons selected"),(0,n.kt)("li",{parentName:"ul"},"User has completed any or all of the lessons selected"),(0,n.kt)("li",{parentName:"ul"},"User has not completed any or all of the topics selected"),(0,n.kt)("li",{parentName:"ul"},"User has completed any or all of the topics selected"))),(0,n.kt)("li",{parentName:"ul"},"WooCommerce User status:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User has purchased any or all of the products selected"),(0,n.kt)("li",{parentName:"ul"},"User has not purchased any or all of the products selected"),(0,n.kt)("li",{parentName:"ul"},"User has pending status for any or all of the subscriptions selected"),(0,n.kt)("li",{parentName:"ul"},"User has active status for any or all of the subscriptions selected"),(0,n.kt)("li",{parentName:"ul"},"User has on hold status for any or all of the subscriptions selected"),(0,n.kt)("li",{parentName:"ul"},"User has pending cancellation status for any or all of the subscriptions selected"),(0,n.kt)("li",{parentName:"ul"},"User has cancelled status for any or all of the subscriptions selected"),(0,n.kt)("li",{parentName:"ul"},"User has expired status for any or all of the subscriptions selected"))),(0,n.kt)("li",{parentName:"ul"},"\u2026any multiples and combinations of the above.")))}p.isMDXComponent=!0},62383:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),i=a(16035);a(74866),a(85162);const l={id:"overview",title:"Beaver Builder & Themer Extension",description:"Overview of Beaver Builder and ActiveMember360 Beaver Builder & Themer Extension.",sidebar_label:"Overview"},o=void 0,s={unversionedId:"extensions/beaver-builder/overview",id:"extensions/beaver-builder/overview",title:"Beaver Builder & Themer Extension",description:"Overview of Beaver Builder and ActiveMember360 Beaver Builder & Themer Extension.",source:"@site/docs/extensions/beaver-builder/overview.mdx",sourceDirName:"extensions/beaver-builder",slug:"/extensions/beaver-builder/overview",permalink:"/extensions/beaver-builder/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"overview",title:"Beaver Builder & Themer Extension",description:"Overview of Beaver Builder and ActiveMember360 Beaver Builder & Themer Extension.",sidebar_label:"Overview"},sidebar:"extensions",previous:{title:"bbPress",permalink:"/extensions/bbpress"},next:{title:"Activation",permalink:"/extensions/beaver-builder/activate"}},u={},d=[{value:"Beaver Builder &amp; Beaver Themer Overview",id:"beaver-builder--beaver-themer-overview",level:2},{value:"ActiveMember360 Beaver Builder &amp; Beaver Themer Extension Overview",id:"activemember360-beaver-builder--beaver-themer-extension-overview",level:2},{value:"Activation",id:"activation",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Examples",id:"examples",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"Beaver Builder Logo",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_featured.png"})),(0,n.kt)("h2",{id:"beaver-builder--beaver-themer-overview"},"Beaver Builder & Beaver Themer Overview"),(0,n.kt)("p",null,"Beaver Builder is a complete design system that includes a WordPress page builder plugin and a framework theme."),(0,n.kt)("p",null,"Beaver Builder enables the building of WordPress content layouts in much the same way as that of other page builders such as Elementor."),(0,n.kt)("p",null,"Beaver Builder is available as a free plugin from the WordPress Repository and also as Beaver Builder Standard, Pro, and Agency for more comprehensive features."),(0,n.kt)("p",null,"For use with only the paid Beaver Builder plugins there is an additional product available called Beaver Themer."),(0,n.kt)("h2",{id:"activemember360-beaver-builder--beaver-themer-extension-overview"},"ActiveMember360 Beaver Builder & Beaver Themer Extension Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," operates with Beaver Builder without any need for the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Beaver Builder & Beaver Themer Extension"),". All features of ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," work with Beaver Builder including shortcodes."),(0,n.kt)("p",null,"The Beaver Builder framework theme is not required by the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Beaver Builder & Beaver Themer Extension"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Beaver Builder & Beaver Themer Extension")," is used solely to control the display of ",(0,n.kt)("strong",{parentName:"p"},"Beaver Builder Modules, Columns and Rows"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Beaver Builder & Beaver Themer Extension")," provides an unsurpassed level of integration between ActiveCampaign and your WordPress site using Beaver Builder."),(0,n.kt)("admonition",{title:"ActiveMember360 Beaver Builder & Beaver Themer Module/Column/Row Visibility Conditions",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"The Beaver Builder & Beaver Themer Module/Column/Row visibility can be controlled by the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Beaver Builder & Beaver Themer Extension")," based upon the following conditions:"),(0,n.kt)(i.default,{mdxType:"Conditions"})),(0,n.kt)("p",null,"All of the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Beaver Builder & Beaver Themer Extension")," settings are fully integrated into the Beaver Builder & Themer settings. So, if you are familiar with Beaver Builder there is no additional learning curve to using the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Beaver Builder & Beaver Themer Extension"),"."),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"When wishing to edit pages/posts using Beaver Builder you must access Beaver Builder by:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Using the ",(0,n.kt)("strong",{parentName:"li"},"Beaver Builder")," selection from the page/post listings.",(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"How to select the Beaver Builder editor from page/post listing",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_editor_from_listing.png"}),(0,n.kt)("figcaption",null,"How to select the Beaver Builder editor from page/post listing"))),(0,n.kt)("li",{parentName:"ul"},"Using the ",(0,n.kt)("strong",{parentName:"li"},"Beaver Builder")," selection from the WordPress toolbar available when viewing the page/post as an administrator.",(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"How to select the Beaver Builder editor from WordPress toolbar",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_editor_from_toolbar.png"}),(0,n.kt)("figcaption",null,"How to select the Beaver Builder editor from WordPress toolbar")))),(0,n.kt)("p",{parentName:"admonition"},"Using ",(0,n.kt)("strong",{parentName:"p"},"Launch Beaver Builder")," from within the WordPress Block Editor does not currently function due to a known incompatibility between Beaver Builder and Metabox.")),(0,n.kt)("h2",{id:"activation"},"Activation"),(0,n.kt)("p",null,"How to activate/deactivate the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Beaver Builder & Themer Extension")," is detailed here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/activate",title:"Click to learn how to activate the ActiveMember360 Beaver Builder & Themer Extension"},(0,n.kt)("strong",{parentName:"a"},"Activate ActiveMember360 Beaver Builder & Themer Extension")))),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"In order to configure ",(0,n.kt)("strong",{parentName:"p"},"Beaver Builder Module/Column/Row")," visibility follow the steps explained here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/beaver-builder/module-display-settings",title:"Click to learn how to set the Beaver Builder Module/Column/Row To Display Always Or Never Or Based Upon User Login Status"},(0,n.kt)("strong",{parentName:"a"},"Set Beaver Builder Module/Column/Row to Display Always or Never or Based Upon User Login Status")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/beaver-builder/module-condition-conditional",title:"Click to learn how to set the Beaver Builder Module/Column/Row Visibility Based Upon ActiveMember360 Conditional"},(0,n.kt)("strong",{parentName:"a"},"Set Beaver Builder Module/Column/Row Visibility Based Upon An ActiveMember360 Conditional"))),(0,n.kt)("admonition",{parentName:"li",title:"Recommendation",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"We would always recommend using a ",(0,n.kt)("strong",{parentName:"p"},"Conditional")," as it provides the greatest flexibility regarding the conditions available to control the visibility of the Beaver Builder module/column/row."),(0,n.kt)("p",{parentName:"admonition"},"Adding/defining a ",(0,n.kt)("strong",{parentName:"p"},"Conditional")," is detailed at ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/conditionals/adding-conditionals",title:"Click to learn how to add and define ActiveMember360 Conditionals."},(0,n.kt)("strong",{parentName:"a"},"Adding Conditionals")),"."),(0,n.kt)("p",{parentName:"admonition"},"The alternatives listed below are primarily available to provide backward compatibility for Beaver Builder Module/Column/Row visibility controls defined prior to ",(0,n.kt)("strong",{parentName:"p"},"Conditionals")," being introduced."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/beaver-builder/module-condition-contact-tag",title:"Click to learn how to set the Beaver Builder Module/Column/Row Visibility Based Upon ActiveCampaign Contact Tag/Tags"},(0,n.kt)("strong",{parentName:"a"},"Set Beaver Builder Module/Column/Row Visibility Based Upon Contact Tag/Tags")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/beaver-builder/module-condition-contact-field",title:"Click to learn how to set the Beaver Builder Module/Column/Row Visibility Based Upon ActiveCampaign Contact Field Value"},(0,n.kt)("strong",{parentName:"a"},"Set Beaver Builder Module/Column/Row Visibility Based Upon Contact Field Value")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/beaver-builder/module-condition-php-statement",title:"Click to learn how to set the Beaver Builder Module/Column/Row Visibility Based Upon Conditional PHP Statement"},(0,n.kt)("strong",{parentName:"a"},"Set Beaver Builder Module/Column/Row Visibility Based Upon Conditional PHP Statement"))))),(0,n.kt)("p",null,"In order to configure ",(0,n.kt)("strong",{parentName:"p"},"Beaver Builder Module/Column/Row")," visibility when using ",(0,n.kt)("strong",{parentName:"p"},"Beaver Themer")," follow the steps explained here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/module-themer-conditional-logic",title:"Click to learn how to set the Beaver Builder Module/Column/Row Visibility Using Beaver Themer Conditional Logic With ActiveMember360 Conditionals"},(0,n.kt)("strong",{parentName:"a"},"Set Beaver Builder Module/Column/Row Visibility Using Beaver Themer Conditional Logic With ActiveMember360 Conditionals")))),(0,n.kt)("p",null,"In order to configure ",(0,n.kt)("strong",{parentName:"p"},"Beaver Themer")," layout rules follow the steps explained here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/themer-layout-conditional-logic",title:"Click to learn how to set the Beaver Themer Layout Rules Based Upon ActiveMember360 Conditionals"},(0,n.kt)("strong",{parentName:"a"},"Set Beaver Themer Layout Rules Based Upon ActiveMember360 Conditionals")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Some examples of settings are provided here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/examples",title:"Click to see some Beaver Builder Module/Column/Row Visibility example settings"},(0,n.kt)("strong",{parentName:"a"},"Beaver Builder Module/Column/Row Visibility Examples")))))}m.isMDXComponent=!0}}]);