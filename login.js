
function logar(){
    let login = document.getElementById('login')
    let labelLogin = document.getElementById('labelLogin')


    let senha = document.getElementById('senha');
    let labelSenha = document.getElementById('labelSenha')


    let listaUser = []

    let userValid = {
        nome: '',
        cpf: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(login.value == item.cpfCad && senha.value == item.passwordCad){
            userValid = {
                nome: item.nomeCad,
                cpf: item.cpfCad,
                senha: item.passwordCad
            }
        }
    })

    if(login.value == userValid.cpf && senha.value == userValid.senha ){
        alert('Login realizado com sucesso')
    } else {
        login.setAttribute('style', 'border-color: red')
        labelLogin.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.focus()

        alert('Senha ou usuário incorretos')

    }

     console.log(userValid)

}