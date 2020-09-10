export type User = {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
} | null;

export type Section = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  large: boolean;
};

export type ProductItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type CartItem = {
  productItem: ProductItem;
  quantity: number;
};

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: ProductItem[];
};
