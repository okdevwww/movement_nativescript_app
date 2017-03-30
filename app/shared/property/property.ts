
export class Property {
  name: string;
  buildingSize: number;
  units: number;
  collectionZones: number;
  dropPoints: number;
  collectionType: string;

  current_diversion() {
    return 1;
  }
}
