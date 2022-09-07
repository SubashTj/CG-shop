import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-single-cart',
  templateUrl: './single-cart.component.html',
  styleUrls: ['./single-cart.component.css']
})
export class SingleCartComponent implements OnInit {
  id: any;
  product: any
  constructor(private cartService: CartService, private apiService: ApiService, private activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.apiService.getSingleData(`products/${this.id}`).subscribe((data) => {
      this.product = data
    })
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item)
  }
}
