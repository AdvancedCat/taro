"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[26382],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=d(n),m=a,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85516:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Taro.setWindowSize(option)",sidebar_label:"setWindowSize"},p=void 0,d={unversionedId:"apis/ui/window/setWindowSize",id:"version-3.x/apis/ui/window/setWindowSize",title:"Taro.setWindowSize(option)",description:"\u8bbe\u7f6e\u7a97\u53e3\u5927\u5c0f\uff0c\u8be5\u63a5\u53e3\u4ec5\u9002\u7528\u4e8e PC \u5e73\u53f0\uff0c\u4f7f\u7528\u7ec6\u5219\u8bf7\u53c2\u89c1\u6307\u5357",source:"@site/versioned_docs/version-3.x/apis/ui/window/setWindowSize.md",sourceDirName:"apis/ui/window",slug:"/apis/ui/window/setWindowSize",permalink:"/taro/docs/apis/ui/window/setWindowSize",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/window/setWindowSize.md",tags:[],version:"3.x",frontMatter:{title:"Taro.setWindowSize(option)",sidebar_label:"setWindowSize"},sidebar:"API",previous:{title:"getMenuButtonBoundingClientRect",permalink:"/taro/docs/apis/ui/menu/getMenuButtonBoundingClientRect"},next:{title:"onWindowResize",permalink:"/taro/docs/apis/ui/window/onWindowResize"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2}],u={toc:c};function s(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8bbe\u7f6e\u7a97\u53e3\u5927\u5c0f\uff0c\u8be5\u63a5\u53e3\u4ec5\u9002\u7528\u4e8e PC \u5e73\u53f0\uff0c\u4f7f\u7528\u7ec6\u5219\u8bf7\u53c2\u89c1\u6307\u5357"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.setWindowSize.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"option"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"width"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7a97\u53e3\u5bbd\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"height"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7a97\u53e3\u9ad8\u5ea6\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"complete"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fail"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"success"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))))}s.isMDXComponent=!0},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);