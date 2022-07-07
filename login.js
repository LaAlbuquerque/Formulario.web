var login = document.querySelector('#login')
var senha = document.querySelector('#senha')
var botao = document.querySelector('#botao')
var msg = document.querySelector('#msg')
var cadastro = document.querySelector('#cadastro')

botao.addEventListener('click', e => {
    console.log('login: ', login.value)
    console.log('senha: ', senha.value)
    

    if (login.value == "lari2000@gmail.com" && senha.value == "mauiapronta") {
        window.location.href = "https://outlook.live.com/mail/0/"
    } else {
        msg.innerHTML = " Login ou senha inválida"
    }
})

cadastro.addEventListener('click', e => {
    window.location.href = "./cadastro.html"
})
