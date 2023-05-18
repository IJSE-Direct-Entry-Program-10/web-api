const btnReset = document.getElementById('reset');
const btnStartTimeout = document.getElementById('start-timeout');
const btnStopTimeout = document.getElementById('stop-timeout');
const btnStartInterval = document.getElementById('start-interval');
const btnStopInteval = document.getElementById('stop-interval');
const h1Elm = document.querySelector('h1');
let tmrTimeout = null;
let tmrInterval = null;

btnReset.addEventListener('click', ()=> {
    h1Elm.style.opacity = '1';
    h1Elm.style.color = 'black';
});

btnStartTimeout.addEventListener('click', ()=> {
    tmrTimeout = setTimeout(()=> {
        // alert("Bobmea... pipurwa...!");
        h1Elm.style.opacity = 0;
    }, 1500);
});

btnStopTimeout.addEventListener('click', ()=> {
    clearTimeout(tmrTimeout);
    tmrTimeout = null;
});

let x = 0;
const colors = ['blue', 'red', 'green', 'black', 'orange'];

btnStartInterval.addEventListener('click', ()=> {
    tmrInterval = setInterval(()=> {
        h1Elm.style.color = colors[x++];
        if (x === colors.length) x = 0;
    }, 250);
});

btnStopInteval.addEventListener('click', ()=> {
    clearInterval(tmrInterval);
    tmrInterval = null;
});