"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[542],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return c}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(o),c=n,k=p["".concat(l,".").concat(c)]||p[c]||m[c]||i;return o?a.createElement(k,r(r({ref:t},h),{},{components:o})):a.createElement(k,r({ref:t},h))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7958:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return h},default:function(){return p}});var a=o(7462),n=o(3366),i=(o(7294),o(3905)),r=["components"],s={id:"webhooks",title:"Webhooks",description:"Learn about Webhooks",sidebar_label:"Overview",slug:"/webhooks"},l=void 0,u={unversionedId:"webhooks/webhooks",id:"webhooks/webhooks",title:"Webhooks",description:"Learn about Webhooks",source:"@site/docs/webhooks/webhooks.mdx",sourceDirName:"webhooks",slug:"/webhooks",permalink:"/docs-activemember360-page/webhooks",tags:[],version:"current",frontMatter:{id:"webhooks",title:"Webhooks",description:"Learn about Webhooks",sidebar_label:"Overview",slug:"/webhooks"},sidebar:"webhooks",next:{title:"mbr_clearuser",permalink:"/docs-activemember360-page/webhooks/mbr_clearuser"}},h=[{value:"Overview",id:"overview",children:[],level:2},{value:"Automation Webhooks",id:"automation-webhooks",children:[{value:"Configuring An Automation Webhook",id:"configuring-an-automation-webhook",children:[],level:3},{value:"Testing An Automation Webhook",id:"testing-an-automation-webhook",children:[],level:3},{value:"Troubleshooting An Automation Webhook",id:"troubleshooting-an-automation-webhook",children:[],level:3},{value:"Using Automation Webhooks in preference to Automatic Webhooks",id:"using-automation-webhooks-in-preference-to-automatic-webhooks",children:[],level:3}],level:2},{value:"Webhook Modules",id:"webhook-modules",children:[],level:2},{value:"Custom Webhook Modules",id:"custom-webhook-modules",children:[],level:2}],m={toc:h};function p(e){var t=e.components,o=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Webhooks enable one application to provide another application with real-time information. A webhook delivers data to other applications as it happens, meaning you get data immediately."),(0,i.kt)("p",null,"Within ActiveCampaign webhooks can be used in two ways as an Automatic Webhook and as an Automation Webhook."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/fundamentals/activecampaign-integration",title:"Click to learn about how ActiveMember360 integrates and communicates with ActiveCampaign"},(0,i.kt)("strong",{parentName:"a"},"Integrating With ActiveCampaign"))," for a detailed explanation."),(0,i.kt)("p",null,"For specific details regarding Automatic Webhooks see ",(0,i.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks",title:"Click to learn how to use the ActiveMember360 Automatic Webhooks Module"},(0,i.kt)("strong",{parentName:"a"},"Automatic Webhooks")),"."),(0,i.kt)("h2",{id:"automation-webhooks"},"Automation Webhooks"),(0,i.kt)("h3",{id:"configuring-an-automation-webhook"},"Configuring An Automation Webhook"),(0,i.kt)("p",null,"The configuration of Automation Webhooks for ActiveCampaign can be found in the following article:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.activecampaign.com/hc/en-us/articles/115000161204-How-can-I-send-a-webhook-in-an-automation-",title:"Click to learn how to send a webhook from an ActiveCampaign automation"},"How To Configure ActiveCampaign Automation Webhooks"))),(0,i.kt)("p",null,"The webhook URL used would be as detailed in ",(0,i.kt)("a",{parentName:"p",href:"webhooks#webhook-modules",title:"Click to learn how to use ActiveMember360 Webhook Modules"},(0,i.kt)("strong",{parentName:"a"},"Webhook Modules"))),(0,i.kt)("h3",{id:"testing-an-automation-webhook"},"Testing An Automation Webhook"),(0,i.kt)("p",null,"The primary purpose of testing the webhook is to determine that any HTTP POST sent by the webhook from ActiveCampaign is successfully received by WordPress/ActiveMember360."),(0,i.kt)("p",null,"The process for testing is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within WordPress enable the ActiveMember360 API/Webhook logging as detailed at ",(0,i.kt)("a",{parentName:"p",href:"/settings/logging",title:"Click to learn about how to configure ActiveMember360 API and Webhook logging"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Logging")),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within ActiveCampaign create a test automation with no start trigger and a single action set using ",(0,i.kt)("strong",{parentName:"p"},"Conditions and Workflow, Webhook")," with the ",(0,i.kt)("strong",{parentName:"p"},"URL to post to")," set as described here ",(0,i.kt)("a",{parentName:"p",href:"/webhooks/contact-push",title:"Click to learn how to use the Contact Push webhook module"},(0,i.kt)("strong",{parentName:"a"},"Contact Push")),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within ActiveCamapign add your test contact to that automation from within the specific contact listing using ",(0,i.kt)("strong",{parentName:"p"},"Automations, Add"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within WordPress navigate to ",(0,i.kt)("a",{parentName:"p",href:"/utilities#apiwebhook-log",title:"Click to learn about how to view/decypher the API log"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, API/Webhook Log")),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Interrogate the log for a recent entry with the method ",(0,i.kt)("inlineCode",{parentName:"p"},"mbr/contact/push"),". If an entry is present the HTTP POST for the webhook was received successfully by ActiveMember360 and all is working correctly."),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"Standard webhook listing in ActiveCampaign",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/webhooks_api_log.png"}),(0,i.kt)("figcaption",null,"API log listing for ActiveMember360 webhook modules")),(0,i.kt)("p",{parentName:"li"},"For a fuller understanding of the log please refer to ",(0,i.kt)("a",{parentName:"p",href:"/utilities#apiwebhook-log",title:"Click to learn about how to view/decypher the API log"},(0,i.kt)("strong",{parentName:"a"},"ActiveMember360, Utilities, API/Webhook Log"))),(0,i.kt)("p",{parentName:"li"},"Please note the HTTP POST may take a short time to arrive within WordPress, but is typically almost instantaneous."))),(0,i.kt)("h3",{id:"troubleshooting-an-automation-webhook"},"Troubleshooting An Automation Webhook"),(0,i.kt)("p",null,"If testing of the automation webhook is not successful it is most likely that your server/website security is such that a plugin, service or firewall on the server is blocking the HTTP POSTs."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Firstly check your server logs to determine where the issue possibly lies."),(0,i.kt)("p",{parentName:"li"},"You should see entries of the form shown below:"),(0,i.kt)("figure",null,(0,i.kt)("img",{alt:"Server log for HTTP POSTs",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/webhooks_server_log.png"}),(0,i.kt)("figcaption",null,"Server log for HTTP POSTs")),(0,i.kt)("p",{parentName:"li"},"Where the identifier:"),(0,i.kt)("p",{parentName:"li"},"A. Is the ActiveCampaign IP address from which it was sent. These should be on your whitelist."),(0,i.kt)("p",{parentName:"li"},"B. Is the date/time sent."),(0,i.kt)("p",{parentName:"li"},"C. Is an identifier string."),(0,i.kt)("p",{parentName:"li"},"D. Is the name of your ActiveCampaign application."),(0,i.kt)("p",{parentName:"li"},"E. Should be 200 and indicates the HTTP POST was successfully received."),(0,i.kt)("p",{parentName:"li"},"If these entries are missing or a different number from 200 is shown there is an issue.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set any security service/plugin or firewall to allow HTTP POSTs from the following wildcards:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"https://yoursite.com/?mbr*")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"https://yoursite.com/mbr/*")),(0,i.kt)("p",{parentName:"li"},"i.e with any URL parameters whose first three characters are mbr followed by any other characters."),(0,i.kt)("p",{parentName:"li"},"Obviously replace ",(0,i.kt)("a",{parentName:"p",href:"https://yoursite.com"},"https://yoursite.com")," with your WordPress site URL as shown in ",(0,i.kt)("strong",{parentName:"p"},"WordPress, Settings, General, Site URL"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set any security service/plugin or firewall to allow HTTP POSTs with blank user agents.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set any security service/plugin or firewall to whitelist the ActiveCampaign IP addresses:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"173.193.9.0/24\n173.193.9.198\n23.20.225.34\n34.192.144.26\n34.199.37.208\n34.230.175.182\n34.233.54.78\n34.233.145.248\n34.233.239.23\n52.7.228.32\n52.45.6.233\n52.45.183.46\n52.55.227.5\n52.72.254.82\n52.86.138.218\n")),(0,i.kt)("p",{parentName:"li"},"This is not a definitive list as ActiveCampaign do not publish the IPs they use. So there well may be others to whitelist but if they are being blocked they can be determined from your security service/plugin or firewall.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Having done the above test again. If you are still having issues please submit a support ticket for us to assist ",(0,i.kt)("a",{parentName:"p",href:"https://docs.activemember360.com/support/",title:"Click to submit a support ticket"},(0,i.kt)("strong",{parentName:"a"},"here")),"."))),(0,i.kt)("h3",{id:"using-automation-webhooks-in-preference-to-automatic-webhooks"},"Using Automation Webhooks in preference to Automatic Webhooks"),(0,i.kt)("p",null,"If you wish to use Automation Webhooks in preference to ",(0,i.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks",title:"Click to learn how to use the ActiveMember360 Automatic Webhooks Module"},(0,i.kt)("strong",{parentName:"a"},"Automatic Webhooks"))," because of the ",(0,i.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks#considerations-when-using-automatic-webhooks",title:"Click to learn about considerations when using the ActiveMember360 Automatic Webhooks Module"},(0,i.kt)("strong",{parentName:"a"},"considerations when using Automatic Webhooks"))," firstly you should ",(0,i.kt)("a",{parentName:"p",href:"/modules/automatic-webhooks#deactivation",title:"Click to learn about how to deactivate automatic webhooks"},(0,i.kt)("strong",{parentName:"a"},"deactivate Automatic Webhooks")),"."),(0,i.kt)("p",null,"Then if either of the following are required use a Webhook URL set within an automation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate a password"),(0,i.kt)("li",{parentName:"ul"},"Ensure contact data is current for a logged in user where it may have been manually changed within ActiveCampaign, or changed by a third party application, or changed by actions in an automation")),(0,i.kt)("p",null,"To generate a password you would use the webhook module ",(0,i.kt)("a",{parentName:"p",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass webhook module"},(0,i.kt)("strong",{parentName:"a"},"mbr_genpass"))," and to push the most current contact data to ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360")," you would use ",(0,i.kt)("a",{parentName:"p",href:"/webhooks/contact-push",title:"Click to learn how to use the Contact Push webhook module"},(0,i.kt)("strong",{parentName:"a"},"Contact Push")),"."),(0,i.kt)("p",null,"These options give total control over when webhooks are used to send HTTP POSTs. Obviously, significant numbers of contacts should not be sent through the automation at the same time, as this could result in the same issues as using Automatic Webhooks."),(0,i.kt)("p",null,"Please note where ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360")," changes the contact data these changes are always current within WordPress and there is no need to use any webhook."),(0,i.kt)("p",null,"So, regarding the use of webhooks the choice is with the user of ",(0,i.kt)("strong",{parentName:"p"},"ActiveMember360"),"."),(0,i.kt)("p",null,"Either use Automatic Webhooks which may result in high volumes of HTTP POSTs being sent to your server, or manually configure Automation Webhooks for more control."),(0,i.kt)("h2",{id:"webhook-modules"},"Webhook Modules"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ActiveMember360")," provides several webhook modules that can be used with ActiveCampaign webhook URLs. Full details and examples of how to use each module are detailed within:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/webhooks/mbr_clearuser",title:"Click to learn how to use the mbr_clearuser webhook module"},(0,i.kt)("strong",{parentName:"a"},"mbr_clearuser"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/webhooks/mbr_genpass",title:"Click to learn how to use the mbr_genpass webhook module"},(0,i.kt)("strong",{parentName:"a"},"mbr_genpass"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/webhooks/mbr_math",title:"Click to learn how to use the mbr_math webhook module"},(0,i.kt)("strong",{parentName:"a"},"mbr_math"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/webhooks/contact-push",title:"Click to learn how to use the Contact Push webhook module"},(0,i.kt)("strong",{parentName:"a"},"Contact Push")))),(0,i.kt)("p",null,"We recommend the webhook modules detailed here are only used with ActiveCampaign automation webhooks."),(0,i.kt)("h2",{id:"custom-webhook-modules"},"Custom Webhook Modules"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ActiveMember360")," includes a capability known as Custom Webhook Modules."),(0,i.kt)("p",null,"This essentially allows a user to program their own webhook module for use with ActiveCampaign automation webhooks to manipulate/reformat/reconfigure ActiveCampaign contact records using ActiveMember360."),(0,i.kt)("p",null,"To be able to use Custom Webhook Modules it requires a knowledge of PHP as they must be programmed using that development language."),(0,i.kt)("p",null,"If you wish to use Custom Webhook Modules and require further details please submit a support ticket ",(0,i.kt)("a",{parentName:"p",href:"https://docs.activemember360.com/support/",title:"Click to submit a support ticket"},(0,i.kt)("strong",{parentName:"a"},"here")),"."))}p.isMDXComponent=!0}}]);