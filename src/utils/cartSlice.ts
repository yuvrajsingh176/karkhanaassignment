import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  items: CartItem[];
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: { payload: CartItem }) => {
      const addedProduct = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === addedProduct.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...addedProduct,
          quantity: 1,
        });
      }
    },
    removeProduct: (state, action: { payload: CartItem }) => {
      const addedProduct = action.payload;
      const productId = addedProduct.id;
      const updatedItems = state.items
        .map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              quantity: product.quantity > 0 ? product.quantity - 1 : 0,
            };
          }
          return product;
        })
        .filter((items) => items.quantity > 0);
      return { ...state, items: updatedItems };
    },
    deleteFromCard: (state, action: { payload: number }) => {
      const productId = action.payload;
      console.log(productId);

      const updatedItems = state.items.filter((item) => item.id !== productId);
      console.log(updatedItems);

      return { ...state, items: updatedItems };
    },
  },
});

export const { addProduct, removeProduct, deleteFromCard } = cartSlice.actions;
export default cartSlice.reducer;
