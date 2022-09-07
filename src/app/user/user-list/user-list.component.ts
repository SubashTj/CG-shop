import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser() {
    this.apiService.GetUser('users').subscribe((data) => {
      this.users = data
    })
  }
}

