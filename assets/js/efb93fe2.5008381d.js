"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3737],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(a),f=n,p=m["".concat(d,".").concat(f)]||m[f]||c[f]||l;return a?r.createElement(p,o(o({ref:t},u),{},{components:a})):r.createElement(p,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(7462),n=a(7294),l=a(2389),o=a(9548),i=a(6010),d="tabItem_LplD";function s(e){var t,a,l,s=e.lazy,u=e.block,c=e.defaultValue,m=e.values,f=e.groupId,p=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),g=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,n.useState)(k),_=N[0],x=N[1],T=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=g[f];null!=P&&P!==_&&v.some((function(e){return e.value===P}))&&x(P)}var O=function(e){var t=e.currentTarget,a=T.indexOf(t),r=v[a].value;r!==_&&(E(t),x(r),null!=f&&w(f,r))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;a=T[r]||T[0];break;case"ArrowLeft":var n=T.indexOf(e.currentTarget)-1;a=T[n]||T[T.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},p)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function u(e){var t=(0,l.Z)();return n.createElement(s,(0,r.Z)({key:String(t)},e))}},3706:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=a(9877),i=a(8215),d=["components"],s={id:"mbr_datediff",title:"mbr_datediff",description:"The ActiveMember360 shortcode mbr_datediff returns the difference between two specified date formatted as requested.",sidebar_label:"mbr_datediff"},u=void 0,c={unversionedId:"shortcodes/mbr_datediff",id:"shortcodes/mbr_datediff",title:"mbr_datediff",description:"The ActiveMember360 shortcode mbr_datediff returns the difference between two specified date formatted as requested.",source:"@site/docs/shortcodes/mbr_datediff.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_datediff",permalink:"/docs-activemember360-page/shortcodes/mbr_datediff",tags:[],version:"current",frontMatter:{id:"mbr_datediff",title:"mbr_datediff",description:"The ActiveMember360 shortcode mbr_datediff returns the difference between two specified date formatted as requested.",sidebar_label:"mbr_datediff"},sidebar:"shortcodes",previous:{title:"mbr_date",permalink:"/docs-activemember360-page/shortcodes/mbr_date"},next:{title:"mbr_email_change",permalink:"/docs-activemember360-page/shortcodes/mbr_email_change"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],f={toc:m};function p(e){var t=e.components,a=(0,n.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"This shortcode returns the difference between two specified date formatted as requested."),(0,l.kt)("p",null,"The specified dates can be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The current date."),(0,l.kt)("li",{parentName:"ul"},"Any date formatted according to the the syntax rules set for PHP as detailed within ",(0,l.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),"."),(0,l.kt)("li",{parentName:"ul"},"Any ActiveCampaign contact date field. Most ActiveCampaign date fields are properly formatted and will function correctly. See ",(0,l.kt)("a",{parentName:"li",href:"/shortcodes/mbr_contact",title:"Click to learn how to use the [mbr_contact] shortcode"},(0,l.kt)("strong",{parentName:"a"},"[mbr_contact]"))," for information upon how to reference ActiveCamapign contact fields.")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"from_date"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The specified date must provide a value that follows the syntax rules set for PHP as detailed within ",(0,l.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),". Most ActiveCampaign date fields are properly formatted and will work.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," The current date.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"to_date"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The specified date must provide a value that follows the syntax rules set for PHP as detailed within ",(0,l.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),". Most ActiveCampaign date fields are properly formatted and will work.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," The current date.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"format"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The desired format for the returned date difference. All fractions of days are rounded down.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Permissible Values:")," For days use d, for months and days use md, for years months and days use ymd, for seconds use U",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," d",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,l.kt)("h2",{id:"validity"},"Validity"),(0,l.kt)("p",null,"This shortcode is evaluated for ",(0,l.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,l.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,l.kt)("p",null,"This shortcode does ",(0,l.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,l.kt)("strong",{parentName:"p"},"[ELSE_datediff]"),"."),(0,l.kt)("h2",{id:"nesting"},"Nesting"),(0,l.kt)("p",null,"Shortcode nesting within is ",(0,l.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,l.kt)("p",null,"Returns the date difference as 121 days:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='20210901' to_date='20211231']\n"))),(0,l.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,l.kt)("p",null,"Returns the date difference as 4 months and 1 days:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='20210901' to_date='20211231' format='md']\n"))),(0,l.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,l.kt)("p",null,"Returns the date difference as 1 year 4 months and 1 days:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='20210901' to_date='20221231' format='ymd']\n"))),(0,l.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,l.kt)("p",null,"Returns the date difference as 10454400 seconds:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='20210901' to_date='20211231' format='U']\n"))),(0,l.kt)(i.Z,{value:"ex5",mdxType:"TabItem"},(0,l.kt)("p",null,"Returns the date difference between the date value stored in the ActiveCampaign contact field my_custom_field_2 and the date value stored in the ActiveCampaign contact field my_custom_field_1 as days:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_datediff from_date='[mbr_db_my_custom_field_1]' to_date='[mbr_db_my_custom_field_2]']\n")))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}p.isMDXComponent=!0}}]);