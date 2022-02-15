"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8537],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),c=a,g=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7462),a=r(7294),l=r(2389),i=r(9548),o=r(6010),s="tabItem_LplD";function u(e){var t,r,l,u=e.lazy,d=e.block,m=e.defaultValue,p=e.values,c=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),v=h.tabGroupChoices,y=h.setTabGroupChoices,_=(0,a.useState)(N),x=_[0],w=_[1],E=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var T=v[c];null!=T&&T!==x&&k.some((function(e){return e.value===T}))&&w(T)}var P=function(e){var t=e.currentTarget,r=E.indexOf(t),n=k[r].value;n!==x&&(O(t),w(n),null!=c&&y(c,n))},j=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},k.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,l.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},4061:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=r(9877),o=r(8215),s=["components"],u={id:"mbr_is_user_agent",title:"mbr_is_user_agent",description:"The ActiveMember360 shortcode mbr_is_user_agent determines the content to be included based upon the existence of the specified user agent.",sidebar_label:"mbr_is_user_agent"},d=void 0,m={unversionedId:"shortcodes/mbr_is_user_agent",id:"shortcodes/mbr_is_user_agent",title:"mbr_is_user_agent",description:"The ActiveMember360 shortcode mbr_is_user_agent determines the content to be included based upon the existence of the specified user agent.",source:"@site/docs/shortcodes/mbr_is_user_agent.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_user_agent",permalink:"/docs-activemember360-page/shortcodes/mbr_is_user_agent",tags:[],version:"current",frontMatter:{id:"mbr_is_user_agent",title:"mbr_is_user_agent",description:"The ActiveMember360 shortcode mbr_is_user_agent determines the content to be included based upon the existence of the specified user agent.",sidebar_label:"mbr_is_user_agent"},sidebar:"shortcodes",previous:{title:"mbr_is_session",permalink:"/docs-activemember360-page/shortcodes/mbr_is_session"},next:{title:"mbr_isset",permalink:"/docs-activemember360-page/shortcodes/mbr_isset"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Permitted user agent names are:",id:"permitted-user-agent-names-are",children:[],level:4}],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],c={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"This shortcode determines the content to be included based upon the existence of the specified user_agent."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Specify one or more user agents in a comma delimited string. Since a visitor cannot have more than one user agent, any matching agent will resolve to true if more than one is specified.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,l.kt)("h4",{id:"permitted-user-agent-names-are"},"Permitted user agent names are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"android"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"apache"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"blackberry"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"chrome"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"edge"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ff"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"firefox"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"gecko"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ie"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"iis"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"iis7"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ipad"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"iphone"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ipod"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"kindle"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"lynx"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"macff"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"macie"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"mobile"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ns4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"opera"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"operamini"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"operamobi"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"safari"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"silk"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"winff"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"winie"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"validity"},"Validity"),(0,l.kt)("p",null,"This shortcode is evaluated for ",(0,l.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,l.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"[ELSE_is_user_agent]")," conditional branching is supported."),(0,l.kt)("h2",{id:"nesting"},"Nesting"),(0,l.kt)("p",null,"Shortcode nesting is supported:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"[mbr_is_user_agent1]")," thru ",(0,l.kt)("strong",{parentName:"p"},"[mbr_is_user_agent19]"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"[ELSE_is_user_agent1]")," thru ",(0,l.kt)("strong",{parentName:"p"},"[ELSE_is_user_agent19]"),(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"[/mbr_is_user_agent1]")," thru ",(0,l.kt)("strong",{parentName:"p"},"[/mbr_is_user_agent19]")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,l.kt)("p",null,'Displays "User agent is Firefox." if the user agent is firefox. Otherwise will display "User agent is NOT Firefox.":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_is_user_agent name='firefox']\nUser agent is Firefox.\n[ELSE_is_user_agent]\nUser agent is NOT Firefox.\n[/mbr_is_user_agent]\n"))),(0,l.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,l.kt)("p",null,'Displays "User agent is Chrome or Edge." if the user agent is chrome or edge. Otherwise will display "User agent is NOT Chrome or Edge.":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_is_user_agent name=chrome,edge]\nUser agent is Chrome or Edge.\n[ELSE_is_user_agent]\nUser agent is NOT Chrome or Edge.\n[/mbr_is_user_agent]\n")))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}g.isMDXComponent=!0}}]);