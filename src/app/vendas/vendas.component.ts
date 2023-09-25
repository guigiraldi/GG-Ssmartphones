import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent {
  OfertasEspeciais = [
    { produto: 'Asus ROG Phone 7', preco: 'R$6.000', detalhes: 'Uma máquina de celular com 512 GB de memória e 16 GB de RAM, por apenas'},
    { produto: 'Motorola Edge Plus', preco: 'R$4.700', detalhes: 'Um processador potente Snapdragon 8 Gen 2 e duas câmeras 50 MP, saindo por apenas' },
    { produto: 'Nokia Tijolão', preco: 'R$20.000', detalhes: 'O queridinho de todos, saindo pela mixaria de' },
  ];

  // Estrutura de dados para marcas, modelos e preços de celulares
  celulares = [
    {
      marca: 'Samsung',
      modelos: [
        { nome: 'Samsung Galaxy S23', preco: '$5.500' },
        { nome: 'Samsung Galaxy Z Fold 5', preco: '$12.000' },
        { nome: 'Samsung Galaxy Z Flip 5', preco: '$6.500' },
        { nome: 'Samsung Galaxy S22', preco: '$3.500' },
        
      ]
    },
    {
      marca: 'Apple',
      modelos: [
        { nome: 'iPhone 14 Pro Max', preco: 'R$9.000' },
        { nome: 'iPhone 13 Pro Max', preco: '$7.000' },
        { nome: 'iPhone 12 ', preco: 'R$4.000' },
        { nome: 'iPhone 11', preco: 'R$3.000' },
      
      ]
    },
    {
      marca: 'Xiaomi',
      modelos: [
        { nome: 'Xiaomi 13 Pro', preco: 'R$7.400' },
        { nome: 'Xiaomi 12T', preco: 'R$3.199' },
        { nome: 'Xiaomi 11T Pro ', preco: 'R$4.599' },
        { nome: 'Xiaomi 13 Lite', preco: 'R$2.150' },
      
      ]
    },
    
  ];


  MarcaSelecionada: any;
  ModeloSelecionado: any;
  modelos: any;


  updateListaModelo() {
    // Lógica para atualizar a lista de modelos com base na marca selecionada
    const MarcaSelecionada = this.MarcaSelecionada;
    if (MarcaSelecionada) {
      this.modelos = MarcaSelecionada.modelos;
    } else {
      this.modelos = [];
    }
  }


  DesejoUsuario: string = '';
  desejos: string[] = []; // Array para armazenar os desejos dos clientes

  AdicionarDesejo() {
    if (this.DesejoUsuario.trim() !== '') {
      this.desejos.push(this.DesejoUsuario);
      this.DesejoUsuario = '';
    }
  }
  LimparListaDesejo() {
    this.DesejoUsuario = ''; // Limpa o campo de entrada
  }

  LimparDesejos() {
    this.desejos = []; // Limpa a lista de desejos
  }
}

