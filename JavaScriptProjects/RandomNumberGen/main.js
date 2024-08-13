const button = document.querySelector('#btn')
const display = document.querySelector('#show')
const nm= []

console.log(nm)

const gen =e=>{
    let ran = Math.floor(Math.random()*10)+1;
    nm.push(ran);
    nm.join('-');
display.textContent = nm
    // console.log(nm)
    const add =  nm.reduce((a,e)=>{
        a+e;
    })
    console.log(add)

}

button.addEventListener('click',gen)