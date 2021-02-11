const api = 'https://swapi.dev/api/';
const films = [];

const star = fetch(api)
  .then(response => response.json())
  .then(data => films.push[...data]);


console.log(films);





//CREATING A PROMICE
const myPromise = new Promise((resolve, reject) => {
    let condition;

    if(condition is met) {
        resolve('Promise is resolved successfully.');
    } else {
        reject('Promise is rejected');
    }
});
