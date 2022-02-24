"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[64526],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(n),k=l,f=d["".concat(u,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79449:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),o=["components"],i={title:"Taro.getUserInfo(option)",sidebar_label:"getUserInfo"},u=void 0,s={unversionedId:"apis/open-api/user-info/getUserInfo",id:"version-2.x/apis/open-api/user-info/getUserInfo",title:"Taro.getUserInfo(option)",description:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002",source:"@site/versioned_docs/version-2.x/apis/open-api/user-info/getUserInfo.md",sourceDirName:"apis/open-api/user-info",slug:"/apis/open-api/user-info/getUserInfo",permalink:"/taro/en/docs/2.x/apis/open-api/user-info/getUserInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/open-api/user-info/getUserInfo.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getUserInfo(option)",sidebar_label:"getUserInfo"},sidebar:"version-2.x/API",previous:{title:"getUserProfile",permalink:"/taro/en/docs/2.x/apis/open-api/user-info/getUserProfile"},next:{title:"UserInfo",permalink:"/taro/en/docs/2.x/apis/open-api/user-info/UserInfo"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],p={toc:c};function d(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u8c03\u6574\u8bf4\u660e"),"\n\u5728\u7528\u6237\u672a\u6388\u6743\u8fc7\u7684\u60c5\u51b5\u4e0b\u8c03\u7528\u6b64\u63a5\u53e3\uff0c\u5c06\u4e0d\u518d\u51fa\u73b0\u6388\u6743\u5f39\u7a97\uff0c\u4f1a\u76f4\u63a5\u8fdb\u5165 fail \u56de\u8c03\uff08\u8be6\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01"},"\u300a\u516c\u544a\u300b"),")\u3002\u5728\u7528\u6237\u5df2\u6388\u6743\u7684\u60c5\u51b5\u4e0b\u8c03\u7528\u6b64\u63a5\u53e3\uff0c\u53ef\u6210\u529f\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"lang"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"en" | "zh_CN" | "zh_TW"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u663e\u793a\u7528\u6237\u4fe1\u606f\u7684\u8bed\u8a00")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"withCredentials"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u5e26\u4e0a\u767b\u5f55\u6001\u4fe1\u606f\u3002\u5f53 withCredentials \u4e3a true \u65f6\uff0c\u8981\u6c42\u6b64\u524d\u6709\u8c03\u7528\u8fc7 Taro.login \u4e14\u767b\u5f55\u6001\u5c1a\u672a\u8fc7\u671f\uff0c\u6b64\u65f6\u8fd4\u56de\u7684\u6570\u636e\u4f1a\u5305\u542b encryptedData, iv \u7b49\u654f\u611f\u4fe1\u606f\uff1b\u5f53 withCredentials \u4e3a false \u65f6\uff0c\u4e0d\u8981\u6c42\u6709\u767b\u5f55\u6001\uff0c\u8fd4\u56de\u7684\u6570\u636e\u4e0d\u5305\u542b encryptedData, iv \u7b49\u654f\u611f\u4fe1\u606f\u3002")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"cloudID"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u654f\u611f\u6570\u636e\u5bf9\u5e94\u7684\u4e91 ID\uff0c\u5f00\u901a",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html"},"\u4e91\u5f00\u53d1"),"\u7684\u5c0f\u7a0b\u5e8f\u624d\u4f1a\u8fd4\u56de\uff0c\u53ef\u901a\u8fc7\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e\uff0c\u8be6\u7ec6\u89c1",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud"},"\u4e91\u8c03\u7528\u76f4\u63a5\u83b7\u53d6\u5f00\u653e\u6570\u636e"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"encryptedData"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u5305\u62ec\u654f\u611f\u6570\u636e\u5728\u5185\u7684\u5b8c\u6574\u7528\u6237\u4fe1\u606f\u7684\u52a0\u5bc6\u6570\u636e\uff0c\u8be6\u89c1 ",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iv"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u52a0\u5bc6\u7b97\u6cd5\u7684\u521d\u59cb\u5411\u91cf\uff0c\u8be6\u89c1 ",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"rawData"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u4e0d\u5305\u62ec\u654f\u611f\u4fe1\u606f\u7684\u539f\u59cb\u6570\u636e\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u8ba1\u7b97\u7b7e\u540d")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"signature"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u4f7f\u7528 sha1( rawData + sessionkey ) \u5f97\u5230\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6821\u9a8c\u7528\u6237\u4fe1\u606f\uff0c\u8be6\u89c1 ",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html"},"\u7528\u6237\u6570\u636e\u7684\u7b7e\u540d\u9a8c\u8bc1\u548c\u52a0\u89e3\u5bc6"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"userInfo"),(0,a.kt)("td",null,(0,a.kt)("code",null,"UserInfo")),(0,a.kt)("td",null,"\u7528\u6237\u4fe1\u606f\u5bf9\u8c61\uff0c\u4e0d\u5305\u542b openid \u7b49\u654f\u611f\u4fe1\u606f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u5fc5\u987b\u662f\u5728\u7528\u6237\u5df2\u7ecf\u6388\u6743\u7684\u60c5\u51b5\u4e0b\u8c03\u7528\nTaro.getUserInfo({\n  success: function(res) {\n    var userInfo = res.userInfo\n    var nickName = userInfo.nickName\n    var avatarUrl = userInfo.avatarUrl\n    var gender = userInfo.gender //\u6027\u522b 0\uff1a\u672a\u77e5\u30011\uff1a\u7537\u30012\uff1a\u5973\n    var province = userInfo.province\n    var city = userInfo.city\n    var country = userInfo.country\n  }\n})\n")),(0,a.kt)("p",null,"\u654f\u611f\u6570\u636e\u6709\u4e24\u79cd\u83b7\u53d6\u65b9\u5f0f\uff0c\u4e00\u662f\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95"},"\u52a0\u5bc6\u6570\u636e\u89e3\u5bc6\u7b97\u6cd5")," \u3002\n\u83b7\u53d6\u5f97\u5230\u7684\u5f00\u653e\u6570\u636e\u4e3a\u4ee5\u4e0b json \u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openId": "OPENID",\n  "nickName": "NICKNAME",\n  "gender": GENDER,\n  "city": "CITY",\n  "province": "PROVINCE",\n  "country": "COUNTRY",\n  "avatarUrl": "AVATARURL",\n  "unionId": "UNIONID",\n  "watermark": {\n    "appid":"APPID",\n    "timestamp": TIMESTAMP\n  }\n}\n')),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.getUserInfo"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);