"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1372],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(87462),a=r(67294),o=r(72389),i=r(63725),l=r(86010),u="tabItem_LplD";function c(e){var t,r,o,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,i.UB)(),k=_.tabGroupChoices,y=_.setTabGroupChoices,N=(0,a.useState)(g),w=N[0],T=N[1],x=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==w&&f.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var t=e.currentTarget,r=x.indexOf(t),n=f[r].value;n!==w&&(O(t),T(n),null!=m&&y(m,n))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},v)},f.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),c?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function s(e){var t=(0,o.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},58632:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(9877),l=r(58215),u=["components"],c={id:"mbr_product_regular_plan_interval_count",title:"mbr_product_regular_plan_interval_count",description:"The ActiveMember360 shortcode mbr_product_regular_plan_interval_count returns the payment interval count for a regular priced subscription whose ID is given.",sidebar_label:"mbr_product_regular_plan_interval_count"},s=void 0,p={unversionedId:"shortcodes/mbr_product_regular_plan_interval_count",id:"shortcodes/mbr_product_regular_plan_interval_count",title:"mbr_product_regular_plan_interval_count",description:"The ActiveMember360 shortcode mbr_product_regular_plan_interval_count returns the payment interval count for a regular priced subscription whose ID is given.",source:"@site/docs/shortcodes/mbr_product_regular_plan_interval_count.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_product_regular_plan_interval_count",permalink:"/docs-activemember360-page/shortcodes/mbr_product_regular_plan_interval_count",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_product_regular_plan_interval_count",title:"mbr_product_regular_plan_interval_count",description:"The ActiveMember360 shortcode mbr_product_regular_plan_interval_count returns the payment interval count for a regular priced subscription whose ID is given.",sidebar_label:"mbr_product_regular_plan_interval_count"},sidebar:"shortcodes",previous:{title:"mbr_product_name",permalink:"/docs-activemember360-page/shortcodes/mbr_product_name"},next:{title:"mbr_product_regular_plan_interval",permalink:"/docs-activemember360-page/shortcodes/mbr_product_regular_plan_interval"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],v={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode returns the payment interval count for a regular priced subscription whose ID is given."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"product_id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The subscription ID for which the payment interval count will be returned.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The product_id can be determined by viewing ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360, Payment, Products")," or ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360, Payment, Subscriptions")," and editing or hovering over the product/subscription. It is the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," parameter shown in the URL as an example ",(0,o.kt)("a",{parentName:"p",href:"https://yoursite.com/wp-admin/post.php?post=28&action=edit"},"https://yoursite.com/wp-admin/post.php?post=28&action=edit")," the product_id is ",(0,o.kt)("strong",{parentName:"p"},"28"),"."))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is only available when the ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360 Payment Module")," is active as detailed within ",(0,o.kt)("a",{parentName:"p",href:"/modules/payment/activate",title:"Click to learn how to activate the ActiveMember360 Payment Module"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360 Payment Module Activation")),"."),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,"This shortcode does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_product_regular_plan_interval_count]"),"."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting within is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns the payment interval count for the subscription with ID ",(0,o.kt)("strong",{parentName:"p"},"345"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_product_regular_plan_interval_count product_id='345']\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}h.isMDXComponent=!0}}]);