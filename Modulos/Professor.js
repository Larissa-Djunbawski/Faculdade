const prompt = require("prompt-sync")()

const db = []

let proxId = 1

const model = (id = proxId++) =>  {
 const nome = prompt("Nome")

 if(nome != "") {
  return{
    id,
    nome,
  }
 }
 console.log("Dados inválidos")
}

const store = () => {
    const novo = model()

    if(novo) {
        db.push(novo)
        console.log("Registro concluido com sucesso")
    }
}

const index = () => {
    if(db.length == 0){
        console.log("Nenhum registro encontrado")
        return false
    }
    db.forEach((el) => console.log(el))
    return true
}

const show = (id) => db.find((el.id))