"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8157],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},92123:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"remote-authentication",title:"Remote Authentication Module",description:"How ActiveMember360 provides remote authentication using ActiveCampaign data for non WordPress sites/applications.",sidebar_label:"Remote Authentication"},s=void 0,d={unversionedId:"modules/remote-authentication",id:"modules/remote-authentication",title:"Remote Authentication Module",description:"How ActiveMember360 provides remote authentication using ActiveCampaign data for non WordPress sites/applications.",source:"@site/docs/modules/remote-authentication.mdx",sourceDirName:"modules",slug:"/modules/remote-authentication",permalink:"/modules/remote-authentication",tags:[],version:"current",lastUpdatedAt:1646128245,formattedLastUpdatedAt:"3/1/2022",frontMatter:{id:"remote-authentication",title:"Remote Authentication Module",description:"How ActiveMember360 provides remote authentication using ActiveCampaign data for non WordPress sites/applications.",sidebar_label:"Remote Authentication"},sidebar:"modules",previous:{title:"Purchasing Products & Subscriptions",permalink:"/modules/payment/product-subscription-purchasing"},next:{title:"Role To Tags",permalink:"/modules/role-tags"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Activation",id:"activation",level:2},{value:"Usage",id:"usage",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Optional Parameters",id:"optional-parameters",level:2}],c={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360 Remote Authentication")," module provides a remote authentication method for non WordPress sites/applications."),(0,i.kt)("p",null,"It is designed to allow an external application to remotely interact with ActiveMember360 and your ActiveCampaign application for the purposes of authenticating a user."),(0,i.kt)("p",null,"Upon a successful autentication either all or the chosen ActiveCampaign contact fields will be returned."),(0,i.kt)("h2",{id:"activation"},"Activation"),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"Steps to activate Remote Authentication Module",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/remote_authentication_module_activation.png"}),(0,i.kt)("figcaption",null,"Steps to activate Remote Authentication Module")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,i.kt)("strong",{parentName:"li"},"ActiveMember360, Modules"),"."),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("strong",{parentName:"li"},"ActiveMember360 Modules")," tabs click ",(0,i.kt)("strong",{parentName:"li"},"Remote Authentication"),"."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("strong",{parentName:"li"},"Enable Remote Authentication module")," to ",(0,i.kt)("strong",{parentName:"li"},"Yes/On"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save Settings"),".")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Remote authentication can be carried out through either a POST or a GET. The plugin checks against $","_","REQUEST parameters and values."),(0,i.kt)("p",null,"The URL used for for the POST or GET should match that of the site URL as defined in ",(0,i.kt)("strong",{parentName:"p"},"WordPress, Settings, General, Site URL"),"."),(0,i.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value & Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mbr_auth"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The value passed should be one of the security codes as defined in ",(0,i.kt)("a",{parentName:"td",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"user"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The value passed should be the contact\u2019s primary email address, as stored in ActiveCampaign.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"pass"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The value passed should be the contact\u2019s password as stored in the field ",(0,i.kt)("strong",{parentName:"td"},"password")," in ActiveCampaign.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,i.kt)("h2",{id:"optional-parameters"},"Optional Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value & Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"retfields"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This value, if passed, is used to define which ActiveCampaign fields should be returned in the result array. If more than one contact field is provided, please separate with commas. If not specified, all contact fields will be returned.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," All contact fields.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"required_tags"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This value, if passed, defines one or more tag ID\u2019s defined within ActiveCampaign which a user must have, in addition to a matching password, in order to successfully authenticate. If more than one tag ID is provided, please separate with commas. In order to authenticate, the user must have all tag IDs specified.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"json"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This value, if passed, is used to direct the module to return any data in JSON format. If not specified, the default method used is PHP\u2019s serialize().",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," PHP serialize().",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"base64"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This value, if passed, is used to direct the module to return the JSON or serialized return values in Base64 encoded format.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When using the ",(0,i.kt)("strong",{parentName:"p"},"user")," parameter for a GET an email address can only contain the plus character ",(0,i.kt)("strong",{parentName:"p"},"+")," if it is URL encoded i.e. replaced by ",(0,i.kt)("strong",{parentName:"p"},"%2B"),"."),(0,i.kt)("p",{parentName:"div"},"Otherwise it will be decoded by the PHP $","_","GET into a space and the authentication will fail."))))}m.isMDXComponent=!0}}]);