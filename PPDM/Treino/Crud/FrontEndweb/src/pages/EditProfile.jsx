import api from "../api/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/auth/profile");
        setNome(res.data.user.nome);
        setEmail(res.data.user.email);
      } catch (error) {
        alert("Erro ao carregar perfil!");
        navigate("/login");
      }
    }

    fetchUser();
  }, []);

  async function handleUpdate(e) {
    e.preventDefault();

    try {
      const res = await api.put("/auth/update", { email, nome });
      alert("Dados atualizados");
      navigate("/profile");
    } catch (error) {
      alert("Erro ao atualizar dados:", error);
    }
  }

  return (
    <div>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleUpdate}>
        <input
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
