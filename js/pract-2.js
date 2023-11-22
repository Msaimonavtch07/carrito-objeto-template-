console.log('hi, welcome to my pig 🍃');

// function personas(nombre) {
//    this.nombre = nombre;

//    this.saludar = function () {
//        return `${this.nombre} hola que tal estas? `
//    }

    // this.saludarIngles = function() {
    //     return `${this.nombre} says hi`
    // }
//};

//personas.prototype.saludarIngles = function () {
//    return `${this.nombre} says hi`
//}

//const juanito = new personas('juanito');
//const pedrito = new personas('pedrito');

//console.log(juanito.saludar());
//console.log(juanito.nombre);
//console.log(juanito);
//console.log(pedrito.saludarIngles());



class Personas {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    };

    get getNombre() {
        return this.nombre;
    };

    set setNombre(nombre) {
        this.nombre = nombre;
    };

    saludar () {
        return `${this.nombre} hola a todos...`
    };

    static probandoSaludo(nombre) {
        return `${nombre} probando saludo...`;
    };
};

class Estudiante extends Personas {
    #notas = []; 

    set setNota(notas) {
        this.#notas.push(notas);
    };

    get getNotas() {
        return this.#notas;
    };

    saludar () {
        return `${this.nombre} hola a todos desde estudiantes...`
    };
}

// console.log(Personas.probandoSaludo('saimon'))

const juanito = new Estudiante('juanito', 25);

juanito.setNota = 7;
juanito.setNota = 5;
juanito.setNota = 1;

console.log(juanito.getNotas);

// juanito.setNombre = 'pedrito';
// console.log(juanito.getNombre);
// console.log(juanito)









console.log('welcome to my pag 🍃'); 

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    // console.log('ejecutando datos...')
    
    try {
        loadingData(true)
        
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()

        // console.log(data)
        pintarCard(data)
    } catch (error) {
        console.log(error)
    } finally {
        loadingData(false)
    }

}

const pintarCard = (data) => {
    const cards = document.getElementById('card-dinamicas');
    const templateCard = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    // console.log(data);
    
    data.results.forEach(item => {
        // console.log(item);
        const clone = templateCard.cloneNode(true);
        clone.querySelector('h5').textContent = item.name;
        clone.querySelector('p').textContent = item.species;
        clone.querySelector('.card-img-top').setAttribute('src', item.image);

        fragment.appendChild(clone);
    });
    
    // guardamos del fragment para evitar el reflow...
    cards.appendChild(fragment);
};

// aqui ocupamos el loading...
const loadingData = estado => {
    const loading = document.getElementById('loading')
    if (estado) {
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none')
    }
}








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










const clone = liTemplate.content.cloneNode(true);
clone.querySelector('.text-primary').textContent = "agregue a traves de un template...";

lista.appendChild(clone);













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
