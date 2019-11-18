import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
 

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

}
