import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const allCharactersRequest = createAsyncThunk(
  "characters/loadAllCharacters",
  async () => {
    const res = await fetch("/api/characters");
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: { userCharacters: null, allCharacters: null },
  reducers: {
    loadAllCharacters: (state, action) => {
        state.allCharacters = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return { ...state, allCharacters: action.payload };
    });
    builder.addCase(loadAllCharacters.fulfilled, (state, action) => {
        state.allCharacters = action.payload
    });
  },
});
