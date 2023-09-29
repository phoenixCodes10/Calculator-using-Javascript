let calc_box = document.getElementById('calc_box')
let clear_btn = document.getElementById('clear_btn')
let div_btn = document.getElementById('div_btn')
let mul_btn = document.getElementById('mul_btn')
let neg_btn = document.getElementById('neg_btn')
let zero_btn = document.getElementById('zero_btn')
let nine_btn = document.getElementById('nine_btn')
let eight_btn = document.getElementById('eight_btn')
let  seven_btn = document.getElementById('seven_btn')
let six_btn = document.getElementById('six_btn')
let five_btn = document.getElementById('five_btn')
let add_btn = document.getElementById('add_btn')
let four_btn = document.getElementById('four_btn')
let three_btn = document.getElementById('three_btn')
let two_btn = document.getElementById('two_btn')
let one_btn= document.getElementById('one_btn')
let equals_btn = document.getElementById('equals_btn') 
let display=document.getElementById('display')
let displayItem = document.getElementById('displayItem')
nine_btn.addEventListener('click',()=>{
    displayItem.textContent += '9'
})
div_btn.addEventListener('click',()=>{
    displayItem.textContent +=  '/'
})
 mul_btn.addEventListener('click',()=>{
     displayItem.textContent += '*'
})
neg_btn.addEventListener('click',()=>{
    displayItem.textContent += '-'
})
eight_btn.addEventListener('click',()=>{
    displayItem.textContent += '8'
})
add_btn.addEventListener('click',()=>{
    displayItem.textContent += '+'
})
seven_btn.addEventListener('click',()=>{
    displayItem.textContent += '7'
})
six_btn.addEventListener('click',()=>{
    displayItem.textContent += '6'
})
five_btn.addEventListener('click',()=>{
    displayItem.textContent += '5'
})
four_btn.addEventListener('click',()=>{
    displayItem.textContent += '4'
})
three_btn.addEventListener('click',()=>{
    displayItem.textContent += '3'
})
two_btn.addEventListener('click',()=>{
    displayItem.textContent += '2'
})
one_btn.addEventListener('click',()=>{
    displayItem.textContent += '1'
})
zero_btn.addEventListener('click',()=>{
    displayItem.textContent += '0'
})
clear_btn.addEventListener('click',()=>{
    displayItem.innerHTML = '<p id="displayItem"></p>'
})
equals_btn.addEventListener('click',()=>{
    displayItem.textContent = eval(displayItem.textContent)  
})