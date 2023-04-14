(self.webpackChunkopenai_ext=self.webpackChunkopenai_ext||[]).push([[179],{"./src/stories/core/1.README.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_1_README_stories});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)("h2",{align:"center"},"🤖 openai-ext"),(0,esm.kt)("h3",{align:"center"},"Extension to OpenAI's API to support streaming chat completions on the client."),(0,esm.kt)("p",{align:"center"},(0,esm.kt)("a",{href:"https://badge.fury.io/js/openai-ext",target:"_blank",rel:"noopener noreferrer"},(0,esm.kt)("img",{src:"https://badge.fury.io/js/openai-ext.svg",alt:"npm Version"}))," ",(0,esm.kt)("a",{href:"https://github.com/justinmahar/openai-ext/",target:"_blank",rel:"noopener noreferrer"},(0,esm.kt)("img",{src:"https://img.shields.io/badge/GitHub-Source-success",alt:"View project on GitHub"}))," ",(0,esm.kt)("a",{href:"https://github.com/justinmahar/openai-ext/actions?query=workflow%3ADeploy",target:"_blank",rel:"noopener noreferrer"},(0,esm.kt)("img",{src:"https://github.com/justinmahar/openai-ext/workflows/Deploy/badge.svg",alt:"Deploy Status"}))," ",(0,esm.kt)("a",{href:"https://github.com/sponsors/justinmahar",target:"_blank",rel:"noopener noreferrer"},(0,esm.kt)("img",{src:"https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86",alt:"Sponsor"}))),(0,esm.kt)("h2",{id:"documentation"},"Documentation"),(0,esm.kt)("p",null,"Read the ",(0,esm.kt)("strong",{parentName:"p"},(0,esm.kt)("a",{parentName:"strong",href:"https://justinmahar.github.io/openai-ext/",target:"_blank",rel:"nofollow noopener noreferrer"},"official documentation")),"."),(0,esm.kt)("h2",{id:"overview"},"Overview"),(0,esm.kt)("p",null,"This project extends OpenAI's API to support stream chat completions on the client. "),(0,esm.kt)("blockquote",null,(0,esm.kt)("p",{parentName:"blockquote"},"Note: This is an unofficial working solution until OpenAI adds client streaming support. This issue is being tracked here: ",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/openai/openai-node/issues/18",target:"_blank",rel:"nofollow noopener noreferrer"},"How to use stream: true? #18"),".")),(0,esm.kt)("h3",{id:"features-include"},"Features include:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("strong",{parentName:"li"},"💻 Support for streaming chat completions on the client"),(0,esm.kt)("ul",{parentName:"li"},(0,esm.kt)("li",{parentName:"ul"},"Easy to use API extension for chat completion stream support on the client."))),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("strong",{parentName:"li"},"⚙️ Easy to configure"),(0,esm.kt)("ul",{parentName:"li"},(0,esm.kt)("li",{parentName:"ul"},"Dead simple configuration for API key and stream handlers."))),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("strong",{parentName:"li"},"🛑 Support for stopping completions"),(0,esm.kt)("ul",{parentName:"li"},(0,esm.kt)("li",{parentName:"ul"},"Simply call ",(0,esm.kt)("inlineCode",{parentName:"li"},"abort()")," on the returned XHR to stop the completion.")))),(0,esm.kt)("h2",{id:"donate"},"Donate"),(0,esm.kt)("p",null,"If this project helped you, please consider buying me a coffee. Your support is much appreciated!"),(0,esm.kt)("a",{href:"https://paypal.me/thejustinmahar/5"},(0,esm.kt)("img",{src:"https://justinmahar.github.io/openai-ext/support/coffee-1.png",alt:"Buy me a coffee",height:"35"}))," ",(0,esm.kt)("a",{href:"https://paypal.me/thejustinmahar/15"},(0,esm.kt)("img",{src:"https://justinmahar.github.io/openai-ext/support/coffee-3.png",alt:"Buy me 3 coffees",height:"35"}))," ",(0,esm.kt)("a",{href:"https://paypal.me/thejustinmahar/25"},(0,esm.kt)("img",{src:"https://justinmahar.github.io/openai-ext/support/coffee-5.png",alt:"Buy me 5 coffees",height:"35"})),(0,esm.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#documentation"},"Documentation")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#overview"},"Overview"),(0,esm.kt)("ul",{parentName:"li"},(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#features-include"},"Features include:")))),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#donate"},"Donate")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#quick-start"},"Quick Start")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#typescript"},"TypeScript")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#icon-attribution"},"Icon Attribution")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#contributing"},"Contributing")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#-found-it-helpful-star-it"},"⭐ Found It Helpful? Star It!")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("a",{parentName:"li",href:"#license"},"License"))),(0,esm.kt)("h2",{id:"installation"},"Installation"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre"},"npm i openai-ext\n")),(0,esm.kt)("h2",{id:"quick-start"},"Quick Start"),(0,esm.kt)("pre",null,(0,esm.kt)("code",{parentName:"pre",className:"language-js"},'import { OpenAIExt } from "openai-ext";\n\n// Configure the stream (type StreamChatCompletionConfig for TypeScript users)\nconst streamConfig = {\n  apiKey: `123abcXYZasdf`, // Your API key\n};\n\n// Configure your handlers (type StreamChatCompletionHandler for TypeScript users)\nconst streamHandler = {\n  // Content contains the string draft, which may be partial. When isFinal is true, the completion is done.\n  onContent(content, isFinal, xhr) {\n    console.log(content, "isFinal?", isFinal);\n  },\n  onDone(xhr) {\n    console.log("Done!");\n  },\n  onError(error, status, xhr) {\n    console.error(error);\n  },\n};\n\n// Make the call and store a reference to the XMLHttpRequest\nconst xhr = OpenAIExt.streamChatCompletion(\n  {\n    model: "gpt-3.5-turbo",\n    messages: [\n      { role: "system", content: "You are a helpful assistant." },\n      { role: "user", content: "What is 2+2?" },\n    ],\n  },\n  streamConfig,\n  streamHandler\n);\n\n// If you\'d like to stop the completion, call xhr.abort(). The onDone() handler will be called.\nxhr.abort();\n')),(0,esm.kt)("h2",{id:"typescript"},"TypeScript"),(0,esm.kt)("p",null,"Type definitions have been included for ",(0,esm.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/",target:"_blank",rel:"nofollow noopener noreferrer"},"TypeScript")," support."),(0,esm.kt)("h2",{id:"icon-attribution"},"Icon Attribution"),(0,esm.kt)("p",null,"Favicon by ",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/twitter/twemoji",target:"_blank",rel:"nofollow noopener noreferrer"},"Twemoji"),"."),(0,esm.kt)("h2",{id:"contributing"},"Contributing"),(0,esm.kt)("p",null,"Open source software is awesome and so are you. 😎"),(0,esm.kt)("p",null,"Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help."),(0,esm.kt)("p",null,"For major changes, open an issue first to discuss what you'd like to change."),(0,esm.kt)("h2",{id:"-found-it-helpful-star-it"},"⭐ Found It Helpful? ",(0,esm.kt)("a",{parentName:"h2",href:"https://github.com/justinmahar/openai-ext/stargazers",target:"_blank",rel:"nofollow noopener noreferrer"},"Star It!")),(0,esm.kt)("p",null,"If you found this project helpful, let the community know by giving it a ",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/justinmahar/openai-ext/stargazers",target:"_blank",rel:"nofollow noopener noreferrer"},"star"),": ",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/justinmahar/openai-ext/stargazers",target:"_blank",rel:"nofollow noopener noreferrer"},"👉⭐")),(0,esm.kt)("h2",{id:"license"},"License"),(0,esm.kt)("p",null,"See ",(0,esm.kt)("a",{parentName:"p",href:"https://justinmahar.github.io/openai-ext/?path=/story/license--page",target:"_blank",rel:"nofollow noopener noreferrer"},"LICENSE.md"),"."))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var _1_README_stories_excluded=["components"];function _1_README_stories_extends(){return _1_README_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_1_README_stories_extends.apply(this,arguments)}function _1_README_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _1_README_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _1_README_stories_layoutProps={};function _1_README_stories_MDXContent(_ref){var components=_ref.components,props=_1_README_stories_objectWithoutProperties(_ref,_1_README_stories_excluded);return(0,esm.kt)("wrapper",_1_README_stories_extends({},_1_README_stories_layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Home",mdxType:"Meta"}),(0,esm.kt)(MDXContent,{mdxType:"Readme"}))}_1_README_stories_MDXContent.displayName="MDXContent",_1_README_stories_MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Home",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(_1_README_stories_MDXContent,null))}});const _1_README_stories=componentMeta;var __namedExportsOrder=["__page"]},"./src/stories/core/2.CODE_OF_CONDUCT.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_2_CODE_OF_CONDUCT_stories});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)("h1",{id:"contributor-covenant-code-of-conduct"},"Contributor Covenant Code of Conduct"),(0,esm.kt)("h2",{id:"our-pledge"},"Our Pledge"),(0,esm.kt)("p",null,"We as members, contributors, and leaders pledge to make participation in our\ncommunity a harassment-free experience for everyone, regardless of age, body\nsize, visible or invisible disability, ethnicity, sex characteristics, gender\nidentity and expression, level of experience, education, socio-economic status,\nnationality, personal appearance, race, caste, color, religion, or sexual\nidentity and orientation."),(0,esm.kt)("p",null,"We pledge to act and interact in ways that contribute to an open, welcoming,\ndiverse, inclusive, and healthy community."),(0,esm.kt)("h2",{id:"our-standards"},"Our Standards"),(0,esm.kt)("p",null,"Examples of behavior that contributes to a positive environment for our\ncommunity include:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"Demonstrating empathy and kindness toward other people"),(0,esm.kt)("li",{parentName:"ul"},"Being respectful of differing opinions, viewpoints, and experiences"),(0,esm.kt)("li",{parentName:"ul"},"Giving and gracefully accepting constructive feedback"),(0,esm.kt)("li",{parentName:"ul"},"Accepting responsibility and apologizing to those affected by our mistakes,\nand learning from the experience"),(0,esm.kt)("li",{parentName:"ul"},"Focusing on what is best not just for us as individuals, but for the overall\ncommunity")),(0,esm.kt)("p",null,"Examples of unacceptable behavior include:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},"The use of sexualized language or imagery, and sexual attention or advances of\nany kind"),(0,esm.kt)("li",{parentName:"ul"},"Trolling, insulting or derogatory comments, and personal or political attacks"),(0,esm.kt)("li",{parentName:"ul"},"Public or private harassment"),(0,esm.kt)("li",{parentName:"ul"},"Publishing others' private information, such as a physical or email address,\nwithout their explicit permission"),(0,esm.kt)("li",{parentName:"ul"},"Other conduct which could reasonably be considered inappropriate in a\nprofessional setting")),(0,esm.kt)("h2",{id:"enforcement-responsibilities"},"Enforcement Responsibilities"),(0,esm.kt)("p",null,"Community leaders are responsible for clarifying and enforcing our standards of\nacceptable behavior and will take appropriate and fair corrective action in\nresponse to any behavior that they deem inappropriate, threatening, offensive,\nor harmful."),(0,esm.kt)("p",null,"Community leaders have the right and responsibility to remove, edit, or reject\ncomments, commits, code, wiki edits, issues, and other contributions that are\nnot aligned to this Code of Conduct, and will communicate reasons for moderation\ndecisions when appropriate."),(0,esm.kt)("h2",{id:"scope"},"Scope"),(0,esm.kt)("p",null,"This Code of Conduct applies within all community spaces, and also applies when\nan individual is officially representing the community in public spaces.\nExamples of representing our community include using an official e-mail address,\nposting via an official social media account, or acting as an appointed\nrepresentative at an online or offline event."),(0,esm.kt)("h2",{id:"enforcement"},"Enforcement"),(0,esm.kt)("p",null,"Instances of abusive, harassing, or otherwise unacceptable behavior may be\nreported to the community leaders responsible for enforcement.\nAll complaints will be reviewed and investigated promptly and fairly."),(0,esm.kt)("p",null,"All community leaders are obligated to respect the privacy and security of the\nreporter of any incident."),(0,esm.kt)("h2",{id:"enforcement-guidelines"},"Enforcement Guidelines"),(0,esm.kt)("p",null,"Community leaders will follow these Community Impact Guidelines in determining\nthe consequences for any action they deem in violation of this Code of Conduct:"),(0,esm.kt)("h3",{id:"1-correction"},"1. Correction"),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Community Impact"),": Use of inappropriate language or other behavior deemed\nunprofessional or unwelcome in the community."),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Consequence"),": A private, written warning from community leaders, providing\nclarity around the nature of the violation and an explanation of why the\nbehavior was inappropriate. A public apology may be requested."),(0,esm.kt)("h3",{id:"2-warning"},"2. Warning"),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Community Impact"),": A violation through a single incident or series of\nactions."),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Consequence"),": A warning with consequences for continued behavior. No\ninteraction with the people involved, including unsolicited interaction with\nthose enforcing the Code of Conduct, for a specified period of time. This\nincludes avoiding interactions in community spaces as well as external channels\nlike social media. Violating these terms may lead to a temporary or permanent\nban."),(0,esm.kt)("h3",{id:"3-temporary-ban"},"3. Temporary Ban"),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Community Impact"),": A serious violation of community standards, including\nsustained inappropriate behavior."),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Consequence"),": A temporary ban from any sort of interaction or public\ncommunication with the community for a specified period of time. No public or\nprivate interaction with the people involved, including unsolicited interaction\nwith those enforcing the Code of Conduct, is allowed during this period.\nViolating these terms may lead to a permanent ban."),(0,esm.kt)("h3",{id:"4-permanent-ban"},"4. Permanent Ban"),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Community Impact"),": Demonstrating a pattern of violation of community\nstandards, including sustained inappropriate behavior, harassment of an\nindividual, or aggression toward or disparagement of classes of individuals."),(0,esm.kt)("p",null,(0,esm.kt)("strong",{parentName:"p"},"Consequence"),": A permanent ban from any sort of public interaction within the\ncommunity."),(0,esm.kt)("h2",{id:"attribution"},"Attribution"),(0,esm.kt)("p",null,"This Code of Conduct is adapted from the ",(0,esm.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org",target:"_blank",rel:"nofollow noopener noreferrer"},"Contributor Covenant"),",\nversion 2.1, available at\n",(0,esm.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org/version/2/1/code_of_conduct.html",target:"_blank",rel:"nofollow noopener noreferrer"},"https://www.contributor-covenant.org/version/2/1/code_of_conduct.html"),"."),(0,esm.kt)("p",null,"Community Impact Guidelines were inspired by\n",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/mozilla/diversity",target:"_blank",rel:"nofollow noopener noreferrer"},"Mozilla's code of conduct enforcement ladder"),"."),(0,esm.kt)("p",null,"For answers to common questions about this code of conduct, see the FAQ at\n",(0,esm.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org/faq",target:"_blank",rel:"nofollow noopener noreferrer"},"https://www.contributor-covenant.org/faq"),". Translations are available at\n",(0,esm.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org/translations",target:"_blank",rel:"nofollow noopener noreferrer"},"https://www.contributor-covenant.org/translations"),"."))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var _2_CODE_OF_CONDUCT_stories_excluded=["components"];function _2_CODE_OF_CONDUCT_stories_extends(){return _2_CODE_OF_CONDUCT_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_2_CODE_OF_CONDUCT_stories_extends.apply(this,arguments)}function _2_CODE_OF_CONDUCT_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _2_CODE_OF_CONDUCT_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _2_CODE_OF_CONDUCT_stories_layoutProps={};function _2_CODE_OF_CONDUCT_stories_MDXContent(_ref){var components=_ref.components,props=_2_CODE_OF_CONDUCT_stories_objectWithoutProperties(_ref,_2_CODE_OF_CONDUCT_stories_excluded);return(0,esm.kt)("wrapper",_2_CODE_OF_CONDUCT_stories_extends({},_2_CODE_OF_CONDUCT_stories_layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"Code of Conduct",mdxType:"Meta"}),(0,esm.kt)(MDXContent,{mdxType:"CodeOfConduct"}))}_2_CODE_OF_CONDUCT_stories_MDXContent.displayName="MDXContent",_2_CODE_OF_CONDUCT_stories_MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Code of Conduct",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(_2_CODE_OF_CONDUCT_stories_MDXContent,null))}});const _2_CODE_OF_CONDUCT_stories=componentMeta;var __namedExportsOrder=["__page"]},"./src/stories/core/3.LICENSE.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_3_LICENSE_stories});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var esm=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)("p",null,"MIT License"),(0,esm.kt)("p",null,"Copyright © 2023 Justin Mahar ",(0,esm.kt)("a",{parentName:"p",href:"https://github.com/justinmahar",target:"_blank",rel:"nofollow noopener noreferrer"},"https://github.com/justinmahar")),(0,esm.kt)("p",null,'Permission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:'),(0,esm.kt)("p",null,"The above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software."),(0,esm.kt)("p",null,'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.'))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var _3_LICENSE_stories_excluded=["components"];function _3_LICENSE_stories_extends(){return _3_LICENSE_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_3_LICENSE_stories_extends.apply(this,arguments)}function _3_LICENSE_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _3_LICENSE_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _3_LICENSE_stories_layoutProps={};function _3_LICENSE_stories_MDXContent(_ref){var components=_ref.components,props=_3_LICENSE_stories_objectWithoutProperties(_ref,_3_LICENSE_stories_excluded);return(0,esm.kt)("wrapper",_3_LICENSE_stories_extends({},_3_LICENSE_stories_layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.h_,{title:"License",mdxType:"Meta"}),(0,esm.kt)("style",null,"\n   .sbdocs {\n    font-family: monospace !important;\n  }"),(0,esm.kt)(MDXContent,{mdxType:"License"}))}_3_LICENSE_stories_MDXContent.displayName="MDXContent",_3_LICENSE_stories_MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"License",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return(0,esm.kt)(dist_esm.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,esm.kt)(_3_LICENSE_stories_MDXContent,null))}});const _3_LICENSE_stories=componentMeta;var __namedExportsOrder=["__page"]},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/stories/core sync ^\\.[\\\\/](?:1\\.README\\.stories\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./1.README.stories.mdx":"./src/stories/core/1.README.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/stories/core sync ^\\.[\\\\/](?:1\\.README\\.stories\\.mdx)$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackEmptyContext},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/core/1.README.stories.mdx":"./src/stories/core/1.README.stories.mdx","./stories/core/2.CODE_OF_CONDUCT.stories.mdx":"./src/stories/core/2.CODE_OF_CONDUCT.stories.mdx","./stories/core/3.LICENSE.stories.mdx":"./src/stories/core/3.LICENSE.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src/stories/core sync ^\\.[\\\\/](?:1\\.README\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[489],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);