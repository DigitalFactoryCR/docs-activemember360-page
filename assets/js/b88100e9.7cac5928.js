"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[580],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),i=n(72389),l=n(63725),o=n(86010),s="tabItem_LplD";function u(e){var t,n,i,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),N=g.tabGroupChoices,y=g.setTabGroupChoices,w=(0,r.useState)(v),T=w[0],_=w[1],x=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=N[m];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&_(j)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=h[n].value;a!==T&&(O(t),_(a),null!=m&&y(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},16211:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(9877),o=n(58215),s=["components"],u={id:"js-set-field",title:"Set a Contact Field with JavaScript",description:"The ActiveMember360 function mbr_set_field() and mbr_remove_tags() add or remove tags from the current logged in user.",sidebar_label:"mbr_set_field"},p=void 0,c={unversionedId:"developer/js/js-set-field",id:"developer/js/js-set-field",title:"Set a Contact Field with JavaScript",description:"The ActiveMember360 function mbr_set_field() and mbr_remove_tags() add or remove tags from the current logged in user.",source:"@site/docs/developer/js/js-set-field.mdx",sourceDirName:"developer/js",slug:"/developer/js/js-set-field",permalink:"/developer/js/js-set-field",tags:[],version:"current",lastUpdatedAt:1651582475,formattedLastUpdatedAt:"5/3/2022",frontMatter:{id:"js-set-field",title:"Set a Contact Field with JavaScript",description:"The ActiveMember360 function mbr_set_field() and mbr_remove_tags() add or remove tags from the current logged in user.",sidebar_label:"mbr_set_field"},sidebar:"api",previous:{title:"mbr_add_tags/mbr_remove_tags",permalink:"/developer/js/js-add-remove-tags"},next:{title:"Hooks",permalink:"/category/hooks"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Function",id:"function",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"ActiveMember360 provides a function that allows you to set a contact field for the contact associated with the current ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("p",null,"The value specified always overwrites the existing field content. The function cannot be used to append data to a contact field."),(0,i.kt)("p",null,"The setting of any contact field is immediately effective within WordPress for the the current ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mbr_set_field ( $field, $value )")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"$field"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(string)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the name of an ActiveCampaign contact field to set. The field can be any custom contact field in ActiveCampaign and any field type. The available field names can be found in ",(0,i.kt)("a",{parentName:"td",href:"/utilities#contact-fields",title:"Click to learn how to display the available ActiveCampaign contact fields"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Contact Fields")),". The upper case version of the Perstag should be used as the field name.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"$value"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(string)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies the value for the ActiveCampaign contact field.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Defaults:")," none.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Required:")," yes.")))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When setting multiple selection field types such as ",(0,i.kt)("strong",{parentName:"p"},"list box")," and ",(0,i.kt)("strong",{parentName:"p"},"checkbox")," the selections must be separated by a double pipe ",(0,i.kt)("strong",{parentName:"p"},"||"),"."))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Text",value:"ex1"},{label:"Text Area",value:"ex2"},{label:"Date",value:"ex3"},{label:"Date/Time",value:"ex4"},{label:"Dropdown",value:"ex5"},{label:"List Box",value:"ex6"},{label:"Radio",value:"ex7"},{label:"Checkbox",value:"ex8"},{label:"Hidden",value:"ex9"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ex1",mdxType:"TabItem"},(0,i.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-set-field-text, when the button is clicked the text field with the Perstag ",(0,i.kt)("strong",{parentName:"p"},"MY_TEXT")," will be set as ",(0,i.kt)("strong",{parentName:"p"},"Lorem lipsum")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-set-field-text' ).click( function() {\nmbr_set_field( 'MY_TEXT', 'Lorem lipsum');\n} );\n} );\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-set-field-text">\n  Set field named MY_TEXT (field type text) to Lorem lipsum\n</button>\n'))),(0,i.kt)(o.Z,{value:"ex2",mdxType:"TabItem"},(0,i.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-set-field-textarea, when the button is clicked the textarea field with the Perstag ",(0,i.kt)("strong",{parentName:"p"},"MY_TEXTAREA")," will be set as ",(0,i.kt)("strong",{parentName:"p"},"Lorem lipsum")," for on line 1 and ",(0,i.kt)("strong",{parentName:"p"},"second line")," for line 2 for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-set-field-textarea' ).click( function() {\nmbr_set_field( 'MY_TEXTAREA', 'Lorem lipsum\\nsecond line.');\n} );\n} );\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-set-field-textarea">\n  Set field named MY_TEXTAREA (field type textarea) to lorem lipsum for line 1\n  and second line for line 2\n</button>\n'))),(0,i.kt)(o.Z,{value:"ex3",mdxType:"TabItem"},(0,i.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-set-field-date, when the button is clicked the date field with the Perstag ",(0,i.kt)("strong",{parentName:"p"},"MY_DATE")," will be set as ",(0,i.kt)("strong",{parentName:"p"},"2022-08-31")," (format yyyy-mm-dd) for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-set-field-date' ).click( function() {\nmbr_set_field( 'MY_DATE', '2022-08-31');\n} );\n} );\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-set-field-date">\n  Set MY_DATE (field type date) to 2022-08-31\n</button>\n'))),(0,i.kt)(o.Z,{value:"ex4",mdxType:"TabItem"},(0,i.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-set-field-datetime, when the button is clicked the date time field with the Perstag ",(0,i.kt)("strong",{parentName:"p"},"MY_DATE_TIME")," will be set as ",(0,i.kt)("strong",{parentName:"p"},"2022-08-31 06:30:00")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-set-field-datetime' ).click( function() {\nmbr_set_field( 'MY_DATE_TIME', '2022-08-31 06:30:00');\n} );\n} );\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-set-field-text">\n  Set field named MY_DATE_TIME field type (field type Date Time) to 2022-08-31\n  06:30:00\n</button>\n'))),(0,i.kt)(o.Z,{value:"ex5",mdxType:"TabItem"},(0,i.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-set-field-select when the button is clicked the dropdown field with the Perstag ",(0,i.kt)("strong",{parentName:"p"},"MY_DROPDOWN")," will be set as ",(0,i.kt)("strong",{parentName:"p"},"Option 3")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-set-field-dropdown' ).click( function() {\nmbr_set_field( 'MY_DROPDOWN', 'Option 3');\n} );\n} );\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-set-field-select">\n  Set MY_DROPDOWN (field type dropdown) to Option 3\n</button>\n'))),(0,i.kt)(o.Z,{value:"ex6",mdxType:"TabItem"},(0,i.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-set-field-multi-select when the button is clicked the list box field with the Perstag ",(0,i.kt)("strong",{parentName:"p"},"MY_LIST_BOX")," will be set as ",(0,i.kt)("strong",{parentName:"p"},"Option 1||Option 3")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-set-field-list-box' ).click( function() {\nmbr_set_field( 'MY_LIST_BOX', 'Option 1||Option 3');\n} );\n} );\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-set-field-list-box">\n  Set MY_LIST_BOX (field type listbox) to Option 1||Option 3\n</button>\n'))),(0,i.kt)(o.Z,{value:"ex7",mdxType:"TabItem"},(0,i.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-set-field-radio when the button is clicked the radio field with the Perstag ",(0,i.kt)("strong",{parentName:"p"},"MY_RADIO")," will be set as ",(0,i.kt)("strong",{parentName:"p"},"Option 3")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-set-field-radio' ).click( function() {\nmbr_set_field( 'MY_RADIO', 'Option 3');\n} );\n} );\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-set-field-radio">\n  Set MY_RADIO (field type radio) to Option 3\n</button>\n'))),(0,i.kt)(o.Z,{value:"ex8",mdxType:"TabItem"},(0,i.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-set-field-checkbox when the button is clicked the checkbox field with the Perstag ",(0,i.kt)("strong",{parentName:"p"},"MY_CHECKBOX")," will be set as ",(0,i.kt)("strong",{parentName:"p"},"Option 1||Option 3")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-set-field-checkbox' ).click( function() {\nmbr_set_field( 'MY_CHECKBOX', 'Option 1||Option 3');\n} );\n} );\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-set-field-checkbox">\n  Set MY_CHECKBOX (field type checkbox) to Option 1||Option 3\n</button>\n'))),(0,i.kt)(o.Z,{value:"ex9",mdxType:"TabItem"},(0,i.kt)("p",null,"Using this Javascript code snippet in conjunction with a HTML button with the CSS class mbr-set-field-hidden when the button is clicked the hidden field with the Perstag ",(0,i.kt)("strong",{parentName:"p"},"MY_HIDDEN")," will be set as ",(0,i.kt)("strong",{parentName:"p"},"hidden_value")," for the ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about visitor types"},(0,i.kt)("strong",{parentName:"a"},"remote user")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<script>\njQuery( document ).ready( function( $ ) {\n$( '.mbr-set-field-hidden' ).click( function() {\nmbr_set_field( 'MY_HIDDEN', 'hidden_value');\n} );\n} );\n<\/script>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="mbr-set-field-hidden">\n  Set MY_HIDDEN (field type hidden) hidden_value\n</button>\n')))))}b.isMDXComponent=!0}}]);