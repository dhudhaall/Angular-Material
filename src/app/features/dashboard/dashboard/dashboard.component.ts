import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: number;
  position: string;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'PHX6 - MIX 3/4/2019 8:10 PM', name: 1|50, weight: 1|48, symbol: 'H'},
  {position:'PHX6 - MIX 3/4/2019 8:10 PM', name: 1|50, weight: 1|48, symbol: 'He'},
  {position:'PHX6 - MIX 3/4/2019 8:10 PM', name: 1|50, weight: 6.941, symbol: 'Li'},
  {position: 'PHX6 - MIX 3/4/2019 8:10 PM', name:1|50, weight: 9.0122, symbol: 'Be'},
  {position: 'PHX6 - MIX 3/4/2019 8:10 PM', name: 1|50, weight: 10.811, symbol: 'B'},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  constructor( ) {

  }

  ngOnInit(): void {
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}


