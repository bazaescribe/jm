function menu() {
  var toggle = document.getElementById('burger-btn');
  var navbar = document.getElementById('navbar-mobile');

  if (navbar.style.background === "rgb(25, 23, 26)") { // CLOSE
    navbar.style.background = "white";
    navbar.style.height = "56px";
    toggle.style.transform = "rotate(0deg)";
    document.getElementById('menu-list').classList.add('non-visible');
    document.getElementById('rights').classList.add('non-visible');
		document.getElementById('globo').style.display = 'inline-block';
		document.getElementById('globo-w').classList.add('non-visible');
		document.getElementById('cta-icon').style.marginLeft = '0px';
  } else { // OPEN
    navbar.style.background = "rgb(25, 23, 26)";
    navbar.style.height = "100vh";
    toggle.style.transform = "rotate(225deg)";
    setTimeout( function makeVidible(){
      document.getElementById('menu-list').classList.remove('non-visible');
      document.getElementById('rights').classList.remove('non-visible');
    }, 200);
		document.getElementById('globo').style.display = 'none';
		document.getElementById('globo-w').classList.remove('non-visible');
		document.getElementById('cta-icon').style.marginLeft = '180px';
  }
}