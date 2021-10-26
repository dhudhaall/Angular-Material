import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-box-setup',
  templateUrl: './box-setup.component.html',
  styleUrls: ['./box-setup.component.scss']
})
export class BoxSetupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  skipModal() {
    this.dialog.closeAll()
  }
}
