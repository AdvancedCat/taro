(window.webpackJsonp=window.webpackJsonp||[]).push([[957],{1096:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),c=r(9),a=(r(0),r(1626)),b={title:"Taro.createIntersectionObserver(component, options)",sidebar_label:"createIntersectionObserver"},o={id:"apis/wxml/createIntersectionObserver",title:"Taro.createIntersectionObserver(component, options)",description:"\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a IntersectionObserver \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 `this.createIntersectionObserver([options])` \u6765\u4ee3\u66ff\u3002",source:"@site/docs/apis/wxml/createIntersectionObserver.md",permalink:"/taro/docs/next/apis/wxml/createIntersectionObserver",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/wxml/createIntersectionObserver.md",version:"next",sidebar_label:"createIntersectionObserver",sidebar:"API",previous:{title:"Taro.createSelectorQuery()",permalink:"/taro/docs/next/apis/wxml/createSelectorQuery"},next:{title:"IntersectionObserver",permalink:"/taro/docs/next/apis/wxml/IntersectionObserver"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:l};function s(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a IntersectionObserver \u5bf9\u8c61\u5b9e\u4f8b\u3002\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6216\u5305\u542b\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u9875\u9762\u4e2d\uff0c\u5e94\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"this.createIntersectionObserver([options])")," \u6765\u4ee3\u66ff\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(component: Record<string, any>, options?: Option) => IntersectionObserver\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"option"},"Option"),Object(a.b)("p",null,"\u9009\u9879"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"initialRatio"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u521d\u59cb\u7684\u76f8\u4ea4\u6bd4\u4f8b\uff0c\u5982\u679c\u8c03\u7528\u65f6\u68c0\u6d4b\u5230\u7684\u76f8\u4ea4\u6bd4\u4f8b\u4e0e\u8fd9\u4e2a\u503c\u4e0d\u76f8\u7b49\u4e14\u8fbe\u5230\u9608\u503c\uff0c\u5219\u4f1a\u89e6\u53d1\u4e00\u6b21\u76d1\u542c\u5668\u7684\u56de\u8c03\u51fd\u6570\u3002")),Object(a.b)("tr",null,Object(a.b)("td",null,"observeAll"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u540c\u65f6\u89c2\u6d4b\u591a\u4e2a\u76ee\u6807\u8282\u70b9\uff08\u800c\u975e\u4e00\u4e2a\uff09\uff0c\u5982\u679c\u8bbe\u4e3a true \uff0cobserve \u7684 targetSelector \u5c06\u9009\u4e2d\u591a\u4e2a\u8282\u70b9\uff08\u6ce8\u610f\uff1a\u540c\u65f6\u9009\u4e2d\u8fc7\u591a\u8282\u70b9\u5c06\u5f71\u54cd\u6e32\u67d3\u6027\u80fd\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"thresholds"),Object(a.b)("td",null,Object(a.b)("code",null,"number[]")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u4e00\u4e2a\u6570\u503c\u6570\u7ec4\uff0c\u5305\u542b\u6240\u6709\u9608\u503c\u3002")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const\xa0observer\xa0=\xa0Taro.createIntersectionObserver(this,\xa0{\xa0thresholds:\xa0[0],\xa0observeAll:\xa0true\xa0})\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.createIntersectionObserver"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0},1626:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),s=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},O=function(e){var t=s(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),O=s(r),u=n,d=O["".concat(b,".").concat(u)]||O[u]||p[u]||a;return r?c.a.createElement(d,o({ref:t},i,{components:r})):c.a.createElement(d,o({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,b=new Array(a);b[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var i=2;i<a;i++)b[i]=r[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);