"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40424],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),i=a(72389),o=a(63725),l=a(86010),s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(v),A=w[0],C=w[1],T=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=N[m];null!=R&&R!==A&&h.some((function(e){return e.value===R}))&&C(R)}var U=function(e){var t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==A&&(D(t),C(n),null!=m&&y(m,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},h.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:U,onClick:U},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function d(e){var t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},37801:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(9877),l=a(58215),s=["components"],u={id:"clickbank",title:"Using Autologin With ClickBank",description:"The ActiveMember360 Autologin module allows validated purchasers to autologin to the WordPress ActiveMember360 site using an autologin URL as the Thank You Page URL for ClickBank purchases.",sidebar_label:"Using Autologin With ClickBank"},d=void 0,p={unversionedId:"modules/autologin/clickbank",id:"modules/autologin/clickbank",title:"Using Autologin With ClickBank",description:"The ActiveMember360 Autologin module allows validated purchasers to autologin to the WordPress ActiveMember360 site using an autologin URL as the Thank You Page URL for ClickBank purchases.",source:"@site/docs/modules/autologin/clickbank.mdx",sourceDirName:"modules/autologin",slug:"/modules/autologin/clickbank",permalink:"/modules/autologin/clickbank",tags:[],version:"current",lastUpdatedAt:1665751408,formattedLastUpdatedAt:"10/14/2022",frontMatter:{id:"clickbank",title:"Using Autologin With ClickBank",description:"The ActiveMember360 Autologin module allows validated purchasers to autologin to the WordPress ActiveMember360 site using an autologin URL as the Thank You Page URL for ClickBank purchases.",sidebar_label:"Using Autologin With ClickBank"},sidebar:"modules",previous:{title:"Using Autologin With Digistore24",permalink:"/modules/autologin/digistore24"},next:{title:"Using Autologin With JVZoo",permalink:"/modules/autologin/jvzoo"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Site URL &amp; Parameters",id:"site-url--parameters",level:2},{value:"Example ClickBank Thank You Page URLs Using Autologin URL",id:"example-clickbank-thank-you-page-urls-using-autologin-url",level:2},{value:"Configuration &amp; Settings:",id:"configuration--settings",level:2}],g={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360 Autologin")," module allows validated purchasers to autologin to the WordPress ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360")," site using an autologin URL as the Thank You Page URL for ClickBank purchases."),(0,i.kt)("p",null,"Upon a successful login the user can be redirected to any desired location within the WordPress site."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When using autologin with ClickBank, for a validated URL, ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360")," will create/update a contact in ActiveCampaign as required."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"ActiveMember360")," will also create the user within WordPress if they do not already exist. The user will be created with a username matching that of their email address and the WordPress role as specified in ",(0,i.kt)("strong",{parentName:"p"},"WordPress, Settings, General, New User Default Role"),"."))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The URL used for autologin is constructed using your site URL and parameters."),(0,i.kt)("p",null,"A sample of the URL structure required is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"site_url/?mbr_autologin=my_security_code\n")),(0,i.kt)("h2",{id:"site-url--parameters"},"Site URL & Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Site URL"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"site_url"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The WordPress site URL where the user is to be automatically logged in. This can be found in ",(0,i.kt)("strong",{parentName:"td"},"WordPress, Settings, General, Site URL"),". It must be specified exactly as shown there.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mbr_autologin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set to the security code used to validate an autologin. The security code used must be defined as detailed in ",(0,i.kt)("a",{parentName:"td",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"add_tags"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign to add to this contact during the auto-login process. If more than one is entered, please separate with commas. Tag ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#tags"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Tag IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"remove_tags"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign to remove from this contact during the auto-login process. If more than one is entered, please separate with commas. Remove tags are processed before add tags. Tag ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#tags"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Tag IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"assign_automations"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more automation ID's defined within ActiveCampaign to which the contact should be added during the auto-login process. To assign to multiple automations, separate them with commas. Automation ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#automations"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Automation IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"remove_automations"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more automations ID's defined within ActiveCampaign from which the contact should be removed during the auto-login process. To remove from multiple automations, separate them with commas. Remove automations are processed before assign automations. Automation ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#automations"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Automation IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"subscribe_lists"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to which the contact should be subscribed during the auto-login process. To subscribe to multiple lists, separate them with commas. List ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#lists"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign List IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"unsubscribe_lists"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign from which the contact should be unsubscribed during the auto-login process. To unsubscribe from multiple lists, separate them with commas. Unsubscribes are processed before subscribes. List ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/fundamentals/activecampaign-data#lists"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign List IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"default_pass"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A default password to be set for all users who do not yet have a password in their ActiveCampaign contact record.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"redir"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sends the user to the URL of your choice after a successful login. To use URL parameters with the redirect URL please refer to ",(0,i.kt)("a",{parentName:"td",href:"/modules/autologin/redirect-url-parameters",title:"Click to learn how to define Autologin redir URL parameters"},(0,i.kt)("strong",{parentName:"a"},"Using URL parameters with the Autologin module redir parameter")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"nofirstlogin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ignore First login redirect specified in ",(0,i.kt)("a",{parentName:"td",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Permitted values:")," Any value will ignore first login",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,i.kt)("h2",{id:"example-clickbank-thank-you-page-urls-using-autologin-url"},"Example ClickBank Thank You Page URLs Using Autologin URL"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In all examples ",(0,i.kt)("strong",{parentName:"p"},"my_security_code")," must be replaced by a security code defined in ",(0,i.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes"))),(0,i.kt)("p",{parentName:"div"},"You must ensure that you use the ",(0,i.kt)("strong",{parentName:"p"},"add_tags")," parameter within the autologin URL so that the ActiveCampaign contacts created by the ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360 Autologin"),"module have the necessary contact data to permit access to your WordPress site and the desired content and/or autologin redirect URL."))),(0,i.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,"This URL will add tag ids 123 and 456 to the contact and upon a successful login the user will either be redirected to the page with the slug product, or if it\u2019s their first login to the page selected in ",(0,i.kt)("a",{parentName:"p",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&add_tags=123,456&redir=https://yoursite.com/product\n"))),(0,i.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,i.kt)("p",null,"This URL will add tag ids 123 and 456 to the contact and upon a successful login the user will either be redirected to the page with the slug product:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&add_tags=123,456&no_first_login=yes&redir=https://yoursite.com/product\n")))),(0,i.kt)("h2",{id:"configuration--settings"},"Configuration & Settings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to your ClickBank account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Vendor Settings, My Site"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scroll to the ",(0,i.kt)("strong",{parentName:"p"},"Advanced Tools")," section and click ",(0,i.kt)("strong",{parentName:"p"},"Edit")," in the top right of that section."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/autologin_module_clickbank_secret_settings.png",alt:"Steps to configure Secret Key for ClickBank"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure both ",(0,i.kt)("strong",{parentName:"p"},"Encrypt Transaction URLs")," and ",(0,i.kt)("strong",{parentName:"p"},"Encrypt TEST Transaction URLs")," are NOT checked.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy or define the ",(0,i.kt)("strong",{parentName:"p"},"Secret Key"),". It can be upto 16 alpahanumeric charcaters in length but must be in upper case.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save Changes")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/autologin_module_settings_clickbank.png",alt:"Steps to configure autologin for ClickBank"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within WordPress navigate to ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360, Modules, Autologin")," and paste the Secret Key from step 5 into the ",(0,i.kt)("strong",{parentName:"p"},"ClickBank, Secret Key"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save Settings"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within Clickbank navigate to ",(0,i.kt)("strong",{parentName:"p"},"Vendor Settings, My Products"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the required product and navigate to ",(0,i.kt)("strong",{parentName:"p"},"Pitch Page & Thank You Page"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/autologin_module_clickbank_url_settings.png",alt:"Steps to configure ClickBank product delivery"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Thank You Page URL")," input area enter your autologin URL. See ","[",(0,i.kt)("strong",{parentName:"p"},"Examples"),"][examples]"," for example use cases.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save & Exit"),"."))))}k.isMDXComponent=!0}}]);