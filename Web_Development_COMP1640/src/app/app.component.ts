import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginComponent } from '../app/components/login/login.component'
import { User } from '../app/models/user';
import { EtutoringService } from './etutoring.service';
import { Staff } from './models/staff';
import { Tutor } from './models/tutor';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Web-Development-COMP1640';
  user: User = this.etutoringService.setUser()

  staff: Staff
  tutor: Tutor
  student: Student

  login = null;
  logout = null;

  constructor(private etutoringService: EtutoringService,
    private loginComponent: LoginComponent
  ) {
    
  }
  ngOnInit(): void {

  }
  ngDoCheck() {
    this.user = JSON.parse(sessionStorage.getItem('user'))
    this.showLogin()
  }

  showLogin() {
    if (this.user != null) {
      this.login = null;
      this.logout = 'logout';
    } else {
      this.login = 'login';
      this.logout = null;
    }
  }
  logOut() {
    this.loginComponent.logOut();
  }
  
}