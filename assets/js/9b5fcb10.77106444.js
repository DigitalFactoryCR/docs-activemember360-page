"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3819],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),d=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(a),c=n,h=m["".concat(i,".").concat(c)]||m[c]||u[c]||o;return a?r.createElement(h,l(l({ref:e},p),{},{components:a})):r.createElement(h,l({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(t,e,a){a.d(e,{Z:function(){return n}});var r=a(67294);function n(t){var e=t.children,a=t.hidden,n=t.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}},9877:function(t,e,a){a.d(e,{Z:function(){return p}});var r=a(87462),n=a(67294),o=a(72389),l=a(63725),s=a(86010),i="tabItem_LplD";function d(t){var e,a,o,d=t.lazy,p=t.block,u=t.defaultValue,m=t.values,c=t.groupId,h=t.className,f=n.Children.map(t.children,(function(t){if((0,n.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),k=(0,l.lx)(b,(function(t,e){return t.value===e.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(e=null!=u?u:null==(a=f.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(o=f[0])?void 0:o.props.value;if(null!==g&&!b.some((function(t){return t.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),w=N.tabGroupChoices,v=N.setTabGroupChoices,y=(0,n.useState)(g),_=y[0],T=y[1],x=[],D=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var R=w[c];null!=R&&R!==_&&b.some((function(t){return t.value===R}))&&T(R)}var C=function(t){var e=t.currentTarget,a=x.indexOf(e),r=b[a].value;r!==_&&(D(e),T(r),null!=c&&v(c,r))},E=function(t){var e,a=null;switch(t.key){case"ArrowRight":var r=x.indexOf(t.currentTarget)+1;a=x[r]||x[0];break;case"ArrowLeft":var n=x.indexOf(t.currentTarget)-1;a=x[n]||x[x.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},h)},b.map((function(t){var e=t.value,a=t.label,o=t.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:function(t){return x.push(t)},onKeyDown:E,onFocus:C,onClick:C},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":_===e})}),null!=a?a:e)}))),d?(0,n.cloneElement)(f.filter((function(t){return t.props.value===_}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==_})}))))}function p(t){var e=(0,o.Z)();return n.createElement(d,(0,r.Z)({key:String(e)},t))}},36918:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return c}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),l=a(9877),s=a(58215),i=["components"],d={id:"mbr_password_change",title:"mbr_password_change",description:"The ActiveMember360 shortcode mbr_password_change returns a HTML form through which the current logged in user linked to an ActiveCampaign contact can change their password.",sidebar_label:"mbr_password_change"},p=void 0,u={unversionedId:"shortcodes/mbr_password_change",id:"shortcodes/mbr_password_change",title:"mbr_password_change",description:"The ActiveMember360 shortcode mbr_password_change returns a HTML form through which the current logged in user linked to an ActiveCampaign contact can change their password.",source:"@site/docs/shortcodes/mbr_password_change.mdx",sourceDirName:"shortcodes",slug:"/shortcodes/mbr_password_change",permalink:"/docs-activemember360-page/shortcodes/mbr_password_change",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"mbr_password_change",title:"mbr_password_change",description:"The ActiveMember360 shortcode mbr_password_change returns a HTML form through which the current logged in user linked to an ActiveCampaign contact can change their password.",sidebar_label:"mbr_password_change"},sidebar:"shortcodes",previous:{title:"mbr_page_list",permalink:"/docs-activemember360-page/shortcodes/mbr_page_list"},next:{title:"mbr_password_send",permalink:"/docs-activemember360-page/shortcodes/mbr_password_send"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Validity",id:"validity",level:2},{value:"Conditional Branching",id:"conditional-branching",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Examples",id:"examples",level:2},{value:"API",id:"api",level:2}],h={toc:c};function f(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This shortcode returns a HTML form through which the current logged in user linked to an ActiveCampaign contact can change their password."),(0,o.kt)("p",null,"The password is changed in both WordPress and ActiveCampaign."),(0,o.kt)("p",null,"The submitted password must satisfy the password requirements specified within ",(0,o.kt)("a",{parentName:"p",href:"/settings/passwords",title:"Click to learn how to configure ActiveMember360 password settings"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Passwords"))," for minimum, maximum password characters and allowable character set."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"redirect"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The URL to redirect the user to after a successful completion of the password change request.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"automation_id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The ActiveCampaign automation ID to add the logged in user to after successful completion of the password change. The available automations can be found in ",(0,o.kt)("a",{parentName:"td",href:"/utilities#automations",title:"Click to learn how to display the available ActiveCampaign automations"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, Automations")),".",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"label"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The field label position.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Permissible Values:")," top, left, placeholder",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," top",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"placeholder"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Use a placeholder for the first and second password fields instead of labels.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Permissible Values:")," true, yes, 1",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"button_text"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text to display on the submit button.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," Change Password",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"button_image"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The URL of the image to use for the submit button.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"button_style"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply to the submit button.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"before_submit_button"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text or HTML placed before the submit button.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"after_submit_button"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text or HTML placed after the submit button.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"class_submit_button"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The CSS class to apply for the submit button.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," mbr-submit",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"id_submit_button"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The HTML id attribute to apply for the submit button.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"lead_text"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text that should be appear above the password change form.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pass_1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The label/placeholder for the first password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," New Password",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"size_pass_1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The size for the first password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," 20",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"maxlength_pass_1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The maximum input length for the first password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"before_pass_1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text or HTML that should be displayed before the first password label and input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"after_pass_1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text or HTML that should be displayed after the first password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"style_pass_1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply to the first password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"class_pass_1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The CSS class to apply to the first password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"pass_2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The label/placeholder for the second password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," New Password",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"size_pass_2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The size for the second password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," 20",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"maxlength_pass_2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The maximum inputr length for the second password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"before_pass_2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text or HTML that should be displayed before the second password label and input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"after_pass_2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The text or HTML that should be displayed after the second password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"style_pass_2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The CSS style to apply to the second password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"class_pass_2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The CSS class to apply to the second password input field.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Default:")," none.",(0,o.kt)("br",null),(0,o.kt)("strong",{parentName:"td"},"Required:")," no.")))),(0,o.kt)("h2",{id:"validity"},"Validity"),(0,o.kt)("p",null,"This shortcode is only processed for ",(0,o.kt)("strong",{parentName:"p"},"logged in users who also exist as contacts")," within ActiveCampaign."),(0,o.kt)("p",null,"In all other cases, including WordPress users with the ",(0,o.kt)("strong",{parentName:"p"},"Administrator")," role nothing will be returned."),(0,o.kt)("h2",{id:"conditional-branching"},"Conditional Branching"),(0,o.kt)("p",null,"This shortcode does ",(0,o.kt)("strong",{parentName:"p"},"NOT")," support conditional branching with ",(0,o.kt)("strong",{parentName:"p"},"[ELSE_password_change]"),"."),(0,o.kt)("h2",{id:"nesting"},"Nesting"),(0,o.kt)("p",null,"Shortcode nesting is ",(0,o.kt)("strong",{parentName:"p"},"NOT")," supported."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{groupId:"examples",defaultValue:"ex1",values:[{label:"Example 1",value:"ex1"},{label:"Example 2",value:"ex2"},{label:"Example 3",value:"ex3"},{label:"Example 4",value:"ex4"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ex1",mdxType:"TabItem"},(0,o.kt)("p",null,"Generates a password change form with the submit button labelled 'Reset my password' using default values for the remaining parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_password_change button_text='Reset my password']\n"))),(0,o.kt)(s.Z,{value:"ex2",mdxType:"TabItem"},(0,o.kt)("p",null,"Generates a password change form with the submit button using an image from the URL ",(0,o.kt)("a",{parentName:"p",href:"https://yoursite.com/my_button.png"},"https://yoursite.com/my_button.png"),". After a successful password change redirect the user to the page on the current site with slug password-change-confirmation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_password_change button_image='https://yoursite.com/my_button.png' redirect='/password-change-confirmation/']\n"))),(0,o.kt)(s.Z,{value:"ex3",mdxType:"TabItem"},(0,o.kt)("p",null,"Generates a password change form with the submit button labelled 'Reset my password'. Use placeholders for the password input fields set to 'Your new password' and 'Repeat your new password':"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_password_change button_text='Reset my password' pass_1='Your new password' pass_2='Repeat your new password' placeholder='yes']\n"))),(0,o.kt)(s.Z,{value:"ex4",mdxType:"TabItem"},(0,o.kt)("p",null,"Generates a password change form with the submit button labelled 'Change my password'. Use placeholders for the password input fields set to 'Your new password' and 'Repeat your new password'. After a successful password change redirect the user to the page on the current site with slug password-change-confirmation and add the contact to the ActiveCampaign automation with ID ",(0,o.kt)("strong",{parentName:"p"},"1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[mbr_password_change button_text='Change my password' pass_1='Your new password' pass_2='Repeat your new password' placeholder='yes' redirect='/password-change-confirmation/' automation_id='1']\n")))),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is currently no ActiveMember360 API function equivalent for this shortcode."))))}f.isMDXComponent=!0}}]);