"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5051],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(2389),i=n(9548),l=n(6010),s="tabItem_LplD";function p(e){var t,n,o,p=e.lazy,m=e.block,c=e.defaultValue,u=e.values,d=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=u?u:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.lx)(N,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==h&&!N.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),v=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(h),R=w[0],T=w[1],D=[],L=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=v[d];null!=O&&O!==R&&N.some((function(e){return e.value===O}))&&T(O)}var S=function(e){var t=e.currentTarget,n=D.indexOf(t),a=N[n].value;a!==R&&(L(t),T(a),null!=d&&y(d,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;n=D[r]||D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},N.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return D.push(e)},onKeyDown:C,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":R===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(k.filter((function(e){return e.props.value===R}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},2699:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=(n(9877),n(8215),["components"]),l={id:"login",title:"ActiveMember360 Login",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",sidebar_label:"ActiveMember360 Login"},s=void 0,p={unversionedId:"blocks/login",id:"blocks/login",title:"ActiveMember360 Login",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",source:"@site/docs/blocks/login.mdx",sourceDirName:"blocks",slug:"/blocks/login",permalink:"/docs-activemember360-page/blocks/login",tags:[],version:"current",frontMatter:{id:"login",title:"ActiveMember360 Login",description:"This shortcode returns the permalink (URL) of the current or specified page, post or custom post type.",sidebar_label:"ActiveMember360 Login"},sidebar:"blocks"},m=[{value:"Usage",id:"usage",children:[],level:2},{value:"Block Details",id:"block-details",children:[{value:"Username, Password, Submit Button Labels",id:"username-password-submit-button-labels",children:[],level:3},{value:"Tags",id:"tags",children:[],level:3},{value:"Remember Me",id:"remember-me",children:[],level:3},{value:"Lost Password",id:"lost-password",children:[],level:3},{value:"Sign-up Link",id:"sign-up-link",children:[],level:3},{value:"Custom Redirect Upon Login",id:"custom-redirect-upon-login",children:[],level:3},{value:"Force Display",id:"force-display",children:[],level:3}],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This block displays an ActiveMember360 login form."),(0,o.kt)("p",null,"All labels can be specified to suit your preferred terminology or language requirements."),(0,o.kt)("p",null,"The block is placed and editied in the normal way using the WordPress Block Editor (Gutenberg)."),(0,o.kt)("p",null,"The display of the block can be controlled using the ",(0,o.kt)("a",{parentName:"p",href:"/modules/block-editor/overview",title:"Click to learn how to use the ActiveMember360 Block Editor module"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Block Editor")),"."),(0,o.kt)("h2",{id:"block-details"},"Block Details"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/blocks_login.png",alt:"Login Block"})),(0,o.kt)("h3",{id:"username-password-submit-button-labels"},"Username, Password, Submit Button Labels"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/blocks_login_labels.png",alt:"Label Settings"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Username label")," for the user login name field."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," Email Address"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," yes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Password label")," for the user password field."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," Password"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," yes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Submit button label")," for the submit button."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," Log In"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," yes."))),(0,o.kt)("h3",{id:"tags"},"Tags"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/blocks_login_tags.png",alt:"Tag Settings"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Add tags upon successful login")," drop down select the tags to be added to the ActiveCampaign contact record associated with the logged in WordPress user after a successful login."),(0,o.kt)("p",{parentName:"li"},"Click in the selection area and start typing part of the tag name to refine the list. Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"x")," shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},"All tags can be removed from the selection by clicking on the larger ",(0,o.kt)("strong",{parentName:"p"},"X")," shown to the left of the dropdown marker."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," none."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," no.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Remove tags upon successful login")," drop down select the tags to be removed from the ActiveCampaign contact record associated with the logged in WordPress user after a successful login."),(0,o.kt)("p",{parentName:"li"},"Click in the selection area and start typing part of the tag name to refine the list. Then click on the required tag."),(0,o.kt)("p",{parentName:"li"},"Multiple tags can be selected."),(0,o.kt)("p",{parentName:"li"},"Individual tags can be removed from the selection by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"x")," shown next to the individual tag name."),(0,o.kt)("p",{parentName:"li"},"All tags can be removed from the selection by clicking on the larger ",(0,o.kt)("strong",{parentName:"p"},"X")," shown to the left of the dropdown marker."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," none."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," no."))),(0,o.kt)("h3",{id:"remember-me"},"Remember Me"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/blocks_login_remember_me.png",alt:"Remember Me Setting"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toggle ",(0,o.kt)("strong",{parentName:"p"},'Display "Remember me" checkbox')," to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),' to display the WordPress "Remember me" checkbox.'),(0,o.kt)("p",{parentName:"li"},"When enabled the WordPress logged in cookie is set to expire in 14 days i.e. the user will remain logged in for 14 days unless they explicitly log out."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," No"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," yes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Remember me label"),' to be shown by the "Remember me" checkbox.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Conditions:")," Only available when ",(0,o.kt)("strong",{parentName:"p"},'Display "Remember me" checkbox')," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," Remember me"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," no."))),(0,o.kt)("h3",{id:"lost-password"},"Lost Password"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/blocks_login_lost_password.png",alt:"Lost Password Setting"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toggle ",(0,o.kt)("strong",{parentName:"p"},'Display "Lost password?" link')," to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," to display the WordPress lost password link. The link by default will redirect to /wp-login.php?action=lostpassword"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," No"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," yes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Lost password label")," defines the text to be used for the lost password link text."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Conditions:")," Only available when ",(0,o.kt)("strong",{parentName:"p"},'Display "Lost password?" link')," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," Lost password?"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," no."))),(0,o.kt)("h3",{id:"sign-up-link"},"Sign-up Link"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/blocks_login_signup_link.png",alt:"Signup Link Setting"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toggle ",(0,o.kt)("strong",{parentName:"p"},'Display "Sign-up" link')," to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," to display a sign up link."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," No"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," yes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Sign-up label")," defines the text to be used for the sign up link text."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Conditions:")," Only available when ",(0,o.kt)("strong",{parentName:"p"},'Display "Sign-up" link')," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," Sign up"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," no.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Sign-up URL")," defines the location a visitor will be redirected to should they click the sign up link."),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Custom URL")," can be specified or alternatively the ",(0,o.kt)("strong",{parentName:"p"},"As defined in settings for special pages")," registration link selected. The standard WordPress registration link can be overridden by the the settings within ",(0,o.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-registrationsign-up-page",title:"Click to learn how to specify a registration/sign-up page"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Select your registration/sign-up page"))," and ",(0,o.kt)("a",{parentName:"p",href:"/settings/special-pages#set-registrationsign-up-page-to-external-url",title:"Click to learn how to specify an external registration/sign-up URL"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Set registration/sign-up page to external URL")),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Conditions:")," Only available when ",(0,o.kt)("strong",{parentName:"p"},'Display "Sign up" link')," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," Standard WordPress"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," no.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Sign up URL")," defines the custom URL a visitor will be redirected to should they click the sign up link."),(0,o.kt)("p",{parentName:"li"},"Any URL can be specified."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Conditions:")," Only available when ",(0,o.kt)("strong",{parentName:"p"},'Display "Sign up" link')," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," and ",(0,o.kt)("strong",{parentName:"p"},"Sign up URL")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Custom URL"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," none."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," no."))),(0,o.kt)("h3",{id:"custom-redirect-upon-login"},"Custom Redirect Upon Login"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/blocks_login_custom_redirect.png",alt:"Custom Redirect Setting"})),(0,o.kt)("ol",{start:14},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toggle ",(0,o.kt)("strong",{parentName:"p"},"Custom redirect upon login")," to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," to redirect to a specified location after a successful login. This will override the settings specified for ",(0,o.kt)("strong",{parentName:"p"},"Redirect on login")," within ",(0,o.kt)("a",{parentName:"p",href:"/settings/memberships",title:"Click to learn how to define ActiveMember360 Memberships and associated settings"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships")),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," No"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," yes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Redirect location")," defines whether the visitor will be directed to a ",(0,o.kt)("strong",{parentName:"p"},"Custom URL / Location")," or a specific page/post after a successful login."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Conditions:")," Only available when ",(0,o.kt)("strong",{parentName:"p"},"Custom redirect upon login")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," none."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," no.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Redirect to custom URL")," defines the custom URL a visitor will be redirected to after a successful login."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Conditions:")," Only available when ",(0,o.kt)("strong",{parentName:"p"},"Custom redirect upon login")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," and ",(0,o.kt)("strong",{parentName:"p"},"Redirect location")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Custom URL / Location"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," none."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," no."))),(0,o.kt)("h3",{id:"force-display"},"Force Display"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/blocks_login_force_display.png",alt:"Force Display Setting"})),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toogle ",(0,o.kt)("strong",{parentName:"p"},"Force display")," to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," to display the login form when the visitor is logged in."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default:")," No"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Required:")," yes."))))}u.isMDXComponent=!0}}]);