"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7892],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=n,f=m["".concat(d,".").concat(p)]||m[p]||c[p]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7462),n=r(7294),o=r(2389),l=r(9548),i=r(6010),d="tabItem_LplD";function s(e){var t,r,o,s=e.lazy,u=e.block,c=e.defaultValue,m=e.values,p=e.groupId,f=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),g=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,n.useState)(k),x=N[0],T=N[1],_=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var E=g[p];null!=E&&E!==x&&b.some((function(e){return e.value===E}))&&T(E)}var O=function(e){var t=e.currentTarget,r=_.indexOf(t),a=b[r].value;a!==x&&(P(t),T(a),null!=p&&w(p,a))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;r=_[a]||_[0];break;case"ArrowLeft":var n=_.indexOf(e.currentTarget)-1;r=_[n]||_[_.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},b.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return _.push(e)},onKeyDown:C,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),s?(0,n.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,o.Z)();return n.createElement(s,(0,a.Z)({key:String(t)},e))}},3774:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=r(9877),i=r(8215),d=["components"],s={id:"mbr_date",title:"mbr_date",description:"The ActiveMember360 shortcode mbr_date returns a specified date formatted and modified as requested.",sidebar_label:"mbr_date"},u=void 0,c={unversionedId:"shortcodes/mbr_date",id:"shortcodes/mbr_date",title:"mbr_date",description:"The ActiveMember360 shortcode mbr_date returns a specified date formatted and modified as requested.",source:"@site/docs/shortcodes/mbr_date.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_date",permalink:"/docs-activemember360-page/shortcodes/mbr_date",tags:[],version:"current",frontMatter:{id:"mbr_date",title:"mbr_date",description:"The ActiveMember360 shortcode mbr_date returns a specified date formatted and modified as requested.",sidebar_label:"mbr_date"},sidebar:"shortcodes",previous:{title:"mbr_cookie_set",permalink:"/docs-activemember360-page/shortcodes/mbr_cookie_set"},next:{title:"mbr_datediff",permalink:"/docs-activemember360-page/shortcodes/mbr_datediff"}},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],p={toc:m};function f(e){var t=e.components,r=(0,n.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode returns a specified date formatted and modified as requested."),(0,o.kt)("p",null,"The specified date can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The current date."),(0,o.kt)("li",{parentName:"ul"},"Any date formatted according to the the syntax rules set for PHP as detailed within ",(0,o.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),"."),(0,o.kt)("li",{parentName:"ul"},"Any ActiveCampaign contact date field. Most ActiveCampaign date fields are properly formatted and will function correctly. See ",(0,o.kt)("a",{parentName:"li",href:"/shortcodes/mbr_contact",title:"Click to learn how to use the [mbr_contact] shortcode"},(0,o.kt)("strong",{parentName:"a"},"[mbr_contact]"))," for information upon how to reference ActiveCamapign contact fields.")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"date"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The specified date must provide a value that follows the syntax rules set for PHP as detailed within ",(0,o.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),". Most ActiveCampaign date fields are properly formatted and will work.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," The current date.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"operation"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any text operator that follows the syntax rules as detailed for ",(0,o.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/function.strtotime.php",title:"Click to learn how to specify valid strtotime operators"},"PHP strtotime()"),". This will modify the specified date.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"format"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The desired format for the returned date. The format must follow the syntax rules set for PHP as detailed within ",(0,o.kt)("a",{parentName:"td",href:"https://www.php.net/manual/en/datetime.format.php",title:"Click to learn how to format PHP dates"},"date formats"),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," F jS, Y",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,"This shortcode does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_date]"),"."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting within is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns today's date formatted as per this example November 1st, 2021:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_date format='F jS, Y']\n"))),(0,o.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns the specified date as December 5th, 2020:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_date date='20201205123456' format='F jS, Y']\n"))),(0,o.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns the date as 2022-Mar-03:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_date date='20211203' operation='+3 months' format='Y-M-d']\n"))),(0,o.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns the date stored in the ActiveCampaign contact field my_custom_field with 3 months added to it in Ymd e.g. 20210403 format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_date date='[mbr_db_my_custom_field]' operation='+3 months' format='Ymd']\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"For direct use in PHP code use the function ",(0,o.kt)("inlineCode",{parentName:"p"},"mbr_date()")," in a structure as illustrated here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$my_date = mbr_date( array( 'date'=>'20091205123456', 'format'=>'F jS, Y', 'operation'=>'+3 months') );\n")))}f.isMDXComponent=!0}}]);