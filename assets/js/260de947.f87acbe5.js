"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>P});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),p=n(16550),s=n(91980),l=n(67392),u=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,p.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,l]=g({queryString:n,groupId:a}),[c,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&p(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);p(e),l(e),v(e)}),[l,v,o]),tabValues:o}}var k=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:p,selectValue:s,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==p&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":p===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function P(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},87253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));n(74866),n(85162);const o={id:"popup-maker",title:"Popup Maker Extension",description:"ActiveMember360 controls the targeting of Popup Maker Popups based upon the ActiveCampaign tags a contact has, or does not have, when logged in to the WordPress site.",sidebar_label:"Popup Maker"},i=void 0,p={unversionedId:"extensions/popup-maker",id:"extensions/popup-maker",title:"Popup Maker Extension",description:"ActiveMember360 controls the targeting of Popup Maker Popups based upon the ActiveCampaign tags a contact has, or does not have, when logged in to the WordPress site.",source:"@site/docs/extensions/popup-maker.mdx",sourceDirName:"extensions",slug:"/extensions/popup-maker",permalink:"/extensions/popup-maker",draft:!1,tags:[],version:"current",lastUpdatedAt:1665751408,formattedLastUpdatedAt:"Oct 14, 2022",frontMatter:{id:"popup-maker",title:"Popup Maker Extension",description:"ActiveMember360 controls the targeting of Popup Maker Popups based upon the ActiveCampaign tags a contact has, or does not have, when logged in to the WordPress site.",sidebar_label:"Popup Maker"},sidebar:"extensions",previous:{title:"Oxygen Builder",permalink:"/extensions/oxygen-builder"},next:{title:"Thrive Architect",permalink:"/extensions/thrive-architect"}},s={},l=[{value:"Popup Maker Overview",id:"popup-maker-overview",level:2},{value:"ActiveMember360 Popup Maker Extension Overview",id:"activemember360-popup-maker-extension-overview",level:2},{value:"ActiveMember360 Popup Maker Extension Activation",id:"activemember360-popup-maker-extension-activation",level:2},{value:"Set Popup Targeting Conditions Based Upon ActiveCampaign Contact Tag/Tags",id:"set-popup-targeting-conditions-based-upon-activecampaign-contact-tagtags",level:2},{value:"Popup Maker Popup Targeting Condition Examples",id:"popup-maker-popup-targeting-condition-examples",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Popup Maker Logo",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_featured.png"})),(0,r.kt)("h2",{id:"popup-maker-overview"},"Popup Maker Overview"),(0,r.kt)("p",null,"Popup Maker is a comprehensive popup solution for WordPress."),(0,r.kt)("p",null,"Popup Maker is available as a free plugin from the WordPress Repository and also has many of it\u2019s own Extensions providing more comprehensive features and integrations."),(0,r.kt)("h2",{id:"activemember360-popup-maker-extension-overview"},"ActiveMember360 Popup Maker Extension Overview"),(0,r.kt)("p",null,"Popup Maker Popups can be controlled by the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 Popup Maker Extension")," based upon:"),(0,r.kt)("p",null,"The ActiveCampaign tags a contact has, or does not have, when logged in to the WordPress site"),(0,r.kt)("h2",{id:"activemember360-popup-maker-extension-activation"},"ActiveMember360 Popup Maker Extension Activation"),(0,r.kt)("p",null,"The Popup Maker plugin must have previously been installed and activated on your site in order to be able to activate the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 Popup Maker Extension"),"."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to activate the Popup Maker extension",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_extension_activation.png"}),(0,r.kt)("figcaption",null,"Steps to activate the Popup Maker extension")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360, Extensions"),"."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360 Extensions")," tabs click ",(0,r.kt)("strong",{parentName:"li"},"Popup Maker"),"."),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Enable Popup Maker Extension")," to ",(0,r.kt)("strong",{parentName:"li"},"Yes"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,r.kt)("h2",{id:"set-popup-targeting-conditions-based-upon-activecampaign-contact-tagtags"},"Set Popup Targeting Conditions Based Upon ActiveCampaign Contact Tag/Tags"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to specify the Popup targeting conditions based upon ActiveCampaign contact tag/tags",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_extension_popup_condition_contact_tag.png"}),(0,r.kt)("figcaption",null,"Steps to specify the Popup targeting conditions based upon ActiveCampaign contact tag/tags")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the Popup Maker popup for editing."),(0,r.kt)("li",{parentName:"ol"},"Within the Popup Settings panel select the Targeting tab."),(0,r.kt)("li",{parentName:"ol"},"In the Choose a condition dropdown locate by scrolling the ActiveMember360 section."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Has any tag")," or ",(0,r.kt)("strong",{parentName:"li"},"Does not have any tag")," as required.")),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to select the Popup targeting conditions ActiveCampaign contact tag/tags",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_extension_popup_condition_select_contact_tag.png"}),(0,r.kt)("figcaption",null,"Steps to select the Popup targeting conditions ActiveCampaign contact tag/tags")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Select Tags dropdown select the ActiveCampaign tag(s) for the selected condition."),(0,r.kt)("p",{parentName:"li"},"Click in the selection area and start typing part of the tag name to refine the list. Then click on the required tag."),(0,r.kt)("p",{parentName:"li"},"Multiple tags can be selected."),(0,r.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"x")," shown next to the individual tag name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the settings have been completed ensure ",(0,r.kt)("strong",{parentName:"p"},"Update")," is clicked to save the configuration."))),(0,r.kt)("h2",{id:"popup-maker-popup-targeting-condition-examples"},"Popup Maker Popup Targeting Condition Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Display")," the popup if the logged in user ",(0,r.kt)("strong",{parentName:"li"},"has")," the ActiveCampaign tag named ",(0,r.kt)("inlineCode",{parentName:"li"},"Customer")," ",(0,r.kt)("strong",{parentName:"li"},"AND")," ",(0,r.kt)("strong",{parentName:"li"},"does not have")," the tag named ",(0,r.kt)("inlineCode",{parentName:"li"},"Newsletter Subscriber"),".")),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Popup Maker Popup Targeting Conditions Example 1",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_extension_condition_example_1.png"}),(0,r.kt)("figcaption",null,"Popup Maker Popup Targeting Conditions Example 1")))}m.isMDXComponent=!0}}]);