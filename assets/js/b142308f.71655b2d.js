"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41007],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},50821:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={id:"mbr_contact_count",title:"mbr_contact_count",description:"The ActiveMember360 shortcode mbr_contact_count returns a count of the number of contacts with the specified ActiveCampaign tag.",sidebar_label:"mbr_contact_count"},s=void 0,u={unversionedId:"shortcodes/mbr_contact_count",id:"shortcodes/mbr_contact_count",title:"mbr_contact_count",description:"The ActiveMember360 shortcode mbr_contact_count returns a count of the number of contacts with the specified ActiveCampaign tag.",source:"@site/docs/shortcodes/mbr_contact_count.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_contact_count",permalink:"/shortcodes/mbr_contact_count",draft:!1,tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"Feb 15, 2022",frontMatter:{id:"mbr_contact_count",title:"mbr_contact_count",description:"The ActiveMember360 shortcode mbr_contact_count returns a count of the number of contacts with the specified ActiveCampaign tag.",sidebar_label:"mbr_contact_count"},sidebar:"shortcodes",previous:{title:"mbr_automation",permalink:"/shortcodes/mbr_automation"},next:{title:"mbr_cookie_set",permalink:"/shortcodes/mbr_cookie_set"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],p={toc:d},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"This shortcode returns a count of the number of contacts with the specified ActiveCampaign tag."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tag_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A single tag ID defined within ActiveCampaign to base the count upon. The available tags can be found in ","[",(0,r.kt)("strong",{parentName:"td"},"ActiveMember360, Utilities, Tags"),"][utilities-tags]",".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," yes if no ",(0,r.kt)("inlineCode",{parentName:"td"},"tag_name")," parameter specified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tag_name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A single tag name defined within ActiveCampaign to base the count upon. The available tags can be found in ","[",(0,r.kt)("strong",{parentName:"td"},"ActiveMember360, Utilities, Tags"),"][utilities-tags]",".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," yes if no ",(0,r.kt)("inlineCode",{parentName:"td"},"tag_id")," parameter specified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"thousands_sep"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Thousands separator.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,r.kt)("admonition",{title:"Tag ID's vs. tag names",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The use of tag ID's over tag names is encouraged. Unless a tag is deleted, its tag ID can be considered persistent and unique. Tag names, on the other hand, can be changed at any time and do not need to be unique. Using a tag name that is not unique or has been changed can cause your shortcode, hook or module to no longer work as expected.")),(0,r.kt)("h2",{id:"validity"},"Validity"),(0,r.kt)("p",null,"This shortcode is evaluated for ",(0,r.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,r.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,r.kt)("p",null,"This shortcode does ",(0,r.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,r.kt)("strong",{parentName:"p"},"[ELSE_contact_count]"),"."),(0,r.kt)("h2",{id:"nesting"},"Nesting"),(0,r.kt)("p",null,"Shortcode nesting is ",(0,r.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,r.kt)("p",null,"Returns the number of ActiveCampaign contacts who have the tag assigned with ID ",(0,r.kt)("strong",{parentName:"p"},"123"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_contact_count tag_id='123']\n"))),(0,r.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,r.kt)("p",null,"Returns the number of ActiveCampaign contacts who have the tag assigned with ID ",(0,r.kt)("strong",{parentName:"p"},"123"),". Numbers in the thousands will use the thousands separator of a ",(0,r.kt)("strong",{parentName:"p"},",")," (comma):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_contact_count tag_id='123' thousands_sep=',']\n"))),(0,r.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,r.kt)("p",null,"Returns the number of ActiveCampaign contacts who have the tag assigned with name ",(0,r.kt)("strong",{parentName:"p"},"My Tag Name"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_contact_count tag_name='My Tag Name']\n")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}b.isMDXComponent=!0}}]);