"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6265],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94886:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"excerpts",title:"Excerpts",description:"How to configure the ActiveMember360 Content Access Options.",sidebar_label:"Excerpts"},l=void 0,p={unversionedId:"settings/excerpts",id:"settings/excerpts",title:"Excerpts",description:"How to configure the ActiveMember360 Content Access Options.",source:"@site/docs/settings/excerpts.mdx",sourceDirName:"settings",slug:"/settings/excerpts",permalink:"/docs-activemember360-page/settings/excerpts",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"excerpts",title:"Excerpts",description:"How to configure the ActiveMember360 Content Access Options.",sidebar_label:"Excerpts"},sidebar:"settings",previous:{title:"Cache",permalink:"/docs-activemember360-page/settings/cache"},next:{title:"Amazon S3",permalink:"/docs-activemember360-page/settings/amazon-s3"}},c={},d=[{value:"Force excerpts at all times",id:"force-excerpts-at-all-times",level:2},{value:"Max. length for WP-generated excerpts",id:"max-length-for-wp-generated-excerpts",level:2},{value:"Enable blur effect for excerpts",id:"enable-blur-effect-for-excerpts",level:2},{value:"Excerpt gradient start color",id:"excerpt-gradient-start-color",level:3},{value:"Excerpt gradient end color",id:"excerpt-gradient-end-color",level:3},{value:"Disable excerpt links",id:"disable-excerpt-links",level:2},{value:"Common excerpt text",id:"common-excerpt-text",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To fully understand the purpose of excerpts and how they function with ActiveMember360 please refer to ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/excerpts",title:"Click to gain a fuller understanding of WordPress excerpts and how they are used with ActiveMember360"},(0,o.kt)("strong",{parentName:"a"},"WordPress Excerpts")),"."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Configure the ActiveMember360 Excerpts settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_excerpts.png"}),(0,o.kt)("figcaption",null,"Configure the ActiveMember360 Excerpts settings")),(0,o.kt)("h2",{id:"force-excerpts-at-all-times"},"Force excerpts at all times"),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Force excerpts at all times")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," ActiveMember360 will automatically create an excerpt for pages and posts that do not have one."),(0,o.kt)("p",null,"It will use the content of the page/post to generate the excerpt."),(0,o.kt)("p",null,"The maximum length of the automatically generated excerpt is determined by the setting of ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#max-length-for-wp-generated-excerpts",title:"Click to learn how to set the length of an automatically generated excerpt"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Max. length for WP-generated excerpts")),"."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Beware")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please take particular care when using this option with page builders or content containing shortcodes."),(0,o.kt)("p",{parentName:"div"},"You should check you do not expose more content in the excerpt than desired."),(0,o.kt)("p",{parentName:"div"},"In all cases it is best to use a manual excerpt for each page/post."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h2",{id:"max-length-for-wp-generated-excerpts"},"Max. length for WP-generated excerpts"),(0,o.kt)("p",null,"In various locations in your WordPress site, such as an archive or category view of multiple posts, WordPress will automatically generate an excerpt if one hasn\u2019t be defined."),(0,o.kt)("p",null,"By default, WordPress creates excerpts using the first 55 words of a page/post."),(0,o.kt)("p",null,"Set ",(0,o.kt)("strong",{parentName:"p"},"Max. length for WP-generated excerpts")," to the maximum length for your auto-generated excerpts to better suit your requirements."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: 55")),(0,o.kt)("h2",{id:"enable-blur-effect-for-excerpts"},"Enable blur effect for excerpts"),(0,o.kt)("p",null,"Set ",(0,o.kt)("strong",{parentName:"p"},"Enable blur effect for excerpts")," to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," if you wish to show 'blurred' content after the excerpt and any common excerpt text."),(0,o.kt)("p",null,"Only 'blurred' text content will be shown, not 'blurred' images."),(0,o.kt)("p",null,"When this option is enabled you can also show the page/post excerpt with a gradient."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h3",{id:"excerpt-gradient-start-color"},"Excerpt gradient start color"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only shown and it's setting applied if ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#enable-blur-effect-for-excerpts",title:"Click to learn how to enable blur effects for excerpts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Enable blur effect for excerpts"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,o.kt)("p",null,"Set for ",(0,o.kt)("strong",{parentName:"p"},"Excerpt gradient start color")," the start color for the excerpt gradient."),(0,o.kt)("p",null,"If no gradient is required when ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#enable-blur-effect-for-excerpts",title:"Click to learn how to enable blur effects for excerpts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Enable blur effect for excerpts"))," is enabled set both gradient start and end color to the same value."),(0,o.kt)("p",null,"This color setting overrides that of your theme CSS or similar."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: #000000")),(0,o.kt)("h3",{id:"excerpt-gradient-end-color"},"Excerpt gradient end color"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only shown and it's setting applied if ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#enable-blur-effect-for-excerpts",title:"Click to learn how to enable blur effects for excerpts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Enable blur effect for excerpts"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,o.kt)("p",null,"Set for ",(0,o.kt)("strong",{parentName:"p"},"Excerpt gradient end color")," the end color for the excerpt gradient."),(0,o.kt)("p",null,"If no gradient is required when ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#enable-blur-effect-for-excerpts",title:"Click to learn how to enable blur effects for excerpts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Enable blur effect for excerpts"))," is enabled set both gradient start and end color to the same value."),(0,o.kt)("p",null,"This color setting overrides that of your theme CSS or similar."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: #ffffff")),(0,o.kt)("h2",{id:"disable-excerpt-links"},"Disable excerpt links"),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Disable excerpt links")," is set to ",(0,o.kt)("strong",{parentName:"p"},"No")," two HTML links will be shown after an excerpt and the common excerpt text."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_excerpts_links.png",alt:"Displayed excerpt links"})),(0,o.kt)("p",null,"The link ",(0,o.kt)("strong",{parentName:"p"},"Please login")," when clicked will redirect the user to the location specified in ",(0,o.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-login-page",title:"Click to learn how to specify your login page"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Select your login page"))),(0,o.kt)("p",null,"The link ",(0,o.kt)("strong",{parentName:"p"},"become a member")," when clicked will redirect the user to the location specified in ",(0,o.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-excerpt-upsell-page",title:"Click to learn how to specify your excerpt upsell page"},(0,o.kt)("strong",{parentName:"a"},'ActiveMember360, Settings, Special Pages, Select your "excerpt" upsell page'))),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Disable excerpt links")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," no links will be shown."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h2",{id:"common-excerpt-text"},"Common excerpt text"),(0,o.kt)("p",null,"Whilst you can define individual excerpts for each page/post there may be some content you wish to show in every excerpt."),(0,o.kt)("p",null,"Define for ",(0,o.kt)("strong",{parentName:"p"},"Common excerpt text")," the content that will be automatically appended to the individual excerpt for each page/post."),(0,o.kt)("p",null,"It will be displayed after the individual excerpt but before 'blurred' content if enabled."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: This is an excerpt. You do not have sufficient rights to view the full content.")))}m.isMDXComponent=!0}}]);