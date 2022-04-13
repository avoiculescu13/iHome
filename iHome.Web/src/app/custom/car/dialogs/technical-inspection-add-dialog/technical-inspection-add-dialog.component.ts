import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-inspection-add-dialog',
  templateUrl: './technical-inspection-add-dialog.component.html',
  styleUrls: ['./technical-inspection-add-dialog.component.css']
})
export class TechnicalInspectionAddDialogComponent implements OnInit {

  passed: boolean;
  kilometers: number;
  notes: string;
  garage: string;
  price: number;
  date: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onSave(): void{
  }

}
