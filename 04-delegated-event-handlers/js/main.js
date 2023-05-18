const btnAdd = document.querySelector('#btn-add');
const pElm = document.querySelector("body > p");

btnAdd.addEventListener('click', ()=> {
    // const pElm = document.createElement('p');
    // pElm.innerHTML = `<button class="btn">Button</button>`;
    // document.body.append(pElm);

    const clonedElm = pElm.cloneNode(true);
    document.body.append(clonedElm);
});

document.body.addEventListener('click', (eventData)=> {
    if (eventData?.target.classList.contains("btn")){
        alert("okay");
    }
});