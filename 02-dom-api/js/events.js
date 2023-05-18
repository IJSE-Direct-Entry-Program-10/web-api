const elm = document.querySelector('#circle');
const elmInner = document.querySelector('#inner');
const elmOuter = document.querySelector('#outer');

function elmOnClick(eventData){
    console.log("I am the first listener");
    console.log(eventData);
}

elm.addEventListener('click', elmOnClick);
elm.addEventListener('click', (eventData)=> {
    console.log("I am the second listener")
});

elm.removeEventListener('click', elmOnClick);

elmInner.addEventListener('click', (eventData)=> {
    console.log("I am from Inner");
});

elmOuter.addEventListener('click', (eventData)=> {
    eventData.stopImmediatePropagation();
    console.log("I am from Outer 1");
});

elmOuter.addEventListener('click', (eventData)=> {
    console.log("I am from Outer 2");
});

elmOuter.addEventListener('click', (eventData)=> {
    console.log("I am from Outer 3");
});

document.body.addEventListener('click', ()=> {
    console.log("I am from Body");
});

//---------------------------------

const aElm = document.querySelector("a");
const inputElm = document.querySelector("input");

aElm.addEventListener('click', (eventData)=>{
    console.log(eventData.clientX); // Relative to viewport
    console.log(eventData.clientY);
    console.log(eventData.screenX);
    console.log(eventData.screenY);
    eventData.preventDefault();
});

inputElm.addEventListener('keypress', (eventData)=> {
    console.log(eventData.key);
    eventData.preventDefault();
});

