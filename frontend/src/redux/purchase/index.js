import {createSlice} from "@reduxjs/toolkit";


const purchaseSlice = createSlice({
    name: "purchases",
    initialState:{purchases:[], selectedPurchase: {}, isFetching:false},
    reducers:{
        setPurchases(state,action){
            state.purchases = action.payload?.data;

        },
        setSelectedPurchase(state, action){
            state.selectedPurchase = action.payload;
        },
        setIsFetching(state, action){
            state.isFetching = action.payload;
        },
    },
});
 
export const purchaseActions = purchaseSlice.actions;

export default purchaseSlice.reducer;