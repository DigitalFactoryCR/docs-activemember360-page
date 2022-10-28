"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38794],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,g=p["".concat(s,".").concat(c)]||p[c]||d[c]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),i=a(72389),o=a(63725),l=a(86010),s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,m=e.block,d=e.defaultValue,p=e.values,c=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(v),A=w[0],C=w[1],R=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var D=N[c];null!=D&&D!==A&&f.some((function(e){return e.value===D}))&&C(D)}var U=function(e){var t=e.currentTarget,a=R.indexOf(t),n=f[a].value;n!==A&&(T(t),C(n),null!=c&&y(c,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=R.indexOf(e.currentTarget)+1;a=R[n]||R[0];break;case"ArrowLeft":var r=R.indexOf(e.currentTarget)-1;a=R[r]||R[R.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return R.push(e)},onKeyDown:x,onFocus:U,onClick:U},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function m(e){var t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},15003:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(9877),l=a(58215),s=["components"],u={id:"activecampaign",title:"Using Autologin With ActiveCampaign",description:'The ActiveMember360 Autologin Module allows validated contacts to autologin to the WordPress ActiveMember360 site using an autologin URL either as a link within an email sent from, or as a form "Thank you page URL" in ActiveCampaign.',sidebar_label:"Using Autologin With ActiveCampaign"},m=void 0,d={unversionedId:"modules/autologin/activecampaign",id:"modules/autologin/activecampaign",title:"Using Autologin With ActiveCampaign",description:'The ActiveMember360 Autologin Module allows validated contacts to autologin to the WordPress ActiveMember360 site using an autologin URL either as a link within an email sent from, or as a form "Thank you page URL" in ActiveCampaign.',source:"@site/docs/modules/autologin/activecampaign.mdx",sourceDirName:"modules/autologin",slug:"/modules/autologin/activecampaign",permalink:"/modules/autologin/activecampaign",tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"activecampaign",title:"Using Autologin With ActiveCampaign",description:'The ActiveMember360 Autologin Module allows validated contacts to autologin to the WordPress ActiveMember360 site using an autologin URL either as a link within an email sent from, or as a form "Thank you page URL" in ActiveCampaign.',sidebar_label:"Using Autologin With ActiveCampaign"},sidebar:"modules",previous:{title:"Activation",permalink:"/modules/autologin/activate"},next:{title:"Using Autologin With WordPress",permalink:"/modules/autologin/wordpress"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Site URL &amp; Parameters",id:"site-url--parameters",level:2},{value:"Examples",id:"examples",level:2}],g={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360 Autologin")," module allows validated contacts to autologin to the WordPress ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360"),' site using an autologin URL either as a link within an email sent from, or as a form "Thank you page URL" in ActiveCampaign.'),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The URL used for autologin is constructed using your site URL and parameters."),(0,i.kt)("p",null,"A sample of the URL structure required is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"site_url/?mbr_autologin=my_security_code&id=%SUBCRIBERID%\n")),(0,i.kt)("p",null,"The ActiveCampaign contact must already exist within WordPress as a user for the autologin URL to function. Otherwise the contact will not be logged in."),(0,i.kt)("h2",{id:"site-url--parameters"},"Site URL & Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Site URL"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"site_url"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The WordPress site URL where the user is to be automatically logged in. This can be found in ",(0,i.kt)("strong",{parentName:"td"},"WordPress, Settings, General, Site URL"),". It must be specified exactly as shown there.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mbr_autologin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set to the security code used to validate an autologin. The security code used must be defined as detailed in ",(0,i.kt)("a",{parentName:"td",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"email"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign contact email address of the contact to be logged in.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Permitted value:")," %EMAIL%",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," dependent upon use case, see Examples.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign contact ID of the contact to be logged in.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Permitted value:")," %SUBSCRIBERID%",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," dependent upon use case, see Examples.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"add_tags"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign to add to this contact during the auto-login process. If more than one is entered, please separate with commas. Tag ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Tag IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"remove_tags"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign to remove from this contact during the auto-login process. If more than one is entered, please separate with commas. Remove tags are processed before add tags. Tag ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Tag IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"assign_automations"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more automation ID's defined within ActiveCampaign to which the contact should be added during the auto-login process. To assign to multiple automations, separate them with commas. Automation ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/utilities#automations",title:"Click to learn how to display the available ActiveCampaign automations"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Automation IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"remove_automations"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more automations ID's defined within ActiveCampaign from which the contact should be removed during the auto-login process. To remove from multiple automations, separate them with commas. Remove automations are processed before assign automations. Automation ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/utilities#automations",title:"Click to learn how to display the available ActiveCampaign automations"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Automation IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"subscribe_lists"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to which the contact should be subscribed during the auto-login process. To subscribe to multiple lists, separate them with commas. List ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display the available ActiveCampaign lists"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign List IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"unsubscribe_lists"),(0,i.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign from which the contact should be unsubscribed during the auto-login process. To unsubscribe from multiple lists, separate them with commas. Unsubscribes are processed before subscribes. List ID's can be determined as explained in ",(0,i.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display the available ActiveCampaign lists"},(0,i.kt)("strong",{parentName:"a"},"Determine ActiveCampaign List IDs")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"default_pass"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A default password to be set for all users who do not yet have a password in their ActiveCampaign contact record.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"redir"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sends the user to the URL of your choice after a successful login. To use URL parameters with the redirect URL please refer to ",(0,i.kt)("a",{parentName:"td",href:"/modules/autologin/redirect-url-parameters",title:"Click to learn how to define Autologin redir URL parameters"},(0,i.kt)("strong",{parentName:"a"},"Using URL parameters with the Autologin module redir parameter")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"nofirstlogin"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ignore First login redirect specified in ",(0,i.kt)("a",{parentName:"td",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Permitted values:")," Any value will ignore first login",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When using the ",(0,i.kt)("strong",{parentName:"p"},"email")," parameter an email address can only contain the plus character ",(0,i.kt)("strong",{parentName:"p"},"+")," if it is URL encoded i.e. replaced by ",(0,i.kt)("strong",{parentName:"p"},"%2B"),"."),(0,i.kt)("p",{parentName:"div"},"Otherwise it will be decoded by the PHP $","_","GET into a space and break the autologin URL."),(0,i.kt)("p",{parentName:"div"},"For this reason we recommend that the ",(0,i.kt)("strong",{parentName:"p"},"id")," parameter is used rather than ",(0,i.kt)("strong",{parentName:"p"},"email")," parameter."),(0,i.kt)("p",{parentName:"div"},"The adding/removing of tags, assigning/removing of automations and subscribing/unsubscribing to lists will be processed irrespective of whether the autologin is successful."))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In all examples ",(0,i.kt)("strong",{parentName:"p"},"my_security_code")," must be replaced by a security code defined in ",(0,i.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes"))))),(0,i.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,"This URL can be used within an ActiveCampaign email or as a form \u201cThank You Page URL\u201d to autologin the contact. Upon a successful login they will either be redirected to the home page, or to the appropriate page defined in ",(0,i.kt)("a",{parentName:"p",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Membership Levels and associated settings"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships, Redirect on login"))," or if it\u2019s their first login to the page selected in ",(0,i.kt)("a",{parentName:"p",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&id=%SUBSCRIBERID%\n"))),(0,i.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,i.kt)("p",null,"This URL can be used within an ActiveCampaign email or as a form \u201cThank You Page URL\u201d to autologin the contact. Upon a successful login they will either be redirected to the page with the slug dashboard, or if it\u2019s their first login to the page selected in ",(0,i.kt)("a",{parentName:"p",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login"))," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&id=%SUBSCRIBERID%&redir=https://yoursite.com/dashboard\n"))),(0,i.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,i.kt)("p",null,"This URL can be used within an ActiveCampaign email or as a form \u201cThank You Page URL\u201d to autologin the contact. Upon a successful login they will be redirected to the page with the slug dashboard:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&id=%SUBSCRIBERID%&nofirstlogin=yes&redir=https://yoursite.com/dashboard\n")))))}h.isMDXComponent=!0}}]);