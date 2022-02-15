"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7286],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7462),r=a(7294),l=a(2389),i=a(9548),o=a(6010),s="tabItem_LplD";function d(e){var t,a,l,d=e.lazy,u=e.block,c=e.defaultValue,p=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),k=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,r.useState)(y),j=w[0],x=w[1],_=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=k[m];null!=O&&O!==j&&b.some((function(e){return e.value===O}))&&x(O)}var D=function(e){var t=e.currentTarget,a=_.indexOf(t),n=b[a].value;n!==j&&(T(t),x(n),null!=m&&N(m,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=_.indexOf(e.currentTarget)+1;a=_[n]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;a=_[r]||_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},h)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return _.push(e)},onKeyDown:E,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),d?(0,r.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function u(e){var t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},7223:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(9877),o=a(8215),s=["components"],d={id:"mbr_jdelay",title:"mbr_jdelay",description:"The ActiveMember360 shortcode mbr_jdelay applies a jQuery \u201canimation\u201d against an existing CSS ID or one created automatically.",sidebar_label:"mbr_jdelay"},u=void 0,c={unversionedId:"shortcodes/mbr_jdelay",id:"shortcodes/mbr_jdelay",title:"mbr_jdelay",description:"The ActiveMember360 shortcode mbr_jdelay applies a jQuery \u201canimation\u201d against an existing CSS ID or one created automatically.",source:"@site/docs/shortcodes/mbr_jdelay.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_jdelay",permalink:"/docs-activemember360-page/shortcodes/mbr_jdelay",tags:[],version:"current",frontMatter:{id:"mbr_jdelay",title:"mbr_jdelay",description:"The ActiveMember360 shortcode mbr_jdelay applies a jQuery \u201canimation\u201d against an existing CSS ID or one created automatically.",sidebar_label:"mbr_jdelay"},sidebar:"shortcodes",previous:{title:"mbr_include_once",permalink:"/docs-activemember360-page/shortcodes/mbr_include_once"},next:{title:"mbr_list",permalink:"/docs-activemember360-page/shortcodes/mbr_list"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],m={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"This shortcode applies a jQuery \u201canimation\u201d against an existing CSS ID or one created automatically."),(0,l.kt)("p",null,"It enables the timed/delayed fading in and out of CSS elements."),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Please note that the closing shortcode tag ",(0,l.kt)("inlineCode",{parentName:"p"},"[/mbr_jdelay]")," is necessary if the shortcode is used more than once within a page or post."))),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Name of an existing CSS ID to which the shortcode should be applied. If not specified, one will be created automatically.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fade_out"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Determines whether the element will initially be displayed or not. If not specified, 0 is assumed and initial display will be suppressed. Any value higher than 0 will display the element for that many seconds before applying the remaining actions.",(0,l.kt)("strong",{parentName:"td"},"Default:")," 0",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delay_show"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The delay in seconds until the element will be shown.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fade_show"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The gradual opacity steps in seconds until the element will be fully visible.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delay_hide"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The delay in seconds until the element will be hidden.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fade_hide"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The gradual opacity steps in seconds until the element will be fully invisible.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," 0.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,l.kt)("h2",{id:"validity"},"Validity"),(0,l.kt)("p",null,"This shortcode is evaluated for ",(0,l.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,l.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,l.kt)("p",null,"This shortcode does ",(0,l.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,l.kt)("strong",{parentName:"p"},"[ELSE_jdelay]"),"."),(0,l.kt)("h2",{id:"nesting"},"Nesting"),(0,l.kt)("p",null,"Shortcode nesting is ",(0,l.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,l.kt)("p",null,'Displays "My message" immediately the visitor lands on the page and hides it 5 seconds later:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_jdelay fade_out='5']\nMy message\n[/mbr_jdelay]\n"))),(0,l.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,l.kt)("p",null,'Displays "My message" after 5 seconds of the visitor landing on the page and hides t 5 seconds later:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_jdelay delay_show='5' delay_hide='5']\nMy message\n[/mbr_jdelay]\n"))),(0,l.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,l.kt)("p",null,"Displays the HTML tag with CSS ID ",(0,l.kt)("strong",{parentName:"p"},"test")," immediately the visitor lands on the page and hides it 5 seconds later:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_jdelay id='test' fade_out='5']\n[/mbr_jdelay]\n")))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}h.isMDXComponent=!0}}]);