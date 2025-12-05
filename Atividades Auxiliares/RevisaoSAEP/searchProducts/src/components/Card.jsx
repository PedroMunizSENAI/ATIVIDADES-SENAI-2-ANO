import { CiSearch, CiTrash } from "react-icons/ci";
import { LuPencil } from "react-icons/lu";

export default function Card({ produto }) {
  return (
    <div className="card">
      <div className="buttons">
        <button className="delete">
          <CiTrash />
        </button>
        <button className="edit">
          <LuPencil />
        </button>
      </div>

      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p className="descricao">{produto.descricao}</p>
      <p className="preco">{produto.preco.toFixed(2)}</p>
    </div>
  );
}
