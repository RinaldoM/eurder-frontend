export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  amountOfStock: number;
  stockUrgency: keyof typeof StockUrgency;
}

export enum StockUrgency {
  STOCK_LOW = 'LOW',
  STOCK_MEDIUM = 'MEDIUM',
  STOCK_HIGH = 'HIGH'
}
