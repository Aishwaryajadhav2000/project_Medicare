import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/class/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  user: User = new User();

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService
  ) { }
  ngOnInit(): void {

    this.validation();

  }

  validation() {
    this.login = this.fb.group({
      role: new FormControl(''),
      emailid: new FormControl(''),
      password: new FormControl('')
    })
  }


  submit() {
    console.log("submit", this.login.value.role);
    if (this.login.value.role == "admin") {
      this.adminlog();
    } else {
      console.log("user login");
      this.userlog();
    }
  }

  userlog() {
    console.log("user login");
    this.auth.login(this.user.emailid).subscribe((response: any) => {
      console.log("user", response);

      if (this.user.emailid == response.emailid && this.user.password == response.password) {
        localStorage.setItem("useremail", response.emailid)
        this.router.navigate(['/userhome', response]);

      } else {
        alert("wrong credentials please try again");
      }
    })
  }

  adminlog() {
    if (this.login.value.emailid == "aishwarya1608@gmail.com" && this.login.value.password == "aish123") {
      console.log("admin login success");
      this.router.navigate(['/manageproducts']);
    } else {
      console.log("admin login credentials are wrong");
    }
  }

}
