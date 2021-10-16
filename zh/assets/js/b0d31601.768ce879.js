"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[245],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=u(n),s=l,m=f["".concat(c,".").concat(s)]||f[s]||d[s]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a=["components"],o={id:"Collateralized-DEX-Offering",title:"\u262f \u62b5\u62bc\u5206\u7ea7\u57fa\u91d1\u8ddf\u6295\u673a\u5236",sidebar_label:"\u262f \u62b5\u62bc\u5206\u7ea7\u57fa\u91d1\u8ddf\u6295\u673a\u5236"},c=void 0,u={unversionedId:"Collateralized-DEX-Offering",id:"Collateralized-DEX-Offering",isDocsHomePage:!1,title:"\u262f \u62b5\u62bc\u5206\u7ea7\u57fa\u91d1\u8ddf\u6295\u673a\u5236",description:"CDO\uff1a\u4e00\u4e2a\u57fa\u4e8e\u5206\u7ea7\u6295\u8d44\u7684\u6d41\u52a8\u6027\u89e3\u51b3\u65b9\u6848",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Collateralized-DEX-Offering.md",sourceDirName:".",slug:"/Collateralized-DEX-Offering",permalink:"/docs/zh/docs/Collateralized-DEX-Offering",editUrl:"https://github.com/DeepGoLab/docs/edit/master/docs/Collateralized-DEX-Offering.md",tags:[],version:"current",frontMatter:{id:"Collateralized-DEX-Offering",title:"\u262f \u62b5\u62bc\u5206\u7ea7\u57fa\u91d1\u8ddf\u6295\u673a\u5236",sidebar_label:"\u262f \u62b5\u62bc\u5206\u7ea7\u57fa\u91d1\u8ddf\u6295\u673a\u5236"},sidebar:"mySidebar",previous:{title:"\ud83d\udcb0 \u6548\u7528\u4ee3\u5e01\uff1aDSP",permalink:"/docs/zh/docs/Utility-Token-DSP"},next:{title:"\u2712 CDO\u6838\u5fc3\u6982\u5ff5",permalink:"/docs/zh/docs/CDO-Core-Concepts"}},p=[{value:"CDO\uff1a\u4e00\u4e2a\u57fa\u4e8e\u5206\u7ea7\u6295\u8d44\u7684\u6d41\u52a8\u6027\u89e3\u51b3\u65b9\u6848",id:"cdo\u4e00\u4e2a\u57fa\u4e8e\u5206\u7ea7\u6295\u8d44\u7684\u6d41\u52a8\u6027\u89e3\u51b3\u65b9\u6848",children:[]},{value:"CDO\u6d41\u7a0b",id:"cdo\u6d41\u7a0b",children:[{value:"\u521d\u521b\u671f",id:"\u521d\u521b\u671f",children:[]},{value:"\u5efa\u6c60/\u52df\u8d44\u671f",id:"\u5efa\u6c60\u52df\u8d44\u671f",children:[]},{value:"\u8fdb\u884c\u671f",id:"\u8fdb\u884c\u671f",children:[]},{value:"\u6e05\u7b97\u671f",id:"\u6e05\u7b97\u671f",children:[]},{value:"\u6e05\u7b97\u673a\u5236",id:"\u6e05\u7b97\u673a\u5236",children:[]}]},{value:"\u826f\u6027\u7b56\u5c55",id:"\u826f\u6027\u7b56\u5c55",children:[]}],d={toc:p};function f(e){var t=e.components,o=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cdo\u4e00\u4e2a\u57fa\u4e8e\u5206\u7ea7\u6295\u8d44\u7684\u6d41\u52a8\u6027\u89e3\u51b3\u65b9\u6848"},"CDO\uff1a\u4e00\u4e2a\u57fa\u4e8e\u5206\u7ea7\u6295\u8d44\u7684\u6d41\u52a8\u6027\u89e3\u51b3\u65b9\u6848"),(0,i.kt)("p",null,"DeFi\u4f9d\u9760\u6d41\u52a8\u6027\u8fd0\u884c\uff0c\u7136\u800c\u5f53\u524d\u5e02\u573a\u4e0a\u6d41\u52a8\u6027\u7684\u83b7\u53d6\u548c\u4fdd\u6709\u6210\u672c\u5f88\u9ad8\uff0c\u800c\u4e14\u5f80\u5f80\u4e0d\u5177\u5907\u65f6\u95f4\u8de8\u5ea6\u8f83\u957f\u7684\u53ef\u6301\u7eed\u6027\u3002DeepGo\u521b\u65b0\u63d0\u51faCDO\u673a\u5236\uff0c\u7ed9\u4e09\u7c7b\u7ed9\u4e09\u7c7b\u7528\u6237\u63d0\u4f9b\u5b9a\u5236\u670d\u52a1\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d1\u8d77\u8005 (Initiator)\uff1a\u4e3b\u8981\u9762\u5411\u6709\u6d41\u52a8\u6027\u9700\u6c42\u7684\u9879\u76ee\u65b9\uff0c\u53d1\u8d77\u8005\u901a\u8fc7\u8d28\u62bc\u5df1\u65b9\u9879\u76ee\u4ee3\u5e01\uff0c\u83b7\u5f97\u6d41\u52a8\u6027\u548c\u73b0\u91d1\u6d41\u6536\u5165\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9886\u822a\u5458 (Pilot)\uff1a\u4e3b\u8981\u9762\u5411\u504f\u597d\u98ce\u9669\u6295\u8d44\u7684\u6295\u8d44\u4eba\uff0c\u9886\u822a\u5458\u901a\u8fc7\u63d0\u4f9b\u51c6\u5907\u91d1\u548c\u672c\u91d1\u4fdd\u969c\uff0c\u4ece\u800c\u83b7\u5f97\u914d\u8d44\u4ee5\u535a\u53d6\u66f4\u5927\u6536\u76ca\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u884c\u8005 (Fellow)\uff1a\u4e3b\u8981\u9762\u5411\u504f\u597d\u7a33\u5065\u6295\u8d44\u7684\u6295\u8d44\u4eba\uff0c\u540c\u884c\u8005\u63d0\u4f9b\u8d44\u91d1\uff0c\u672c\u91d1\u7531\u9886\u822a\u5458\u4fdd\u969c\uff0c\u540c\u65f6\u6536\u83b7\u9886\u822a\u5458\u63d0\u4f9b\u7684\u7a33\u5065\u6536\u76ca\u3002")),(0,i.kt)("h2",{id:"cdo\u6d41\u7a0b"},"CDO\u6d41\u7a0b"),(0,i.kt)("h3",{id:"\u521d\u521b\u671f"},"\u521d\u521b\u671f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d1\u8d77\u8005\u7533\u8bf7\u5efa\u6c60\uff0c\u5728\u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u8d28\u62bc\u9879\u76ee\u4ee3\u5e01\uff0c\u8bbe\u5b9a\u57fa\u7840\u53c2\u6570\u548c\u8d28\u62bc\u53c2\u6570\uff0c\u4ece\u800c\u53d1\u8d77\u57fa\u91d1\u6c60\uff0c\u6301\u6709\u76f8\u540c\u9879\u76ee\u4ee3\u5e01\u7684\u5176\u4ed6\u53d1\u8d77\u8005\u53ef\u4ee5\u901a\u8fc7DGT\u62a5\u4ef7\u7ade\u62cd\u8be5\u57fa\u91d1\u6c60\u7684\u53d1\u8d77\u6743\u3002")),(0,i.kt)("h3",{id:"\u5efa\u6c60\u52df\u8d44\u671f"},"\u5efa\u6c60/\u52df\u8d44\u671f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d1\u8d77\u8005\u53ef\u4ee5\u8ffd\u52a0\u8d28\u62bc\uff0c\u63d0\u9ad8\u57fa\u91d1\u6c60\u89c4\u6a21\u4e0a\u9650\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u9886\u822a\u5458\u7f34\u7eb3\u5c11\u91cf\u7533\u8d2d\u8d39\u8ba4\u8d2d\u57fa\u91d1\u6c60\u4efd\u989d\uff0c\u9886\u822a\u5458\u7f34\u7eb3\u7684\u7533\u8d2d\u8d39\u5c06\u4f1a\u5f62\u6210\u4e00\u4e2a\u5956\u91d1\u6c60\uff08\u53d1\u8d77\u8005\u548c\u540c\u884c\u8005\u53ef\u4ee5\u5728\u4e4b\u540e\u4ece\u4e2d\u63d0\u53d6\u6536\u5165\uff09\uff0c\u6b64\u5916\u9886\u822a\u5458\u7684\u6253\u65b0\u4efd\u989d\u4e0e\u5176\u6301\u6709DGT\u6570\u91cf\u4ee5\u53ca\u6295\u8d44\u989d\u6709\u5173\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u884c\u8005\u6295\u5165\u8d44\u91d1\u76f4\u63a5\u8fdb\u5165\u8d44\u91d1\u6c60\u3002")),(0,i.kt)("h3",{id:"\u8fdb\u884c\u671f"},"\u8fdb\u884c\u671f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d1\u8d77\u8005\u53ef\u4ee5\u7ee7\u7eed\u8ffd\u52a0\u8d28\u62bc\uff0c\u540c\u65f6\u53ef\u4ee5\u4ece\u5956\u91d1\u6c60\u63d0\u53d6\u6536\u76ca\uff0c\u53d1\u8d77\u8005\u6700\u591a\u53ef\u4ee5\u63d0\u53d6\u5176\u4e2d\u768480%\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u9886\u822a\u5458\u6295\u5165\u7684\u672c\u91d1\u5c06\u548c\u540c\u884c\u8005\u7684\u672c\u91d1\u8fdb\u884c\u914d\u8d44\uff0c\u7136\u540e\u8fdb\u5165DEX\u4e3a\u53d1\u8d77\u8005\u9879\u76ee\u63d0\u4f9b\u6d41\u52a8\u6027\uff0c\u9886\u822a\u5458\u968f\u65f6\u53ef\u4ee5\u81ea\u7531\u8fdb\u51fa\u57fa\u91d1\u6c60\uff0c\u4e5f\u53ef\u4ee5\u5207\u6362\u4e0d\u540c\u6295\u8d44\u6a21\u5f0f\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u884c\u8005\u968f\u65f6\u53ef\u4ee5\u81ea\u7531\u8fdb\u51fa\u57fa\u91d1\u6c60\uff0c\u6216\u662f\u5207\u6362\u6295\u8d44\u6a21\u5f0f\uff0c\u540c\u65f6\u53ef\u4ee5\u63d0\u53d6\u6295\u8d44\u6536\u76ca\u3002")),(0,i.kt)("h3",{id:"\u6e05\u7b97\u671f"},"\u6e05\u7b97\u671f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d1\u8d77\u8005\u53d6\u56de\u8d28\u62bc\u9879\u76eeToken\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u9886\u822a\u5458\u51fa\u552e\u5df2\u8d2d\u5165\u9879\u76eetoken\uff0c\u5e76\u5f52\u8fd8\u540c\u884c\u8005\u672c\u91d1\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u884c\u8005\u53d6\u56de\u672c\u91d1\u53ca\u7d2f\u8ba1\u6536\u76ca\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image.png",src:n(7572).Z})),(0,i.kt)("h3",{id:"\u6e05\u7b97\u673a\u5236"},"\u6e05\u7b97\u673a\u5236"),(0,i.kt)("p",null,"\u57fa\u91d1\u6c60\u8fd0\u884c\u671f\u95f4\uff0c\u9879\u76eetoken\u4ef7\u683c\u4e0b\u964d\u89e6\u53ca\u53d1\u8d77\u8005\u5e73\u4ed3\u7ebf\uff0c\u5219\u53d1\u8d77\u8005\u8d28\u62bc\u9879\u76eetoken\u5168\u90e8\u8d54\u4ed8\u4e8e\u9886\u822a\u5458\uff0c\u9886\u822a\u5458\u5f52\u8fd8\u540c\u884c\u8005\u8d44\u91d1\u540e\u53d6\u56de\u5269\u4f59\u9879\u76eetoken\uff1b\u82e5\u9879\u76eetoken\u4ef7\u683c\u4e0b\u964d\u89e6\u53ca\u9886\u822a\u5458\u5e73\u4ed3\u7ebf\uff0c\u5219\u9886\u822a\u5458\u5f3a\u5236\u5e73\u4ed3\uff0c\u5e76\u5f52\u8fd8\u540c\u884c\u8005\u672c\u91d1\u3002"),(0,i.kt)("h2",{id:"\u826f\u6027\u7b56\u5c55"},"\u826f\u6027\u7b56\u5c55"),(0,i.kt)("p",null,"\u901a\u8fc7\u8d28\u62bc\u4e0e\u98ce\u9669\u5206\u7ea7\uff0cCDO\u5b9e\u9645\u4e0a\u5728\u4e09\u7c7b\u7528\u6237\u95f4\u6784\u5efa\u4e86\u4e00\u79cd\u7262\u56fa\u7684\u4ef7\u503c\u7ed1\u5b9a\uff0c\u4ece\u800c\u907f\u514d\u4e86\u7528\u6237\u4ea4\u4e92\u65f6\u51fa\u73b0\u5355\u65b9\u9762\u77ed\u671f\u4f5c\u6076\u7684\u60c5\u51b5\uff0c\u540c\u65f6\u901a\u8fc7\u53d1\u8d77\u8005\u7684\u9879\u76ee\u4ef7\u503c\u548c\u6d41\u52a8\u6027\u3001\u9886\u822a\u5458\u7684\u8d85\u989d\u6536\u76ca\u4e0e\u58f0\u8a89\u79ef\u7d2f\uff0c\u540c\u884c\u8005\u7684\u7a33\u5065\u6536\u76ca\u4e0e\u98ce\u9669\u63a7\u5236\u4e09\u8005\u4e4b\u95f4\u7684\u53cc\u5411\u53cd\u9988\u5faa\u73af\uff0c\u8fbe\u6210\u4e86\u4e00\u79cd\u826f\u6027\u7b56\u5c55\u673a\u5236\uff0c\u4ece\u800c\u901a\u8fc7\u7fa4\u4f53\u667a\u6167\u7b5b\u9009\u4f18\u8d28\u8d44\u4ea7\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"user",src:n(3417).Z})),(0,i.kt)("p",null,"\u9879\u76ee\u5347\u503c\u5438\u5f15\u66f4\u591a\u9886\u822a\u5458\u52a0\u5165\u57fa\u91d1\u6c60\uff0c\u4e0d\u65ad\u63d0\u5347\u5956\u91d1\u6c60\u3002\u7a33\u5065\u6536\u76ca\u63d0\u9ad8\u53c8\u5438\u5f15\u66f4\u591a\u540c\u884c\u8005\u52a0\u5165\uff0c\u63d0\u5347\u9886\u822a\u5458\u6760\u6746\u7387\uff0c\u540c\u65f6\u63d0\u9ad8\u53d1\u8d77\u8005\u9879\u76eetoken\u5728DEX\u4e2d\u6d41\u52a8\u6027\uff0c\u52a0\u901f\u9879\u76ee\u53d1\u5c55\uff0c\u4ece\u800c\u5b9e\u73b0\u6b63\u5411\u5faa\u73af\uff1b\u9879\u76ee\u8d2c\u503c\u5219\u7c7b\u4f3c\u5730\u4f1a\u4ea7\u751f\u8d1f\u5411\u5faa\u73af\u3002\u9879\u76ee\u4ef7\u683c\u662f\u6b64\u53cc\u5411\u5faa\u73af\u7684\u5173\u952e\uff0c\u6545\u800cDeepGo\u5728CDO\u4e4b\u5916\u8fd8\u63d0\u4f9b\u4e86\u9879\u76ee\u8bc4\u7ea7\u4e3a\u6295\u8d44\u4fdd\u9a7e\u62a4\u822a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image.png",src:n(3202).Z})))}f.isMDXComponent=!0},7572:function(e,t,n){t.Z=n.p+"assets/images/CDO-30d35b8ce10af1c867f1f0746f335889.png"},3202:function(e,t,n){t.Z=n.p+"assets/images/circle-7d97b1db79a7bc65369960926c663a87.png"},3417:function(e,t,n){t.Z=n.p+"assets/images/user-b10527961a807a4a4d136ae02ff6d2af.png"}}]);