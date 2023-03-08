"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76645],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(a),h=n,u=c["".concat(p,".").concat(h)]||c[h]||m[h]||r;return a?o.createElement(u,s(s({ref:t},d),{},{components:a})):o.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},98173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(87462),n=(a(67294),a(3905));const r={id:"passwords",title:"Passwords",description:"Gain an understanding of how user passwords are generated and stored when using ActiveMember360.",sidebar_label:"Passwords"},s=void 0,i={unversionedId:"fundamentals/passwords",id:"fundamentals/passwords",title:"Passwords",description:"Gain an understanding of how user passwords are generated and stored when using ActiveMember360.",source:"@site/docs/fundamentals/passwords.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/passwords",permalink:"/fundamentals/passwords",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"passwords",title:"Passwords",description:"Gain an understanding of how user passwords are generated and stored when using ActiveMember360.",sidebar_label:"Passwords"},sidebar:"fundamentals",previous:{title:"Visitor Types",permalink:"/fundamentals/visitor-types"},next:{title:"Creating WordPress Users",permalink:"/fundamentals/creating-wordpress-users"}},p={},l=[{value:"Password Requirements",id:"password-requirements",level:2},{value:"Password Contact Field",id:"password-contact-field",level:2},{value:"Password Generation",id:"password-generation",level:2},{value:"Using Automatic Webhooks",id:"using-automatic-webhooks",level:3},{value:"When ActiveMember360 creates a WordPress User",id:"when-activemember360-creates-a-wordpress-user",level:3},{value:"Using mbr_genpass Webhook",id:"using-mbr_genpass-webhook",level:3},{value:"Using Autologin Module",id:"using-autologin-module",level:3},{value:"Using WooCommerce",id:"using-woocommerce",level:3},{value:"Password Storage",id:"password-storage",level:2},{value:"Store Encrypted Passwords In ActiveCampaign",id:"store-encrypted-passwords-in-activecampaign",level:3}],d={toc:l},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A prerequisite of using ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," is that the password used by the contact to login to the WordPress site/sites running ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," is stored within your ActiveCampaign application."),(0,n.kt)("p",null,"A key benefit of this functionality is that the same password can be used for multiple sites."),(0,n.kt)("p",null,"The password is also stored for the user within WordPress."),(0,n.kt)("h2",{id:"password-requirements"},"Password Requirements"),(0,n.kt)("p",null,"Where ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," triggers the generation of passwords they comply with the default WordPress password settings of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Password length of 24 characters"),(0,n.kt)("li",{parentName:"ul"},"Allowable password strength of ",(0,n.kt)("em",{parentName:"li"},"Strong")),(0,n.kt)("li",{parentName:"ul"},"Allowable characters for use within the password ",(0,n.kt)("inlineCode",{parentName:"li"},"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"))),(0,n.kt)("h2",{id:"password-contact-field"},"Password Contact Field"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," automatically creates the contact field in ActiveCampaign where the password is stored when ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," is first connected to your ActiveCampaign application. See ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/activecampaign-api-connection",title:"Click to learn how to connect ActiveMember360 to your ActiveCamapaign application using the API"},(0,n.kt)("strong",{parentName:"a"},"Connecting ActiveMember360 To Your ActiveCampaign API")),"."),(0,n.kt)("p",null,"By default this is an ActiveCampaign text contact field named ",(0,n.kt)("inlineCode",{parentName:"p"},"Password")," with the personalization tag of ",(0,n.kt)("inlineCode",{parentName:"p"},"%PASSWORD%"),"."),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Please do not manually create a contact field in ActiveCampaign named ",(0,n.kt)("inlineCode",{parentName:"p"},"password")," with the personalization tag of ",(0,n.kt)("inlineCode",{parentName:"p"},"%PASSWORD%"),"."),(0,n.kt)("p",{parentName:"admonition"},"The field will be automatically created by ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360"),".")),(0,n.kt)("p",null,"However if you have a site for which you wish to store the password within ActiveCampaign in a field of your choosing, so that not all sites must use the same password, this can configured within ",(0,n.kt)("inlineCode",{parentName:"p"},"wp-config.php"),"."),(0,n.kt)("p",null,"You would need to place a define in the wp-config.php of the site anywhere before the line ",(0,n.kt)("inlineCode",{parentName:"p"},"/* That's all, stop editing! Happy blogging. */"),"."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"define('MBR_SET_PASSFIELD','mypassword');\n")),(0,n.kt)("p",null,"This will create the contact field in ActiveCampaign with the personalization tag of ",(0,n.kt)("inlineCode",{parentName:"p"},"%MYPASSWORD%"),"."),(0,n.kt)("p",null,"That field ",(0,n.kt)("inlineCode",{parentName:"p"},"mypassword")," will then be used for password functions/operations related to the site."),(0,n.kt)("h2",{id:"password-generation"},"Password Generation"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," will never overwrite a password that is already stored within ActiveCampaign when any of the automatic password generation methods are used.")),(0,n.kt)("h3",{id:"using-automatic-webhooks"},"Using Automatic Webhooks"),(0,n.kt)("p",null,"When ",(0,n.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks/",title:"Click to learn how to configure the ActiveMember360 Automatic Webhooks"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Automatic Webhooks"))," is enabled, which is the default ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," setting, a password will be generated by ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," if one does not already exist whenever the webhook is triggered, i.e when an ActiveCampaign contact is added or updated, and the associated HTTP POST sent to the WordPress site. It does not matter how the contact is added or updated."),(0,n.kt)("p",null,"ActiveCampaign does not provide a way to only trigger automatic webhooks for specific contacts when using the webhook triggers ",(0,n.kt)("inlineCode",{parentName:"p"},"Contact Added")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Contact Updated"),". This means that whenever a contact is added to your ActiveCampaign application, or updated, a password will be generated and stored by ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," if one does not already exist."),(0,n.kt)("h3",{id:"when-activemember360-creates-a-wordpress-user"},"When ActiveMember360 creates a WordPress User"),(0,n.kt)("p",null,"There are many situations where ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," may need to create a WordPress user."),(0,n.kt)("p",null,"These include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User created by using a WordPress Lost Password link, see ",(0,n.kt)("a",{parentName:"li",href:"/fundamentals/creating-wordpress-users/#user-created-by-using-a-wordpress-lost-password-link",title:"Click to learn how WordPress Users are created when using the WordPress lost password link"},(0,n.kt)("strong",{parentName:"a"},"here")),"."),(0,n.kt)("li",{parentName:"ul"},"User created by using the shortcode ",(0,n.kt)("a",{parentName:"li",href:"/shortcodes/mbr_password_send",title:"Click to learn how to use the [mbr_password_send] shortcode"},(0,n.kt)("strong",{parentName:"a"},"[mbr_password_send]"))),(0,n.kt)("li",{parentName:"ul"},"User created by using the ",(0,n.kt)("a",{parentName:"li",href:"/webhooks/user-create",title:"Click to learn how to use the User Create Webhook"},(0,n.kt)("strong",{parentName:"a"},"User Create Webhook"))),(0,n.kt)("li",{parentName:"ul"},"User created by using the ",(0,n.kt)("a",{parentName:"li",href:"/webhooks/contact-password-reset",title:"Click to learn how to use the Contact Password Reset Webhook"},(0,n.kt)("strong",{parentName:"a"},"Contact Password Reset Webhook")))),(0,n.kt)("p",null,"In all these situations ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," will store the password generated in ActiveCamapign if one does not already exist. It will not overwrite any existing password."),(0,n.kt)("h3",{id:"using-mbr_genpass-webhook"},"Using mbr_genpass Webhook"),(0,n.kt)("p",null,"mbr_genpass is used with an ActiveCampaign webhook in an automation."),(0,n.kt)("p",null,"This allows a password to be generated only for contacts that are added to that specific automation and where the webhook workflow is executed."),(0,n.kt)("p",null,"It provides more control for whom a password is generated when compared to using ",(0,n.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks/",title:"Click to learn how to configure the ActiveMember360 Automatic Webhooks"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Automatic Webhooks")),"."),(0,n.kt)("p",null,"How to configure and use mbr_genpass is documented at ",(0,n.kt)("a",{parentName:"p",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass Webhook"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Webhooks, mbr_genpass")),"."),(0,n.kt)("h3",{id:"using-autologin-module"},"Using Autologin Module"),(0,n.kt)("p",null,"When using ",(0,n.kt)("a",{parentName:"p",href:"/modules/autologin/overview",title:"Click to learn how to allow validated ActiveCampaign contacts to autologin to the WordPress site using a URL or HTML link"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Autologin"))," a password will automatically be generated and stored for the ActiveCampaign contact, if one does not exist, during a success autologin attempt."),(0,n.kt)("h3",{id:"using-woocommerce"},"Using WooCommerce"),(0,n.kt)("p",null,"When using WooCommerce in conjunction with ",(0,n.kt)("a",{parentName:"p",href:"/extensions/woocommerce",title:"Click to learn how to use the ActiveMember360 WooCommerce Extension"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Extensions, WooCommerce"))," when WooCommerce triggers the automatic generation of a password that password will be stored in ActiveCampaign if one does not already exist."),(0,n.kt)("p",null,"If a password does exist in ActiveCampaign that password will be used by WooCommerce rather than a new password being generated."),(0,n.kt)("h2",{id:"password-storage"},"Password Storage"),(0,n.kt)("p",null,"Any password stored within WordPress is always stored encrypted."),(0,n.kt)("p",null,"The password stored by ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," in ActiveCampaign can either be stored in the default format or be stored as an encrypted password."),(0,n.kt)("h3",{id:"store-encrypted-passwords-in-activecampaign"},"Store Encrypted Passwords In ActiveCampaign"),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"The only reason for using ",(0,n.kt)("strong",{parentName:"p"},"Store Encrypted Passwords In ActiveCampaign")," is if you wish to prevent plain text passwords from being displayed within your ActiveCampaign application."),(0,n.kt)("p",{parentName:"admonition"},"Please ensure that you fully understand the implications of storing encrypted passwords in ActiveCampaign before activating that option available at ",(0,n.kt)("a",{parentName:"p",href:"/settings/passwords",title:"Click to learn how to configure the ActiveMember360 Password Settings"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Passwords, Switch to encrypted password storage in ActiveCampaign")),"."),(0,n.kt)("p",{parentName:"admonition"},"Once activated the switch to store encrypted passwords in ActiveCampaign changes how many of the features of ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," function."),(0,n.kt)("p",{parentName:"admonition"},"Also once passwords are stored encrypted if you wish to revert from storing encrypted passwords in ActiveCampaign the process is very involved. That process is detailed within ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/revert-encrypted-password-storage",title:"Click to learn how to revert encrypted password storage in ActiveCampaign"},(0,n.kt)("strong",{parentName:"a"},"Revert The Storage Of Encrypted Passwords In ActiveCampaign")),"."),(0,n.kt)("p",{parentName:"admonition"},"If you require any clarification or have any questions regarding storing encrypted passwords in ActiveCampaign please submit a support ticket for us to assist as detailed ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/support#how-we-offer-support",title:"Click to learn how to submit a support ticket"},(0,n.kt)("strong",{parentName:"a"},"here")),". We recommend that you do not activate the storing of encrypted passwords until your ticket has been answered.")),(0,n.kt)("p",null,"Here are some key points regarding storing encrypted passwords in ActiveCampaign:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When storing encrypted passwords in ActiveCampaign the only time it is possible to notify a contact of their password using an email is when it is first generated, as once stored encrypted it cannot be disclosed in any way.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When storing encrypted passwords in ActiveCampaign the login credentials email is sent automatically from WordPress not ActiveCampaign. The content of that email is defined within ",(0,n.kt)("a",{parentName:"p",href:"/settings/templates",title:"Click to learn how to configure the ActiveMember360 email templates"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Templates, Login Credentials Email")),". You have the option of controlling if this email is sent.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The WordPress email mentioned will only be sent from the site where ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," automatically generates the passwords.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you have ",(0,n.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks/",title:"Click to learn how to configure the ActiveMember360 Automatic Webhooks"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Automatic Webhooks"))," enabled, which is the default ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," setting, a password will be automatically generated by ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," if one does not already exist whenever the webhook is triggered i.e when a contact is added or updated. It does not matter how the contact is created or updated."),(0,n.kt)("p",{parentName:"li"},"This process cannot be selective. ActiveCampaign does not provide a way to only trigger automatic webhooks for specific contacts when using the webhook triggers ",(0,n.kt)("inlineCode",{parentName:"p"},"Contact Added")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Contact Updated"),". This means that whenever a contact is added to your ActiveCampaign application or updated a password will be generated by ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," if one does not already exist and they will receive an email detailing login credentials.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You may have many sites running ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," connected to the same ActiveCampaign application. Only one site is used to generate the password using the HTTP POST sent by the automatic webhooks. You do not have control over which site this is.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If an encrypted password is generated and stored by using either ",(0,n.kt)("a",{parentName:"p",href:"/modules/autologin/overview",title:"Click to learn how to allow validated ActiveCampaign contacts to autologin to the WordPress site using a URL or HTML link"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Autologin"))," or ",(0,n.kt)("a",{parentName:"p",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass Webhook"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Webhooks, mbr_genpass"))," no new user email is sent from WordPress.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you chose to store encrypted passwords in ActiveCampaign on one site that setting will automatically apply to all your sites connected to the same ActiveCampaign application.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When storing encrypted passwords in ActiveCampaign at no point can you send login credentials, or password reminders, for passwords from ActiveCampaign as the password is stored encrypted. If you send or view the password from within ActiveCampaign it will be the encrypted version and cannot be used to login."),(0,n.kt)("p",{parentName:"li"},"However you can use the webhook ",(0,n.kt)("a",{parentName:"p",href:"/webhooks/contact-password-reset",title:"Click to learn how to use the Contact Password Reset Webhook"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Webhooks, Contact Password Reset"))," to send the standard WordPress reset password email. The same email will be sent if any WordPress lost password link is clicked."))),(0,n.kt)("p",null,"Given the above, the process we would recommend when chosing to enable store encrypted passwords is as follows. The contact is never notified by email of their login credentials by ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," and can chose a password of their choice:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Disable the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," ",(0,n.kt)("strong",{parentName:"p"},"Login Credentials Email"),"."),(0,n.kt)("p",{parentName:"li"},"Ensure within ",(0,n.kt)("a",{parentName:"p",href:"/settings/templates",title:"Click to learn how to configure the ActiveMember360 email templates"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Templates"))," that for the ",(0,n.kt)("strong",{parentName:"p"},"Login Credentials Email")," the option ",(0,n.kt)("strong",{parentName:"p"},"Send login credentials")," is set to ",(0,n.kt)("strong",{parentName:"p"},"No"),"."),(0,n.kt)("p",{parentName:"li"},"You will need to use this setting on every one of your WordPress sites running ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," and connecting to the same ActiveCampaign application.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Whenever a user signs-up or purchases a membership execute the ",(0,n.kt)("a",{parentName:"p",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass Webhook"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Webhooks, mbr_genpass"))," as a webhook from within an ActiveCampaign automation."),(0,n.kt)("p",{parentName:"li"},"This will create a user in WordPress if one does not already exist. It will not overwrite nor reset any existing passwords."),(0,n.kt)("p",{parentName:"li"},"In your ActiveCampaign purchase/signup automation/s place the following steps:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Conditions and Workflow, Webhook, URL"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_genpass=xxxxxx\n")),(0,n.kt)("p",{parentName:"li"},"where xxxxxx is a security code of your choice set in ",(0,n.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),"."),(0,n.kt)("p",{parentName:"li"},"where ",(0,n.kt)("inlineCode",{parentName:"p"},"https://yoursite.com")," is the Site URL as shown in ",(0,n.kt)("strong",{parentName:"p"},"WordPress, Settings, General, Site URL"),"."),(0,n.kt)("p",{parentName:"li"},"Full details for ",(0,n.kt)("strong",{parentName:"p"},"mbr_genpass")," are available at ",(0,n.kt)("a",{parentName:"p",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass Webhook"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Webhooks, mbr_genpass")),".")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Direct your user after signup to a URL to allow them to either login with their existing credentials or set their own password. You would do this using the ",(0,n.kt)("a",{parentName:"p",href:"/shortcodes/mbr_password_send",title:"Click to learn how to use the [mbr_password_send] shortcode"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, mbr_password_send"))," or the standard WordPress lost password link i.e. ",(0,n.kt)("inlineCode",{parentName:"p"},"https://yoursite.com/wp-login.php?action=lostpassword"),"."),(0,n.kt)("p",{parentName:"li"},"You could also use ",(0,n.kt)("a",{parentName:"p",href:"/modules/autologin/overview",title:"Click to learn how to allow validated ActiveCampaign contacts to autologin to the WordPress site using a URL or HTML link"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Autologin"))," to automatically log them in and send them to a page to choose their password where ",(0,n.kt)("a",{parentName:"p",href:"/shortcodes/mbr_password_change",title:"Click to learn how to use the [mbr_password_change] shortcode"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, mbr_password_change"))," is used."))))}m.isMDXComponent=!0}}]);