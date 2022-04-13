import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './core/services/LoginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iHome.Web';
  isMessagePanelVisible: boolean = false;

  constructor(private loginService: LoginService,
    private route: Router) {

  }
  ngOnInit(): void {
  }

  get isLoggedIn(): boolean {
    return this.loginService.getSnapshotCurrentUser() !== null;
  }

  get currentUserName(): string {
    return this.loginService.getSnapshotCurrentUser()?.userName;
  }

  onLogout() {

    this.loginService.logout().subscribe({
      next: s => {
        this.route.navigate([{ outlets: { notifications: null, primary: ['login'], } }]);
      }
    })
  }

  showUserActivity() {

    if (this.isMessagePanelVisible) {
      this.isMessagePanelVisible = false;
      this.route.navigate([{ outlets: { notifications: null } }])
    } else {
      this.isMessagePanelVisible = true;
      this.route.navigate([{ outlets: { notifications: ['notifications'] } }])
    }

  }
}
