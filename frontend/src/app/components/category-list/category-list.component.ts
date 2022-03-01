import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      resp => {
        this.categories = resp
      },
      err => console.log(err)
    )
  }

  deleteCategory(id: number | undefined) {
    this.categoryService.deleteCategory(id).subscribe(
      resp => {
        console.log(resp)
        this.getCategories()
      },
      err => console.log(err)    
    )
  }

}
