"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),u=r(16550),s=r(91980),i=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,i]=b({queryString:r,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var g=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==u&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},27834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),l=r(85162);const u={id:"mbr_logout_url",title:"mbr_logout_url",description:"The ActiveMember360 shortcode mbr_logout_url returns the URL to log out the current user from WordPress and redirect that logged out user to a chosen page/post/URL.",sidebar_label:"mbr_logout_url"},s=void 0,i={unversionedId:"shortcodes/mbr_logout_url",id:"shortcodes/mbr_logout_url",title:"mbr_logout_url",description:"The ActiveMember360 shortcode mbr_logout_url returns the URL to log out the current user from WordPress and redirect that logged out user to a chosen page/post/URL.",source:"@site/docs/shortcodes/mbr_logout_url.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_logout_url",permalink:"/shortcodes/mbr_logout_url",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_logout_url",title:"mbr_logout_url",description:"The ActiveMember360 shortcode mbr_logout_url returns the URL to log out the current user from WordPress and redirect that logged out user to a chosen page/post/URL.",sidebar_label:"mbr_logout_url"},sidebar:"shortcodes",previous:{title:"mbr_logout_link",permalink:"/shortcodes/mbr_logout_link"},next:{title:"mbr_menu_loginout_label",permalink:"/shortcodes/mbr_menu_loginout_label"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],p={toc:d},m="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This shortcode returns the URL to log out the current user from WordPress and redirect that logged out user to a chosen page/post/URL."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"redirect"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the URL the user will be redirected to after a logout.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," As defined in ",(0,a.kt)("a",{parentName:"td",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships, Redirect on logout")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,a.kt)("h2",{id:"validity"},"Validity"),(0,a.kt)("p",null,"This shortcode is evaluated for ",(0,a.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,a.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,a.kt)("p",null,"This shortcode does ",(0,a.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,a.kt)("strong",{parentName:"p"},"[ELSE_logout_url]"),"."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Shortcode nesting is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,a.kt)("p",null,"Will return the logout URL that will redirect the logged out user to the page/post defined in ",(0,a.kt)("a",{parentName:"p",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships, Redirect on logout")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_logout_url]\n"))),(0,a.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,a.kt)("p",null,"Will return the logout URL that will redirect the logged out user to ",(0,a.kt)("a",{parentName:"p",href:"https://yoursite.com"},"https://yoursite.com"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_logout_url redirect='https://yoursite.com']\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode. Use the standard WordPress function ",(0,a.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/wp_logout_url/",title:"Click to access WordPress wp_logout_url function"},"wp_logout_url"),".")))}b.isMDXComponent=!0}}]);