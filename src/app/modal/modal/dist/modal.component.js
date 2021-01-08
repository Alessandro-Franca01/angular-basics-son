"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalComponent = void 0;
var core_1 = require("@angular/core");
//import { EventEmitter } from 'events';
var produto_model_1 = require("src/app/shared/produto.model");
var ModalComponent = /** @class */ (function () {
    // Aqui vai ser pego o elemento inicial do componente: app-modal
    function ModalComponent(elemento) {
        this.elemento = elemento;
        // Lançando evento:
        this.onSubmit = new core_1.EventEmitter();
        this.produtoUpdate = new produto_model_1.Produto();
    }
    // Esse metodo vai buscar o elemento que preciso para chamar o modal
    ModalComponent.prototype.getElementModal = function () {
        var nativo = this.elemento.nativeElement;
        return nativo.firstChild.firstChild;
    };
    // Esse metodo cai abrir o modal sem precisar do ID:
    // Deu erro na tipagem do Jquery: comando usado "npm i --save-dev @types/jquery" (Não funcionou, declarei o $)
    ModalComponent.prototype.show = function (produto) {
        console.log("Imprimindo Produto na Modal");
        console.log(produto);
        this.produto = produto;
        var divModal = this.getElementModal();
        $(divModal).modal('show');
        return this.produto;
    };
    ModalComponent.prototype.hide = function () {
        var divModal = this.getElementModal();
        $(divModal).modal('hide');
    };
    // Nao sei qual a necessidade desse metodo ?
    ModalComponent.prototype.enviarForm = function () { };
    // Enviar esse produto para a lista na posição correta:
    ModalComponent.prototype.Update = function (event) {
        // Ver o qué isso ?
        this.produtoUpdate.id = this.produto.id;
        var copy = Object.assign({}, this.produtoUpdate);
        // Imprimindo o evento no console
        console.log(this.produtoUpdate);
        // Emitindo o evento: Passando o produto como parametro
        this.onSubmit.emit(copy);
        this.hide();
    };
    ModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output()
    ], ModalComponent.prototype, "onSubmit");
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.css']
        })
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
