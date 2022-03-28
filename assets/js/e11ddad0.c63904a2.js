"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[358],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),g=a,m=u["".concat(c,".").concat(g)]||u[g]||l[g]||s;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12968:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return l}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={id:"changing-wordpress-activecampaign-password",title:"Changing WordPress User & ActiveCampaign Contact Passwords",description:"Gain an understanding of the various ways a WordPress Users and ActiveCampaign Contact password can be changed when using ActiveMember360.",sidebar_label:"Changing WordPress User & ActiveCampaign Contact Passwords"},c=void 0,d={unversionedId:"fundamentals/changing-wordpress-activecampaign-password",id:"fundamentals/changing-wordpress-activecampaign-password",title:"Changing WordPress User & ActiveCampaign Contact Passwords",description:"Gain an understanding of the various ways a WordPress Users and ActiveCampaign Contact password can be changed when using ActiveMember360.",source:"@site/docs/fundamentals/changing-wordpress-activecampaign-password.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/changing-wordpress-activecampaign-password",permalink:"/docs-activemember360-page/fundamentals/changing-wordpress-activecampaign-password",tags:[],version:"current",lastUpdatedAt:1646760317,formattedLastUpdatedAt:"3/8/2022",frontMatter:{id:"changing-wordpress-activecampaign-password",title:"Changing WordPress User & ActiveCampaign Contact Passwords",description:"Gain an understanding of the various ways a WordPress Users and ActiveCampaign Contact password can be changed when using ActiveMember360.",sidebar_label:"Changing WordPress User & ActiveCampaign Contact Passwords"},sidebar:"fundamentals",previous:{title:"Creating ActiveCampaign Contacts",permalink:"/docs-activemember360-page/fundamentals/creating-activecampaign-contacts"},next:{title:"Changing WordPress User & ActiveCampaign Contact Email Addresses",permalink:"/docs-activemember360-page/fundamentals/changing-wordpress-activecampaign-email"}},p={},l=[{value:"Using WordPress User Profile",id:"using-wordpress-user-profile",level:2},{value:"Using the ActiveMember360 shortcode mbr_password_change",id:"using-the-activemember360-shortcode-mbr_password_change",level:2}],u={toc:l};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When using ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," the password used to access the WordPress site is stored within ActiveCampaign."),(0,s.kt)("p",null,"Typically this is also the same password that is stored within WordPress."),(0,s.kt)("p",null,"Therefore when changing the password it is imperative that you ensure the password is updated simultaneously in both WordPress and the ActiveCampaign."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," provides an integration with the WordPress user profile and shortcodes to automatically ensure that this is the case."),(0,s.kt)("p",null,"The methods that can be used to change a password simultaneously in both WordPress and the ActiveCampaign are:"),(0,s.kt)("h2",{id:"using-wordpress-user-profile"},"Using WordPress User Profile"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," is integrated with the standard WordPress user profile such that any change of password made from there is also reflected in ActiveCampaign."),(0,s.kt)("p",null,"This includes a logged in user updating their profile and also a WordPress administrator changing the WordPress user password from within WordPress, Users."),(0,s.kt)("p",null,"Many third party plugins, as an example WooCommerce, allow a user to modify their WordPress user profile. Password changes by any third party plugin that supports the WordPress user profile should function with ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360"),"."),(0,s.kt)("h2",{id:"using-the-activemember360-shortcode-mbr_password_change"},"Using the ActiveMember360 shortcode ","[mbr_password_change]"),(0,s.kt)("p",null,"This shortcode is provided to allow users who are currently logged in to the WordPress ",(0,s.kt)("strong",{parentName:"p"},"ActiveMember360")," site to change their password in both WordPress and ActiveCampaign simultaneously, when it is not desirable to grant users access to their WordPress user profile."),(0,s.kt)("p",null,"The shortcode should be placed within a page/post on your site that is only accessible to logged in users."),(0,s.kt)("p",null,"Full details regarding the shortcode are available at ",(0,s.kt)("a",{parentName:"p",href:"/shortcodes/mbr_password_change",title:"Click to learn how to allow a user to change their password"},(0,s.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, mbr_password_change")),"."))}g.isMDXComponent=!0}}]);