(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{1626:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(f,c({ref:n},p,{components:t})):o.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},545:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),o=t(9),a=(t(0),t(1626)),i={title:"Taro.onBLEConnectionStateChange(CALLBACK)",sidebar_label:"onBLEConnectionStateChange"},c={id:"version-1.3.42/apis/device/ble/onBLEConnectionStateChange",title:"Taro.onBLEConnectionStateChange(CALLBACK)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.onBLEConnectionStateChange`](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBLEConnectionStateChange.html)\u3002\r",source:"@site/versioned_docs/version-1.3.42/apis/device/ble/onBLEConnectionStateChange.md",permalink:"/taro/docs/1.3.42/apis/device/ble/onBLEConnectionStateChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/device/ble/onBLEConnectionStateChange.md",version:"1.3.42",sidebar_label:"onBLEConnectionStateChange",sidebar:"version-1.3.42/API",previous:{title:"Taro.onBLECharacteristicValueChange(CALLBACK)",permalink:"/taro/docs/1.3.42/apis/device/ble/onBLECharacteristicValueChange"},next:{title:"Taro.readBLECharacteristicValue(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/ble/readBLECharacteristicValue"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBLEConnectionStateChange.html"}),Object(a.b)("inlineCode",{parentName:"a"},"wx.onBLEConnectionStateChange")),"\u3002"),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onBLEConnectionStateChange(res => {\n  // \u8be5\u65b9\u6cd5\u56de\u8c03\u4e2d\u53ef\u4ee5\u7528\u4e8e\u5904\u7406\u8fde\u63a5\u610f\u5916\u65ad\u5f00\u7b49\u5f02\u5e38\u60c5\u51b5\n  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)\n})\n")))}s.isMDXComponent=!0}}]);