import{o as i,c as l,a as f}from"./vendor.af32491f.js";const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};u();var a=(o,t)=>{const n=o.__vccOpts||o;for(const[c,e]of t)n[c]=e;return n};const d={};function p(o,t){return i(),l("h1",null,"\u8BA9\u4FFA\u6765\u8BD5\u4E00\u8BD5")}var m=a(d,[["render",p]]);f(m).mount("#app");
