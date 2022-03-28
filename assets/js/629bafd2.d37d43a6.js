"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1186],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},l=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=d(n),u=i,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,r(r({ref:e},l),{},{components:n})):a.createElement(h,r({ref:e},l))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:i,r[1]=c;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29740:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],c={id:"contacts",title:"Contacts",description:"How to interrogate ActiveCampaign contact data and change WordPress user and ActiveCampaign contact email and password.",sidebar_label:"Contacts"},s=void 0,d={unversionedId:"settings/contacts",id:"settings/contacts",title:"Contacts",description:"How to interrogate ActiveCampaign contact data and change WordPress user and ActiveCampaign contact email and password.",source:"@site/docs/settings/contacts.mdx",sourceDirName:"settings",slug:"/settings/contacts",permalink:"/settings/contacts",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"contacts",title:"Contacts",description:"How to interrogate ActiveCampaign contact data and change WordPress user and ActiveCampaign contact email and password.",sidebar_label:"Contacts"}},l={},m=[{value:"Show Contact Info",id:"show-contact-info",level:2},{value:"Change Contact Email",id:"change-contact-email",level:2},{value:"Change Contact Password",id:"change-contact-password",level:2}],p={toc:m};function u(t){var e=t.components,n=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"show-contact-info"},"Show Contact Info"),(0,o.kt)("p",null,"By selecting this tab you can retrieve any contact record from ActiveCampaign by submitting an email address or ActiveCampaign contact ID."),(0,o.kt)("p",null,"The contact record shown is the most current live data, it is not cached data."),(0,o.kt)("p",null,"This provides an easy way to see a contact's live ActiveCampaign data without having to login your ActiveCampaign account. Ideal for checking what tags a contact has or their contact field values."),(0,o.kt)("h2",{id:"change-contact-email"},"Change Contact Email"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Recommendation")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This method should always be used by an administrator to change the user and contact email address rather than directly editing the contact record in ActiveCampaign and editing the WordPress user profile."))),(0,o.kt)("p",null,"By selecting this tab you can change the email address of a user and associated ActiveCampaign contact."),(0,o.kt)("p",null,"Using this method updates the email address both in WordPress and ActiveCampaign resulting in a new contact primary email address in ActiveCampaign and a new username and email address in WordPress."),(0,o.kt)("p",null,"As this method updates existing users and contacts rather than creating new ones all contact and user data is retained."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"No email notification of a change in email address is sent to the user/contact using this method."))),(0,o.kt)("h2",{id:"change-contact-password"},"Change Contact Password"),(0,o.kt)("p",null,"By selecting this tab you can change the password of a WordPress user and associated ActiveCampaign contact."),(0,o.kt)("p",null,"Using this method updates the password both in WordPress and ActiveCampaign."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"No email notification of a change in password is sent to the user/contact using this method."))))}u.isMDXComponent=!0}}]);