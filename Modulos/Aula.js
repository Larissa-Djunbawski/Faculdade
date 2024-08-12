const prompt = require("prompt-sync")();

const professor = require("./professor.js");
const materia = require("./materia.js");
const sala = require("./sala.js");

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  let id_professor = 0;
  if (professor.index()) {
    id_professor = parseInt(prompt("ID do professor: "));
  } else {
    console.log("Cadastre um professor para criar uma aula.");
  }

  let id_materia = 0;
  if (materia.index()) {
    id_materia = parseInt(prompt("ID da matéria: "));
  } else {
    console.log("Cadastre uma matéria para criar uma aula.");
  }

  let id_sala = 0;
  if (sala.index()) {
    id_sala = parseInt(prompt("ID da sala: "));
  } else {
    console.log("Cadastre uma sala para criar uma aula.");
  }

  if (professor.show(id_professor) && materia.show(id_materia) && sala.show(id_sala)) {
    return {
      id,
      id_professor,
      id_materia,
      id_sala,
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
