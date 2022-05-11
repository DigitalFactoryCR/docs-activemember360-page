"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94829],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return u}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(i),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return i?n.createElement(h,o(o({ref:t},c),{},{components:i})):n.createElement(h,o({ref:t},c))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},44316:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var n=i(87462),a=i(63366),r=(i(67294),i(3905)),o=["components"],s={id:"product-subscription-purchasing",title:"Purchasing Products & Subscriptions",description:"How the ActiveMember360 Payment module product and subscription purchasing process works.",sidebar_label:"Purchasing Products & Subscriptions"},p=void 0,l={unversionedId:"modules/payment/product-subscription-purchasing",id:"modules/payment/product-subscription-purchasing",title:"Purchasing Products & Subscriptions",description:"How the ActiveMember360 Payment module product and subscription purchasing process works.",source:"@site/docs/modules/payment/product-subscription-purchasing.mdx",sourceDirName:"modules/payment",slug:"/modules/payment/product-subscription-purchasing",permalink:"/modules/payment/product-subscription-purchasing",tags:[],version:"current",lastUpdatedAt:1650641683,formattedLastUpdatedAt:"4/22/2022",frontMatter:{id:"product-subscription-purchasing",title:"Purchasing Products & Subscriptions",description:"How the ActiveMember360 Payment module product and subscription purchasing process works.",sidebar_label:"Purchasing Products & Subscriptions"},sidebar:"modules",previous:{title:"Integrating Products & Subscriptions",permalink:"/modules/payment/product-subscription-integration"},next:{title:"User Order Management",permalink:"/modules/payment/user-order-management"}},c={},m=[],d={toc:m};function u(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To begin the purchasing process a visitor clicks on a link to or visits a product or subscription URL as defined in ",(0,r.kt)("a",{parentName:"p",href:"/modules/payment/products",title:"Click to learn how to configure the products within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Payment, Products"))," or ",(0,r.kt)("a",{parentName:"p",href:"/modules/payment/subscriptions",title:"Click to learn how to configure the subscriptions within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Payment, Subscriptions"))," respectively."),(0,r.kt)("p",null,"This will then take the visitor to the checkout for that product or subscription."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The actual checkout fields shown for completion will vary dependent upon the configuration of the checkout template associated with the product or subscription."),(0,r.kt)("p",{parentName:"div"},"If the visitor is logged in to the WordPress site when visiting the checkout the email address for the purchase will be automatically populated and that cannot be modified. If the user is a ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," other checkout fields will also be automatically populated but these can be modified."))),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to checkout a Payment Module product or subscription",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_product_purchase_checkout.png"}),(0,r.kt)("figcaption",null,"Steps to checkout a Payment Module product or subscription")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"First Name"),". This is a required field."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign first name and billing_first_name fields.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"Last Name"),". This is a required field."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign last name and billing_last_name fields.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"Email")," address. This is a required field."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign email and billing_email fields.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"Phone")," number. This is a required field if displayed."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign phone and billing_phone fields.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"Company")," name. This is an optional field if displayed."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign billing_company field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"Street Address"),". This is a required field."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign billing_address_1 field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"Street Address 2"),". This is an optional field."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign billing_address_2 field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"Country"),". This is a required field."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign billing_country field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"City"),". This is a required field."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign billing_city field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"Postal Code"),". This is a required field."),(0,r.kt)("p",{parentName:"li"},"Upon a successful purchase this entry will update the ActiveCampaign billing_postcode field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"Card Number"),". This is a required field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their ",(0,r.kt)("strong",{parentName:"p"},"CVC")," code. This is a required field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their card expiry ",(0,r.kt)("strong",{parentName:"p"},"Month"),". This is a required field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor enters their card expiry ",(0,r.kt)("strong",{parentName:"p"},"Year"),". This is a required field.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor clicks the checkbox to confirm acceptance. This is a required field if displayed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The visitor clicks the ",(0,r.kt)("strong",{parentName:"p"},"Buy Now")," button to complete the purchase."))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A user does not need to be logged in to your site to make a purchase."),(0,r.kt)("p",{parentName:"div"},"However the login status of the user and whether they are an existing ActiveCampaign contact at the time of purchasing does influence the behaviour after a successful purchase."),(0,r.kt)("p",{parentName:"div"},"The following applies:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the visitor is ",(0,r.kt)("strong",{parentName:"p"},"not logged in")," and ",(0,r.kt)("strong",{parentName:"p"},"does not exist as a contact")," within ActiveCampaign prior to checkout after a successful purchase the visitor will be:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sent an invoice by email. The invoice will be as defined within ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/invoice-settings",title:"Click to learn how to configure the invoice settings of the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Payments, Settings, Invoices")),"."),(0,r.kt)("li",{parentName:"ul"},"Sent login credentials from WordPress using the email template defined in ",(0,r.kt)("a",{parentName:"li",href:"/settings/templates#login-credentials-email",title:"Click to learn how to configure the ActiveMember360 Email Templates for the login credentials email"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Templates, Login Credentials Email"))," if for that template ",(0,r.kt)("strong",{parentName:"li"},"Send login credentials")," is set to ",(0,r.kt)("strong",{parentName:"li"},"Yes"),"."),(0,r.kt)("li",{parentName:"ul"},"Created as a contact in ActiveCampaign with the email address as submitted at checkout and the contact fields match the information submitted on the checkout form."),(0,r.kt)("li",{parentName:"ul"},"Updated within ActiveCampaign with the payment actions applied to their contact for the product or subscription purchased as defined within ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/products#adding-products",title:"Click to learn how to configure the product redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Steps 13 to 18 in ActiveMember360, Modules, Payment, Products, Adding Products"))," or ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/subscriptions#adding-subscriptions",title:"Click to learn how to configure the subscription redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Steps 13 to 18 in ActiveMember360, Modules, Payment, Subscriptions, Adding Subscriptions"))," respectively."),(0,r.kt)("li",{parentName:"ul"},"Logged in to the site as a ",(0,r.kt)("a",{parentName:"li",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," but only if after the purchase they have at least one of the ActiveCampaign tags used to define a ",(0,r.kt)("a",{parentName:"li",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Membership"))," or if ",(0,r.kt)("a",{parentName:"li",href:"/settings/login#allow-login-without-a-membership-tag",title:"Click to learn how to allow a login if the contact does not have a membership tag"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Allow login without a membership tag"))," is set to ",(0,r.kt)("strong",{parentName:"li"},"Yes"),"."),(0,r.kt)("li",{parentName:"ul"},"Redirected to the URL for the product or subscription defined at ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/products#adding-products",title:"Click to learn how to configure the product redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Step 19 in Payment, Products, Adding Products"))," or ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/subscriptions#adding-subscriptions",title:"Click to learn how to configure the subscription redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Step 19 in Payment, Subscriptions, Adding Subscriptions"))," respectively."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the visitor is ",(0,r.kt)("strong",{parentName:"p"},"not logged in")," and ",(0,r.kt)("strong",{parentName:"p"},"does exist as a contact")," within ActiveCampaign prior to checkout after a successful purchase the visitor will be:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sent an invoice by email. The invoice will be as defined within ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/invoice-settings",title:"Click to learn how to configure the invoice settings of the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Payments, Settings, Invoices")),"."),(0,r.kt)("li",{parentName:"ul"},"Sent login credentials from WordPress using the email template defined in ",(0,r.kt)("a",{parentName:"li",href:"/settings/templates#login-credentials-email",title:"Click to learn how to configure the ActiveMember360 Email Templates for the login credentials email"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Templates, Login Credentials Email"))," if for that template ",(0,r.kt)("strong",{parentName:"li"},"Send login credentials")," is set to ",(0,r.kt)("strong",{parentName:"li"},"Yes"),"."),(0,r.kt)("li",{parentName:"ul"},"Updated within ActiveCampaign with the payment actions applied to their contact for the product or subscription purchased as defined within ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/products#adding-products",title:"Click to learn how to configure the product redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Steps 13 to 18 in ActiveMember360, Modules, Payment, Products, Adding Products"))," or ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/subscriptions#adding-subscriptions",title:"Click to learn how to configure the subscription redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Steps 13 to 18 in ActiveMember360, Modules, Payment, Subscriptions, Adding Subscriptions"))," respectively."),(0,r.kt)("li",{parentName:"ul"},"Not logged in to the site."),(0,r.kt)("li",{parentName:"ul"},"Redirected to the URL for the product or subscription defined at ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/products#adding-products",title:"Click to learn how to configure the product redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Step 20 in Payment, Products, Adding Products"))," or ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/subscriptions#adding-subscriptions",title:"Click to learn how to configure the subscription redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Step 20 in Payment, Subscriptions, Adding Subscriptions"))," respectively."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the visitor is logged in and does not exist as a contact within ActiveCampaign prior to checkout after a successful purchase the visitor will be:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Logged in to the site. However they will only be logged in as a ",(0,r.kt)("a",{parentName:"li",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," if after the purchase they have at least one of the ActiveCampaign tags define a ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360, Settings, Membership")," or Allow login without a membership tag"),(0,r.kt)("li",{parentName:"ul"},"Sent an invoice by email. The invoice will be as defined within ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/invoice-settings",title:"Click to learn how to configure the invoice settings of the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Payments, Settings, Invoices")),"."),(0,r.kt)("li",{parentName:"ul"},"Created as a contact in ActiveCampaign with the email address as submitted at checkout and ActiveCampaign contact data will be set with the information submitted on the checkout form."),(0,r.kt)("li",{parentName:"ul"},"Redirected to the URL for the product or subscription defined at ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/products#adding-products",title:"Click to learn how to configure the product redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Step 19 in Payment, Products, Adding Products"))," or ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/subscriptions#adding-subscriptions",title:"Click to learn how to configure the subscription redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Step 19 in Payment, Subscriptions, Adding Subscriptions"))," respectively. If no redirect is defined the visitor will be shown their order information."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the visitor is logged in and does exist as a contact within ActiveCampaign prior to checkout after a successful purchase the visitor will be:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sent an invoice by email. The invoice will be as defined within ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/invoice-settings",title:"Click to learn how to configure the invoice settings of the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Payments, Settings, Invoices")),"."),(0,r.kt)("li",{parentName:"ul"},"Updated within ActiveCampaign with the payment actions applied to their contact for the product or subscription purchased as defined within ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/products#adding-products",title:"Click to learn how to configure the product redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Steps 13 to 18 in ActiveMember360, Modules, Payment, Products, Adding Products"))," or ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/subscriptions#adding-subscriptions",title:"Click to learn how to configure the subscription redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Steps 13 to 18 in ActiveMember360, Modules, Payment, Subscriptions, Adding Subscriptions"))," respectively."),(0,r.kt)("li",{parentName:"ul"},"Logged in to the site."),(0,r.kt)("li",{parentName:"ul"},"Redirected to the URL for the product or subscription defined at ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/products#adding-products",title:"Click to learn how to configure the product redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Step 19 in Payment, Products, Adding Products"))," or ",(0,r.kt)("a",{parentName:"li",href:"/modules/payment/subscriptions#adding-subscriptions",title:"Click to learn how to configure the subscription redirects within the ActiveMember360 Payment module"},(0,r.kt)("strong",{parentName:"a"},"Step 19 in Payment, Subscriptions, Adding Subscriptions"))," respectively.")))))))}u.isMDXComponent=!0}}]);