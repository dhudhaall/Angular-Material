import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-empty-popup',
  templateUrl: './add-empty-popup.component.html',
  styleUrls: ['./add-empty-popup.component.scss']
})
export class AddEmptyPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  skipModal() {
    this.dialog.closeAll()
  }
  // addBoxes(number: string) {
  //   this.dialog.closeAll();
  // }
}
