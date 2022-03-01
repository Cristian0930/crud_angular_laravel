import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: '', 
    component: ProductListComponent
  },
  {
    path: 'product', 
    component: ProductListComponent
  },
  {
    path: 'product/create', 
    component: ProductFormComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'category',
    component: CategoryListComponent
  },
  {
    path: 'category/create',
    component: CategoryFormComponent
  },
  {
    path: 'category/edit/:id',
    component: CategoryFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
