<script>
  var link = document.querySelectorAll("a[href='/statusPage']");
  link[0].innerHTML = "<div id='seconds-counter' onClick='window.location.reload();'> </div>";

  var seconds = 0;
  var el = document.getElementById('seconds-counter');

  function incrementSeconds() {
    seconds += 1;
    el.innerText = "This page is " + seconds + " seconds old.";
  }  
  
  
 </script>
