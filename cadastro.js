let nome = document.getElementById('nome');
let labelNome = document.getElementById('labelName');
let validNome = false

let lastname = document.getElementById('lastname');
let labelLastname = document.getElementById('labelLastname');
let validLastname = false


let cpf = document.getElementById('cpf');
let labelCpf = document.getElementById('labelCpf');
let validCpf = false


let email = document.getElementById('email')
let labelEmail = document.getElementById('labelEmail')
let validEmail = false


let password = document.getElementById('password')
let labelPassword = document.getElementById('labelPassword')
let validPassword= false


let confirmPassword = document.getElementById('confirmPassword')
let labelConfirmPassword = document.getElementById('labelConfirmPassword')
let validConfirmPassword = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')





nome.addEventListener('keyup', ()=> {

    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Insira no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
        
    }

})

lastname.addEventListener('keyup', ()=> {

    if(lastname.value.length <= 2){
        labelLastname.setAttribute('style', 'color: red')
        labelLastname.innerHTML = 'Insira no mínimo 3 caracteres'
        lastname.setAttribute('style', 'border-color: red')
        validLastname = false
    } else {
        labelLastname.setAttribute('style', 'color: green')
        labelLastname.innerHTML = 'Sobrenome'
        lastname.setAttribute('style', 'border-color: green')
        validLastname = true
    }

})

cpf.addEventListener('keyup', ()=> {

    if(cpf.value.length <= 10 ||  cpf.value.length  >= 12){
        labelCpf.setAttribute('style', 'color: red')
        labelCpf.innerHTML = 'CPF inválido'
        cpf.setAttribute('style', 'border-color: red')
        validCpf = false
    } else {
        labelCpf.setAttribute('style', 'color: green')
        labelCpf.innerHTML = 'CPF'
        cpf.setAttribute('style', 'border-color: green')
        validCpf = true
    }

})


password.addEventListener('keyup', ()=> {

    if(password.value.length <= 5){
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Insira no mínimo 6 caracteres'
        password.setAttribute('style', 'border-color: red')
        validPassword= false
    } else {
        labelPassword.setAttribute('style', 'color: green')
        labelPassword.innerHTML = 'Senha'
        password.setAttribute('style', 'border-color: green')
        validPassword= true
    }
})

confirmPassword.addEventListener('keyup', ()=> {

    if(confirmPassword.value != password.value) {
        labelConfirmPassword.setAttribute('style', 'color: red')
        labelConfirmPassword.innerHTML = 'As senhas não conferem'
        confirmPassword.setAttribute('style', 'border-color: red')
        validConfirmPassword = false
    } else {
        labelConfirmPassword.setAttribute('style', 'color: green')
        labelConfirmPassword.innerHTML = 'Confirmar senha'
        confirmPassword.setAttribute('style', 'border-color: green')
        validConfirmPassword = true
    }
})


function cadastrar(){

    if(validNome && validLastname && validCpf && validPassword && validConfirmPassword) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                lastnameCad: lastname.value,
                cpfCad: cpf.value,
                emailCad: email.value,
                passwordCad:password.value,

            }
        )
        

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        alert('Cadastro realizado com sucesso')

        setTimeout(()=> {
            window.location.href = 'http://127.0.0.1:5500/login.html?'
        }, 3000)

        
    } else {
        alert('Preencha todos os campos...')
    }
}