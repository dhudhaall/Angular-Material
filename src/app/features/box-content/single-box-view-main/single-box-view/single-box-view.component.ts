import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoxContentDetailspopupsComponent } from '../../box-content-details/box-content-detailspopups/box-content-detailspopups.component';

@Component({
  selector: 'app-single-box-view',
  templateUrl: './single-box-view.component.html',
  styleUrls: ['./single-box-view.component.scss']
})
export class SingleBoxViewComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  productList: any[] = [
    {
      id: 1,
      name: 'item 1',
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
      name: 'item 2',
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
      name: 'item 3',
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
  ngOnInit(): void { }

  saplitpopup() {
    const dialogRef = this.dialog.open(BoxContentDetailspopupsComponent);
  }

}

