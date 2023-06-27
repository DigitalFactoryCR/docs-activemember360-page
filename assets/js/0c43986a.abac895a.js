"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return a?r.createElement(b,s(s({ref:t},c),{},{components:a})):r.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),n=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(86010),s=a(12466),l=a(16550),i=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=b({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==l&&(d(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},s,{className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(h,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},72466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),s=a(85162);const l={id:"js-add-remove-tags",title:"Add and Remove Tags with JavaScript",description:"The ActiveMember360 functions mbr_add_tags() and mbr_remove_tags() add or remove ActiveCampaign tags from the current logged in user.",sidebar_label:"mbr_add_tags/mbr_remove_tags"},i=void 0,u={unversionedId:"developer/js/js-add-remove-tags",id:"developer/js/js-add-remove-tags",title:"Add and Remove Tags with JavaScript",description:"The ActiveMember360 functions mbr_add_tags() and mbr_remove_tags() add or remove ActiveCampaign tags from the current logged in user.",source:"@site/docs/developer/js/js-add-remove-tags.mdx",sourceDirName:"developer/js",slug:"/developer/js/js-add-remove-tags",permalink:"/developer/js/js-add-remove-tags",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"js-add-remove-tags",title:"Add and Remove Tags with JavaScript",description:"The ActiveMember360 functions mbr_add_tags() and mbr_remove_tags() add or remove ActiveCampaign tags from the current logged in user.",sidebar_label:"mbr_add_tags/mbr_remove_tags"},sidebar:"api",previous:{title:"JS",permalink:"/category/js"},next:{title:"mbr_set_field",permalink:"/developer/js/js-set-field"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d},p="wrapper";function b(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"ActiveMember360 provides functions that let you add and remove tags for the contact associated with the current ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),"."),(0,n.kt)("p",null,"The functions are ",(0,n.kt)("inlineCode",{parentName:"p"},"mbr_add_tags")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"mbr_remove_tags"),"."),(0,n.kt)("p",null,"Both accept as a parameter a comma separated list of tag IDs."),(0,n.kt)("p",null,"The adding or removing of any contact tags are immediately effective within WordPress for the the current ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),"."),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"mbr_add_tags ( $tags )")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"mbr_remove_tags ( $tags )")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$tags"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(string)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign specified in a comma separated string and to be added to/removed from the contact associated with the ",(0,n.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),". The available tags can be found in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-add-tags when the button is clicked the tags with IDs ",(0,n.kt)("strong",{parentName:"p"},"66")," and ",(0,n.kt)("strong",{parentName:"p"},"67")," will be added to the ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-add-tags' ).click( function() {\nmbr_add_tags( '66,67');\n} );\n} );\n<\/script>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-add-tags">Add Tags 66 and 67</button>\n'))),(0,n.kt)(s.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-remove-tags when the button is clicked the tags with IDs ",(0,n.kt)("strong",{parentName:"p"},"66")," and ",(0,n.kt)("strong",{parentName:"p"},"67")," will be removed from the ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-remove-tags' ).click( function() {\nmbr_remove_tags( '66,67');\n} );\n} );\n<\/script>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-remove-tags">Remove Tags 66 and 67</button>\n')))))}b.isMDXComponent=!0}}]);