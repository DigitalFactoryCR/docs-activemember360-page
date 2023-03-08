"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59327],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=u(a),p=r,h=d["".concat(s,".").concat(p)]||d[p]||c[p]||o;return a?n.createElement(h,i(i({ref:e},m),{},{components:a})):n.createElement(h,i({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},e)}},74866:(t,e,a)=>{a.d(e,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),u=a(67392),m=a(50012);function d(t){return function(t){return r.Children.map(t,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function c(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??d(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function p(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function h(t){let{queryString:e=!1,groupId:a}=t;const n=(0,l.k6)(),o=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((t=>{if(!o)return;const e=new URLSearchParams(n.location.search);e.set(o,t),n.replace({...n.location,search:e.toString()})}),[o,n])]}function b(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,o=c(t),[i,l]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[d,b]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,o]=(0,m.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&o.set(t)}),[a,o])]}({groupId:n}),k=(()=>{const t=s??d;return p({value:t,tabValues:o})?t:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!p({value:t,tabValues:o}))throw new Error(`Can't select invalid tab value=${t}`);l(t),u(t),b(t)}),[u,b,o]),tabValues:o}}var k=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(t){let{className:e,block:a,selectedValue:l,selectValue:s,tabValues:u}=t;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=t=>{const e=t.currentTarget,a=m.indexOf(e),n=u[a].value;n!==l&&(d(e),s(n))},p=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const a=m.indexOf(t.currentTarget)+1;e=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(t.currentTarget)-1;e=m[a]??m[m.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},e)},u.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:t=>m.push(t),onKeyDown:p,onClick:c},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===e})}),a??e)})))}function v(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=b(t);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(f,(0,n.Z)({},t,e)),r.createElement(v,(0,n.Z)({},t,e)))}function N(t){const e=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(e)},t))}},39799:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={id:"mbr_automation",title:"mbr_automation",description:"The ActiveMember360 shortcode mbr_automation adds and/or removes an ActiveCampaign contact to/from ActiveCampaign automations.",sidebar_label:"mbr_automation"},s=void 0,u={unversionedId:"shortcodes/mbr_automation",id:"shortcodes/mbr_automation",title:"mbr_automation",description:"The ActiveMember360 shortcode mbr_automation adds and/or removes an ActiveCampaign contact to/from ActiveCampaign automations.",source:"@site/docs/shortcodes/mbr_automation.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_automation",permalink:"/shortcodes/mbr_automation",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_automation",title:"mbr_automation",description:"The ActiveMember360 shortcode mbr_automation adds and/or removes an ActiveCampaign contact to/from ActiveCampaign automations.",sidebar_label:"mbr_automation"},sidebar:"shortcodes",previous:{title:"Action Shortcodes",permalink:"/category/action-shortcodes"},next:{title:"mbr_contact_count",permalink:"/shortcodes/mbr_contact_count"}},m={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],c={toc:d},p="wrapper";function h(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"This shortcode adds and/or removes an ActiveCampaign contact to/from ActiveCampaign automations. The contact is either that linked with the logged in user, or the contact specified."),(0,r.kt)("p",null,"The shortcode can be run automatically or used to generate a button or link within a page or post that, when clicked, will add/remove the contact to/from the automations."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign contact ID of the contact to add to or remove from automations. ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," Current logged in user contact ID.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"assign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One or more automation ID's defined within ActiveCampaign to add the contact to. The available automations can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#automations",title:"Click to learn how to display the available ActiveCampaign automations"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Automations")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," Yes if ",(0,r.kt)("inlineCode",{parentName:"td"},"remove")," parameter not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"remove"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One or more automation ID's defined within ActiveCampaign to remove the contact from. The available automations can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#automations",title:"Click to learn how to display the available ActiveCampaign automations"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Automations")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," Yes if ",(0,r.kt)("inlineCode",{parentName:"td"},"assign")," parameter not set.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"autorun"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set to yes the shortcode will execute without waiting for user input. Otherwise it will generate a form and a submit button or link_style and wait for user input. If set to yes the following parameters will be ignored; ",(0,r.kt)("inlineCode",{parentName:"td"},"link_text"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"link_style"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"button_text"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"button_image"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"button_style"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"redirect_popup"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"aftertext"),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Permitted Values:")," yes",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"link_text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The text to display for the link.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," Click here to submit",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"link_style"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the link.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," mbr_automation_link",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"button_text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The text to displayin the button.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," Click here to submit",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"button_image"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL of the image to use for the button.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"button_style"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the button.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," mbr_automation_btn",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"redirect"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL to send the user to after assigning/removing the contact to/from the automations. A special value can be passed, #reload#, to force all shortcodes on the page to resolve based on the latest changes that may have been introduced by processing this shortcode. Please note the redirect occurs immediately after the contact has been added/removed from the automations not after the automations have processed.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"redirect_popup"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the user will be redirected to a new window after clicking the link or button. Only used if the ",(0,r.kt)("inlineCode",{parentName:"td"},"redirect")," parameter is set. ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Permitted Values:")," yes",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"after_text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The text that should be displayed after the shortcode has been processed, if the user hasn\u2019t been redirected.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," Your request was processed",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,r.kt)("h2",{id:"validity"},"Validity"),(0,r.kt)("p",null,"This shortcode is only processed for ",(0,r.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,r.kt)("p",null,"In all other cases, including WordPress users with the ",(0,r.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be processed."),(0,r.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,r.kt)("p",null,"This shortcode does ",(0,r.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,r.kt)("strong",{parentName:"p"},"[ELSE_automation]"),"."),(0,r.kt)("h2",{id:"nesting"},"Nesting"),(0,r.kt)("p",null,"Shortcode nesting is ",(0,r.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the contact linked with the logged in user to the automation with ID ",(0,r.kt)("strong",{parentName:"p"},"12"),". Process this automatically as soon as they visit the page. When processing has completed display 'Your request was processed':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_automation autorun='yes' assign='12']\n"))),(0,r.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the contact linked with the logged in user to the automation with ID ",(0,r.kt)("strong",{parentName:"p"},"34")," and remove them from the automations with IDs ",(0,r.kt)("strong",{parentName:"p"},"90")," and ",(0,r.kt)("strong",{parentName:"p"},"92"),". Process this automatically as soon as they visit the page. When processing has completed display 'Your request was processed':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_automation autorun='yes' assign='34' remove='90,92']\n"))),(0,r.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the contact with ActiveCampaign contact ID ",(0,r.kt)("strong",{parentName:"p"},"456")," to the automation with ID ",(0,r.kt)("strong",{parentName:"p"},"12"),". Process this automatically as soon as they visit the page. When processing has completed display 'Your request was processed':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_automation autorun='yes' cid='456' assign='12']\n"))),(0,r.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the contact linked with the logged in user to the automation with ID ",(0,r.kt)("strong",{parentName:"p"},"12")," when they click on the link labelled 'Click here to submit'. When processing has completed display 'You have been added to the automation':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_automation assign='12' link_text='Click here to submit' after_text='You have been added to the automation']\n"))),(0,r.kt)(i.Z,{value:"ex5",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the contact linked with the logged in user to the automation with ID ",(0,r.kt)("strong",{parentName:"p"},"12")," when they click on the link labelled 'Click here to submit'. When processing has completed redirect to the URL ",(0,r.kt)("a",{parentName:"p",href:"https://mysite.com"},"https://mysite.com"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_automation assign='12' link_text='Click here to submit' redirect='https://mysite.com']\n"))),(0,r.kt)(i.Z,{value:"ex6",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the contact linked with the logged in user to the automation with ID ",(0,r.kt)("strong",{parentName:"p"},"12")," when they click on the link labelled 'Click here to submit'. When processing has completed redirect to the URL ",(0,r.kt)("a",{parentName:"p",href:"https://mysite.com"},"https://mysite.com")," which will open in a new browser tab:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_automation cid='456' assign='12' link_text='Click here to submit' redirect='https://mysite.com' redirect_popup='yes']\n")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}h.isMDXComponent=!0}}]);