import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";
import { HydrateAction } from "../../lib/hydrateAction";

// interface HydrateAction extends PayloadAction {
//     payload: AppState; // Change this to match your AppState type
//     type: typeof HYDRATE;
//   }

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
    builder.addCase(HYDRATE, (state, action: HydrateAction) => {
      return { ...state, allCharacters: action.payload.characters.allCharacters };
    });
    builder.addCase(allCharactersRequest.fulfilled, (state, action) => {
        state.allCharacters = action.payload
    });
  },
});

export const allCharactersState = (state: AppState) => state.characters.allCharacters
export const userCharactersState = (state: AppState) => state.characters.userCharacters
