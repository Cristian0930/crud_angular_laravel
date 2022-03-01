import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/Category';
import { Product } from 'src/app/interfaces/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: '0',
    image: '',
    category_id: '1',
    category: {
      name: '',
    }
  }

  categories: Category[] = [];

  edit: boolean = false;

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(params);
    
    if (params) {
      this.productService.getProduct(params).subscribe(
        resp => {
          console.log(resp);
          this.product = resp;
          this.edit = true;
        }, err => console.log(err)
      );
    }

    this.getCategories();
  }

  submitProduct() {    
    this.loadingAlert();
    this.productService.createProduct(this.product).subscribe(
      resp => {
        console.log(resp);
        this.router.navigateByUrl('/');
        this.successAlert("Producto guardado correctamente");
      },
      err => { 
        console.log(err);
        this.alertError();
      }
    );
  }

  updateProduct() {
    this.loadingAlert();
    this.productService.updateProduct(this.product.id, this.product).subscribe(
      resp => {
        console.log(resp);
        this.router.navigateByUrl('/');
        this.successAlert("Producto actualizado correctamente");
      },
      err => {
        console.log(err);
        this.alertError();
      }
    );
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      resp => {
        console.log(resp);
        this.categories = resp;
      }, err => {
        console.log(err);
      }
    )
  }

  alertError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }

  loadingAlert() {
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
  }

  successAlert(message: string) {
    Swal.fire({
      title: this.product.name,
      text: message,
      icon: 'success'
    });
  }
}
