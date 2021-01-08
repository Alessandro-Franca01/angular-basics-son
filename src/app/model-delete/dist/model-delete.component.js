"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModelDeleteComponent = void 0;
var core_1 = require("@angular/core");
var produto_model_1 = require("../shared/produto.model");
var ModelDeleteComponent = /** @class */ (function () {
    // Aqui vai ser pego o elemento inicial do componente: app-modal
    function ModelDeleteComponent(elemento) {
        this.elemento = elemento;
        // Ou poderia receber a lista aqui mesmo e excluir por aqui!
        // Esse tipo: EventEmitter tem que ser do CORE do angular
        this.onDelete = new core_1.EventEmitter();
    }
    ModelDeleteComponent.prototype.ngOnInit = function () {
    };
    ModelDeleteComponent.prototype.getElementModal = function () {
        var nativo = this.elemento.nativeElement;
        return nativo.firstChild;
    };
    // Aqui vai ser onde vou receber o produto do componente list
    ModelDeleteComponent.prototype.show = function (produto) {
        this.produto = produto;
        var divModal = this.getElementModal();
        $(divModal).modal('show');
    };
    ModelDeleteComponent.prototype.hide = function () {
        var divModal = this.getElementModal();
        $(divModal).modal('hide');
    };
    ModelDeleteComponent.prototype["delete"] = function (event) {
        // Ver o qué isso ?
        this.produtoDelete = new produto_model_1.Produto();
        this.produtoDelete.id = this.produto.id;
        console.log(this.produtoDelete);
        var copy = Object.assign({}, this.produtoDelete);
        // Emitindo o evento: Passando o produto como parametro
        this.onDelete.emit(copy);
        this.hide();
    };
    __decorate([
        core_1.Output()
    ], ModelDeleteComponent.prototype, "onDelete");
    ModelDeleteComponent = __decorate([
        core_1.Component({
            selector: 'model-delete',
            template: "\n          <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                      <h5 class=\"modal-title\">Editar Produto: {{produto?.name}}</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                  </div>\n                  <div class=\"modal-body\">\n                      <h3> Dejesa excluir mesmo o produto ? </h3>                   \n                  </div>                        \n                  <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                      <!-- O evento est\u00E1 sendo capturado com sucesso -->\n                      <button type=\"submit\" class=\"btn btn-danger\" (click)=\"delete($event)\">Delete</button>            \n                  </div>\n                </div>\n            </div>        \n          </div>\n  ",
            styles: []
        })
    ], ModelDeleteComponent);
    return ModelDeleteComponent;
}());
exports.ModelDeleteComponent = ModelDeleteComponent;
