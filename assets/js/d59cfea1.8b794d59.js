"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95874],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),p=n,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(67294);function n(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(87462),n=r(67294),o=r(72389),l=r(63725),s=r(86010),i="tabItem_LplD";function u(e){var t,r,o,u=e.lazy,c=e.block,d=e.defaultValue,m=e.values,p=e.groupId,b=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),y=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,n.useState)(k),_=N[0],x=N[1],T=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var P=y[p];null!=P&&P!==_&&f.some((function(e){return e.value===P}))&&x(P)}var E=function(e){var t=e.currentTarget,r=T.indexOf(t),a=f[r].value;a!==_&&(O(t),x(a),null!=p&&w(p,a))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;r=T[a]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;r=T[n]||T[T.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},f.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:E,onClick:E},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=r?r:t)}))),u?(0,n.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function c(e){var t=(0,o.Z)();return n.createElement(u,(0,a.Z)({key:String(t)},e))}},73281:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=r(9877),s=r(58215),i=["components"],u={id:"mbr_clearuser",title:"mbr_clearuser",description:"The ActiveMember360 mbr_clearuser Webhook is used to delete a user from WordPress.",sidebar_label:"mbr_clearuser"},c=void 0,d={unversionedId:"webhooks/mbr_clearuser",id:"webhooks/mbr_clearuser",title:"mbr_clearuser",description:"The ActiveMember360 mbr_clearuser Webhook is used to delete a user from WordPress.",source:"@site/docs/webhooks/mbr_clearuser.mdx",sourceDirName:"webhooks",slug:"/webhooks/mbr_clearuser",permalink:"/webhooks/mbr_clearuser",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_clearuser",title:"mbr_clearuser",description:"The ActiveMember360 mbr_clearuser Webhook is used to delete a user from WordPress.",sidebar_label:"mbr_clearuser"},sidebar:"webhooks",previous:{title:"Overview",permalink:"/webhooks"},next:{title:"mbr_genpass",permalink:"/webhooks/mbr_genpass"}},m={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Site URL &amp; Parameters",id:"site-url--parameters",level:2},{value:"Examples",id:"examples",level:2}],b={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 mbr_clearuser")," is used to delete a WordPress user. It automatically executes upon receiving an ActiveCampaign HTTP POST sent by an ActiveCampaign webhook."),(0,o.kt)("p",null,"Unless otherwise specified, all posts and pages authored by the deleted user will also be deleted however they can alternatively be reassigned to an alternative WordPress user"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The URL used for the mbr_clearuser webhook is constructed using your site URL and parameters."),(0,o.kt)("p",null,"A sample of the URL structure required is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"site_url/?mbr_clearuser=my_security_code\n")),(0,o.kt)("p",null,"The mbr_clearuser URL is used as the webhook URL in an ActiveCampaign automation."),(0,o.kt)("h2",{id:"site-url--parameters"},"Site URL & Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Site URL"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"site_url"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The WordPress site URL from which the WordPress user is to be deleted. This can be found in ",(0,o.kt)("strong",{parentName:"td"},"WordPress, Settings, General, Site URL"),". It must be specified exactly as shown there.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"mbr_clearuser"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Set to the security code used to authenticate the use of mbr_clearuser. The security code used must be defined as detailed in ",(0,o.kt)("a",{parentName:"td",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"reassign"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sets the email address of a WordPress user to whom all posts/pages authored by the user being deleted will be reassigned.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In all examples ",(0,o.kt)("strong",{parentName:"p"},"my_security_code")," must be replaced by a security code defined in ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes"))," on the WordPress site."))),(0,o.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"This webhook URL will result in the deletion of the WordPress user with an email address the same as that of the ActiveCampaign contact for whom the webhook is executed from within an ActiveCampaign automation. Any posts/pages etc. authored by the deleted user will also be deleted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_clearuser=my_security_code\n"))),(0,o.kt)(s.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"This webhook URL will result in the deletion of the WordPress user with an email address the same as that of the ActiveCampaign contact for whom the webhook is executed from within an ActiveCampaign automation. Any posts/pages etc. authored by the deleted user will be reassigned to the WordPress user with the email address ",(0,o.kt)("a",{parentName:"p",href:"mailto:johndoe@gmail.com"},"johndoe@gmail.com"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_clearuser=my_security_code&reassign=johndoe@gmail.com\n")))))}h.isMDXComponent=!0}}]);