!function(){var i=document.querySelector("#cookies-advise");function e(){""==function(e){for(var i=e+"=",o=document.cookie.split(";"),t=0;t<o.length;t++){var n=o[t].trim();if(0===n.indexOf(i))return n.substring(i.length,n.length)}return""}("pilarblazquez")&&i.classList.add("cookies--visible")}i.querySelector("button").addEventListener("click",function(){var e;i.classList.remove("cookies--visible"),(e=new Date).setTime(e.getTime()+31536e6),document.cookie="pilarblazquez=pilarblazquez; expires="+e.toGMTString()+"; path=/"}),window.onload=function(){e()};var o=document.querySelectorAll(".lozad");lozad(o).observe()}();