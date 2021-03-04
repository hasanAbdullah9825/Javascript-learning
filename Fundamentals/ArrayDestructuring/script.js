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
 const arr=[2,3,5];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];
// console.log(a,b,c);

// solution

const [a,b,c]=arr;
console.log(a,b,c);
let [first,second]=[a,b];
//swaping destructuring
[second,first]=[first,second];
console.log(first,second);

// Nested destructuring
const nested=[2,4,5,[7,8]];
const [h,i,j,[k,l]]=nested;
console.log(h,i,j,k,l);

//Default values in destructuring

const[p=1,q=2,r=3]=[4,5];
console.log(p,q,r);



