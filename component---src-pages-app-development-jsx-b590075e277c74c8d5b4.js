(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[896],{395:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0,a.default=void 0;var s=n(t(7294)),i=n(t(1932)),r=n(t(2728)),l=t(970),c=function(e){return s.default.useContext(l.OptionsContext).useAutoGen?s.default.createElement(i.default,e):s.default.createElement(r.default,e)};a.default=c},1932:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0,a.default=void 0;var s=n(t(434)),i=n(t(7071)),r=n(t(7294)),l=n(t(5697)),c=t(1082),o=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],u=function(e){var a=e.title,t=e.crumbs,n=e.crumbLabel,l=e.crumbSeparator,u=e.disableLinks,d=e.hiddenCrumbs,p=(0,i.default)(e,o);return r.default.createElement(r.default.Fragment,null,a&&r.default.createElement("span",{className:"breadcrumb__title"},a),r.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},r.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(e,a){return d.includes(e.pathname)?null:r.default.createElement(r.default.Fragment,{key:a+"-"+e.pathname},!u.includes(e.pathname)&&r.default.createElement("li",{className:"breadcrumb__list__item"},r.default.createElement(c.Link,(0,s.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===t.length-1?"page":null},p),n&&a===t.length-1?n:e.crumbLabel)),u.includes(e.pathname)&&r.default.createElement("li",{className:"breadcrumb__list__item"},r.default.createElement("span",(0,s.default)({className:"breadcrumb__link__disabled"},p),n&&a===t.length-1?n:e.crumbLabel)),a===t.length-1?null:r.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},l))})))))};u.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},u.propTypes={title:l.default.string,crumbSeparator:l.default.oneOfType([l.default.string,l.default.element]),crumbs:l.default.arrayOf(l.default.shape({location:l.default.shape(),pathname:l.default.string.isRequired})).isRequired,crumbLabel:l.default.string,disableLinks:l.default.arrayOf(l.default.string),hiddenCrumbs:l.default.arrayOf(l.default.string)};var d=u;a.default=d},2728:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0,a.default=void 0;var s=n(t(434)),i=n(t(7071)),r=n(t(7294)),l=n(t(5697)),c=t(1082),o=t(970),u=n(t(1775)),d=["title","location","crumbLabel","crumbSeparator"],p=function(e){var a=e.title,t=e.location,n=e.crumbLabel,l=e.crumbSeparator,p=(0,i.default)(e,d),m=r.default.useContext(o.OptionsContext).usePathPrefix,f=(0,u.default)({location:(0,s.default)({},t,{pathname:m?t.pathname.replace(new RegExp("^"+m),""):t.pathname}),crumbLabel:n,crumbSeparator:l}).crumbs,b=void 0===f?[]:f;return r.default.createElement(r.default.Fragment,null,a&&r.default.createElement("span",{className:"breadcrumb__title"},a),r.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},r.default.createElement("ol",{className:"breadcrumb__list"},b.map((function(e,a){return r.default.createElement("li",{className:"breadcrumb__item",key:a},r.default.createElement(c.Link,(0,s.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===b.length-1?"page":null},p),e.crumbLabel),a===b.length-1?null:r.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};p.defaultProps={title:"",crumbSeparator:" / "},p.propTypes={location:l.default.shape().isRequired,crumbLabel:l.default.string.isRequired,title:l.default.string,crumbSeparator:l.default.string};var m=p;a.default=m},3172:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0;var s=n(t(395));a.Breadcrumb=s.default;var i=n(t(1932));a.AutoGenCrumb=i.default;var r=t(2623);a.BreadcrumbContext=r.BreadcrumbContext,a.BreadcrumbConsumer=r.BreadcrumbConsumer,a.BreadcrumbProvider=r.BreadcrumbProvider;var l=n(t(1775));a.useBreadcrumb=l.default},1775:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0,a.default=void 0;var s=n(t(7294)),i=t(2623),r=function(e){var a=e.location,t=e.crumbLabel,n=e.crumbSeparator,r=s.default.useContext(i.BreadcrumbContext),l=r.crumbs,c=r.updateCrumbs;return s.default.useEffect((function(){c({location:a,crumbLabel:t,crumbSeparator:n})}),[a,t,n,c]),{crumbs:l}};a.default=r},3845:function(e,a,t){"use strict";var n=t(3172);a.aG=n.Breadcrumb,n.BreadcrumbContext,n.BreadcrumbConsumer,n.BreadcrumbProvider,n.useBreadcrumb,n.AutoGenCrumb},3486:function(e,a,t){"use strict";t.d(a,{Z:function(){return f}});var n,s,i=t(3845),r=t(8837),l=t(1880),c=t(295),o=t.p+"static/bg-758d523f6b3409e21b46a88c8d092af4.jpg",u=c.ZP.div(n||(n=(0,l.Z)(["\n    background-color: #fafafa;\n    position: relative;\n    padding: 60px 0px;\n    background-image: url(",");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    overflow: hidden;\n    .shape {\n        position: absolute;\n        z-index: 1;\n    }\n    .shape1 {\n        top: -54px;\n        left: -42px;\n    }\n    .shape2 {\n        top: auto;\n        bottom: -54px;\n        right: -42px;\n    }\n    "," {\n        padding: 120px 0px;\n        .shape1 {\n            top: 0;\n            left: 0;\n        }\n        .shape2 {\n            top: auto;\n            bottom: 0;\n            right: 0;\n        }\n    }\n"])),o,c.Uh.large),d=c.ZP.div(s||(s=(0,l.Z)(["\n    text-align: center;\n    .breadcrumb__title {\n        color: #fff;\n        font-weight: 700;\n        line-height: 1.545;\n        font-size: 35px;\n        font-family: ",";\n        ",' {\n            font-size: 55px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            padding-left: 0;\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 15px;\n                font-weight: 500;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active,\n                &[aria-current="page"] {\n                    font-weight: 900;\n                    background: ',";\n                    -webkit-background-clip: text;\n                    -webkit-text-fill-color: transparent;\n                }\n            }\n        }\n    }\n"])),(0,c.R)("fonts.heading"),c.Uh.large,(0,c.R)("colors.gradient")),p=t(3723),m=t(4382),f=function(e){var a=e.title,n=(e.crumbLabel,e.location),s=e.pageContext.breadcrumb.crumbs,l=n.pathname.toLowerCase().split("/"),c=l[l.length-1].split("-");return(0,m.tZ)(u,null,(0,m.tZ)("div",{className:"shape shape1"},(0,m.tZ)(p.S,{src:"../../data/images/bread/1.png",alt:"",__imageData:t(506)})),(0,m.tZ)("div",{className:"shape shape2"},(0,m.tZ)(p.S,{src:"../../data/images/bread/2.png",alt:"",__imageData:t(6740)})),(0,m.tZ)(r.Z,null,(0,m.tZ)(d,null,(0,m.tZ)(i.aG,{title:a,crumbs:s,crumbLabel:c.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))}},5726:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return m}});var n=t(4560),s=t(1749),i=t(3486),r=t(2841),l=t(7294),c=JSON.parse('{"TN":"Types of Apps","uG":"We Help You To Get Best Services","Oc":"FEATURES","WL":"There are several types of mobile apps, including","q7":[{"id":1,"item":"User Authentication: Allows users to create an account, log in, and securely access their personal information"},{"id":2,"item":"Push Notifications: Sends notifications to users, alerting them to new information or updates within the app"},{"id":3,"item":"User Profile: Allows users to view and manage their personal information, such as their name, profile picture, and contact details"},{"id":4,"item":"Search Functionality: Enables users to search for specific content or information within the app"},{"id":5,"item":"Social Sharing: Allows users to share content, such as photos, videos, or links, with their friends and followers on social media platforms"},{"id":6,"item":"GPS/Location Services: Uses GPS or other location-based services to provide information or directions to users based on their location"},{"id":7,"item":"Chat/Messaging: Provides a real-time chat or messaging interface, allowing users to communicate with each other within the app."},{"id":8,"item":"Multi-Language Support: Supports multiple languages, making the app accessible to a wider audience."},{"id":9,"item":"Analytics: Collects and analyzes data about how users interact with the app, helping developers to improve its performance and user experience."}],"QD":"These are just a few examples of the many features that a mobile app can have. The specific features of an app will depend on its intended use and the needs of its target audience.","ps":"We Help You To Get Best Services","mp":"WHY US","Wu":"There are several reasons why you might choose us","lj":[{"id":1,"item":"Experience"},{"id":2,"item":"Skills"},{"id":3,"item":"Communication"},{"id":4,"item":"Availability"},{"id":5,"item":"Cost"},{"id":6,"item":"Reputation"},{"id":7,"item":"Cultural Fit"}]}'),o=JSON.parse('{"KX":[{"title":"Native apps","description":"These are apps that are developed specifically for one platform, such as iOS or Android, using the programming language and tools that are native to that platform."},{"title":"Hybrid apps","description":"These are apps that are built using a combination of native and web technologies. They run in a web view within a native app and have access to native device features."},{"title":"Progressive web apps (PWA)","description":"These are web applications that have the features and functionality of a native app. They can be installed on a device and run in a web view without the need for an app store."},{"title":"Cross-platform apps","description":"These are apps that are built using cross-platform development tools, such as React Native or Xamarin, and can run on multiple platforms with a single codebase."},{"title":"Gaming apps","description":"These are apps that are designed for entertainment and gaming purposes. They can range from simple arcade games to complex strategy games."},{"title":"Social media apps","description":"These are apps that allow users to connect with others and share content, such as photos, videos, and messages. Examples include Facebook, Instagram, and Snapchat."},{"title":"Lifestyle apps","description":"These are apps that help users with their day-to-day activities, such as shopping, organizing, and wellness. Examples include shopping apps like Amazon, and health and fitness apps like MyFitnessPal."},{"title":"Utilities apps","description":" These are apps that provide practical tools and services to users, such as weather apps, calculator apps, and flashlight apps."},{"title":"Education and reference apps","description":"These are apps that provide educational content, such as language learning apps, and reference information, such as dictionary and encyclopedia apps."},{"title":"Business and productivity apps","description":"These are apps that help users with their work and business tasks, such as email and calendar apps, project management apps, and office suite apps."}]}'),u=t(4382);function d(){return(0,u.tZ)("div",{className:"row"},o.KX.map((function(e,a){return(0,u.tZ)("div",{key:a,className:"col-md-4 col-sm-4 col-xs-6"},(0,u.tZ)("div",{className:"card"},(0,u.tZ)("div",{className:"card-body"},(0,u.tZ)("h5",{className:"card-title"},e.title),(0,u.tZ)("p",{className:"card-text"},e.description))))})))}function p(){return(0,u.tZ)(l.Fragment,null,(0,u.tZ)("div",{className:"services-page-container-1"},(0,u.tZ)("div",{className:" container"},(0,u.tZ)("div",{className:"api-types-accordion app-dev-section"},(0,u.tZ)("h2",{className:""},c.TN)))),(0,u.tZ)("div",{className:"services-page-container-2 "},(0,u.tZ)("div",{className:"container"},(0,u.tZ)("div",{className:"get-service-section"},(0,u.tZ)("h5",{className:""},c.Oc),(0,u.tZ)("h2",{className:"services-page-subtitle"},c.uG),(0,u.tZ)("p",null,c.WL),(0,u.tZ)("div",{className:"services-page-section"},(0,u.tZ)("ul",{className:""},c.q7.map((function(e,a){return(0,u.tZ)("li",{key:a.id},(0,u.tZ)("i",{className:" fas fa-check"}),e.item)}))),(0,u.tZ)("p",null,c.QD))))),(0,u.tZ)("div",{className:"services-page-container-3"},(0,u.tZ)("div",{className:"container "},(0,u.tZ)("h2",{className:"services-page-subtitle"},c.TN),(0,u.tZ)("p",null,c.WL),(0,u.tZ)(d,null))),(0,u.tZ)("div",{className:"services-page-container app-development-sec "},(0,u.tZ)("div",{className:"container"},(0,u.tZ)("div",{className:"app-dev-inn-con"},(0,u.tZ)("h5",{className:""},c.mp),(0,u.tZ)("h2",{className:"services-page-subtitle"},c.ps),(0,u.tZ)("p",null,c.Wu),(0,u.tZ)("div",{className:"services-page-list"},(0,u.tZ)("ul",{className:"app-dev-page-section"},c.lj.map((function(e,a){return(0,u.tZ)("li",{key:a.id},(0,u.tZ)("i",{className:" fas fa-check"}),e.item)}))))))))}var m=function(e){var a,t=e.data,l=e.location,c=e.pageContext,o=(0,r.normalizedData)((null==t||null===(a=t.allGeneral)||void 0===a?void 0:a.nodes)||[]);return(0,u.tZ)(n.Z,{data:Object.assign({},o.menu,o.footer)},(0,u.tZ)(s.Z,{title:"Services",pathname:"/"}),(0,u.tZ)(i.Z,{pageContext:c,location:l,title:"Services"}),(0,u.tZ)(p,null))}},7071:function(e){e.exports=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s},e.exports.__esModule=!0,e.exports.default=e.exports},6740:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png","srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/8ba95/2.png 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/46fb7/2.png 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png 245w","sizes":"(min-width: 245px) 245px, 100vw"},"sources":[{"srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/24b23/2.webp 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/a21ae/2.webp 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/cbd90/2.webp 245w","type":"image/webp","sizes":"(min-width: 245px) 245px, 100vw"}]},"width":245,"height":195}')},506:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5332648ed989b420fc34583bf8165d74/7d176/1.png","srcSet":"/static/5332648ed989b420fc34583bf8165d74/91447/1.png 59w,\\n/static/5332648ed989b420fc34583bf8165d74/ff5f8/1.png 119w,\\n/static/5332648ed989b420fc34583bf8165d74/7d176/1.png 237w","sizes":"(min-width: 237px) 237px, 100vw"},"sources":[{"srcSet":"/static/5332648ed989b420fc34583bf8165d74/299b3/1.webp 59w,\\n/static/5332648ed989b420fc34583bf8165d74/44f4b/1.webp 119w,\\n/static/5332648ed989b420fc34583bf8165d74/55192/1.webp 237w","type":"image/webp","sizes":"(min-width: 237px) 237px, 100vw"}]},"width":237,"height":219.99999999999997}')}}]);
//# sourceMappingURL=component---src-pages-app-development-jsx-b590075e277c74c8d5b4.js.map