'use strict'

const weekdays=["sat","sun","mon","tue",'wed',"thu","fri"];

// ES6 Enhanced Object literals
const openingHours= {
  [weekdays[5]]: {
    open: 12,
    close: 22,
  },
  [weekdays[6]]: {
    open: 11,
    close: 23,
  },
 [ weekdays[0]]: {
    open: 0, 
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  
  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },


  // ES6 Enhanced Object literals
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 Enhanced Object literals
  openingHours,

  orderPizza:
    function(mainItem,...othersItem){
        console.log(mainItem);
        console.log(othersItem);
    },
    
  
};


console.log(restaurant.openingHours);
console.log(restaurant.order(1,2));

console.log(restaurant.openingHours.sat);














// ***********The Nullish Coalescing Operator************

//  restaurant.numGuest=0;
//  const guests=restaurant.numGuest||10; 
//  console.log(guests);

//  const guest1= restaurant.numGuest??10;
//  console.log(guest1);

//***********The for-of Loop ***********

// const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
// for (const item of menu)
// {
//   console.log(item);
// }

// for(const [index,name] of menu.entries()){
// console.log(`${index}: ${name}`);

// }





//*************Short circuiting(&& and ||)**************
//||
// console.log(3||"hasan");
// console.log(''||"hasan");
// console.log(true|| 0);
// console.log(undefined || null);
// console.log(undefined || 0||''||"hello"||25||null);
// restaurant.numGuest=0;

//Long
// const guest1= restaurant.numGuest?restaurant.numGuest:20;
// console.log(guest1);
//short end
// const gueast2=restaurant.numGuest||20;
// console.log(gueast2);


// &&

// console.log(0 &&"hasan");
// console.log(8 && "hasan");
// console.log('hello'&& 23 && null && "hasan");

//practical example
//Long
// if(restaurant.orderPizza){
//   restaurant.orderPizza("biriyani","nehari","Faluda");
// }
//short end
// restaurant.orderPizza && restaurant.orderPizza("biriyani","nehari","Faluda");




// ******** Rest patterns*********

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// Rest becuase on Left side of =
// const [a,b,...others]=[1,2,3,4,5];
// console.log(a,b,others);
// const [pizza,,risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(pizza,risotto,otherFood);

// objects
// const {sat,...weekdays}=restaurant.openingHours;
// console.log(sat,weekdays);

// function add(...numbers){
//   let sum=0;
//   for(let i=0;i<numbers.length;i++)
//   {
//     sum+=numbers[i];
//   }
// console.log(sum);

// }


// const x=[1,2,3,4,5];
// add(...x);


// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
//  restaurant.orderPizza('mashrooms');




//************Spread operator**************
//problem
// const arr=[7,8,9];
// const newArr=[1,2,arr[0],arr[1],arr[2]];
// console.log(newArr);

// here is shortcut spread operator

// const arr2=[1,2,...arr];
// console.log(arr2);

// const mainMenueCopy=[...restaurant.mainMenu,'rice'];
// console.log(mainMenueCopy);
//join two array
// const menu=[...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(menu);
// Iterables: arrays, strings, maps, sets. NOT objects
// const str="hasan";
// const letters=[...str,' ',"!"];
// console.log(letters);

//Objects 
// const newresturant={foundation:1998,...restaurant,founder:"hasan"};
// console.log(newresturant);

// const restaurantCopy={...restaurant};

// restaurantCopy.name="panshi";
// console.log(restaurantCopy.name);
//  console.log(restaurant.name);



//************destructuring*************

 //const arr=[2,3,5];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];
// console.log(a,b,c);

// solution

// const [a,b,c]=arr;
// console.log(a,b,c);
// let [first,second]=[a,b];
//swaping destructuring
// [second,first]=[first,second];
// console.log(first,second);

// Nested destructuring
// const nested=[2,4,5,[7,8]];
// const [h,i,j,[k,l]]=nested;
// console.log(h,i,j,k,l);

//Default values in destructuring

// const[p=1,q=2,r=3]=[4,5];
// console.log(p,q,r);



