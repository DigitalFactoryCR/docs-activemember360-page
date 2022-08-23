"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90007],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34518:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"order-status-actions",title:"Order Status Actions",description:"How to configure the order status actions for the ActiveMember360 WooCommerce Extension.",sidebar_label:"Order Status Actions"},p=void 0,c={unversionedId:"extensions/woocommerce/order-status-actions",id:"extensions/woocommerce/order-status-actions",title:"Order Status Actions",description:"How to configure the order status actions for the ActiveMember360 WooCommerce Extension.",source:"@site/docs/extensions/woocommerce/order-status-actions.mdx",sourceDirName:"extensions/woocommerce",slug:"/extensions/woocommerce/order-status-actions",permalink:"/extensions/woocommerce/order-status-actions",tags:[],version:"current",lastUpdatedAt:1658828306,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"order-status-actions",title:"Order Status Actions",description:"How to configure the order status actions for the ActiveMember360 WooCommerce Extension.",sidebar_label:"Order Status Actions"},sidebar:"extensions",previous:{title:"Integration Settings",permalink:"/extensions/woocommerce/integration-settings"},next:{title:"Product Availability",permalink:"/extensions/woocommerce/product-availability"}},l={},d=[{value:"Configuring Product Order Status Actions",id:"configuring-product-order-status-actions",level:2},{value:"Configuring Subscription Order Status Actions",id:"configuring-subscription-order-status-actions",level:2},{value:"Configuring Additional Purchased Order Status Actions for Variable Product/Subscription Variations",id:"configuring-additional-purchased-order-status-actions-for-variable-productsubscription-variations",level:2}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a whole series of actions that can be performed by ActiveMember360 upon a WooCommerce order status change."),(0,o.kt)("p",null,"These actions are defined for individual products when creating or editing any WooCommerce product."),(0,o.kt)("p",null,"These actions can include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ActiveCampaign tags"),(0,o.kt)("li",{parentName:"ul"},"Remove ActiveCampaign tags"),(0,o.kt)("li",{parentName:"ul"},"Add to ActiveCampaign automations"),(0,o.kt)("li",{parentName:"ul"},"Remove from ActiveCampaign automations"),(0,o.kt)("li",{parentName:"ul"},"Subscribe to ActiveCampaign lists"),(0,o.kt)("li",{parentName:"ul"},"Unsubscribe from ActiveCampaign lists"),(0,o.kt)("li",{parentName:"ul"},"Note added to ActiveCampaign contact")),(0,o.kt)("h2",{id:"configuring-product-order-status-actions"},"Configuring Product Order Status Actions"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps for specifying WooCommerce product order status actions",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_extension_order_status_actions_product.png"}),(0,o.kt)("figcaption",null,"Steps for specifying WooCommerce product order status actions")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In WooCommerce Product data tabs click ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"abandoned-cart"},"Abandoned Cart"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Abandoned cart tags")," drop down select the ActiveCampaign contact tags to be added when the product is in an abandoned cart."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"purchased"},"Purchased"),(0,o.kt)("p",{parentName:"li"},"Select the actions to process when a purchase has taken place. These trigger when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("p",{parentName:"li"},"A. When ",(0,o.kt)("strong",{parentName:"p"},'Add "SKU" tag')," is checked a tag will be automatically created if it does not already exist using this product's SKU and added to contact."),(0,o.kt)("p",{parentName:"li"},"B. When ",(0,o.kt)("strong",{parentName:"p"},'Add "product tags" tag')," is checked tags will be automatically created if it does not already exist using this product's product tag names and added to contact."),(0,o.kt)("p",{parentName:"li"},"C. When ",(0,o.kt)("strong",{parentName:"p"},'Add "product categories" tag')," is checked tags will be automatically created if it does not already exist using this product's category tag names and added to contact."),(0,o.kt)("p",{parentName:"li"},"D. From the ",(0,o.kt)("strong",{parentName:"p"},"Add to automations")," drop down select the ActiveCampaign automations to which the contact will be added."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,o.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the x shown next to the individual automation name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"E. From the ",(0,o.kt)("strong",{parentName:"p"},"Remove from automations")," drop down select the ActiveCampaign automations from which the contact will be removed."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,o.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the x shown next to the individual automation name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"F. From the ",(0,o.kt)("strong",{parentName:"p"},"Add tags")," drop down select the ActiveCampaign contact tags to be added."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"G. From the ",(0,o.kt)("strong",{parentName:"p"},"Remove tags")," drop down select the ActiveCampaign contact tags to be removed."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"H. From the ",(0,o.kt)("strong",{parentName:"p"},"Subscribe")," drop down select the ActiveCampaign lists to which the contact will be subscribed."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required list."),(0,o.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the x shown next to the individual list name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"I. From the ",(0,o.kt)("strong",{parentName:"p"},"Unsubscribe")," drop down select the ActiveCampaign lists from which the contact will be unsubscribed."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required list."),(0,o.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the x shown next to the individual list name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"refunded"},"Refunded"),(0,o.kt)("p",{parentName:"li"},"Select the actions to process when a refund takes place: These trigger when the order is set to the WooCommerce status of ",(0,o.kt)("strong",{parentName:"p"},"Refunded"),"."),(0,o.kt)("p",{parentName:"li"},"Repeat steps as described in step 3 ",(0,o.kt)("strong",{parentName:"p"},"D")," to ",(0,o.kt)("strong",{parentName:"p"},"I")," above."))),(0,o.kt)("p",null,"For a full explanation of WooCommerce order statuses see: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.woocommerce.com/document/managing-orders/"},"WooCommerce Order Statuses"),"."),(0,o.kt)("h2",{id:"configuring-subscription-order-status-actions"},"Configuring Subscription Order Status Actions"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps for specifying WooCommerce subscription order status actions",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_extension_order_status_actions_subscription.png"}),(0,o.kt)("figcaption",null,"Steps for specifying WooCommerce subscription order status actions")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In WooCommerce Product data tabs click ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"abandoned-cart-1"},"Abandoned Cart"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Abandoned cart tags")," drop down select the ActiveCampaign contact tags to be added when the product is in an abandoned cart."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")))),(0,o.kt)("p",null,"Actions can be applied when the following statuses are set:"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"purchased-1"},"Purchased"),(0,o.kt)("p",{parentName:"li"},"Select the actions to process when a purchase has taken place. These trigger when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("p",{parentName:"li"},"A. When ",(0,o.kt)("strong",{parentName:"p"},'Add "SKU" tag')," is checked a tag will be automatically created if it does not already exist using this product's SKU and added to contact."),(0,o.kt)("p",{parentName:"li"},"B. When ",(0,o.kt)("strong",{parentName:"p"},'Add "product tags" tag')," is checked tags will be automatically created if it does not already exist using this product's product tag names and added to contact."),(0,o.kt)("p",{parentName:"li"},"C. When ",(0,o.kt)("strong",{parentName:"p"},'Add "product categories" tag')," is checked tags will be automatically created if it does not already exist using this product's category tag names and added to contact."),(0,o.kt)("p",{parentName:"li"},"D. From the ",(0,o.kt)("strong",{parentName:"p"},"Add to automations")," drop down select the ActiveCampaign automations to which the contact will be added."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,o.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the x shown next to the individual automation name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"E. From the ",(0,o.kt)("strong",{parentName:"p"},"Remove from automations")," drop down select the ActiveCampaign automations from which the contact will be removed."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,o.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the x shown next to the individual automation name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"F. From the ",(0,o.kt)("strong",{parentName:"p"},"Add tags")," drop down select the ActiveCampaign contact tags to be added."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"G. From the ",(0,o.kt)("strong",{parentName:"p"},"Remove tags")," drop down select the ActiveCampaign contact tags to be removed."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"H. From the ",(0,o.kt)("strong",{parentName:"p"},"Subscribe")," drop down select the ActiveCampaign lists to which the contact will be subscribed."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required list."),(0,o.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the x shown next to the individual list name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"I. From the ",(0,o.kt)("strong",{parentName:"p"},"Unsubscribe")," drop down select the ActiveCampaign lists from which the contact will be unsubscribed."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required list."),(0,o.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the x shown next to the individual list name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"refunded-1"},"Refunded"),(0,o.kt)("p",{parentName:"li"},"Select the actions to process when a refund takes place: These trigger when the order is set to the WooCommerce status of ",(0,o.kt)("strong",{parentName:"p"},"Refunded"),"."),(0,o.kt)("p",{parentName:"li"},"Repeat steps as described in step 3 ",(0,o.kt)("strong",{parentName:"p"},"D")," to ",(0,o.kt)("strong",{parentName:"p"},"I")," above.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"activated"},"Activated"),(0,o.kt)("p",{parentName:"li"},"Activated: After the initial payment for a subscription has been processed (if any payment is required) and the status of the order is ",(0,o.kt)("strong",{parentName:"p"},"Completed")," the subscription will be transitioned to the ",(0,o.kt)("strong",{parentName:"p"},"Active")," status. The settings here apply when the subscription is set to ",(0,o.kt)("strong",{parentName:"p"},"Active")," and the previous status WAS NOT ",(0,o.kt)("strong",{parentName:"p"},"On Hold"),"."),(0,o.kt)("p",{parentName:"li"},"Repeat steps as described in step 3 ",(0,o.kt)("strong",{parentName:"p"},"D")," to ",(0,o.kt)("strong",{parentName:"p"},"I")," above.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"cancelled"},"Cancelled"),(0,o.kt)("p",{parentName:"li"},"Cancelled: The settings here apply when a subscription is ",(0,o.kt)("strong",{parentName:"p"},"Cancelled"),". These settings do not apply when the subscription is marked for cancellation only upon the actual cancellation i.e. at the end of the paid up period."),(0,o.kt)("p",{parentName:"li"},"Repeat steps as described in step 3 ",(0,o.kt)("strong",{parentName:"p"},"D")," to ",(0,o.kt)("strong",{parentName:"p"},"I")," above.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"on-hold"},"On Hold"),(0,o.kt)("p",{parentName:"li"},"On Hold: When an associated order is awaiting payment, or it has been manually suspended by the store owner or customer the subscription has an ",(0,o.kt)("strong",{parentName:"p"},"On Hold")," status. If it was manually suspended, it will need to be manually reactivated. If it was suspended awaiting payment, it will be reactivated once that payment is processed."),(0,o.kt)("p",{parentName:"li"},"Repeat steps as described in step 3 ",(0,o.kt)("strong",{parentName:"p"},"D")," to ",(0,o.kt)("strong",{parentName:"p"},"I")," above.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"reactivated"},"Reactivated"),(0,o.kt)("p",{parentName:"li"},"Reactivated: The settings here apply when a subscription is set to ",(0,o.kt)("strong",{parentName:"p"},"Active")," after it WAS ",(0,o.kt)("strong",{parentName:"p"},"On Hold"),"."),(0,o.kt)("p",{parentName:"li"},"Repeat steps as described in step 3 ",(0,o.kt)("strong",{parentName:"p"},"D")," to ",(0,o.kt)("strong",{parentName:"p"},"I")," above.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"expired"},"Expired"),(0,o.kt)("p",{parentName:"li"},"Expired: The settings here apply when a subscription status is ",(0,o.kt)("strong",{parentName:"p"},"Expired"),"."),(0,o.kt)("p",{parentName:"li"},"Repeat steps as described in step 3 ",(0,o.kt)("strong",{parentName:"p"},"D")," to ",(0,o.kt)("strong",{parentName:"p"},"I")," above.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"refunded-2"},"Refunded"),(0,o.kt)("p",{parentName:"li"},"Refunded: The settings here apply to when a subscription is ",(0,o.kt)("strong",{parentName:"p"},"Refunded"),"."),(0,o.kt)("p",{parentName:"li"},"Repeat steps as described in step 3 ",(0,o.kt)("strong",{parentName:"p"},"D")," to ",(0,o.kt)("strong",{parentName:"p"},"I")," above."))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When setting actions it is important to note that when a subscription renews the status is automatically first set to ",(0,o.kt)("strong",{parentName:"p"},"On Hold")," and then when a successful payment has been made it is set to purchase ",(0,o.kt)("strong",{parentName:"p"},"Completed")," and subscription ",(0,o.kt)("strong",{parentName:"p"},"Active"),"."),(0,o.kt)("p",{parentName:"div"},"So the subscription renewal triggers the actions; Subscription On Hold, Subscription Purchased, Subscription Reactivated in that order."))),(0,o.kt)("p",null,"For a full explanation of WooCommerce Subscription statuses see: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.woocommerce.com/document/subscriptions/statuses/"},"WooCommerce Subscription Statuses"),"."),(0,o.kt)("h2",{id:"configuring-additional-purchased-order-status-actions-for-variable-productsubscription-variations"},"Configuring Additional Purchased Order Status Actions for Variable Product/Subscription Variations"),(0,o.kt)("p",null,"The process of configuring additional purchased order status actions is the same for both variable product variations and variable subscription variations."),(0,o.kt)("p",null,"These order status actions are triggered when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps for specifying WooCommerce variable product order status actions",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_extension_order_status_actions_product_variations.png"}),(0,o.kt)("figcaption",null,"Steps for specifying WooCommerce variable product order status actions")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In WooCommerce Product data tabs click ",(0,o.kt)("strong",{parentName:"p"},"Variations"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Expand/Close")," to show the settings of all variations")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h3",{parentName:"li",id:"purchased-2"},"Purchased"),(0,o.kt)("p",{parentName:"li"},"Select the actions to process when a purchase has taken place. These trigger when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("p",{parentName:"li"},"A. From the ",(0,o.kt)("strong",{parentName:"p"},"Add tags")," drop down select the ActiveCampaign contact tags to be added."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"B. From the ",(0,o.kt)("strong",{parentName:"p"},"Remove tags")," drop down select the ActiveCampaign contact tags to be removed."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",{parentName:"li"},"Repeat steps ",(0,o.kt)("strong",{parentName:"p"},"A")," to ",(0,o.kt)("strong",{parentName:"p"},"B")," above for each variation as required.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save Changes"),"."))))}u.isMDXComponent=!0}}]);