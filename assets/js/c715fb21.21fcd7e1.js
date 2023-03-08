"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(r),m=a,u=l["".concat(p,".").concat(m)]||l[m]||g[m]||s;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={id:"passwords",title:"Passwords",description:"How to configure the ActiveMember360 Password Settings.",sidebar_label:"Passwords"},o=void 0,i={unversionedId:"settings/passwords",id:"settings/passwords",title:"Passwords",description:"How to configure the ActiveMember360 Password Settings.",source:"@site/docs/settings/passwords.mdx",sourceDirName:"settings",slug:"/settings/passwords",permalink:"/settings/passwords",draft:!1,tags:[],version:"current",lastUpdatedAt:1676119881,formattedLastUpdatedAt:"Feb 11, 2023",frontMatter:{id:"passwords",title:"Passwords",description:"How to configure the ActiveMember360 Password Settings.",sidebar_label:"Passwords"},sidebar:"settings",previous:{title:"Special Pages",permalink:"/settings/special-pages"},next:{title:"Security",permalink:"/settings/security"}},p={},c=[{value:"Switch to encrypted password storage in ActiveCampaign",id:"switch-to-encrypted-password-storage-in-activecampaign",level:2},{value:"Define a default character length for auto-generated passwords by ActiveMember360",id:"define-a-default-character-length-for-auto-generated-passwords-by-activemember360",level:2}],d={toc:c},l="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Configure the ActiveMember360 Passwords settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_passwords.png"}),(0,a.kt)("figcaption",null,"Configure the ActiveMember360 Passwords settings")),(0,a.kt)("h2",{id:"switch-to-encrypted-password-storage-in-activecampaign"},"Switch to encrypted password storage in ActiveCampaign"),(0,a.kt)("p",null,"When ",(0,a.kt)("strong",{parentName:"p"},"Switch to encrypted password storage in ActiveCampaign")," is set to ",(0,a.kt)("strong",{parentName:"p"},"Yes")," you are enabling the ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360")," encrypted password functionality."),(0,a.kt)("admonition",{title:"Beware",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Before changing this setting to ",(0,a.kt)("strong",{parentName:"p"},"YES")," please ensure you have considered the implications of storing encrypted passwords within ActiveCampaign."),(0,a.kt)("p",{parentName:"admonition"},"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/fundamentals/passwords#store-encrypted-passwords-in-activecampaign",title:"Click to learn about storing passwords as encrypted within ActiveCampaign"},(0,a.kt)("strong",{parentName:"a"},"Store Encrypted Passwords In ActiveCampaign")),"."),(0,a.kt)("p",{parentName:"admonition"},"If you ever change this setting to ",(0,a.kt)("strong",{parentName:"p"},"YES")," and then wish to revert back to ",(0,a.kt)("strong",{parentName:"p"},"NO")," it is important you follow the process detailed within ",(0,a.kt)("a",{parentName:"p",href:"/fundamentals/revert-encrypted-password-storage",title:"Click to learn how to revert encrypted password storage in ActiveCampaign"},(0,a.kt)("strong",{parentName:"a"},"Revert The Storage Of Encrypted Passwords In ActiveCampaign")),"."),(0,a.kt)("p",{parentName:"admonition"},"If that process is not strictly followed you will not have completely deactivated encrypted password storage in ActiveCampaign.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default: No")),(0,a.kt)("h2",{id:"define-a-default-character-length-for-auto-generated-passwords-by-activemember360"},"Define a default character length for auto-generated passwords by ActiveMember360"),(0,a.kt)("p",null,"Choose the length for auto-generated passwords by ActiveMember360. Minimum is 4 and maximum is 64.\nAll new generated passwords by ActiveMember360 will have the defined password length."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default: 24")))}g.isMDXComponent=!0}}]);