"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24421],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"user-order-management",title:"User Order Management",description:"How users can manage their ActiveMember360 Payment module product and subscription orders.",sidebar_label:"User Order Management"},l=void 0,d={unversionedId:"modules/payment/user-order-management",id:"modules/payment/user-order-management",title:"User Order Management",description:"How users can manage their ActiveMember360 Payment module product and subscription orders.",source:"@site/docs/modules/payment/user-order-management.mdx",sourceDirName:"modules/payment",slug:"/modules/payment/user-order-management",permalink:"/modules/payment/user-order-management",tags:[],version:"current",lastUpdatedAt:1650641683,formattedLastUpdatedAt:"4/22/2022",frontMatter:{id:"user-order-management",title:"User Order Management",description:"How users can manage their ActiveMember360 Payment module product and subscription orders.",sidebar_label:"User Order Management"},sidebar:"modules",previous:{title:"Purchasing Products & Subscriptions",permalink:"/modules/payment/product-subscription-purchasing"},next:{title:"Administrator Order Management",permalink:"/modules/payment/administrator-order-management"}},c={},u=[{value:"Viewing Orders",id:"viewing-orders",level:2},{value:"Access Order Information &amp; Invoices",id:"access-order-information--invoices",level:2},{value:"Product",id:"product",level:3},{value:"Subscription",id:"subscription",level:3},{value:"Cancel A Subscription",id:"cancel-a-subscription",level:2},{value:"Reactivate A Subscription",id:"reactivate-a-subscription",level:2},{value:"Change The Credit Card Associated With An Ongoing Subscription",id:"change-the-credit-card-associated-with-an-ongoing-subscription",level:2},{value:"Refunding",id:"refunding",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"/shortcodes/mbr_my_payments/",title:"Click to learn how to use the [mbr_my_payments] shortcode"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, Payment Module Shortcodes, [mbr_my_payments]"))," pages/posts can be defined to allow users to manage their ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Payment")," module product and subscription purchases."),(0,o.kt)("p",null,"The shortcode displays a table of one-time purchases and subscriptions made by the logged in user, and from within the table users can view invoices, refunds, manage their credit cards, and cancel or reactivate subscriptions."),(0,o.kt)("h2",{id:"viewing-orders"},"Viewing Orders"),(0,o.kt)("p",null,"When a logged in user visits a page/post where the ",(0,o.kt)("a",{parentName:"p",href:"/shortcodes/mbr_my_payments/",title:"Click to learn how to use the [mbr_my_payments] shortcode"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, Payment Module Shortcodes, [mbr_my_payments]"))," has been used they will see a table, an example of which is shown below:"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing subscription and product orders",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing subscription and product orders")),(0,o.kt)("p",null,"The content and form of the table depends upon the order type and status."),(0,o.kt)("p",null,"Shown in this table are two orders:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Order No. 8298")," is for a product that is ",(0,o.kt)("strong",{parentName:"li"},"Paid")," and therefore displays one action button ",(0,o.kt)("strong",{parentName:"li"},"More"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Order No. 8299")," is for an ",(0,o.kt)("strong",{parentName:"li"},"Active")," subscription and therefore displays three action buttons; ",(0,o.kt)("strong",{parentName:"li"},"More"),", ",(0,o.kt)("strong",{parentName:"li"},"Change Credit Card")," and ",(0,o.kt)("strong",{parentName:"li"},"Cancel"),".")),(0,o.kt)("p",null,"The purpose and use of the action buttons is detailed below."),(0,o.kt)("h2",{id:"access-order-information--invoices"},"Access Order Information & Invoices"),(0,o.kt)("h3",{id:"product"},"Product"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing product orders",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_product_more.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing product orders")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"More")," details button to see the order details.")),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module product order details",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_product_order.png"}),(0,o.kt)("figcaption",null,"Payment Module product order details")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Invoice")," link to view and download/print the associated invoice.")),(0,o.kt)("h3",{id:"subscription"},"Subscription"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing subscription orders",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_subscription_more.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing subscription orders")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"More")," details button to see the order details.")),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module subscription order details",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_subscription_order.png"}),(0,o.kt)("figcaption",null,"Payment Module subscription order details")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Invoice")," link to view and download/print the associated invoice.")),(0,o.kt)("h2",{id:"cancel-a-subscription"},"Cancel A Subscription"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing subscription cancel button",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_subscription_cancel.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing subscription cancel button")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Cancel")," button and the subscription will be marked for cancellation.")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When a subscription is marked for cancellation it will not be cancelled untill the end of the current fully paid up subscription period."),(0,o.kt)("p",{parentName:"div"},"So for example if a recurring monthly subscription is invoiced/paid on the 1st of every month and a cancellation request is made on the 15th of the month the subscription will actually cancel on the 1st of the next month."))),(0,o.kt)("p",null,"If a subscription has been marked for cancellation the subscription in the order table will show as below with the ",(0,o.kt)("strong",{parentName:"p"},"Status")," set as ",(0,o.kt)("strong",{parentName:"p"},"Cancel at period end")," and with ",(0,o.kt)("strong",{parentName:"p"},"More")," and ",(0,o.kt)("strong",{parentName:"p"},"Reactivate")," action buttons displayed:"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing subscription pending cancellation",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_subscription_cancellation_requested.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing subscription pending cancellation")),(0,o.kt)("p",null,"If a subscription has been cancelled the subscription in the order table will show as below with the ",(0,o.kt)("strong",{parentName:"p"},"Status")," set as ",(0,o.kt)("strong",{parentName:"p"},"Cancelled")," and with only the ",(0,o.kt)("strong",{parentName:"p"},"More")," action button displayed. Cancelled subscriptions cannot be reactivated:"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing a cancelled subscription",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_subscription_cancelled.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing a cancelled subscription")),(0,o.kt)("h2",{id:"reactivate-a-subscription"},"Reactivate A Subscription"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing subscription reactivate button",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_subscription_reactivate.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing subscription reactivate button")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Reactivate")," button and the subscription will be immediately reactivated.")),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing an active subscription",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_subscription.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing an active subscription")),(0,o.kt)("h2",{id:"change-the-credit-card-associated-with-an-ongoing-subscription"},"Change The Credit Card Associated With An Ongoing Subscription"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing subscription change credit card button",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_subscription_credit_card.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing subscription change credit card button")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Change Credit Card")," button and a popup window will be shown to enter the new credit card details.")),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order showing change credit card form",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_subscription_credit_card_add.png"}),(0,o.kt)("figcaption",null,"Payment Module order showing change credit card form")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Enter the credit card number."),(0,o.kt)("li",{parentName:"ol"},"Enter the credit card CVC/CV2."),(0,o.kt)("li",{parentName:"ol"},"Select from the dropdown the credit expiry month."),(0,o.kt)("li",{parentName:"ol"},"Select from the dropdown the credit expiry month."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Update"),".")),(0,o.kt)("h2",{id:"refunding"},"Refunding"),(0,o.kt)("p",null,"There is no process when using the ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Payment")," module to enable a user to automatically request a refund."),(0,o.kt)("p",null,"The user would need to request a refund manually using your own support ticket system or whatever process you have in place for users to communicate with you."),(0,o.kt)("p",null,"When an order has been refunded the order table will show as below with the ",(0,o.kt)("strong",{parentName:"p"},"Status")," set as ",(0,o.kt)("strong",{parentName:"p"},"Refunded")," and with the ",(0,o.kt)("strong",{parentName:"p"},"More")," action button displayed:"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module order table showing refunded order",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_product_refund.png"}),(0,o.kt)("figcaption",null,"Payment Module order table showing refunded order")),(0,o.kt)("p",null,"Clicking on the ",(0,o.kt)("strong",{parentName:"p"},"More")," details button will show the refunded order details:"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Payment Module refunded order details",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_my_payments_product_refund_order.png"}),(0,o.kt)("figcaption",null,"Payment Module refunded order details")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Order ",(0,o.kt)("strong",{parentName:"li"},"Status")," showing as refunded."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Refund History")," showing refund details."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Refund Receipt")," link to view and download/print the associated refund receipt.")))}m.isMDXComponent=!0}}]);