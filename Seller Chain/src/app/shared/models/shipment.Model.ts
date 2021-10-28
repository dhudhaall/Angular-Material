export interface Shipment {
  id:string,
  name: string;
  marketPlace: string;
  lastModified: string;
  destination: string;
  totalWeight: string;
  shipped: string;
  received: string;
  label: string;
  shippingTier: string;
  status: string;
}