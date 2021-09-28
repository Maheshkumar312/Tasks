import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { SportsComponent } from './sports/sports.component';


const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'about',component: AboutusComponent},  
  {path:'employees',component:  EmployeesComponent},
  {path:'feedback',component:  FeedbackComponent},
    {path:'sports',component: SportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
