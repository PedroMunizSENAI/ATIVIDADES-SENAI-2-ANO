import api from "../api/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/auth/profile");
        setUser(res.data.user);
      } catch (error) {
        alert("Erro ao carregar perfil!");
        navigate("/login");
      }
    }

    fetchUser();
  }, []);

  async function handleDelete() {
    if (window.confirm("Tem certeza que deseja deletar sua conta?")) {
      await api.delete("/auth/delete");
      localStorage.removeItem("token");
      navigate("/register");
    }
  }

  return (
    <div>
      <h2>Perfil</h2>
      {user ? (
        <>
          <p>
            <strong>Nome:</strong> {user.nome}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <button onClick={() => navigate("/editProfile")}>
            Editar Perfil
          </button>
          <button onClick={handleDelete}>Excluir Perfil</button>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
