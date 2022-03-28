"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6909],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"email-optout",title:"Control the Unsubscribe/OptOut process for emails sent by the Mailer module",description:"How to control the Unsubscribe/OptOut process for emails sent by the Mailer module.",sidebar_label:"Control the Unsubscribe/OptOut process for emails sent by the Mailer module"},s=void 0,u={unversionedId:"modules/mailer/email-optout",id:"modules/mailer/email-optout",title:"Control the Unsubscribe/OptOut process for emails sent by the Mailer module",description:"How to control the Unsubscribe/OptOut process for emails sent by the Mailer module.",source:"@site/docs/modules/mailer/email-optout.mdx",sourceDirName:"modules/mailer",slug:"/modules/mailer/email-optout",permalink:"/modules/mailer/email-optout",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"email-optout",title:"Control the Unsubscribe/OptOut process for emails sent by the Mailer module",description:"How to control the Unsubscribe/OptOut process for emails sent by the Mailer module.",sidebar_label:"Control the Unsubscribe/OptOut process for emails sent by the Mailer module"},sidebar:"modules",previous:{title:"Use an ActiveCampaign Email Template with the Mailer module",permalink:"/modules/mailer/email-templates"},next:{title:"Send an email using the Mailer module from an ActiveCampaign automation",permalink:"/modules/mailer/email-send"}},c={},m=[],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ActiveMember360 Mailer module will automatically replace the unsubscribe links of the ActiveCampaign email template used to send email with the ActiveMember360 Mailer."),(0,a.kt)("p",null,"The change to the unsubscribe link only applies for the email sent by the ActiveMember360 Mailer. The ActiveCampaign email template is not permanently changed."),(0,a.kt)("p",null,"The ActiveMember360 Mailer unsubscribe link will point to a custom endpoint followed by a encrypted identifier for your contact, to allow a protected unsubscribe from the lists specified by the ",(0,a.kt)("strong",{parentName:"p"},"optout")," parameter in the webhook URL used to send the email as detailed in ",(0,a.kt)("a",{parentName:"p",href:"/modules/mailer/email-send",title:"Click to learn how to send an email using the Mailer module from within an ActiveCampaign automation"},(0,a.kt)("strong",{parentName:"a"},"Send an email using the Mailer module from within an ActiveCampaign automation")),"."),(0,a.kt)("p",null,"After the unsubscribe process is completed your contact will be redirected to the page defined as the Unsubscribe Page in ",(0,a.kt)("a",{parentName:"p",href:"/modules/mailer/settings-gateways#settings",title:"Click to learn how to configure settings for use with the Mailer module"},(0,a.kt)("strong",{parentName:"a"},"Mailer, Settings, Unsubscribe Page")),"."),(0,a.kt)("p",null,"The redirection URL will contain a GET parameter called ",(0,a.kt)("strong",{parentName:"p"},"status")," in the query string which indicates if the unsubscribe was processed successfully."),(0,a.kt)("p",null,"On the unsubscribe page the following example shortcode definition could be used to give your contact an appropiate message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_http_get var='status' val='success']\n  You're successfully opted out.\n[ELSE_is_http_get]\n  Something went wrong. Your're not opted out. Please get in touch with us.\n[/mbr_is_http_get]\n")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Some SMTP mail gateways will insert their own unsubscribe link."),(0,a.kt)("p",{parentName:"div"},"Links such as those will unsubscribe the user from any emails processed by the SMTP gateway rather than ActiveCampaign lists."))))}d.isMDXComponent=!0}}]);