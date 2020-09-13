import { firestore } from "firebase/firebase.utils";
import { Collection, ProductItem } from "types";

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
