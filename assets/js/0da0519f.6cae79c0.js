"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[790],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4334:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"achievement-required-steps-conditional",title:"Add Achievement Required Steps Based Upon ActiveMember360Conditionals",description:"How to configure a GamiPress achievement required step based upon an ActiveMember360 conditional.",sidebar_label:"Add Achievement Required Steps Based Upon ActiveMember360Conditionals"},c=void 0,l={unversionedId:"extensions/gamipress/achievement-required-steps-conditional",id:"extensions/gamipress/achievement-required-steps-conditional",title:"Add Achievement Required Steps Based Upon ActiveMember360Conditionals",description:"How to configure a GamiPress achievement required step based upon an ActiveMember360 conditional.",source:"@site/docs/extensions/gamipress/achievement-required-steps-conditional.mdx",sourceDirName:"extensions/gamipress",slug:"/extensions/gamipress/achievement-required-steps-conditional",permalink:"/docs-activemember360-page/extensions/gamipress/achievement-required-steps-conditional",tags:[],version:"current",frontMatter:{id:"achievement-required-steps-conditional",title:"Add Achievement Required Steps Based Upon ActiveMember360Conditionals",description:"How to configure a GamiPress achievement required step based upon an ActiveMember360 conditional.",sidebar_label:"Add Achievement Required Steps Based Upon ActiveMember360Conditionals"},sidebar:"extensions",previous:{title:"Store Points Total In ActiveCampaign Contact Field",permalink:"/docs-activemember360-page/extensions/gamipress/points-store"},next:{title:"Add Achievement Required Steps Based Upon ActiveCampaign Contact Tag/Tags",permalink:"/docs-activemember360-page/extensions/gamipress/achievement-required-steps-contact-tag"}},p=[],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Selecting Add New Step",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gamipress_extension_required_steps_add.png"}),(0,o.kt)("figcaption",null,"Selecting Add New Step")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When editing an individual achievement within the ",(0,o.kt)("strong",{parentName:"li"},"Required Steps")," panel click ",(0,o.kt)("strong",{parentName:"li"},"Add New Step"),".")),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Configuring Add New Required Step For Conditional",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gamipress_extension_required_steps_conditional.png"}),(0,o.kt)("figcaption",null,"Configuring Add New Required Step For Conditional")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"When")," dropdown, scroll, and in the ",(0,o.kt)("strong",{parentName:"li"},"ActiveMember360")," section click to select ",(0,o.kt)("strong",{parentName:"li"},"Conditional for contact"),"."),(0,o.kt)("li",{parentName:"ol"},"In the dropdown select whether the conditional ",(0,o.kt)("strong",{parentName:"li"},"Evaluates true")," or ",(0,o.kt)("strong",{parentName:"li"},"Evaluates false")," to complete the required step."),(0,o.kt)("li",{parentName:"ol"},"In the dropdown select the conditional to be evaluated."),(0,o.kt)("li",{parentName:"ol"},"Enter your own label. This is not compulsory and will be automatically created by GamiPress and ActiveMember360 if left blank. When subsequently editing the ",(0,o.kt)("strong",{parentName:"li"},"Required Steps")," the label is not automatically updated it must be edited manually."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save All Steps"),".")))}u.isMDXComponent=!0}}]);