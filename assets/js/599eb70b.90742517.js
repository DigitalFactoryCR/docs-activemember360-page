"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},30796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={id:"contact-reply",title:"Contact Reviews/Replies To A Ticket",description:"How a contact manages and replies to a ticket using the Ticket System module",sidebar_label:"Contact Reviews/Replies To A Ticket"},o=void 0,c={unversionedId:"modules/ticket-system/contact-reply",id:"modules/ticket-system/contact-reply",title:"Contact Reviews/Replies To A Ticket",description:"How a contact manages and replies to a ticket using the Ticket System module",source:"@site/docs/modules/ticket-system/contact-reply.mdx",sourceDirName:"modules/ticket-system",slug:"/modules/ticket-system/contact-reply",permalink:"/modules/ticket-system/contact-reply",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"contact-reply",title:"Contact Reviews/Replies To A Ticket",description:"How a contact manages and replies to a ticket using the Ticket System module",sidebar_label:"Contact Reviews/Replies To A Ticket"},sidebar:"modules",previous:{title:"Support Review/Reply To A Ticket",permalink:"/modules/ticket-system/support-reply"},next:{title:"Support Close A Ticket",permalink:"/modules/ticket-system/close"}},s={},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When a reply is provided to a ticket, depending upon the chosen settings in ",(0,r.kt)("a",{parentName:"p",href:"/modules/ticket-system/notifications",title:"Click to learn how to configure the notifications settings of the Ticket System module"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Ticket Settings, Notifications")),", the contact will receive a browser push notification, and/or an email."),(0,r.kt)("p",{parentName:"li"},"If they are logged in to the site they can also check if a ticket has any replies from their own ",(0,r.kt)("strong",{parentName:"p"},"My Tickets")," dashboard.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To access tickets the contact must visit the main endpoint URL as defined in ",(0,r.kt)("a",{parentName:"p",href:"/modules/ticket-system/general",title:"Click to learn how to configure the general settings of the Ticket System module"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Ticket Settings, General, Main Endpoint")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the contact is not logged in they will be shown a login form and must login."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Ticket System Module Login Screen",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_login.png"}),(0,r.kt)("figcaption",null,"Ticket System Module Login Screen"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When logged in the contact will be shown their own ",(0,r.kt)("strong",{parentName:"p"},"My Tickets")," dashboard."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Ticket System Module My Tickets Dashboard Screen",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_dashboard.png"}),(0,r.kt)("figcaption",null,"Ticket System Module My Tickets Dashboard Screen")),(0,r.kt)("p",{parentName:"li"},"Here all tickets relating to that contact are listed."),(0,r.kt)("p",{parentName:"li"},"Tickets that have a reply will have the status ",(0,r.kt)("strong",{parentName:"p"},"Answered")," or ",(0,r.kt)("strong",{parentName:"p"},"Closed"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open")," tickets will always be awaiting a reply.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Contacts can initiate a reply to, or review, any ticket irrespective of the current ticket status."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Ticket System Module contact Ticket Review Screen",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_reply_contact.png"}),(0,r.kt)("figcaption",null,"Ticket System Module contact Ticket Review Screen"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First they must access the ticket by clicking on the ticket name in the ",(0,r.kt)("strong",{parentName:"p"},"My Tickets")," dashboard listing."),(0,r.kt)("p",{parentName:"li"},"This then opens the ticket reply URL in the browser."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Ticket System Module contact Reply Form",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_reply_contact_form.png"}),(0,r.kt)("figcaption",null,"Ticket System Module contact Reply Form"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the reply.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Submit"),"."),(0,r.kt)("p",{parentName:"li"},"The reply will be submitted and a success message shown."),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Ticket System Module Reply Success Message",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_reply_contact_success.png"}),(0,r.kt)("figcaption",null,"Ticket System Module Reply Success Message")))))}u.isMDXComponent=!0}}]);