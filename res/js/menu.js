function menu(){
  var toggle = document.getElementById('burger-btn');
  var navbar = document.getElementById('navbar-mobile');

  if (navbar.style.background == "rgb(25, 23, 26)") {
    navbar.style.background = "white";
    navbar.style.height = "56px";
    toggle.style.transform = "rotate(0deg)";
    document.getElementById('menu-list').classList.add('non-visible');
    document.getElementById('rights').classList.add('non-visible');
  } else {
    navbar.style.background = "rgb(25, 23, 26)";
    navbar.style.height = "100vh";
    toggle.style.transform = "rotate(45deg)";
    setTimeout( function makeVidible(){
      document.getElementById('menu-list').classList.remove('non-visible');
      document.getElementById('rights').classList.remove('non-visible');
    }, 200);
  }
}
