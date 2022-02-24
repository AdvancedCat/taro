"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51858],{3905:function(e,t,l){l.d(t,{Zo:function(){return o},kt:function(){return k}});var r=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},o=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=i(l),k=n,b=d["".concat(c,".").concat(k)]||d[k]||p[k]||a;return l?r.createElement(b,s(s({ref:t},o),{},{components:l})):r.createElement(b,s({ref:t},o))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,s=new Array(a);s[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var i=2;i<a;i++)s[i]=l[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},76125:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return o},default:function(){return d}});var r=l(83117),n=l(80102),a=(l(67294),l(3905)),s=["components"],u={title:"Taro.requestSubscribeMessage(option)",sidebar_label:"requestSubscribeMessage"},c=void 0,i={unversionedId:"apis/open-api/subscribe-message/requestSubscribeMessage",id:"apis/open-api/subscribe-message/requestSubscribeMessage",title:"Taro.requestSubscribeMessage(option)",description:"Request a subscription message",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/open-api/subscribe-message/requestSubscribeMessage.md",sourceDirName:"apis/open-api/subscribe-message",slug:"/apis/open-api/subscribe-message/requestSubscribeMessage",permalink:"/taro/en/docs/next/apis/open-api/subscribe-message/requestSubscribeMessage",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/subscribe-message/requestSubscribeMessage.md",tags:[],version:"current",frontMatter:{title:"Taro.requestSubscribeMessage(option)",sidebar_label:"requestSubscribeMessage"},sidebar:"API",previous:{title:"getWeRunData",permalink:"/taro/en/docs/next/apis/open-api/werun/getWeRunData"},next:{title:"requestSubscribeDeviceMessage",permalink:"/taro/en/docs/next/apis/open-api/subscribe-message/requestSubscribeDeviceMessage"}},o=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"FailCallbackResult",id:"failcallbackresult",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[{value:"Sample Code",id:"sample-code",children:[],level:4}],level:3},{value:"template_reflex",id:"template_reflex",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code-1",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],p={toc:o};function d(e){var t=e.components,l=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Request a subscription message"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult | FailCallbackResult>\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"tmplIds"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The set of ids of the message templates to subscribe to.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",{id:"failcallbackresult"},"FailCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Error code")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Error message")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"[TEMPLATE_ID]"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"accept" | "reject" | "ban"')),(0,a.kt)("td",null,"Dynamic keys, i.e. template ids")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Call result")))),(0,a.kt)("h4",{id:"sample-code"},"Sample Code"),(0,a.kt)("p",null,"Indicates that the user agrees to subscribe to the message zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errMsg": "requestSubscribeMessage:ok",\n  "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"\n}\n')),(0,a.kt)("h3",{id:"template_reflex"},"template_reflex"),(0,a.kt)("p",null,"Template message subscription types"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"accept"),(0,a.kt)("td",null,"Indicates that the user agrees to subscribe to the template message corresponding to the id")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"reject"),(0,a.kt)("td",null,"Indicates that the user refuses to subscribe to the template message corresponding to the id")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ban"),(0,a.kt)("td",null,"Indicates that the user has been blocked by the backend")))),(0,a.kt)("h2",{id:"sample-code-1"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.requestSubscribeMessage({\n  tmplIds: [''],\n  success: function (res) { }\n})\n")),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.requestSubscribeMessage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);