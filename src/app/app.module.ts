import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './Front-End/Components/Models/home/home.component';
import { ServicesComponent } from './Front-End/Components/Models/services/services.component';
import { NewsComponent } from './Front-End/Components/Models/news/news.component';
import { TeamComponent } from './Front-End/Components/Models/team/team.component';
import { ProjectsComponent } from './Front-End/Components/Models/projects/projects.component';
import { ContactComponent } from './Front-End/Components/Models/contact/contact.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NextAppComponent } from './Front-End/Components/next-app/next-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { ActivitiesComponent } from './activities/activities.component';
import { NnewsComponent } from './nnews/nnews.component';
import { NeventsComponent } from './nevents/nevents.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RFormComponent } from './Front-End/Executives/rform/rform.component';
import { ExecutiveLoginComponent } from './Front-End/Executives/executive-login/executive-login.component';
import { ExecutiveServiceService } from './service/executive-service.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AuthService } from './service/auth.service';
import { RegistrationDashboardComponent } from './Front-End/registration-dashboard/registration-dashboard.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorageModule,StorageBucket } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ListComponent } from './list/list.component';
import { ExecutivelistComponent } from './executivelist/executivelist.component';
import { AdminComponent } from './admin/admin.component';
import { CEcecutivesComponent } from './c-ececutives/c-ececutives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    NewsComponent,
    TeamComponent,
    ProjectsComponent,
    ContactComponent,
    NextAppComponent,
    ActivitiesComponent,
    NnewsComponent,
    NeventsComponent,
    RegisterFormComponent,
    RFormComponent,
    ExecutiveLoginComponent,
    RegistrationDashboardComponent,
    AdminloginComponent,
    ListComponent,
    ExecutivelistComponent,
    AdminComponent,
    CEcecutivesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule

  ],
  providers: [ExecutiveServiceService,AuthService,{ provide: StorageBucket, useValue: 'gs://user-dataregister.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
