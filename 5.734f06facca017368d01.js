(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8Bzs":function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return f}));var o=n("mrSG"),r=n("AXJG"),i=new WeakMap,a=function(e,t,n,o){void 0===o&&(o=0),i.has(e)!==n&&(n?c(e,t,o):s(e,t))},u=function(e){return e===e.getRootNode().activeElement},c=function(e,t,n){var o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d("+a+"px,"+n+"px,0) scale(0)"},s=function(e,t){var n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},l="input, textarea, [no-blur]",d=function(e,t){if("INPUT"===e.tagName&&!(e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},f=function(e){var t=document,n=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),f=e.getBoolean("scrollPadding",!0),v=Array.from(t.querySelectorAll("ion-input, ion-textarea")),m=new WeakMap,p=new WeakMap,E=function(e){return Object(o.b)(void 0,void 0,void 0,(function(){var t,s,l,d,f;return Object(o.e)(this,(function(v){switch(v.label){case 0:return e.componentOnReady?[4,e.componentOnReady()]:[3,2];case 1:v.sent(),v.label=2;case 2:return s=(t=e.shadowRoot||e).querySelector("input")||t.querySelector("textarea"),l=e.closest("ion-content"),d=l?null:e.closest("ion-footer"),s?(l&&c&&!m.has(e)&&(f=function(e,t,n){if(!n||!t)return function(){};var o=function(n){u(t)&&a(e,t,n)},r=function(){return a(e,t,!1)},i=function(){return o(!0)},c=function(){return o(!1)};return n.addEventListener("ionScrollStart",i),n.addEventListener("ionScrollEnd",c),t.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",i),n.removeEventListener("ionScrollEnd",c),t.addEventListener("ionBlur",r)}}(e,s,l),m.set(e,f)),(l||d)&&i&&!p.has(e)&&(f=function(e,t,n,i,c){var s,l=function(e){s=Object(r.j)(e)},d=function(l){if(s){var d=Object(r.j)(l);(function(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y;return o*o+r*r>36}return!1})(0,s,d)||u(t)||(l.preventDefault(),l.stopPropagation(),function(e,t,n,r,i){if(n||r){var u=function(e,t,n){return function(e,t,n,o){var r=e.top,i=e.bottom,a=t.top,u=a+15,c=.5*Math.min(t.bottom,o-n)-i,s=u-r,l=Math.round(c<0?-c:s>0?-s:0),d=Math.min(l,r-a),f=Math.abs(d);return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(r-u)}}((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(e,n||r,i);if(n&&Math.abs(u.scrollAmount)<4)t.focus();else if(a(e,t,!0,u.inputSafeY),t.focus(),"undefined"!=typeof window){var c,s=function(){return Object(o.b)(void 0,void 0,void 0,(function(){return Object(o.e)(this,(function(o){switch(o.label){case 0:return void 0!==c&&clearTimeout(c),window.removeEventListener("resize",s),window.removeEventListener("keyboardWillShow",s),n?[4,n.scrollByPoint(0,u.scrollAmount,u.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return a(e,t,!1,u.inputSafeY),t.focus(),[2]}}))}))};window.addEventListener("resize",s),window.addEventListener("keyboardWillShow",s),c=setTimeout(s,300)}}}(e,t,n,i,c))}};return e.addEventListener("touchstart",l,!0),e.addEventListener("touchend",d,!0),function(){e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",d,!0)}}(e,s,l,d,n),p.set(e,f)),[2]):[2]}}))}))};s&&function(){var e=!0,t=!1,n=document;n.addEventListener("ionScrollStart",(function(){t=!0})),n.addEventListener("focusin",(function(){e=!0}),!0),n.addEventListener("touchend",(function(o){if(t)t=!1;else{var r=n.activeElement;if(r&&!r.matches(l)){var i=o.target;i!==r&&(i.matches(l)||i.closest(l)||(e=!1,setTimeout((function(){e||r.blur()}),50)))}}}),!1)}(),f&&function(e){var t=document;t.addEventListener("focusin",(function(t){d(t.target,e)})),t.addEventListener("focusout",(function(e){d(e.target,0)}))}(n);for(var h=0,b=v;h<b.length;h++)E(b[h]);t.addEventListener("ionInputDidLoad",(function(e){E(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){var t,n;t=e.detail,c&&((n=m.get(t))&&n(),m.delete(t)),i&&((n=p.get(t))&&n(),p.delete(t))}))}}}]);