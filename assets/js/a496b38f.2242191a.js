"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71955],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,f=c["".concat(s,".").concat(p)]||c[p]||m[p]||l;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:a,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=s??c;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var b=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==o&&(c(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(k,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},7287:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),i=a(85162);const o={id:"mbr_math",title:"mbr_math",description:"The ActiveMember360 shortcode mbr_math performs a calculation using the value stored in any contact field in your ActiveCampaign application.",sidebar_label:"mbr_math"},s=void 0,u={unversionedId:"shortcodes/mbr_math",id:"shortcodes/mbr_math",title:"mbr_math",description:"The ActiveMember360 shortcode mbr_math performs a calculation using the value stored in any contact field in your ActiveCampaign application.",source:"@site/docs/shortcodes/mbr_math.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_math",permalink:"/shortcodes/mbr_math",draft:!1,tags:[],version:"current",lastUpdatedAt:1666703286,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{id:"mbr_math",title:"mbr_math",description:"The ActiveMember360 shortcode mbr_math performs a calculation using the value stored in any contact field in your ActiveCampaign application.",sidebar_label:"mbr_math"},sidebar:"shortcodes",previous:{title:"mbr_login_form",permalink:"/shortcodes/mbr_login_form"},next:{title:"mbr_member_dir",permalink:"/shortcodes/mbr_member_dir"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],m={toc:c},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode performs a calculation using the value stored in any contact field in your ActiveCampaign application. The result can be stored in any contact field in your ActiveCampaign application and also returned/displayed in WordPress."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"field"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of an ActiveCampaign contact field to use as an operand. The field can be any contact field in ActiveCampaign. The available field names can be found in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),". The lower case version of the Perstag should be used as the field name.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"contact_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign contact ID of the contact for whom the shortcode should be executed. ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," Current logged in user contact ID.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"operation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The math operation to be performed.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permitted Values:")," add, sub (subtract), div (divide), mul (multiply), pow (power), mod (modulus), sqr (square root), max (maximum), min (minimum).",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The second operand for the math ",(0,n.kt)("inlineCode",{parentName:"td"},"operation")," to be performed. This can be any value including that stored in the specified contact field in ActiveCampaign. The available field names can be found in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),". The lower case version of the Perstag should be used as the field name.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes, except for sqrt (square root)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"target"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of an ActiveCampaign contact field in which to save the result. The field can be any contact field in ActiveCampaign. The available field names can be found in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),". The lower case version of the Perstag should be used as the field name. If set to the special value 'noupdate' no result will be stored.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," ",(0,n.kt)("inlineCode",{parentName:"td"},"field"),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"round"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The decimal rounding to apply to the result. If a positive value is provided the rounding will occur after the decimal point, if a negative value is provided the rounding will occur before the decimal point e.g -1 round to nearest ten. Halves are always rounded up. 0 means any value will be rounded to an integer",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," 0",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"flip"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the order of the operands should be switched.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permitted Values:")," 0, 1",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," 0 (no)",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"show"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies if the result of the operation should be returned to WordPress for display or used within another shortcode.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permitted Values:")," 0, 1",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," 1 (yes)",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"format"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A sprintf-type format string to apply to the result of the operation. The format must follow the syntax rules set for PHP as detailed within ",(0,n.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/function.sprintf.php",title:"Click to learn how to specify sprintf formatting"},"sprintf"),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Example Values:")," %d formats as an integer, %.2f formats as a floating number with 2 decimal places.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is only processed for ",(0,n.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,n.kt)("p",null,"In all other cases, including WordPress users with the ",(0,n.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be processed."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_math]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting within is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,'Returns the result of the calculation using the value stored in the field "fieldname1" with 300 added to it, storing the result back in the same field for the current logged in user:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_math field='fieldname1' operation='add' value='300' show='1']\n"))),(0,n.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,'Returns the result of the calculation using the value stored in the field "fieldname1" with 300 added to it, storing the result back in the same field for the contact whose contact id is stored in the contact field ',(0,n.kt)("inlineCode",{parentName:"p"},"affiliate_id")," of the current logged in user:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_contact contact_id='[mbr_db_affiliate_id]' field='fieldname1' operation='add' value='300' show='1']\n"))),(0,n.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,'Performs a calculation using the value stored in the field "fieldname1" divided by 2, storing the result back in the same field for the current logged in user:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_math field='fieldname1' operation='divide' value='2' show='0']\n"))),(0,n.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,n.kt)("p",null,'Performs a calculation using the value stored in the field "fieldname1" adding the value stored in the field "fieldname2". The result is rounded to two decimal places and stored as a floating number with 2 decimal places and is stored in the field "fieldname3" for the current logged in user:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_math field='fieldname1' operation='add' value='fieldname2' target='fieldname3' show='0' round='2' format='%.2f']\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}f.isMDXComponent=!0}}]);