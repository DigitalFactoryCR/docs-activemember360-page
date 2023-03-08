"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),p=n,h=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(87462),n=r(67294),o=r(86010),s=r(12466),l=r(16550),i=r(91980),u=r(67392),c=r(50012);function m(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:r,groupId:a}),[m,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=i??m;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var b=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==l&&(m(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},s,{className:(0,o.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=v(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},n.createElement(_,(0,a.Z)({},e,t)),n.createElement(w,(0,a.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return n.createElement(g,(0,a.Z)({key:String(t)},e))}},28271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),s=r(85162);const l={id:"mbr_lms_show_course_overview",title:"mbr_lms_show_course_overview",description:"The ActiveMember360 LMS shortcode mbr_lms_show_course_overview returns the course overview for a course.",sidebar_label:"mbr_lms_show_course_overview"},i=void 0,u={unversionedId:"lms/shortcodes/mbr_lms_show_course_overview",id:"lms/shortcodes/mbr_lms_show_course_overview",title:"mbr_lms_show_course_overview",description:"The ActiveMember360 LMS shortcode mbr_lms_show_course_overview returns the course overview for a course.",source:"@site/docs/lms/shortcodes/mbr_lms_show_course_overview.mdx",sourceDirName:"lms/shortcodes",slug:"/lms/shortcodes/mbr_lms_show_course_overview",permalink:"/lms/shortcodes/mbr_lms_show_course_overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1678203543,formattedLastUpdatedAt:"Mar 7, 2023",frontMatter:{id:"mbr_lms_show_course_overview",title:"mbr_lms_show_course_overview",description:"The ActiveMember360 LMS shortcode mbr_lms_show_course_overview returns the course overview for a course.",sidebar_label:"mbr_lms_show_course_overview"},sidebar:"lms",previous:{title:"mbr_lms_show_course_enrollment",permalink:"/lms/shortcodes/mbr_lms_show_course_enrollment"},next:{title:"mbr_lms_show_course_progress_meter",permalink:"/lms/shortcodes/mbr_lms_show_course_progress_meter"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m},p="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 LMS")," is currently in beta.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode returns the course overview for a course."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"course_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The course ID for which the overview should be displayed.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," The current course ID, if the current page is a course.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is only evaluated for ",(0,n.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,n.kt)("p",null,"In all other cases, including WordPress users with the ",(0,n.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be returned."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_contact]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Display the course overview if the shortcode is placed on the course for which the course should be displayed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_lms_show_course_overview]\n"))),(0,n.kt)(s.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Display the course overview if the shortcode is not placed on the course to which the overview should be displayed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_lms_show_course_overview course_id='123']\n")))))}h.isMDXComponent=!0}}]);