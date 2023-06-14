"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(87462),n=r(67294),l=r(86010),i=r(12466),s=r(16550),o=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=b({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),h=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==s&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function _(e){const t=(0,h.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},46139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),l=r(74866),i=r(85162);const s={id:"mbr_email_status",title:"mbr_email_status",description:"The ActiveMember360 shortcode mbr_email_status returns the email status of the currrent logged in user for a specific ActiveCampaign list.",sidebar_label:"mbr_email_status"},o=void 0,u={unversionedId:"shortcodes/mbr_email_status",id:"shortcodes/mbr_email_status",title:"mbr_email_status",description:"The ActiveMember360 shortcode mbr_email_status returns the email status of the currrent logged in user for a specific ActiveCampaign list.",source:"@site/docs/shortcodes/mbr_email_status.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_email_status",permalink:"/shortcodes/mbr_email_status",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_email_status",title:"mbr_email_status",description:"The ActiveMember360 shortcode mbr_email_status returns the email status of the currrent logged in user for a specific ActiveCampaign list.",sidebar_label:"mbr_email_status"},sidebar:"shortcodes",previous:{title:"mbr_cookie",permalink:"/shortcodes/mbr_cookie"},next:{title:"mbr_http_get",permalink:"/shortcodes/mbr_http_get"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],p={toc:d},m="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode returns the email status of the currrent logged in user for a specific ActiveCampaign list."),(0,n.kt)("p",null,"The returned value will be one of the following: ",(0,n.kt)("strong",{parentName:"p"},"active"),", ",(0,n.kt)("strong",{parentName:"p"},"unconfirmed"),", ",(0,n.kt)("strong",{parentName:"p"},"unsubscribed"),", ",(0,n.kt)("strong",{parentName:"p"},"bounced"),", or ",(0,n.kt)("strong",{parentName:"p"},"Contact not related to this list.")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"list_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign list ID for which the email status should be returned for the current logged in user. The list_id can be determined in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display your ActiveCampaign application lists and list IDs."},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is only evaluated for ",(0,n.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,n.kt)("p",null,"In all other cases, including WordPress users with the ",(0,n.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be returned."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_email_status]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Will return the email status for the current logged in user for the ActiveCampaign list with ID 23:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_email_status list_id='23']\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"For direct use in PHP code use the conditional function ",(0,n.kt)("inlineCode",{parentName:"p"},"mbr_email_status($list_id)")," in a structure as illustrated here:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$list_id = 5;\necho mbr_email_status($list_id);\n")))}b.isMDXComponent=!0}}]);