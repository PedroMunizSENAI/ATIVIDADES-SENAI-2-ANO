//EXPRESS -> Framework que facilita a criação de rotas lidando com requisições e respostas
const express = require("express");

//CORS -> Permite que nosso back-end aceite requisições vinda de outras origens (React Native, React)
const cors = require("cors");

//DOTENV -> Gerencia as váriaveis de ambiente em um arquivo ".env", desta maneira não dixamos senhas e configs expostas no código
const dotenv = require("dotenv");

//MYSQL2 -> Biblioteca para conectarmos o Node ao banco MYSQL
const mysql = require("mysql2/promise");

//BCRYPT -> Utilizado para criptografar as senhas
const bcrypt = require("bcrypt");

//JSONWEBTOKEN -> Gerar tokens de validação quando o usuário loga envia um JWT ao usuário, que será usado para acessar rotas protegidas
const jwt = require("jsonwebtoken");

const PORT = 3001;
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

//Conexão com o banco MYSQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//Middleware
function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ error: "Token inválido!" });
    }

    req.user = user;
    next();
  });
}

//Rota: REGISTRO
app.post("/auth/register", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [
      email,
    ]);

    console.log(rows);

    if (rows.length > 0) {
      return res.status(400).json({ error: "Email já cadastrado!" });
    }

    const senha_hash = await bcrypt.hash(senha, 10);

    await pool.query(
      "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, senha_hash]
    );

    res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao registrar usuário!" });
  }
});

//Rota: LOGIN
app.post("/auth/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length === 0) {
      return res.status(400).json({ error: "Usuário não encontrado!" });
    }

    const usuario = rows[0];

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login bem sucedido!", token });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Erro ao fazer login!" });
  }
});

//Rota: PERFIL
app.get("/auth/profile", autenticarToken, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT nome, email FROM users WHERE id = ?",
      [req.user.id]
    );

    // console.log(rows.length);
    if (rows.length === 0) {
      return res.status(500).json({ error: "Dados não encontrado!" });
    }

    res.json({ user: rows[0] });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Erro ao retornar o nome!" });
  }
});

app.put("/auth/update", autenticarToken, async (req, res) => {
  try {
    const { nome, email } = req.body;

    if (!nome && !email) {
      return res
        .status(400)
        .json({ error: "Informe nome ou email para continuar" });
    }

    const [rows] = await pool.query(
      "UPDATE users SET nome = ?, email = ? WHERE id = ?",
      [nome, email, req.user.id]
    );

    res.json({ message: "Dados atualizados com sucesso!" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "Erro ao retornar o nome!" });
  }
});

app.delete("/auth/delete", autenticarToken, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT nome, email FROM users WHERE id = ?",
      [req.user.id]
    );

    // console.log(rows.length);
    if (rows.length === 0) {
      return res.status(500).json({ error: "Dados não encontrado!" });
    }

    await pool.query("DELETE FROM users WHERE id = ?", [req.user.id]);

    res.json({ message: "Dados excluidos com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao deletar" });
  }
});

async function conexaoBd() {
  try {
    const conn = await pool.getConnection();
    console.log("Conexão com MYSQL bem sucedido!");
    conn.release();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

//Iniciando servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});
