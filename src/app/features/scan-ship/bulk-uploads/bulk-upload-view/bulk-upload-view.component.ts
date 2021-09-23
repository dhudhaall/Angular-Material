import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubmitBulkUploadPopupComponent } from '../submit-bulk-upload-popup/submit-bulk-upload-popup.component'
import { CheckdublicatitemComponent } from '../checkdublicatitem/checkdublicatitem.component'
@Component({
  selector: 'app-bulk-upload-view',
  templateUrl: './bulk-upload-view.component.html',
  styleUrls: ['./bulk-upload-view.component.scss']
})
export class BulkUploadViewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  submitDialog() {
    const dialogRef = this.dialog.open(SubmitBulkUploadPopupComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  dublicatitemspopup() {
    const dialogRef = this.dialog.open(CheckdublicatitemComponent);


  }
}
