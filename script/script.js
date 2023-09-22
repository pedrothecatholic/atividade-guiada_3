function visualizardados() {
  // Obtém os valores digitados nos campos do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var dataNascimento = document.getElementById("nasc").value;

  // Exibe os dados no rodapé da página
  var mostraNome = document.getElementById("mostra_nome");
  var mostraEmail = document.getElementById("mostra_email");
  var mostraNasc = document.getElementById("mostra_nasc");

  mostraNome.textContent = "Nome: " + nome;
  mostraEmail.textContent = "Email: " + email;
  mostraNasc.textContent = "Data de Nascimento: " + dataNascimento;
}
