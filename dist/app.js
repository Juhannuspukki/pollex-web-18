!function(e){var t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=1)}([function(e,t,s){"use strict";var n="show",o="collapse",r="collapsing",i="collapsed",c=350;function l(e){var t=e.currentTarget,s=t.dataset.target||t.href||null;if(s){var l=document.querySelector(s);l.classList.contains(n)||l.classList.contains(r)?(l.style.height=l.getBoundingClientRect().height+"px",l.offsetHeight,l.classList.add(r),l.classList.remove(o,n),l.style.height="",setTimeout(function(){l.classList.remove(r),l.classList.add(o)},c)):(l.classList.remove(o),l.classList.add(r),l.style.height=0,l.classList.remove(i),setTimeout(function(){l.classList.remove(r),l.classList.add(o,n),l.style.height=""},c),l.style.height=l.scrollHeight+"px")}}document.querySelectorAll('[data-toggle="collapse"]').forEach(function(e){e.addEventListener("click",l)}),window.addEventListener("load",function(){setTimeout(function(){return document.getElementById("gramlink").href="https://t.me/PollexTUNI"},1e3)})},function(e,t,s){e.exports=s(0)}]);