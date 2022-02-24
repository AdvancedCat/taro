"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49176],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return s}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=d(a),s=n,m=g["".concat(c,".").concat(s)]||g[s]||p[s]||o;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},18976:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return g}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),i=["components"],u={title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},c=void 0,d={unversionedId:"apis/media/background-audio/getBackgroundAudioManager",id:"version-3.x/apis/media/background-audio/getBackgroundAudioManager",title:"Taro.getBackgroundAudioManager()",description:"Obtains the globally unique background audio manager. The playback of an audio file continues when the Mini Program is switched to the background. However, the audio playback status at the background cannot be controlled by calling an API.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/background-audio/getBackgroundAudioManager.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/getBackgroundAudioManager",permalink:"/taro/en/docs/apis/media/background-audio/getBackgroundAudioManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/background-audio/getBackgroundAudioManager.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},sidebar:"API",previous:{title:"getBackgroundAudioPlayerState",permalink:"/taro/en/docs/apis/media/background-audio/getBackgroundAudioPlayerState"},next:{title:"BackgroundAudioManager",permalink:"/taro/en/docs/apis/media/background-audio/BackgroundAudioManager"}},l=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],p={toc:l};function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Obtains the ",(0,o.kt)("strong",{parentName:"p"},"globally unique")," background audio manager. The playback of an audio file continues when the Mini Program is switched to the background. However, the audio playback status at the background cannot be controlled by calling an API."),(0,o.kt)("p",null,"As of WeChat 6.7.2, you need to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"requiredBackgroundModes")," attribute in ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"},"app.json")," in order to continue playing an audio file after the Mini Program switches to the background. This property takes effect directly in the developer and demo versions, but must be approved before working in the official version."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => BackgroundAudioManager\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const backgroundAudioManager = Taro.getBackgroundAudioManager()\nbackgroundAudioManager.title = 'At this Very Moment'\nbackgroundAudioManager.epname = 'At this Very Moment'\nbackgroundAudioManager.singer = 'Xu Wei'\nbackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'\n// Plays automatically after src is set\nbackgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getBackgroundAudioManager"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}g.isMDXComponent=!0}}]);