"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28142],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,b=m["".concat(l,".").concat(p)]||m[p]||f[p]||a;return t?r.createElement(b,i(i({ref:n},s),{},{components:t})):r.createElement(b,i({ref:n},s))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294);function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(87462),o=t(67294),a=t(72389),i=t(63725),u=t(86010),l="tabItem_LplD";function c(e){var n,t,a,c=e.lazy,s=e.block,f=e.defaultValue,m=e.values,p=e.groupId,b=e.className,d=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:d.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===f?f:null!=(n=null!=f?f:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=d[0])?void 0:a.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),E=g.tabGroupChoices,O=g.setTabGroupChoices,w=(0,o.useState)(h),x=w[0],T=w[1],j=[],k=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var M=E[p];null!=M&&M!==x&&v.some((function(e){return e.value===M}))&&T(M)}var D=function(e){var n=e.currentTarget,t=j.indexOf(n),r=v[t].value;r!==x&&(k(n),T(r),null!=p&&O(p,r))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break;case"ArrowLeft":var o=j.indexOf(e.currentTarget)-1;t=j[o]||j[j.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},b)},v.map((function(e){var n=e.value,t=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:D,onClick:D},a,{className:(0,u.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),c?(0,o.cloneElement)(d.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function s(e){var n=(0,a.Z)();return o.createElement(c,(0,r.Z)({key:String(n)},e))}},11010:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=(t(9877),t(58215),["components"]),u={id:"memberoni",title:"Memberoni Extension",description:"Learn about the ActiveMember360 Memberoni Extension",sidebar_label:"Memberoni"},l=void 0,c={unversionedId:"extensions/memberoni",id:"extensions/memberoni",title:"Memberoni Extension",description:"Learn about the ActiveMember360 Memberoni Extension",source:"@site/docs/extensions/memberoni.mdx",sourceDirName:"extensions",slug:"/extensions/memberoni",permalink:"/extensions/memberoni",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"memberoni",title:"Memberoni Extension",description:"Learn about the ActiveMember360 Memberoni Extension",sidebar_label:"Memberoni"}},s={},f=[],m={toc:f};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}))}p.isMDXComponent=!0}}]);