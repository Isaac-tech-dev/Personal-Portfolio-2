/* ===== MENU SHOW Y HIDDEN===== */
const navMenu = document.getElementById('nav-menu'),
    toogleMenu = document.getElementById('nav-toogle'),
    navClose = document.getElementById('nav-close')

//SHOW
toogleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})  
//HIDDEN  
navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
}) 



/* ===== REMOVE MENU ===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ===== SCROLL SECTION ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive (){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}