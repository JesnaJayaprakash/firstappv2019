import { Component, OnInit } from '@angular/core';
import{ Observable } from 'rxjs'
import { ProductService } from '../product.service';
import { Product } from '../Product';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public popoverTitle: string = 'Delete';
  public popoverMessage: string = 'Do you want to delete?';
  public confirmClicked: boolean=false;
  public cancelClicked: boolean = false;

  product:Observable<Product>;
  products: Observable<Product[]>
 
  //Testing for git upload on seventh commit
  constructor(private productService: ProductService, 
      private router: Router,private toastr: ToastrService) { }

  ngOnInit() {

    this.reloadData();
  }
  reloadData(){
    this.product=this.productService.GetProductList();
    this.products=this.productService.GetProductList();
  }
      deleteProduct(id:number){
        this.productService.DeleteProduct(id).subscribe(data=>{
          console.log(data);
          this.toastr.error('Oh No! :)','Deleted Successfully');
        })
      
  }

}
