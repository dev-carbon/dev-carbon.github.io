(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const i=()=>{const c=()=>{const t=localStorage.getItem("theme");return console.log(t),t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},o=t=>{t==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",t)};o(c());const n=document.getElementById("themeToggle");n==null||n.addEventListener("click",()=>{const t=document.documentElement.classList.contains("dark");o(t?"light":"dark")})};document.addEventListener("DOMContentLoaded",()=>{i()});