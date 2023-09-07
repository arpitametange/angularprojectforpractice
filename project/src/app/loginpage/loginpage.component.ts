import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceforloginService } from '../serviceforlogin.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private ref: MatDialogRef<LoginpageComponent>,private router:Router,private servicelogin:ServiceforloginService,private snack:MatSnackBar) { }

  ngOnInit() {

  }
  formgrou:FormGroup

//   loginavigate(email,name){
//   let data=this.servicelogin.check(email,name)
// if (data) {

//   this.router.navigate(['/menucard'])

// }
// else{
//   this.snack.open('please enter valid gmail and name','',{
//     duration: 3000
//   })
// }


  // this.servicelogin.postdatafromlogin(body).subscribe(res=>{
  // })
// }

onsubmit(){
this.formgrou=new FormGroup({
  'emailFormContro':new FormControl
})   
  }
  
  ///check if there is credentials are correct or not if correct then allow user to login else throw massage
loginavigate(email,password){

  this.servicelogin.checkUser(email,password).subscribe((res:any)=>{
    console.log('login data******',res);
   
    let count =0;
      if(email == res.first && password ==res. last)
      {
        localStorage.setItem('email', email);
        localStorage.setItem('password',password);
        this.router.navigate(['menucard']); 
        count++;
      }
    
    if(count==0)
    {
     this.snack.open('User does not exits', 'close', {
      duration: 4 * 1000,
    });
  }
})
  }


}


