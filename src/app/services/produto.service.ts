import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Produto[] = [
    {
      idProduto: 1,
      nome: 'Contribuição sindical de janeiro de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'vencida',
      descricao: 'Contribuição sindical de janeiro de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 2,
      nome: 'Contribuição sindical de fevereiro de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'vencida',
      descricao: 'Contribuição sindical de fevereiro de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 3,
      nome: 'Contribuição sindical de março de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'vencida',
      descricao: 'Contribuição sindical de março de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 4,
      nome: 'Contribuição sindical de abril de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'a vencer',
      descricao: 'Contribuição sindical de abril de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 5,
      nome: 'Contribuição sindical de maio de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'a vencer',
      descricao: 'Contribuição sindical de maio de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 6,
      nome: 'Contribuição sindical de junho de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'a vencer',
      descricao: 'Contribuição sindical de junho de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 7,
      nome: 'Contribuição sindical de julho de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'a vencer',
      descricao: 'Contribuição sindical de julho de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 8,
      nome: 'Contribuição sindical de agosto de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'a vencer',
      descricao: 'Contribuição sindical de agosto de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 9,
      nome: 'Contribuição sindical de setembro de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'a vencer',
      descricao: 'Contribuição sindical de setembro de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 10,
      nome: 'Contribuição sindical de outubro de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'a vencer',
      descricao: 'Contribuição sindical de outubro de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 11,
      nome: 'Contribuição sindical de novembro de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'a vencer',
      descricao: 'Contribuição sindical de novembro de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    },
    {
      idProduto: 12,
      nome: 'Contribuição sindical de dezembro de 2023',
      preco: 30.00,
      quantidade: 1,
      status: 'a vencer',
      descricao: 'Contribuição sindical de dezembro de 2023',
      foto: 'http://www.sindalig.org.br/wp-content/uploads/2020/11/cartao-de-credito-2.png'
    }

  ];

  constructor() { }

  //método para retornar os dados dos produtos
  getAll(): Produto[] {
    return this.produtos;
  }
}
