import './Tabuada.css'

export default class TabuadaComponent extends HTMLElement {
    constructor() {
        super();
        this.markup = `
        <div id="tabuada">
            <div id="inputs">                
                <label for="operando">Operando</label>            
                <input type="number" name="operando" id="operando">    
                <select name="operacao" id="operacao">
                    <option value="soma">Soma</option>
                    <option value="subtracao">Subtração</option>
                    <option value="divisao">Divisão</option>
                    <option value="multiplicacao">Multiplicação</option>
                    <option value="resto">Resto</option>
                    <option value="exponenciacao">Exponenciação</option>
                </select>
            </div>
            <button type="button" id="btn-calcular">Calcular</button>
            <div id="outputs"></div>
        </div>`;
        this.innerHTML = this.markup;
    }

    connectedCallback() {
        console.log('Componente caregado com sucesso.')
    }
}

customElements.define('tabuada-input', TabuadaComponent)