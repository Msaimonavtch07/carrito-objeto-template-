// console.log('hi, welcome to my pig 🍃');

// trabajando con 'localStorage'...
localStorage.setItem('sandia', '🍉');
localStorage.setItem('platano', '🍌');

if(localStorage.getItem('platano')) {
    const platano = localStorage.getItem(('platano'));
    console.log(platano);
}

//const frutas = [
//    {
//        nombre: "🍌",
//        color: "amarillo",
//    },
//    {
//       nombre: "🍒",
//        color: "rojo",
//    },
//    {
//        nombre: "🍏",
//        color: "verde",
//    },
//];

// localStorage.setItem('frutas', JSON.stringify(frutas));

if(localStorage.getItem('frutas')) {
    const datosDeLocal = JSON.parse(localStorage.getItem('frutas'));
    console.log(datosDeLocal); 
};




// trabajando con 'export' and 'import'...
export const sandia = '🍉'; 

export function pintarPlatano() {
    console.log('🍌');
};

export const frutilla = () => {
    console.log('🍓');
};

export class Fruta {
    constructor (nombre) {
        this.nombre = nombre;
    }
}


