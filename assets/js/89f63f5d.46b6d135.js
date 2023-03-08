"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"administrator-order-management",title:"Administrator Order Management",description:"How administrators can manage ActiveMember360 Payment module product and subscription orders.",sidebar_label:"Administrator Order Management"},i=void 0,p={unversionedId:"modules/payment/administrator-order-management",id:"modules/payment/administrator-order-management",title:"Administrator Order Management",description:"How administrators can manage ActiveMember360 Payment module product and subscription orders.",source:"@site/docs/modules/payment/administrator-order-management.mdx",sourceDirName:"modules/payment",slug:"/modules/payment/administrator-order-management",permalink:"/modules/payment/administrator-order-management",draft:!1,tags:[],version:"current",lastUpdatedAt:1650641683,formattedLastUpdatedAt:"Apr 22, 2022",frontMatter:{id:"administrator-order-management",title:"Administrator Order Management",description:"How administrators can manage ActiveMember360 Payment module product and subscription orders.",sidebar_label:"Administrator Order Management"},sidebar:"modules",previous:{title:"User Order Management",permalink:"/modules/payment/user-order-management"},next:{title:"Remote Authentication",permalink:"/modules/remote-authentication"}},s={},l=[{value:"Viewing Order Information &amp; Invoices",id:"viewing-order-information--invoices",level:2},{value:"Product",id:"product",level:3},{value:"Subscription",id:"subscription",level:3},{value:"Process A Refund",id:"process-a-refund",level:2}],m={toc:l},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Payment")," module ",(0,a.kt)("strong",{parentName:"p"},"Orders")," can be listed and managed from the WordPress administrator main navigation in the same way as standard WordPress posts/pages."),(0,a.kt)("h2",{id:"viewing-order-information--invoices"},"Viewing Order Information & Invoices"),(0,a.kt)("p",null,"Once an order has been selected from the listing the order information will be displayed."),(0,a.kt)("p",null,"The information displayed depends upon whether a product or subscription order has been selected."),(0,a.kt)("h3",{id:"product"},"Product"),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Payment Module product order",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_product_order.png"}),(0,a.kt)("figcaption",null,"Payment Module product order")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Payment Status")," of the order and the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Charge ID")," of the payment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Billing Details")," of the purchaser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Order Items"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provides a link to the purchased product. Upon clicking you will be taken to ",(0,a.kt)("a",{parentName:"p",href:"/modules/payment/products",title:"Click to learn how to configure the products within the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Payment, Products"))," for that product.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Order Details"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provides a link to the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Customer")," who made the purchase."),(0,a.kt)("p",{parentName:"li"},"When clicked login to Stripe to access the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Customer")," details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Payment")," module ",(0,a.kt)("strong",{parentName:"p"},"Order Number"),". This is linked to the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Transaction")," i.e. ",(0,a.kt)("strong",{parentName:"p"},"Stripe Charge ID")," of the purchase."),(0,a.kt)("p",{parentName:"li"},"When clicked login to Stripe to access the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Transaction")," details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Charge History"),"."),(0,a.kt)("p",{parentName:"li"},"There are links provided to access the ",(0,a.kt)("strong",{parentName:"p"},"Invoice")," and if applicable the ",(0,a.kt)("strong",{parentName:"p"},"Refund Receipt"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Refund History")," if applicable for this specific purchase."))),(0,a.kt)("h3",{id:"subscription"},"Subscription"),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Payment Module subscription orders",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_subscription_order.png"}),(0,a.kt)("figcaption",null,"Payment Module subscription orders")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Payment Status")," of the order and the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Charge ID")," of the payment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Billing Details")," of the purchaser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Order Items"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provides a link to the purchased product. Upon clicking you will be taken to ",(0,a.kt)("a",{parentName:"p",href:"/modules/payment/subscriptions",title:"Click to learn how to configure the subscriptions within the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Payment, Subscriptions"))," for that subscription.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Order Details"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provides a link to the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Customer")," who made the purchase."),(0,a.kt)("p",{parentName:"li"},"When clicked login to Stripe to access the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Customer")," details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Payment")," module ",(0,a.kt)("strong",{parentName:"p"},"Order Number"),". This is linked to the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Transaction")," i.e. ",(0,a.kt)("strong",{parentName:"p"},"Stripe Charge ID")," of the purchase."),(0,a.kt)("p",{parentName:"li"},"When clicked login to Stripe to access the ",(0,a.kt)("strong",{parentName:"p"},"Stripe Transaction")," details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Charge History"),". Every recurring payment for the subscription is listed."),(0,a.kt)("p",{parentName:"li"},"There are links provided to access the ",(0,a.kt)("strong",{parentName:"p"},"Invoice")," and, if applicable, the ",(0,a.kt)("strong",{parentName:"p"},"Refund Receipt")," for each payment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shows the ",(0,a.kt)("strong",{parentName:"p"},"Refund History"),", if applicable, for this specific purchase."))),(0,a.kt)("h2",{id:"process-a-refund"},"Process A Refund"),(0,a.kt)("p",null,"Your user requests a refund manually using your own support ticket system or whatever process you have in place for users to communicate with you."),(0,a.kt)("p",null,"After receipt of the refund request you would need to manually process the refund from within ",(0,a.kt)("strong",{parentName:"p"},"Stripe"),"."),(0,a.kt)("p",null,"To do so access the order and then click on the link as detailed in ",(0,a.kt)("strong",{parentName:"p"},"Item 7")," of ",(0,a.kt)("a",{parentName:"p",href:"/modules/payment/administrator-order-management#viewing-order-information--invoices",title:"Click to learn how to view Order Information & Invoices"},(0,a.kt)("strong",{parentName:"a"},"Viewing Order Information & Invoices"))," above."),(0,a.kt)("p",null,"This will take you to the ",(0,a.kt)("strong",{parentName:"p"},"Stripe, Payment, Transaction")," where you can process the refund."))}c.isMDXComponent=!0}}]);