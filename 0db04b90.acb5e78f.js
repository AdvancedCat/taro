(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1626:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var b=n(0),r=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(null==e)return{};var n,b,r=function(e,t){if(null==e)return{};var n,b,r={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var j=r.a.createContext({}),d=function(e){var t=r.a.useContext(j),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},i=function(e){var t=d(e.components);return r.a.createElement(j.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=Object(b.forwardRef)((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,c=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),i=d(n),o=b,m=i["".concat(c,".").concat(o)]||i[o]||p[o]||a;return n?r.a.createElement(m,l({ref:t},j,{components:n})):r.a.createElement(m,l({ref:t},j))}));function m(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,c=new Array(a);c[0]=o;var l={};for(var O in t)hasOwnProperty.call(t,O)&&(l[O]=t[O]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var j=2;j<a;j++)c[j]=n[j];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return d}));var b=n(1),r=n(9),a=(n(0),n(1626)),c={title:"Slider",sidebar_label:"Slider"},l={id:"components/forms/slider",title:"Slider",description:"\u6ed1\u52a8\u9009\u62e9\u5668",source:"@site/docs/components/forms/slider.md",permalink:"/taro/docs/next/components/forms/slider",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/forms/slider.md",version:"next",sidebar_label:"Slider",sidebar:"components",previous:{title:"Radio",permalink:"/taro/docs/next/components/forms/radio"},next:{title:"Switch",permalink:"/taro/docs/next/components/forms/switch"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"SliderProps",id:"sliderprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onChangeEventDetail",id:"onchangeeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],j={rightToc:O};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u6ed1\u52a8\u9009\u62e9\u5668"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/slider.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<SliderProps>\n")),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u8bbe\u7f6e step</Text>\n        <Slider step={1} value={50}/>\n        <Text>\u663e\u793a\u5f53\u524d value</Text>\n        <Slider step={1} value={50} showValue/>\n        <Text>\u8bbe\u7f6e\u6700\u5c0f/\u6700\u5927\u503c</Text>\n        <Slider step={1} value={100} showValue min={50} max={200}/>\n      </View>\n    )\n  }\n}\n")),Object(a.b)("h2",{id:"sliderprops"},"SliderProps"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(a.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"min"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"0")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6700\u5c0f\u503c")),Object(a.b)("tr",null,Object(a.b)("td",null,"max"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"100")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6700\u5927\u503c")),Object(a.b)("tr",null,Object(a.b)("td",null,"step"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"1")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6b65\u957f\uff0c\u53d6\u503c\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5e76\u4e14\u53ef\u88ab(max - min)\u6574\u9664")),Object(a.b)("tr",null,Object(a.b)("td",null,"disabled"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(a.b)("tr",null,Object(a.b)("td",null,"value"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"0")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5f53\u524d\u53d6\u503c")),Object(a.b)("tr",null,Object(a.b)("td",null,"color"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"#e9e9e9"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u80cc\u666f\u6761\u7684\u989c\u8272\uff08\u8bf7\u4f7f\u7528 backgroundColor\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"selectedColor"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"#1aad19"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5df2\u9009\u62e9\u7684\u989c\u8272\uff08\u8bf7\u4f7f\u7528 activeColor\uff09")),Object(a.b)("tr",null,Object(a.b)("td",null,"activeColor"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"#1aad19"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5df2\u9009\u62e9\u7684\u989c\u8272")),Object(a.b)("tr",null,Object(a.b)("td",null,"backgroundColor"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"#e9e9e9"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u80cc\u666f\u6761\u7684\u989c\u8272")),Object(a.b)("tr",null,Object(a.b)("td",null,"blockSize"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"28")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6ed1\u5757\u7684\u5927\u5c0f\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 12 - 28")),Object(a.b)("tr",null,Object(a.b)("td",null,"blockColor"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,'"#ffffff"')),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u6ed1\u5757\u7684\u989c\u8272")),Object(a.b)("tr",null,Object(a.b)("td",null,"showValue"),Object(a.b)("td",null,Object(a.b)("code",null,"boolean")),Object(a.b)("td",{style:{textAlign:"center"}},Object(a.b)("code",null,"false")),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u662f\u5426\u663e\u793a\u5f53\u524d value")),Object(a.b)("tr",null,Object(a.b)("td",null,"onChange"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u5b8c\u6210\u4e00\u6b21\u62d6\u52a8\u540e\u89e6\u53d1\u7684\u4e8b\u4ef6")),Object(a.b)("tr",null,Object(a.b)("td",null,"onChanging"),Object(a.b)("td",null,Object(a.b)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),Object(a.b)("td",{style:{textAlign:"center"}}),Object(a.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(a.b)("td",null,"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")))),Object(a.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.min"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.max"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.step"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.disabled"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.value"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.color"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.selectedColor"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.activeColor"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.backgroundColor"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.blockSize"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.blockColor"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.showValue"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.onChange"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"SliderProps.onChanging"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(a.b)("h3",{id:"onchangeeventdetail"},"onChangeEventDetail"),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Slider"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);