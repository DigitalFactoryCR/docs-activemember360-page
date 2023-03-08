"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60874],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(a),c=n,h=p["".concat(i,".").concat(c)]||p[c]||d[c]||l;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),s=a(16550),i=a(91980),m=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,m]=h({queryString:a,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=i??p;return c({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),b(e)}),[m,b,l]),tabValues:l}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:m}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=m[a].value;r!==s&&(p(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},m.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:d},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},55123:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const s={id:"mbr_my_account",title:"mbr_my_account",description:"The ActiveMember360 shortcode mbr_my_account returns a form through which a member can update their ActiveCampaign contact data.",sidebar_label:"mbr_my_account"},i=void 0,m={unversionedId:"shortcodes/mbr_my_account",id:"shortcodes/mbr_my_account",title:"mbr_my_account",description:"The ActiveMember360 shortcode mbr_my_account returns a form through which a member can update their ActiveCampaign contact data.",source:"@site/docs/shortcodes/mbr_my_account.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_my_account",permalink:"/shortcodes/mbr_my_account",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"mbr_my_account",title:"mbr_my_account",description:"The ActiveMember360 shortcode mbr_my_account returns a form through which a member can update their ActiveCampaign contact data.",sidebar_label:"mbr_my_account"},sidebar:"shortcodes",previous:{title:"mbr_member_dir",permalink:"/shortcodes/mbr_member_dir"},next:{title:"mbr_page_list",permalink:"/shortcodes/mbr_page_list"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],d={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode returns a form through which the current ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user"))," can update their ActiveCampaign contact data."),(0,n.kt)("p",null,"This shortcode currently works with the ActiveCampaign text input field type."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fields"),(0,n.kt)("td",{parentName:"tr",align:"left"},'The ActiveCampaign contact fields to be shown within the form in a comma seperated string. To specify a field form label that is different from the field name, use a "pipe" symbol ( l ) to separate field name from field label, see ',(0,n.kt)("a",{parentName:"td",href:"/shortcodes/mbr_my_account#examples",title:"Click to see the [mbr_my_account] shortcode examples"},(0,n.kt)("strong",{parentName:"a"},"examples")),". The available ActiveCampaign contact field names can be found in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),". The lower case version of the Perstag should be used as the field name. The following ActiveCampaign contact fields are not allowed and will be ignored:",(0,n.kt)("inlineCode",{parentName:"td"},"ID"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"email"),"and",(0,n.kt)("inlineCode",{parentName:"td"},"password"),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The field label position.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permissible Values:")," top, left, placeholder",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," top",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"min_width"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The minimum width the form should be using standard HTML attributes.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"max_width"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The maximum width the form should be using standard HTML attributes.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"submit_button_label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The text to display on the submit button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," Save",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is evaluated for ",(0,n.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_related_posts]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,n.kt)("strong",{parentName:"p"},"first_name")," and ",(0,n.kt)("strong",{parentName:"p"},"last_name"),". The form will be populated with the values for the current ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,n.kt)("strong",{parentName:"p"},"first_name")," and ",(0,n.kt)("strong",{parentName:"p"},"last_name")," and are placed above the field inputs. The submit button is labelled ",(0,n.kt)("strong",{parentName:"p"},"Save"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_my_account fields='first_name,last_name']\n"))),(0,n.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,n.kt)("strong",{parentName:"p"},"first_name")," and ",(0,n.kt)("strong",{parentName:"p"},"last_name"),". The form will be populated with the values for the current ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,n.kt)("strong",{parentName:"p"},"First Name")," and ",(0,n.kt)("strong",{parentName:"p"},"Last Name")," and are placed above the field inputs. The submit button is labelled ",(0,n.kt)("strong",{parentName:"p"},"Save"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_my_account fields='first_name|First Name,last_name|Last Name']\n"))),(0,n.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,n.kt)("strong",{parentName:"p"},"first_name")," and ",(0,n.kt)("strong",{parentName:"p"},"last_name"),". The form will be populated with the values for the current ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,n.kt)("strong",{parentName:"p"},"First Name")," and ",(0,n.kt)("strong",{parentName:"p"},"Last Name")," and used as placeholders for the input fields. The submit button is labelled ",(0,n.kt)("strong",{parentName:"p"},"Save"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_my_account label='placeholder' fields='first_name|First Name,last_name|Last Name']\n"))),(0,n.kt)(o.Z,{value:"ex4",mdxType:"TabItem"},(0,n.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,n.kt)("strong",{parentName:"p"},"first_name")," and ",(0,n.kt)("strong",{parentName:"p"},"last_name")," and a maximum width of ",(0,n.kt)("strong",{parentName:"p"},"50%")," of the browser window. The form will be populated with the values for the current ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,n.kt)("strong",{parentName:"p"},"First Name")," and ",(0,n.kt)("strong",{parentName:"p"},"Last Name")," and used as placeholders for the input fields. The submit button is labelled ",(0,n.kt)("strong",{parentName:"p"},"Save"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_my_account label='placeholder' fields='first_name|First Name,last_name|Last Name' max_width='50%']\n"))),(0,n.kt)(o.Z,{value:"ex5",mdxType:"TabItem"},(0,n.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,n.kt)("strong",{parentName:"p"},"first_name")," and ",(0,n.kt)("strong",{parentName:"p"},"last_name")," and with the form an minimum width of ",(0,n.kt)("strong",{parentName:"p"},"300px")," i.e. 300 pixels and a maximum width of ",(0,n.kt)("strong",{parentName:"p"},"400px")," i.e. 400 pixels. The form will be populated with the values for the current ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,n.kt)("strong",{parentName:"p"},"First Name")," and ",(0,n.kt)("strong",{parentName:"p"},"Last Name")," and used as placeholders for the input fields. The submit button is labelled ",(0,n.kt)("strong",{parentName:"p"},"Save"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_my_account label='placeholder' fields='first_name|First Name,last_name|Last Name' min_width='300px' max_width='400px']\n"))),(0,n.kt)(o.Z,{value:"ex6",mdxType:"TabItem"},(0,n.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,n.kt)("strong",{parentName:"p"},"first_name")," and ",(0,n.kt)("strong",{parentName:"p"},"last_name"),". The form will be populated with the values for the current ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,n.kt)("strong",{parentName:"p"},"Primero Nome")," and ",(0,n.kt)("strong",{parentName:"p"},"Sobrenome")," and used as placeholders for the input fields. The submit button is labelled ",(0,n.kt)("strong",{parentName:"p"},"Salvar altera\xe7\xf5es"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_my_account label='placeholder' fields='first_name|Primero Nome,last_name|Sobrenome' submit_button_label='Salvar altera\xe7\xf5es']\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}h.isMDXComponent=!0}}]);