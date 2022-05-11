"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44845],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),o=n(67294),i=n(72389),a=n(63725),l=n(86010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,a.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,a.UB)(),y=_.tabGroupChoices,k=_.setTabGroupChoices,w=(0,o.useState)(g),x=w[0],N=w[1],T=[],E=(0,a.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==x&&b.some((function(e){return e.value===O}))&&N(O)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==x&&(E(t),N(r),null!=m&&k(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function c(e){var t=(0,i.Z)();return o.createElement(u,(0,r.Z)({key:String(t)},e))}},26838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(9877),l=n(58215),s=["components"],u={id:"mbr_not_first_login",title:"mbr_not_first_login",description:'The ActiveMember360 shortcode mbr_not_first_login determines the content to be included based upon the "first login" status of the current visitor.',sidebar_label:"mbr_not_first_login"},c=void 0,d={unversionedId:"shortcodes/mbr_not_first_login",id:"shortcodes/mbr_not_first_login",title:"mbr_not_first_login",description:'The ActiveMember360 shortcode mbr_not_first_login determines the content to be included based upon the "first login" status of the current visitor.',source:"@site/docs/shortcodes/mbr_not_first_login.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_not_first_login",permalink:"/shortcodes/mbr_not_first_login",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_not_first_login",title:"mbr_not_first_login",description:'The ActiveMember360 shortcode mbr_not_first_login determines the content to be included based upon the "first login" status of the current visitor.',sidebar_label:"mbr_not_first_login"},sidebar:"shortcodes",previous:{title:"mbr_not_allowed_access",permalink:"/shortcodes/mbr_not_allowed_access"},next:{title:"mbr_not_for",permalink:"/shortcodes/mbr_not_for"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,'This shortcode determines the content to be included based upon the "first login" status of the current visitor.'),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"None."),(0,i.kt)("h2",{id:"validity"},"Validity"),(0,i.kt)("p",null,"This shortcode is evaluated for ",(0,i.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,i.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"[ELSE_not_first_login]")," conditional branching is supported."),(0,i.kt)("h2",{id:"nesting"},"Nesting"),(0,i.kt)("p",null,"Shortcode nesting is ",(0,i.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(a.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,'Will display "Welcome back." if this is not the first time the visitor has logged in to the WordPress site:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_not_first_login]\nWelcome back.\n[/mbr_not_first_login]\n"))),(0,i.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,i.kt)("p",null,'Will display "Welcome back." if this is not the first time the visitor has logged in to the WordPress site. Otherwise it will display "Welcome, this is the first time you\'ve logged in.":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_not_first_login]\nWelcome back.\n[ELSE_not_first_login]\nWelcome, this is the first time you've logged in.\n[/mbr_not_first_login]\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}v.isMDXComponent=!0}}]);