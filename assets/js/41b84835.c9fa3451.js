"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),k=o,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},96249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={id:"block-condition-php-statement",title:"Set Block Editor Block Display Based Upon Conditional PHP Statement",description:"How to configure the Block Editor block display conditions based upon conditional PHP statement.",sidebar_label:"Set Block Editor Block Display Based Upon Conditional PHP Statement"},i=void 0,p={unversionedId:"modules/block-editor/block-condition-php-statement",id:"modules/block-editor/block-condition-php-statement",title:"Set Block Editor Block Display Based Upon Conditional PHP Statement",description:"How to configure the Block Editor block display conditions based upon conditional PHP statement.",source:"@site/docs/modules/block-editor/block-condition-php-statement.mdx",sourceDirName:"modules/block-editor",slug:"/modules/block-editor/block-condition-php-statement",permalink:"/modules/block-editor/block-condition-php-statement",draft:!1,tags:[],version:"current",lastUpdatedAt:1665751408,formattedLastUpdatedAt:"Oct 14, 2022",frontMatter:{id:"block-condition-php-statement",title:"Set Block Editor Block Display Based Upon Conditional PHP Statement",description:"How to configure the Block Editor block display conditions based upon conditional PHP statement.",sidebar_label:"Set Block Editor Block Display Based Upon Conditional PHP Statement"},sidebar:"modules",previous:{title:"Set Block Editor Block Display Based Upon ActiveCampaign Contact Field Value",permalink:"/modules/block-editor/block-condition-contact-field"},next:{title:"Block Editor Block Display Examples",permalink:"/modules/block-editor/examples"}},s={},l=[],c={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Steps for specifying visibility conditions for Block Editor block based upon conditional PHP statement",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/gutenberg_module_block_condition_php_statement.png"}),(0,o.kt)("figcaption",null,"Steps for specifying visibility conditions for Block Editor block based upon conditional PHP statement")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within the Block Editor select the block to show the Block settings in the sidebar. Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360")," tab and expand it if necessary.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Control mode")," drop down ensure ",(0,o.kt)("strong",{parentName:"p"},"Individual")," is selected.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the PHP conditional statement."),(0,o.kt)("p",{parentName:"li"},"Any valid PHP conditional function can be used."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ActiveMember360")," has conditional functions that can be used:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags()\n")),(0,o.kt)("p",{parentName:"li"},"Here are some examples:"),(0,o.kt)("p",{parentName:"li"},"a. Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123' )\n")),(0,o.kt)("p",{parentName:"li"},"b. Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"OR")," 234."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123,234' )\n")),(0,o.kt)("p",{parentName:"li"},"c. Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"OR")," 234."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( array(123,234) )\n")),(0,o.kt)("p",{parentName:"li"},"d. Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"AND")," 234."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123,234', 'all' )\n")),(0,o.kt)("p",{parentName:"li"},"e. Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"AND")," 234."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( array(123,234), 'all' )\n")),(0,o.kt)("admonition",{parentName:"li",title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Any function preceded with an exclamation mark ",(0,o.kt)("strong",{parentName:"p"},"!")," specifies the negative use case of the function.")),(0,o.kt)("p",{parentName:"li"},"f. Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"DOES NOT HAVE")," tag 123."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"!mbr_has_tags( '123' )\n")),(0,o.kt)("admonition",{parentName:"li",title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It is also possible to combine conditions with ",(0,o.kt)("strong",{parentName:"p"},"&&")," (representing AND) and ",(0,o.kt)("strong",{parentName:"p"},"||")," (representing OR).")),(0,o.kt)("p",{parentName:"li"},"g. Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"AND DOES NOT HAVE")," tag 234."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123' ) && !mbr_has_tags( '234' )\n")),(0,o.kt)("p",{parentName:"li"},"h. Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if the user ",(0,o.kt)("strong",{parentName:"p"},"HAS")," tag 123 ",(0,o.kt)("strong",{parentName:"p"},"OR DOES NOT HAVE")," tag 234."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mbr_has_tags( '123' ) || !mbr_has_tags( '234' )\n")),(0,o.kt)("admonition",{parentName:"li",title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can also use any conditional tags including WordPress and WooCommerce conditional tags.")),(0,o.kt)("p",{parentName:"li"},"A list of WordPress Conditional Tags can be found here:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://codex.wordpress.org/Conditional_Tags",title:"Click to access WordPress Conditional Tags"},"WordPress Conditional Tags")),(0,o.kt)("p",{parentName:"li"},"A list of WooCommerce Conditional Tags can be found here:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.woocommerce.com/document/conditional-tags/",title:"Click to access WooCommerce Conditional Tags"},"WooCommerce Conditional Tags")),(0,o.kt)("p",{parentName:"li"},"i. Statement evaluates as ",(0,o.kt)("strong",{parentName:"p"},"TRUE")," if this is the home page."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"is_home()\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure the required block display to be used with this condition has been specified as detailed here:"),(0,o.kt)("p",{parentName:"li"},"[Set Block Editor Block to Display Always or Never or Based Upon User Login Status][modules-block-editor-condition-display-settings]")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the settings have been completed ensure ",(0,o.kt)("strong",{parentName:"p"},"Publish")," or ",(0,o.kt)("strong",{parentName:"p"},"Update")," is clicked to save the configuration."))),(0,o.kt)("p",null,"Set any additional conditions for the module/column/row display as detailed here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[Set Block Editor Block Display Based Upon ActiveCampaign Contact Tag/Tags][modules-block-editor-condition-contact-tag]"),(0,o.kt)("li",{parentName:"ul"},"[Set Block Editor Block Display Based Upon ActiveCampaign Contact Field Value][modules-block-editor-condition-contact-field]")))}d.isMDXComponent=!0}}]);