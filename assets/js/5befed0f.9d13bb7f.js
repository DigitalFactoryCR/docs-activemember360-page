"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69539],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),i=n(67294),o=n(72389),a=n(63725),l=n(86010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,g=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,a.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,a.UB)(),y=_.tabGroupChoices,k=_.setTabGroupChoices,w=(0,i.useState)(b),N=w[0],x=w[1],T=[],E=(0,a.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==N&&v.some((function(e){return e.value===O}))&&x(O)}var P=function(e){var t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==N&&(E(t),x(r),null!=m&&k(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,i.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return i.createElement(u,(0,r.Z)({key:String(t)},e))}},56279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(9877),l=n(58215),s=["components"],u={id:"mbr_is_logged_in",title:"mbr_is_logged_in",description:"The ActiveMember360 shortcode mbr_is_logged_in determines the content to be included based upon the logged in status of the current visitor.",sidebar_label:"mbr_is_logged_in"},d=void 0,c={unversionedId:"shortcodes/mbr_is_logged_in",id:"shortcodes/mbr_is_logged_in",title:"mbr_is_logged_in",description:"The ActiveMember360 shortcode mbr_is_logged_in determines the content to be included based upon the logged in status of the current visitor.",source:"@site/docs/shortcodes/mbr_is_logged_in.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_logged_in",permalink:"/shortcodes/mbr_is_logged_in",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_is_logged_in",title:"mbr_is_logged_in",description:"The ActiveMember360 shortcode mbr_is_logged_in determines the content to be included based upon the logged in status of the current visitor.",sidebar_label:"mbr_is_logged_in"},sidebar:"shortcodes",previous:{title:"mbr_is_in_list",permalink:"/shortcodes/mbr_is_in_list"},next:{title:"mbr_is_member",permalink:"/shortcodes/mbr_is_member"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],g={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode determines the content to be included based upon the logged in status of the current visitor."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"None."),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[ELSE_is_logged_in]")," conditional branching is supported."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(a.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,'Will display "Display this if logged in." if the visitor is logged in to the WordPress site:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_is_logged_in]\nDisplay this if logged in.\n[/mbr_is_logged_in]\n"))),(0,o.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,'Will display "Display this if logged in." if the visitor is logged in to the WordPress site. Otherwise it will display "Display this if not logged in.":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_is_logged_in]\nDisplay this if logged in.\n[ELSE_is_logged_in]\nDisplay this if not logged in.\n[/mbr_is_logged_in]\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is no ActiveMember360 API function equivalent for this shortcode. Please use the regular WordPress function ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/is_user_logged_in/",title:"Click to access WordPress is_user_logged_in function"},"is_user_logged_in")," with the PHP if else construct."))))}f.isMDXComponent=!0}}]);