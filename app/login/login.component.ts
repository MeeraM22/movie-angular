import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private loginService : AuthenticationServiceService, private router : Router) { }
 
  ngOnInit(): void {
  }
 
  username = '';
  password = '';
 
  handleLogin(){
 
    console.log(this.username);
    console.log(this.password);
    this.loginService.login(this.username, this.password).subscribe(
 
      data => {console.log(data); this.router.navigate(['view-movies'])}
     
    )
 
  }
 
  user = sessionStorage.getItem('authenticatedUser');
 
}