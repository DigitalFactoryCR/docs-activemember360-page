"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(86010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(87462),o=r(67294),a=r(86010),l=r(12466),u=r(16550),i=r(91980),s=r(67392),c=r(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function m(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=m(e),[l,u]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[i,s]=b({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),g=(()=>{const e=i??d;return p({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,a]),tabValues:a}}var g=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(d(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,a.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=f(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},o.createElement(v,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return o.createElement(_,(0,n.Z)({key:String(t)},e))}},78403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(74866),l=r(85162);const u={id:"mbr_menu_loginout_url",title:"mbr_menu_loginout_url",description:"The ActiveMember360 shortcode mbr_menu_loginout_url returns either the login URL for a not logged in user or the logout URL for a logged in user.",sidebar_url:"mbr_menu_loginout_url"},i=void 0,s={unversionedId:"shortcodes/mbr_menu_loginout_url",id:"shortcodes/mbr_menu_loginout_url",title:"mbr_menu_loginout_url",description:"The ActiveMember360 shortcode mbr_menu_loginout_url returns either the login URL for a not logged in user or the logout URL for a logged in user.",source:"@site/docs/shortcodes/mbr_menu_loginout_url.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_menu_loginout_url",permalink:"/shortcodes/mbr_menu_loginout_url",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_menu_loginout_url",title:"mbr_menu_loginout_url",description:"The ActiveMember360 shortcode mbr_menu_loginout_url returns either the login URL for a not logged in user or the logout URL for a logged in user.",sidebar_url:"mbr_menu_loginout_url"},sidebar:"shortcodes",previous:{title:"mbr_menu_loginout_label",permalink:"/shortcodes/mbr_menu_loginout_label"},next:{title:"mbr_page",permalink:"/shortcodes/mbr_page"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],m={toc:d},p="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode returns either the login URL for a not logged in user or the logout URL for a logged in user."),(0,o.kt)("p",null,"It is primarily intended for use within WordPress menu items, but can be used anywhere shortcodes are supported."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"None."),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,"This shortcode does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_menu_loginout_url]"),"."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(a.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Will return either the login URL for a not logged in user or the logout URL for a logged in user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_menu_loginout_url]\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}b.isMDXComponent=!0}}]);