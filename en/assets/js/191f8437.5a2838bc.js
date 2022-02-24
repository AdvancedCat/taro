"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24849],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50360:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={title:"Taro.onLocationChangeError(callback)",sidebar_label:"onLocationChangeError"},c=void 0,p={unversionedId:"apis/location/onLocationChangeError",id:"apis/location/onLocationChangeError",title:"Taro.onLocationChangeError(callback)",description:"\u76d1\u542c\u6301\u7eed\u5b9a\u4f4d\u63a5\u53e3\u8fd4\u56de\u5931\u8d25\u65f6\u89e6\u53d1",source:"@site/docs/apis/location/onLocationChangeError.md",sourceDirName:"apis/location",slug:"/apis/location/onLocationChangeError",permalink:"/taro/en/docs/next/apis/location/onLocationChangeError",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/location/onLocationChangeError.md",tags:[],version:"current",frontMatter:{title:"Taro.onLocationChangeError(callback)",sidebar_label:"onLocationChangeError"},sidebar:"API",previous:{title:"openLocation",permalink:"/taro/en/docs/next/apis/location/openLocation"},next:{title:"onLocationChange",permalink:"/taro/en/docs/next/apis/location/onLocationChange"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3}],level:2}],s={toc:u};function m(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u76d1\u542c\u6301\u7eed\u5b9a\u4f4d\u63a5\u53e3\u8fd4\u56de\u5931\u8d25\u65f6\u89e6\u53d1"),(0,o.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,o.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,o.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,o.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChangeError.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"callback"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Callback")),(0,o.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u6301\u7eed\u5b9a\u4f4d\u63a5\u53e3\u8fd4\u56de\u5931\u8d25\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"\u76d1\u542c\u6301\u7eed\u5b9a\u4f4d\u63a5\u53e3\u8fd4\u56de\u5931\u8d25\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"result"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CallbackResult"))))),(0,o.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"errCode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u7801")))))}m.isMDXComponent=!0},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);