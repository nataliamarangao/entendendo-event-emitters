import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() recebeFamilia: any;
  @Output() respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.recebeFamilia);
    console.log('Objeto familia recebido do component pai via Input: ', this.recebeFamilia);
  }

  feedback() {
    this.respostaFamilia.emit({"descricao": "Filha", "idade": 15});
  }

}
