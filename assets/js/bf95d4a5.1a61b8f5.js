"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),s=r(91980),u=r(67392),c=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),k=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var k=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function _(e){const t=(0,k.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},50900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),l=r(85162);const i={id:"mbr_stripe_one_click_upsell",title:"mbr_stripe_one_click_upsell",description:"The ActiveMember360 shortcode mbr_stripe_one_click_upsell processes a one click purchase without needing to re-enter credit card data.",sidebar_label:"mbr_stripe_one_click_upsell"},s=void 0,u={unversionedId:"shortcodes/mbr_stripe_one_click_upsell",id:"shortcodes/mbr_stripe_one_click_upsell",title:"mbr_stripe_one_click_upsell",description:"The ActiveMember360 shortcode mbr_stripe_one_click_upsell processes a one click purchase without needing to re-enter credit card data.",source:"@site/docs/shortcodes/mbr_stripe_one_click_upsell.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_stripe_one_click_upsell",permalink:"/shortcodes/mbr_stripe_one_click_upsell",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"mbr_stripe_one_click_upsell",title:"mbr_stripe_one_click_upsell",description:"The ActiveMember360 shortcode mbr_stripe_one_click_upsell processes a one click purchase without needing to re-enter credit card data.",sidebar_label:"mbr_stripe_one_click_upsell"},sidebar:"shortcodes",previous:{title:"mbr_product_short_desc",permalink:"/shortcodes/mbr_product_short_desc"},next:{title:"WooCommerce Extension Shortcodes",permalink:"/category/extension-woocommerce-shortcodes"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This shortcode processes a one click purchase for the specified product/subscription automatically upon clicking the Buy button without needing to re-enter credit card data."),(0,n.kt)("p",null,"The shortcode can be used anywhere. It would typically provide the 'Buy Now' buttons on all pages in any upsell/downsell process. Alternatively the 'Buy Now' button on a page a previous purchaser is redirected to using ",(0,n.kt)("a",{parentName:"p",href:"/modules/autologin/activecampaign",title:"Click to learn how to use Autologin with ActiveCampaign"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360, Module, Autologin With ActiveCampaign"))," as a link in an email sent from ActiveCampaign."),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"product_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The product/subscription ID for the purchase.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fallback_url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The URL to which a user will be redirected if a purchase fails.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_text"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The text to display on the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," Purchase now!",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_image"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The URL of the image to use for the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"button_style"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the button.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The product_id can be determined by viewing ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360, Payment, Products")," or ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360, Payment, Subscriptions")," and editing or hovering over the product/subscription. It is the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"post")," parameter shown in the URL as an example ",(0,n.kt)("a",{parentName:"p",href:"https://yoursite.com/wp-admin/post.php?post=28&action=edit"},"https://yoursite.com/wp-admin/post.php?post=28&action=edit")," the product_id is ",(0,n.kt)("strong",{parentName:"p"},"28"),".")),(0,n.kt)("h2",{id:"validity"},"Validity"),(0,n.kt)("p",null,"This shortcode is only available when the ",(0,n.kt)("strong",{parentName:"p"},"ActiveMember360 Payment Module")," is active as detailed within ",(0,n.kt)("a",{parentName:"p",href:"/modules/payment/activate",title:"Click to learn how to activate the ActiveMember360 Payment Module"},(0,n.kt)("strong",{parentName:"a"},"ActiveMember360 Payment Module Activation")),"."),(0,n.kt)("admonition",{title:"Important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This shortcode only processes for a ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote user"))," who has made a previous purchase using the ActiveMember360 Payment Extension. It relies upon having the following data stored within ActiveCampaign:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Standard ActiveCampain fields:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"First Name"),(0,n.kt)("li",{parentName:"ul"},"Last Name"),(0,n.kt)("li",{parentName:"ul"},"Email"))),(0,n.kt)("li",{parentName:"ul"},"ActiveMember360 contact fields:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"billing_address_1"),(0,n.kt)("li",{parentName:"ul"},"billing_city"),(0,n.kt)("li",{parentName:"ul"},"billing_postcode"),(0,n.kt)("li",{parentName:"ul"},"billing_country (and if billing_country is US also billing_state)"),(0,n.kt)("li",{parentName:"ul"},"stripe_customer_id")))),(0,n.kt)("p",{parentName:"admonition"},"The associated Stripe Customer ID must have a credit card stored against it within Stripe."),(0,n.kt)("p",{parentName:"admonition"},"All of this information would typicaly be populated upon the first purchase using the Payment Extension i.e. prior to the use of the ",(0,n.kt)("strong",{parentName:"p"},"[mbr_stripe_one_click_upsell]")," shortcode.")),(0,n.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,n.kt)("p",null,"This shortcode does ",(0,n.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,n.kt)("strong",{parentName:"p"},"[ELSE_stripe_one_click_upsell]"),"."),(0,n.kt)("h2",{id:"nesting"},"Nesting"),(0,n.kt)("p",null,"Shortcode nesting is ",(0,n.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,n.kt)("p",null,"Process a purchase of the product/subscription with ID ",(0,n.kt)("strong",{parentName:"p"},"345")," for the ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote users"))," when the button labelled 'Purchase now!' is clicked:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_stripe_one_click_upsell product_id='345']\n"))),(0,n.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,n.kt)("p",null,"Process a purchase of the product/subscription with ID ",(0,n.kt)("strong",{parentName:"p"},"345")," for the ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote users"))," when the button labelled 'Buy Now' is clicked:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_stripe_one_click_upsell product_id='345' button_text='Buy Now']\n"))),(0,n.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,n.kt)("p",null,"Process a purchase of the product/subscription with ID ",(0,n.kt)("strong",{parentName:"p"},"345")," for the ",(0,n.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,n.kt)("strong",{parentName:"a"},"remote users"))," when the button labelled 'Buy Now' is clicked. If the purchase fails redirect to the URL '",(0,n.kt)("a",{parentName:"p",href:"https://yourshop.com'"},"https://yourshop.com'"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[mbr_stripe_one_click_upsell product_id='345' button_text='Buy Now' fallback_url='https://yourshop.com']\n")))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"There is currently no ActiveMember360 API function equivalent for this shortcode.")))}h.isMDXComponent=!0}}]);