const vagas = [];
function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}
function NovaVaga() {
  const nome = prompt("Informe um nome para a vaga:");
  const Descriçao = prompt("Informe a descrição da vaga:");
  const DataLimite = prompt("Informe uma data limite para a vaga:");

  const confirmaçao = confirm(
    "Deseja criar uma nova vaga com essas informações ? \n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      Descriçao +
      "Data: " +
      DataLimite
  );
  if (confirmaçao) {
    const NovaVaga = {
      nome,
      Descriçao,
      DataLimite,
      candidatos: [],
    };
    vagas.push(NovaVaga);
    alert("Vaga criada");
  }
}
function ExibirVagas() {
  const indice = prompt("Informe o índice da vaga que deseja exibir");
  const vaga = vagas[indice];

  const CandidatosEmTexto = vaga.candidatos.reduce(function (
    textofinal,
    candidato
  ) {
    return textofinal + "\n - " + candidato;
  },
  "");
  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.Descriçao +
      "\nData limite: " +
      vaga.DataLimite +
      "\nQuantidade de canditados: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos: " +
      vagas.CandidatosEmTexto
  );
}
