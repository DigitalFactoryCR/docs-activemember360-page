"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32334],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,h=d["".concat(p,".").concat(g)]||d[g]||m[g]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"integration-settings",title:"ActiveMember360 WooCommerce Extension Integration Settings",description:"How to configure the WooCommerce integration settings for the ActiveMember360 WooCommerce Extension.",sidebar_label:"Integration Settings"},p=void 0,c={unversionedId:"extensions/woocommerce/integration-settings",id:"extensions/woocommerce/integration-settings",title:"ActiveMember360 WooCommerce Extension Integration Settings",description:"How to configure the WooCommerce integration settings for the ActiveMember360 WooCommerce Extension.",source:"@site/docs/extensions/woocommerce/integration-settings.mdx",sourceDirName:"extensions/woocommerce",slug:"/extensions/woocommerce/integration-settings",permalink:"/extensions/woocommerce/integration-settings",tags:[],version:"current",lastUpdatedAt:1658828306,formattedLastUpdatedAt:"7/26/2022",frontMatter:{id:"integration-settings",title:"ActiveMember360 WooCommerce Extension Integration Settings",description:"How to configure the WooCommerce integration settings for the ActiveMember360 WooCommerce Extension.",sidebar_label:"Integration Settings"},sidebar:"extensions",previous:{title:"Activation",permalink:"/extensions/woocommerce/activate"},next:{title:"Order Status Actions",permalink:"/extensions/woocommerce/order-status-actions"}},l={},m=[{value:"Configuring Integration Settings",id:"configuring-integration-settings",level:2}],d={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 WooCommerce")," extension has some WooCommerce integration settings."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These are global settings and therefore apply to any/every product or subscription defined."))),(0,o.kt)("h2",{id:"configuring-integration-settings"},"Configuring Integration Settings"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps for specifying ActiveMember360 WooCommerce Integration settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_extension_settings_integration.png"}),(0,o.kt)("figcaption",null,"Steps for specifying ActiveMember360 WooCommerce Integration settings")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To access the settings click ",(0,o.kt)("strong",{parentName:"p"},"Settings")," in the WordPress administrator main navigation for WooCommerce.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Integrations"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"update-order-status"},"Update Order Status"),(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("strong",{parentName:"p"},"Update Order Status")," is checked the Track Order Status Tags will be added/removed for the contact within ActiveCampaign immediately upon any order status change."),(0,o.kt)("p",{parentName:"li"},"If not checked, ActiveMember360 will wait for the order to be paid or refunded i.e. status to be ",(0,o.kt)("strong",{parentName:"p"},"Processing"),", ",(0,o.kt)("strong",{parentName:"p"},"Completed")," or ",(0,o.kt)("strong",{parentName:"p"},"Refunded")," before updating ActiveCampaign."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: Checked"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"enable-tags-in-panels"},"Enable Tags in Panels"),(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("strong",{parentName:"p"},"Enable Tags in Panels")," is checked the capability to add or remove ActiveCampaign tags for product or subscription order status changes is enabled."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: Checked"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"enable-automations-in-panels"},"Enable Automations in Panels"),(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("strong",{parentName:"p"},"Enable Automations in Panels")," is checked the capability to add or remove a contact to or from ActiveCampaign automations for product or subscription order status changes is enabled."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: Checked"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"enable-lists-in-panels"},"Enable Lists in Panels"),(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("strong",{parentName:"p"},"Enable Lists in Panels")," is checked the capability to subscribe or unsubscribe a contact to or from ActiveCampaign lists for product or subscription order status changes is enabled."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: Checked"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"track-order-status-tag"},"Track Order Status Tag"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Track Order Status Tag")," drop down select which tag name should be used as the prefix for the order status if tag based order tracking is required."),(0,o.kt)("p",{parentName:"li"},"The tag created and added to the contact will be named using the chosen prefix and a suffix of; ","_","processing, ","_","completed, ","_","pending, ","_","failed, ","_","on-hold, or ","_","cancelled depending upon the order status."),(0,o.kt)("p",{parentName:"li"},"The tag will only reflect the order status of the most recent order for the contact. The tag/tags will be added dependent upon the setting defined within ",(0,o.kt)("a",{parentName:"p",href:"/extensions/woocommerce/integration-settings/#update-order-status",title:"Click to learn how to configure when order status actions apply for the ActiveMember360 WooCommerce Extension"},(0,o.kt)("strong",{parentName:"a"},"WooCommerce, Settings, Integration, ActiveMember360, Update Order Status")),". Only one tag i.e the most recent will be present for the contact. Tags are removed when the latest is added."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: Do not use a tag to track order status"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"add-contacts-to-automations"},"Add contacts to automations"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Add contacts to automations")," drop down select the ActiveCampaign automations to which the contact will be added when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,o.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"x")," shown next to the individual automation name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"remove-contacts-from-automations"},"Remove contacts from automations"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Remove contacts from automations")," drop down select the ActiveCampaign automations from which the contact will be removed when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,o.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"x")," shown next to the individual automation name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"add-tags-to-contacts"},"Add tags to contacts"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Add tags to contacts")," drop down select the ActiveCampaign contact tags to be added when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"x")," shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"remove-tags-from-contacts"},"Remove tags from contacts"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Remove tags from contacts")," drop down select the ActiveCampaign contact tags to be removed when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"x")," shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"subscribe-contacts-to-lists"},"Subscribe contacts to lists"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Subscribe contacts to lists")," drop down select the ActiveCampaign lists to which the contact will be subscribed when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required list."),(0,o.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"x")," shown next to the individual list name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"unsubscribe-contacts-from-lists"},"Unsubscribe contacts from lists"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Unsubscribe contacts from lists")," drop down select the ActiveCampaign lists from which the contact will be unsubscribed when payment for the order is complete. That is when the order status is first changed to either ",(0,o.kt)("strong",{parentName:"p"},"Processing")," or ",(0,o.kt)("strong",{parentName:"p"},"Completed"),"."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required list."),(0,o.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"x")," shown next to the individual list name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"abandoned-cart-tags"},"Abandoned Cart Tags"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Abandoned Cart Tags")," drop down select the ActiveCampaign contact tags to be added whenever a logged in ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," abandons a cart without checkout."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"x")," shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: None"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"number-of-alternate-tag-based-prices"},"Number of alternate tag-based prices"),(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Number of alternate tag-based prices")," drop down select how many alternate tag based prices will be allowed for each product. The maximum is 5."),(0,o.kt)("p",{parentName:"li"},"You specify the ActiveCampaign tag based pricing for individual products and subscriptions as detailed within ",(0,o.kt)("a",{parentName:"p",href:"/extensions/woocommerce/tag-based-pricing#configuring-tag-based-product-prices",title:"Click to learn how to configure Tag Based Product/Subscription prices"},(0,o.kt)("strong",{parentName:"a"},"Configuring Tag Based Product Prices")),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: No alternate tag-based prices")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Alternate tag based pricing is not available for product types: variable product or variable subscription.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"debug-log-enable-activemember360-to-update-your-woocommerce-error-log"},"Debug Log, Enable ActiveMember360 to update your WooCommerce error log"),(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("strong",{parentName:"p"},"Debug Log, Enable ActiveMember360 to update your WooCommerce error log")," is checked ActiveMember360 will update the WooCommerce error log."),(0,o.kt)("p",{parentName:"li"},"The WooCommerce log can be interrogated within ",(0,o.kt)("strong",{parentName:"p"},"WordPress, Status, Logs"),"."),(0,o.kt)("p",{parentName:"li"},"An explanation regarding the logs is provided within ",(0,o.kt)("a",{parentName:"p",href:"https://woocommerce.com/document/understanding-the-woocommerce-system-status-report/#error-logs",title:"Click to learn about WooCommerce logs"},"Understanding the WooCommerce System Status Report - Logs"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default: Not Checked"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save Changes"),"."))))}g.isMDXComponent=!0}}]);