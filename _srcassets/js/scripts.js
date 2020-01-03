(function(){

  // cookie layer
  var cookielayer = document.querySelector('#cookies-advise');
  var btnCookie = cookielayer.querySelector('button');
  btnCookie.addEventListener('click', function(){
    cookielayer.classList.remove('cookies--visible');
    createCookie();
  });
  function createCookie(){
    var date = new Date();
    date.setTime(date.getTime()+(365*24*60*60*1000));
    document.cookie = 'pilarblazquez' + "=" + 'pilarblazquez' + "; expires=" + date.toGMTString() + "; path=/";
  }
  function accessCookie(cookieName){
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for(var i=0; i<allCookieArray.length; i++) {
      var temp = allCookieArray[i].trim();
      if (temp.indexOf(name)===0) {
        return temp.substring(name.length,temp.length);
      }
    }
    return "";
  }
  function checkCookie(){
    var blognvtcookie = accessCookie("pilarblazquez");
    if (blognvtcookie == "") {
      cookielayer.classList.add('cookies--visible');
    }
  }
  window.onload = function(){
    checkCookie();
  };


  //lazy
  var lazyImages = document.querySelectorAll('.lozad');
  var observer = lozad(lazyImages); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
  observer.observe();
})();
