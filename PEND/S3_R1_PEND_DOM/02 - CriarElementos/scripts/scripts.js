const paragrafos = document.createElement("p");
const item1 = document.createElement("li");
const item3 = document.createElement("li");
const item5 = document.createElement("li");
const lista = document.getElementsByTagName("ul");

paragrafos.textContent = "Meu primeiro parágrafo java script";
paragrafos.style.color = "red";
paragrafos.style.fontSize = "20px";
console.log(paragrafos);

item1.textContent = "item 1";
item3.textContent = "item 3";
item5.textContent = "item 5";

// Vai para o final do body
document.body.appendChild(paragrafos);

lista[0].prepend(item1);
lista[0].insertBefore(item3, lista[0].children[2]);
lista[0].appendChild(item5);
