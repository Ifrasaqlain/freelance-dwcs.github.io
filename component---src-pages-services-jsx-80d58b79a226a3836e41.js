(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[262],{395:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0,a.default=void 0;var r=n(t(7294)),i=n(t(1932)),s=n(t(2728)),o=t(970),l=function(e){return r.default.useContext(o.OptionsContext).useAutoGen?r.default.createElement(i.default,e):r.default.createElement(s.default,e)};a.default=l},1932:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0,a.default=void 0;var r=n(t(434)),i=n(t(7071)),s=n(t(7294)),o=n(t(5697)),l=t(1082),c=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],d=function(e){var a=e.title,t=e.crumbs,n=e.crumbLabel,o=e.crumbSeparator,d=e.disableLinks,u=e.hiddenCrumbs,f=(0,i.default)(e,c);return s.default.createElement(s.default.Fragment,null,a&&s.default.createElement("span",{className:"breadcrumb__title"},a),s.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},s.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(e,a){return u.includes(e.pathname)?null:s.default.createElement(s.default.Fragment,{key:a+"-"+e.pathname},!d.includes(e.pathname)&&s.default.createElement("li",{className:"breadcrumb__list__item"},s.default.createElement(l.Link,(0,r.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===t.length-1?"page":null},f),n&&a===t.length-1?n:e.crumbLabel)),d.includes(e.pathname)&&s.default.createElement("li",{className:"breadcrumb__list__item"},s.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},f),n&&a===t.length-1?n:e.crumbLabel)),a===t.length-1?null:s.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},o))})))))};d.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},d.propTypes={title:o.default.string,crumbSeparator:o.default.oneOfType([o.default.string,o.default.element]),crumbs:o.default.arrayOf(o.default.shape({location:o.default.shape(),pathname:o.default.string.isRequired})).isRequired,crumbLabel:o.default.string,disableLinks:o.default.arrayOf(o.default.string),hiddenCrumbs:o.default.arrayOf(o.default.string)};var u=d;a.default=u},2728:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0,a.default=void 0;var r=n(t(434)),i=n(t(7071)),s=n(t(7294)),o=n(t(5697)),l=t(1082),c=t(970),d=n(t(1775)),u=["title","location","crumbLabel","crumbSeparator"],f=function(e){var a=e.title,t=e.location,n=e.crumbLabel,o=e.crumbSeparator,f=(0,i.default)(e,u),p=s.default.useContext(c.OptionsContext).usePathPrefix,b=(0,d.default)({location:(0,r.default)({},t,{pathname:p?t.pathname.replace(new RegExp("^"+p),""):t.pathname}),crumbLabel:n,crumbSeparator:o}).crumbs,m=void 0===b?[]:b;return s.default.createElement(s.default.Fragment,null,a&&s.default.createElement("span",{className:"breadcrumb__title"},a),s.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},s.default.createElement("ol",{className:"breadcrumb__list"},m.map((function(e,a){return s.default.createElement("li",{className:"breadcrumb__item",key:a},s.default.createElement(l.Link,(0,r.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===m.length-1?"page":null},f),e.crumbLabel),a===m.length-1?null:s.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};f.defaultProps={title:"",crumbSeparator:" / "},f.propTypes={location:o.default.shape().isRequired,crumbLabel:o.default.string.isRequired,title:o.default.string,crumbSeparator:o.default.string};var p=f;a.default=p},3172:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0;var r=n(t(395));a.Breadcrumb=r.default;var i=n(t(1932));a.AutoGenCrumb=i.default;var s=t(2623);a.BreadcrumbContext=s.BreadcrumbContext,a.BreadcrumbConsumer=s.BreadcrumbConsumer,a.BreadcrumbProvider=s.BreadcrumbProvider;var o=n(t(1775));a.useBreadcrumb=o.default},1775:function(e,a,t){"use strict";var n=t(4836);a.__esModule=!0,a.default=void 0;var r=n(t(7294)),i=t(2623),s=function(e){var a=e.location,t=e.crumbLabel,n=e.crumbSeparator,s=r.default.useContext(i.BreadcrumbContext),o=s.crumbs,l=s.updateCrumbs;return r.default.useEffect((function(){l({location:a,crumbLabel:t,crumbSeparator:n})}),[a,t,n,l]),{crumbs:o}};a.default=s},3845:function(e,a,t){"use strict";var n=t(3172);a.aG=n.Breadcrumb,n.BreadcrumbContext,n.BreadcrumbConsumer,n.BreadcrumbProvider,n.useBreadcrumb,n.AutoGenCrumb},3486:function(e,a,t){"use strict";t.d(a,{Z:function(){return b}});var n,r,i=t(3845),s=t(8837),o=t(1880),l=t(295),c=t.p+"static/bg-758d523f6b3409e21b46a88c8d092af4.jpg",d=l.ZP.div(n||(n=(0,o.Z)(["\n    background-color: #fafafa;\n    position: relative;\n    padding: 60px 0px;\n    background-image: url(",");\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n    overflow: hidden;\n    .shape {\n        position: absolute;\n        z-index: 1;\n    }\n    .shape1 {\n        top: -54px;\n        left: -42px;\n    }\n    .shape2 {\n        top: auto;\n        bottom: -54px;\n        right: -42px;\n    }\n    "," {\n        padding: 120px 0px;\n        .shape1 {\n            top: 0;\n            left: 0;\n        }\n        .shape2 {\n            top: auto;\n            bottom: 0;\n            right: 0;\n        }\n    }\n"])),c,l.Uh.large),u=l.ZP.div(r||(r=(0,o.Z)(["\n    text-align: center;\n    .breadcrumb__title {\n        color: #fff;\n        font-weight: 700;\n        line-height: 1.545;\n        font-size: 35px;\n        font-family: ",";\n        ",' {\n            font-size: 55px;\n        }\n    }\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            padding-left: 0;\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #fff;\n\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #fff;\n                font-size: 15px;\n                font-weight: 500;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active,\n                &[aria-current="page"] {\n                    font-weight: 900;\n                    background: ',";\n                    -webkit-background-clip: text;\n                    -webkit-text-fill-color: transparent;\n                }\n            }\n        }\n    }\n"])),(0,l.R)("fonts.heading"),l.Uh.large,(0,l.R)("colors.gradient")),f=t(3723),p=t(4382),b=function(e){var a=e.title,n=(e.crumbLabel,e.location),r=e.pageContext.breadcrumb.crumbs,o=n.pathname.toLowerCase().split("/"),l=o[o.length-1].split("-");return(0,p.tZ)(d,null,(0,p.tZ)("div",{className:"shape shape1"},(0,p.tZ)(f.S,{src:"../../data/images/bread/1.png",alt:"",__imageData:t(506)})),(0,p.tZ)("div",{className:"shape shape2"},(0,p.tZ)(f.S,{src:"../../data/images/bread/2.png",alt:"",__imageData:t(6740)})),(0,p.tZ)(s.Z,null,(0,p.tZ)(u,null,(0,p.tZ)(i.aG,{title:a,crumbs:r,crumbLabel:l.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))}},7579:function(e,a,t){"use strict";t.d(a,{Z:function(){return k}});var n,r,i,s,o,l,c,d=t(3723),u=t(6616),f=t(1880),p=t(295),b=(0,p.F4)(n||(n=(0,f.Z)(["\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(359deg);\n    }\n"]))),m=p.ZP.div(r||(r=(0,f.Z)(["\n    display: flex;\n    position: relative;\n    background: #f7faff;\n    padding: 30px 25px 30px 25px;\n    border-radius: 15px;\n    margin-bottom: 30px;\n    "," {\n        padding: 40px 40px 40px 50px;\n    }\n    .line {\n        position: absolute !important;\n        bottom: 0;\n        left: 0;\n        z-index: 1;\n    }\n"])),p.Uh.xlarge),g=p.ZP.div(i||(i=(0,f.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: white;\n    box-shadow: 0px 22px 35px 0px rgb(2 18 106 / 8%);\n    min-width: 100px;\n    height: 100px;\n    margin-right: 25px;\n    border-radius: 100%;\n    "," {\n        min-width: 115px;\n        height: 115px;\n        margin-right: 50px;\n    }\n"])),p.Uh.xlarge),h=p.ZP.div(s||(s=(0,f.Z)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    span {\n        animation: ",' 10s infinite linear;\n        position: relative;\n        display: block;\n        height: 100%;\n        &::before,\n        &::after {\n            position: absolute;\n            width: 8px;\n            height: 8px;\n            content: "";\n            border-radius: 50%;\n            background: ',";\n        }\n        &::before {\n            left: 15px;\n            bottom: 10px;\n        }\n        &::after {\n            right: 15px;\n            top: 10px;\n        }\n    }\n    &.actionOne {\n        span {\n            &::before,\n            &::after {\n                background: -webkit-linear-gradient(\n                    -45deg,\n                    #fd4485 0%,\n                    #ffa38d 100%\n                );\n            }\n        }\n    }\n    &.actionTwo {\n        span {\n            &::before,\n            &::after {\n                background: -webkit-linear-gradient(\n                    -45deg,\n                    #fd6300 0%,\n                    #ffe121 100%\n                );\n            }\n        }\n    }\n    &.actionThree {\n        span {\n            &::before,\n            &::after {\n                background: -webkit-linear-gradient(\n                    -45deg,\n                    #505eff 0%,\n                    #03bdff 100%\n                );\n            }\n        }\n    }\n    &.actionFour {\n        span {\n            &::before,\n            &::after {\n                background: -webkit-linear-gradient(\n                    -45deg,\n                    #b241ff 0%,\n                    #fe86ff 100%\n                );\n            }\n        }\n    }\n    &.actionFive {\n        span {\n            &::before,\n            &::after {\n                background: -webkit-linear-gradient(\n                    -45deg,\n                    #b241ff 0%,\n                    #fe86ff 100%\n                );\n            }\n        }\n    }\n    &.actionSix {\n        span {\n            &::before,\n            &::after {\n                background: -webkit-linear-gradient(\n                    -45deg,\n                    #b241ff 0%,\n                    #fe86ff 100%\n                );\n            }\n        }\n    }\n"])),b,(0,p.R)("colors.gradient")),v=p.ZP.div(o||(o=(0,f.Z)([""]))),w=p.ZP.h4(l||(l=(0,f.Z)([""]))),x=p.ZP.p(c||(c=(0,f.Z)(["\n    margin-bottom: 20px;\n    margin-top: 20px;\n"]))),y=t(4382),k=function(e){var a=e.lineImage,t=e.iconImage,n=e.title,r=e.disText,i=e.actionClass,s=e.outlineColor,o=e.slug,l=(0,d.c)(a),c=(0,d.c)(t);return(0,y.tZ)(m,null,(0,y.tZ)(d.G,{className:"line",image:l,alt:n}),(0,y.tZ)(g,null,(0,y.tZ)(h,{className:i},(0,y.tZ)("span",null)),(0,y.tZ)(d.G,{image:c,alt:n})),(0,y.tZ)(v,null,(0,y.tZ)(w,null,n),(0,y.tZ)(x,null,r),(0,y.tZ)(u.Z,{size:"medium",shape:"rounded5",variant:"outlined",path:"/"+o,color:s},"Details +")))}},933:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return w}});var n,r=t(4560),i=t(1749),s=t(3486),o=t(8837),l=t(386),c=t(567),d=t(7579),u=t(6662),f=t(3723),p=JSON.parse('{"TN":"Our Services","WL":"Everything you need for your business, neatly packed into one powerful software. Backed with ready-to-use software, easily integrable modules Customization of software has never been this easy before!","Oc":"WHY US","__":"Best IT Service Provider In INDIA","qx":"Choosing a better IT service provider can greatly improve the efficiency and performance of your organization. Here are some reasons why it’s important to choose us as a IT service provider","Gr":"Ultimately, choosing us as a better IT service provider can help you optimize your IT infrastructure, increase productivity, and reduce costs.","ev":[{"id":1,"class":"fas fa-check","item":"Expertise and experience"},{"id":2,"class":"fas fa-check","item":"Proactive approach"},{"id":3,"class":"fas fa-check","item":"Reliability and availability"},{"id":4,"class":"fas fa-check","item":"Cost-effectiveness"},{"id":5,"class":"fas fa-check","item":"Security"},{"id":6,"class":"fas fa-check","item":"Flexibility"}],"ps":"What Others Think","r4":"Procuring education on consulted assurance in do. Is sympathize he expression mr no travelling. Preference he he at travelling in resolution. So striking at of to welcomed resolved.","$i":[{"symbol":"icofont-star","rating":"4.5","description":"The him father parish looked has sooner. Attachment frequently gay terminated son. You greater nay use prudent placing. Passage to so distant behaved natural between do talking. Friends off her windows painful. Still gay event you being think nay for. In three aware point.","Name":"Henri Barnes"},{"symbol":"icofont-star","rating":"5","description":"The him father parish looked has sooner. Attachment frequently gay terminated son. You greater nay use prudent placing. Passage to so distant behaved natural between do talking. Friends off her windows painful. Still gay event you being think nay for. In three aware point.","Name":"Ravi Kumar"},{"symbol":"icofont-star","rating":"5","description":"The him father parish looked has sooner. Attachment frequently gay terminated son. You greater nay use prudent placing. Passage to so distant behaved natural between do talking. Friends off her windows painful. Still gay event you being think nay for. In three aware point.","Name":"Soyan Mondal"},{"symbol":"icofont-star","rating":"5","description":"The him father parish looked has sooner. Attachment frequently gay terminated son. You greater nay use prudent placing. Passage to so distant behaved natural between do talking. Friends off her windows painful. Still gay event you being think nay for. In three aware point.","Name":"Soyan Mondal"},{"symbol":"icofont-star","rating":"5","description":"The him father parish looked has sooner. Attachment frequently gay terminated son. You greater nay use prudent placing. Passage to so distant behaved natural between do talking. Friends off her windows painful. Still gay event you being think nay for. In three aware point.","Name":"Soyan Mondal"},{"symbol":"icofont-star","rating":"5","description":"The him father parish looked has sooner. Attachment frequently gay terminated son. You greater nay use prudent placing. Passage to so distant behaved natural between do talking. Friends off her windows painful. Still gay event you being think nay for. In three aware point.","Name":"Soyan Mondal"}]}'),b=t(1880),m=t(295).ZP.section(n||(n=(0,b.Z)(["\n    padding: 120px 0;\n"]))),g=t(4382),h=function(e){var a=e.data;return(0,g.tZ)(m,null,(0,g.tZ)(o.Z,null,(0,g.tZ)("div",{className:"inner-wrapper"},(0,g.tZ)("h1",null,p.TN),(0,g.tZ)("p",null,p.WL)),(0,g.tZ)(l.Z,{className:"gx-5"},(null==a?void 0:a.items)&&(null==a?void 0:a.items.map((function(e,a){return(0,g.tZ)(c.Z,{lg:6,md:6,key:a},(0,g.tZ)(d.Z,{iconImage:e.images[0].src,lineImage:e.images[1].src,title:e.title,disText:e.excerpt,actionClass:e.className,outlineColor:e.outlineColor,slug:e.slug}))})))),(0,g.tZ)("div",{className:"package-section api-integration-section container"},(0,g.tZ)("div",{className:" d-flex flex-wrap flex-row "},(0,g.tZ)("div",{className:"api-types-accordion services-inner-wrapper"},(0,g.tZ)("div",{className:"api-types-title-wrapper services-page-wrapper"},(0,g.tZ)("h5",null,p.Oc),(0,g.tZ)("h4",{className:"seo-page-title"},p.__),(0,g.tZ)("p",null,p.qx)),(0,g.tZ)("ul",null,p.ev.map((function(e,a){return(0,g.tZ)("li",{key:a.id},(0,g.tZ)("i",{className:e.class}),e.item)}))),(0,g.tZ)("div",null,(0,g.tZ)("p",null,p.Gr))),(0,g.tZ)("div",{className:"api-types-title"}))),(0,g.tZ)("div",{className:"others-think-section"},(0,g.tZ)("h2",null,p.ps),(0,g.tZ)("p",null,p.r4),(0,g.tZ)("div",{className:"slider-section container"},(0,g.tZ)("div",{className:"container"},(0,g.tZ)(u.Ub,{controls:!0,indicators:!0},p.$i.map((function(e,a){return(0,g.tZ)(u.io,null,(0,g.tZ)(u.Cc,{className:"d-none d-md-block"},(0,g.tZ)("i",{className:e.symbol},e.rating),(0,g.tZ)("p",null,e.description),(0,g.tZ)(f.S,{src:"../../data/images/icons/3.png",alt:"logo_not_found",__imageData:t(5648)}),(0,g.tZ)("h5",null,e.Name)))}))))))))},v=t(2841),w=function(e){var a,t=e.data,n=e.location,o=e.pageContext,l=(0,v.normalizedData)((null==t||null===(a=t.allGeneral)||void 0===a?void 0:a.nodes)||[]),c=(0,v.normalizedData)((null==t?void 0:t.page.content)||[]);return(0,g.tZ)(r.Z,{data:Object.assign({},l.menu,l.footer)},(0,g.tZ)(i.Z,{title:"Services Page",pathname:"/"}),(0,g.tZ)(s.Z,{pageContext:o,location:n,title:"Services Page"}),(0,g.tZ)(h,{data:Object.assign({},c["services-section"],{items:t.allServices.nodes})}))}},7071:function(e){e.exports=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r},e.exports.__esModule=!0,e.exports.default=e.exports},6740:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png","srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/8ba95/2.png 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/46fb7/2.png 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/17f36/2.png 245w","sizes":"(min-width: 245px) 245px, 100vw"},"sources":[{"srcSet":"/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/24b23/2.webp 61w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/a21ae/2.webp 123w,\\n/static/9a5a4888ec4ca34f7aa4ac5c7b6b8e6a/cbd90/2.webp 245w","type":"image/webp","sizes":"(min-width: 245px) 245px, 100vw"}]},"width":245,"height":195}')},506:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5332648ed989b420fc34583bf8165d74/7d176/1.png","srcSet":"/static/5332648ed989b420fc34583bf8165d74/91447/1.png 59w,\\n/static/5332648ed989b420fc34583bf8165d74/ff5f8/1.png 119w,\\n/static/5332648ed989b420fc34583bf8165d74/7d176/1.png 237w","sizes":"(min-width: 237px) 237px, 100vw"},"sources":[{"srcSet":"/static/5332648ed989b420fc34583bf8165d74/299b3/1.webp 59w,\\n/static/5332648ed989b420fc34583bf8165d74/44f4b/1.webp 119w,\\n/static/5332648ed989b420fc34583bf8165d74/55192/1.webp 237w","type":"image/webp","sizes":"(min-width: 237px) 237px, 100vw"}]},"width":237,"height":219.99999999999997}')},5648:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8f8f8","images":{"fallback":{"src":"/static/e19f73e8c1e0eddfd7f0c288463a6ab5/69237/3.png","srcSet":"/static/e19f73e8c1e0eddfd7f0c288463a6ab5/86ee2/3.png 13w,\\n/static/e19f73e8c1e0eddfd7f0c288463a6ab5/996d8/3.png 26w,\\n/static/e19f73e8c1e0eddfd7f0c288463a6ab5/69237/3.png 52w","sizes":"(min-width: 52px) 52px, 100vw"},"sources":[{"srcSet":"/static/e19f73e8c1e0eddfd7f0c288463a6ab5/68795/3.webp 13w,\\n/static/e19f73e8c1e0eddfd7f0c288463a6ab5/1f89c/3.webp 26w,\\n/static/e19f73e8c1e0eddfd7f0c288463a6ab5/284ac/3.webp 52w","type":"image/webp","sizes":"(min-width: 52px) 52px, 100vw"}]},"width":52,"height":52}')}}]);
//# sourceMappingURL=component---src-pages-services-jsx-80d58b79a226a3836e41.js.map