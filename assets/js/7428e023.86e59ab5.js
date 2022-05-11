"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47468],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),a=r(67294),i=r(72389),l=r(63725),o=r(86010),s="tabItem_LplD";function u(e){var t,r,i,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,_=k.setTabGroupChoices,N=(0,a.useState)(g),w=N[0],T=N[1],O=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==w&&b.some((function(e){return e.value===E}))&&T(E)}var C=function(e){var t=e.currentTarget,r=O.indexOf(t),n=b[r].value;n!==w&&(x(t),T(n),null!=m&&_(m,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,i.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},46139:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=r(9877),o=r(58215),s=["components"],u={id:"mbr_email_status",title:"mbr_email_status",description:"The ActiveMember360 shortcode mbr_email_status returns the email status of the currrent logged in user for a specific ActiveCampaign list.",sidebar_label:"mbr_email_status"},c=void 0,p={unversionedId:"shortcodes/mbr_email_status",id:"shortcodes/mbr_email_status",title:"mbr_email_status",description:"The ActiveMember360 shortcode mbr_email_status returns the email status of the currrent logged in user for a specific ActiveCampaign list.",source:"@site/docs/shortcodes/mbr_email_status.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_email_status",permalink:"/shortcodes/mbr_email_status",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_email_status",title:"mbr_email_status",description:"The ActiveMember360 shortcode mbr_email_status returns the email status of the currrent logged in user for a specific ActiveCampaign list.",sidebar_label:"mbr_email_status"},sidebar:"shortcodes",previous:{title:"mbr_cookie",permalink:"/shortcodes/mbr_cookie"},next:{title:"mbr_http_get",permalink:"/shortcodes/mbr_http_get"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],f={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"This shortcode returns the email status of the currrent logged in user for a specific ActiveCampaign list."),(0,i.kt)("p",null,"The returned value will be one of the following: ",(0,i.kt)("strong",{parentName:"p"},"active"),", ",(0,i.kt)("strong",{parentName:"p"},"unconfirmed"),", ",(0,i.kt)("strong",{parentName:"p"},"unsubscribed"),", ",(0,i.kt)("strong",{parentName:"p"},"bounced"),", or ",(0,i.kt)("strong",{parentName:"p"},"Contact not related to this list.")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"list_id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign list ID for which the email status should be returned for the current logged in user. The list_id can be determined in ",(0,i.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display your ActiveCampaign application lists and list IDs."},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),".",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,i.kt)("h2",{id:"validity"},"Validity"),(0,i.kt)("p",null,"This shortcode is only evaluated for ",(0,i.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,i.kt)("p",null,"In all other cases, including WordPress users with the ",(0,i.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be returned."),(0,i.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,i.kt)("p",null,"This shortcode does ",(0,i.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,i.kt)("strong",{parentName:"p"},"[ELSE_email_status]"),"."),(0,i.kt)("h2",{id:"nesting"},"Nesting"),(0,i.kt)("p",null,"Shortcode nesting is ",(0,i.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,"Will return the email status for the current logged in user for the ActiveCampaign list with ID 23:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_email_status list_id='23']\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"For direct use in PHP code use the conditional function ",(0,i.kt)("inlineCode",{parentName:"p"},"mbr_email_status($list_id)")," in a structure as illustrated here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$list_id = 5;\necho mbr_email_status($list_id);\n")))}h.isMDXComponent=!0}}]);