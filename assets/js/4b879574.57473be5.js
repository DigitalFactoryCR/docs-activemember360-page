"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6645],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(a),h=o,u=c["".concat(p,".").concat(h)]||c[h]||m[h]||r;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},98173:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],i={id:"passwords",title:"Passwords",description:"Gain an understanding of how user passwords are generated and stored when using ActiveMember360.",sidebar_label:"Passwords"},p=void 0,l={unversionedId:"fundamentals/passwords",id:"fundamentals/passwords",title:"Passwords",description:"Gain an understanding of how user passwords are generated and stored when using ActiveMember360.",source:"@site/docs/fundamentals/passwords.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/passwords",permalink:"/fundamentals/passwords",tags:[],version:"current",lastUpdatedAt:1649343975,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"passwords",title:"Passwords",description:"Gain an understanding of how user passwords are generated and stored when using ActiveMember360.",sidebar_label:"Passwords"},sidebar:"fundamentals",previous:{title:"Visitor Types",permalink:"/fundamentals/visitor-types"},next:{title:"Creating WordPress Users",permalink:"/fundamentals/creating-wordpress-users"}},d={},m=[{value:"Password Requirements",id:"password-requirements",level:2},{value:"Password Generation",id:"password-generation",level:2},{value:"Using Automatic Webhooks",id:"using-automatic-webhooks",level:3},{value:"Using mbr_genpass Webhook",id:"using-mbr_genpass-webhook",level:3},{value:"Using Autologin Module",id:"using-autologin-module",level:3},{value:"Using WooCommerce",id:"using-woocommerce",level:3},{value:"Password Storage",id:"password-storage",level:2},{value:"Store Encrypted Passwords In ActiveCampaign",id:"store-encrypted-passwords-in-activecampaign",level:3}],c={toc:m};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A prerequisite of using ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," is that the password used by the user/contact to login to the WordPress site/sites running ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," is stored within your ActiveCampaign application."),(0,r.kt)("p",null,"The password is also stored for the user within WordPress."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," will automatically store the password in ActiveCampaign when ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," is used to generate the password."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," automatically creates the contact field in ActiveCampaign where the password is stored when ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," is first connected to your ActiveCampaign application. See ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/activecampaign-api-connection",title:"Click to learn how to connect ActiveMember360 to your ActiveCamapaign application using the API"},(0,r.kt)("strong",{parentName:"a"},"Connecting ActiveMember360 To Your ActiveCampaign API")),"."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please do not manually create a contact field in ActiveCampaign named ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,r.kt)("p",{parentName:"div"},"The field will be automatically created by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360"),"."))),(0,r.kt)("h2",{id:"password-requirements"},"Password Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," has settings for the following when passwords are generated:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minimum number of password characters"),(0,r.kt)("li",{parentName:"ul"},"Maximum number of password characters"),(0,r.kt)("li",{parentName:"ul"},"Allowable characters for use within the password")),(0,r.kt)("p",null,"These password requirements are defined in ",(0,r.kt)("a",{parentName:"p",href:"/settings/passwords",title:"Click to learn how to configure the ActiveMember360 Password Settings"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Passwords")),"."),(0,r.kt)("h2",{id:"password-generation"},"Password Generation"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," will never overwrite a password that is already stored within ActiveCampaign when any of the password generation methods are used."))),(0,r.kt)("h3",{id:"using-automatic-webhooks"},"Using Automatic Webhooks"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks/",title:"Click to learn how to configure the ActiveMember360 Automatic Webhooks"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Automatic Webhooks"))," is enabled, which is the default ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," setting, a password will be generated by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," if one does not already exist whenever the webhook is triggered, i.e when an ActiveCampaign contact is added or updated, and the associated HTTP POST sent to the WordPress site. It does not matter how the contact is added or updated."),(0,r.kt)("p",null,"ActiveCampaign does not provide a way to only trigger automatic webhooks for specific contacts when using the webhook triggers ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact Added")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact Updated"),". This means that whenever a contact is added to your ActiveCampaign application, or updated, a password will be generated and stored by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," if one does not already exist."),(0,r.kt)("h3",{id:"using-mbr_genpass-webhook"},"Using mbr_genpass Webhook"),(0,r.kt)("p",null,"mbr_genpass is used with an ActiveCampaign webhook in an automation."),(0,r.kt)("p",null,"This allows a password to be generated only for contacts that are added to that specific automation and where the webhook workflow is executed."),(0,r.kt)("p",null,"It provides more control over whom a password is generated when compared to using ",(0,r.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks/",title:"Click to learn how to configure the ActiveMember360 Automatic Webhooks"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Automatic Webhooks")),"."),(0,r.kt)("p",null,"How to configure and use mbr_genpass is documented at ",(0,r.kt)("a",{parentName:"p",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass Webhook"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Webhooks, mbr_genpass")),"."),(0,r.kt)("h3",{id:"using-autologin-module"},"Using Autologin Module"),(0,r.kt)("p",null,"When using ",(0,r.kt)("a",{parentName:"p",href:"/modules/autologin/overview",title:"Click to learn how to allow validated ActiveCampaign contacts to autologin to the WordPress site using a URL or HTML link"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Autologin"))," a password will automatically be generated and stored for the ActiveCampaign contact, if one does not exist, during a success autologin attempt."),(0,r.kt)("h3",{id:"using-woocommerce"},"Using WooCommerce"),(0,r.kt)("p",null,"When using WooCommerce in conjunction with ",(0,r.kt)("a",{parentName:"p",href:"/extensions/woocommerce",title:"Click to learn how to use the ActiveMember360 WooCommerce Extension"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Extensions, WooCommerce"))," when WooCommerce triggers the automatic generation of a password that password will be stored in ActiveCampaign if one does not already exist."),(0,r.kt)("p",null,"If a password does exist in ActiveCampaign that password will be used by WooCommerce rather than a new password being generated."),(0,r.kt)("h2",{id:"password-storage"},"Password Storage"),(0,r.kt)("p",null,"Any password stored within WordPress is always stored encrypted."),(0,r.kt)("p",null,"The password stored by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," in ActiveCampaign can either be stored in the default format or be stored as an encrypted password."),(0,r.kt)("h3",{id:"store-encrypted-passwords-in-activecampaign"},"Store Encrypted Passwords In ActiveCampaign"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please ensure that you fully understand the implications of storing encrypted passwords in ActiveCampaign before activating that option available at ",(0,r.kt)("a",{parentName:"p",href:"/settings/passwords",title:"Click to learn how to configure the ActiveMember360 Password Settings"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Passwords, Switch to encrypted password storage in ActiveCampaign")),"."),(0,r.kt)("p",{parentName:"div"},"Once activated the switch to store encrypted passwords in ActiveCampaign changes how many of the features of ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," function."),(0,r.kt)("p",{parentName:"div"},"Also once passwords are stored encrypted that is persistent and at no point can you turn off that option nor revert to the default ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," setting for password storage."),(0,r.kt)("p",{parentName:"div"},"If you require any clarification or have any questions regarding storing encrypted passwords in ActiveCampaign please submit a support ticket for us to assist ",(0,r.kt)("a",{parentName:"p",href:"https://docs.activemember360.com/support/",title:"Click to submit a support ticket"},(0,r.kt)("strong",{parentName:"a"},"here")),". We recommend that you do not activate the storing of encrypted passwords until your ticket has been answered."))),(0,r.kt)("p",null,"Here are some key points regarding storing encrypted passwords in ActiveCampaign:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When storing encrypted passwords in ActiveCampaign the only time it is possible to notify a contact of their password is when it is first generated, as once stored encrypted it cannot be disclosed in any way.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When storing encrypted passwords in ActiveCampaign the login credentials email is sent automatically from WordPress not ActiveCampaign. The content of that email is defined within ",(0,r.kt)("a",{parentName:"p",href:"/settings/templates",title:"Click to learn how to configure the ActiveMember360 email templates"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Templates, Login Credentials Email")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The WordPress email mentioned will only be sent from the site where ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," automatically generates the passwords.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you have ",(0,r.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks/",title:"Click to learn how to configure the ActiveMember360 Automatic Webhooks"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Automatic Webhooks"))," enabled, which is the default ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," setting, a password will be automatically generated by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," if one does not already exist whenever the webhook is triggered i.e when a contact is added or updated. It does not matter how the contact is created or updated."),(0,r.kt)("p",{parentName:"li"},"This process cannot be selective. ActiveCampaign does not provide a way to only trigger automatic webhooks for specific contacts when using the webhook triggers ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact Added")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact Updated"),". This means that whenever a contact is added to your ActiveCampaign application or updated a password will be generated by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," if one does not already exist and they will receive an email detailing login credentials.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You may have many sites running ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," connected to the same ActiveCampaign application. Only one site is used to generate the password using the HTTP POST sent by the automatic webhooks. You do not have control over which site this is.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If an encrypted password is generated and stored by using either ",(0,r.kt)("a",{parentName:"p",href:"/modules/autologin/overview",title:"Click to learn how to allow validated ActiveCampaign contacts to autologin to the WordPress site using a URL or HTML link"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Autologin"))," or ",(0,r.kt)("a",{parentName:"p",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass Webhook"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Webhooks, mbr_genpass"))," no new user email is sent from WordPress.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you chose to store encrypted passwords in ActiveCampaign on one site that setting will automatically apply to all your sites connected to the same ActiveCampaign application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When storing encrypted passwords in ActiveCampaign at no point can you send login credentials, or password reminders, for passwords from ActiveCampaign as the password is stored encrypted. If you send or view the password from within ActiveCampaign it will be the encrypted version and cannot be used to login.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When storing encrypted passwords in ActiveCampaign the standard WordPress password reset process is used. When the WordPress lost password link is clicked, or when a visitor submits their email address from where the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," shortcode ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_password_send",title:"Click to learn how to use the [mbr_password_send] shortcode"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, mbr_password_send"))," is used, the standard WordPress password reset email will be sent to those visitors."))),(0,r.kt)("p",null,"Given the above, the process we would recommend when chosing to enable store encrypted passwords is as follows. The contact is never notified by email of their login credentials by ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," and can chose a password of their choice:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Disable the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," ",(0,r.kt)("strong",{parentName:"p"},"Login Credentials Email"),"."),(0,r.kt)("p",{parentName:"li"},"Ensure within ",(0,r.kt)("a",{parentName:"p",href:"/settings/templates",title:"Click to learn how to configure the ActiveMember360 email templates"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Templates"))," that for the ",(0,r.kt)("strong",{parentName:"p"},"Login Credentials Email")," the option ",(0,r.kt)("strong",{parentName:"p"},"Send login credentials")," is set to ",(0,r.kt)("strong",{parentName:"p"},"No"),"."),(0,r.kt)("p",{parentName:"li"},"You will need to use this setting on every one of your WordPress sites running ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," and connecting to the same ActiveCampaign application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Whenever a user signs-up or purchases a membership execute the ",(0,r.kt)("a",{parentName:"p",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass Webhook"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Webhooks, mbr_genpass"))," as a webhook from within an ActiveCampaign automation."),(0,r.kt)("p",{parentName:"li"},"This will create a user in WordPress if one does not already exist. It will not overwrite nor reset any existing passwords."),(0,r.kt)("p",{parentName:"li"},"In your ActiveCampaign purchase/signup automation/s place the following steps:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Conditions and Workflow, Webhook, URL"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_genpass=xxxxxx\n")),(0,r.kt)("p",{parentName:"li"},"where xxxxxx is a security code of your choice set in ",(0,r.kt)("a",{parentName:"p",href:"/settings/security",title:"Click to learn how to configure the ActiveMember360 Security settings"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),"."),(0,r.kt)("p",{parentName:"li"},"where ",(0,r.kt)("inlineCode",{parentName:"p"},"https://yoursite.com")," is the Site URL as shown in ",(0,r.kt)("strong",{parentName:"p"},"WordPress, Settings, General, Site URL"),"."),(0,r.kt)("p",{parentName:"li"},"Full details for ",(0,r.kt)("strong",{parentName:"p"},"mbr_genpass")," are available at ",(0,r.kt)("a",{parentName:"p",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass Webhook"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Webhooks, mbr_genpass")),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Direct your user after signup to a URL to allow them to either login with their existing credentials or set their own password. You would do this using the ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_password_send",title:"Click to learn how to use the [mbr_password_send] shortcode"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, mbr_password_send"))," or the standard WordPress lost password process."),(0,r.kt)("p",{parentName:"li"},"You could also use ",(0,r.kt)("a",{parentName:"p",href:"/modules/autologin/overview",title:"Click to learn how to allow validated ActiveCampaign contacts to autologin to the WordPress site using a URL or HTML link"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Autologin"))," to automatically log them in and send them to a page to choose their password where ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_password_change",title:"Click to learn how to use the [mbr_password_change] shortcode"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, mbr_password_change"))," is used."))))}h.isMDXComponent=!0}}]);