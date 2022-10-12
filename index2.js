//21

// const person={name:"Durga"}

// function sayHi(age){
//      return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21)())


//22

// function saiHi(){
//     return (()=>0)();
// }
// console.log(saiHi())
// console.log(typeof saiHi())


//23

// function saiHi(){
//     return ()=>0
// }
// console.log( typeof saiHi())

//24

// console.log(typeof typeof 1)

// 25

// const numbers=[1,2,3]
//    numbers[9]=11
//  console.log(numbers)  


//26

// let data=3+4+'5'
// console.log(data)
// console.log(typeof data)

//27

// console.log(typeof 3+4+"5")

//28

// console.log(typeof (3+4 + +'5'))

//29

// console.log(typeof [])

//30

// function getInfo(member){
//     member.name="Anil"
// }

// const person={name:"Sarah"}

// getInfo(person)

// console.log(person)

//31

// function Car(){
//     this.make="Tata"
//     return {
//         make:"kia"
//     }
// }

// const mycar=new Car()
// console.log(mycar.make)

//32

(()=>{
    let x=(y=10)
})()

console.log(typeof x)