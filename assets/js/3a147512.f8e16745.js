"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4760],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,v=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return a?i.createElement(v,l(l({ref:t},m),{},{components:a})):i.createElement(v,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4699:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),l=["components"],o={id:"overview",title:"Mailer Module",description:"ActiveMember360 allows emails to be sent from ActiveCampaign using SMTP mail providers rather than ActiveCampaign directly",sidebar_label:"Overview"},s=void 0,u={unversionedId:"modules/mailer/overview",id:"modules/mailer/overview",title:"Mailer Module",description:"ActiveMember360 allows emails to be sent from ActiveCampaign using SMTP mail providers rather than ActiveCampaign directly",source:"@site/docs/modules/mailer/overview.mdx",sourceDirName:"modules/mailer",slug:"/modules/mailer/overview",permalink:"/modules/mailer/overview",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"overview",title:"Mailer Module",description:"ActiveMember360 allows emails to be sent from ActiveCampaign using SMTP mail providers rather than ActiveCampaign directly",sidebar_label:"Overview"},sidebar:"modules",previous:{title:"Custom Shortcodes",permalink:"/modules/custom-shortcodes"},next:{title:"Activation",permalink:"/modules/mailer/activate"}},m={},c=[{value:"Overview",id:"overview",level:2},{value:"Activation",id:"activation",level:2},{value:"Settings &amp; Gateways",id:"settings--gateways",level:2},{value:"Use Cases",id:"use-cases",level:2}],p={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The purpose of the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 Mailer")," module is for those who wish to send emails from ActiveCampaign automations using their own SMTP mail provider rather than ActiveCampaign."),(0,r.kt)("p",null,"There could be many reasons not to use the native ActiveCampaign email service for certain emails."),(0,r.kt)("p",null,"SMTP services which can be used with the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 Mailer")," module include but are not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amazon SES"),(0,r.kt)("li",{parentName:"ul"},"Gmail"),(0,r.kt)("li",{parentName:"ul"},"Outlook"),(0,r.kt)("li",{parentName:"ul"},"Mailgun"),(0,r.kt)("li",{parentName:"ul"},"Mailjet"),(0,r.kt)("li",{parentName:"ul"},"Mandrill"),(0,r.kt)("li",{parentName:"ul"},"Moosend"),(0,r.kt)("li",{parentName:"ul"},"Postmark"),(0,r.kt)("li",{parentName:"ul"},"SendGrid"),(0,r.kt)("li",{parentName:"ul"},"Sendinblue"),(0,r.kt)("li",{parentName:"ul"},"SMTP.com"),(0,r.kt)("li",{parentName:"ul"},"SparkPost")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 Mailer")," module can use any chosen ActiveCampaign email template for sending the email."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 Mailer")," module will control the unsubscribe link in any email it sends and the unsubcribe/optout functions."),(0,r.kt)("p",null,"The sending of an email to a specific ActiveCampaign contact using the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 Mailer")," module is achieved by using a webhook within an ActiveCampaign automation."),(0,r.kt)("h2",{id:"activation"},"Activation"),(0,r.kt)("p",null,"How to activate the Mailer module is detailed here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/modules/mailer/activate",title:"Click to learn how to activate the Mailer module"},(0,r.kt)("strong",{parentName:"a"},"Activate the Mailer module")))),(0,r.kt)("h2",{id:"settings--gateways"},"Settings & Gateways"),(0,r.kt)("p",null,"How to configure the Mailer module settings and SMTP gateways is detailed here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/modules/mailer/settings-gateways",title:"Click to learn how to configure Mailer module settings and SMTP gateways"},(0,r.kt)("strong",{parentName:"a"},"Configure Mailer module settings and SMTP gateways")))),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"How to create and select an ActiveCampaign email template to use is detailed here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/modules/mailer/email-templates",title:"Click to learn how to use an ActiveCampaign Email Template with the Mailer module"},(0,r.kt)("strong",{parentName:"a"},"Use an ActiveCampaign Email Template with the Mailer module")))),(0,r.kt)("p",null,"How to configure unsubscribe/optout settings is detailed here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/modules/mailer/email-optout",title:"Click to learn how to control the Unsubscribe/OptOut process for emails sent by the Mailer module"},(0,r.kt)("strong",{parentName:"a"},"Control the Unsubscribe/OptOut process for emails sent by the Mailer module")))),(0,r.kt)("p",null,"How to send an email using the Mailer module is detailed here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/modules/mailer/email-send",title:"Click to learn how to send an email using the Mailer module from an ActiveCampaign automation"},(0,r.kt)("strong",{parentName:"a"},"Send an email using the Mailer module from an ActiveCampaign automation")))),(0,r.kt)("p",null,"How to test or debug is detailed here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/modules/mailer/email-testing",title:"Click to learn how to test the Mailer module webhook URL for sending emails"},(0,r.kt)("strong",{parentName:"a"},"Test the Mailer module webhook URL for sending emails")))))}d.isMDXComponent=!0}}]);