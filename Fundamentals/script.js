
'use strict';
// let js="amazing";
// if(js==="amazing")
// alert('js is fun');
// console.log(30+38-5+10);
// console.log('hello world');
// myName='hasan';
// console.log(myName);
// console.log(typeof myName);
// console.log(typeof js);

// const firstName=`Hasan`;
// const lastName=`chowdhury`;

// console.log(`My first name is ${firstName} and my last name is ${lastName}`);
// console.log(`My first name is ${firstName}

// My last name is ${lastName}`);

// console.log(2+`5`);

// let x=5;
// console.log(x+10);
// console.log(String(x)+10);

// const age=prompt("whats your age");
// if(age=== 18){
//     console.log(`you are adult because your are ${age} years old`)
// }
// else {
//     console.log(`you are not adult because your are ${age} years old`)
// }

// const d1=96;
// const d2=108;
// const d3=89;

// const k1=88;
// const k2=91;
// const k3=110;

// averageD= (d1+d2+d3)/3;
// averagek=(k1+k2+k3)/3;

// if(averageD>averagek && (averageD>=10 || averagek>=100) ){
//     console.log(`Dolphins team is the winner`);
// }
// else if(averagek===averagek)
// {
//     console.log(`Drawwwwwww`);

// }

// else
// {
//     console.log(`Koalas is the winner`);
// }



// function addition(n1,   n2)
// {

//     console.log(n1,n2);

//     console.log(n1,n2);
// }


// addition(5,3);

// const age =function(bitrthYear){
//     return 2021-bitrthYear;
// } 

// console.log(age(1996));

//type conversion
const inputyear= '100';
console.log(typeof inputyear);
console.log(Number(inputyear),inputyear);
console.log(inputyear+5);
console.log(Number(inputyear)+5);

console.log(Number('hasan'));//not a number
console.log(typeof a); // undefined































// Arrow function

// const age= birthyear=>2021-birthyear;

// console.log(age(1996));

// arrow function with two parameter

// const age= (birthYear,firstName)=>`${firstName}'s age is ${2021-birthYear}`;
// console.log(age(1996,'Hasan'));

// const age= (birthYear,firstName)=>{ return `${firstName}'s age is ${2021-birthYear}`};
// console.log(age(1996,'Hasan'));

// let calcAverage =(score1,score2,score3)=>(score1+score2+score3)/3;
// const avgD=calcAverage(100,2000,500);
// const avgK=calcAverage(50,54,49);
// console.log(avgD);
// console.log(avgK);


// let checkWinner=function(avgD,avgK){
    
//     if(avgD>=2*avgK){
//         console.log(`Dolhins wins (${avgD} vs ${avgK})`);
//     }
//     else if(avgK>=2*avgD){
//         console.log(`Koalas(${avgK}vs${avgD})`);
//     }

//     else{
//         console.log('NoOne wins');
//     }
// }

// checkWinner(avgD,avgK);




// const students=['hasan','mridul','boltu'];

// const a=students.push('modoris');//add a new value at the end and a contains length of array after push
// const b=students.pop()// delete last elements and  b store last element  which was deleted
// students.unshift('Bulu miya');//add element at the first of the array
// students.shift()//delete first element from array

// students.indexOf('mridul') // index of an element
// students.includes('bob')  // give is the elements is available or not





// const Mark={
//     fullName: 'Mark Miller',
//     calcBMI:function(mass,height){
//         return this.BMI= mass / height ** 2 ;

//     }
// }

// const John={
//     fullName: 'John Smith',
//     calcBMI:function(mass,height){
//         return this.BMI= mass / height ** 2 ;

//     }
// }

// if(Mark.calcBMI(78,1.69)>John.calcBMI(92,1.95)){
//     console.log(`${Mark.fullName}'s BMI(${Mark.BMI}) is  higher than ${John.fullName}'s BMI(${John.BMI})`);
// }
// else
// {
//     console.log(`${John.fullName}'s BMI(${John.BMI}) is  higher than ${Mark.fullName}'s BMI(${Mark.BMI})`);
// }

//arrow vs normal function
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

  // const hasan={
  //   year: 1991,
  //   calcAge: function () {
      // console.log(this);
      // console.log(2037 - this.year);
    //   const isMillenial=function(){
    //     console.log(this.year>=1981&&this.year<=1996);  
    // }
    // its a problem
      // Solution 1
      // const self = this; // self or that
      // const isMillenial = function () {
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      // };
      // Solution 2
   
  //    const isMillenial=()=>console.log(this.year>=1981&&this.year<=1996);
    
  //     isMillenial();
  //   }
  // }
  // hasan.calcAge();


