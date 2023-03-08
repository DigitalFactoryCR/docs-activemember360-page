"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),f=n,p=c["".concat(d,".").concat(f)]||c[f]||m[f]||l;return a?r.createElement(p,o(o({ref:t},u),{},{components:a})):r.createElement(p,o({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),d=a(91980),s=a(67392),u=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,d._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[d,s]=p({queryString:a,groupId:r}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=d??c;return f({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,l]),tabValues:l}}var h=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:d,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=s[a].value;r!==i&&(c(t),d(r))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:m},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(g,(0,r.Z)({key:String(t)},e))}},13706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={id:"mbr_datediff",title:"mbr_datediff",description:"The ActiveMember360 shortcode mbr_datediff returns the difference between two specified date formatted as requested.",sidebar_label:"mbr_datediff"},d=void 0,s={unversionedId:"shortcodes/mbr_datediff",id:"shortcodes/mbr_datediff",title:"mbr_datediff",description:"The ActiveMember360 shortcode mbr_datediff returns the difference between two specified date formatted as requested.",source:"@site/docs/shortcodes/mbr_datediff.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_datediff",permalink:"/shortcodes/mbr_datediff",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_datediff",title:"mbr_datediff",description:"The ActiveMember360 shortcode mbr_datediff returns the difference between two specified date formatted as requested.",sidebar_label:"mbr_datediff"},sidebar:"shortcodes",previous:{title:"mbr_date",permalink:"/shortcodes/mbr_date"},next:{title:"mbr_email_change",permalink:"/shortcodes/mbr_email_change"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],m={toc:c},f="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode returns the difference between two specified date formatted as requested."),(0,n.kt)("p",null,"The specified dates can be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The current date."),(0,n.kt)("li",{parentName:"ul"},"Any date formatted according to the the syntax rules set for PHP as detailed within ",(0,n.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),"."),(0,n.kt)("li",{parentName:"ul"},"Any ActiveCampaign contact date field. Most ActiveCampaign date fields are properly formatted and will function correctly. See ",(0,n.kt)("a",{parentName:"li",href:"/shortcodes/mbr_contact",title:"Click to learn how to use the [mbr_contact] shortcode"},(0,n.kt)("strong",{parentName:"a"},"[mbr_contact]"))," for information upon how to reference ActiveCamapign contact fields.")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"from_date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The specified date must provide a value that follows the syntax rules set for PHP as detailed within ",(0,n.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),". Most ActiveCampaign date fields are properly formatted and will work.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," The current date.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"to_date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The specified date must provide a value that follows the syntax rules set for PHP as detailed within ",(0,n.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),". Most ActiveCampaign date fields are properly formatted and will work.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," The current date.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"format"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The desired format for the returned date difference. All fractions of days are rounded down.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permissible Values:")," For days use d, for months and days use md, for years months and days use ymd, for seconds use U",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," d",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is evaluated for ",(0,n.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_datediff]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting within is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the date difference as 121 days:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='20210901' to_date='20211231']\n"))),(0,n.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the date difference as 4 months and 1 days:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='20210901' to_date='20211231' format='md']\n"))),(0,n.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the date difference as 1 year 4 months and 1 days:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='20210901' to_date='20221231' format='ymd']\n"))),(0,n.kt)(o.Z,{value:"ex4",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the date difference as 10454400 seconds:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='20210901' to_date='20211231' format='U']\n"))),(0,n.kt)(o.Z,{value:"ex5",mdxType:"TabItem"},(0,n.kt)("p",null,"Returns the date difference between the date value stored in the ActiveCampaign contact field my_custom_field_2 and the date value stored in the ActiveCampaign contact field my_custom_field_1 as days:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='[mbr_db_my_custom_field_1]' to_date='[mbr_db_my_custom_field_2]']\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}p.isMDXComponent=!0}}]);