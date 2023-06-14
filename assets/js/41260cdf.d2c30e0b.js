"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42686],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),d=a(67392),u=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,d]=g({queryString:a,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var b=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),r=d[a].value;r!==i&&(c(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(f,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},67913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={id:"mbr_tag",title:"mbr_tag",description:"The ActiveMember360 shortcode mbr_tag adds and/or removes specified tags, to/from either the logged in user contact record in ActiveCampaign, or to/from the contact specified.",sidebar_label:"mbr_tag"},s=void 0,d={unversionedId:"shortcodes/mbr_tag",id:"shortcodes/mbr_tag",title:"mbr_tag",description:"The ActiveMember360 shortcode mbr_tag adds and/or removes specified tags, to/from either the logged in user contact record in ActiveCampaign, or to/from the contact specified.",source:"@site/docs/shortcodes/mbr_tag.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_tag",permalink:"/shortcodes/mbr_tag",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_tag",title:"mbr_tag",description:"The ActiveMember360 shortcode mbr_tag adds and/or removes specified tags, to/from either the logged in user contact record in ActiveCampaign, or to/from the contact specified.",sidebar_label:"mbr_tag"},sidebar:"shortcodes",previous:{title:"mbr_select",permalink:"/shortcodes/mbr_select"},next:{title:"mbr_texpand",permalink:"/shortcodes/mbr_texpand"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],p={toc:c},m="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode adds and/or removes specified tags, to/from either the logged in user contact record in ActiveCampaign, or to/from the contact specified."),(0,n.kt)("p",null,"The shortcode can be run automatically or used to generate a button or link within a page or post that, when clicked, will add or remove a specified tag to/from the contact record."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cid"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign contact ID of the contact to add tags or remove tags. ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," Current logged in user contact ID.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"assign"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's or tag names defined within ActiveCampaign to add to the contact. The available tags can be found in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," Yes if ",(0,n.kt)("inlineCode",{parentName:"td"},"remove")," parameter not set.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's or tag names defined within ActiveCampaign to remove from the contact. The available tags can be found in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," Yes if ",(0,n.kt)("inlineCode",{parentName:"td"},"assign")," parameter not set.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"autocreate_tags"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If set to yes non-existent tags in your ActiveCampaign application specified for the assign_tags parameter will be automatically created. If the tag does not exist the value for assign_tags will be used as the tag name.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," yes",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"autorun"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If set to yes the shortcode will execute without waiting for user input. Otherwise it will generate a form and a submit button or link_style and wait for user input. If set to yes the following parameters will be ignored; ",(0,n.kt)("inlineCode",{parentName:"td"},"link_text"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"link_style"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"button_text"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"button_image"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"button_style"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"redirect_popup"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"aftertext"),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permissible Values:")," yes",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_text"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The text to display for the link.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," Click here to submit",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link_style"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the link.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," mbr_tag_link",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_text"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The text to display on the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," Click here to submit",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_image"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The URL of the image to use for the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_style"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"redirect"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The URL to send the user to after assigning/removing the tags. A special value can be passed, #reload#, to force all shortcodes on the page to resolve based on the latest changes that may have been introduced by the tag changes.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"redirect_popup"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the user will be redirected to a new window after clicking the link or button. Only used if the ",(0,n.kt)("inlineCode",{parentName:"td"},"redirect")," parameter is set. ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permissible Values:")," yes",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"after_text"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The text that should be displayed after the shortcode has been processed, if the user hasn\u2019t been redirected.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," Your request was processed",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("admonition",{title:"Tag ID's vs. tag names",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"The use of tag ID's over tag names is encouraged. Unless a tag is deleted, its tag ID can be considered persistent and unique. Tag names, on the other hand, can be changed at any time and do not need to be unique. Using a tag name that is not unique or has been changed can cause your shortcode, hook or module to no longer work as expected.")),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is only processed for ",(0,n.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,n.kt)("p",null,"In all other cases, including WordPress users with the ",(0,n.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be processed."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_tag]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Remove tags with IDs ",(0,n.kt)("strong",{parentName:"p"},"123")," and ",(0,n.kt)("strong",{parentName:"p"},"45")," from and then assign tags with IDs ",(0,n.kt)("strong",{parentName:"p"},"55"),", ",(0,n.kt)("strong",{parentName:"p"},"66"),", and ",(0,n.kt)("strong",{parentName:"p"},"77")," to the current logged users ActiveCampaign contact record after they click the button labelled 'Click here'. When processing has completed display 'Your request was processed':"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_tag assign='55,66,77' remove='123,45' button_text='Click here']\n"))),(0,n.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Assign tags with IDs ",(0,n.kt)("strong",{parentName:"p"},"12")," and ",(0,n.kt)("strong",{parentName:"p"},"34")," to the current logged users ActiveCampaign contact record after they click the button labelled 'Click here'. After adding the tags force a page reload:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_tag assign='12,34' redirect='#reload#']\n"))),(0,n.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,"Remove tags with IDs ",(0,n.kt)("strong",{parentName:"p"},"123")," and ",(0,n.kt)("strong",{parentName:"p"},"987")," from, and then assign tags with IDs ",(0,n.kt)("strong",{parentName:"p"},"12"),", ",(0,n.kt)("strong",{parentName:"p"},"34"),", and ",(0,n.kt)("strong",{parentName:"p"},"56")," to the current logged users ActiveCampaign contact record. Process this automatically as soon as they visit the page. When processing has completed display 'Your request was processed':"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_tag assign='12,34,56' remove='123,987' autorun='yes']\n"))),(0,n.kt)(l.Z,{value:"ex4",mdxType:"TabItem"},(0,n.kt)("p",null,"Assign tags with IDs ",(0,n.kt)("strong",{parentName:"p"},"12")," ",(0,n.kt)("strong",{parentName:"p"},"34")," and ",(0,n.kt)("strong",{parentName:"p"},"56")," to the ActiveCampaign contact ID ",(0,n.kt)("strong",{parentName:"p"},"1234")," after the visitor clicks the button labelled 'Click here'. After adding the tags redirect to the URL ",(0,n.kt)("a",{parentName:"p",href:"https://mysite.com"},"https://mysite.com"),":\n:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_tag cid='1234' assign='12,34,56' redirect='https://mysite.com']\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}g.isMDXComponent=!0}}]);