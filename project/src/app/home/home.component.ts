import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private opendialogue:MatDialog,private router:Router){

  }
  openlogin(){
    let opendialogue=this.opendialogue.open(LoginpageComponent)
    opendialogue.afterClosed().subscribe(result => {
      console.log(`Dialog result:`);

    });
  }
  opensignup(){
    let opendialogue=this.opendialogue.open(SignupComponent)
    opendialogue.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); 
  }
  ngOnInit() {
  }

}
