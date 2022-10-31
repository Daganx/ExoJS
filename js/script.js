let burger = document.getElementById('burger')
let nav = document.getElementById('nav')

burger.addEventListener('click', displayNav);
document.addEventListener('scroll', toto)


function displayNav(){
    nav.classList.toggle("displayNone")
}

function toto(){
    nav.classList.add('displayNone')
}

console.log(burger)