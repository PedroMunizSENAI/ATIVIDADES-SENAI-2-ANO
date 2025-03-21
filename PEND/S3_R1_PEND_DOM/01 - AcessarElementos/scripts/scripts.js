const titulo = document.getElementById("titulo");
const inputNome = document.getElementById("nome");
const paragrafos = document.getElementsByClassName("paragrafo");
const itens = document.getElementsByClassName("item");
const itensP = document.getElementsByTagName("p");
const cards = document.querySelector(".card");

function getEmail() {
  const email = document.getElementById("email");

  console.log(email.value);
}

console.log(titulo.textContent);
console.log(inputNome.value);
console.log(paragrafos[0].textContent);
console.log(paragrafos[1].textContent);
console.log((itens[0].textContent = "Item 1 Modificado!"));
console.log(itens[1].textContent);
console.log(itensP);
console.log(cards);
