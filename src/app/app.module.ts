import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo/topo.component';
import { ListComponent } from './list/list/list.component';
import { CreateComponent } from './create/create/create.component';
import { ModalComponent } from './modal/modal/modal.component';
import { AlertSuccessComponent } from './alert-success/alert-success/alert-success.component';
import { ModelDeleteComponent } from './model-delete/model-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    ListComponent,
    CreateComponent,
    ModalComponent,  
    AlertSuccessComponent, ModelDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
