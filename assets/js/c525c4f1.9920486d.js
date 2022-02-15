"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[740],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7462),a=r(7294),i=r(2389),s=r(9548),l=r(6010),o="tabItem_LplD";function u(e){var t,r,i,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===c?c:null!=(t=null!=c?c:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==_&&!b.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.UB)(),E=k.tabGroupChoices,g=k.setTabGroupChoices,y=(0,a.useState)(_),T=y[0],N=y[1],x=[],q=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=E[m];null!=w&&w!==T&&b.some((function(e){return e.value===w}))&&N(w)}var O=function(e){var t=e.currentTarget,r=x.indexOf(t),n=b[r].value;n!==T&&(q(t),N(n),null!=m&&g(m,n))},S=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",o,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},4299:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=r(9877),l=r(8215),o=["components"],u={id:"mbr_is_http_request",title:"mbr_is_http_request",description:"The ActiveMember360 shortcode mbr_is_http_request determines the content to be included based upon the existence of the specified $_REQUEST variable and it's optionally specified value.",sidebar_label:"mbr_is_http_request"},p=void 0,c={unversionedId:"shortcodes/mbr_is_http_request",id:"shortcodes/mbr_is_http_request",title:"mbr_is_http_request",description:"The ActiveMember360 shortcode mbr_is_http_request determines the content to be included based upon the existence of the specified $_REQUEST variable and it's optionally specified value.",source:"@site/docs/shortcodes/mbr_is_http_request.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_http_request",permalink:"/docs-activemember360-page/shortcodes/mbr_is_http_request",tags:[],version:"current",frontMatter:{id:"mbr_is_http_request",title:"mbr_is_http_request",description:"The ActiveMember360 shortcode mbr_is_http_request determines the content to be included based upon the existence of the specified $_REQUEST variable and it's optionally specified value.",sidebar_label:"mbr_is_http_request"},sidebar:"shortcodes",previous:{title:"mbr_is_http_post",permalink:"/docs-activemember360-page/shortcodes/mbr_is_http_post"},next:{title:"mbr_is_in_list",permalink:"/docs-activemember360-page/shortcodes/mbr_is_in_list"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],m={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"This shortcode determines the content to be included based upon the existence of the specified $","_","REQUEST variable and it's optionally specified value."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"var"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the $","_","REQUEST variable for whose existence you are checking.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"val"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A value to which the $","_","REQUEST variable will be compared to evaluate to true.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,i.kt)("h2",{id:"validity"},"Validity"),(0,i.kt)("p",null,"This shortcode is evaluated for ",(0,i.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,i.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"[ELSE_is_http_request]")," conditional branching is supported."),(0,i.kt)("h2",{id:"nesting"},"Nesting"),(0,i.kt)("p",null,"Shortcode nesting is supported:\n",(0,i.kt)("strong",{parentName:"p"},"[mbr_is_http_request1]")," thru ",(0,i.kt)("strong",{parentName:"p"},"[mbr_is_http_request19]"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"[ELSE_is_http_request1]")," thru ",(0,i.kt)("strong",{parentName:"p"},"[ELSE_is_http_request19]"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"[/mbr_is_http_request1]")," thru ",(0,i.kt)("strong",{parentName:"p"},"[/mbr_is_http_request19]")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(s.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,'Will display "Test REQUEST is set" if $',"_","REQUEST","['test_request']"," exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_is_http_request name='test_request']\nTest REQUEST is set\n[/mbr_is_http_request]\n"))),(0,i.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,i.kt)("p",null,'Will display "Test REQUEST is set" if $',"_","REQUEST","['test_request']",' exists. Otherwise will display "Test REQUEST is NOT set":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_is_http_request name='test_request']\nTest REQUEST is set\n[ELSE_is_http_request]\nTest REQUEST is NOT set\n[/mbr_is_http_request]\n"))),(0,i.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,i.kt)("p",null,'Will display "Test REQUEST is set to 123" if $',"_","REQUEST","['test_request']",' exists AND its value is equal to 123. Otherwise will display "Test REQUEST is NOT set to a value equal to 123":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_is_http_request name='test_request' val='123']\nTest REQUEST is set to 123\n[ELSE_is_http_request]\nTest REQUEST is NOT set to a value equal to 123\n[/mbr_is_http_request]\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is no ActiveMember360 API function equivalent for this shortcode. Please use standard PHP functions."))))}h.isMDXComponent=!0}}]);