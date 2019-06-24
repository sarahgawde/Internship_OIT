import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DomainComponent } from './domain/domain.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PathComponent } from './path/path.component';
import { ProfileComponent } from './profile/profile.component';
import {MyskillsComponent} from './myskills/myskills.component';
import { SignupComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},  
  { path: 'domain', component: DomainComponent},
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'editor', component:  EditProfileComponent},
  { path: 'path', component:  PathComponent},
  { path: 'profile', component:  ProfileComponent},
  { path: 'myskills', component: MyskillsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } 
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
