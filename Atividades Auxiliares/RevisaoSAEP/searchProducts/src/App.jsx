import { useState, useMemo } from "react";
import Card from "./components/Card";
import "./App.css";

import { CiSearch } from "react-icons/ci";

function App() {
  const [busca, setBusca] = useState("");

  const produtos = [
    {
      id: 1,
      nome: "Maçã Fuji",
      preco: 4.99,
      categoria: "Frutas",
      descricao: "Doce e crocante.",
      imagem: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
    },
    {
      id: 2,
      nome: "Banana Nanica",
      preco: 3.49,
      categoria: "Frutas",
      descricao: "Rica em potássio.",
      imagem: "https://cdn-icons-png.flaticon.com/512/2909/2909759.png",
    },
    {
      id: 3,
      nome: "Leite Integral 1L",
      preco: 5.2,
      categoria: "Laticínios",
      descricao: "Fresco para café da manhã.",
      imagem: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      id: 4,
      nome: "Ovos 12 unidades",
      preco: 7.5,
      categoria: "Laticínios",
      descricao: "Ricos em proteínas.",
      imagem: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    },
    {
      id: 5,
      nome: "Arroz Branco 5kg",
      preco: 24.9,
      categoria: "Grãos",
      descricao: "Cozimento perfeito.",
      imagem: "https://cdn-icons-png.flaticon.com/512/290/290957.png",
    },
    {
      id: 6,
      nome: "Feijão Carioca 1kg",
      preco: 8.9,
      categoria: "Grãos",
      descricao: "Rico em ferro e fibras.",
      imagem: "https://cdn-icons-png.flaticon.com/512/4248/4248308.png",
    },
  ];

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((product) =>
      product.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
    );
  }, [busca, produtos]);

  console.log(produtosFiltrados);
  return (
    <section className="products">
      <div className="search_bar">
        <input
          type="text"
          name="busca"
          id="busca"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <CiSearch />
      </div>
      <div className="grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((product) => (
            <Card key={product.id} produto={product} />
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
    </section>
  );
}

export default App;
