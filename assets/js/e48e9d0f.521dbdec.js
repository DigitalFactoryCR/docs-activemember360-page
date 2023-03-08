"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75320],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,c]=g({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var b=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},68538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),o=a(85162);const l={id:"mbr_update_contact",title:"mbr_update_contact",description:"The ActiveMember360 shortcode mbr_update_contact updates the ActiveCampaign contact record associated with the logged in WordPress user.",sidebar_label:"mbr_update_contact"},s=void 0,c={unversionedId:"shortcodes/mbr_update_contact",id:"shortcodes/mbr_update_contact",title:"mbr_update_contact",description:"The ActiveMember360 shortcode mbr_update_contact updates the ActiveCampaign contact record associated with the logged in WordPress user.",source:"@site/docs/shortcodes/mbr_update_contact.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_update_contact",permalink:"/shortcodes/mbr_update_contact",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_update_contact",title:"mbr_update_contact",description:"The ActiveMember360 shortcode mbr_update_contact updates the ActiveCampaign contact record associated with the logged in WordPress user.",sidebar_label:"mbr_update_contact"},sidebar:"shortcodes",previous:{title:"mbr_texpand",permalink:"/shortcodes/mbr_texpand"},next:{title:"Payment Module Shortcodes",permalink:"/category/module-payment-shortcodes"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"This shortcode updates the ActiveCampaign contact record associated with the logged in WordPress user."),(0,r.kt)("p",null,"It can be used to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add and remove tags"),(0,r.kt)("li",{parentName:"ul"},"Update any contact fields"),(0,r.kt)("li",{parentName:"ul"},"Add and remove the contact from automations"),(0,r.kt)("li",{parentName:"ul"},"Subscribe and unsubscribe the contact from lists.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field=value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the name of an ActiveCampaign contact field to update and the value to update it with. The field can be any contact field in ActiveCampaign, e.g. first_name, last_name, phone, my_custom_field etc. The available field names can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),". The lower case version of the Perstag should be used as the field name.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"assign_tags"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's or tag names defined within ActiveCampaign to add to the contact. The available tags can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remove_tags"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's or tag names defined within ActiveCampaign to remove from the contact. The available tags can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"assign_automations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One or more automation ID's defined within ActiveCampaign to add to the contact. The available automations can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#automations",title:"Click to learn how to display the available ActiveCampaign automations"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Automations")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remove_automations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One or more automation ID's defined within ActiveCampaign to remove from the contact. The available automations can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#automations",title:"Click to learn how to display the available ActiveCampaign automations"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Automations")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"subscribe_lists"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to subscribe the contact to. The available lists can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display the available ActiveCampaign lists"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"unsubscribe_lists"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to unsubscribe the contact from. The available lists can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display the available ActiveCampaign lists"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"unsubscribe_reason"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reason for using ",(0,r.kt)("inlineCode",{parentName:"td"},"unsubscribe_lists"),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," Contact unsubscribed on site ",(0,r.kt)("a",{parentName:"td",href:"https://yoursite.com%E2%80%9D"},"https://yoursite.com\u201d")," (the site URL will be the site on which they unsubscribed)",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"autocreate_tags"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set to yes non-existent tags in your ActiveCampaign application specified for the assign_tags parameter will be automatically created. If the tag does not exist the value for assign_tags will be used as the tag name.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," yes",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,r.kt)("admonition",{title:"Tag ID's vs. tag names",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The use of tag ID's over tag names is encouraged. Unless a tag is deleted, its tag ID can be considered persistent and unique. Tag names, on the other hand, can be changed at any time and do not need to be unique. Using a tag name that is not unique or has been changed can cause your shortcode, hook or module to no longer work as expected.")),(0,r.kt)("h2",{id:"validity"},"Validity"),(0,r.kt)("p",null,"This shortcode is only processed for ",(0,r.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,r.kt)("p",null,"In all other cases, including WordPress users with the ",(0,r.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be processed."),(0,r.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,r.kt)("p",null,"This shortcode does ",(0,r.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,r.kt)("strong",{parentName:"p"},"[ELSE_update_contact]"),"."),(0,r.kt)("h2",{id:"nesting"},"Nesting"),(0,r.kt)("p",null,"Shortcode nesting is ",(0,r.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,r.kt)("p",null,"Update the currently logged in users ActiveCampaign contact field ",(0,r.kt)("inlineCode",{parentName:"p"},"first_name")," to ",(0,r.kt)("strong",{parentName:"p"},"John"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_update_contact field='first_name' value='John']\n"))),(0,r.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,r.kt)("p",null,"Update the currently logged in users ActiveCampaign contact field; ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:john@example.com"},"john@example.com"))," and ",(0,r.kt)("inlineCode",{parentName:"p"},"my_custom_field")," to ",(0,r.kt)("strong",{parentName:"p"},"12345"),". Please note the email update will also update the email address for the logged in WordPress user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_update_contact email='john@example.com' my_custom_field='12345']\n"))),(0,r.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,r.kt)("p",null,"Update the currently logged in user's ActiveCampaign contact field ",(0,r.kt)("inlineCode",{parentName:"p"},"my_custom_field")," to ",(0,r.kt)("strong",{parentName:"p"},"12345"),". Also assign tag IDs ",(0,r.kt)("strong",{parentName:"p"},"123"),", ",(0,r.kt)("strong",{parentName:"p"},"456")," and tag name ",(0,r.kt)("strong",{parentName:"p"},"My Tag Name")," to the contact. Do not autocreate any tags specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"assign_tags")," parameter if they do not exist in the ActiveCampaign application i.e are not found in ",(0,r.kt)("a",{parentName:"p",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_update_contact my_custom_field='12345' assign_tags='123,My Tag Name,456' autocreate_tags='no']\n"))),(0,r.kt)(o.Z,{value:"ex4",mdxType:"TabItem"},(0,r.kt)("p",null,"Update the currently logged in user's ActiveCampaign contact field ",(0,r.kt)("inlineCode",{parentName:"p"},"my_custom_field_2")," to ",(0,r.kt)("strong",{parentName:"p"},"12345"),". Also assign ActiveCampaign tag IDs ",(0,r.kt)("strong",{parentName:"p"},"123"),", ",(0,r.kt)("strong",{parentName:"p"},"456")," and tag name ",(0,r.kt)("strong",{parentName:"p"},"My Tag Name")," to the contact and remove tags IDs ",(0,r.kt)("strong",{parentName:"p"},"987"),", ",(0,r.kt)("strong",{parentName:"p"},"876")," and tag name ",(0,r.kt)("strong",{parentName:"p"},"Another Tag Name"),". Autocreate any tags specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"assign_tags")," parameter if they do not exist in the ActiveCampaign application i.e are not found in ",(0,r.kt)("a",{parentName:"p",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". In addition add the contact to the ActiveCampaign automation with id ",(0,r.kt)("strong",{parentName:"p"},"65"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_update_contact my_custom_field_2='98765' assign_tags='123,My Tag Name,456' remove_tags='987,Another Tag Name,876' assign_automation='65']\n")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}g.isMDXComponent=!0}}]);