import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-revision-add-dialog',
  templateUrl: './technical-revision-add-dialog.component.html',
  styleUrls: ['./technical-revision-add-dialog.component.css']
})
export class TechnicalRevisionAddDialogComponent implements OnInit {

  notes: string;
  price: number;
  date: Date;
  kilometers: number;
  garage: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSave(): void{
  }

}
