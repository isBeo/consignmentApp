console.clear();


const display= document.querySelector('#b1');
const decrease= document.querySelector('#b2');
const rest= document.querySelector('#b3');
const increase= document.querySelector('#b4');


const dec = (s)=>{
    display.value --;
}
const res = e =>{
    display.value= 0;

}
const inc = e =>{
    display.value ++;

}

//click events
decrease.addEventListener('click',dec)
rest.addEventListener('click',res)
increase.addEventListener('click',inc)
// console.log(display,decrease,rest,increase)