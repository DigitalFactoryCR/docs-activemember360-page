"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[874],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),c=n,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(67294);function n(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(87462),n=a(67294),l=a(72389),o=a(63725),i=a(86010),s="tabItem_LplD";function m(e){var t,a,l,m=e.lazy,p=e.block,u=e.defaultValue,d=e.values,c=e.groupId,f=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,_=(0,n.useState)(v),w=_[0],T=_[1],x=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=N[c];null!=E&&E!==w&&b.some((function(e){return e.value===E}))&&T(E)}var O=function(e){var t=e.currentTarget,a=x.indexOf(t),r=b[a].value;r!==w&&(C(t),T(r),null!=c&&y(c,r))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;a=x[r]||x[0];break;case"ArrowLeft":var n=x.indexOf(e.currentTarget)-1;a=x[n]||x[x.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),m?(0,n.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,l.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},55123:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return c}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=a(9877),i=a(58215),s=["components"],m={id:"mbr_my_account",title:"mbr_my_account",description:"The ActiveMember360 shortcode mbr_my_account returns a form through which a member can update their ActiveCampaign contact data.",sidebar_label:"mbr_my_account"},p=void 0,u={unversionedId:"shortcodes/mbr_my_account",id:"shortcodes/mbr_my_account",title:"mbr_my_account",description:"The ActiveMember360 shortcode mbr_my_account returns a form through which a member can update their ActiveCampaign contact data.",source:"@site/docs/shortcodes/mbr_my_account.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_my_account",permalink:"/shortcodes/mbr_my_account",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_my_account",title:"mbr_my_account",description:"The ActiveMember360 shortcode mbr_my_account returns a form through which a member can update their ActiveCampaign contact data.",sidebar_label:"mbr_my_account"},sidebar:"shortcodes",previous:{title:"mbr_member_dir",permalink:"/shortcodes/mbr_member_dir"},next:{title:"mbr_page_list",permalink:"/shortcodes/mbr_page_list"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],f={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"This shortcode returns a form through which the current ",(0,l.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,l.kt)("strong",{parentName:"a"},"remote user"))," can update their ActiveCampaign contact data."),(0,l.kt)("p",null,"This shortcode currently works with the ActiveCampaign text input field type."),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fields"),(0,l.kt)("td",{parentName:"tr",align:"left"},'The ActiveCampaign contact fields to be shown within the form in a comma seperated string. To specify a field form label that is different from the field name, use a "pipe" symbol ( l ) to separate field name from field label, see ',(0,l.kt)("a",{parentName:"td",href:"/shortcodes/mbr_my_account#examples",title:"Click to see the [mbr_my_account] shortcode examples"},(0,l.kt)("strong",{parentName:"a"},"examples")),". The available ActiveCampaign contact field names can be found in ",(0,l.kt)("a",{parentName:"td",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,l.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),". The lower case version of the Perstag should be used as the field name. The following ActiveCampaign contact fields are not allowed and will be ignored:",(0,l.kt)("inlineCode",{parentName:"td"},"ID"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"email"),"and",(0,l.kt)("inlineCode",{parentName:"td"},"password"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The field label position.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Permissible Values:")," top, left, placeholder",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," top",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"min_width"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The minimum width the form should be using standard HTML attributes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"max_width"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The maximum width the form should be using standard HTML attributes.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default:")," none.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"submit_button_label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The text to display on the submit button.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Defaults:")," Save",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,l.kt)("h2",{id:"validity"},"Validity"),(0,l.kt)("p",null,"This shortcode is evaluated for ",(0,l.kt)("strong",{parentName:"p"},"any type of visitor"),"."),(0,l.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,l.kt)("p",null,"This shortcode does ",(0,l.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,l.kt)("strong",{parentName:"p"},"[ELSE_related_posts]"),"."),(0,l.kt)("h2",{id:"nesting"},"Nesting"),(0,l.kt)("p",null,"Shortcode nesting is ",(0,l.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(o.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"},{label:"Example 5",value:"ex5"},{label:"Example 6",value:"ex6"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ex1",mdxType:"TabItem"},(0,l.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,l.kt)("strong",{parentName:"p"},"first_name")," and ",(0,l.kt)("strong",{parentName:"p"},"last_name"),". The form will be populated with the values for the current ",(0,l.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,l.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,l.kt)("strong",{parentName:"p"},"first_name")," and ",(0,l.kt)("strong",{parentName:"p"},"last_name")," and are placed above the field inputs. The submit button is labelled ",(0,l.kt)("strong",{parentName:"p"},"Save"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_my_account fields='first_name,last_name']\n"))),(0,l.kt)(i.Z,{value:"ex2",mdxType:"TabItem"},(0,l.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,l.kt)("strong",{parentName:"p"},"first_name")," and ",(0,l.kt)("strong",{parentName:"p"},"last_name"),". The form will be populated with the values for the current ",(0,l.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,l.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,l.kt)("strong",{parentName:"p"},"First Name")," and ",(0,l.kt)("strong",{parentName:"p"},"Last Name")," and are placed above the field inputs. The submit button is labelled ",(0,l.kt)("strong",{parentName:"p"},"Save"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_my_account fields='first_name|First Name,last_name|Last Name']\n"))),(0,l.kt)(i.Z,{value:"ex3",mdxType:"TabItem"},(0,l.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,l.kt)("strong",{parentName:"p"},"first_name")," and ",(0,l.kt)("strong",{parentName:"p"},"last_name"),". The form will be populated with the values for the current ",(0,l.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,l.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,l.kt)("strong",{parentName:"p"},"First Name")," and ",(0,l.kt)("strong",{parentName:"p"},"Last Name")," and used as placeholders for the input fields. The submit button is labelled ",(0,l.kt)("strong",{parentName:"p"},"Save"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_my_account label='placeholder' fields='first_name|First Name,last_name|Last Name']\n"))),(0,l.kt)(i.Z,{value:"ex4",mdxType:"TabItem"},(0,l.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,l.kt)("strong",{parentName:"p"},"first_name")," and ",(0,l.kt)("strong",{parentName:"p"},"last_name")," and a maximum width of ",(0,l.kt)("strong",{parentName:"p"},"50%")," of the browser window. The form will be populated with the values for the current ",(0,l.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,l.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,l.kt)("strong",{parentName:"p"},"First Name")," and ",(0,l.kt)("strong",{parentName:"p"},"Last Name")," and used as placeholders for the input fields. The submit button is labelled ",(0,l.kt)("strong",{parentName:"p"},"Save"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_my_account label='placeholder' fields='first_name|First Name,last_name|Last Name' max_width='50%']\n"))),(0,l.kt)(i.Z,{value:"ex5",mdxType:"TabItem"},(0,l.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,l.kt)("strong",{parentName:"p"},"first_name")," and ",(0,l.kt)("strong",{parentName:"p"},"last_name")," and with the form an minimum width of ",(0,l.kt)("strong",{parentName:"p"},"300px")," i.e. 300 pixels and a maximum width of ",(0,l.kt)("strong",{parentName:"p"},"400px")," i.e. 400 pixels. The form will be populated with the values for the current ",(0,l.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,l.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,l.kt)("strong",{parentName:"p"},"First Name")," and ",(0,l.kt)("strong",{parentName:"p"},"Last Name")," and used as placeholders for the input fields. The submit button is labelled ",(0,l.kt)("strong",{parentName:"p"},"Save"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_my_account label='placeholder' fields='first_name|First Name,last_name|Last Name' min_width='300px' max_width='400px']\n"))),(0,l.kt)(i.Z,{value:"ex6",mdxType:"TabItem"},(0,l.kt)("p",null,"Generates and displays a form with two ActiveCampaign contact fields named ",(0,l.kt)("strong",{parentName:"p"},"first_name")," and ",(0,l.kt)("strong",{parentName:"p"},"last_name"),". The form will be populated with the values for the current ",(0,l.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn what determines a remote user"},(0,l.kt)("strong",{parentName:"a"},"remote user")),". The labels for the fields are ",(0,l.kt)("strong",{parentName:"p"},"Primero Nome")," and ",(0,l.kt)("strong",{parentName:"p"},"Sobrenome")," and used as placeholders for the input fields. The submit button is labelled ",(0,l.kt)("strong",{parentName:"p"},"Salvar altera\xe7\xf5es"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[mbr_my_account label='placeholder' fields='first_name|Primero Nome,last_name|Sobrenome' submit_button_label='Salvar altera\xe7\xf5es']\n")))),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}h.isMDXComponent=!0}}]);