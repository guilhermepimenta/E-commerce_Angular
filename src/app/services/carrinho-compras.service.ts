import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {

  dados = {
    itens: [{
      idProduto: 0,
      nome: '',
      foto: '',
      preco: 0,
      quantidade: 0,
      total: 0
    }],
    valorTotal: 0,
    quantidadeItens: 0
  }

  constructor() { }

  adicionarItem(item: Produto): void {

    if (localStorage.getItem('carrinho-compras') != null) {
      this.dados = JSON.parse(localStorage.getItem('carrinho-compras') as string);
    }
    else {
      this.dados.itens = [];
      this.dados.valorTotal = 0;
      this.dados.quantidadeItens = 0;
    }

    var itemJaExiste = false;
    for (var i = 0; i < this.dados.itens.length; i++) {
      if (this.dados.itens[i].idProduto == item.idProduto) {
        this.dados.itens[i].quantidade++;
        this.dados.itens[i].total = (this.dados.itens[i].preco * this.dados.itens[i].quantidade);
        this.dados.valorTotal += this.dados.itens[i].total;
        this.dados.quantidadeItens += this.dados.itens[i].quantidade;
        itemJaExiste = true;
        break;
      }
    }

    if (!itemJaExiste) {
      this.dados.itens.push(
        {
          idProduto: item.idProduto,
          nome: item.nome,
          foto: item.foto,
          preco: item.preco,
          quantidade: 1,
          total: item.preco
        }
      );
      this.dados.quantidadeItens += 1;
      this.dados.valorTotal += item.preco;
    }

    localStorage.setItem('carrinho-compras', JSON.stringify(this.dados));
  }
  obterCarrinhoDeCompras(): any {

    var carrinho = localStorage.getItem('carrinho-compras') as string;
    if (carrinho != null) {
      this.dados = JSON.parse(carrinho);
    }
    else {
      this.dados.itens = [];
      this.dados.valorTotal = 0;
      this.dados.quantidadeItens = 0;
    }

    return this.dados;
  }

  //método para limpar a cesta de compras
  limparCarrinho(): void {
    if (window.confirm
      ('Deseja realmente remover todos os itens do carrinho?')) {
      localStorage.removeItem('carrinho-compras');
    }
  }

  //método para adicionar +1 item no carrinho de compras
  adicionarQuantidadeItem(item: Produto): void {

    //ler o conteudo da cesta de compras
    this.dados = JSON.parse(localStorage.getItem('carrinho-compras') as string);

    //percorrer os produtos ja adicionados na cesta de compras
    for (var i = 0; i < this.dados.itens.length; i++) {
      //procurar o produto selecionado
      if (this.dados.itens[i].idProduto === item.idProduto) {
        //aumentar a quantidade
        this.dados.itens[i].quantidade++;
      }
    }

    this.dados.valorTotal += item.preco;
    this.dados.quantidadeItens++;

    //armazenar os itens na local storage
    localStorage.setItem('carrinho-compras', JSON.stringify(this.dados));
  }

  //método para diminuir +1 item no carrinho de compras
  diminuirQuantidadeItens(item: Produto): void {

    //ler o conteudo da cesta de compras
    this.dados = JSON.parse(localStorage.getItem('carrinho-compras') as string);

    //percorrer os produtos ja adicionados na cesta de compras
    for (var i = 0; i < this.dados.itens.length; i++) {
      //procurar o produto selecionado
      if (this.dados.itens[i].idProduto === item.idProduto) {
        //diminuir a quantidade
        this.dados.itens[i].quantidade--;
      }
    }

    //percorrer a cesta de compras para procurar 
    //produtos com quantidade = 0
    this.dados.itens = this.dados.itens.filter(

      function (produto) {
        return produto.quantidade > 0;
      }
    );

    this.dados.valorTotal -= item.preco;
    this.dados.quantidadeItens--;

    //armazenar os itens na local storage
    localStorage.setItem('carrinho-compras', JSON.stringify(this.dados));
  }
}


