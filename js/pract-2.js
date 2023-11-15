// console.log("bienvenido🍃");

const inputcolor = document.querySelector('#inputcolor');
const btnVisualizar = document.querySelector('#btnVisualizar');
const parrafoHexa = document.querySelector('#parrafoHexa');
const cardcolor = document.querySelector('#cardcolor');

console.log(inputcolor.value);

btnVisualizar.addEventListener("click", () => {
    console.log('me diste click...');
    console.log(inputcolor.value);
    parrafoHexa.textContent = inputcolor.value;
    cardcolor.style.backgroundColor = inputcolor.value;

    navigator.clipboard
        .writeText("inputColor.value")
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
});

// console.log(inputcolor);
// console.log(btnVisualizar);
// console.log(parrafoHexa);
// console.log(cardcolor);

const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector('#liTemplate');

const clickPaises = () => console.log('me diste click...');

const arrayPaises = ['peru', 'colombia', 'venezuela', 'argentina']

arrayPaises.forEach((pais)  => {
    const clone  = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector('span').textContent = pais;
    
    clone.addEventListener('click', clickPaises);

    fragment.appendChild(clone);
})

lista.appendChild(fragment);










//const clone = liTemplate.content.cloneNode(true);
//clone.querySelector('.text-primary').textContent = "agregue a traves de un template...";

//lista.appendChild(clone);













    {/*<li class="list">
            <b><i>pais:</i></b>
            <span class="text-primary">
                Aqui va el pais escogido...
            </span>
    </li>*/}

//arrayPaises.forEach((pais) => {
    //const li = document.createElement("li");
    //li.className = 'list'; 

    //const b = document.createElement('b');
    //b.textContent = 'pais:';

    //const i = document.createElement('i');
    //i.textContent = 'pais:';

    //const span = document.createElement('span');
    //span.className = 'text-primary';
    //span.textContent = pais;

    //li.appendChild(b);
    //li.appendChild(i);
    //li.appendChild(span);

    //element.appendChild(li);
//});    

//lista.appendChild(element);














//arrayPaises.forEach((paises) => {
//    const newNode = document.createElement('li');
//    newNode.textContent = paises;
    
//    const referenceNode = element.firstChild;
    
//    element.insertBefore(newNode, referenceNode);
//});

//lista.appendChild(element);




// arrayPaises.forEach((paises) => {
//     lista.innerHTML += `<li>${paises}</li>`;
// });





// const h1 = document.querySelector("#titleWeb");
// const boton = document.querySelector(".btn-primary");

// boton.addEventListener("click", () => {
//     console.log("me diste click...");
//     h1.style.color = "blue";
//     h1.textContent = "holaa bienvenido... 🍃"
// })









// console.log(h1.textContent);

// h1.textContent = "texto añadido...";
// h1.style.backgroundColor = "blue";
// h1.style.color = "white";





// console.log(document.getElementById("titleWeb"));
// console.log(document.getElementById("titleWeb").textContent);

// console.log(document.querySelector("h1"))

// console.log(document.querySelectorAll(".container .text-danger"));








// console.log("🍃🍒😋🍓");
// console.log(document);
// console.log(document.head);
// console.log(document.title);
