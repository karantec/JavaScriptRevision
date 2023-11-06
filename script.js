//method to access html element
// const para=document.getElementById('para');
// const heading=document.getElementsByClassName('heading1');
// const allpara=document.getElementsByTagName('p');
// const cardheading=document.querySelector('.card .heading1');
// const cardheading1=document.querySelectorAll('.card .heading1');
// const card=document.getElementsByClassName('card');
// for(let i=0;i<card.length;i++){
//     console.log(card[i].getElementsByClassName);
// }

// console.log(cardheading1);
// console.log(cardheading);
// console.log(allpara);
// console.log(heading[0]);
// console.log(para);
//properties
//task 1
//program to show and hideand card
// const button=document.getElementById('showhidebutton');
// const container=document.getElementsByClassName('container')[0];
// button.addEventListener('click',()=>{
//     if(container.style.display=='block'){
//         container.style.display='none';
//         button.innerText='Show Card'
//         button.style.backgroundColor='green'
//     }
//     else {
//         container.style.display='block';
//         button.innerText='Hide Card'
//     }
// })
//task 2
//program to show and hideand card
// const button=document.getElementById('showhidebutton');
// const container=document.getElementsByClassName('container')[0];
// button.addEventListener('click',()=>{
//     if(container.style.display=='block'){
//         container.style.display='none';
//         button.innerText='Show Card'
//         button.style.backgroundColor='green'
//     }
//     else {
//         container.style.display='block';
//         button.innerText='Hide Card'
//     }
// })
//task 2
//program to counter program
const spanNumber=document.getElementsByTagName('span')[0];
const increamentButton=document.getElementById('increament');
const setZeroButton=document.getElementById('setZe');
const decreamentButton=document.getElementById('decreame');
let num=0;
increamentButton.addEventListener('click',()=>{
    num++;
    spanNumber.innerText=num;

})
decreamentButton.addEventListener('click',()=>{
  num--;
  spanNumber.innerText=num;
})
setZeroButton.addEventListener('click',()=>{
    num=0;
    spanNumber.innerText=num;
})
