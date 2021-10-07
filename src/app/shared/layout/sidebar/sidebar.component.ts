import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleMenu = new EventEmitter();
  @ViewChild('otherPotion') otherPotion: any;
  max_height: number = 0

  public routeLinks = [
    { link: "dashboard", name: "Dashboard", icon: "dashboard" },
    { link: "mylisting", name: "My Listing", icon: "format_list_bulleted" },
    { link: "shipmentHistory", name: "Shipment History", icon: "schedule" },
    {
      link: "/scanship/dashboard", name: "Scan + Ship", icon: "qr_code",
      children: [
        { link: "scanship/addItem", name: "Add Item", icon: "add" },
        { link: "scanship/bulkupload", name: "Bulk Uploads", icon: "local_shipping" },
        { link: "scanship/scanShip-appSettings", name: "App Settings", icon: "settings" },
      ]
    },
    {
      link: "#", name: "Bleed Report", icon: "bloodtype",
      children: [
        { link: "bleed-settings", name: "App Settings", icon: "settings" },
      ]
    },
    { link: "appSettings", name: "Settings", icon: "settings" },
    {
      link: "#", name: "Inventory", icon: "inventory",
      children: [
        { link: "item", name: "Item cost Tool", icon: "price_change" },
        { link: "sku-link-manager", name: "Sku Link Manager", icon: "link" },
      ]
    },
    {
      link: "boxcontent/dashboard", name: "Content Dashboard", icon: "inventory",
      children: [
        { link: "boxcontent/contentdetail", name: "Content Detail", icon: "price_change" },
        { link: "sku-link-manager", name: "Sku Link Manager", icon: "link" },
      ]
    },



  ];


  constructor() { }
  height: string = '100%';
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.max_height = this.otherPotion.nativeElement.offsetHeight;
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
    const top: number = event.edges.top as number || 0;
    const height = (this.otherPotion.nativeElement.offsetHeight + top)
    height < this.max_height ? this.height = height + 'px' : this.height = this.max_height + 'px'
  }

}
