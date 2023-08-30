import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";
import { HydrateAction } from "../../lib/hydrateAction";
import { CharactersState } from "../../lib/charactersState";


type CharactersSliceState = {
  userCharacters: CharactersState | null;
  allCharacters: CharactersState | null;
};

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

export const userCharactersRequest = createAsyncThunk(
  `characters/userCharacters`,
  async (userId) => {
    const res = await fetch(`/api/characters/${userId}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

const initialState: CharactersSliceState = {
  userCharacters: null,
  allCharacters: null,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState: initialState,
  reducers: {
    loadAllCharacters: (state, action) => {
      state.allCharacters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: HydrateAction) => {
      return {
        ...state,
        allCharacters: action.payload.characters.allCharacters,
      };
    });
    builder.addCase(allCharactersRequest.fulfilled, (state, action) => {
      state.allCharacters = action.payload;
    });
    builder.addCase(allCharactersRequest.rejected, (state) => {
      state.allCharacters = null;
    });
    builder.addCase(userCharactersRequest.fulfilled, (state, action) => {
      state.userCharacters = action.payload;
    });
    builder.addCase(userCharactersRequest.rejected, (state) => {
      state.userCharacters = null;
    });
  },
});

export const allCharactersState = (state: AppState) =>
  state.characters.allCharacters;
export const userCharactersState = (state: AppState) =>
  state.characters.userCharacters;
