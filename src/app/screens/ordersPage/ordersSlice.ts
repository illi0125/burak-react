import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// 1. Define the shape of your orders state
interface OrdersState {
  items: any[];
  loading: boolean;
}

const initialState: OrdersState = {
  items: [],
  loading: false,
};

// 2. Create the slice
export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    // Example action to add an order
    addOrder: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
    },
  },
});

// 3. Export the actions and the reducer
export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;