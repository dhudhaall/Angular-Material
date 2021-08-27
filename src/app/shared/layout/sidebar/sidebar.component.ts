import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 @Input() isExpanded: boolean = false;
  @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: "dashboard", name: "Dashboard", icon: "dashboard" },
    { link: "mylisting", name: "My Listing", icon: "format_list_bulleted" },
    { link: "shipmentHistory", name: "Shipment History", icon: "schedule" },
    { link: "#", name: "Scan + Ship", icon: "qr_code",
      children: [
        { link: "addItem", name: "Add Item", icon: "add" },
        { link: "bulkUpload", name: "Bulk Uploads", icon: "local_shipping" },
        { link: "scanShip-appSettings", name: "App Settings", icon: "settings" },
      ]
    },
    { link: "#", name: "Bleed Report", icon: "bloodtype",
      children: [
        { link: "bleed-settings", name: "App Settings", icon: "settings" },
      ]
    },
    { link: "appSettings", name: "Settings", icon: "settings" },
    { link: "#", name: "Inventory", icon: "inventory",
      children: [
        { link: "item", name: "Item cost Tool", icon: "price_change" },
        { link: "sku-link-manager", name: "Sku Link Manager", icon: "link" },
      ]
    }
    
   
   ];
  
  
  constructor() { } 

  ngOnInit(): void {
  }

}
