"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1196],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"amazon-s3",title:"Amazon S3",description:"How to configure the ActiveMember360 Amazon S3/Cloudfront expiring link options.",sidebar_label:"Amazon S3"},l=void 0,c={unversionedId:"settings/amazon-s3",id:"settings/amazon-s3",title:"Amazon S3",description:"How to configure the ActiveMember360 Amazon S3/Cloudfront expiring link options.",source:"@site/docs/settings/amazon-s3.mdx",sourceDirName:"settings",slug:"/settings/amazon-s3",permalink:"/settings/amazon-s3",tags:[],version:"current",lastUpdatedAt:1644953076,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"amazon-s3",title:"Amazon S3",description:"How to configure the ActiveMember360 Amazon S3/Cloudfront expiring link options.",sidebar_label:"Amazon S3"},sidebar:"settings",previous:{title:"Excerpts",permalink:"/settings/excerpts"},next:{title:"Miscellaneous",permalink:"/settings/miscellaneous"}},p={},m=[{value:"S3 access key.",id:"s3-access-key",level:2},{value:"S3 secret key.",id:"s3-secret-key",level:2},{value:"Default expiration in seconds",id:"default-expiration-in-seconds",level:2},{value:"Default S3 host",id:"default-s3-host",level:2},{value:"Default S3 bucket",id:"default-s3-bucket",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ActiveMember360 provides an integration with Amazon S3/Cloudfront to generate self expiring URLs for Amazon stored assets."),(0,r.kt)("p",null,"These assets could be as an example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audio Files"),(0,r.kt)("li",{parentName:"ul"},"Video Files"),(0,r.kt)("li",{parentName:"ul"},"PDF Files"),(0,r.kt)("li",{parentName:"ul"},"etc.")),(0,r.kt)("p",null,"The purpose of a self expiring link is that the link only has a fixed lifespan. After a given period the link will no longer allow access to the file. It therefore protects access to assets from the sharing links. ActiveMember360 cannot prevent the downloading of files however using this method."),(0,r.kt)("p",null,"The generation of self expiring links is available when using the ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_s3_link",title:"Click to learn how to configure the ActiveMember360 [mbr_s3_link] shortcode"},(0,r.kt)("strong",{parentName:"a"},"[mbr_s3_link]"))," shortcode."),(0,r.kt)("p",null,"In order to make the use of the ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_s3_link",title:"Click to learn how to configure the ActiveMember360 [mbr_s3_link] shortcode"},(0,r.kt)("strong",{parentName:"a"},"[mbr_s3_link]"))," shortcode more streamlined you can define a set of default settings for accessing the files within your Amazon AWS S3/Cloudfront account as detailed below."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently ActiveMember360 only supports Amazon S3/Cloudfront when using an Amazon S3 region that supports Signature Version 2 see ",(0,r.kt)("a",{parentName:"p",href:"https//docs.aws.amazon.com/general/latest/gr/signature-version-2.html",title:"Click to learn about Amazon S3 Regions & Signatures"},"Signature Version 2 signing process"),"."),(0,r.kt)("p",{parentName:"div"},"Amazon S3 supports both virtual-hosted\u2013style and path-style URLs to access a bucket. However ActiveMember360 constructs virtual-hosted\u2013style URLs see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html",title:"Click to learn about Amazon S3 Virtual Hosting"},"Virtual hosting of buckets"),"."),(0,r.kt)("p",{parentName:"div"},"The reason being virtual hosted style URLs are not dependent upon the region of the bucket."))),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Configure the ActiveMember360 Amazon S3/Cloudfront settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/settings_login.png"}),(0,r.kt)("figcaption",null,"Configure the ActiveMember360 Amazon S3/Cloudfront settings")),(0,r.kt)("h2",{id:"s3-access-key"},"S3 access key."),(0,r.kt)("p",null,"Specify for ",(0,r.kt)("strong",{parentName:"p"},"S3 access key")," your S3 access key as provided by Amazon AWS."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you do not know this or have yet to create one you will need to generate a new key from within your Amazon AWS account."),(0,r.kt)("p",{parentName:"div"},"When logged in to AWS go to My Security Credentials, in the drop down on your name top right. This takes you to IAM."),(0,r.kt)("p",{parentName:"div"},"Then to Access Keys. Then Create New Access Key as required."),(0,r.kt)("p",{parentName:"div"},"This creates a new root user access key."))),(0,r.kt)("h2",{id:"s3-secret-key"},"S3 secret key."),(0,r.kt)("p",null,"Specify for ",(0,r.kt)("strong",{parentName:"p"},"S3 secret key")," your S3 secret key as provided by Amazon AWS."),(0,r.kt)("p",null,"If you do not know this or have yet to create one you generate the key from within your Amazon AWS account as detailed for ",(0,r.kt)("a",{parentName:"p",href:"/settings/amazon-s3#s3-access-key",title:"Click to learn how to configure the ActiveMember360 Amazon S3/Cloudfront default access key"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Amazon S3, S3 access key")),"."),(0,r.kt)("h2",{id:"default-expiration-in-seconds"},"Default expiration in seconds"),(0,r.kt)("p",null,"Specify for ",(0,r.kt)("strong",{parentName:"p"},"Default expiration in seconds")," the number of seconds after which any generated link should expire."),(0,r.kt)("p",null,"The default expiration will apply for all your expiring links. If not specified 300 seconds will be used."),(0,r.kt)("p",null,"This can be overriden for any ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_s3_link",title:"Click to learn how to configure the ActiveMember360 [mbr_s3_link] shortcode"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"[mbr_s3_link]")))," shortcode by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"expire")," parameter."),(0,r.kt)("h2",{id:"default-s3-host"},"Default S3 host"),(0,r.kt)("p",null,"Specify for ",(0,r.kt)("strong",{parentName:"p"},"Default S3 host")," the full CNAME to your S3 host, excluding http:// or https://."),(0,r.kt)("p",null,"Typically this will be ",(0,r.kt)("inlineCode",{parentName:"p"},"s3.amazonaws.com")),(0,r.kt)("p",null,"This can be overriden for any ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_s3_link",title:"Click to learn how to configure the ActiveMember360 [mbr_s3_link] shortcode"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"[mbr_s3_link]")))," shortcode by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," parameter."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When using Cloudfront the ",(0,r.kt)("strong",{parentName:"p"},"Default S3 host")," should always be specified as ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudfront.net")))),(0,r.kt)("h2",{id:"default-s3-bucket"},"Default S3 bucket"),(0,r.kt)("p",null,"Specify for ",(0,r.kt)("strong",{parentName:"p"},"Default S3 bucket")," the name of your default S3 bucket."),(0,r.kt)("p",null,"This can be overriden for any ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_s3_link",title:"Click to learn how to configure the ActiveMember360 [mbr_s3_link] shortcode"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"[mbr_s3_link]")))," shortcode by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket")," parameter."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When using Cloudfront the ",(0,r.kt)("strong",{parentName:"p"},"Default S3 bucket")," must be configured to the Cloudfront sub-domain name which is typically an alphanumeric lowercase string."))))}u.isMDXComponent=!0}}]);