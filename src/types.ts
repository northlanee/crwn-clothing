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

export type appUser = {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
};
