"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1577],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),a=r(67294),o=r(72389),i=r(63725),l=r(86010),s="tabItem_LplD";function u(e){var t,r,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),_=y.tabGroupChoices,k=y.setTabGroupChoices,N=(0,a.useState)(g),w=N[0],T=N[1],O=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=_[m];null!=E&&E!==w&&h.some((function(e){return e.value===E}))&&T(E)}var D=function(e){var t=e.currentTarget,r=O.indexOf(t),n=h[r].value;n!==w&&(x(t),T(n),null!=m&&k(m,n))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},h.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},81055:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(9877),l=r(58215),s=["components"],u={id:"mbr_post_id",title:"mbr_post_id",description:"The ActiveMember360 shortcode mbr_post_id returns the ID, i.e. `post_id`, of the current post or page.",sidebar_url:"mbr_post_id"},c=void 0,p={unversionedId:"shortcodes/mbr_post_id",id:"shortcodes/mbr_post_id",title:"mbr_post_id",description:"The ActiveMember360 shortcode mbr_post_id returns the ID, i.e. `post_id`, of the current post or page.",source:"@site/docs/shortcodes/mbr_post_id.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_post_id",permalink:"/docs-activemember360-page/shortcodes/mbr_post_id",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_post_id",title:"mbr_post_id",description:"The ActiveMember360 shortcode mbr_post_id returns the ID, i.e. `post_id`, of the current post or page.",sidebar_url:"mbr_post_id"},sidebar:"shortcodes",previous:{title:"mbr_post",permalink:"/docs-activemember360-page/shortcodes/mbr_post"},next:{title:"mbr_post_date",permalink:"/docs-activemember360-page/shortcodes/mbr_post_date"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],v={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode returns the ID, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"post_id"),", of the current post or page."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"None."),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,"This shortcode does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_post_id]"),"."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Will return the ID, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"post_id"),", of the current post or page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_post_id]\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}f.isMDXComponent=!0}}]);