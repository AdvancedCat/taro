(window.webpackJsonp=window.webpackJsonp||[]).push([[913],{1052:function(t,e,l){"use strict";l.r(e),l.d(e,"frontMatter",(function(){return r})),l.d(e,"metadata",(function(){return a})),l.d(e,"rightToc",(function(){return u})),l.d(e,"default",(function(){return j}));var b=l(1),n=l(9),c=(l(0),l(1626)),r={title:"Taro.scanCode(option)",sidebar_label:"scanCode"},a={id:"version-2.2.1/apis/device/scan/scancode",title:"Taro.scanCode(option)",description:"\u8c03\u8d77\u5ba2\u6237\u7aef\u626b\u7801\u754c\u9762\uff0c\u626b\u7801\u6210\u529f\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u7ed3\u679c",source:"@site/versioned_docs/version-2.2.1/apis/device/scan/scancode.md",permalink:"/taro/docs/apis/device/scan/scancode",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/apis/device/scan/scancode.md",version:"2.2.1",sidebar_label:"scanCode",sidebar:"version-2.2.1/API",previous:{title:"Taro.onMemoryWarning(callback)",permalink:"/taro/docs/apis/device/performance/onMemoryWarning"},next:{title:"Taro.vibrateShort(option)",permalink:"/taro/docs/apis/device/vibrate/vibrateShort"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ScanType",id:"scantype",children:[]},{value:"QRType",id:"qrtype",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],O={rightToc:u};function j(t){var e=t.components,l=Object(n.a)(t,["components"]);return Object(c.b)("wrapper",Object(b.a)({},O,l,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8c03\u8d77\u5ba2\u6237\u7aef\u626b\u7801\u754c\u9762\uff0c\u626b\u7801\u6210\u529f\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u7ed3\u679c"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"onlyFromCamera"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u53ea\u80fd\u4ece\u76f8\u673a\u626b\u7801\uff0c\u4e0d\u5141\u8bb8\u4ece\u76f8\u518c\u9009\u62e9\u56fe\u7247")),Object(c.b)("tr",null,Object(c.b)("td",null,"scanType"),Object(c.b)("td",null,Object(c.b)("code",null,'("barCode" | "qrCode" | "datamatrix" | "pdf417")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u626b\u7801\u7c7b\u578b")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"charSet"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u6240\u626b\u7801\u7684\u5b57\u7b26\u96c6")),Object(c.b)("tr",null,Object(c.b)("td",null,"path"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u5f53\u6240\u626b\u7684\u7801\u4e3a\u5f53\u524d\u5c0f\u7a0b\u5e8f\u4e8c\u7ef4\u7801\u65f6\uff0c\u4f1a\u8fd4\u56de\u6b64\u5b57\u6bb5\uff0c\u5185\u5bb9\u4e3a\u4e8c\u7ef4\u7801\u643a\u5e26\u7684 path")),Object(c.b)("tr",null,Object(c.b)("td",null,"rawData"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u539f\u59cb\u6570\u636e\uff0cbase64\u7f16\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u6240\u626b\u7801\u7684\u5185\u5bb9")),Object(c.b)("tr",null,Object(c.b)("td",null,"scanType"),Object(c.b)("td",null,Object(c.b)("code",null,'"QR_CODE" | "AZTEC" | "CODABAR" | "CODE_39" | "CODE_93" | "CODE_128" | "DATA_MATRIX" | "EAN_8" | "EAN_13" | "ITF" | "MAXICODE" | "PDF_417" | "RSS_14" | "RSS_EXPANDED" | "UPC_A" | "UPC_E" | "UPC_EAN_EXTENSION" | "WX_CODE" | "CODE_25"')),Object(c.b)("td",null,"\u6240\u626b\u7801\u7684\u7c7b\u578b")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"scantype"},"ScanType"),Object(c.b)("p",null,"\u626b\u7801\u7c7b\u578b"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"barCode"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"qrCode"),Object(c.b)("td",null,"\u4e8c\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"datamatrix"),Object(c.b)("td",null,"Data Matrix \u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"pdf417"),Object(c.b)("td",null,"PDF417 \u6761\u7801")))),Object(c.b)("h3",{id:"qrtype"},"QRType"),Object(c.b)("p",null,"\u6240\u626b\u7801\u7684\u7c7b\u578b"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"QR_CODE"),Object(c.b)("td",null,"\u4e8c\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"AZTEC"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"CODABAR"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"CODE_39"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"CODE_93"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"CODE_128"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"DATA_MATRIX"),Object(c.b)("td",null,"\u4e8c\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"EAN_8"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"EAN_13"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"ITF"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"MAXICODE"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"PDF_417"),Object(c.b)("td",null,"\u4e8c\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"RSS_14"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"RSS_EXPANDED"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"UPC_A"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"UPC_E"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"UPC_EAN_EXTENSION"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"WX_CODE"),Object(c.b)("td",null,"\u4e8c\u7ef4\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"CODE_25"),Object(c.b)("td",null,"\u4e00\u7ef4\u7801")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"// \u5141\u8bb8\u4ece\u76f8\u673a\u548c\u76f8\u518c\u626b\u7801\nTaro.scanCode({\n  success: (res) => {\n    console.log(res)\n  }\n})\n      // \u53ea\u5141\u8bb8\u4ece\u76f8\u673a\u626b\u7801\nTaro.scanCode({\n  onlyFromCamera: true,\n  success: (res) => {\n    console.log(res)\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Taro.scanCode"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}j.isMDXComponent=!0},1626:function(t,e,l){"use strict";l.d(e,"a",(function(){return d})),l.d(e,"b",(function(){return s}));var b=l(0),n=l.n(b);function c(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,b)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){c(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,b,n=function(t,e){if(null==t)return{};var l,b,n={},c=Object.keys(t);for(b=0;b<c.length;b++)l=c[b],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(b=0;b<c.length;b++)l=c[b],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var O=n.a.createContext({}),j=function(t){var e=n.a.useContext(O),l=e;return t&&(l="function"==typeof t?t(e):a({},e,{},t)),l},d=function(t){var e=j(t.components);return n.a.createElement(O.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},i=Object(b.forwardRef)((function(t,e){var l=t.components,b=t.mdxType,c=t.originalType,r=t.parentName,O=u(t,["components","mdxType","originalType","parentName"]),d=j(l),i=b,s=d["".concat(r,".").concat(i)]||d[i]||o[i]||c;return l?n.a.createElement(s,a({ref:e},O,{components:l})):n.a.createElement(s,a({ref:e},O))}));function s(t,e){var l=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var c=l.length,r=new Array(c);r[0]=i;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:b,r[1]=a;for(var O=2;O<c;O++)r[O]=l[O];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,l)}i.displayName="MDXCreateElement"}}]);