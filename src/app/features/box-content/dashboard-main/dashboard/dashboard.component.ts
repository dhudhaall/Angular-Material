import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoxContentPopupsComponent } from '../box-content-popups/box-content-popups.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  boxedpopup() {
    const dialogRef = this.dialog.open(BoxContentPopupsComponent);

  }
}
