(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[653],{395:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.default=void 0;var r=n(a(7294)),i=n(a(1932)),l=n(a(2728)),c=a(970),o=function(e){return r.default.useContext(c.OptionsContext).useAutoGen?r.default.createElement(i.default,e):r.default.createElement(l.default,e)};t.default=o},1932:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.default=void 0;var r=n(a(434)),i=n(a(7071)),l=n(a(7294)),c=n(a(5697)),o=a(1082),u=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],s=function(e){var t=e.title,a=e.crumbs,n=e.crumbLabel,c=e.crumbSeparator,s=e.disableLinks,d=e.hiddenCrumbs,b=(0,i.default)(e,u);return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},a.map((function(e,t){return d.includes(e.pathname)?null:l.default.createElement(l.default.Fragment,{key:t+"-"+e.pathname},!s.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement(o.Link,(0,r.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===a.length-1?"page":null},b),n&&t===a.length-1?n:e.crumbLabel)),s.includes(e.pathname)&&l.default.createElement("li",{className:"breadcrumb__list__item"},l.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},b),n&&t===a.length-1?n:e.crumbLabel)),t===a.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},c))})))))};s.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},s.propTypes={title:c.default.string,crumbSeparator:c.default.oneOfType([c.default.string,c.default.element]),crumbs:c.default.arrayOf(c.default.shape({location:c.default.shape(),pathname:c.default.string.isRequired})).isRequired,crumbLabel:c.default.string,disableLinks:c.default.arrayOf(c.default.string),hiddenCrumbs:c.default.arrayOf(c.default.string)};var d=s;t.default=d},2728:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.default=void 0;var r=n(a(434)),i=n(a(7071)),l=n(a(7294)),c=n(a(5697)),o=a(1082),u=a(970),s=n(a(1775)),d=["title","location","crumbLabel","crumbSeparator"],b=function(e){var t=e.title,a=e.location,n=e.crumbLabel,c=e.crumbSeparator,b=(0,i.default)(e,d),f=l.default.useContext(u.OptionsContext).usePathPrefix,p=(0,s.default)({location:(0,r.default)({},a,{pathname:f?a.pathname.replace(new RegExp("^"+f),""):a.pathname}),crumbLabel:n,crumbSeparator:c}).crumbs,m=void 0===p?[]:p;return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement("span",{className:"breadcrumb__title"},t),l.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},l.default.createElement("ol",{className:"breadcrumb__list"},m.map((function(e,t){return l.default.createElement("li",{className:"breadcrumb__item",key:t},l.default.createElement(o.Link,(0,r.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":t===m.length-1?"page":null},b),e.crumbLabel),t===m.length-1?null:l.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};b.defaultProps={title:"",crumbSeparator:" / "},b.propTypes={location:c.default.shape().isRequired,crumbLabel:c.default.string.isRequired,title:c.default.string,crumbSeparator:c.default.string};var f=b;t.default=f},3172:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0;var r=n(a(395));t.Breadcrumb=r.default;var i=n(a(1932));t.AutoGenCrumb=i.default;var l=a(2623);t.BreadcrumbContext=l.BreadcrumbContext,t.BreadcrumbConsumer=l.BreadcrumbConsumer,t.BreadcrumbProvider=l.BreadcrumbProvider;var c=n(a(1775));t.useBreadcrumb=c.default},1775:function(e,t,a){"use strict";var n=a(4836);t.__esModule=!0,t.default=void 0;var r=n(a(7294)),i=a(2623),l=function(e){var t=e.location,a=e.crumbLabel,n=e.crumbSeparator,l=r.default.useContext(i.BreadcrumbContext),c=l.crumbs,o=l.updateCrumbs;return r.default.useEffect((function(){o({location:t,crumbLabel:a,crumbSeparator:n})}),[t,a,n,o]),{crumbs:c}};t.default=l},3845:function(e,t,a){"use strict";var n=a(3172);t.aG=n.Breadcrumb,n.BreadcrumbContext,n.BreadcrumbConsumer,n.BreadcrumbProvider,n.useBreadcrumb,n.AutoGenCrumb},9753:function(e,t,a){"use strict";a.d(t,{Z:function(){return P}});var n,r,i,l,c,o,u,s,d,b=a(1082),f=a(3723),p=a(6616),m=a(1880),g=a(295),h=g.ZP.div(n||(n=(0,m.Z)(["\n    background-color: #f7faff;\n    overflow: hidden;\n    border-radius: 15px;\n    margin-bottom: 30px;\n    .blog-grid-thumb {\n        display: block;\n        border-radius: 15px;\n        overflow: hidden;\n        text-align: center;\n        img {\n            border-radius: 15px;\n            transform: scale(1);\n            transition: all 0.3s linear !important;\n        }\n    }\n    &:hover {\n        img {\n            transform: scale(1.05) !important;\n        }\n    }\n"]))),Z=g.ZP.div(r||(r=(0,m.Z)(["\n    padding: 30px 30px;\n    margin: 0 auto;\n"]))),x=g.ZP.ul(i||(i=(0,m.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 1.25rem;\n    font-size: 13px;\n"]))),w=g.ZP.li(l||(l=(0,m.Z)([""]))),v=g.ZP.li(c||(c=(0,m.Z)([""]))),_=g.ZP.span(o||(o=(0,m.Z)([""]))),k=g.ZP.span(u||(u=(0,m.Z)(["\n    margin-left: 15px;\n"]))),y=g.ZP.h6(s||(s=(0,m.Z)(["\n    font-weight: 700;\n    a {\n        color: #02126a;\n    }\n"]))),L=g.ZP.p(d||(d=(0,m.Z)(["\n    font-size: 14px;\n"]))),C=a(4382),P=function(e){var t=e.date,a=e.title,n=e.body,r=e.slug,i=e.thume_image,l=(0,f.c)(i);return(0,C.tZ)(h,null,(0,C.tZ)(b.Link,{to:"/"+r,className:"blog-grid-thumb"},(0,C.tZ)(f.G,{image:l,alt:a})),(0,C.tZ)(Z,null,(0,C.tZ)(x,null,(0,C.tZ)(w,null,(0,C.tZ)("i",{className:"icofont-ui-calendar"})," ",(0,C.tZ)(b.Link,{to:"/"},t)),(0,C.tZ)(v,null,(0,C.tZ)(_,null,(0,C.tZ)(b.Link,{to:"/"},"2 Comments")),(0,C.tZ)(k,null,(0,C.tZ)(b.Link,{to:"/"},"Share")))),(0,C.tZ)(y,null,(0,C.tZ)(b.Link,{to:"/"+r},a)),(0,C.tZ)(L,null,n),(0,C.tZ)(p.Z,{size:"medium",path:"/"+r,shape:"rounded5"},"Read More")))}},5271:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var n,r,i,l,c,o=a(1082),u=a(3723),s=a(7302),d=a(1880),b=a(295),f=b.ZP.div(n||(n=(0,d.Z)(["\n    background-color: #f7faff;\n    padding: 30px;\n    margin-bottom: 60px;\n    border-radius: 15px;\n    text-align: center;\n"]))),p=b.ZP.div(r||(r=(0,d.Z)(["\n    margin-bottom: 35px;\n"]))),m=b.ZP.div(i||(i=(0,d.Z)([""]))),g=b.ZP.h6(l||(l=(0,d.Z)(["\n    margin-bottom: 10px;\n    a {\n        color: ",";\n    }\n"])),(0,b.R)("colors.primary")),h=b.ZP.p(c||(c=(0,d.Z)(["\n    font-weight: 700;\n    color: ",";\n    text-transform: uppercase;\n    font-size: 13px;\n    margin-bottom: 35px;\n"])),(0,b.R)("colors.secondary")),Z=a(4382),x=function(e){e.title;return(0,Z.tZ)(f,null,(0,Z.tZ)(p,{className:"blog-thumb"},(0,Z.tZ)(o.Link,{to:"/"},(0,Z.tZ)(u.S,{src:"../../../data/images/blog/profile.png",alt:"images-not_found",__imageData:a(4881)}))),(0,Z.tZ)(m,null,(0,Z.tZ)(g,null,(0,Z.tZ)(o.Link,{to:"/"},"Marion Washington")),(0,Z.tZ)(h,null,"Digital Strategist"),(0,Z.tZ)(s.Z,{sx:{mt:"20px"},space:15,size:"md",bgColor:"bgWhite",shape:"square"},(0,Z.tZ)(s.I,{href:"https://www.facebook.com/"},(0,Z.tZ)("i",{className:"icofont-facebook"})),(0,Z.tZ)(s.I,{href:"https://twitter.com/home/"},(0,Z.tZ)("i",{className:"icofont-twitter"})),(0,Z.tZ)(s.I,{href:"https://www.skype.com/"},(0,Z.tZ)("i",{className:"icofont-skype"})),(0,Z.tZ)(s.I,{href:"https://www.linkedin.com/"},(0,Z.tZ)("i",{className:"icofont-linkedin"})))))}},3486:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n,r,i=a(3845),l=a(8837),c=a(1880),o=a(295),u=a.p+"static/bg-758d523f6b3409e21b46a88c8d092af4.jpg",s=o.ZP.div(n||(n=(0,c.Z)(["\n    background-color: #fafafa;\n    position: relative;\n    padding: 60px 0px;\n    background-image: url(",");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    overflow: hidden;\n    .shape {\n        position: absolute;\n        z-index: 1;\n    }\n    .shape1 {\n        top: -54px;\n        left: -42px;\n    }\n    .shape2 {\n        top: auto;\n        bottom: -54px;\n        right: -42px;\n    }\n    "," {\n        padding: 120px 0px;\n        .shape1 {\n            top: 0;\n            left: 0;\n        }\n        .shape2 {\n            top: auto;\n            bottom: 0;\n            right: 0;\n        }\n    }\n"])),u,o.Uh.large),d=o.ZP.div(r||(r=(0,c.Z)(["\n    text-align: center;\n    .breadcrumb__title {\n        color: #fff;\n        font-weight: 700;\n        line-height: 1.545;\n        font-size: 35px;\n        font-family: ",";\n        ",' {\n            font-size: 55px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            padding-left: 0;\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 15px;\n                font-weight: 500;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active,\n                &[aria-current="page"] {\n                    font-weight: 900;\n                    background: ',";\n                    -webkit-background-clip: text;\n                    -webkit-text-fill-color: transparent;\n                }\n            }\n        }\n    }\n"])),(0,o.R)("fonts.heading"),o.Uh.large,(0,o.R)("colors.gradient")),b=a(3723),f=a(4382),p=function(e){var t=e.title,n=(e.crumbLabel,e.location),r=e.pageContext.breadcrumb.crumbs,c=n.pathname.toLowerCase().split("/"),o=c[c.length-1].split("-");return(0,f.tZ)(s,null,(0,f.tZ)("div",{className:"shape shape1"},(0,f.tZ)(b.S,{src:"../../data/images/bread/1.png",alt:"",__imageData:a(506)})),(0,f.tZ)("div",{className:"shape shape2"},(0,f.tZ)(b.S,{src:"../../data/images/bread/2.png",alt:"",__imageData:a(6740)})),(0,f.tZ)(l.Z,null,(0,f.tZ)(d,null,(0,f.tZ)(i.aG,{title:t,crumbs:r,crumbLabel:o.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))}},4105:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n,r,i,l=a(1082),c=a(2841),o=a(1880),u=a(295),s=u.ZP.div(n||(n=(0,o.Z)(["\n    background-color: #f7faff;\n    padding: 30px;\n    margin-bottom: 60px;\n    border-radius: 15px;\n    padding: 20px;\n    "," {\n        padding: 50px;\n    }\n"])),u.Uh.large),d=u.ZP.h4(r||(r=(0,o.Z)(["\n    font-weight: 700;\n    margin-bottom: 30px;\n"]))),b=u.ZP.ul(i||(i=(0,o.Z)(["\n    li {\n        font-weight: 400;\n        background-color: white;\n        border: 0px;\n        padding: 14px 20px;\n        margin-bottom: 10px;\n        border-radius: 10px;\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n    a {\n        i {\n            margin-right: 10px;\n        }\n        span {\n        }\n    }\n"]))),f=a(4382),p=function(){var e=(0,l.useStaticQuery)("3083715435").allArticle.edges,t=(0,c.flatDeep)(e.map((function(e){return e.node.categories}))),a=[];return t.forEach((function(e){var t={title:e.title,slug:e.slug,count:1},n=(0,c.containsObject)(t,a);if(-1!==n){var r=a[n].count;a[n]={title:e.title,slug:e.slug,count:r+1}}else a.push(t)})),(0,f.tZ)(s,null,(0,f.tZ)(d,null,"Post Category"),(0,f.tZ)(b,null,a.map((function(e){return(0,f.tZ)("li",{key:e.slug},(0,f.tZ)(l.Link,{to:"/category/"+e.slug},(0,f.tZ)("i",{className:"icofont-rounded-double-right"})," ",e.title),(0,f.tZ)("span",null,"(",e.count,")"))}))))}},2330:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n,r,i,l=a(1082),c=a(2841),o=a(1880),u=a(295),s=u.ZP.div(n||(n=(0,o.Z)(["\n    background-color: #f7faff;\n    padding: 30px;\n    margin-bottom: 60px;\n    border-radius: 15px;\n    padding: 20px;\n    "," {\n        padding: 50px;\n    }\n"])),u.Uh.large),d=u.ZP.h4(r||(r=(0,o.Z)(["\n    font-weight: 700;\n    margin-bottom: 30px;\n"]))),b=u.ZP.ul(i||(i=(0,o.Z)(["\n    margin-left: -10px;\n    margin-bottom: -10px;\n    display: inline-block;\n    a {\n        color: #02126a;\n        display: inline-block;\n        padding: 9px 20px;\n        margin-bottom: 10px;\n        margin-left: 10px;\n        background-color: white;\n        border-radius: 5px;\n        &:hover {\n            background-image: ",";\n            color: #fff;\n        }\n    }\n"])),(0,u.R)("colors.gradient")),f=a(4382),p=function(){var e=(0,l.useStaticQuery)("1298158337").allArticle.edges,t=(0,c.flatDeep)(e.map((function(e){return e.node.tags}))),a=[];return t.forEach((function(e){var t={title:e.title,slug:e.slug,count:1},n=(0,c.containsObject)(t,a);if(-1!==n){var r=a[n].count;a[n]={title:e.title,slug:e.slug,count:r+1}}else a.push(t)})),(0,f.tZ)(s,null,(0,f.tZ)(d,null,"Post Tags"),(0,f.tZ)(b,null,a.map((function(e){return(0,f.tZ)(l.Link,{key:e.slug,to:"/tags/"+e.slug},e.title)}))))}},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},6740:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png","srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/8ba95/2.png 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/46fb7/2.png 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png 245w","sizes":"(min-width: 245px) 245px, 100vw"},"sources":[{"srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/24b23/2.webp 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/a21ae/2.webp 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/cbd90/2.webp 245w","type":"image/webp","sizes":"(min-width: 245px) 245px, 100vw"}]},"width":245,"height":195}')},506:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5332648ed989b420fc34583bf8165d74/7d176/1.png","srcSet":"/static/5332648ed989b420fc34583bf8165d74/91447/1.png 59w,\\n/static/5332648ed989b420fc34583bf8165d74/ff5f8/1.png 119w,\\n/static/5332648ed989b420fc34583bf8165d74/7d176/1.png 237w","sizes":"(min-width: 237px) 237px, 100vw"},"sources":[{"srcSet":"/static/5332648ed989b420fc34583bf8165d74/299b3/1.webp 59w,\\n/static/5332648ed989b420fc34583bf8165d74/44f4b/1.webp 119w,\\n/static/5332648ed989b420fc34583bf8165d74/55192/1.webp 237w","type":"image/webp","sizes":"(min-width: 237px) 237px, 100vw"}]},"width":237,"height":219.99999999999997}')},4881:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/63c1c388cb56a54aabf9592638f61b6b/c7c9d/profile.png","srcSet":"/static/63c1c388cb56a54aabf9592638f61b6b/eb530/profile.png 53w,\\n/static/63c1c388cb56a54aabf9592638f61b6b/25d16/profile.png 106w,\\n/static/63c1c388cb56a54aabf9592638f61b6b/c7c9d/profile.png 212w","sizes":"(min-width: 212px) 212px, 100vw"},"sources":[{"srcSet":"/static/63c1c388cb56a54aabf9592638f61b6b/1e98c/profile.webp 53w,\\n/static/63c1c388cb56a54aabf9592638f61b6b/d066b/profile.webp 106w,\\n/static/63c1c388cb56a54aabf9592638f61b6b/19e1e/profile.webp 212w","type":"image/webp","sizes":"(min-width: 212px) 212px, 100vw"}]},"width":212,"height":214}')}}]);
//# sourceMappingURL=81bf156300a1891f3e5b0075d7edc7874736f8f2-e7fdeac811c5b1252273.js.map