import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  public filterCategory: any;
  public searchTerm !: string;
  searchKey: string = "";
  constructor(private apiService: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    this.apiService.GetProduct('products').subscribe((data) => {
      this.products = data;
      this.filterCategory = data;
      this.products.forEach((element: any) => {
        if (element.category === "women's clothing" || element.category === "men's clothing") {
          element.category = "fashion"
        }
        Object.assign(element, { quantity: 1, total: element.price });
      });
      console.log(this.products)
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  filter(category: string) {
    this.filterCategory = this.products
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
