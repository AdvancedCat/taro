"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48846],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,g=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},444:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],c={title:"Taro.getCurrentPages()",sidebar_label:"getCurrentPages"},p=void 0,l={unversionedId:"apis/framework/getCurrentPages",id:"version-3.x/apis/framework/getCurrentPages",title:"Taro.getCurrentPages()",description:"\u83b7\u53d6\u5f53\u524d\u9875\u9762\u6808\u3002\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u9996\u9875\uff0c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a\u5f53\u524d\u9875\u9762\u3002",source:"@site/versioned_docs/version-3.x/apis/framework/getCurrentPages.md",sourceDirName:"apis/framework",slug:"/apis/framework/getCurrentPages",permalink:"/taro/docs/apis/framework/getCurrentPages",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/framework/getCurrentPages.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getCurrentPages()",sidebar_label:"getCurrentPages"},sidebar:"API",previous:{title:"getApp",permalink:"/taro/docs/apis/framework/getApp"},next:{title:"Page",permalink:"/taro/docs/apis/framework/Page"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],u={toc:s};function m(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u9875\u9762\u6808\u3002\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u9996\u9875\uff0c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a\u5f53\u524d\u9875\u9762\u3002\n",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4e0d\u8981\u5c1d\u8bd5\u4fee\u6539\u9875\u9762\u6808\uff0c\u4f1a\u5bfc\u81f4\u8def\u7531\u4ee5\u53ca\u9875\u9762\u72b6\u6001\u9519\u8bef\u3002")),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"App.onLaunch")," \u7684\u65f6\u5019\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"getCurrentPages()"),"\uff0c\u6b64\u65f6 ",(0,o.kt)("inlineCode",{parentName:"li"},"page")," \u8fd8\u6ca1\u6709\u751f\u6210\u3002")),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/getCurrentPages.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => Page[]\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getCurrentPages().length\n")))}m.isMDXComponent=!0},5030:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);