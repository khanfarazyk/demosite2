const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})