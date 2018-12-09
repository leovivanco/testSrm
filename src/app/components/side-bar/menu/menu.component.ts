import { Component, OnInit } from '@angular/core';
import { Lista} from '../../../models/List'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: Lista[];

  constructor() {

  }

  ngOnInit() {
    this.menuList = [
      {
        ico: 'fa-globe',
        name: 'Painel de Gestão',
        active: true
      },
      {
        ico: 'fa-at',
        name: 'Conta Digital',
        active: false
      },
      {
        ico: 'fa-chart-bar',
        name: 'Ant. de Recebiveis',
        active: false
      },
    ]
    // let windowHeight = window.innerHeight;
    // console.log(windowHeight);
  }

}
