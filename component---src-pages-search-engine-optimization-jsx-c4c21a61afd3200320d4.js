(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[781],{395:function(e,t,a){"use strict";var i=a(4836);t.__esModule=!0,t.default=void 0;var n=i(a(7294)),r=i(a(1932)),s=i(a(2728)),o=a(970),c=function(e){return n.default.useContext(o.OptionsContext).useAutoGen?n.default.createElement(r.default,e):n.default.createElement(s.default,e)};t.default=c},1932:function(e,t,a){"use strict";var i=a(4836);t.__esModule=!0,t.default=void 0;var n=i(a(434)),r=i(a(7071)),s=i(a(7294)),o=i(a(5697)),c=a(1082),l=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],d=function(e){var t=e.title,a=e.crumbs,i=e.crumbLabel,o=e.crumbSeparator,d=e.disableLinks,u=e.hiddenCrumbs,m=(0,r.default)(e,l);return s.default.createElement(s.default.Fragment,null,t&&s.default.createElement("span",{className:"breadcrumb__title"},t),s.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},s.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return u.includes(e.pathname)?null:s.default.createElement(s.default.Fragment,{key:t+"-"+e.pathname},!d.includes(e.pathname)&&s.default.createElement("li",{className:"breadcrumb__list__item"},s.default.createElement(c.Link,(0,n.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},m),i&&t===a.length-1?i:e.crumbLabel)),d.includes(e.pathname)&&s.default.createElement("li",{className:"breadcrumb__list__item"},s.default.createElement("span",(0,n.default)({className:"breadcrumb__link__disabled"},m),i&&t===a.length-1?i:e.crumbLabel)),t===a.length-1?null:s.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},o))})))))};d.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:o.default.string,crumbSeparator:o.default.oneOfType([o.default.string,o.default.element]),crumbs:o.default.arrayOf(o.default.shape({location:o.default.shape(),pathname:o.default.string.isRequired})).isRequired,crumbLabel:o.default.string,disableLinks:o.default.arrayOf(o.default.string),hiddenCrumbs:o.default.arrayOf(o.default.string)};var u=d;t.default=u},2728:function(e,t,a){"use strict";var i=a(4836);t.__esModule=!0,t.default=void 0;var n=i(a(434)),r=i(a(7071)),s=i(a(7294)),o=i(a(5697)),c=a(1082),l=a(970),d=i(a(1775)),u=["title","location","crumbLabel","crumbSeparator"],m=function(e){var t=e.title,a=e.location,i=e.crumbLabel,o=e.crumbSeparator,m=(0,r.default)(e,u),p=s.default.useContext(l.OptionsContext).usePathPrefix,b=(0,d.default)({location:(0,n.default)({},a,{pathname:p?a.pathname.replace(new RegExp("^"+p),""):a.pathname}),crumbLabel:i,crumbSeparator:o}).crumbs,f=void 0===b?[]:b;return s.default.createElement(s.default.Fragment,null,t&&s.default.createElement("span",{className:"breadcrumb__title"},t),s.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},s.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,t){return s.default.createElement("li",{className:"breadcrumb__item",key:t},s.default.createElement(c.Link,(0,n.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===f.length-1?"page":null},m),e.crumbLabel),t===f.length-1?null:s.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};m.defaultProps={title:"",crumbSeparator:" / "},m.propTypes={location:o.default.shape().isRequired,crumbLabel:o.default.string.isRequired,title:o.default.string,crumbSeparator:o.default.string};var p=m;t.default=p},3172:function(e,t,a){"use strict";var i=a(4836);t.__esModule=!0;var n=i(a(395));t.Breadcrumb=n.default;var r=i(a(1932));t.AutoGenCrumb=r.default;var s=a(2623);t.BreadcrumbContext=s.BreadcrumbContext,t.BreadcrumbConsumer=s.BreadcrumbConsumer,t.BreadcrumbProvider=s.BreadcrumbProvider;var o=i(a(1775));t.useBreadcrumb=o.default},1775:function(e,t,a){"use strict";var i=a(4836);t.__esModule=!0,t.default=void 0;var n=i(a(7294)),r=a(2623),s=function(e){var t=e.location,a=e.crumbLabel,i=e.crumbSeparator,s=n.default.useContext(r.BreadcrumbContext),o=s.crumbs,c=s.updateCrumbs;return n.default.useEffect((function(){c({location:t,crumbLabel:a,crumbSeparator:i})}),[t,a,i,c]),{crumbs:o}};t.default=s},3845:function(e,t,a){"use strict";var i=a(3172);t.aG=i.Breadcrumb,i.BreadcrumbContext,i.BreadcrumbConsumer,i.BreadcrumbProvider,i.useBreadcrumb,i.AutoGenCrumb},3486:function(e,t,a){"use strict";a.d(t,{Z:function(){return b}});var i,n,r=a(3845),s=a(8837),o=a(1880),c=a(295),l=a.p+"static/bg-758d523f6b3409e21b46a88c8d092af4.jpg",d=c.ZP.div(i||(i=(0,o.Z)(["\n    background-color: #fafafa;\n    position: relative;\n    padding: 60px 0px;\n    background-image: url(",");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    overflow: hidden;\n    .shape {\n        position: absolute;\n        z-index: 1;\n    }\n    .shape1 {\n        top: -54px;\n        left: -42px;\n    }\n    .shape2 {\n        top: auto;\n        bottom: -54px;\n        right: -42px;\n    }\n    "," {\n        padding: 120px 0px;\n        .shape1 {\n            top: 0;\n            left: 0;\n        }\n        .shape2 {\n            top: auto;\n            bottom: 0;\n            right: 0;\n        }\n    }\n"])),l,c.Uh.large),u=c.ZP.div(n||(n=(0,o.Z)(["\n    text-align: center;\n    .breadcrumb__title {\n        color: #fff;\n        font-weight: 700;\n        line-height: 1.545;\n        font-size: 35px;\n        font-family: ",";\n        ",' {\n            font-size: 55px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            padding-left: 0;\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 15px;\n                font-weight: 500;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active,\n                &[aria-current="page"] {\n                    font-weight: 900;\n                    background: ',";\n                    -webkit-background-clip: text;\n                    -webkit-text-fill-color: transparent;\n                }\n            }\n        }\n    }\n"])),(0,c.R)("fonts.heading"),c.Uh.large,(0,c.R)("colors.gradient")),m=a(3723),p=a(4382),b=function(e){var t=e.title,i=(e.crumbLabel,e.location),n=e.pageContext.breadcrumb.crumbs,o=i.pathname.toLowerCase().split("/"),c=o[o.length-1].split("-");return(0,p.tZ)(d,null,(0,p.tZ)("div",{className:"shape shape1"},(0,p.tZ)(m.S,{src:"../../data/images/bread/1.png",alt:"",__imageData:a(506)})),(0,p.tZ)("div",{className:"shape shape2"},(0,p.tZ)(m.S,{src:"../../data/images/bread/2.png",alt:"",__imageData:a(6740)})),(0,p.tZ)(s.Z,null,(0,p.tZ)(u,null,(0,p.tZ)(r.aG,{title:t,crumbs:n,crumbLabel:c.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))}},7988:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var i=a(4560),n=a(1749),r=a(3486),s=a(2841),o=a(7294),c=a(4774),l=a(6872),d=JSON.parse('{"LH":"SEO Services","TN":" How do we optimize your business with the best SEO services?","WL":"Search Engine Optimization (SEO) is the process of optimizing a website to improve its ranking in search engine results pages (SERPs). The steps of SEO can be broken down into the following broad categories","TU":[{"id":1,"accordionTitle":"Define your goals and target audience","accordionDescription":"Determine what you want to achieve with your SEO efforts and who your target audience is. This will help guide the rest of your optimization efforts."},{"id":2,"accordionTitle":"Audit your website","accordionDescription":"Review your website’s current structure, content, and technical setup to identify any areas for improvement."},{"id":3,"accordionTitle":"Keyword research:","accordionDescription":"Identifying the keywords and phrases that your target audience is searching for and optimizing your content around those keywords."},{"id":4,"accordionTitle":"On-page optimization","accordionDescription":"Optimizing the content and HTML code of your website to make it more search engine friendly. This includes optimizing your title tags, meta descriptions, header tags, and more."},{"id":5,"accordionTitle":"Content creation","accordionDescription":"Creating high-quality, relevant, and keyword-optimized content for your website. This can include blog posts, product descriptions, and more."},{"id":6,"accordionTitle":"Link building","accordionDescription":"Building links from other high-quality, relevant websites back to your own. This helps to improve your website’s authority and visibility in search engine results pages."},{"id":7,"accordionTitle":"Technical SEO","accordionDescription":"Making sure that your website is technically optimized for search engines, including things like site speed, mobile responsiveness, and more."},{"id":8,"accordionTitle":"Analytics and tracking","accordionDescription":"Using analytics and tracking tools to monitor your website’s performance and identify areas for improvement."},{"id":9,"accordionTitle":"Ongoing optimization","accordionDescription":"Continuously monitoring and improving your website’s ranking and visibility in search engine results pages."}],"OW":"It’s important to note that SEO is an ongoing process and requires continuous monitoring and improvement to achieve the best results. Keeping up with best practices and changes to search engine algorithms is crucial to success in SEO.","h5":"Overall, SEO can help businesses to attract more visitors to their website, generate more leads and sales, and improve their online reputation, which can all lead to increased success and growth in the long term.","ps":"BENEFITS OF SEARCH ENGINE OPTIMIZATION (SEO)","kt":"benefits of doing Search Engine Optimization (SEO) for a website or online business, some of the most significant benefits include","__":"Affordable Pricing And Quality Service","Wu":"Why us for SEO","qx":"In the context of “why you choose us for SEO”, it’s likely you’re asking why someone would choose your website or business for search engine optimization (SEO) services. SEO is the process of optimizing a website to rank higher in search engine results and attract more organic traffic. There are many factors that can contribute to a website’s SEO success, such as having high-quality content, a user-friendly website design, and a strong backlink profile. By providing these elements, you can make your website more attractive to search engines and, in turn, improve your search engine rankings and drive more traffic to your site.","Zt":[{"id":1,"accordionTitle":"Increased visibility","accordionDescription":"By optimizing your website for search engines, you can increase its visibility and attract more organic traffic from users searching for keywords related to your business."},{"id":2,"accordionTitle":"Higher search engine rankings","accordionDescription":"A well-optimized website is more likely to rank higher in search engine results pages (SERPs), which can lead to increased visibility and traffic."},{"id":3,"accordionTitle":"Cost-effective marketing","accordionDescription":"SEO is one of the most cost-effective forms of marketing, as it allows you to reach your target audience through organic search results, rather than paying for advertising."},{"id":4,"accordionTitle":"Better user experience","accordionDescription":"Good SEO practices, such as making sure your website is mobile-friendly and has a fast loading speed, can improve the user experience for visitors to your website, which can lead to higher engagement and conversions."},{"id":5,"accordionTitle":"Improved brand credibility and trust","accordionDescription":"A website that appears at the top of search engine results is seen as a more credible and trustworthy source of information, which can help to build your brand and increase customer loyalty."},{"id":6,"accordionTitle":"Long-term results","accordionDescription":"Unlike paid advertising, the results from SEO are long-lasting and sustainable, providing ongoing benefits for your business."},{"id":7,"accordionTitle":"Increased ROI","accordionDescription":"By attracting more qualified traffic to your website, you can increase your return on investment (ROI) from your digital marketing efforts."},{"id":8,"accordionTitle":"Competitive advantage","accordionDescription":"By optimizing your website for search engines, you can gain a competitive advantage over other businesses in your industry that are not taking advantage of SEO"}]}'),u=a(4382);function m(){return(0,u.tZ)(o.Fragment,null,(0,u.tZ)("div",{className:"services-page-container-1"},(0,u.tZ)("div",{className:" container"},(0,u.tZ)("div",{className:"api-types-accordion app-dev-section"},(0,u.tZ)("h2",{className:""},d.LH)))),(0,u.tZ)("div",{className:"services-page-container-2 seo-services-container"},(0,u.tZ)("div",{className:"container"},(0,u.tZ)("div",{className:"get-service-section"},(0,u.tZ)("h2",{className:"services-page-subtitle"},d.TN),(0,u.tZ)("p",null,d.WL),(0,u.tZ)("div",{className:"services-page-section seo-service-page-section"},d.TU.map((function(e,t){return(0,u.tZ)(c.Z,{key:t,defaultactivekey:t,className:"accordion-item"},(0,u.tZ)(l.Z,{title:e.accordionTitle,description:e.accordionDescription}))})),(0,u.tZ)("p",null,d.OW))))),(0,u.tZ)("div",{className:"package-section seo-service-benefits-section container"},(0,u.tZ)("div",{className:" d-flex flex-wrap flex-row"},(0,u.tZ)("div",{className:"seo-service-benefits-inn-sec"},(0,u.tZ)("div",{className:"api-types-title-wrapper"},(0,u.tZ)("p",null,d.h5)),(0,u.tZ)("div",{className:"api-types-title"})),(0,u.tZ)("div",{className:"api-types-accordion"},(0,u.tZ)("div",{className:"api-types-title-wrapper"},(0,u.tZ)("h4",{className:"seo-page-title"},d.ps),(0,u.tZ)("p",null,d.kt)),d.Zt.map((function(e,t){return(0,u.tZ)(c.Z,{key:t,defaultactivekey:t,className:"accordion-item"},(0,u.tZ)(l.Z,{title:e.accordionTitle,description:e.accordionDescription}))}))))),(0,u.tZ)("div",{className:"seo services-page-container app-development-sec "},(0,u.tZ)("div",{className:"container"},(0,u.tZ)("div",null,(0,u.tZ)("h5",{className:""},d.Wu),(0,u.tZ)("h2",{className:"services-page-subtitle"},d.__),(0,u.tZ)("p",null,d.qx)))))}var p=function(e){var t,a=e.data,o=e.location,c=e.pageContext,l=(0,s.normalizedData)((null==a||null===(t=a.allGeneral)||void 0===t?void 0:t.nodes)||[]);return(0,u.tZ)(i.Z,{data:Object.assign({},l.menu,l.footer)},(0,u.tZ)(n.Z,{title:"Services",pathname:"/"}),(0,u.tZ)(r.Z,{pageContext:c,location:o,title:"Services"}),(0,u.tZ)(m,null))}},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n},e.exports.__esModule=!0,e.exports.default=e.exports},6740:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png","srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/8ba95/2.png 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/46fb7/2.png 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png 245w","sizes":"(min-width: 245px) 245px, 100vw"},"sources":[{"srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/24b23/2.webp 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/a21ae/2.webp 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/cbd90/2.webp 245w","type":"image/webp","sizes":"(min-width: 245px) 245px, 100vw"}]},"width":245,"height":195}')},506:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5332648ed989b420fc34583bf8165d74/7d176/1.png","srcSet":"/static/5332648ed989b420fc34583bf8165d74/91447/1.png 59w,\\n/static/5332648ed989b420fc34583bf8165d74/ff5f8/1.png 119w,\\n/static/5332648ed989b420fc34583bf8165d74/7d176/1.png 237w","sizes":"(min-width: 237px) 237px, 100vw"},"sources":[{"srcSet":"/static/5332648ed989b420fc34583bf8165d74/299b3/1.webp 59w,\\n/static/5332648ed989b420fc34583bf8165d74/44f4b/1.webp 119w,\\n/static/5332648ed989b420fc34583bf8165d74/55192/1.webp 237w","type":"image/webp","sizes":"(min-width: 237px) 237px, 100vw"}]},"width":237,"height":219.99999999999997}')}}]);
//# sourceMappingURL=component---src-pages-search-engine-optimization-jsx-c4c21a61afd3200320d4.js.map