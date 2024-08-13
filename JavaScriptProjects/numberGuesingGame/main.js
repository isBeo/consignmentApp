const num = [2,3,9,5]

//     num.forEach((e)=>{
//         console.log(e*9)
//     })
// num.forEach((item,index,array)=>console.log(`${item} is at ${index} in ${array}`))
//     console.log('typeof -=>',typeof double)



    // console.log(num.includes
    //     (3))


        const peo = [
            {id:1,name:'theo',age:34},
            {id:2,name:'dan',age:31},
            {id:3,name:'joy',age:19},
            
        ]

        let numB=num.reduce((s,item)=>s+item)
        console.log('sum of arr num =>',numB)

        let p = peo.find((itme)=>itme.id===3)
    const food = ['maggi','salt','pepper','tomatoes']
console.log(food.lastIndexOf('pepper'))

let car = {
    name:'toyota',
    color:'black',
    year:2015

}

alert(Number(car))