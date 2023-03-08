"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58576],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(a),c=n,g=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),i=a(86010),o=a(12466),s=a(16550),l=a(91980),u=a(67392),d=a(50012);function m(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=p(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=g({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),h=(()=>{const e=l??m;return c({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var h=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=u[a].value;r!==s&&(m(t),l(r))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:p},o,{className:(0,i.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=b(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},n.createElement(f,(0,r.Z)({},e,t)),n.createElement(v,(0,r.Z)({},e,t)))}function y(e){const t=(0,h.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},60932:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),i=a(74866),o=a(85162);const s={id:"wordpress",title:"Using Autologin With WordPress",description:"The ActiveMember360 Autologin Module allows logged in users on one WordPress ActiveMember360 site to autologin to another WordPress ActiveMember360 site using an autologin URL within an HTML link, providing both sites connect to the same ActiveCampaign application",sidebar_label:"Using Autologin With WordPress"},l=void 0,u={unversionedId:"modules/autologin/wordpress",id:"modules/autologin/wordpress",title:"Using Autologin With WordPress",description:"The ActiveMember360 Autologin Module allows logged in users on one WordPress ActiveMember360 site to autologin to another WordPress ActiveMember360 site using an autologin URL within an HTML link, providing both sites connect to the same ActiveCampaign application",source:"@site/docs/modules/autologin/wordpress.mdx",sourceDirName:"modules/autologin",slug:"/modules/autologin/wordpress",permalink:"/modules/autologin/wordpress",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"wordpress",title:"Using Autologin With WordPress",description:"The ActiveMember360 Autologin Module allows logged in users on one WordPress ActiveMember360 site to autologin to another WordPress ActiveMember360 site using an autologin URL within an HTML link, providing both sites connect to the same ActiveCampaign application",sidebar_label:"Using Autologin With WordPress"},sidebar:"modules",previous:{title:"Using Autologin With ActiveCampaign",permalink:"/modules/autologin/activecampaign"},next:{title:"Using Autologin With ThriveCart",permalink:"/modules/autologin/thrivecart"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Site URL &amp; Parameters",id:"site-url--parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m},c="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Autologin")," module allows logged in users on one WordPress ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," site (the ",(0,n.kt)("strong",{parentName:"p"},"FROM")," site) to autologin to another WordPress ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," site (the ",(0,n.kt)("strong",{parentName:"p"},"TO")," site) using an autologin URL within an HTML link, providing both sites connect to the same ActiveCampaign application."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The URL used for autologin is constructed using your site URL and parameters."),(0,n.kt)("p",null,"A sample of the URL structure required is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"site_url/?mbr_autologin=my_security_code&id=[mbr_db_id]\n")),(0,n.kt)("p",null,"The ActiveCampaign contact must already exist within both WordPress sites as a user for the autologin URL to function. Otherwise the contact will not be logged in."),(0,n.kt)("p",null,"The autologin URL is used in HTML links on the WordPress site the user will be currently logged in to i.e. the ",(0,n.kt)("strong",{parentName:"p"},"FROM")," site not the ",(0,n.kt)("strong",{parentName:"p"},"TO")," site."),(0,n.kt)("h2",{id:"site-url--parameters"},"Site URL & Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Site URL"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"site_url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The WordPress site URL where the user is to be automatically logged in i.e the ",(0,n.kt)("strong",{parentName:"td"},"TO")," site. This can be found in ",(0,n.kt)("strong",{parentName:"td"},"WordPress, Settings, General, Site URL"),". It must be specified exactly as shown there.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mbr_autologin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set to the security code used to validate an autologin. The security code used must be defined as detailed in ",(0,n.kt)("a",{parentName:"td",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),". This code must be defined on the ",(0,n.kt)("strong",{parentName:"td"},"TO")," site.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"email"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign contact email address of the contact to be logged in.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permitted value:")," ","[mbr_db_email]",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," dependent upon use case, see Examples.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign contact ID of the contact to be logged in.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permitted value:")," ","[mbr_db_id]",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," dependent upon use case, see Examples.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_tags"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign to add to this contact during the auto-login process. If more than one is entered, please separate with commas. Tag ID's can be determined as explained in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,n.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Tag IDs")),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_tags"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign to remove from this contact during the auto-login process. If more than one is entered, please separate with commas. Remove tags are processed before add tags. Tag ID's can be determined as explained in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,n.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Tag IDs")),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"assign_automations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more automation ID's defined within ActiveCampaign to which the contact should be added during the auto-login process. To assign to multiple automations, separate them with commas. Automation ID's can be determined as explained in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#automations",title:"Click to learn how to display the available ActiveCampaign automations"},(0,n.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Automation IDs")),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_automations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more automations ID's defined within ActiveCampaign from which the contact should be removed during the auto-login process. To remove from multiple automations, separate them with commas. Remove automations are processed before assign automations. Automation ID's can be determined as explained in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#automations",title:"Click to learn how to display the available ActiveCampaign automations"},(0,n.kt)("strong",{parentName:"a"},"Determine ActiveCampaign Automation IDs")),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"subscribe_lists"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to which the contact should be subscribed during the auto-login process. To subscribe to multiple lists, separate them with commas. List ID's can be determined as explained in ","[",(0,n.kt)("strong",{parentName:"td"},"Determine ActiveCampaign List IDs"),"][utilities-data-lists]",".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unsubscribe_lists"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign from which the contact should be unsubscribed during the auto-login process. To unsubscribe from multiple lists, separate them with commas. Unsubscribes are processed before subscribes. List ID's can be determined as explained in ",(0,n.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display the available ActiveCampaign lists"},(0,n.kt)("strong",{parentName:"a"},"Determine ActiveCampaign List IDs")),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"redir"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sends the user to the URL of your choice after a successful login. To use URL parameters with the redirect URL please refer to ","[Using URL parameters with the Autologin module redir parameter][autologin-redirect-url-parameters]",". This is a location on the ",(0,n.kt)("strong",{parentName:"td"},"TO")," site.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"nofirstlogin"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ignore First login redirect specified in ",(0,n.kt)("a",{parentName:"td",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login")),". This is a setting on the ",(0,n.kt)("strong",{parentName:"td"},"TO")," site.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Permitted values:")," Any value will ignore first login",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"When using the ",(0,n.kt)("strong",{parentName:"p"},"email")," parameter an email address can only contain the plus character ",(0,n.kt)("strong",{parentName:"p"},"+")," if it is URL encoded i.e. replaced by ",(0,n.kt)("strong",{parentName:"p"},"%2B"),"."),(0,n.kt)("p",{parentName:"admonition"},"Otherwise it will be decoded by the PHP $","_","GET into a space and break the autologin URL."),(0,n.kt)("p",{parentName:"admonition"},"For this reason we recommend that the ",(0,n.kt)("strong",{parentName:"p"},"id")," parameter is used rather than ",(0,n.kt)("strong",{parentName:"p"},"email")," parameter."),(0,n.kt)("p",{parentName:"admonition"},"The adding/removing of tags, assigning/removing of automations and subscribing/unsubscribing to lists will be processed irrespective of whether the autologin is successful.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"In all examples ",(0,n.kt)("strong",{parentName:"p"},"my_security_code")," must be replaced by a security code defined in ",(0,n.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes"))," on the ",(0,n.kt)("strong",{parentName:"p"},"TO")," site.")),(0,n.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Upon a successful login they will either be redirected to the home page, or to the appropriate page defined in ",(0,n.kt)("a",{parentName:"p",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Membership Levels and associated settings"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships, Redirect on login"))," or if it\u2019s their first login to the page selected in ",(0,n.kt)("a",{parentName:"p",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&id=[mbr_db_id]\n"))),(0,n.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Upon a successful login they will either be redirected to the page with the slug dashboard, or if it\u2019s their first login to the page selected in ",(0,n.kt)("a",{parentName:"p",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to define ActiveMember360 page redirect on first login"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login"))," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&id=[mbr_db_id]&redir=https://yoursite.com/dashboard\n"))),(0,n.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,"Upon a successful login they will be redirected to the page with the slug dashboard:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_autologin=my_security_code&id=[mbr_db_id]&nofirstlogin=yes&redir=https://yoursite.com/dashboard\n")))))}g.isMDXComponent=!0}}]);