"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9059],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19286:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"products",title:"Products",description:"How to define products for purchase using the ActiveMember360 Payment Module.",sidebar_label:"Products"},p=void 0,l={unversionedId:"modules/payment/products",id:"modules/payment/products",title:"Products",description:"How to define products for purchase using the ActiveMember360 Payment Module.",source:"@site/docs/modules/payment/products.mdx",sourceDirName:"modules/payment",slug:"/modules/payment/products",permalink:"/docs-activemember360-page/modules/payment/products",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"products",title:"Products",description:"How to define products for purchase using the ActiveMember360 Payment Module.",sidebar_label:"Products"},sidebar:"modules",previous:{title:"Checkout Templates",permalink:"/docs-activemember360-page/modules/payment/checkout-templates"},next:{title:"Subscriptions",permalink:"/docs-activemember360-page/modules/payment/subscriptions"}},c={},d=[{value:"Adding Products",id:"adding-products",level:2},{value:"Editing &amp; Deleting Products",id:"editing--deleting-products",level:2}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ActiveMember360 Payment module ",(0,o.kt)("strong",{parentName:"p"},"Products")," are a WordPress custom post type."),(0,o.kt)("p",null,"Adding and managing ",(0,o.kt)("strong",{parentName:"p"},"Products")," is done in exactly the same way as with any standard WordPress post/page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Products")," can be listed, created, and managed from the WordPress administrator main navigation."),(0,o.kt)("h2",{id:"adding-products"},"Adding Products"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps to add a Payment Module product",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_product_add.png"}),(0,o.kt)("figcaption",null,"Steps to add a Payment Module product")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,o.kt)("strong",{parentName:"li"},"Payment, Products"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Product"),".")),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps to define Payment Module product settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_product_settings.png"}),(0,o.kt)("figcaption",null,"Steps to define Payment Module product settings")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Product Settings")," tabs click ",(0,o.kt)("strong",{parentName:"p"},"Settings"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Specify a title/name for your ",(0,o.kt)("strong",{parentName:"p"},"product"),"."),(0,o.kt)("p",{parentName:"li"},"This is the name your users will see for the product.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Specify your ",(0,o.kt)("strong",{parentName:"p"},"product description"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set your ",(0,o.kt)("strong",{parentName:"p"},"Product Status")," by choosing \u201cLive Mode\u201d or \u201cTest Mode\u201d or deactivate by choosing \u201cInactive\u201d."))),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps to define Payment Module product pricing",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_product_pricing.png"}),(0,o.kt)("figcaption",null,"Steps to define Payment Module product pricing")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Product Settings")," tabs click ",(0,o.kt)("strong",{parentName:"p"},"Pricing"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the ",(0,o.kt)("strong",{parentName:"p"},"Regular Price (Live Mode)"),"."),(0,o.kt)("p",{parentName:"li"},"When the product has a ",(0,o.kt)("strong",{parentName:"p"},"Live")," status this price will be displayed and charged as long as no ",(0,o.kt)("strong",{parentName:"p"},"Sale Price (Live Mode)")," is defined.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the ",(0,o.kt)("strong",{parentName:"p"},"Sale Price (Live Mode)"),"."),(0,o.kt)("p",{parentName:"li"},"When the product has a ",(0,o.kt)("strong",{parentName:"p"},"Live")," status this price will be displayed and charged as long as no ",(0,o.kt)("strong",{parentName:"p"},"Regular Price (Live Mode)")," is defined.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the ",(0,o.kt)("strong",{parentName:"p"},"Regular Price (Test Mode)"),"."),(0,o.kt)("p",{parentName:"li"},"When the product has a ",(0,o.kt)("strong",{parentName:"p"},"Test")," status this price will be displayed and charged as long as no ",(0,o.kt)("strong",{parentName:"p"},"Sale Price (Test Mode)")," is defined.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the ",(0,o.kt)("strong",{parentName:"p"},"Sale Price (Test Mode)"),"."),(0,o.kt)("p",{parentName:"li"},"When the product has a ",(0,o.kt)("strong",{parentName:"p"},"Test")," status this price will be displayed and charged as long as no ",(0,o.kt)("strong",{parentName:"p"},"Regular Price (Test Mode)")," is defined."))),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps to specify Payment Module product purchase actions",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_product_purchase.png"}),(0,o.kt)("figcaption",null,"Steps to specify Payment Module product purchase actions")),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Product Settings")," tabs click ",(0,o.kt)("strong",{parentName:"p"},"Purchase"),"."),(0,o.kt)("p",{parentName:"li"},"Within this tab the actions to be performed by ActiveMember360 after a successful purchase can be specified.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Add to automation(s)")," drop down select the ActiveCampaign automation(s) to add to the contact in ActiveCampaign after a successful purchase."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,o.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the x shown next to the individual automation name."),(0,o.kt)("p",{parentName:"li"},"All automations can be removed from the selection by clicking on the x shown in the far right of the drop down.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Remove from automation(s)")," drop down select the ActiveCampaign automation(s) to remove from the contact in ActiveCampaign after a successful purchase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Add Tag(s)")," drop down select the ActiveCampaign contact tags to be added to the contact in ActiveCampaign after a successful purchase."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},"All tags can be removed from the selection by clicking on the x shown in the far right of the drop down.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Remove Tag(s)")," drop down select the ActiveCampaign contact tags to be removed from the contact in ActiveCampaign after a successful purchase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Subscribe to list(s)")," drop down select the ActiveCampaign lists the contact should be subscribed to in ActiveCampaign after a successful purchase."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required list."),(0,o.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the x shown next to the individual list name."),(0,o.kt)("p",{parentName:"li"},"All lists can be removed from the selection by clicking on the x shown in the far right of the drop down.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Unsubscribe from list(s)")," drop down select the ActiveCampaign lists the contact should be unsubscribed from in ActiveCampaign after a successful purchase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Redirect Page (for new contacts or logged in users)")," drop down select the redirect page/post to which the purchaser should be redirected to after a successful purchase if they are logged in at the time of purchasing or are created as a new contact by completing a successful purchase."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After a successful purchase if the purchaser is not logged in they will be automatically logged in if they do not exist as a contact within ActiveCampaign prior to purchase."),(0,o.kt)("p",{parentName:"div"},"This redirect will apply in such cases.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Redirect Page (for not logged in users)")," drop down select your redirect page to which the customer should be sent to after a successful purchase if they are not logged in at the time of purchasing."))),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps to specify Payment Module product refund actions",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_product_refund.png"}),(0,o.kt)("figcaption",null,"Steps to specify Payment Module product refund actions")),(0,o.kt)("ol",{start:21},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Product Settings")," tabs click ",(0,o.kt)("strong",{parentName:"p"},"Refund"),"."),(0,o.kt)("p",{parentName:"li"},"Within this tab the actions to be performed by ActiveMember360 after a successful full refund can be specified.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Add to automation(s)")," drop down select the ActiveCampaign automation(s) to add to the contact in ActiveCampaign after a successful full refund."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the automation name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required automation."),(0,o.kt)("p",{parentName:"li"},"Multiple automations can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual automations can be removed from the selection by clicking on the x shown next to the individual automation name."),(0,o.kt)("p",{parentName:"li"},"All automations can be removed from the selection by clicking on the x shown in the far right of the drop down.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Remove from automation(s)")," drop down select the ActiveCampaign automation(s) to remove from the contact in ActiveCampaign after a successful full refund.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Add Tag(s)")," drop down select the ActiveCampaign contact tags to be added to the contact in ActiveCampaign after a successful full refund."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the x shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},"All tags can be removed from the selection by clicking on the x shown in the far right of the drop down.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Remove Tag(s)")," drop down select the ActiveCampaign contact tags to be removed from the contact in ActiveCampaign after a successful full refund.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Subscribe to list(s)")," drop down select the ActiveCampaign lists the contact should be subscribed to in ActiveCampaign after a successful full refund."),(0,o.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the list name to refine the list and aid selection."),(0,o.kt)("p",{parentName:"li"},"Then click on the required list."),(0,o.kt)("p",{parentName:"li"},"Multiple lists can be selected as required."),(0,o.kt)("p",{parentName:"li"},"Individual lists can be removed from the selection by clicking on the x shown next to the individual list name."),(0,o.kt)("p",{parentName:"li"},"All lists can be removed from the selection by clicking on the x shown in the far right of the drop down.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Unsubscribe from list(s)")," drop down select the ActiveCampaign lists the contact should be unsubscribed from in ActiveCampaign after a successful full refund."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These refund actions are only performed when the payment related to this product is fully refunded. Fully refunded means either a full refund was made or multiple partial refunds were made against the payment that cover the full amount."),(0,o.kt)("p",{parentName:"div"},"Refund actions are not performed if you made a single partial refund against the product\u2019s payment which does not cover the full amount."),(0,o.kt)("p",{parentName:"div"},"Refunds are made through your Stripe account interface."))))),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps to specify Payment Module product checkout template",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_product_checkout.png"}),(0,o.kt)("figcaption",null,"Steps to specify Payment Module product checkout template")),(0,o.kt)("ol",{start:28},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Product Settings")," tabs click ",(0,o.kt)("strong",{parentName:"p"},"Checkout"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Checkout Template")," drop down select the checkout template to associate with the product."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To be able to select a template at least one must have been previously defined as detailed at ",(0,o.kt)("a",{parentName:"p",href:"/modules/payment/checkout-templates",title:"Click to learn how to define your ActiveMember360 Payment Checkout Templates"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Payments, Checkout Template")),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Publish/Update"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The product is now configured and can be purchased by redirecting a user to the URL highlighted."))),(0,o.kt)("h2",{id:"editing--deleting-products"},"Editing & Deleting Products"),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps to manage Payment Module products",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_product_manage.png"}),(0,o.kt)("figcaption",null,"Steps to manage Payment Module products")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In WordPress administrator main navigation click ",(0,o.kt)("strong",{parentName:"p"},"Payment, Products"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When you hover over a ",(0,o.kt)("strong",{parentName:"p"},"product")," in the listing you will see the links to edit and trash (delete) the ",(0,o.kt)("strong",{parentName:"p"},"product"),"."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you delete a product any link to the deleted product URL will trigger a 404 error."),(0,o.kt)("p",{parentName:"div"},"Please ensure such links are removed or redirected."))))))}u.isMDXComponent=!0}}]);