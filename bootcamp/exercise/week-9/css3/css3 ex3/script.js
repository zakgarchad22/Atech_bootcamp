function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    navs.forEach(nav => nav.classList.toggle('hidden'))
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('nav-open')
  }
  