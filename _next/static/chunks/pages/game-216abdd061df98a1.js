(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{134:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return n(8685)}])},8685:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var s=n(5893),i=n(7294),r=n(1163),a=n(9008),c=n.n(a),o=n(4298),l=n.n(o),u=n(1664),p=n.n(u);let d={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},h={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},f="mousemove",g="mouseup";function m(e,t){if(0===t)return e;let n=Math.PI/180*t,s=e[0]*Math.cos(n)+e[1]*Math.sin(n),i=e[1]*Math.cos(n)-e[0]*Math.sin(n);return[s,i]}var x=n(1959),b=n(6618),v=n(8230),w=n(41);let O=()=>{let e=(0,r.useRouter)(),[t,n]=(0,i.useState)(0),[a,o]=(0,i.useState)([""]),[u,O]=(0,i.useState)(""),[j,S]=(0,i.useState)(!1);var T="normal",E=[],y="";switch(e.query.mode&&(T=String(e.query.mode)),T){case"party":y="bg-gradient-to-r from-[#FFC300] to-[#FF8900]",b.map(e=>{E.push(e)});break;case"dirty":y="bg-gradient-to-r from-[#FF006D] to-[#FC0023]",v.map(e=>{E.push(e)});break;case"dares":y="bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]",w.map(e=>{E.push(e)});break;case"mix":y="bg-black",E=[...x,...b,...v,...w];break;default:y="bg-gradient-to-r from-[#00C5FF] to-[#009BFF]",x.map(e=>{E.push(e)})}function k(){t+1>=a.length?(O(a[0]),n(0)):(O(a[t+1]),n(t+1))}function N(){t-1<0?(O(a[a.length-1]),n(a.length-1)):(O(a[t-1]),n(t-1))}(0,i.useEffect)(()=>{if(!e.isReady)return;let t=parseInt(String(e.query.q)),s=parseInt(String(e.query.offset)),i=E.length,r;var a="";for(t<E.length&&(a=E[t]);0!=i;)r=Math.floor(Math.random()*i),i--,[E[i],E[r]]=[E[r],E[i]];var c=0;""!=a&&(c=E.indexOf(a)),!isNaN(s)&&(c-=s)<0&&(c=E.length+c),n(c),o(E),O(E[c]),document.getElementById("maindiv").focus()},[e.isReady]);let M=function(e){var t,n,s;let r;let{trackMouse:a}=e,c=i.useRef(Object.assign({},h)),o=i.useRef(Object.assign({},d)),l=i.useRef(Object.assign({},o.current));for(r in l.current=Object.assign({},o.current),o.current=Object.assign(Object.assign({},d),e),d)void 0===o.current[r]&&(o.current[r]=d[r]);let[u,p]=i.useMemo(()=>(function(e,t){let n=t=>{let n="touches"in t;n&&t.touches.length>1||e((e,i)=>{i.trackMouse&&!n&&(document.addEventListener(f,s),document.addEventListener(g,a));let{clientX:r,clientY:c}=n?t.touches[0]:t,o=m([r,c],i.rotationAngle);return i.onTouchStartOrOnMouseDown&&i.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),h),{initial:o.slice(),xy:o,start:t.timeStamp||0})})},s=t=>{e((e,n)=>{let s="touches"in t;if(s&&t.touches.length>1)return e;if(t.timeStamp-e.start>n.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;let{clientX:i,clientY:r}=s?t.touches[0]:t,[a,c]=m([i,r],n.rotationAngle),o=a-e.xy[0],l=c-e.xy[1],u=Math.abs(o),p=Math.abs(l),h=(t.timeStamp||0)-e.start,f=u>p?o>0?"Right":"Left":l>0?"Down":"Up",g="number"==typeof n.delta?n.delta:n.delta[f.toLowerCase()]||d.delta;if(u<g&&p<g&&!e.swiping)return e;let x={absX:u,absY:p,deltaX:o,deltaY:l,dir:f,event:t,first:e.first,initial:e.initial,velocity:Math.sqrt(u*u+p*p)/(h||1),vxvy:[o/(h||1),l/(h||1)]};x.first&&n.onSwipeStart&&n.onSwipeStart(x),n.onSwiping&&n.onSwiping(x);let b=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${f}`])&&(b=!0),b&&n.preventScrollOnSwipe&&n.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:x,swiping:!0})})},i=t=>{e((e,n)=>{let s;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<n.swipeDuration){s=Object.assign(Object.assign({},e.eventData),{event:t}),n.onSwiped&&n.onSwiped(s);let i=n[`onSwiped${s.dir}`];i&&i(s)}}else n.onTap&&n.onTap({event:t});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),h),{eventData:s})})},r=()=>{document.removeEventListener(f,s),document.removeEventListener(g,a)},a=e=>{r(),i(e)},c=(e,t)=>{let r=()=>{};if(e&&e.addEventListener){let a=Object.assign(Object.assign({},d.touchEventOptions),t.touchEventOptions),c=[["touchstart",n,a],["touchmove",s,Object.assign(Object.assign({},a),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",i,a]];c.forEach(([t,n,s])=>e.addEventListener(t,n,s)),r=()=>c.forEach(([t,n])=>e.removeEventListener(t,n))}return r},o=t=>{null!==t&&e((e,n)=>{if(e.el===t)return e;let s={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),s.cleanUpTouch=void 0),n.trackTouch&&t&&(s.cleanUpTouch=c(t,n)),Object.assign(Object.assign(Object.assign({},e),{el:t}),s)})},l={ref:o};return t.trackMouse&&(l.onMouseDown=n),[l,c]})(e=>c.current=e(c.current,o.current),{trackMouse:a}),[a]);return c.current=(t=c.current,n=o.current,s=l.current,n.trackTouch&&t.el?t.cleanUpTouch?n.preventScrollOnSwipe!==s.preventScrollOnSwipe||n.touchEventOptions.passive!==s.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:p(t.el,n)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:p(t.el,n)}):(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0}))),u}({onSwipedLeft:()=>k(),onSwipedRight:()=>N(),onSwipeStart:()=>S(!0),onSwiped:()=>S(!1)});return(0,s.jsxs)("div",{className:"h-full",tabIndex:0,id:"maindiv",onKeyDown:function(e){"Space"===e.code||"ArrowRight"==e.code?k():"ArrowLeft"==e.code&&N()},children:[(0,s.jsx)(l(),{src:"https://omni.aru.wtf/script.js"}),(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"Truth or Drink"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"fixmobilevh flex flex-col",children:[(0,s.jsx)(p(),{href:"/",children:(0,s.jsxs)("div",{className:"cursor-pointer",children:[(0,s.jsxs)("div",{className:"select-none text-4xl text-header font-semibold mx-auto text-center align-middle pt-4 pb-2",children:["TRUTH ",(0,s.jsx)("span",{className:"text-xl align-middle",children:"O R"})," DRINK"]}),(0,s.jsx)("div",{className:[y,"select-none rounded-lg text-center text-white font-bold max-w-fit px-4 m-auto"].join(" "),children:T.toUpperCase().split("").join(" ")})]})}),(0,s.jsx)("div",{className:"flex flex-grow p-2 mx-auto mt-2 justify-center w-screen",...M,style:{touchAction:"none"},children:(0,s.jsx)("div",{className:"select-none flex items-center text-5xl text-white font-semibold bg-black rounded-xl shadow-xl p-4 max-w-3xl w-full justify-center text-center",onClick:k,children:u})}),(0,s.jsx)("footer",{className:"flex flex-col text-center lg:text-left",children:(0,s.jsxs)("div",{className:"select-none text-center text-gray-700 p-2 mb-2 text-opacity-60",children:["\xa9 ",new Date().getFullYear()," ",(0,s.jsx)("a",{className:"select-none font-semibold text-opacity-60",href:"https://aravindnatch.me/",children:"Aravind Natchiappan"})]})})]})]})};var j=O},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[557,821,774,888,179],function(){return e(e.s=134)}),_N_E=e.O()}]);