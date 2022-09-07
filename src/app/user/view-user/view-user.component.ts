import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users: any;
  id: any;
  user: any;
  constructor(private apiService: ApiService, private activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.apiService.getSingleData(`users/${this.id}`).subscribe((data) => {
      this.user = data

    })
  }
}
