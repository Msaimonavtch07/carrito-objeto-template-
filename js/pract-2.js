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

