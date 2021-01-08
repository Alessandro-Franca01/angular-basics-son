import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modal/modal/modal.component';
import { Produto } from '../../shared/produto.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  public produto: Produto;
  public produtos: Array<Produto> = new Array<Produto>();

  // Já tenho uma instancia do componente filho!
  @ViewChild(ModalComponent)
  public modalComponente: ModalComponent;
  
  // Atributos para instanciar a classe produto
  public id: number = 1;
  public nome; 
  public valor;
  public categoria;

  constructor() { 
    //console.log(this.getName())
    //setTimeout(() => {
    //  console.log(this.produto)
    //}, 10000);
  }

  // Poderia usar os gettes e settes normalmente!!!
  public getName(): string {
    return this.nome;
  }

  // Esse metodo tem que ficar dentro do serviço: criar um produto com os dados do form
  public create(): Produto {
    let newProduto: Produto = new Produto();
    newProduto.id = this.id;
    newProduto.name = this.nome;
    newProduto.categoria = this.categoria;
    newProduto.valor = this.valor;
    //console.log(newProduto); 
    this.produtos.push(newProduto);
    this.id ++;           
    return newProduto;
  }

  // Metodo só para usar no evento de click: Funcionando!!!
  public getList(): Produto[] {    
    console.log(this.produtos)
    return this.produtos
  }

  // Chamando o model em outro componente: Funcionando
  public getModal(){
    this.modalComponente.show(this.produto);
  }

  ngOnInit(): void {
  }

}
