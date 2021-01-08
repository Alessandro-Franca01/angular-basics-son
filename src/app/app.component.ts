import { Component, ElementRef } from '@angular/core';
import { Produto } from './shared/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Vou tentar instaciar o produto atraves do componente pai "app"
export class AppComponent {
  title = 'angular-basics-son';

  // Testando instaciação por componente pai:
  public produtoApp: Produto;
  public element: ElementRef;

  public getElement(){
    //this.element.nativeElement
  }




}
