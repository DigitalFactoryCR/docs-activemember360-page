"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55600],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),k=i,y=u["".concat(p,".").concat(k)]||u[k]||m[k]||o;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},93287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={id:"support-reply",title:"Support Review/Reply To A Ticket",description:"How support staff manage and reply to tickets using the Ticket System module",sidebar_label:"Support Review/Reply To A Ticket"},a=void 0,s={unversionedId:"modules/ticket-system/support-reply",id:"modules/ticket-system/support-reply",title:"Support Review/Reply To A Ticket",description:"How support staff manage and reply to tickets using the Ticket System module",source:"@site/docs/modules/ticket-system/support-reply.mdx",sourceDirName:"modules/ticket-system",slug:"/modules/ticket-system/support-reply",permalink:"/modules/ticket-system/support-reply",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"support-reply",title:"Support Review/Reply To A Ticket",description:"How support staff manage and reply to tickets using the Ticket System module",sidebar_label:"Support Review/Reply To A Ticket"},sidebar:"modules",previous:{title:"Contact Submits A Ticket",permalink:"/modules/ticket-system/submit"},next:{title:"Contact Reviews/Replies To A Ticket",permalink:"/modules/ticket-system/contact-reply"}},p={},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When a contact submits a ticket depending upon the chosen settings in ",(0,i.kt)("a",{parentName:"p",href:"/modules/ticket-system/notifications",title:"Click to learn how to configure the notifications settings of the Ticket System module"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Ticket Settings, Notifications"))," the support staff will receive a browser push notification."),(0,i.kt)("p",{parentName:"li"},"If support staff are currently logged in to the site they will also see a notification within WordPress."),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"Ticket System Module My Tickets Screen",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_tickets.png"}),(0,i.kt)("figcaption",null,"Ticket System Module Tickets Screen"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When logged in the support staff can see the listing of all tickets by clicking on ",(0,i.kt)("strong",{parentName:"p"},"Tickets")," in the WordPress administrator main navigation."),(0,i.kt)("p",{parentName:"li"},"Tickets that have a reply will have the status ",(0,i.kt)("strong",{parentName:"p"},"Answered")," or ",(0,i.kt)("strong",{parentName:"p"},"Closed"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Open")," tickets will always be awaiting a reply.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Support staff can initiate a reply to, or review, any ticket irrespective of the current ticket status by clicking on ",(0,i.kt)("strong",{parentName:"p"},"View")," of the relevant ticket."),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"Ticket System Module Support Reply Form",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_reply_support.png"}),(0,i.kt)("figcaption",null,"Ticket System Module Support Reply Form"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the reply.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Reply"),"."),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"Ticket System Module Reply Success Message",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_reply_support_success.png"}),(0,i.kt)("figcaption",null,"Ticket System Module Reply Success Message"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The reply will be submitted and a success message shown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ticket status will be cahnged automatically to ",(0,i.kt)("strong",{parentName:"p"},"Answered"),"."),(0,i.kt)("p",{parentName:"li"},"Depending upon the chosen settings in ",(0,i.kt)("a",{parentName:"p",href:"/modules/ticket-system/notifications",title:"Click to learn how to configure the notifications settings of the Ticket System module"},(0,i.kt)("strong",{parentName:"a"},"Tickets, Settings, Notifications")),", the contact will receive a browser push notification, and/or an email when the reply is successfully submitted."))))}m.isMDXComponent=!0}}]);