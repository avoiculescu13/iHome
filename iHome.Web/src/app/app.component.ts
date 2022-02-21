import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './model/user';
import { LoginService } from './services/LoginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iHome.Web';

  constructor(private loginService: LoginService,
              private route: Router) {

  }
  ngOnInit(): void {
  }

  get isLoggedIn(): boolean{
    return this.loginService.getSnapshotCurrentUser() !== null;
  }

  get currentUserName(): string{
    return this.loginService.getSnapshotCurrentUser()?.name;
  }

  onLogout(){
    this.loginService.logout().subscribe({
      next: s => {
         this.route.navigate(['/login']); 
      }
    })
  }
}
