(function(){

  // burguer menu
  document.querySelector('#burguer').addEventListener('click', function(){
    document.body.classList.toggle('showmenu');
  });

  // cookie layer
  var cookielayer = document.querySelector('#cookies');
  var btnCookie = cookies.querySelector('button');
  btnCookie.addEventListener('click', function(){
    cookielayer.classList.remove('cookies--visible');
    createCookie();
  });
  function createCookie(){
    var date = new Date();
    date.setTime(date.getTime()+(365*24*60*60*1000));
    document.cookie = 'novutrip-blog' + "=" + 'novutrip-blog' + "; expires=" + date.toGMTString() + "; path=/";
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
    var blognvtcookie = accessCookie("novutrip-blog");
    if (blognvtcookie == "") {
      cookielayer.classList.add('cookies--visible');
    }
  }
  window.onload = function(){
    checkCookie();
  };

  // newsletterform
  var $newsletter = document.querySelector('#newsletter') || false;
  var $newsletterForm = document.querySelector('#newsletter-form') || false;
  var $feedback = document.querySelector('#feedback') || false;

  if( $newsletterForm ) {
    $newsletterForm.addEventListener("submit", function(evt) {
      evt.preventDefault();
      var body = JSON.stringify({
          email: document.querySelector('#email').value,
          referred: 'blog.novutrip'
      });

      var request = new XMLHttpRequest();
      request.open('POST', evt.srcElement.action, true);
      request.setRequestHeader("accept", "application/json");
      request.setRequestHeader("content-type", "application/json");
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = body;
          $newsletter.classList.add('newsletter--ok');
        } else if ( request.status === 409 ) {
          $newsletter.classList.add('newsletter--ko');
          $feedback.querySelector('p').innerText = 'Este correo ya se ha registrado anteriormente';
        } else {
          $newsletter.classList.add('newsletter--ko');
          $feedback.querySelector('p').innerText = '¡Se ha producido un error , inténtalo más tarde!';
        }
      };
      request.send(body);
    });
  }

  //lazy
  var lazyImages = document.querySelectorAll('.lozad');
  var observer = lozad(lazyImages); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
  observer.observe();
})();
