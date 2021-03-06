import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardStaffComponent } from './components/dashboard-staff/dashboard-staff.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListOfTutorsComponent } from './components/list-of-tutors/list-of-tutors.component';
import { TutorDetailComponent } from './components/tutor-detail/tutor-detail.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { ListOfStudentsComponent } from './components/list-of-students/list-of-students.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';


import {StudentsService} from './components/list-of-students/students.service'
import {EtutoringService} from './etutoring.service'


import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';


import { AddClassComponent } from './components/add-class/add-class.component';
import { ListClassComponent } from './components/list-class/list-class.component';
import { DashboardClassComponent } from './components/dashboard-class/dashboard-class.component';

import { MessagesComponent } from './components/messages/messages.component';
import { VideoCallComponent } from './components/video-call/video-call.component';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';

import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SuperStaffComponent } from './components/super-staff/super-staff.component';
import { ListOfStaffComponent } from './components/list-of-staff/list-of-staff.component';



const agoraConfig: AgoraConfig = {
  AppID: '4a34bc8ca1784f468e04c0a07b487f34',
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardStaffComponent,
    ProfileComponent,
    ListOfTutorsComponent,
    TutorDetailComponent,
    TimeTableComponent,
    ListOfStudentsComponent,
    StudentDetailComponent,
    StudentDashboardComponent,
    LoginComponent,
    HomepageComponent,
    AddClassComponent,
    ListClassComponent,
    DashboardClassComponent,
    MessagesComponent,
    VideoCallComponent,
    TutorDashboardComponent,
    AddScheduleComponent,
    ScheduleComponent,
    SuperStaffComponent,
    ListOfStaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    AngularAgoraRtcModule.forRoot(agoraConfig)
  ],
  
  providers: [StudentsService,
    EtutoringService,
    LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
