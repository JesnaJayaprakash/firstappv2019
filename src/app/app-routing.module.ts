import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';



const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'ProductAdd'},
  {path:'ProductAdd',component:ProductAddComponent},
  {path:'ProductList',component:ProductListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
