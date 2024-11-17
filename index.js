let form=document.querySelector('input')
let lelabel=document.querySelector('label')

let commander=document.querySelector('.commande')
let section3=document.querySelector('.section3')
let section1=document.querySelector('.section1')
let acceil=document.querySelector('.acceil')

commander.addEventListener('click',()=>{
    section1.style.visibility='hidden'
    section3.style.visibility='visible' 
    section3.style.transform='translateX(0)'
})

