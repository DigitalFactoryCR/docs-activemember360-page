"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(87462),n=r(67294),s=r(86010),o=r(12466),i=r(16550),l=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,u]=h({queryString:r,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),f=(()=>{const e=l??d;return m({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var f=r(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,s.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=b(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(w,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return n.createElement(v,(0,a.Z)({key:String(t)},e))}},74899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),s=r(74866),o=r(85162);const i={id:"contact-password-reset",title:"Contact Password Reset",description:"The ActiveMember360 Contact Password Reset Webhook sends a WordPress reset password email to the contact.",sidebar_label:"Contact Password Reset"},l=void 0,u={unversionedId:"webhooks/contact-password-reset",id:"webhooks/contact-password-reset",title:"Contact Password Reset",description:"The ActiveMember360 Contact Password Reset Webhook sends a WordPress reset password email to the contact.",source:"@site/docs/webhooks/contact-password-reset.mdx",sourceDirName:"webhooks",slug:"/webhooks/contact-password-reset",permalink:"/webhooks/contact-password-reset",draft:!1,tags:[],version:"current",lastUpdatedAt:1663949688,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{id:"contact-password-reset",title:"Contact Password Reset",description:"The ActiveMember360 Contact Password Reset Webhook sends a WordPress reset password email to the contact.",sidebar_label:"Contact Password Reset"},sidebar:"webhooks",previous:{title:"mbr_math",permalink:"/webhooks/mbr_math"},next:{title:"Contact Push",permalink:"/webhooks/contact-push"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"URL Segments",id:"url-segments",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Contact Password Reset")," is used to send a standard WordPress reset email to an ActiveCampaign contact."),(0,n.kt)("p",null,"One use case for this shortcode is to send a new user of your site the standard WordPress reset email instead of an ActiveCampaign email containing the password in plain text."),(0,n.kt)("p",null,"It can also be used in conjunction with the shortcode ",(0,n.kt)("a",{parentName:"p",href:"/shortcodes/mbr_password_send",title:"Click to learn how to use the [mbr_password_send] shortcode"},(0,n.kt)("strong",{parentName:"a"},"[mbr_password_send]"))," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"automation_id")," parameter to keep an audit trail in ActiveCampaign of when a lost password email request is made."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The URL used for the ",(0,n.kt)("strong",{parentName:"p"},"Contact Password Reset")," webhook is constructed using URL segments."),(0,n.kt)("p",null,"The URL segment structure required is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"site_url/mbr/contact/password_reset/security_code\n")),(0,n.kt)("p",null,"The URL is used for the webhook URL in an ActiveCampaign automation."),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"A WordPress reset password email will only be sent to contacts who satisfy the login requirements, see ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/wordpress-login",title:"Click to learn about a WordPress login when using ActiveMember360"},(0,n.kt)("strong",{parentName:"a"},"WordPress Login")),", for the site to which the webhook is submitted."),(0,n.kt)("p",{parentName:"admonition"},"For this email to be valid and permit a password reset a WordPress user must exist."),(0,n.kt)("p",{parentName:"admonition"},"Therefore ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360")," will automatically create a WordPress user with a username and email address the same as that of the ActiveCampaign contact if they do not already exist. The other WordPress user settings will be as detailed within ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/creating-wordpress-users/#default-wordpress-user-settings",title:"Click to learn about default user settings when WordPress Users are created"},(0,n.kt)("strong",{parentName:"a"},"Default WordPress User Settings"))," when using ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360"),"."),(0,n.kt)("p",{parentName:"admonition"},"The WordPress user will only be created for the ActiveCampaign contact if:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The WordPress user does not already exist with the same email address as that of the contact for whom the webhook is triggered.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The contact satisfies the login requirements, see ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/wordpress-login",title:"Click to learn about a WordPress login when using ActiveMember360"},(0,n.kt)("strong",{parentName:"a"},"WordPress Login")),", for the ",(0,n.kt)("inlineCode",{parentName:"p"},"site_url")," used by the webhook."))),(0,n.kt)("p",{parentName:"admonition"},"No WordPress new user login details emails are sent when using ",(0,n.kt)("strong",{parentName:"p"},"Contact Password Reset"),".")),(0,n.kt)("h2",{id:"url-segments"},"URL Segments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"URL Segments"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"site_url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The WordPress site URL where the ActiveCampaign contact data should be sent. This can be found in ",(0,n.kt)("strong",{parentName:"td"},"WordPress, Settings, General, Site URL"),". It must be specified exactly as shown there.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mbr/contact/password_reset"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The webhook action URL segment. This must be specified exactly as shown here.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"security_code"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set to the security code used to authenticate the use of Contact Password Reset. The security code used must be defined as detailed in ",(0,n.kt)("a",{parentName:"td",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),".",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"In all examples ",(0,n.kt)("strong",{parentName:"p"},"security_code")," must be replaced by a security code defined in ",(0,n.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes"))," on the WordPress site.")),(0,n.kt)(s.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"This webhook URL will result in the sending of a WordPress reset password email to the ActiveCampaign contact for whom the webhook is executed from within an ActiveCampaign automation. A WordPress user will also be automatically created with the username and email address the same as that of the emaill address of the ActiveCampaign contact if they do not already exist but satisfy the login requirements, see ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/wordpress-login",title:"Click to learn about a WordPress login when using ActiveMember360"},(0,n.kt)("strong",{parentName:"a"},"WordPress Login")),", for the ",(0,n.kt)("inlineCode",{parentName:"p"},"site_url")," specified i.e. ",(0,n.kt)("inlineCode",{parentName:"p"},"https://yoursite.com"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://yoursite.com/mbr/contact/password_reset/security_code/\n")))))}h.isMDXComponent=!0}}]);