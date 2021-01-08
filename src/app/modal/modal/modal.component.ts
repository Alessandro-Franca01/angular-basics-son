import { Component, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';
import { Produto } from 'src/app/shared/produto.model';

// Tive que declarar para sair o erro do "$" do Jquery
declare const $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  // Enviar para a lista o produto alterado
  public produto: Produto
  public produtoUpdate: Produto
  // Atributos Recebidos:
  public nome: string
  public categoria: string
  public valor: number
  // Lançando evento:
  @Output()
  public onSubmit: EventEmitter<Produto> = new EventEmitter<Produto>();

  // Aqui vai ser pego o elemento inicial do componente: app-modal
  constructor(public elemento: ElementRef) {
    this.produtoUpdate = new Produto();
   }

  // Esse metodo vai buscar o elemento que preciso para chamar o modal
  private getElementModal(): HTMLElement{
    const nativo: HTMLElement= this.elemento.nativeElement;
    return nativo.firstChild.firstChild as HTMLElement;
  }

  // Esse metodo cai abrir o modal sem precisar do ID:
  // Deu erro na tipagem do Jquery: comando usado "npm i --save-dev @types/jquery" (Não funcionou, declarei o $)
  public show(produto?: Produto): Produto{
    console.log("Imprimindo Produto na Modal")
    console.log(produto)
    this.produto = produto;
    const divModal = this.getElementModal();
    $(divModal).modal('show') 
    return this.produto;
  }

  hide() {
    const divModal = this.getElementModal();
    $(divModal).modal('hide');
  }

  // Nao sei qual a necessidade desse metodo ?
  public enviarForm(){}

  // Enviar esse produto para a lista na posição correta:
  public Update(event){
    // Ver o qué isso ?
    this.produtoUpdate.id = this.produto.id;
    const copy = Object.assign({}, this.produtoUpdate);   
    // Imprimindo o evento no console
    console.log(this.produtoUpdate)
    // Emitindo o evento: Passando o produto como parametro
    this.onSubmit.emit(copy)
    this.hide();
  }

  ngOnInit(): void { 
  }

}
