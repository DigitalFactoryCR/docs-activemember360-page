"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95274],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(o,".").concat(d)]||p[d]||g[d]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(87462),a=r(67294),i=r(86010),l=r(12466),s=r(16550),o=r(91980),u=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function g(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=g(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,u]=m({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),f=(()=>{const e=o??p;return d({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var f=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),g=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(p(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:g},l,{className:(0,i.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},62767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),i=r(74866),l=r(85162);const s={id:"mbr_signup_link",title:"mbr_signup_link",description:"The ActiveMember360 shortcode mbr_signup_link returns a HTML link to the sign up URL specified in ActiveMember360, Settings, Special Pages, Select your registration/sign-up page or Set registration/sign-up page to external URL.",sidebar_label:"mbr_signup_link"},o=void 0,u={unversionedId:"shortcodes/mbr_signup_link",id:"shortcodes/mbr_signup_link",title:"mbr_signup_link",description:"The ActiveMember360 shortcode mbr_signup_link returns a HTML link to the sign up URL specified in ActiveMember360, Settings, Special Pages, Select your registration/sign-up page or Set registration/sign-up page to external URL.",source:"@site/docs/shortcodes/mbr_signup_link.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_signup_link",permalink:"/shortcodes/mbr_signup_link",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_signup_link",title:"mbr_signup_link",description:"The ActiveMember360 shortcode mbr_signup_link returns a HTML link to the sign up URL specified in ActiveMember360, Settings, Special Pages, Select your registration/sign-up page or Set registration/sign-up page to external URL.",sidebar_label:"mbr_signup_link"},sidebar:"shortcodes",previous:{title:"mbr_session",permalink:"/shortcodes/mbr_session"},next:{title:"mbr_site",permalink:"/shortcodes/mbr_site"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],g={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This shortcode returns a HTML link for the page/post/URL specified in ",(0,a.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-registrationsign-up-page",title:"Click to learn how to specify a registration/sign-up page"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Select your registration/sign-up page"))," or ",(0,a.kt)("a",{parentName:"p",href:"/settings/special-pages#set-registrationsign-up-page-to-external-url",title:"Click to learn how to specify an external registration/sign-up URL"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Set registration/sign-up to external URL")),"."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"text"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specifies the text to use for the HTML link.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," Click here to register",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,a.kt)("h2",{id:"validity"},"Validity"),(0,a.kt)("p",null,"This shortcode is evaluated for ",(0,a.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,a.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,a.kt)("p",null,"This shortcode does ",(0,a.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,a.kt)("strong",{parentName:"p"},"[ELSE_signup_link]"),"."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Shortcode nesting is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,a.kt)("p",null,"Will return the HTML link that when clicked will redirect the visitor to the page/post defined in ",(0,a.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-registrationsign-up-page",title:"Click to learn how to specify a registration/sign-up page"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Select your registration/sign-up page"))," or ",(0,a.kt)("a",{parentName:"p",href:"/settings/special-pages#set-registrationsign-up-page-to-external-url",title:"Click to learn how to specify an external registration/sign-up URL"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Set registration/sign-up page to external URL")),".The link anchor text be displayed as ",(0,a.kt)("strong",{parentName:"p"},"Click here to signup"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_signup_link text='Click here to signup']\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"For direct use in PHP code use the function ",(0,a.kt)("inlineCode",{parentName:"p"},"mbr_signup_link('link_text')")," in a structure as illustrated here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"echo mbr_signup_link('Click here to register');\n")))}m.isMDXComponent=!0}}]);