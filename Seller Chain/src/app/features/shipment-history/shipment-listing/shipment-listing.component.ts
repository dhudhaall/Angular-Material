import { Component, OnInit } from '@angular/core';
import { Shipment } from 'src/app/shared/models/shipment.Model';

/*///////Dummy Shipment Data/////////*/

const ELEMENT_DATA: Shipment[] = [
  { id: 'FA345jkh34', name: 'Practise Run ', marketPlace: 'Seller Chain', lastModified: '10/08/2021', destination: 'EWR9 Carteret NJ, 0034-432', totalWeight:'48.23 lbs', shipped: '3 | 102', received: '0 | 0', label: 'seller', shippingTier: 'standard', status: 'working' },
  { id: 'FA345jkh34', name: 'Practise Run ', marketPlace: 'Seller Chain', lastModified: '10/08/2021', destination: 'EWR9 Carteret NJ, 0034-432', totalWeight:'48.23 lbs', shipped: '3 | 102', received: '0 | 0', label: 'seller', shippingTier: 'standard', status: 'working' },
  { id: 'FA345jkh34', name: 'Practise Run ', marketPlace: 'Seller Chain', lastModified: '10/08/2021', destination: 'EWR9 Carteret NJ, 0034-432', totalWeight:'48.23 lbs', shipped: '3 | 102', received: '0 | 0', label: 'seller', shippingTier: 'standard', status: 'working' },
  { id: 'FA345jkh34', name: 'Practise Run', marketPlace: 'Seller Chain', lastModified: '10/08/2021', destination: 'EWR9 Carteret NJ, 0034-432', totalWeight:'48.23 lbs', shipped: '3 | 102', received: '0 | 0', label: 'seller', shippingTier: 'standard', status: 'working' },
  { id: 'FA345jkh34', name: 'Practise Run', marketPlace: 'Seller Chain', lastModified: '10/08/2021', destination: 'EWR9 Carteret NJ, 0034-432', totalWeight:'48.23 lbs', shipped: '3 | 102', received: '0 | 0', label: 'seller', shippingTier: 'standard', status: 'working' },
  { id: 'FA345jkh34', name: 'Practise Run ', marketPlace: 'Seller Chain', lastModified: '10/08/2021', destination: 'EWR9 Carteret NJ, 0034-432', totalWeight:'48.23 lbs', shipped: '3 | 102', received: '0 | 0', label: 'seller', shippingTier: 'standard', status: 'working' },
  { id: 'FA345jkh34', name: 'Practise Run', marketPlace: 'Seller Chain', lastModified: '10/08/2021', destination: 'EWR9 Carteret NJ, 0034-432', totalWeight:'48.23 lbs', shipped: '3 | 102', received: '0 | 0', label: 'seller', shippingTier: 'standard', status: 'working' },
  { id: 'FA345jkh34', name: 'Practise Run', marketPlace: 'Seller Chain', lastModified: '10/08/2021', destination: 'EWR9 Carteret NJ, 0034-432', totalWeight:'48.23 lbs', shipped: '3 | 102', received: '0 | 0', label: 'seller', shippingTier: 'standard', status: 'working' },

];

@Component({
  selector: 'app-shipment-listing',
  templateUrl: './shipment-listing.component.html',
  styleUrls: ['./shipment-listing.component.scss']
})
export class ShipmentListingComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'marketPlace', 'lastModified', 'destination', 'totalWeight', 'shipped', 'received','label', 'shippingTier', 'status' ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log("search");
 }

}
