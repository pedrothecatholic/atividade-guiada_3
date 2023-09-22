function visualizardados() {
  // Obtém os valores digitados nos campos do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var dataNascimento = document.getElementById("nasc").value;
  var endereco = document.getElementById("endereco").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade").value;
  var cep = document.getElementById("cep").value;
  var celular = document.getElementById("celular").value;

  // Exibe os dados no rodapé da página
  var mostraNome = document.getElementById("mostra_nome");
  var mostraEmail = document.getElementById("mostra_email");
  var mostraNasc = document.getElementById("mostra_nasc");
  var mostraEndereco = document.getElementById("mostra_endereco");
  var mostraBairro = document.getElementById("mostra_bairro");
  var mostraCidade = document.getElementById("mostra_cidade");
  var mostraCep = document.getElementById("mostra_cep");
  var mostraCelular = document.getElementById("mostra_celular");

  mostraNome.textContent = "Nome: " + nome;
  mostraEmail.textContent = "Email: " + email;
  mostraNasc.textContent = "Data de Nascimento: " + dataNascimento;
  mostraEndereco.textContent = "Endereço Residencial: " + endereco;
  mostraBairro.textContent = "Bairro: " + bairro;
  mostraCidade.textContent = "Cidade: " + cidade;
  mostraCep.textContent = "CEP: " + cep;
  mostraCelular.textContent = "Celular: " + celular;
}
