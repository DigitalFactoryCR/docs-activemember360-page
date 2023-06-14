"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5822],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>b});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),u=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(r),m=n,b=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(b,i(i({ref:e},p),{},{components:r})):a.createElement(b,i({ref:e},p))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:n,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(67294),n=r(86010);const l={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:r,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:r},e)}},74866:(t,e,r)=>{r.d(e,{Z:()=>v});var a=r(87462),n=r(67294),l=r(86010),i=r(12466),s=r(16550),o=r(91980),u=r(67392),p=r(50012);function c(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:r,attributes:a,default:n}}=t;return{value:e,label:r,attributes:a,default:n}}))}function d(t){const{values:e,children:r}=t;return(0,n.useMemo)((()=>{const t=e??c(r);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function m(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:r}=t;const a=(0,s.k6)(),l=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,o._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function k(t){const{defaultValue:e,queryString:r=!1,groupId:a}=t,l=d(t),[i,s]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=r.find((t=>t.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:l}))),[o,u]=b({queryString:r,groupId:a}),[c,k]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,p.Nk)(r);return[a,(0,n.useCallback)((t=>{r&&l.set(t)}),[r,l])]}({groupId:a}),h=(()=>{const t=o??c;return m({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((t=>{if(!m({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);s(t),u(t),k(t)}),[u,k,l]),tabValues:l}}var h=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:r,selectedValue:s,selectValue:o,tabValues:u}=t;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=t=>{const e=t.currentTarget,r=p.indexOf(e),a=u[r].value;a!==s&&(c(e),o(a))},m=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const r=p.indexOf(t.currentTarget)+1;e=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(t.currentTarget)-1;e=p[r]??p[p.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},e)},u.map((t=>{let{value:e,label:r,attributes:i}=t;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:t=>p.push(t),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===e})}),r??e)})))}function N(t){let{lazy:e,children:r,selectedValue:a}=t;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===a));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function y(t){const e=k(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(f,(0,a.Z)({},t,e)),n.createElement(N,(0,a.Z)({},t,e)))}function v(t){const e=(0,h.Z)();return n.createElement(y,(0,a.Z)({key:String(e)},t))}},86147:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),l=r(74866),i=r(85162);const s={id:"mbr_list",title:"mbr_list",description:"The ActiveMember360 shortcode mbr_list subscribes/unsubscribes an ActiveCampaign contact to/from ActiveCampaign lists.",sidebar_label:"mbr_list"},o=void 0,u={unversionedId:"shortcodes/mbr_list",id:"shortcodes/mbr_list",title:"mbr_list",description:"The ActiveMember360 shortcode mbr_list subscribes/unsubscribes an ActiveCampaign contact to/from ActiveCampaign lists.",source:"@site/docs/shortcodes/mbr_list.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_list",permalink:"/shortcodes/mbr_list",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_list",title:"mbr_list",description:"The ActiveMember360 shortcode mbr_list subscribes/unsubscribes an ActiveCampaign contact to/from ActiveCampaign lists.",sidebar_label:"mbr_list"},sidebar:"shortcodes",previous:{title:"mbr_jdelay",permalink:"/shortcodes/mbr_jdelay"},next:{title:"mbr_log_event",permalink:"/shortcodes/mbr_log_event"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],d={toc:c},m="wrapper";function b(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode subscribes/unsubscribes an ActiveCampaign contact to/from ActiveCampaign lists. The contact is either that linked with the logged in user, or the contact specified."),(0,n.kt)("p",null,"The shortcode can be run automatically or used to generate a button or link within a page or post that, when clicked, will subscribe/unsubscribe the contact to/from the lists."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign contact ID of the contact to add to or remove from automations. ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," Current logged in user contact ID.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"subscribe"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to subscribe the contact to. The available lists can be found in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display the available ActiveCampaign lists"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),". If more than one is entered, please separate with commas.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," Yes if ",(0,n.kt)("inlineCode",{parentName:"td"},"unsubscribe")," parameter not set.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unsubsribe"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to unsubscribe the contact from. The available lists can be found in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display the available ActiveCampaign lists"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),". If more than one is entered, please separate with commas.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," Yes if ",(0,n.kt)("inlineCode",{parentName:"td"},"subscribe")," parameter not set.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unsubscribe_reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reason for using ",(0,n.kt)("inlineCode",{parentName:"td"},"unsubscribe"),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," Contact unsubscribed on site",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"autorun"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If set to yes the shortcode will execute without waiting for user input. Otherwise it will generate a form and a submit button or link_style and wait for user input. If set to yes the following parameters will be ignored; ",(0,n.kt)("inlineCode",{parentName:"td"},"link_text"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"link_style"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"button_text"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"button_image"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"button_style"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"redirect_popup"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"aftertext"),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permissible Values:")," yes",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_text"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The text to display for the link.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," Click here to submit",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_style"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the link.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_link",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The CSS ID to apply for the link.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_link",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_class"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The CSS class to apply for the link.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_link",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_text"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The text to displayin the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," Click here to submit",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_image"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The URL of the image to use for the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_style"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_btn",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The CSS ID to apply for the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_btn",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_class"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The CSS class to apply for the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_btn",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"redirect"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The URL to send the user to after subscribing/unsubscribing the contact to/from the lists. A special value can be passed, #reload#, to force all shortcodes on the page to resolve based on the latest changes that may have been introduced by processing this shortcode.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"redirect_popup"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the user will be redirected to a new window after clicking the link or button. Only used if the ",(0,n.kt)("inlineCode",{parentName:"td"},"redirect")," parameter is set. ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permissible Values:")," yes",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"after_text"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The text that should be displayed after the shortcode has been processed, if the user hasn\u2019t been redirected.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," Your request was processed",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is only processed for ",(0,n.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,n.kt)("p",null,"In all other cases, including WordPress users with the ",(0,n.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be processed."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_list]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Subscribe the contact linked with the logged in user to the ActiveCampaign lists with IDs ",(0,n.kt)("strong",{parentName:"p"},"8")," and ",(0,n.kt)("strong",{parentName:"p"},"9")," when they click on the link labelled 'Click here'. When processing has completed display reload the current page:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_list subscribe='8,9' redirect='#reload#' link_text='Click here']\n"))),(0,n.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Subscribe the contact linked with the logged in user to the ActiveCampaign lists with IDs ",(0,n.kt)("strong",{parentName:"p"},"1"),", ",(0,n.kt)("strong",{parentName:"p"},"5")," and ",(0,n.kt)("strong",{parentName:"p"},"6")," and unsubscribe them from the lists with IDs ",(0,n.kt)("strong",{parentName:"p"},"7")," and ",(0,n.kt)("strong",{parentName:"p"},"8"),". Process this automatically as soon as they visit the page. When processing has completed display 'Your request was processed':"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_list autorun='yes' subscribe='1,5,6' unsubscribe='7,8']\n"))),(0,n.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,"Subscribe the contact with ActiveCampaign contact ID ",(0,n.kt)("strong",{parentName:"p"},"1234")," to the ActiveCampaign lists with IDs ",(0,n.kt)("strong",{parentName:"p"},"1"),", ",(0,n.kt)("strong",{parentName:"p"},"3")," and ",(0,n.kt)("strong",{parentName:"p"},"5"),". Process this automatically as soon as the page is visited. No message will be shown when processing has completed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_list cid='1234' subscribe='1,3,5' autorun='yes']\n"))),(0,n.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,n.kt)("p",null,"Subscribe the contact linked with the logged in user to the ActiveCampaign lists with IDs ",(0,n.kt)("strong",{parentName:"p"},"1"),", ",(0,n.kt)("strong",{parentName:"p"},"5")," and ",(0,n.kt)("strong",{parentName:"p"},"7")," and unsubscribe them from the lists with IDs ",(0,n.kt)("strong",{parentName:"p"},"10")," and ",(0,n.kt)("strong",{parentName:"p"},"12")," when they click on the link labelled 'Click here'. When processing has completed redirect to the URL ",(0,n.kt)("a",{parentName:"p",href:"https://mysite.com"},"https://mysite.com"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_list subscribe='1,5,7' unsubscribe='10,12' button_text='Click here' redirect='https://mysite.com']\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}b.isMDXComponent=!0}}]);