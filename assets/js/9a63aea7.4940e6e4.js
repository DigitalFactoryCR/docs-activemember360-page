"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const a={id:"using-conditionals",title:"Using Conditionals",description:"How to use ActiveMember360 conditionals with Beaver Builder, Elementor, Gutenberg, Oxygen, WordPress menus & widgets. For other situations how to use the conditional shortcode and PHP API method.",sidebar_label:"Using Conditionals"},r=void 0,l={unversionedId:"fundamentals/conditionals/using-conditionals",id:"fundamentals/conditionals/using-conditionals",title:"Using Conditionals",description:"How to use ActiveMember360 conditionals with Beaver Builder, Elementor, Gutenberg, Oxygen, WordPress menus & widgets. For other situations how to use the conditional shortcode and PHP API method.",source:"@site/docs/fundamentals/conditionals/using-conditionals.mdx",sourceDirName:"fundamentals/conditionals",slug:"/fundamentals/conditionals/using-conditionals",permalink:"/fundamentals/conditionals/using-conditionals",draft:!1,tags:[],version:"current",lastUpdatedAt:1666967737,formattedLastUpdatedAt:"Oct 28, 2022",frontMatter:{id:"using-conditionals",title:"Using Conditionals",description:"How to use ActiveMember360 conditionals with Beaver Builder, Elementor, Gutenberg, Oxygen, WordPress menus & widgets. For other situations how to use the conditional shortcode and PHP API method.",sidebar_label:"Using Conditionals"},sidebar:"fundamentals",previous:{title:"Reordering Conditions",permalink:"/fundamentals/conditionals/conditionals-reordering-conditions"},next:{title:"Managing Conditionals",permalink:"/fundamentals/conditionals/managing-conditionals"}},s={},d=[{value:"1. Conditional Title",id:"1-conditional-title",level:2},{value:"2. Conditional Shortcode",id:"2-conditional-shortcode",level:2},{value:"3. PHP API Method",id:"3-php-api-method",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/conditional_published.png",alt:"Options available to reference a published conditional"})),(0,i.kt)("p",null,"When the ",(0,i.kt)("strong",{parentName:"p"},"conditional")," is published you will have three ways to reference the ",(0,i.kt)("strong",{parentName:"p"},"conditional")," so that it can be used to ",(0,i.kt)("strong",{parentName:"p"},"personalize"),", ",(0,i.kt)("strong",{parentName:"p"},"segment")," and control ",(0,i.kt)("strong",{parentName:"p"},"dynamic content")," throughout your site."),(0,i.kt)("h2",{id:"1-conditional-title"},"1. Conditional Title"),(0,i.kt)("p",null,"You would use the ",(0,i.kt)("strong",{parentName:"p"},"conditional")," title to reference the ",(0,i.kt)("strong",{parentName:"p"},"conditional")," when using any of the supported page builders or WordPress menus and widgets."),(0,i.kt)("p",null,"This would allow you to control the display of the following based upon the evaluation of the ",(0,i.kt)("strong",{parentName:"p"},"conditional"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Beaver Builder - Modules, Columns ","&"," Rows"),(0,i.kt)("li",{parentName:"ul"},"Elementor - Widgets, Sections ","&"," Popups"),(0,i.kt)("li",{parentName:"ul"},"Block Editor (Gutenberg) - Blocks"),(0,i.kt)("li",{parentName:"ul"},"Oxygen Builder - Elements"),(0,i.kt)("li",{parentName:"ul"},"WordPress - Menu Items"),(0,i.kt)("li",{parentName:"ul"},"WordPress - Widgets (Pre WordPress 5.8)")),(0,i.kt)("p",null,"For detailed instructions on how to use a conditional with any of the above follow the appropriate links below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/module-condition-conditional",title:"Click to learn how to set the Beaver Builder Module/Column/Row Visibility Based Upon ActiveMember360 Conditional"},(0,i.kt)("strong",{parentName:"a"},"Set Beaver Builder module/column/row visibility based upon a conditional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/module-themer-conditional-logic",title:"Click to learn how to set the Beaver Builder Module/Column/Row Visibility Using Beaver Themer Conditional Logic With ActiveMember360 Conditionals"},(0,i.kt)("strong",{parentName:"a"},"Set Beaver Builder module/column/row visibility using Beaver Themer Conditional Logic based upon a conditional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/themer-layout-conditional-logic",title:"Click to learn how to set the Beaver Themer Layout Rules Based Upon ActiveMember360 Conditionals"},(0,i.kt)("strong",{parentName:"a"},"Set Beaver Themer Layout rules based upon a conditional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/extensions/elementor/widget-condition-conditional",title:"Click to learn how to set Elementor Widget/Container/Section Display Based Upon An ActiveMember360 Conditional"},(0,i.kt)("strong",{parentName:"a"},"Set Elementor Widget/Container/Section display based upon a conditional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/extensions/elementor/popup-rule-conditional",title:"Click to learn how to set Elementor Popup Display Based Upon An ActiveMember360 Conditional"},(0,i.kt)("strong",{parentName:"a"},"Set Elementor popup display based upon a conditional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/modules/block-editor/block-condition-conditional",title:"Click to learn how to set the Block Editor Block Display Based Upon An ActiveMember360 Conditional"},(0,i.kt)("strong",{parentName:"a"},"Set Block Editor block display based upon a conditional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/extensions/oxygen-builder#for-conditional",title:"Click to learn how to set the Oxygen Builder Element visibility based upon an ActiveMember360 Conditional"},(0,i.kt)("strong",{parentName:"a"},"Set ActiveMember360 conditions to show/hide Oxygen Builder elements based upon a conditional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/modules/menu-control#conditional-mode",title:"Click to learn how to set Menu display controls based upon an ActiveMember360 Conditional"},(0,i.kt)("strong",{parentName:"a"},"Menu item display conditional mode"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/modules/widget-control#conditional-mode",title:"Click to learn how to set Widget display controls based upon an ActiveMember360 Conditional"},(0,i.kt)("strong",{parentName:"a"},"Widget display conditional mode")))),(0,i.kt)("p",null,"When the conditional is used in this way it controls the display of the ",(0,i.kt)("strong",{parentName:"p"},"entire")," item, whether it be; Beaver Builder Modules, Columns ","&"," Rows, Elementor Widgets, Sections ","&"," Popups, Gutenberg Blocks, Oxygen Elements, WordPress Menus or WordPress Widgets."),(0,i.kt)("p",null,"This method can only be used with the page builders that ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360")," provides an full integration with by way of an ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360 Extension")," and with WordPress menus and widgets."),(0,i.kt)("admonition",{title:"Beware",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Draft/trashed/deactivated/inactive ",(0,i.kt)("strong",{parentName:"p"},"conditionals")," will always return ",(0,i.kt)("strong",{parentName:"p"},"TRUE"),".")),(0,i.kt)("h2",{id:"2-conditional-shortcode"},"2. Conditional Shortcode"),(0,i.kt)("p",null,"You would use the ",(0,i.kt)("strong",{parentName:"p"},"conditional")," shortcode to reference the ",(0,i.kt)("strong",{parentName:"p"},"conditional")," anywhere that supports the use of shortcodes or if the ",(0,i.kt)("strong",{parentName:"p"},"conditional "),"title reference method was not supported or appropriate."),(0,i.kt)("p",null,"This allows you to control what content is seen in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Post titles"),(0,i.kt)("li",{parentName:"ul"},"Post/page content"),(0,i.kt)("li",{parentName:"ul"},"Post/page excerpts"),(0,i.kt)("li",{parentName:"ul"},"Widgets"),(0,i.kt)("li",{parentName:"ul"},"Menus"),(0,i.kt)("li",{parentName:"ul"},"\u2026and many custom post types such as:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"LearnDash courses, lessons,topics and quizzes."),(0,i.kt)("li",{parentName:"ul"},"WooCommere product pages."))),(0,i.kt)("li",{parentName:"ul"},"\u2026and page builders that support shortcodes such as:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Thrive Architect"),(0,i.kt)("li",{parentName:"ul"},"Divi"),(0,i.kt)("li",{parentName:"ul"},"OptimizePress"),(0,i.kt)("li",{parentName:"ul"},"etc.")))),(0,i.kt)("p",null,"Otherwise the difference between using the ",(0,i.kt)("strong",{parentName:"p"},"conditional")," shortcode and ",(0,i.kt)("strong",{parentName:"p"},"conditional")," title is that the shortcode allows you to segment and personalize content within an item."),(0,i.kt)("p",null,"As an example the title method allows you to control the display of an entire Gutenberg text block but the shortcode method allows you to control the content within the block."),(0,i.kt)("p",null,"The shortcode is used in the same way as any WordPress/ActiveMember360 shortcode."),(0,i.kt)("p",null,"So if the following was placed in the post content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[mbr_is_conditional id='6588']\nShow this content when the condition is TRUE\n[ELSE_is_conditional]\nShow this content when the condition is FALSE\n[/mbr_is_conditional]\n")),(0,i.kt)("p",null,'"Show this content when the condition is TRUE" is shown when the conditional with id 6588 evaluates to true and "Show this content when the condition is FALSE" is shown when the conditional with id 6588 evaluates to false.'),(0,i.kt)("p",null,"In the majority of cases we would expect the ",(0,i.kt)("strong",{parentName:"p"},"conditional")," to be referenced by the title method rather than the shortcode method."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/shortcodes/mbr_is_conditional",title:"Click to learn how to use the [mbr_is_conditional] shortcode"},(0,i.kt)("strong",{parentName:"a"},"mbr_is_conditional"))," shortcodes can be nested up to nineteen levels deep."),(0,i.kt)("p",null,"For full details of the shortcode please visit the following article ",(0,i.kt)("a",{parentName:"p",href:"/shortcodes/mbr_is_conditional",title:"Click to learn how to use the [mbr_is_conditional] shortcode"},(0,i.kt)("strong",{parentName:"a"},"mbr_is_conditional")),"."),(0,i.kt)("admonition",{title:"Beware",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If draft/trashed/deactivated/inactive ",(0,i.kt)("strong",{parentName:"p"},"conditionals")," are specified using the shortcode nothing will be displayed as the shortcode will not be evaluated.")),(0,i.kt)("h2",{id:"3-php-api-method"},"3. PHP API Method"),(0,i.kt)("p",null,"This is for use by developers and/or those wishing to use the ",(0,i.kt)("strong",{parentName:"p"},"conditional")," within PHP code."),(0,i.kt)("p",null,"It provides a conditional function that can be used with an IF/ELSE construct."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mbr_is_conditional( id )\n")),(0,i.kt)("p",null,"where id is an integer and the post_id of the conditional custom post."),(0,i.kt)("p",null,"This method is useful for those wishing to modify theme templates or similar."))}u.isMDXComponent=!0}}]);