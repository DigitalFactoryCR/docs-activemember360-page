"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9261],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),i=n(67294),r=n(72389),o=n(63725),l=n(86010),s="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,c=e.block,u=e.defaultValue,p=e.values,m=e.groupId,v=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),_=k.tabGroupChoices,y=k.setTabGroupChoices,N=(0,i.useState)(g),w=N[0],E=N[1],x=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=_[m];null!=O&&O!==w&&b.some((function(e){return e.value===O}))&&E(O)}var M=function(e){var t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==w&&(T(t),E(a),null!=m&&y(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:M,onClick:M},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),d?(0,i.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,r.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},66338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(9877),l=n(58215),s=["components"],d={id:"mbr_is_conditional",title:"mbr_is_conditional",description:"This shortcode determines the content to be included based upon the evaluation of a conditional.",sidebar_label:"mbr_is_conditional"},c=void 0,u={unversionedId:"shortcodes/mbr_is_conditional",id:"shortcodes/mbr_is_conditional",title:"mbr_is_conditional",description:"This shortcode determines the content to be included based upon the evaluation of a conditional.",source:"@site/docs/shortcodes/mbr_is_conditional.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_conditional",permalink:"/docs-activemember360-page/shortcodes/mbr_is_conditional",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_is_conditional",title:"mbr_is_conditional",description:"This shortcode determines the content to be included based upon the evaluation of a conditional.",sidebar_label:"mbr_is_conditional"},sidebar:"shortcodes",previous:{title:"mbr_is_bot",permalink:"/docs-activemember360-page/shortcodes/mbr_is_bot"},next:{title:"mbr_is_contact",permalink:"/docs-activemember360-page/shortcodes/mbr_is_contact"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],v={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"This shortcode determines the content to be included based upon the evaluation of a ",(0,r.kt)("strong",{parentName:"p"},"conditional"),"."),(0,r.kt)("p",null,"The purpose, definition, and use of ",(0,r.kt)("strong",{parentName:"p"},"conditionals "),"is explained in detail here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://activemember360.com/docs/conditionals"},"Conditionals")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The conditional id to be evaluated.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Default:")," none.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To ensure compatibility with the various page builders we recommend that no quote delimiters are used to specify the id parameter."),(0,r.kt)("p",{parentName:"div"},"Quotes are not needed for this shortcode as there can never be any spaces in the id."))),(0,r.kt)("h2",{id:"validity"},"Validity"),(0,r.kt)("p",null,"This shortcode is evaluated for ",(0,r.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Beware")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please be aware that if the conditional specified by the id is not published/active this shortcode will not be evaluated and will not display/include any content."))),(0,r.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[ELSE_is_conditional]")," conditional branching is supported."),(0,r.kt)("h2",{id:"nesting"},"Nesting"),(0,r.kt)("p",null,"Shortcode nesting is supported:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[mbr_is_conditional1]")," thru ",(0,r.kt)("strong",{parentName:"p"},"[mbr_is_conditional19]"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"[ELSE_is_conditional1]")," thru ",(0,r.kt)("strong",{parentName:"p"},"[ELSE_is_conditional19]"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"[/mbr_is_conditional1]")," thru ",(0,r.kt)("strong",{parentName:"p"},"[/mbr_is_conditional19]")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,r.kt)("p",null,'Display "Message 1" if the conditional with id 123 evaluates to ',(0,r.kt)("strong",{parentName:"p"},"TRUE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_is_conditional id=123]\nMessage 1\n[/mbr_is_conditional]\n"))),(0,r.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,r.kt)("p",null,'Display "Message 1" if the conditional with id 123 evaluates to ',(0,r.kt)("strong",{parentName:"p"},"TRUE"),'. Otherwise display "Message 2":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_is_conditional id=123]\nMessage 1\n[ELSE_is_conditional]\nMessage 2\n[/mbr_is_conditional]\n"))),(0,r.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,r.kt)("p",null,'Display in this order of priority "Message 1" if the conditional with id 123 evaluates to ',(0,r.kt)("strong",{parentName:"p"},"TRUE"),'. Else display "Message 2" if the conditional with id 456 evaluates to ',(0,r.kt)("strong",{parentName:"p"},"TRUE"),'. Else display "Message 3" if the conditional with id 456 evaluates to ',(0,r.kt)("strong",{parentName:"p"},"FALSE"),'. Else display "Message 4" if the conditional with id 123 evaluates to ',(0,r.kt)("strong",{parentName:"p"},"FALSE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_is_conditional id=123]\nMessage 1\n    [mbr_is_conditional1 id=456]\n    Message 2\n    [ELSE_is_conditional1]\n    Message 3\n    [/mbr_is_conditional1]\n[ELSE_is_conditional]\nMessage 4\n[/mbr_is_conditional]\n"))),(0,r.kt)(l.Z,{value:"ex4",mdxType:"TabItem"},(0,r.kt)("p",null,'Display in this order of priority "Message 1" if the conditional with id 123 evaluates to ',(0,r.kt)("strong",{parentName:"p"},"TRUE"),'. Else display "Message 2" if the conditional with id 456 evaluates to ',(0,r.kt)("strong",{parentName:"p"},"TRUE"),'. Else display "Message 3" if the conditional with id 123 evaluates to ',(0,r.kt)("strong",{parentName:"p"},"FALSE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[mbr_is_conditional1 id=123]\nMessage 1\n    [mbr_is_conditional2 id=456]\n    Message 2\n    [/mbr_is_conditional2]\n[ELSE_is_conditional1]\nMessage 3\n[/mbr_is_conditional1]\n")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"The PHP API function equivalent for this shortcode is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mbr_is_conditional( id )\n")),(0,r.kt)("p",null,"where id is an integer and the post_id of the conditional custom post."))}h.isMDXComponent=!0}}]);