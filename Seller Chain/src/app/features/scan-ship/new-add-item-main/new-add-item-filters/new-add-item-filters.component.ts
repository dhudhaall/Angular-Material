import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewSellerOfferDialogComponent } from '../create-new-seller-offer-dialog/create-new-seller-offer-dialog.component';

@Component({
  selector: 'app-new-add-item-filters',
  templateUrl: './new-add-item-filters.component.html',
  styleUrls: ['./new-add-item-filters.component.scss']
})
export class NewAddItemFiltersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
   openDialog() {
    const dialogRef = this.dialog.open(CreateNewSellerOfferDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
