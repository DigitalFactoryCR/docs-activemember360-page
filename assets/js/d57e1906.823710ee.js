"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={id:"email-testing",title:"Test the Mailer module webhook URL for sending emails",description:"How to test the Mailer module webhook URL for sending emails.",sidebar_label:"Test the Mailer module webhook URL for sending emails"},i=void 0,l={unversionedId:"modules/mailer/email-testing",id:"modules/mailer/email-testing",title:"Test the Mailer module webhook URL for sending emails",description:"How to test the Mailer module webhook URL for sending emails.",source:"@site/docs/modules/mailer/email-testing.mdx",sourceDirName:"modules/mailer",slug:"/modules/mailer/email-testing",permalink:"/modules/mailer/email-testing",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"email-testing",title:"Test the Mailer module webhook URL for sending emails",description:"How to test the Mailer module webhook URL for sending emails.",sidebar_label:"Test the Mailer module webhook URL for sending emails"},sidebar:"modules",previous:{title:"Send an email using the Mailer module from an ActiveCampaign automation",permalink:"/modules/mailer/email-send"},next:{title:"Menu Control",permalink:"/modules/menu-control"}},s={},m=[],p={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once the webhook URL has been determined that will be used to inform the ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Mailer")," module to send an email it can be tested directly from a web browser rather than using ActiveCampaign."),(0,a.kt)("p",null,"This enables the email process to be debugged which is difficult if tested directly from within ActiveCampaign."),(0,a.kt)("p",null,"The unsubcribe link and optout process cannot be tested using htis method, solely the sending of the email."),(0,a.kt)("p",null,"The steps for debugging are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable debug in ",(0,a.kt)("a",{parentName:"p",href:"/modules/mailer/settings-gateways#settings",title:"Click to learn how to configure settings for use with the Mailer module"},(0,a.kt)("strong",{parentName:"a"},"ActiveMEmber360, Mailer Settings, Debug Mode")),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Take the webhook URL and append your test ActiveCampaign contact email and contact id, to be used for testing, to the URL using the parameter ",(0,a.kt)("strong",{parentName:"p"},"contact","[email]","=")," and ",(0,a.kt)("strong",{parentName:"p"},"contact","[id]","=")," respectively."),(0,a.kt)("p",{parentName:"li"},"As an example the webhook URL:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"https://yoursite.com/mbr/mailer/v1/security_code?template=53\n")),(0,a.kt)("p",{parentName:"li"},"becomes"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"https://yoursite.com/mbr/mailer/v1/security_code?template=53&contact[email]=you@yoursite.com&contact[id]=2\n")),(0,a.kt)("admonition",{parentName:"li",title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"In the examples ",(0,a.kt)("strong",{parentName:"p"},"security_code")," must be replaced by a security code defined in ",(0,a.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes"))),(0,a.kt)("p",{parentName:"admonition"},"If you are using an contact email address including special characters apart from ",(0,a.kt)("strong",{parentName:"p"},"@")," they must be URL encoded."),(0,a.kt)("p",{parentName:"admonition"},"For example:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"contact[email]=you+anon@yoursite.com\n")),(0,a.kt)("p",{parentName:"admonition"},"should be specified as:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"contact[email]=you%2Banon@yoursite.com\n")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Take the webhook URL with the appended contact email address and id and paste it directly into your browser and hit enter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If the email is sent successfully you will see the full content of the email in code form."),(0,a.kt)("p",{parentName:"li"},"If the email is unsuccessful you will usually see an error message highlighting the issue. However dependent upon the error you may need to inspect your server logs to see the error message i.e. it will not be shown in the browser."))))}d.isMDXComponent=!0}}]);