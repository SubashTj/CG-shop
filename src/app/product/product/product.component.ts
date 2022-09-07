import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() singleProduct:any={}
  extend=false;
  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
  
  }
  Extend(){
this.extend=!this.extend
  }
  addtocart(item:any){
this.cartService.addtoCart(item)
  }
  view(singleProduct:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to view this product",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, View it!'
    }).then((result) => {
      var url=`main/single-cart/${singleProduct.id}`
this.router.navigate([url])
    })

  }
}
