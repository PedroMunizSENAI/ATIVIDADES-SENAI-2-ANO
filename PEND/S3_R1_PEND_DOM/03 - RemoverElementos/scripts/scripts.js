const lista = document.getElementById("lista");
const itemParaRemover = document.getElementsByClassName("itemParaRemover");
const itemRemove = document.getElementById("itemRemove");

lista.removeChild(itemParaRemover[0]);
itemRemove.remove();
