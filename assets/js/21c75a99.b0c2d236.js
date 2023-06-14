"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:r}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==l&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},65133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={id:"mbr_s3_link",title:"mbr_s3_link",description:"The ActiveMember360 shortcode mbr_s3_link generates an Amazon S3/Cloudfront self-expiring URL.",sidebar_label:"mbr_s3_link"},s=void 0,u={unversionedId:"shortcodes/mbr_s3_link",id:"shortcodes/mbr_s3_link",title:"mbr_s3_link",description:"The ActiveMember360 shortcode mbr_s3_link generates an Amazon S3/Cloudfront self-expiring URL.",source:"@site/docs/shortcodes/mbr_s3_link.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_s3_link",permalink:"/shortcodes/mbr_s3_link",draft:!1,tags:[],version:"current",lastUpdatedAt:1665751408,formattedLastUpdatedAt:"Oct 14, 2022",frontMatter:{id:"mbr_s3_link",title:"mbr_s3_link",description:"The ActiveMember360 shortcode mbr_s3_link generates an Amazon S3/Cloudfront self-expiring URL.",sidebar_label:"mbr_s3_link"},sidebar:"shortcodes",previous:{title:"mbr_post_title",permalink:"/shortcodes/mbr_post_title"},next:{title:"mbr_session",permalink:"/shortcodes/mbr_session"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],m={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This shortcode generates an Amazon S3/Cloudfront self-expiring URL."),(0,a.kt)("admonition",{title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"For more details regarding configuring Amazon S3/Cloudfront for use with ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360")," please reference ",(0,a.kt)("a",{parentName:"p",href:"/settings/amazon-s3",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default expiring link options"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3"))," before using this shortcode."),(0,a.kt)("p",{parentName:"admonition"},"This shortcode generates a URL with a number of Amazon S3 specific parameters. Some video player plugins/shortcodes are not able to handle these types of URLs. Please note that we cannot provide support for those plugins and shortcodes.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"s3key"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Your S3 access key as provided by Amazon AWS.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," As specified within ",(0,a.kt)("a",{parentName:"td",href:"/settings/amazon-s3#s3-access-key",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default access key"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3, S3 access key")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"s3secret"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Your S3 secret key as provided by Amazon AWS.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Defaults:")," As specified within ",(0,a.kt)("a",{parentName:"td",href:"/settings/amazon-s3#s3-secret-key",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default access key"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3, S3 secret key")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protocol"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The protocol for generating the URL. Use this parameter when creating download links i.e HTML tag ",(0,a.kt)("inlineCode",{parentName:"td"},"<a>"),". Do not specify when building a URL for video and audio players.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Permitted Values:")," http, https",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," https",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"host"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The full CNAME to your S3 host, excluding http:// or https://. Typically this will be ",(0,a.kt)("inlineCode",{parentName:"td"},"s3.amazonaws.com"),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," As specified within ",(0,a.kt)("a",{parentName:"td",href:"/settings/amazon-s3#default-s3-host",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default host"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3, Default S3 host")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"bucket"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The name of your S3 bucket where the ",(0,a.kt)("inlineCode",{parentName:"td"},"object")," is located.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," As specified within ",(0,a.kt)("a",{parentName:"td",href:"/settings/amazon-s3#default-s3-bucket",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default bucket"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3, Default S3 bucket")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The file name for which a self-expiring link should be generated. If the file is located in a folder, specify the file path relative to the bucket.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," none.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"expire"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of seconds after which any generated link should expire.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default:")," As specified within ",(0,a.kt)("a",{parentName:"td",href:"/settings/amazon-s3#default-expiration-in-seconds",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default expiration"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3, Default expiration in seconds")),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,a.kt)("h2",{id:"validity"},"Validity"),(0,a.kt)("p",null,"This shortcode is evaluated for ",(0,a.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,a.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,a.kt)("p",null,"This shortcode does ",(0,a.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,a.kt)("strong",{parentName:"p"},"[ELSE_s3_link]"),"."),(0,a.kt)("h2",{id:"nesting"},"Nesting"),(0,a.kt)("p",null,"Shortcode nesting is ",(0,a.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,a.kt)("p",null,"Generate an Amazon S3 self expiring URL lasting ",(0,a.kt)("strong",{parentName:"p"},"300")," seconds using the ",(0,a.kt)("strong",{parentName:"p"},"https")," protocol for the file named ",(0,a.kt)("strong",{parentName:"p"},"overview.pdf")," found in the folder ",(0,a.kt)("strong",{parentName:"p"},"pdf")," of the Amazon S3 account with remaining settings as specified in ",(0,a.kt)("a",{parentName:"p",href:"/settings/amazon-s3",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default expiring link options"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_s3_link object='pdf/overview.pdf']\n"))),(0,a.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,a.kt)("p",null,"Generate an Amazon S3 self expiring URL lasting ",(0,a.kt)("strong",{parentName:"p"},"300")," seconds using the ",(0,a.kt)("strong",{parentName:"p"},"https")," protocol for the file named ",(0,a.kt)("strong",{parentName:"p"},"overview.pdf")," found in the folder ",(0,a.kt)("strong",{parentName:"p"},"pdf")," and bucket ",(0,a.kt)("strong",{parentName:"p"},"bucketname")," of the Amazon S3 account with remaining settings as specified in ",(0,a.kt)("a",{parentName:"p",href:"/settings/amazon-s3",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default expiring link options"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_s3_link bucket='bucketname' object='pdf/overview.pdf']\n"))),(0,a.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,a.kt)("p",null,"Generate an Amazon S3 self expiring URL lasting ",(0,a.kt)("strong",{parentName:"p"},"300")," seconds using the ",(0,a.kt)("strong",{parentName:"p"},"https")," protocol for the file named ",(0,a.kt)("strong",{parentName:"p"},"overview.pdf")," found in the folder ",(0,a.kt)("strong",{parentName:"p"},"pdf")," and bucket ",(0,a.kt)("strong",{parentName:"p"},"bucketname")," of the Amazon S3 account with remaining settings as specified in ",(0,a.kt)("a",{parentName:"p",href:"/settings/amazon-s3",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default expiring link options"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_s3_link protocol='https' bucket='bucketname' object='pdf/overview.pdf']\n"))),(0,a.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,a.kt)("p",null,"Generate an Amazon S3 self expiring URL lasting ",(0,a.kt)("strong",{parentName:"p"},"240")," seconds using the ",(0,a.kt)("strong",{parentName:"p"},"https")," protocol for the file named ",(0,a.kt)("strong",{parentName:"p"},"overview.pdf")," found in the folder ",(0,a.kt)("strong",{parentName:"p"},"pdf"),", bucket ",(0,a.kt)("strong",{parentName:"p"},"bucketname")," and host ",(0,a.kt)("strong",{parentName:"p"},"s3.amazon.aws")," of the Amazon S3 account with remaining settings as specified in ",(0,a.kt)("a",{parentName:"p",href:"/settings/amazon-s3",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default expiring link options"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_s3_link protocol='https' host='s3.amazonaws.com' object='pdf/overview.pdf' expire='240']\n")))),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}f.isMDXComponent=!0}}]);