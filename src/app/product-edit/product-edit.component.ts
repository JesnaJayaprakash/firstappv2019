import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product:Product=new Product;
  products:Product[];
  response:any;
  productform:FormGroup;
  constructor(private service:ProductService,private route:ActivatedRoute,private formBuider:FormBuilder,private toastr:ToastrService) {}
  id:number;

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    console.log(this.id);
    this.service.GetProduct(this.id)
    .subscribe(x=>{
      this.product=x;
      console.log(x)
    },error =>console.log(error));
    this.productform=this.formBuilder.group({
      pid:null,
      pname:[Validators.compose([Validators.required])],
      pdesc:[Validators.compose([Validators.required])],
      price:[Validators.compose([Validators.required])],
      pdate:[Validators.compose([Validators.required])],
    });
  }
  get formControls()
  {
    return this.productform.controls;
  }
  UpdateProduct()
  {
    this.product.pid=this.productform.controls.pid.value;
    this.product.pname=this.productform.controls.pname.value;
    this.product.pdesc=this.productform.controls.pdesc.value;
    this.product.price=this.productform.controls.price.value;
    this.product.pdate=this.productform.controls.pdate.value;
    this.service.UpdateProduct(this.id,this.product).subscribe(res=>{
      this.toastr.warning('Update Successfull','Yipee!')

    })
  }

}
