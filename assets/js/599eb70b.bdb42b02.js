"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29420],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),k=r,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return n?i.createElement(d,a(a({ref:t},p),{},{components:n})):i.createElement(d,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],c={id:"contact-reply",title:"Contact Reviews/Replies To A Ticket",description:"How a contact manages and replies to a ticket using the Ticket System module",sidebar_label:"Contact Reviews/Replies To A Ticket"},s=void 0,l={unversionedId:"modules/ticket-system/contact-reply",id:"modules/ticket-system/contact-reply",title:"Contact Reviews/Replies To A Ticket",description:"How a contact manages and replies to a ticket using the Ticket System module",source:"@site/docs/modules/ticket-system/contact-reply.mdx",sourceDirName:"modules/ticket-system",slug:"/modules/ticket-system/contact-reply",permalink:"/modules/ticket-system/contact-reply",tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"contact-reply",title:"Contact Reviews/Replies To A Ticket",description:"How a contact manages and replies to a ticket using the Ticket System module",sidebar_label:"Contact Reviews/Replies To A Ticket"},sidebar:"modules",previous:{title:"Support Review/Reply To A Ticket",permalink:"/modules/ticket-system/support-reply"},next:{title:"Support Close A Ticket",permalink:"/modules/ticket-system/close"}},p={},m=[],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When a reply is provided to a ticket, depending upon the chosen settings in ",(0,o.kt)("a",{parentName:"p",href:"/modules/ticket-system/notifications",title:"Click to learn how to configure the notifications settings of the Ticket System module"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Ticket Settings, Notifications")),", the contact will receive a browser push notification, and/or an email."),(0,o.kt)("p",{parentName:"li"},"If they are logged in to the site they can also check if a ticket has any replies from their own ",(0,o.kt)("strong",{parentName:"p"},"My Tickets")," dashboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To access tickets the contact must visit the main endpoint URL as defined in ",(0,o.kt)("a",{parentName:"p",href:"/modules/ticket-system/general",title:"Click to learn how to configure the general settings of the Ticket System module"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Ticket Settings, General, Main Endpoint")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the contact is not logged in they will be shown a login form and must login."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Ticket System Module Login Screen",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_login.png"}),(0,o.kt)("figcaption",null,"Ticket System Module Login Screen"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When logged in the contact will be shown their own ",(0,o.kt)("strong",{parentName:"p"},"My Tickets")," dashboard."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Ticket System Module My Tickets Dashboard Screen",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_dashboard.png"}),(0,o.kt)("figcaption",null,"Ticket System Module My Tickets Dashboard Screen")),(0,o.kt)("p",{parentName:"li"},"Here all tickets relating to that contact are listed."),(0,o.kt)("p",{parentName:"li"},"Tickets that have a reply will have the status ",(0,o.kt)("strong",{parentName:"p"},"Answered")," or ",(0,o.kt)("strong",{parentName:"p"},"Closed"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Open")," tickets will always be awaiting a reply.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Contacts can initiate a reply to, or review, any ticket irrespective of the current ticket status."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Ticket System Module contact Ticket Review Screen",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_reply_contact.png"}),(0,o.kt)("figcaption",null,"Ticket System Module contact Ticket Review Screen"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"First they must access the ticket by clicking on the ticket name in the ",(0,o.kt)("strong",{parentName:"p"},"My Tickets")," dashboard listing."),(0,o.kt)("p",{parentName:"li"},"This then opens the ticket reply URL in the browser."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Ticket System Module contact Reply Form",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_reply_contact_form.png"}),(0,o.kt)("figcaption",null,"Ticket System Module contact Reply Form"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the reply.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Submit"),"."),(0,o.kt)("p",{parentName:"li"},"The reply will be submitted and a success message shown."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Ticket System Module Reply Success Message",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/ticket_system_module_reply_contact_success.png"}),(0,o.kt)("figcaption",null,"Ticket System Module Reply Success Message")))))}k.isMDXComponent=!0}}]);