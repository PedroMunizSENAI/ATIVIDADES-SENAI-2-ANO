const link = document.getElementById("linkGoogle");
link.setAttribute("href", "https://www.google.com/");
link.setAttribute("target", "_blank");

console.log(link.getAttribute("href"));

link.removeAttribute("target");
