"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4680],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],c={id:"coupon-usage-actions",title:"Coupon Usage Actions",description:"How to configure the actions performed whenever a WooCommerce coupon is used.",sidebar_label:"Coupon Usage Actions"},s=void 0,p={unversionedId:"extensions/woocommerce/coupon-usage-actions",id:"extensions/woocommerce/coupon-usage-actions",title:"Coupon Usage Actions",description:"How to configure the actions performed whenever a WooCommerce coupon is used.",source:"@site/docs/extensions/woocommerce/coupon-usage-actions.mdx",sourceDirName:"extensions/woocommerce",slug:"/extensions/woocommerce/coupon-usage-actions",permalink:"/extensions/woocommerce/coupon-usage-actions",tags:[],version:"current",lastUpdatedAt:1656665069,formattedLastUpdatedAt:"7/1/2022",frontMatter:{id:"coupon-usage-actions",title:"Coupon Usage Actions",description:"How to configure the actions performed whenever a WooCommerce coupon is used.",sidebar_label:"Coupon Usage Actions"}},l={},u=[{value:"Configuring Coupon Usage Actions",id:"configuring-coupon-usage-actions",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 WooCommerce")," extension supports a range of actions that can be performed by ActiveMember360 whenever a WooCommerce coupon is used."),(0,r.kt)("p",null,"These actions will apply for any new contact created during the WooCommerce order process, or any contact associated with a ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," whenever the coupon is used."),(0,r.kt)("h2",{id:"configuring-coupon-usage-actions"},"Configuring Coupon Usage Actions"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps for specifying ActiveMember360 WooCommerce coupon usage settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_coupon_usage_actions.png"}),(0,r.kt)("figcaption",null,"Steps for specifying ActiveMember360 WooCommerce coupon usage settings")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In WooCommerce Coupon data tabs click ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("strong",{parentName:"p"},"Add coupon name as tag")," is checked a tag will be automatically created if it does not already exist using the coupon name and added to the contact when they use the coupon."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Default: Unchecked"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Add contacts to automations")," drop down select the ActiveCampaign automations to which the contact will be added whenever a coupon is used."),(0,r.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,r.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,r.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,r.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the x shown next to the individual automation name."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Default: None"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Remove contacts from automations")," drop down select the ActiveCampaign automations from which the contact will be removed whenever a coupon is used."),(0,r.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,r.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,r.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,r.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the x shown next to the individual automation name."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Default: None"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Add tags to contacts")," drop down select the ActiveCampaign contact tags to be added whenever a coupon is used."),(0,r.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,r.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,r.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,r.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Default: None"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Remove tags from contacts")," drop down select the ActiveCampaign contact tags to be removed whenever a coupon is used."),(0,r.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,r.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,r.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,r.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Default: None"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Subscribe contacts to lists")," drop down select the ActiveCampaign lists to which the contact will be subscribed whenever a coupon is used."),(0,r.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,r.kt)("p",{parentName:"li"},"Then click on the required list."),(0,r.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,r.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the x shown next to the individual list name."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Default: None"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Unsubscribe contacts from lists")," drop down select the ActiveCampaign lists from which the contact will be unsubscribed whenever a coupon is used."),(0,r.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,r.kt)("p",{parentName:"li"},"Then click on the required list."),(0,r.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,r.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the x shown next to the individual list name."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Default: None")))))}d.isMDXComponent=!0}}]);