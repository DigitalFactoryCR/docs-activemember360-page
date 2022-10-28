"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14883],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),o=a(72389),s=a(63725),i=a(86010),l="tabItem_LplD";function p(e){var t,a,o,p=e.lazy,m=e.block,u=e.defaultValue,d=e.values,c=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===u?u:null!=(t=null!=u?u:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,s.UB)(),v=b.tabGroupChoices,y=b.setTabGroupChoices,_=(0,r.useState)(N),w=_[0],x=_[1],T=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=v[c];null!=E&&E!==w&&k.some((function(e){return e.value===E}))&&x(E)}var C=function(e){var t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==w&&(A(t),x(n),null!=c&&y(c,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},h)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,i.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},17773:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=a(9877),i=a(58215),l=["components"],p={id:"mbr_is_for",title:"mbr_is_for",description:"The ActiveMember360 shortcode mbr_is_for determines the content to be included based upon a comparison of ActiveCampaign tags and/or contact ID that the visitor has to the conditions defined in the shortcode parameters.",sidebar_label:"mbr_is_for"},m=void 0,u={unversionedId:"shortcodes/mbr_is_for",id:"shortcodes/mbr_is_for",title:"mbr_is_for",description:"The ActiveMember360 shortcode mbr_is_for determines the content to be included based upon a comparison of ActiveCampaign tags and/or contact ID that the visitor has to the conditions defined in the shortcode parameters.",source:"@site/docs/shortcodes/mbr_is_for.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_is_for",permalink:"/shortcodes/mbr_is_for",tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"10/28/2022",frontMatter:{id:"mbr_is_for",title:"mbr_is_for",description:"The ActiveMember360 shortcode mbr_is_for determines the content to be included based upon a comparison of ActiveCampaign tags and/or contact ID that the visitor has to the conditions defined in the shortcode parameters.",sidebar_label:"mbr_is_for"},sidebar:"shortcodes",previous:{title:"mbr_is_first_login",permalink:"/shortcodes/mbr_is_first_login"},next:{title:"mbr_is_http_get",permalink:"/shortcodes/mbr_is_http_get"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Return",id:"return",level:3},{value:"API Examples:",id:"api-examples",level:3}],h={toc:c};function g(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode determines the content to be included based upon a comparison of ActiveCampaign tags and/or contact ID that the visitor has to the conditions defined in the shortcode parameters."),(0,o.kt)("p",null,"An alternative to using a series of ",(0,o.kt)("strong",{parentName:"p"},"[mbr_is_for]")," shortcodes for ActiveCampaign tag conditions is to use the ",(0,o.kt)("a",{parentName:"p",href:"/shortcodes/mbr_casetag",title:"Click to learn how to use the [mbr_casetag] shortcode"},(0,o.kt)("strong",{parentName:"a"},"[mbr_casetag]"))," shortcode, which can make your code both shorter and easier to manage."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"tags"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's or tag names defined within ActiveCampaign and used to evaluate the condition. This condition evaluates as true if the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," has ",(0,o.kt)("strong",{parentName:"td"},"any")," of the tags specified. The available tags can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes if parameters ",(0,o.kt)("inlineCode",{parentName:"td"},"exclude_tags"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"only_cid")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"exclude_cid")," are not specified.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"require_all_tags"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies whether ALL tags specified using the ",(0,o.kt)("inlineCode",{parentName:"td"},"tag")," parameter must be present in order to satisfy the condition.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Permitted Values:")," yes, no",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," no",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"exclude_tags"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more tag IDs or tag names defined within ActiveCampaign and used to evaluate the condition. This condition evaluates as true if the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," has ",(0,o.kt)("strong",{parentName:"td"},"none")," of the tags specified. The available tags can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes if parameters ",(0,o.kt)("inlineCode",{parentName:"td"},"tags"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"only_cid")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"exclude_cid")," are not specified.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"only_cid"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more contact IDs that exist within ActiveCampaign and used to evaluate the condition. This condition evaluates as true if the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," ",(0,o.kt)("strong",{parentName:"td"},"has")," a contact ID matching ",(0,o.kt)("strong",{parentName:"td"},"any")," of those specified. If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes if parameters ",(0,o.kt)("inlineCode",{parentName:"td"},"tags"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"exclude_tags")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"exclude_cid")," are not specified.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"exclude_cid"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more contact IDs that exist within ActiveCampaign and used to evaluate the condition. This condition evaluates as true if the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," ",(0,o.kt)("strong",{parentName:"td"},"does not have")," a contact ID matching ",(0,o.kt)("strong",{parentName:"td"},"any")," of those specified. If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," yes if parameters ",(0,o.kt)("inlineCode",{parentName:"td"},"tags"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"exclude_tags")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"only_cid")," are not specified.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"limit_else"),(0,o.kt)("td",{parentName:"tr",align:"left"},'If set to "yes" and the user is not logged in or does not have any ActiveCampaign contact tags that define a membership as selected in ',"[",(0,o.kt)("strong",{parentName:"td"},"ActiveMember360, Settings, Memberships"),"][settings-memberships]",' this parameter will cause the "ELSE" part of the shortcode to be suppressed. This can be useful in scenarios where the "ELSE" portion of the shortcode is only applicable to members of the site, for example excluding visitors who are not logged in.',(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Permitted Values:")," yes, no",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," no",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Tag ID's vs. tag names")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The use of tag ID's over tag names is encouraged. Unless a tag is deleted, its tag ID can be considered persistent and unique. Tag names, on the other hand, can be changed at any time and do not need to be unique. Using a tag name that is not unique or has been changed can cause your shortcode, hook or module to no longer work as expected."))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is evaluated for ",(0,o.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,o.kt)("p",null,"For a local WordPress user with the ",(0,o.kt)("strong",{parentName:"p"},"Administrator")," role the shortcode will always evaluate as ",(0,o.kt)("strong",{parentName:"p"},"TRUE"),"."),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#public-visitor",title:"Click to learn about the public visitor type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"public visitors"))," or other ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#local-wordpress-user",title:"Click to learn about the local WordPress user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"local WordPress users"))," the shortcode will always evaluate as ",(0,o.kt)("strong",{parentName:"p"},"FALSE")," and show the ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_is_for]")," content unless the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit_else")," parameter is specified in which case nothing will be returned."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"[ELSE_is_for]")," conditional branching is supported."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting is supported:\n",(0,o.kt)("strong",{parentName:"p"},"[mbr_is_for1]")," thru ",(0,o.kt)("strong",{parentName:"p"},"[mbr_is_for19]"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"[ELSE_is_for1]")," thru ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_is_for19]"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"[/mbr_is_for1]")," thru ",(0,o.kt)("strong",{parentName:"p"},"[/mbr_is_for19]")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(s.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"},{label:"Example 7",value:"ex7"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"The content returned will be 'You have at least one of the tags' if the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," ",(0,o.kt)("strong",{parentName:"p"},"has ANY")," of the ActiveCampaign tags ",(0,o.kt)("strong",{parentName:"p"},"123"),",",(0,o.kt)("strong",{parentName:"p"},"456")," or ",(0,o.kt)("strong",{parentName:"p"},"MY TAG NAME"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_is_for tags='123,456,MY TAG NAME']\n  You have at least one of the tags\n[/mbr_is_for]\n"))),(0,o.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"The content returned will be 'You have at least one of the tags' if the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," ",(0,o.kt)("strong",{parentName:"p"},"has ANY")," of the ActiveCampaign tags ",(0,o.kt)("strong",{parentName:"p"},"123"),",",(0,o.kt)("strong",{parentName:"p"},"456")," or ",(0,o.kt)("strong",{parentName:"p"},"MY TAG NAME")," otherwise 'You do not have any of the tags' is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_is_for tags='123,456,MY TAG NAME']\n  You have at least one of the tags\n[ELSE_is_for]\n  You do not have any of the tags\n[/mbr_is_for]\n"))),(0,o.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,o.kt)("p",null,"The content returned will be 'The Inner Circle content' if the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," is not one of the ActiveCampaign contacts with contact ID ",(0,o.kt)("strong",{parentName:"p"},"56")," or ",(0,o.kt)("strong",{parentName:"p"},"43")," ",(0,o.kt)("strong",{parentName:"p"},"AND has ANY")," of the tags ",(0,o.kt)("strong",{parentName:"p"},"123"),",",(0,o.kt)("strong",{parentName:"p"},"456")," or ",(0,o.kt)("strong",{parentName:"p"},"MY TAG NAME"),". Otherwise 'Join the Inner Circle' is returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_is_for tags='123,456,MY TAG NAME' exclude_cid='56,43']\n  The Inner Circle content\n[ELSE_is_for]\n  Join the Inner Circle\n[/mbr_is_for]\n"))),(0,o.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,o.kt)("p",null,"The content returned will be 'Personal Mentoring content' if the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," is one of the ActiveCampaign contacts with contact ID ",(0,o.kt)("strong",{parentName:"p"},"4321"),", ",(0,o.kt)("strong",{parentName:"p"},"6543")," or ",(0,o.kt)("strong",{parentName:"p"},"9876")," ",(0,o.kt)("strong",{parentName:"p"},"AND has ANY")," of the tags ",(0,o.kt)("strong",{parentName:"p"},"123"),",",(0,o.kt)("strong",{parentName:"p"},"456")," or ",(0,o.kt)("strong",{parentName:"p"},"MY TAG NAME"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_is_for tags='123,456,MY TAG NAME' only_cid='4321,6543,9876']\n  Personal Mentoring content\n[/mbr_is_for]\n"))),(0,o.kt)(i.Z,{value:"ex5",mdxType:"TabItem"},(0,o.kt)("p",null,"The content returned will be 'Gold & Platinum Member content' if the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," ",(0,o.kt)("strong",{parentName:"p"},"has ANY")," of the tags ",(0,o.kt)("strong",{parentName:"p"},"456")," or ",(0,o.kt)("strong",{parentName:"p"},"789"),". Otherwise 'You are a Silver Member please upgrade to see content' will be returned but only if the current current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," is a member of the site, otherwise nothing will be returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_is_for tags='456,789' limit_else='yes']\n  Gold & Platinum Member content\n[ELSE_is_for]\n  You are a Silver Member please upgrade to see content\n[/mbr_is_for]\n"))),(0,o.kt)(i.Z,{value:"ex6",mdxType:"TabItem"},(0,o.kt)("p",null,"The content returned will be 'Having now received three monthly newsletters we can offer you some free issues that you missed' if the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," ",(0,o.kt)("strong",{parentName:"p"},"has ALL")," of the tags ",(0,o.kt)("strong",{parentName:"p"},"123"),",",(0,o.kt)("strong",{parentName:"p"},"456")," and ",(0,o.kt)("strong",{parentName:"p"},"789")," ",(0,o.kt)("strong",{parentName:"p"},"AND has NONE")," of the tags ",(0,o.kt)("strong",{parentName:"p"},"87"),",",(0,o.kt)("strong",{parentName:"p"},"65")," and ",(0,o.kt)("strong",{parentName:"p"},"43"),". Otherwise 'As a member you can buy any of our previous monthly newsletters here' will be returned but only if the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," is a member of the site, otherwise nothing will be returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_is_for tags='123,456,789' require_all_tags='yes' exclude_tags='87,65,43' limit_else='yes']\n  Having now received three monthly newsletters we can offer you some free issues that you missed.\n[ELSE_is_for]\n  As a member you can buy any of our previous monthly newsletters here\n[/mbr_is_for]\n"))),(0,o.kt)(i.Z,{value:"ex6",mdxType:"TabItem"},(0,o.kt)("p",null,"The content returned will be 'content-content-content' if the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," ",(0,o.kt)("strong",{parentName:"p"},"has NONE")," of the tags ",(0,o.kt)("strong",{parentName:"p"},"123"),",",(0,o.kt)("strong",{parentName:"p"},"456")," and ",(0,o.kt)("strong",{parentName:"p"},"789")," ",(0,o.kt)("strong",{parentName:"p"},"AND has ANY")," of the tags ",(0,o.kt)("strong",{parentName:"p"},"43"),",",(0,o.kt)("strong",{parentName:"p"},"65")," and ",(0,o.kt)("strong",{parentName:"p"},"87"),". Otherwise 'alternate-content-alternate-content' will be returned but only if the current current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," ",(0,o.kt)("strong",{parentName:"p"},"has NONE")," of the tags ",(0,o.kt)("strong",{parentName:"p"},"123"),",",(0,o.kt)("strong",{parentName:"p"},"456")," and ",(0,o.kt)("strong",{parentName:"p"},"789"),", otherwise nothing will be returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_not_for1 tags='123,456,789']\n  [mbr_is_for2 tags='43,65,87']\n    content-content-content\n  [ELSE_is_for2]\n    alternate-content-alternate-content\n  [/mbr_is_for2]\n[/mbr_not_for1]\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"For ActiveCampaign tag conditions ActiveMember360 provides the PHP conditional function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(mbr_has_tags( $tags, $mode ))\n")),(0,o.kt)("h3",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"$tags"),(0,o.kt)("td",{parentName:"tr",align:"left"},"(string","|","array)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more tag ID's or tag names defined within ActiveCampaign and used to evaluate the condition.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"$mode"),(0,o.kt)("td",{parentName:"tr",align:"left"},"(string)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies whether the current ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," must have ANY or ALL tags specified using the $tags in order to satisfy the condition.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Permitted Values:")," any, all, any",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," any",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h3",{id:"return"},"Return"),(0,o.kt)("p",null,"(bool) True if the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," satisfies the condition. False otherwise."),(0,o.kt)("h3",{id:"api-examples"},"API Examples:"),(0,o.kt)(s.Z,{groupId:"code-examples",defaultValue:"ex1",values:[{label:"e.g. a",value:"ex1"},{label:"e.g. b",value:"ex2"},{label:"e.g. c",value:"ex3"},{label:"e.g. d",value:"ex4"},{label:"e.g. e",value:"ex5"},{label:"e.g. f",value:"ex6"},{label:"e.g. g",value:"ex7"},{label:"e.g. h",value:"ex8"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123' )\n"))),(0,o.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"OR")," 234."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123,234' )\n"))),(0,o.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,o.kt)("p",null,"Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"OR")," 234."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( array(123,234) )\n"))),(0,o.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,o.kt)("p",null,"Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"AND")," 234."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123,234', 'all' )\n"))),(0,o.kt)(i.Z,{value:"ex5",mdxType:"TabItem"},(0,o.kt)("p",null,"Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"AND")," 234."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( array(123,234), 'all' )\n"))),(0,o.kt)(i.Z,{value:"ex6",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Any function preceded with an exclamation mark ",(0,o.kt)("strong",{parentName:"p"},"!")," specifies the negative use case of the function."))),(0,o.kt)("p",null,"Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"DOES NOT HAVE")," tag 123."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"!mbr_has_tags( '123' )\n"))),(0,o.kt)(i.Z,{value:"ex7",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is also possible to combine conditions with ",(0,o.kt)("strong",{parentName:"p"},"&","&")," (representing AND) and ",(0,o.kt)("strong",{parentName:"p"},"||")," (representing OR)."))),(0,o.kt)("p",null,"Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"AND DOES NOT HAVE")," tag 234."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123' ) && !mbr_has_tags( '234' )\n"))),(0,o.kt)(i.Z,{value:"ex8",mdxType:"TabItem"},(0,o.kt)("p",null,"Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"OR DOES NOT HAVE")," tag 234."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123' ) || !mbr_has_tags( '234' )\n")))))}g.isMDXComponent=!0}}]);