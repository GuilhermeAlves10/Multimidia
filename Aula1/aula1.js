document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('dadosForm').addEventListener('submit', function(event) {
        event.preventDefault();
        mostrarDados();
    });
});

function mostrarDados() {
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("data_nascimento").value;
    var email = document.getElementById("email").value;
    var resultado = "Nome: " + nome + "<br>Data de Nascimento: " + dataNascimento + "<br>Email: " + email;
    document.getElementById("resultado").innerHTML = resultado;
}
