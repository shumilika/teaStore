
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../config/fireBaseConfig'
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';


const initialState = {
    cartList: [],
    favoritesList: [],
    isCartEmpty: true,
    totalQuantity:0,
    totalCost:0,
};



export const fethCartList = createAsyncThunk(
  'personalProduct/fetchCartList',
  async (userId, thunkAPI) => {
    try {
      const response = await getDocs(collection(db, 'users', userId, 'cart'));

      const storage = getStorage();

      const itemsWithImages = await Promise.all(
        response.docs.map(async (doc) => {
          const data = doc.data();
    
          let imageUrl = '';
          try {
            imageUrl = await getDownloadURL(ref(storage, `img/${data.image}`));
          } catch (err) {
            console.error('Ошибка загрузки фото:', err);
          }

          return {
            ...data,
            item_id: doc.id,
            image: imageUrl,
          };
        })
      );

        const { totalQuantity, totalCost } = itemsWithImages.reduce(
        (acc, item) => {
          acc.totalQuantity += item.quantity || 0;
          acc.totalCost += (item.quantity || 0) * (item.price || 0);
          return acc;
        },
        { totalQuantity: 0, totalCost: 0 }
      );

     return {
        cartList: itemsWithImages,
        isEmpty: itemsWithImages.length === 0,
        totalQuantity,
        totalCost,
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchFavoritesList = createAsyncThunk(
  'personalProduct/fetchFavoritesList',
  async (userId, thunkAPI) => {
    try {
      const response = await getDocs(collection(db, "users", userId, "favorites"))
        
      const storage = getStorage();

      const itemsWithImages = await Promise.all(
        response.docs.map(async (doc) => {
          const data = doc.data();
          let imageUrl = '';
          try {
            imageUrl = await getDownloadURL(ref(storage, `img/${data.image}`));
          } catch (err) {
            console.error('Ошибка загрузки фото:', err);
          }

          return {
            ...data,
            id: doc.id,
            image: imageUrl,
          };
        })
      );

     return {
         itemsWithImages
         
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


export const personalProduct = createSlice({
    name: 'personalProduct',
    initialState,
    extraReducers(builder) {
        builder		
            .addCase(fethCartList.fulfilled, (state, action)=>{
              state.cartList=action.payload.cartList
              state.isCartEmpty=action.payload.isEmpty
              state.totalQuantity = action.payload.totalQuantity
              state.totalCost = action.payload.totalCost
            })
            .addCase(fetchFavoritesList.fulfilled, (state, action)=>{ state.favoritesList=action.payload.itemsWithImages})   
    },
})

export const {  } = personalProduct.actions
export default personalProduct.reducer

