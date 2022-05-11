"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79486],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return s}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(a),s=r,f=u["".concat(p,".").concat(s)]||u[s]||c[s]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),l=a(72389),o=a(63725),i=a(86010),p="tabItem_LplD";function m(e){var t,a,l,m=e.lazy,d=e.block,c=e.defaultValue,u=e.values,s=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,w=(0,r.useState)(v),_=w[0],E=w[1],T=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var O=N[s];null!=O&&O!==_&&k.some((function(e){return e.value===O}))&&E(O)}var x=function(e){var t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==_&&(C(t),E(n),null!=s&&y(s,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return T.push(e)},onKeyDown:A,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=a?a:t)}))),m?(0,r.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},29769:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(9877),i=a(58215),p=["components"],m={id:"mbr_compare",title:"mbr_compare",description:"The ActiveMember360 shortcode mbr_compare performs a calculation using the value stored in any contact field in your ActiveCampaign application.",sidebar_label:"mbr_compare"},d=void 0,c={unversionedId:"shortcodes/mbr_compare",id:"shortcodes/mbr_compare",title:"mbr_compare",description:"The ActiveMember360 shortcode mbr_compare performs a calculation using the value stored in any contact field in your ActiveCampaign application.",source:"@site/docs/shortcodes/mbr_compare.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_compare",permalink:"/shortcodes/mbr_compare",tags:[],version:"current",lastUpdatedAt:1651582475,formattedLastUpdatedAt:"5/3/2022",frontMatter:{id:"mbr_compare",title:"mbr_compare",description:"The ActiveMember360 shortcode mbr_compare performs a calculation using the value stored in any contact field in your ActiveCampaign application.",sidebar_label:"mbr_compare"},sidebar:"shortcodes",previous:{title:"mbr_casetag",permalink:"/shortcodes/mbr_casetag"},next:{title:"mbr_is_admin",permalink:"/shortcodes/mbr_is_admin"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"The comparison operators are:",id:"the-comparison-operators-are",level:4},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],f={toc:s};function h(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"This shortcode determines the content to be included based upon a comparison of any two values using the specified comparison operator."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of an ActiveCampaign contact field or contact field shortcode, or custom shortcode parameter or a hardcoded value, which will be compared to ",(0,l.kt)("inlineCode",{parentName:"td"},"value2")," based on the comparison operator. The available ActiveCampaign contact field names can be found in ",(0,l.kt)("a",{parentName:"td",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,l.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),". The lower case version of the Perstag should be used as the field name.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cmp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The comparison operator, as listed below.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of an ActiveCampaign contact field or contact field shortcode, or custom shortcode parameter or a hardcoded value, which will be compared to ",(0,l.kt)("inlineCode",{parentName:"td"},"value1")," based on the comparison operator. The available ActiveCampaign contact field names can be found in ",(0,l.kt)("a",{parentName:"td",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,l.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),". The lower case version of the Perstag should be used as the field name.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,l.kt)("h4",{id:"the-comparison-operators-are"},"The comparison operators are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"cmp value"),(0,l.kt)("th",{parentName:"tr",align:null},"Or"),(0,l.kt)("th",{parentName:"tr",align:null},"cmp value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"equal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"==")),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"EQ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"not equal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<>")),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"NE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"greater than"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">")),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"GT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"less than"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<")),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"LT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"greater than or equal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">=")),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"GE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"less than or equal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<=")),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"LE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"begins with"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"~=")),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"BW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ends with"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"=~")),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"EW")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"contains"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"~~")),(0,l.kt)("td",{parentName:"tr",align:null},"or"),(0,l.kt)("td",{parentName:"tr",align:null},"CONTAINS")))),(0,l.kt)("h2",{id:"validity"},"Validity"),(0,l.kt)("p",null,"This shortcode is evaluated for ",(0,l.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,l.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"[ELSE_compare]")," conditional branching is supported."),(0,l.kt)("h2",{id:"nesting"},"Nesting"),(0,l.kt)("p",null,"Shortcode nesting is supported:\n",(0,l.kt)("strong",{parentName:"p"},"[mbr_compare1]")," thru ",(0,l.kt)("strong",{parentName:"p"},"[mbr_compare19]"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"[ELSE_compare1]")," thru ",(0,l.kt)("strong",{parentName:"p"},"[ELSE_compare19]"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"[/mbr_compare1]")," thru ",(0,l.kt)("strong",{parentName:"p"},"[/mbr_compare19]")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,l.kt)("p",null,'Display the value stored in the ActiveCampaign contact field named first_name for the logged in user preceded by the word "Hello" if that field is not empty. Otherwise display "Hello Friend.":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_compare value1='[mbr_db_first_name]' cmp='NE' value2='']\nHello [mbr_db_first_name].\n[ELSE_compare]\nHello Friend.\n[/mbr_compare]\n"))),(0,l.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,l.kt)("p",null,"Display the value passed for the parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"nickname"),' to the custom shortcode where this mbr_compare shortcode is placed preceded by the word "Hello" if the parameter is not empty. Otherwise display "Hello Friend.":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_compare value1='%%nickname%%' cmp='NE' value2='']\nHello %%nickname%%.\n[ELSE_compare]\nHello Friend.\n[/mbr_compare]\n")))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}h.isMDXComponent=!0}}]);