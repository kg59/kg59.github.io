(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{538:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(8792)}])},8016:function(e,t,n){"use strict";n.d(t,{fd:function(){return s}}),n(568);var s=JSON.parse('[{"title":"Change me!","date":"2022-03-11T00:00:00.000Z","body":{"raw":"\\nWhen you change a source file, Contentlayer automatically updates the content cache, which prompts Next.js to reload the content on screen.\\n\\nLet\'stest it","code":"var Component=(()=>{var l=Object.create;var a=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty;var j=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),_=(t,e)=>{for(var o in e)a(t,o,{get:e[o],enumerable:!0})},r=(t,e,o,c)=>{if(e&&typeof e==\\"object\\"||typeof e==\\"function\\")for(let s of p(e))!d.call(t,s)&&s!==o&&a(t,s,{get:()=>e[s],enumerable:!(c=u(e,s))||c.enumerable});return t};var f=(t,e,o)=>(o=t!=null?l(x(t)):{},r(e||!t||!t.__esModule?a(o,\\"default\\",{value:t,enumerable:!0}):o,t)),g=t=>r(a({},\\"__esModule\\",{value:!0}),t);var h=j((b,i)=>{i.exports=_jsx_runtime});var D={};_(D,{default:()=>w,frontmatter:()=>y});var n=f(h()),y={title:\\"Change me!\\",date:new Date(16469568e5)};function m(t){let e=Object.assign({p:\\"p\\"},t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:\\"When you change a source file, Contentlayer automatically updates the content cache, which prompts Next.js to reload the content on screen.\\"}),`\\n`,(0,n.jsx)(e.p,{children:\\"Let\'stest it\\"})]})}function C(t={}){let{wrapper:e}=t.components||{};return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(m,t)})):m(t)}var w=C;return g(D);})();\\n;return Component;"},"_id":"post-01.md","_raw":{"sourceFilePath":"post-01.md","sourceFileName":"post-01.md","sourceFileDir":".","contentType":"markdown","flattenedPath":"post-01"},"type":"Post","url":"/blog/post-01"}]');[...s]},9120:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(5893);n(7294);var a=n(7814);function r(e){return void 0!=e?(0,s.jsx)("div",{className:"hidden md:table-cell flex-row",children:(0,s.jsx)("div",{children:(0,s.jsx)(a.G,{icon:e,className:"hero-star",size:"4x"})})}):void 0}function l(e){let{icon:t,name:n,sub:a,id:l}=e;return(0,s.jsxs)("div",{className:"hero-title-box",id:l||n,children:[r(t),(0,s.jsxs)("div",{className:"hero-name",children:[(0,s.jsx)("h3",{children:n}),(0,s.jsx)("p",{className:"hero-sub",children:a}),r(t)]})]})}},6815:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var s=n(5893);function a(){return(0,s.jsx)("div",{})}var r=n(7294),l=n(5422),c=n(7814),i=n(3767),o=n(9332),d=n(1664),u=n.n(d),h=n(1410);function m(){let e=!1;return(0,s.jsx)("button",{className:"nav-dn-shifter",onClick:void(e=!e),children:(0,s.jsx)("div",{className:(0,h.Z)("w-12 h-12 relative rounded-full transition duration-500 transform p-1 text-white",{"bg-yellow-500":e,"-translate-x-2":e,"bg-gray-700":!e,"translate-x-full":!e}),children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})})}function x(){return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"nav-clock",children:[Array.from({length:8},(e,t)=>(0,s.jsx)("div",{style:{height:1},className:(0,h.Z)("absolute w-1/2 origin-left flex justify-end",{"rotate-0":0===t,"rotate-45":1===t,"rotate-90":2===t,"rotate-[135deg]":3===t,"rotate-180":4===t,"rotate-[225deg]":5===t,"rotate-[270deg]":6===t,"rotate-[315deg]":7===t}),children:(0,s.jsx)("div",{className:"nav-clock-items"})},t)),(0,s.jsx)("div",{className:"nav-clock-hour-hand"}),(0,s.jsx)("div",{className:"nav-clock-minute-hand"})]})})}function v(){let e=(0,l.v9)(e=>e.nav.navItems),t=(0,l.v9)(e=>e.nav.selected),n=(0,o.usePathname)(),a=(0,l.I0)();return(0,r.useEffect)(()=>{var s=e.map(e=>e.link).indexOf(n);s!=t&&a((0,i.p)(s))}),(0,s.jsxs)("nav",{className:"nav-box",children:[(0,s.jsx)(x,{}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:"nav-list",children:e.map((e,n)=>n!==t?(0,s.jsx)("li",{children:(0,s.jsx)(u(),{title:e.name,href:e.link,onClick:()=>a((0,i.p)(n)),children:(0,s.jsxs)("span",{className:"nav-item",children:[e.name,(0,s.jsx)("i",{className:"hidden md:table-cell",children:(0,s.jsx)(c.G,{icon:e.icon,className:"nav-icon"})})]})})},n):(0,s.jsx)("li",{children:(0,s.jsx)(u(),{title:e.name,href:e.link,onClick:()=>a((0,i.p)(n)),children:(0,s.jsxs)("span",{className:"nav-item-selected",children:[e.name,(0,s.jsx)("i",{className:"hidden md:table-cell",children:(0,s.jsx)(c.G,{icon:e.icon,className:"nav-icon bg-green-500"})})]})})},n))})}),(0,s.jsx)(m,{})]})}var j=n(481);function f(e){let{content:t}=e,{scrollYProgress:n}=(0,j.vO)();return(0,s.jsxs)("div",{className:"waves-container",children:[(0,s.jsxs)("div",{className:"waves-box",children:[(0,s.jsx)(j.q.div,{className:"waves-end",children:Array.from({length:40}).map((e,t)=>(0,s.jsx)(j.q.div,{className:"waves-bar",style:{width:n.to(e=>5+40*Math.cos(((t+1)/40-e)*Math.PI/1.5)**32)}},t))}),(0,s.jsx)(j.q.div,{className:"waves-start",children:Array.from({length:40}).map((e,t)=>(0,s.jsx)(j.q.div,{className:"waves-bar",style:{width:n.to(e=>5+40*Math.cos((1-(t+1)/40-e)*Math.PI/1.5)**32)}},t))})]}),t]})}function p(e){let{content:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("header",{className:"pt-5 px-0",children:(0,s.jsx)(v,{})}),(0,s.jsx)(f,{content:(0,s.jsx)("div",{className:"content",children:t})}),(0,s.jsx)("footer",{children:(0,s.jsx)(a,{})})]})}},8792:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var s=n(5893),a=n(1664),r=n.n(a),l=n(5784),c=n(4867),i=n(9297),o=n(8016),d=n(6815),u=n(9120);function h(e){return(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsx)("h2",{className:"mb-1 text-xl",children:(0,s.jsx)(r(),{href:e.url,className:"text-blue-700 hover:text-blue-900 dark:text-blue-400",children:e.title})}),(0,s.jsx)("time",{dateTime:e.date,className:"mb-2 block text-xs text-gray-600",children:(0,l.W)((0,c.D)(e.date),"LLLL d, yyyy")}),(0,s.jsx)("div",{className:"text-sm [&>*]:mb-3 [&>*:last-child]:mb-0",dangerouslySetInnerHTML:{__html:e.body.html}})]})}function m(){let e=o.fd.sort((e,t)=>(function(e,t){let n=(0,i.Q)(e),s=(0,i.Q)(t),a=n.getTime()-s.getTime();return a>0?-1:a<0?1:a})(new Date(e.date),new Date(t.date)));return(0,s.jsx)(d.Z,{content:(0,s.jsxs)("div",{className:"mx-auto max-w-xl py-8",children:[(0,s.jsx)(u.Z,{name:"Blog"}),e.map((e,t)=>(0,s.jsx)(h,{...e},t))]})})}}},function(e){e.O(0,[153,53,774,888,179],function(){return e(e.s=538)}),_N_E=e.O()}]);