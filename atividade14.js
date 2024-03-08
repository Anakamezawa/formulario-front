
class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade= idade;
        this.cargo= cargo;

        console.log(this.nome.length)
        console.log(this.idade)
        console.log(this.cargo)
        
        if (this.nome === null || this.nome.length === 0) {
            throw new Error('Nome invalido')
        }

        if (this.idade === null || this.idade.length === 0) {
            throw new Error('idade invalida')
        }

        if(this.cargo === null || this.cargo.length === 0) {
            throw new Error('cargo invalido')
        }
    }


    get seApresentar(){
        var apresentacao = "olá o meu nome é "+ this.nome + " tenho "+  this.idade+" anos e meu cargo é "+ this.cargo
        
        var seApresentar = document.getElementById('seApresentar');

        seApresentar.innerText = apresentacao;
    }

    trabalhar(){
       var trabalho ="Status ativo"
       var trabalhando= document.getElementById('trabalhando');

       trabalhando.innerText= trabalho;
    }
}

class Gerente extends Funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome,idade,cargo);
        this.departamento= departamento;
        if (this.departamento=== null || this.departamento.length === 0){
            throw new Error('Departamento invalido')
        }
        
    }

    get gerenciar(){
        var gerente= "gerenciando o departamento"+ this.departamento;
        var atividade=document.getElementById('atividade')
        
        atividade.innerText= gerente;
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo);
        this.linguagem= linguagem;
        if(this.linguagem=== null || this.linguagem.length === 0){
            throw new Error('linguagem invalida')
        }
    }

    get programar(){
        var programador= "programando em: "+ this.linguagem;
        var atividade=document.getElementById('atividade')
        
        atividade.innerText= programador;
    }
}

function trocaEspecificacao() {
    var cargo = document.getElementById('cargo');

    var especificacoes = document.getElementById("especificacoes");
    
    while (especificacoes.firstChild) {
        especificacoes.removeChild(especificacoes.firstChild);
    }

    var legend = document.createElement("legend");
    legend.innerHTML = "Especificações";

    var label = document.createElement("label");
    var br = document.createElement("br");
    var input = document.createElement("input");

    if (cargo.value === "Desenvolvedor") {
        label.innerHTML = "Linguagem de Programação";

        input.id = "linguagem";
        input.type = "text";
        input.name = "Linguagem de Programação";
    } else {
        label.innerHTML = "Departamento";

        input.id = "departamento";
        input.type = "text";
        input.name = "Departamento";
    }
    
    especificacoes.appendChild(legend);
    especificacoes.appendChild(label);
    especificacoes.appendChild(br);
    especificacoes.appendChild(input);
}

function exibirErro(mensagem) {
    alert(mensagem);
}

function enviar(){
    try {
        var nome = document.getElementById('nome');
        var idade = document.getElementById('idade');
        var cargo = document.getElementById('cargo');
        var departamento = document.getElementById('departamento');
        var linguagem = document.getElementById('linguagem');

        if (cargo.value === "Desenvolvedor") {
            desenvolvedor = new Desenvolvedor(nome.value, idade.value, cargo.value, linguagem.value)
    
            desenvolvedor.seApresentar;
            desenvolvedor.trabalhar();
            desenvolvedor.programar; 
        } else {
            gerente = new Gerente(nome.value, idade.value, cargo.value, departamento.value)
    
            gerente.seApresentar;
            gerente.trabalhar();
            gerente.gerenciar;  
        }
    } catch (error) {
        console.log(error)

        var erro = document.getElementById("erro");

        if (error == "Error: Nome invalido") {
            var mensagem = "Digite um nome válido";
            erro.innerText = mensagem;

            exibirErro(mensagem);
        }
    
        if (error == "Error: idade invalida") {
            var mensagem = "Digite uma idade válida";
            erro.innerText = mensagem;

            exibirErro(mensagem);
        }
    
        if (error == "Error: cargo invalido") {
            var mensagem = "Digite um cargo";
            erro.innerText = mensagem;
            
            exibirErro(mensagem);
        }
    
        if (error == "Error: Departamento invalido") {
            var mensagem = "Digite um departamento válido";
            erro.innerText = mensagem;

            exibirErro(mensagem);
        }
    
        if (error == "Error: linguagem invalida") {
            var mensagem = "Digite uma linguagem válida";
            erro.innerText = mensagem;

            exibirErro(mensagem);
        }
    }
}
    