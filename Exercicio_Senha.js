alert("Welcome to my Password Site");
let nome = prompt("Digite seu nome");
console.log(nome);

let idadePermitida = 17;
console.log(idadePermitida);

let idade;

while (true) {
  idade = prompt(`Maravilhoso ${nome}, agora por favor digite sua idade para que possamos dar continuidade`);
  
  if (idade < idadePermitida) {
    alert("Não pode passar");
  } else {
    alert("Sua idade é compatível");
    break; // sai do loop quando a idade for maior ou igual a idadePermitida
  }
}
