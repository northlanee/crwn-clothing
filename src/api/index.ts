import { firestore } from "firebase/firebase.utils";
import { Collection, ProductItem, CartItem } from "types";
import { User } from "firebase";

export const fetchCollections = async () => {
  const collectionsArr: Collection[] = [];
  const collectionsSnapshot = await firestore
    .collection("collections")
    .orderBy("large")
    .get();

  collectionsSnapshot.forEach((collection) =>
    collectionsArr.push({
      id: collection.id,
      ...collection.data(),
    } as Collection)
  );

  return collectionsArr;
};

export const fetchPreviewProducts = async () => {
  const previewProducts: ProductItem[] = [];
  const productsSnapshot = await firestore
    .collection("products")
    .where("preview", "==", true)
    .get();

  productsSnapshot.forEach((product) =>
    previewProducts.push({
      id: product.id,
      ...product.data(),
    } as ProductItem)
  );

  return previewProducts;
};

export const fetchProductsByCollection = async (collectionId: string) => {
  const products: ProductItem[] = [];
  const productsSnapshot = await firestore
    .collection("products")
    .where("collectionId", "==", collectionId)
    .get();

  productsSnapshot.forEach((product) =>
    products.push({
      id: product.id,
      ...product.data(),
    } as ProductItem)
  );

  return products;
};

export const getUserProfileDocument = async (
  user: User,
  displayName?: string | undefined
) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  const name = displayName || user.displayName;

  if (!snapshot.exists) {
    const { email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({ id: user.uid, displayName: name, email, createdAt });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (await userRef.get()).data();
};

const clearCart = async (userId: string) => {
  const cart = firestore.collection(`users/${userId}/cart`).get();
  (await cart).forEach(async (item) => {
    await firestore.doc(`users/${userId}/cart/${item.id}`).delete();
  });
};

export const setCartApi = async (cart: CartItem[], userId: string) => {
  const user = firestore.doc(`users/${userId}`).get();
  if ((await user).exists) {
    await clearCart(userId);
    cart.forEach(
      async (item) =>
        await firestore.collection(`users/${userId}/cart`).add(item)
    );
  }
};

export const getCart = async (userId: string) => {
  const cart: CartItem[] = [];
  const cartSnapshot = await firestore.collection(`users/${userId}/cart`).get();
  cartSnapshot.forEach((item) => cart.push(item.data() as CartItem));
  return cart;
};
