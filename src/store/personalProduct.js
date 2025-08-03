
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../config/fireBaseConfig'
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';


const initialState = {
    cartList: [],
    favoritesList: [],
    isCartEmpty: true,
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
            id: doc.id,
            image: imageUrl,
          };
        })
      );

     return {
        cartList: itemsWithImages,
        isEmpty: itemsWithImages.length === 0,
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const fetchFavoritesList = createAsyncThunk('/favorites', async (userId) => {

    try {
        const cartRef = collection(db, "users", userId, "favorites");
        const response = await getDocs(cartRef);

        return response.docs.map(doc => ({
        id: doc.id,        
        ...doc.data()
        }));
    }
    catch (error) {}
    return []
})


export const personalProduct = createSlice({
    name: 'personalProduct',
    initialState,
    extraReducers(builder) {
        builder		
            .addCase(fethCartList.fulfilled, (state, action)=>{
              state.cartList=action.payload.cartList
              state.isCartEmpty=action.payload.isEmpty
            })
            .addCase(fetchFavoritesList.fulfilled, (state, action)=>{ state.favoritesList=action.payload})   
    },
})

export const {  } = personalProduct.actions
export default personalProduct.reducer

