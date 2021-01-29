
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


// Arrow function

// const age= birthyear=>2021-birthyear;

// console.log(age(1996));

// arrow function with two parameter

// const age= (birthYear,firstName)=>`${firstName}'s age is ${2021-birthYear}`;
// console.log(age(1996,'Hasan'));

// const age= (birthYear,firstName)=>{ return `${firstName}'s age is ${2021-birthYear}`};
// console.log(age(1996,'Hasan'));

let calcAverage =(score1,score2,score3)=>(score1+score2+score3)/3;
const avgD=calcAverage(100,2000,500);
const avgK=calcAverage(50,54,49);
// console.log(avgD);
// console.log(avgK);


let checkWinner=function(avgD,avgK){
    
    if(avgD>=2*avgK){
        console.log(`Dolhins wins (${avgD} vs ${avgK})`);
    }
    else if(avgK>=2*avgD){
        console.log(`Koalas(${avgK}vs${avgD})`);
    }

    else{
        console.log('NoOne wins');
    }
}

checkWinner(avgD,avgK);












