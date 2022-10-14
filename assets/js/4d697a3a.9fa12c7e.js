"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79337],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),v=i,u=d["".concat(s,".").concat(v)]||d[v]||p[v]||r;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),i=n(67294),r=n(72389),o=n(63725),l=n(86010),s="tabItem_LplD";function c(e){var t,n,r,c=e.lazy,m=e.block,p=e.defaultValue,d=e.values,v=e.groupId,u=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==f&&!k.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.UB)(),b=N.tabGroupChoices,w=N.setTabGroupChoices,y=(0,i.useState)(f),C=y[0],T=y[1],A=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var W=b[v];null!=W&&W!==C&&k.some((function(e){return e.value===W}))&&T(W)}var M=function(e){var t=e.currentTarget,n=A.indexOf(t),a=k[n].value;a!==C&&(E(t),T(a),null!=v&&w(v,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var i=A.indexOf(e.currentTarget)-1;n=A[i]||A[A.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},u)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return A.push(e)},onKeyDown:S,onFocus:M,onClick:M},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),c?(0,i.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},71477:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return v}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(9877),l=n(58215),s=["components"],c={id:"activecampaign-tracking",title:"ActiveCampaign Tracking Module",description:"How ActiveMember360 can be integrated with ActiveCampaign site and event tracking",sidebar_label:"ActiveCampaign Tracking"},m=void 0,p={unversionedId:"modules/activecampaign-tracking",id:"modules/activecampaign-tracking",title:"ActiveCampaign Tracking Module",description:"How ActiveMember360 can be integrated with ActiveCampaign site and event tracking",source:"@site/docs/modules/activecampaign-tracking.mdx",sourceDirName:"modules",slug:"/modules/activecampaign-tracking",permalink:"/modules/activecampaign-tracking",tags:[],version:"current",lastUpdatedAt:1665751408,formattedLastUpdatedAt:"10/14/2022",frontMatter:{id:"activecampaign-tracking",title:"ActiveCampaign Tracking Module",description:"How ActiveMember360 can be integrated with ActiveCampaign site and event tracking",sidebar_label:"ActiveCampaign Tracking"},sidebar:"modules",previous:{title:"Modules",permalink:"/modules"},next:{title:"Alternate Membership Menus",permalink:"/modules/alternate-membership-menus"}},d={},v=[{value:"Overview",id:"overview",level:2},{value:"Activation",id:"activation",level:2},{value:"Site Tracking",id:"site-tracking",level:2},{value:"Event Tracking",id:"event-tracking",level:2},{value:"Standard Events",id:"standard-events",level:3},{value:"WooCommerce Events",id:"woocommerce-events",level:3},{value:"DOM Events",id:"dom-events",level:3},{value:"onClick",id:"onclick",level:4},{value:"onSubmit",id:"onsubmit",level:4},{value:"Shortcode",id:"shortcode",level:3}],u={toc:v};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"ActiveCampaign supports several tracking features including site and event tracking."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Site Tracking")," is a powerful feature that connects your ActiveCampaign marketing and sales processes to activity on your website. It allows ActiveCampaign to track and log that website activity and then trigger and control actions in real-time as contacts visit your site and view specific pages."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Event Tracking")," allows you to collect data on a wide variety of contact behavior. You can create an event for many activities on your website and assign it a value and store that within ActiveCampaign. The captured event data can then be used to improve your marketing and sales processes as well as to trigger and control automations, create segment conditions, and personalise campaigns."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 ActiveCampaign Tracking")," module fully integrates ActiveCampaign site and event tracking with your WordPress website."),(0,r.kt)("p",null,"It allows any users to implement ActiveCampaign event tracking without the need for Javascript development expertise nor API and PHP skills."),(0,r.kt)("h2",{id:"activation"},"Activation"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to activate ActiveCampaign Tracking module",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/activecampaign_tracking_module_activation.png"}),(0,r.kt)("figcaption",null,"Steps to activate ActiveCampaign Tracking module")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360, Modules"),"."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360 Modules")," tabs click ",(0,r.kt)("strong",{parentName:"li"},"ActiveCampaign Tracking"),"."),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Enable the ActiveCampaign Tracking module")," to ",(0,r.kt)("strong",{parentName:"li"},"Yes/On"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,r.kt)("h2",{id:"site-tracking"},"Site Tracking"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to activate ActiveCampaign Tracking module for site tracking",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/activecampaign_tracking_module_activation_site_tracking.png"}),(0,r.kt)("figcaption",null,"Steps to activate ActiveCampaign Tracking module for site tracking")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360, Modules"),"."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360 Modules")," tabs click ",(0,r.kt)("strong",{parentName:"li"},"ActiveCampaign Tracking"),"."),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Enable Site Tracking")," to ",(0,r.kt)("strong",{parentName:"li"},"Yes/On"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,r.kt)("p",null,"Once ",(0,r.kt)("strong",{parentName:"p"},"Site Tracking")," is enabled ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," will include the ActiveCampaign site tracking code into your site for all WordPress URLs."),(0,r.kt)("p",null,"For logged in users the email address will also be set for the tracking code."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For ActiveCampaign site tracking to function you must ensure that within your ActiveCampaign application under ",(0,r.kt)("strong",{parentName:"p"},"Settings, Tracking, Site Tracking")," is enabled irrespective of the settings in ActiveMember360."),(0,r.kt)("p",{parentName:"div"},"Also the root domain/subdomain of your site must be whitelisted for site tracking within ActiveCampaign under ",(0,r.kt)("strong",{parentName:"p"},"Settings, Tracking, Whitelist and Install Code, Website URL")," and ",(0,r.kt)("strong",{parentName:"p"},"Include all website pages")," checked."),(0,r.kt)("p",{parentName:"div"},"If the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 ActiveCampaign Tracking Module")," is enabled for ",(0,r.kt)("strong",{parentName:"p"},"Site Tracking")," you should ensure that neither the ActiveCampaign WordPress plugin is enabled to install the ActiveCampaign site tracking code, nor any other service or plugin that does the same."),(0,r.kt)("p",{parentName:"div"},"To include the site tracking code more than once will result in inaccurate tracking statistics."),(0,r.kt)("p",{parentName:"div"},"When the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 ActiveCampaign Tracking Module")," is enabled for ",(0,r.kt)("strong",{parentName:"p"},"Site Tracking")," it will automatically add the logged in users email address to the tracking code."))),(0,r.kt)("h2",{id:"event-tracking"},"Event Tracking"),(0,r.kt)("p",null,"To enable/activate Event Tracking, follow the steps indicated below:"),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to activate ActiveCampaign Tracking module for event tracking",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/activecampaign_tracking_module_activation_event_tracking.png"}),(0,r.kt)("figcaption",null,"Steps to activate ActiveCampaign Tracking module for event tracking")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360, Modules"),"."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360 Modules")," tabs click ",(0,r.kt)("strong",{parentName:"li"},"ActiveCampaign Tracking"),"."),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Enable Event Tracking")," to ",(0,r.kt)("strong",{parentName:"li"},"Yes/On"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Site Tracking module does not need to be enabled to use the Event Tracking module."),(0,r.kt)("p",{parentName:"div"},"Enabling Event Tracking in ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," will automatically enable Event Tracking in ActiveCampaign under ",(0,r.kt)("strong",{parentName:"p"},"Settings, Tracking, Event Tracking"),"."))),(0,r.kt)("h3",{id:"standard-events"},"Standard Events"),(0,r.kt)("p",null,"When ",(0,r.kt)("strong",{parentName:"p"},"Event Tracking")," tracking is enabled some predefined WordPress events can be configured for tracking."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to configure ActiveCampaign Tracking module for event tracking of standard WordPress events",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/activecampaign_tracking_module_event_tracking_standard.png"}),(0,r.kt)("figcaption",null,"Steps to configure ActiveCampaign Tracking module for event tracking of standard WordPress events")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360, Modules"),"."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360 Modules")," tabs click ",(0,r.kt)("strong",{parentName:"li"},"ActiveCampaign Tracking"),"."),(0,r.kt)("li",{parentName:"ol"},"Ensure ",(0,r.kt)("strong",{parentName:"li"},"Enable Event Tracking")," is set to ",(0,r.kt)("strong",{parentName:"li"},"Yes/On")," and navigate to ",(0,r.kt)("strong",{parentName:"li"},"Standard Events")," section."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Login Event")," input specify an event name of your choice to identify the login events of your contacts. This event name will have an event value showing the domain of the successful login."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Logout Event")," input specify an event name of your choice to identify the logout events of your contacts. This event name will have an event value showing the domain of the successful logout."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Registration Event")," input specify an event name of your choice to identify the new WordPress user registration event for your contacts. This event name will have an event value showing the domain of the successful user registration."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Any event name unspecified, i.e. left blank, will be ignored and no event logging will take place for that event."),(0,r.kt)("p",{parentName:"div"},"Your specified events will be automatically created within ActiveCampaign. However they will not appear under ",(0,r.kt)("strong",{parentName:"p"},"Settings, Tracking, Event Tracking, Event")," until they have been tracked and logged at least once."),(0,r.kt)("p",{parentName:"div"},"For the ",(0,r.kt)("strong",{parentName:"p"},"Registration Event")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the new user is added to WordPress by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," during their first successful login process that will show as a Registration event. The Login event will also be logged if configured.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you allow the user to register in WordPress using the native WordPress registration process that will show as a Registration event. Please note we do not recommend the use of this method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are running WooCommerce and the user is created in WordPress after a successful purchase that will show as a Registration event."))))),(0,r.kt)("h3",{id:"woocommerce-events"},"WooCommerce Events"),(0,r.kt)("p",null,"When WooCommerce is installed and activated, and the ",(0,r.kt)("a",{parentName:"p",href:"/extensions/woocommerce/overview",title:"Click to learn how to use the ActiveMember360 WooCommerce Extension"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 WooCommerce Extension"))," is also enabled, some predefined events based upon WooCommerce order status can be configured for tracking."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to configure ActiveCampaign Tracking module for event tracking of WooCommerce events",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/activecampaign_tracking_module_event_tracking_woocommerce.png"}),(0,r.kt)("figcaption",null,"Steps to configure ActiveCampaign Tracking module for event tracking of WooCommerce events")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360, Modules"),"."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"ActiveMember360 Modules")," tabs click ",(0,r.kt)("strong",{parentName:"li"},"ActiveCampaign Tracking"),"."),(0,r.kt)("li",{parentName:"ol"},"Ensure ",(0,r.kt)("strong",{parentName:"li"},"Enable Event Tracking")," is set to ",(0,r.kt)("strong",{parentName:"li"},"Yes/On")," and navigate to ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Events")," section."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Payment Completed Event")," input specify an event name of your choice to identify the event when a WooCommerce Payment is completed for your contacts. This event name will have an event value showing the WooCommerce Order ID."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Purchased Product Event")," input specify an event name of your choice to identify the event when a WooCommerce Product is purchased by your contacts. This event will be logged twice in ActiveCampaign, one event value showing the WooCommerce Product ID and the second event value showing the WooCommerce Product Name."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Pending Payment Event")," input specify an event name of your choice to identify the event when a WooCommerce Pending Payment Order Status is set for your contacts. This event name will have an event value showing the WooCommerce Order ID."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Processing Event")," input specify an event name of your choice to to identify the event when a WooCommerce Processing Order Status is set for your contacts. This event name will have an event value showing the WooCommerce Order ID."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce On Hold Event")," input specify an event name of your choice to to identify the event when a WooCommerce On Hold Order Status is set for your contacts. This event name will have an event value showing the WooCommerce Order ID."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Completed Event")," input specify an event name of your choice to to identify the event when a WooCommerce Completed Order Status is set for your contacts. This event name will have an event value showing the WooCommerce Order ID."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Cancelled Event")," input specify an event name of your choice to to identify the event when a WooCommerce Cancelled Order Status is set for your contacts. This event name will have an event value showing the WooCommerce Order ID."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Refunded Event")," input specify an event name of your choice to to identify the event when a WooCommerce Refunded Order Status is set for your contacts. This event name will have an event value showing the WooCommerce Order ID."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Failed Event")," input specify an event name of your choice to to identify the event when a WooCommerce Failed Order Status is set for your contacts. This event name will have an event value showing the WooCommerce Order ID."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"WooCommerce Draft Event")," input specify an event name of your choice to to identify the event when a WooCommerce Draft Order Status is set for your contacts. This event name will have an event value showing the WooCommerce Order ID."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Any event name unspecified, i.e. left blank, will be ignored and no event logging will take place for that event."),(0,r.kt)("p",{parentName:"div"},"Your specified events will be automatically created within ActiveCampaign. However they will not appear under ",(0,r.kt)("strong",{parentName:"p"},"Settings, Tracking, Event Tracking, Event")," until they have been tracked and logged at least once."))),(0,r.kt)("h3",{id:"dom-events"},"DOM Events"),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("strong",{parentName:"p"},"Standard Events")," and ",(0,r.kt)("strong",{parentName:"p"},"WooCommerce Events")," supported by the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 ActiveCampaign Tracking")," module events can also be tracked and logged in ActiveCampaign for logged in users who exist as contacts within ActiveCampaign using ",(0,r.kt)("strong",{parentName:"p"},"onClick")," and ",(0,r.kt)("strong",{parentName:"p"},"onSubmit")," DOM (Document Object Model) events."),(0,r.kt)("h4",{id:"onclick"},"onClick"),(0,r.kt)("p",null,"To define/set an ",(0,r.kt)("strong",{parentName:"p"},"onClick")," logging event for any DOM HTML element that supports ",(0,r.kt)("strong",{parentName:"p"},"onClick")," use the HTML5\ndata attributes ",(0,r.kt)("inlineCode",{parentName:"p"},"data-mbr-eventname")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data-mbr-eventvalue"),"."),(0,r.kt)(o.Z,{groupId:"onclick-examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,r.kt)("p",null,"When the link is clicked create an ActiveCampaign event with the name ",(0,r.kt)("strong",{parentName:"p"},"clicked-image")," and log the event in the ActiveCampaign contact record with an event value of ",(0,r.kt)("strong",{parentName:"p"},"logo.png"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<img src="logo.png" data-mbr-eventvalue="logo.png" data-mbr-eventname="clicked-image">\n'))),(0,r.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,r.kt)("p",null,"When the link is clicked create an ActiveCampaign event with the name ",(0,r.kt)("strong",{parentName:"p"},"clicked-link")," and log the event in the ActiveCampaign contact record with an event value of ",(0,r.kt)("strong",{parentName:"p"},"download info.pdf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="https://yoursite.com/info.pdf" data-mbr-eventvalue="download info.pdf" data-mbr-eventname="clicked-link">\n')))),(0,r.kt)("h4",{id:"onsubmit"},"onSubmit"),(0,r.kt)("p",null,"To define/set an ",(0,r.kt)("strong",{parentName:"p"},"onSubmit")," logging event for a HTML form use the HTML5 data attributes ",(0,r.kt)("inlineCode",{parentName:"p"},"data-mbr-form-eventname")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"data-mbr-form-eventvalue"),"."),(0,r.kt)(o.Z,{groupId:"onsubmit-examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,r.kt)("p",null,"When the form is submitted create an ActiveCampaign event with the name ",(0,r.kt)("strong",{parentName:"p"},"submitted-form")," and log the event in the ActiveCampaign contact record with an event value of ",(0,r.kt)("strong",{parentName:"p"},"submitted update form"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<form data-mbr-form-eventvalue="submitted update form" data-mbr-form-eventname="submitted-form">\n  . *form elements* .\n</form>\n')))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("strong",{parentName:"p"},"onSubmit")," event is triggered and logged immediately upon submission of the form irrespective of whether the form submitted successfully i.e. before any form validation takes place."))),(0,r.kt)("h3",{id:"shortcode"},"Shortcode"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," shortcode ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_log_event",title:"Click to learn how to use the [mbr_log_event] shortcode"},(0,r.kt)("strong",{parentName:"a"},"[mbr_log_event]"))," is also available for event tracking when a logged in contact visits a page or post."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"[mbr_log_event]")," shortcode is detailed in ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_log_event",title:"Click to learn how to use the [mbr_log_event] shortcode"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, mbr_log_event")),"."))}g.isMDXComponent=!0}}]);