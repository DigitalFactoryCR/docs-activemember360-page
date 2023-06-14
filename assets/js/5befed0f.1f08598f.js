"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69539],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(87462),a=r(67294),i=r(86010),o=r(12466),l=r(16550),s=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=g({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var f=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function _(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(_,(0,n.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},56279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(74866),o=r(85162);const l={id:"mbr_is_logged_in",title:"mbr_is_logged_in",description:"The ActiveMember360 shortcode mbr_is_logged_in determines the content to be included based upon the logged in status of the current visitor.",sidebar_label:"mbr_is_logged_in"},s=void 0,u={unversionedId:"shortcodes/mbr_is_logged_in",id:"shortcodes/mbr_is_logged_in",title:"mbr_is_logged_in",description:"The ActiveMember360 shortcode mbr_is_logged_in determines the content to be included based upon the logged in status of the current visitor.",source:"@site/docs/shortcodes/mbr_is_logged_in.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_logged_in",permalink:"/shortcodes/mbr_is_logged_in",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_is_logged_in",title:"mbr_is_logged_in",description:"The ActiveMember360 shortcode mbr_is_logged_in determines the content to be included based upon the logged in status of the current visitor.",sidebar_label:"mbr_is_logged_in"},sidebar:"shortcodes",previous:{title:"mbr_is_in_list",permalink:"/shortcodes/mbr_is_in_list"},next:{title:"mbr_is_member",permalink:"/shortcodes/mbr_is_member"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This shortcode determines the content to be included based upon the logged in status of the current visitor."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"None."),(0,a.kt)("h2",{id:"validity"},"Validity"),(0,a.kt)("p",null,"This shortcode is evaluated for ",(0,a.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,a.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[ELSE_is_logged_in]")," conditional branching is supported."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Shortcode nesting is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display "Display this if logged in." if the visitor is logged in to the WordPress site:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_logged_in]\nDisplay this if logged in.\n[/mbr_is_logged_in]\n"))),(0,a.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display "Display this if logged in." if the visitor is logged in to the WordPress site. Otherwise it will display "Display this if not logged in.":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_logged_in]\nDisplay this if logged in.\n[ELSE_is_logged_in]\nDisplay this if not logged in.\n[/mbr_is_logged_in]\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There is no ActiveMember360 API function equivalent for this shortcode. Please use the regular WordPress function ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/is_user_logged_in/",title:"Click to access WordPress is_user_logged_in function"},"is_user_logged_in")," with the PHP if else construct.")))}g.isMDXComponent=!0}}]);