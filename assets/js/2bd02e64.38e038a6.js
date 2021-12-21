"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[4443],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=i,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3637:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={sidebar_position:1},s={unversionedId:"Guides/add_new_api",id:"version-1.6.0/Guides/add_new_api",isDocsHomePage:!1,title:"How to add a new API",description:"You spotted a new API which you want to automate using monaco, but sadly it's not in the",source:"@site/versioned_docs/version-1.6.0/Guides/add_new_api.md",sourceDirName:"Guides",slug:"/Guides/add_new_api",permalink:"/dynatrace-monitoring-as-code/Guides/add_new_api",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/versioned_docs/version-1.6.0/Guides/add_new_api.md",version:"1.6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-1.6.0/tutorialSidebar",previous:{title:"Configuration Types and Token Permissions",permalink:"/dynatrace-monitoring-as-code/configuration/configTypes_tokenPermissions"},next:{title:"License and Bill of material",permalink:"/dynatrace-monitoring-as-code/license"}},p=[{value:"Easy-to-add API Characteristics",id:"easy-to-add-api-characteristics",children:[]},{value:"Steps to add an API",id:"steps-to-add-an-api",children:[]}],c={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You spotted a new API which you want to automate using ",(0,o.kt)("inlineCode",{parentName:"p"},"monaco"),", but sadly it's not in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code#configuration-types--apis"},"table of supported APIs"),"?"),(0,o.kt)("p",null,"Usually, the addition of new APIs to ",(0,o.kt)("inlineCode",{parentName:"p"},"monaco")," is straightforward and requires little programming\nexperience. Only some APIs require you to do more coding. There are certain criteria for differentiating the two cases."),(0,o.kt)("h2",{id:"easy-to-add-api-characteristics"},"Easy-to-add API Characteristics"),(0,o.kt)("p",null,"Easy-to-add APIs have these characteristics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It implements the following HTTP methods. E.g for configuration APIs that is: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET <my-environment>/api/config/v1/<my-config>")," (get all configs)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET <my-environment>/api/config/v1/<my-config>/<id>")," (get a single config)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POST <my-environment>/api/config/v1/<my-config>")," (create a new config)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PUT <my-environment>/api/config/v1/<my-config>/<id>")," (change an existing config)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DELETE <my-environment>/api/config/v1/<my-config>/<id>")," (delete a config)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The model of the configuration has a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property: "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "id": "acbed0c4-4ef1-4303-991f-102510a69322",\n      "name: "my-name"\n      ...\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"GET (all)")," REST call return ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "values": [\n      {\n        "id": "string",\n        "name": "string"\n      }\n    ]\n}\n')),(0,o.kt)("p",null,"If your API supports these 3 characteristics, you just need to perform the steps in the following section to add it."),(0,o.kt)("p",null,"However, if your API does not fulfil the above requirements, please open a ticket in ",(0,o.kt)("inlineCode",{parentName:"p"},"monaco"),"'s backlog\nto get implementation feedback from the maintainers."),(0,o.kt)("h2",{id:"steps-to-add-an-api"},"Steps to add an API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add your API to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/blob/main/pkg/api/api.go#L25"},"the map in api.go"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "<my-api-folder-name>": {\n      apiPath: "<path-to-my-api>",                       // mandatory\n      propertyNameOfGetAllResponse: "<property-name>",   // not necessary in case of "values"\n  },\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fill the 4 placeholder values from above:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<my-api-folder-name>"),": This is the name of the API, which is also used for the folder name\nyou need to place your configurations in. Please take a look at the existing API names to get a\nfeeling for the naming conventions and choose it accordingly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<path-to-my-api>"),": This path points to your API. ",(0,o.kt)("inlineCode",{parentName:"li"},"monaco")," prefixes it with the environment\nURL to access the configs of your API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<property-name>"),": This names the json property used in the ",(0,o.kt)("inlineCode",{parentName:"li"},"GET ALL")," REST call to\nreturn the list of configs. E.g. it would be ",(0,o.kt)("inlineCode",{parentName:"li"},"extensions"),", if the response of your API's\n",(0,o.kt)("inlineCode",{parentName:"li"},"GET ALL")," REST call looks like this:")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "extensions": [\n        {\n          "id": "custom.python.connectionpool",\n          "name": "Connection Pool",\n          "type": "ONEAGENT"\n        }\n      ],\n        "totalResults": 9,\n        "nextPageToken": "LlUdYmu5S2MfX/ppfCInR9M="\n      }\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a sample config for the integration tests in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/tree/main/cmd/monaco/test-resources/integration-all-configs"},"cmd/monaco/test-resources/integration-all-configs")),(0,o.kt)("li",{parentName:"ul"},"Add your API to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code#configuration-types--apis"},"table of supported APIs"),".")),(0,o.kt)("p",null,"After performing this steps, please create the pull request in the upstream repository. Other users\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"monaco")," will thank you! \ud83d\ude80"))}m.isMDXComponent=!0}}]);