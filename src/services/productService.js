import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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


}

export const deleteCartItem = async (userId, productId) => {
   const cartItemRef = doc(db, "users", userId, "cart", productId);
   await deleteDoc(cartItemRef)
}

export const addToFavorites = async (userId, product) => {
  const itemRef = doc(db, "users", userId, "favorites", product.id);

  await setDoc(itemRef, {
    id:product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  });
}

export const deleteFavoritesItem = async (userId, productId) => {
   const itemRef = doc(db, "users", userId, "favorites", productId);
   await deleteDoc(itemRef)
}

export const updateCartItemQuantity = async (userId, productId, newQuantity) => {
  const cartItemRef = doc(db, 'users', userId, 'cart', productId);
  await updateDoc(cartItemRef, {
    quantity: newQuantity,
  });
};