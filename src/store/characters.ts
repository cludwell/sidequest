import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";
import { HydrateAction } from "../../lib/hydrateAction";
import { CharactersState } from "../../lib/charactersState";
import { stat } from "fs";

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
  async (userId: number) => {
    const res = await fetch(`/api/characters/${userId}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  }
);

export const newCharacterRequest = createAsyncThunk(
  "characters/new",
  async ({ charData }) => {
    const res = await fetch("/api/characters/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        charData,
      }),
    });
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
    builder.addCase(newCharacterRequest.fulfilled, (state, action) => {
      state.userCharacters = {
        ...state.userCharacters,
        [action.payload.id]: action.payload,
      };
    });
    builder.addCase(newCharacterRequest.rejected, (state) => {
      state.userCharacters = {...state.userCharacters}
    })
  },
});

export const allCharactersState = (state: AppState) =>
  state.characters.allCharacters;
export const userCharactersState = (state: AppState) =>
  state.characters.userCharacters;
