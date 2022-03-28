"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2445],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,v=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),o=n(67294),r=n(72389),i=n(63725),p=n(86010),l="tabItem_LplD";function s(e){var t,n,r,s=e.lazy,u=e.block,c=e.defaultValue,m=e.values,d=e.groupId,v=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),P=h.tabGroupChoices,y=h.setTabGroupChoices,x=(0,o.useState)(b),M=x[0],w=x[1],N=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=P[d];null!=O&&O!==M&&f.some((function(e){return e.value===O}))&&w(O)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==M&&(E(t),w(a),null!=d&&y(d,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.currentTarget)+1;n=N[a]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.currentTarget)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},v)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:function(e){return N.push(e)},onKeyDown:A,onFocus:T,onClick:T},r,{className:(0,p.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":M===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(g.filter((function(e){return e.props.value===M}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==M})}))))}function u(e){var t=(0,r.Z)();return o.createElement(s,(0,a.Z)({key:String(t)},e))}},87253:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=(n(9877),n(58215),["components"]),p={id:"popup-maker",title:"Popup Maker Extension",description:"ActiveMember360 controls the targeting of Popup Maker Popups based upon the ActiveCampaign tags a contact has, or does not have, when logged in to the WordPress site.",sidebar_label:"Popup Maker"},l=void 0,s={unversionedId:"extensions/popup-maker",id:"extensions/popup-maker",title:"Popup Maker Extension",description:"ActiveMember360 controls the targeting of Popup Maker Popups based upon the ActiveCampaign tags a contact has, or does not have, when logged in to the WordPress site.",source:"@site/docs/extensions/popup-maker.mdx",sourceDirName:"extensions",slug:"/extensions/popup-maker",permalink:"/docs-activemember360-page/extensions/popup-maker",tags:[],version:"current",lastUpdatedAt:1646128245,formattedLastUpdatedAt:"3/1/2022",frontMatter:{id:"popup-maker",title:"Popup Maker Extension",description:"ActiveMember360 controls the targeting of Popup Maker Popups based upon the ActiveCampaign tags a contact has, or does not have, when logged in to the WordPress site.",sidebar_label:"Popup Maker"},sidebar:"extensions",previous:{title:"Oxygen Builder",permalink:"/docs-activemember360-page/extensions/oxygen-builder"},next:{title:"Overview",permalink:"/docs-activemember360-page/extensions/woocommerce/overview"}},u={},c=[{value:"Popup Maker Overview",id:"popup-maker-overview",level:2},{value:"ActiveMember360 Popup Maker Extension Overview",id:"activemember360-popup-maker-extension-overview",level:2},{value:"ActiveMember360 Popup Maker Extension Activation",id:"activemember360-popup-maker-extension-activation",level:2},{value:"Set Popup Targeting Conditions Based Upon ActiveMember360 Contact Tag/Tags",id:"set-popup-targeting-conditions-based-upon-activemember360-contact-tagtags",level:2},{value:"Popup Maker Popup Targeting Condition Examples",id:"popup-maker-popup-targeting-condition-examples",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Popup Maker Logo",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_featured.png"})),(0,r.kt)("h2",{id:"popup-maker-overview"},"Popup Maker Overview"),(0,r.kt)("p",null,"Popup Maker is a comprehensive popup solution for WordPress."),(0,r.kt)("p",null,"Popup Maker is available as a free plugin from the WordPress Repository and also has many of it\u2019s own Extensions providing more comprehensive features and integrations."),(0,r.kt)("h2",{id:"activemember360-popup-maker-extension-overview"},"ActiveMember360 Popup Maker Extension Overview"),(0,r.kt)("p",null,"Popup Maker Popups can be controlled by the ActiveMember360 Popup Maker Extension based upon:"),(0,r.kt)("p",null,"The ActiveMember360 tags a contact has, or does not have, when logged in to the WordPress site"),(0,r.kt)("h2",{id:"activemember360-popup-maker-extension-activation"},"ActiveMember360 Popup Maker Extension Activation"),(0,r.kt)("p",null,"The Popup Maker plugin must have previously been installed and activated on your site in order to be able to activate the ActiveMember360 Popup Maker extension."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to activate the Popup Maker extension",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_extension_activation.png"}),(0,r.kt)("figcaption",null,"Steps to activate the Popup Maker extension")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360, Extensions"),"."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360 Extensions")," tabs click ",(0,r.kt)("strong",{parentName:"li"},"Popup Maker"),"."),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Enable Popup Maker Extension")," to ",(0,r.kt)("strong",{parentName:"li"},"Yes"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,r.kt)("h2",{id:"set-popup-targeting-conditions-based-upon-activemember360-contact-tagtags"},"Set Popup Targeting Conditions Based Upon ActiveMember360 Contact Tag/Tags"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to specify the Popup targeting conditions based upon ActiveCampaign contact tag/tags",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_extension_popup_condition_contact_tag.png"}),(0,r.kt)("figcaption",null,"Steps to specify the Popup targeting conditions based upon ActiveCampaign contact tag/tags")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the Popup Maker popup for editing."),(0,r.kt)("li",{parentName:"ol"},"Within the Popup Settings panel select the Targeting tab."),(0,r.kt)("li",{parentName:"ol"},"In the Choose a condition dropdown locate by scrolling the ActiveMember360 section."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Has any tag")," or ",(0,r.kt)("strong",{parentName:"li"},"Does not have any tag")," as required.")),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to select the Popup targeting conditions ActiveMember360 contact tag/tags",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_extension_popup_condition_select_contact_tag.png"}),(0,r.kt)("figcaption",null,"Steps to select the Popup targeting conditions ActiveMember360 contact tag/tags")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Select Tags dropdown select the ActiveMember360 tag(s) for the selected condition."),(0,r.kt)("p",{parentName:"li"},"Click in the selection area and start typing part of the tag name to refine the list. Then click on the required tag."),(0,r.kt)("p",{parentName:"li"},"Multiple tags can be selected."),(0,r.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"x")," shown next to the individual tag name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the settings have been completed ensure ",(0,r.kt)("strong",{parentName:"p"},"Update")," is clicked to save the configuration."))),(0,r.kt)("h2",{id:"popup-maker-popup-targeting-condition-examples"},"Popup Maker Popup Targeting Condition Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Display")," the popup if the logged in user ",(0,r.kt)("strong",{parentName:"li"},"has")," the ActiveMember360 tag named Customer ",(0,r.kt)("strong",{parentName:"li"},"AND")," ",(0,r.kt)("strong",{parentName:"li"},"does not have")," the tag named Newsletter Subscriber.")),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Popup Maker Popup Targeting Conditions Example 1",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/popup_maker_extension_condition_example_1.png"}),(0,r.kt)("figcaption",null,"Popup Maker Popup Targeting Conditions Example 1")))}d.isMDXComponent=!0}}]);