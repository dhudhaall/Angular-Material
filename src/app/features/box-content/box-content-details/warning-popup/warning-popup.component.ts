import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-warning-popup',
  templateUrl: './warning-popup.component.html',
  styleUrls: ['./warning-popup.component.scss']
})
export class WarningPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
skipModal(){
    this.dialog.closeAll()
  }
}
