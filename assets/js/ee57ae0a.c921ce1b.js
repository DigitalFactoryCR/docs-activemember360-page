"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(a),h=r,p=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return a?n.createElement(p,i(i({ref:t},d),{},{components:a})):n.createElement(p,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),u=a(67392),d=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=c(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=p({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??m;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var b=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==l&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:c},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},67683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={id:"mbr_casetag",title:"mbr_casetag",description:"The ActiveMember360 shortcode mbr_casetag determines the content to be included based upon a comparison of tags that the visitor has to those in the shortcode statements.",sidebar_label:"mbr_casetag"},s=void 0,u={unversionedId:"shortcodes/mbr_casetag",id:"shortcodes/mbr_casetag",title:"mbr_casetag",description:"The ActiveMember360 shortcode mbr_casetag determines the content to be included based upon a comparison of tags that the visitor has to those in the shortcode statements.",source:"@site/docs/shortcodes/mbr_casetag.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_casetag",permalink:"/shortcodes/mbr_casetag",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"mbr_casetag",title:"mbr_casetag",description:"The ActiveMember360 shortcode mbr_casetag determines the content to be included based upon a comparison of tags that the visitor has to those in the shortcode statements.",sidebar_label:"mbr_casetag"},sidebar:"shortcodes",previous:{title:"Conditional Shortcodes",permalink:"/category/conditional-shortcodes"},next:{title:"mbr_compare",permalink:"/shortcodes/mbr_compare"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Conditions",id:"conditions",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],c={toc:m},h="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"This shortcode determines the content to be included based upon a comparison of tags that the current ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," has to those in the shortcode conditions."),(0,r.kt)("p",null,"The shortcode will include content specified for the first condition that evaluates ",(0,r.kt)("strong",{parentName:"p"},"true")," as it works down the condition definitions."),(0,r.kt)("p",null,"With this shortcode tag based conditions can be specified similar to the PHP ",(0,r.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/control-structures.switch.php",title:"Click to learn how to use the switch PHP function"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"switch()")))," function."),(0,r.kt)("p",null,"This shortcode can be used instead of using a series of ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_is_for",title:"Click to learn how to use the shortcode [mbr_is_for]"},(0,r.kt)("strong",{parentName:"a"},"[mbr_is_for]"))," shortcodes, making your code both shorter and easier to manage."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"limit_else"),(0,r.kt)("td",{parentName:"tr",align:"left"},'If set to "yes" and the user is not logged in or does not have any ActiveCampaign contact tags that define a membership as selected in ',"[",(0,r.kt)("strong",{parentName:"td"},"ActiveMember360, Settings, Memberships"),"][settings-memberships]",' this parameter will cause the "ELSE" part of the shortcode to be suppressed. This can be useful in scenarios where the "ELSE" portion of the shortcode is only applicable to members of the site, for example excluding visitors who are not logged in.',(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," no.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,r.kt)("h2",{id:"conditions"},"Conditions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Conditions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tag:"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Followed by a single tag ID or tag name defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,r.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," has the tag the content following the condition is returned. The available tags can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"any_tags:"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Followed by multiple tag IDs or tag names in a comma separated string that are defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,r.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," has any of the tags the content following the condition is returned. The available tags can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"all_tags:"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Followed by multiple tag IDs or tag names in a comma separated string that are defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,r.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," has all of the tags the content following the condition is returned. The available tags can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"not_tag:"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Followed by a single tag ID or tag name defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,r.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," does not have the tag the content following the condition is returned. The available tags can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"not_any_tags:"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Followed by multiple tag IDs or tag names in a comma separated string that are defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,r.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," does not have any of the tags the content following the condition is returned. The available tags can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"not_all_tags:"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Followed by multiple tag IDs or tag names in a comma separated string that are defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,r.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user"))," does not have all of the tags the content following the condition is returned. The available tags can be found in ",(0,r.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"else:"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The default fallback if no other condition is met. This default fallback can only be used once.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,r.kt)("admonition",{title:"Tag ID's vs. tag names",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The use of tag ID's over tag names is encouraged. Unless a tag is deleted, its tag ID can be considered persistent and unique. Tag names, on the other hand, can be changed at any time and do not need to be unique. Using a tag name that is not unique or has been changed can cause your shortcode, hook or module to no longer work as expected.")),(0,r.kt)("h2",{id:"validity"},"Validity"),(0,r.kt)("p",null,"This shortcode is only processed for ",(0,r.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,r.kt)("p",null,"In all other cases, including WordPress users with the ",(0,r.kt)("strong",{parentName:"p"},"Administrator")," role and not logged in visitors nothing will be processed."),(0,r.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,r.kt)("p",null,"This shortcode does ",(0,r.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,r.kt)("strong",{parentName:"p"},"[ELSE_casetag]"),"."),(0,r.kt)("h2",{id:"nesting"},"Nesting"),(0,r.kt)("p",null,"Shortcode nesting is ",(0,r.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,r.kt)("p",null,"The content returned will be the that related to the first condition satisfied by the current ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user")),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If they have tag ID ",(0,r.kt)("strong",{parentName:"li"},"195")," 'You have the tag ID 195' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they do not have tag name ",(0,r.kt)("strong",{parentName:"li"},"MyTagName")," 'You do not have tag MyTagName' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they do not have tag name ",(0,r.kt)("strong",{parentName:"li"},"MyTagName3")," 'You do not have tag MyTagName3' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they have either tag ID ",(0,r.kt)("strong",{parentName:"li"},"987")," or tag name ",(0,r.kt)("strong",{parentName:"li"},"MyTagName2")," 'You have at least one of the given tags' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they have either tag IDs ",(0,r.kt)("strong",{parentName:"li"},"998")," or ",(0,r.kt)("strong",{parentName:"li"},"999")," 'You have at least one of the given tags' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they do not have either tag ID ",(0,r.kt)("strong",{parentName:"li"},"234")," or tag name ",(0,r.kt)("strong",{parentName:"li"},"MyTagName4")," 'You do not have at least one of the given tags' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they have all of tag IDs ",(0,r.kt)("strong",{parentName:"li"},"678"),", ",(0,r.kt)("strong",{parentName:"li"},"591")," and tag name ",(0,r.kt)("strong",{parentName:"li"},"MyTagName4")," 'You have all the given tags' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they have all of tag IDs ",(0,r.kt)("strong",{parentName:"li"},"543"),", ",(0,r.kt)("strong",{parentName:"li"},"432")," and tag name ",(0,r.kt)("strong",{parentName:"li"},"MyTagName4")," 'You have all the given tags' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they do not have all of the tags named ",(0,r.kt)("strong",{parentName:"li"},"MyTagName5")," and ",(0,r.kt)("strong",{parentName:"li"},"MyTagName6")," 'You do not have all the given tags' will be returned."),(0,r.kt)("li",{parentName:"ol"},"Otherwise 'None of the above applied to you' will be returned.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_casetag]\n  tag: 195\n    You have the tag ID 195\n  not_tag: MyTagName\n    You do not have tag MyTagName\n  not_tag: MyTagName3\n    You do not have tag MyTagName3\n  any_tags: 987,MyTagName2\n    You have at least one of the given tags\n  any_tags: 998, 999\n    You have at least one of the given tags\n  not_any_tags:MyTagName4,234\n    You do not have at least one of the given tags\n  all_tags: 678,MyTagName4,591\n    You have all the given tags\n  all_tags: 543,432,MyTagName4\n    You have all the given tags\n  not_all_tags: MyTagName5,MyTagName6\n    You do not have all the given tags\n  else:\n    None of the above applied to you\n[/mbr_casetag]\n"))),(0,r.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,r.kt)("p",null,"The content returned will be the that related to the first condition satisfied by the current ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user")),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If they have tag ID ",(0,r.kt)("strong",{parentName:"li"},"195")," 'You have the tag ID 195' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they do not have tag name ",(0,r.kt)("strong",{parentName:"li"},"MyTagName")," 'You do not have tag MyTagName' will be returned."),(0,r.kt)("li",{parentName:"ol"},"If they do not have tag name ",(0,r.kt)("strong",{parentName:"li"},"MyTagName3")," 'You do not have tag MyTagName3' will be returned."),(0,r.kt)("li",{parentName:"ol"},"'None of the above applied to you' will be returned but only if the current logged in user is a member of the site. Otherwise nothing will be returned.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_casetag limit_else='yes']\n  tag: 195\n    You have the tag ID 195\n  not_tag: MyTagName\n    You do not have tag MyTagName\n  not_tag: MyTagName3\n    You do not have tag MyTagName3\n  else:\n    None of the above applied to you.\n[/mbr_casetag]\n")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}p.isMDXComponent=!0}}]);