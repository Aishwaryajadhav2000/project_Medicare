import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register: FormGroup;
  user: User = new User();

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public auth: AuthService

  ) { }

  ngOnInit(): void {

    this.getuser();

    this.register = this.fb.group({
      firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      username: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required]),
      emailid:new FormControl(''),
    })
  }

  getuser(){
this.auth.getusers().subscribe(data =>{
  console.log("data", data);
})
  }

  submit() {
    console.log("this user", this.user);

    this.auth.register(this.user).subscribe(data => {
      console.log("data", data)
    })

    this.router.navigate(['/login'])
  }

}
