"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96810],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,v=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return a?r.createElement(v,l(l({ref:t},c),{},{components:a})):r.createElement(v,l({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(67294);function n(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(87462),n=a(67294),o=a(72389),l=a(63725),i=a(86010),s="tabItem_LplD";function u(e){var t,a,o,u=e.lazy,c=e.block,d=e.defaultValue,m=e.values,p=e.groupId,v=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,n.useState)(h),T=w[0],_=w[1],j=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=y[p];null!=O&&O!==T&&g.some((function(e){return e.value===O}))&&_(O)}var C=function(e){var t=e.currentTarget,a=j.indexOf(t),r=g[a].value;r!==T&&(x(t),_(r),null!=p&&N(p,r))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;a=j[r]||j[0];break;case"ArrowLeft":var n=j.indexOf(e.currentTarget)-1;a=j[n]||j[j.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),u?(0,n.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,o.Z)();return n.createElement(u,(0,r.Z)({key:String(t)},e))}},72466:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(9877),i=a(58215),s=["components"],u={id:"js-add-remove-tags",title:"Add and Remove Tags with JavaScript",description:"The ActiveMember360 functions mbr_add_tags() and mbr_remove_tags() add or remove ActiveCampaign tags from the current logged in user.",sidebar_label:"mbr_add_tags/mbr_remove_tags"},c=void 0,d={unversionedId:"developer/js/js-add-remove-tags",id:"developer/js/js-add-remove-tags",title:"Add and Remove Tags with JavaScript",description:"The ActiveMember360 functions mbr_add_tags() and mbr_remove_tags() add or remove ActiveCampaign tags from the current logged in user.",source:"@site/docs/developer/js/js-add-remove-tags.mdx",sourceDirName:"developer/js",slug:"/developer/js/js-add-remove-tags",permalink:"/developer/js/js-add-remove-tags",tags:[],version:"current",lastUpdatedAt:1652193042,formattedLastUpdatedAt:"5/10/2022",frontMatter:{id:"js-add-remove-tags",title:"Add and Remove Tags with JavaScript",description:"The ActiveMember360 functions mbr_add_tags() and mbr_remove_tags() add or remove ActiveCampaign tags from the current logged in user.",sidebar_label:"mbr_add_tags/mbr_remove_tags"},sidebar:"api",previous:{title:"JS",permalink:"/category/js"},next:{title:"mbr_set_field",permalink:"/developer/js/js-set-field"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],v={toc:p};function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"ActiveMember360 provides functions that let you add and remove tags for the contact associated with the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,o.kt)("strong",{parentName:"a"},"remote user")),"."),(0,o.kt)("p",null,"The functions are ",(0,o.kt)("inlineCode",{parentName:"p"},"mbr_add_tags")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mbr_remove_tags"),"."),(0,o.kt)("p",null,"Both accept as a parameter a comma separated list of tag IDs."),(0,o.kt)("p",null,"The adding or removing of any contact tags are immediately effective within WordPress for the the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,o.kt)("strong",{parentName:"a"},"remote user")),"."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mbr_add_tags ( $tags )")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mbr_remove_tags ( $tags )")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"$tags"),(0,o.kt)("td",{parentName:"tr",align:"left"},"(string)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's defined within ActiveCampaign specified in a comma separated string and to be added to/removed from the contact associated with the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,o.kt)("strong",{parentName:"a"},"remote user")),". The available tags can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". ",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-add-tags when the button is clicked the tags with IDs ",(0,o.kt)("strong",{parentName:"p"},"66")," and ",(0,o.kt)("strong",{parentName:"p"},"67")," will be added to the ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,o.kt)("strong",{parentName:"a"},"remote user")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-add-tags' ).click( function() {\nmbr_add_tags( '66,67');\n} );\n} );\n<\/script>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-add-tags">Add Tags 66 and 67</button>\n'))),(0,o.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-remove-tags when the button is clicked the tags with IDs ",(0,o.kt)("strong",{parentName:"p"},"66")," and ",(0,o.kt)("strong",{parentName:"p"},"67")," will be removed from the ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,o.kt)("strong",{parentName:"a"},"remote user")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-remove-tags' ).click( function() {\nmbr_remove_tags( '66,67');\n} );\n} );\n<\/script>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-remove-tags">Remove Tags 66 and 67</button>\n')))))}f.isMDXComponent=!0}}]);