// console.log('my pagina funtion...'); 

const alert = document.querySelector('.alert');
const formulario = document.querySelector('#formulario');
const pintarTodoHTML = document.querySelector('#pintarTodo');
const templateTodo = document.querySelector('#templateTodo').content 

let todos = []

const agregarTodo = todo => {
    const objetoTOdo = {
        nombre: todo,
        id: `${Date.now()}`
    };

    todos.push(objetoTOdo);
};

const pintarTodo = () => {

    localStorage.setItem('todos', JSON.stringify(todos));

    pintarTodoHTML.textContent = "";

    const fragment = document.createDocumentFragment()

    todos.forEach(item => {
        const clone = templateTodo.cloneNode(true);
        clone.querySelector('.lead').textContent = item.nombre;

        clone.querySelector('.btn').dataset.id = item.id;

        fragment.appendChild(clone);
    });

    pintarTodoHTML.appendChild(fragment);
};

document.addEventListener('click', (e) => {

    // console.log(e.target.dataset.id);
    // console.log(e.target.matches('.btn-danger'));

    if(e.target.matches('.btn-danger')) {
       // console.log('le diste click al boton eliminar');

       todos = todos.filter(item => item.id !== e.target.dataset.id);

       pintarTodo()
    };

});

formulario.addEventListener('submit', e => {
    e.preventDefault();
    alert.classList.add('d-none');

    const data = new FormData(formulario);
    const [todo] = [...data.values()];
    
    if(!todo.trim()) {
        console.log('te equivocaste, espacio en blanco');
        alert.classList.remove('d-none');
    };

    agregarTodo(todo);
    pintarTodo();
});

document.addEventListener('DOMContentLoaded', (e) => {

    if(localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));

        pintarTodo();
    };

});
