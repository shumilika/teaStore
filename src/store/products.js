
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {db} from '../config/fireBaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite';


const initialState = {
    productsList: [],
};



export const fetchProductList = createAsyncThunk('/shop', async () => {

	try {
		const response = await getDocs(collection(db, 'products'))
		return response.docs.map(doc => doc.data())
		
        
	}
	catch (error) {}
	return []
})





export const products = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		// setIsLogin: (state, action)=>{
		// 	state.isLogin = action.payload
		// },
		
	},
	extraReducers(builder) {
		builder		
			.addCase(fetchProductList.fulfilled, (state, action)=>({...state, productsList:action.payload}))
			
	},
})

export const {  } = products.actions
export default products.reducer

