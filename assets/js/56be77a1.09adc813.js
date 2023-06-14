"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return a?r.createElement(b,o(o({ref:t},d),{},{components:a})):r.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:a,groupId:r}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==i&&(c(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},17223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={id:"mbr_jdelay",title:"mbr_jdelay",description:"The ActiveMember360 shortcode mbr_jdelay applies a jQuery \u201canimation\u201d against an existing CSS ID or one created automatically.",sidebar_label:"mbr_jdelay"},s=void 0,u={unversionedId:"shortcodes/mbr_jdelay",id:"shortcodes/mbr_jdelay",title:"mbr_jdelay",description:"The ActiveMember360 shortcode mbr_jdelay applies a jQuery \u201canimation\u201d against an existing CSS ID or one created automatically.",source:"@site/docs/shortcodes/mbr_jdelay.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_jdelay",permalink:"/shortcodes/mbr_jdelay",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_jdelay",title:"mbr_jdelay",description:"The ActiveMember360 shortcode mbr_jdelay applies a jQuery \u201canimation\u201d against an existing CSS ID or one created automatically.",sidebar_label:"mbr_jdelay"},sidebar:"shortcodes",previous:{title:"mbr_include_once",permalink:"/shortcodes/mbr_include_once"},next:{title:"mbr_list",permalink:"/shortcodes/mbr_list"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],p={toc:c},m="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode applies a jQuery \u201canimation\u201d against an existing CSS ID or one created automatically."),(0,n.kt)("p",null,"It enables the timed/delayed fading in and out of CSS elements."),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Please note that the closing shortcode tag ",(0,n.kt)("inlineCode",{parentName:"p"},"[/mbr_jdelay]")," is necessary if the shortcode is used more than once within a page or post.")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of an existing CSS ID to which the shortcode should be applied. If not specified, one will be created automatically.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fade_out"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Determines whether the element will initially be displayed or not. If not specified, 0 is assumed and initial display will be suppressed. Any value higher than 0 will display the element for that many seconds before applying the remaining actions.",(0,n.kt)("strong",{parentName:"td"},"Default:")," 0",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delay_show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The delay in seconds until the element will be shown.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fade_show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The gradual opacity steps in seconds until the element will be fully visible.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delay_hide"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The delay in seconds until the element will be hidden.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fade_hide"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The gradual opacity steps in seconds until the element will be fully invisible.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is evaluated for ",(0,n.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_jdelay]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,'Displays "My message" immediately the visitor lands on the page and hides it 5 seconds later:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_jdelay fade_out='5']\nMy message\n[/mbr_jdelay]\n"))),(0,n.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,'Displays "My message" after 5 seconds of the visitor landing on the page and hides t 5 seconds later:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_jdelay delay_show='5' delay_hide='5']\nMy message\n[/mbr_jdelay]\n"))),(0,n.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,"Displays the HTML tag with CSS ID ",(0,n.kt)("strong",{parentName:"p"},"test")," immediately the visitor lands on the page and hides it 5 seconds later:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_jdelay id='test' fade_out='5']\n[/mbr_jdelay]\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}b.isMDXComponent=!0}}]);