import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Dashboard() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await axios.get("http://localhost:8000/produtos");

    if (res.data) {
      const formatarData = res.data.map((produto) => {
        const data = new Date(produto.validade);
        const dia = data.getDate().toString().padStart(2, "0");
        const mes = (data.getMonth() + 1).toString().padStart(2, "0");
        const ano = data.getFullYear();
        const dataFormatada = `${dia}-${mes}-${ano}`;

        return {
          ...produto,
          validade: dataFormatada,
        };
      });

      console.log(formatarData);
      setProdutos(formatarData);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/");
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`http://localhost:8000/produto/${id}`);
      await fetchProducts();
    } catch (error) {
      console.error("Erro ao excluir produtos ", error);
    }
  }

  const pesquisa = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLocaleLowerCase())
  );

  console.log("Resultado da pesquisa: ", pesquisa);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Olá {usuario.nome}</h1>
        <h2>Dashboard</h2>

        <button onClick={() => navigate("/produto/novo")}>Novo Produto</button>
        <button onClick={handleLogout}>Logout</button>

        <input
          type="text"
          placeholder="Pesquise aqui"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descricao</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th>PEso</th>
              <th>Validade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pesquisa.map((p) => (
              <tr key={p.id_produto}>
                <td>{p.nome}</td>
                <td>{p.descricao}</td>
                <td>{p.categoria}</td>
                <td>{p.valor}</td>
                <td>{p.peso}</td>
                <td>{p.validade}</td>
                <td>
                  <button onClick={() => navigate(`/produto/${p.id_produto}`)}>
                    Editar
                  </button>
                  <button onClick={() => deleteProduct(p.id_produto)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
