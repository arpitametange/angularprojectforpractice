import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router,private snack:MatSnackBar) {
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  
    if (localStorage.getItem('email') != null) {
      return true;
    } else {
      this.route.navigate(['/login'])
    this.snack.open('please enter valid login information','',{
      duration:2000
    })
    }
  }
  
}
