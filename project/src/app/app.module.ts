import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatButtonModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, MatCheckboxModule, MatNativeDateModule, MatButtonToggleModule, MatStepperModule, MatBadgeModule, MatIconModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { MenucardComponent } from './menucard/menucard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AddtocardComponent } from './addtocard/addtocard.component';
import { FilterPipe } from './filter.pipe';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    MenucardComponent,
    LoginpageComponent,
    SignupComponent,
    HomeComponent,
    SearchComponent,
    AddtocardComponent,
    FilterPipe,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginpageComponent,SignupComponent]
})
export class AppModule { }
