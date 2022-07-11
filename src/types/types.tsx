export interface ICategory {
  name: string;
  id: string;
}

export interface ICreatedBy{
  name: string;
  id: string;
}

export interface Item {
  item: IIteam;
}

export interface IIteam {
  category: ICategory;
  createdAt: string;
  createdBy: ICreatedBy;
  description: string;
  image: string;
  price: number;
  slug: string;
  title: string;
  id: string;
}
