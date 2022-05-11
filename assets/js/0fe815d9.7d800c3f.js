"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74767],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),o=a(72389),i=a(63725),l=a(86010),s="tabItem_LplD";function u(e){var t,a,o,u=e.lazy,d=e.block,p=e.defaultValue,m=e.values,c=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),b=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,r.useState)(v),A=w[0],D=w[1],T=[],R=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var U=b[c];null!=U&&U!==A&&k.some((function(e){return e.value===U}))&&D(U)}var x=function(e){var t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==A&&(R(t),D(n),null!=c&&y(c,n))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return T.push(e)},onKeyDown:L,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function d(e){var t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},36468:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(9877),l=a(58215),s=["components"],u={id:"jvzoo",title:"Using Autologin With JVZoo",description:"The ActiveMember360 Autologin module allows validated purchasers to autologin to the WordPress ActiveMember360 site using an autologin URL as the Thank You / Download Page URL for JVZoo purchases.",sidebar_label:"Using Autologin With JVZoo"},d=void 0,p={unversionedId:"modules/autologin/jvzoo",id:"modules/autologin/jvzoo",title:"Using Autologin With JVZoo",description:"The ActiveMember360 Autologin module allows validated purchasers to autologin to the WordPress ActiveMember360 site using an autologin URL as the Thank You / Download Page URL for JVZoo purchases.",source:"@site/docs/modules/autologin/jvzoo.mdx",sourceDirName:"modules/autologin",slug:"/modules/autologin/jvzoo",permalink:"/modules/autologin/jvzoo",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"jvzoo",title:"Using Autologin With JVZoo",description:"The ActiveMember360 Autologin module allows validated purchasers to autologin to the WordPress ActiveMember360 site using an autologin URL as the Thank You / Download Page URL for JVZoo purchases.",sidebar_label:"Using Autologin With JVZoo"},sidebar:"modules",previous:{title:"Using Autologin With ClickBank",permalink:"/modules/autologin/clickbank"},next:{title:"Using URL parameters with the Autologin redir parameter",permalink:"/modules/autologin/redirect-url-parameters"}},m={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Site URL &amp; Parameters",id:"site-url--parameters",level:2},{value:"Example JVZoo Thank You / Download Page URLs Using Autologin URL",id:"example-jvzoo-thank-you--download-page-urls-using-autologin-url",level:2},{value:"Configuration &amp; Settings:",id:"configuration--settings",level:2}],g={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Autologin")," module allows validated purchasers to autologin to the WordPress ActiveMember360 site using an autologin URL as the Thank You / Download Page URL for JVZoo purchases."),(0,o.kt)("p",null,"Upon a successful login the user can be redirected to any desired location within the WordPress site."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When using autologin with JVZoo, for a validated URL, ActiveMember360 will create/update a contact in ActiveCampaign as required."),(0,o.kt)("p",{parentName:"div"},"ActiveMember360 will also create the user within WordPress if they do not already exist. The user will be created with a username matching that of their email address and the WordPress role as specified in ",(0,o.kt)("strong",{parentName:"p"},"WordPress, Settings, General, New User Default Role"),"."))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The URL used for autologin is constructed using your site URL and parameters."),(0,o.kt)("p",null,"A sample of the URL structure required is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"site_url/?mbr_autologin=my_security_code\n")),(0,o.kt)("h2",{id:"site-url--parameters"},"Site URL & Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Site URL"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"site_url"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The WordPress site URL where the user is to be automatically logged in. This can be found in ",(0,o.kt)("strong",{parentName:"td"},"WordPress, Settings, General, Site URL"),". It must be specified exactly as shown there.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"mbr_autologin"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Set to the security code used to validate an autologin. The security code used must be defined as detailed in ",(0,o.kt)("a",{parentName:"td",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"add_tags"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign to add to this contact during the auto-login process. If more than one is entered, please separate with commas. Tag ID's can be determined as explained in ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#tags"},(0,o.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Tag IDs")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"remove_tags"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign to remove from this contact during the auto-login process. If more than one is entered, please separate with commas. Remove tags are processed before add tags. Tag ID's can be determined as explained in ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#tags"},(0,o.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Tag IDs")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"assign_automations"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more automation ID's defined within ActiveCampaign to which the contact should be added during the auto-login process. To assign to multiple automations, separate them with commas. Automation ID's can be determined as explained in ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#automations"},(0,o.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Automation IDs")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"remove_automations"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more automations ID's defined within ActiveCampaign from which the contact should be removed during the auto-login process. To remove from multiple automations, separate them with commas. Remove automations are processed before assign automations. Automation ID's can be determined as explained in ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#automations"},(0,o.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Automation IDs")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"subscribe_lists"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to which the contact should be subscribed during the auto-login process. To subscribe to multiple lists, separate them with commas. List ID's can be determined as explained in ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#lists"},(0,o.kt)("strong",{parentName:"a"},"Determine ActiveCampaign List IDs")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"unsubscribe_lists"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign from which the contact should be unsubscribed during the auto-login process. To unsubscribe from multiple lists, separate them with commas. Unsubscribes are processed before subscribes. List ID's can be determined as explained in ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#lists"},(0,o.kt)("strong",{parentName:"a"},"Determine ActiveCampaign List IDs")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"default_pass"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A default password to be set for all users who do not yet have a password in their ActiveCampaign contact record.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"redir"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sends the user to the URL of your choice after a successful login. To use URL parameters with the redirect URL please refer to ",(0,o.kt)("a",{parentName:"td",href:"/modules/autologin/redirect-url-parameters",title:"Click to learn how to define Autologin redir URL parameters"},(0,o.kt)("strong",{parentName:"a"},"Using URL parameters with the Autologin module redir parameter")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"nofirstlogin"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ignore First login redirect specified in ",(0,o.kt)("a",{parentName:"td",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Permitted values:")," Any value will ignore first login",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"example-jvzoo-thank-you--download-page-urls-using-autologin-url"},"Example JVZoo Thank You / Download Page URLs Using Autologin URL"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In all examples ",(0,o.kt)("strong",{parentName:"p"},"my_security_code")," must be replaced by a security code defined in ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes"))),(0,o.kt)("p",{parentName:"div"},"You must ensure that you use the ",(0,o.kt)("strong",{parentName:"p"},"add_tags")," parameter within the autologin URL so that the ActiveCampaign contacts created by ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Autologin")," have the necessary contact data to permit access to your WordPress site and the desired content and/or autologin redirect URL."))),(0,o.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"This URL will add tag ids 123 and 456 to the contact and upon a successful login the user will either be redirected to the page with the slug product, or if it\u2019s their first login to the page selected in ",(0,o.kt)("a",{parentName:"p",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&add_tags=123,456&redir=https://yoursite.com/product\n"))),(0,o.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"This URL will add tag ids 123 and 456 to the contact and upon a successful login the user will either be redirected to the page with the slug product:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&add_tags=123,456&no_first_login=yes&redir=https://yoursite.com/product\n")))),(0,o.kt)("h2",{id:"configuration--settings"},"Configuration & Settings:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login to your JVZoo account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"My Account"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/autologin_module_jvzoo_secret_settings.png",alt:"Steps to configure Secret Key for JVZoo"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll to the ",(0,o.kt)("strong",{parentName:"p"},"Vendor Information")," section and copy the ",(0,o.kt)("strong",{parentName:"p"},"JVZIPN Secret Key"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/autologin_module_settings_jvzoo.png",alt:"Steps to configure autologin for JVZoo"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within WordPress ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360, Modules, Autologin")," paste the Secret Key from step 3 into the ",(0,o.kt)("strong",{parentName:"p"},"JVZoo, Secret Key"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save Settings"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Sellers"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/autologin_module_jvzoo_url_settings.png",alt:"Steps to configure JVZoo electronic product delivery"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the required product and navigate to ",(0,o.kt)("strong",{parentName:"p"},"Electronic Delivery"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure ",(0,o.kt)("strong",{parentName:"p"},"Thank You / Download Page")," is checked.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure that ",(0,o.kt)("strong",{parentName:"p"},"Pass parameters to Thank You / Download Page")," is checked.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Thank You / Download Page URL")," input area enter your autologin URL. See ",(0,o.kt)("a",{parentName:"p",href:"#example-jvzoo-thank-you--download-page-urls-using-autologin-url"},(0,o.kt)("strong",{parentName:"a"},"Examples"))," for example use cases.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save My Product"),"."))))}h.isMDXComponent=!0}}]);