import { CEcecutivesComponent } from './c-ececutives/c-ececutives.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Front-End/Components/Models/home/home.component';
import { ExecutiveLoginComponent } from './Front-End/Executives/executive-login/executive-login.component';
import { RegistrationDashboardComponent } from './Front-End/registration-dashboard/registration-dashboard.component';
import { ExecutivelistComponent } from './executivelist/executivelist.component';

const routes: Routes = [ 
  {path:'',component:HomeComponent},
  {path:'app-executive-login',component:ExecutiveLoginComponent},
  {path:'registratioin-dashboard',component:RegistrationDashboardComponent},
  {path:'list',component:ListComponent},
  {path:'executive-list',component:ExecutivelistComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admin',component:AdminComponent},
  {path:'new-executives-registration-form',component:CEcecutivesComponent}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
