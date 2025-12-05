import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Estoque.module.css";
import Header from "../components/Header";

export default function Estoque() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const [produtos, setProdutos] = useState([]);
  const [idProduto, setIdProduto] = useState("");
  const [tipo, setTipo] = useState("ENTRADA");
  const [quantidade, setQuantidade] = useState("");
  const [dataMovimentacao, setDataMovimentacao] = useState("");
  const produtoSelecionado = produtos.find((p) => p.id_produto == idProduto);

  //   console.log(produtoSelecionado);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    const res = await axios.get("http://localhost:8000/produtos");

    setProdutos(res.data);
  }

  async function registrarMovimentação(e) {
    e.preventDefault();

    const res = await axios.post(
      `http://localhost:8000/movimentacao/${usuario.id_usuario}`,
      {
        id_produto: idProduto,
        tipo,
        quantidade: parseInt(quantidade),
        data_movimentacao: dataMovimentacao,
      }
    );

    if (res.data.abaixoQuantidadeMinima) {
      alert(
        `Produto ${res.data.produto[0].nome} com estoque abaixo da quantidade`
      );
    }

    setQuantidade("");
    setDataMovimentacao("");
    buscarProdutos();
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Movimentação do Estoque</h1>

        <form onSubmit={registrarMovimentação}>
          <label>Produto</label>
          <select
            value={idProduto}
            onChange={(e) => setIdProduto(e.target.value)}
            required
          >
            <option value="">Selecione um produto</option>
            {produtos.map((p) => (
              <option key={p.id_produto} value={p.id_produto}>
                {p.nome}
              </option>
            ))}
          </select>

          {produtoSelecionado && (
            <p>
              <strong>Quantidade atual:</strong>
              {produtoSelecionado.quantidade_atual}
            </p>
          )}

          <label>Tipo: </label>
          <label>
            <input
              type="radio"
              value="ENTRADA"
              checked={tipo === "ENTRADA"}
              onChange={(e) => setTipo(e.target.value)}
            />
            Entrada
          </label>

          <label>
            <input
              type="radio"
              value="SAIDA"
              checked={tipo === "SAIDA"}
              onChange={(e) => setTipo(e.target.value)}
            />
            Saida
          </label>

          <label>Quantidade:</label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            max={
              tipo === "SAIDA"
                ? produtoSelecionado?.quantidade_atual
                : undefined
            }
          />

          <label>Data de Movimentação:</label>
          <input
            type="date"
            value={dataMovimentacao}
            onChange={(e) => setDataMovimentacao(e.target.value)}
          />

          <button type="submit">Registrar Movimentação</button>
        </form>
      </div>
    </>
  );
}
