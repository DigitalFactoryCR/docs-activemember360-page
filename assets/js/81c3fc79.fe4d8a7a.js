"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),s=r(16550),i=r(91980),u=r(67392),p=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=c(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=f({queryString:r,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var h=r(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==s&&(d(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},49381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),l=r(85162);const s={id:"mbr_post",title:"mbr_post",description:"The ActiveMember360 shortcode mbr_post returns data from a specified page/post record in your WordPress database.",sidebar_label:"mbr_post"},i=void 0,u={unversionedId:"shortcodes/mbr_post",id:"shortcodes/mbr_post",title:"mbr_post",description:"The ActiveMember360 shortcode mbr_post returns data from a specified page/post record in your WordPress database.",source:"@site/docs/shortcodes/mbr_post.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_post",permalink:"/shortcodes/mbr_post",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_post",title:"mbr_post",description:"The ActiveMember360 shortcode mbr_post returns data from a specified page/post record in your WordPress database.",sidebar_label:"mbr_post"},sidebar:"shortcodes",previous:{title:"mbr_permalink",permalink:"/shortcodes/mbr_permalink"},next:{title:"mbr_post_id",permalink:"/shortcodes/mbr_post_id"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],c={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode returns data from a specified page/post record in your WordPress database."),(0,n.kt)("p",null,"It provides a means of duplicating content on alternate pages/posts with a different set of access conditions but without the need to maintain several content sources."),(0,n.kt)("p",null,"Furthermore, by allowing content parts to be drawn from several different pages/posts, it extends the content management capabilities of WordPress."),(0,n.kt)("p",null,"This shortcode is the identical to ",(0,n.kt)("a",{parentName:"p",href:"/shortcodes/mbr_page",title:"Click to learn how to use the [mbr_page] shortcode"},(0,n.kt)("strong",{parentName:"a"},"[mbr_page]"))," and is provided as a means of self-documenting your intentions."),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Please excercise care and ensure that you do not create cyclical references e.g. 'Post 1' is not pulling content from 'Post 2', which itself is pulling content from 'Post 1'.")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The post ID i.e. ",(0,n.kt)("inlineCode",{parentName:"td"},"post_id")," for which to return the specified field data.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"field"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the name of a WordPress post field to return. Any field used within the WordPress post or post_meta table can be specified.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Some Permitted Values:")," post_title, post_date, post_content, post_excerpt.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," post_content",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the post status required in the ",(0,n.kt)("inlineCode",{parentName:"td"},"post_status")," field for the returned data to be displayed.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"excert_fb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies whether a fallback to the excerpt is used if the status is not met. Please note that this ONLY applies when the specified field is set to ",(0,n.kt)("inlineCode",{parentName:"td"},"post_content"),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permitted Values:")," yes, y, true, t, or 1.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is evaluated for ",(0,n.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_post]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting within is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the value of the field ",(0,n.kt)("inlineCode",{parentName:"p"},"post_title")," for the post with id 1234:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_post id='1234' field='post_title']\n"))),(0,n.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the value of the field ",(0,n.kt)("inlineCode",{parentName:"p"},"post_content")," for the post with id 1234:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_post id='1234' field='post_content']\n"))),(0,n.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the value of the field ",(0,n.kt)("inlineCode",{parentName:"p"},"post_excerpt")," for the post with id 1234:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_post id='1234' field='post_excerpt']\n"))),(0,n.kt)(l.Z,{value:"ex4",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the value of the field ",(0,n.kt)("inlineCode",{parentName:"p"},"post_excerpt")," for the post with id 1234 but only if the ",(0,n.kt)("inlineCode",{parentName:"p"},"post_status")," for that post is set to publish, otherwise nothing will be returned:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_post id='1234' field='post_excerpt' status='publish']\n"))),(0,n.kt)(l.Z,{value:"ex5",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the value of the field ",(0,n.kt)("inlineCode",{parentName:"p"},"post_content")," for the post with id 1234 but only if the ",(0,n.kt)("inlineCode",{parentName:"p"},"post_status")," for that post is set to publish. If the ",(0,n.kt)("inlineCode",{parentName:"p"},"post_content")," field is empty then the value of the field ",(0,n.kt)("inlineCode",{parentName:"p"},"post_excerpt")," will be returned instead:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_post id='1234' field='post_content' status='publish' excerptfb='1']\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"For direct use in PHP code use the structure as illustrated here:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$my_excerpt = mbr_page( array( 'id'=>'1234', 'field'=>'post_excerpt' ) );\n")))}f.isMDXComponent=!0}}]);