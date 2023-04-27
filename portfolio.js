//header toggle
int MenuBtn = document.getElementById('MenuBtn')

    MenuBtn.addEventListener('clik' function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
    
})