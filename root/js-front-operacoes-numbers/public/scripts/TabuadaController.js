export default class TabuadaController {
  constructor() {    
    this.inOperando = document.querySelector('#operando');
    this.inOperacao = document.querySelector('#operacao');
    this.outPuts = document.querySelector('#outputs');
    this.btnCalc = document.querySelector('#btn-calcular')

    this.execTabuada();
  }

  soma(num1, num2) {
    return Number(num1) + Number(num2);
  }

  subtracao(num1, num2) {
    return Number(num1) - Number(num2);
  }

  divisao(num1, num2) {
    return Number(num1) / Number(num2);
  }

  multiplicacao(num1, num2) {
    return Number(num1) * Number(num2);
  }

  resto(num1, num2) {
    return Number(num1) % Number(num2);
  }

  exponenciacao(num1, num2) {
    return Number(num1) ** Number(num2);
  }

  showResult(operacao, simbolo,  operando, resultado) {
    const h3 = document.createElement('h3');
    h3.textContent = `Tabuada de ${operacao.toUpperCase()} do numero ${operando}`;
    this.outPuts.appendChild(h3);
    for (let qtd = 0; qtd <= 10; qtd++) {
      const p = document.createElement('p');
      p.textContent = `${operando} ${simbolo} ${qtd} = ${resultado(operando, qtd)}`;
      this.outPuts.appendChild(p);
    }
  }

  showError() {
    const h3 = document.createElement('h3');
    h3.textContent = `Não foi possivel gerar a tabuada`;
    this.outPuts.appendChild(h3);
  }

  calculaOperacao(operacao, operando) {
    console.log(operacao, operando)
    switch (operacao) {
      case 'soma':
        this.showResult(operacao, '+', operando, this.soma);
        break;

      case 'subtracao':
        this.showResult(operacao, '-', operando, this.subtracao);
        break;

      case 'divisao':
        this.showResult(operacao, '/', operando, this.divisao);
        break;

      case 'multiplicacao':
        this.showResult(operacao, '*', operando, this.multiplicacao);
        break;

      case 'resto':
        this.showResult(operacao, '%', operando, this.resto);
        break;

      case 'exponenciacao':
        this.showResult(operacao, '**', operando, this.exponenciacao);
        break;
      default:
        this.showError();
        break;
    }
  }

  execTabuada() {
    this.btnCalc.addEventListener('click', () => {
        this.calculaOperacao(this.inOperacao.value, this.inOperando.value)
    })
  }
}
