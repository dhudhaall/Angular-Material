import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateNewSellerOfferDialogComponent } from '../create-new-seller-offer-dialog/create-new-seller-offer-dialog.component';

@Component({
  selector: 'app-new-add-item',
  templateUrl: './new-add-item.component.html',
  styleUrls: ['./new-add-item.component.scss']
})
export class NewAddItemComponent implements OnInit {

  constructor(public dialog: MatDialog ) {
    
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreateNewSellerOfferDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }



}
