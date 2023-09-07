import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenucardComponent } from './menucard/menucard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AddtocardComponent } from './addtocard/addtocard.component';
import { AuthGuard } from './auth.guard';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  
    { path:'',redirectTo:'home', pathMatch: 'full'}, // localhost:4200
    {path: 'home', component: HomeComponent},
    {path:'menucard',canActivate:[AuthGuard],component:MenucardComponent},
    {path:'login',component:LoginpageComponent},
    {path:'signup',component:SignupComponent},
    {path:'search',component:SearchComponent},
    {path:'payment',component:PaymentComponent},
    // {path :'menucard/:label', component:MenucardComponent},

{path:'addtocard',component:AddtocardComponent},

    { path: '', component: MenucardComponent, children: [ // localhost:4200/product
    
    {path: 'search', component: SearchComponent}
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
