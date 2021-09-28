import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmployeesComponent } from './employees/employees.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SportsComponent } from './sports/sports.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, WavesModule, InputsModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AboutusComponent,
    EmployeesComponent,
    FeedbackComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FlexLayoutModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    ModalModule, WavesModule, InputsModule, ButtonsModule
    
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
