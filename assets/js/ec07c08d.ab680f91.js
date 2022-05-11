"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20117],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(o),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||c;return o?n.createElement(h,a(a({ref:t},u),{},{components:o})):n.createElement(h,a({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=o.length,a=new Array(c);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},67077:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var n=o(87462),r=o(63366),c=(o(67294),o(3905)),a=["components"],i={id:"account-creation",title:"WooCommerce Account Creation",description:"Overview of WooCommerce and ActiveMember360 WooCommerce Extension.",sidebar_label:"WooCommerce Account Creation"},s=void 0,l={unversionedId:"extensions/woocommerce/account-creation",id:"extensions/woocommerce/account-creation",title:"WooCommerce Account Creation",description:"Overview of WooCommerce and ActiveMember360 WooCommerce Extension.",source:"@site/docs/extensions/woocommerce/account-creation.mdx",sourceDirName:"extensions/woocommerce",slug:"/extensions/woocommerce/account-creation",permalink:"/extensions/woocommerce/account-creation",tags:[],version:"current",lastUpdatedAt:1649343975,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"account-creation",title:"WooCommerce Account Creation",description:"Overview of WooCommerce and ActiveMember360 WooCommerce Extension.",sidebar_label:"WooCommerce Account Creation"}},u={},m=[{value:"Documentation currently under review to be released soon.",id:"documentation-currently-under-review-to-be-released-soon",level:2}],p={toc:m};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("figure",null,(0,c.kt)("img",{alt:"WooCommerce Logo",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/woocommerce_featured.png"})),(0,c.kt)("h2",{id:"documentation-currently-under-review-to-be-released-soon"},"Documentation currently under review to be released soon."),(0,c.kt)("p",null,"WooCommerce does not allow the purchase of subscription products using the WooCommerce Guest checkout. A user account must always be created to purchase subscription products."),(0,c.kt)("p",null,"For that reason we recommend the settings as shown in the attached image in WooCommerce, Settings, Accounts & Privacy."),(0,c.kt)("p",null,"The setting When creating an account, automatically generate an account password is enforced by ActiveMember360 automatically."),(0,c.kt)("p",null,"WooCommerce creates the user within WordPress prior to order completion. It also send out a new user email with login credentials for the site."),(0,c.kt)("p",null,"When WooCommerce creates an order a WordPress user a contact is created within ActiveCampaign."),(0,c.kt)("p",null,"For each order ActiveMember360 stores:"),(0,c.kt)("p",null,"Order status actions supported for products including product variations"),(0,c.kt)("p",null,"When using LearnDash we recommend also using the LearnDash WooCommerce plugin in conjunction with"),(0,c.kt)("p",null,"If you are using WooCommerce and the LearnDash LMS - WooCommerce Integration plugin we would recommend that you also use an ActiveCampaign tag to control access/enrolment in the course by ActiveMember360."),(0,c.kt)("p",null,"That tag would be added to the contact automatically by ActiveMember360 after a successful purchase from WooCommerce. That tag is specified for any WooCommerce product when creating/editing a product from within in the ActiveMember360 tab in the WooCommerce Product sidebar."),(0,c.kt)("p",null,"Then the course access should also be configured in the ActiveMember360 panel for the course to be for those with that tag."),(0,c.kt)("p",null,"By using that process there will be no inconsistencies regarding course enrolment and access."),(0,c.kt)("p",null,"For every relevant WooCommerce order process or subscription status change you may wish to add and/or remove tags, run action sets, and/or achieve goals."),(0,c.kt)("p",null,"You can also enable tag based alternate pricing, and abandoned cart processes."),(0,c.kt)("p",null,"The products/services purchased can be logged as tags."),(0,c.kt)("p",null,"We also store to ActiveCampaign the current billing information, and also place a note of the contacts record of their purchase with a link back to WooCommerce order records."),(0,c.kt)("p",null,"Upon being enabled it will create the following contact fields in ActiveCampaign:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"billing_email\nbilling_first_name\nbilling_last_name\nbilling_company\nbilling_address_1\nbilling_address_2\nbilling_city\nbilling_state\nbilling_postcode\nbilling_country\nbilling_phone\n")),(0,c.kt)("p",null,"There are some global settings for the ActiveMember360 WooCommerce Extension which are accessible from WooCommerce, Settings, Integrations, ActiveMember360."),(0,c.kt)("p",null,"Their purpose are detailed there."),(0,c.kt)("p",null,"Upon a successful purchase a contact will be created or updated in ActiveCampaign with the first name, last name, email and password from WordPress."),(0,c.kt)("p",null,"Also the contact fields named billing_xxxxx as detailed above will be created/updated in ActiveCampaign to reflect the last purchase. A note is placed in the ActiveCampaign contact record of their purchase with a link back to the WooCommerce order records."),(0,c.kt)("p",null,"WooCommerce does not allow the purchase of subscription products using the WooCommerce Guest checkout. A user account must always be created to purchase subscription products."),(0,c.kt)("p",null,"WooCommerce creates the user within WordPress prior to order completion. It also send out a new user email with login credentials for the site."),(0,c.kt)("p",null,"In addition there are a whole series of actions that can be performed upon by ActiveMember360 on a WooCommerce status change."),(0,c.kt)("p",null,"We also have a single shortcode that will add a WooCommerce product to your cart and automatically take you to the checkout page."),(0,c.kt)("p",null,"This is ","[mbr_quick_checkout]"),(0,c.kt)("p",null,"Please see: ",(0,c.kt)("a",{parentName:"p",href:"https://activemember360.com/docs/mbr_quick_checkout/"},"https://activemember360.com/docs/mbr_quick_checkout/")),(0,c.kt)("p",null,"So using this from your sales page you could send users directly to the checkout, without having to view the cart."))}d.isMDXComponent=!0}}]);