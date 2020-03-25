import { Injectable } from '@angular/core';
import { data } from '../mockdata';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  products = data;
  api = 'https://www.mockapi.io/projects/5e7b1b0a0e04630016332b4d'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}/product`);
  }
  getProduct(id){
    return this.products.find(product => product.id == id);
  }
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){

    console.log(product);

    let newObj = {id: 6,...product};
    console.log(newObj);
    
    this.products.push(newObj);
    console.log(this.products)

  }
  editProduct(){

  }
  addCartProduct(){

  }
}