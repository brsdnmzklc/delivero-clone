import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      state.items = newBasket;
    },
    removeAllFromBasket: (state, action) => {
      const newBasket = [];
      state.items.filter((item) => {
        if (item.id !== action.payload.id) {
          newBasket.push(item);
        }
      });
      state.items = newBasket;
    },
    resetBasket: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToBasket,
  removeFromBasket,
  removeAllFromBasket,
  resetBasket,
} = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal = (state) =>
  state.basket.items.reduce((acc, item) => {
    acc = acc + item.price;
    return acc;
  }, 0);
export default basketSlice.reducer;
