"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4962],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),a=r(67294),o=r(72389),i=r(63725),l=r(86010),s="tabItem_LplD";function u(e){var t,r,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),g=y.tabGroupChoices,_=y.setTabGroupChoices,w=(0,a.useState)(k),N=w[0],T=w[1],x=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=g[m];null!=E&&E!==N&&f.some((function(e){return e.value===E}))&&T(E)}var C=function(e){var t=e.currentTarget,r=x.indexOf(t),n=f[r].value;n!==N&&(O(t),T(n),null!=m&&_(m,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},36462:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(9877),l=r(58215),s=["components"],u={id:"mbr_push_contact",title:"mbr_push_contact",description:"The ActiveMember360 mbr_push_contact Webhook pushes ActiveCampaign contact data to WordPress",sidebar_label:"mbr_push_contact"},c=void 0,p={unversionedId:"webhooks/mbr_push_contact",id:"webhooks/mbr_push_contact",title:"mbr_push_contact",description:"The ActiveMember360 mbr_push_contact Webhook pushes ActiveCampaign contact data to WordPress",source:"@site/docs/webhooks/mbr_push_contact.mdx",sourceDirName:"webhooks",slug:"/webhooks/mbr_push_contact",permalink:"/docs-activemember360-page/webhooks/mbr_push_contact",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_push_contact",title:"mbr_push_contact",description:"The ActiveMember360 mbr_push_contact Webhook pushes ActiveCampaign contact data to WordPress",sidebar_label:"mbr_push_contact"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Site URL &amp; Parameters",id:"site-url--parameters",level:2},{value:"Examples",id:"examples",level:2}],h={toc:m};function b(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 mbr_push_contact")," is used to push/send ActiveCampaign contact data to WordPress. This ensures the latest contact data is available in WordPress specifically for the logged in user associated with the contact for whom the webhook is executed."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The URL used for mbr_push_contact is constructed using your site URL and parameters."),(0,o.kt)("p",null,"A sample of the URL structure required is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"site_url/?mbr_push_contact=my_security_code\n")),(0,o.kt)("p",null,"The mbr_push_contact URL is used for the webhook URL in an ActiveCampaign automation."),(0,o.kt)("h2",{id:"site-url--parameters"},"Site URL & Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Site URL"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"site_url"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The WordPress site URL where the ActiveCampaign contact data should be sent. This can be found in ",(0,o.kt)("strong",{parentName:"td"},"WordPress, Settings, General, Site URL"),". It must be specified exactly as shown there.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"mbr_push_contact"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Set to the security code used to authenticate the use of mbr_push_contact. The security code used must be defined as detailed in ",(0,o.kt)("a",{parentName:"td",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In all examples ",(0,o.kt)("strong",{parentName:"p"},"my_security_code")," must be replaced by a security code defined in ",(0,o.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes"))," on the WordPress site."))),(0,o.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"This webhook URL will push/send ActiveCampaign contact data to WordPress for the contact for whom the webhook is executed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_push_contact=my_security_code\n")))))}b.isMDXComponent=!0}}]);