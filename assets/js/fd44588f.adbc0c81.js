"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42845],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(87462),a=r(67294),o=r(72389),l=r(63725),i=r(86010),s="tabItem_LplD";function p(e){var t,r,o,p=e.lazy,u=e.block,d=e.defaultValue,c=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,_=(0,a.useState)(g),x=_[0],w=_[1],T=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==x&&b.some((function(e){return e.value===E}))&&w(E)}var O=function(e){var t=e.currentTarget,r=T.indexOf(t),n=b[r].value;n!==x&&(P(t),w(n),null!=m&&N(m,n))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;r=T[n]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;r=T[a]||T[T.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},b.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),p?(0,a.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},88735:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(9877),i=r(58215),s=["components"],p={id:"mbr_page",title:"mbr_page",description:"The ActiveMember360 shortcode mbr_page returns data from a specified page/post record in your WordPress database.",sidebar_label:"mbr_page"},u=void 0,d={unversionedId:"shortcodes/mbr_page",id:"shortcodes/mbr_page",title:"mbr_page",description:"The ActiveMember360 shortcode mbr_page returns data from a specified page/post record in your WordPress database.",source:"@site/docs/shortcodes/mbr_page.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_page",permalink:"/shortcodes/mbr_page",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_page",title:"mbr_page",description:"The ActiveMember360 shortcode mbr_page returns data from a specified page/post record in your WordPress database.",sidebar_label:"mbr_page"},sidebar:"shortcodes",previous:{title:"mbr_menu_loginout_url",permalink:"/shortcodes/mbr_menu_loginout_url"},next:{title:"mbr_permalink",permalink:"/shortcodes/mbr_permalink"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],f={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode returns data from a specified page/post record in your WordPress database."),(0,o.kt)("p",null,"It provides a means of duplicating content on alternate pages/posts with a different set of access conditions but without the need to maintain several content sources."),(0,o.kt)("p",null,"Furthermore, by allowing content parts to be drawn from several different pages/posts, it extends the content management capabilities of WordPress."),(0,o.kt)("p",null,"This shortcode is the identical to ",(0,o.kt)("a",{parentName:"p",href:"/shortcodes/mbr_post",title:"Click to learn how to use the [mbr_post] shortcode"},(0,o.kt)("strong",{parentName:"a"},"[mbr_post]"))," and is provided as a means of self-documenting your intentions."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please excercise care and ensure that you do not create cyclical references e.g. 'Page 1' is not pulling content from 'Page 2', which itself is pulling content from 'Page 1'."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The page ID i.e. ",(0,o.kt)("inlineCode",{parentName:"td"},"post_id")," for which to return the specified field data.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"field"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies the name of a WordPress post field to return. Any field used within the WordPress post or post_meta table can be specified.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Some Permitted Values:")," post_title, post_date, post_content, post_excerpt.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," post_content",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies the post status required in the ",(0,o.kt)("inlineCode",{parentName:"td"},"post_status")," field for the returned data to be displayed.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"excert_fb"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies whether a fallback to the excerpt is used if the status is not met. Please note that this ONLY applies when the specified field is set to ",(0,o.kt)("inlineCode",{parentName:"td"},"post_content"),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Permitted Values:")," yes, y, true, t, or 1.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,"This shortcode does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_page]"),"."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting within is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns the value of the field ",(0,o.kt)("inlineCode",{parentName:"p"},"post_title")," for the page with id 1234:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_page id='1234' field='post_title']\n"))),(0,o.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns the value of the field ",(0,o.kt)("inlineCode",{parentName:"p"},"post_content")," for the page with id 1234:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_page id='1234' field='post_content']\n"))),(0,o.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns the value of the field ",(0,o.kt)("inlineCode",{parentName:"p"},"post_excerpt")," for the page with id 1234:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_page id='1234' field='post_excerpt']\n"))),(0,o.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns the value of the field ",(0,o.kt)("inlineCode",{parentName:"p"},"post_excerpt")," for the page with id 1234 but only if the ",(0,o.kt)("inlineCode",{parentName:"p"},"post_status")," for that page is set to publish, otherwise nothing will be returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_page id='1234' field='post_excerpt' status='publish']\n"))),(0,o.kt)(i.Z,{value:"ex5",mdxType:"TabItem"},(0,o.kt)("p",null,"Returns the value of the field ",(0,o.kt)("inlineCode",{parentName:"p"},"post_content")," for the page with id 1234 but only if the ",(0,o.kt)("inlineCode",{parentName:"p"},"post_status")," for that page is set to publish. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"post_content")," field is empty then the value of the field ",(0,o.kt)("inlineCode",{parentName:"p"},"post_excerpt")," will be returned instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_page id='1234' field='post_content' status='publish' excerptfb='1']\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"For direct use in PHP code use the structure as illustrated here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$my_excerpt = mbr_page( array( 'id'=>'1234', 'field'=>'post_excerpt' ) );\n")))}h.isMDXComponent=!0}}]);