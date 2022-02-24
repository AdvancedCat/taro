"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[116],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),d=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=d(n),k=a,m=s["".concat(u,".").concat(k)]||s[k]||p[k]||l;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(t,e,n){var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(83117),a=n(67294),l=n(72389),o=n(24726),i=n(86010),u="tabItem_LplD";function d(t){var e,n,l,d=t.lazy,c=t.block,p=t.defaultValue,s=t.values,k=t.groupId,m=t.className,g=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=s?s:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),h=(0,o.lx)(f,(function(t,e){return t.value===e.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(e=null!=p?p:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(l=g[0])?void 0:l.props.value;if(null!==v&&!f.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.UB)(),y=N.tabGroupChoices,b=N.setTabGroupChoices,A=(0,a.useState)(v),x=A[0],E=A[1],T=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=y[k];null!=P&&P!==x&&f.some((function(t){return t.value===P}))&&E(P)}var w=function(t){var e=t.currentTarget,n=T.indexOf(e),r=f[n].value;r!==x&&(D(e),E(r),null!=k&&b(k,r))},C=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=T.indexOf(t.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(t.currentTarget)-1;n=T[a]||T[T.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},f.map((function(t){var e=t.value,n=t.label,l=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return T.push(t)},onKeyDown:C,onFocus:w,onClick:w},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),d?(0,a.cloneElement)(g.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function c(t){var e=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(e)},t))}},66985:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=n(9877),i=n(58215),u=["components"],d={title:"Audio",sidebar_label:"Audio"},c=void 0,p={unversionedId:"components/media/audio",id:"components/media/audio",title:"Audio",description:"Audio. This component is no longer maintained as of 1.6.0. Taro.createInnerAudioContext API with more powerful capabilities is recommended.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/media/audio.md",sourceDirName:"components/media",slug:"/components/media/audio",permalink:"/taro/en/docs/next/components/media/audio",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/media/audio.md",tags:[],version:"current",frontMatter:{title:"Audio",sidebar_label:"Audio"},sidebar:"components",previous:{title:"Navigator",permalink:"/taro/en/docs/next/components/navig/navigator"},next:{title:"Image",permalink:"/taro/en/docs/next/components/media/image"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"AudioProps",id:"audioprops",children:[{value:"Property Support",id:"property-support",children:[],level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[],level:3},{value:"onTimeUpdateEventDetail",id:"ontimeupdateeventdetail",children:[],level:3},{value:"MediaError",id:"mediaerror",children:[{value:"code",id:"code",children:[],level:4}],level:3}],level:2},{value:"API Support",id:"api-support",children:[],level:2}],k={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Audio. This component is no longer maintained as of 1.6.0. ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.createInnerAudioContext")," API with more powerful capabilities is recommended."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/audio.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<AudioProps>\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Audio\n          src='https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'\n          controls={true}\n          autoplay={false}\n          loop={false}\n          muted={true}\n          initialTime='30'\n          id='video'\n        />\n      </View>\n    )\n  }\n}\n"))),(0,l.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <audio\n      id="video"\n      src="https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"\n      :controls="true"\n      :autoplay="false"\n      :loop="false"\n      :muted="true"\n    />\n  </view>\n</template>\n')))),(0,l.kt)("h2",{id:"audioprops"},"AudioProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"id"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The unique identifier of the audio component")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The resource address of the audio to be played")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"loop"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to enable loop playback")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"muted"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to enable mute playback.",(0,l.kt)("br",null),(0,l.kt)("strong",null,"Not recommended"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"controls"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to display default controls")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"poster"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The image resource address of the audio cover on a default control. If the value of the controls property is false, the setting of poster does not take effect.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"name"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"An unknown audio"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The audio name on a default control. If the value of the controls property is false, the setting of name does not take effect.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"author"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"An unknown author"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The author name on a default control. If the value of the controls property is false, the setting of author does not take effect.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggers the error event when an error occurs. detail = ","{errMsg: MediaError.code}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onPlay"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggers the play event when the playback is started/resumed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onPause"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggers the pause event when the playback is paused.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onTimeUpdate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onTimeUpdateEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggers the timeupdate event when the playback progress changes. detail = ","{currentTime, duration}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onEnded"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggers the ended event at the end of the video.")))),(0,l.kt)("h3",{id:"property-support"},"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.id"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.src"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.loop"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.muted"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.controls"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.poster"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.name"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.author"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onError"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onPlay"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onPause"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onTimeUpdate"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"AudioProps.onEnded"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Value"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"1 | 2 | 3 | 4"))))),(0,l.kt)("h3",{id:"ontimeupdateeventdetail"},"onTimeUpdateEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"currentTime"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"current time")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"duration")))),(0,l.kt)("h3",{id:"mediaerror"},"MediaError"),(0,l.kt)("h4",{id:"code"},"code"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"Request for getting resources is rejected by the user")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"Network error")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"Decoding error")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"Improper resource")))),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Audio"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);