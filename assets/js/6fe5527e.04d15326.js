"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68147],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43221:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u4f5c\u7528\u57df\u83b7\u53d6"},s=void 0,p={unversionedId:"relations",id:"version-1.x/relations",title:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u4f5c\u7528\u57df\u83b7\u53d6",description:"\u5728 Taro \u7684\u9875\u9762\u548c\u7ec4\u4ef6\u7c7b\u4e2d\uff0cthis \u6307\u5411\u7684\u662f Taro \u9875\u9762\u6216\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982",source:"@site/versioned_docs/version-1.x/relations.md",sourceDirName:".",slug:"/relations",permalink:"/taro/docs/1.x/relations",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/relations.md",tags:[],version:"1.x",frontMatter:{title:"\u5c0f\u7a0b\u5e8f\u539f\u751f\u4f5c\u7528\u57df\u83b7\u53d6"},sidebar:"version-1.x/docs",previous:{title:"\u591a\u7aef\u540c\u6b65\u8c03\u8bd5",permalink:"/taro/docs/1.x/envs-debug"},next:{title:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u6a21\u677f",permalink:"/taro/docs/1.x/wxcloud"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Taro \u7684\u9875\u9762\u548c\u7ec4\u4ef6\u7c7b\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"this")," \u6307\u5411\u7684\u662f Taro \u9875\u9762\u6216\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\nimport { View } from '@tarojs/components'\n\nexport default class Menu extends Component {\n  static defaultProps = {\n    data: []\n  }\n\n  constructor(props) {\n    super(props)\n    this.state = {\n      checked: props.checked\n    }\n  }\n\n  componentWillMount () {\n    console.log(this) // this -> \u7ec4\u4ef6 Menu \u7684\u5b9e\u4f8b\n  }\n\n  render () {\n    return <View />\n  }\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\u4e00\u822c\u6211\u4eec\u9700\u8981\u83b7\u53d6 Taro \u7684\u9875\u9762\u548c\u7ec4\u4ef6\u6240\u5bf9\u5e94\u7684\u5c0f\u7a0b\u5e8f\u539f\u751f\u9875\u9762\u548c\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"this.$scope")," \u5c31\u80fd\u8bbf\u95ee\u5230\u5b83\u4eec\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u5f53\u8c03\u7528\u4e00\u4e9b API \u9700\u8981\u4f20\u5165\u5c0f\u7a0b\u5e8f\u7684\u9875\u9762\u6216\u8005\u7ec4\u4ef6\u5b9e\u4f8b\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"this.$scope"),"\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro.createCanvasContext(canvasId, this)")," \u8fd9\u4e2a API\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5c31\u662f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5b9e\u4f8b ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u5728 Taro \u4e2d\u5c31\u53ef\u4ee5\u5982\u4e0b\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Taro.createCanvasContext(canvasId, this.$scope)\n")))}d.isMDXComponent=!0}}]);