"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65485],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),p=i,b=m["".concat(o,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294);function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),i=r(67294),a=r(72389),l=r(63725),s=r(86010),o="tabItem_LplD";function u(e){var t,r,a,u=e.lazy,c=e.block,d=e.defaultValue,m=e.values,p=e.groupId,b=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===d?d:null!=(t=null!=d?d:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==_&&!f.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),k=g.tabGroupChoices,y=g.setTabGroupChoices,w=(0,i.useState)(_),N=w[0],T=w[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=k[p];null!=O&&O!==N&&f.some((function(e){return e.value===O}))&&T(O)}var C=function(e){var t=e.currentTarget,r=x.indexOf(t),n=f[r].value;n!==N&&(E(t),T(n),null!=p&&y(p,n))},A=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;r=x[i]||x[x.length-1]}null==(t=r)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},f.map((function(e){var t=e.value,r=e.label,a=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:C,onClick:C},a,{className:(0,s.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),u?(0,i.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,a.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}},88098:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),l=r(9877),s=r(58215),o=["components"],u={id:"mbr_is_email_active",title:"mbr_is_email_active",description:"The ActiveMember360 shortcode mbr_is_email_active determines the content to be included based upon a specific ActiveCampaign list's active(subscribed) status of the current logged in user.",sidebar_label:"mbr_is_email_active"},c=void 0,d={unversionedId:"shortcodes/mbr_is_email_active",id:"shortcodes/mbr_is_email_active",title:"mbr_is_email_active",description:"The ActiveMember360 shortcode mbr_is_email_active determines the content to be included based upon a specific ActiveCampaign list's active(subscribed) status of the current logged in user.",source:"@site/docs/shortcodes/mbr_is_email_active.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_email_active",permalink:"/shortcodes/mbr_is_email_active",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_is_email_active",title:"mbr_is_email_active",description:"The ActiveMember360 shortcode mbr_is_email_active determines the content to be included based upon a specific ActiveCampaign list's active(subscribed) status of the current logged in user.",sidebar_label:"mbr_is_email_active"},sidebar:"shortcodes",previous:{title:"mbr_is_cookie",permalink:"/shortcodes/mbr_is_cookie"},next:{title:"mbr_is_email_bounced",permalink:"/shortcodes/mbr_is_email_bounced"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],b={toc:p};function v(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This shortcode determines the content to be included based upon a specific ActiveCampaign list's active(subscribed) status of the current logged in user."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list_id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign list ID whose status should be evaluated for the current logged in user. The list_id can be determined in ",(0,a.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display your ActiveCampaign application lists and list IDs."},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," none.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,a.kt)("h2",{id:"validity"},"Validity"),(0,a.kt)("p",null,"This shortcode is only evaluated for ",(0,a.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign otherwise it is ignored."),(0,a.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[ELSE_is_email_active]")," conditional branching is supported."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Shortcode nesting within is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ex1",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display "You are currently subscribed to our Advanced list." if the current logged in users status for the ActiveCampaign list with ID 23 is active(subscribed):'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_email_active list_id='23']\n  You are currently subscribed to our Advanced list.\n[/mbr_is_email_active]\n"))),(0,a.kt)(s.Z,{value:"ex2",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display a HTML link labelled "Click here to unsubscribe from the XYZ newsletter" if the current logged in users status for the ActiveCampaign list with ID 17 is active(subscribed). When clicked the user will be unsubscribed from the list. Otherwise a HTML link labelled "Click here to subscribe to the XYZ newsletter" will be displayed. When clicked the user will be subscribed to the list:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_email_active list_id='17']\n  [mbr_list unsubscribe='17' link_text='Click here to unsubscribe from the XYZ newsletter']\n[ELSE_is_email_active]\n  [mbr_list subscribe='17' link_text='Click here to subscribe to the XYZ newsletter']\n[/mbr_is_email_active]\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"For direct use in PHP code use the conditional function ",(0,a.kt)("inlineCode",{parentName:"p"},"mbr_is_email_active($list_id)")," in a structure as illustrated here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$list_id = 5;\nIF (mbr_is_email_active($list_id)) :\n  echo 'You have an active email and are confirmed to receive our content mailing.';\nENDIF;\n")))}v.isMDXComponent=!0}}]);