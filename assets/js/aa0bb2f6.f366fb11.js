"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5074],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(87462),r=n(67294),o=n(72389),s=n(63725),l=n(86010),i="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,s.UB)(),k=_.tabGroupChoices,w=_.setTabGroupChoices,y=(0,r.useState)(g),N=y[0],x=y[1],E=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=k[m];null!=O&&O!==N&&f.some((function(e){return e.value===O}))&&x(O)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==N&&(T(t),x(a),null!=m&&w(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},54945:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=n(9877),l=n(58215),i=["components"],c={id:"mbr_not_allowed_access",title:"mbr_not_allowed_access",description:"The ActiveMember360 shortcode mbr_not_allowed_access determines the content to be included based upon whether the visitor has access to a specified page/post.",sidebar_label:"mbr_not_allowed_access"},u=void 0,d={unversionedId:"shortcodes/mbr_not_allowed_access",id:"shortcodes/mbr_not_allowed_access",title:"mbr_not_allowed_access",description:"The ActiveMember360 shortcode mbr_not_allowed_access determines the content to be included based upon whether the visitor has access to a specified page/post.",source:"@site/docs/shortcodes/mbr_not_allowed_access.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_not_allowed_access",permalink:"/docs-activemember360-page/shortcodes/mbr_not_allowed_access",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_not_allowed_access",title:"mbr_not_allowed_access",description:"The ActiveMember360 shortcode mbr_not_allowed_access determines the content to be included based upon whether the visitor has access to a specified page/post.",sidebar_label:"mbr_not_allowed_access"},sidebar:"shortcodes",previous:{title:"mbr_isset",permalink:"/docs-activemember360-page/shortcodes/mbr_isset"},next:{title:"mbr_not_first_login",permalink:"/docs-activemember360-page/shortcodes/mbr_not_first_login"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],h={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode determines the content to be included based upon whether the visitor has access to a specified page/post."),(0,o.kt)("p",null,"It has many use cases and can be particularly useful when used in conjunction with ",(0,o.kt)("a",{parentName:"p",href:"/shortcodes/mbr_page",title:"Click to learn how to use the [mbr_page] shortcode"},(0,o.kt)("strong",{parentName:"a"},"[mbr_page]")),"/",(0,o.kt)("a",{parentName:"p",href:"/shortcodes/mbr_post",title:"Click to learn how to use the [mbr_post] shortcode"},(0,o.kt)("strong",{parentName:"a"},"[mbr_post]"))," to combine various content elements into a another page/post."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The page or post ID for which to check the current visitor's access conditions.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," Current page/post post_id.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"limit_else"),(0,o.kt)("td",{parentName:"tr",align:"left"},'If set to "yes" and the user is not logged in or does not have any ActiveCampaign contact tags that define a membership as selected in ',(0,o.kt)("a",{parentName:"td",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships")),' this parameter will cause the "ELSE" part of the shortcode to be suppressed. This can be useful in scenarios where the "ELSE" portion of the shortcode is only applicable to members of the site, for example excluding visitors who are not logged in.',(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," no.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[ELSE_not_allowed_access]")," conditional branching is supported."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(s.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,'Will display "Display this content as not allowed access." if the visitor is logged in and does not satisfy the conditions to access the current page/post where the shortcode is used:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_not_allowed_access]\nDisplay this content as not allowed access.\n[/mbr_not_allowed_access]\n"))),(0,o.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,'Will display "Display this content as not allowed access." if the visitor is logged in and does not satisfy the conditions to access the page/post with post_id equal to 1234:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_not_allowed_access post_id='1234']\nDisplay this content as not allowed access.\n[/mbr_not_allowed_access]\n"))),(0,o.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,o.kt)("p",null,'Will display "Please signup to be able to access this content." if the visitor does not satisfy the conditions to access the page/post with post_id equal to 1234. Otherwise will display "Display this content as allowed access.":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_not_allowed_access post_id='1234']\nPlease signup to be able to access this content.\n[ELSE_not_allowed_access]\nDisplay this content as allowed access.\n[/mbr_not_allowed_access]\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is no ActiveMember360 API function equivalent for this shortcode. Please use standard PHP functions."))))}b.isMDXComponent=!0}}]);