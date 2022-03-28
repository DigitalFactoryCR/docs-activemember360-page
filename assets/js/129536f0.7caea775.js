"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5822],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(b,i(i({ref:e},p),{},{components:n})):r.createElement(b,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(67294);function a(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(87462),a=n(67294),l=n(72389),i=n(63725),o=n(86010),s="tabItem_LplD";function u(t){var e,n,l,u=t.lazy,p=t.block,d=t.defaultValue,c=t.values,m=t.groupId,b=t.className,k=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:k.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,i.lx)(h,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(e=null!=d?d:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=k[0])?void 0:l.props.value;if(null!==g&&!h.some((function(t){return t.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),v=N.tabGroupChoices,y=N.setTabGroupChoices,w=(0,a.useState)(g),_=w[0],C=w[1],x=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=v[m];null!=D&&D!==_&&h.some((function(t){return t.value===D}))&&C(D)}var A=function(t){var e=t.currentTarget,n=x.indexOf(e),r=h[n].value;r!==_&&(T(e),C(r),null!=m&&y(m,r))},O=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=x.indexOf(t.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(t.currentTarget)-1;n=x[a]||x[x.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},h.map((function(t){var e=t.value,n=t.label,l=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:function(t){return x.push(t)},onKeyDown:O,onFocus:A,onClick:A},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":_===e})}),null!=n?n:e)}))),u?(0,a.cloneElement)(k.filter((function(t){return t.props.value===_}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==_})}))))}function p(t){var e=(0,l.Z)();return a.createElement(u,(0,r.Z)({key:String(e)},t))}},86147:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(9877),o=n(58215),s=["components"],u={id:"mbr_list",title:"mbr_list",description:"The ActiveMember360 shortcode mbr_list subscribes/unsubscribes an ActiveCampaign contact to/from ActiveCampaign lists.",sidebar_label:"mbr_list"},p=void 0,d={unversionedId:"shortcodes/mbr_list",id:"shortcodes/mbr_list",title:"mbr_list",description:"The ActiveMember360 shortcode mbr_list subscribes/unsubscribes an ActiveCampaign contact to/from ActiveCampaign lists.",source:"@site/docs/shortcodes/mbr_list.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_list",permalink:"/shortcodes/mbr_list",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_list",title:"mbr_list",description:"The ActiveMember360 shortcode mbr_list subscribes/unsubscribes an ActiveCampaign contact to/from ActiveCampaign lists.",sidebar_label:"mbr_list"},sidebar:"shortcodes",previous:{title:"mbr_jdelay",permalink:"/shortcodes/mbr_jdelay"},next:{title:"mbr_log_event",permalink:"/shortcodes/mbr_log_event"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],b={toc:m};function k(t){var e=t.components,n=(0,a.Z)(t,s);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"This shortcode subscribes/unsubscribes an ActiveCampaign contact to/from ActiveCampaign lists. The contact is either that linked with the logged in user, or the contact specified."),(0,l.kt)("p",null,"The shortcode can be run automatically or used to generate a button or link within a page or post that, when clicked, will subscribe/unsubscribe the contact to/from the lists."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cid"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign contact ID of the contact to add to or remove from automations. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," Current logged in user contact ID.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"subscribe"),(0,l.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to subscribe the contact to. The available lists can be found in ",(0,l.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display the available ActiveCampaign lists"},(0,l.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),". If more than one is entered, please separate with commas.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," Yes if ",(0,l.kt)("inlineCode",{parentName:"td"},"unsubscribe")," parameter not set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unsubsribe"),(0,l.kt)("td",{parentName:"tr",align:"left"},"One or more list ID's defined within ActiveCampaign to unsubscribe the contact from. The available lists can be found in ",(0,l.kt)("a",{parentName:"td",href:"/utilities#lists",title:"Click to learn how to display the available ActiveCampaign lists"},(0,l.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Lists")),". If more than one is entered, please separate with commas.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," Yes if ",(0,l.kt)("inlineCode",{parentName:"td"},"subscribe")," parameter not set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unsubscribe_reason"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reason for using ",(0,l.kt)("inlineCode",{parentName:"td"},"unsubscribe"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," Contact unsubscribed on site",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"autorun"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If set to yes the shortcode will execute without waiting for user input. Otherwise it will generate a form and a submit button or link_style and wait for user input. If set to yes the following parameters will be ignored; ",(0,l.kt)("inlineCode",{parentName:"td"},"link_text"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"link_style"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"button_text"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"button_image"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"button_style"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"redirect_popup"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"aftertext"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Permissible Values:")," yes",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_text"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The text to display for the link.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," Click here to submit",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_style"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the link.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_link",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The CSS ID to apply for the link.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_link",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_class"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The CSS class to apply for the link.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_link",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"button_text"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The text to displayin the button.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," Click here to submit",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"button_image"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The URL of the image to use for the button.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"button_style"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply for the button.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_btn",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"button_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The CSS ID to apply for the button.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_btn",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"button_class"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The CSS class to apply for the button.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," mbr_list_btn",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"redirect"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The URL to send the user to after subscribing/unsubscribing the contact to/from the lists. A special value can be passed, #reload#, to force all shortcodes on the page to resolve based on the latest changes that may have been introduced by processing this shortcode.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"redirect_popup"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the user will be redirected to a new window after clicking the link or button. Only used if the ",(0,l.kt)("inlineCode",{parentName:"td"},"redirect")," parameter is set. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Permissible Values:")," yes",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"after_text"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The text that should be displayed after the shortcode has been processed, if the user hasn\u2019t been redirected.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," Your request was processed",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,l.kt)("h2",{id:"validity"},"Validity"),(0,l.kt)("p",null,"This shortcode is only processed for ",(0,l.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,l.kt)("p",null,"In all other cases, including WordPress users with the ",(0,l.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be processed."),(0,l.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,l.kt)("p",null,"This shortcode does ",(0,l.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,l.kt)("strong",{parentName:"p"},"[ELSE_list]"),"."),(0,l.kt)("h2",{id:"nesting"},"Nesting"),(0,l.kt)("p",null,"Shortcode nesting is ",(0,l.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,l.kt)("p",null,"Subscribe the contact linked with the logged in user to the ActiveCampaign lists with IDs ",(0,l.kt)("strong",{parentName:"p"},"8")," and ",(0,l.kt)("strong",{parentName:"p"},"9")," when they click on the link labelled 'Click here'. When processing has completed display reload the current page:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_list subscribe='8,9' redirect='#reload#' link_text='Click here']\n"))),(0,l.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,l.kt)("p",null,"Subscribe the contact linked with the logged in user to the ActiveCampaign lists with IDs ",(0,l.kt)("strong",{parentName:"p"},"1"),", ",(0,l.kt)("strong",{parentName:"p"},"5")," and ",(0,l.kt)("strong",{parentName:"p"},"6")," and unsubscribe them from the lists with IDs ",(0,l.kt)("strong",{parentName:"p"},"7")," and ",(0,l.kt)("strong",{parentName:"p"},"8"),". Process this automatically as soon as they visit the page. When processing has completed display 'Your request was processed':"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_list autorun='yes' subscribe='1,5,6' unsubscribe='7,8']\n"))),(0,l.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,l.kt)("p",null,"Subscribe the contact with ActiveCampaign contact ID ",(0,l.kt)("strong",{parentName:"p"},"1234")," to the ActiveCampaign lists with IDs ",(0,l.kt)("strong",{parentName:"p"},"1"),", ",(0,l.kt)("strong",{parentName:"p"},"3")," and ",(0,l.kt)("strong",{parentName:"p"},"5"),". Process this automatically as soon as the page is visited. No message will be shown when processing has completed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_list cid='1234' subscribe='1,3,5' autorun='yes']\n"))),(0,l.kt)(o.Z,{value:"ex4",mdxType:"TabItem"},(0,l.kt)("p",null,"Subscribe the contact linked with the logged in user to the ActiveCampaign lists with IDs ",(0,l.kt)("strong",{parentName:"p"},"1"),", ",(0,l.kt)("strong",{parentName:"p"},"5")," and ",(0,l.kt)("strong",{parentName:"p"},"7")," and unsubscribe them from the lists with IDs ",(0,l.kt)("strong",{parentName:"p"},"10")," and ",(0,l.kt)("strong",{parentName:"p"},"12")," when they click on the link labelled 'Click here'. When processing has completed redirect to the URL ",(0,l.kt)("a",{parentName:"p",href:"https://mysite.com"},"https://mysite.com"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_list subscribe='1,5,7' unsubscribe='10,12' button_text='Click here' redirect='https://mysite.com']\n")))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}k.isMDXComponent=!0}}]);