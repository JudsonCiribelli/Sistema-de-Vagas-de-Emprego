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
function InscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato(a): ");
  const indice = prompt(
    "Informe o indice da vaga para qual o candidato deseja se inscrever: "
  );
  const vagas = vagas[indice];
  const confirmaçao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      "na vaga " +
      indice +
      " \n?" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.Descriçao +
      "\nData limite: " +
      vaga.DataLimite
  );
  if (confirmaçao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}
function ExcluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir");
  const vagas = vagas[indice];
  const confirmaçao = confirm(
    "Deseja exluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.Descriçao +
      "\nData limite: " +
      vaga.DataLimite
  );
  if (confirmaçao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída");
  }
}
function ExibirMenu() {
  const opçao =
    "Cadastro de vaga de empregos" +
    "\n\nEscolha uma das opções abaixo" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair";
  return opçao;
}
