import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ServiceforloginService } from '../serviceforlogin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private ref: MatDialogRef<SignupComponent>,private router:Router,private service:ServiceforloginService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
console.log('signup details',form);

  }

  //signup data store in data json
  openmenucard(first,last){
let body={
  'first':first,
  'last':last
}
this.service.postdatafromlogin(body).subscribe(res=>{
  console.log('post data ',res);
  
})
this.router.navigate(['/menucard'])
  }
}
