// NAVBAR
const navbarToggleMenu = document.querySelector('.navbar-toggle-menu')
const navbarMenuWrapper = document.querySelector('.navbar-menu-wrapper')
const allLink = navbarMenuWrapper.querySelectorAll('a:not(.navbar-toggle-submenu)')
const allSubmenuToggle = document.querySelectorAll('.navbar-toggle-submenu')

navbarToggleMenu.addEventListener('click', function() {
    navbarMenuWrapper.classList.toggle('active')
    document.body.classList.toggle('no-scroll', navbarMenuWrapper.classList.contains('active'))
})

allLink.forEach(item=> {
    item.addEventListener('click', function() {
        navbarMenuWrapper.classList.remove('active')
        document.body.classList.remove('no-scroll')
    })
})

allSubmenuToggle.forEach(item=> {
    item.addEventListener('click', function(e) {
        e.preventDefault()
    })
})






const nav = document.querySelector('nav')


window.addEventListener('scroll', function() {
    nav.classList.toggle('shadow', this.scrollY > 20)
})







// SLIDE
slideElement('.business-wrapper')
slideElement('.testimonial-wrapper')

function slideElement(target) {
    const element = document.querySelector(target)
    let pressed = false
    let xPosition
    
    element.addEventListener('mousedown', function(e) {
        e.preventDefault()
        pressed = true
        xPosition = e.clientX
    })
    
    element.addEventListener('mousemove', function(e) {
        if(pressed) {
            this.scrollLeft += xPosition - e.clientX
        }
    })
    
    element.addEventListener('mouseup', function() {
        pressed = false
    })

    element.addEventListener('mouseleave', function() {
        pressed = false
    })
}