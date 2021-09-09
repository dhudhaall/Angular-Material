import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-new-add-item',
  templateUrl: './new-add-item.component.html',
  styleUrls: ['./new-add-item.component.scss']
})
export class NewAddItemComponent implements OnInit {

  constructor(public dialog: MatDialog ) {
    
  }

  ngOnInit(): void {
  }

  


}
