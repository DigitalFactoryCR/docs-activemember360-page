"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2288],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),s=a(72389),o=a(63725),i=a(86010),l="tabItem_LplD";function c(e){var t,a,s,c=e.lazy,d=e.block,u=e.defaultValue,p=e.values,m=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=b[0])?void 0:s.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,o.UB)(),k=_.tabGroupChoices,w=_.setTabGroupChoices,y=(0,r.useState)(g),N=y[0],x=y[1],E=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=k[m];null!=O&&O!==N&&f.some((function(e){return e.value===O}))&&x(O)}var P=function(e){var t=e.currentTarget,a=E.indexOf(t),n=f[a].value;n!==N&&(T(t),x(n),null!=m&&w(m,n))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:P,onClick:P},s,{className:(0,i.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},16252:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=a(9877),i=a(58215),l=["components"],c={id:"mbr_is_allowed_access",title:"mbr_is_allowed_access",description:"The ActiveMember360 shortcode mbr_is_allowed_access determines the content to be included based upon whether the visitor has access to a specified page/post.",sidebar_label:"mbr_is_allowed_access"},d=void 0,u={unversionedId:"shortcodes/mbr_is_allowed_access",id:"shortcodes/mbr_is_allowed_access",title:"mbr_is_allowed_access",description:"The ActiveMember360 shortcode mbr_is_allowed_access determines the content to be included based upon whether the visitor has access to a specified page/post.",source:"@site/docs/shortcodes/mbr_is_allowed_access.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_allowed_access",permalink:"/docs-activemember360-page/shortcodes/mbr_is_allowed_access",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_is_allowed_access",title:"mbr_is_allowed_access",description:"The ActiveMember360 shortcode mbr_is_allowed_access determines the content to be included based upon whether the visitor has access to a specified page/post.",sidebar_label:"mbr_is_allowed_access"},sidebar:"shortcodes",previous:{title:"mbr_is_admin",permalink:"/docs-activemember360-page/shortcodes/mbr_is_admin"},next:{title:"mbr_is_bot",permalink:"/docs-activemember360-page/shortcodes/mbr_is_bot"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],h={toc:m};function b(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"This shortcode determines the content to be included based upon whether the visitor has access to a specified page/post."),(0,s.kt)("p",null,"It has many use cases and can be particularly useful when used in conjunction with ",(0,s.kt)("a",{parentName:"p",href:"/shortcodes/mbr_page",title:"Click to learn how to use the [mbr_page] shortcode"},(0,s.kt)("strong",{parentName:"a"},"[mbr_page]")),"/",(0,s.kt)("a",{parentName:"p",href:"/shortcodes/mbr_post",title:"Click to learn how to use the [mbr_post] shortcode"},(0,s.kt)("strong",{parentName:"a"},"[mbr_post]"))," to combine various content elements into a another page/post."),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,s.kt)("td",{parentName:"tr",align:"left"},"The page or post ID for which to check the current visitor's access conditions.",(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"Default:")," Current page/post post_id.",(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"limit_else"),(0,s.kt)("td",{parentName:"tr",align:"left"},'If set to "yes" and the user is not logged in or does not have any ActiveCampaign contact tags that define a membership as selected in ',(0,s.kt)("a",{parentName:"td",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,s.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships")),' this parameter will cause the "ELSE" part of the shortcode to be suppressed. This can be useful in scenarios where the "ELSE" portion of the shortcode is only applicable to members of the site, for example excluding visitors who are not logged in.',(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"Default:")," no.",(0,s.kt)("br",null),(0,s.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,s.kt)("h2",{id:"validity"},"Validity"),(0,s.kt)("p",null,"This shortcode is evaluated for ",(0,s.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,s.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"[ELSE_is_allowed_access]")," conditional branching is supported."),(0,s.kt)("h2",{id:"nesting"},"Nesting"),(0,s.kt)("p",null,"Shortcode nesting is ",(0,s.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,s.kt)("p",null,'Will display "Display this content as allowed access." if the visitor is logged in and satisfy the conditions to access the current page/post where the shortcode is used:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[mbr_is_allowed_access]\nDisplay this content as allowed access.\n[/mbr_is_allowed_access]\n"))),(0,s.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,s.kt)("p",null,'Will display "Display this content as allowed access." if the visitor is logged in and satisfy the conditions to access the page/post with post_id equal to 1234:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[mbr_is_allowed_access post_id='1234']\nDisplay this content as allowed access.\n[/mbr_is_allowed_access]\n"))),(0,s.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,s.kt)("p",null,'Will display "Display this content as allowed access." if the visitor is logged in and satisfy the conditions to access the page/post with post_id equal to 1234. Otherwise will display "Please signup to be able to access this content.":'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[mbr_is_allowed_access post_id='1234']\nDisplay this content as allowed access.\n[ELSE_is_allowed_access]\nPlease signup to be able to access this content.\n[/mbr_is_allowed_access]\n"))),(0,s.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,s.kt)("p",null,'Will display "Display this content as allowed access." if the visitor is logged in and satisfy the conditions to access the page/post with post_id equal to 1234. Otherwise will display "Please upgrade your membership to be able to access this content." but only if the visitor is logged in and a member of the site:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[mbr_is_allowed_access post_id='1234' limit_else='yes']\nDisplay this content as allowed access.\n[ELSE_is_allowed_access]\nPlease upgrade your membership to be able to access this content.\n[/mbr_is_allowed_access]\n")))),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"There is no ActiveMember360 API function equivalent for this shortcode. Please use standard PHP functions."))))}b.isMDXComponent=!0}}]);