"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[98115],{3905:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return m}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=r.createContext({}),c=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},k=function(t){var e=c(t.components);return r.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,d=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),u=c(n),m=l,s=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(s,o(o({ref:e},k),{},{components:n})):r.createElement(s,o({ref:e},k))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10878:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return k},default:function(){return u}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),o=["components"],i={title:"Editor",sidebar_label:"Editor"},d=void 0,c={unversionedId:"components/forms/editor",id:"version-2.x/components/forms/editor",title:"Editor",description:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002",source:"@site/versioned_docs/version-2.x/components/forms/editor.md",sourceDirName:"components/forms",slug:"/components/forms/editor",permalink:"/taro/en/docs/2.x/components/forms/editor",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/forms/editor.md",tags:[],version:"2.x",frontMatter:{title:"Editor",sidebar_label:"Editor"}},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"EditorProps",id:"editorprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:3},{value:"editorEventDetail",id:"editoreventdetail",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[],level:2}],p={toc:k};function u(t){var e=t.components,n=(0,l.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u5bf9\u56fe\u7247\u3001\u6587\u5b57\u8fdb\u884c\u7f16\u8f91\u3002"),(0,a.kt)("p",null,"\u7f16\u8f91\u5668\u5bfc\u51fa\u5185\u5bb9\u652f\u6301\u5e26\u6807\u7b7e\u7684 html\u548c\u7eaf\u6587\u672c\u7684 text\uff0c\u7f16\u8f91\u5668\u5185\u90e8\u91c7\u7528 delta \u683c\u5f0f\u8fdb\u884c\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 setContents \u63a5\u53e3\u8bbe\u7f6e\u5185\u5bb9\u65f6\uff0c\u89e3\u6790\u63d2\u5165\u7684 html \u53ef\u80fd\u4f1a\u7531\u4e8e\u4e00\u4e9b\u975e\u6cd5\u6807\u7b7e\u5bfc\u81f4\u89e3\u6790\u9519\u8bef\uff0c\u5efa\u8bae\u5f00\u53d1\u8005\u5728\u5c0f\u7a0b\u5e8f\u5185\u4f7f\u7528\u65f6\u901a\u8fc7 delta \u8fdb\u884c\u63d2\u5165\u3002"),(0,a.kt)("p",null,"\u5bcc\u6587\u672c\u7ec4\u4ef6\u5185\u90e8\u5f15\u5165\u4e86\u4e00\u4e9b\u57fa\u672c\u7684\u6837\u5f0f\u4f7f\u5f97\u5185\u5bb9\u53ef\u4ee5\u6b63\u786e\u7684\u5c55\u793a\uff0c\u5f00\u53d1\u65f6\u53ef\u4ee5\u8fdb\u884c\u8986\u76d6\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u5176\u5b83\u7ec4\u4ef6\u6216\u73af\u5883\u4e2d\u4f7f\u7528\u5bcc\u6587\u672c\u7ec4\u4ef6\u5bfc\u51fa\u7684 html \u65f6\uff0c\u9700\u8981\u989d\u5916\u5f15\u5165 \u8fd9\u6bb5\u6837\u5f0f\uff0c\u5e76\u7ef4\u62a4 ",(0,a.kt)("inlineCode",{parentName:"p"},"<ql-container><ql-editor></ql-editor></ql-container>")," \u7684\u7ed3\u6784\u3002"),(0,a.kt)("p",null,"\u56fe\u7247\u63a7\u4ef6\u4ec5\u521d\u59cb\u5316\u65f6\u8bbe\u7f6e\u6709\u6548\u3002"),(0,a.kt)("p",null,"*\u7f16\u8f91\u5668\u5185\u652f\u6301\u90e8\u5206 HTML \u6807\u7b7e\u548c\u5185\u8054\u6837\u5f0f\uff0c\u4e0d\u652f\u6301 ",(0,a.kt)("strong",{parentName:"p"},"class")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"id*")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/editor.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<EditorProps>\n")),(0,a.kt)("h2",{id:"editorprops"},"EditorProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"readOnly"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u7f16\u8f91\u5668\u4e3a\u53ea\u8bfb")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholder"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63d0\u793a\u4fe1\u606f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"showImgSize"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u56fe\u7247\u5927\u5c0f\u63a7\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"showImgToolbar"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u5de5\u5177\u680f\u63a7\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"showImgResize"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u70b9\u51fb\u56fe\u7247\u65f6\u663e\u793a\u4fee\u6539\u5c3a\u5bf8\u63a7\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onReady"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7f16\u8f91\u5668\u521d\u59cb\u5316\u5b8c\u6210\u65f6\u89e6\u53d1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onFocus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<editorEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7f16\u8f91\u5668\u805a\u7126\u65f6\u89e6\u53d1",(0,a.kt)("br",null),"event.detail = ","{ html, text, delta }")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBlur"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<editorEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7f16\u8f91\u5668\u5931\u53bb\u7126\u70b9\u65f6\u89e6\u53d1",(0,a.kt)("br",null),"detail = ","{ html, text, delta }")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onInput"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<editorEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7f16\u8f91\u5668\u5185\u5bb9\u6539\u53d8\u65f6\u89e6\u53d1",(0,a.kt)("br",null),"detail = ","{ html, text, delta }")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onStatuschange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u901a\u8fc7 Context \u65b9\u6cd5\u6539\u53d8\u7f16\u8f91\u5668\u5185\u6837\u5f0f\u65f6\u89e6\u53d1\uff0c\u8fd4\u56de\u9009\u533a\u5df2\u8bbe\u7f6e\u7684\u6837\u5f0f")))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.readOnly"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.placeholder"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.showImgSize"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.showImgToolbar"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.showImgResize"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onReady"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onFocus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onBlur"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onInput"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"EditorProps.onStatuschange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"editoreventdetail"},"editorEventDetail"),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Editor"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);