(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[955],{395:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.default=void 0;var r=a(n(7294)),l=a(n(1932)),i=a(n(2728)),o=n(970),c=function(e){return r.default.useContext(o.OptionsContext).useAutoGen?r.default.createElement(l.default,e):r.default.createElement(i.default,e)};t.default=c},1932:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.default=void 0;var r=a(n(434)),l=a(n(7071)),i=a(n(7294)),o=a(n(5697)),c=n(1082),s=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],u=function(e){var t=e.title,n=e.crumbs,a=e.crumbLabel,o=e.crumbSeparator,u=e.disableLinks,d=e.hiddenCrumbs,b=(0,l.default)(e,s);return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},n.map((function(e,t){return d.includes(e.pathname)?null:i.default.createElement(i.default.Fragment,{key:t+"-"+e.pathname},!u.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement(c.Link,(0,r.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===n.length-1?"page":null},b),a&&t===n.length-1?a:e.crumbLabel)),u.includes(e.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},b),a&&t===n.length-1?a:e.crumbLabel)),t===n.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},o))})))))};u.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},u.propTypes={title:o.default.string,crumbSeparator:o.default.oneOfType([o.default.string,o.default.element]),crumbs:o.default.arrayOf(o.default.shape({location:o.default.shape(),pathname:o.default.string.isRequired})).isRequired,crumbLabel:o.default.string,disableLinks:o.default.arrayOf(o.default.string),hiddenCrumbs:o.default.arrayOf(o.default.string)};var d=u;t.default=d},2728:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.default=void 0;var r=a(n(434)),l=a(n(7071)),i=a(n(7294)),o=a(n(5697)),c=n(1082),s=n(970),u=a(n(1775)),d=["title","location","crumbLabel","crumbSeparator"],b=function(e){var t=e.title,n=e.location,a=e.crumbLabel,o=e.crumbSeparator,b=(0,l.default)(e,d),m=i.default.useContext(s.OptionsContext).usePathPrefix,p=(0,u.default)({location:(0,r.default)({},n,{pathname:m?n.pathname.replace(new RegExp("^"+m),""):n.pathname}),crumbLabel:a,crumbSeparator:o}).crumbs,f=void 0===p?[]:p;return i.default.createElement(i.default.Fragment,null,t&&i.default.createElement("span",{className:"breadcrumb__title"},t),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(e,t){return i.default.createElement("li",{className:"breadcrumb__item",key:t},i.default.createElement(c.Link,(0,r.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===f.length-1?"page":null},b),e.crumbLabel),t===f.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};b.defaultProps={title:"",crumbSeparator:" / "},b.propTypes={location:o.default.shape().isRequired,crumbLabel:o.default.string.isRequired,title:o.default.string,crumbSeparator:o.default.string};var m=b;t.default=m},3172:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0;var r=a(n(395));t.Breadcrumb=r.default;var l=a(n(1932));t.AutoGenCrumb=l.default;var i=n(2623);t.BreadcrumbContext=i.BreadcrumbContext,t.BreadcrumbConsumer=i.BreadcrumbConsumer,t.BreadcrumbProvider=i.BreadcrumbProvider;var o=a(n(1775));t.useBreadcrumb=o.default},1775:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.default=void 0;var r=a(n(7294)),l=n(2623),i=function(e){var t=e.location,n=e.crumbLabel,a=e.crumbSeparator,i=r.default.useContext(l.BreadcrumbContext),o=i.crumbs,c=i.updateCrumbs;return r.default.useEffect((function(){c({location:t,crumbLabel:n,crumbSeparator:a})}),[t,n,a,c]),{crumbs:o}};t.default=i},3845:function(e,t,n){"use strict";var a=n(3172);t.aG=a.Breadcrumb,a.BreadcrumbContext,a.BreadcrumbConsumer,a.BreadcrumbProvider,a.useBreadcrumb,a.AutoGenCrumb},3486:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a,r,l=n(3845),i=n(8837),o=n(1880),c=n(295),s=n.p+"static/bg-758d523f6b3409e21b46a88c8d092af4.jpg",u=c.ZP.div(a||(a=(0,o.Z)(["\n    background-color: #fafafa;\n    position: relative;\n    padding: 60px 0px;\n    background-image: url(",");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    overflow: hidden;\n    .shape {\n        position: absolute;\n        z-index: 1;\n    }\n    .shape1 {\n        top: -54px;\n        left: -42px;\n    }\n    .shape2 {\n        top: auto;\n        bottom: -54px;\n        right: -42px;\n    }\n    "," {\n        padding: 120px 0px;\n        .shape1 {\n            top: 0;\n            left: 0;\n        }\n        .shape2 {\n            top: auto;\n            bottom: 0;\n            right: 0;\n        }\n    }\n"])),s,c.Uh.large),d=c.ZP.div(r||(r=(0,o.Z)(["\n    text-align: center;\n    .breadcrumb__title {\n        color: #fff;\n        font-weight: 700;\n        line-height: 1.545;\n        font-size: 35px;\n        font-family: ",";\n        ",' {\n            font-size: 55px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            padding-left: 0;\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 15px;\n                font-weight: 500;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active,\n                &[aria-current="page"] {\n                    font-weight: 900;\n                    background: ',";\n                    -webkit-background-clip: text;\n                    -webkit-text-fill-color: transparent;\n                }\n            }\n        }\n    }\n"])),(0,c.R)("fonts.heading"),c.Uh.large,(0,c.R)("colors.gradient")),b=n(3723),m=n(4382),p=function(e){var t=e.title,a=(e.crumbLabel,e.location),r=e.pageContext.breadcrumb.crumbs,o=a.pathname.toLowerCase().split("/"),c=o[o.length-1].split("-");return(0,m.tZ)(u,null,(0,m.tZ)("div",{className:"shape shape1"},(0,m.tZ)(b.S,{src:"../../data/images/bread/1.png",alt:"",__imageData:n(506)})),(0,m.tZ)("div",{className:"shape shape2"},(0,m.tZ)(b.S,{src:"../../data/images/bread/2.png",alt:"",__imageData:n(6740)})),(0,m.tZ)(i.Z,null,(0,m.tZ)(d,null,(0,m.tZ)(l.aG,{title:t,crumbs:r,crumbLabel:c.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))}},8587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var a,r,l,i,o,c,s,u=n(4560),d=n(1749),b=n(3486),m=n(7462),p=n(8837),f=n(386),g=n(567),h=n(1880),x=n(295),Z=x.ZP.div(a||(a=(0,h.Z)(["\n    padding: 25px 40px;\n    background-color: white;\n    padding: 25px 30px;\n    border-radius: 15px;\n    display: flex;\n    align-items: center;\n    margin-bottom: 25px;\n    &:last-type-of: {\n        margin-bottom: 0px;\n    }\n\n    .icon {\n        width: 54px;\n        height: 54px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 15px;\n        border: 1px solid #eef0f8;\n        border-radius: 50%;\n        background-color: #f7faff;\n        "," {\n            width: 74px;\n            height: 74px;\n            margin-right: 30px;\n        }\n        span {\n            font-size: 30px;\n            background: ",";\n            background-clip: border-box;\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n        }\n    }\n    .content {\n        flex: 1 0 0;\n        .text {\n            line-height: 1;\n            display: block;\n            text-transform: capitalize;\n            font-weight: 700;\n            font-size: 15px;\n            background: ",";\n            background-clip: border-box;\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n        }\n        .number {\n            line-height: 1;\n            font-weight: 700;\n            color: #02126a;\n            font-size: 16px;\n            "," {\n                font-size: 20px;\n            }\n        }\n    }\n"])),x.Uh.medium,(0,x.R)("colors.gradient"),(0,x.R)("colors.gradient"),x.Uh.medium),v=n(4382),_=function(e){var t=e.icon,n=e.title,a=e.content;return(0,v.tZ)(Z,null,(0,v.tZ)("div",{className:"icon"},(0,v.tZ)("span",{className:t})),(0,v.tZ)("div",{className:"content"},(0,v.tZ)("span",{className:"text"},n,":"),(0,v.tZ)("a",{href:"/",className:"number"},a)))},w=x.ZP.form(r||(r=(0,h.Z)(["\n    margin-top: -20px;\n    "," {\n        margin-top: -50px;\n    }\n    .form-select {\n        background: #fff;\n        height: 60px;\n        padding: 15px 30px;\n        color: #596190;\n        margin-bottom: 20px;\n        border: 0px;\n        font-size: 15px;\n        border-radius: 10px;\n    }\n"])),x.Uh.medium),k=x.ZP.input(l||(l=(0,h.Z)(["\n    background-color: white;\n    height: 60px;\n    padding: 15px 30px;\n    color: #596190;\n    margin-bottom: 20px;\n    border: 0px;\n    font-size: 15px;\n    border-radius: 10px;\n    &:focus {\n        border-color: none;\n        outline: none;\n        box-shadow: none;\n    }\n"]))),y=x.ZP.textarea(i||(i=(0,h.Z)(["\n    background-color: white;\n    height: 60px;\n    padding: 15px 30px;\n    color: #596190;\n    margin-bottom: 20px;\n    border: 0px;\n    font-size: 15px;\n    border-radius: 10px;\n    height: 170px;\n    margin-bottom: 30px;\n    resize: none;\n    &:focus {\n        border-color: none;\n        outline: none;\n        box-shadow: none;\n    }\n"]))),N=n(6616),C=function(){return(0,v.tZ)(w,{className:"row gx-4",action:"#",method:"POST"},(0,v.tZ)(g.Z,{sm:12},(0,v.tZ)(k,{className:"form-control",placeholder:"Your Name",type:"text",name:"name"})),(0,v.tZ)(g.Z,{sm:12},(0,v.tZ)(k,{className:"form-control",placeholder:"Your Email",type:"text",name:"email"})),(0,v.tZ)(g.Z,{sm:12},(0,v.tZ)(k,{className:"form-control",placeholder:"Subject",type:"text",name:"subject"})),(0,v.tZ)(g.Z,{sm:12},(0,v.tZ)(y,{placeholder:"Your message (optional)",className:"form-control textarea-control",name:"message",id:"textarea",cols:"30",rows:"10"})),(0,v.tZ)(g.Z,{sm:12},(0,v.tZ)(N.Z,{size:"large",shape:"rounded5",path:"/",className:"btn-absolute"},"Submit",(0,v.tZ)("i",{className:"icofont-rounded-double-right"}))))},z=n(6436),L=JSON.parse('{"LH":"Contact Us Anytime!","hF":"Procuring education on consulted assurance in do. Is sympathize he expression mr no travelling. Preference he he at travelling in resolution. So striking at of to welcomed resolved. Northward by described up household therefore attention. Excellence."}'),S=x.ZP.section(o||(o=(0,h.Z)(["\n    padding: 100px 0;\n"]))),E=x.ZP.div(c||(c=(0,h.Z)(["\n    background-color: #f7faff;\n    padding: 30px;\n    border-radius: 15px;\n    "," {\n        padding: 80px;\n    }\n    .contact-us-title {\n        font-size: 25px;\n        @media screen and (min-width: 1400px) {\n            h2,\n            .h2 {\n                font-size: 35px;\n                line-height: 1;\n            }\n        }\n    }\n"])),x.Uh.large),P=x.ZP.div(s||(s=(0,h.Z)(["\n    margin-top: -20px;\n    "," {\n        margin-top: -50px;\n    }\n"])),x.Uh.medium),B=function(e){var t=e.data;return(0,v.tZ)(S,null,(0,v.tZ)(p.Z,null,(0,v.tZ)(E,null,(0,v.tZ)(f.Z,{className:"gx-5 contact-us-title"},(0,v.tZ)("div",{className:"contact-us-top-section"},(0,v.tZ)("h2",{className:"elementor-heading-title elementor-size-default"},L.LH),(0,v.tZ)("p",null,L.hF)),(0,v.tZ)(g.Z,{lg:6},(null==t?void 0:t.section_title)&&(0,v.tZ)(z.Z,(0,m.Z)({headingTitle:null==t?void 0:t.section_title.title},t.section_title)),(0,v.tZ)(P,null,(null==t?void 0:t.items)&&(null==t?void 0:t.items.map((function(e){return(0,v.tZ)(_,{key:e.id,icon:e.icon,title:e.headings[0].content,content:e.headings[1].content})}))))),(0,v.tZ)(g.Z,{lg:6,className:"contact-form-title"},(0,v.tZ)(z.Z,{headingTitle:"Get a solutions to your businesses",showIcon:!1,align:"left"}),(0,v.tZ)("div",{className:"contact-us-page"},(0,v.tZ)("p",null,"Give us a call or drop by anytime. Our motto is to resolve all your queries within 24 hours on business days. We will be happy to assist you in all possible ways.")),(0,v.tZ)(C,null))))))},O=n(2841),U=function(e){var t,n=e.data,a=e.location,r=e.pageContext,l=(0,O.normalizedData)((null==n||null===(t=n.allGeneral)||void 0===t?void 0:t.nodes)||[]),i=(0,O.normalizedData)((null==n?void 0:n.page.content)||[]);return(0,v.tZ)(u.Z,{data:Object.assign({},l.menu,l.footer)},(0,v.tZ)(d.Z,{title:"Contact Us",pathname:"/"}),(0,v.tZ)(b.Z,{pageContext:r,location:a,title:"Contact Us"}),(0,v.tZ)(B,{data:i["contact-us-section"]}))}},7071:function(e){e.exports=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},6740:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png","srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/8ba95/2.png 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/46fb7/2.png 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png 245w","sizes":"(min-width: 245px) 245px, 100vw"},"sources":[{"srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/24b23/2.webp 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/a21ae/2.webp 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/cbd90/2.webp 245w","type":"image/webp","sizes":"(min-width: 245px) 245px, 100vw"}]},"width":245,"height":195}')},506:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5332648ed989b420fc34583bf8165d74/7d176/1.png","srcSet":"/static/5332648ed989b420fc34583bf8165d74/91447/1.png 59w,\\n/static/5332648ed989b420fc34583bf8165d74/ff5f8/1.png 119w,\\n/static/5332648ed989b420fc34583bf8165d74/7d176/1.png 237w","sizes":"(min-width: 237px) 237px, 100vw"},"sources":[{"srcSet":"/static/5332648ed989b420fc34583bf8165d74/299b3/1.webp 59w,\\n/static/5332648ed989b420fc34583bf8165d74/44f4b/1.webp 119w,\\n/static/5332648ed989b420fc34583bf8165d74/55192/1.webp 237w","type":"image/webp","sizes":"(min-width: 237px) 237px, 100vw"}]},"width":237,"height":219.99999999999997}')}}]);
//# sourceMappingURL=component---src-pages-contact-us-jsx-8b4acd61af80acd6c376.js.map