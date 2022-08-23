"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73501],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),m=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||n;return r?a.createElement(g,i(i({ref:t},l),{},{components:r})):a.createElement(g,i({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<n;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95850:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],s={id:"order-processing-update",title:"WooCommerce Order Processing",description:"How the ActiveMember360 WooCommerce Extension is integrated with the WooCommerce order process.",sidebar_label:"Order Processing & Order Status Changes"},c=void 0,m={unversionedId:"extensions/woocommerce/order-processing-update",id:"extensions/woocommerce/order-processing-update",title:"WooCommerce Order Processing",description:"How the ActiveMember360 WooCommerce Extension is integrated with the WooCommerce order process.",source:"@site/docs/extensions/woocommerce/order-processing-update.mdx",sourceDirName:"extensions/woocommerce",slug:"/extensions/woocommerce/order-processing-update",permalink:"/extensions/woocommerce/order-processing-update",tags:[],version:"current",lastUpdatedAt:1658828306,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"order-processing-update",title:"WooCommerce Order Processing",description:"How the ActiveMember360 WooCommerce Extension is integrated with the WooCommerce order process.",sidebar_label:"Order Processing & Order Status Changes"}},l={},p=[{value:"When the WooCommerce order is submitted",id:"when-the-woocommerce-order-is-submitted",level:2},{value:"ActiveCampaign contact created and/or updated",id:"activecampaign-contact-created-andor-updated",level:3},{value:"WordPress user account created",id:"wordpress-user-account-created",level:3},{value:"After a successful purchase",id:"after-a-successful-purchase",level:2},{value:"When the WooCommerce order status changes",id:"when-the-woocommerce-order-status-changes",level:2},{value:"ActiveCampaign contact updated",id:"activecampaign-contact-updated",level:3},{value:"When a WooCommerce coupon is used",id:"when-a-woocommerce-coupon-is-used",level:2},{value:"ActiveCamapign contact updated",id:"activecamapign-contact-updated",level:3},{value:"When a logged in user abandons the WooCommerce cart",id:"when-a-logged-in-user-abandons-the-woocommerce-cart",level:2},{value:"ActiveCamapign contact updated",id:"activecamapign-contact-updated-1",level:3}],d={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Using the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 WooCommerce Extension")," an ActiveCampaign contact record can be created/updated whenever an order is submitted, completed or upon any order status change."),(0,n.kt)("p",null,"This includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/woocommerce/order-processing/#when-the-woocommerce-order-is-submitted"},(0,n.kt)("strong",{parentName:"a"},"When the WooCommerce order is submitted"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/woocommerce/order-processing/#after-a-successful-purchase"},(0,n.kt)("strong",{parentName:"a"},"When the WooCommerce order status changes"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/woocommerce/order-processing/#when-the-woocommerce-order-status-changes"},(0,n.kt)("strong",{parentName:"a"},"After a successful purchase"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/woocommerce/order-processing/#when-a-woocommerce-coupon-is-used"},(0,n.kt)("strong",{parentName:"a"},"When a WooCommerce coupon is used"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/woocommerce/order-processing/#when-a-logged-in-user-abandons-the-woocommerce-cart"},(0,n.kt)("strong",{parentName:"a"},"When a logged in user abandons the WooCommerce cart")))),(0,n.kt)("h2",{id:"when-the-woocommerce-order-is-submitted"},"When the WooCommerce order is submitted"),(0,n.kt)("h3",{id:"activecampaign-contact-created-andor-updated"},"ActiveCampaign contact created and/or updated"),(0,n.kt)("p",null,"When an order is successfully submitted an ActiveCampaign contact will be created or updated."),(0,n.kt)("p",null,"The ActiveCampaign contact fields listed below are populated with the associated billing information submitted on the order form:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"email"),(0,n.kt)("li",{parentName:"ul"},"phone"),(0,n.kt)("li",{parentName:"ul"},"first_name"),(0,n.kt)("li",{parentName:"ul"},"last_name"),(0,n.kt)("li",{parentName:"ul"},"billing_first_name"),(0,n.kt)("li",{parentName:"ul"},"billing_last_name"),(0,n.kt)("li",{parentName:"ul"},"billing_company"),(0,n.kt)("li",{parentName:"ul"},"billing_email"),(0,n.kt)("li",{parentName:"ul"},"billing_address_1"),(0,n.kt)("li",{parentName:"ul"},"billing_address_2"),(0,n.kt)("li",{parentName:"ul"},"billing_city"),(0,n.kt)("li",{parentName:"ul"},"billing_state"),(0,n.kt)("li",{parentName:"ul"},"billing_postcode"),(0,n.kt)("li",{parentName:"ul"},"billing_country"),(0,n.kt)("li",{parentName:"ul"},"billing_phone")),(0,n.kt)("p",null,"At this point in time:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"phone")," field value will match the ",(0,n.kt)("inlineCode",{parentName:"li"},"billing_phone")," field value"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"first_name")," field value will match the ",(0,n.kt)("inlineCode",{parentName:"li"},"billing_first_name")," field value"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"last_name")," field value will match the ",(0,n.kt)("inlineCode",{parentName:"li"},"billing_last_name")," field value")),(0,n.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If the purchase is being made by a visitor who is not logged in to the site the contact will be created with the ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," field set to the billing email address submitted for the order, if no existing ActiveCampaign contact exists with that email address."),(0,n.kt)("p",{parentName:"div"},"If the purchase is being made by a visitor who is logged in to the site the contact will be created with the ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," field set to the email address of the logged in WordPress user, if no existing ActiveCampaign contact exists with that email address."))),(0,n.kt)("h3",{id:"wordpress-user-account-created"},"WordPress user account created"),(0,n.kt)("p",null,"Dependent upon the settings within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/account-settings",title:"Click to learn how to configure WooCommerce account settings"},(0,n.kt)("strong",{parentName:"a"},"How to configure the WooCommerce account options when using the ActiveMember360 WooCommerce Extension"))," a WordPress user will be created as detailed within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/account-creation",title:"Click to learn how the WooCommerce account creation process operates when using the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"Integration of the ActiveMember360 WooCommerce Extension with WooCommerce account creation")),"."),(0,n.kt)("h2",{id:"after-a-successful-purchase"},"After a successful purchase"),(0,n.kt)("p",null,"After a successful purchase, when not using guest checkout for the purchase, at the point in time when the WooCommerce thank you page is shown the user will be logged in to the site as a ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,n.kt)("strong",{parentName:"a"},"remote user")),"."),(0,n.kt)("h2",{id:"when-the-woocommerce-order-status-changes"},"When the WooCommerce order status changes"),(0,n.kt)("h3",{id:"activecampaign-contact-updated"},"ActiveCampaign contact updated"),(0,n.kt)("p",null,"For every relevant WooCommerce order or subscription status change you may wish to trigger some actions i.e. add and/or remove tags, start and/or stop automations, subscribe and/or unsubscribe to/from lists."),(0,n.kt)("p",null,"The actions can support a variety of use cases including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The tracking of which products have been bought using ActiveCampaign tags or contact field values."),(0,n.kt)("li",{parentName:"ul"},"The tracking of the last order status using ActiveCampaign tags."),(0,n.kt)("li",{parentName:"ul"},"The delivery or access to a product based upon the order status using ActiveCampaign tags.")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 WooCommerce Extension")," supports order status actions for products and subscriptions, including variable product and subscription variations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The settings that control the actions triggered for ",(0,n.kt)("strong",{parentName:"p"},"every product")," when purchased are detailed within:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings",title:"Click to learn how to configure the WooCommerce integration settings for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How to configure the WooCommerce integration settings for the ActiveMember360 WooCommerce Extension"))," specifically steps ",(0,n.kt)("strong",{parentName:"p"},"9")," to ",(0,n.kt)("strong",{parentName:"p"},"14"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Which order statuses trigger these actions is configured within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings/#update-order-status",title:"Click to learn how to configure when order status actions apply for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Update Order Status")),".")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The settings that control the actions triggered for ",(0,n.kt)("strong",{parentName:"p"},"each individual product")," when the order status changes are detailed within:"),(0,n.kt)("h4",{parentName:"li",id:"for-all-products-except-subscriptions"},"For All Products (except Subscriptions)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/order-status-actions/#configuring-product-order-status-actions",title:"Click to learn how to configure the product order status actions for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How to configure the product order status actions for the ActiveMember360 WooCommerce Extension")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the purchase and refund order status these actions are triggered as configured within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings/#update-order-status",title:"Click to learn how to configure when order status actions apply for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Update Order Status")),"."))),(0,n.kt)("h4",{parentName:"li",id:"for-subscriptions"},"For Subscriptions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/order-status-actions/#configuring-subscription-order-status-actions",title:"Click to learn how to configure the subscription order status actions for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How to configure the subscription order status actions for the ActiveMember360 WooCommerce Extension")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the purchase and refund order status these actions are triggered as configured within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings/#update-order-status",title:"Click to learn how to configure when order status actions apply for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Update Order Status")),"."),(0,n.kt)("p",{parentName:"li"},"For all other subscription order statuses the actions are triggered.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ActiveCampaign tags will be added to the contact based upon the WooCommerce product SKU, product tag, product category as configured within:"),(0,n.kt)("h4",{parentName:"li",id:"for-all-products-except-subscriptions-1"},"For All Products (except Subscriptions)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/order-status-actions/#configuring-product-order-status-actions",title:"Click to learn how to configure the product order status actions for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How to configure the product order status actions for the ActiveMember360 WooCommerce Extension")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the purchase and refund order status these actions are triggered as configured within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings/#update-order-status",title:"Click to learn how to configure when order status actions apply for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Update Order Status")),"."))),(0,n.kt)("h4",{parentName:"li",id:"for-subscriptions-1"},"For Subscriptions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/order-status-actions/#configuring-subscription-order-status-actions",title:"Click to learn how to configure the subscription order status actions for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How to configure the subscription order status actions for the ActiveMember360 WooCommerce Extension")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For the purchase and refund order status these actions are triggered as configured within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings/#update-order-status",title:"Click to learn how to configure when order status actions apply for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Update Order Status")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings",title:"Click to learn how to configure the WooCommerce integration settings for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How to configure the WooCommerce integration settings for the ActiveMember360 WooCommerce Extension"))," specifically steps ",(0,n.kt)("strong",{parentName:"p"},"9")," to ",(0,n.kt)("strong",{parentName:"p"},"14"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Which order statuses trigger the adding of these tags is configured within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings/#update-order-status",title:"Click to learn how to configure when order status actions apply for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Update Order Status")),"."))),(0,n.kt)("h4",{parentName:"li",id:"product-variations"},"Product Variations"),(0,n.kt)("p",{parentName:"li"},"If a product variation is purchased additional order status actions are triggered for the purchased variation in addition to the order status actions specified within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/order-status-actions/#purchased",title:"Click to learn how to configure the purchased product order status actions for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"Purchased product order status actions"))," or ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/order-status-actions/#purchased-1",title:"Click to learn how to configure the purchased subscription order status actions for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"Purchased subscription order status actions")),"."),(0,n.kt)("p",{parentName:"li"},"These are configured within:",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/order-status-actions/#configuring-additional-purchased-order-status-actions-for-variable-productsubscription-variations",title:"Click to learn how to configure the product variations order status actions for the ActiveMember360 WooCommerce Extension"},"extensions-woocommerce-order-status-actions-variations")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Which order statuses trigger the adding/removing of these tags is configured within ",(0,n.kt)("a",{parentName:"li",href:"/extensions/woocommerce/integration-settings/#update-order-status",title:"Click to learn how to configure when order status actions apply for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Update Order Status")),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The order status of the last submitted order will be tracked using ActiveCamapign tags if this has been configured within:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings/#track-order-status-tag",title:"Click to learn how to configure tracking using ActiveCampaign tags for the last submitted order using the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Track Order Status Tag")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When the tag/tags will be added is dependent upon the setting defined within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings/#update-order-status",title:"Click to learn how to configure when order status actions apply for the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Update Order Status")),". Only one tag i.e the most recent will be present for the contact. Tags are removed when the latest is added.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Track the WooCommerce events using the ActiveCampaign Tracking Module as detailed within:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/extensions/woocommerce/event-tracking",title:"Click to learn how event tracking operates when using the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How event tracking operates when using the ActiveMember360 WooCommerce Extension and ActiveCampaign Tracking Module")),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A note is added to the ActiveCampaign contact record after any order status change and it will include:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Order number"),(0,n.kt)("li",{parentName:"ul"},"Order status"),(0,n.kt)("li",{parentName:"ul"},"Total order amount"),(0,n.kt)("li",{parentName:"ul"},"Hyperlink to WooCommerce order")),(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"Example of WooCommerce order status notes in ActiveCampaign",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_extension_order_status_notes.png"}),(0,n.kt)("figcaption",null,"Example of WooCommerce order status notes in ActiveCampaign")),(0,n.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The initial order status of ",(0,n.kt)("strong",{parentName:"p"},"Processing")," after the checkout process was completed successfully is not considered an order status change by WooCommerce so no note is added for that case.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ActiveCampaign contact updated with current order data"),(0,n.kt)("p",{parentName:"li"},"A full sync of current order data is processed when the order status is first changed to either ",(0,n.kt)("strong",{parentName:"p"},"Processing")," or ",(0,n.kt)("strong",{parentName:"p"},"Completed"),", or when the order status is changed to ",(0,n.kt)("strong",{parentName:"p"},"Refunded"),"."),(0,n.kt)("p",{parentName:"li"},"When a full sync of the ActiveCampaign contact is made by the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 WooCommerce Extension")," the following fields are synced between WordPress and the ActiveCampaign contact:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"ActiveCampaign Contact Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"email"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Either email of the logged in WordPress user, or ActiveCampaign contact with email matching the current order billing_email, or current order billing email")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"phone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Either phone of the ActiveCampaign contact with email matching the current order billing_email, or current order billing_phone")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"first_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Either first_name of the ActiveCampaign contact with email matching the current order billing_email, or current order billing_first_name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Either last_name of the ActiveCampaign contact with email matching the current order billing_email, or current order last_name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_first_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_first_name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_last_name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_last_name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_company"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_company")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_email"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_email")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_address_1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_address_1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_address_2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_address_2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_city"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_city")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_state"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_postcode"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_postcode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_country"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_country")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"billing_phone"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current order: billing_phone")))),(0,n.kt)("p",{parentName:"li"},"The ActiveCampaign sync is also logged within the WooCommerce order notes within WordPress."),(0,n.kt)("p",{parentName:"li"},"A hyperlink is provided to the associated ActiveCampaign contact."),(0,n.kt)("figure",null,(0,n.kt)("img",{alt:"Example of WooCommerce order notes showing ActiveCampaign Sync",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_extension_order_notes_sync.png"})))),(0,n.kt)("h2",{id:"when-a-woocommerce-coupon-is-used"},"When a WooCommerce coupon is used"),(0,n.kt)("h3",{id:"activecamapign-contact-updated"},"ActiveCamapign contact updated"),(0,n.kt)("p",null,"When a WooCommerce coupon is used the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 WooCommerce Extension")," can trigger actions for the ActiveCampaign contact associated with the WooCommerce order."),(0,n.kt)("p",null,"The actions are configured as detailed within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/coupon-usage-actions",title:"Click to learn how to configure coupon usage actions using the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How to configure the actions performed by the ActiveMember360 WooCommerce Extension whenever a WooCommerce coupon is used")),"."),(0,n.kt)("h2",{id:"when-a-logged-in-user-abandons-the-woocommerce-cart"},"When a logged in user abandons the WooCommerce cart"),(0,n.kt)("h3",{id:"activecamapign-contact-updated-1"},"ActiveCamapign contact updated"),(0,n.kt)("p",null,"When a ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,n.kt)("strong",{parentName:"a"},"remote user"))," abandons a WooCommerce cart without completing the checkout process actions are triggered as detailed within ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce/abandoned-cart",title:"Click to learn how the abandoned cart process operates when using the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"How the abandoned cart process operates when using the ActiveMember360 WooCommerce Extension")),"."))}u.isMDXComponent=!0}}]);