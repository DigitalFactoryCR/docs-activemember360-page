"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63241],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7156:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),i=["components"],o={id:"wordpress-users-activecampaign-contacts",title:"WordPress Users & ActiveCampaign Contacts",description:"Gain an understanding not only of WordPress users and ActiveCampaign contacts, but also how they are associated and created when using ActiveMember360.",sidebar_label:"WordPress Users & ActiveCampaign Contacts"},c=void 0,l={unversionedId:"fundamentals/wordpress-users-activecampaign-contacts",id:"fundamentals/wordpress-users-activecampaign-contacts",title:"WordPress Users & ActiveCampaign Contacts",description:"Gain an understanding not only of WordPress users and ActiveCampaign contacts, but also how they are associated and created when using ActiveMember360.",source:"@site/docs/fundamentals/wordpress-users-activecampaign-contacts.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/wordpress-users-activecampaign-contacts",permalink:"/fundamentals/wordpress-users-activecampaign-contacts",tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"wordpress-users-activecampaign-contacts",title:"WordPress Users & ActiveCampaign Contacts",description:"Gain an understanding not only of WordPress users and ActiveCampaign contacts, but also how they are associated and created when using ActiveMember360.",sidebar_label:"WordPress Users & ActiveCampaign Contacts"},sidebar:"fundamentals",previous:{title:"Integrating With ActiveCampaign",permalink:"/fundamentals/activecampaign-integration"},next:{title:"Visitor Types",permalink:"/fundamentals/visitor-types"}},p={},d=[],u={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A single contact in ActiveCampaign may exist as a WordPress user in multiple WordPress sites powered by ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360"),". By default that single contact will have the same login credentials for each WordPress site, typically the email address and password stored in ActiveCampaign."),(0,s.kt)("p",null,"The ActiveCampaign contact email address is used as a unique identifier to relate the contact to a WordPress user."),(0,s.kt)("p",null,"When using ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," the password used to access the WordPress site running ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," is always stored in ActiveCampaign. By default that password is shared between all WordPress sites running ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," connected to the same ActiveCampaign application."),(0,s.kt)("p",null,"When using ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," all data stored within the connected ActiveCampaign application is considered the primary data over and above that stored in WordPress."),(0,s.kt)("p",null,"It is not necessary for a visitor, who exists as a contact within ActiveCampaign, to exist within WordPress as a user before they can login to your WordPress sites powered by ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," as a ",(0,s.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,s.kt)("strong",{parentName:"a"},"remote user")),". ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," will automatically create the WordPress user as required during the first successful login process by a contact using valid login credentials and having the necessary access permissions."),(0,s.kt)("p",null,"To gain an understanding of various topics related to WordPress users and ActiveCampaign contacts when using ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," please refer to these articles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/fundamentals/visitor-types",title:"Click to learn about visitor types"},(0,s.kt)("strong",{parentName:"a"},"Visitor Types"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/fundamentals/passwords",title:"Click to learn more about passwords"},(0,s.kt)("strong",{parentName:"a"},"Passwords"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/fundamentals/creating-wordpress-users",title:"Click to learn how to create WordPress Users"},(0,s.kt)("strong",{parentName:"a"},"Creating WordPress Users"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/fundamentals/creating-activecampaign-contacts",title:"Click to learn how to create ActiveCampaign Contacts"},(0,s.kt)("strong",{parentName:"a"},"Creating ActiveCampaign Contacts"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/fundamentals/changing-wordpress-activecampaign-password",title:"Click to learn about Changing WordPress User & ActiveCampaign Contact Passwords"},(0,s.kt)("strong",{parentName:"a"},"Changing WordPress User & ActiveCampaign Contact Passwords"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/fundamentals/changing-wordpress-activecampaign-email",title:"Click to learn about Changing WordPress User & ActiveCampaign Contact Email Addresses"},(0,s.kt)("strong",{parentName:"a"},"Changing WordPress User & ActiveCampaign Contact Email Addresses"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/fundamentals/wordpress-roles-capabilities",title:"Click to learn about WordPress Roles & Capabilities"},(0,s.kt)("strong",{parentName:"a"},"WordPress Roles & Capabilities")))))}m.isMDXComponent=!0}}]);