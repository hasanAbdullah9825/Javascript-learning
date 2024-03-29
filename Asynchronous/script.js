'use strict';

// const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// const getCountryData= function(country){
//     const request=new XMLHttpRequest();
//     request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load',function(){
//         const [data]=JSON.parse(this.responseText);
//         console.log(data);
//         const html=`<article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(2)}</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//       </article>`;

//       countriesContainer.insertAdjacentHTML('beforeend', html);
//       countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData('bangladesh');
// getCountryData('usa');
///////////////////////////////////////

const renderCountryData = function (data, className = '') {
  const html = `<article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(2)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = async function (country) {
  // fetch(`https://restcountries.eu/rest/v2/name/${country}`).
  // then(responce=>responce.json()).
  // then(data=>{
  //   renderCountryData(data[0]);

  //    const neighbour = data[0].borders[0];
  //    console.log(neighbour);

  //    return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);

  // }).then(responce=>responce.json()).then(data=>{
  // renderCountryData(data[0],'neighbour');

  // });

  const responce = await fetch(
    `https://restcountries.eu/rest/v2/name/${country}`
  );
  const data = await responce.json();
  //console.log(data);
  return data[0];
};

getCountryData('Russia').then(data => renderCountryData(data));
getCountryData('usa').then(data => renderCountryData(data));
