"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[303],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(87462),a=n(67294),i=n(72389),o=n(63725),l=n(86010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==_&&!f.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),k=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,a.useState)(_),w=N[0],T=N[1],x=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==w&&f.some((function(e){return e.value===E}))&&T(E)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),r=f[n].value;r!==w&&(O(t),T(r),null!=m&&y(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},11638:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(9877),l=n(58215),s=["components"],u={id:"mbr_product_sale_plan_interval",title:"mbr_product_sale_plan_interval",description:"The ActiveMember360 shortcode mbr_product_sale_plan_interval returns the payment interval for a sale priced subscription whose ID is given.",sidebar_label:"mbr_product_sale_plan_interval"},p=void 0,c={unversionedId:"shortcodes/mbr_product_sale_plan_interval",id:"shortcodes/mbr_product_sale_plan_interval",title:"mbr_product_sale_plan_interval",description:"The ActiveMember360 shortcode mbr_product_sale_plan_interval returns the payment interval for a sale priced subscription whose ID is given.",source:"@site/docs/shortcodes/mbr_product_sale_plan_interval.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_product_sale_plan_interval",permalink:"/docs-activemember360-page/shortcodes/mbr_product_sale_plan_interval",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_product_sale_plan_interval",title:"mbr_product_sale_plan_interval",description:"The ActiveMember360 shortcode mbr_product_sale_plan_interval returns the payment interval for a sale priced subscription whose ID is given.",sidebar_label:"mbr_product_sale_plan_interval"},sidebar:"shortcodes",previous:{title:"mbr_product_sale_plan_interval_count",permalink:"/docs-activemember360-page/shortcodes/mbr_product_sale_plan_interval_count"},next:{title:"mbr_product_sale_plan_name",permalink:"/docs-activemember360-page/shortcodes/mbr_product_sale_plan_name"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],v={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"This shortcode returns the payment interval for a sale priced subscription whose ID is given."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"product_id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The subscription ID for which the payment interval will be returned.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The product_id can be determined by viewing ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360, Payment, Products")," or ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360, Payment, Subscriptions")," and editing or hovering over the product/subscription. It is the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," parameter shown in the URL as an example ",(0,i.kt)("a",{parentName:"p",href:"https://yoursite.com/wp-admin/post.php?post=28&action=edit"},"https://yoursite.com/wp-admin/post.php?post=28&action=edit")," the product_id is ",(0,i.kt)("strong",{parentName:"p"},"28"),"."))),(0,i.kt)("h2",{id:"validity"},"Validity"),(0,i.kt)("p",null,"This shortcode is only available when the ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360 Payment Module")," is active as detailed within ",(0,i.kt)("a",{parentName:"p",href:"/modules/payment/activate",title:"Click to learn how to activate the ActiveMember360 Payment Module"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360 Payment Module Activation")),"."),(0,i.kt)("p",null,"This shortcode is evaluated for ",(0,i.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,i.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,i.kt)("p",null,"This shortcode does ",(0,i.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,i.kt)("strong",{parentName:"p"},"[ELSE_product_sale_plan_interval]"),"."),(0,i.kt)("h2",{id:"nesting"},"Nesting"),(0,i.kt)("p",null,"Shortcode nesting within is ",(0,i.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,"Returns the payment interval for the subscription with ID ",(0,i.kt)("strong",{parentName:"p"},"345"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_product_sale_plan_interval product_id='345']\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}h.isMDXComponent=!0}}]);