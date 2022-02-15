"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1090],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7462),a=n(7294),i=n(2389),o=n(9548),s=n(6010),l="tabItem_LplD";function p(e){var t,n,i,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==_&&!b.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),g=k.tabGroupChoices,y=k.setTabGroupChoices,T=(0,a.useState)(_),N=T[0],O=T[1],x=[],w=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=g[m];null!=P&&P!==N&&b.some((function(e){return e.value===P}))&&O(P)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==N&&(w(t),O(r),null!=m&&y(m,r))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},h)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:E,onClick:E},i,{className:(0,s.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},4442:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(9877),s=n(8215),l=["components"],p={id:"mbr_is_http_post",title:"mbr_is_http_post",description:"The ActiveMember360 shortcode mbr_is_http_post determines the content to be included based upon the existence of the specified $_POST variable and it's optionally specified value.",sidebar_label:"mbr_is_http_post"},u=void 0,c={unversionedId:"shortcodes/mbr_is_http_post",id:"shortcodes/mbr_is_http_post",title:"mbr_is_http_post",description:"The ActiveMember360 shortcode mbr_is_http_post determines the content to be included based upon the existence of the specified $_POST variable and it's optionally specified value.",source:"@site/docs/shortcodes/mbr_is_http_post.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_http_post",permalink:"/docs-activemember360-page/shortcodes/mbr_is_http_post",tags:[],version:"current",frontMatter:{id:"mbr_is_http_post",title:"mbr_is_http_post",description:"The ActiveMember360 shortcode mbr_is_http_post determines the content to be included based upon the existence of the specified $_POST variable and it's optionally specified value.",sidebar_label:"mbr_is_http_post"},sidebar:"shortcodes",previous:{title:"mbr_is_http_get",permalink:"/docs-activemember360-page/shortcodes/mbr_is_http_get"},next:{title:"mbr_is_http_request",permalink:"/docs-activemember360-page/shortcodes/mbr_is_http_request"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"This shortcode determines the content to be included based upon the existence of the specified $","_","POST variable and it's optionally specified value."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"var"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the $","_","POST variable for whose existence you are checking.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"val"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A value to which the $","_","POST variable will be compared to evaluate to true.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,i.kt)("h2",{id:"validity"},"Validity"),(0,i.kt)("p",null,"This shortcode is evaluated for ",(0,i.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,i.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"[ELSE_is_http_post]")," conditional branching is supported."),(0,i.kt)("h2",{id:"nesting"},"Nesting"),(0,i.kt)("p",null,"Shortcode nesting is supported:\n",(0,i.kt)("strong",{parentName:"p"},"[mbr_is_http_post1]")," thru ",(0,i.kt)("strong",{parentName:"p"},"[mbr_is_http_post19]"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"[ELSE_is_http_post1]")," thru ",(0,i.kt)("strong",{parentName:"p"},"[ELSE_is_http_post19]"),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"[/mbr_is_http_post1]")," thru ",(0,i.kt)("strong",{parentName:"p"},"[/mbr_is_http_post19]")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,'Will display "Test POST is set" if $',"_","POST","['test_post']"," exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_is_http_post name='test_post']\nTest POST is set\n[/mbr_is_http_post]\n"))),(0,i.kt)(s.Z,{value:"ex2",mdxType:"TabItem"},(0,i.kt)("p",null,'Will display "Test POST is set" if $',"_","POST","['test_post']",' exists. Otherwise will display "Test POST is NOT set":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_is_http_post name='test_post']\nTest POST is set\n[ELSE_is_http_post]\nTest POST is NOT set\n[/mbr_is_http_post]\n"))),(0,i.kt)(s.Z,{value:"ex3",mdxType:"TabItem"},(0,i.kt)("p",null,'Will display "Test POST is set to 123" if $',"_","POST","['test_post']",' exists AND its value is equal to 123. Otherwise will display "Test POST is NOT set to a value equal to 123":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_is_http_post name='test_post' val='123']\nTest POST is set to 123\n[ELSE_is_http_post]\nTest POST is NOT set to a value equal to 123\n[/mbr_is_http_post]\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is no ActiveMember360 API function equivalent for this shortcode. Please use standard PHP functions."))))}h.isMDXComponent=!0}}]);