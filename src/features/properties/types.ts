export enum PropertyType {
  Residential = "Residential",
  Luxury = "Luxury",
  Commercial = "Commercial",
  Investment = "Investment",
}

export interface Property {
  id: number;
  name: string;
  category: string;
  price: number;
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  date: Date;
  image: string;
  description: string;
  units?: number;
  tags: string[];
}
