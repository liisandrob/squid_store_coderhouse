import { db } from 'db/dbConection';
import { collection, query, where, getDocs, doc, getDoc, setDoc, writeBatch, increment } from "firebase/firestore";

const getItemById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) return { id, ...docSnap.data() }
  else return false;
}

const uploadStockAfterBuy = async (data) => {
  const { items } = data;
  const batch = writeBatch(db);
  items.forEach(item => {
    const itemRef = doc(db, "products", item.id);
    batch.update(itemRef, {
      stock: increment(-item.quantity)
    })
  });
  await batch.commit();
}

const createOrder = async (data) => {
  const newOrderRef = doc(collection(db, "orders"));
  await setDoc(newOrderRef, data);
  return newOrderRef
}

const getList = async (category) => {
  let querySnapshot;
  if(category) {
    const q = query(collection(db, "products"), where("category", "==", category));
    querySnapshot = await getDocs(q);
  }
  else querySnapshot = await getDocs(collection(db, "products"));

  const dataFromFirebase = querySnapshot.docs.map(item => ({
    id:item.id,
    ...item.data()
  }));

  return dataFromFirebase;

}

export {getList, getItemById, createOrder, uploadStockAfterBuy};