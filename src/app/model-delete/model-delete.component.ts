import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from '../shared/produto.model';

declare const $;

@Component({
  selector: 'model-delete',
  template: `
          <div class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title">Editar Produto: {{produto?.name}}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <h3> Dejesa excluir mesmo o produto ? </h3>                   
                  </div>                        
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <!-- O evento está sendo capturado com sucesso -->
                      <button type="submit" class="btn btn-danger" (click)="delete($event)">Delete</button>            
                  </div>
                </div>
            </div>        
          </div>
  `,
  styles: [
  ]
})
export class ModelDeleteComponent implements OnInit {

  // Enviar para a lista o produto alterado
  public produto: Produto 
  public produtoDelete: Produto
  // Atributos Recebidos:
  public nome: string
  public categoria: string
  public valor: number
  // Ou poderia receber a lista aqui mesmo e excluir por aqui!


  // Esse tipo: EventEmitter tem que ser do CORE do angular
  @Output()
  public onDelete: EventEmitter<Produto> = new EventEmitter<Produto>();

   // Aqui vai ser pego o elemento inicial do componente: app-modal
  constructor(public elemento: ElementRef) {    
  }

  ngOnInit(): void {
  }

  private getElementModal(): HTMLElement{
    const nativo: HTMLElement= this.elemento.nativeElement;
    return nativo.firstChild as HTMLElement;
  }

  // Aqui vai ser onde vou receber o produto do componente list
  public show(produto?: Produto): void{
    this.produto = produto;
    const divModal = this.getElementModal();
    $(divModal).modal('show')         
  }

  hide() {
    const divModal = this.getElementModal();
    $(divModal).modal('hide');
  }

  public delete(event){
    // Ver o qué isso ?
    this.produtoDelete = new Produto();
    this.produtoDelete.id = this.produto.id;
    console.log(this.produtoDelete);
    const copy = Object.assign({}, this.produtoDelete);   
    // Emitindo o evento: Passando o produto como parametro
    this.onDelete.emit(copy)
    this.hide();
  }

}
