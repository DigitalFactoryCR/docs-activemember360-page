"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=i(a),d=n,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(b,o(o({ref:t},p),{},{components:a})):r.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:n,o[1]=u;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),u=a(16550),s=a(91980),i=a(67392),p=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,i]=b({queryString:a,groupId:r}),[c,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),v(e)}),[i,v,l]),tabValues:l}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:i}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=i[a].value;r!==u&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=v(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(h,(0,r.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return n.createElement(x,(0,r.Z)({key:String(t)},e))}},57547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const u={id:"examples",title:"Examples",description:"Some Beaver Builder Module/Column/Row display examples using ActiveMember360.",sidebar_label:"Examples"},s=void 0,i={unversionedId:"extensions/beaver-builder/examples",id:"extensions/beaver-builder/examples",title:"Examples",description:"Some Beaver Builder Module/Column/Row display examples using ActiveMember360.",source:"@site/docs/extensions/beaver-builder/examples.mdx",sourceDirName:"extensions/beaver-builder",slug:"/extensions/beaver-builder/examples",permalink:"/extensions/beaver-builder/examples",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"examples",title:"Examples",description:"Some Beaver Builder Module/Column/Row display examples using ActiveMember360.",sidebar_label:"Examples"},sidebar:"extensions",previous:{title:"Set Beaver Themer Layout Rules Based Upon ActiveMember360 Conditionals",permalink:"/extensions/beaver-builder/themer-layout-conditional-logic"},next:{title:"BuddyPress",permalink:"/extensions/buddypress"}},p={},c=[],m={toc:c},d="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here are some Beaver Builder Module/Column/Row visibility setting examples:"),(0,n.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Always display")," the module/column/row if the logged in user ",(0,n.kt)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_1.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 1"}))),(0,n.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Always display")," the module/column/row if the logged in user ",(0,n.kt)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer ",(0,n.kt)("strong",{parentName:"p"},"and does not have")," the tag named Newsletter Subscriber:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_2.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 2"}))),(0,n.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Always display")," the module/column/row if the logged in user ",(0,n.kt)("strong",{parentName:"p"},"has")," the ActiveCampaign tag named Customer ",(0,n.kt)("strong",{parentName:"p"},"and does not have")," the tag named Newsletter Subscriber ",(0,n.kt)("strong",{parentName:"p"},"and")," the ActiveCampaign Country contact field is equal to United States:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_3.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 3"}))),(0,n.kt)(o.Z,{value:"ex4",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Never display")," the module/column/row if the visitor is viewing the home page:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_4.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 4"}))),(0,n.kt)(o.Z,{value:"ex5",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Always display")," the module/column/row to a logged in user ",(0,n.kt)("strong",{parentName:"p"},"and")," whose ActiveCampaign Phone contact field begins with 44:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/beaver_builder_extension_module_example_5.png",alt:"Beaver Builder Module/Column/Row Display Settings Example 5"})))))}b.isMDXComponent=!0}}]);