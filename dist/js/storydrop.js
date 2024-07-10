const dropdowns = document.querySelectorAll('h4')

dropdowns.forEach((drop) =>{
    drop.addEventListener('click', ()=>{
        drop.nextElementSibling.classList.toggle('open')
        drop.querySelector('i').classList.toggle('open')
    })
})