const botao = document.createElement("a");

botao.textContent = "Click Me!";
document.body.prepend(botao);
botao.setAttribute("onclick", "saudacao()");
botao.classList.add("btn");

console.log(botao);

if (
  botao.classList.contains("btn") ||
  botao.getAttribute("onclick") === "saudacao()"
) {
  botao.style.textDecoration = "none";
  botao.style.padding = "10px 20px";
  botao.style.fontSize = "24px";
  botao.style.fontWeight = "bold";
  botao.style.textAlign = "center";
  botao.style.color = "white";
  botao.style.backgroundColor = "#ff5252";
  botao.style.border = "2px solid black";
  botao.style.borderRadius = "10px";
  botao.style.cursor = "pointer";
  botao.style.boxShadow = "5px 5px #000 ";
  botao.style.transition = "all 0.3s ease";
}
