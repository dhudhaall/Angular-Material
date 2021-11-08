import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoxSetupComponent } from '../../box-content-details/box-setup/box-setup.component';
@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.scss']
})
export class ContentMainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  boxsetuppopup() {
    const dialogRef = this.dialog.open(BoxSetupComponent);
  }
}
