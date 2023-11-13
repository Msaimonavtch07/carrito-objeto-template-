// console.log('welcome...😎🍃');

const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

const alertSuccess = document.getElementById('alertSuccess');
const textName = document.getElementById('textName');
const textEmail = document.getElementById('textEmail');

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = 'mesaje enviado correctamente';
};

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove('d-none');
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener('submit', (e) => {
    
    e.preventDefault();
    alertSuccess.classList.add('d-none');

    const errores = [];
    
    // Devuelve true si el solo espacios...
    //console.log(!userName.value.trim());

    if (!regUserName.test(userEmail.value) || !userName.value.trim()) {
        userName.classList.add('is-invalid');
        errores.push({
            tipo: userEmail,
            msg: 'descripcion del user incorrecta, solo letras'
        })
    }else {
        userName.classList.remove('is-invalid')
        userName.classList.add('is-valid')
        textName.classList.add('d-none')
    }

    if (!regUserEmail.test(userEmail) || !userEmail.value.trim()) {
        userEmail.classList.add('is-invalid');
        errores.push({
            tipo: userEmail,
            msg: 'correo no valido...'
        })
    }else {
        userEmail.classList.remove('is-invalid')
        userEmail.classList.add('is-valid')
        textEmail.classList.add('d-none')
    }

    if(errores.length !== 0) {
        pintarMensajeError(errores);
        return
    }

    console.log('welcome, formato valido🍃');
    pintarMensajeExito()
});
