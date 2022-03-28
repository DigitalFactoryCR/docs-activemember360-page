"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6647],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),p=r,f=c["".concat(u,".").concat(p)]||c[p]||m[p]||l;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),l=a(72389),i=a(63725),o=a(86010),u="tabItem_LplD";function s(e){var t,a,l,s=e.lazy,d=e.block,m=e.defaultValue,c=e.values,p=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,r.useState)(k),T=w[0],x=w[1],_=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=y[p];null!=O&&O!==T&&b.some((function(e){return e.value===O}))&&x(O)}var E=function(e){var t=e.currentTarget,a=_.indexOf(t),n=b[a].value;n!==T&&(C(t),x(n),null!=p&&N(p,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=_.indexOf(e.currentTarget)+1;a=_[n]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;a=_[r]||_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:A,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},97604:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(9877),o=a(58215),u=["components"],s={id:"mbr_math",title:"mbr_math",description:"The ActiveMember360 Math Webhook is used to perform a calculation using the value from and storing the result to any contact field in your ActiveCampaign application",sidebar_label:"mbr_math"},d=void 0,m={unversionedId:"webhooks/mbr_math",id:"webhooks/mbr_math",title:"mbr_math",description:"The ActiveMember360 Math Webhook is used to perform a calculation using the value from and storing the result to any contact field in your ActiveCampaign application",source:"@site/docs/webhooks/mbr_math.mdx",sourceDirName:"webhooks",slug:"/webhooks/mbr_math",permalink:"/webhooks/mbr_math",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_math",title:"mbr_math",description:"The ActiveMember360 Math Webhook is used to perform a calculation using the value from and storing the result to any contact field in your ActiveCampaign application",sidebar_label:"mbr_math"},sidebar:"webhooks",previous:{title:"mbr_genpass",permalink:"/webhooks/mbr_genpass"},next:{title:"Contact Push",permalink:"/webhooks/contact-push"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Site URL &amp; Parameters",id:"site-url--parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],f={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ActiveMember360 mbr_math")," is used to perform a calculation using the value from and storing the result to any contact field in your ActiveCampaign application."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"The URL used for the mbr_math webhook is constructed using your site URL and parameters."),(0,l.kt)("p",null,"A sample of the URL structure required is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"site_url/?mbr_math=my_security_code\n")),(0,l.kt)("p",null,"The mbr_math URL is used as the webhook URL in an ActiveCampaign automation."),(0,l.kt)("h2",{id:"site-url--parameters"},"Site URL & Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Site URL"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"site_url"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The WordPress site URL from which the WordPress user is to be deleted. This can be found in ",(0,l.kt)("strong",{parentName:"td"},"WordPress, Settings, General, Site URL"),". It must be specified exactly as shown there.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mbr_math"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set to the security code used to authenticate the use of mbr_math. The security code used must be defined as detailed in ",(0,l.kt)("a",{parentName:"td",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,l.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes")),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"field"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of an ActiveCampaign contact field to use as an operand. The field can be any contact field in ActiveCampaign. The available field names can be found in ","[",(0,l.kt)("strong",{parentName:"td"},"ActiveMember360, Utilities, Contact Fields"),"][utilities-contact-fields]",". The lower case version of the Perstag should be used as the field name.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"operation"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The math operation to be performed.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Permitted Values:")," add, sub (subtract), div (divide), mul (multiply), pow (power), mod (modulus), sqr (square root), max (maximum), min (minimum).",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The second operand for the math ",(0,l.kt)("inlineCode",{parentName:"td"},"operation")," to be performed. This can be any value including that stored in the specified contact field in ActiveCampaign. The available field names can be found in ","[",(0,l.kt)("strong",{parentName:"td"},"ActiveMember360, Utilities, Contact Fields"),"][utilities-contact-fields]",". The lower case version of the Perstag should be used as the field name.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes, except for sqrt (square root)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"target"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of an ActiveCampaign contact field in which to save the result. The field can be any contact field in ActiveCampaign. The available field names can be found in ","[",(0,l.kt)("strong",{parentName:"td"},"ActiveMember360, Utilities, Contact Fields"),"][utilities-contact-fields]",". The lower case version of the Perstag should be used as the field name. If set to the special value 'noupdate' no result will be stored.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"field"),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"round"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The decimal rounding to apply to the result. If a positive value is provided the rounding will occur after the decimal point, if a negative value is provided the rounding will occur before the decimal point e.g -1 round to nearest ten. Halves are always rounded up. 0 means any value will be rounded to an integer",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," 0",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"decimal"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of decimals places used to store the result into ActiveCampaign. If a value of 0 is specified, which is the default, the value will be stored as an integer.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," 0 ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In all examples ",(0,l.kt)("strong",{parentName:"p"},"my_security_code")," must be replaced by a security code defined in ",(0,l.kt)("a",{parentName:"p",href:"/settings/security#security-codes",title:"Click to learn how to define ActiveMember360 Security Codes"},(0,l.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Security, Security Codes"))," on the WordPress site."))),(0,l.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,l.kt)("p",null,'This webhook URL will take the value stored in the field "fieldname1", add 300 to it, and store the result back into the same field as an integer:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_math=my_security_code&field=fieldname1&operation=add&value=300\n\n"))),(0,l.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,l.kt)("p",null,'This webhook URL will perform a calculation using the value stored in the field "fieldname1" divided by 2, storing the result back in the same field as an integer:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_math=my_security_code&field=fieldname1&operation=divide&value=2\n"))),(0,l.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,l.kt)("p",null,'This webhook URL will perform a calculation using the value stored in the field "fieldname1" multiplied by 39.95. The result is rounded to two decimal places and stored as a floating number with 2 decimal places in the field "fieldname2":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_math=my_security_code&field=fieldname1&operation=multiply&value=39.95&round=2&decimals=2&target=fieldname2\n"))),(0,l.kt)(o.Z,{value:"ex4",mdxType:"TabItem"},(0,l.kt)("p",null,'This webhook URL will perform a calculation using the value stored in the field "fieldname1" adding the value stored in the field "fieldname2". The result is rounded to two decimal places and stored as a floating number with 2 decimal places in the field "fieldname3":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://yoursite.com/?mbr_math=my_security_code&field=fieldname1&operation=add&value=fieldname2&target=fieldname3&round=2&decimal=2\n")))))}h.isMDXComponent=!0}}]);