"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6771],{3905:function(t,e,i){i.d(e,{Zo:function(){return p},kt:function(){return u}});var n=i(67294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(i),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return i?n.createElement(g,r(r({ref:e},p),{},{components:i})):n.createElement(g,r({ref:e},p))}));function u(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=i.length,r=new Array(o);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},38286:function(t,e,i){i.r(e),i.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=i(87462),a=i(63366),o=(i(67294),i(3905)),r=["components"],s={id:"security",title:"Security",description:"How to configure the ActiveMember360 Security Settings.",sidebar_label:"Security"},l=void 0,c={unversionedId:"settings/security",id:"settings/security",title:"Security",description:"How to configure the ActiveMember360 Security Settings.",source:"@site/docs/settings/security.mdx",sourceDirName:"settings",slug:"/settings/security",permalink:"/settings/security",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"security",title:"Security",description:"How to configure the ActiveMember360 Security Settings.",sidebar_label:"Security"},sidebar:"settings",previous:{title:"Passwords",permalink:"/settings/passwords"},next:{title:"Logging",permalink:"/settings/logging"}},p={},m=[{value:"Prevent concurrent logins",id:"prevent-concurrent-logins",level:2},{value:"Email when concurrent login is detected",id:"email-when-concurrent-login-is-detected",level:3},{value:"Limit failed login attempts",id:"limit-failed-login-attempts",level:2},{value:"Limit failed login attempts to",id:"limit-failed-login-attempts-to",level:3},{value:"Set lockdown period after max. logins in seconds",id:"set-lockdown-period-after-max-logins-in-seconds",level:3},{value:"Whitelist IP addresses",id:"whitelist-ip-addresses",level:3},{value:"Auto-logout after inactivity",id:"auto-logout-after-inactivity",level:2},{value:"Auto-logout after inactivity in seconds",id:"auto-logout-after-inactivity-in-seconds",level:3},{value:"Security Codes",id:"security-codes",level:2}],d={toc:m};function u(t){var e=t.components,i=(0,a.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Configure the ActiveMember360 Security settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_security.png"}),(0,o.kt)("figcaption",null,"Configure the ActiveMember360 Security settings")),(0,o.kt)("h2",{id:"prevent-concurrent-logins"},"Prevent concurrent logins"),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Prevent concurrent login")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes/On")," concurrent logins from users with the same login credentials are prevented."),(0,o.kt)("p",null,"When a concurrent login occurs the user who is currently logging in is authenticated and allowed access to the site."),(0,o.kt)("p",null,"However any other WordPress sessions currently active for that user will be terminated i.e. the user is effectively logged out."),(0,o.kt)("p",null,"A concurrent login can occur if the user logs in from a different browser window, and/or different device. It is not dependent upon IP address."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h3",{id:"email-when-concurrent-login-is-detected"},"Email when concurrent login is detected"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only shown and the setting applied if ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#prevent-concurrent-logins",title:"Click to learn how to prevent concurrent logins"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Prevent concurrent logins"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,o.kt)("p",null,"Set ",(0,o.kt)("strong",{parentName:"p"},"Email when concurrent login is detected")," to ",(0,o.kt)("strong",{parentName:"p"},"Yes/On")," to send an email when a concurrent login is detected."),(0,o.kt)("p",null,"The email will be sent to the email address as defined in ",(0,o.kt)("a",{parentName:"p",href:"/settings/mailing#default-mail-from-address",title:"Click to learn how to specify your default email from address"},(0,o.kt)("strong",{parentName:"a"},'ActiveMember360, Settings, Mailing, Default "Mail From" address')),"."),(0,o.kt)("p",null,"The notification email is automatically scheduled to send every hour. After the first email further emails will only contain details of concurrent logins since the last notification email was sent."),(0,o.kt)("p",null,"The details contained within the email includes for each concurrent login:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WordPress User ID"),(0,o.kt)("li",{parentName:"ul"},"WordPress Username or Email Address"),(0,o.kt)("li",{parentName:"ul"},"WordPress First Name"),(0,o.kt)("li",{parentName:"ul"},"WordPress Last Name"),(0,o.kt)("li",{parentName:"ul"},"Date and time of concurrent login using server time")),(0,o.kt)("p",null,"If ",(0,o.kt)("strong",{parentName:"p"},"Email when concurrent login is detected")," is set to ",(0,o.kt)("strong",{parentName:"p"},"No/Off")," concurrent login information will be available from within the WordPress database. It is stored within the WordPress options table in the record with the option_name site_concurrent_logins"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h2",{id:"limit-failed-login-attempts"},"Limit failed login attempts"),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Limit failed login attempts")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes/On")," any visitor will be blocked after a certain amount of failed login attempts."),(0,o.kt)("p",null,"The number of failed login attempts allowed before being blocked are set in ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#limit-failed-login-attempts-to",title:"Click to learn how to limit the number of failed login attempts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Limit failed login attempts to")),"."),(0,o.kt)("p",null,"Once the number of failed login attempts have been reached the IP address used for the login attempts will be banned from access to your site until the specified ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#set-lockdown-period-after-max-logins-in-seconds",title:"Click to learn how to set the failed login lockdown period"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Set lockdown period after max. logins in seconds"))," has expired."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h3",{id:"limit-failed-login-attempts-to"},"Limit failed login attempts to"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only shown and the setting applied if ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#limit-failed-login-attempts",title:"Click to learn how to limit failed login attempts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Limit failed login attempts"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,o.kt)("p",null,"Set ",(0,o.kt)("strong",{parentName:"p"},"Limit failed login attempts to")," as the consecutive number of failed login attempts by any visitor after which they will be blocked from the site."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: 0 i.e same as Limit failed login attempts being set to No/Off")),(0,o.kt)("h3",{id:"set-lockdown-period-after-max-logins-in-seconds"},"Set lockdown period after max. logins in seconds"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only shown and the setting applied if ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#limit-failed-login-attempts",title:"Click to learn how to limit failed login attempts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Limit failed login attempts"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,o.kt)("p",null,"Specify for ",(0,o.kt)("strong",{parentName:"p"},"Set lockdown period after max. logins in seconds")," as the number of seconds for which a visitor will be blocked from the site after hitting the consecutive number of failed login attempts as set in Limit failed login attempts to."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: 0")),(0,o.kt)("h3",{id:"whitelist-ip-addresses"},"Whitelist IP addresses"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only shown and the setting applied if ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#limit-failed-login-attempts",title:"Click to learn how to limit failed login attempts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Limit failed login attempts"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,o.kt)("p",null,"List any IP addresses, which will be ignored by the ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#limit-failed-login-attempts",title:"Click to learn how to limit failed login attempts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Limit failed login attempts"))," feature."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("h2",{id:"auto-logout-after-inactivity"},"Auto-logout after inactivity"),(0,o.kt)("p",null,"Set for ",(0,o.kt)("strong",{parentName:"p"},"Auto-logout after inactivity")," a time interval to automatically logout a user if they are inactive on the site."),(0,o.kt)("p",null,"Each time a new page is viewed, the timer is reset."),(0,o.kt)("p",null,"A setting of 0 will disable it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: 0")),(0,o.kt)("h3",{id:"auto-logout-after-inactivity-in-seconds"},"Auto-logout after inactivity in seconds"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only shown and the setting applied if ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#auto-logout-after-inactivity",title:"Click to learn how to automatically log users out after a period of inactivity"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Auto-logout after inactivity"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,o.kt)("p",null,"Set for ",(0,o.kt)("strong",{parentName:"p"},"Auto-logout after inactivity")," a time interval to automatically logout a user if they are inactive on the site."),(0,o.kt)("p",null,"Each time a new page is viewed, the timer is reset."),(0,o.kt)("p",null,"A setting of 0 will disable it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: 0")),(0,o.kt)("h2",{id:"security-codes"},"Security Codes"),(0,o.kt)("p",null,"Define as many ",(0,o.kt)("strong",{parentName:"p"},"Security Codes")," as required."),(0,o.kt)("p",null,"These are used with ActiveMember360 Webhook URLs and the ",(0,o.kt)("a",{parentName:"p",href:"/modules/autologin/overview",title:"Click to learn how to allow validated ActiveCampaign contacts to autologin to the WordPress site."},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Autologin"))," for authentication purposes."),(0,o.kt)("p",null,"We recommend that you use only the following alphanumerics ",(0,o.kt)("strong",{parentName:"p"},"[0-9a-zA-Z]")," and special characters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$-_.!*(),\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: None")),(0,o.kt)("p",null,"This will ensure that your codes are safe for use with all webhook URLs.\nDefine your security codes to use for authentication during mbr_autologin and mbr_genpass functionality."))}u.isMDXComponent=!0}}]);