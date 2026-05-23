// Executar script ao encerrar o download do HTML
window.addEventListener("DOMContentLoaded", function(e) {
    // Encontrar a tag de formulário
    const formulario = document.querySelector("form");

    // Escutar / observar o evento de ENVIAR FORMULARIO
    formulario.addEventListener("submit", function(ev){
        // Interromper o envio do formulário
        ev.preventDefault();
    });

    // Encontrar as caixas de senha
    const [txt_senha, txt_confirmar_senha] = document.querySelectorAll('input[type=password]');

    // Escutar / observar o evento de DIGITAR SENHA
    txt_senha.addEventListener("change", function () {
        verificar_senha_identica(txt_senha.value, txt_confirmar_senha.value)
    })

    // Escutar / observar o evento de DIGITAR CONFIRMAR SENHA
    txt_confirmar_senha.addEventListener("change", function () {
        verificar_senha_identica(txt_senha.value, txt_confirmar_senha.value)
    })

});

function verificar_senha_identica(senha, confirmarSenha){
    if(senha === confirmarSenha)
        document.querySelector("#reg_identica").classList.add('invisivel')
    else
        document.querySelector("#reg_identica").classList.remove('invisivel')
}