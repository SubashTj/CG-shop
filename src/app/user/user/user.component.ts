import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() singleUser: any = {}
  extend = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  Edit(singleUser: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Edit this user",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, View it!'
    }).then((result) => {
      var url = `main/edit-user/${singleUser}`
      this.router.navigate([url])
    })

  }
  View(singleUser: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to View this User",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, View it!'
    }).then((result) => {
      var url = `main/view-user/${singleUser}`
      this.router.navigate([url])
    })
  }
  Extend() {
    this.extend = !this.extend
  }


}
