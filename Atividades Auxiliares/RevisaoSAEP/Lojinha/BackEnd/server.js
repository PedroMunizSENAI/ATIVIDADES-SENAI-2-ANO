const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise");
const jwt = require("jsonwebtoken");
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [
      email,
    ]);

    if (rows.length === 0) {
      res.status(400).json({ error: "E-mail não encontrado!" });
    }

    const usuario = rows[0];

    if (password !== usuario.senha) {
      res.status(401).json({ error: "Senha incorreta" });
    }

    const token = jwt.sign(
      { id_usuario: usuario.id_usuario, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login realizado com sucesso",
      token,
      usuario: { id_usuario: usuario.id_usuario, nome: usuario.nome },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json;
  }
});

app.get("/produtos", async (req, res) => {
  try {
    const [rows] = await pool.query(`
            SELECT
                p.id_produto,
                p.nome,
                p.descricao,
                p.categoria,
                p.valor,
                p.peso,
                p.validade,
                e.quantidade_minima,
                e.quantidade_atual
            FROM produtos p
            LEFT JOIN estoque e ON e.id_produto = p.id_produto
            `);

    res.json(rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/produto/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query(
      `
      SELECT
          p.id_produto,
          p.nome,
          p.descricao,
          p.categoria,
          p.valor,
          p.peso,
          p.validade,
          e.quantidade_minima,
          e.quantidade_atual
      FROM produtos p
      LEFT JOIN estoque e ON e.id_produto = p.id_produto
      WHERE p.id_produto = ?
      `,
      [id]
    );

    if (rows.length === 0) {
      return res.status(400).json({ error: "Produto não encontrado!" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produto para edição" });
  }
});

app.put("/produto/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nome,
      descricao,
      categoria,
      valor,
      peso,
      validade,
      quantidade_minima,
      quantidade_atual,
    } = req.body;

    await pool.query(
      "UPDATE produtos SET nome=?, descricao=?, categoria=?, valor=?, peso=?, validade=? WHERE id_produto=?",
      [nome, descricao, categoria, valor, peso, validade, id]
    );
    await pool.query(
      "UPDATE estoque SET quantidade_minima=?, quantidade_atual=? WHERE id_produto=?",
      [quantidade_minima, quantidade_atual, id]
    );

    res.json({ message: "Produto e estoque atualizado com sucesso" });
  } catch (error) {}
});

app.post("/produto", async (req, res) => {
  try {
    const {
      nome,
      descricao,
      categoria,
      valor,
      peso,
      validade,
      quantidade_minima,
      quantidade_atual,
    } = req.body;

    if (!nome || !valor) {
      return res
        .status(400)
        .json({ error: "Todos os campos precisam ser preenchidos" });
    }

    const [result] = await pool.query(
      "INSERT INTO produtos (nome, descricao, categoria, valor, peso, validade) VALUES (?, ?, ?, ?, ?, ?)",
      [nome, descricao, categoria, valor, peso, validade]
    );

    const id_produto = result.insertId;

    await pool.query(
      "INSERT INTO estoque (id_produto, quantidade_minima, quantidade_atual) VALUES (?, ?, ?)",
      [id_produto, quantidade_minima, quantidade_atual]
    );

    res.json({ message: "Produto e estoque atualizado com sucesso" });
  } catch (error) {}
});

app.delete("/produto/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      "DELETE FROM produtos WHERE id_produto = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Produto não encontrado!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir produto!" });
  }
});

app.post("/movimentacao/:id_usuario", async (req, res) => {
  try {
    const { id_produto, tipo, quantidade, data_movimentacao } = req.body;
    const { id_usuario } = req.params;

    if (!id_produto || !id_usuario || !tipo || !quantidade) {
      return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    const [estoqueRows] = await pool.query(
      "SELECT quantidade_atual, quantidade_minima FROM estoque WHERE id_produto = ?",
      [id_produto]
    );

    const estoqueAtual = estoqueRows[0].quantidade_atual;
    const quantMinima = estoqueRows[0].quantidade_minima;
    let novaQuant = estoqueAtual;

    if (tipo === "ENTRADA") {
      novaQuant += quantidade;
    } else {
      if (quantidade > estoqueAtual) {
        return res.status(400).json({ error: "Quantidade insuficiente!" });
      }

      novaQuant -= quantidade;
    }

    await pool.query(
      "UPDATE estoque SET quantidade_atual = ? WHERE id_produto = ?",
      [novaQuant, id_produto]
    );

    await pool.query(
      "INSERT INTO movimentacao_estoque (id_produto, id_usuario, tipo, quantidade, data_movimentacao) VALUES (?, ?, ?, ?, ?)",
      [id_produto, id_usuario, tipo, quantidade, data_movimentacao]
    );

    const [produto] = await pool.query(
      "SELECT nome FROM produtos WHERE id_produto = ?",
      [id_produto]
    );

    const abaixoQuantidadeMinima = novaQuant < quantMinima;

    res.json({
      message: `Movimentação de ${tipo} registrada com sucesso`,
      novaQuant,
      abaixoQuantidadeMinima,
      quantMinima,
      produto,
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
