console.log("JAVA SCRIPT CONECTADO");

class Funcionario {
  constructor(nome, salario, dataAdmissao, bonus) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }

  calcularBonus() {
    return this.salario * 0.1;
  }

  exibirDetalhes() {
    console.log(
      `Funcionario: ${this.nome}; Salário: R$${
        this.salario
      }; Data de admissão: ${this.dataAdmissao}; Bônus: ${this.calcularBonus()}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, bonus, dataAdmissao, departamento) {
    super(nome, salario, bonus, dataAdmissao);
    this.departamento = departamento;
  }

  calcularBonusGerente() {
    return this.salario * 0.2;
  }

  exibirDetalhesGerente() {
    console.log(
      `Gerente: ${this.nome}; Setor: ${this.departamento} Salário: R$${
        this.salario
      }; Data de admissão: ${
        this.dataAdmissao
      }; Bônus: ${this.calcularBonusGerente()}`
    );
  }
}

const funcionario = new Funcionario("Pedro", 1000, "01/01/1900");
const gerente = new Gerente("Victor", 1000, "02/02/2000");
funcionario.exibirDetalhes();
gerente.exibirDetalhesGerente();
