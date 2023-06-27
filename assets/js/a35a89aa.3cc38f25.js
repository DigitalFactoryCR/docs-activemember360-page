"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),s=r(91980),u=r(67392),d=r(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:r,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=r(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=d.indexOf(t),a=u[r].value;a!==i&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function g(e){const t=(0,b.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},2915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),l=r(85162);const i={id:"mbr_show_after",title:"mbr_show_after",description:"The ActiveMember360 shortcode mbr_show_after determines the content to be included based upon whether the current date is after the specified date adjusted as requested.",sidebar_label:"mbr_show_after"},s=void 0,u={unversionedId:"shortcodes/mbr_show_after",id:"shortcodes/mbr_show_after",title:"mbr_show_after",description:"The ActiveMember360 shortcode mbr_show_after determines the content to be included based upon whether the current date is after the specified date adjusted as requested.",source:"@site/docs/shortcodes/mbr_show_after.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_show_after",permalink:"/shortcodes/mbr_show_after",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"mbr_show_after",title:"mbr_show_after",description:"The ActiveMember360 shortcode mbr_show_after determines the content to be included based upon whether the current date is after the specified date adjusted as requested.",sidebar_label:"mbr_show_after"},sidebar:"shortcodes",previous:{title:"mbr_not_user_agent",permalink:"/shortcodes/mbr_not_user_agent"},next:{title:"mbr_show_before",permalink:"/shortcodes/mbr_show_before"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],p={toc:c},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode determines the content to be included based upon whether the current date is after the specified date adjusted as requested."),(0,n.kt)("p",null,"The specified date can be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The current date.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Any date formatted according to the the syntax rules set for PHP as detailed within ",(0,n.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Any ActiveCampaign contact date field. Most ActiveCampaign date fields are properly formatted and will function correctly."),(0,n.kt)("p",{parentName:"li"},"The date field is specified by using the ActiveCampaign personalization tag for the contact field (Perstag) with the characters % before and after the tag for the ",(0,n.kt)("inlineCode",{parentName:"p"},"date")," parameter. The available Perstags can be found in ",(0,n.kt)("a",{parentName:"p",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),"."),(0,n.kt)("p",{parentName:"li"},"Alternatively see ",(0,n.kt)("a",{parentName:"p",href:"/shortcodes/mbr_contact",title:"Click to learn how to use the [mbr_contact] shortcode"},(0,n.kt)("strong",{parentName:"a"},"[mbr_contact]"))," for information upon how to reference ActiveCamapign contact fields.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The logged in users registration date for WordPress specified by using ",(0,n.kt)("inlineCode",{parentName:"p"},"#USER_REGISTERED#")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"date")," parameter."))),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The specified date must provide a value that follows the syntax rules set for PHP as detailed within ",(0,n.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),". Most ActiveCampaign date fields are properly formatted and will work.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"adjust"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any text operator that follows the syntax rules as detailed for ",(0,n.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/function.strtotime.php",title:"Click to learn how to sepcify valid strtotime operators"},"PHP strtotime()"),". This will modify the specified date.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is evaluated for ",(0,n.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"[ELSE_show_after]")," conditional branching is supported."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting within is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Displays 'Here is the special offer' if the current date is after 2021-Dec-05:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_show_after date='20211205']\nHere is the special offer\n[/mbr_show_after]\n"))),(0,n.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Displays 'Here is the special offer' if the current date is after 2021-Dec-05 otherwise it returns 'Sorry the special offer is not yet available':"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_show_after date='20211205']\nHere is the special offer\n[ELSE_show_after]\nSorry the special offer is not yet available\n[/mbr_show_after]\n"))),(0,n.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,"Displays 'Here is the special offer' if the current date is after 2022-Mar-03 i.e. 2021-Dec-03 with 3 months added:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_show_after date='20211203' adjust='+3 months']\nHere is the special offer\n[/mbr_show_after]\n"))),(0,n.kt)(l.Z,{value:"ex4",mdxType:"TabItem"},(0,n.kt)("p",null,"Displays 'Here is your bonus for staying with us' if the current date is after the date of the logged in users WordPress registration with +30 days added:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_show_after date='#USER_REGISTERED#' adjust='+30 days']\nHere is your bonus for staying with us\n[/mbr_show_after]\n"))),(0,n.kt)(l.Z,{value:"ex5",mdxType:"TabItem"},(0,n.kt)("p",null,"Displays 'Here is your next lesson' if the current date is after the date stored within the ActiveCampaign contact field with perstag ",(0,n.kt)("inlineCode",{parentName:"p"},"joiningdate")," for the ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user"))," with 10 days added. Otherwise 'No further lessons yet available' is shown:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_show_after date='%JOININGDATE%' adjust='+10 days']\nHere is your next lesson\n[ELSE_show_after]\nNo further lessons yet available\n[/mbr_show_after]\n"))),(0,n.kt)(l.Z,{value:"ex6",mdxType:"TabItem"},(0,n.kt)("p",null,"Displays 'Here is your bonus content' if the current date is after the date stored within the ActiveCampaign contact field ",(0,n.kt)("inlineCode",{parentName:"p"},"my_custom_field")," for the ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user"))," with 1 week added:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_show_after date='[mbr_db_my_custom_field]' adjust='+1 week']\nHere is your bonus content\n[/mbr_show_after]\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}f.isMDXComponent=!0}}]);