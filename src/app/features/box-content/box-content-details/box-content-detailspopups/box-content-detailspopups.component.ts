import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-box-content-detailspopups',
  templateUrl: './box-content-detailspopups.component.html',
  styleUrls: ['./box-content-detailspopups.component.scss']
})
export class BoxContentDetailspopupsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
skipModal(){
    this.dialog.closeAll()
  }
}
