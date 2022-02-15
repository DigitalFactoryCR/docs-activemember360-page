"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[967],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),o=n(7294),a=n(2389),i=n(9548),l=n(6010),s="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,u=e.block,d=e.defaultValue,p=e.values,m=e.groupId,b=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),_=y.tabGroupChoices,k=y.setTabGroupChoices,w=(0,o.useState)(g),N=w[0],T=w[1],O=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=_[m];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==N&&(x(t),T(r),null!=m&&k(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},b)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:P,onClick:P},a,{className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,a.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},6859:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return b}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],c={id:"mbr_is_bot",title:"mbr_is_bot",description:"The ActiveMember360 shortcode mbr_is_bot determines the content to be displayed based upon whether the current visitor is a search engine bot.",sidebar_label:"mbr_is_bot"},u=void 0,d={unversionedId:"shortcodes/mbr_is_bot",id:"shortcodes/mbr_is_bot",title:"mbr_is_bot",description:"The ActiveMember360 shortcode mbr_is_bot determines the content to be displayed based upon whether the current visitor is a search engine bot.",source:"@site/docs/shortcodes/mbr_is_bot.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_bot",permalink:"/docs-activemember360-page/shortcodes/mbr_is_bot",tags:[],version:"current",frontMatter:{id:"mbr_is_bot",title:"mbr_is_bot",description:"The ActiveMember360 shortcode mbr_is_bot determines the content to be displayed based upon whether the current visitor is a search engine bot.",sidebar_label:"mbr_is_bot"},sidebar:"shortcodes",previous:{title:"mbr_is_allowed_access",permalink:"/docs-activemember360-page/shortcodes/mbr_is_allowed_access"},next:{title:"mbr_is_conditional",permalink:"/docs-activemember360-page/shortcodes/mbr_is_conditional"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],m={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This shortcode determines the content to be displayed based upon whether the current visitor is a search engine bot."),(0,a.kt)("p",null,"The content between the shortcode\u2019s start and end tags will be displayed to the visiting bot."),(0,a.kt)("p",null,'This shortcode allows you to define what content search engines should "see", and consequently index, while keeping your other content separate and protected from bots.'),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"None."),(0,a.kt)("h2",{id:"validity"},"Validity"),(0,a.kt)("p",null,"This shortcode is evaluated for ",(0,a.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,a.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,a.kt)("p",null,"This shortcode does ",(0,a.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,a.kt)("strong",{parentName:"p"},"[ELSE_is_bot]"),"."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Shortcode nesting is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,a.kt)("p",null,'Display "Content only shown to the bot." if the visitor is a bot:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_bot]\nContent only shown to the bot.\n[/mbr_is_bot]\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}b.isMDXComponent=!0}}]);