(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1626:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},O=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(a),u=r,m=O["".concat(l,".").concat(u)]||O[u]||j[u]||c;return a?n.a.createElement(m,b({ref:t},i,{components:a})):n.a.createElement(m,b({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var i=2;i<c;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},428:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(9),c=(a(0),a(1626)),l={title:"Taro.pageScrollTo(param)",sidebar_label:"pageScrollTo"},b={id:"version-1.3.42/apis/interface/pagescroll/pageScrollTo",title:"Taro.pageScrollTo(param)",description:"\u5c06\u9875\u9762\u6eda\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e\u3002",source:"@site/versioned_docs/version-1.3.42/apis/interface/pagescroll/pageScrollTo.md",permalink:"/taro/docs/1.3.42/apis/interface/pagescroll/pageScrollTo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/interface/pagescroll/pageScrollTo.md",version:"1.3.42",sidebar_label:"pageScrollTo",sidebar:"version-1.3.42/API",previous:{title:"Taro.setNavigationBarColor(param)",permalink:"/taro/docs/1.3.42/apis/interface/navigationbar/setNavigationBarColor"},next:{title:"Taro.startPullDownRefresh(param)",permalink:"/taro/docs/1.3.42/apis/interface/pulldownrefresh/startPullDownRefresh"}},o=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"object param",id:"object-param",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5c06\u9875\u9762\u6eda\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e\u3002"),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.pageScrollTo.html"}),Object(c.b)("inlineCode",{parentName:"a"},"wx.pageScrollTo")),"\uff0c\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"object-param"},"object param"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"scrollTop"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"number")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6eda\u52a8\u5230\u9875\u9762\u7684\u76ee\u6807\u4f4d\u7f6e\uff0c\u5355\u4f4d px")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[duration]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"number")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"300")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6eda\u52a8\u52a8\u753b\u7684\u65f6\u957f\uff0c\u5355\u4f4d ms")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[success]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"function")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[fail]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"function")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[complete]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"function")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.pageScrollTo(params).then(...)\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.pageScrollTo"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);