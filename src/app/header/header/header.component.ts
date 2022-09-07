import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  constructor(private authenticationService: AuthenticationService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    })
  }
  Logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You SignOut!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, SignOut it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'success',
          title: 'SignOut successfully'
        })
        this.authenticationService.logout();
        this.router.navigate(['']);
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'error',
          title: 'SignOut Canceled'
        })
      }
    })
  }
}
