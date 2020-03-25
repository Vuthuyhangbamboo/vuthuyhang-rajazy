import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {data} from "../mockdata";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = data;
  selected: Product;
  showDetail(product){
    this.selected = product;
  }
  removeItem(id){
    return this.products = this.products.filter(product => product.id != id);
  }

}