"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,p(p({ref:t},c),{},{components:n})):a.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={id:"popup-rule-contact-field",title:"Set Elementor Popup Display Based Upon ActiveCampaign Contact Field Value",description:"How to configure an Elementor popup display rule based upon ActiveCampaign contact field value.",sidebar_label:"Set Elementor Popup Display Based Upon ActiveCampaign Contact Field Value"},p=void 0,i={unversionedId:"extensions/elementor/popup-rule-contact-field",id:"extensions/elementor/popup-rule-contact-field",title:"Set Elementor Popup Display Based Upon ActiveCampaign Contact Field Value",description:"How to configure an Elementor popup display rule based upon ActiveCampaign contact field value.",source:"@site/docs/extensions/elementor/popup-rule-contact-field.mdx",sourceDirName:"extensions/elementor",slug:"/extensions/elementor/popup-rule-contact-field",permalink:"/extensions/elementor/popup-rule-contact-field",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"popup-rule-contact-field",title:"Set Elementor Popup Display Based Upon ActiveCampaign Contact Field Value",description:"How to configure an Elementor popup display rule based upon ActiveCampaign contact field value.",sidebar_label:"Set Elementor Popup Display Based Upon ActiveCampaign Contact Field Value"},sidebar:"extensions",previous:{title:"Set Elementor Popup Display Based Upon ActiveCampaign Contact Not Having Tags",permalink:"/extensions/elementor/popup-rule-contact-tag-not-all"},next:{title:"Elementor Widget/Container/Section Display Setting Examples",permalink:"/extensions/elementor/widget-section-examples"}},l={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Important",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This ActiveMember360 display rule works in conjunction with all other active rules for the popup including the ActiveMember360 rules for ",(0,o.kt)("strong",{parentName:"p"},"Conditional"),", ",(0,o.kt)("strong",{parentName:"p"},"Display/if when"),", ",(0,o.kt)("strong",{parentName:"p"},"Tags (Any)"),", and ",(0,o.kt)("strong",{parentName:"p"},"Tags (Not All)")," to determine the popup setting."),(0,o.kt)("p",{parentName:"admonition"},"They work as ",(0,o.kt)("strong",{parentName:"p"},"AND")," conditions. So all settings for a single popup must evaluate as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," for the display setting to have effect."),(0,o.kt)("p",{parentName:"admonition"},"If any rule evaluates as ",(0,o.kt)("strong",{parentName:"p"},"FALSE")," the popup will not be displayed.")),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps for specifying Elementor Popup display based upon contact field value",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/elementor_extension_popup_rule_contact_field.png"}),(0,o.kt)("figcaption",null,"Steps for specifying Elementor Popup display based upon contact field value")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When editing/creating the popup within the Elementor editor expand Save Options and select Advanced Rules.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Field compare")," rule.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the dropdown select the ActiveCampaign contact field to be used for the comparison."),(0,o.kt)("p",{parentName:"li"},"Click the dropdown then scroll or start typing the first characters of the contact field to aid selection."),(0,o.kt)("p",{parentName:"li"},"Click on the required contact field.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the dropdown select the comparison operator."),(0,o.kt)("admonition",{parentName:"li",title:"Comparison Operators",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The comparison operators available are:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"--- i.e. None"),(0,o.kt)("li",{parentName:"ul"},"Equals"),(0,o.kt)("li",{parentName:"ul"},"Not equal"),(0,o.kt)("li",{parentName:"ul"},"Greater than"),(0,o.kt)("li",{parentName:"ul"},"Less than"),(0,o.kt)("li",{parentName:"ul"},"Greater or equal"),(0,o.kt)("li",{parentName:"ul"},"Less or equal"),(0,o.kt)("li",{parentName:"ul"},"Begins with"),(0,o.kt)("li",{parentName:"ul"},"Ends with"),(0,o.kt)("li",{parentName:"ul"},"Contains"),(0,o.kt)("li",{parentName:"ul"},"Not contains")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Specify the value to be used for comparison. When entering a date it should be specified in the format that ActiveCampaign stores the date i.e. ",(0,o.kt)("strong",{parentName:"p"},"yyyy-mm-dd"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Turn the rule on or off as desired.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the rule settings have been completed ensure ",(0,o.kt)("strong",{parentName:"p"},"SAVE & CLOSE")," is clicked to save the publish settings configuration."))),(0,o.kt)("p",null,"Set any ",(0,o.kt)("strong",{parentName:"p"},"additional")," ActiveMember360 rules for the popup display as detailed here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/extensions/elementor/popup-rule-display",title:"Click to learn how to set Elementor Popup To Display Always or Never or Based Upon User Login Status"},(0,o.kt)("strong",{parentName:"a"},"Set Elementor Popup To Display Always or Never or Based Upon User Login Status"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/extensions/elementor/popup-rule-contact-tag-any",title:"Click to learn how to set Elementor Popup Display Based Upon ActiveCampaign Contact Having Tags"},(0,o.kt)("strong",{parentName:"a"},"Set Elementor Popup Display Based Upon ActiveCampaign Contact Having Tags"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/extensions/elementor/popup-rule-contact-tag-not-all",title:"Click to learn how to set Elementor Popup Display Based Upon ActiveCampaign Contact Not Having Tags"},(0,o.kt)("strong",{parentName:"a"},"Set Elementor Popup Display Based Upon ActiveCampaign Contact Not Having Tags")))))}m.isMDXComponent=!0}}]);