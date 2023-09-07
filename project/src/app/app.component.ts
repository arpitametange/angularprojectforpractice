import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  
  
}
