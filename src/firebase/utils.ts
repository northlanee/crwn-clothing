import { firestore } from "./firebase.utils";

export const addCollection = async <T>(
  collectionName: string,
  data: Array<T>
) => {
  const ref: any = firestore.collection(collectionName);
  data.forEach((item) => ref.add(item));
};
