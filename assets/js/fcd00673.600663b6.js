"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45774],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(a),g=n,h=m["".concat(p,".").concat(g)]||m[g]||d[g]||o;return a?r.createElement(h,s(s({ref:t},l),{},{components:a})):r.createElement(h,s({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98858:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"revert-encrypted-password-storage",title:"Revert The Storage Of Encrypted Passwords In ActiveCampaign",description:"How to revert the storage of encrypted passwords in ActiveCampaign.",sidebar_label:"Revert The Storage Of Encrypted Passwords In ActiveCampaign"},p=void 0,c={unversionedId:"fundamentals/revert-encrypted-password-storage",id:"fundamentals/revert-encrypted-password-storage",title:"Revert The Storage Of Encrypted Passwords In ActiveCampaign",description:"How to revert the storage of encrypted passwords in ActiveCampaign.",source:"@site/docs/fundamentals/revert-encrypted-password-storage.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/revert-encrypted-password-storage",permalink:"/fundamentals/revert-encrypted-password-storage",tags:[],version:"current",lastUpdatedAt:1651582475,formattedLastUpdatedAt:"5/3/2022",frontMatter:{id:"revert-encrypted-password-storage",title:"Revert The Storage Of Encrypted Passwords In ActiveCampaign",description:"How to revert the storage of encrypted passwords in ActiveCampaign.",sidebar_label:"Revert The Storage Of Encrypted Passwords In ActiveCampaign"}},l={},d=[{value:"Process to revert encrypted password storage",id:"process-to-revert-encrypted-password-storage",level:2}],m={toc:d};function g(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Any password stored within WordPress is always stored encrypted."),(0,o.kt)("p",null,"The password stored by ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360")," in ActiveCampaign can either be stored in the default format, or be stored as an encrypted password."),(0,o.kt)("p",null,"If you have chosen to switch to encrypted password storage in ActiveCampaign and now wish to revert passwords back to the default format you must follow the process below."),(0,o.kt)("p",null,"Upon completion of this process your users will still be able to login with their known passwords."),(0,o.kt)("h2",{id:"process-to-revert-encrypted-password-storage"},"Process to revert encrypted password storage"),(0,o.kt)("p",null,"The following must be performed on all WordPress sites running ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360")," that are connected to the same ActiveCampaign application, so you must be logged in as an administrator to all sites:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Within ",(0,o.kt)("a",{parentName:"li",href:"/modules/automatic-webhooks",title:"Click to learn how to use the ActiveMember360 Automatic Webhooks Module"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Automatic Webhooks, Enable Automatic Webhook module"))," ensure this is set to ",(0,o.kt)("strong",{parentName:"li"},"No/Off"),". Make a note of the sites where you have changed the setting from ",(0,o.kt)("strong",{parentName:"li"},"Yes/On")," to ",(0,o.kt)("strong",{parentName:"li"},"No/Off"),"."),(0,o.kt)("li",{parentName:"ol"},"Within ",(0,o.kt)("a",{parentName:"li",href:"/settings/passwords/#switch-to-encrypted-password-storage-in-activecampaign",title:"Click to learn how to configure the ActiveMember360 Password Setting, Switch to encrypted password storage in ActiveCampaign."},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Passwords, Switch to encrypted password storage in ActiveCampaign"))," ensure this is set to ",(0,o.kt)("strong",{parentName:"li"},"No/Off"),".")),(0,o.kt)("p",null,"After completing the changes above then login to ActiveCampaign as an administrator user:"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Settings, Developer, Manage Webhooks"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure that no webhooks exist that include in the webhook URL the string ",(0,o.kt)("strong",{parentName:"p"},"?mbr=MBR.WH"),"."),(0,o.kt)("p",{parentName:"li"},"If any still exist then delete them.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within ",(0,o.kt)("strong",{parentName:"p"},"Contacts")," set the listing filter ",(0,o.kt)("strong",{parentName:"p"},"(A)")," to show the field ",(0,o.kt)("strong",{parentName:"p"},"Password")," ",(0,o.kt)("strong",{parentName:"p"},"(B)")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/revert_encrypted_passwords_listing.png",alt:"Steps to show Password in contact listing"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within ",(0,o.kt)("strong",{parentName:"p"},"Contacts")," from Search contacts select an ",(0,o.kt)("strong",{parentName:"p"},"Advanced Search")," ",(0,o.kt)("strong",{parentName:"p"},"(A)")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/revert_encrypted_passwords_advanced_search.png",alt:"Steps to process an Advanced Search for encrypted passwords"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within the ",(0,o.kt)("strong",{parentName:"p"},"Advanced Search")," ensure ",(0,o.kt)("strong",{parentName:"p"},"(Select a condition)")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Custom Contact Fields, Password")," ",(0,o.kt)("strong",{parentName:"p"},"(A)")," and the condition is ",(0,o.kt)("strong",{parentName:"p"},"Contains")," ",(0,o.kt)("strong",{parentName:"p"},"(B)")," and the value is ",(0,o.kt)("strong",{parentName:"p"},"$P$B")," ",(0,o.kt)("strong",{parentName:"p"},"(C)"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/revert_encrypted_passwords_advanced_search_settings.png",alt:"Steps to process an Advanced Search for encrypted passwords"})),(0,o.kt)("p",{parentName:"li"},"Clicking ",(0,o.kt)("strong",{parentName:"p"},"Search")," ",(0,o.kt)("strong",{parentName:"p"},"(D)")," should then list all contacts who have an encrypted password stored in ActiveCampaign."),(0,o.kt)("p",{parentName:"li"},"If no contacts are listed then proceed to ",(0,o.kt)("strong",{parentName:"p"},"Step 12"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Edit all"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/revert_encrypted_passwords_edit_all.png",alt:"Steps to select edit all in contact listing"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within the bulk editing settings select ",(0,o.kt)("strong",{parentName:"p"},"Update a field")," ",(0,o.kt)("strong",{parentName:"p"},"(A)"),", then select from the drop down ",(0,o.kt)("strong",{parentName:"p"},"Password")," ",(0,o.kt)("strong",{parentName:"p"},"(B)"),", ensure the ",(0,o.kt)("strong",{parentName:"p"},"Value")," ",(0,o.kt)("strong",{parentName:"p"},"(C)")," is empty, finally click ",(0,o.kt)("strong",{parentName:"p"},"Update")," ",(0,o.kt)("strong",{parentName:"p"},"(D)")," and confirm you wish to apply the changes to the contacts."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/revert_encrypted_passwords_clear.png",alt:"Steps to clear password field"})))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div",start:10},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Depending upon the number of contacts being edited the update may take some time."),(0,o.kt)("p",{parentName:"li"},"When it appears that it has finished processing please repeat ",(0,o.kt)("strong",{parentName:"p"},"Steps 6 through 9")," until when the search is performed in ",(0,o.kt)("strong",{parentName:"p"},"Step 7")," no matches are shown."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/revert_encrypted_passwords_update_complete.png",alt:"Steps to clear password field"})))))),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within all the WordPress sites running ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360")," that are connected to the same ActiveCampaign application ensure that ",(0,o.kt)("a",{parentName:"p",href:"/settings/passwords/#switch-to-encrypted-password-storage-in-activecampaign",title:"Click to learn how to configure the ActiveMember360 Password Setting, Switch to encrypted password storage in ActiveCampaign."},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Passwords, Switch to encrypted password storage in ActiveCampaign"))," ensure this is set to ",(0,o.kt)("strong",{parentName:"p"},"No/Off"),"."),(0,o.kt)("p",{parentName:"li"},"Although you have already done this in ",(0,o.kt)("strong",{parentName:"p"},"Step 2")," you must do this again. If someone has logged in to any one of your WordPress sites whilst you have been processing the ActiveCampaign changes, and their password was still stored as encrypted within their ActiveCampaign contact record at the time of that login, the setting will have been automatically reset to ",(0,o.kt)("strong",{parentName:"p"},"Yes/On")," for that site.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once there are no encrypted passwords stored within ActiveCampaign using ",(0,o.kt)("strong",{parentName:"p"},"Steps 6 through 7")," and for all WordPress sites ",(0,o.kt)("a",{parentName:"p",href:"/settings/passwords/#switch-to-encrypted-password-storage-in-activecampaign",title:"Click to learn how to configure the ActiveMember360 Password Setting, Switch to encrypted password storage in ActiveCampaign."},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Passwords, Switch to encrypted password storage in ActiveCampaign"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"No/Off")," you can reactivate ",(0,o.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks",title:"Click to learn how to use the ActiveMember360 Automatic Webhooks Module"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Automatic Webhooks, Enable Automatic Webhook module"))," i.e. set to ",(0,o.kt)("strong",{parentName:"p"},"Yes/On")," but only for the sites where this setting was changed to ",(0,o.kt)("strong",{parentName:"p"},"No/Off")," from ",(0,o.kt)("strong",{parentName:"p"},"Yes/On")," in ",(0,o.kt)("strong",{parentName:"p"},"Step 1"),", that is for the sites noted then."))))}g.isMDXComponent=!0}}]);