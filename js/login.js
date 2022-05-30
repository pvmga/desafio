const btn = document.querySelector("#enviarDados");

btn.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    let usuario = document.querySelector('#usuario').value;
    let senha = document.querySelector('#senha').value;

    
    let permUserEntrar = validaUser(usuario, senha);

    if (permUserEntrar) {
        alert('Efetuando login...');
        window.location.href = 'page.html';
    } else {
        alert('Você não tem permissão para acessar a aplicação. Sugestão (Login: sistema | senha: 123)');
    }

});

function validaUser(usuario, senha) {
    let Pessoa = [
        {
            user: 'sistema',
            pass: '123'
        },
        {
            user: 'sistema2',
            pass: '1234'
        }
    ]

    for (var i = 0; i< Pessoa.length; i++) {
        if (usuario == Pessoa[i].user && senha == Pessoa[i].pass) {
            return true;
        } else {
            return false;
        }
    }
        
}