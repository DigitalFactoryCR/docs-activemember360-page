"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(87462),a=r(67294),i=r(86010),l=r(12466),o=r(16550),s=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=f({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),h=(()=>{const e=s??d;return p({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var h=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==o&&(d(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,i.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===t})}),r??t)})))}function _(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(_,(0,n.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},4334:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(74866),l=r(85162);const o={id:"mbr_is_email_unconfirmed",title:"mbr_is_email_unconfirmed",description:"The ActiveMember360 shortcode mbr_is_email_unconfirmed determines the content to be included based upon a specific ActiveCampaign list's unconfirmed status of the current logged in user.",sidebar_label:"mbr_is_email_unconfirmed"},s=void 0,u={unversionedId:"shortcodes/mbr_is_email_unconfirmed",id:"shortcodes/mbr_is_email_unconfirmed",title:"mbr_is_email_unconfirmed",description:"The ActiveMember360 shortcode mbr_is_email_unconfirmed determines the content to be included based upon a specific ActiveCampaign list's unconfirmed status of the current logged in user.",source:"@site/docs/shortcodes/mbr_is_email_unconfirmed.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_email_unconfirmed",permalink:"/shortcodes/mbr_is_email_unconfirmed",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_is_email_unconfirmed",title:"mbr_is_email_unconfirmed",description:"The ActiveMember360 shortcode mbr_is_email_unconfirmed determines the content to be included based upon a specific ActiveCampaign list's unconfirmed status of the current logged in user.",sidebar_label:"mbr_is_email_unconfirmed"},sidebar:"shortcodes",previous:{title:"mbr_is_email_bounced",permalink:"/shortcodes/mbr_is_email_bounced"},next:{title:"mbr_is_email_unsubscribed",permalink:"/shortcodes/mbr_is_email_unsubscribed"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],m={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This shortcode determines the content to be included based upon a specific ActiveCampaign list's unconfirmed status of the current logged in user."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"list_id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign list ID whose status should be evaluated for the current logged in user. The list_id can be determined in ",(0,a.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display your ActiveCampaign application lists and list IDs."},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," none.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,a.kt)("h2",{id:"validity"},"Validity"),(0,a.kt)("p",null,"This shortcode is only evaluated for ",(0,a.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign otherwise it is ignored."),(0,a.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[ELSE_is_email_unconfirmed]")," conditional branching is supported."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Shortcode nesting within is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display "You are not currently double opted in for our Advanced list." if the current logged in users status for the ActiveCampaign list with ID 23 is unconfirmed:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_email_unconfirmed list_id='23']\n  You are not currently double opted in for our Advanced list.\n[/mbr_is_email_unconfirmed]\n"))),(0,a.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,a.kt)("p",null,'Will display "Display this if contact is a SINGLE opt in." if the current logged in users status for the ActiveCampaign list with ID 17 is unconfirmed. Otherwise "For all others display this." will be displayed:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_email_unconfirmed list_id='17']\n  Display this if contact is a SINGLE opt in.\n[ELSE_is_email_unconfirmed]\n  For all others display this.\n[/mbr_is_email_unconfirmed]\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"For direct use in PHP code use the conditional function ",(0,a.kt)("inlineCode",{parentName:"p"},"mbr_is_email_unconfirmed($list_id)")," in a structure as illustrated here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$list_id = 5;\nIF (mbr_is_email_unconfirmed($list_id)) :\n  echo 'You are not confirmed for our content emails.';\nENDIF;\n")))}f.isMDXComponent=!0}}]);