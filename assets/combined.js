(function(){function i(){if((new Date).toLocaleString===undefined){return}var e=document.getElementsByClassName("unlocalized-date");for(var t=0;t<e.length;t++){var n=e[t];n.innerText=new Date(n.title).toLocaleString()}for(var t=0;t<e.length;t++){n.classList.remove("unlocalized-date")}}document.addEventListener("DOMContentLoaded",i);var d,n,c;function e(e,t){d=n=e;c=t}function t(e){e.preventDefault();if(!d||d<=1){return}var r=d-1;var o=new XMLHttpRequest;o.onreadystatechange=function(e){if(o.readyState!==4){return}if(o.status>=400||!o.responseText){return}if(d!==r+1){return}d=r;var t=document.getElementById("comments");var n=document.createElement("div");n.innerHTML=o.responseText.split("\x3c!--COMMENT:AJAX--\x3e")[1];while(n.firstChild){t.appendChild(n.firstChild)}i();a.disabled=false;a.innerText="More comments";if(r===1){document.getElementById("more-comments-container").classList.add("hide")}};o.open("GET",c+"comment-page-"+r+"/");o.send();var a=this;a.disabled=true;a.innerHTML="Loading&hellip;";if(ga){ga("send","event","CommentPager","more")}}window.prepComments=e;document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("js-comment-more");if(e){e.addEventListener("click",t)}});function r(e){e=e.replace(/&/g,"&amp;");e=e.replace(/</g,"&lt;");e=e.replace(/>/g,"&gt;");e=e.replace(/\r\n/g,"\n");e=e.replace(/\r/g,"\n");return e}function o(e){var t=[];var n=0;while(n<e.length){var r=e.substring(n).indexOf("\n");if(r==-1){t.push({body:e.substring(n),fullStop:true});break}else if(r==0){n+=1;continue}r+=n;t.push({body:e.substring(n,r),fullStop:r+1>=e.length||e[r+1]=="\n"});n=r+1}var o="";var a=false;t.forEach(function(e){if(a){o+="<br />\n"}else{o+="<p>\n";a=true}o+=e.body;if(e.fullStop){o+="\n</p>\n";a=false}});if(a){o+="\n</p>\n";a=false}return o}function a(){var e=document.getElementById("author").value;if(e==""){e="Anonymous"}var t=document.getElementById("comment").value;document.getElementById("rh-previewer-author-link").innerText=e;document.getElementById("rh-previewer-content").innerHTML=o(r(t));document.getElementById("rh-previewer").classList.remove("hide");document.getElementById("rh-commenter").classList.add("hide")}function m(){document.getElementById("rh-previewer").classList.add("hide");document.getElementById("rh-commenter").classList.remove("hide")}function u(e){var t=e+"=";var n=document.cookie.split(";");for(var r=0;r<n.length;r++){var o=n[r];while(o.charAt(0)==" "){o=o.substring(1,o.length)}if(o.indexOf(t)==0){var a=o.substring(t.length,o.length);a=a.replace(new RegExp("\\+","g")," ");return decodeURIComponent(a)}}return null}function l(e,t){var n=new Date;n.setDate(n.getDate()+365);document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+";"+"expires="+n.toUTCString()+";"+"path=/"+";"+"domain="+document.location.hostname;document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+";"+"expires="+n.toUTCString()+";"+"path=/"}function s(e){var t=0;for(var n=0;n<e.length;n++){if(e[n]=="\n"){t+=1}}return t}document.addEventListener("DOMContentLoaded",function(){if(!document.getElementById("commentform")){return}document.getElementById("comment").addEventListener("keydown",function(e){if(e.keyCode!==13){return}if(s(this.value+"\n")>=39){e.preventDefault()}});document.getElementById("comment").addEventListener("paste",function(e){if(!event.clipboardData){return}var t=event.clipboardData.getData("text/plain");if(s(this.value+t)>=39){e.preventDefault()}});document.getElementById("rh-comment-spam").value="clear";var e=u("hn");if(e){document.getElementById("rh-comment-cookie").value=e}var t=false;document.getElementById("commentform").addEventListener("submit",function(e){if(t){e.preventDefault();return}t=true;setTimeout(function(){t=false},2e3)});document.getElementById("commentpreview").addEventListener("click",function(e){e.preventDefault();a()});document.getElementById("commentunpreview").addEventListener("click",function(e){e.preventDefault();m()});var n=u("comment_author_e12dcc73504d99468b06c5745c8411a3");if(n){document.getElementById("author").value=n}document.getElementById("author").addEventListener("change",function(){l("comment_author_e12dcc73504d99468b06c5745c8411a3",this.value)});var r=u("comment_author_email_e12dcc73504d99468b06c5745c8411a3");if(r){document.getElementById("email").value=r}document.getElementById("email").addEventListener("change",function(){l("comment_author_email_e12dcc73504d99468b06c5745c8411a3",this.value)})})})();document.addEventListener("DOMContentLoaded",function(){var t=document.getElementsByClassName("js-header-search-hide");var s=document.getElementsByClassName("js-header-search-button");var a=document.getElementsByClassName("js-header-search-bar");function r(e){for(var t=0;t<e.length;t++){e[t].classList.add("hide")}}function n(e){for(var t=0;t<e.length;t++){e[t].classList.add("mobile2-hide")}}function l(e){for(var t=0;t<e.length;t++){e[t].classList.remove("hide");e[t].classList.remove("mobile2-hide")}}function e(e,t,s){for(var a=0;a<e.length;a++){e[a].addEventListener(t,s)}}e(s,"click",function(){for(var e=0;e<t.length;e++){n(t);r(s);l(a);a[0].focus()}});e(a,"blur",function(){for(var e=0;e<t.length;e++){l(t);l(s);r(a)}});document.addEventListener("keydown",function(e){if(event.keyCode===27){ralert_dismiss()}})});function ralert(e){var t=document.getElementById("ralert-overlay");var s=document.getElementById("ralert-alert");var a=document.getElementById("ralert-text");var r=document.getElementById("ralert-dismiss");if(s.classList.contains("showRalert")){return}a.innerHTML=e;t.style.display="block";t.style.opacity=1;s.style.display="block";s.classList.remove("hideRalert");s.classList.add("showRalert");s.classList.add("showedRalert");r.focus()}function ralert_dismiss(){var e=document.getElementById("ralert-overlay");var t=document.getElementById("ralert-alert");var s=document.getElementById("ralert-text");var a=document.getElementById("ralert-dismiss");if(!t.classList.contains("showRalert")){return}t.classList.remove("showRalert");t.classList.remove("showedRalert");t.classList.add("hideRalert");e.style.opacity=0;setTimeout(function(){if(t.classList.contains("hideRalert")){e.style.display="none";t.style.display="none"}},200)}