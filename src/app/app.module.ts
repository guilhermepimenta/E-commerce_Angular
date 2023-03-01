import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { LoginComponent } from './login/login.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt)
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CarrinhoComprasComponent,
    FinalizarPedidoComponent,
    LoginComponent,
    CadastroClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
