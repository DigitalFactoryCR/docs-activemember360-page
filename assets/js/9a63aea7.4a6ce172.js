"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7178],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],l={id:"using-conditionals",title:"Using Conditionals",description:"How to use ActiveMember360 conditionals with Beaver Builder, Elementor, Gutenberg, Oxygen, WordPress menus & widgets. For other situations how to use the conditional shortcode and PHP API method.",sidebar_label:"Using Conditionals"},s=void 0,d={unversionedId:"fundamentals/conditionals/using-conditionals",id:"fundamentals/conditionals/using-conditionals",title:"Using Conditionals",description:"How to use ActiveMember360 conditionals with Beaver Builder, Elementor, Gutenberg, Oxygen, WordPress menus & widgets. For other situations how to use the conditional shortcode and PHP API method.",source:"@site/docs/fundamentals/conditionals/using-conditionals.mdx",sourceDirName:"fundamentals/conditionals",slug:"/fundamentals/conditionals/using-conditionals",permalink:"/docs-activemember360-page/fundamentals/conditionals/using-conditionals",tags:[],version:"current",lastUpdatedAt:1647023204,formattedLastUpdatedAt:"3/11/2022",frontMatter:{id:"using-conditionals",title:"Using Conditionals",description:"How to use ActiveMember360 conditionals with Beaver Builder, Elementor, Gutenberg, Oxygen, WordPress menus & widgets. For other situations how to use the conditional shortcode and PHP API method.",sidebar_label:"Using Conditionals"},sidebar:"fundamentals",previous:{title:"Reordering Conditions",permalink:"/docs-activemember360-page/fundamentals/conditionals/conditionals-reordering-conditions"},next:{title:"Managing Conditionals",permalink:"/docs-activemember360-page/fundamentals/conditionals/managing-conditionals"}},c={},p=[{value:"1. Conditional Title",id:"1-conditional-title",level:2},{value:"2. Conditional Shortcode",id:"2-conditional-shortcode",level:2},{value:"3. PHP API Method",id:"3-php-api-method",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/conditional_published.png",alt:"Options available to reference a published conditional"})),(0,a.kt)("p",null,"When the ",(0,a.kt)("strong",{parentName:"p"},"conditional")," is published you will have three ways to reference the ",(0,a.kt)("strong",{parentName:"p"},"conditional")," so that it can be used to ",(0,a.kt)("strong",{parentName:"p"},"personalize"),", ",(0,a.kt)("strong",{parentName:"p"},"segment")," and control ",(0,a.kt)("strong",{parentName:"p"},"dynamic content")," throughout your site."),(0,a.kt)("h2",{id:"1-conditional-title"},"1. Conditional Title"),(0,a.kt)("p",null,"You would use the ",(0,a.kt)("strong",{parentName:"p"},"conditional")," title to reference the ",(0,a.kt)("strong",{parentName:"p"},"conditional")," when using any of the supported page builders or WordPress menus and widgets."),(0,a.kt)("p",null,"This would allow you to control the display of the following based upon the evaluation of the ",(0,a.kt)("strong",{parentName:"p"},"conditional"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Beaver Builder - Modules, Columns ","&"," Rows"),(0,a.kt)("li",{parentName:"ul"},"Elementor - Widgets, Sections ","&"," Popups"),(0,a.kt)("li",{parentName:"ul"},"Block Editor (Gutenberg) - Blocks"),(0,a.kt)("li",{parentName:"ul"},"Oxygen Builder - Elements"),(0,a.kt)("li",{parentName:"ul"},"WordPress - Menu Items"),(0,a.kt)("li",{parentName:"ul"},"WordPress - Widgets (Pre WordPress 5.8)")),(0,a.kt)("p",null,"For detailed instructions on how to use a conditional with any of the above follow the appropriate links below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/module-condition-conditional",title:"Click to learn how to set the Beaver Builder Module/Column/Row Visibility Based Upon ActiveMember360 Conditional"},(0,a.kt)("strong",{parentName:"a"},"Set Beaver Builder module/column/row visibility based upon a conditional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/module-themer-conditional-logic",title:"Click to learn how to set the Beaver Builder Module/Column/Row Visibility Using Beaver Themer Conditional Logic With ActiveMember360 Conditionals"},(0,a.kt)("strong",{parentName:"a"},"Set Beaver Builder module/column/row visibility using Beaver Themer Conditional Logic based upon a conditional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/extensions/beaver-builder/themer-layout-conditional-logic",title:"Click to learn how to set the Beaver Themer Layout Rules Based Upon ActiveMember360 Conditionals"},(0,a.kt)("strong",{parentName:"a"},"Set Beaver Themer Layout rules based upon a conditional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/extensions/elementor/widget-condition-conditional",title:"Click to learn how to set Elementor Widget/Section Display Based Upon An ActiveMember360 Conditional"},(0,a.kt)("strong",{parentName:"a"},"Set Elementor widget/section display based upon a conditional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/extensions/elementor/popup-rule-conditional",title:"Click to learn how to set Elementor Popup Display Based Upon An ActiveMember360 Conditional"},(0,a.kt)("strong",{parentName:"a"},"Set Elementor popup display based upon a conditional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/block-editor/block-condition-conditional",title:"Click to learn how to set the Block Editor Block Display Based Upon An ActiveMember360 Conditional"},(0,a.kt)("strong",{parentName:"a"},"Set Block Editor block display based upon a conditional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/extensions/oxygen-builder#for-conditional",title:"Click to learn how to set the Oxygen Builder Element visibility based upon an ActiveMember360 Conditional"},(0,a.kt)("strong",{parentName:"a"},"Set ActiveMember360 conditions to show/hide Oxygen Builder elements based upon a conditional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/menu-control#conditional-mode",title:"Click to learn how to set Menu display controls based upon an ActiveMember360 Conditional"},(0,a.kt)("strong",{parentName:"a"},"Menu item display conditional mode"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/modules/widget-control#conditional-mode",title:"Click to learn how to set Widget display controls based upon an ActiveMember360 Conditional"},(0,a.kt)("strong",{parentName:"a"},"Widget display conditional mode")))),(0,a.kt)("p",null,"When the conditional is used in this way it controls the display of the ",(0,a.kt)("strong",{parentName:"p"},"entire")," item, whether it be; Beaver Builder Modules, Columns ","&"," Rows, Elementor Widgets, Sections ","&"," Popups, Gutenberg Blocks, Oxygen Elements, WordPress Menus or WordPress Widgets."),(0,a.kt)("p",null,"This method can only be used with the page builders that ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360")," provides an full integration with by way of an ",(0,a.kt)("strong",{parentName:"p"},"ActiveMember360 Extension")," and with WordPress menus and widgets."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Beware")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Draft/trashed/deactivated/inactive ",(0,a.kt)("strong",{parentName:"p"},"conditionals")," will always return ",(0,a.kt)("strong",{parentName:"p"},"TRUE"),"."))),(0,a.kt)("h2",{id:"2-conditional-shortcode"},"2. Conditional Shortcode"),(0,a.kt)("p",null,"You would use the ",(0,a.kt)("strong",{parentName:"p"},"conditional")," shortcode to reference the ",(0,a.kt)("strong",{parentName:"p"},"conditional")," anywhere that supports the use of shortcodes or if the ",(0,a.kt)("strong",{parentName:"p"},"conditional "),"title reference method was not supported or appropriate."),(0,a.kt)("p",null,"This allows you to control what content is seen in:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Post titles"),(0,a.kt)("li",{parentName:"ul"},"Post/page content"),(0,a.kt)("li",{parentName:"ul"},"Post/page excerpts"),(0,a.kt)("li",{parentName:"ul"},"Widgets"),(0,a.kt)("li",{parentName:"ul"},"Menus"),(0,a.kt)("li",{parentName:"ul"},"\u2026and many custom post types such as:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"LearnDash courses, lessons,topics and quizzes."),(0,a.kt)("li",{parentName:"ul"},"WooCommere product pages."))),(0,a.kt)("li",{parentName:"ul"},"\u2026and page builders that support shortcodes such as:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Thrive Architect"),(0,a.kt)("li",{parentName:"ul"},"Divi"),(0,a.kt)("li",{parentName:"ul"},"OptimizePress"),(0,a.kt)("li",{parentName:"ul"},"etc.")))),(0,a.kt)("p",null,"Otherwise the difference between using the ",(0,a.kt)("strong",{parentName:"p"},"conditional")," shortcode and ",(0,a.kt)("strong",{parentName:"p"},"conditional")," title is that the shortcode allows you to segment and personalize content within an item."),(0,a.kt)("p",null,"As an example the title method allows you to control the display of an entire Gutenberg text block but the shortcode method allows you to control the content within the block."),(0,a.kt)("p",null,"The shortcode is used in the same way as any WordPress/ActiveMember360 shortcode."),(0,a.kt)("p",null,"So if the following was placed in the post content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[mbr_is_conditional id='6588']\nShow this content when the condition is TRUE\n[ELSE_is_conditional]\nShow this content when the condition is FALSE\n[/mbr_is_conditional]\n")),(0,a.kt)("p",null,'"Show this content when the condition is TRUE" is shown when the conditional with id 6588 evaluates to true and "Show this content when the condition is FALSE" is shown when the conditional with id 6588 evaluates to false.'),(0,a.kt)("p",null,"In the majority of cases we would expect the ",(0,a.kt)("strong",{parentName:"p"},"conditional")," to be referenced by the title method rather than the shortcode method."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/shortcodes/mbr_is_conditional",title:"Click to learn how to use the [mbr_is_conditional] shortcode"},(0,a.kt)("strong",{parentName:"a"},"mbr_is_conditional"))," shortcodes can be nested up to nineteen levels deep."),(0,a.kt)("p",null,"For full details of the shortcode please visit the following article ",(0,a.kt)("a",{parentName:"p",href:"/shortcodes/mbr_is_conditional",title:"Click to learn how to use the [mbr_is_conditional] shortcode"},(0,a.kt)("strong",{parentName:"a"},"mbr_is_conditional")),"."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Beware")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If draft/trashed/deactivated/inactive ",(0,a.kt)("strong",{parentName:"p"},"conditionals")," are specified using the shortcode nothing will be displayed as the shortcode will not be evaluated."))),(0,a.kt)("h2",{id:"3-php-api-method"},"3. PHP API Method"),(0,a.kt)("p",null,"This is for use by developers and/or those wishing to use the ",(0,a.kt)("strong",{parentName:"p"},"conditional")," within PHP code."),(0,a.kt)("p",null,"It provides a conditional function that can be used with an IF/ELSE construct."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mbr_is_conditional( id )\n")),(0,a.kt)("p",null,"where id is an integer and the post_id of the conditional custom post."),(0,a.kt)("p",null,"This method is useful for those wishing to modify theme templates or similar."))}m.isMDXComponent=!0}}]);