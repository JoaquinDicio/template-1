function init(){
    setEvents();
}
function setEvents(){
    const $menuBtn=document.querySelector('#menu-btn')
    $menuBtn.addEventListener('click',()=>toggleNavBar())
    window.addEventListener('scroll',()=>changeNavbarBg(window.scrollY))
}

function changeNavbarBg (scrollY){
    const $header=document.querySelector('.header')
    if(scrollY>95){
        $header.classList.add('bg-grey')
    }else{
        $header.classList.remove('bg-grey')
    }
}

function toggleNavBar(){
    const $navbar=document.querySelector('#navbar')
    const $header=document.querySelector('.header')
    $navbar.classList.toggle('d-none')
    $header.classList.toggle('bg-dark')
}