import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public message: string = "Use this app whenever you need to manage in-house activities.";

  constructor() { }

  ngOnInit(): void {
  }

}
