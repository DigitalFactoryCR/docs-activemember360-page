"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3418],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),l=n(72389),o=n(63725),i=n(86010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),h=y.tabGroupChoices,x=y.setTabGroupChoices,E=(0,r.useState)(k),w=E[0],N=E[1],T=[],B=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=h[d];null!=O&&O!==w&&b.some((function(e){return e.value===O}))&&N(O)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==w&&(B(t),N(a),null!=d&&x(d,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:_,onFocus:D,onClick:D},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},75393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(9877),i=n(58215),u=["components"],s={id:"examples",title:"Block Editor Block Display Examples",description:"Some Block Editor block display examples.",sidebar_label:"Block Editor Block Display Examples"},p=void 0,c={unversionedId:"modules/block-editor/examples",id:"modules/block-editor/examples",title:"Block Editor Block Display Examples",description:"Some Block Editor block display examples.",source:"@site/docs/modules/block-editor/examples.mdx",sourceDirName:"modules/block-editor",slug:"/modules/block-editor/examples",permalink:"/modules/block-editor/examples",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"examples",title:"Block Editor Block Display Examples",description:"Some Block Editor block display examples.",sidebar_label:"Block Editor Block Display Examples"},sidebar:"modules",previous:{title:"Set Block Editor Block Display Based Upon Conditional PHP Statement",permalink:"/modules/block-editor/block-condition-php-statement"},next:{title:"Custom Post Types",permalink:"/modules/custom-post-types"}},m={},d=[],f={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Always display")," the block if the conditional named ",(0,l.kt)("strong",{parentName:"p"},"Not logged in or Silver but not Gold Member")," evaluates as ",(0,l.kt)("strong",{parentName:"p"},"true"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gutenberg_module_example_1.png",alt:"Block Editor Block Display Settings Example 1"}))),(0,l.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Always display")," the block if the logged in user ",(0,l.kt)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gutenberg_module_example_2.png",alt:"Block Editor Block Display Settings Example 2"}))),(0,l.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Always display")," the block if the logged in user ",(0,l.kt)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer ",(0,l.kt)("strong",{parentName:"p"},"and does not have")," the tag named Newsletter Subscriber:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gutenberg_module_example_3.png",alt:"Block Editor Block Display Settings Example 3"}))),(0,l.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Always display")," the block if the logged in user ",(0,l.kt)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer ",(0,l.kt)("strong",{parentName:"p"},"and does not have")," the tag named Newsletter Subscriber ",(0,l.kt)("strong",{parentName:"p"},"and")," the ActiveCampaign Country contact field is equal to United States:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gutenberg_module_example_4.png",alt:"Block Editor Block Display Settings Example 4"}))),(0,l.kt)(i.Z,{value:"ex5",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Never display")," the block if the visitor is viewing the home page:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gutenberg_module_example_5.png",alt:"Block Editor Block Display Settings Example 5"}))),(0,l.kt)(i.Z,{value:"ex6",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Always display")," the block to a logged in user ",(0,l.kt)("strong",{parentName:"p"},"and")," whose ActiveCampaign Phone contact field begins with 44:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gutenberg_module_example_6.png",alt:"Block Editor Block Display Settings Example 6"})))))}v.isMDXComponent=!0}}]);