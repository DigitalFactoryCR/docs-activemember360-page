"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57397],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(87462),a=r(67294),o=r(72389),l=r(63725),i=r(86010),u="tabItem_LplD";function c(e){var t,r,o,c=e.lazy,s=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,l.UB)(),k=x.tabGroupChoices,g=x.setTabGroupChoices,w=(0,a.useState)(y),O=w[0],T=w[1],E=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=k[d];null!=j&&j!==O&&b.some((function(e){return e.value===j}))&&T(j)}var P=function(e){var t=e.currentTarget,r=E.indexOf(t),n=b[r].value;n!==O&&(N(t),T(n),null!=d&&g(d,n))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,o.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},19797:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(9877),i=r(58215),u=["components"],c={id:"excerpt",title:"mbr/excerpt",description:"The ActiveMember360 filter hook mbr/excerpt is used to modify an excerpt.",sidebar_label:"mbr/excerpt"},s=void 0,p={unversionedId:"developer/hooks/excerpt",id:"developer/hooks/excerpt",title:"mbr/excerpt",description:"The ActiveMember360 filter hook mbr/excerpt is used to modify an excerpt.",source:"@site/docs/developer/hooks/excerpt.mdx",sourceDirName:"developer/hooks",slug:"/developer/hooks/excerpt",permalink:"/developer/hooks/excerpt",tags:[],version:"current",lastUpdatedAt:1647023204,formattedLastUpdatedAt:"3/11/2022",frontMatter:{id:"excerpt",title:"mbr/excerpt",description:"The ActiveMember360 filter hook mbr/excerpt is used to modify an excerpt.",sidebar_label:"mbr/excerpt"},sidebar:"api",previous:{title:"mbr/display_name",permalink:"/developer/hooks/display-name"},next:{title:"mbr/login/redirect",permalink:"/developer/hooks/login-redirect"}},m={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],f={toc:d};function v(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This filter hook enables you to modify an excerpt."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"$excerpt"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The current excerpt as determined by content and settings.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"function my_mbr_excerpt($excerpt) {\n  // In this simple example, we trim the current excerpt\n  // and return it as upper case\n  return strtoupper(trim($excerpt));\n}\nadd_filter('mbr/excerpt', 'my_mbr_excerpt',10,1);\n")))))}v.isMDXComponent=!0}}]);