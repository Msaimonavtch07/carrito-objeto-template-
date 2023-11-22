console.log('hi, welcome to my pig 🍃');

const formulario = document.querySelector('#formulario');
const cardEstudiante = document.querySelector('#cardEstudiante');
const cardProfesor = document.querySelector('#cardProfesor');
const templateEstudiante = document.querySelector('#templateEstudiante').content
const templateProfesor = document.querySelector('#templateProfesor').content 

const estudiantesA = []; 
const profesoresA = []; 

document.addEventListener('click', (e) => {
    // console.log(e.target.dataset.nombre);

    if(e.target.dataset.nombre) {
        // console.log(e.target.matches('.btn-success'));
        if(e.target.matches('.btn-success')) {
            estudiantesA.map((item) => {
                if(item.nombre === e.target.dataset.nombre) {
                    item.setestado = true;
                }
                console.log(item);
                return item;
            });
        };

        if(e.target.matches('.btn-danger')) {
            estudiantesA.map((item) => {
                if(item.nombre === e.target.dataset.nombre) {
                    item.setestado = false;
                }
                console.log(item);
                return item;
            })
        };

        Personas.pintarPersonaUI(estudiantesA, "Estudiante");
        
    };
})

class Personas {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    };

    static pintarPersonaUI(Personas, tipo) {
        if (tipo === "Estudiante") {
            cardEstudiante.textContent = "";
            const fragment = document.createDocumentFragment();

            Personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoEstudiante());
            });

            cardEstudiante.appendChild(fragment);
        };

        if (tipo === "Profesor") {
            cardProfesor.textContent = '';
            const fragment = document.createDocumentFragment();
            
            Personas.forEach((item) => {
                fragment.appendChild(item.agregarNuevoProfesor());
            });

            cardProfesor.appendChild(fragment);

        };
    };
};

class estudiantes extends Personas {
    #estado = false;
    #Estudiante = "Estudiante";

    set setestado(estado) {
        this.#estado = estado;
    };

    get getEstudiante() {
        return this.#Estudiante;  
    };

    agregarNuevoEstudiante () {
        const clone = templateEstudiante.cloneNode(true);
        clone.querySelector('h5 .text-primary').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.getEstudiante;
        clone.querySelector('.lead').textContent = this.edad;

        if(this.#estado) {

            clone.querySelector('.badge').className = 'badge bg-success';
            clone.querySelector('.btn-success').disabled = true;
            clone.querySelector('.btn-danger').disabled = false;

        } else {

            clone.querySelector('.badge').className = 'badge bg-danger';
            clone.querySelector('.btn-danger').disabled = true;
            clone.querySelector('.btn-success').disabled = false;

        };

        clone.querySelector('.badge').textContent = this.#estado ? 'Aprobado' : 'Reprobado';    
        
        clone.querySelector('.btn-success').dataset.nombre = this.nombre;
        clone.querySelector('.btn-danger').dataset.nombre = this.nombre;

        return clone;
    };
};

class profesores extends Personas {
    #profesor = 'profesor';
    
    agregarNuevoProfesor () {
        const clone = templateProfesor.cloneNode(true);
        clone.querySelector('h5').textContent = this.nombre;
        clone.querySelector('h6').textContent = this.#profesor;
        clone.querySelector('.lead').textContent = this.edad;

        return clone;
    };
};

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = new FormData(formulario);
    const [nombre, edad, opcion] = [...datos.values()];

    if(opcion === 'Estudiante') {
        const estudiante = new estudiantes(nombre, edad);
        estudiantesA.push(estudiante);

        Personas.pintarPersonaUI(estudiantesA, opcion);
    };

    if(opcion === 'Profesor') {
        const profesor = new profesores(nombre, edad);
        profesoresA.push(profesor);

        Personas.pintarPersonaUI(profesoresA, opcion);

    };
    
});