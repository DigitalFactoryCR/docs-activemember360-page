"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92906],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(67294);function n(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(87462),n=r(67294),o=r(72389),i=r(63725),l=r(86010),u="tabItem_LplD";function s(e){var t,r,o,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),g=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,n.useState)(y),_=N[0],T=N[1],E=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=g[m];null!=O&&O!==_&&h.some((function(e){return e.value===O}))&&T(O)}var j=function(e){var t=e.currentTarget,r=E.indexOf(t),a=h[r].value;a!==_&&(x(t),T(a),null!=m&&w(m,a))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;r=E[a]||E[0];break;case"ArrowLeft":var n=E.indexOf(e.currentTarget)-1;r=E[n]||E[E.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=r?r:t)}))),s?(0,n.cloneElement)(v.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function c(e){var t=(0,o.Z)();return n.createElement(s,(0,a.Z)({key:String(t)},e))}},94193:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=r(9877),l=r(58215),u=["components"],s={id:"3rd-party-authentication",title:"mbr/3rd_party_authentication",description:"The ActiveMember360 filter hook mbr/3rd_party_authentication is to allow third party services to authenticate the email and password used for a login.",sidebar_label:"mbr/3rd_party_authentication"},c=void 0,p={unversionedId:"developer/hooks/3rd-party-authentication",id:"developer/hooks/3rd-party-authentication",title:"mbr/3rd_party_authentication",description:"The ActiveMember360 filter hook mbr/3rd_party_authentication is to allow third party services to authenticate the email and password used for a login.",source:"@site/docs/developer/hooks/3rd-party-authentication.mdx",sourceDirName:"developer/hooks",slug:"/developer/hooks/3rd-party-authentication",permalink:"/developer/hooks/3rd-party-authentication",tags:[],version:"current",lastUpdatedAt:1648057120,formattedLastUpdatedAt:"3/23/2022",frontMatter:{id:"3rd-party-authentication",title:"mbr/3rd_party_authentication",description:"The ActiveMember360 filter hook mbr/3rd_party_authentication is to allow third party services to authenticate the email and password used for a login.",sidebar_label:"mbr/3rd_party_authentication"},sidebar:"api",previous:{title:"Filter Hooks",permalink:"/category/filter-hooks"},next:{title:"mbr/display_name",permalink:"/developer/hooks/display-name"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],f={toc:m};function v(e){var t=e.components,r=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This filter hook enables you to use any third party service/process to validate a login."),(0,o.kt)("p",null,"If the filter returns the boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE")," the email/password authentication is passed."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The contact must exist within ActiveCampaign for the authentication to be processed."),(0,o.kt)("p",{parentName:"div"},"The contact will also need to satisfy the ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360")," login requirements to authenticate and proceed."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"$result"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Boolean set to ",(0,o.kt)("inlineCode",{parentName:"td"},"TRUE")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"FALSE"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"$user_email"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Variable containing the current WordPress field value of ",(0,o.kt)("inlineCode",{parentName:"td"},"user_email"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"$password"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Variable containing the password entered by the user.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"function my_mbr_3rd_party_authentication($result, $user_email, $password) {\n// check email and password with your 3rd party provider like Shopify, Facebook or whoever.\n// return TRUE; if email and password is validated by your 3rd party service.\n$result = TRUE;\nreturn $result;\n}\nadd_filter('mbr/3rd_party_authentication', 'my_mbr_3rd_party_authentication',10,3);\n")))))}v.isMDXComponent=!0}}]);