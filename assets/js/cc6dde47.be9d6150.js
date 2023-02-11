"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6265],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"excerpts",title:"Excerpts",description:"How to configure the ActiveMember360 Content Access Options.",sidebar_label:"Excerpts"},l=void 0,p={unversionedId:"settings/excerpts",id:"settings/excerpts",title:"Excerpts",description:"How to configure the ActiveMember360 Content Access Options.",source:"@site/docs/settings/excerpts.mdx",sourceDirName:"settings",slug:"/settings/excerpts",permalink:"/settings/excerpts",tags:[],version:"current",lastUpdatedAt:1669117745,formattedLastUpdatedAt:"11/22/2022",frontMatter:{id:"excerpts",title:"Excerpts",description:"How to configure the ActiveMember360 Content Access Options.",sidebar_label:"Excerpts"},sidebar:"settings",previous:{title:"Cache",permalink:"/settings/cache"},next:{title:"Amazon S3",permalink:"/settings/amazon-s3"}},c={},m=[{value:"Force excerpts at all times",id:"force-excerpts-at-all-times",level:2},{value:"Max. length for WP-generated excerpts",id:"max-length-for-wp-generated-excerpts",level:2},{value:"Max. length for WP-generated excerpts on archive pages",id:"max-length-for-wp-generated-excerpts-on-archive-pages",level:2},{value:"Enable blur effect for excerpts",id:"enable-blur-effect-for-excerpts",level:2},{value:"Excerpt gradient start color",id:"excerpt-gradient-start-color",level:3},{value:"Excerpt gradient end color",id:"excerpt-gradient-end-color",level:3},{value:"Disable excerpt links",id:"disable-excerpt-links",level:2},{value:"Disable common excerpt text and links on archive pages",id:"disable-common-excerpt-text-and-links-on-archive-pages",level:2},{value:"Common excerpt text",id:"common-excerpt-text",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To fully understand the purpose of excerpts and how they function with ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360")," please refer to ",(0,o.kt)("a",{parentName:"p",href:"/fundamentals/excerpts",title:"Click to gain a fuller understanding of WordPress excerpts and how they are used with ActiveMember360"},(0,o.kt)("strong",{parentName:"a"},"WordPress Excerpts")),"."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Configure the ActiveMember360 Excerpts settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_excerpts.png"}),(0,o.kt)("figcaption",null,"Configure the ActiveMember360 Excerpts settings")),(0,o.kt)("h2",{id:"force-excerpts-at-all-times"},"Force excerpts at all times"),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Force excerpts at all times")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," ",(0,o.kt)("strong",{parentName:"p"},"ActiveMember360")," will automatically create an excerpt for pages and posts that do not have one."),(0,o.kt)("p",null,"It will use the content of the page/post to generate the excerpt."),(0,o.kt)("p",null,"The maximum length of the automatically generated excerpt is determined by the setting of ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#max-length-for-wp-generated-excerpts",title:"Click to learn how to configure the maximum length of automatically generated excerpts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Max. length for WP-generated excerpts")),"."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Beware")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please take particular care when using this option with page builders or content containing shortcodes."),(0,o.kt)("p",{parentName:"div"},"You should check you do not expose more content in the excerpt than desired."),(0,o.kt)("p",{parentName:"div"},"In all cases it is best to use a manual excerpt for each page/post."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h2",{id:"max-length-for-wp-generated-excerpts"},"Max. length for WP-generated excerpts"),(0,o.kt)("p",null,"In various locations in your WordPress site WordPress will automatically generate an excerpt if one hasn\u2019t be defined."),(0,o.kt)("p",null,"By default, WordPress creates excerpts using the first 55 words of a page/post. The excerpt displayed is stripped of HTML tags to prevent any incorrectly formatted HTML code."),(0,o.kt)("p",null,"Set ",(0,o.kt)("strong",{parentName:"p"},"Max. length for WP-generated excerpts")," to the maximum length for your auto-generated excerpts to better suit your requirements."),(0,o.kt)("p",null,"The excerpt is this maximum length when visiting the page/post. It does not apply for excerpts shown on the archive page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: 55, minimum allowed must be greater than 0")),(0,o.kt)("h2",{id:"max-length-for-wp-generated-excerpts-on-archive-pages"},"Max. length for WP-generated excerpts on archive pages"),(0,o.kt)("p",null,"In various locations in your WordPress site, such as an archive or category view of multiple posts, WordPress will automatically generate an excerpt if one hasn\u2019t be defined."),(0,o.kt)("p",null,"By default, WordPress creates excerpts using the first 55 words of a page/post. The excerpt displayed is stripped of HTML tags to prevent any incorrectly formatted HTML code."),(0,o.kt)("p",null,"Set ",(0,o.kt)("strong",{parentName:"p"},"Max. length for WP-generated excerpts on archive pages")," to the maximum length for your auto-generated excerpts to better suit your requirements. A value of ",(0,o.kt)("strong",{parentName:"p"},"0")," can be entered to prevent an excerpt from showing on the archive page just ",(0,o.kt)("strong",{parentName:"p"},"Read more")," text."),(0,o.kt)("p",null,"The excerpt is this maximum length when shown on the archive page. It does not apply for excerpts shown when visiting the page/post."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: 55, minimum allowed 0")),(0,o.kt)("h2",{id:"enable-blur-effect-for-excerpts"},"Enable blur effect for excerpts"),(0,o.kt)("p",null,"Set ",(0,o.kt)("strong",{parentName:"p"},"Enable blur effect for excerpts")," to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," if you wish to show 'blurred' content after the excerpt and any common excerpt text."),(0,o.kt)("p",null,"Only 'blurred' text content will be shown, not 'blurred' images."),(0,o.kt)("p",null,"When this option is enabled you can also show the page/post excerpt with a gradient."),(0,o.kt)("p",null,"The blur effect is not shown for excerpts displayed on archive pages."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h3",{id:"excerpt-gradient-start-color"},"Excerpt gradient start color"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only shown and it's setting applied if ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#enable-blur-effect-for-excerpts",title:"Click to learn how to enable blur effects for excerpts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Enable blur effect for excerpts"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,o.kt)("p",null,"Set for ",(0,o.kt)("strong",{parentName:"p"},"Excerpt gradient start color")," the start color for the excerpt gradient."),(0,o.kt)("p",null,"If no gradient is required when ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#enable-blur-effect-for-excerpts",title:"Click to learn how to enable blur effects for excerpts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Enable blur effect for excerpts"))," is enabled set both gradient start and end color to the same value."),(0,o.kt)("p",null,"This color setting overrides that of your theme CSS or similar."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: #000000")),(0,o.kt)("h3",{id:"excerpt-gradient-end-color"},"Excerpt gradient end color"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is only shown and it's setting applied if ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#enable-blur-effect-for-excerpts",title:"Click to learn how to enable blur effects for excerpts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Enable blur effect for excerpts"))," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes"),"."))),(0,o.kt)("p",null,"Set for ",(0,o.kt)("strong",{parentName:"p"},"Excerpt gradient end color")," the end color for the excerpt gradient."),(0,o.kt)("p",null,"If no gradient is required when ",(0,o.kt)("a",{parentName:"p",href:"/settings/excerpts#enable-blur-effect-for-excerpts",title:"Click to learn how to enable blur effects for excerpts"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Excerpts, Enable blur effect for excerpts"))," is enabled set both gradient start and end color to the same value."),(0,o.kt)("p",null,"This color setting overrides that of your theme CSS or similar."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: #ffffff")),(0,o.kt)("h2",{id:"disable-excerpt-links"},"Disable excerpt links"),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Disable excerpt links")," is set to ",(0,o.kt)("strong",{parentName:"p"},"No")," two HTML links will be shown after an excerpt and the common excerpt text."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_excerpts_links.png",alt:"Displayed excerpt links"})),(0,o.kt)("p",null,"The link ",(0,o.kt)("strong",{parentName:"p"},"Please login")," when clicked will redirect the user to the location specified in ",(0,o.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-login-page",title:"Click to learn how to specify your login page"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Select your login page"))),(0,o.kt)("p",null,"The link ",(0,o.kt)("strong",{parentName:"p"},"become a member")," when clicked will redirect the user to the location specified in ",(0,o.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-excerpt-upsell-page",title:"Click to learn how to specify your excerpt upsell page"},(0,o.kt)("strong",{parentName:"a"},'ActiveMember360, Settings, Special Pages, Select your "excerpt" upsell page'))),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Disable excerpt links")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," no links will be shown."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h2",{id:"disable-common-excerpt-text-and-links-on-archive-pages"},"Disable common excerpt text and links on archive pages"),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Disable common excerpt text and links")," is set to ",(0,o.kt)("strong",{parentName:"p"},"No")," the common excerpt text and two HTML links will be shown after each excerpt display on the archive page."),(0,o.kt)("p",null,"The link ",(0,o.kt)("strong",{parentName:"p"},"Please login")," when clicked will redirect the user to the location specified in ",(0,o.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-login-page",title:"Click to learn how to specify your login page"},(0,o.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Select your login page"))),(0,o.kt)("p",null,"The link ",(0,o.kt)("strong",{parentName:"p"},"become a member")," when clicked will redirect the user to the location specified in ",(0,o.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-excerpt-upsell-page",title:"Click to learn how to specify your excerpt upsell page"},(0,o.kt)("strong",{parentName:"a"},'ActiveMember360, Settings, Special Pages, Select your "excerpt" upsell page'))),(0,o.kt)("p",null,"When ",(0,o.kt)("strong",{parentName:"p"},"Disable excerpt text and links on archive pages")," is set to ",(0,o.kt)("strong",{parentName:"p"},"Yes")," no links will be shown, nor the common excerpt text."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: No")),(0,o.kt)("h2",{id:"common-excerpt-text"},"Common excerpt text"),(0,o.kt)("p",null,"Whilst you can define individual excerpts for each page/post there may be some content you wish to show in every excerpt."),(0,o.kt)("p",null,"Define for ",(0,o.kt)("strong",{parentName:"p"},"Common excerpt text")," the content that will be automatically appended to the individual excerpt for each page/post."),(0,o.kt)("p",null,"It will be displayed after the individual excerpt but before 'blurred' content if enabled."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default: This is an excerpt. You do not have sufficient rights to view the full content.")))}u.isMDXComponent=!0}}]);