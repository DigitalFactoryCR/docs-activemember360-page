"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29219],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>h});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return t?a.createElement(h,o(o({ref:r},i),{},{components:t})):a.createElement(h,o({ref:r},i))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>o});var a=t(67294),n=t(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:r,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:t},r)}},74866:(e,r,t)=>{t.d(r,{Z:()=>k});var a=t(87462),n=t(67294),s=t(86010),o=t(12466),l=t(16550),u=t(91980),c=t(67392),i=t(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}function d(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??p(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=d(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[u,c]=h({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,i.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=u??p;return m({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var g=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:r,block:t,selectedValue:l,selectValue:u,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const r=e.currentTarget,t=i.indexOf(r),a=c[t].value;a!==l&&(p(r),u(a))},m=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},r)},c.map((e=>{let{value:r,label:t,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,key:r,ref:e=>i.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===r})}),t??r)})))}function v(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a}))))}function y(e){const r=b(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},n.createElement(_,(0,a.Z)({},e,r)),n.createElement(v,(0,a.Z)({},e,r)))}function k(e){const r=(0,g.Z)();return n.createElement(y,(0,a.Z)({key:String(r)},e))}},75999:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=t(87462),n=(t(67294),t(3905)),s=t(74866),o=t(85162);const l={id:"mbr_lms_show_course_progress_percentage",title:"mbr_lms_show_course_progress_percentage",description:"The ActiveMember360 LMS shortcode mbr_lms_show_course_progress_percentage returns the course progress for the current logged-in user as a percentage display.",sidebar_label:"mbr_lms_show_course_progress_percentage"},u=void 0,c={unversionedId:"lms/shortcodes/mbr_lms_show_course_progress_percentage",id:"lms/shortcodes/mbr_lms_show_course_progress_percentage",title:"mbr_lms_show_course_progress_percentage",description:"The ActiveMember360 LMS shortcode mbr_lms_show_course_progress_percentage returns the course progress for the current logged-in user as a percentage display.",source:"@site/docs/lms/shortcodes/mbr_lms_show_course_progress_percentage.mdx",sourceDirName:"lms/shortcodes",slug:"/lms/shortcodes/mbr_lms_show_course_progress_percentage",permalink:"/lms/shortcodes/mbr_lms_show_course_progress_percentage",draft:!1,tags:[],version:"current",lastUpdatedAt:1678463546,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"mbr_lms_show_course_progress_percentage",title:"mbr_lms_show_course_progress_percentage",description:"The ActiveMember360 LMS shortcode mbr_lms_show_course_progress_percentage returns the course progress for the current logged-in user as a percentage display.",sidebar_label:"mbr_lms_show_course_progress_percentage"},sidebar:"lms",previous:{title:"mbr_lms_show_course_progress_meter",permalink:"/lms/shortcodes/mbr_lms_show_course_progress_meter"},next:{title:"mbr_lms_show_lesson_completion",permalink:"/lms/shortcodes/mbr_lms_show_lesson_completion"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},m="wrapper";function h(e){let{components:r,...t}=e;return(0,n.kt)(m,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode returns the course progress for a course as a percentage display."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"course_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The course ID for which the progress should be displayed.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," The current course ID, if the current page is a course.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"round"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The decimal rounding to apply to the result.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is only evaluated for ",(0,n.kt)("strong",{parentName:"p"},"any user"),"."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_contact]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(s.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Display the course progress if the shortcode is placed on the course for which the course progress should be displayed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_lms_show_course_progress_percentage]\n"))),(0,n.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Display the course progress if the shortcode is not placed on the course to which the overview should be displayed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_lms_show_course_progress_percentage course_id='123']\n")))))}h.isMDXComponent=!0}}]);