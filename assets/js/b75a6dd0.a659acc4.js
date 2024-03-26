"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4010],{9985:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(4848),o=i(8453);const r={id:"compatibility",sidebar_label:"Compatibility",title:"API Compatibility"},s=void 0,a={id:"welcome/compatibility",title:"API Compatibility",description:"Garnet is a cache-store with a new thread-scalable system architecture. The network, processing, and storage (memory",source:"@site/docs/welcome/compatibility.md",sourceDirName:"welcome",slug:"/welcome/compatibility",permalink:"/garnet/docs/welcome/compatibility",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/welcome/compatibility.md",tags:[],version:"current",frontMatter:{id:"compatibility",sidebar_label:"Compatibility",title:"API Compatibility"},sidebar:"garnetDocSidebar",previous:{title:"Releases",permalink:"/garnet/docs/welcome/releases"},next:{title:"Roadmap",permalink:"/garnet/docs/welcome/roadmap"}},c={},d=[];function l(e){const t={a:"a",code:"code",em:"em",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Garnet is a cache-store with a new thread-scalable system architecture. The network, processing, and storage (memory\nand disk/cloud) layers of Garnet are all designed from the ground up. We chose the RESP API as a matter of\nconvenience given its broad adoption in the community. Garnet is not intended to be a 100% perfect drop-in\nreplacement for Redis, rather it should be regarded as a close-enough starting point for you to ensure compatibility\nfor features that matter to you. Garnet does work unmodified with many Redis clients (we have in particular tested\nGarnet with ",(0,n.jsx)(t.code,{children:"StackExchange.Redis"})," very well), so getting started is very easy."]}),"\n",(0,n.jsxs)(t.p,{children:["A list of API calls supported today by Garnet is maintained ",(0,n.jsx)(t.a,{href:"/garnet/docs/commands/api-compatibility",children:"here"}),". Below we highlight\nspecific non-API-related choices that may not be compatible. This list is not exhaustive, rather it is meant as a broad\nguideline on what differences you can expect when using Garnet."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Garnet being multi-threaded, ",(0,n.jsx)(t.code,{children:"MSET"})," is not atomic. For an atomic version of ",(0,n.jsx)(t.code,{children:"MSET"}),", you would need to express\nit as a transaction (stored procedure)."]}),"\n",(0,n.jsx)(t.li,{children:"Garnet does not support the Redis functions or modules. Instead, it has its own C# based extensibility mechanisms\nthat are optimized for high performance and ease of use."}),"\n",(0,n.jsx)(t.li,{children:"Garnet does not support Lua scripting. We have an experimental version, but it was noted to be too slow for\nrealistic use so we have not added it to the project."}),"\n",(0,n.jsxs)(t.li,{children:["Garnet respects the FIFO ordering of request-responses. However, when used with larger-than-memory data, and if you\n",(0,n.jsx)(t.em,{children:"opt in"})," to using the scatter-gather version of IO (using the ",(0,n.jsx)(t.code,{children:"EnableScatterGatherGet [--sg-get]"})," option) for increased disk performance, then\neven though results are still returned in FIFO order, the read operations may be executed out-of-order to earlier\nwrite operations in the same input operation sequence."]}),"\n",(0,n.jsxs)(t.li,{children:["When Garnet is used with append-only-file (AOF) turned on, by default the server does not wait for commit before\nreturning success to the user. This can be adjusted using the ",(0,n.jsx)(t.code,{children:"WaitForCommit [--aof-commit-wait]"})," option, while the frequency of\ncommit can be tuned using the ",(0,n.jsx)(t.code,{children:"CommitFrequencyMs [--aof-commit-freq]"})," option."]}),"\n",(0,n.jsxs)(t.li,{children:["You can disable the object store if your workload only consists of raw string operations, using the option ",(0,n.jsx)(t.code,{children:"DisableObjects [--no-obj]"}),". The\nstorage tier is disabled by default, and you can enable it using ",(0,n.jsx)(t.code,{children:"EnableStorageTier [--storage-tier]"}),". You can disable the pub-sub feature\nusing the option ",(0,n.jsx)(t.code,{children:"DisablePubSub [--no-pubsub]"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);