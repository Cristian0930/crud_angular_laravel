import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      resp => {
        this.products = resp
        console.log(resp);
        
      },
      err => console.log(err)
    );
  }

  deleteProduct(id: number | undefined) {
    this.productService.deleteProduct(id).subscribe(
      resp => {
        console.log(resp)
        this.getProducts()
      },
      err => console.log(err)    
    )
  }
}
