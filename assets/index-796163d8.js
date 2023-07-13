(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();let p=`
		<p class="big-text">Hi, I'm Jordan</br></br> I'm an undergraduate Comp Sci student from Tasmania, Australia</br></br> This is my portfolio website where some of the things I've worked on can be found</br></br>This website is still a work in progress</p>
	`;console.log(p);const h=()=>p,c=[{title:"portfolio website",short_text:"this website, with vanilla html/css/js",full_text:"That's this site! </br>This is a relatively simple website created with vanilla HTML, CSS, and JS. It is bundled using Vite and deployed on GH-Pages. It is intended to be a simple place to showcase some of my work. This website isn't done yet! But you can see my progress through the github link below.",links:[{type:"github",link:"https://github.com/jofb/vanilla-portfolio"}],experience:["HTML, CSS, Javascript, Node, Vite"]},{title:"game dev",short_text:"hobby game development using various engines",full_text:"Throughout my studies and also through personal projects I have spent a bit of time doing game dev. Most of these are done using Unity, but I have also used other engines for other languages, such as Python and Lua. These are tons of fun to make, most can be found through my itch-io page below.",links:[{type:"itch",link:"https://jofbob.itch.io/"}],experience:["Unity, Python, Lua, C#"]},{title:"language identification",short_text:"mobile spoken LID using machine learning",full_text:"As part of my final project of my undergrad I led a team of 6 to complete a project working with the State Emergency Service here in Tasmania. The aim of the project was to create a mobile application to identify spoken language using machine learning, to aid non English-speaking crash site victims. </br></br>This was implemented using Flutter, and Python for the ML using TensorFlow. I gained a lot of experience working with tensorflow, Flutter development, and working in a team on this project, it was a lot of fun!",experience:["Flutter, Python, Tensorflow, Audio Classification"]}],f={github:'<i class="icon fa-brands fa-github"></i>',itch:'<i class="icon fa-brands fa-itch-io"></i>'};let r='<ul class="projects-list">';c.forEach((e,o)=>{r+=`<li class="project-tile-wrapper" data-index=${o}><div class="project-tile">`,r+=`<h1>${e.title}</h1>`,r+=`<p>${e.short_text}</p>`,r+="</div></li>"});r+="</ul>";function m(e){const o=c[e],n=o.links,s=o.experience;let t=`<div class="popup-content-title"><h1>${o.title}</h1><i id="popup-close" class="fa-solid fa-xmark"></i></div><p>${o.full_text}</p>`;return t+='<div class="popup-content-extra">',s&&(t+='<div class="popup-content-experience"><i class="fa-solid fa-list-check"></i>',s.forEach(i=>{t+=`<p>${i}</p>`}),t+="</div>"),n&&(t+='<div class="popup-content-links">',n.forEach(i=>{t+=`<a class="footer-button" href="${i.link}" target="_blank">${f[i.type]}</a>`}),t+="</div>"),t+="</div>",t}const g=()=>r;let y=`
		<p class="big-text">Hi, I'm Jordan</br></br> I'm an undergraduate Comp Sci student from Tasmania, Australia</br></br> This is my portfolio website where some of the things I've worked on can be found</br></br>This website is still a work in progress</p>
	`;const b=e=>(console.log(`i have recieved the number ${e}`),y);let d={"/":{title:"Jordan Wylde-Browne",render:h},"/projects":{title:"Projects",render:g}};c.forEach((e,o)=>{let n=`/projects/project_${o}`;d[n]={title:e.title,render:b}});function a(){let e=d[location.pathname];e?(document.title=e.title,app.innerHTML=e.render()):(history.replaceState("","","/"),a()),u(),w()}window.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState("","",e.target.href),a())});function w(){let e=document.querySelectorAll(".project-tile-wrapper");for(let o=0;o<e.length;o++)e[o].addEventListener("click",n=>{let s=n.target.closest("li[data-index]").dataset.index;v(s)})}window.addEventListener("popstate",a);window.addEventListener("DOMContentLoaded",()=>{a()});function v(e){let o=document.getElementById("popup"),n=document.getElementById("popup-content");document.getElementById("footer").classList.add("popup-invisible"),n.innerHTML=m(e),document.getElementById("popup-close").addEventListener("click",()=>{u()}),o.style.display="block",o.style.transform="translateY(90px) scale(0.98)",o.style.opacity="0",o.offsetHeight,o.style.transform="translateY(0) scale(1)",o.style.opacity="1"}function u(){const e=document.getElementById("popup");e.style.display!="none"&&(document.getElementById("footer").classList.add("popup-visible"),document.getElementById("footer").classList.remove("popup-invisible"),e.style.transform="translateY(100px)",e.style.opacity="0",window.setTimeout(()=>{e.style.display="none"},200))}