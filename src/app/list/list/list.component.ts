import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/modal/modal/modal.component';
import { ModelDeleteComponent } from 'src/app/model-delete/model-delete.component'
import { Produto } from 'src/app/shared/produto.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Aqui vou receber a lista de produtos que for criado pelo componente "create": Funcionando!!!
  @Input('list')
  public listProduto: Array<Produto> = new Array<Produto>();

  // Esse atributo não está nem sendo instaciado mesmo ??? Isso mesmo
  public produto: Produto
  public produtoModal: Produto 
  public produtoRecebido: Produto

  // Essa variavel vai receber a instancia do componente filho "model"
  @ViewChild(ModalComponent)
  public modalComponente: ModalComponent;

  @ViewChild(ModelDeleteComponent)
  public modalDeleteComponent: ModelDeleteComponent
  
  ngOnInit(): void {
  }

  public verificarLista(){
    console.log(this.listProduto)
  }
  
  // Esse metodo vai receber o produto alterado do componente modal por parametro: Funcionando "Falta o ID"
  public onNewProduto(produto){
    console.log('Imprimindo dentro do metodo onNewProduto')
    this.produtoRecebido = new Produto();
    this.produtoRecebido.id = produto.id;
    this.produtoRecebido.name = produto.name;
    this.produtoRecebido.categoria = produto.categoria;
    this.produtoRecebido.valor = produto.valor;  
    this.alterarProduto(produto);
  }

  public onDeleteProduto(produto: Produto): void{
    this.produtoRecebido = new Produto();
    this.produtoRecebido.id = produto.id;
    this.produtoRecebido.name = produto.name;
    this.produtoRecebido.categoria = produto.categoria;
    this.produtoRecebido.valor = produto.valor;
    this.deletarProduto(produto)
  }

  // Recebendo o produto do template
  public getModal(produto: Produto){    
    this.produtoModal = produto;
    // Capturando o produto do componente modal: Não está sendo usado 
    this.produtoModal = this.modalComponente.show(produto);    
  }

  public getModalDelete(produto: Produto){
    this.produtoModal = produto;
    this.modalDeleteComponent.show(produto);
  }

  constructor(){      
    setTimeout(() => {
      console.log(this.modalComponente);
      }, 3000);
   }

  public addProduto(produto: Produto){
    this.listProduto.push(produto);
  }

  //Metodo vai alterar o produto na lista de produtos: Encontrado, agora somente fazer a remoção
  public alterarProduto(produto: Produto){
   for(let p of this.listProduto){
      if(p.id == produto.id){
        console.log("Produto encontrado!")
        let index = this.listProduto.indexOf(p)
        console.log(index);
        this.listProduto.splice(index, 1, produto)
        console.log(this.listProduto)
      }
    }
  }

  //Metodo vai alterar o produto na lista de produtos: Encontrado, agora somente fazer a remoção
  public deletarProduto(produto: Produto){
    for(let p of this.listProduto){
       if(p.id == produto.id){
        let index = this.listProduto.indexOf(p)
        this.listProduto.splice(index, 1)        
       }
     }
   }

}
