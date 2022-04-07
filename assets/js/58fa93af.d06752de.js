"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3294],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),a=r(67294),o=r(72389),l=r(63725),i=r(86010),u="tabItem_LplD";function s(e){var t,r,o,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(r=g.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),y=v.tabGroupChoices,_=v.setTabGroupChoices,N=(0,a.useState)(k),T=N[0],x=N[1],w=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==T&&b.some((function(e){return e.value===E}))&&x(E)}var P=function(e){var t=e.currentTarget,r=w.indexOf(t),n=b[r].value;n!==T&&(O(t),x(n),null!=m&&_(m,n))},M=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;r=w[n]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.currentTarget)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return w.push(e)},onKeyDown:M,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,o.Z)();return a.createElement(s,(0,n.Z)({key:String(t)},e))}},58705:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(9877),i=r(58215),u=["components"],s={id:"mbr_logout_link",title:"mbr_logout_link",description:"The ActiveMember360 shortcode mbr_logout_link returns a HTML link to log out the current user from WordPress and redirect that logged out user to a chosen page/post/URL.",sidebar_label:"mbr_logout_link"},c=void 0,p={unversionedId:"shortcodes/mbr_logout_link",id:"shortcodes/mbr_logout_link",title:"mbr_logout_link",description:"The ActiveMember360 shortcode mbr_logout_link returns a HTML link to log out the current user from WordPress and redirect that logged out user to a chosen page/post/URL.",source:"@site/docs/shortcodes/mbr_logout_link.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_logout_link",permalink:"/shortcodes/mbr_logout_link",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_logout_link",title:"mbr_logout_link",description:"The ActiveMember360 shortcode mbr_logout_link returns a HTML link to log out the current user from WordPress and redirect that logged out user to a chosen page/post/URL.",sidebar_label:"mbr_logout_link"},sidebar:"shortcodes",previous:{title:"mbr_http_request",permalink:"/shortcodes/mbr_http_request"},next:{title:"mbr_logout_url",permalink:"/shortcodes/mbr_logout_url"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],f={toc:m};function g(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode returns a HTML link to log out the current user from WordPress and redirect that logged out user to a chosen page/post/URL."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"redirect"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies the URL the user will be redirected to after a logout.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," As defined in ",(0,o.kt)("a",{parentName:"td",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships, Redirect on logout")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"text"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies the text to use for the logout HTML link.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," Log out",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"css"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies the CSS class use for the logout HTML link.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," mbr_logout_link",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,"This shortcode does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_logout_link]"),"."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Will return the logout link that will redirect the logged out user to the page/post defined in ",(0,o.kt)("a",{parentName:"p",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships, Redirect on logout"))," and be displayed as ",(0,o.kt)("strong",{parentName:"p"},"Log out"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_logout_link]\n"))),(0,o.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"Will return the logout link that will redirect the logged out user to ",(0,o.kt)("a",{parentName:"p",href:"https://yoursite.com"},"https://yoursite.com"),": and be displayed as ",(0,o.kt)("strong",{parentName:"p"},"Sign Off"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_logout_link redirect='https://yoursite.com' text='Sign Off']\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"For direct use in PHP code use this structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"echo mbr_logout_link( array( 'redirect'=>'https://example.com', 'text'=>'Click here to logout' ) );\n")))}g.isMDXComponent=!0}}]);