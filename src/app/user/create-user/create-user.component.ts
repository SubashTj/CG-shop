import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),
      long: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),

    })
  }
  Save(addForm: any) {
    let obj = {
      'email': addForm.email,
      'username': addForm.username,
      'password': addForm.password,

      'name': {
        'firstname': addForm.firstname,
        'lastname': addForm.lastname
      },
      'address': {
        'number': addForm.number,
        'street': addForm.street,
        'city': addForm.city,
        'zipcode': addForm.zipcode,
        'geolocation': {
          'lat': addForm.lat,
          'long': addForm.long
        },
      },
      'phone': addForm.phone
    }
    this.apiService.Create('users', JSON.stringify(obj)).subscribe((res) => {

    })
  }
  Clear() {
    this.addForm.reset();
  }
}
