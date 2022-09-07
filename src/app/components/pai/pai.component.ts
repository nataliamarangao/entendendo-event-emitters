import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  @Output() familia : any[];

  constructor() {
    this.familia = [
      {
        descricao: 'Pai',
        idade: 45
      },
      {
        descricao: 'Mãe',
        idade: 42
      },
      {
        descricao: 'Filho',
        idade: 20
      }
    ];
  }

  ngOnInit() {
    console.log(this.familia);
  }

  // função para receber emit Output do Filho
  reciverFeedback(respostaFilho: any) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }
}
