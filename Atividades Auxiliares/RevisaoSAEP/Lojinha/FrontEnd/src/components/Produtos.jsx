import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Produto() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    valor: "",
    peso: "",
    validade: "",
    quantidade_minima: "",
    quantidade_atual: "",
  });

  //   console.log(id);

  useEffect(() => {
    if (id) {
      buscarProduto();
    }
  }, [id]);

  async function buscarProduto() {
    try {
      const res = await axios.get(`http://localhost:8000/produto/${id}`);
      const produto = res.data;

      const data = new Date(produto.validade);
      const dia = data.getDate().toString().padStart(2, "0");
      const mes = (data.getMonth() + 1).toString().padStart(2, "0");
      const ano = data.getFullYear();
      const dataFormatada = `${ano}-${mes}-${dia}`;

      setProduto({
        nome: produto.nome,
        descricao: produto.descricao,
        categoria: produto.categoria,
        valor: produto.valor,
        peso: produto.peso,
        validade: dataFormatada,
        quantidade_minima: produto.quantidade_minima,
        quantidade_atual: produto.quantidade_atual,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function salvarProduto(e) {
    e.preventDefault();

    try {
      if (id) {
        await axios.put(`http://localhost:8000/produto/${id}`, produto);
      } else {
        await axios.post(`http://localhost:8000/produto`, produto);
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao salvar ", error);
    }
  }

  return (
    <div>
      <h1>Produto</h1>
      <form onSubmit={salvarProduto}>
        <label>Nome:</label>
        <input
          type="text"
          value={produto.nome}
          onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
          required
        />

        <label>Descricao:</label>
        <input
          value={produto.descricao}
          onChange={(e) =>
            setProduto({ ...produto, descricao: e.target.value })
          }
          required
        />

        <label>Categoria:</label>
        <input
          type="text"
          value={produto.categoria}
          onChange={(e) =>
            setProduto({ ...produto, categoria: e.target.value })
          }
          required
        />

        <label>Valor:</label>
        <input
          type="number"
          value={produto.valor}
          onChange={(e) => setProduto({ ...produto, valor: e.target.value })}
          required
        />

        <label>Peso:</label>
        <input
          type="number"
          value={produto.peso}
          onChange={(e) => setProduto({ ...produto, peso: e.target.value })}
          required
        />

        <label>Validade:</label>
        <input
          type="date"
          value={produto.validade}
          onChange={(e) => setProduto({ ...produto, validade: e.target.value })}
          required
        />

        <label>Quantidade Minima:</label>
        <input
          type="number"
          min="0"
          value={produto.quantidade_minima}
          onChange={(e) =>
            setProduto({ ...produto, quantidade_minima: e.target.value })
          }
          required
        />

        <label>Quantidade Atual:</label>
        <input
          type="number"
          min="0"
          value={produto.quantidade_atual}
          onChange={(e) =>
            setProduto({ ...produto, quantidade_atual: e.target.value })
          }
          required
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
