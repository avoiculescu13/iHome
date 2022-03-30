import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  header: string,
  message: string,
  yesText: string,
  noText: string
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  header: string;
  message: string;
  yesText: string = "Yes";
  noText: string = "No";

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.header = data.header;
    this.message = data.message;
    this.yesText = data.yesText;
    this.noText = data.noText;
  }

  ngOnInit(): void {
  }
}
