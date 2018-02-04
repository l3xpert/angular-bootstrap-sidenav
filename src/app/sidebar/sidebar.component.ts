import {Component, OnInit} from '@angular/core';
import * as $ from 'jQuery';

export interface IMenuItem {
  name:string;
  level:number;
  icon?:string;
  link?:string;
  children?:IMenuItem[];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items:IMenuItem[];
  active:boolean;

  constructor() {
  }

  ngOnInit() {
    // this.active = false;
     this.items = [
       {name:'Dashboard', icon:'fa-home', level:0},
       {name:'Config', icon:'fa-file', level:0},
       {name:'Logs', icon:'fa-bars', level:0},
       {name:'Workspace', icon:'fa-briefcase', level:0},
       {name:'Tools', icon:'fa-gavel',level:0,  children:[
         {name:'tool 1', level:1},
         {name: 'tool 2', level:1}
       ]},
     ];

  }

  toggle() {
    $('#sidebar').toggleClass('active');
    this.active = !this.active;

  }

  calcFontSize(item:IMenuItem) {
    return 1.1 - (item.level * 0.3) + 'em';
  }

  calcMargin(item:IMenuItem) {
    if(this.active) {
      return 0;
    }
    return item.level * 2 + 'em';
  }

  generateId(item:IMenuItem) {
    return item.name + 'SubMenu';
  }

}
