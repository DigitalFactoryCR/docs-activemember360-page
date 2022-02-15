"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6156],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,b=m["".concat(o,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),i=n(7294),a=n(2389),l=n(9548),s=n(6010),o="tabItem_LplD";function u(e){var t,n,a,u=e.lazy,c=e.block,d=e.defaultValue,m=e.values,p=e.groupId,b=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==_&&!v.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),k=g.tabGroupChoices,y=g.setTabGroupChoices,w=(0,i.useState)(_),N=w[0],T=w[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=k[p];null!=O&&O!==N&&v.some((function(e){return e.value===O}))&&T(O)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==N&&(E(t),T(r),null!=p&&y(p,r))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:C,onClick:C},a,{className:(0,s.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,i.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,a.Z)();return i.createElement(u,(0,r.Z)({key:String(t)},e))}},9488:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return b}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=n(9877),s=n(8215),o=["components"],u={id:"mbr_is_not_in_list",title:"mbr_is_not_in_list",description:"The ActiveMember360 shortcode mbr_is_not_in_list determines the content to be included based upon the ActiveCampaign list status of the current logged in user.",sidebar_label:"mbr_is_not_in_list"},c=void 0,d={unversionedId:"shortcodes/mbr_is_not_in_list",id:"shortcodes/mbr_is_not_in_list",title:"mbr_is_not_in_list",description:"The ActiveMember360 shortcode mbr_is_not_in_list determines the content to be included based upon the ActiveCampaign list status of the current logged in user.",source:"@site/docs/shortcodes/mbr_is_not_in_list.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_not_in_list",permalink:"/docs-activemember360-page/shortcodes/mbr_is_not_in_list",tags:[],version:"current",frontMatter:{id:"mbr_is_not_in_list",title:"mbr_is_not_in_list",description:"The ActiveMember360 shortcode mbr_is_not_in_list determines the content to be included based upon the ActiveCampaign list status of the current logged in user.",sidebar_label:"mbr_is_not_in_list"},sidebar:"shortcodes",previous:{title:"mbr_is_member",permalink:"/docs-activemember360-page/shortcodes/mbr_is_member"},next:{title:"mbr_is_session",permalink:"/docs-activemember360-page/shortcodes/mbr_is_session"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],p={toc:m};function b(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This shortcode determines the content to be included based upon the ActiveCampaign list status of the current logged in user."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list_id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign list ID whose status should be evaluated for the current logged in user. The list_id can be determined in ",(0,a.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click here to learn how to display your ActiveCampaign application lists and list IDs."},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," none.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The list status which is to be evaluated.",(0,a.kt)("br",null),">Permitted Values: any, active, unconfirmed, unsubscribed, bounced.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," active.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,a.kt)("h2",{id:"validity"},"Validity"),(0,a.kt)("p",null,"This shortcode is only evaluated for ",(0,a.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,a.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[ELSE_is_not_in_list]")," conditional branching is supported."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Shortcode nesting within is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ex1",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display "You are currently not subscribed to our Advanced list." if the current logged in users status for the ActiveCampaign list with ID 23 is not active(subscribed). Otherwise "You are in our Advanced list with an status that is not active(subscribed)." will be displayed:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_not_in_list list_id='23']\n  You are currently not subscribed to our Advanced list.\n[ELSE_is_not_in_list]\n  You are in our Advanced list with an status that is not active(subscribed).\n[/mbr_is_not_in_list]\n"))),(0,a.kt)(s.Z,{value:"ex2",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display a HTML link labelled "Click here to subscribe to the XYZ newsletter" if the current logged in user\'s status for the ActiveCampaign list with ID 17 is not active(subscribed). When clicked the user will be subscribed to the list. Otherwise a HTML link labelled "Click here to unsubscribe from the XYZ newsletter" will be displayed. When clicked the user will be unsubscribed from the list:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_not_in_list list_id='17']\n  [mbr_list subscribe='17' link_text='Click here to subscribe to the XYZ newsletter']\n[ELSE_is_not_in_list]\n  [mbr_list unsubscribe='17' link_text='Click here to unsubscribe from the XYZ newsletter']\n[/mbr_is_not_in_list]\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}b.isMDXComponent=!0}}]);