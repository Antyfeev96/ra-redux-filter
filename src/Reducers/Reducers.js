import { createSlice, nanoid } from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
  name: 'toolkit',

  initialState: { 
    name: '', 
    price: '', 
    editedId: null,
    filterString: '',
    list: [
      { id: nanoid(), name: "Замена стекла", price: 21000 },
      { id: nanoid(), name: "Замена дисплея", price: 25000 },
    ],
    filteredList:[
      { id: nanoid(), name: "Замена стекла", price: 21000 },
      { id: nanoid(), name: "Замена дисплея", price: 25000 },
    ],
  },

  reducers: {
    addItem(state, action) {
      const { name, price } = action.payload;
      state.list.push({ id: nanoid(), name, price })
    },
    editItem(state, action) {
      const { name, value } = action.payload;
      state.name = name;
      state.price = value
    },
    removeItem(state, action) {
      const id = action.payload;
      state.list = state.list.filter(item => item.id !== id)
    },
    changeInputField(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    changeEditedId(state, action) {
      state.editedId = action.payload;
    },
    saveEditedItem(state, action) {
      const { name, price } = action.payload;
      state = state.list.map(item => {
        if (item.id === state.editedId) {
          item.name = name;
          item.price = price
        }
        return item;
      })
    },
    applyFilter(state, action) {
      state.filterString = action.payload.toLowerCase();
    },
    changeFilteredList(state) {
      state.filteredList = [...state.list.filter(item => item.name.toLowerCase().includes(state.filterString))];
    }
  }
})


export default toolkitSlice.reducer;
export const { addItem, editItem, removeItem, changeInputField, changeEditedId, saveEditedItem, applyFilter, changeFilteredList } = toolkitSlice.actions;
