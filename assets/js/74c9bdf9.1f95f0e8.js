"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9493],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(87462),a=n(67294),l=n(72389),o=n(63725),i=n(86010),p="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,u=e.block,d=e.defaultValue,c=e.values,m=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),y=v.tabGroupChoices,N=v.setTabGroupChoices,_=(0,a.useState)(g),x=_[0],T=_[1],w=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==x&&h.some((function(e){return e.value===O}))&&T(O)}var D=function(e){var t=e.currentTarget,n=w.indexOf(t),r=h[n].value;r!==x&&(E(t),T(r),null!=m&&N(m,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.currentTarget)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:D,onClick:D},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},11577:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(9877),i=n(58215),p=["components"],s={id:"mbr_",title:"mbr_permalink",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",sidebar_label:"mbr_permalink"},u=void 0,d={unversionedId:"shortcodes/mbr_",id:"shortcodes/mbr_",title:"mbr_permalink",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",source:"@site/docs/shortcodes/example.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_",permalink:"/docs-activemember360-page/shortcodes/mbr_",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_",title:"mbr_permalink",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",sidebar_label:"mbr_permalink"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],f={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"field"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Specifies the name of an ActiveCampaign contact record field to display. See screenshot above, how to deal with custom fields. Standard fields can be: id, email, first_name, last_name, phone.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If your ordered field needs a special treatment, e.g. date, number or currency choose from date, number or currency.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"format"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The desired format for the ordered field e.g. \u201c%i\u201d for type currency or \u201c%A\u201d for type date.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no. Optional if type is set to date or currency.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"default"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The default value to display if the ordered field has no value in the ActiveCampaign contact record of the logged in contact.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"callback"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Callback function to be called to process the value of the field provided in the \u2018field\u2019 parameter.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"decimals"),(0,l.kt)("td",{parentName:"tr",align:"left"},"How many decimals do you want to display. Only if type is set to number.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dec_point"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Decimal sign. Only if type is set to number.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," . (DOT).",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"thousands_sep"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Thousands separator. Only if type is set to number.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," , (COMMA).",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"locale"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set your locale e.g. en_US, en_UK, de_DE to set the moneytary locale to display fields of type currency.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," Your WordPress locale based on your blog settings e.g. en_US.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,l.kt)("h2",{id:"validity"},"Validity"),(0,l.kt)("p",null,"This shortcode is only evaluated for ",(0,l.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,l.kt)("p",null,"In all other cases, including WordPress users with the ",(0,l.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be returned."),(0,l.kt)("p",null,"This shortcode is evaluated for ",(0,l.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,l.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"[ELSE_is_http_get]")," conditional branching is supported."),(0,l.kt)("p",null,"This shortcode does ",(0,l.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,l.kt)("strong",{parentName:"p"},"[ELSE_contact]"),"."),(0,l.kt)("h2",{id:"nesting"},"Nesting"),(0,l.kt)("p",null,"Shortcode nesting is supported:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[mbr_is_http_get1]")," through ",(0,l.kt)("inlineCode",{parentName:"p"},"[mbr_is_http_get19]")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[ELSE_is_http_get1]")," through ",(0,l.kt)("inlineCode",{parentName:"p"},"[ELSE_is_http_get19]")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[/_is_http_get1]")," through ",(0,l.kt)("inlineCode",{parentName:"p"},"[/_is_http_get19]")),(0,l.kt)("p",null,"Shortcode nesting within is ",(0,l.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,l.kt)("p",null,"Display the contact field ",(0,l.kt)("inlineCode",{parentName:"p"},"email")," for the logged in user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_contact field='email']\n"))),(0,l.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,l.kt)("p",null,"Display the contact field ",(0,l.kt)("inlineCode",{parentName:"p"},"my_contact_field")," for the logged in user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_contact field='my_contact_field']\n"))),(0,l.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,l.kt)("p",null,"Display the contact field ",(0,l.kt)("inlineCode",{parentName:"p"},"contact_id")," for the logged in user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_contact field='contact_id']\n"))),(0,l.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,l.kt)("p",null,"Display the contact field ",(0,l.kt)("inlineCode",{parentName:"p"},"first_name")," for the logged in user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_contact field='first_name']\n"))),(0,l.kt)(i.Z,{value:"ex5",mdxType:"TabItem"},(0,l.kt)("p",null,"Display the contact field ",(0,l.kt)("inlineCode",{parentName:"p"},"last_name")," for the logged in user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_contact field='last_name']\n"))),(0,l.kt)(i.Z,{value:"ex6",mdxType:"TabItem"},(0,l.kt)("p",null,"Display the date contact field ",(0,l.kt)("inlineCode",{parentName:"p"},"birthday")," formatted as Y-m-d for the logged in user:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_contact field='birthday' format='Y-m-d']\n")))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}k.isMDXComponent=!0}}]);