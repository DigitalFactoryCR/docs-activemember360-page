"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1320],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(67294);function n(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(87462),n=r(67294),i=r(72389),o=r(63725),l=r(86010),s="tabItem_LplD";function p(e){var t,r,i,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(t=null!=c?c:null==(r=k.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),N=g.tabGroupChoices,_=g.setTabGroupChoices,y=(0,n.useState)(f),w=y[0],x=y[1],T=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=N[m];null!=A&&A!==w&&v.some((function(e){return e.value===A}))&&x(A)}var P=function(e){var t=e.currentTarget,r=T.indexOf(t),a=v[r].value;a!==w&&(E(t),x(a),null!=m&&_(m,a))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;r=T[a]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;r=T[n]||T[T.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},v.map((function(e){var t=e.value,r=e.label,i=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),p?(0,n.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function u(e){var t=(0,i.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},50900:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=r(9877),l=r(58215),s=["components"],p={id:"mbr_stripe_one_click_upsell",title:"mbr_stripe_one_click_upsell",description:"The ActiveMember360 shortcode mbr_stripe_one_click_upsell processes a one click purchase without needing to re-enter credit card data.",sidebar_label:"mbr_stripe_one_click_upsell"},u=void 0,c={unversionedId:"shortcodes/mbr_stripe_one_click_upsell",id:"shortcodes/mbr_stripe_one_click_upsell",title:"mbr_stripe_one_click_upsell",description:"The ActiveMember360 shortcode mbr_stripe_one_click_upsell processes a one click purchase without needing to re-enter credit card data.",source:"@site/docs/shortcodes/mbr_stripe_one_click_upsell.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_stripe_one_click_upsell",permalink:"/docs-activemember360-page/shortcodes/mbr_stripe_one_click_upsell",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_stripe_one_click_upsell",title:"mbr_stripe_one_click_upsell",description:"The ActiveMember360 shortcode mbr_stripe_one_click_upsell processes a one click purchase without needing to re-enter credit card data.",sidebar_label:"mbr_stripe_one_click_upsell"},sidebar:"shortcodes",previous:{title:"mbr_product_short_desc",permalink:"/docs-activemember360-page/shortcodes/mbr_product_short_desc"},next:{title:"WooCommerce Extension Shortcodes",permalink:"/docs-activemember360-page/category/extension-woocommerce-shortcodes"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],h={toc:m};function k(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"This shortcode processes a one click purchase for the specified product/subscription automatically upon clicking the Buy button without needing to re-enter credit card data."),(0,i.kt)("p",null,"The shortcode can be used anywhere. It would typically provide the 'Buy Now' buttons on all pages in any upsell/downsell process. Alternatively the 'Buy Now' button on a page a previous purchaser is redirected to using ",(0,i.kt)("a",{parentName:"p",href:"/modules/autologin/activecampaign",title:"Click to learn how to use Autologin with ActiveCampaign"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Module, Autologin With ActiveCampaign"))," as a link in an email sent from ActiveCampaign."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"product_id"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The product/subscription ID for the purchase.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"fallback_url"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The URL to which a user will be redirected if a purchase fails.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"button_text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The text to display on the button.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults:")," Purchase now!",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"button_image"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The URL of the image to use for the button.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"button_style"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the button.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The product_id can be determined by viewing ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360, Payment, Products")," or ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360, Payment, Subscriptions")," and editing or hovering over the product/subscription. It is the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," parameter shown in the URL as an example ",(0,i.kt)("a",{parentName:"p",href:"https://yoursite.com/wp-admin/post.php?post=28&action=edit"},"https://yoursite.com/wp-admin/post.php?post=28&action=edit")," the product_id is ",(0,i.kt)("strong",{parentName:"p"},"28"),"."))),(0,i.kt)("h2",{id:"validity"},"Validity"),(0,i.kt)("p",null,"This shortcode is only available when the ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360 Payment Module")," is active as detailed within ",(0,i.kt)("a",{parentName:"p",href:"/modules/payment/activate",title:"Click to learn how to activate the ActiveMember360 Payment Module"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360 Payment Module Activation")),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This shortcode only processes for a ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,i.kt)("strong",{parentName:"a"},"remote user"))," who has made a previous purchase using the ActiveMember360 Payment Extension. It relies upon having the following data stored within ActiveCampaign:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Standard ActiveCampain fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"First Name"),(0,i.kt)("li",{parentName:"ul"},"Last Name"),(0,i.kt)("li",{parentName:"ul"},"Email"))),(0,i.kt)("li",{parentName:"ul"},"ActiveMember360 contact fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"billing_address_1"),(0,i.kt)("li",{parentName:"ul"},"billing_city"),(0,i.kt)("li",{parentName:"ul"},"billing_postcode"),(0,i.kt)("li",{parentName:"ul"},"billing_country (and if billing_country is US also billing_state)"),(0,i.kt)("li",{parentName:"ul"},"stripe_customer_id")))),(0,i.kt)("p",{parentName:"div"},"The associated Stripe Customer ID must have a credit card stored against it within Stripe."),(0,i.kt)("p",{parentName:"div"},"All of this information would typicaly be populated upon the first purchase using the Payment Extension i.e. prior to the use of the ",(0,i.kt)("strong",{parentName:"p"},"[mbr_stripe_one_click_upsell]")," shortcode."))),(0,i.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,i.kt)("p",null,"This shortcode does ",(0,i.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,i.kt)("strong",{parentName:"p"},"[ELSE_stripe_one_click_upsell]"),"."),(0,i.kt)("h2",{id:"nesting"},"Nesting"),(0,i.kt)("p",null,"Shortcode nesting is ",(0,i.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,"Process a purchase of the product/subscription with ID ",(0,i.kt)("strong",{parentName:"p"},"345")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,i.kt)("strong",{parentName:"a"},"remote users"))," when the button labelled 'Purchase now!' is clicked:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_stripe_one_click_upsell product_id='345']\n"))),(0,i.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,i.kt)("p",null,"Process a purchase of the product/subscription with ID ",(0,i.kt)("strong",{parentName:"p"},"345")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,i.kt)("strong",{parentName:"a"},"remote users"))," when the button labelled 'Buy Now' is clicked:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_stripe_one_click_upsell product_id='345' button_text='Buy Now']\n"))),(0,i.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,i.kt)("p",null,"Process a purchase of the product/subscription with ID ",(0,i.kt)("strong",{parentName:"p"},"345")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,i.kt)("strong",{parentName:"a"},"remote users"))," when the button labelled 'Buy Now' is clicked. If the purchase fails redirect to the URL '",(0,i.kt)("a",{parentName:"p",href:"https://yourshop.com'"},"https://yourshop.com'"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_stripe_one_click_upsell product_id='345' button_text='Buy Now' fallback_url='https://yourshop.com']\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}k.isMDXComponent=!0}}]);