"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3423],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||a;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4438:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"overview",title:"Payment Module",description:"ActiveMember360 allows emails to be sent from ActiveCampaign using SMTP mail providers rather than ActiveCampaign directly",sidebar_label:"Overview"},s=void 0,u={unversionedId:"modules/payment/overview",id:"modules/payment/overview",title:"Payment Module",description:"ActiveMember360 allows emails to be sent from ActiveCampaign using SMTP mail providers rather than ActiveCampaign directly",source:"@site/docs/modules/payment/overview.mdx",sourceDirName:"modules/payment",slug:"/modules/payment/overview",permalink:"/docs-activemember360-page/modules/payment/overview",tags:[],version:"current",frontMatter:{id:"overview",title:"Payment Module",description:"ActiveMember360 allows emails to be sent from ActiveCampaign using SMTP mail providers rather than ActiveCampaign directly",sidebar_label:"Overview"},sidebar:"modules",previous:{title:"Menu Control",permalink:"/docs-activemember360-page/modules/menu-control"},next:{title:"Activation",permalink:"/docs-activemember360-page/modules/payment/activate"}},m=[{value:"Overview",id:"overview",children:[],level:2},{value:"Activation",id:"activation",children:[],level:2},{value:"Configuration &amp; Settings",id:"configuration--settings",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2}],p={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"ActiveMember360 is designed to primarily work with the best in class e-commerce solutions such as WooCommerce/WooCommerce Subscriptions, ThriveCart etc."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Payment Extension")," was designed/developed to provide a simple payment process for those with limited requirements regarding payment processors, customisation, tax handling and legislation."),(0,a.kt)("p",null,"It is primary designed to support single item purchases of digital products and services."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Payment Extension")," supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One time payment products"),(0,a.kt)("li",{parentName:"ul"},"Recurring payment subscription products"),(0,a.kt)("li",{parentName:"ul"},"Single product purchases only"),(0,a.kt)("li",{parentName:"ul"},"Stripe payment processing without SCA (Strong Customer Authentication)"),(0,a.kt)("li",{parentName:"ul"},"Flat rate tax charges irrespective of product type"),(0,a.kt)("li",{parentName:"ul"},"Customisable product invoices"),(0,a.kt)("li",{parentName:"ul"},"User management of product purchases and subscriptions")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Payment Extension")," does not provide support for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fully customisable checkout pages"),(0,a.kt)("li",{parentName:"ul"},"Additional fields on the checkout page"),(0,a.kt)("li",{parentName:"ul"},"Discounts, coupons or coupon codes"),(0,a.kt)("li",{parentName:"ul"},"Shipping charges"),(0,a.kt)("li",{parentName:"ul"},"Any payment processor apart from Stripe"),(0,a.kt)("li",{parentName:"ul"},"Subscription upgrades and downgrades"),(0,a.kt)("li",{parentName:"ul"},"Pausing of subscription payments"),(0,a.kt)("li",{parentName:"ul"},"VAT for digital goods and services sold to those outside your home country"),(0,a.kt)("li",{parentName:"ul"},"VAT Reverse Charge functionality"),(0,a.kt)("li",{parentName:"ul"},"Storing of transactions within ActiveCampaign"),(0,a.kt)("li",{parentName:"ul"},"Integration with accounting software or services"),(0,a.kt)("li",{parentName:"ul"},"Integration with fulfilment services")),(0,a.kt)("p",null,"To ensure that the ActiveMember360 Payment module can satisfy your required tax and legislative requirements, which vary widely from country to country or even state to state, professional advice should be sought."),(0,a.kt)("h2",{id:"activation"},"Activation"),(0,a.kt)("p",null,"How to activate the Payment module is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/activate",title:"Click to learn how to activate the Payment module"},(0,a.kt)("strong",{parentName:"a"},"Activate the Payment module")))),(0,a.kt)("h2",{id:"configuration--settings"},"Configuration & Settings"),(0,a.kt)("p",null,"How to configure the Payments module company settings is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/company-settings",title:"Click to learn how to configure the company settings of the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Configure the Payments module company settings")))),(0,a.kt)("p",null,"How to configure the Payments module tax settings is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/tax-settings",title:"Click to learn how to configure the tax settings of the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Configure the Payments module tax settings")))),(0,a.kt)("p",null,"How to configure the Payments module currency settings is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/currency-settings",title:"Click to learn how to configure the currency settings of the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Configure the Payments module currency settings")))),(0,a.kt)("p",null,"How to configure the Payments module Stripe settings is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/stripe-settings",title:"Click to learn how to configure the Stripe settings of the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Configure the Payments module Stripe settings")))),(0,a.kt)("p",null,"How to configure the Payments module invoice settings is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/invoice-settings",title:"Click to learn how to configure the invoice settings of the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Configure the Payments module invoice settings")))),(0,a.kt)("p",null,"How to configure the Payments module refund settings is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/refund-settings",title:"Click to learn how to configure the refund settings of the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Configure the Payments module refund settings")))),(0,a.kt)("p",null,"How to configure the Payments module checkout templates is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/checkout-templates",title:"Click to learn how to configure checkout templates for the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Configure the Payments module checkout templates")))),(0,a.kt)("p",null,"How to define products for purchase using the Payment module is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/products",title:"Click to learn how to define products for purchase using the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Define products for purchase using the Payment module")))),(0,a.kt)("p",null,"How to define subscriptions for purchase using the Payment module is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/payment/subscriptions",title:"Click to learn how to define subscriptions for purchase using the ActiveMember360 Payment module"},(0,a.kt)("strong",{parentName:"a"},"Define subscriptions for purchase using the Payment module")))),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"How to integrate product data and purchase links into your site is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",{parentName:"li"},"Control the Unsubscribe/OptOut process for emails sent by the Mailer module"),"][mailer-email-optout]")),(0,a.kt)("p",null,"How the product and subscription purchasing process works is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",{parentName:"li"},"Send an email using the Mailer module from an ActiveCampaign automation"),"][mailer-email-send]")),(0,a.kt)("p",null,"How users can manage their purchases is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",{parentName:"li"},"Use an ActiveCampaign Email Template with the Mailer module"),"][mailer-email-templates]")),(0,a.kt)("p",null,"How administrators can manage orders is detailed here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",{parentName:"li"},"Test the Mailer module webhook URL for sending emails"),"][mailer-email-testing]")))}c.isMDXComponent=!0}}]);