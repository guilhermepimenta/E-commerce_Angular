import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model'
import { ProdutoService } from '../services/produto.service';
import { CarrinhoComprasService } from '../services/carrinho-compras.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  // page: 1;
  filtro: "";

  itemProduto: Produto = {
    idProduto: 0, nome: '', preco: 0, quantidade: 0,
    descricao: '', foto: ''
  };


  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private carrinhoComprasService: CarrinhoComprasService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();
  }

  // handlePageChange(event: any): void {
  //   this.page = event;
  // }

  obterProduto(item: Produto): void {
    this.itemProduto = item;
  }

  adicionarProduto(item: Produto): void {
    this.carrinhoComprasService.adicionarItem(item);
    this.router.navigate(['/carrinho-compras']);
  }

}
