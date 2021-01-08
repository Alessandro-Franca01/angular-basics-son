// CRIAND UMA CLASSE DE PRODUTO
export class Produto {

    public name: string
    public valor: number
    public id: number
    public categoria: string

    // Esse metodo vai atribuir os valores pegos pelos componentes nos forms
    public settandoValores(nome: string, valor: number, categoria: string): void {
        this.name = nome;
        this.categoria = categoria;
        this.valor = valor;
    }

    constructor() {

    }

}