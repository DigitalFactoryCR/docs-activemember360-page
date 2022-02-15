"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1802],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=d(a),c=r,p=h["".concat(s,".").concat(c)]||h[c]||u[c]||o;return a?n.createElement(p,i(i({ref:t},m),{},{components:a})):n.createElement(p,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),o=a(2389),i=a(9548),l=a(6010),s="tabItem_LplD";function d(e){var t,a,o,d=e.lazy,m=e.block,u=e.defaultValue,h=e.values,c=e.groupId,p=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(k),T=w[0],I=w[1],_=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var M=N[c];null!=M&&M!==T&&f.some((function(e){return e.value===M}))&&I(M)}var D=function(e){var t=e.currentTarget,a=_.indexOf(t),n=f[a].value;n!==T&&(C(t),I(n),null!=c&&y(c,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=_.indexOf(e.currentTarget)+1;a=_[n]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;a=_[r]||_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},p)},f.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:x,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),d?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},7683:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return h},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(9877),l=a(8215),s=["components"],d={id:"mbr_casetag",title:"mbr_casetag",description:"The ActiveMember360 shortcode mbr_casetag determines the content to be included based upon a comparison of tags that the visitor has to those in the shortcode statements.",sidebar_label:"mbr_casetag"},m=void 0,u={unversionedId:"shortcodes/mbr_casetag",id:"shortcodes/mbr_casetag",title:"mbr_casetag",description:"The ActiveMember360 shortcode mbr_casetag determines the content to be included based upon a comparison of tags that the visitor has to those in the shortcode statements.",source:"@site/docs/shortcodes/mbr_casetag.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_casetag",permalink:"/docs-activemember360-page/shortcodes/mbr_casetag",tags:[],version:"current",frontMatter:{id:"mbr_casetag",title:"mbr_casetag",description:"The ActiveMember360 shortcode mbr_casetag determines the content to be included based upon a comparison of tags that the visitor has to those in the shortcode statements.",sidebar_label:"mbr_casetag"},sidebar:"shortcodes",previous:{title:"mbr_user_agent",permalink:"/docs-activemember360-page/shortcodes/mbr_user_agent"},next:{title:"mbr_compare",permalink:"/docs-activemember360-page/shortcodes/mbr_compare"}},h=[{value:"Usage",id:"usage",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Conditions",id:"conditions",children:[],level:2},{value:"Validity",id:"validity",children:[],level:2},{value:"Conditional Branching",id:"conditional-branching",children:[],level:2},{value:"Nesting",id:"nesting",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API",id:"api",children:[],level:2}],c={toc:h};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode determines the content to be included based upon a comparison of tags that the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," has to those in the shortcode conditions."),(0,o.kt)("p",null,"The shortcode will include content specified for the first condition that evaluates ",(0,o.kt)("strong",{parentName:"p"},"true")," as it works down the condition definitions."),(0,o.kt)("p",null,"With this shortcode tag based conditions can be specified similar to the PHP ",(0,o.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/control-structures.switch.php",title:"Click to learn how to use the switch PHP function"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"switch()")))," function."),(0,o.kt)("p",null,"This shortcode can be used instead of using a series of ",(0,o.kt)("a",{parentName:"p",href:"/shortcodes/mbr_is_for",title:"Click to learn how to use the shortcode [mbr_is_for]"},(0,o.kt)("strong",{parentName:"a"},"[mbr_is_for]"))," shortcodes, making your code both shorter and easier to manage."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"limit_else"),(0,o.kt)("td",{parentName:"tr",align:"left"},'If set to "yes" and the user is not logged in or does not have any ActiveCampaign contact tags that define a membership as selected in ',"[",(0,o.kt)("strong",{parentName:"td"},"ActiveMember360, Settings, Memberships"),"][settings-memberships]",' this parameter will cause the "ELSE" part of the shortcode to be suppressed. This can be useful in scenarios where the "ELSE" portion of the shortcode is only applicable to members of the site, for example excluding visitors who are not logged in.',(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," no.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"conditions"},"Conditions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Conditions"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"tag:"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Followed by a single tag ID or tag name defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," has the tag the content following the condition is returned. The available tags can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"any_tags:"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Followed by multiple tag IDs or tag names in a comma separated string that are defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," has any of the tags the content following the condition is returned. The available tags can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"all_tags:"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Followed by multiple tag IDs or tag names in a comma separated string that are defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," has all of the tags the content following the condition is returned. The available tags can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"not_tag:"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Followed by a single tag ID or tag name defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," does not have the tag the content following the condition is returned. The available tags can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"not_any_tags:"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Followed by multiple tag IDs or tag names in a comma separated string that are defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," does not have any of the tags the content following the condition is returned. The available tags can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"not_all_tags:"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Followed by multiple tag IDs or tag names in a comma separated string that are defined within ActiveCampaign used to evaluate the condition. If the condition is true i.e. the ",(0,o.kt)("a",{parentName:"td",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,o.kt)("strong",{parentName:"a"},"remote user"))," does not have all of the tags the content following the condition is returned. The available tags can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#tags",title:"Click to learn how to display the available ActiveCampaign tags"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Tags")),". If more than one is entered, please separate with commas.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"else:"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The default fallback if no other condition is met. This default fallback can only be used once.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Tag ID's vs. tag names")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The use of tag ID's over tag names is encouraged. Unless a tag is deleted, its tag ID can be considered persistent and unique. Tag names, on the other hand, can be changed at any time and do not need to be unique. Using a tag name that is not unique or has been changed can cause your shortcode, hook or module to no longer work as expected."))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is only processed for ",(0,o.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,o.kt)("p",null,"In all other cases, including WordPress users with the ",(0,o.kt)("strong",{parentName:"p"},"Administrator")," role and not logged in visitors nothing will be processed."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,"This shortcode does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_casetag]"),"."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"The content returned will be the that related to the first condition satisfied by the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,o.kt)("strong",{parentName:"a"},"remote user")),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If they have tag ID ",(0,o.kt)("strong",{parentName:"li"},"195")," 'You have the tag ID 195' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they do not have tag name ",(0,o.kt)("strong",{parentName:"li"},"MyTagName")," 'You do not have tag MyTagName' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they do not have tag name ",(0,o.kt)("strong",{parentName:"li"},"MyTagName3")," 'You do not have tag MyTagName3' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they have either tag ID ",(0,o.kt)("strong",{parentName:"li"},"987")," or tag name ",(0,o.kt)("strong",{parentName:"li"},"MyTagName2")," 'You have at least one of the given tags' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they have either tag IDs ",(0,o.kt)("strong",{parentName:"li"},"998")," or ",(0,o.kt)("strong",{parentName:"li"},"999")," 'You have at least one of the given tags' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they do not have either tag ID ",(0,o.kt)("strong",{parentName:"li"},"234")," or tag name ",(0,o.kt)("strong",{parentName:"li"},"MyTagName4")," 'You do not have at least one of the given tags' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they have all of tag IDs ",(0,o.kt)("strong",{parentName:"li"},"678"),", ",(0,o.kt)("strong",{parentName:"li"},"591")," and tag name ",(0,o.kt)("strong",{parentName:"li"},"MyTagName4")," 'You have all the given tags' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they have all of tag IDs ",(0,o.kt)("strong",{parentName:"li"},"543"),", ",(0,o.kt)("strong",{parentName:"li"},"432")," and tag name ",(0,o.kt)("strong",{parentName:"li"},"MyTagName4")," 'You have all the given tags' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they do not have all of the tags named ",(0,o.kt)("strong",{parentName:"li"},"MyTagName5")," and ",(0,o.kt)("strong",{parentName:"li"},"MyTagName6")," 'You do not have all the given tags' will be returned."),(0,o.kt)("li",{parentName:"ol"},"Otherwise 'None of the above applied to you' will be returned.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_casetag]\n  tag: 195\n    You have the tag ID 195\n  not_tag: MyTagName\n    You do not have tag MyTagName\n  not_tag: MyTagName3\n    You do not have tag MyTagName3\n  any_tags: 987,MyTagName2\n    You have at least one of the given tags\n  any_tags: 998, 999\n    You have at least one of the given tags\n  not_any_tags:MyTagName4,234\n    You do not have at least one of the given tags\n  all_tags: 678,MyTagName4,591\n    You have all the given tags\n  all_tags: 543,432,MyTagName4\n    You have all the given tags\n  not_all_tags: MyTagName5,MyTagName6\n    You do not have all the given tags\n  else:\n    None of the above applied to you\n[/mbr_casetag]\n"))),(0,o.kt)(l.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"The content returned will be the that related to the first condition satisfied by the current ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,o.kt)("strong",{parentName:"a"},"remote user")),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If they have tag ID ",(0,o.kt)("strong",{parentName:"li"},"195")," 'You have the tag ID 195' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they do not have tag name ",(0,o.kt)("strong",{parentName:"li"},"MyTagName")," 'You do not have tag MyTagName' will be returned."),(0,o.kt)("li",{parentName:"ol"},"If they do not have tag name ",(0,o.kt)("strong",{parentName:"li"},"MyTagName3")," 'You do not have tag MyTagName3' will be returned."),(0,o.kt)("li",{parentName:"ol"},"'None of the above applied to you' will be returned but only if the current logged in user is a member of the site. Otherwise nothing will be returned.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_casetag limit_else='yes']\n  tag: 195\n    You have the tag ID 195\n  not_tag: MyTagName\n    You do not have tag MyTagName\n  not_tag: MyTagName3\n    You do not have tag MyTagName3\n  else:\n    None of the above applied to you.\n[/mbr_casetag]\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}p.isMDXComponent=!0}}]);