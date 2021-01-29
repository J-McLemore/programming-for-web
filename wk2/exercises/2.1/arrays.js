const fav = window.prompt("What is your favorite horror movie?");

const myHorror = ['Sinister', 'The Conjuring', 'The Babadook', 'Insidious', 'Hereditary'];
console.log(myHorror); 

myHorror.push(fav);
console.log(myHorror.toString());
