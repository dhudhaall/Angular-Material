import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoxContentDetailspopupsComponent } from '../box-content-detailspopups/box-content-detailspopups.component';
import { WarningPopupComponent } from '../warning-popup/warning-popup.component';


@Component({
  selector: 'app-box-content-details-main',
  templateUrl: './box-content-details-main.component.html',
  styleUrls: ['./box-content-details-main.component.scss']
})
export class BoxContentDetailsMainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  saplitpopup() {
    const dialogRef = this.dialog.open(BoxContentDetailspopupsComponent);

  }
  warningpopup() {
    const dialogRef = this.dialog.open(WarningPopupComponent);

  }
}
