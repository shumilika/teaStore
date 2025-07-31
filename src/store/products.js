
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../config/fireBaseConfig'
import { collection, getDocs, query, limit } from 'firebase/firestore';


const initialState = {
    productsList: [],
	bestSellerList: [],
	newArrivalList: [],
};



export const fetchProductList = createAsyncThunk('/shop', async () => {

	try {
		const response = await getDocs(collection(db, 'products'))
		return response.docs.map(doc => doc.data())
		
        
	}
	catch (error) {}
	return []
})

export const fetchNewArrivalList = createAsyncThunk('/newArrivals', async () => {

	try {
		const response = await getDocs(collection(db, 'products'))
		return response.docs.map(doc => doc.data())
		
        
	}
	catch (error) {}
	return []
})

export const fetchBestSellersList = createAsyncThunk('/bestSellers', async () => {

	try {
		const response = await getDocs(query(collection(db, "products"), limit(8)))
		return response.docs.map(doc => doc.data())
		
        
	}
	catch (error) {}
	return []
})







export const products = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		setProductList: (state, action)=>{
			state.productsList = action.payload
		},
		
		
	},
	extraReducers(builder) {
		builder		
			.addCase(fetchProductList.fulfilled, (state, action)=>({...state, productsList:action.payload}))
			.addCase(fetchNewArrivalList.fulfilled, (state, action)=>({...state, newArrivalList:action.payload}))
			.addCase(fetchBestSellersList.fulfilled, (state, action)=>({...state, bestSellerList:action.payload}))

			
			
	},
})

export const { setProductList } = products.actions
export default products.reducer

