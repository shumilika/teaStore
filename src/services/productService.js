import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/fireBaseConfig";


export const addToCart = async (userId, product) => {
    const productIdWithSize = `${product.id}_${product.size}`;
  const cartItemRef = doc(db, "users", userId, "cart", productIdWithSize);

  const existingItem = await getDoc(cartItemRef);

  let newQuantity = product.quantity;

  if (existingItem.exists()) {
    const existingData = existingItem.data();
    newQuantity += existingData.quantity || 0;
  }


  await setDoc(cartItemRef, {
    id:product.id,
    quantity: newQuantity,
    size: product.size,
    title: product.title,
    price: product.price,
    image: product.image,
    type: product.type, 
  }, { merge: true });


};

export const addToFavorites = async (userId, product) => {
  const cartItemRef = doc(db, "users", userId, "favorites", product.id);

//   const existingItem = await getDoc(cartItemRef);

//   let newQuantity = product.quantity;

//   if (existingItem.exists()) {
//     const existingData = existingItem.data();
//     newQuantity += existingData.quantity || 0;
//   }


  await setDoc(cartItemRef, {
    id:product.id,
    size: product.size,
    title: product.title,
    price: product.price,
    image: product.image,
    type: product.type, 
  }, { merge: true });


};