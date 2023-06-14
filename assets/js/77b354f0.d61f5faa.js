"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),s=a(86010),o=a(12466),l=a(16550),i=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,c]=h({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),f=(()=>{const e=i??d;return m({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,s.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(_,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},16252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),s=a(74866),o=a(85162);const l={id:"mbr_is_allowed_access",title:"mbr_is_allowed_access",description:"The ActiveMember360 shortcode mbr_is_allowed_access determines the content to be included based upon whether the visitor has access to a specified page/post.",sidebar_label:"mbr_is_allowed_access"},i=void 0,c={unversionedId:"shortcodes/mbr_is_allowed_access",id:"shortcodes/mbr_is_allowed_access",title:"mbr_is_allowed_access",description:"The ActiveMember360 shortcode mbr_is_allowed_access determines the content to be included based upon whether the visitor has access to a specified page/post.",source:"@site/docs/shortcodes/mbr_is_allowed_access.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_allowed_access",permalink:"/shortcodes/mbr_is_allowed_access",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_is_allowed_access",title:"mbr_is_allowed_access",description:"The ActiveMember360 shortcode mbr_is_allowed_access determines the content to be included based upon whether the visitor has access to a specified page/post.",sidebar_label:"mbr_is_allowed_access"},sidebar:"shortcodes",previous:{title:"mbr_is_admin",permalink:"/shortcodes/mbr_is_admin"},next:{title:"mbr_is_bot",permalink:"/shortcodes/mbr_is_bot"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode determines the content to be included based upon whether the visitor has access to a specified page/post."),(0,n.kt)("p",null,"It has many use cases and can be particularly useful when used in conjunction with ",(0,n.kt)("a",{parentName:"p",href:"/shortcodes/mbr_page",title:"Click to learn how to use the [mbr_page] shortcode"},(0,n.kt)("strong",{parentName:"a"},"[mbr_page]")),"/",(0,n.kt)("a",{parentName:"p",href:"/shortcodes/mbr_post",title:"Click to learn how to use the [mbr_post] shortcode"},(0,n.kt)("strong",{parentName:"a"},"[mbr_post]"))," to combine various content elements into a another page/post."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The page or post ID for which to check the current visitor's access conditions.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," Current page/post post_id.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"limit_else"),(0,n.kt)("td",{parentName:"tr",align:"left"},'If set to "yes" and the user is not logged in or does not have any ActiveCampaign contact tags that define a membership as selected in ',(0,n.kt)("a",{parentName:"td",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships")),' this parameter will cause the "ELSE" part of the shortcode to be suppressed. This can be useful in scenarios where the "ELSE" portion of the shortcode is only applicable to members of the site, for example excluding visitors who are not logged in.',(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," no.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is evaluated for ",(0,n.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"[ELSE_is_allowed_access]")," conditional branching is supported."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(s.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,'Will display "Display this content as allowed access." if the visitor is logged in and satisfy the conditions to access the current page/post where the shortcode is used:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_is_allowed_access]\nDisplay this content as allowed access.\n[/mbr_is_allowed_access]\n"))),(0,n.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,'Will display "Display this content as allowed access." if the visitor is logged in and satisfy the conditions to access the page/post with post_id equal to 1234:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_is_allowed_access post_id='1234']\nDisplay this content as allowed access.\n[/mbr_is_allowed_access]\n"))),(0,n.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,'Will display "Display this content as allowed access." if the visitor is logged in and satisfy the conditions to access the page/post with post_id equal to 1234. Otherwise will display "Please signup to be able to access this content.":'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_is_allowed_access post_id='1234']\nDisplay this content as allowed access.\n[ELSE_is_allowed_access]\nPlease signup to be able to access this content.\n[/mbr_is_allowed_access]\n"))),(0,n.kt)(o.Z,{value:"ex4",mdxType:"TabItem"},(0,n.kt)("p",null,'Will display "Display this content as allowed access." if the visitor is logged in and satisfy the conditions to access the page/post with post_id equal to 1234. Otherwise will display "Please upgrade your membership to be able to access this content." but only if the visitor is logged in and a member of the site:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_is_allowed_access post_id='1234' limit_else='yes']\nDisplay this content as allowed access.\n[ELSE_is_allowed_access]\nPlease upgrade your membership to be able to access this content.\n[/mbr_is_allowed_access]\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is no ActiveMember360 API function equivalent for this shortcode. Please use standard PHP functions.")))}h.isMDXComponent=!0}}]);