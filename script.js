// let arr=[32,45,6,6,56]

// let obj={
//     name:"Yash",
//     section:"FSDB",
//     phone:9999988888
// }

// let obj2={
//     name:"Varun",
//     section:"FSDB",
//     phone:9999977777
// }

// obj.name=["Tarun"]

// const para=document.getElementById("para")  
// para[0].textContent="This is updated para"
// para[1].style.color="blue"
// para.style.backgroundColor="yellow"
// console.log(para)

// const para=document.getElementsByClassName("para")
// para[0].textContent="This is updated para"
// para[1].style.color="blue"
// para.style.backgroundColor="yellow"
// console.log(para)

// const para=document.querySelector(".para")
// para.textContent="This is updated para"
// para.style.color="blue"
// console.log(para)

// const para=document.querySelectorAll(".para")
// para[0].textContent="This is updated para"
// para[1].style.color="blue"
// console.log(para)

// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a Heading<h1/>"
// console.log(container)

// const button=document.querySelector("button")
// button.classList.add("btn")

// function show(){
//     alert('You have clicked the button')
// }

// const button=document.querySelector('#start')
// const stop=document.querySelector('#stop')

// start.addEventListener('click',show)
// stop.addEventListener('click',function(){
//     start.removeEventListener('click',show)
    
// })

// const button1=document.querySelector('#btn1')
// // button1.checkList.add('btn1')

// button1.addEventListener('keydown', (event)=>{
//     console.log(event.key)
// })

// const form=document.querySelector('form')
// form.addEventListener('submit', (event)=>{
//     event.preventDefault
//     console.log(event.srcElement[0].value)
//     console.log(event.srcElement[1].value)
//     console.log(event)
//     console.log('Button clicked')
// })

// debugger
// console.log(a)
// // console.log(b)

// var a=3453
// let b=456;

// console.log(a)
// console.log(b)

// function print(){
//     let c=40
//     console.log("Inside fn")
// }

// print()



// async function getData() {
    // try{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             title: 'foo',
    //             body: 'bar',
    //             userId: 1
    //         })
    //     })
    //     if(!response.ok){
    //         throw new Error("Something went wrong")
    //     }
    // const data=await response.json()
    //     console.log(data)
    // }
// }

// console.log("Hi")

// function* generate() {
//     yield 1;
//     yield 2;
//     yield "Tarun";
//     // yield 4;
// }

// const res=generate()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())

// function add(a,b,c){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(add(2)(3)(5))

// const first=add(34)
// const second=first(45)
// const third=second(56)
// console.log(third)

const add=a=>b=>c=>a+b+c
console.log(add(2)(3)(5))

function add(a,b,c){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}