import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category: Category = {
    name: ''
  }

  edit: boolean = false;

  constructor(private categoryService: CategoryService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(params);
    
    if (params) {
      this.categoryService.getCategory(params).subscribe(
        resp => {
          console.log(resp);
          this.category = resp;
          this.edit = true;
        }, err => console.log(err)
      );
    }
  }

  submitCategory() {
    this.categoryService.createCategory(this.category).subscribe(
      resp => {
        console.log(resp);
        this.router.navigateByUrl('/category');
      }, err => {
        alert('An error occurred when creating the category');
      }
    )
  }

  updateCategory() {
    this.categoryService.updateCategory(this.category.id, this.category).subscribe(
      resp => {
        console.log(resp);
        this.router.navigateByUrl('/category');
      }, err => {
        alert('An error occurred when updating the category');
      }
    )
  }
}
