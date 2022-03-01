import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products`);
  }

  getProduct(id: number | undefined | string): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/products`, product);
  }

  updateProduct(id: number | undefined | string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/products/${id}`, product);
  }
  
  deleteProduct(id: number | undefined | string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/products/${id}`);
  }
}
