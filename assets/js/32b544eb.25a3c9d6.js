"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81272],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(87462),a=n(67294),i=n(72389),o=n(63725),l=n(86010),p="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,s=e.block,d=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),w=v.tabGroupChoices,y=v.setTabGroupChoices,N=(0,a.useState)(g),_=N[0],x=N[1],T=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=w[m];null!=P&&P!==_&&b.some((function(e){return e.value===P}))&&x(P)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==_&&(O(t),x(r),null!=m&&y(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},h)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function s(e){var t=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},97983:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(9877),l=n(58215),p=["components"],u={id:"mbr_popup_inline",title:"mbr_popup_inline",description:"The ActiveMember360 shortcode mbr_popup_inline returns a HTML link which triggers a WordPress ThickBox popup window displaying the code embedded between the shortcodes opening and closing tags.",sidebar_label:"mbr_popup_inline"},s=void 0,d={unversionedId:"shortcodes/mbr_popup_inline",id:"shortcodes/mbr_popup_inline",title:"mbr_popup_inline",description:"The ActiveMember360 shortcode mbr_popup_inline returns a HTML link which triggers a WordPress ThickBox popup window displaying the code embedded between the shortcodes opening and closing tags.",source:"@site/docs/shortcodes/mbr_popup_inline.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_popup_inline",permalink:"/shortcodes/mbr_popup_inline",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_popup_inline",title:"mbr_popup_inline",description:"The ActiveMember360 shortcode mbr_popup_inline returns a HTML link which triggers a WordPress ThickBox popup window displaying the code embedded between the shortcodes opening and closing tags.",sidebar_label:"mbr_popup_inline"},sidebar:"shortcodes",previous:{title:"mbr_populate",permalink:"/shortcodes/mbr_populate"},next:{title:"mbr_popup_inliner",permalink:"/shortcodes/mbr_popup_inliner"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"This shortcode returns a HTML link which triggers a WordPress ThickBox popup window displaying the code embedded between the shortcodes opening and closing tags."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"title"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the title for the popup window. Ignored when the modal parameter is true.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"link_text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the text to be used for the HTML link anchor text. Only applicable when the autopopup parameter is false.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"w"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the width of the popup window.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," 500",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"h"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the height of the popup window.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," 400",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"autopopup"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the popup window should automatically popup on entering the page or whether the user should click a link to display the popup.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," false",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the delay in seconds before which an autopopup window should display.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," 0",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"modal"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies if the popup window should open as a modal popup window.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," false",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"modal_reload_after"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the underlying page should be reloaded upon exiting a modal popup window.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," true except when autopopup is also true and then the default is false",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"close_link"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the text to be used for the modal popup window close link.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Default:")," Close",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,i.kt)("h2",{id:"validity"},"Validity"),(0,i.kt)("p",null,"This shortcode is evaluated for ",(0,i.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,i.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,i.kt)("p",null,"This shortcode does ",(0,i.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,i.kt)("strong",{parentName:"p"},"[ELSE_popup_inline]"),"."),(0,i.kt)("h2",{id:"nesting"},"Nesting"),(0,i.kt)("p",null,"Shortcode nesting is ",(0,i.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,"Display a popup window titled Bonus Video after the user clicks the link labelled Click here to watch the video, sized as 800 pixels wide and 500 pixels high with content including My Header, Paragraph 1 and Paragraph 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_popup_inline title='Bonus Video' link_text='Click here to watch the video' w='800' h='500']\nMy Header\nParagraph 1\nParagraph 2\n[/mbr_popup_inline]\n"))),(0,i.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,i.kt)("p",null,"Display a modal popup window titled Terms & Conditions automatically 2 seconds after the user visits the page, sized as 800 pixels wide and 500 pixels high with content including Paragraph 1 and Paragraph 2. Do not reload the page after exiting the modal window:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_popup_inline title='Terms & Conditions' autopopup='true' delay='2' modal='true' w='800' h='500']\nParagraph 1\nParagraph 2\n[/mbr_popup_inline]\n"))),(0,i.kt)(l.Z,{value:"ex3",mdxType:"TabItem"},(0,i.kt)("p",null,"Display a popup window titled Important Data after the user clicks the link labelled Reveal, sized as 800 pixels wide and 500 pixels high with content including the resolved shortcode ","[mbr_db_first_name]"," and custom shortcode ","[mbr_custom_shortcode]",":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_popup_inline title='Important Data' link_text='Reveal' w='800' h='500']\n[mbr_db_first_name]\n[mbr_custom_shortcode]\n[/mbr_popup_inline]\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}f.isMDXComponent=!0}}]);