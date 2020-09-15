export type User = {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
  cart: CartItem[];
} | null;

export type Section = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  large: boolean;
};

export type ProductItem = {
  id: string;
  name: string;
  imageUrl: string;
  collectionId: string;
  price: number;
  preview: boolean;
};

export type CartItem = {
  productItem: ProductItem;
  quantity: number;
};

export type Collection = {
  id: string;
  title: string;
  routeName: string;
  imageUrl: string;
  large: boolean;
};
