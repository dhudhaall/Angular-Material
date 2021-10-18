import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-mani-fest-popup',
  templateUrl: './mani-fest-popup.component.html',
  styleUrls: ['./mani-fest-popup.component.scss']
})
export class ManiFestPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  

  ngOnInit(): void {
  }
skipModal(){
    this.dialog.closeAll()
  }
}
