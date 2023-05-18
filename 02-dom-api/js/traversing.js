// const mainElm = document.getElementById('dep');
// mainElm.style.color = 'red';

// console.log(mainElm.parentElement);

// console.log(mainElm.closest('html'));
// console.log(mainElm.parentElement.closest('li').innerText);

// console.log(mainElm.closest('body').children[2].children[0]);
// console.log(mainElm.closest('body').querySelector('div > span').innerText);

const elm = document.querySelector('#list');
const elmDD = document.querySelector('.drop-down');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const h3Elm = document.createElement('h3');
h3Elm.innerText = "Something";

elm.prepend(li1);
elm.append(li2);
elm.insertBefore(li3, elmDD);

elm.insertAdjacentElement('beforeend', li4);
elm.insertAdjacentElement('afterend', h3Elm);

// ------------------------------------------

const helloElm = document.getElementById('hello');
console.log('innerText= ', helloElm.innerText);
console.log('innerHTML= ', helloElm.innerHTML);

helloElm.innerText = "<h1>Something</h1>";
helloElm.innerHTML = "<h1>Something</h1>";