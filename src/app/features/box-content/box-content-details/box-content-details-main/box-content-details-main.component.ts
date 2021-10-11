import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  productList:any[]=[
    {
      id:1,
      asin:'0516882239',
      sku:'0516882239-Useditem-FBA',
      fnsku:'B00RN08585',
      quantity:23,
      remaining_quantity:23,
      required_labeling:true
    },
    {
      id:2,
      asin:'0516882239',
      sku:'0516882239-Useditem-FBA',
      fnsku:'B00RN08585',
      quantity:23,
      remaining_quantity:23,
      required_labeling:true
    },
    {
      id:3,
      asin:'0516882239',
      sku:'0516882239-Useditem-FBA',
      fnsku:'B00RN08585',
      quantity:23,
      remaining_quantity:23,
      required_labeling:true
    },
  ];

  chosenProducts:any[]=[]
  saplitpopup() {
    const dialogRef = this.dialog.open(BoxContentDetailspopupsComponent);

  }
  warningpopup() {
    const dialogRef = this.dialog.open(WarningPopupComponent);

  }
  drop(event:any){
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
