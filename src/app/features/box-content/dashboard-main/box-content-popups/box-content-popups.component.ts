import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmptyBoxPopupComponent } from '../add-empty-box-popup/add-empty-box-popup.component';
@Component({
  selector: 'app-box-content-popups',
  templateUrl: './box-content-popups.component.html',
  styleUrls: ['./box-content-popups.component.scss']
})
export class BoxContentPopupsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  addEmptyBoxDimension:boolean=false;
  ngOnInit(): void {
  }
  addemptypopup() {
    this.addEmptyBoxDimension=true;

  }
  skipModal(){
    this.dialog.closeAll()
  }
}
