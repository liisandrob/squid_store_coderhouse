import { db } from 'db/dbConection';
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

const fetchFirestoreItemById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return {
      id,
      ...docSnap.data()
    }
  } else {
    return false
  }
}


const fetchFirestore = async (category = false) => {
  let querySnapshot
  if(category) {
    const q = query(collection(db, "products"), where("category", "==", category));
    querySnapshot = await getDocs(q);
  }
  else querySnapshot = await getDocs(collection(db, "products"));

  const dataFromFirebase = querySnapshot.docs.map(item => ({
    id:item.id,
    ...item.data()
  }));

  return dataFromFirebase

}

export {fetchFirestore, fetchFirestoreItemById};