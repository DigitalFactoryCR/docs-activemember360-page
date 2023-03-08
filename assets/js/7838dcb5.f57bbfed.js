"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=m(r),g=a,c=h["".concat(p,".").concat(g)]||h[g]||d[g]||i;return r?n.createElement(c,o(o({ref:t},l),{},{components:r})):n.createElement(c,o({ref:t},l))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},67938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const i={id:"memberships",title:"Memberships",description:"How to configure the ActiveMember360 Memberships",sidebar_label:"Memberships"},o=void 0,s={unversionedId:"settings/memberships",id:"settings/memberships",title:"Memberships",description:"How to configure the ActiveMember360 Memberships",source:"@site/docs/settings/memberships.mdx",sourceDirName:"settings",slug:"/settings/memberships",permalink:"/settings/memberships",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"memberships",title:"Memberships",description:"How to configure the ActiveMember360 Memberships",sidebar_label:"Memberships"},sidebar:"settings",previous:{title:"Settings",permalink:"/settings"},next:{title:"Login",permalink:"/settings/login"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Adding Memberships",id:"adding-memberships",level:2},{value:"Removing A Membership",id:"removing-a-membership",level:2},{value:"Reordering Memberships",id:"reordering-memberships",level:2}],l={toc:m},h="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The purpose of ",(0,a.kt)("strong",{parentName:"p"},"Memberships")," is multifold:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"Membership")," which is associated with an ActiveCampaign tag determines whether a visitor can login to your WordPress site."),(0,a.kt)("p",{parentName:"li"},"The visitor who must also be an ActiveCampaign contact must have at least one of the ActiveCampaign tags used to define a ",(0,a.kt)("strong",{parentName:"p"},"Membership")," to be able to login."),(0,a.kt)("p",{parentName:"li"},"The only exception is when ",(0,a.kt)("a",{parentName:"p",href:"/settings/login#allow-login-without-a-membership-tag",title:"Click to learn how to allow a login if the contact does not have a membership tag"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Allow login without a membership tag"))," is set to ",(0,a.kt)("strong",{parentName:"p"},"Yes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Memberships")," can prevent access to pages/posts by a ",(0,a.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,a.kt)("strong",{parentName:"a"},"remote user"))," unless they 'belong' to that ",(0,a.kt)("strong",{parentName:"p"},"Membership"),"."),(0,a.kt)("p",{parentName:"li"},"To 'belong' to a ",(0,a.kt)("strong",{parentName:"p"},"Membership")," the ",(0,a.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,a.kt)("strong",{parentName:"a"},"remote user"))," must have the ActiveCampaign tag used to define a ",(0,a.kt)("strong",{parentName:"p"},"Membership"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Memberships")," can control the redirect after login for the user.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Memberships")," can control the redirect after logout for the user."))),(0,a.kt)("admonition",{title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Memberships are an inherent part of ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360"),"."),(0,a.kt)("p",{parentName:"admonition"},"As such at least one membership must be defined before the full functionality of ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360")," is available.")),(0,a.kt)("h2",{id:"adding-memberships"},"Adding Memberships"),(0,a.kt)("figure",null,(0,a.kt)("img",{alt:"Steps for adding an ActiveMember360 Membership",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_memberships.png"}),(0,a.kt)("figcaption",null,"Steps for adding an ActiveMember360 Membership")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the WordPress administrator main navigation click ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360, Settings"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Settings")," tabs click ",(0,a.kt)("strong",{parentName:"p"},"Memberships"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To add a new ",(0,a.kt)("strong",{parentName:"p"},"Membership")," click ",(0,a.kt)("strong",{parentName:"p"},"Add Membership"),"."),(0,a.kt)("p",{parentName:"li"},"For the first ever ",(0,a.kt)("strong",{parentName:"p"},"Membership")," to be added there is no need to click ",(0,a.kt)("strong",{parentName:"p"},"Add Membership"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Specify a ",(0,a.kt)("strong",{parentName:"p"},"Membership Name")," for your ",(0,a.kt)("strong",{parentName:"p"},"Membership"),"."),(0,a.kt)("p",{parentName:"li"},"It is best to make this fairly short in length."),(0,a.kt)("p",{parentName:"li"},"If you do not enter a ",(0,a.kt)("strong",{parentName:"p"},"Membership Name")," the membership will be automatically named using the tag name selected in step 5 below.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Tag")," drop down select the ActiveCampaign contact tag to be used to define the ",(0,a.kt)("strong",{parentName:"p"},"Membership"),". After login only users who are ActiveCampaign contacts that have this ActiveCampaign tag will 'belong' to this ",(0,a.kt)("strong",{parentName:"p"},"Membership"),"."),(0,a.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,a.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,a.kt)("p",{parentName:"li"},"A tag can be removed from the selection by clicking on the ",(0,a.kt)("strong",{parentName:"p"},"x")," shown in the far right of the drop down.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Failed Payment Tag")," drop down select the ActiveCampaign contact tag to be used to indicate a failed payment associated with this ",(0,a.kt)("strong",{parentName:"p"},"Membership"),"."),(0,a.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the contact tag name to refine the list and aid selection."),(0,a.kt)("p",{parentName:"li"},"Then click on the required tag."),(0,a.kt)("p",{parentName:"li"},"A tag can be removed from the selection by clicking on the ",(0,a.kt)("strong",{parentName:"p"},"x")," shown in the far right of the drop down."),(0,a.kt)("admonition",{parentName:"li",title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"When a ",(0,a.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about what determines a remote user and user behaviour"},(0,a.kt)("strong",{parentName:"a"},"remote user"))," has a Failed Payment status the specified ",(0,a.kt)("strong",{parentName:"p"},"Failed payment text")," will be displayed once upon login in an overlayed WordPress thickbox popup window."),(0,a.kt)("p",{parentName:"admonition"},"Additionally, a short message and a link will be displayed in the ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Login Widget")," throughout the user\u2019s logged in session."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Redirect on login")," drop down select the page/post you want your members to be redirected when they login."),(0,a.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the page/post name to refine the list and aid selection."),(0,a.kt)("p",{parentName:"li"},"Then click on the required page/post."),(0,a.kt)("p",{parentName:"li"},"A page/post can be removed from the selection by clicking on the ",(0,a.kt)("strong",{parentName:"p"},"x")," shown in the far right of the drop down."),(0,a.kt)("p",{parentName:"li"},"If no selection is made the user after login will be redirected to your site home page unless you have defined a redirect on login elsewhere e.g. when using the ",(0,a.kt)("a",{parentName:"p",href:"/shortcodes/mbr_login_form",title:"Click to learn how to use the [mbr_login_form] shortcode"},(0,a.kt)("strong",{parentName:"a"},"[mbr_login_form]"))," shortcode."),(0,a.kt)("p",{parentName:"li"},"The order of ",(0,a.kt)("strong",{parentName:"p"},"Memberships")," is important when determining the ",(0,a.kt)("strong",{parentName:"p"},"Redirect on login")," that should take preference. If the logged in user has the ActiveCampaign tags that define multiple memberships the ",(0,a.kt)("strong",{parentName:"p"},"Redirect on login")," that applies is that specified for the first ",(0,a.kt)("strong",{parentName:"p"},"Membership")," in the list working from top to bottom that the user belongs to."),(0,a.kt)("p",{parentName:"li"},"Reordering memberships is explained below in ",(0,a.kt)("a",{parentName:"p",href:"/settings/memberships#reordering-memberships",title:"Click to learn how to reorder memberships"},(0,a.kt)("strong",{parentName:"a"},"Reordering Memberships"))),(0,a.kt)("admonition",{parentName:"li",title:"Important",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Some third party plugins can override this settings. So their login on redirect will take preference."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Redirect on logout")," drop down select the page/post you want your members to be redirected when they logout."),(0,a.kt)("p",{parentName:"li"},"Click the drop down then scroll or start typing any consecutive characters of the page/post name to refine the list and aid selection."),(0,a.kt)("p",{parentName:"li"},"Then click on the required page/post."),(0,a.kt)("p",{parentName:"li"},"A page/post can be removed from the selection by clicking on the ",(0,a.kt)("strong",{parentName:"p"},"x")," shown in the far right of the drop down."),(0,a.kt)("p",{parentName:"li"},"If no selection is made the user after logout will be redirected to your site home page."),(0,a.kt)("p",{parentName:"li"},"The order of ",(0,a.kt)("strong",{parentName:"p"},"Memberships")," is important when determining the ",(0,a.kt)("strong",{parentName:"p"},"Redirect on logout")," that should take preference. If the logged in user has the ActiveCampaign tags that define multiple memberships the ",(0,a.kt)("strong",{parentName:"p"},"Redirect on logout")," that applies is that specified for the first ",(0,a.kt)("strong",{parentName:"p"},"Membership")," in the list working from top to bottom that the user belongs to."),(0,a.kt)("p",{parentName:"li"},"Reordering memberships is explained below in ",(0,a.kt)("a",{parentName:"p",href:"/settings/memberships#reordering-memberships",title:"Click to learn how to reorder memberships"},(0,a.kt)("strong",{parentName:"a"},"Reordering Memberships")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("admonition",{parentName:"li",title:"DEPRECATED",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This option is only shown if ",(0,a.kt)("a",{parentName:"p",href:"/modules/theme-switcher",title:"Click to learn how ActiveMember360 controls the WordPress theme in use dependent upon the logged in user's membership levels"},(0,a.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Theme Switcher"))," is set to ",(0,a.kt)("strong",{parentName:"p"},"Yes"),"."),(0,a.kt)("p",{parentName:"admonition"},"However the ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Theme Switcher Module")," is now deprecated."),(0,a.kt)("p",{parentName:"admonition"},"The WordPress Block Editor and page builders, in conjunction with the ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360")," modules and extensions for those builders, have rendered this capability redundant."),(0,a.kt)("p",{parentName:"admonition"},"It remains solely to provide support to users who have previously implemented this feature/module."),(0,a.kt)("p",{parentName:"admonition"},"Documentation for this module is no longer provided."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Repeat steps 3 to 9 as required."),(0,a.kt)("p",{parentName:"li"},"There is no limit to the number of memberships that can be defined.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Settings"),"."))),(0,a.kt)("h2",{id:"removing-a-membership"},"Removing A Membership"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_memberships_remove.png",alt:"Steps for removing a Membership"})),(0,a.kt)("p",null,"You can remove a ",(0,a.kt)("strong",{parentName:"p"},"Membership")," by moving your cursor into the ",(0,a.kt)("strong",{parentName:"p"},"Membership")," title area. A ",(0,a.kt)("strong",{parentName:"p"},"Remove")," link will then be shown that when clicked will remove the ",(0,a.kt)("strong",{parentName:"p"},"Membership"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Remove")," link is only shown if more than one ",(0,a.kt)("strong",{parentName:"p"},"Membership")," is defined."),(0,a.kt)("h2",{id:"reordering-memberships"},"Reordering Memberships"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_memberships_reorder.png",alt:"Steps for reordering Memberships"})),(0,a.kt)("p",null,"You can reorder ",(0,a.kt)("strong",{parentName:"p"},"Memberships")," by moving your cursor into the ",(0,a.kt)("strong",{parentName:"p"},"Membership")," title area. The cursor will show as a cross-hair and upon holding down the left mouse button you can drag the ",(0,a.kt)("strong",{parentName:"p"},"Membership")," and release to change the order."),(0,a.kt)("p",null,"The order of ",(0,a.kt)("strong",{parentName:"p"},"Memberships")," is important when determining the ",(0,a.kt)("strong",{parentName:"p"},"Redirect on login")," and ",(0,a.kt)("strong",{parentName:"p"},"Redirect on logout")," that should take preference. If the logged in user has the ActiveCampaign tags that define multiple memberships the ",(0,a.kt)("strong",{parentName:"p"},"Redirect on login")," and ",(0,a.kt)("strong",{parentName:"p"},"Redirect on logout")," that applies is that specified for the first ",(0,a.kt)("strong",{parentName:"p"},"Membership")," in the list working from top to bottom that the user belongs to."))}d.isMDXComponent=!0}}]);