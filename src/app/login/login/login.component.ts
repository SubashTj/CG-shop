import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  submitted = false;
  data: any;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthenticationService, private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  signin(signinForm: any) {

    this.submitted = true;
    if (this.signinForm.invalid) {
      return;
    }
    this._httpClient.get<any>(`${environment.BASE_URL}`)
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.username === signinForm.username && a.password === signinForm.password
        });
        if(user){
          this.auth.setAuth(this.signinForm);
        this.router.navigate(['main'])
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'success',
          title: 'Signin successfully'
        })
      }else{
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Toast.fire({
          icon: 'error',
          title: 'Signin failed'
        })
      }
      })
   

  }
}