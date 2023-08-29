const camposFormulario = document.querySelectorAll('.campo')
const botaoEnviar = document.querySelector('.btn-enviar')

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    camposFormulario.forEach((input) => {
        if (input.value){
            input.classList.add('respondido')
            input.nextElementSibling.classList.remove('mostrar')
        } else {
            input.classList.remove('respondido')
            input.classList.add('nao-respondido')
            input.nextElementSibling.classList.add('mostrar')
        }
    })
})