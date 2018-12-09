import { Component, OnInit } from '@angular/core';
import { ListAtalhos } from '../../../models/Atalhos'
@Component({
  selector: 'app-atalhos',
  templateUrl: './atalhos.component.html',
  styleUrls: ['./atalhos.component.scss', '../panel.component.scss']
})
export class AtalhosComponent implements OnInit {
  atalhosOpreacionais: ListAtalhos[];
  atalhosGerais: ListAtalhos[];
  constructor() { }
  ngOnInit() {
    this.atalhosOpreacionais = [
      'Envio',
      'Assinatura',
      'Envio de Duplicatas',
      'Assinatura Digital',
      'Nova Operação'
    ],
    this.atalhosGerais = [
      'Carteira',
      'Instruções'
    ]

  }

}
