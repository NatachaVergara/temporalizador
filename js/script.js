
const timerH = document.querySelector('.clock');
const btnSubmit = document.querySelector('.submit')
const btErased = document.querySelector('.erased')

//Comienzo el contador al hacer click
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    let timer = Number(document.querySelector('#timer').value);
    let runTimer = timer + 1
    btnSubmit.classList.add('displayNone')
    //Funcion que alerta al usuario que no ingreso ningun valor
    noValue(runTimer)
    /**Funcion cuenta regresiva */
    countDown(runTimer)
});

//Borro el contador y hago reload a la pagina
btErased.addEventListener('click', () => {
    location.reload();
});

//Funcion que permite alerta al usuario que no ingreso un valor
const noValue = (runTimer) => {
    if (!runTimer) {
        alert('No ha ingresado ningún valor')
        location.reload();
    }
};
//Funcion que lee el valor que ingreso el usuario y lo muestra en pantalla y en el title
function displayTime(time) {
    let minuto = time
    timerH.innerHTML = ` ${minuto}`
    document.title = timerH.innerHTML
};


const countDown = (runTimer) => {
    setInterval(() => {
        runTimer--
        //Muestro el contador en el title de mi documento
        displayTime(runTimer)
        //Funcion que avisa que el contador termino y recarga el sitio
        finContador(runTimer)

    }, 1000)
}


//Funcion que avisa que el contador termino y recarga el sitio
const finContador = (runTimer) => {
    if (runTimer <= 10) {
        timerH.classList.add('finContador')
        timerH.classList.add('heartbeat')
        document.title = timerH.innerHTML
    }

    if (runTimer <= 0 || runTimer < 1) {
        timerH.innerHTML = `TIME OUT`
        document.title = timerH.innerHTML
        clearInterval(countDown)
        setTimeout(() => {
            location.reload();
        }, 3000);

    }
}

