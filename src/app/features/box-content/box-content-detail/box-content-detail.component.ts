import { Component, OnInit } from '@angular/core';
import { BoxSetupComponent } from '../box-content-details/box-setup/box-setup.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-box-content-detail',
  templateUrl: './box-content-detail.component.html',
  styleUrls: ['./box-content-detail.component.scss']
})
export class BoxContentDetailComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  boxsetuppopup() {
    const dialogRef = this.dialog.open(BoxSetupComponent);
  }
}
