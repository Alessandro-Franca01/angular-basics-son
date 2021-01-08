"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListComponent = void 0;
var core_1 = require("@angular/core");
var modal_component_1 = require("src/app/modal/modal/modal.component");
var model_delete_component_1 = require("src/app/model-delete/model-delete.component");
var produto_model_1 = require("src/app/shared/produto.model");
var ListComponent = /** @class */ (function () {
    function ListComponent() {
        var _this = this;
        // Aqui vou receber a lista de produtos que for criado pelo componente "create": Funcionando!!!
        this.listProduto = new Array();
        setTimeout(function () {
            console.log(_this.modalComponente);
        }, 3000);
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.verificarLista = function () {
        console.log(this.listProduto);
    };
    // Esse metodo vai receber o produto alterado do componente modal por parametro: Funcionando "Falta o ID"
    ListComponent.prototype.onNewProduto = function (produto) {
        console.log('Imprimindo dentro do metodo onNewProduto');
        this.produtoRecebido = new produto_model_1.Produto();
        this.produtoRecebido.id = produto.id;
        this.produtoRecebido.name = produto.name;
        this.produtoRecebido.categoria = produto.categoria;
        this.produtoRecebido.valor = produto.valor;
        this.alterarProduto(produto);
    };
    ListComponent.prototype.onDeleteProduto = function (produto) {
        this.produtoRecebido = new produto_model_1.Produto();
        this.produtoRecebido.id = produto.id;
        this.produtoRecebido.name = produto.name;
        this.produtoRecebido.categoria = produto.categoria;
        this.produtoRecebido.valor = produto.valor;
        this.deletarProduto(produto);
    };
    // Recebendo o produto do template
    ListComponent.prototype.getModal = function (produto) {
        this.produtoModal = produto;
        // Capturando o produto do componente modal: Não está sendo usado 
        this.produtoModal = this.modalComponente.show(produto);
    };
    ListComponent.prototype.getModalDelete = function (produto) {
        this.produtoModal = produto;
        this.modalDeleteComponent.show(produto);
    };
    ListComponent.prototype.addProduto = function (produto) {
        this.listProduto.push(produto);
    };
    //Metodo vai alterar o produto na lista de produtos: Encontrado, agora somente fazer a remoção
    ListComponent.prototype.alterarProduto = function (produto) {
        for (var _i = 0, _a = this.listProduto; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id == produto.id) {
                console.log("Produto encontrado!");
                var index = this.listProduto.indexOf(p);
                console.log(index);
                this.listProduto.splice(index, 1, produto);
                console.log(this.listProduto);
            }
        }
    };
    //Metodo vai alterar o produto na lista de produtos: Encontrado, agora somente fazer a remoção
    ListComponent.prototype.deletarProduto = function (produto) {
        for (var _i = 0, _a = this.listProduto; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.id == produto.id) {
                var index = this.listProduto.indexOf(p);
                this.listProduto.splice(index, 1);
            }
        }
    };
    __decorate([
        core_1.Input('list')
    ], ListComponent.prototype, "listProduto");
    __decorate([
        core_1.ViewChild(modal_component_1.ModalComponent)
    ], ListComponent.prototype, "modalComponente");
    __decorate([
        core_1.ViewChild(model_delete_component_1.ModelDeleteComponent)
    ], ListComponent.prototype, "modalDeleteComponent");
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
