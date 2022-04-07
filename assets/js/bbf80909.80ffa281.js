"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,s(s({ref:t},l),{},{components:n})):o.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34518:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],i={id:"order-status-actions",title:"WooCommerce Order Status Actions",description:"Overview of WooCommerce and ActiveMember360 WooCommerce Extension.",sidebar_label:"Order Status Actions"},c=void 0,p={unversionedId:"extensions/woocommerce/order-status-actions",id:"extensions/woocommerce/order-status-actions",title:"WooCommerce Order Status Actions",description:"Overview of WooCommerce and ActiveMember360 WooCommerce Extension.",source:"@site/docs/extensions/woocommerce/order-status-actions.mdx",sourceDirName:"extensions/woocommerce",slug:"/extensions/woocommerce/order-status-actions",permalink:"/extensions/woocommerce/order-status-actions",tags:[],version:"current",lastUpdatedAt:1649343975,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"order-status-actions",title:"WooCommerce Order Status Actions",description:"Overview of WooCommerce and ActiveMember360 WooCommerce Extension.",sidebar_label:"Order Status Actions"}},l={},u=[{value:"For Products and Subscriptions",id:"for-products-and-subscriptions",level:2},{value:"For Subscriptions Only",id:"for-subscriptions-only",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are a whole series of actions that can be performed by ActiveMember360 upon a WooCommerce order status change."),(0,a.kt)("p",null,"These actions can include:"),(0,a.kt)("p",null,"Adding ActiveCampaign tags\nadd and removal to automations\nsubscribe and unsubscribe of lists."),(0,a.kt)("h2",{id:"for-products-and-subscriptions"},"For Products and Subscriptions"),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Steps for specifying WooCommerce product order status actions",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_order_status_actions_product.png"}),(0,a.kt)("figcaption",null,"Steps for specifying WooCommerce product order status actions")),(0,a.kt)("p",null,"Actions can be applied when these two statuses are set:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the actions to take when a purchase takes place: These trigger when the order is set the WooCommerce status of Completed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the actions to take when a refund takes place: These trigger when the order is set the WooCommerce status of Refunded."))),(0,a.kt)("p",null,"For a full explanation of WooCommerce order statuses see: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.woocommerce.com/document/managing-orders/"},"WooCommerce Order Statuses"),"."),(0,a.kt)("h2",{id:"for-subscriptions-only"},"For Subscriptions Only"),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Steps for specifying WooCommerce product order status actions",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_order_status_actions_product.png"}),(0,a.kt)("figcaption",null,"Steps for specifying WooCommerce product order status actions")),(0,a.kt)("p",null,"Actions can be applied when the following statuses are set:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Activated: After the initial payment for a subscription has been processed (if any payment is required) and the status of the order is ",(0,a.kt)("strong",{parentName:"p"},"Completed")," the subscription will be transitioned to the ",(0,a.kt)("strong",{parentName:"p"},"Active")," status. The settings here apply when the subscription is set to ",(0,a.kt)("strong",{parentName:"p"},"Active")," and the previous status WAS NOT ",(0,a.kt)("strong",{parentName:"p"},"On Hold"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cancelled: The settings here apply when a subscription is Cancelled. These settings do not apply when the subscription is marked for cancellation only upon the actual cancellation i.e. at the end of the paid up period.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On Hold: When an associated order is awaiting payment, or it has been manually suspended by the store owner or customer the subscription has an ",(0,a.kt)("strong",{parentName:"p"},"On Hold")," status. If it was manually suspended, it will need to be manually reactivated. If it was suspended awaiting payment, it will be reactivated once that payment is processed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Reactivated: The settings here apply when a subscription is set to ",(0,a.kt)("strong",{parentName:"p"},"Active")," after it WAS ",(0,a.kt)("strong",{parentName:"p"},"On Hold"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Expired: The settings here apply when a subscription status is ",(0,a.kt)("strong",{parentName:"p"},"Expired"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Refunded: The settings here apply to when a subscription is ",(0,a.kt)("strong",{parentName:"p"},"Refunded"),"."))),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When setting actions it is important to note that when a subscription renews the status is automatically first set to ",(0,a.kt)("strong",{parentName:"p"},"On Hold")," and then when a successful payment has been made it is set to purchase ",(0,a.kt)("strong",{parentName:"p"},"Completed")," and subscription ",(0,a.kt)("strong",{parentName:"p"},"Active"),"."))),(0,a.kt)("p",null,"For a full explanation of WooCommerce Subscription statuses see: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.woocommerce.com/document/subscriptions/statuses/"},"WooCommerce Subscription Statuses"),"."))}d.isMDXComponent=!0}}]);