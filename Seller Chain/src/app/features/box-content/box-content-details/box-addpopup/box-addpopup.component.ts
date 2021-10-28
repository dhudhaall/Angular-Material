import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-box-addpopup',
  templateUrl: './box-addpopup.component.html',
  styleUrls: ['./box-addpopup.component.scss'],
})
export class BoxAddpopupComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  skipModal() {
    this.dialog.closeAll();
  }
  addBoxes(number: string) {
    this.dialog.closeAll();
  }
}
