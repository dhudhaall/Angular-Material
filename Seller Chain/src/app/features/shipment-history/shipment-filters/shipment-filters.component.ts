import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-filters',
  templateUrl: './shipment-filters.component.html',
  styleUrls: ['./shipment-filters.component.scss']
})
export class ShipmentFiltersComponent implements OnInit {

  div1 = true;
  div2 = false;
  div3 = false;
  div4 = false;
  constructor() { }

  ngOnInit(): void {
  }

  showHideSection(num:number){
    switch (num) {
      case 1:{
        this.div1 = true;
        this.div2 = false;
        this.div3 = false;
        this.div4 = false;
        break;
      }
      case 2:{
        this.div2 = true;
        this.div1 = false;
        this.div3 = false;
        this.div4 = false;
        break;
      }
      case 3:{
        this.div3 = true;
        this.div1 = false;
        this.div2 = false;
        this.div4 = false;
        break;
      }
      case 4:{
        this.div4 = true;
         this.div1 = false;
        this.div2 = false;
        this.div3 = false;
        break;
      }
    }
  }

}
