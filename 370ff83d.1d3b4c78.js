(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{1626:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,v=s["".concat(i,".").concat(b)]||s[b]||d[b]||c;return n?o.a.createElement(v,a({ref:t},u,{components:n})):o.a.createElement(v,a({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},471:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),c=(n(0),n(1626)),i={title:"Taro.getConnectedBluetoothDevices(OBJECT)",sidebar_label:"getConnectedBluetoothDevices"},a={id:"version-1.3.42/apis/device/bluetooth/getConnectedBluetoothDevices",title:"Taro.getConnectedBluetoothDevices(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.getConnectedBluetoothDevices`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getConnectedBluetoothDevices.html)\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002\r",source:"@site/versioned_docs/version-1.3.42/apis/device/bluetooth/getConnectedBluetoothDevices.md",permalink:"/taro/docs/1.3.42/apis/device/bluetooth/getConnectedBluetoothDevices",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.42/apis/device/bluetooth/getConnectedBluetoothDevices.md",version:"1.3.42",sidebar_label:"getConnectedBluetoothDevices",sidebar:"version-1.3.42/API",previous:{title:"Taro.getBluetoothDevices(OBJECT)",permalink:"/taro/docs/1.3.42/apis/device/bluetooth/getBluetoothDevices"},next:{title:"Taro.onBluetoothAdapterStateChange(CALLBACK)",permalink:"/taro/docs/1.3.42/apis/device/bluetooth/onBluetoothAdapterStateChange"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.getConnectedBluetoothDevices.html"}),Object(c.b)("inlineCode",{parentName:"a"},"wx.getConnectedBluetoothDevices")),"\uff0c\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getConnectedBluetoothDevices(params).then(...)\n")))}p.isMDXComponent=!0}}]);