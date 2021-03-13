'use strict'
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//Spread operator
//problem
const arr=[7,8,9];
const newArr=[1,2,arr[0],arr[1],arr[2]];
console.log(newArr);

// here is shortcut spread operator

const arr2=[1,2,...arr];
console.log(arr2);

const mainMenueCopy=[...restaurant.mainMenu,'rice'];
console.log(mainMenueCopy);
//join two array
const menu=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu);
// Iterables: arrays, strings, maps, sets. NOT objects
const str="hasan";
const letters=[...str,' ',"!"];
console.log(letters);

// sObjects 
const newresturant={foundation:1998,...restaurant,founder:"hasan"};
console.log(newresturant);

const restaurantCopy={...restaurant};

restaurantCopy.name="panshi";
console.log(restaurantCopy.name);
 console.log(restaurant.name);

















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


