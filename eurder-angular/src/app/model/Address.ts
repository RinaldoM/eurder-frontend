export interface Address{
  streetName: string;
  houseNumber: string;
  postalCode: string;
  country: Country;
}

export enum Country{
  BELGIUM = 'BELGIUM',
  FRANCE='FRANCE',
  GERMANY = "GERMANY"
}
