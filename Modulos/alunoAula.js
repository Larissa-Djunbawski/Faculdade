const prompt = require("prompt-sync")();

const aluno = require("./aluno.js");
const aula = require("./aula.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  let id_aluno = 0;
  if (aluno.index()) {
    id_aluno = parseInt(prompt("ID do aluno: "));
  } else {
    console.log("Cadastre um aluno para associar à aula.");
  }

  let id_aula = 0;
  if (aula.index()) {
    id_aula = parseInt(prompt("ID da aula: "));
  } else {
    console.log("Cadastre uma aula para associar ao aluno.");
  }

  if (aluno.show(id_aluno) && aula.show(id_aula)) {
    return {
      id,
      id_aluno,
      id_aula,
    };
  }

  console.log("Dados inválidos");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push(novo);
    console.log("Registro concluído com sucesso!");
  }
};

const index = () => {
  if (db.length === 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
};

const show = (id) => db.find((el) => el.id === id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id === id);

    if (indice !== -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado");
    }
  }
};

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id === id);

    if (indice !== -1) {
      db.splice(indice, 1);
      console.log("Registro excluído com sucesso");
    } else {
      console.log("Registro não encontrado");
    }
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
