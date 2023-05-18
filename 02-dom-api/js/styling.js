const h1Elm = document.querySelector('h1');

console.log('color = ', h1Elm.style.color);
console.log('color = ', getComputedStyle(h1Elm).color);
console.log('background-color = ', h1Elm.style.backgroundColor);
h1Elm.style.fontFamily = 'Ubuntu';
h1Elm.style.textDecoration = 'underline';

const spanElm = document.querySelector('span');
console.log(spanElm.classList.contains('a'));
console.log(spanElm.classList.contains('b'));
spanElm.classList.add('b', 'c', 'd');
spanElm.classList.remove('c', 'a');
spanElm.classList.forEach(className => console.log(className));

console.log(spanElm.className);
spanElm.className = "a b c d";

spanElm.classList.toggle('a');
spanElm.classList.toggle('a');