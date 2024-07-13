var e=document.getElementById("largeImg");document.getElementById("thumbs").onclick=function(t){t.preventDefault();var a=t.target;if("IMG"===a.tagName&&a.classList.contains("gallery__thumb")){var r=a.closest("a");r&&(e.src=r.href)}else"A"===a.tagName&&(e.src=a.href)};
//# sourceMappingURL=index.fde6d8a3.js.map
