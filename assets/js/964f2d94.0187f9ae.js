"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91722],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return a?n.createElement(f,r(r({ref:t},d),{},{components:a})):n.createElement(f,r({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const s={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},r=void 0,o={unversionedId:"lms/quiz",id:"lms/quiz",title:"Quiz",description:"The ActiveMember360 LMS is currently in beta.",source:"@site/docs/lms/quiz.mdx",sourceDirName:"lms",slug:"/lms/quiz",permalink:"/lms/quiz",draft:!1,tags:[],version:"current",lastUpdatedAt:1678203543,formattedLastUpdatedAt:"Mar 7, 2023",frontMatter:{id:"quiz",title:"Quiz",sidebar_label:"Quiz"},sidebar:"lms",previous:{title:"Lessons",permalink:"/lms/lessons"},next:{title:"User Course Management",permalink:"/lms/user-course-management"}},l={},c=[{value:"Add a new quiz",id:"add-a-new-quiz",level:2},{value:"Basic quiz settings",id:"basic-quiz-settings",level:2},{value:"Enhanced settings",id:"enhanced-settings",level:2},{value:"Quiz passed settings",id:"quiz-passed-settings",level:2},{value:"Quiz not passed settings",id:"quiz-not-passed-settings",level:2},{value:"Failed attempts",id:"failed-attempts",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360 LMS")," is currently in beta.")),(0,i.kt)("h2",{id:"add-a-new-quiz"},"Add a new quiz"),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"How to create a quiz - Create a new quiz",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/lms-create-quiz-1.png"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In WordPress administrator main navigation click ",(0,i.kt)("strong",{parentName:"li"},"AM360 LMS, Quiz"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on Add quiz.")),(0,i.kt)("h2",{id:"basic-quiz-settings"},"Basic quiz settings"),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"How to create a quiz - Basic quiz settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/lms-create-quiz-2.png"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define the questions of the quiz. You can add as many questions and answers as you want."),(0,i.kt)("li",{parentName:"ol"},"See connected lessons. A quiz can be connected to multiple lessons with separate completion status each."),(0,i.kt)("li",{parentName:"ol"},"Define quiz settings as detailed in the following steps.")),(0,i.kt)("h2",{id:"enhanced-settings"},"Enhanced settings"),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"How to create a quiz - Enhanced quiz settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/lms-create-quiz-3.png"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define the percentage of correct answer to pass the quiz."),(0,i.kt)("li",{parentName:"ol"},"Enable limit failed attempts."),(0,i.kt)("li",{parentName:"ol"},"Define the maximum failed attempts if enabled under (2). If the maximum failed attempts limit is reached, the user cannot complete the associated lesson with the consequence of not being able to completing the course.")),(0,i.kt)("h2",{id:"quiz-passed-settings"},"Quiz passed settings"),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"How to create a quiz - Quiz passed settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/lms-create-quiz-4.png"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the tags which should be added to the ActiveCampaign contact when the quiz is passed."),(0,i.kt)("li",{parentName:"ol"},"Select the tags which should be removed from the ActiveCampaign contact when the quiz is passed."),(0,i.kt)("li",{parentName:"ol"},"Select a location to which the user should be redirected when passing the quiz. ",(0,i.kt)("strong",{parentName:"li"},"Default"),": The defined ",(0,i.kt)("strong",{parentName:"li"},"lesson completed")," redirect location of the related lesson."),(0,i.kt)("li",{parentName:"ol"},"Define parameters to be added to the redirect location (HTTP GET).")),(0,i.kt)("h2",{id:"quiz-not-passed-settings"},"Quiz not passed settings"),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"How to create a quiz - Quiz not passed settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/lms-create-quiz-5.png"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the tags which should be added to the ActiveCampaign contact when quiz was not passed. (Added after max. failed attempts has been reached.)"),(0,i.kt)("li",{parentName:"ol"},"Select the tags which should be removed from the ActiveCampaign contact when quiz was not passed. (Removed after max. failed attempts has been reached.)"),(0,i.kt)("li",{parentName:"ol"},"Select a location to which the user should be redirected when passing the quiz. ",(0,i.kt)("strong",{parentName:"li"},"Default"),": no redirect."),(0,i.kt)("li",{parentName:"ol"},"Define parameters to be added to the redirect location (HTTP GET).")),(0,i.kt)("h2",{id:"failed-attempts"},"Failed attempts"),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"How to create a quiz - Failed attempts",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/lms-create-quiz-6.png"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select tags to add to the ActiveCampaign contact after each failed attempt. If max. failed attempts is enabled, the last failed attempt is not included but triggers instead the settings under ",(0,i.kt)("strong",{parentName:"li"},"Quiz not passed -> Add tags")),(0,i.kt)("li",{parentName:"ol"},"Select the tags to be removed from the ActiveCampaign contact after each failed attempt. If max. failed attempts is enabled, the last failed attempt is not included but triggers instead the settings under ",(0,i.kt)("strong",{parentName:"li"},"Quiz not passed -> Remove Tags"))))}p.isMDXComponent=!0}}]);