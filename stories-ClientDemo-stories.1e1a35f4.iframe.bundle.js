"use strict";(self.webpackChunkopenai_ext=self.webpackChunkopenai_ext||[]).push([[680],{"./src/stories/ClientDemo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Client:()=>Client,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ClientDemo_stories});__webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.css");var utils_functions=__webpack_require__("./node_modules/http-status-codes/build/es/utils-functions.js"),react=__webpack_require__("./node_modules/react/index.js"),Card=__webpack_require__("./node_modules/react-bootstrap/esm/Card.js"),Form=__webpack_require__("./node_modules/react-bootstrap/esm/Form.js"),Button=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),Alert=__webpack_require__("./node_modules/react-bootstrap/esm/Alert.js"),Spinner=__webpack_require__("./node_modules/react-bootstrap/esm/Spinner.js"),Badge=__webpack_require__("./node_modules/react-bootstrap/esm/Badge.js"),process=__webpack_require__("./node_modules/process/browser.js");class OpenAIExt{static V1_CHAT_COMPLETIONS_URL="https://api.openai.com/v1/chat/completions";static streamClientChatCompletion(createChatCompletionRequest,streamConfig){if(!streamConfig.allEnvsAllowed&&OpenAIExt.isEnvNodeJS())throw new Error("You are performing a client/browser chat completion in a Node.js environment.\nUse OpenAIExt.streamServerChatCompletion() instead. To disable this error and proceed anyways (not recommended), set the allEnvsAllowed option to true.\nSee: https://github.com/justinmahar/openai-ext/#nodejs--server");const apiKey=streamConfig.apiKey,url=streamConfig.chatCompletionsUrl??OpenAIExt.V1_CHAT_COMPLETIONS_URL,xhr=new XMLHttpRequest;xhr.open("POST",url),xhr.setRequestHeader("Content-Type","application/json"),xhr.setRequestHeader("Authorization","Bearer "+apiKey),xhr.onprogress=function(_event){if(streamConfig.handler?.onContent){const dataString=xhr.responseText;try{const contentDraft=OpenAIExt.parseContentDraft(dataString);streamConfig.handler.onContent(contentDraft.content,contentDraft.isFinal,xhr)}catch(e){streamConfig.handler?.onError&&streamConfig.handler.onError(e,xhr.status,xhr)}}},xhr.onreadystatechange=()=>{if(xhr.readyState===XMLHttpRequest.DONE){const status=xhr.status;0===status||status>=200&&status<400?streamConfig.handler?.onDone&&streamConfig.handler.onDone(xhr):streamConfig.handler?.onError&&streamConfig.handler.onError(new Error(`Error processing stream completion (XHR readyState ${xhr.readyState}, status ${xhr.status}).`),xhr.status,xhr)}},xhr.onerror=event=>{streamConfig.handler?.onError&&streamConfig.handler.onError(new Error(`Error processing stream completion (XHR readyState ${xhr.readyState}, status ${xhr.status}).`),xhr.status,xhr)};const data=JSON.stringify({...createChatCompletionRequest,stream:!0});return xhr.send(data),xhr}static streamServerChatCompletion(createChatCompletionRequest,streamConfig){let axiosConfig=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!streamConfig.allEnvsAllowed&&!OpenAIExt.isEnvNodeJS())throw new Error("You are performing a server/Node.js chat completion in a browser environment. Use OpenAIExt.streamClientChatCompletion() instead. To disable this error and proceed anyways (not recommended), set the allEnvsAllowed option to true.\nSee: https://github.com/justinmahar/openai-ext/#browser--client");const responsePromise=streamConfig.openai.createChatCompletion({...createChatCompletionRequest,stream:!0},{...axiosConfig,responseType:"stream"});return responsePromise.then((response=>{const stream=response.data;let dataString="";stream.on("data",(chunk=>{if(streamConfig.handler?.onContent){dataString+=chunk.toString();try{const contentDraft=OpenAIExt.parseContentDraft(dataString);streamConfig.handler.onContent(contentDraft.content,contentDraft.isFinal,stream)}catch(e){streamConfig.handler?.onError&&streamConfig.handler.onError(e,stream)}}})),stream.on("end",(()=>{streamConfig.handler?.onDone&&streamConfig.handler.onDone(stream)})),stream.on("error",(e=>{streamConfig.handler?.onError&&streamConfig.handler.onError(e,stream)}))})).catch((e=>{streamConfig.handler?.onError&&streamConfig.handler.onError(e,void 0)})),responsePromise}static parseContentDraft(dataString){const isFinal=dataString.includes("data: [DONE]");return{content:dataString.split("data: [DONE]").join("").trim().split("data: ").filter((v=>!!v)).map((dataJson=>{try{const parsed=JSON.parse(dataJson),choices=parsed&&parsed.choices;if(choices&&Array.isArray(choices)&&choices.length>0)return choices[0].delta?.content??"";throw new Error(dataJson)}catch(e){throw e}})).join(""),isFinal}}static isEnvNodeJS(){return void 0!==process&&process?.versions?.node}static isEnvBrowser(){return!OpenAIExt.isEnvNodeJS()}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClientDemo=props=>{const[model,setModel]=react.useState("gpt-3.5-turbo"),[apiKey,setApiKey]=react.useState(""),[systemPrompt,setSystemPrompt]=react.useState("You are a helpful assistant."),[userPrompt,setUserPrompt]=react.useState("Tell me a funny joke."),[error,setError]=react.useState(void 0),[status,setStatus]=react.useState(void 0),[completion,setCompletion]=react.useState(""),[xhr,setXhr]=react.useState(void 0),[showKey,setShowKey]=react.useState(!1),[shouldRun,setShouldRun]=react.useState(!1),[running,setRunning]=react.useState(!1);return react.useEffect((()=>{if(shouldRun&&!running){setShouldRun(!1),setRunning(!0),setError(void 0),setStatus(void 0),setCompletion("");const xhr=OpenAIExt.streamClientChatCompletion({model,messages:[{role:"system",content:systemPrompt},{role:"user",content:userPrompt}]},{apiKey,handler:{onContent(contentDraft,isFinal,xhr){setCompletion(contentDraft)},onDone(xhr){setRunning(!1),setXhr(void 0)},onError(error,status,xhr){console.error(error),setError(error),setStatus(status),setXhr(void 0),setRunning(!1)}}});setXhr(xhr)}}),[apiKey,model,running,shouldRun,systemPrompt,userPrompt]),(0,jsx_runtime.jsxs)(Card.c,{children:[(0,jsx_runtime.jsx)(Card.c.Header,{children:(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-wrap align-items-center gap-4",children:[(0,jsx_runtime.jsx)("div",{children:"Client Chat Completion Stream Demo"}),(0,jsx_runtime.jsx)("div",{style:{fontSize:"80%"},children:(0,jsx_runtime.jsx)("a",{href:"https://github.com/justinmahar/openai-ext/blob/master/src/stories/ClientDemo.tsx",children:"View Demo Source"})})]})}),(0,jsx_runtime.jsx)(Card.c.Body,{children:(0,jsx_runtime.jsxs)(Form.c,{className:"d-flex flex-column gap-2",onSubmit:e=>{e.preventDefault(),running||setShouldRun(!0)},children:[(0,jsx_runtime.jsx)(Card.c,{children:(0,jsx_runtime.jsxs)(Card.c.Body,{className:"d-flex flex-column gap-1",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"small fw-bold",children:"API Key:"}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-1",children:[(0,jsx_runtime.jsx)(Form.c.Control,{type:showKey?"text":"password",placeholder:"Enter API key",value:apiKey,onChange:e=>setApiKey(e.target.value),required:!0}),(0,jsx_runtime.jsx)(Button.c,{variant:"outline-primary",onClick:()=>setShowKey(!showKey),children:showKey?"Hide":"Show"})]})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"small fw-bold",children:"Model:"}),(0,jsx_runtime.jsx)(Form.c.Control,{type:"text",placeholder:"Enter model",value:model,onChange:e=>setModel(e.target.value),required:!0})]})]})}),(0,jsx_runtime.jsxs)(Alert.c,{variant:"info",className:"d-flex flex-column gap-1 mb-0",children:[(0,jsx_runtime.jsx)("div",{className:"small fw-bold",children:"🤖 System Prompt:"}),(0,jsx_runtime.jsx)(Form.c.Control,{type:"text",placeholder:"Enter system prompt",value:systemPrompt,onChange:e=>setSystemPrompt(e.target.value),required:!0})]}),(0,jsx_runtime.jsxs)(Alert.c,{variant:"primary",className:"d-flex flex-column gap-1 mb-0",children:[(0,jsx_runtime.jsx)("div",{className:"small fw-bold",children:"👤 User Prompt:"}),(0,jsx_runtime.jsx)(Form.c.Control,{type:"text",placeholder:"Enter user prompt",value:userPrompt,onChange:e=>setUserPrompt(e.target.value),required:!0})]}),(0,jsx_runtime.jsxs)("div",{className:"d-flex gap-1",children:[(0,jsx_runtime.jsx)(Button.c,{type:"submit",variant:"primary",disabled:running,children:(0,jsx_runtime.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[running&&(0,jsx_runtime.jsx)(Spinner.c,{animation:"border",role:"status",size:"sm"}),"Send"]})}),(0,jsx_runtime.jsx)(Button.c,{type:"submit",variant:"secondary",disabled:!running,onClick:()=>xhr?.abort(),children:"Stop"})]}),completion&&(0,jsx_runtime.jsx)(Alert.c,{variant:"success",className:"d-flex flex-column gap-1 mb-0",children:(0,jsx_runtime.jsxs)("pre",{className:"fw-bold mb-0",style:{whiteSpace:"pre-wrap"},children:[completion,running&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"█"})]})}),error&&(0,jsx_runtime.jsxs)(Alert.c,{variant:"danger",className:"d-flex flex-column gap-1 mb-0",children:[status&&(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Badge.c,{bg:"danger",children:[status," ",(0,utils_functions.yK)(status)]})}),(0,jsx_runtime.jsx)("div",{className:"fw-bold",children:`${error}`})]}),(0,jsx_runtime.jsxs)("h5",{className:"text-muted text-center mb-2 mt-3",children:["If this project helped you, please"," ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/justinmahar/openai-ext/",children:"Star it on GitHub"})," so others can find it. :)"]})]})})]})};ClientDemo.displayName="ClientDemo";try{ClientDemo.displayName="ClientDemo",ClientDemo.__docgenInfo={description:"",displayName:"ClientDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ClientDemo.tsx#ClientDemo"]={docgenInfo:ClientDemo.__docgenInfo,name:"ClientDemo",path:"src/stories/ClientDemo.tsx#ClientDemo"})}catch(__react_docgen_typescript_loader_error){}const ClientDemo_stories={title:"Demo",component:ClientDemo,parameters:{options:{showPanel:!1}}},Client={name:"Client Demo"};Client.parameters={...Client.parameters,docs:{...Client.parameters?.docs,source:{originalSource:"{\n  name: 'Client Demo'\n}",...Client.parameters?.docs?.source}}};const __namedExportsOrder=["Client"]},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":module=>{module.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"}}]);