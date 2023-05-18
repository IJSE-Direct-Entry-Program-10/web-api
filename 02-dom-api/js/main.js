const elmInput = document.createElement('input');

// document.querySelector('body');
// document.body;

document.body.append(elmInput);
const elmUl = document.querySelector('ul');

const elmLi = document.createElement('li');
elmLi.innerText = 'Fifth';
elmUl.append(elmLi);        // Add (tail)

const elmLi2 = document.createElement('li');
elmLi2.innerText = 'Zero';
elmUl.prepend(elmLi2);      // Add (head)

document.querySelector("ul > li:nth-child(3)").remove();

const elmLi3 = document.createElement('li');
elmLi3.innerText = 'Second';

const li = document.querySelector("ul > li:nth-child(3)");
/* beforebegin, afterend  */
li.insertAdjacentElement('beforebegin', elmLi3);
// elmUl.insertBefore(elmLi3, li);

/* Form Elements -> value */

document.querySelector('button').innerText = "This is button";
document.querySelector('input[type="button"]')
    .value = "This is input button";
// document.querySelector('button').innerText = 'IJSE';

const btnElm = document.createElement('button');
btnElm.innerText = "I am a new button";
const pElm = document.querySelector('p');
pElm.replaceWith(btnElm);

const h2Elm = document.querySelector('h2');
h2Elm.style.fontSize = '2rem';
h2Elm.style.color = 'black';
h2Elm.style.backgroundColor = 'yellow';
h2Elm.style.textAlign = 'center';
h2Elm.style.borderRadius = '10px';
h2Elm.style.fontFamily = 'Ubuntu';
h2Elm.style.padding = '10px';

const ul = document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.closest("html"));
console.log(ul.children);