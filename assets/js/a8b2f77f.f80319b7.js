"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[106],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(v,o(o({ref:t},c),{},{components:n})):i.createElement(v,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1991:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"invoice-settings",title:"Invoice Settings",description:"How to configure the invoice settings of the ActiveMember360 Payment Module.",sidebar_label:"Invoice Settings"},p=void 0,s={unversionedId:"modules/payment/invoice-settings",id:"modules/payment/invoice-settings",title:"Invoice Settings",description:"How to configure the invoice settings of the ActiveMember360 Payment Module.",source:"@site/docs/modules/payment/invoice-settings.mdx",sourceDirName:"modules/payment",slug:"/modules/payment/invoice-settings",permalink:"/docs-activemember360-page/modules/payment/invoice-settings",tags:[],version:"current",frontMatter:{id:"invoice-settings",title:"Invoice Settings",description:"How to configure the invoice settings of the ActiveMember360 Payment Module.",sidebar_label:"Invoice Settings"},sidebar:"modules",previous:{title:"Stripe Settings",permalink:"/docs-activemember360-page/modules/payment/stripe-settings"},next:{title:"Refund Settings",permalink:"/docs-activemember360-page/modules/payment/refund-settings"}},c=[],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("figure",null,(0,r.kt)("img",{alt:"Steps to define Payment Module invoice settings",src:"https://d1toiz2vvvafqj.cloudfront.net/docs/images/payment_module_settings_invoice.png"}),(0,r.kt)("figcaption",null,"Steps to define Payment Module invoice settings")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In WordPress administrator main navigation click ",(0,r.kt)("strong",{parentName:"p"},"Payment, Settings"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360 Payment Settings")," tabs click ",(0,r.kt)("strong",{parentName:"p"},"Invoices"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your optional ",(0,r.kt)("strong",{parentName:"p"},"Invoice ID prefix"),"."),(0,r.kt)("p",{parentName:"li"},"For example entering ",(0,r.kt)("inlineCode",{parentName:"p"},"AM360-")," will result in invoices and refund receipts having an identifier such as AM360-1 or AM360-1234 i.e. the ",(0,r.kt)("strong",{parentName:"p"},"Invoice ID prefix")," followed by the unique invoice ID number."),(0,r.kt)("p",{parentName:"li"},"Leave the ",(0,r.kt)("strong",{parentName:"p"},"Invoice ID prefix")," empty if an invoice/refund prefix is not needed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Invoices IDs are created sequentially starting with an ID of 1."),(0,r.kt)("p",{parentName:"li"},"If you want the next invoice ID to be created to be a specific integer value select that value less 1 as the ",(0,r.kt)("strong",{parentName:"p"},"Reset Invoice ID")," then click on the button labelled ",(0,r.kt)("strong",{parentName:"p"},"Reset Invoice IDs"),"."),(0,r.kt)("p",{parentName:"li"},"For example If you wish to reset your invoice IDs after testing and you need to restart with invoice ID 1, enter 0."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Clicking on the button labelled ",(0,r.kt)("strong",{parentName:"p"},"Reset Invoice IDs")," will lose any unsaved changes."),(0,r.kt)("p",{parentName:"div"},"Please ensure that you have clicked on ",(0,r.kt)("strong",{parentName:"p"},"Save Settings")," prior to clicking on the button labelled ",(0,r.kt)("strong",{parentName:"p"},"Reset Invoice IDs"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your chosen ",(0,r.kt)("strong",{parentName:"p"},"Subject")," used for all invoice emails."),(0,r.kt)("p",{parentName:"li"},"You can use the following placeholders to pull invoice data dynamically into the email subject:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"%%invoice_id%%"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Invoice Template")," enter your own template HTML/CSS for your invoices or adjust that provided to your own needs."),(0,r.kt)("p",{parentName:"li"},"This HTML/CSS will be used in the invoice emails sent to your customers as well as for those displayed within ActiveMember360."),(0,r.kt)("p",{parentName:"li"},"You can use the following placeholders to pull invoice data dynamically into your template:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"%%invoice_id%%"),(0,r.kt)("li",{parentName:"ul"},"%%company_address%%"),(0,r.kt)("li",{parentName:"ul"},"%%company_logo%%"),(0,r.kt)("li",{parentName:"ul"},"%%billing_address%%"),(0,r.kt)("li",{parentName:"ul"},"%%order_id%%"),(0,r.kt)("li",{parentName:"ul"},"%%order_date%%"),(0,r.kt)("li",{parentName:"ul"},"%%company_vat_id%%"),(0,r.kt)("li",{parentName:"ul"},"%%order_total%%"),(0,r.kt)("li",{parentName:"ul"},"%%item_name%%"),(0,r.kt)("li",{parentName:"ul"},"%%item_price%%"),(0,r.kt)("li",{parentName:"ul"},"%%net_total%%"),(0,r.kt)("li",{parentName:"ul"},"%%sales_tax%%"),(0,r.kt)("li",{parentName:"ul"},"%%refund_total%%"),(0,r.kt)("li",{parentName:"ul"},"%%order_refunds%%"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Settings"),"."))))}u.isMDXComponent=!0}}]);