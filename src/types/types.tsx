import { StringLiteralLike } from "typescript";

export interface ICategory {
  name: string;
  slug: string;
  _id: string;
}

export interface ICreatedBy{
  name: string;
  role: string;
  _id: string;
}

export interface IItem {
  category: ICategory;
  createdAt: string;
  createdBy: ICreatedBy;
  description: string;
  image: string;
  price: number;
  slug: string;
  title: string;
  updatedAt: string;
  _id: string;
}
