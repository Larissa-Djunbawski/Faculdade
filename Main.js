const prompt = require("prompt-sync")();

const turno = require("./Modulos/Turno.js");
const curso = require("./Modulos/Curso.js");
const materia = require("./Modulos/Materia.js");
const aluno = require("./Modulos/Aluno.js");
const professor = require("./Modulos/Professor.js");
const sala = require("./Modulos/Sala.js");
const aula = require("./Modulos/Aula.js");
const alunoAula = require("./Modulos/alunoAula.js");

const menuPrincipal = () => {
  console.log(`
        GERENCIAMENTO EDUCACIONAL
        `);

  while (true) {
    console.log(`
                  ESCOLHA O MÓDULO QUE QUER GERENCIAR:
                  
                  1 - TURNO
                  2 - CURSO
                  3 - MATÉRIA
                  4 - ALUNO
                  5 - PROFESSOR
                  6 - SALA
                  7 - AULA
                  8 - ALUNO AULA
                  0 - SAIR
                  `);

    const opcaoModulo = parseInt(prompt(": "));

    switch (opcaoModulo) {
      case 1:
        menuTurno();
        break;

      case 2:
        menuCurso();
        break;

      case 3:
        menuMateria();
        break;

      case 4:
        menuAluno();
        break;

      case 5:
        menuProfessor();
        break;

      case 6:
        menuSala();
        break;

      case 7:
        menuAula();
        break;

      case 8:
        menuAlunoAula();
        break;

      case 0:
        process.exit();
        break;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

const menuTurno = () => {
  console.log("GERENCIAMENTO DE TURNO");
  while (true) {
    console.log(`
                1 - CADASTRAR TURNO
                2 - LISTAR TURNOS
                3 - ATUALIZAR TURNO
                4 - EXCLUIR TURNO
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        turno.store();
        break;
      case 2:
        turno.index();
        break;
      case 3:
        turno.update();
        break;
      case 4:
        turno.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

const menuCurso = () => {
  console.log("GERENCIAMENTO DE CURSO");
  while (true) {
    console.log(`
                1 - CADASTRAR CURSO
                2 - LISTAR CURSOS
                3 - ATUALIZAR CURSO
                4 - EXCLUIR CURSO
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        curso.store();
        break;
      case 2:
        curso.index();
        break;
      case 3:
        curso.update();
        break;
      case 4:
        curso.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

const menuMateria = () => {
  console.log("GERENCIAMENTO DE MATÉRIA");
  while (true) {
    console.log(`
                1 - CADASTRAR MATÉRIA
                2 - LISTAR MATÉRIAS
                3 - ATUALIZAR MATÉRIA
                4 - EXCLUIR MATÉRIA
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        materia.store();
        break;
      case 2:
        materia.index();
        break;
      case 3:
        materia.update();
        break;
      case 4:
        materia.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

const menuAluno = () => {
  console.log("GERENCIAMENTO DE ALUNO");
  while (true) {
    console.log(`
                1 - CADASTRAR ALUNO
                2 - LISTAR ALUNOS
                3 - ATUALIZAR ALUNO
                4 - EXCLUIR ALUNO
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        aluno.store();
        break;
      case 2:
        aluno.index();
        break;
      case 3:
        aluno.update();
        break;
      case 4:
        aluno.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

const menuProfessor = () => {
  console.log("GERENCIAMENTO DE PROFESSOR");
  while (true) {
    console.log(`
                1 - CADASTRAR PROFESSOR
                2 - LISTAR PROFESSORES
                3 - ATUALIZAR PROFESSOR
                4 - EXCLUIR PROFESSOR
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        professor.store();
        break;
      case 2:
        professor.index();
        break;
      case 3:
        professor.update();
        break;
      case 4:
        professor.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

const menuSala = () => {
  console.log("GERENCIAMENTO DE SALA");
  while (true) {
    console.log(`
                1 - CADASTRAR SALA
                2 - LISTAR SALAS
                3 - ATUALIZAR SALA
                4 - EXCLUIR SALA
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        sala.store();
        break;
      case 2:
        sala.index();
        break;
      case 3:
        sala.update();
        break;
      case 4:
        sala.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

const menuAula = () => {
  console.log("GERENCIAMENTO DE AULA");
  while (true) {
    console.log(`
                1 - CADASTRAR AULA
                2 - LISTAR AULAS
                3 - ATUALIZAR AULA
                4 - EXCLUIR AULA
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        aula.store();
        break;
      case 2:
        aula.index();
        break;
      case 3:
        aula.update();
        break;
      case 4:
        aula.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

const menuAlunoAula = () => {
  console.log("GERENCIAMENTO DE ALUNO AULA");
  while (true) {
    console.log(`
                1 - CADASTRAR ALUNO AULA
                2 - LISTAR ALUNO AULA
                3 - ATUALIZAR ALUNO AULA
                4 - EXCLUIR ALUNO AULA
                0 - SAIR
                `);

    const opcaoServico = parseInt(prompt(": "));

    switch (opcaoServico) {
      case 1:
        alunoAula.store();
        break;
      case 2:
        alunoAula.index();
        break;
      case 3:
        alunoAula.update();
        break;
      case 4:
        alunoAula.destroy();
        break;

      case 0:
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
};

menuPrincipal();
