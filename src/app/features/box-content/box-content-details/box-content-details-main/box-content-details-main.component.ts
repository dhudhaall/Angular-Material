import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoxAddpopupComponent } from '../box-addpopup/box-addpopup.component';
import { BoxContentDetailspopupsComponent } from '../box-content-detailspopups/box-content-detailspopups.component';
import { WarningPopupComponent } from '../warning-popup/warning-popup.component';

@Component({
  selector: 'app-box-content-details-main',
  templateUrl: './box-content-details-main.component.html',
  styleUrls: ['./box-content-details-main.component.scss'],
})
export class BoxContentDetailsMainComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  productList: any[] = [
    {
      id: 1,
      asin: '0516882239',
      sku: '0516882239-Useditem-FBA',
      fnsku: 'B00RN08585',
      quantity: 23,
      remaining_quantity: 23,
      required_labeling: true,
      item_number: 1,
      weight_lb: 2.5,
      weight_kg: 4,
    },
    {
      id: 2,
      asin: '0516882239',
      sku: '0516882239-Useditem-FBA',
      fnsku: 'B00RN08585',
      quantity: 23,
      remaining_quantity: 23,
      required_labeling: true,
      item_number: 2,
      weight_lb: 2.5,
      weight_kg: 4,
    },
    {
      id: 3,
      asin: '0516882239',
      sku: '0516882239-Useditem-FBA',
      fnsku: 'B00RN08585',
      quantity: 23,
      remaining_quantity: 23,
      required_labeling: true,
      item_number: 3,
      weight_lb: 2.5,
      weight_kg: 4,
    },
  ];

  chosenProducts: any[] = [];
  saplitpopup() {
    const dialogRef = this.dialog.open(BoxContentDetailspopupsComponent);
  }
  warningpopup() {
    const dialogRef = this.dialog.open(WarningPopupComponent);
  }
  addboxgpopup() {
    const dialogRef = this.dialog.open(BoxAddpopupComponent);
    dialogRef.afterClosed().subscribe((numberOfBoxes) => {
      for (let i = 0; i < numberOfBoxes; i++) {
        this.chosenProducts.push({});
      }
    });
  }

  drop(event: any) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  copyInBox($event: CdkDragDrop<any>, index: any) {
    const c_index = $event.currentIndex;
    this.productList.splice(c_index, 1);
    let chosenBox = this.chosenProducts[index];
    // console.log('he');
    // if (chosenBox.id) {
    //create attached Products list if not created
    !chosenBox['attachedProducts'] ? (chosenBox['attachedProducts'] = []) : '';

    chosenBox.attachedProducts.push(chosenBox);
    const newItem = $event.item.data;
    chosenBox = {
      ...chosenBox,
      ...newItem,
      weight_kg: (chosenBox.weight_kg || 0) + newItem.weight_kg,
      weight_lb: (chosenBox.weight_lb || 0) + newItem.weight_lb,
    };
    this.chosenProducts[index] = chosenBox;
    // } else {
    //   this.chosenProducts[index] = $event.item.data;
    // }
    console.log(this.chosenProducts[index]);
  }
}
