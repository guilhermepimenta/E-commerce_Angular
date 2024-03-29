import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProdutosComponent } from "./produtos/produtos.component";
import { CarrinhoComprasComponent } from "./carrinho-compras/carrinho-compras.component";
import { CadastroClientesComponent } from "./cadastro-clientes/cadastro-clientes.component";
import { FinalizarPedidoComponent } from "./finalizar-pedido/finalizar-pedido.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'carrinho-compras',
    component: CarrinhoComprasComponent
  },
  {
    path: 'cadastro-clientes',
    component: CadastroClientesComponent
  },
  {
    path: 'finalizar-pedido',
    component: FinalizarPedidoComponent
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }