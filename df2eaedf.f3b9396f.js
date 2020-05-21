(window.webpackJsonp=window.webpackJsonp||[]).push([[1305],{1441:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(1),a=t(9),o=(t(0),t(1626)),c={title:"\u5f02\u6b65\u7f16\u7a0b"},i={id:"version-2.2.1/async-await",title:"\u5f02\u6b65\u7f16\u7a0b",description:"> Taro 2.x \u7248\u672c\u4e2d\u4f7f\u7528 `async-await` \u4e0d\u518d\u9700\u8981 `@tarojs/async-await`\u3002",source:"@site/versioned_docs/version-2.2.1/async-await.md",permalink:"/taro/docs/async-await",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/async-await.md",version:"2.2.1",sidebar:"version-2.2.1/docs",previous:{title:"\u57fa\u4e8e Taro \u5f00\u53d1\u7b2c\u4e09\u65b9\u591a\u7aef UI \u5e93",permalink:"/taro/docs/ui-lib"},next:{title:"\u4f7f\u7528\u5c0f\u7a0b\u5e8f\u539f\u751f\u7b2c\u4e09\u65b9\u7ec4\u4ef6\u548c\u63d2\u4ef6",permalink:"/taro/docs/mini-third-party"}},l=[],p={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Taro 2.x \u7248\u672c\u4e2d\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async-await")," \u4e0d\u518d\u9700\u8981 ",Object(o.b)("inlineCode",{parentName:"p"},"@tarojs/async-await"),"\u3002")),Object(o.b)("p",null,"Taro \u652f\u6301\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u6765\u8ba9\u5f00\u53d1\u8005\u83b7\u5f97\u4e0d\u9519\u7684\u5f02\u6b65\u7f16\u7a0b\u4f53\u9a8c\uff0c\u5f00\u542f ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u652f\u6301\u9700\u8981\u5b89\u88c5\u5305 ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"babel-runtime"),"\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn add babel-plugin-transform-runtime --dev\n$ yarn add babel-runtime\n")),Object(o.b)("p",null,"\u968f\u540e\u4fee\u6539\u9879\u76ee ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/taro/docs/config-detail#babel"}),Object(o.b)("inlineCode",{parentName:"a"},"babel")," \u914d\u7f6e"),"\uff0c\u589e\u52a0\u63d2\u4ef6 ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-transform-runtime"),"\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"babel: {\n  sourceMap: true,\n  presets: [\n    [\n      'env',\n      {\n        modules: false\n      }\n    ]\n  ],\n  plugins: [\n    'transform-decorators-legacy',\n    'transform-class-properties',\n    'transform-object-rest-spread',\n    ['transform-runtime', {\n      \"helpers\": false,\n      \"polyfill\": false,\n      \"regenerator\": true,\n      \"moduleName\": 'babel-runtime'\n    }]\n  ]\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u503c\u5f97\u6ce8\u610f\u7684\u4e8b\uff0c\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"async functions")," \u4e00\u5b9a\u8981\u8bb0\u5f97\u6309\u7167",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/taro/docs/before-dev-remind"}),"\u5f00\u53d1\u524d\u6ce8\u610f"),"\u4e2d\u63d0\u793a\u7684\u5185\u5bb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u62a5\u9519")))}b.isMDXComponent=!0},1626:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},s=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),m=r,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return t?a.a.createElement(d,i({ref:n},p,{components:t})):a.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);