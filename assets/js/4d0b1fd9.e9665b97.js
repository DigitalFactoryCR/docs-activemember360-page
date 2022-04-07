"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8362],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),o=n(72389),l=n(63725),i=n(86010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==x&&!v.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),h=y.tabGroupChoices,E=y.setTabGroupChoices,k=(0,r.useState)(x),w=k[0],S=k[1],C=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=h[d];null!=T&&T!==w&&v.some((function(e){return e.value===T}))&&S(T)}var O=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==w&&(N(t),S(a),null!=d&&E(d,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return C.push(e)},onKeyDown:_,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},1092:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(9877),i=n(58215),s=["components"],u={id:"widget-section-examples",title:"Elementor Widget/Container/Section Display Setting Examples",description:"Some Elementor Widget/Container/Section display examples.",sidebar_label:"Elementor Widget/Container/Section Display Setting Examples"},p=void 0,c={unversionedId:"extensions/elementor/widget-section-examples",id:"extensions/elementor/widget-section-examples",title:"Elementor Widget/Container/Section Display Setting Examples",description:"Some Elementor Widget/Container/Section display examples.",source:"@site/docs/extensions/elementor/widget-section-examples.mdx",sourceDirName:"extensions/elementor",slug:"/extensions/elementor/widget-section-examples",permalink:"/extensions/elementor/widget-section-examples",tags:[],version:"current",lastUpdatedAt:1649343975,formattedLastUpdatedAt:"4/7/2022",frontMatter:{id:"widget-section-examples",title:"Elementor Widget/Container/Section Display Setting Examples",description:"Some Elementor Widget/Container/Section display examples.",sidebar_label:"Elementor Widget/Container/Section Display Setting Examples"},sidebar:"extensions",previous:{title:"Set Elementor Popup Display Based Upon ActiveCampaign Contact Field Value",permalink:"/extensions/elementor/popup-rule-contact-field"},next:{title:"Elementor Popup Display Rule Examples",permalink:"/extensions/elementor/popup-examples"}},m={},d=[],f={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Always display")," the widget/conditional/section if the logged in user ",(0,o.kt)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/elementor_extension_element_example_1.png",alt:"Elementor Widget/Container/Section Display Settings Example 1"}))),(0,o.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Always display")," the widget/conditional/section if the logged in user ",(0,o.kt)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer ",(0,o.kt)("strong",{parentName:"p"},"and does not have")," the tag named Newsletter Subscriber:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/elementor_extension_element_example_2.png",alt:"Elementor Widget/Container/Section Display Settings Example 2"}))),(0,o.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Always display")," the widget/conditional/section if the logged in user ",(0,o.kt)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer ",(0,o.kt)("strong",{parentName:"p"},"and does not have")," the tag named Newsletter Subscriber ",(0,o.kt)("strong",{parentName:"p"},"and")," the ActiveCampaign Country contact field is equal to United States:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/elementor_extension_element_example_3.png",alt:"Elementor Widget/Container/Section Display Settings Example 3"}))),(0,o.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Never display")," the widget/conditional/section if the visitor is viewing the home page:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/elementor_extension_element_example_4.png",alt:"Elementor Widget/Container/Section Display Settings Example 4"}))),(0,o.kt)(i.Z,{value:"ex5",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Always display")," the widget/conditional/section to a logged in user ",(0,o.kt)("strong",{parentName:"p"},"and")," whose ActiveCampaign Phone contact field begins with 44:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/elementor_extension_element_example_5.png",alt:"Elementor Widget/Container/Section Display Settings Example 5"})))))}g.isMDXComponent=!0}}]);