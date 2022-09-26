"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31613],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=m(a),u=o,d=g["".concat(l,".").concat(u)]||g[u]||c[u]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},76808:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={id:"wordpress-login",title:"Controlling Site Access",description:"Gain an understanding of the WordPress login process when using ActiveMember360.",sidebar_label:"Controlling Site Access"},l=void 0,m={unversionedId:"fundamentals/wordpress-login",id:"fundamentals/wordpress-login",title:"Controlling Site Access",description:"Gain an understanding of the WordPress login process when using ActiveMember360.",source:"@site/docs/fundamentals/wordpress-login.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/wordpress-login",permalink:"/fundamentals/wordpress-login",tags:[],version:"current",lastUpdatedAt:1663949688,formattedLastUpdatedAt:"9/23/2022",frontMatter:{id:"wordpress-login",title:"Controlling Site Access",description:"Gain an understanding of the WordPress login process when using ActiveMember360.",sidebar_label:"Controlling Site Access"},sidebar:"fundamentals",previous:{title:"WordPress Roles & Capabilities",permalink:"/fundamentals/wordpress-roles-capabilities"},next:{title:"Overview",permalink:"/fundamentals/controlling-content"}},p={},c=[{value:"ActiveMember360 and WordPress Login",id:"activemember360-and-wordpress-login",level:2},{value:"Login Forms",id:"login-forms",level:2},{value:"Failed Login Attempt",id:"failed-login-attempt",level:2},{value:"Successful Login Attempt",id:"successful-login-attempt",level:2},{value:"Cookies",id:"cookies",level:2}],g={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"activemember360-and-wordpress-login"},"ActiveMember360 and WordPress Login"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is no need for an ActiveCampaign contact to exist as a user within WordPress prior to their first login."),(0,r.kt)("p",{parentName:"div"},"ActiveMember360 will automatically create a WordPress user if one does not already exist during the successful login process."))),(0,r.kt)("p",null,"For an ActiveCampaign contact to be able to login to your WordPress site they must satisfy the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Exist as a contact within ActiveCampaign."),(0,r.kt)("li",{parentName:"ul"},"Input a password that matches the one stored within ActiveCampaign or WordPress if they already exist as a WordPress user."),(0,r.kt)("li",{parentName:"ul"},"Have at least one of the ActiveCampaign tags used to define a membership in ",(0,r.kt)("a",{parentName:"li",href:"/settings/memberships",title:"Click to learn how to configure Memberships"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships"))," unless within ",(0,r.kt)("a",{parentName:"li",href:"/settings/login#allow-login-without-a-membership-tag",title:"Click to learn how to allow a login if the contact does not have a membership tag"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Allow login without a membership tag"))," is set to ",(0,r.kt)("strong",{parentName:"li"},"Yes"),"."),(0,r.kt)("li",{parentName:"ul"},"Not have the ActiveCampaign tag used to ban a contact from logging in to the site as defined at ",(0,r.kt)("a",{parentName:"li",href:"/settings/login#tag-used-to-ban-a-subscriber-from-site",title:"Click to learn how to select a tag that bans a user from logging in to the site"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Tag used to ban a subscriber from site")),".")),(0,r.kt)("p",null,"The only exceptions to the above is if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are using the ActiveMember360 Autologin feature i.e. ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/overview",title:"Click to learn how to allow validated ActiveCampaign contacts to autologin to the WordPress site using a URL or HTML link."},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Modules, Autologin"))," is enabled and the autologin link/redirect is from ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/activecampaign",title:"Click to learn how to use Autologin with ActiveCampaign"},(0,r.kt)("strong",{parentName:"a"},"ActiveCampaign")),", ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/clickbank",title:"Click to learn how to use Autologin with ClickBank"},(0,r.kt)("strong",{parentName:"a"},"ClickBank")),", ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/digistore24",title:"Click to learn how to use Autologin with Digistore24"},(0,r.kt)("strong",{parentName:"a"},"Digistore24")),", ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/jvzoo",title:"Click to learn how to use Autologin with JVZoo"},(0,r.kt)("strong",{parentName:"a"},"JVZoo"))," or ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/thrivecart",title:"Click to learn how to use Autologin with ThriveCart"},(0,r.kt)("strong",{parentName:"a"},"ThriveCart")),". In such a case a password does not need to exist in ActiveCampaign nor a user in WordPress. Additionally if the autologin is from ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/clickbank",title:"Click to learn how to use Autologin with ClickBank"},(0,r.kt)("strong",{parentName:"a"},"ClickBank")),", ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/digistore24",title:"Click to learn how to use Autologin with Digistore24"},(0,r.kt)("strong",{parentName:"a"},"Digistore24")),", ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/jvzoo",title:"Click to learn how to use Autologin with JVZoo"},(0,r.kt)("strong",{parentName:"a"},"JVZoo"))," or ",(0,r.kt)("a",{parentName:"li",href:"/modules/autologin/thrivecart",title:"Click to learn how to use Autologin with ThriveCart"},(0,r.kt)("strong",{parentName:"a"},"ThriveCart"))," an ActiveCampaign contact does not need to exist, as upon successful validation of the autologin URL an ActiveCampaign contact will be created by ActiveMember360.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," also allows a login by a WordPress user who does not exist as a contact within ActiveCampaign."),(0,r.kt)("p",null,"In order to support the above ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," performs it's own authentication process over and above that of WordPress."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," is hooked in to the standard WordPress login process using the WordPress ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/hooks/authenticate/",title:"Click to learn about the WordPress authenticate filter hook"},"authenticate filter hook")," in order to achieve this."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For security reasons a contact should not exist within ActiveCampaign with an email address the same as that of a WordPress administrator user."))),(0,r.kt)("h2",{id:"login-forms"},"Login Forms"),(0,r.kt)("p",null,"The login page for your site can be chosen within ",(0,r.kt)("a",{parentName:"p",href:"/settings/special-pages#select-your-login-page",title:"Click to learn how to set a Login page"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Special Pages, Select your login page")),"."),(0,r.kt)("p",null,"The default WordPress login page is that at ",(0,r.kt)("inlineCode",{parentName:"p"},"wp-login.php")," which has it's own login form."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," also provides a login form that can be used upon any page you chose. It is available using a shortcode, see ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_login_form",title:"Click to learn how to use the [mbr_login_form] shortcode"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Shortcodes, mbr_login_form")),". Similarly there is the ",(0,r.kt)("a",{parentName:"p",href:"/blocks/login",title:"Click to learn how to use the ActiveMember360 Login block"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 Login Block")),"."),(0,r.kt)("p",null,"Using any of the listed login methods above are the most robust and flexible. All of the methods will permit a redirect upon login as defined in ",(0,r.kt)("a",{parentName:"p",href:"/settings/memberships",title:"Click to learn how to configure Memberships"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," is fully integrated with WooCommerce see ",(0,r.kt)("a",{parentName:"p",href:"/extensions/woocommerce/overview"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Extensions, WooCommerce")),". A login using the WooCommerce login form will always redirect to your site's WooCommerce My Account page."),(0,r.kt)("p",null,"Regarding alternative login forms, for example those from other plugins and page builders, if they use the standard WordPress login process are likely to work with ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360"),". However the redirect upon login will be typically controlled by the other plugin or page builder."),(0,r.kt)("h2",{id:"failed-login-attempt"},"Failed Login Attempt"),(0,r.kt)("p",null,"If the login fails the visitor will be shown a message detailing why. The messages are somewhat generic to prevent unauthorised users from knowing exactly why their login attempt failed."),(0,r.kt)("p",null,"The messages typically shown are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ERROR: Incorrect username/password.")," - The incorrect username, email address or password was entered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ERROR: Sorry, you do not have login privileges on this site.")," - The ActiveCampaign contact does not have at least one of the ActiveCampaign tags used to define at least one membership in ",(0,r.kt)("a",{parentName:"li",href:"/settings/memberships",title:"Click to learn how to configure Memberships"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships"))," or ",(0,r.kt)("a",{parentName:"li",href:"/settings/login#allow-login-without-a-membership-tag",title:"Click to learn how to allow a login if the contact does not have a membership tag"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Allow login without a membership tag"))," is set to ",(0,r.kt)("strong",{parentName:"li"},"No"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ERROR: Invalid username, email address or incorrect password.")," - The incorrect username, email address or password was entered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ERROR: An unknown error has occurred during login. Please try again.")," - A WordPress error occured when attempting to create or update the WordPress user.")),(0,r.kt)("h2",{id:"successful-login-attempt"},"Successful Login Attempt"),(0,r.kt)("p",null,"After a successful login the user will either be logged in as a ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#local-wordpress-administrator-user",title:"Click to learn about the WordPress Administrator user type and behaviour"},(0,r.kt)("strong",{parentName:"a"},"administrator user")),", ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#local-wordpress-user",title:"Click to learn about the local WordPress user type and behaviour"},(0,r.kt)("strong",{parentName:"a"},"local user")),", or ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user")),"."),(0,r.kt)("p",null,"The following applies for the ",(0,r.kt)("a",{parentName:"p",href:"/fundamentals/visitor-types#remote-user",title:"Click to learn about the remote user type and behaviour"},(0,r.kt)("strong",{parentName:"a"},"remote user")),"."),(0,r.kt)("p",null,"The logged in user will be immediately redirected in this order of priority:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The redirect on first login as set in ",(0,r.kt)("a",{parentName:"p",href:"/settings/login#page-redirect-on-first-login",title:"Click to learn how to redirect upon the users first ever login"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Page redirect on first login")),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Else the redirect upon login URL as set for the ",(0,r.kt)("a",{parentName:"p",href:"/shortcodes/mbr_login_form",title:"Click to learn how to use the [mbr_login_form] shortcode"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 Shortcode [mbr_login_form]"))," or the ",(0,r.kt)("a",{parentName:"p",href:"/blocks/login",title:"Click to learn how to use the ActiveMember360 Login block"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360 Login Block"))," used to login.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Else the redirect upon login URL as set in ",(0,r.kt)("a",{parentName:"p",href:"/settings/memberships",title:"Click to learn how to configure Memberships"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Memberships, Redirect on login")),"."),(0,r.kt)("p",{parentName:"li"},"The order of Memberships is important when determining the Redirect on login that should take preference. If the logged in user has the ActiveCampaign tags that define multiple memberships the Redirect on login that applies is that specified for the first Membership in the list working from top to bottom that the user belongs to.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Else the site URL as set in ",(0,r.kt)("strong",{parentName:"p"},"WordPress, Settings, General, Site URL"),"."))),(0,r.kt)("p",null,"The logged in user will have access to public content and content to which their ActiveCampaign contact data permits."),(0,r.kt)("p",null,"After a successful login ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," can be configured to run an ActiveCampaign automation defined in ",(0,r.kt)("a",{parentName:"p",href:"/settings/login#automation-to-run-on-login",title:"Click to learn how to run an ActiveCampaign automation after a successful login"},(0,r.kt)("strong",{parentName:"a"},"ActiveMember360, Settings, Login, Automation to run on login")),"."),(0,r.kt)("p",null,"Finally if ",(0,r.kt)("a",{parentName:"p",href:"/settings/login#name-of-last-login-custom-field"},(0,r.kt)("strong",{parentName:"a"},'ActiveMember360, Settings, Login, Name of "last login" custom field'))," is set the user login date for the current session will be saved to the chosen ActiveCampaign field."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"During a successful login the WordPress user ",(0,r.kt)("inlineCode",{parentName:"p"},"first_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"last_name")," are always updated to match the ActiveCampaign contact fields ",(0,r.kt)("inlineCode",{parentName:"p"},"first_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"last_name")," of the contact associated with the WordPress user."))),(0,r.kt)("h2",{id:"cookies"},"Cookies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," uses cookies."),(0,r.kt)("p",null,"The most important cookie, which is created after a successful login, maintains the link between the WordPress user and the ActiveCampaign contact with the same email address. This cookie ",(0,r.kt)("inlineCode",{parentName:"p"},"mbr")," must remain in place."),(0,r.kt)("p",null,"Please ensure that neither your hosting provider, nor cookie consent plugins or services, are removing the ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," cookies, most importantly the ",(0,r.kt)("inlineCode",{parentName:"p"},"mbr")," cookie. They are essential for the correct operation of your site."),(0,r.kt)("p",null,"All ",(0,r.kt)("strong",{parentName:"p"},"ActiveMember360")," cookies are removed after a logout from the WordPress site."),(0,r.kt)("p",null,"The full list of possible cookies all used for functional purposes are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mbr\nmbr_login\nmbr_auto_logout\nmbr_login_attempt\nmbr_first_login_session\nmbr_404_login_redirect\n")))}u.isMDXComponent=!0}}]);