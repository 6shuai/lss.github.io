var D=Object.defineProperty,P=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var X=(t,o,n)=>o in t?D(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,E=(t,o)=>{for(var n in o||(o={}))L.call(o,n)&&X(t,n,o[n]);if(C)for(var n of C(o))R.call(o,n)&&X(t,n,o[n]);return t},F=(t,o)=>P(t,V(o));import{_ as K}from"./index.ee686541.js";import{v as O,o as Q,h as Y,P as z,Q as G,j as b,K as J,L as U,_ as Z,$ as ee,a0 as te,I as ne}from"./vendor.877260a8.js";const oe=O({name:"Home",setup(){const t=J({ruleNumber:0}),o=10,n=10,M=0,f=0,h=100;let c,S,m=!0,w=0,g=0,r=10,i,v,x,a,u=0,I=0,N=0;const A=()=>{const e=document.getElementById("rule-container");i=document.getElementById("test-canvas"),i.width=e.clientWidth,i.height=e.clientHeight,a=i.getContext("2d",{alpha:!1});const s=parseInt((i.clientWidth/n).toFixed(0));u=parseInt((s/2).toFixed(0)),c=f-u,S=h-u,v=i.clientWidth,x=i.clientHeight,a.font="14px Arial",window.requestAnimationFrame(p)},p=()=>{a.fillStyle="#ffffff",a.beginPath(),a.fillRect(0,0,v,x),a.closePath(),a.fillStyle="#000000";let e;const s=r.toString(),d=Number(s.charAt(s.length-1));r>0?e=n-d:r<0?(e=d,e===0&&(e=n)):e=0;for(let l=e;l<v;l+=n){a.moveTo(l,M);const _=l+r;if(B(_)===0)if(_%(o*n)==0){const j=a.measureText(l),q=(l-j.width/2).toFixed(2);a.fillText(_/n,q,45),a.lineTo(l,30)}else a.lineTo(l,10)}a.stroke(),console.log(r,n,u),ne(()=>{t.ruleNumber=Math.floor(r/n)+u})};U(()=>{A()});const B=e=>{const s=Math.floor(e/n);return s>=f&&s<=h?0:-1},T=e=>{const s=Math.floor(e/n);return s<=c?-1:s>=S?1:0},W=e=>{w=e.changedTouches[0].clientX,g=r,m=!1},$=e=>{const s=e.targetTouches[0].clientX,d=Math.floor(w-s);I=N-s,N=s,!(d*T(r)>0)&&k(d)},k=e=>{r=g+e,window.requestAnimationFrame(p)},H=e=>{m=!0,y(I)},y=e=>{!m||e*T(r)>0||(e*=.9,!(Math.abs(e)<1||e*T(r)>0)&&(r+=Math.floor(e),window.requestAnimationFrame(()=>{y(e),p()})))};return F(E({},Z(t)),{canvasTouchMove:$,canvasTouchEnd:H,canvasTouchStart:W})}}),se=t=>(ee("data-v-3cb17db2"),t=t(),te(),t),ae={class:"home col"},re={id:"rule-container",class:"rule_container"},ce=se(()=>b("span",{class:"rule_cursor"},null,-1));function le(t,o,n,M,f,h){return Q(),Y("div",ae,[z(G(t.ruleNumber)+" ",1),b("div",re,[ce,b("canvas",{id:"test-canvas",width:"300",height:"200",onTouchmove:o[0]||(o[0]=(...c)=>t.canvasTouchMove&&t.canvasTouchMove(...c)),onTouchend:o[1]||(o[1]=(...c)=>t.canvasTouchEnd&&t.canvasTouchEnd(...c)),onTouchstart:o[2]||(o[2]=(...c)=>t.canvasTouchStart&&t.canvasTouchStart(...c))},null,32)])])}var fe=K(oe,[["render",le],["__scopeId","data-v-3cb17db2"]]);export{fe as default};
