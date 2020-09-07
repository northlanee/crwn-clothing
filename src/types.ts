export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
};

export type appUser = {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
};
