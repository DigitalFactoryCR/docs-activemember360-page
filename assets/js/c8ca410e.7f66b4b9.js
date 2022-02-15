"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5023],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),i=n(7294),a=n(2389),l=n(9548),o=n(6010),s="tabItem_LplD";function u(e){var t,n,a,u=e.lazy,c=e.block,d=e.defaultValue,m=e.values,p=e.groupId,b=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==_&&!h.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),y=g.tabGroupChoices,k=g.setTabGroupChoices,w=(0,i.useState)(_),N=w[0],T=w[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=y[p];null!=O&&O!==N&&h.some((function(e){return e.value===O}))&&T(O)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==N&&(E(t),T(r),null!=p&&k(p,r))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},h.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:C,onClick:C},a,{className:(0,o.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,i.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,a.Z)();return i.createElement(u,(0,r.Z)({key:String(t)},e))}},1162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return b}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=n(9877),o=n(8215),s=["components"],u={id:"mbr_is_email_bounced",title:"mbr_is_email_bounced",description:"The ActiveMember360 shortcode mbr_is_email_bounced determines the content to be included based upon a specific ActiveCampaign list's bounced status of the current logged in user.",sidebar_label:"mbr_is_email_bounced"},c=void 0,d={unversionedId:"shortcodes/mbr_is_email_bounced",id:"shortcodes/mbr_is_email_bounced",title:"mbr_is_email_bounced",description:"The ActiveMember360 shortcode mbr_is_email_bounced determines the content to be included based upon a specific ActiveCampaign list's bounced status of the current logged in user.",source:"@site/docs/shortcodes/mbr_is_email_bounced.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_email_bounced",permalink:"/docs-activemember360-page/shortcodes/mbr_is_email_bounced",tags:[],version:"current",frontMatter:{id:"mbr_is_email_bounced",title:"mbr_is_email_bounced",description:"The ActiveMember360 shortcode mbr_is_email_bounced determines the content to be included based upon a specific ActiveCampaign list's bounced status of the current logged in user.",sidebar_label:"mbr_is_email_bounced"},sidebar:"shortcodes",previous:{title:"mbr_is_email_active",permalink:"/docs-activemember360-page/shortcodes/mbr_is_email_active"},next:{title:"mbr_is_email_unconfirmed",permalink:"/docs-activemember360-page/shortcodes/mbr_is_email_unconfirmed"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],p={toc:m};function b(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This shortcode determines the content to be included based upon a specific ActiveCampaign list's bounced status of the current logged in user."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list_id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign list ID whose status should be evaluated for the current logged in user. The list_id can be determined in ",(0,a.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display your ActiveCampaign application lists and list IDs."},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," none.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,a.kt)("h2",{id:"validity"},"Validity"),(0,a.kt)("p",null,"This shortcode is only evaluated for ",(0,a.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign otherwise it is ignored."),(0,a.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[ELSE_is_email_bounced]")," conditional branching is supported."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Shortcode nesting within is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display "You are currently bounced status for our Advanced list." if the current logged in users status for the ActiveCampaign list with ID 23 is bounced:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_email_bounced list_id='23']\n  You are currently bounced status for our Advanced list.\n[/mbr_is_email_bounced]\n"))),(0,a.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display "You are currently bounced status for our XYZ newsletter list." if the current logged in users status for the ActiveCampaign list with ID 17 is bounced. Otherwise a HTML link labelled "Click here to subscribe to the XYZ newsletter" will be displayed. When clicked the user will be subscribed to the list:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_email_bounced list_id='17']\n  You are currently bounced status for our XYZ newsletter list.\n[ELSE_is_email_bounced]\n  [mbr_list subscribe='17' link_text='Click here to subscribe to the XYZ newsletter']\n[/mbr_is_email_bounced]\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"For direct use in PHP code use the conditional function ",(0,a.kt)("inlineCode",{parentName:"p"},"mbr_is_email_bounced($list_id)")," in a structure as illustrated here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$list_id = 5;\nIF (mbr_is_email_bounced($list_id)) :\n  echo 'Bounced.';\nENDIF;\n")))}b.isMDXComponent=!0}}]);