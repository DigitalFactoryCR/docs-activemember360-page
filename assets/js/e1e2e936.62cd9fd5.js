"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70782],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(67294);function n(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(87462),n=r(67294),o=r(72389),i=r(63725),l=r(86010),s="tabItem_LplD";function d(e){var t,r,o,d=e.lazy,u=e.block,p=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.UB)(),y=w.tabGroupChoices,g=w.setTabGroupChoices,_=(0,n.useState)(k),N=_[0],x=_[1],E=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==N&&b.some((function(e){return e.value===C}))&&x(C)}var O=function(e){var t=e.currentTarget,r=E.indexOf(t),a=b[r].value;a!==N&&(T(t),x(a),null!=m&&g(m,a))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;r=E[a]||E[0];break;case"ArrowLeft":var n=E.indexOf(e.currentTarget)-1;r=E[n]||E[E.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},b.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),d?(0,n.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,o.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},36087:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=r(9877),l=r(58215),s=["components"],d={id:"mbr_show_before",title:"mbr_show_before",description:"The ActiveMember360 shortcode mbr_show_before determines the content to be included based upon whether the current date is before the specified date adjusted as requested.",sidebar_label:"mbr_show_before"},u=void 0,p={unversionedId:"shortcodes/mbr_show_before",id:"shortcodes/mbr_show_before",title:"mbr_show_before",description:"The ActiveMember360 shortcode mbr_show_before determines the content to be included based upon whether the current date is before the specified date adjusted as requested.",source:"@site/docs/shortcodes/mbr_show_before.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_show_before",permalink:"/shortcodes/mbr_show_before",tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"mbr_show_before",title:"mbr_show_before",description:"The ActiveMember360 shortcode mbr_show_before determines the content to be included based upon whether the current date is before the specified date adjusted as requested.",sidebar_label:"mbr_show_before"},sidebar:"shortcodes",previous:{title:"mbr_show_after",permalink:"/shortcodes/mbr_show_after"},next:{title:"mbr_show_between",permalink:"/shortcodes/mbr_show_between"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],h={toc:m};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode determines the content to be included based upon whether the current date is before the specified date adjusted as requested."),(0,o.kt)("p",null,"The specified date can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The current date.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Any date formatted according to the the syntax rules set for PHP as detailed within ",(0,o.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Any ActiveCampaign contact date field. Most ActiveCampaign date fields are properly formatted and will function correctly."),(0,o.kt)("p",{parentName:"li"},"The date field is specified by using the ActiveCampaign personalization tag for the contact field (Perstag) with the characters % before and after the tag for the ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," parameter. The available Perstags can be found in ",(0,o.kt)("a",{parentName:"p",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),"."),(0,o.kt)("p",{parentName:"li"},"Alternatively see ",(0,o.kt)("a",{parentName:"p",href:"/shortcodes/mbr_contact",title:"Click to learn how to use the [mbr_contact] shortcode"},(0,o.kt)("strong",{parentName:"a"},"[mbr_contact]"))," for information upon how to reference ActiveCamapign contact fields.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The logged in users registration date for WordPress specified by using ",(0,o.kt)("inlineCode",{parentName:"p"},"#USER_REGISTERED#")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," parameter."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"date"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The specified date must provide a value that follows the syntax rules set for PHP as detailed within ",(0,o.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),". Most ActiveCampaign date fields are properly formatted and will work.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"adjust"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any text operator that follows the syntax rules as detailed for ",(0,o.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/function.strtotime.php",title:"Click to learn how to sepcify valid strtotime operators"},"PHP strtotime()"),". This will modify the specified date.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[ELSE_show_before]")," conditional branching is supported."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting within is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is the special offer' if the current date is before 2021-Dec-05:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_before date='20211205']\nHere is the special offer\n[/mbr_show_before]\n"))),(0,o.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is the special offer' if the current date is before 2021-Dec-05 otherwise it returns 'Sorry the special offer is no longer available':"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_before date='20211205']\nHere is the special offer\n[ELSE_show_before]\nSorry the special offer is no longer available\n[/mbr_show_before]\n"))),(0,o.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is the special offer' if the current date is before 2022-Mar-03 i.e. 2021-Dec-03 with 3 months added:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_before date='20211203' adjust='+3 months']\nHere is the special offer\n[/mbr_show_before]\n"))),(0,o.kt)(l.Z,{value:"ex4",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is the special new member content' if the current date is before the date of the logged in users WordPress registration with +30 days added. Otherwise 'Enjoy the content available for members here' is shown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_before date='#USER_REGISTERED#' adjust='+30 days']\nHere is the special new member content\n[ELSE_show_before]\nEnjoy the content available for members here\n[/mbr_show_before]\n"))),(0,o.kt)(l.Z,{value:"ex5",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is the special new member content' if the current date is before the date stored within the ActiveCampaign contact field with perstag ",(0,o.kt)("inlineCode",{parentName:"p"},"joiningdate")," for the ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," with 10 days added. Otherwise 'Enjoy the content available for members here' is shown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_before date='%JOININGDATE%' adjust='+10 days']\nHere is the special new member content\n[ELSE_show_before]\nEnjoy the content available for members here\n[/mbr_show_before]\n"))),(0,o.kt)(l.Z,{value:"ex6",mdxType:"TabItem"},(0,o.kt)("p",null,"Displays 'Here is the special offer' if the current date is before the date stored within the ActiveCampaign contact field ",(0,o.kt)("inlineCode",{parentName:"p"},"my_custom_field")," for the ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," with 1 week added:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_show_before date='[mbr_db_my_custom_field]' adjust='+1 week']\nHere is the special offer\n[/mbr_show_before]\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}f.isMDXComponent=!0}}]);