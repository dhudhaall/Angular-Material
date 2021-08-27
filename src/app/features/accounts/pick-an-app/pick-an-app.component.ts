import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-pick-an-app',
  templateUrl: './pick-an-app.component.html',
  styleUrls: ['./pick-an-app.component.scss']
})
export class PickAnAppComponent implements OnInit {
  
  apps = [
    { name: 'Scan and Ship', id: 1, price: 200, photo: '/assets/images/barcode.svg', linkedId: 5, dependentAppId:null, isSelected: false },
    { name: 'Bleed Report', id: 2, price: 250, photo: '/assets/images/syringe.svg', linkedId: null, dependentAppId:null, isSelected: false },
    { name: 'My Listing', id: 3, price: 100, photo: '/assets/images/barcode.svg', linkedId: 6 , dependentAppId:null, isSelected: false},
    { name: 'Shipment History', id: 4, price: 200, photo: '/assets/images/syringe.svg', linkedId: 8, dependentAppId:null , isSelected: false},
    { name: 'Module 5', id: 5, price: 200, photo: '/assets/images/barcode.svg', linkedId: null, dependentAppId:1, isSelected: false },
    { name: 'Module 6', id: 6, price: 200, photo: '/assets/images/syringe.svg', linkedId: null , dependentAppId:3, isSelected: false},
    { name: 'Module 7', id: 7, price: 200, photo: '/assets/images/barcode.svg', linkedId: null , dependentAppId:null, isSelected: false},
    { name: 'Module 8', id: 8, price: 200, photo: '/assets/images/syringe.svg', linkedId: null, dependentAppId:4 , isSelected: false},
    { name: 'Module 9', id: 9, price: 200, photo: '/assets/images/barcode.svg', linkedId: null, dependentAppId:null, isSelected: false },
  ];

  selectedApps: any[] = [];
  totalPrice: number = 0;
  constructor( private formBuilder: FormBuilder) {
    
  }
 
  ngOnInit(): void {
  }

  selectApp(e: any) {
   
    if (this.selectedApps.length === 0) {
      e.isSelected = true;
      this.selectedApps.push(e);
      this.selectLinkedApp(e);
      
      
    } else {
      let result = this.selectedApps.find(app => { return app.id === e.id });
      if (result) {
        e.isSelected = false;
        this.selectedApps = this.selectedApps.filter(data => { return data.id !== e.id });
        this.removeDependentApp(e);
        
      } else {
        e.isSelected = true;
        this.selectedApps.push(e);
        this.selectLinkedApp(e);
        
      }
             
    }

    console.log('data', this.selectedApps);
    this.calculatePrice();
  }


  selectLinkedApp(e:any) {
    
      if (e.linkedId !== null){
                  
        let linked: any = this.apps.find((data: any) => { return data.id === e.linkedId; });
        if (linked.isSelected) {
          return;
        }
        linked.isSelected = true;
        this.selectedApps.push(linked);
        
      }
  }

  removeDependentApp(e: any) {
    if (e.dependentAppId !== null) {
      let dependentApp: any = this.selectedApps.find((data: any) => { return data.id === e.dependentAppId; });
      if (dependentApp?.isSelected) {
        dependentApp.isSelected = false;
        this.selectedApps = this.selectedApps.filter(data =>{ return data.id !== dependentApp.id});
          return;
        }
    }
  }


  calculatePrice() {
    this.totalPrice = 0;
    this.selectedApps.forEach(app => {
      this.totalPrice = this.totalPrice + app.price;
    })
  }

}
