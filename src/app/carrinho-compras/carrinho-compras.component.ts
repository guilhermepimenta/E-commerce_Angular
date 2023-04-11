import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from '../services/carrinho-compras.service';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  dados: any = {}

  constructor(
    private carrinhoComprasService: CarrinhoComprasService
  ) { }

  ngOnInit(): void {
    this.dados = this.carrinhoComprasService.obterCarrinhoDeCompras();
  }

  limpar(): void {
    this.carrinhoComprasService.limparCarrinho();
    this.ngOnInit();
  }

  // adicionar(item: Produto): void {
  //   this.carrinhoComprasService.adicionarQuantidadeItem(item);
  //   this.ngOnInit();
  // }

  // remover(item: Produto): void {
  //   this.carrinhoComprasService.diminuirQuantidadeItens(item);
  //   this.ngOnInit();
  // }

}
