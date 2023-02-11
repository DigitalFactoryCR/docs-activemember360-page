"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29620],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(67294);function n(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(87462),n=a(67294),o=a(72389),i=a(63725),l=a(86010),s="tabItem_LplD";function u(e){var t,a,o,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,f=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.UB)(),y=w.tabGroupChoices,g=w.setTabGroupChoices,_=(0,n.useState)(k),N=_[0],x=_[1],T=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==N&&b.some((function(e){return e.value===C}))&&x(C)}var P=function(e){var t=e.currentTarget,a=T.indexOf(t),r=b[a].value;r!==N&&(E(t),x(r),null!=m&&g(m,r))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;a=T[r]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;a=T[n]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),u?(0,n.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},2915:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=a(9877),l=a(58215),s=["components"],u={id:"mbr_show_after",title:"mbr_show_after",description:"The ActiveMember360 shortcode mbr_show_after determines the content to be included based upon whether the current date is after the specified date adjusted as requested.",sidebar_label:"mbr_show_after"},d=void 0,p={unversionedId:"shortcodes/mbr_show_after",id:"shortcodes/mbr_show_after",title:"mbr_show_after",description:"The ActiveMember360 shortcode mbr_show_after determines the content to be included based upon whether the current date is after the specified date adjusted as requested.",source:"@site/docs/shortcodes/mbr_show_after.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_show_after",permalink:"/shortcodes/mbr_show_after",tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"mbr_show_after",title:"mbr_show_after",description:"The ActiveMember360 shortcode mbr_show_after determines the content to be included based upon whether the current date is after the specified date adjusted as requested.",sidebar_label:"mbr_show_after"},sidebar:"shortcodes",previous:{title:"mbr_not_user_agent",permalink:"/shortcodes/mbr_not_user_agent"},next:{title:"mbr_show_before",permalink:"/shortcodes/mbr_show_before"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],f={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode determines the content to be included based upon whether the current date is after the specified date adjusted as requested."),(0,o.kt)("p",null,"The specified date can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The current date.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Any date formatted according to the the syntax rules set for PHP as detailed within ",(0,o.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Any ActiveCampaign contact date field. Most ActiveCampaign date fields are properly formatted and will function correctly."),(0,o.kt)("p",{parentName:"li"},"The date field is specified by using the ActiveCampaign personalization tag for the contact field (Perstag) with the characters % before and after the tag for the ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," parameter. The available Perstags can be found in ",(0,o.kt)("a",{parentName:"p",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),"."),(0,o.kt)("p",{parentName:"li"},"Alternatively see ",(0,o.kt)("a",{parentName:"p",href:"/shortcodes/mbr_contact",title:"Click to learn how to use the [mbr_contact] shortcode"},(0,o.kt)("strong",{parentName:"a"},"[mbr_contact]"))," for information upon how to reference ActiveCamapign contact fields.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The logged in users registration date for WordPress specified by using ",(0,o.kt)("inlineCode",{parentName:"p"},"#USER_REGISTERED#")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," parameter."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"date"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The specified date must provide a value that follows the syntax rules set for PHP as detailed within ",(0,o.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),". Most ActiveCampaign date fields are properly formatted and will work.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"adjust"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any text operator that follows the syntax rules as detailed for ",(0,o.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/function.strtotime.php",title:"Click to learn how to sepcify valid strtotime operators"},"PHP strtotime()"),". This will modify the specified date.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[ELSE_show_after]")," conditional branching is supported."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting within is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is the special offer' if the current date is after 2021-Dec-05:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_after date='20211205']\nHere is the special offer\n[/mbr_show_after]\n"))),(0,o.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is the special offer' if the current date is after 2021-Dec-05 otherwise it returns 'Sorry the special offer is not yet available':"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_after date='20211205']\nHere is the special offer\n[ELSE_show_after]\nSorry the special offer is not yet available\n[/mbr_show_after]\n"))),(0,o.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is the special offer' if the current date is after 2022-Mar-03 i.e. 2021-Dec-03 with 3 months added:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_after date='20211203' adjust='+3 months']\nHere is the special offer\n[/mbr_show_after]\n"))),(0,o.kt)(l.Z,{value:"ex4",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is your bonus for staying with us' if the current date is after the date of the logged in users WordPress registration with +30 days added:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_after date='#USER_REGISTERED#' adjust='+30 days']\nHere is your bonus for staying with us\n[/mbr_show_after]\n"))),(0,o.kt)(l.Z,{value:"ex5",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is your next lesson' if the current date is after the date stored within the ActiveCampaign contact field with perstag ",(0,o.kt)("inlineCode",{parentName:"p"},"joiningdate")," for the ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," with 10 days added. Otherwise 'No further lessons yet available' is shown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_after date='%JOININGDATE%' adjust='+10 days']\nHere is your next lesson\n[ELSE_show_after]\nNo further lessons yet available\n[/mbr_show_after]\n"))),(0,o.kt)(l.Z,{value:"ex6",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is your bonus content' if the current date is after the date stored within the ActiveCampaign contact field ",(0,o.kt)("inlineCode",{parentName:"p"},"my_custom_field")," for the ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," with 1 week added:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_after date='[mbr_db_my_custom_field]' adjust='+1 week']\nHere is your bonus content\n[/mbr_show_after]\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}h.isMDXComponent=!0}}]);