"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"4-0-1",title:"Version 4.0.1 (2022-04-08)",sidebar_label:"4.0.1 (2022-04-08)"},i=void 0,s={unversionedId:"releases/4-0-1",id:"releases/4-0-1",title:"Version 4.0.1 (2022-04-08)",description:"This version includes:",source:"@site/docs/releases/4-0-1.mdx",sourceDirName:"releases",slug:"/releases/4-0-1",permalink:"/releases/4-0-1",draft:!1,tags:[],version:"current",lastUpdatedAt:1649427136,formattedLastUpdatedAt:"Apr 8, 2022",frontMatter:{id:"4-0-1",title:"Version 4.0.1 (2022-04-08)",sidebar_label:"4.0.1 (2022-04-08)"},sidebar:"releases",previous:{title:"4.0.2 (2022-05-03)",permalink:"/releases/4-0-2"},next:{title:"4.0.0 (2022-03-28)",permalink:"/releases/4-0-0"}},l={},p=[],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This version includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Support within ",(0,a.kt)("a",{parentName:"p",href:"/extensions/elementor/overview",title:"Click to learn how to use the ActiveMember360 Elementor Extension"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Extensions, Elementor"))," for the new Elementor Container. Provides the same visibility controls and is used in the same way as that for Elementor widgets and sections.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Removed the deprecated hook used to prevent the ",(0,a.kt)("strong",{parentName:"p"},"Login Credentials Email")," from being sent from WordPress when both ",(0,a.kt)("a",{parentName:"p",href:"/settings/passwords",title:"Click to learn how to configure ActiveMember360 Password settings"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Passwords, Switch to encrypted password storage in ActiveCampaign"))," and ",(0,a.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks",title:"Click to learn how to use the ActiveMember360 Automatic Webhooks Module"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Automatic Webhooks"))," are enabled, or when using ",(0,a.kt)("a",{parentName:"p",href:"/modules/payment/overview",title:"Click to learn how to use the ActiveMember360 Payment Module"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Payment")),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"remove_action( 'mbr/templates/email/login_credentials/send', [ $GLOBALS['mbr'], 'send_login_credentials_template' ], 10 );\n")),(0,a.kt)("p",{parentName:"li"},"It is replaced with a new option in ",(0,a.kt)("a",{parentName:"p",href:"/settings/templates",title:"Click to learn how to configure the ActiveMember360 Email Templates"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Templates"))," named ",(0,a.kt)("strong",{parentName:"p"},"Send login credentials")," to permit or prevent the ",(0,a.kt)("strong",{parentName:"p"},"Login Credentials Email")," from being sent."),(0,a.kt)("p",{parentName:"li"},"This is provided for ease of use, so a knowledge of PHP and editing files is no longer required to control that email."),(0,a.kt)("admonition",{parentName:"li",title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The deprecated hook is now removed and will no longer function i.e. no longer prevent the email from being sent."),(0,a.kt)("p",{parentName:"admonition"},"Anyone using the ",(0,a.kt)("inlineCode",{parentName:"p"},"remove_action")," to prevent the sending of the login credentials email should now use the new setting in ",(0,a.kt)("a",{parentName:"p",href:"/settings/templates",title:"Click to learn how to configure the ActiveMember360 Email Templates"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Templates"))," named ",(0,a.kt)("strong",{parentName:"p"},"Send login credentials")," to prevent the sending of the ",(0,a.kt)("strong",{parentName:"p"},"Login Credentials Email")," instead."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix to prevent existing passwords being overwritten in certain circumstances when using the ActiveMember360 Payment Module.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix an invalid link for security code documentation in ActiveMember360 Payment Module.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fix to prevent the sending of the ",(0,a.kt)("strong",{parentName:"p"},"Login Credentials Email")," from WordPress when using mbr_genpass webhook module.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Various code improvements related to PHP 8.x.x."))))}d.isMDXComponent=!0}}]);